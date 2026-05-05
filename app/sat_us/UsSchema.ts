// app/sat-coaching-us-students/UsSchema.ts
// ─────────────────────────────────────────────────────────────────────────────
// All JSON-LD structured data for the SAT Coaching — US Students page.
// Import individual schemas in page.tsx and inject via <script> tags.
// ─────────────────────────────────────────────────────────────────────────────

/* ── 1. FAQ Schema ───────────────────────────────────────────────────────────
   Targets the "People Also Ask" box in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the SAT still required at US universities in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As of 2025–2026, MIT, Yale, Dartmouth, UT Austin, Florida, Georgia Tech, and 80+ other US universities have reinstated mandatory SAT/ACT requirements. Even at test-optional schools, submitting a strong score (1500+) statistically improves admission chances and merit aid eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest coach US-based students? Do I need to travel to India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No travel required. All sessions are conducted online via live video with screen sharing and a virtual whiteboard. Sessions are scheduled to match your US time zone — EST, CST, MST, or PST. Weekend intensives are also available.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Digital SAT and how is it different from the old paper SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital SAT replaced the paper SAT for US students in 2024. Key changes: taken on a computer via the Bluebook app, fully adaptive (Module 2 difficulty adjusts based on Module 1 performance), shorter at 2 hours 14 minutes versus 3+ hours, calculator allowed throughout the Math section, and shorter reading passages with one question each.",
      },
    },
    {
      "@type": "Question",
      name: "How many times can I take the SAT? Is there a limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "College Board allows unlimited SAT attempts. Most US colleges use Superscoring — taking your highest Math and highest Reading & Writing scores across all attempts. EduQuest recommends 2–3 attempts, peaking by August or October of Grade 12.",
      },
    },
    {
      "@type": "Question",
      name: "What is PSAT/NMSQT and should my child take it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The PSAT/NMSQT is taken in October of Grade 11. High scorers are designated National Merit Semifinalists, unlocking significant scholarships and strengthening college applications. EduQuest offers dedicated PSAT prep as part of its long-horizon programmes for US students.",
      },
    },
    {
      "@type": "Question",
      name: "When should my child start SAT preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade 10 is ideal for students targeting 1500+. Grade 11 students should begin immediately, with March or May test dates as the primary goal. Grade 12 students targeting Early Action or Early Decision applications should prepare to test in August or October.",
      },
    },
    {
      "@type": "Question",
      name: "Can EduQuest help with the full college application and not just SAT prep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers comprehensive admissions positioning including university shortlisting, application strategy, essay guidance, extracurricular narrative development, and profile building. SAT coaching is one component of an end-to-end admissions ecosystem used by many US families.",
      },
    },
    {
      "@type": "Question",
      name: "What SAT score do I need for top US universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Target scores vary by institution: MIT and Harvard require 1580+, Stanford and Yale 1570+, Princeton 1545+, UCLA and UC Berkeley 1510+, and UT Austin 1490+. EduQuest's Elite 1570+ Programme is specifically designed for students targeting top-10 US universities.",
      },
    },
    {
      "@type": "Question",
      name: "What is SAT Superscoring and do all universities accept it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT Superscoring allows universities to take your highest Math score from one sitting and your highest Reading & Writing score from another, combining them into a single best composite. Most top US universities — including Harvard, Stanford, MIT, and the Ivy League — officially superscore. EduQuest's multi-attempt strategy is built around maximising your Superscore.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Digital SAT scored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital SAT is scored on a 400–1600 scale — 200–800 for Math and 200–800 for Reading & Writing. Because the test is adaptive, the difficulty of Module 2 affects how your raw score is converted to a scaled score. Students who perform better in Module 1 receive harder Module 2 questions, which carry higher score ceilings.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest use real Bluebook practice tests?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest integrates College Board's official Bluebook adaptive practice tests into every programme. Students practise in the exact testing environment they will encounter on exam day, including the adaptive module structure, the Desmos calculator, and the annotate-and-flag tools.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest's 19-cluster diagnostic work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's proprietary 19-cluster diagnostic maps a student's performance across every tested skill cluster — from Linear Functions and Systems of Equations in Math to Command of Evidence and Rhetoric in Reading & Writing. This pinpoints exactly where points are being lost and drives a customised study plan unique to each student.",
      },
    },
    {
      "@type": "Question",
      name: "Can EduQuest help NRI or Indian-origin students studying in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. A significant portion of EduQuest's US student base comprises NRI families and Indian-origin students at US high schools. EduQuest understands both the Indian academic background and the nuances of the US college admissions process, making it uniquely positioned to serve this community.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the SAT and ACT? Which should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SAT (College Board) and ACT (ACT Inc.) are both accepted at virtually all US universities. The SAT is now adaptive and digital; the ACT includes a Science section and is still paper-based at most centres. EduQuest administers diagnostic tests for both and recommends the exam where a student shows the higher projected score. Many students choose to prepare for both.",
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
      name: "SAT Coaching",
      item: "https://eduquest.org.in/sat/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SAT Coaching for US Students",
      item: "https://eduquest.org.in/sat-coaching-us-students/",
    },
  ],
};

/* ── 3. Organization Schema ──────────────────────────────────────────────────
   Reinforces EduQuest's brand entity in Google's Knowledge Graph.
   Emphasises US service area for US-targeted queries.
─────────────────────────────────────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/logo.png",
  image: "https://eduquest.org.in/images/sat-coaching-us-students-og.jpg",
  description:
    "India's premier SAT, ACT, AP, and UCAT coaching firm offering online programmes for US-based students. Established 1995. 320+ US students coached, average score 1560.",
  foundingDate: "1995",
  telephone: "+91-9958041888",
  email: "contact@eduquest.org.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1210 Galleria Boulevard, DLF Phase IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Admissions",
    url: "https://eduquest.org.in/contact-us",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SAT Coaching Programmes for US Students",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Accelerated SAT Programme",
          description:
            "6–8 week intensive SAT prep for US students targeting 1400+. Includes 20 hours of 1-on-1 live sessions and 3 full Bluebook adaptive mocks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Elite SAT 1570+ Programme",
          description:
            "3–4 month programme targeting 1550–1600 for top-10 US university applicants. Includes 40 hours of 1-on-1 sessions, 6 Bluebook mocks, PSAT/NMSQT strategy, and admissions integration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Long-Horizon 2-Year SAT Programme",
          description:
            "Grades 9–11 programme integrating SAT, PSAT, and AP coaching for National Merit and top-10 university targeting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Live Group SAT Batches",
          description:
            "3-month weekend cohort for US students targeting 1400–1500. Small batch sizes with 4 full Bluebook adaptive mocks.",
        },
      },
    ],
  },
};

/* ── 4. Course Schema ────────────────────────────────────────────────────────
   Enables rich course snippets in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "SAT Coaching for US Students — EduQuest",
  description:
    "Expert online SAT coaching for US-based students targeting 1500–1600. Digital SAT 2026 aligned, Bluebook-native adaptive mocks, 19-cluster diagnostic, EST/CST/PST scheduling, PSAT & National Merit prep, and full Ivy League admissions integration.",
  url: "https://eduquest.org.in/sat-coaching-us-students/",
  inLanguage: "en-US",
  image: "https://eduquest.org.in/images/sat-coaching-us-students-og.jpg",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  offers: {
    "@type": "Offer",
    category: "Online 1-on-1 & Group Coaching",
    availability: "https://schema.org/InStock",
    url: "https://eduquest.org.in/sat-coaching-us-students/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "Accelerated SAT Programme",
      courseMode: ["Online"],
      courseWorkload: "PT20H",
      inLanguage: "en-US",
      description: "6–8 week intensive for students targeting 1400+. 20 hours of 1-on-1 live coaching and 3 Bluebook adaptive mocks.",
    },
    {
      "@type": "CourseInstance",
      name: "Elite SAT 1570+ Programme",
      courseMode: ["Online"],
      courseWorkload: "PT40H",
      inLanguage: "en-US",
      description: "3–4 month programme for top-10 university applicants. 40 hours of 1-on-1, 6 Bluebook mocks, PSAT strategy, and admissions integration.",
    },
    {
      "@type": "CourseInstance",
      name: "Long-Horizon 2-Year SAT Programme",
      courseMode: ["Online"],
      courseWorkload: "PT120H",
      inLanguage: "en-US",
      description: "Grades 9–11 integrated SAT, PSAT and AP programme targeting National Merit and Ivy League admission.",
    },
    {
      "@type": "CourseInstance",
      name: "Live Group SAT Batches",
      courseMode: ["Online"],
      courseWorkload: "PT36H",
      inLanguage: "en-US",
      description: "3-month weekend group cohort targeting 1400–1500 with 4 Bluebook adaptive mocks.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "320",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "HighSchool",
  teaches: [
    "Digital SAT Math — Algebra",
    "Digital SAT Math — Advanced Math",
    "Digital SAT Math — Problem Solving and Data Analysis",
    "Digital SAT Math — Geometry and Trigonometry",
    "Digital SAT Reading and Writing — Information and Ideas",
    "Digital SAT Reading and Writing — Craft and Structure",
    "Digital SAT Reading and Writing — Expression of Ideas",
    "Digital SAT Reading and Writing — Standard English Conventions",
    "PSAT/NMSQT Preparation",
    "National Merit Scholarship Strategy",
    "SAT Adaptive Test Strategy",
    "Bluebook Practice Test Navigation",
    "SAT Score Superscoring Strategy",
    "SAT Time Management",
  ],
};

/* ── 5. WebPage Schema ───────────────────────────────────────────────────────
   Gives Google additional page-level signals (date, author, about).
─────────────────────────────────────────────────────────────────────────────── */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest Online SAT Prep",
  url: "https://eduquest.org.in/sat-coaching-us-students/",
  description:
    "Comprehensive online SAT coaching for US-based students — Digital SAT 2026 format, Bluebook adaptive mocks, 19-cluster diagnostics, EST/CST/PST scheduling, PSAT & National Merit prep, and Ivy League admissions support.",
  inLanguage: "en-US",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "Digital SAT 2026" },
    { "@type": "Thing", name: "SAT Coaching for US Students" },
    { "@type": "Thing", name: "PSAT NMSQT" },
    { "@type": "Thing", name: "National Merit Scholarship" },
    { "@type": "Thing", name: "US College Admissions" },
    { "@type": "Thing", name: "Ivy League Admissions" },
    { "@type": "Thing", name: "Online SAT Tutoring" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                          item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "SAT Coaching",                  item: "https://eduquest.org.in/sat/" },
      { "@type": "ListItem", position: 3, name: "SAT Coaching for US Students",  item: "https://eduquest.org.in/sat-coaching-us-students/" },
    ],
  },
};

