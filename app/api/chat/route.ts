import { sanitizeClientMessages } from "@/src/domain/chat/types";
import { createHermesChatCompletionStream, HermesConfigurationError } from "@/src/infrastructure/hermes/hermesClient";
import { prisma } from "@/src/infrastructure/db/prisma";
import { getCurrentUser } from "@/src/infrastructure/auth/session";
import { LAUNCHHIVE_SYSTEM_PROMPT } from "@/src/domain/launchhive/systemPrompt";
import { z } from "zod";
import { logger } from "@/src/utils/logger";
import { syncPersonaToAffinity } from "@/src/lib/affinity";
import { syncUserToSquarespaceContacts } from "@/src/lib/squarespace";

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

  // Intercept LinkedIn URLs and Resume Uploads to populate Persona and User profile safely
  if (lastUserMessage && lastUserMessage.role === "user") {
    try {
      // Helper to sanitize strings to prevent DB corruption (removes null bytes, limits length)
      const sanitize = (text: string, maxLen: number) => text.replace(/\0/g, '').substring(0, maxLen).trim();

      // 1. Check for Resume Upload
      if (lastUserMessage.content.includes("[User uploaded resume:")) {
        const safeResume = sanitize(lastUserMessage.content, 50000); // 50k chars max
        const safeBackground = sanitize(lastUserMessage.content, 2000); // 2k chars max for Persona

        await prisma.$transaction(async (tx) => {
          await tx.user.update({
            where: { id: user.id },
            data: { resumeText: safeResume }
          });

          const currentConv = await tx.conversation.findUnique({ where: { id: conversationId } });
          if (!currentConv?.personaId) {
            const newPersona = await tx.persona.create({
              data: {
                name: user.name || "Unknown User",
                personaType: "Uncategorized",
                title: "Professional",
                background: safeBackground,
                skills: "Pending",
                industries: "Pending",
                goals: "Pending",
              }
            });
            await tx.conversation.update({
              where: { id: conversationId },
              data: { personaId: newPersona.id }
            });
          } else {
            const existingPersona = await tx.persona.findUnique({ where: { id: currentConv.personaId } });
            if (existingPersona) {
              await tx.persona.update({
                where: { id: currentConv.personaId },
                data: { background: safeBackground }
              });
            }
          }
        });
        logger.info("Saved resume text and populated persona atomically", { userId: user.id });
        
        // Deep Integration: Sync to Squarespace Contacts
        const squarespaceResult = await syncUserToSquarespaceContacts({
          firstName: user.name?.split(' ')[0] || "Unknown",
          lastName: user.name?.split(' ').slice(1).join(' ') || "User",
          email: user.email,
          source: "intake",
          lifecycleStage: "intake_started",
          tags: ["Resume provided"],
        });
        if (!squarespaceResult.ok) {
          logger.warn("Squarespace contact sync did not complete", { reason: squarespaceResult.reason, skipped: squarespaceResult.skipped });
        }
      }

      // 2. Check for LinkedIn URL
      const linkedinRegex = /https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?/;
      const urlMatch = lastUserMessage.content.match(linkedinRegex);
      
      if (urlMatch) {
        const safeUrl = sanitize(urlMatch[0], 500);

        const { fetchLinkedInProfile } = await import("@/src/infrastructure/linkedin/fetchProfile");
        const profileRes = await fetchLinkedInProfile(safeUrl);
        
        if (profileRes.success && profileRes.data) {
          const title = sanitize(profileRes.data.headline || "Professional", 255);
          const backgroundData = sanitize((profileRes.data.summary || "") + "\n\nExperiences: " + JSON.stringify(profileRes.data.experiences), 2000);

          await prisma.$transaction(async (tx) => {
            await tx.user.update({
              where: { id: user.id },
              data: { linkedinUrl: safeUrl }
            });

            const currentConv = await tx.conversation.findUnique({ where: { id: conversationId } });
            if (!currentConv?.personaId) {
              const newPersona = await tx.persona.create({
                data: {
                  name: user.name || "Unknown User",
                  personaType: "Uncategorized",
                  title,
                  background: backgroundData,
                  skills: "Pending Extraction",
                  industries: "Deep Tech",
                  goals: "Ecosystem Integration"
                }
              });
              await tx.conversation.update({
                where: { id: conversationId },
                data: { personaId: newPersona.id }
              });
            } else {
               const existingPersona = await tx.persona.findUnique({ where: { id: currentConv.personaId } });
               if (existingPersona) {
                 await tx.persona.update({
                   where: { id: currentConv.personaId },
                   data: { title, background: backgroundData }
                 });
               }
            }
          });
          logger.info("Saved LinkedIn URL and populated persona atomically", { userId: user.id, url: safeUrl });
          
          // Deep Integration: Sync to Affinity CRM
          const affinityResult = await syncPersonaToAffinity({
            first_name: user.name?.split(' ')[0] || "Unknown",
            last_name: user.name?.split(' ').slice(1).join(' ') || "User",
            emails: [user.email],
            organization_names: profileRes.data.experiences?.[0]?.company ? [profileRes.data.experiences[0].company] : [],
            linkedin_url: safeUrl,
            tags: ["LinkedIn provided"],
          });
          if (!affinityResult.ok) {
            logger.warn("Affinity person sync did not complete", { reason: affinityResult.reason, skipped: affinityResult.skipped });
          }

          fullSystemPrompt += `\n\n[SYSTEM INJECTION: The user just provided their LinkedIn URL. Extracted profile data:\nHeadline: ${profileRes.data.headline}\nSummary: ${profileRes.data.summary}\nExperiences: ${JSON.stringify(profileRes.data.experiences)}\n\nCRITICAL INSTRUCTION: Analyze this data immediately. Acknowledge their specific background and move directly to Phase 2 (Categorization) and Phase 3 (Deep Investigation) based on this data.]`;
        } else {
          // If profile fetch fails, still try to save the URL to the user profile
          await prisma.user.update({
            where: { id: user.id },
            data: { linkedinUrl: safeUrl }
          });
        }
      }
    } catch (err) {
      // Catch all database/population errors so the chat stream does not crash
      logger.error("Failed to populate user persona from intake data safely", { userId: user.id, error: err });
    }
  }

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
