import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id: matchId } = await params;
  const { result, notes, founderRating, expertRating } = await req.json();

  const outcome = await prisma.matchOutcome.upsert({
    where: { matchId },
    update: {
      result,
      notes,
      founderRating,
      expertRating,
      meetingOccurredAt: new Date(), // Assume meeting occurred if recording outcome
    },
    create: {
      matchId,
      result,
      notes,
      founderRating,
      expertRating,
      meetingOccurredAt: new Date(),
    },
  });

  await prisma.matchResult.update({
    where: { id: matchId },
    data: { status: 'OUTCOME_RECORDED' },
  });

  // Update Reputation logic
  const match = await prisma.matchResult.findUnique({
    where: { id: matchId },
    include: { user: true }
  });

  if (match) {
    await updateReputation(match.userId);
  }

  return NextResponse.json(outcome);
}

async function updateReputation(userId: string) {
  const outcomes = await prisma.matchOutcome.findMany({
    where: { match: { userId } }
  });

  const successCount = outcomes.filter(o => 
    ["PILOT", "INVESTMENT", "ACTIVE_COLLABORATION", "PARTNERSHIP"].includes(o.result)
  ).length;

  const penaltyCount = outcomes.filter(o => 
    ["TRUST_VIOLATION", "NO_SHOW"].includes(o.result)
  ).length;

  const qualityScore = outcomes.length > 0 ? (successCount - (penaltyCount * 0.5)) / outcomes.length : 0;
  const clampedScore = Math.max(0, Math.min(1, qualityScore));

  await prisma.reputationProfile.upsert({
    where: { userId },
    update: {
      introQualityScore: clampedScore,
      trustTier: penaltyCount > 1 ? "RESTRICTED" : (clampedScore > 0.8 ? "TRUSTED" : (clampedScore > 0.4 ? "VERIFIED" : "NEW")),
    },
    create: {
      userId,
      introQualityScore: clampedScore,
      trustTier: clampedScore > 0.8 ? "TRUSTED" : (clampedScore > 0.4 ? "VERIFIED" : "NEW"),
    }
  });
}
