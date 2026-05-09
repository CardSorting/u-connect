import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const conversations = await prisma.conversation.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: 'desc' },
    include: { persona: true }
  });

  return NextResponse.json(conversations);
}

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

  return NextResponse.json(conversation);
}
