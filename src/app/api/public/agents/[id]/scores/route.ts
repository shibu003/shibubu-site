import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        // Check if ID is handle or UUID? 
        // Let's assume ID. If handle, we need to lookup.
        // Let's try to find by ID first.
        let agent = await prisma.$queryRaw<any[]>`SELECT * FROM Agent WHERE id = ${id}`;

        if (agent.length === 0) {
            // Try handle
            agent = await prisma.$queryRaw<any[]>`SELECT * FROM Agent WHERE handle = ${id}`;
        }

        if (agent.length === 0) {
            return NextResponse.json({ error: "Agent not found" }, { status: 404 });
        }

        const a = agent[0];

        // Get History
        const history = await prisma.$queryRaw<any[]>`
            SELECT * FROM AgentEpochScore WHERE agentId = ${a.id} ORDER BY epochKey DESC
        `;

        return NextResponse.json({
            agent: a,
            history
        });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
