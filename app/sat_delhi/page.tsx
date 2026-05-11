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
import Footer from "../../components/sat/Footer";
import SatStructure from "@/components/sat-delhi/SatStructure";
import KeyAreas from "@/components/sat-delhi/KeyAreas";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "SAT Coaching in Delhi 2026 | Score 1500+ | EduQuest",
  description:
    "EduQuest — India's #1 SAT coaching in Delhi. Digital SAT 2026, adaptive testing, diagnostics, 1500+ score plans. Online & offline in Delhi NCR. Free diagnostic test.",
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
  robots: {
    index: true,
    follow: true,
  },
};

/* ─────────────────────────────────────────────
   JSON-LD SCHEMAS
───────────────────────────────────────────── */

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "SAT Coaching in Delhi",
  description:
    "Comprehensive Digital SAT preparation with adaptive coaching, diagnostic testing, and 1500+ score planning for students in Delhi NCR.",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      name: "Online Live SAT Coaching",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      name: "Classroom SAT Coaching Delhi",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
      },
      offers: {
        "@type": "Offer",
        price: "70000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

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
        text: "Delhi students scoring 1500+ at EduQuest typically start in Grade 10, take a baseline diagnostic, and attend classes at our Gurgaon centre or online. Key steps: target weak skill clusters, master Bluebook's interface, complete 6+ full-length adaptive mocks.",
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
  // ... existing fields ...
  
  // ✅ ADD THIS
  areaServed: ["Delhi", "Delhi NCR", "Gurgaon", "Noida", "Faridabad"],
  
  // ✅ ADD THIS — helps Google understand what you offer
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SAT Coaching Programs Delhi",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Digital SAT Coaching Delhi",
        },
        price: "50000",
        priceCurrency: "INR",
      },
    ],
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
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
          <a href="/eduQuest" style={{ color: "var(--text3)" }}>Home</a>
          <span style={{ margin: "0 6px" }}>›</span>
          <a href="/sat" style={{ color: "var(--text3)" }}>SAT Coaching</a>
          <span style={{ margin: "0 6px" }}>›</span>
          SAT Coaching in Delhi
        </div>
      </nav>

      <main>
        <Hero />
        <SatStructure />
        <Positioning />
        <SystemSection />
        <SeoBlocks />
        <Pricing />
        <KeyAreas />
        <DiagnosticCta />
        <Admissions />
        <Testimonials />
        {/* <InternalLinks /> */}
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
