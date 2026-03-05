import { validate } from "@/lib/contracts/schemas";
import { computeHash } from "@/lib/contracts/hashing";
import { IDS } from "@/lib/contracts/ids";
import { assertTransition, BillState } from "@/lib/state/machine";
// import prisma from "@/lib/prisma"; // Mocking prisma for now due to generation failure
import { NextResponse } from "next/server";

// Mock Prisma Client since generation fails
const prisma = {
    $transaction: async (fn: any) => fn(prisma),
    bill: {
        findUnique: async () => null,
        update: async () => ({})
    },
    artifact: {
        create: async () => ({})
    },
    ledgerEvent: {
        create: async () => ({})
    }
} as any;

interface FlowContext {
    billId: string;
    schemaId: string;
    inputData: any;
    targetState: BillState;
    action: string; // LedgerEvent action
    actorId: string;
    prevState?: string; // Optional enforcement
}

export async function executeFlow(ctx: FlowContext) {
    try {
        // 1. Validate Input
        const validation = validate(ctx.schemaId, ctx.inputData);
        if (!validation.valid) {
            return NextResponse.json({
                error: "Schema Validation Failed",
                details: validation.errors
            }, { status: 400 });
        }

        // 2. Canonical Hash
        const contentHash = computeHash(ctx.inputData);
        const artifactId = IDS.artifact();

        // 3. DB Transaction
        const result = await prisma.$transaction(async (tx: any) => {
            // A. Fetch Bill & Verify State
            const bill = await tx.bill.findUnique({ where: { bill_id: ctx.billId } });
            if (!bill) throw new Error("Bill not found");

            if (ctx.prevState && bill.currentState !== ctx.prevState) {
                throw new Error(\`Invalid state: expected \${ctx.prevState}, got \${bill.currentState}\`);
            }

            // B. Assert Transition
            assertTransition(bill.currentState, ctx.targetState);

            // C. Store Artifact
            const artifact = await tx.artifact.create({
                data: {
                    artifactId,
                    artifactType: parseArtifactType(ctx.schemaId),
                    version: "0.1.0",
                    billId: ctx.billId,
                    createdBy: ctx.actorId,
                    contentHash,
                    bodyJson: JSON.stringify(ctx.inputData)
                }
            });

            // D. Emit Event
            // Note: In real impl, fetch prev event hash from bill or ledger (not implemented in min schema yet)
            const eventId = IDS.event();
            const eventData = {
                eventId,
                actorId: ctx.actorId,
                action: ctx.action,
                entityRefs: JSON.stringify({ bill_id: ctx.billId, artifact_id: artifactId }),
                dataHash: contentHash,
                prevEventHash: "sha256:0000000000000000000000000000000000000000000000000000000000000000", // TODO: Fetch real prev
                eventHash: "" // Computed below
            };
            eventData.eventHash = computeHash(eventData);

            await tx.ledgerEvent.create({ data: eventData });

            // E. Update Bill State
            const updatedBill = await tx.bill.update({
                where: { bill_id: ctx.billId },
                data: {
                    currentState: ctx.targetState,
                    // Update latest artifact pointer based on schema type?
                    // Simplified: just state update for now
                }
            });

            return { artifact, event: eventData, bill: updatedBill };
        });

        return NextResponse.json(result);

    } catch (e: any) {
        console.error("Flow Error:", e);
        if (e.message.includes("Invalid state") || e.name === "StateMachineError") {
            return NextResponse.json({ error: e.message, code: "INVALID_STATE_TRANSITION" }, { status: 409 });
        }
        if (e.message === "Bill not found") {
            return NextResponse.json({ error: "Bill not found" }, { status: 404 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

function parseArtifactType(schemaId: string): string {
    // extract type from shibubu:v0.1:bill_draft -> BILL_DRAFT
    const parts = schemaId.split(":");
    return parts[2].toUpperCase();
}
