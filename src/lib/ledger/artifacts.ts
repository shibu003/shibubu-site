import { prisma } from "@/lib/db/prisma";
import { makeArtifactId } from "@/lib/contracts/ids";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { validateOrThrow } from "@/lib/contracts/validate";

type CreateArtifactArgs = {
    artifact_type:
    | "BILL_DRAFT"
    | "BILL"
    | "TRANSLATION"
    | "EVIDENCE_BUNDLE"
    | "GATE_DECISION"
    | "AUDIT_REPORT"
    | "DECISION_BUNDLE"
    | "EPOCH_SCORES"
    | "PURPOSE_REGISTER";
    version: string; // like "0.1.0"
    bill_id?: string;
    created_by: string;
    body: any;
};

export async function createArtifact(args: CreateArtifactArgs) {
    const artifact_id = makeArtifactId();
    const created_at = new Date().toISOString();

    // content hash computed over body (or full envelope; choose one and keep consistent)
    const { hash: content_hash, canonicalization } = hashJsonSha256(args.body);

    const artifact = {
        artifact_id,
        artifact_type: args.artifact_type,
        version: args.version,
        created_at,
        created_by: args.created_by,
        content_hash,
        hash_canonicalization: canonicalization,
        body: args.body,
    };

    // Validate against base Artifact schema
    validateOrThrow("shibubu:v0.1:artifact", artifact);

    await prisma.artifact.create({
        data: {
            artifactId: artifact_id,
            artifactType: args.artifact_type,
            version: args.version,
            billId: args.bill_id ?? null,
            createdAt: new Date(created_at),
            createdBy: args.created_by,
            contentHash: content_hash,
            hashCanon: canonicalization, // Mapped to hashCanon in schema
            bodyJson: JSON.stringify(args.body), // Mapped to bodyJson in schema
        },
    });

    return artifact;
}
