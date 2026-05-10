// app/TOEFl-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  TOEFlSectionListSchema,
} from "./toeflSchema";
import TOEFlCOACHING from "./toefl";
import TOEFLCOACHING from "./toefl";

export const metadata: Metadata = {
  title: "TOEFl Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  description:
    "Ace the TOEFl with EduQuest — India's leading TOEFl coaching institute. Expert tutors, full-length timed prTOEFlice tests & personalised score plans for TOEFl English, Math, Reading, Science and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core TOEFl exam terms ────────────────────────────────────────
    "TOEFl exam",
    "TOEFl exam 2025",
    "TOEFl exam India",
    "TOEFl exam dates 2025",
    "TOEFl exam dates India 2025",
    "TOEFl exam registration 2025",
    "TOEFl exam registration India",
    "TOEFl exam schedule 2025",
    "TOEFl exam syllabus",
    "TOEFl exam pattern",
    "TOEFl exam fee India",
    "TOEFl exam centres India",
    "TOEFl exam score",
    "TOEFl composite score",
    "TOEFl score 36",
    "TOEFl score 34",
    "TOEFl score 32",
    "TOEFl score calculator",
    "TOEFl scoring scale",
    "TOEFl percentile",
    "TOEFl passing score",
    "what is TOEFl exam",
    "American College Testing",
    "TOEFl vs SAT",
    "TOEFl or SAT for Indian students",
    "TOEFl test format",
    "TOEFl test sections",
    "TOEFl test duration",
    "TOEFl test day tips",

    // ── Section-specific — English ─────────────────────────────────
    "TOEFl English",
    "TOEFl English grammar",
    "TOEFl English rhetoric",
    "TOEFl English style",
    "TOEFl English punctuation",
    "TOEFl English tips",
    "TOEFl English prTOEFlice",

    // ── Section-specific — Math ────────────────────────────────────
    "TOEFl Math",
    "TOEFl Math algebra",
    "TOEFl Math geometry",
    "TOEFl Math trigonometry",
    "TOEFl Math statistics",
    "TOEFl Math tips",
    "TOEFl Math prTOEFlice",
    "TOEFl Math without calculator",

    // ── Section-specific — Reading ─────────────────────────────────
    "TOEFl Reading",
    "TOEFl Reading comprehension",
    "TOEFl Reading passage types",
    "TOEFl Reading tips",
    "TOEFl Reading strategy",
    "TOEFl Reading prTOEFlice",

    // ── Section-specific — Science ─────────────────────────────────
    "TOEFl Science",
    "TOEFl Science reasoning",
    "TOEFl Science data representation",
    "TOEFl Science research summary",
    "TOEFl Science conflicting viewpoints",
    "TOEFl Science tips",
    "TOEFl Science prTOEFlice",

    // ── Section-specific — Writing ─────────────────────────────────
    "TOEFl Writing",
    "TOEFl Writing essay",
    "TOEFl Writing score",
    "TOEFl Writing tips",
    "TOEFl Writing prTOEFlice",
    "TOEFl optional essay",

    // ── Coaching & preparation ────────────────────────────────────
    "TOEFl coaching India",
    "TOEFl coaching Delhi",
    "TOEFl coaching Gurgaon",
    "TOEFl coaching Mumbai",
    "TOEFl coaching Bangalore",
    "TOEFl coaching Chennai",
    "TOEFl coaching Hyderabad",
    "TOEFl coaching online India",
    "TOEFl online classes India",
    "TOEFl exam preparation India",
    "TOEFl exam preparation tips",
    "TOEFl exam preparation strategy",
    "TOEFl preparation timeline",
    "TOEFl 3 month preparation plan",
    "TOEFl 6 month preparation plan",
    "TOEFl prTOEFlice test",
    "TOEFl mock test",
    "TOEFl free prTOEFlice test",
    "TOEFl full length prTOEFlice test",
    "TOEFl study material India",
    "TOEFl study guide",
    "TOEFl tutor India",
    "TOEFl tutor online",
    "best TOEFl coaching India",
    "EduQuest TOEFl coaching",
    "EduQuest TOEFl exam",
    "TOEFl coaching for Indian students",
    "TOEFl exam help India",
    "how to prepare for TOEFl exam",
    "TOEFl self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 36 on TOEFl",
    "how to get 34 on TOEFl",
    "how to improve TOEFl score",
    "TOEFl score improvement tips",
    "TOEFl score for Ivy League",
    "TOEFl score for MIT",
    "TOEFl score for Stanford",
    "TOEFl score for Harvard",
    "TOEFl score for top US colleges",
    "TOEFl score for scholarships",
    "TOEFl superscoring",
    "TOEFl score choice",

    // ── US university admissions ──────────────────────────────────
    "TOEFl for US university admission",
    "TOEFl for Ivy League",
    "TOEFl for MIT",
    "TOEFl for Stanford",
    "TOEFl for Harvard",
    "TOEFl for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many TOEFl attempts allowed",
    "TOEFl for pre-med students",
    "TOEFl for engineering students",
    "TOEFl for business students",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "TOEFl for Canada universities",
    "TOEFl for University of Toronto",
    "TOEFl for UBC",
    "study in Canada from India",
    "TOEFl for UK universities",
    "TOEFl for Oxford",
    "TOEFl for Cambridge",
    "TOEFl for Australian universities",
    "TOEFl for University of Melbourne",
    "TOEFl for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "CBSE student TOEFl exam",
    "IB student TOEFl exam",
    "international school India TOEFl",
    "TOEFl for Grade 11",
    "TOEFl for Grade 12",
    "TOEFl eligibility India",
    "TOEFl registration process India",
    "TOEFl test centres list India",
    "TOEFl score validity",
    "TOEFl score report universities",
    "TOEFl fee waiver India",
    "TOEFl retake policy",
    "is TOEFl exam hard",
    "TOEFl exam difficulty",
    "TOEFl exam worth it India",
    "TOEFl exam benefits",
    "TOEFl vs SAT which is easier",
    "TOEFl last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/TOEFl-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/TOEFl-coaching/",
      en: "https://eduquest.org.in/TOEFl-coaching/",
      "en-IN": "https://eduquest.org.in/TOEFl-coaching/",
    },
  },

  openGraph: {
    title: "TOEFl Exam Coaching for Indian Students | Score 34–36 | EduQuest",
    description:
      "India's top TOEFl exam coaching — all sections (English, Math, Reading, Science, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/TOEFl-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest TOEFl Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TOEFl Exam Coaching | EduQuest India",
    description:
      "Ace the TOEFl with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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