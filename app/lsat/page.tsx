// app/LSAT-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  LSATSectionListSchema,
} from "./lsatSchema";
import LSATCOACHING from "./lsat";

export const metadata: Metadata = {
  title: "LSAT Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  description:
    "Ace the LSAT with EduQuest — India's leading LSAT coaching institute. Expert tutors, full-length timed prLSATice tests & personalised score plans for LSAT English, Math, Reading, Science and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core LSAT exam terms ────────────────────────────────────────
    "LSAT exam",
    "LSAT exam 2025",
    "LSAT exam India",
    "LSAT exam dates 2025",
    "LSAT exam dates India 2025",
    "LSAT exam registration 2025",
    "LSAT exam registration India",
    "LSAT exam schedule 2025",
    "LSAT exam syllabus",
    "LSAT exam pattern",
    "LSAT exam fee India",
    "LSAT exam centres India",
    "LSAT exam score",
    "LSAT composite score",
    "LSAT score 36",
    "LSAT score 34",
    "LSAT score 32",
    "LSAT score calculator",
    "LSAT scoring scale",
    "LSAT percentile",
    "LSAT passing score",
    "what is LSAT exam",
    "American College Testing",
    "LSAT vs SAT",
    "LSAT or SAT for Indian students",
    "LSAT test format",
    "LSAT test sections",
    "LSAT test duration",
    "LSAT test day tips",

    // ── Section-specific — English ─────────────────────────────────
    "LSAT English",
    "LSAT English grammar",
    "LSAT English rhetoric",
    "LSAT English style",
    "LSAT English punctuation",
    "LSAT English tips",
    "LSAT English prLSATice",

    // ── Section-specific — Math ────────────────────────────────────
    "LSAT Math",
    "LSAT Math algebra",
    "LSAT Math geometry",
    "LSAT Math trigonometry",
    "LSAT Math statistics",
    "LSAT Math tips",
    "LSAT Math prLSATice",
    "LSAT Math without calculator",

    // ── Section-specific — Reading ─────────────────────────────────
    "LSAT Reading",
    "LSAT Reading comprehension",
    "LSAT Reading passage types",
    "LSAT Reading tips",
    "LSAT Reading strategy",
    "LSAT Reading prLSATice",

    // ── Section-specific — Science ─────────────────────────────────
    "LSAT Science",
    "LSAT Science reasoning",
    "LSAT Science data representation",
    "LSAT Science research summary",
    "LSAT Science conflicting viewpoints",
    "LSAT Science tips",
    "LSAT Science prLSATice",

    // ── Section-specific — Writing ─────────────────────────────────
    "LSAT Writing",
    "LSAT Writing essay",
    "LSAT Writing score",
    "LSAT Writing tips",
    "LSAT Writing prLSATice",
    "LSAT optional essay",

    // ── Coaching & preparation ────────────────────────────────────
    "LSAT coaching India",
    "LSAT coaching Delhi",
    "LSAT coaching Gurgaon",
    "LSAT coaching Mumbai",
    "LSAT coaching Bangalore",
    "LSAT coaching Chennai",
    "LSAT coaching Hyderabad",
    "LSAT coaching online India",
    "LSAT online classes India",
    "LSAT exam preparation India",
    "LSAT exam preparation tips",
    "LSAT exam preparation strategy",
    "LSAT preparation timeline",
    "LSAT 3 month preparation plan",
    "LSAT 6 month preparation plan",
    "LSAT prLSATice test",
    "LSAT mock test",
    "LSAT free prLSATice test",
    "LSAT full length prLSATice test",
    "LSAT study material India",
    "LSAT study guide",
    "LSAT tutor India",
    "LSAT tutor online",
    "best LSAT coaching India",
    "EduQuest LSAT coaching",
    "EduQuest LSAT exam",
    "LSAT coaching for Indian students",
    "LSAT exam help India",
    "how to prepare for LSAT exam",
    "LSAT self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 36 on LSAT",
    "how to get 34 on LSAT",
    "how to improve LSAT score",
    "LSAT score improvement tips",
    "LSAT score for Ivy League",
    "LSAT score for MIT",
    "LSAT score for Stanford",
    "LSAT score for Harvard",
    "LSAT score for top US colleges",
    "LSAT score for scholarships",
    "LSAT superscoring",
    "LSAT score choice",

    // ── US university admissions ──────────────────────────────────
    "LSAT for US university admission",
    "LSAT for Ivy League",
    "LSAT for MIT",
    "LSAT for Stanford",
    "LSAT for Harvard",
    "LSAT for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many LSAT attempts allowed",
    "LSAT for pre-med students",
    "LSAT for engineering students",
    "LSAT for business students",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "LSAT for Canada universities",
    "LSAT for University of Toronto",
    "LSAT for UBC",
    "study in Canada from India",
    "LSAT for UK universities",
    "LSAT for Oxford",
    "LSAT for Cambridge",
    "LSAT for Australian universities",
    "LSAT for University of Melbourne",
    "LSAT for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "CBSE student LSAT exam",
    "IB student LSAT exam",
    "international school India LSAT",
    "LSAT for Grade 11",
    "LSAT for Grade 12",
    "LSAT eligibility India",
    "LSAT registration process India",
    "LSAT test centres list India",
    "LSAT score validity",
    "LSAT score report universities",
    "LSAT fee waiver India",
    "LSAT retake policy",
    "is LSAT exam hard",
    "LSAT exam difficulty",
    "LSAT exam worth it India",
    "LSAT exam benefits",
    "LSAT vs SAT which is easier",
    "LSAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/LSAT-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/LSAT-coaching/",
      en: "https://eduquest.org.in/LSAT-coaching/",
      "en-IN": "https://eduquest.org.in/LSAT-coaching/",
    },
  },

  openGraph: {
    title: "LSAT Exam Coaching for Indian Students | Score 34–36 | EduQuest",
    description:
      "India's top LSAT exam coaching — all sections (English, Math, Reading, Science, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/LSAT-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest LSAT Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LSAT Exam Coaching | EduQuest India",
    description:
      "Ace the LSAT with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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

export default function LSATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LSATSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <LSATCOACHING />
    </>
  );
}