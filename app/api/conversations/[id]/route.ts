import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  const conversation = await prisma.conversation.findUnique({
    where: { id, userId: user.id },
    include: {
      messages: {
        orderBy: { createdAt: 'asc' },
      },
      persona: true,
    },
  });

  if (!conversation) {
    return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
  }

  return NextResponse.json(conversation);
}
