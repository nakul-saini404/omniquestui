import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd/JsonLd";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./researchPaperSchema";
import ResearchPaper from "./researchPaper";

export const metadata: Metadata = {
  title: "Research Paper Drafting & Publishing Services | EduQuest",
  description:
    "Master academic research with EduQuest. Expert mentorship for research paper drafting, methodology, and publication in international peer-reviewed journals.",
  keywords: [
    "Research Paper Drafting",
    "Academic Publishing Services",
    "High School Research Programs",
    "STEM Research Paper Help",
    "Humanities Research Support",
    "Peer-Reviewed Journal Submission",
    "Research Mentorship for Students",
    "Research Methodology Guidance",
    "Scientific Writing Services",
    "Research Paper Publication India",
    "International Research Competitions",
    "Research Portfolio for Ivy League",
    "Research Opportunities for Students",
    "Undergraduate Research Support",
    "Advanced Research Mentors",
    "Academic Journal Publication Support",
    "Research Ethics Guidance",
    "Data Analysis for Research Papers",
    "Literature Review Support",
    "Research Abstract Drafting",
    "Scholarly Writing Mentorship",
    "Research Project Management",
    "Research Paper Editing Services",
    "Research Paper Formatting Guide",
    "Research Paper Peer Review",
    "Research Paper Plagiarism Check",
    "Research Paper Submission Strategy",
    "Research Paper Impact Factor",
    "Research Paper Citation Help",
    "Research Paper Open Access",
    "Research Paper Conference Submission",
    "Research Paper Poster Presentation",
    "Research Paper Grant Writing",
    "Research Paper Thesis Support",
    "Research Paper Dissertation Help",
    "Research Paper Case Study",
    "Research Paper Qualitative Research",
    "Research Paper Quantitative Research",
    "Research Paper Mixed Methods",
    "Research Paper Survey Design",
    "Research Paper Statistical Analysis",
    "Research Paper Machine Learning Research",
    "Research Paper AI Research",
    "Research Paper Medical Research",
    "Research Paper Psychology Research",
    "Research Paper Economics Research",
    "Research Paper Business Research",
    "Research Paper Law Research",
    "Research Paper Environmental Science",
    "Research Paper Physics Research",
    "Research Paper Chemistry Research",
    "Research Paper Biology Research",
    "Research Paper Social Sciences",
    "Research Paper Arts and Humanities",
    "Research Paper Engineering Research",
    "Research Paper Mathematics Research",
    "Research Paper Computer Science",
    "Research Paper Innovation and Technology",
    "Research Paper Policy Analysis",
    "Research Paper Global Studies",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/research-paper-drafting-publishing-services/",
    languages: {
      "x-default": "https://eduquest.org.in/research-paper-drafting-publishing-services/",
      en: "https://eduquest.org.in/research-paper-drafting-publishing-services/",
      "en-IN": "https://eduquest.org.in/research-paper-drafting-publishing-services/",
    },
  },
  openGraph: {
    title: "Research Paper Drafting & Publishing Services | EduQuest",
    description:
      "Expert mentorship for high school and undergraduate students to draft and publish high-impact research papers.",
    url: "https://eduquest.org.in/research-paper-drafting-publishing-services/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/research-paper-og.jpg",
        width: 1200,
        height: 630,
        alt: "Research Paper Mentorship by EduQuest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Paper Drafting & Publishing Services | EduQuest",
    description:
      "Master the art of academic research and publishing with expert mentorship from EduQuest.",
    images: ["https://eduquest.org.in/wp-content/uploads/research-paper-og.jpg"],
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

export default function ResearchPaperPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={courseSchema} />

      <ResearchPaper />
    </>
  );
}