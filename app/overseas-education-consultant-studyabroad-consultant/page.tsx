import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd/JsonLd";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./studyAbroadSchema";
import StudyAbroad from "./studyAbroad";

export const metadata: Metadata = {
  title: "Best Overseas Education Consultant | Study Abroad Consultant - EduQuest",
  description:
    "EduQuest is your trusted overseas education consultant. We provide expert study abroad counseling, university admissions assistance, and visa guidance for USA, UK, Canada, Australia, and more.",
  keywords: [
    "Overseas Education Consultant",
    "Study Abroad Consultant",
    "Foreign Education Consultant",
    "Study Abroad Counseling",
    "University Admissions Abroad",
    "Study in USA",
    "Study in UK",
    "Study in Canada",
    "Study in Australia",
    "EduQuest Study Abroad",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
    languages: {
      "x-default": "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
      en: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
      "en-IN": "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
    },
  },
  openGraph: {
    title: "Best Overseas Education Consultant | Study Abroad Consultant - EduQuest",
    description:
      "EduQuest is your trusted overseas education consultant. We provide expert study abroad counseling, university admissions assistance, and visa guidance.",
    url: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "Study Abroad by EduQuest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Overseas Education Consultant | Study Abroad Consultant - EduQuest",
    description:
      "EduQuest is your trusted overseas education consultant. We provide expert study abroad counseling, university admissions assistance, and visa guidance.",
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

export default function StudyAbroadPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={courseSchema} />

      <StudyAbroad />
    </>
  );
}