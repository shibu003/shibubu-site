import type { BillDraft, TranslationArtifact } from "../constitution/schema";

export async function translateBill(bill: BillDraft): Promise<TranslationArtifact> {
    return {
        source_lang: bill.lang,
        target_lang: "en-US",
        translated_title: bill.title,
        translated_summary: bill.summary,
        translated_articles: bill.articles,
        provenance: {
            translation_model: "stub-translator-v1",
            prompt_hash: "static_hash_v1",
            timestamp: new Date().toISOString()
        }
    };
}
