import { prisma } from "@/db/prisma";
import type { AgentCounters } from "./types";

export async function aggregateCounters(epochId: string, agentIds: string[]): Promise<Map<string, AgentCounters>> {
    // 1. Define time range for the epoch
    // Assumes epochId is "YYYY-MM-DD"
    const start = new Date(epochId + "T00:00:00.000Z");
    const end = new Date(epochId + "T23:59:59.999Z");

    const counters = new Map<string, AgentCounters>();

    // Initialize counts
    agentIds.forEach(id => {
        counters.set(id, {
            n_fail: 0, n_warn: 0, n_auditFail: 0, n_auditWarn: 0, n_suspicious: 0, n_published: 0
        });
    });

    // 2. Fetch Events
    // To be efficient, we might fetch aggregated counts if Prisma supported it easily with these conditions.
    // For V1 MVP, fetching raw events and filtering in memory or doing multiple count queries is safer for logic correctness.
    // Let's do a single pass query for relevant event types.

    const events = await prisma.eventLog.findMany({
        where: {
            ts: { gte: start, lte: end },
            actorId: { in: agentIds },
            eventType: {
                in: ["POLICY_GATE_DECISION", "AUDIT_DECISION", "BUNDLE_PUBLISHED", "SUSPICIOUS_EVENT"]
            }
        },
        select: {
            actorId: true,
            eventType: true,
            payload: true
        }
    });

    for (const e of events) {
        if (!e.actorId || !counters.has(e.actorId)) continue;
        const c = counters.get(e.actorId)!;

        // Parse payload (Prisma returns string for Json fields in raw queries, but here it might be object if typed? schema says String)
        let payload: any = {};
        try {
            payload = typeof e.payload === 'string' ? JSON.parse(e.payload) : e.payload;
        } catch { continue; }

        if (e.eventType === "BUNDLE_PUBLISHED") {
            c.n_published++;
        } else if (e.eventType === "SUSPICIOUS_EVENT") {
            c.n_suspicious++;
        } else if (e.eventType === "POLICY_GATE_DECISION") {
            if (payload.verdict === "FAIL") c.n_fail++;
            if (payload.verdict === "WARN") c.n_warn++;
        } else if (e.eventType === "AUDIT_DECISION") {
            if (payload.verdict === "FAIL") c.n_auditFail++;
            if (payload.verdict === "WARN") c.n_auditWarn++;
        }
    }

    // 3. Instruction 7 mentions rule_ids/reason_codes.
    // If we need to count rule hits specifically (e.g. for suspicious if eventType wasn't enough),
    // but the spec for counters says "count of SUSPICIOUS_EVENT".
    // We stick to the spec: count by eventType.

    return counters;
}
