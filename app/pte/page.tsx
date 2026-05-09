// app/english-test-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  ieltsCoursSchema,
  toeflCourseSchema,
  pteCourseSchema,
  duolingoCourseSchema,
  organizationSchema,
  webPageSchema,
  testSectionListSchema,
} from "./pteSchema";
import DasaCOACHING from "./pte";
import PTECOACHING from "./pte";

export const metadata: Metadata = {
  title: "Best IELTS, TOEFL, PTE & Duolingo Coaching in Gurgaon | EduQuest",
  description:
    "Ace IELTS, TOEFL iBT, PTE Academic or Duolingo English Test with EduQuest — India's leading English test coaching institute in Gurgaon. Certified trainers, full-length mocks, personalised score plans and Speaking/Writing feedback for UK, Australia, Canada and US admissions and immigration. Trusted by 10,000+ students.",

  keywords: [
    // ── General English test terms ────────────────────────────────────
    "English proficiency test coaching India",
    "English proficiency test coaching Gurgaon",
    "English test coaching Gurgaon",
    "English test coaching Delhi NCR",
    "best English test coaching India",
    "IELTS TOEFL PTE Duolingo coaching Gurgaon",
    "study abroad English test coaching India",
    "which English test should I take",
    "IELTS vs TOEFL vs PTE vs Duolingo",
    "English test for Canada PR",
    "English test for Australia immigration",
    "English test for UK visa",
    "English test for US university",

    // ── IELTS core ────────────────────────────────────────────────────
    "IELTS exam",
    "IELTS exam 2025",
    "IELTS exam India",
    "IELTS exam dates 2025",
    "IELTS exam registration India",
    "IELTS exam fee India",
    "IELTS band score",
    "IELTS band 7",
    "IELTS band 7.5",
    "IELTS band 8",
    "IELTS Academic",
    "IELTS General Training",
    "IELTS Academic vs General",
    "IELTS on Computer",
    "IELTS score validity",
    "what is IELTS exam",
    "IELTS full form",
    "International English Language Testing System",

    // ── IELTS sections ────────────────────────────────────────────────
    "IELTS Listening tips",
    "IELTS Listening practice",
    "IELTS Reading True False Not Given",
    "IELTS Reading Matching Headings",
    "IELTS Writing Task 1",
    "IELTS Writing Task 2",
    "IELTS Writing Task 2 essay topics",
    "IELTS Writing band 7",
    "IELTS Speaking cue card",
    "IELTS Speaking Part 1 2 3",
    "how to improve IELTS band score",
    "IELTS from 6 to 7",
    "IELTS from 6.5 to 7.5",
    "how to get band 8 in IELTS",

    // ── IELTS coaching ────────────────────────────────────────────────
    "IELTS coaching",
    "IELTS coaching India",
    "IELTS coaching Gurgaon",
    "IELTS coaching Gurugram",
    "IELTS coaching Delhi",
    "IELTS coaching Delhi NCR",
    "IELTS coaching online India",
    "IELTS online classes India",
    "best IELTS coaching Gurgaon",
    "IELTS mock test",
    "IELTS full length mock test",
    "IELTS practice test",
    "IELTS crash course",
    "IELTS weekend classes Gurgaon",
    "EduQuest IELTS coaching",

    // ── IELTS immigration & university ───────────────────────────────
    "IELTS for Canada PR",
    "IELTS for Canada study permit",
    "IELTS for Express Entry Canada",
    "IELTS CLB 7 Canada",
    "IELTS for Australia PR",
    "IELTS for Australia student visa",
    "Australia skilled migration IELTS",
    "IELTS for UK university",
    "IELTS for UK student visa",
    "IELTS for Oxford Cambridge",
    "IELTS for US universities",
    "IELTS UKVI",
    "IELTS for nursing UK",
    "IELTS for doctors UK GMC",

    // ── TOEFL core ────────────────────────────────────────────────────
    "TOEFL exam",
    "TOEFL iBT",
    "TOEFL exam India",
    "TOEFL exam 2025",
    "TOEFL exam dates India 2025",
    "TOEFL exam registration India",
    "TOEFL exam fee India",
    "TOEFL score",
    "TOEFL score 100",
    "TOEFL score 110",
    "TOEFL score validity",
    "TOEFL exam pattern",
    "TOEFL exam syllabus",
    "what is TOEFL exam",
    "TOEFL full form",
    "TOEFL vs IELTS India",

    // ── TOEFL sections ────────────────────────────────────────────────
    "TOEFL Reading tips",
    "TOEFL Listening tips",
    "TOEFL Speaking Independent Task",
    "TOEFL Speaking Integrated Task",
    "TOEFL Writing Integrated Task",
    "TOEFL Academic Discussion Task",
    "how to improve TOEFL score",
    "TOEFL score 80 to 100",

    // ── TOEFL coaching ────────────────────────────────────────────────
    "TOEFL coaching",
    "TOEFL coaching India",
    "TOEFL coaching Gurgaon",
    "TOEFL coaching Gurugram",
    "TOEFL coaching Delhi",
    "TOEFL coaching Delhi NCR",
    "TOEFL online coaching India",
    "best TOEFL coaching Gurgaon",
    "TOEFL mock test India",
    "TOEFL practice test",
    "EduQuest TOEFL coaching",

    // ── TOEFL university targets ──────────────────────────────────────
    "TOEFL for US universities",
    "TOEFL for Ivy League",
    "TOEFL for MIT Stanford Harvard",
    "TOEFL for Canada universities",
    "TOEFL for University of Toronto",
    "TOEFL for UK universities",
    "TOEFL score requirement universities",

    // ── PTE core ──────────────────────────────────────────────────────
    "PTE Academic",
    "PTE exam",
    "PTE exam India",
    "PTE exam 2025",
    "PTE exam dates India 2025",
    "PTE exam registration India",
    "PTE exam fee India",
    "PTE score",
    "PTE score 65",
    "PTE score 79",
    "PTE score validity",
    "PTE exam pattern",
    "PTE exam syllabus",
    "what is PTE exam",
    "PTE full form",
    "Pearson Test of English",
    "PTE vs IELTS India",
    "PTE results 48 hours",

    // ── PTE tasks ────────────────────────────────────────────────────
    "PTE Read Aloud tips",
    "PTE Repeat Sentence tips",
    "PTE Describe Image tips",
    "PTE Write Essay tips",
    "PTE Write from Dictation tips",
    "PTE Summarise Written Text",
    "how to improve PTE score",
    "PTE AI scoring tips",

    // ── PTE coaching ─────────────────────────────────────────────────
    "PTE coaching",
    "PTE coaching India",
    "PTE coaching Gurgaon",
    "PTE coaching Gurugram",
    "PTE coaching Delhi",
    "PTE coaching Delhi NCR",
    "PTE online coaching India",
    "best PTE coaching Gurgaon",
    "PTE mock test India",
    "PTE practice test",
    "EduQuest PTE coaching",

    // ── PTE immigration & university ──────────────────────────────────
    "PTE for Australia PR",
    "PTE for Australian skilled migration",
    "PTE for Australia student visa",
    "PTE score for Australia immigration",
    "PTE for UK visa",
    "PTE for Canada immigration",
    "PTE for New Zealand immigration",
    "PTE score 65 immigration",
    "PTE score 79 immigration points",

    // ── Duolingo core ────────────────────────────────────────────────
    "Duolingo English Test",
    "DET exam",
    "Duolingo English Test India",
    "Duolingo English Test 2025",
    "Duolingo test score",
    "Duolingo test score 120",
    "Duolingo test score 130",
    "Duolingo test fee India",
    "Duolingo test results 2 days",
    "what is Duolingo English Test",
    "Duolingo test vs IELTS",
    "Duolingo test vs TOEFL",
    "Duolingo test vs PTE",
    "Duolingo test accepted universities",

    // ── Duolingo tasks ───────────────────────────────────────────────
    "Duolingo Read and Select tips",
    "Duolingo Speak About the Photo tips",
    "Duolingo Write About the Photo tips",
    "Duolingo video interview tips",
    "Duolingo adaptive test tips",
    "how to improve Duolingo English Test score",
    "Duolingo score 120 strategy",

    // ── Duolingo coaching ────────────────────────────────────────────
    "Duolingo English Test coaching",
    "Duolingo coaching India",
    "Duolingo coaching Gurgaon",
    "Duolingo coaching Gurugram",
    "Duolingo coaching Delhi",
    "Duolingo online coaching India",
    "best Duolingo coaching India",
    "Duolingo practice test India",
    "EduQuest Duolingo coaching",

    // ── Duolingo university targets ───────────────────────────────────
    "Duolingo for US universities",
    "Duolingo for Canadian universities",
    "Duolingo for UK universities",
    "Duolingo for Northeastern Georgetown",
    "Duolingo score requirement universities",
    "Duolingo accepted universities India",

    // ── Local / geo-specific ─────────────────────────────────────────
    "English test coaching DLF Phase IV Gurgaon",
    "English test coaching Golf Course Road Gurgaon",
    "English test coaching Cyber City Gurgaon",
    "English test coaching Sector 50 Gurgaon",
    "English test coaching South City Gurgaon",
    "English test coaching MG Road Gurgaon",
    "IELTS TOEFL PTE coaching near me",
    "English test coaching Noida",
    "English test coaching Faridabad",

    // ── Informational / long-tail ────────────────────────────────────
    "how to prepare for IELTS TOEFL PTE",
    "English test coaching fees Gurgaon",
    "small batch English test coaching Gurgaon",
    "personalised English test coaching India",
    "English test coaching with writing feedback",
    "English test coaching with speaking practice",
    "English test diagnostic test India",
    "is IELTS hard for Indian students",
    "is TOEFL hard for Indian students",
    "IELTS TOEFL PTE last minute tips",
    "IELTS TOEFL PTE exam day strategy",
    "IELTS TOEFL PTE common mistakes Indian students",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/english-test-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/english-test-coaching/",
      en:           "https://eduquest.org.in/english-test-coaching/",
      "en-IN":      "https://eduquest.org.in/english-test-coaching/",
    },
  },

  openGraph: {
    title: "Best IELTS, TOEFL, PTE & Duolingo Coaching in Gurgaon | EduQuest",
    description:
      "India's top English test coaching — IELTS, TOEFL iBT, PTE Academic and Duolingo. Certified trainers, full-length mocks and personalised score plans for UK, Australia, Canada and US admissions and immigration.",
    url: "https://eduquest.org.in/english-test-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest IELTS TOEFL PTE Duolingo Coaching Gurgaon India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IELTS, TOEFL, PTE & Duolingo Coaching Gurgaon | EduQuest India",
    description:
      "Ace your English proficiency test with India's top coaching — IELTS, TOEFL, PTE and Duolingo. Certified trainers, full mocks, Speaking and Writing feedback.",
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

export default function PTECoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ieltsCoursSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toeflCourseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pteCourseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(duolingoCourseSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <PTECOACHING />
    </>
  );
}