import { prisma } from "@/db/prisma";
import { appendEvent } from "@/core/ledger/eventLog";
import { computeHash } from "@/core/ledger/hash";

export interface LedgerArtifactDraft {
    type: string;
    epochKey?: string;
    artifactJson: string; // Canonical JSON
}

export async function appendLedgerArtifact(draft: LedgerArtifactDraft) {
    const artifactHash = computeHash(JSON.parse(draft.artifactJson));

    // 1. Persist to LedgerArtifact table
    const artifact = await prisma.ledgerArtifact.create({
        data: {
            type: draft.type,
            epochKey: draft.epochKey,
            artifactJson: draft.artifactJson,
            artifactHash: artifactHash,
            publishedAt: new Date()
        }
    });

    // 2. Emit Event
    await appendEvent(
        "SYSTEM",
        "SCORING_ENGINE",
        "LEDGER_APPEND",
        "ARTIFACT",
        artifact.id,
        {
            type: draft.type,
            hash: artifactHash,
            epoch: draft.epochKey
        }
    );

    return artifact;
}
