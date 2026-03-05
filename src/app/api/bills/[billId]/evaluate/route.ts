import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import { executeTransition } from "@/services/governance/executeTransition";
import { BillDraft } from "@/core/governance/types";
import { computeHash } from "@/core/ledger/hash";

export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: { billId: string } }) {
    try {
        const { billId } = params;

        // 1. Fetch Bill (Prisma Client works for Bill model)
        const billRecord = await prisma.bill.findUnique({ where: { id: billId } });
        if (!billRecord) {
            return NextResponse.json({ error: "Bill not found" }, { status: 404 });
        }

        // 2. Construct Draft
        const billDraft: BillDraft = {
            bill_id: billRecord.id,
            source_lang: billRecord.sourceLang,
            title: billRecord.title,
            summary: billRecord.summary,
            content: JSON.parse(billRecord.contentJson)
        };

        const inputHash = computeHash(billDraft);

        // 3. Execute via Reference Monitor
        const result = await executeTransition(billDraft, inputHash);

        // 4. Return Result
        return NextResponse.json({
            bill_id: billDraft.bill_id,
            gate: result.gate,
            audit: result.audit,
            bundle: result.bundle,
            verdict: result.verdict
        });

    } catch (e: any) {
        console.error("Evaluation Error:", e);
        // Handle explicit Halt error
        if (e.message.includes("System is HALTED")) {
            return NextResponse.json({ error: "System is HALTED. Governance frozen." }, { status: 503 });
        }
        return NextResponse.json({ error: e.message || "Evaluation failed" }, { status: 500 });
    }
}
