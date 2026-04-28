import type { Metadata } from "next";

import TopBar from "@/components/sat-delhi/TopBar";
import Navbar from "@/components/eduQuest/Navbar";
import Hero from "@/components/sat-delhi/Hero";
import Positioning from "@/components/sat-delhi/Positioning";
import SystemSection from "@/components/sat-delhi/SystemSection";
import SeoBlocks from "@/components/sat-delhi/SeoBlocks";
import Pricing from "@/components/sat-delhi/Pricing";
import DiagnosticCta from "@/components/sat-delhi/DiagnosticCta";
import Admissions from "@/components/sat-delhi/Admissions";
import Testimonials from "@/components/sat-delhi/Testimonials";
import InternalLinks from "@/components/sat-delhi/InternalLinks";
import Faq from "@/components/sat-delhi/Faq";
import FinalCta from "@/components/sat-delhi/FinalCta";
import Footer from "@/components/eduQuest/Footer";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "SAT Coaching in Delhi | Score 1500+ | EduQuest India's #1 SAT Prep",
  description:
    "EduQuest — India's top SAT coaching in Delhi. Digital SAT preparation, adaptive testing strategy, diagnostics, section-wise prep, 1500+ score plans. Online + offline in Delhi, Gurgaon, Bangalore.",
  keywords: [
    "SAT coaching Delhi",
    "SAT classes Delhi",
    "digital SAT coaching Delhi",
    "SAT preparation Delhi",
    "SAT coaching in Delhi NCR",
    "best SAT institute Delhi",
    "SAT exam 2026 Delhi",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/sat-coaching-classes-delhi/",
  },
  openGraph: {
    title: "SAT Coaching in Delhi | Score 1500+ | EduQuest",
    description:
      "India's top SAT coaching in Delhi. Digital SAT prep, diagnostics, 1500+ score plans. Online + offline in Delhi, Gurgaon, Bangalore.",
    url: "https://eduquest.org.in/sat-coaching-classes-delhi/",
    siteName: "EduQuest",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest SAT Coaching Delhi",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Coaching in Delhi | Score 1500+ | EduQuest",
    description:
      "India's top SAT coaching in Delhi. Digital SAT prep, diagnostics, 1500+ score plans.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
  robots: "index, follow",
};

/* ─────────────────────────────────────────────
   JSON-LD SCHEMAS
───────────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SAT coaching in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT coaching in Delhi refers to structured preparation programs offered by institutes like EduQuest that prepare students for the Digital SAT exam. EduQuest offers both online and offline SAT coaching in Delhi NCR using a Diagnostic Test Framework and adaptive coaching model.",
      },
    },
    {
      "@type": "Question",
      name: "How much does SAT coaching cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT coaching in Delhi at EduQuest starts at Rs. 50,000/- for classroom and online one-on-one sessions. Hybrid one-on-one programs start at Rs. 70,000/-. Prices vary by course format and duration.",
      },
    },
    {
      "@type": "Question",
      name: "How to score 1500+ on the SAT in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Score 1500+ by: taking a diagnostic test to identify your baseline, targeting weak skill clusters, mastering Bluebook's interface, taking 6+ full-length adaptive mocks, and aligning your score with a broader admissions strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online SAT coaching in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers Online Live Group classes, Hybrid (online + offline) courses, One-on-One sessions, and a fully integrated year-round programme for students in Delhi and across India.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start SAT coaching in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends starting SAT prep in Grade 10 and aiming to finish by November of Grade 11. Early preparation also allows for better university positioning.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Digital SAT exam pattern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital SAT 2026: 2 sections — Reading & Writing (54 Q, 64 min) and Math (44 Q, 70 min). Total 2 hrs 14 min. Fully adaptive (2 modules per section). Calculator allowed throughout Math. Scored 400–1600.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eduquest.org.in/" },
    { "@type": "ListItem", position: 2, name: "SAT Coaching", item: "https://eduquest.org.in/sat/" },
    { "@type": "ListItem", position: 3, name: "SAT Coaching Delhi", item: "https://eduquest.org.in/sat-coaching-classes-delhi/" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  description: "India's premier SAT, ACT, AP, UCAT and global admissions strategy firm.",
  telephone: "+91-9958041888",
  email: "contact@eduquest.org.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-45, First Floor, South City II, Sector 50",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/eduquestind/",
    "https://twitter.com/eduquest1",
    "https://www.instagram.com/eduquest_education_",
    "https://www.linkedin.com/company/eduquest-learning-centre/",
  ],
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SatDelhiPage() {
  return (
    <>
      {/* Inject JSON-LD schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{
        background: "var(--cream2)",
        borderBottom: "1px solid var(--line)",
        padding: "10px 0",
        fontSize: "12px",
        color: "var(--text3)",
      }}>
        <div className="container">
          <a href="https://eduquest.org.in/" style={{ color: "var(--text3)" }}>Home</a>
          <span style={{ margin: "0 6px" }}>›</span>
          <a href="https://eduquest.org.in/sat/" style={{ color: "var(--text3)" }}>SAT Coaching</a>
          <span style={{ margin: "0 6px" }}>›</span>
          SAT Coaching in Delhi
        </div>
      </nav>

      <main>
        <Hero />
        <Positioning />
        <SystemSection />
        <SeoBlocks />
        <Pricing />
        <DiagnosticCta />
        <Admissions />
        <Testimonials />
        <InternalLinks />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
