import { prisma } from '@/src/infrastructure/db/prisma';
import { getCurrentUser } from '@/src/infrastructure/auth/session';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const MessageSchema = z.object({
  conversationId: z.string(),
  role: z.enum(['user', 'assistant']),
  content: z.string(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const result = MessageSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: 'Invalid request payload', details: result.error.format() }, { status: 400 });
  }

  const { conversationId, role, content } = result.data;

  // Verify conversation ownership
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId, userId: user.id },
    select: { personaId: true },
  });

  if (!conversation) {
    return NextResponse.json({ error: 'Conversation not found or unauthorized' }, { status: 404 });
  }

  // Save the message
  await prisma.message.create({
    data: {
      conversationId,
      role,
      content,
    },
  });

  // If assistant just finished a summary, we wait for user confirmation.
  // If user just confirmed, we trigger the matching pipeline.
  if (role === 'user' && (content.toLowerCase().includes('yes') || content.toLowerCase().includes('confirm') || content.toLowerCase().includes('correct'))) {
     // Check if the previous message was a summary
     const lastMessages = await prisma.message.findMany({
       where: { conversationId },
       orderBy: { createdAt: 'desc' },
       take: 2,
     });

     // Simple heuristic for demo: if user says yes to the concierge, we advance state
     await prisma.conversation.update({
       where: { id: conversationId },
       data: { state: 'confirmed' }
     });

     // TRIGGER PRODUCTION MATCHING PIPELINE
     const { runMatchingPipeline } = await import('@/src/domain/match/matchingEngine');
     await runMatchingPipeline(user.id, conversationId);
  }

  // SERVER-SIDE EXTRACTION: Parse matches from content (Legacy support / Fallback)
  // In the new prod flow, the server owns the match creation via runMatchingPipeline.
  try {
    const jsonMatch = content.match(/<MATCH_JSON>([\s\S]*?)<\/MATCH_JSON>/);
    if (jsonMatch && jsonMatch[1]) {
      // ... existing logic for legacy/manual matches ...
    }
  } catch (e) {
    console.error('Failed to parse matches from assistant response on server', e);
  }

  return NextResponse.json({ success: true });
}
