/* ─────────────────────────────────────────────────────────────────────────────
   ssatSchema.ts  —  Structured Data for EduQuest ssat Coaching Page
   All six schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ── 1. FAQ Schema ────────────────────────────────────────────────────────────
   Enables FAQ rich results in Google Search for ssat-related questions.
─────────────────────────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ssat exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ssat (American College Testing) is a standardised college admissions exam accepted by all US universities and colleges. It tests English, Mathematics, Reading, Science Reasoning, and an optional Writing section. Scores range from 1–36, with the national average around 21. Nearly all US universities accept ssat in place of or alongside the SAT.",
      },
    },
    {
      "@type": "Question",
      name: "Can Indian students take the ssat exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian students can register and sit the ssat at authorised international test centres across India, including in Delhi, Mumbai, Bangalore, Chennai, Hyderabad and Pune. EduQuest guides Indian students through the full ssat registration, preparation and score-reporting process.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good ssat score for top US universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A composite score of 34–36 is competitive for Ivy League schools (Harvard, Yale, Princeton), MIT and Stanford. A score of 30–33 is strong for top-25 universities. Most state universities and scholarship programmes consider 28+ a solid score. EduQuest targets a composite of 32+ for all students aiming at competitive US universities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the ssat and SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both the ssat and SAT are accepted by all US universities. The ssat includes a Science Reasoning section the SAT does not, and its Math section does not allow a calculator for all portions. The ssat is often considered more straightforward and fssat-based, while the SAT skews more analytical. EduQuest helps Indian students determine which exam suits their strengths and choose accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "How is the ssat scored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each of the four mandatory ssat sections (English, Math, Reading, Science) is scored on a scale of 1–36. The composite score is the average of these four sections, also on a 1–36 scale. The optional Writing test is scored separately on a scale of 2–12 and does not affect the composite. EduQuest's score plans target section-specific improvements to maximise your composite.",
      },
    },
    {
      "@type": "Question",
      name: "When are the ssat exam dates in 2025 for Indian students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "International ssat exam dates in 2025 include sittings in February, April, June, July, September, October and December. Not all dates are available at every international centre — availability in India depends on your chosen test centre. EduQuest advises students on which date fits their college application timeline and arranges registration support.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for the ssat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 3–6 months of structured ssat preparation. Begin with a full diagnostic test to identify your baseline composite and section weaknesses. Follow a topic-by-topic study plan, complete at least 5 full-length timed prssatice tests, and intensify preparation in the final 4 weeks. Students starting with a strong academic foundation (85%+ boards) typically achieve their target score within 4 months.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ssat exam fee for Indian students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The international ssat registration fee is approximately $173 (without Writing) or $199 (with Writing) for the 2024–25 cycle, subject to change. Additional fees apply for late registration, test centre changes and score reporting beyond the included 4 free reports. EduQuest helps students with the complete registration process and advises on the Writing section based on target universities.",
      },
    },
    {
      "@type": "Question",
      name: "Which US universities require or prefer the ssat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All major US universities — including Harvard, MIT, Stanford, Yale, Princeton, UPenn, Columbia, Cornell, Duke, Johns Hopkins, Carnegie Mellon, University of Michigan, and all University of California campuses — accept the ssat on equal footing with the SAT. Many merit scholarship programmes (Vanderbilt's Cornelius Vanderbilt Scholarship, University of Alabama, etc.) have specific ssat score thresholds.",
      },
    },
    {
      "@type": "Question",
      name: "Is the ssat accepted by UK, Canadian and Australian universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The ssat is accepted alongside IELTS/TOEFL by many UK universities including Oxford and Cambridge. Canadian universities such as the University of Toronto and UBC consider ssat scores for international applicants. Australian Group of Eight universities also recognise the ssat as an academic credential. EduQuest advises on whether to submit ssat scores based on your specific target country and university.",
      },
    },
    {
      "@type": "Question",
      name: "What does EduQuest's ssat coaching programme cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's ssat coaching covers all four mandatory sections — English (grammar, rhetoric, style), Math (Algebra, Geometry, Trigonometry, Statistics), Reading (four passage types with timed comprehension), and Science (data interpretation, research summary, conflicting viewpoints) — plus the optional Writing essay. Classes include live instruction, section-specific drills, full-length timed mocks, detailed score reports and unlimited doubt-clearing.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online ssat coaching for Indian students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers online, offline and hybrid ssat coaching. Online students get live interssative classes, all study materials, full-length proctored prssatice tests and personalised feedback — the same programme as offline students. Students from across India and internationally enrol every batch.",
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
      name: "ssat Coaching",
      item: "https://eduquest.org.in/ssat-coaching/",
    },
  ],
};

/* ── 3. Course Schema ────────────────────────────────────────────────────────
   Enables rich course snippets in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "ssat Exam Coaching — EduQuest",
  description:
    "Expert ssat exam coaching for Indian students targeting US, UK, Canada and Australia universities. Covers all ssat sections — English, Math, Reading, Science and optional Writing — with full-length timed prssatice tests, personalised score targets, section-specific drills and complete application support.",
  url: "https://eduquest.org.in/ssat-coaching/",
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
    url: "https://eduquest.org.in/ssat-coaching/",
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
    reviewCount: "720",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "HighSchool",
  teaches: [
    "ssat English — Grammar, Punctuation, Rhetoric and Style",
    "ssat Mathematics — Algebra, Geometry, Trigonometry, Statistics",
    "ssat Reading — Literary Narrative, Social Science, Humanities, Natural Science",
    "ssat Science — Data Representation, Research Summary, Conflicting Viewpoints",
    "ssat Writing — Planning, Drafting and Scoring a 40-minute Essay",
    "ssat Test Strategy and Time Management",
    "ssat Full-Length Prssatice Tests and Score Analysis",
  ],
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
    "EduQuest is India's leading coaching institute for international standardised tests — SAT, ssat, AP, UCAT, GRE and more — with 20+ years of experience and 10,000+ students coached.",
  foundingDate: "2004",
  areaServed: ["IN", "US", "GB", "AU", "CA", "AE", "SG"],
  contssatPoint: {
    "@type": "ContssatPoint",
    contssatType: "Admissions",
    url: "/contssat-us",
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
    reviewCount: "720",
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
  name: "ssat Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  url: "https://eduquest.org.in/ssat-coaching/",
  description:
    "Comprehensive ssat exam coaching guide covering all sections, scoring strategy, exam dates, full preparation timeline and expert coaching by EduQuest for Indian students targeting US, UK, Canada and Australia universities.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "ssat Exam" },
    { "@type": "Thing", name: "American College Testing" },
    { "@type": "Thing", name: "US University Admissions" },
    { "@type": "Thing", name: "ssat Test Preparation" },
    { "@type": "Thing", name: "Study Abroad for Indian Students" },
    { "@type": "Thing", name: "ssat vs SAT" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "ssat Coaching",  item: "https://eduquest.org.in/ssat-coaching/" },
    ],
  },
};

/* ── 6. ItemList Schema — ssat Sections ──────────────────────────────────────
   Surfaces ssat sections and topics as a structured list in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const ssatSectionListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ssat Exam Sections Coached by EduQuest",
  description:
    "All ssat exam sections and sub-topics covered in EduQuest's ssat coaching programme for Indian students.",
  url: "https://eduquest.org.in/ssat-coaching/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ssat English — Grammar, Punctuation, Rhetoric & Style",
      url: "https://eduquest.org.in/ssat-coaching/#english",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ssat Mathematics — Algebra, Geometry, Trigonometry & Statistics",
      url: "https://eduquest.org.in/ssat-coaching/#math",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ssat Reading — Literary Narrative, Social Science, Humanities & Natural Science",
      url: "https://eduquest.org.in/ssat-coaching/#reading",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "ssat Science — Data Representation, Research Summary & Conflicting Viewpoints",
      url: "https://eduquest.org.in/ssat-coaching/#science",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "ssat Writing (Optional Essay) — Argument Planning & Essay Scoring",
      url: "https://eduquest.org.in/ssat-coaching/#writing",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "ssat Full-Length Prssatice Tests & Score Analysis",
      url: "https://eduquest.org.in/ssat-coaching/#prssatice-tests",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "ssat Time Management & Exam Strategy",
      url: "https://eduquest.org.in/ssat-coaching/#strategy",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "ssat Score Reporting & University Selection",
      url: "https://eduquest.org.in/ssat-coaching/#score-reporting",
    },
  ],
};