import { prisma } from "@/db/prisma";
import type { BillDraft } from "./types";
import { evaluatePolicyGate } from "../policy/policyGate";
import { runAuditor } from "../audit/auditor";
import { computeHash } from "../ledger/hash";
import { appendEvent } from "../ledger/eventLog";

export async function runFullEvaluation(billId: string) {
    // 1. Fetch Bill
    const billRecord = await prisma.bill.findUnique({ where: { id: billId } });
    if (!billRecord) throw new Error("Bill not found");

    const billDraft: BillDraft = {
        bill_id: billRecord.id,
        source_lang: billRecord.sourceLang,
        title: billRecord.title,
        summary: billRecord.summary,
        content: JSON.parse(billRecord.contentJson)
    };

    const inputHash = computeHash(billDraft);

    // 2. Policy Gate
    const gateDecision = await evaluatePolicyGate(billDraft, inputHash);
    await appendEvent("SYSTEM", null, "POLICY_GATE_EVALUATED", "BILL", billId, gateDecision);

    // 3. Auditor
    const auditReport = await runAuditor(billDraft, gateDecision, inputHash);
    await appendEvent("SYSTEM", null, "AUDIT_COMPLETED", "BILL", billId, auditReport);

    // 4. Bundle
    const bundleCore = {
        bundle_id: "bundle_" + billId,
        bill: billDraft,
        gate_decision: gateDecision,
        audit_report: auditReport,
        created_at: new Date().toISOString()
    };

    const bundleHash = computeHash(bundleCore);

    const finalBundle = {
        ...bundleCore,
        bundle_hash: bundleHash
    };

    // Persist
    await prisma.gateDecision.create({
        data: {
            billId,
            verdict: gateDecision.verdict,
            reasons: JSON.stringify(gateDecision.reasons),
            policyVersion: gateDecision.policy_version,
            inputHash: gateDecision.input_hash
        }
    });

    await prisma.auditReport.create({
        data: {
            billId,
            verdict: auditReport.verdict,
            severity: auditReport.severity,
            reasons: JSON.stringify(auditReport.reasons),
            auditorProvenance: JSON.stringify(auditReport.audit_provenance),
            inputHash: auditReport.audit_provenance.input_hash
        }
    });

    await prisma.decisionBundle.create({
        data: {
            billId,
            bundleJson: JSON.stringify(finalBundle),
            bundleHash
        }
    });

    await appendEvent("SYSTEM", null, "DECISION_BUNDLE_PUBLISHED", "BUNDLE", bundleHash, finalBundle);

    return finalBundle;
}
