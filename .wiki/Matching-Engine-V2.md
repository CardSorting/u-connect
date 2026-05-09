# LaunchHive: Authentic Matching Engine V2
## Technical Architecture & Integration Specification

**Status**: Production-Ready / Hardened
**Version**: 2.0.0
**Target Ecosystem**: Utah Deep-Tech Commercialization

---

### 1. Executive Summary
LaunchHive V2 is an industry-grade, trust-preserving matching engine designed to facilitate high-stakes introductions between deep-tech founders and domain experts. Moving beyond naive similarity embeddings, V2 implements a multi-layer, server-orchestrated scoring stack that prioritizes commercial alignment, founder readiness, and ecosystem trust. The system acts as a "digital concierge," ensuring that every match is backed by explainable evidence and protected by deterministic hard gates.

### 2. Design Goals
*   **Authenticity**: Match based on real-world blockers and proven expertise, not just keyword overlap.
*   **Trust Preservation**: Protect the time of high-value experts through rigorous readiness gating.
*   **Transparency**: Provide explainable "Match Evidence" and identify "Strategic Risks" for every recommendation.
*   **Auditability**: Maintain full logs of all revelations, approvals, and outcomes.
*   **Learning**: Improve matching accuracy through a closed-loop feedback system based on real-world outcomes.

### 3. Non-Goals
*   **Public Directory**: This is not a searchable database of people.
*   **Social Network**: We do not facilitate casual networking or "cold" outreach without authorization.
*   **Automated Decision Maker**: AI assists in extraction and reasoning; the server controls permissions and admins oversee high-value flows.

### 4. System Philosophy: Authentic Matching
The core principle of LaunchHive is that **the best match is the relationship most likely to create real-world progress without damaging ecosystem trust.** 

We distinguish between:
*   **Stated Needs**: What the user asks for (e.g., "I need an investor").
*   **Inferred Blockers**: What the system detects they actually need (e.g., "The founder lacks a regulatory pathway for their Class II medical device").

### 5. Matching Lifecycle
A match is not a binary event; it is a state machine:

1.  **CANDIDATE**: Potential match identified by initial retrieval.
2.  **SHORTLISTED**: Passed all server-side hard filters (Eligibility Gate).
3.  **RECOMMENDED**: Passed the Readiness Gate and scored >0.8 in the stack.
4.  **PENDING_USER_CONFIRMATION**: User notified of a "Secured Opportunity" (Identity Hidden).
5.  **PENDING_CONCIERGE_REVIEW**: High-value or sensitive matches requiring admin review.
6.  **PENDING_TARGET_APPROVAL**: The expert/target must opt-in to the reveal.
7.  **REVEALED**: Identities disclosed; contact authorized.
8.  **INTRO_REQUESTED**: The founder has initiated the handshake.
9.  **MEETING_SCHEDULED**: Introduction accepted; meeting planned.
10. **OUTCOME_RECORDED**: Success/failure data captured; reputations updated.

### 6. Data Model (Core Entities)

#### `IntakeProfile`
```typescript
type IntakeProfile = {
  userId: string;
  stageEvidence: "idea" | "prototype" | "pilot" | "revenue" | "scale";
  commercializationBlocker: string; // The "Constraint" to be solved
  requestedOutcome: string;
  technicalMaturity: number; // 0-1 scale (TRL equivalent)
  regulatoryExposure: string[]; // FDA, FAA, EPA, etc.
  fundingStatus: string;
  customerDiscoveryEvidence: string;
  introSensitivity: "low" | "medium" | "high";
  geographicRelevance: string[];
  urgencyReason: string;
  missingInfoFlags: string[];
};
```

#### `MatchScoreBreakdown`
```typescript
type MatchScoreBreakdown = {
  finalScore: number;
  eligibility: number;   // Binary (Gate)
  readiness: number;     // Binary (Gate)
  constraintFit: number; // Multiplier
  expertiseFit: number;  // Multiplier
  relationshipFit: number; // Multiplier
  timingFit: number;     // Multiplier
  outcomeProb: number;   // Multiplier
};
```

#### `MatchOutcome`
```typescript
type MatchOutcome = {
  matchId: string;
  introStatus: "accepted" | "declined" | "no_response";
  meetingResult: "meeting_only" | "active_collaboration" | "pilot" | "investment";
  failureReason?: "no_show" | "bad_fit" | "trust_violation";
  notes: string;
  recordedAt: Date;
};
```

### 7. Intake Normalization (The LLM Role)
Hermes acts as the **Intake Analyst**. It does not decide the match; it normalizes the chaos of human conversation into the structured `IntakeProfile`. 

**LLM Tasks**:
*   Detect missing critical information (e.g., "Founder hasn't mentioned their IP status").
*   Extract the core commercialization blocker from unstructured chat.
*   Assess the clarity of the user's ask.

