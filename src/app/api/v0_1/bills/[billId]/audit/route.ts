import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
import { prisma } from "@/lib/db/prisma";
import { assertState } from "@/lib/api/state";

export async function POST(req: Request, { params }: { params: { billId: string } }) {
    try {
        const { billId } = params;

        const bill = await prisma.bill.findUnique({ where: { billId } });
        if (!bill) {
            return NextResponse.json({ error: { code: "BILL_NOT_FOUND" } }, { status: 404 });
        }
        assertState(bill.currentState, "GATED", "AUDIT_EVAL");

        return NextResponse.json(
            { error: { code: "NOT_IMPLEMENTED", details: "Instruction 10 scaffold only" } },
            { status: 501 }
        );
    } catch (err) {
        return jsonError(err);
    }
}
