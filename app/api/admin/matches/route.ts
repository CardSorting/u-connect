import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

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

  await prisma.matchResult.update({
    where: { id: matchId },
    data: { 
      status: newStatus,
      rationale: rationale || null,
    },
  });

  return NextResponse.json({ success: true, status: newStatus });
}
