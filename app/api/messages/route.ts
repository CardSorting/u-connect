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

  // SERVER-SIDE EXTRACTION: Parse matches from content
  // This prevents client-side injection of fake matches.
  try {
    const jsonMatch = content.match(/<MATCH_JSON>([\s\S]*?)<\/MATCH_JSON>/);
    if (jsonMatch && jsonMatch[1]) {
      const parsed = JSON.parse(jsonMatch[1].trim());
      const matches = parsed.matches;

      if (matches && Array.isArray(matches)) {
        for (const m of matches) {
          await prisma.matchResult.create({
            data: {
              userId: user.id,
              conversationId,
              personaId: conversation.personaId,
              matchName: m.matchName || 'Unknown',
              matchType: m.matchType || '',
              sector: m.sector || '',
              startupStage: m.startupStage || '',
              confidence: m.confidence || '',
              explanation: m.explanation || '',
              gaps: m.gaps || '',
              nextStep: m.nextStep || '',
              rawJson: JSON.stringify(m),
            },
          });
        }
      }
    }
  } catch (e) {
    console.error('Failed to parse matches from assistant response on server', e);
    // We don't fail the whole request if parsing fails, but we log it.
  }

  return NextResponse.json({ success: true });
}
