/* ──────────────────────────────────────────────────────────────────────────────
   researchPaperSchema.ts
   Structured-data schemas for /research-paper-drafting-publishing-services
   Research Paper Drafting & Publishing Services by EduQuest
   ────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/research-paper-drafting-publishing-services/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does EduQuest help with research paper drafting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest provides end-to-end mentorship, from choosing a niche topic and conducting a literature review to data analysis and drafting the final manuscript. Our mentors ensure your research meets academic standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can students publish their research in international journals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we guide students through the submission process for peer-reviewed international journals and conferences. We help identify the right publication platform based on the research impact and scope.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects are covered under the research program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support research in various fields, including STEM (Physics, Biology, Chemistry, Computer Science, AI), Humanities, Economics, Psychology, and Social Sciences. Our mentors are experts in their respective domains.",
      },
    },
    {
      "@type": "Question",
      name: "Does research help in college admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. A published research paper or a well-documented research project significantly enhances a student's profile, especially for competitive admissions at Ivy League and top-tier global universities.",
      },
    },
    {
      "@type": "Question",
      name: "Is there support for data analysis and statistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our program includes guidance on research methodology, data collection, and statistical analysis using tools like Python, R, or Excel, ensuring the findings are robust and scientifically valid.",
      },
    }
  ],
};

// ── Breadcrumb Schema ───────────────────────────────────────────────────────
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Research Paper Services", item: PAGE_URL },
  ],
};

// ── Organization Schema ─────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: SITE_URL,
  logo: SITE_URL + "/wp-content/uploads/eduquest-logo.png",
  image: SITE_URL + "/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is a premier admissions strategy and research mentorship firm, helping students draft and publish high-impact research papers for global academic success.",
  foundingDate: "1995",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 1210 & 1212A, Galleria Boulevard, DLF Phase IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9958041888",
      contactType: "Admissions",
      email: "contact@eduquest.org.in",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
  ],
  sameAs: [
    "https://www.facebook.com/EduQuestIndia",
    "https://www.instagram.com/eduquest_india",
    "https://www.linkedin.com/company/eduquest-india",
    "https://www.youtube.com/@EduQuestIndia",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── WebPage Schema ──────────────────────────────────────────────────────────
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Research Paper Drafting & Publishing Services | EduQuest",
  url: PAGE_URL,
  description:
    "Master the art of academic research with EduQuest. We offer expert mentorship for research paper drafting, methodology, and publication in peer-reviewed journals.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Academic Research",
    description: "End-to-end guidance for scholarly research and journal publication.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "High school and undergraduate students aiming for research-based academic profiles.",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".sectionLabel"],
  },
};

// ── Service Schema ──────────────────────────────────────────────────────────
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EduQuest Research Mentorship Services",
  description: "Comprehensive support for academic research and global publishing.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Research Topic & Niche Selection",
        description:
          "Guided exploration to identify high-impact research topics aligned with student interests and academic trends.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Drafting & Methodology Support",
        description:
          "Expert assistance in writing manuscripts, conducting literature reviews, and applying robust research methodologies.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Journal Publication Guidance",
        description:
          "Strategic support for submitting research papers to peer-reviewed international journals and academic conferences.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    }
  ],
};

