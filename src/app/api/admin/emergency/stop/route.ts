import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import { appendEvent } from "@/core/ledger/eventLog";
import { setSystemHalted, isSystemHalted } from "@/core/ledger/systemState";

const M_THRESHOLD = 2; // M=2 admins required to stop

function generateId() {
    return Math.random().toString(36).substring(2, 15);
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { actorId, approve } = body;

        // If approve is explicitly false (reject) or missing
        if (!approve) {
            return NextResponse.json({ message: "Approval required to proceed" }, { status: 400 });
        }

        // 1. Check if system is already halted
        const isHalted = await isSystemHalted();
        if (isHalted) {
            return NextResponse.json({ status: "STOPPED", message: "System is already halted." });
        }

        // 2. Find pending request or create new one (Using RAW SQL)
        const pendingRequests: any[] = await prisma.$queryRaw`
            SELECT * FROM "EmergencyRequest" WHERE status = 'PENDING' LIMIT 1
        `;

        let request = pendingRequests[0];
        let requestId = request ? request.id : generateId();

        if (!request) {
            const now = new Date().toISOString();
            await prisma.$executeRaw`
                INSERT INTO "EmergencyRequest" (id, status, approvedBy, createdAt)
                VALUES (${requestId}, 'PENDING', '[]', ${now})
            `;

            await appendEvent("HUMAN", actorId, "EMERGENCY_STOP_REQUESTED", "EMERGENCY", requestId, { reason: "Initial Request" });

            // Re-fetch to have the object in memory if needed, or just construct it
            request = { id: requestId, status: 'PENDING', approvedBy: '[]' };
        } else {
            requestId = request.id;
        }

        // 3. Add approval
        const currentApprovals: string[] = JSON.parse(request.approvedBy);
        if (!currentApprovals.includes(actorId)) {
            currentApprovals.push(actorId);
            const newApprovedBy = JSON.stringify(currentApprovals);

            await prisma.$executeRaw`
                UPDATE "EmergencyRequest" 
                SET approvedBy = ${newApprovedBy}
                WHERE id = ${requestId}
            `;

            await appendEvent("HUMAN", actorId, "EMERGENCY_STOP_APPROVED", "EMERGENCY", requestId, { approvals: currentApprovals.length });
        }

        // 4. Check Threshold
        if (currentApprovals.length >= M_THRESHOLD) {
            // EXECUTE STOP
            await setSystemHalted(true);

            await prisma.$executeRaw`
                UPDATE "EmergencyRequest" 
                SET status = 'STOPPED'
                WHERE id = ${requestId}
            `;

            await appendEvent("SYSTEM", "M_OF_N_CONSENSUS", "EMERGENCY_STOP_COMPLETED", "SYSTEM", "global", { final_approvals: currentApprovals });

            return NextResponse.json({
                status: "STOPPED",
                approvals: currentApprovals.length,
                required: M_THRESHOLD
            });
        }

        return NextResponse.json({
            status: "PENDING",
            approvals: currentApprovals.length,
            required: M_THRESHOLD
        });

    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message || "Failed to process emergency stop" }, { status: 500 });
    }
}
