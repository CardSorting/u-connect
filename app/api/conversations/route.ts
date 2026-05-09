import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { personaId } = await req.json();

  let persona = null;
  if (personaId) {
    persona = await prisma.persona.findUnique({
      where: { id: personaId },
    });
  }

  const conversation = await prisma.conversation.create({
    data: {
      userId: user.id,
      personaId: personaId || null,
      title: persona ? `Chat as ${persona.name}` : 'New Intake',
      state: 'intake',
    },
  });

  // If there's a persona, we might want to add a hidden context message
  // but we can also just handle that in the /api/chat logic when it sees the personaId.

  return NextResponse.json(conversation);
}
