// app/ielts-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  ieltsSectionListSchema,
} from "./dasaSchema";
import DasaCOACHING from "./dasa";

export const metadata: Metadata = {
  title: "Best IELTS Coaching in Gurgaon | Band 7.5+ | EduQuest",
  description:
    "Ace IELTS with EduQuest — India's leading IELTS coaching institute in Gurgaon. Certified trainers, 8+ full-length mocks, personalised band plans and Speaking/Writing feedback for UK, Australia, Canada and US admissions and immigration. Trusted by 10,000+ students.",

  keywords: [
    // ── Core IELTS terms ────────────────────────────────────────────
    "IELTS exam",
    "IELTS exam 2025",
    "IELTS exam India",
    "IELTS exam dates 2025",
    "IELTS exam dates India 2025",
    "IELTS exam registration 2025",
    "IELTS exam registration India",
    "IELTS exam schedule 2025",
    "IELTS exam syllabus",
    "IELTS exam pattern",
    "IELTS exam fee India",
    "IELTS exam centres India",
    "IELTS exam centres Gurgaon",
    "IELTS exam score",
    "IELTS band score",
    "IELTS band 7",
    "IELTS band 7.5",
    "IELTS band 8",
    "IELTS band 9",
    "IELTS overall band score",
    "IELTS scoring scale",
    "IELTS percentile",
    "what is IELTS exam",
    "IELTS full form",
    "International English Language Testing System",
    "IELTS Academic",
    "IELTS General Training",
    "IELTS Academic vs General",
    "IELTS on Computer",
    "IELTS on Paper",
    "IELTS computer based test India",
    "IELTS paper based test India",
    "IELTS result time India",
    "IELTS score validity",
    "IELTS vs TOEFL",
    "IELTS vs PTE",
    "IELTS vs Duolingo",
    "which English test for Canada PR",
    "which English test for UK visa",
    "which English test for Australia PR",

    // ── Section-specific — Listening ────────────────────────────────
    "IELTS Listening",
    "IELTS Listening tips",
    "IELTS Listening practice",
    "IELTS Listening note completion",
    "IELTS Listening map labelling",
    "IELTS Listening multiple choice",
    "IELTS Listening band 9",
    "IELTS Listening section types",
    "how to improve IELTS Listening score",

    // ── Section-specific — Reading ───────────────────────────────────
    "IELTS Reading",
    "IELTS Reading tips",
    "IELTS Reading Academic",
    "IELTS Reading General",
    "IELTS Reading True False Not Given",
    "IELTS Reading Matching Headings",
    "IELTS Reading skimming scanning",
    "IELTS Reading practice",
    "IELTS Reading band 9",
    "how to improve IELTS Reading score",

    // ── Section-specific — Writing ───────────────────────────────────
    "IELTS Writing",
    "IELTS Writing Task 1",
    "IELTS Writing Task 2",
    "IELTS Writing Task 1 Academic graphs",
    "IELTS Writing Task 1 General letter",
    "IELTS Writing Task 2 essay",
    "IELTS Writing tips",
    "IELTS Writing band 7",
    "IELTS Writing band 8",
    "IELTS Writing practice",
    "IELTS essay writing tips",
    "how to improve IELTS Writing score",
    "IELTS Writing Task 2 topics",
    "IELTS argumentative essay",

    // ── Section-specific — Speaking ──────────────────────────────────
    "IELTS Speaking",
    "IELTS Speaking tips",
    "IELTS Speaking Part 1",
    "IELTS Speaking Part 2",
    "IELTS Speaking Part 3",
    "IELTS Speaking cue card",
    "IELTS Speaking practice",
    "IELTS Speaking band 7",
    "IELTS Speaking band 8",
    "how to improve IELTS Speaking score",
    "IELTS Speaking fluency",
    "IELTS Speaking topics 2025",

    // ── Coaching & preparation ───────────────────────────────────────
    "IELTS coaching",
    "IELTS coaching India",
    "IELTS coaching Gurgaon",
    "IELTS coaching Gurugram",
    "IELTS coaching Delhi",
    "IELTS coaching Delhi NCR",
    "IELTS coaching Mumbai",
    "IELTS coaching Bangalore",
    "IELTS coaching Chennai",
    "IELTS coaching Hyderabad",
    "IELTS coaching online India",
    "IELTS online classes India",
    "IELTS online coaching",
    "IELTS exam preparation India",
    "IELTS exam preparation tips",
    "IELTS exam preparation strategy",
    "IELTS preparation timeline",
    "IELTS 6 week preparation plan",
    "IELTS 3 month preparation plan",
    "IELTS practice test",
    "IELTS mock test",
    "IELTS mock test series",
    "IELTS full length mock test",
    "IELTS free mock test India",
    "IELTS study material India",
    "IELTS study guide",
    "IELTS tutor India",
    "IELTS tutor online",
    "best IELTS coaching India",
    "best IELTS coaching Gurgaon",
    "EduQuest IELTS coaching",
    "EduQuest IELTS",
    "IELTS coaching for students India",
    "IELTS coaching for professionals India",
    "how to prepare for IELTS",
    "IELTS self study plan",
    "IELTS crash course",
    "IELTS short term coaching",
    "IELTS weekend classes Gurgaon",

    // ── Band improvement ─────────────────────────────────────────────
    "how to get band 7 in IELTS",
    "how to get band 7.5 in IELTS",
    "how to get band 8 in IELTS",
    "how to improve IELTS band score",
    "IELTS score improvement tips",
    "IELTS from 6 to 7",
    "IELTS from 6.5 to 7.5",
    "IELTS band predictor",

    // ── UK university admissions ─────────────────────────────────────
    "IELTS for UK university",
    "IELTS for Oxford",
    "IELTS for Cambridge",
    "IELTS for Imperial College",
    "IELTS for LSE",
    "IELTS for UCL",
    "IELTS for UK student visa",
    "IELTS requirement UK universities",
    "study in UK from India IELTS",

    // ── Canada admissions and immigration ────────────────────────────
    "IELTS for Canada PR",
    "IELTS for Canada study permit",
    "IELTS for Express Entry Canada",
    "IELTS for University of Toronto",
    "IELTS for UBC",
    "IELTS for McGill",
    "IELTS for Canada immigration",
    "IELTS CLB 7 Canada",
    "study in Canada from India IELTS",
    "Canada PR IELTS requirement",

    // ── Australia admissions and immigration ─────────────────────────
    "IELTS for Australia PR",
    "IELTS for Australia student visa",
    "IELTS for University of Melbourne",
    "IELTS for UNSW",
    "IELTS for Monash University",
    "IELTS for Australian immigration",
    "study in Australia from India IELTS",
    "Australia skilled migration IELTS",

    // ── USA and other countries ──────────────────────────────────────
    "IELTS for US universities",
    "IELTS for New Zealand",
    "IELTS for Singapore universities",
    "IELTS for Europe universities",
    "IELTS for Germany universities",

    // ── Immigration and professional ─────────────────────────────────
    "IELTS for immigration India",
    "IELTS for nursing UK",
    "IELTS for doctors UK GMC",
    "IELTS for engineering professionals",
    "IELTS OET difference",
    "IELTS Life Skills",
    "IELTS UKVI",
    "IELTS for spouse visa UK",

    // ── Local / geo-specific ─────────────────────────────────────────
    "IELTS coaching DLF Phase IV",
    "IELTS coaching Golf Course Road Gurgaon",
    "IELTS coaching Sohna Road",
    "IELTS coaching South City Gurgaon",
    "IELTS coaching Sector 50 Gurgaon",
    "IELTS coaching MG Road Gurgaon",
    "IELTS coaching Cyber City",
    "IELTS coaching Faridabad",
    "IELTS coaching Noida",
    "IELTS coaching near me",

    // ── Informational / long-tail ────────────────────────────────────
    "what is IELTS coaching",
    "when to take IELTS exam India",
    "IELTS coaching fees India",
    "IELTS coaching fees Gurgaon",
    "IELTS batch size India",
    "small batch IELTS coaching Gurgaon",
    "IELTS diagnostic test India",
    "IELTS personalised study plan",
    "IELTS coaching with speaking practice",
    "IELTS coaching with writing feedback",
    "is IELTS hard for Indian students",
    "IELTS difficulty level India",
    "IELTS last minute tips",
    "IELTS exam day strategy",
    "IELTS time management tips",
    "IELTS common mistakes Indian students",
    "IELTS vocabulary list",
    "IELTS grammar tips",
    "IELTS pronunciation tips",
    "IELTS Academic Writing Task 2 band descriptors",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/ielts-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/ielts-coaching/",
      en: "https://eduquest.org.in/ielts-coaching/",
      "en-IN": "https://eduquest.org.in/ielts-coaching/",
    },
  },

  openGraph: {
    title: "Best IELTS Coaching in Gurgaon | Band 7.5+ | EduQuest",
    description:
      "India's top IELTS coaching — all four skills (Listening, Reading, Writing, Speaking), certified trainers, 8+ full-length mocks and personalised band plans for UK, Australia, Canada and US admissions and immigration.",
    url: "https://eduquest.org.in/ielts-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest IELTS Coaching Gurgaon India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IELTS Coaching Gurgaon | Band 7.5+ | EduQuest India",
    description:
      "Ace IELTS with India's top coaching — certified trainers, full mocks, Speaking and Writing feedback for UK, Australia, Canada and US.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function DasaCoachingPage() {
  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ieltsSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <DasaCOACHING />
    </>
  );
}