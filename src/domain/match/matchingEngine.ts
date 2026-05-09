import { z } from 'zod';
import { prisma } from '@/src/infrastructure/db/prisma';
import { createHermesChatCompletion } from '@/src/infrastructure/hermes/hermesClient';
import { logger } from '@/src/utils/logger';
import { auditLog } from '@/src/infrastructure/logging/audit';
import { applyHardFilters } from './hardFilters';
import { evaluateReadiness, shouldRevealMatches, getPrepRecommendations } from './readinessService';
import { MatchReason, MatchRisk, IntakeProfileV2 } from './types';

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
  DETECT: Stage evidence, technical maturity (0-1), regulatory exposure, blockers, and missing info.
  SCHEMA: ${JSON.stringify(IntakeProfileSchema.shape)}
  OUTPUT ONLY JSON.`;

  const res = await createHermesChatCompletion(messages, prompt);
  return JSON.parse(res);
}

async function generateMatchEvidenceWithLLM(profile: any, candidates: any[]) {
  const prompt = `Evaluate the match fit between the founder profile and experts.
  FOCUS: Expertise fit against the specific blocker, timing fit, and strategic risks.
  SCHEMA: ${JSON.stringify(MatchOutputSchema.shape)}
  OUTPUT ONLY JSON.`;

  const res = await createHermesChatCompletion([], prompt);
  return JSON.parse(res);
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
  const recs = [];
  if (profile.technicalMaturity < 0.3) recs.push("Increase technical maturity evidence.");
  if (profile.missingInfoFlags.length > 0) recs.push(...profile.missingInfoFlags);
  return recs;
}
