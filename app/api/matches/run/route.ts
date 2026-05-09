import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/src/infrastructure/auth/session";
import { prisma } from "@/src/infrastructure/db/prisma";
import { runMatchingPipeline } from "@/src/domain/match/matchingEngine";
import { handoffIntakeToAffinity } from "@/src/lib/affinity";
import { recordSquarespaceIntakeMilestone } from "@/src/lib/squarespace";
import { logger } from "@/src/utils/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RunMatchesSchema = z.object({
  conversationId: z.string().min(1),
});

function parseJsonArray(value?: string | null): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const result = RunMatchesSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid request payload", details: result.error.format() }, { status: 400 });
  }

  const { conversationId } = result.data;
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId, userId: user.id },
  });

  if (!conversation) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
  }

  try {
    const pipelineResult = await runMatchingPipeline(user.id, conversationId);
    const intake = await prisma.intakeProfile.findUnique({ where: { conversationId } });

    const [affinityResult, squarespaceResult] = await Promise.all([
      handoffIntakeToAffinity({
        user: {
          name: user.name,
          email: user.email,
          linkedinUrl: user.linkedinUrl,
          roleType: user.roleType,
        },
        conversationId,
        intake: intake
          ? {
              stageEvidence: intake.stageEvidence,
              commercializationBlocker: intake.commercializationBlocker,
              requestedOutcome: intake.requestedOutcome,
              readinessScore: intake.readinessScore,
              regulatoryExposure: parseJsonArray(intake.regulatoryExposure),
              missingInfoFlags: parseJsonArray(intake.missingInfoFlags),
            }
          : undefined,
      }),
      recordSquarespaceIntakeMilestone({
        firstName: user.name.split(" ")[0] || "Unknown",
        lastName: user.name.split(" ").slice(1).join(" ") || "User",
        email: user.email,
        lifecycleStage: pipelineResult.success ? "match_ready" : "intake_verified",
        tags: [
          "Matching requested",
          pipelineResult.success ? "Match ready" : "Needs prep",
        ],
      }),
    ]);

    if (!affinityResult.ok) {
      logger.warn("Affinity intake handoff did not complete", {
        conversationId,
        reason: affinityResult.reason,
        skipped: affinityResult.skipped,
      });
    }

    if (!squarespaceResult.ok) {
      logger.warn("Squarespace milestone sync did not complete", {
        conversationId,
        reason: squarespaceResult.reason,
        skipped: squarespaceResult.skipped,
      });
    }

    return NextResponse.json({
      ...pipelineResult,
      integrations: {
        affinity: affinityResult.ok ? "synced" : affinityResult.skipped ? "not_configured" : "failed",
        squarespace: squarespaceResult.ok ? "synced" : squarespaceResult.skipped ? "not_configured" : "failed",
      },
    });
  } catch (error) {
    logger.error("Matching pipeline failed", {
      conversationId,
      userId: user.id,
      error: error instanceof Error ? error.message : error,
    });

    return NextResponse.json(
      { error: "Matching pipeline failed", detail: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
