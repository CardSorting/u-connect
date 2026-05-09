import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';
import { createAffinityOpportunity } from '@/src/lib/affinity';
import { logger } from '@/src/utils/logger';

/**
 * Admin Concierge Command Center API
 */
export async function GET() {
  const user = await getCurrentUser();
  // TODO: Check for ADMIN role specifically
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const matches = await prisma.matchResult.findMany({
    where: { status: 'PENDING_CONCIERGE_REVIEW' },
    include: { 
      persona: true,
      user: {
        select: { id: true, name: true, email: true }
      },
    },
    orderBy: { score: 'desc' },
  });

  return NextResponse.json(matches);
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { matchId, action, rationale } = await req.json();

  if (!rationale && action === 'APPROVE') {
    // In V2, overrides/approvals should ideally have a note for the learning loop
  }

  let newStatus: any;
  if (action === 'APPROVE') {
    newStatus = 'RECOMMENDED';
  } else if (action === 'REJECT') {
    newStatus = 'DISMISSED';
  } else if (action === 'NEEDS_INTAKE') {
    // Logic to trigger follow-up intake
    newStatus = 'CANDIDATE'; 
  } else {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }

  const updatedMatch = await prisma.matchResult.update({
    where: { id: matchId },
    data: { 
      status: newStatus,
      rationale: rationale || null,
    },
    include: { user: true, persona: true }
  });

  // Deep Integration: Push approved matches to Affinity Deal Flow
  if (action === 'APPROVE') {
    try {
      const affinityResult = await createAffinityOpportunity({
        name: `Match: ${updatedMatch.user.name} <> ${updatedMatch.persona?.name || updatedMatch.personaId}`,
        list_id: parseInt(process.env.AFFINITY_DEAL_FLOW_LIST_ID || "0", 10),
        person_ids: [], // Would map from a lookup table in a full prod scenario
        organization_ids: [],
        fields: {
          launchHiveMatchId: updatedMatch.id,
          score: updatedMatch.score,
          readinessScore: updatedMatch.readinessScore,
          status: newStatus,
          rationale: rationale || null,
        },
      });
      if (affinityResult.ok) {
        logger.info("Successfully pushed approved match to Affinity CRM", { matchId, affinityId: affinityResult.id });
      } else {
        logger.warn("Approved match was not pushed to Affinity CRM", { matchId, reason: affinityResult.reason, skipped: affinityResult.skipped });
      }
    } catch (err) {
      logger.error("Failed to push opportunity to Affinity CRM", { error: err, matchId });
    }
  }

  return NextResponse.json({ success: true, status: newStatus });
}
