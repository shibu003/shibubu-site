import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
import { prisma } from "@/lib/db/prisma";
import { assertState } from "@/lib/api/state";
import { createArtifact } from "@/lib/ledger/artifacts";
import { emitLedgerEvent } from "@/lib/ledger/ledger";
import { LEDGER_ACTIONS } from "@/lib/ledger/actions";

export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: { billId: string } }) { // Next.js App Router params are promise or obj, usually mapped from [param] folder
    try {
        const bill_id = params.billId;
        const body = await req.json().catch(() => ({}));
        const target_lang = body.target_lang ?? "en-US";

        const bill = await prisma.bill.findUnique({ where: { billId: bill_id } });
        if (!bill) {
            return NextResponse.json({ error: { code: "BILL_NOT_FOUND" } }, { status: 404 });
        }
        assertState(bill.currentState, "SUBMITTED", "TRANSLATE");

        // Load draft artifact
        const draftArtifact = bill.latestDraftArtifactId
            ? await prisma.artifact.findUnique({ where: { artifactId: bill.latestDraftArtifactId } })
            : null;
        if (!draftArtifact) {
            return NextResponse.json({ error: { code: "DRAFT_NOT_FOUND" } }, { status: 409 });
        }

        // Parse bodyJson safely
        const draftBody = typeof draftArtifact.bodyJson === 'string'
            ? JSON.parse(draftArtifact.bodyJson)
            : draftArtifact.bodyJson;

        // TODO: translation engine integration later.
        // For now: treat as a "translation artifact" with stub provenance.
        const translationArtifactBody = {
            bill_id,
            source_lang: draftBody.lang ?? "ja",
            target_lang,
            translated_bill: {
                bill_id,
                lang: target_lang,
                title: draftBody.title,
                summary: draftBody.summary,
                articles: draftBody.articles,
                requested_effective_date: draftBody.requested_effective_date,
                published_at: new Date().toISOString(),
                published_by: "actor_system",
                bill_hash: "sha256:" + "0".repeat(64),
                source_draft_hash: draftBody.draft_hash ?? "sha256:" + "0".repeat(64),
            },
            translator_provenance: {
                translation_model: "stub",
                prompt_hash: "sha256:" + "0".repeat(64),
                input_hash: "sha256:" + "0".repeat(64),
                timestamp: new Date().toISOString(),
            },
        };

        const artifact = await createArtifact({
            artifact_type: "TRANSLATION",
            version: "0.1.0",
            bill_id,
            created_by: "actor_system",
            body: translationArtifactBody,
        });

        await prisma.$transaction(async (tx: any) => {
            await tx.bill.update({
                where: { billId: bill_id },
                data: {
                    currentState: "TRANSLATED",
                    latestTranslationArtifactId: artifact.artifact_id,
                },
            });

            await emitLedgerEvent({
                actor_id: "actor_system",
                action: LEDGER_ACTIONS.TRANSLATE,
                entity_refs: { bill_id, artifact_ids: [artifact.artifact_id] },
                data: artifact,
            });
        });

        return NextResponse.json(artifact, { status: 200 });
    } catch (err) {
        return jsonError(err);
    }
}
