CREATE TABLE "EmergencyRequest" (\n    "id" TEXT NOT NULL PRIMARY KEY,\n    "status" TEXT NOT NULL,\n    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    "approvedBy" TEXT NOT NULL\n);
