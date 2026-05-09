-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN "readinessScore" REAL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "linkedinUrl" TEXT;
ALTER TABLE "User" ADD COLUMN "resumeText" TEXT;

-- CreateTable
CREATE TABLE "IntakeProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "stageEvidence" TEXT NOT NULL,
    "commercializationBlocker" TEXT NOT NULL,
    "requestedOutcome" TEXT NOT NULL,
    "technicalMaturity" REAL NOT NULL,
    "regulatoryExposure" TEXT NOT NULL,
    "fundingStatus" TEXT NOT NULL,
    "customerDiscoveryEvidence" TEXT NOT NULL,
    "introSensitivity" TEXT NOT NULL,
    "geographicRelevance" TEXT NOT NULL,
    "urgencyReason" TEXT NOT NULL,
    "missingInfoFlags" TEXT NOT NULL,
    "readinessScore" REAL NOT NULL,
    "conversationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "IntakeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MatchOutcome" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "matchId" TEXT NOT NULL,
    "introRequestedAt" DATETIME,
    "introApprovedAt" DATETIME,
    "meetingOccurredAt" DATETIME,
    "followUpOccurred" BOOLEAN NOT NULL DEFAULT false,
    "result" TEXT NOT NULL DEFAULT 'NO_RESPONSE',
    "founderRating" INTEGER,
    "expertRating" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MatchOutcome_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "MatchResult" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReputationProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "responseRate" REAL NOT NULL DEFAULT 0,
    "meetingShowRate" REAL NOT NULL DEFAULT 0,
    "followThroughRate" REAL NOT NULL DEFAULT 0,
    "introQualityScore" REAL NOT NULL DEFAULT 0,
    "ecosystemContributionScore" REAL NOT NULL DEFAULT 0,
    "complaintCount" INTEGER NOT NULL DEFAULT 0,
    "trustTier" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ReputationProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RevealAuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "metadata" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RevealAuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MatchResult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "intakeId" TEXT,
    "score" REAL NOT NULL,
    "eligibilityScore" REAL NOT NULL DEFAULT 1.0,
    "readinessScore" REAL NOT NULL DEFAULT 1.0,
    "constraintFitScore" REAL NOT NULL DEFAULT 1.0,
    "expertiseFitScore" REAL NOT NULL DEFAULT 1.0,
    "relationshipFitScore" REAL NOT NULL DEFAULT 1.0,
    "timingFitScore" REAL NOT NULL DEFAULT 1.0,
    "outcomeScore" REAL NOT NULL DEFAULT 1.0,
    "reasons" TEXT,
    "risks" TEXT,
    "rationale" TEXT,
    "status" TEXT NOT NULL DEFAULT 'CANDIDATE',
    "revealAuthorizedAt" DATETIME,
    "revealedAt" DATETIME,
    "revokedAt" DATETIME,
    "rawJson" TEXT,
    "conversationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MatchResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MatchResult_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MatchResult_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MatchResult" ("conversationId", "createdAt", "id", "intakeId", "personaId", "rawJson", "revealAuthorizedAt", "revealedAt", "revokedAt", "score", "status", "updatedAt", "userId") SELECT "conversationId", "createdAt", "id", "intakeId", "personaId", "rawJson", "revealAuthorizedAt", "revealedAt", "revokedAt", "score", "status", "updatedAt", "userId" FROM "MatchResult";
DROP TABLE "MatchResult";
ALTER TABLE "new_MatchResult" RENAME TO "MatchResult";
CREATE INDEX "MatchResult_userId_idx" ON "MatchResult"("userId");
CREATE INDEX "MatchResult_personaId_idx" ON "MatchResult"("personaId");
CREATE INDEX "MatchResult_status_idx" ON "MatchResult"("status");
CREATE UNIQUE INDEX "MatchResult_userId_personaId_key" ON "MatchResult"("userId", "personaId");
CREATE TABLE "new_Persona" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "personaType" TEXT NOT NULL,
    "title" TEXT,
    "organization" TEXT,
    "background" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "industries" TEXT NOT NULL,
    "stagePreference" TEXT,
    "availability" TEXT,
    "capacity" INTEGER NOT NULL DEFAULT 5,
    "currentLoad" INTEGER NOT NULL DEFAULT 0,
    "riskTolerance" TEXT,
    "missionInterests" TEXT,
    "avatarUrl" TEXT,
    "profileJson" TEXT,
    "isHighValue" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Persona" ("availability", "avatarUrl", "background", "createdAt", "goals", "id", "industries", "missionInterests", "name", "organization", "personaType", "profileJson", "riskTolerance", "skills", "stagePreference", "title") SELECT "availability", "avatarUrl", "background", "createdAt", "goals", "id", "industries", "missionInterests", "name", "organization", "personaType", "profileJson", "riskTolerance", "skills", "stagePreference", "title" FROM "Persona";
DROP TABLE "Persona";
ALTER TABLE "new_Persona" RENAME TO "Persona";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "IntakeProfile_conversationId_key" ON "IntakeProfile"("conversationId");

-- CreateIndex
CREATE UNIQUE INDEX "MatchOutcome_matchId_key" ON "MatchOutcome"("matchId");

-- CreateIndex
CREATE UNIQUE INDEX "ReputationProfile_userId_key" ON "ReputationProfile"("userId");
