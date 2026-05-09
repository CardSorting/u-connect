import { IntakeProfileV2, ReadinessScore } from './types';

/**
 * Evaluates readiness based on forensic extraction.
 */
export async function evaluateReadiness(profile: IntakeProfileV2): Promise<ReadinessScore> {
  const clarityOfAsk = profile.commercializationBlocker.length > 50 ? 1.0 : 0.5;
  const stageEvidence = ["prototype", "pilot", "revenue", "scale"].includes(profile.stageEvidence) ? 1.0 : 0.6;
  const preparationQuality = profile.technicalMaturity >= 0.5 ? 1.0 : 0.5;
  const responsiveness = 1.0; 
  const introWorthiness = profile.readinessScore;

  return {
    clarityOfAsk,
    stageEvidence,
    preparationQuality,
    responsiveness,
    introWorthiness,
    overall: introWorthiness,
  };
}

export function shouldRevealMatches(readiness: ReadinessScore): boolean {
  return readiness.overall >= 0.6;
}

export function getPrepRecommendations(profile: IntakeProfileV2): string[] {
  const recs = [];
  if (profile.technicalMaturity < 0.4) recs.push("Founder needs higher technical maturity evidence.");
  if (profile.commercializationBlocker.length < 50) recs.push("Clarify the specific commercialization blocker.");
  if (profile.missingInfoFlags.length > 0) recs.push(...profile.missingInfoFlags);
  return recs;
}
