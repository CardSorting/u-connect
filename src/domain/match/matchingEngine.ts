import { z } from 'zod';
import { prisma } from '@/src/infrastructure/db/prisma';
import { createHermesChatCompletion } from '@/src/infrastructure/hermes/hermesClient';
import { logger } from '@/src/utils/logger';
import { auditLog } from '@/src/infrastructure/logging/audit';
import { applyHardFilters } from './hardFilters';
import { getPrepRecommendations } from './readinessService';
import { IntakeProfileV2 } from './types';

export const IntakeProfileSchema = z.object({
  stageEvidence: z.enum(["idea", "prototype", "pilot", "revenue", "scale"]),
  commercializationBlocker: z.string().max(1000),
  requestedOutcome: z.string().max(1000),
  technicalMaturity: z.number().min(0).max(1),
  regulatoryExposure: z.array(z.string()),
  fundingStatus: z.string(),
  customerDiscoveryEvidence: z.string(),
  introSensitivity: z.enum(["low", "medium", "high"]),
  geographicRelevance: z.array(z.string()),
  urgencyReason: z.string(),
  missingInfoFlags: z.array(z.string()),
  readinessScore: z.number().min(0).max(1),
});

export const MatchOutputSchema = z.object({
  matches: z.array(z.object({
    candidateId: z.string(),
    expertiseFitScore: z.number().min(0).max(1),
    timingFitScore: z.number().min(0).max(1),
    reasons: z.array(z.any()), // MatchReason[]
    risks: z.array(z.any()),   // MatchRisk[]
    recommendedNextStep: z.string(),
  })),
});

/**
 * Production-Grade Matching Engine V2 (Hardened)
 * Orchestrates forensic extraction, multi-layer gating, and weighted scoring.
 */
export async function runMatchingPipeline(userId: string, conversationId: string) {
  logger.info("Starting matching pipeline V2.1", { userId, conversationId });

  // 1. Fetch conversation history
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId, userId },
    include: { messages: { orderBy: { createdAt: 'asc' } } },
  });

  if (!conversation) throw new Error("Conversation not found");

  // 2. Intake Normalization (Forensic Extraction)
  const profile = await extractForensicProfile(conversation.messages.map(m => ({ role: m.role, content: m.content })));
  
  // Persist Intake Profile
  await prisma.intakeProfile.upsert({
    where: { conversationId },
    update: {
      stageEvidence: profile.stageEvidence,
      commercializationBlocker: profile.commercializationBlocker,
      requestedOutcome: profile.requestedOutcome,
      technicalMaturity: profile.technicalMaturity,
      regulatoryExposure: JSON.stringify(profile.regulatoryExposure),
      fundingStatus: profile.fundingStatus,
      customerDiscoveryEvidence: profile.customerDiscoveryEvidence,
      introSensitivity: profile.introSensitivity,
      geographicRelevance: JSON.stringify(profile.geographicRelevance),
      urgencyReason: profile.urgencyReason,
      missingInfoFlags: JSON.stringify(profile.missingInfoFlags),
      readinessScore: profile.readinessScore,
    },
    create: {
      userId,
      conversationId,
      stageEvidence: profile.stageEvidence,
      commercializationBlocker: profile.commercializationBlocker,
      requestedOutcome: profile.requestedOutcome,
      technicalMaturity: profile.technicalMaturity,
      regulatoryExposure: JSON.stringify(profile.regulatoryExposure),
      fundingStatus: profile.fundingStatus,
      customerDiscoveryEvidence: profile.customerDiscoveryEvidence,
      introSensitivity: profile.introSensitivity,
      geographicRelevance: JSON.stringify(profile.geographicRelevance),
      urgencyReason: profile.urgencyReason,
      missingInfoFlags: JSON.stringify(profile.missingInfoFlags),
      readinessScore: profile.readinessScore,
    }
  });

  // 3. Readiness Gating (Deterministic)
  if (profile.readinessScore < 0.6) {
    const recommendations = getPrepRecommendationsFromProfile(profile);
    return { 
      success: false, 
      reason: "LOW_READINESS", 
      recommendations,
      readiness: profile.readinessScore 
    };
  }

  // 4. Candidate Retrieval & Hard Filters
  const candidates = await prisma.persona.findMany({
    take: 50,
  });

  const qualifiedCandidates = [];
  for (const candidate of candidates) {
    const filterResult = await applyHardFilters(userId, candidate.id, profile);
    if (filterResult.allowed) {
      qualifiedCandidates.push(candidate);
    }
  }

  // 5. LLM-Assisted Evidence Generation
  const matchData = await generateMatchEvidenceWithLLM(profile, qualifiedCandidates);

  // 6. Weighted Scoring Stack (Deterministic)
  const finalMatches = [];
  for (const match of matchData.matches) {
    const candidate = qualifiedCandidates.find(c => c.id === match.candidateId);
    if (!candidate) continue;

    // Hard Gates
    const eligibilityScore = 1.0; // Already passed filters
    const readinessScore = 1.0;   // Already passed gate

    // Weighted Signals
    const constraintFitScore = calculateConstraintFit(profile, candidate);
    const expertiseFitScore = match.expertiseFitScore;
    const relationshipFitScore = await calculateRelationshipFit(userId, candidate.id);
    const timingFitScore = match.timingFitScore;
    const outcomeScore = await calculateOutcomeProbability(candidate.id);

    // Final Weighted Model
    // Score = (E * R) * (C_fit^0.4 * Ex_fit^0.3 * Rel_fit^0.2 * T_fit^0.1 * O_prob^0.1)
    // Simplified for now: weighted average of signals
    const finalScore = (
      (constraintFitScore * 0.4) + 
      (expertiseFitScore * 0.3) + 
      (relationshipFitScore * 0.2) + 
      (timingFitScore * 0.05) + 
      (outcomeScore * 0.05)
    ) * eligibilityScore * readinessScore;

    // State Transition Logic
    let status: any = "CANDIDATE";
    if (finalScore > 0.85) status = "RECOMMENDED";
    if (candidate.isHighValue && finalScore > 0.75) status = "PENDING_CONCIERGE_REVIEW";

    const savedMatch = await prisma.matchResult.upsert({
      where: { userId_personaId: { userId, personaId: match.candidateId } },
      update: {
        score: finalScore,
        eligibilityScore,
        readinessScore,
        constraintFitScore,
        expertiseFitScore,
        relationshipFitScore,
        timingFitScore,
        outcomeScore,
        reasons: JSON.stringify(match.reasons),
        risks: JSON.stringify(match.risks),
        status,
        conversationId,
      },
      create: {
        userId,
        personaId: match.candidateId,
        score: finalScore,
        eligibilityScore,
        readinessScore,
        constraintFitScore,
        expertiseFitScore,
        relationshipFitScore,
        timingFitScore,
        outcomeScore,
        reasons: JSON.stringify(match.reasons),
        risks: JSON.stringify(match.risks),
        status,
        conversationId,
      }
    });

    finalMatches.push(savedMatch);
  }

  return { success: true, matchCount: finalMatches.length, matches: finalMatches };
}

