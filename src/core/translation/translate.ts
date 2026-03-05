import { createTranslationProvenance } from "./provenance";
import type { BillDraft } from "../governance/types";

export async function translateBillDraft(bill: BillDraft, targetLang: string) {
    // Mock translation: just prefix [EN] for now
    const contentStr = JSON.stringify(bill.content);

    const translatedContent = {
        ...bill.content,
        articles: Array.isArray(bill.content.articles)
            ? bill.content.articles.map((a: any) => ({ ...a, text: `[${targetLang}] ${a.text}` }))
            : bill.content.articles
    };

    const provenance = createTranslationProvenance(
        bill.source_lang,
        targetLang,
        "stub-translator-v1",
        contentStr
    );

    return {
        bill_id: bill.bill_id,
        target_lang: targetLang,
        translated_content: translatedContent,
        provenance
    };
}
