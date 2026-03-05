import crypto from "crypto";

export function createTranslationProvenance(
    sourceLang: string,
    targetLang: string,
    model: string,
    input: string
) {
    const hash = crypto.createHash("sha256").update(input).digest("hex");
    return {
        source_lang: sourceLang,
        target_lang: targetLang,
        translator_model: model,
        template_hash: "trans_template_v1",
        input_hash: hash,
        timestamp: new Date().toISOString()
    };
}
