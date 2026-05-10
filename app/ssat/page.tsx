// app/ssat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  ssatSectionListSchema,
} from "./ssatSchema";
import SSATCOACHING from "./ssat";

export const metadata: Metadata = {
  title: "ssat Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  description:
    "Ace the ssat with EduQuest — India's leading ssat coaching institute. Expert tutors, full-length timed prssatice tests & personalised score plans for ssat English, Math, Reading, Science and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core ssat exam terms ────────────────────────────────────────
    "ssat exam",
    "ssat exam 2025",
    "ssat exam India",
    "ssat exam dates 2025",
    "ssat exam dates India 2025",
    "ssat exam registration 2025",
    "ssat exam registration India",
    "ssat exam schedule 2025",
    "ssat exam syllabus",
    "ssat exam pattern",
    "ssat exam fee India",
    "ssat exam centres India",
    "ssat exam score",
    "ssat composite score",
    "ssat score 36",
    "ssat score 34",
    "ssat score 32",
    "ssat score calculator",
    "ssat scoring scale",
    "ssat percentile",
    "ssat passing score",
    "what is ssat exam",
    "American College Testing",
    "ssat vs SAT",
    "ssat or SAT for Indian students",
    "ssat test format",
    "ssat test sections",
    "ssat test duration",
    "ssat test day tips",

    // ── Section-specific — English ─────────────────────────────────
    "ssat English",
    "ssat English grammar",
    "ssat English rhetoric",
    "ssat English style",
    "ssat English punctuation",
    "ssat English tips",
    "ssat English prssatice",

    // ── Section-specific — Math ────────────────────────────────────
    "ssat Math",
    "ssat Math algebra",
    "ssat Math geometry",
    "ssat Math trigonometry",
    "ssat Math statistics",
    "ssat Math tips",
    "ssat Math prssatice",
    "ssat Math without calculator",

    // ── Section-specific — Reading ─────────────────────────────────
    "ssat Reading",
    "ssat Reading comprehension",
    "ssat Reading passage types",
    "ssat Reading tips",
    "ssat Reading strategy",
    "ssat Reading prssatice",

    // ── Section-specific — Science ─────────────────────────────────
    "ssat Science",
    "ssat Science reasoning",
    "ssat Science data representation",
    "ssat Science research summary",
    "ssat Science conflicting viewpoints",
    "ssat Science tips",
    "ssat Science prssatice",

    // ── Section-specific — Writing ─────────────────────────────────
    "ssat Writing",
    "ssat Writing essay",
    "ssat Writing score",
    "ssat Writing tips",
    "ssat Writing prssatice",
    "ssat optional essay",

    // ── Coaching & preparation ────────────────────────────────────
    "ssat coaching India",
    "ssat coaching Delhi",
    "ssat coaching Gurgaon",
    "ssat coaching Mumbai",
    "ssat coaching Bangalore",
    "ssat coaching Chennai",
    "ssat coaching Hyderabad",
    "ssat coaching online India",
    "ssat online classes India",
    "ssat exam preparation India",
    "ssat exam preparation tips",
    "ssat exam preparation strategy",
    "ssat preparation timeline",
    "ssat 3 month preparation plan",
    "ssat 6 month preparation plan",
    "ssat prssatice test",
    "ssat mock test",
    "ssat free prssatice test",
    "ssat full length prssatice test",
    "ssat study material India",
    "ssat study guide",
    "ssat tutor India",
    "ssat tutor online",
    "best ssat coaching India",
    "EduQuest ssat coaching",
    "EduQuest ssat exam",
    "ssat coaching for Indian students",
    "ssat exam help India",
    "how to prepare for ssat exam",
    "ssat self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 36 on ssat",
    "how to get 34 on ssat",
    "how to improve ssat score",
    "ssat score improvement tips",
    "ssat score for Ivy League",
    "ssat score for MIT",
    "ssat score for Stanford",
    "ssat score for Harvard",
    "ssat score for top US colleges",
    "ssat score for scholarships",
    "ssat superscoring",
    "ssat score choice",

    // ── US university admissions ──────────────────────────────────
    "ssat for US university admission",
    "ssat for Ivy League",
    "ssat for MIT",
    "ssat for Stanford",
    "ssat for Harvard",
    "ssat for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many ssat attempts allowed",
    "ssat for pre-med students",
    "ssat for engineering students",
    "ssat for business students",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "ssat for Canada universities",
    "ssat for University of Toronto",
    "ssat for UBC",
    "study in Canada from India",
    "ssat for UK universities",
    "ssat for Oxford",
    "ssat for Cambridge",
    "ssat for Australian universities",
    "ssat for University of Melbourne",
    "ssat for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "CBSE student ssat exam",
    "IB student ssat exam",
    "international school India ssat",
    "ssat for Grade 11",
    "ssat for Grade 12",
    "ssat eligibility India",
    "ssat registration process India",
    "ssat test centres list India",
    "ssat score validity",
    "ssat score report universities",
    "ssat fee waiver India",
    "ssat retake policy",
    "is ssat exam hard",
    "ssat exam difficulty",
    "ssat exam worth it India",
    "ssat exam benefits",
    "ssat vs SAT which is easier",
    "ssat last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/ssat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/ssat-coaching/",
      en: "https://eduquest.org.in/ssat-coaching/",
      "en-IN": "https://eduquest.org.in/ssat-coaching/",
    },
  },

  openGraph: {
    title: "ssat Exam Coaching for Indian Students | Score 34–36 | EduQuest",
    description:
      "India's top ssat exam coaching — all sections (English, Math, Reading, Science, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/ssat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest ssat Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ssat Exam Coaching | EduQuest India",
    description:
      "Ace the ssat with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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

export default function SSATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ssatSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <SSATCOACHING />
    </>
  );
}