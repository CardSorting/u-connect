import { prisma } from '@/src/infrastructure/db/prisma';
import { deleteSession } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // 1. Delete all sessions
    await prisma.session.deleteMany({});
    
    // 2. Delete all match results
    await prisma.matchResult.deleteMany({});
    
    // 3. Delete all messages
    await prisma.message.deleteMany({});
    
    // 4. Delete all conversations
    await prisma.conversation.deleteMany({});
    
    // 5. Delete all users (optional, but keep seeded personas)
    await prisma.user.deleteMany({});

    // 6. Clear local session cookie
    await deleteSession();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Reset error:', error);
    return NextResponse.json({ error: 'Failed to reset demo data' }, { status: 500 });
  }
}
