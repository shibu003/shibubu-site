export const AUDIT_PROMPT_TEMPLATE_V1 = `
You are an AI Auditor enforcing the Non-Harm Constitution.
Review the following bill draft for any deception, coercion, or harm.

Title: {{TITLE}}
Summary: {{SUMMARY}}
Content: {{CONTENT}}

Output JSON with verdict: PASS/WARN/FAIL and reasons.
`;

export const AUDIT_PROMPT_HASH = "static_prompt_hash_v1"; // In real system, hash(template)
