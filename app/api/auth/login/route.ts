import { prisma } from '@/src/infrastructure/db/prisma';
import { createSession } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { name, email },
      });
    } else {
      // Update name if it changed
      await prisma.user.update({
        where: { id: user.id },
        data: { name },
      });
    }

    await createSession(user.id);

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
