export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are AP exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advanced Placement (AP) exams are standardised college-level examinations administered by the College Board each May. Students who score 3, 4, or 5 can earn college credit or advanced placement at thousands of universities worldwide, including in the US, UK, Canada and Australia.",
      },
    },
    {
      "@type": "Question",
      name: "Can Indian students take AP exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian students can register and sit AP exams at authorised College Board test centres across India. AP scores are widely accepted by US, UK, Canadian and Australian universities as evidence of academic rigour. EduQuest helps Indian students register, prepare and maximise their AP scores.",
      },
    },
    {
      "@type": "Question",
      name: "How many AP subjects are offered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The College Board offers 38 AP courses and exams across subjects including STEM (Calculus AB/BC, Physics, Chemistry, Biology, Computer Science), Humanities (English Language, English Literature, History, Psychology) and Social Sciences. EduQuest coaches the most in-demand AP subjects for Indian students.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good AP score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AP exams are scored on a 1–5 scale. A score of 3 is considered 'qualified', 4 is 'well qualified', and 5 is 'extremely well qualified'. Most competitive US universities (Ivy League, MIT, Stanford) prefer scores of 4 or 5 for credit. EduQuest targets 4–5 for all students.",
      },
    },
    {
      "@type": "Question",
      name: "Do AP scores help with US university admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Taking multiple AP courses demonstrates academic rigour, which is a key factor in US university admissions. High AP scores (4–5) can earn college credit, reduce tuition costs and strengthen applications to top universities including Ivy League schools.",
      },
    },
    {
      "@type": "Question",
      name: "Which AP subjects are best for pre-med students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-med students benefit most from AP Biology, AP Chemistry, AP Physics (C: Mechanics or 1), AP Psychology and AP Statistics. These subjects align with pre-med prerequisites and showcase the scientific aptitude required for medical school applications in the US, UK and Australia.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for AP exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 4–6 months of structured preparation per AP subject. Start with a diagnostic test to identify weak areas, follow a topic-by-topic study plan, and complete 3–5 full-length practice exams in the final 4–6 weeks before the May exam window.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AP exam fee for Indian students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AP exam fee for students outside the US is approximately $137–$143 per subject in 2025. Fee waivers are available for students with demonstrated financial need. Contact EduQuest for help navigating the registration and fee waiver process.",
      },
    },
    {
      "@type": "Question",
      name: "Which universities accept AP scores for credit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Over 4,000 colleges and universities worldwide accept AP scores, including Harvard, MIT, Stanford, Yale, Princeton, Oxford, Cambridge, University of Toronto and University of Melbourne. Each institution sets its own minimum score requirement (typically 4 or 5) for credit.",
      },
    },
    {
      "@type": "Question",
      name: "How many AP exams should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most competitive applicants to top US universities take 5–8 AP exams over Grades 11 and 12. Quality matters more than quantity — scoring 5 on four well-chosen subjects outweighs scoring 3 on eight subjects. EduQuest helps students select the right AP combination for their target universities and intended major.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online AP exam coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers online, offline and hybrid AP exam coaching with live interactive classes, comprehensive study materials, full-length practice exams, personalised feedback and unlimited doubt-clearing sessions. Students across India and internationally enrol every year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between AP and A-Levels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are pre-university qualifications, but AP exams are administered by the US College Board each May and accepted globally, while A-Levels are a 2-year UK curriculum. AP exams cover individual subjects in depth and are suited for students targeting US, Canadian and many UK universities. EduQuest advises which is better based on your target universities.",
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
      name: "AP Exam Coaching",
      item: "https://eduquest.org.in/ap-coaching/",
    },
  ],
};

