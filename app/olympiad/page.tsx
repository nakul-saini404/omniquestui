import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./olympiadSchema";
import Olympiad from "./olympiad";

export const metadata: Metadata = {
  title:
    "Olympiad Online Tuition | Expert Olympiad Tutors | EduQuest",
  description:
    "EduQuest offers premium Olympiad online tuition with expert tutors. Comprehensive guidance for all major Olympiads including IMO, NSO, IEO, and more. Book a free demo!",
  keywords: [
    "Olympiad online tuition",
    "Olympiad tutor",
    "IMO tuition",
    "NSO tuition",
    "best Olympiad tutors",
    "online Olympiad classes",
    "EduQuest Olympiad",
    "Math Olympiad tutor",
    "Science Olympiad tutor",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/olympiad/",
    languages: {
      "x-default": "https://eduquest.org.in/olympiad/",
      en: "https://eduquest.org.in/olympiad/",
      "en-IN": "https://eduquest.org.in/olympiad/",
    },
  },
  openGraph: {
    title: "Olympiad Online Tuition | Expert Olympiad Tutors | EduQuest",
    description:
      "EduQuest offers premium Olympiad online tuition with expert tutors. Comprehensive guidance for all major Olympiads including IMO, NSO, IEO, and more.",
    url: "https://eduquest.org.in/olympiad/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest Olympiad Online Tuition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympiad Online Tuition | Expert Olympiad Tutors | EduQuest",
    description:
      "EduQuest offers premium Olympiad online tuition with expert tutors. Comprehensive guidance for all major Olympiads.",
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

export default function OlympiadPage() {
  return (
    <>
      <div style={{ display: 'none' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      </div>

      <Olympiad />
    </>
  );
}