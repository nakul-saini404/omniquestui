import type { Metadata } from "next";
import AboutUSCOACHING from "./aboutUs";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
} from "./aboutUsSchema";

export const metadata: Metadata = {
  title: "About EduQuest | India's Leading Study Abroad & Test Prep Institute",
  description:
    "Learn about EduQuest, India's premier institute for SAT, ACT, AP, IELTS, and profile building. With 20+ years of experience, we've guided 10,000+ students to top global universities.",
  keywords: [
    "About EduQuest",
    "EduQuest India",
    "study abroad institute Gurgaon",
    "SAT coaching Gurgaon",
    "ACT coaching",
    "AP coaching",
    "profile building",
    "university admissions counseling",
    "top study abroad consultants",
    "EduQuest founder",
    "EduQuest history",
    "EduQuest reviews",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/about-us/",
    languages: {
      "x-default": "https://eduquest.org.in/about-us/",
      en: "https://eduquest.org.in/about-us/",
      "en-IN": "https://eduquest.org.in/about-us/",
    },
  },
  openGraph: {
    title: "About EduQuest | India's Leading Study Abroad Institute",
    description:
      "EduQuest has been guiding students to top universities worldwide for over 20 years with expert test prep and admissions counselling.",
    url: "https://eduquest.org.in/about-us/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "About EduQuest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About EduQuest | Study Abroad Experts",
    description: "Discover how EduQuest helps students achieve their study abroad dreams.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <AboutUSCOACHING />
    </>
  );
}