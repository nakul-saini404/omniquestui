/* ─────────────────────────────────────────────────────────────────────────────
   ipmatSchema.ts  —  Structured Data for EduQuest IPMAT Coaching Page
   All six schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ── 1. FAQ Schema ──────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the IPMAT exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPMAT (Integrated Programme in Management Aptitude Test) is an entrance exam conducted by IIM Indore, IIM Rohtak and IIM Ranchi for their 5-year Integrated Programme in Management (IPM). It is one of the most prestigious management entrance exams for students after Class 12, allowing them to pursue a BBA+MBA integrated degree at an IIM without appearing for CAT.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to appear for IPMAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To be eligible for IPMAT (IIM Indore), candidates must have passed Class 12 or equivalent with at least 60% marks (55% for SC/ST/PwD candidates) and must be below 20 years of age (22 for SC/ST/PwD). For IIM Rohtak and IIM Ranchi, eligibility criteria are similar. Students appearing in Class 12 board exams are also eligible to apply provisionally.",
      },
    },
    {
      "@type": "Question",
      name: "What is the IPMAT exam pattern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPMAT IIM Indore consists of three sections: Quantitative Ability (MCQ), Quantitative Ability (Short Answer), and Verbal Ability (MCQ). The total duration is 120 minutes with 100 questions. IPMAT IIM Rohtak has two sections: Quantitative Technique and Data Interpretation, and Logical Reasoning and Verbal Ability, conducted over 120 minutes. There is negative marking of -1 for each wrong MCQ answer.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good score in IPMAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For IIM Indore IPMAT, a score of 120+ out of 150 is generally considered competitive for shortlisting. For IIM Rohtak, scores above 100 are typically required for PI rounds. Cutoffs vary by year and category. EduQuest's students consistently score 130+ through structured preparation covering all three sections with full mock tests and personalised feedback.",
      },
    },
    {
      "@type": "Question",
      name: "How is IPMAT different from other management entrance exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPMAT is unique because it is taken after Class 12 — not after graduation like CAT, XAT or GMAT. It offers a direct 5-year integrated BBA+MBA programme at IIMs, one of India's most prestigious institutions. Students who crack IPMAT bypass the CAT rat race entirely and graduate with an IIM degree at age 22–23.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects are covered in IPMAT coaching at EduQuest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's IPMAT coaching covers Quantitative Ability (Arithmetic, Algebra, Geometry, Number Theory, Modern Math), Verbal Ability (Reading Comprehension, Grammar, Vocabulary, Para Jumbles, Critical Reasoning), Logical Reasoning (Puzzles, Series, Coding-Decoding, Syllogisms), and Data Interpretation. Each section is taught by subject-specialist faculty with IIM-level exam focus.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for IPMAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 6–12 months of structured IPMAT preparation. Students in Class 11 should begin building quantitative and verbal foundations early. Class 12 students targeting the May exam should start no later than October–November. EduQuest's diagnostic assessment determines the right entry point and creates a personalised month-by-month study plan for every student.",
      },
    },
    {
      "@type": "Question",
      name: "When is the IPMAT exam conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPMAT IIM Indore is typically conducted in May each year, with applications opening in January–February. IPMAT IIM Rohtak and IIM Ranchi are conducted separately, usually around the same period. Exact dates vary each year. EduQuest keeps students informed of registration deadlines and exam schedules and provides end-to-end application support.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online IPMAT coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers online, offline and hybrid IPMAT coaching. Online students receive live interactive classes, recorded session replays, all study materials, full-length proctored mock tests, detailed performance analytics and unlimited doubt-clearing — the same programme as in-centre students. Students across India and abroad enrol every batch.",
      },
    },
    {
      "@type": "Question",
      name: "What is EduQuest's IPMAT coaching methodology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's IPMAT programme begins with a free diagnostic assessment to map each student's strengths and gaps across all three sections. A personalised learning plan is then created covering conceptual foundation, topic-wise drills, full-length timed mocks, and a final strategy sprint. Small batches (max 8 students) ensure personalised attention and consistent progress tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Can CBSE and ICSE students crack IPMAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Most IPMAT toppers are CBSE and ICSE students. EduQuest's curriculum aligns IPMAT preparation with Class 11–12 Maths and English, so students reinforce board exam concepts while building IPMAT-specific skills. Students from science, commerce and even humanities streams have successfully cracked IPMAT with EduQuest's coaching.",
      },
    },
    {
      "@type": "Question",
      name: "What are the career prospects after completing IIM Indore IPM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPM graduates from IIM Indore have secured placements at top firms including McKinsey, BCG, Bain, Goldman Sachs, Deloitte, Amazon and more. The average placement package for IPM graduates consistently ranks among the highest for undergraduate business programmes in India. IPM alumni also pursue international education and entrepreneurship with an IIM pedigree.",
      },
    },
    {
      "@type": "Question",
      name: "How many mock tests are included in EduQuest's IPMAT programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's IPMAT programme includes a minimum of 10 full-length timed mock tests modelled on the exact pattern of IIM Indore and IIM Rohtak exams, plus sectional mocks for each topic. Every mock is followed by a detailed score report, error analysis and a personalised review session with the student's assigned mentor.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an interview round for IPMAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After clearing the written IPMAT, shortlisted candidates appear for a Personal Interview (PI) at IIM Indore and a Written Ability Test (WAT) + PI at IIM Rohtak. EduQuest provides comprehensive PI preparation including mock interviews, WAT writing practice, profile building guidance and communication skills coaching.",
      },
    },
    {
      "@type": "Question",
      name: "What is the IPMAT exam fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IPMAT IIM Indore application fee is approximately ₹4,130 for General/EWS/OBC candidates and ₹2,065 for SC/ST/PwD candidates (subject to revision each year). IIM Rohtak and IIM Ranchi have separate application fees. EduQuest assists students with the complete application process, document preparation and deadline management.",
      },
    },
  ],
};

/* ── 2. Breadcrumb Schema ──────────────────────────────────────────────────── */
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
      name: "IPMAT Coaching",
      item: "https://eduquest.org.in/ipmat-coaching/",
    },
  ],
};

