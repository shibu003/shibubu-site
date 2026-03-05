export interface BillDraft {
    bill_id: string;
    source_lang: string;
    title: string;
    summary: string;
    content: any; // JSON article structure
}

export interface TranslationArtifact {
    bill_id: string;
    target_lang: string;
    translated_content: any;
    provenance: {
        source_lang: string;
        target_lang: string;
        translator_model: string;
        template_hash: string;
        input_hash: string;
        timestamp: string;
    };
}

export interface GateDecision {
    verdict: "PASS" | "WARN" | "FAIL";
    reasons: { code: string; summary: string; evidence: string[] }[];
    policy_version: string;
    input_hash: string;
}

export interface AuditReport {
    verdict: "PASS" | "WARN" | "FAIL";
    severity: "LOW" | "MEDIUM" | "HIGH";
    reasons: { code: string; summary: string; evidence: string[] }[];
    audit_provenance: {
        auditor_model: string;
        prompt_hash: string;
        timestamp: string;
        input_hash: string;
    };
}

export interface DecisionBundle {
    bundle_id: string;
    bill: BillDraft;
    translation?: TranslationArtifact;
    gate_decision: GateDecision;
    audit_report: AuditReport;
    bundle_hash: string;
    created_at: string;
}

export interface EvaluationResult {
    ruleId: string;
    status: "PASS" | "WARN" | "FAIL";
    message?: string;
    evidence?: string[];
}

export interface PolicyRule {
    id: string;
    description: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    check: (bill: BillDraft) => Promise<EvaluationResult>;
}

// End of types