/* ── 6. ItemList Schema ──────────────────────────────────────────────────────
   Surfaces individual SAT programmes as a list rich result in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const satProgrammeListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SAT Coaching Programmes for US Students — EduQuest",
  description: "All SAT preparation programmes offered by EduQuest for US-based students targeting 1400–1600+.",
  url: "https://eduquest.org.in/sat-coaching-us-students/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accelerated SAT Programme (6–8 weeks, 1400+ target)",
      url: "https://eduquest.org.in/sat-coaching-us-students/#accelerated",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Elite SAT 1570+ Programme (3–4 months, Ivy League target)",
      url: "https://eduquest.org.in/sat-coaching-us-students/#elite-1570",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Long-Horizon 2-Year SAT + PSAT + AP Programme (Grades 9–11)",
      url: "https://eduquest.org.in/sat-coaching-us-students/#long-horizon",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Live Group SAT Batches (3 months, 1400–1500 target)",
      url: "https://eduquest.org.in/sat-coaching-us-students/#group-batches",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "PSAT / NMSQT Intensive (National Merit Scholarship targeting)",
      url: "https://eduquest.org.in/sat-coaching-us-students/#psat-nmsqt",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "SAT + ACT Dual Prep Programme",
      url: "https://eduquest.org.in/sat-coaching-us-students/#sat-act-dual",
    },
  ],
};