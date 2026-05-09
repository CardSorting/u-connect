import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';
import { auditLog } from '@/src/infrastructure/logging/audit';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  // HARDENED RULE: Check for explicit authorization via MatchResult
  const match = await prisma.matchResult.findUnique({
    where: { 
      userId_personaId: {
        userId: user.id,
        personaId: id,
      }
    },
    select: {
      id: true,
      status: true,
      revealAuthorizedAt: true,
      revokedAt: true,
    }
  });

  // Check if match is revoked or not revealed
  const isAuthorized = match && 
                       match.revokedAt === null && 
                       ['REVEALED', 'RECOMMENDED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED', 'MEETING_SCHEDULED', 'OUTCOME_RECORDED'].includes(match.status);

  if (!isAuthorized) {
    await auditLog({
      actorId: user.id,
      action: "PERSONA_ACCESS_DENIED",
      resourceType: "persona",
      resourceId: id,
      metadata: { reason: "No active authorized match" }
    });
    return NextResponse.json({ error: 'Profile locked. Match authorization required.' }, { status: 403 });
  }

  const persona = await prisma.persona.findUnique({
    where: { id },
  });

  if (!persona) {
    return NextResponse.json({ error: 'Persona not found' }, { status: 404 });
  }

  // Audit successful reveal
  await auditLog({
    actorId: user.id,
    action: "PROFILE_REVEALED",
    resourceType: "persona",
    resourceId: id,
    metadata: { matchId: match.id }
  });

  return NextResponse.json(persona);
}
