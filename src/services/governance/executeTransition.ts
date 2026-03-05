import { prisma } from "@/db/prisma";
import { isSystemHalted } from "@/core/ledger/systemState";
import { evaluatePolicyGate } from "@/core/policy/policyGate";
import { runAuditor } from "@/core/audit/auditor";
import { appendEvent } from "@/core/ledger/eventLog";
import { createMerkleSnapshot } from "@/core/ledger/merkle";
import { BillDraft } from "@/core/governance/types";

function generateId() {
    return Math.random().toString(36).substring(2, 15);
}

// "This is the ONLY allowed entry point for state changes"
export async function executeTransition(bill: BillDraft, startHash: string) {
    console.log(`[ReferenceMonitor] Starting transition for bill ${bill.bill_id}`);

    // 1. INVARIANT: System must not be halted
    const halted = await isSystemHalted();
    if (halted) {
        console.error("[ReferenceMonitor] BLOCKED: System is Halted");
        await appendEvent("SYSTEM", "REF_MONITOR", "TRANSITION_BLOCKED_HALTED", "BILL", bill.bill_id, { reason: "System Halted" });
        throw new Error("System is HALTED. No state transitions allowed.");
    }

    // 2. Policy Gate (Deterministic + Risk Score)
    const gateDecision = await evaluatePolicyGate(bill, startHash);

    // RAW SQL INSERT for GateDecision (Instruction 7 fields: deterministic, riskScore)
    // We must manually serialize reasons array
    const gateId = generateId();
    await prisma.$executeRaw`
        INSERT INTO "GateDecision" (id, billId, verdict, deterministic, riskScore, reasons, policyVersion, inputHash, createdAt)
        VALUES (${gateId}, ${bill.bill_id}, ${gateDecision.verdict}, ${1} /* true */, ${null}, ${JSON.stringify(gateDecision.reasons)}, ${gateDecision.policy_version}, ${gateDecision.input_hash}, ${new Date().toISOString()})
    `;

    await appendEvent("SYSTEM", "POLICY_GATE", "GATE_EVALUATED", "BILL", bill.bill_id, { verdict: gateDecision.verdict });

    // 2.1 Check for Suspicious Activity (Deception/Evasion/Lock patterns)
    // Spec: Emit SUSPICIOUS_EVENT if specific rules are hit
    const suspiciousRules = ["DECEPTION_PROPOSED", "SEMANTIC_EVASION", "CONSTITUTIONAL_TERM_LOCK"];
    // Extract rule IDs from violations
    const hitRules = gateDecision.reasons.map(v => v.code);
    // Also check if reasons was populated directly (depending on return type implementation)

    const isSuspicious = hitRules.some(r => suspiciousRules.includes(r));
    if (isSuspicious) {
        console.warn(`[ReferenceMonitor] Suspicious activity detected in bill ${bill.bill_id}`);
        await appendEvent("SYSTEM", "POLICY_GATE", "SUSPICIOUS_EVENT", "BILL", bill.bill_id, {
            reason: "Policy Rule Triggered",
            rules: hitRules.filter(r => suspiciousRules.includes(r))
        });
    }

    if (gateDecision.verdict === "FAIL") {
        console.warn("[ReferenceMonitor] BLOCKED: Policy Gate FAIL");
        return {
            verdict: "FAIL",
            gate: gateDecision,
            audit: null,
            bundle: null
        };
    }

    // 3. Audit Layer (Independent)
    const auditReport = await runAuditor(bill, gateDecision, startHash);

    // Prisma Client allows audit report logging because we didn't change its schema in a breaking way
    const auditId = generateId();
    await prisma.$executeRaw`
        INSERT INTO "AuditReport" (id, billId, verdict, severity, reasons, auditorProvenance, inputHash, createdAt)
        VALUES (${auditId}, ${bill.bill_id}, ${auditReport.verdict}, ${auditReport.severity}, ${JSON.stringify(auditReport.reasons)}, ${JSON.stringify(auditReport.audit_provenance)}, ${auditReport.audit_provenance.input_hash}, ${new Date().toISOString()})
    `;

    await appendEvent("AI_COUNCIL", "AUDITOR_STUB", "AUDIT_COMPLETED", "BILL", bill.bill_id, { verdict: auditReport.verdict });

    // 4. Decision Bundle Construction
    const bundle = {
        bill_id: bill.bill_id,
        gate_decision: gateDecision,
        audit_report: auditReport,
        timestamp: new Date().toISOString()
    };

    // 5. Finalize Bundle (Official State Commit)
    const bundleJson = JSON.stringify(bundle);
    const bundleId = "bundle_" + bill.bill_id;
    // We assume SHA256 logic exists, simplified here
    const crypto = require('crypto');
    const bundleHash = crypto.createHash('sha256').update(bundleJson).digest('hex');

    await prisma.$executeRaw`
        INSERT INTO "DecisionBundle" (id, billId, bundleJson, bundleHash, createdAt)
        VALUES (${bundleId}, ${bill.bill_id}, ${bundleJson}, ${bundleHash}, ${new Date().toISOString()})
    `;

    await appendEvent("SYSTEM", "REF_MONITOR", "BUNDLE_COMMITTED", "BUNDLE", bundleId, { hash: bundleHash });

    return {
        verdict: "PASS",
        gate: gateDecision,
        audit: auditReport,
        bundle: { bundle_id: bundleId, bundle_hash: bundleHash }
    };
}
