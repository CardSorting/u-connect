import { prisma } from '@/src/infrastructure/db/prisma';
import { IntakeProfileV2 } from './types';

export type HardFilterResult = {
  allowed: boolean;
  reason?: string;
};

/**
 * Hard Filters V2: Pre-reasoning eligibility gate.
 */
export async function applyHardFilters(userId: string, targetPersonaId: string, profile: IntakeProfileV2): Promise<HardFilterResult> {
  const targetPersona = await prisma.persona.findUnique({
    where: { id: targetPersonaId },
  });

  if (!targetPersona) return { allowed: false, reason: "Target persona not found" };

  // 1. Availability & Capacity Check
  if (targetPersona.availability === "unavailable") {
    return { allowed: false, reason: "Target explicitly unavailable" };
  }
  if (targetPersona.currentLoad >= targetPersona.capacity) {
    return { allowed: false, reason: "Target capacity exceeded" };
  }

  // 2. Duplicate Recent Intro (30-day cooldown)
  const recentMatch = await prisma.matchResult.findFirst({
    where: {
      userId,
      personaId: targetPersonaId,
      createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    },
  });

  if (recentMatch && ["REVEALED", "INTRO_REQUESTED", "INTRO_ACCEPTED"].includes(recentMatch.status)) {
    return { allowed: false, reason: "Duplicate intro cooldown (30 days)" };
  }

  // 3. Rate Limits (Max 5 request per week)
  const weeklyIntros = await prisma.matchResult.count({
    where: {
      userId,
      status: { in: ["INTRO_REQUESTED", "INTRO_ACCEPTED"] },
      createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
    },
  });

  if (weeklyIntros >= 5) return { allowed: false, reason: "Weekly intro rate limit exceeded" };

  // 4. Conflict of Interest (COI) Detection
  if (targetPersona.organization && profile.commercializationBlocker.toLowerCase().includes(targetPersona.organization.toLowerCase())) {
     return { allowed: false, reason: "Potential Conflict of Interest detected" };
  }

  return { allowed: true };
}
