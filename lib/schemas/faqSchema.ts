// lib/schemas/faqSchema.ts
import type { FAQItem } from "@/app/data/faq";

export function buildFAQSchema(faqs: FAQItem[]) {
  // Guard — if faqs is undefined/null/empty, return null so the caller
  // can skip rendering the <JsonLd> component entirely
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }
 
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}