export function composeDecisionBundle({
    policy,
    audit,
}: {
    policy: any;
    audit: any;
}) {
    return {
        timestamp: new Date().toISOString(),
        final_verdict:
            policy.verdict === "FAIL" || audit.verdict === "FAIL"
                ? "FAIL"
                : "PASS",
        policy,
        audit,
    };
}
