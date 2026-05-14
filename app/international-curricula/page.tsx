import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  internationalCurriculaListSchema,
} from "./internationalCurriculaSchema";
import InternationalCurricular from "./internationalCurricula";

export const metadata: Metadata = {
  title: "IGCSE & GCSE Online Tuition | Expert International Curricula Tutors | EduQuest",
  description:
    "EduQuest offers premium online tutoring for International Curricula — IGCSE, GCSE, and O-Level. Expert faculty for Biology, Chemistry, Physics, Maths & English. Personalised coaching, past paper practice, and results-driven mentoring. Book a free demo class today!",

  keywords: [
    // ── Core International Curricula terms ──────────────────────────
    "IGCSE online tuition",
    "GCSE online tuition",
    "O-Level online tuition",
    "Cambridge IGCSE coaching",
    "Edexcel GCSE coaching",
    "AQA GCSE online classes",
    "best IGCSE tuition in India",
    "best GCSE tuition in India",
    "online coaching for IGCSE board",
    "online coaching for GCSE board",
    "International curricula tutoring",
    "EduQuest IGCSE coaching",
    "EduQuest GCSE coaching",

    // ── Subject-specific terms ──────────────────────────────────────
    "IGCSE Biology online tuition",
    "IGCSE Chemistry online tuition",
    "IGCSE Physics online tuition",
    "IGCSE Mathematics online tuition",
    "IGCSE English online tuition",
    "GCSE Maths online tuition",
    "GCSE Science online tuition",
    "GCSE English Language tuition",
    "GCSE English Literature tuition",
    "O-Level Physics tuition",
    "O-Level Chemistry tuition",
    "O-Level Mathematics tuition",

    // ── Exam and Prep terms ─────────────────────────────────────────
    "IGCSE exam preparation",
    "GCSE board exam preparation",
    "IGCSE past paper practice",
    "GCSE mock tests online",
    "Cambridge IGCSE sample papers",
    "Edexcel GCSE previous year papers",
    "IGCSE extended maths coaching",
    "IGCSE core sciences tuition",

    // ── Location-specific terms ─────────────────────────────────────
    "IGCSE tuition Gurgaon",
    "GCSE tuition Gurgaon",
    "best IGCSE tutors Delhi NCR",
    "best GCSE tutors Delhi NCR",
    "online IGCSE tuition India",
    "online GCSE tuition India",
    "IGCSE tuition Dubai",
    "IGCSE tuition Singapore",
    "NRI IGCSE tuition online",

    // ── General tutoring terms ──────────────────────────────────────
    "personalised international board coaching",
    "small batch IGCSE tuition",
    "one on one GCSE tuition",
    "best online tutors for international boards",
    "after school tuition for IGCSE",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/international-curricula/",
    languages: {
      "x-default": "https://eduquest.org.in/international-curricula/",
      en: "https://eduquest.org.in/international-curricula/",
      "en-IN": "https://eduquest.org.in/international-curricula/",
    },
  },

  openGraph: {
    title: "IGCSE & GCSE Online Tuition | Expert International Curricula Tutors | EduQuest",
    description:
      "EduQuest offers expert online coaching for IGCSE, GCSE, and O-Level boards. Personalised tuition, mock tests, and past paper practice for all subjects.",
    url: "https://eduquest.org.in/international-curricula/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest IGCSE and GCSE Online Tuition",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IGCSE & GCSE Online Tuition | International Curricula | EduQuest",
    description:
      "Expert coaching for IGCSE, GCSE, and O-Level boards. Secure top grades with EduQuest's personalised online tuition.",
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

export default function InternationalCurricularPage() {
  return (
    <>
      <div style={{ display: 'none' }}>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(internationalCurriculaListSchema) }}
        />
      </div>

      <InternationalCurricular />
    </>
  );
}