// Derived from JSON Schemas v0.1

export type HashString = string; // sha256:...
export type Timestamp = string; // ISO8601

// Base
export interface ArtifactBase {
    artifact_id: string;
    artifact_type: string;
    version: string; // 0.1.x
    created_at: Timestamp;
    created_by: string;
    content_hash: HashString;
    hash_canonicalization: "stable-json-v1";
    body: any;
}

// BillDraft
export interface BillDraft {
    bill_id: string;
    status: "DRAFT" | "SUBMITTED";
    lang: string;
    title: string;
    summary: string;
    articles: Array<{ id: string; text: string }>;
    requested_effective_date?: string;
    submitted_at: Timestamp;
    submitted_by: string;
    draft_hash: HashString;
}

// Bill
export interface Bill {
    bill_id: string;
    lang: string;
    title: string;
    summary: string;
    articles: Array<{ id: string; text: string }>;
    requested_effective_date?: string;
    published_at: Timestamp;
    published_by: string;
    bill_hash: HashString;
    source_draft_hash: HashString;
}

// TranslationArtifact
export interface TranslationArtifact {
    bill_id: string;
    source_lang: string;
    target_lang: string;
    translated_bill: Bill;
    translator_provenance: {
        translation_model: string;
        prompt_hash: HashString;
        input_hash: HashString;
        template_hash?: HashString;
        timestamp: Timestamp;
    };
}

// GateDecision
export interface GateDecision {
    bill_id: string;
    decision: "PASS" | "WARN" | "FAIL" | "NEEDS_MORE_EVIDENCE" | "ESCALATE";
    reason_codes: string[];
    rationale: string;
    required_followups?: string[];
    risk_assessment: {
        harm: "low" | "medium" | "high";
        deception: "low" | "medium" | "high";
        privacy: "low" | "medium" | "high";
    };
    trace: {
        proposal_hash: HashString;
        evidence_hash: HashString;
        policy_version: string;
    };
}

// AuditReport
export interface AuditReport {
    bill_id: string;
    audit_version: string;
    verdict: "PASS" | "WARN" | "FAIL";
    severity: "LOW" | "MEDIUM" | "HIGH";
    reasons: Array<{ code: string; summary: string; evidence: string[] }>;
    violated_constraints?: string[];
    translation_integrity: {
        status: "PASS" | "WARN" | "FAIL";
        notes?: string;
    };
    recommended_action: {
        status: "ALLOW" | "HOLD" | "BLOCK";
        required_next_step?: string;
    };
    audit_provenance: {
        auditor_model: string;
        prompt_hash: HashString;
        timestamp: Timestamp;
    };
}

// DecisionBundle
export interface DecisionBundle {
    bundle_id: string;
    bill_id: string;
    bill: Bill;
    translation: TranslationArtifact;
    evidence_bundle: any; // Using any for brevity unless full type needed
    gate_decision: GateDecision;
    audit_report: AuditReport;
    final_decision: {
        status: "PASS" | "WARN" | "FAIL";
        explanation: string;
    };
    timestamps: {
        submitted_at: Timestamp;
        evaluated_at: Timestamp;
        published_at: Timestamp;
    };
    bundle_hash: HashString;
}

// Event
export interface LedgerEvent {
    event_id: string;
    timestamp: Timestamp;
    actor_id: string;
    action: "SUBMIT_BILL" | "TRANSLATE" | "GATE_EVAL" | "AUDIT_EVAL" | "PUBLISH_BUNDLE" | "EMERGENCY_STOP" | "EMERGENCY_RESUME";
    entity_refs: {
        bill_id?: string;
        bundle_id?: string;
        artifact_ids?: string[];
    };
    data_hash: HashString;
    prev_event_hash: HashString;
    event_hash: HashString;
}