### 8. Scoring Architecture: The Stacked Model
Final Match Score is calculated using a weighted multiplicative model:
`Score = (E * R) * (C_fit^w1 * Ex_fit^w2 * Rel_fit^w3 * T_fit^w4 * O_prob^w5)`

#### The Gates (Hard Blocks)
*   **Eligibility Gate (E)**: Legal, COI, Availability, Safety, and Cooldowns.
*   **Readiness Gate (R)**: Clarity of ask and credibility evidence. If `< 0.6`, matching stops.

#### The Signals (Ranking)
*   **Constraint Fit (C_fit)**: Does the expert's experience solve the *specific* blocker?
*   **Expertise Fit (Ex_fit)**: Proven capability against technical maturity and domain.
*   **Relationship Fit (Rel_fit)**: Warm-path potential and trust distance.
*   **Timing Fit (T_fit)**: Urgency vs. Expert capacity.
*   **Outcome Probability (O_prob)**: Historical patterns of intro acceptance and success.

### 9. Admin Concierge Review
Admins oversee the "Venture-Grade" flow. For high-value matches, the admin dashboard displays:
*   **Confidence Score**: The raw stack output.
*   **Rationale Summary**: Generated by LLM based on scoring layers.
*   **Risk Profile**: Identified risks (e.g., "Intro Fatigue," "Stage Mismatch").
*   **Missing Info**: Critical gaps in the intake.

**Admin Actions**: Approve, Reject, Request More Intake, Defer, or Manually Override (with mandatory rationale).

### 10. Blind Discovery & Revelation Flow
To preserve trust and minimize PII exposure, identities are hidden behind "Persona Previews" until:
1.  Eligibility and Readiness gates are passed.
2.  The User confirms interest.
3.  (If sensitive) The Admin approves.
4.  (If required) The Target approves.

**Auditability**: Every `REVEAL_EVENT` creates an immutable `RevealAuditLog` entry.

### 11. Outcome Learning Loop
The engine "closes the loop" by tracking:
*   **Intro Outcomes**: Accepted, Declined, No-Response.
*   **Progress**: Pilot Started, Advisory Formed, Investment Triggered.
*   **Failures**: No-show, Bad-fit, Trust Violation.

**Reputation System**: Outcomes update the `ReputationProfile`. Successes increment trust tiers; failures trigger cooldowns or restrictions. New participants receive a "Neutral-Optimistic" baseline to avoid the cold-start penalty.

### 12. Safety, Trust, and Abuse Prevention
*   **Rate Limits**: Thresholds on intro requests and target exposure.
*   **Duplicate Cooldown**: 30-day block on re-matching after a decline.
*   **COI Escalation**: Automated detection of organizational overlap.
*   **Identity Verification**: Tiers for `NEW`, `VERIFIED`, and `TRUSTED` users.

### 13. API Integration Notes

The Matching Engine is exposed via a set of secure, server-side endpoints.

- **`POST /api/matches/run`**: Triggers the normalization and scoring pipeline for a given conversation.
- **`GET /api/matches`**: Returns a list of `MatchResult` objects for the current user. Identities are masked unless the status is `REVEALED`.
- **`POST /api/matches/[id]/reveal`**: Requests authorization to disclose the target's identity. May trigger Admin Review.
- **`POST /api/matches/[id]/outcome`**: Records post-introduction feedback and updates reputation scores.
- **`GET /api/admin/concierge/queue`**: (Admin Only) Returns matches pending manual review.

### 14. Example Match Evaluation
**Scenario**: Pre-seed med-tech startup needing FDA pathway guidance.
*   **Blocker**: Regulatory clearance for Class II device.
*   **Expert**: Former Medtronic VP with 10+ Utah successful clearances.
*   **Stack Result**: 
    - Eligibility: 1.0 (Passed)
    - Readiness: 0.9 (Clear ask)
    - Constraint Fit: 1.0 (Exact match for FDA Class II)
    - Expertise Fit: 0.95 (Deep history)
    - **Final Recommendation**: High-priority reveal; Concierge review triggered (High-Value Expert).

### 15. Implementation Roadmap
1.  **Phase 1**: Migration to structured `IntakeProfile` and Hard Gates.
2.  **Phase 2**: Implementation of Weighted Scoring Stack and Admin Dashboard.
3.  **Phase 3**: Integration of Outcome Tracking and Reputation Profiles.
4.  **Phase 4**: Hardening of Reveal Audit Logs and COI detection.

### 16. Open Risks / Future Improvements
*   **Over-filtering**: Risk of missing "Black Swan" matches; solved via manual admin "Discover" mode.
*   **Expert Fatigue**: Solved via dynamic timing fit and capacity limits.
*   **Cold Start**: Solved via baseline reputation scores.
