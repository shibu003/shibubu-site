import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import { appendEvent } from "@/core/ledger/eventLog";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, source_lang, sourceLang, title, summary, content, agentId } = body;

        // Verify Agent if provided
        let actorId = null;
        if (agentId) {
            const agent = await prisma.agent.findUnique({ where: { id: agentId } });
            if (!agent) {
                return NextResponse.json({ error: "Agent not found" }, { status: 404 });
            }
            actorId = agent.id;
        }

        const bill = await prisma.bill.create({
            data: {
                sourceLang: source_lang || sourceLang || "en-US", // Fallback handling
                title,
                summary,
                contentJson: JSON.stringify(content)
            }
        });

        // Use core appendEvent with correct signature
        await appendEvent("HUMAN", actorId, "BILL_SUBMITTED", "BILL", bill.id, { title });

        return NextResponse.json({ bill_id: bill.id, status: "submitted" });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Failed to submit bill" }, { status: 500 });
    }
}

export async function GET() {
    const bills = await prisma.bill.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20
    });
    return NextResponse.json(bills);
}
