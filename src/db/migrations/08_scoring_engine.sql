-- Protocol v1: Evaluation & Allocation Engine

CREATE TABLE "Agent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "handle" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEpochKey" TEXT
);
CREATE UNIQUE INDEX "Agent_handle_key" ON "Agent"("handle");

CREATE TABLE "Epoch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "epochKey" TEXT NOT NULL,
    "startAt" DATETIME NOT NULL,
    "endAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "Epoch_epochKey_key" ON "Epoch"("epochKey");

CREATE TABLE "AgentEpochScore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "agentId" TEXT NOT NULL,
    "epochKey" TEXT NOT NULL,
    "stability" REAL NOT NULL,
    "contribution" REAL NOT NULL,
    "trust" REAL NOT NULL,
    "longevity" REAL NOT NULL,
    "risk" REAL NOT NULL,
    "fitness" REAL NOT NULL,
    "fitnessNorm" REAL NOT NULL,
    "computeQuota" REAL NOT NULL,
    "tokensMinted" INTEGER NOT NULL,
    "voteWeight" REAL NOT NULL,
    "params" TEXT NOT NULL,
    "inputsHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "AgentEpochScore_agentId_epochKey_key" ON "AgentEpochScore"("agentId", "epochKey");
CREATE INDEX "AgentEpochScore_epochKey_idx" ON "AgentEpochScore"("epochKey");

CREATE TABLE "AllocationLedger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "epochKey" TEXT NOT NULL,
    "totalComputeUnits" INTEGER NOT NULL,
    "totalTokensMinted" INTEGER NOT NULL,
    "tau" REAL NOT NULL,
    "gini" REAL,
    "snapshot" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
