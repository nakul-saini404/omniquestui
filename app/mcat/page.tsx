// app/mcat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  mcatSectionListSchema,
} from "./mcatSchema";
import MCATCOACHING from "./mcat";

export const metadata: Metadata = {
  title: "mcat Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  description:
    "Ace the mcat with EduQuest — India's leading mcat coaching institute. Expert tutors, full-length timed prmcatice tests & personalised score plans for mcat English, Math, Reading, Science and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core mcat exam terms ────────────────────────────────────────
    "mcat exam",
    "mcat exam 2025",
    "mcat exam India",
    "mcat exam dates 2025",
    "mcat exam dates India 2025",
    "mcat exam registration 2025",
    "mcat exam registration India",
    "mcat exam schedule 2025",
    "mcat exam syllabus",
    "mcat exam pattern",
    "mcat exam fee India",
    "mcat exam centres India",
    "mcat exam score",
    "mcat composite score",
    "mcat score 36",
    "mcat score 34",
    "mcat score 32",
    "mcat score calculator",
    "mcat scoring scale",
    "mcat percentile",
    "mcat passing score",
    "what is mcat exam",
    "American College Testing",
    "mcat vs SAT",
    "mcat or SAT for Indian students",
    "mcat test format",
    "mcat test sections",
    "mcat test duration",
    "mcat test day tips",

    // ── Section-specific — English ─────────────────────────────────
    "mcat English",
    "mcat English grammar",
    "mcat English rhetoric",
    "mcat English style",
    "mcat English punctuation",
    "mcat English tips",
    "mcat English prmcatice",

    // ── Section-specific — Math ────────────────────────────────────
    "mcat Math",
    "mcat Math algebra",
    "mcat Math geometry",
    "mcat Math trigonometry",
    "mcat Math statistics",
    "mcat Math tips",
    "mcat Math prmcatice",
    "mcat Math without calculator",

    // ── Section-specific — Reading ─────────────────────────────────
    "mcat Reading",
    "mcat Reading comprehension",
    "mcat Reading passage types",
    "mcat Reading tips",
    "mcat Reading strategy",
    "mcat Reading prmcatice",

    // ── Section-specific — Science ─────────────────────────────────
    "mcat Science",
    "mcat Science reasoning",
    "mcat Science data representation",
    "mcat Science research summary",
    "mcat Science conflicting viewpoints",
    "mcat Science tips",
    "mcat Science prmcatice",

    // ── Section-specific — Writing ─────────────────────────────────
    "mcat Writing",
    "mcat Writing essay",
    "mcat Writing score",
    "mcat Writing tips",
    "mcat Writing prmcatice",
    "mcat optional essay",

    // ── Coaching & preparation ────────────────────────────────────
    "mcat coaching India",
    "mcat coaching Delhi",
    "mcat coaching Gurgaon",
    "mcat coaching Mumbai",
    "mcat coaching Bangalore",
    "mcat coaching Chennai",
    "mcat coaching Hyderabad",
    "mcat coaching online India",
    "mcat online classes India",
    "mcat exam preparation India",
    "mcat exam preparation tips",
    "mcat exam preparation strategy",
    "mcat preparation timeline",
    "mcat 3 month preparation plan",
    "mcat 6 month preparation plan",
    "mcat prmcatice test",
    "mcat mock test",
    "mcat free prmcatice test",
    "mcat full length prmcatice test",
    "mcat study material India",
    "mcat study guide",
    "mcat tutor India",
    "mcat tutor online",
    "best mcat coaching India",
    "EduQuest mcat coaching",
    "EduQuest mcat exam",
    "mcat coaching for Indian students",
    "mcat exam help India",
    "how to prepare for mcat exam",
    "mcat self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 36 on mcat",
    "how to get 34 on mcat",
    "how to improve mcat score",
    "mcat score improvement tips",
    "mcat score for Ivy League",
    "mcat score for MIT",
    "mcat score for Stanford",
    "mcat score for Harvard",
    "mcat score for top US colleges",
    "mcat score for scholarships",
    "mcat superscoring",
    "mcat score choice",

    // ── US university admissions ──────────────────────────────────
    "mcat for US university admission",
    "mcat for Ivy League",
    "mcat for MIT",
    "mcat for Stanford",
    "mcat for Harvard",
    "mcat for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many mcat attempts allowed",
    "mcat for pre-med students",
    "mcat for engineering students",
    "mcat for business students",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "mcat for Canada universities",
    "mcat for University of Toronto",
    "mcat for UBC",
    "study in Canada from India",
    "mcat for UK universities",
    "mcat for Oxford",
    "mcat for Cambridge",
    "mcat for Australian universities",
    "mcat for University of Melbourne",
    "mcat for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "CBSE student mcat exam",
    "IB student mcat exam",
    "international school India mcat",
    "mcat for Grade 11",
    "mcat for Grade 12",
    "mcat eligibility India",
    "mcat registration process India",
    "mcat test centres list India",
    "mcat score validity",
    "mcat score report universities",
    "mcat fee waiver India",
    "mcat retake policy",
    "is mcat exam hard",
    "mcat exam difficulty",
    "mcat exam worth it India",
    "mcat exam benefits",
    "mcat vs SAT which is easier",
    "mcat last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/mcat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/mcat-coaching/",
      en: "https://eduquest.org.in/mcat-coaching/",
      "en-IN": "https://eduquest.org.in/mcat-coaching/",
    },
  },

  openGraph: {
    title: "mcat Exam Coaching for Indian Students | Score 34–36 | EduQuest",
    description:
      "India's top mcat exam coaching — all sections (English, Math, Reading, Science, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/mcat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest mcat Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "mcat Exam Coaching | EduQuest India",
    description:
      "Ace the mcat with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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

export default function MCATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mcatSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <MCATCOACHING/>
    </>
  );
}