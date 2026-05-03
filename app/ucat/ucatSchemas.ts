// app/ucat/ucatSchemas.ts
// ─────────────────────────────────────────────────────────────────────────────
// All JSON-LD structured data for the UCAT 2026 page.
// Import individual schemas in page.tsx and inject via <script> tags.
// ─────────────────────────────────────────────────────────────────────────────

/* ── 1. FAQ Schema ───────────────────────────────────────────────────────────
   Targets the "People Also Ask" box in Google Search.
   Keep answers concise (40–300 words). Add/remove questions freely.
─────────────────────────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the UCAT exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University Clinical Aptitude Test (UCAT) is a standardised aptitude test used by medical and dental schools in the UK, Australia and New Zealand. It assesses verbal reasoning, decision making, quantitative reasoning and situational judgement — skills essential for a clinical career.",
      },
    },
    {
      "@type": "Question",
      name: "What are the major changes in UCAT 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abstract Reasoning has been completely removed from UCAT 2026. The total scoring scale has reduced from 3600 to 2700. The four remaining sections are Verbal Reasoning, Decision Making, Quantitative Reasoning, and Situational Judgement.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good UCAT score for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On the new 2700 scale: 2400+ is elite (Oxford, Cambridge, UCL); 2100–2400 is competitive for most top UK and Australian schools; 1800–2100 is still competitive for many universities. Always aim for Band 1 or 2 in Situational Judgement.",
      },
    },
    {
      "@type": "Question",
      name: "UCAT UK vs UCAT ANZ — which should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If targeting only UK medical schools, take UCAT UK. For flexibility across Australia, New Zealand, and the UK, UCAT ANZ is the smarter choice — it has earlier deadlines and broader acceptance.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for UCAT 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 3–6 months of structured preparation. Begin with a Bluebook diagnostic test, work section-by-section, then complete full adaptive mock tests in the final 6–8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can Indian students appear for UCAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian students can register and sit UCAT at authorised Pearson VUE test centres across India. EduQuest guides students through the entire registration, preparation and application process.",
      },
    },
    {
      "@type": "Question",
      name: "How much does UCAT cost for Indian students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UCAT registration fee for test centres outside the EU is approximately £95 (UCAT UK) or AUD 300 (UCAT ANZ) in 2026. Bursaries are available for students with financial need. Contact EduQuest for guidance on bursary applications.",
      },
    },
    {
      "@type": "Question",
      name: "What UCAT score do I need for Oxford or Cambridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oxford and Cambridge typically expect a UCAT score in the top 10–15% of test-takers. On the 2026 scale (2700 total), this generally means 2350–2450+. A Band 1 Situational Judgement score is strongly preferred.",
      },
    },
    {
      "@type": "Question",
      name: "Is Abstract Reasoning still part of UCAT 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Abstract Reasoning was officially removed from UCAT starting 2026. The exam now has four sections: Verbal Reasoning, Decision Making, Quantitative Reasoning, and Situational Judgement, with a new maximum score of 2700.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online UCAT coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers online, offline and hybrid UCAT coaching with live classes, 6–15 adaptive mock tests, unlimited doubt clearing and personalised score targets. Students from across India — and internationally — enrol every year.",
      },
    },
  ],
};

/* ── 2. Breadcrumb Schema ────────────────────────────────────────────────────
   Helps Google display the breadcrumb trail in search results.
─────────────────────────────────────────────────────────────────────────────── */
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://eduquest.org.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "UCAT Coaching",
      item: "https://eduquest.org.in/ucat/",
    },
  ],
};

/* ── 3. Course Schema ────────────────────────────────────────────────────────
   Enables rich course snippets in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "UCAT 2026 Coaching — EduQuest",
  description:
    "Expert UCAT 2026 coaching for Indian students targeting UK, Australia & New Zealand medical schools. Covers all four sections, adaptive mocks, personalised score targets and full application support.",
  url: "https://eduquest.org.in/ucat/",
  inLanguage: "en-IN",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  offers: {
    "@type": "Offer",
    category: "Online & Offline Coaching",
    availability: "https://schema.org/InStock",
    url: "https://eduquest.org.in/ucat/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT100H",
      inLanguage: "en-IN",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── 4. Organization Schema ──────────────────────────────────────────────────
   Reinforces EduQuest's brand entity in Google's Knowledge Graph.
─────────────────────────────────────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is India's leading coaching institute for international standardised tests — SAT, UCAT, GRE and more — with 20+ years of experience and 10,000+ students coached.",
  foundingDate: "2004",
  areaServed: ["IN", "GB", "AU", "NZ", "AE", "SG"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Admissions",
    url: "/contact-us",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/EduQuestIndia",
    "https://www.instagram.com/eduquest_india",
    "https://www.linkedin.com/company/eduquest-india",
    "https://www.youtube.com/@EduQuestIndia",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── 5. WebPage Schema ───────────────────────────────────────────────────────
   Gives Google additional page-level signals (date, author, about).
─────────────────────────────────────────────────────────────────────────────── */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "UCAT 2026 Complete Guide for Indian Students | EduQuest",
  url: "https://eduquest.org.in/ucat/",
  description:
    "Comprehensive UCAT 2026 guide covering the new exam format, score targets, preparation strategy and expert coaching by EduQuest for Indian students targeting UK, Australia and New Zealand medical schools.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0], // auto-updates on each build
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "UCAT 2026" },
    { "@type": "Thing", name: "UK Medical School Admissions" },
    { "@type": "Thing", name: "Australia Medical School Admissions" },
    { "@type": "Thing", name: "MBBS Abroad for Indian Students" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "UCAT Coaching", item: "https://eduquest.org.in/ucat/" },
    ],
  },
};