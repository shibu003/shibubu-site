export const NON_HARM_PROHIBITED_CATEGORIES = [
    "PHYSICAL_HARM",
    "COERCION",
    "FRAUD",
    "DECEPTION",
    "DISCRIMINATION",
    "MANIPULATION",
];

export function detectProhibitedContent(text: string) {
    const lower = text.toLowerCase();

    if (lower.includes("mislead") || lower.includes("deceive"))
        return { category: "DECEPTION" };

    if (lower.includes("force") || lower.includes("coerce"))
        return { category: "COERCION" };

    return null;
}
