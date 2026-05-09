import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const matches = await prisma.matchResult.findMany({
    where: { userId: user.id },
    include: { persona: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(matches);
}
