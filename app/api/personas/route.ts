import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const personas = await prisma.persona.findMany({
    where: {
      personaType: { not: 'startup' }, // Only show human personas
    },
    orderBy: { createdAt: 'asc' },
  });

  return NextResponse.json(personas);
}
