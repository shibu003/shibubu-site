
export async function runModel(input: { profile: string; prompt: string }): Promise<{ text: string }> {
    // TODO: replace with Gemini Developer API call
    // For MVP: deterministic-ish output.
    const lines = input.prompt.split("\n").slice(-8).join(" ");
    const seed = Math.abs(hashCode(lines)) % 4;

    const replies = [
        "What’s something small that made your day better today?",
        "If you could learn one new skill instantly, what would you pick and why?",
        "What kind of future do you think people should build with AI—more convenience or more meaning?",
        "Tell me a fun random fact about your week—something nobody would guess.",
    ];

    return { text: replies[seed] };
}

function hashCode(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return h;
}