/* ── 3. Course Schema ──────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IPMAT Coaching — EduQuest Gurgaon",
  description:
    "India's most comprehensive IPMAT coaching for Class 11–12 students targeting IIM Indore, IIM Rohtak and IIM Ranchi's 5-year Integrated Programme in Management. Covers Quantitative Ability, Verbal Ability and Logical Reasoning with full-length timed mocks, personalised study plans and PI preparation.",
  url: "https://eduquest.org.in/ipmat-coaching/",
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
    url: "https://eduquest.org.in/ipmat-coaching/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT150H",
      inLanguage: "en-IN",
      location: {
        "@type": "Place",
        name: "EduQuest Gurgaon — DLF Phase IV",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 1210 & 1212A, Galleria Boulevard, DLF Phase IV",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122009",
          addressCountry: "IN",
        },
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "580",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "HighSchool",
  teaches: [
    "IPMAT Quantitative Ability — Arithmetic, Algebra, Geometry, Number Theory",
    "IPMAT Quantitative Ability — Short Answer Questions",
    "IPMAT Verbal Ability — Reading Comprehension and Grammar",
    "IPMAT Verbal Ability — Vocabulary, Para Jumbles and Critical Reasoning",
    "IPMAT Logical Reasoning — Puzzles, Series and Syllogisms",
    "IPMAT Data Interpretation — Tables, Charts and Graphs",
    "IPMAT Full-Length Mock Tests and Score Analysis",
    "IPMAT Personal Interview Preparation",
    "IPMAT Written Ability Test (WAT) Preparation",
    "IPMAT Application and Registration Strategy",
  ],
};

/* ── 4. Organization Schema ────────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is India's leading coaching institute for IPMAT, SAT, ACT, AP, UCAT, GRE and international admissions — with 20+ years of experience and 10,000+ students coached.",
  foundingDate: "2004",
  areaServed: ["IN", "US", "GB", "AU", "CA", "AE", "SG"],
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
    reviewCount: "580",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── 5. WebPage Schema ─────────────────────────────────────────────────────── */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best IPMAT Coaching in Gurgaon | IIM Indore & Rohtak | EduQuest",
  url: "https://eduquest.org.in/ipmat-coaching/",
  description:
    "India's most comprehensive IPMAT coaching in Gurgaon — personalised study plans, expert faculty, 10+ full-length mocks and PI preparation for IIM Indore, IIM Rohtak and IIM Ranchi's 5-year IPM programme.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "IPMAT Exam" },
    { "@type": "Thing", name: "IIM Indore IPM" },
    { "@type": "Thing", name: "IIM Rohtak IPM" },
    { "@type": "Thing", name: "Integrated Programme in Management" },
    { "@type": "Thing", name: "IPMAT Preparation" },
    { "@type": "Thing", name: "Management Entrance Exam India" },
    { "@type": "Thing", name: "BBA MBA Integrated Programme India" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",            item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "IPMAT Coaching",  item: "https://eduquest.org.in/ipmat-coaching/" },
    ],
  },
};

/* ── 6. ItemList Schema — IPMAT Sections ───────────────────────────────────── */
export const ipmatSectionListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IPMAT Exam Sections Coached by EduQuest",
  description:
    "All IPMAT exam sections and sub-topics covered in EduQuest's IPMAT coaching programme for Class 11–12 students in Gurgaon, India.",
  url: "https://eduquest.org.in/ipmat-coaching/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "IPMAT Quantitative Ability (MCQ) — Arithmetic, Algebra, Geometry, Number Theory",
      url: "https://eduquest.org.in/ipmat-coaching/#quant-mcq",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IPMAT Quantitative Ability (Short Answer) — Advanced Problem Solving",
      url: "https://eduquest.org.in/ipmat-coaching/#quant-sa",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IPMAT Verbal Ability — Reading Comprehension, Grammar & Vocabulary",
      url: "https://eduquest.org.in/ipmat-coaching/#verbal",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "IPMAT Logical Reasoning — Puzzles, Series, Syllogisms & Coding-Decoding",
      url: "https://eduquest.org.in/ipmat-coaching/#logical-reasoning",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "IPMAT Data Interpretation — Tables, Bar Charts, Pie Charts & Line Graphs",
      url: "https://eduquest.org.in/ipmat-coaching/#data-interpretation",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "IPMAT Full-Length Mock Tests & Sectional Drills",
      url: "https://eduquest.org.in/ipmat-coaching/#mock-tests",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "IPMAT Personal Interview (PI) Preparation",
      url: "https://eduquest.org.in/ipmat-coaching/#pi-prep",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "IPMAT Written Ability Test (WAT) Preparation",
      url: "https://eduquest.org.in/ipmat-coaching/#wat-prep",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "IPMAT Profile Building & Extracurricular Strategy",
      url: "https://eduquest.org.in/ipmat-coaching/#profile-building",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "IPMAT Application, Registration & Deadline Management",
      url: "https://eduquest.org.in/ipmat-coaching/#application",
    },
  ],
};