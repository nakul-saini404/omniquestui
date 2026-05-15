import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd/JsonLd";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./eduaptechSchema";
import Eduaptech from "./eduaptech";

export const metadata: Metadata = {
  title:
    "Aptech Learning by EduQuest | Career Readiness & Skill Programs",
  description:
    "Master real-world skills with Aptech Learning by EduQuest. Industry-recognized certifications in AI, Data Science, and Coding. Placement-backed programs built for the jobs of tomorrow.",
  keywords: [
    "Aptech Learning",
    "EduQuest Aptech",
    "AI certification",
    "Data Science course",
    "Coding bootcamp",
    "career readiness",
    "skill development programs",
    "industry-recognized certifications",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/eduquest-aptech/",
    languages: {
      "x-default": "https://eduquest.org.in/eduquest-aptech/",
      en: "https://eduquest.org.in/eduquest-aptech/",
      "en-IN": "https://eduquest.org.in/eduquest-aptech/",
    },
  },
  openGraph: {
    title: "Aptech Learning by EduQuest | Career Readiness & Skill Programs",
    description:
      "Master real-world skills with Aptech Learning by EduQuest. Industry-recognized certifications in AI, Data Science, and Coding.",
    url: "https://eduquest.org.in/eduquest-aptech/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aptech Learning by EduQuest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptech Learning by EduQuest | Career Readiness & Skill Programs",
    description:
      "Master real-world skills with Aptech Learning by EduQuest. Industry-recognized certifications in AI, Data Science, and Coding.",
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

export default function EduaptechPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={courseSchema} />

      <Eduaptech />
    </>
  );
}