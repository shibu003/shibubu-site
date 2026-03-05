import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
import { validateOrThrow } from "@/lib/contracts/validate";
import { makeBillId } from "@/lib/contracts/ids";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { prisma } from "@/lib/db/prisma";
import { emitLedgerEvent } from "@/lib/ledger/ledger";
import { LEDGER_ACTIONS } from "@/lib/ledger/actions";
import { createArtifact } from "@/lib/ledger/artifacts";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const input = await req.json();

        // If client didn't supply bill_id, create one
        const bill_id = input.bill_id ?? makeBillId();

        const draft = {
            ...input,
            bill_id,
            status: "SUBMITTED",
            submitted_at: new Date().toISOString(),
            submitted_by: input.submitted_by ?? "actor_system",
        };

        // Validate BillDraft
        validateOrThrow("shibubu:v0.1:bill_draft", draft);

        // Compute draft_hash
        const { hash: draft_hash } = hashJsonSha256(draft);

        // Store Bill pointer + artifact
        await prisma.$transaction(async (tx: any) => {
            await tx.bill.create({
                data: {
                    billId: bill_id, // Map to schema
                    currentState: "SUBMITTED", // Map to schema
                },
            });

            const artifact = await createArtifact({
                artifact_type: "BILL_DRAFT",
                version: "0.1.0",
                bill_id,
                created_by: draft.submitted_by,
                body: { ...draft, draft_hash },
            });

            await tx.bill.update({
                where: { billId: bill_id }, // Map to schema
                data: { latestDraftArtifactId: artifact.artifact_id }, // Map to schema
            });

            await emitLedgerEvent({
                actor_id: draft.submitted_by,
                action: LEDGER_ACTIONS.SUBMIT_BILL,
                entity_refs: { bill_id, artifact_ids: [artifact.artifact_id] },
                data: artifact,
            });
        });

        return NextResponse.json({ bill_id, draft_hash }, { status: 201 });
    } catch (err) {
        return jsonError(err);
    }
}
