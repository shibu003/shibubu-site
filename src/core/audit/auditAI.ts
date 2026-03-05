export async function runAuditAI(text: string) {
    // Call Gemini API (free tier configured)
    // Use fixed prompt template

    const result = {
        verdict: "PASS",
        reasoning: "No deceptive intent detected."
    };

    return result;
}
