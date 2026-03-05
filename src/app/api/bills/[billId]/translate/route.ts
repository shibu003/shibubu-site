import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import { translateBillDraft } from "@/core/translation/translate";
import { appendEvent } from "@/core/ledger/eventLog";

export async function POST(req: Request, { params }: { params: { billId: string } }) {
    try {
        const { searchParams } = new URL(req.url);
        const target = searchParams.get("target") || "en-US";
        const billId = params.billId;

        const bill = await prisma.bill.findUnique({ where: { id: billId } });
        if (!bill) return NextResponse.json({ error: "Not found" }, { status: 404 });

        const billDraft = {
            bill_id: bill.id,
            source_lang: bill.sourceLang,
            title: bill.title,
            summary: bill.summary,
            summary_content: bill.contentJson, // Typo logic check in translate
            content: JSON.parse(bill.contentJson)
        };

        const result = await translateBillDraft(billDraft, target);

        await prisma.translation.create({
            data: {
                billId,
                targetLang: target,
                translatedJson: JSON.stringify(result.translated_content),
                provenance: JSON.stringify(result.provenance)
            }
        });

        await appendEvent("SYSTEM", null, "BILL_TRANSLATED", "BILL", billId, { target });

        return NextResponse.json(result);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Translation failed" }, { status: 500 });
    }
}
