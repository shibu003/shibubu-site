import { prisma } from "@/db/prisma";
import { AgentMetrics } from "./params";

// Helper to get time range for SQL
function getTimeRange(dateStr: string) {
    // Return ISO strings for SQLite comparison
    const start = new Date(dateStr + "T00:00:00.000Z").toISOString();
    const end = new Date(dateStr + "T23:59:59.999Z").toISOString();
    return { start, end };
}

export async function collectMetrics(epochKey: string, agentHandles: string[]): Promise<Map<string, AgentMetrics>> {
    const { start, end } = getTimeRange(epochKey);
    const metricsMap = new Map<string, AgentMetrics>();

    // Initialize map
    for (const h of agentHandles) {
        metricsMap.set(h, {
            publishedCount: 0,
            failCount: 0,
            warnCount: 0,
            auditFailCount: 0,
            auditWarnCount: 0,
            suspiciousCount: 0,
            prevLongevity: 0.5, // Default if not found
            prevFitnessNorm: 0.5 // Default if not found
        });
    }

    // 1. Map Bill -> Author (from EventLog BILL_SUBMITTED)
    // We assume actorId in EventLog is the Agent Handle
    const predictions = await prisma.$queryRaw<any[]>`
        SELECT entityId as billId, actorId 
        FROM EventLog 
        WHERE eventType = 'BILL_SUBMITTED' 
          AND ts BETWEEN ${start} AND ${end}
    `;

    // In v1, we only score bills submitted *in this epoch*? 
    // Or bills *finalized* in this epoch?
    // User said: "publishedCount = bundleがPUBLISHされた回数"
    // Bundles might be published in this epoch for bills submitted previously.
    // So we should look for BUNDLE_PUBLISHED events in this epoch, and look up the author of that bill.

    // Revised Strategy:
    // A. Identifiy all DecisionBundles created in this epoch.
    // B. For each bundle, identifying the Bill.
    // C. Identify the Author of that Bill.

    // A. Bundles in this epoch
    // Using raw SQL for DecisionBundle to be safe
    const bundles = await prisma.$queryRaw<any[]>`
        SELECT billId FROM DecisionBundle WHERE createdAt BETWEEN ${start} AND ${end}
    `;
    const publishedBillIds = bundles.map(b => b.billId);

    // B/C. Find authors for these bills (could be submitted anytime)
    // We query EventLog for BILL_SUBMITTED for these billIds.
    let billAuthors = new Map<string, string>();
    if (publishedBillIds.length > 0) {
        // SQLite doesn't support arrays in IN clause easily with prisma raw in all versions, 
        // but we can join or use local logic if volume is low (MVP).
        // Let's rely on EventLog lookups.

        // Fetch all submission events ever? No, too heavy.
        // Fetch submission events for these specific bills.
        // Or just assume bill submission happened recently?
        // Let's simpler: Fetch all BILL_SUBMITTED events and cache them in memory? No.

        // Best effort: Get authors for the relevant bills.
        // Since we can't easily pass a list to raw SQL, we might iterate or fetch all submissions in recent window.
        // For MVP, let's fetch ALL BILL_SUBMITTED events (assuming low volume for demo).
        const allSubmissions = await prisma.$queryRaw<any[]>`
            SELECT entityId as billId, actorId FROM EventLog WHERE eventType = 'BILL_SUBMITTED'
        `;
        allSubmissions.forEach(row => billAuthors.set(row.billId, row.actorId));
    }

    // Increment Published Counts
    for (const billId of publishedBillIds) {
        const author = billAuthors.get(billId);
        if (author && metricsMap.has(author)) {
            metricsMap.get(author)!.publishedCount++;
        }
    }

    // 2. Gate Fail/Warn (GateDecision)
    // We need to link GateDecision -> Bill -> Author
    const gateDecisions = await prisma.$queryRaw<any[]>`
        SELECT billId, verdict FROM GateDecision WHERE createdAt BETWEEN ${start} AND ${end}
    `;

    for (const d of gateDecisions) {
        const author = billAuthors.get(d.billId);
        if (author && metricsMap.has(author)) {
            if (d.verdict === 'FAIL') metricsMap.get(author)!.failCount++;
            if (d.verdict === 'WARN') metricsMap.get(author)!.warnCount++;
        }
    }

    // 3. Audit Fail/Warn (AuditReport)
    const auditReports = await prisma.$queryRaw<any[]>`
        SELECT billId, verdict FROM AuditReport WHERE createdAt BETWEEN ${start} AND ${end}
    `;

    for (const a of auditReports) {
        const author = billAuthors.get(a.billId);
        if (author && metricsMap.has(author)) {
            if (a.verdict === 'FAIL') metricsMap.get(author)!.auditFailCount++;
            if (a.verdict === 'WARN') metricsMap.get(author)!.auditWarnCount++;
        }
    }

    // 4. Suspicious Flags
    // v1 Spec: Count SUSPICIOUS_EVENT types AND Policy Rule hits (SEMANTIC_EVASION etc)

    // A. Explicit Suspicious Events
    const suspiciousEvents = await prisma.$queryRaw<any[]>`
        SELECT actorId FROM EventLog 
        WHERE eventType = 'SUSPICIOUS_EVENT' 
          AND ts BETWEEN ${start} AND ${end}
    `;

    for (const e of suspiciousEvents) {
        if (e.actorId && metricsMap.has(e.actorId)) {
            metricsMap.get(e.actorId)!.suspiciousCount++;
        }
    }

    // B. Policy Rule Hits (SEMANTIC_EVASION regex match)
    // These might be logged as GateDecision reasons.
    const suspiciousDecisions = await prisma.$queryRaw<any[]>`
        SELECT billId, reasons FROM GateDecision 
        WHERE createdAt BETWEEN ${start} AND ${end} 
          AND reasons LIKE '%SEMANTIC_EVASION%'
    `;

    for (const d of suspiciousDecisions) {
        const author = billAuthors.get(d.billId);
        if (author && metricsMap.has(author)) {
            metricsMap.get(author)!.suspiciousCount++;
        }
    }

    // 5. Prev Longevity/Fitness (from previous AgentEpochScore)
    // epochKey is "YYYY-MM-DD". Need previous one.
    // We rely on caller or prev lookup.
    // For MVP, look up "last available" or strictly "yesterday"?
    // "Yesterday" is safer for strict epoch chains.
    // But if we skipped a day, EWMA might break.
    // Let's try to find the *most recent* score for each agent.

    for (const h of agentHandles) {
        // RAW SQL to get last score
        const lastScores = await prisma.$queryRaw<any[]>`
            SELECT longevity, fitnessNorm FROM AgentEpochScore 
            WHERE agentId = (SELECT id FROM Agent WHERE handle = ${h}) 
            ORDER BY createdAt DESC LIMIT 1
         `;

        if (lastScores.length > 0) {
            const prev = lastScores[0];
            // We store prevLongevity in the metrics map to be used by computeFitness
            // Wait, computeFitness expects `prevLongevity` in metrics? Yes I added it to interface.
            metricsMap.get(h)!.prevLongevity = prev.longevity;
            metricsMap.get(h)!.prevFitnessNorm = prev.fitnessNorm;
        }
    }

    return metricsMap;
}
