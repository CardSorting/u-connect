import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

/**
 * Handles identity revelation with audit logging and concierge gating.
 */
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id: matchId } = await params;
  const match = await prisma.matchResult.findUnique({
    where: { id: matchId },
    include: { persona: true }
  });

  if (!match || match.userId !== user.id) {
    return NextResponse.json({ error: 'Match not found' }, { status: 404 });
  }

  // 1. Check for Concierge Review requirement
  if (match.status === 'PENDING_CONCIERGE_REVIEW') {
    return NextResponse.json({ 
      error: 'Identity locked. This high-value introduction requires admin concierge review.',
      status: 'PENDING_CONCIERGE_REVIEW'
    }, { status: 403 });
  }

  // 2. Perform Revelation
  const updatedMatch = await prisma.matchResult.update({
    where: { id: matchId },
    data: { 
      status: 'REVEALED',
      revealedAt: new Date(),
    },
  });

  // 3. Create Audit Log
  await prisma.revealAuditLog.create({
    data: {
      userId: user.id,
      matchId: matchId,
      action: 'REVEAL',
      metadata: JSON.stringify({
        personaId: match.personaId,
        score: match.score,
      }),
    }
  });

  return NextResponse.json({ success: true, match: updatedMatch });
}