async function extractForensicProfile(messages: any[]): Promise<IntakeProfileV2> {
  const prompt = `Perform a forensic extraction of the commercialization intake.
  DETECT: Stage evidence, technical maturity (0-1), regulatory exposure, blockers, requested outcome, customer proof, timing, and missing info.
  SCHEMA: ${JSON.stringify(IntakeProfileSchema.shape)}
  OUTPUT ONLY JSON with no markdown.`;

  try {
    const res = await createHermesChatCompletion(messages, prompt);
    const parsed = IntakeProfileSchema.safeParse(parseJsonObject(res));
    if (parsed.success) return parsed.data;

    logger.warn("Hermes intake extraction returned invalid schema", { issues: parsed.error.flatten() });
  } catch (error) {
    logger.warn("Hermes intake extraction failed; using deterministic fallback", {
      error: error instanceof Error ? error.message : error,
    });
  }

  return buildFallbackIntakeProfile(messages);
}

async function generateMatchEvidenceWithLLM(profile: any, candidates: any[]) {
  const candidateBriefs = candidates.slice(0, 25).map((candidate) => ({
    id: candidate.id,
    name: candidate.name,
    personaType: candidate.personaType,
    title: candidate.title,
    organization: candidate.organization,
    background: candidate.background,
    goals: candidate.goals,
    skills: candidate.skills,
    industries: candidate.industries,
    stagePreference: candidate.stagePreference,
    availability: candidate.availability,
    missionInterests: candidate.missionInterests,
  }));

  const prompt = `Evaluate match fit between the normalized intake profile and available ecosystem candidates.
  PROFILE: ${JSON.stringify(profile)}
  CANDIDATES: ${JSON.stringify(candidateBriefs)}
  FOCUS: Expertise fit against the specific blocker, timing fit, stage fit, conflicts, intro sensitivity, and strategic risks.
  Return the strongest 8 or fewer candidates. candidateId must exactly match one provided candidate id.
  SCHEMA: ${JSON.stringify(MatchOutputSchema.shape)}
  OUTPUT ONLY JSON with no markdown.`;

  try {
    const res = await createHermesChatCompletion([], prompt);
    const parsed = MatchOutputSchema.safeParse(parseJsonObject(res));
    if (parsed.success) return parsed.data;

    logger.warn("Hermes match evidence returned invalid schema", { issues: parsed.error.flatten() });
  } catch (error) {
    logger.warn("Hermes match evidence failed; using deterministic fallback", {
      error: error instanceof Error ? error.message : error,
    });
  }

  return buildFallbackMatchEvidence(profile, candidates);
}

function calculateConstraintFit(profile: any, candidate: any): number {
  let score = 1.0;
  if (candidate.stagePreference && profile.stageEvidence !== candidate.stagePreference) {
    score *= 0.7; // 30% penalty
  }
  return score;
}

async function calculateRelationshipFit(userId: string, personaId: string): Promise<number> {
  const reputation = await prisma.reputationProfile.findUnique({ where: { userId } });
  if (!reputation) return 0.8; 
  return 0.5 + (reputation.introQualityScore * 0.5);
}