/* ── 3. Course Schema ────────────────────────────────────────────────────────
   Enables rich course snippets in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AP Exam Coaching — EduQuest",
  description:
    "Expert AP exam coaching for Indian students targeting US, UK, Canada and Australia universities. Covers all major AP subjects including Calculus, Physics, Chemistry, Biology, Computer Science, English and History — with full-length practice exams, personalised score targets and complete application support.",
  url: "https://eduquest.org.in/ap-coaching/",
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
    url: "https://eduquest.org.in/ap-coaching/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT120H",
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
  educationalLevel: "HighSchool",
  teaches: [
    "AP Calculus AB",
    "AP Calculus BC",
    "AP Physics 1",
    "AP Physics C: Mechanics",
    "AP Chemistry",
    "AP Biology",
    "AP Computer Science A",
    "AP Computer Science Principles",
    "AP English Language and Composition",
    "AP English Literature and Composition",
    "AP US History",
    "AP World History",
    "AP Psychology",
    "AP Statistics",
    "AP Economics (Micro & Macro)",
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
    "EduQuest is India's leading coaching institute for international standardised tests — SAT, AP, UCAT, GRE and more — with 20+ years of experience and 10,000+ students coached.",
  foundingDate: "2004",
  areaServed: ["IN", "US", "GB", "AU", "CA", "AE", "SG"],
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
  name: "AP Exam Coaching for Indian Students | Score 4–5 | EduQuest",
  url: "https://eduquest.org.in/ap-coaching/",
  description:
    "Comprehensive AP exam coaching guide covering all major subjects, scoring strategy, exam dates, preparation timeline and expert coaching by EduQuest for Indian students targeting US, UK, Canada and Australia universities.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0], // auto-updates on each build
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "AP Exams" },
    { "@type": "Thing", name: "Advanced Placement" },
    { "@type": "Thing", name: "US University Admissions" },
    { "@type": "Thing", name: "College Board AP" },
    { "@type": "Thing", name: "Study Abroad for Indian Students" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",              item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "AP Exam Coaching",  item: "https://eduquest.org.in/ap-coaching/" },
    ],
  },
};

/* ── 6. ItemList Schema ──────────────────────────────────────────────────────
   Surfaces individual AP subjects as a list rich result in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const apSubjectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AP Subjects Coached by EduQuest",
  description: "List of AP exam subjects offered under EduQuest's AP coaching programme for Indian students.",
  url: "https://eduquest.org.in/ap-coaching/",
  itemListElement: [
    { "@type": "ListItem", position: 1,  name: "AP Calculus AB",                      url: "https://eduquest.org.in/ap-coaching/#calculus-ab" },
    { "@type": "ListItem", position: 2,  name: "AP Calculus BC",                      url: "https://eduquest.org.in/ap-coaching/#calculus-bc" },
    { "@type": "ListItem", position: 3,  name: "AP Physics 1: Algebra-Based",         url: "https://eduquest.org.in/ap-coaching/#physics-1" },
    { "@type": "ListItem", position: 4,  name: "AP Physics C: Mechanics",             url: "https://eduquest.org.in/ap-coaching/#physics-c" },
    { "@type": "ListItem", position: 5,  name: "AP Chemistry",                        url: "https://eduquest.org.in/ap-coaching/#chemistry" },
    { "@type": "ListItem", position: 6,  name: "AP Biology",                          url: "https://eduquest.org.in/ap-coaching/#biology" },
    { "@type": "ListItem", position: 7,  name: "AP Computer Science A",               url: "https://eduquest.org.in/ap-coaching/#csa" },
    { "@type": "ListItem", position: 8,  name: "AP Computer Science Principles",      url: "https://eduquest.org.in/ap-coaching/#csp" },
    { "@type": "ListItem", position: 9,  name: "AP English Language and Composition", url: "https://eduquest.org.in/ap-coaching/#english-lang" },
    { "@type": "ListItem", position: 10, name: "AP English Literature and Composition",url: "https://eduquest.org.in/ap-coaching/#english-lit" },
    { "@type": "ListItem", position: 11, name: "AP World History: Modern",            url: "https://eduquest.org.in/ap-coaching/#world-history" },
    { "@type": "ListItem", position: 12, name: "AP Psychology",                       url: "https://eduquest.org.in/ap-coaching/#psychology" },
    { "@type": "ListItem", position: 13, name: "AP Statistics",                       url: "https://eduquest.org.in/ap-coaching/#statistics" },
    { "@type": "ListItem", position: 14, name: "AP Microeconomics",                   url: "https://eduquest.org.in/ap-coaching/#microeconomics" },
    { "@type": "ListItem", position: 15, name: "AP Macroeconomics",                   url: "https://eduquest.org.in/ap-coaching/#macroeconomics" },
  ],
};