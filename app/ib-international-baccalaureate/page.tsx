import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./ibSchema";
import IB from "./ib";

export const metadata: Metadata = {
  title:
    "IB Online Tuition | Expert International Baccalaureate Tutors | EduQuest",
  description:
    "EduQuest offers premium IB online tuition with expert tutors. Comprehensive guidance for IB MYP and DP including all subjects, Extended Essay (EE), and TOK. Book a free demo!",
  keywords: [
    "IB online tuition",
    "International Baccalaureate tutor",
    "IB DP tuition",
    "IB MYP tuition",
    "best IB tutors",
    "online IB classes",
    "EduQuest IB",
    "IB Math tutor",
    "IB Physics tutor",
    "IB Chemistry tutor",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/ib-international-baccalaureate/",
    languages: {
      "x-default": "https://eduquest.org.in/ib-international-baccalaureate/",
      en: "https://eduquest.org.in/ib-international-baccalaureate/",
      "en-IN": "https://eduquest.org.in/ib-international-baccalaureate/",
    },
  },
  openGraph: {
    title: "IB Online Tuition | Expert International Baccalaureate Tutors | EduQuest",
    description:
      "EduQuest offers premium IB online tuition with expert tutors. Comprehensive guidance for IB MYP and DP including all subjects, EE, and TOK.",
    url: "https://eduquest.org.in/ib-international-baccalaureate/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest IB Online Tuition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Online Tuition | Expert International Baccalaureate Tutors | EduQuest",
    description:
      "EduQuest offers premium IB online tuition with expert tutors. Comprehensive guidance for IB MYP and DP.",
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

export default function IBPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <IB />
    </>
  );
}