async function calculateOutcomeProbability(personaId: string): Promise<number> {
  const outcomes = await prisma.matchOutcome.findMany({ where: { match: { personaId } } });
  if (outcomes.length === 0) return 0.9;
  const successCount = outcomes.filter(o => ["PILOT", "INVESTMENT", "ACTIVE_COLLABORATION"].includes(o.result)).length;
  return 0.6 + (successCount / outcomes.length) * 0.4;
}

function getPrepRecommendationsFromProfile(profile: any): string[] {
  return getPrepRecommendations(profile);
}

function parseJsonObject(raw: string) {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1];
  return JSON.parse(fenced ?? trimmed);
}

function buildFallbackIntakeProfile(messages: any[]): IntakeProfileV2 {
  const transcript = messages.map((message) => String(message.content ?? "")).join("\n").toLowerCase();
  const stageEvidence: IntakeProfileV2["stageEvidence"] =
    transcript.includes("revenue") || transcript.includes("paying") ? "revenue" :
    transcript.includes("pilot") ? "pilot" :
    transcript.includes("prototype") || transcript.includes("mvp") ? "prototype" :
    transcript.includes("scale") || transcript.includes("scaling") ? "scale" :
    "idea";

  const regulatoryExposure = [
    transcript.includes("fda") || transcript.includes("clinical") ? "clinical_or_fda" : null,
    transcript.includes("compliance") ? "compliance" : null,
    transcript.includes("ip") || transcript.includes("patent") ? "ip" : null,
  ].filter(Boolean) as string[];

  const missingInfoFlags = [
    transcript.length < 500 ? "Needs one concrete example from the dig-deeper intake." : null,
    regulatoryExposure.length === 0 ? "Confirm whether any regulatory, IP, safety, or procurement risk exists." : null,
  ].filter(Boolean) as string[];

  const readinessScore = Math.max(
    0.35,
    Math.min(
      0.82,
      (stageEvidence === "idea" ? 0.45 : 0.65) +
        (transcript.includes("customer") || transcript.includes("pilot") ? 0.1 : 0) +
        (transcript.includes("need") || transcript.includes("help") || transcript.includes("intro") ? 0.07 : 0) -
        (missingInfoFlags.length * 0.08),
    ),
  );

  return {
    stageEvidence,
    commercializationBlocker: transcript.includes("blocker")
      ? "User named a commercialization blocker during intake; review transcript for exact wording."
      : "Commercialization blocker needs confirmation from follow-up intake.",
    requestedOutcome: transcript.includes("intro") || transcript.includes("connection")
      ? "Targeted ecosystem introduction."
      : "Clarify the one connection or resource needed this quarter.",
    technicalMaturity: stageEvidence === "idea" ? 0.35 : stageEvidence === "prototype" ? 0.55 : 0.72,
    regulatoryExposure,
    fundingStatus: transcript.includes("funding") || transcript.includes("raise") ? "Funding mentioned in intake" : "Unknown",
    customerDiscoveryEvidence: transcript.includes("customer") || transcript.includes("pilot") ? "Customer or pilot evidence mentioned" : "Needs more customer-discovery evidence",
    introSensitivity: "medium",
    geographicRelevance: ["Utah"],
    urgencyReason: "User requested matching after concierge intake.",
    missingInfoFlags,
    readinessScore,
  };
}

function buildFallbackMatchEvidence(profile: IntakeProfileV2, candidates: any[]) {
  const matches = candidates.slice(0, 8).map((candidate) => {
    const candidateText = [
      candidate.personaType,
      candidate.title,
      candidate.background,
      candidate.goals,
      candidate.skills,
      candidate.industries,
      candidate.missionInterests,
    ].join(" ").toLowerCase();
    const profileText = [
      profile.commercializationBlocker,
      profile.requestedOutcome,
      profile.regulatoryExposure.join(" "),
    ].join(" ").toLowerCase();
    const overlap = profileText
      .split(/\W+/)
      .filter((token) => token.length > 4 && candidateText.includes(token)).length;
    const expertiseFitScore = Math.min(0.95, 0.58 + overlap * 0.06);

    return {
      candidateId: candidate.id,
      expertiseFitScore,
      timingFitScore: candidate.availability === "unavailable" ? 0.2 : 0.82,
      recommendedNextStep: "Concierge review should confirm fit and intro readiness before disclosure.",
      reasons: [
        {
          category: "commercialization_blocker",
          evidence: `${candidate.name} appears relevant to the requested outcome: ${profile.requestedOutcome}`,
          weight: 0.35,
          confidence: expertiseFitScore,
        },
        {
          category: "stage_fit",
          evidence: `Candidate stage preference is ${candidate.stagePreference || "flexible"}; intake stage is ${profile.stageEvidence}.`,
          weight: 0.25,
          confidence: 0.72,
        },
      ],
      risks: profile.missingInfoFlags.map((flag) => ({
        risk: "unclear_ask",
        severity: "medium",
        mitigation: flag,
      })),
    };
  });

  return { matches };
}
