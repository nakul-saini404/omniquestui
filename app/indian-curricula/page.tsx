import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  indianCurriculaListSchema,
} from "./indianCurriculaSchema";
import IndianCurricula from "./indianCurricula";

export const metadata: Metadata = {
  title: "CBSE & ICSE Online Tuition | Expert Indian Curricula Tutors | EduQuest",
  description:
    "EduQuest provides premium online and offline tuition for Indian Curricula — CBSE, ICSE, and ISC. Expert faculty, personalised coaching, AI-driven mock tests, and comprehensive study material for classes 8 to 12. Book a free demo class today!",

  keywords: [
    // ── Core Indian Curricula terms ──────────────────────────────────
    "CBSE online tuition",
    "ICSE online tuition",
    "ISC online tuition",
    "CBSE coaching class 8 to 12",
    "ICSE coaching class 8 to 10",
    "ISC coaching class 11 and 12",
    "best CBSE tuition in India",
    "best ICSE tuition in India",
    "online coaching for CBSE board",
    "online coaching for ICSE board",
    "Indian curricula tutoring",
    "EduQuest CBSE coaching",
    "EduQuest ICSE coaching",
    "CBSE offline coaching Gurgaon",
    "ICSE offline coaching Gurgaon",

    // ── Subject-specific terms ────────────────────────────────────────
    "CBSE Maths online tuition",
    "CBSE Science online tuition",
    "CBSE Physics online tuition class 11 12",
    "CBSE Chemistry online tuition class 11 12",
    "CBSE Biology online tuition class 11 12",
    "ICSE Maths online tuition",
    "ICSE Science online tuition",
    "ISC Physics online tuition",
    "ISC Chemistry online tuition",
    "ISC Mathematics online tuition",
    "CBSE Accountancy tuition",
    "CBSE Economics tuition",

    // ── Exam and Prep terms ───────────────────────────────────────────
    "CBSE board exam preparation",
    "ICSE board exam preparation",
    "CBSE class 10 board prep",
    "CBSE class 12 board prep",
    "ICSE class 10 board prep",
    "ISC class 12 board prep",
    "CBSE mock tests online",
    "ICSE mock tests online",
    "CBSE sample papers practice",
    "ICSE previous year papers practice",

    // ── Location-specific terms ───────────────────────────────────────
    "CBSE tuition Gurgaon",
    "ICSE tuition Gurgaon",
    "best CBSE tutors Delhi NCR",
    "best ICSE tutors Delhi NCR",
    "online CBSE tuition India",
    "online ICSE tuition India",
    "NRI CBSE tuition",
    "NRI ICSE tuition online",

    // ── General tutoring terms ────────────────────────────────────────
    "personalised board exam coaching",
    "small batch CBSE tuition",
    "one on one ICSE tuition",
    "best online tutors for Indian boards",
    "after school tuition for CBSE",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/indian-curricula/",
    languages: {
      "x-default": "https://eduquest.org.in/indian-curricula/",
      en: "https://eduquest.org.in/indian-curricula/",
      "en-IN": "https://eduquest.org.in/indian-curricula/",
    },
  },

  openGraph: {
    title: "CBSE & ICSE Online Tuition | Expert Indian Curricula Tutors | EduQuest",
    description:
      "EduQuest offers expert online and offline coaching for CBSE, ICSE, and ISC boards. Personalised tuition, mock tests, and study material for Classes 8 to 12.",
    url: "https://eduquest.org.in/indian-curricula/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest CBSE and ICSE Online Tuition",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CBSE & ICSE Online Tuition | Indian Curricula | EduQuest",
    description:
      "Expert coaching for CBSE, ICSE, and ISC boards. Secure top grades with EduQuest's personalised online and offline tuition for Classes 8 to 12.",
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

export default function IndianCurriculaPage() {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indianCurriculaListSchema) }}
        />
      </div>

      <IndianCurricula />
    </>
  );
}