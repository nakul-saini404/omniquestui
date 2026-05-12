// app/toefl-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  TOEFlSectionListSchema,
} from "./toeflSchema";
import TOEFLCOACHING from "./toefl";

export const metadata: Metadata = {
  title: "TOEFL iBT Coaching for Indian Students | Score 100+ | EduQuest",
  description:
    "Ace the TOEFL iBT with EduQuest — India's leading TOEFL coaching institute. Expert tutors, full-length timed practice tests & personalised score plans for TOEFL Reading, Listening, Speaking and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core TOEFL exam terms ────────────────────────────────────────
    "TOEFL exam",
    "TOEFL iBT",
    "TOEFL exam 2025",
    "TOEFL exam India",
    "TOEFL exam dates 2025",
    "TOEFL exam dates India 2025",
    "TOEFL exam registration 2025",
    "TOEFL exam registration India",
    "TOEFL exam schedule 2025",
    "TOEFL exam syllabus",
    "TOEFL exam pattern",
    "TOEFL exam fee India",
    "TOEFL exam centres India",
    "TOEFL exam score",
    "TOEFL score 100",
    "TOEFL score 110",
    "TOEFL score 120",
    "TOEFL score calculator",
    "TOEFL scoring scale",
    "TOEFL percentile",
    "TOEFL passing score",
    "what is TOEFL exam",
    "Test of English as a Foreign Language",
    "TOEFL vs IELTS",
    "TOEFL or IELTS for Indian students",
    "TOEFL test format",
    "TOEFL test sections",
    "TOEFL test duration",
    "TOEFL test day tips",

    // ── Section-specific — Reading ─────────────────────────────────
    "TOEFL Reading",
    "TOEFL Reading comprehension",
    "TOEFL Reading passage types",
    "TOEFL Reading tips",
    "TOEFL Reading strategy",
    "TOEFL Reading practice",

    // ── Section-specific — Listening ────────────────────────────────
    "TOEFL Listening",
    "TOEFL Listening tips",
    "TOEFL Listening practice",
    "TOEFL Listening note taking",
    "TOEFL Listening lectures",
    "TOEFL Listening conversations",

    // ── Section-specific — Speaking ─────────────────────────────────
    "TOEFL Speaking",
    "TOEFL Speaking Independent Task",
    "TOEFL Speaking Integrated Task",
    "TOEFL Speaking tips",
    "TOEFL Speaking practice",
    "TOEFL Speaking score",

    // ── Section-specific — Writing ──────────────────────────────────
    "TOEFL Writing",
    "TOEFL Writing Integrated Task",
    "TOEFL Academic Discussion Task",
    "TOEFL Writing tips",
    "TOEFL Writing practice",
    "TOEFL Writing score",
    "TOEFL essay writing tips",

    // ── Coaching & preparation ────────────────────────────────────
    "TOEFL coaching India",
    "TOEFL coaching Delhi",
    "TOEFL coaching Gurgaon",
    "TOEFL coaching Mumbai",
    "TOEFL coaching Bangalore",
    "TOEFL coaching Chennai",
    "TOEFL coaching Hyderabad",
    "TOEFL coaching online India",
    "TOEFL online classes India",
    "TOEFL exam preparation India",
    "TOEFL exam preparation tips",
    "TOEFL exam preparation strategy",
    "TOEFL preparation timeline",
    "TOEFL 3 month preparation plan",
    "TOEFL 6 month preparation plan",
    "TOEFL practice test",
    "TOEFL mock test",
    "TOEFL free practice test",
    "TOEFL full length practice test",
    "TOEFL study material India",
    "TOEFL study guide",
    "TOEFL tutor India",
    "TOEFL tutor online",
    "best TOEFL coaching India",
    "EduQuest TOEFL coaching",
    "EduQuest TOEFL exam",
    "TOEFL coaching for Indian students",
    "TOEFL exam help India",
    "how to prepare for TOEFL exam",
    "TOEFL self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to score 100 on TOEFL",
    "how to score 110 on TOEFL",
    "how to improve TOEFL score",
    "TOEFL score improvement tips",
    "TOEFL score for Ivy League",
    "TOEFL score for MIT",
    "TOEFL score for Stanford",
    "TOEFL score for Harvard",
    "TOEFL score for top US colleges",
    "TOEFL score for scholarships",
    "TOEFL MyBest scores",

    // ── US university admissions ──────────────────────────────────
    "TOEFL for US university admission",
    "TOEFL for Ivy League",
    "TOEFL for MIT",
    "TOEFL for Stanford",
    "TOEFL for Harvard",
    "TOEFL for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many TOEFL attempts allowed",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "TOEFL for Canada universities",
    "TOEFL for University of Toronto",
    "TOEFL for UBC",
    "study in Canada from India",
    "TOEFL for UK universities",
    "TOEFL for Oxford",
    "TOEFL for Cambridge",
    "TOEFL for Australian universities",
    "TOEFL for University of Melbourne",
    "TOEFL for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "TOEFL eligibility India",
    "TOEFL registration process India",
    "TOEFL test centres list India",
    "TOEFL score validity",
    "TOEFL score report universities",
    "TOEFL retake policy",
    "is TOEFL exam hard",
    "TOEFL exam difficulty",
    "TOEFL exam worth it India",
    "TOEFL exam benefits",
    "TOEFL vs IELTS which is easier",
    "TOEFL last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/toefl-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/toefl-coaching/",
      en: "https://eduquest.org.in/toefl-coaching/",
      "en-IN": "https://eduquest.org.in/toefl-coaching/",
    },
  },

  openGraph: {
    title: "TOEFL iBT Coaching for Indian Students | Score 100+ | EduQuest",
    description:
      "India's top TOEFL coaching — all four sections (Reading, Listening, Speaking, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/toefl-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest TOEFL iBT Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TOEFL iBT Coaching | EduQuest India",
    description:
      "Ace the TOEFL with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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

export default function TOEFLCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TOEFlSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <TOEFLCOACHING />
    </>
  );
}