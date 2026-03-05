import { ajv } from "./ajv";

// IMPORTANT: ensure these paths match your repo layout
// JSON imports require specific TS config or just use require/fs if strict.
// For Next.js/Webpack, import is fine if configured. 
// However, to be safe and match instruction exactly:

const artifactSchema = require("../../../schemas/v0_1/artifact.schema.json");
const billDraftSchema = require("../../../schemas/v0_1/bill_draft.schema.json");
const billSchema = require("../../../schemas/v0_1/bill.schema.json");
const translationSchema = require("../../../schemas/v0_1/translation_artifact.schema.json");
const evidenceSchema = require("../../../schemas/v0_1/evidence_bundle.schema.json");
const gateSchema = require("../../../schemas/v0_1/gate_decision.schema.json");
const auditSchema = require("../../../schemas/v0_1/audit_report.schema.json");
const bundleSchema = require("../../../schemas/v0_1/decision_bundle.schema.json");
const eventSchema = require("../../../schemas/v0_1/event.schema.json");
const epochScoresSchema = require("../../../schemas/v0_1/epoch_scores.schema.json");
const purposeSchema = require("../../../schemas/v0_1/purpose_register.schema.json");

export function registerSchemas() {
    // id-based schema resolution
    ajv.addSchema(artifactSchema);
    ajv.addSchema(billDraftSchema);
    ajv.addSchema(billSchema);
    ajv.addSchema(translationSchema);
    ajv.addSchema(evidenceSchema);
    ajv.addSchema(gateSchema);
    ajv.addSchema(auditSchema);
    ajv.addSchema(bundleSchema);
    ajv.addSchema(eventSchema);
    ajv.addSchema(epochScoresSchema);
    ajv.addSchema(purposeSchema);
}
