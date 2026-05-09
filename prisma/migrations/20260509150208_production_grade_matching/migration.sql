/*
  Warnings:

  - You are about to drop the column `confidence` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `explanation` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `gaps` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `matchName` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `matchType` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `nextStep` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `sector` on the `MatchResult` table. All the data in the column will be lost.
  - You are about to drop the column `startupStage` on the `MatchResult` table. All the data in the column will be lost.
  - Added the required column `reason` to the `MatchResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `MatchResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MatchResult` table without a default value. This is not possible if the table is not empty.
  - Made the column `personaId` on table `MatchResult` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "actorId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "resourceId" TEXT,
    "metadata" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
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
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
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
INSERT INTO "new_MatchResult" ("conversationId", "createdAt", "id", "personaId", "rawJson", "userId") SELECT "conversationId", "createdAt", "id", "personaId", "rawJson", "userId" FROM "MatchResult";
DROP TABLE "MatchResult";
ALTER TABLE "new_MatchResult" RENAME TO "MatchResult";
CREATE INDEX "MatchResult_userId_idx" ON "MatchResult"("userId");
CREATE INDEX "MatchResult_personaId_idx" ON "MatchResult"("personaId");
CREATE INDEX "MatchResult_status_idx" ON "MatchResult"("status");
CREATE UNIQUE INDEX "MatchResult_userId_personaId_key" ON "MatchResult"("userId", "personaId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
