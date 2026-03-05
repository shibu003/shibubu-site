import { NextResponse } from "next/server";
import { isSystemHalted } from "@/core/ledger/systemState";
import { prisma } from "@/db/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const halted = await isSystemHalted();

        const pendingRequests: any[] = await prisma.$queryRaw`
            SELECT * FROM "EmergencyRequest" WHERE status = 'PENDING' LIMIT 1
        `;
        const pendingRequest = pendingRequests[0];

        let approvals: string[] = [];
        if (pendingRequest) {
            approvals = JSON.parse(pendingRequest.approvedBy);
        }

        return NextResponse.json({
            status: halted ? "HALTED" : "ACTIVE",
            pendingRequestId: pendingRequest?.id || null,
            currentApprovals: approvals,
            requiredApprovals: 2 // hardcoded M for now
        });
    } catch (e) {
        return NextResponse.json({ error: "Failed to fetch status" }, { status: 500 });
    }
}
