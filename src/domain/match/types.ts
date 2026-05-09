export type MatchReasonCategory =
  | "domain_fit"
  | "stage_fit"
  | "commercialization_blocker"
  | "network_access"
  | "regulatory_fit"
  | "operator_fit"
  | "capital_fit"
  | "mentor_style_fit"
  | "expertise_fit"
  | "relationship_fit"
  | "timing_fit";

export type MatchReason = {
  category: MatchReasonCategory;
  evidence: string;
  weight: number;
  confidence: number;
};

export type MatchRiskType =
  | "availability_low"
  | "stage_mismatch"
  | "weak_domain_overlap"
  | "unclear_ask"
  | "low_readiness"
  | "possible_conflict"
  | "intro_fatigue"
  | "regulatory_risk"
  | "funding_gap";

export type MatchRisk = {
  risk: MatchRiskType;
  severity: "low" | "medium" | "high";
  mitigation: string;
};

export type ReadinessScore = {
  clarityOfAsk: number;
  stageEvidence: number;
  preparationQuality: number;
  responsiveness: number;
  introWorthiness: number;
  overall: number;
};

export type IntakeProfileV2 = {
  stageEvidence: "idea" | "prototype" | "pilot" | "revenue" | "scale";
  commercializationBlocker: string;
  requestedOutcome: string;
  technicalMaturity: number; // 0-1
  regulatoryExposure: string[];
  fundingStatus: string;
  customerDiscoveryEvidence: string;
  introSensitivity: "low" | "medium" | "high";
  geographicRelevance: string[];
  urgencyReason: string;
  missingInfoFlags: string[];
  readinessScore: number;
};
