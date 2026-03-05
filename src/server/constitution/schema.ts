export interface BillDraft {
    bill_id: string;
    lang: string; // BCP47
    title: string;
    summary: string;
    articles: {
        id: string;
        text: string;
    }[];
    requested_effective_date: string;
}

export interface TranslationArtifact {
    source_lang: string;
    target_lang: string;
    translated_title: string;
    translated_summary: string;
    translated_articles: {
        id: string;
        text: string;
    }[];
    provenance: {
        translation_model: string;
        prompt_hash: string;
        timestamp: string;
    };
}

export interface GateViolation {
    code: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    evidence: string[];
}

export interface GateDecision {
    status: "PASS" | "WARN" | "FAIL";
    violations: GateViolation[];
    evaluated_at: string;
}

export interface AuditReport {
    verdict: "PASS" | "WARN" | "FAIL";
    severity: "LOW" | "MEDIUM" | "HIGH";
    reasons: {
        code: string;
        summary: string;
        evidence: string[];
    }[];
    audit_provenance: {
        auditor_model: string;
        prompt_hash: string;
        timestamp: string;
    };
}

export interface DecisionBundle {
    bill_id: string;
    bundle_hash: string;
    translation: TranslationArtifact;
    gate_decision: GateDecision;
    audit_report: AuditReport;
    created_at: string;
}
