import { sanitizeClientMessages } from "@/src/domain/chat/types";
import { createHermesChatCompletionStream, HermesConfigurationError } from "@/src/infrastructure/hermes/hermesClient";
import { prisma } from "@/src/infrastructure/db/prisma";
import { getCurrentUser } from "@/src/infrastructure/auth/session";
import { LAUNCHHIVE_SYSTEM_PROMPT } from "@/src/domain/launchhive/systemPrompt";
import { z } from "zod";
import { logger } from "@/src/utils/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ChatSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string(),
  })),
  conversationId: z.string(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON request body" }, { status: 400 });
  }

  const result = ChatSchema.safeParse(body);
  if (!result.success) {
    logger.warn("Invalid chat request payload", { userId: user.id, errors: result.error.format() });
    return Response.json({ error: "Invalid request payload", details: result.error.format() }, { status: 400 });
  }

  const { messages, conversationId } = result.data;
  const sanitizedMessages = sanitizeClientMessages(messages);

  if (!sanitizedMessages) {
    return Response.json({ error: "Invalid chat messages" }, { status: 400 });
  }

  // Find conversation and verify ownership
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId, userId: user.id },
    include: { persona: true },
  });

  if (!conversation) {
    logger.warn("Conversation not found", { conversationId, userId: user.id });
    return Response.json({ error: "Conversation not found" }, { status: 404 });
  }

  // Save user message for durability
  const lastUserMessage = sanitizedMessages[sanitizedMessages.length - 1];
  if (lastUserMessage && lastUserMessage.role === "user") {
    await prisma.message.create({
      data: {
        conversationId,
        role: "user",
        content: lastUserMessage.content,
      },
    });
  }

  // Prepare full prompt context
  let fullSystemPrompt = LAUNCHHIVE_SYSTEM_PROMPT;

  // Add demo startup context (Hardening: ensure personas are seeded)
  const startups = await prisma.persona.findMany({
    where: { personaType: "startup" },
  });

  if (startups.length > 0) {
    fullSystemPrompt += `\n\nAvailable demo startup opportunities:\n${startups.map((s: any, i: number) => `${i + 1}. ${s.name} — ${s.title}, ${s.stagePreference}, needs ${s.goals}.`).join('\n')}`;
  }

  if (conversation.persona) {
    fullSystemPrompt += `\n\nYou are helping ${conversation.persona.name}. 
    Background: ${conversation.persona.background}
    Goals: ${conversation.persona.goals}
    Skills: ${conversation.persona.skills}
    Industries: ${conversation.persona.industries}
    Availability: ${conversation.persona.availability}
    Risk Tolerance: ${conversation.persona.riskTolerance}
    Mission Interests: ${conversation.persona.missionInterests}`;
  }

  logger.info("Initiating Hermes chat stream", { conversationId, userId: user.id, persona: conversation.persona?.name });

  try {
    const hermesRes = await createHermesChatCompletionStream(sanitizedMessages, fullSystemPrompt);

    if (!hermesRes.ok || !hermesRes.body) {
      const upstreamMessage = await hermesRes.text().catch(() => "");
      logger.error("Hermes API request failed", {
        status: hermesRes.status,
        upstreamMessage,
        conversationId,
      });
      return Response.json({ error: "Hermes API request failed" }, { status: hermesRes.status || 502 });
    }

    return new Response(hermesRes.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (error: any) {
    if (error instanceof HermesConfigurationError) {
      logger.error("Hermes configuration error", { error: error.message });
      return Response.json({ error: error.message }, { status: 500 });
    }

    if (error.code === 'ECONNREFUSED' || error.message?.includes('fetch failed')) {
      logger.warn("Hermes gateway is offline", { conversationId });
      return Response.json({ 
        error: "LaunchHive’s local Hermes concierge is offline. Start Hermes with `hermes gateway`, then refresh." 
      }, { status: 503 });
    }
    
    logger.error("Unexpected LaunchHive chat proxy error", { error: error.message, stack: error.stack });
    return Response.json({ error: "Unexpected LaunchHive chat proxy error" }, { status: 500 });
  }
}