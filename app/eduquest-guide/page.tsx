// app/profile-building/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  profileBuildingPillarListSchema,
} from "./guideSchema";
import GUIDECOACHING from "./guide";

export const metadata: Metadata = {
  title: "Profile Building for Class 8–12 | US, UK & India University Admissions | EduQuest",
  description:
    "Build a winning university profile from Class 8 to 12 with EduQuest — India's leading profile building programme. Personalised activity roadmaps, olympiad pathways, research mentoring, summer programme applications, and Common App / UCAS strategy for US, UK, Canada, Australia and top Indian universities. Trusted by 10,000+ students.",

  keywords: [
    // ── Core profile building terms ──────────────────────────────────
    "profile building for students",
    "profile building for class 8",
    "profile building for class 9",
    "profile building for class 10",
    "profile building for class 11",
    "profile building for class 12",
    "profile building for high school students India",
    "profile building for US university admissions",
    "profile building for UK university admissions",
    "profile building for Canada university admissions",
    "profile building for Australia university admissions",
    "profile building Gurgaon",
    "profile building India",
    "profile building Delhi NCR",
    "extracurricular activities for university admissions India",
    "how to build a strong college profile India",
    "college profile building India",
    "university profile building India",
    "EduQuest profile building",
    "profile building coaching India",
    "profile building coaching Gurgaon",

    // ── US admissions context ────────────────────────────────────────
    "Common App Activities section India",
    "Common App profile building India",
    "how to fill Common App Activities",
    "extracurriculars for Common App",
    "US university admissions from India",
    "how to get into MIT from India",
    "how to get into Stanford from India",
    "how to get into Harvard from India",
    "how to get into Ivy League from India",
    "Ivy League admissions coaching India",
    "US college admissions counselling India",
    "US university admissions counselling Gurgaon",
    "top 50 US universities from India",
    "liberal arts college admissions India",
    "need-blind university admissions India",

    // ── UK admissions context ────────────────────────────────────────
    "UCAS personal statement India",
    "UCAS admissions coaching India",
    "UK university admissions from India",
    "Oxford admissions from India",
    "Cambridge admissions from India",
    "LSE admissions from India",
    "Imperial College admissions India",
    "UCL admissions India",
    "A-level profile building India",
    "IB profile building India",

    // ── Olympiads and competitions ───────────────────────────────────
    "olympiad coaching India",
    "olympiad preparation India",
    "INMO preparation India",
    "INPhO preparation India",
    "INChO preparation India",
    "INBO preparation India",
    "INAO preparation India",
    "NTSE coaching India",
    "KVPY coaching India",
    "science olympiad India",
    "math olympiad India",
    "Aryabhatta Ganit Challenge",
    "Model United Nations MUN coaching India",
    "debate coaching India",
    "robotics competition India",
    "USACO preparation India",
    "science fair India",
    "Regeneron ISEF India",
    "Breakthrough Junior Challenge India",

    // ── Research and projects ────────────────────────────────────────
    "research project for high school students India",
    "IB Extended Essay mentoring India",
    "CBSE research project guidance",
    "how to do research in high school India",
    "research mentoring for school students",
    "research publication high school India",
    "university research programme for school students India",
    "MIT PRIMES India",
    "RSI Research Science Institute India",
    "science research India high school",

    // ── Leadership and community service ─────────────────────────────
    "leadership activities for college admissions India",
    "community service for university admissions India",
    "social impact projects for students India",
    "NGO volunteering for college admissions India",
    "student government school India",
    "club founding for Common App",

    // ── Summer programmes ────────────────────────────────────────────
    "summer programmes for Indian students",
    "summer programmes for high school students India",
    "Harvard summer programme India",
    "MIT summer programme India",
    "Stanford summer programme India",
    "Oxford summer programme India",
    "Cambridge summer programme India",
    "Yale YYGS India",
    "NUS summer programme India",
    "Ashoka Young Scholars Programme India",
    "summer school application help India",
    "summer research programme India",

    // ── Standardised tests tied to profile ──────────────────────────
    "SAT coaching India",
    "SAT coaching Gurgaon",
    "ACT coaching India",
    "AP exam coaching India",
    "IELTS coaching for class 11 12",
    "TOEFL coaching India",
    "PSAT India",
    "SAT preparation class 10 India",
    "standardised test timeline India",
    "when to take SAT India",
    "SAT ACT IELTS together India",

    // ── Class-specific roadmaps ──────────────────────────────────────
    "class 8 profile building roadmap",
    "class 9 profile building roadmap",
    "class 10 profile building roadmap",
    "class 11 profile building roadmap",
    "class 12 profile building last minute",
    "when to start profile building India",
    "profile building early start class 8",

    // ── Indian university context ────────────────────────────────────
    "IIT JEE profile building",
    "BITS Pilani profile building",
    "Ashoka University admissions India",
    "Krea University admissions India",
    "OP Jindal University admissions",
    "liberal arts university India admissions",
    "holistic admissions Indian university",

    // ── Medical and engineering streams ─────────────────────────────
    "medical school profile building India",
    "UCAT coaching India",
    "BMAT coaching India",
    "UCAS medicine from India",
    "hospital shadowing for medical school India",
    "engineering profile building India",
    "CS profile for MIT Stanford",
    "USACO ICPC preparation India",

    // ── General counselling and planning ────────────────────────────
    "college counselling India",
    "college counselling Gurgaon",
    "university admissions counselling Delhi NCR",
    "study abroad counselling India",
    "how to stand out for US universities India",
    "college application strategy India",
    "Common App essay coaching India",
    "college essay writing India",
    "application essay coaching Gurgaon",
    "profile building coaching online India",
    "profile building small batch Gurgaon",
    "profile building with personalised counsellor",
    "profile tracker for students India",
    "profile building fees India",
    "profile building programme Gurgaon",
    "best profile building coaching India",
    "best college counselling Gurgaon",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/profile-building/",
    languages: {
      "x-default": "https://eduquest.org.in/profile-building/",
      en: "https://eduquest.org.in/profile-building/",
      "en-IN": "https://eduquest.org.in/profile-building/",
    },
  },

  openGraph: {
    title: "Profile Building for Class 8–12 | US, UK & India Admissions | EduQuest",
    description:
      "EduQuest's Profile Building programme — personalised activity roadmaps, olympiad pathways, research mentoring, summer programme applications and Common App / UCAS strategy for students in Class 8 to 12 targeting top universities worldwide.",
    url: "https://eduquest.org.in/profile-building/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest Profile Building Programme for Class 8–12 India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Profile Building Class 8–12 | US, UK & India Admissions | EduQuest",
    description:
      "Build a winning university profile from Class 8 — olympiads, research, leadership, summer programmes, SAT/IELTS and complete admissions strategy by EduQuest India.",
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

export default function ProfileBuildingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileBuildingPillarListSchema) }}
      />

      {/* ── Page Component ── */}
      <GUIDECOACHING />
    </>
  );
}