/* ─────────────────────────────────────────────────────────────────────────────
   dasaSchema.ts  —  Structured Data for EduQuest Coaching Page
   Covers: IELTS · TOEFL · PTE · Duolingo
   Schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ══════════════════════════════════════════════════════════════════
   1. FAQ SCHEMA
══════════════════════════════════════════════════════════════════ */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [

    /* ── IELTS ── */
    {
      "@type": "Question",
      name: "What is the IELTS exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IELTS (International English Language Testing System) is the world's most popular English proficiency test, accepted by over 11,000 organisations in 140+ countries including universities, employers, immigration authorities and professional bodies. It is jointly managed by the British Council, IDP: IELTS Australia and Cambridge Assessment English. IELTS tests four skills — Listening, Reading, Writing and Speaking — each scored on a band scale of 0–9.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between IELTS Academic and IELTS General Training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IELTS Academic is required for undergraduate and postgraduate university admissions and for professional registration in fields like medicine, nursing and law. IELTS General Training is used for secondary education, work experience, migration to Australia, Canada, New Zealand and the UK, and some professional registration. Both versions share the same Listening and Speaking tests but have different Reading and Writing components. EduQuest helps students choose the correct version based on their specific goal.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good IELTS band score for top universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oxford and Cambridge typically require an overall band of 7.5–8.0 with no component below 7.0. Most UK and Australian universities require 6.5–7.0 overall. Canadian universities (University of Toronto, UBC) typically require 6.5 overall. US universities accepting IELTS generally require 7.0+. For immigration (Canada PR, Australia PR), a band of 6.0–7.0 is commonly required. EduQuest targets a minimum of 7.5 for all academic students.",
      },
    },
    {
      "@type": "Question",
      name: "How is the IELTS exam scored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each of the four IELTS sections — Listening, Reading, Writing and Speaking — is scored on a band from 0 to 9. The overall band score is the average of the four sections, rounded to the nearest 0.5. Writing and Speaking are assessed by certified examiners. Listening and Reading are marked against an answer key. EduQuest's coaching targets section-specific improvements to maximise your overall band — particularly in Writing Task 2 and Speaking, where most students lose points.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for IELTS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 6–12 weeks of structured IELTS preparation for most students. Those starting at band 5.0–5.5 typically need 10–12 weeks to reach 7.0+. Students at 6.0–6.5 can typically achieve 7.5 within 6–8 weeks with focused coaching. EduQuest's diagnostic test on Day 1 identifies your current band and maps a personalised preparation timeline to reach your target band before your application deadlines.",
      },
    },
    {
      "@type": "Question",
      name: "Is IELTS accepted by Canadian and Australian immigration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IELTS General Training is the primary English test accepted for Canada PR (Express Entry, Provincial Nominee Programme), Canada study permit, and Canada work permit applications. For Australia, the Department of Home Affairs accepts IELTS for all visa categories including student visa (subclass 500), skilled migration (subclass 189, 190, 491), and partner visas. EduQuest has extensive experience preparing students for both Canadian and Australian immigration IELTS targets.",
      },
    },
    {
      "@type": "Question",
      name: "What does EduQuest's IELTS coaching programme cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's IELTS programme covers all four skills: Listening (section-type strategies, note-completion, map labelling, multiple choice), Reading (skimming, scanning, True/False/Not Given, Matching Headings), Writing (Task 1 graphs and letters; Task 2 argumentative and discursive essays with band-descriptor feedback), and Speaking (Part 1 fluency, Part 2 cue card technique, Part 3 discussion depth). Classes include full-length timed mocks, personalised examiner-style feedback and unlimited doubt sessions.",
      },
    },
    {
      "@type": "Question",
      name: "How many mock tests are included in EduQuest's IELTS programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's IELTS programme includes a minimum of 8 full-length timed mock tests under exam conditions, plus 20+ sectional mocks for targeted practice in Listening, Reading, Writing and Speaking. Every mock is followed by a detailed score breakdown, error pattern analysis, and a personalised feedback session. Students targeting 7.5+ receive additional mock tests and examiner-level writing feedback.",
      },
    },

    /* ── TOEFL ── */
    {
      "@type": "Question",
      name: "What is the TOEFL iBT exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The TOEFL iBT (Test of English as a Foreign Language — Internet-Based Test) is a standardised English proficiency test accepted by more than 11,500 universities and institutions in over 160 countries. It is the preferred test for universities in the USA and Canada and is administered by ETS (Educational Testing Service). The test measures Reading, Listening, Speaking and Writing in an integrated academic context.",
      },
    },
    {
      "@type": "Question",
      name: "What is the format and duration of the TOEFL iBT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The TOEFL iBT takes approximately 2 hours. Reading: 35 minutes (20 questions). Listening: 36 minutes (28 questions). Speaking: 16 minutes (4 tasks). Writing: 29 minutes (2 tasks — Integrated and Academic Discussion). The maximum score is 120. EduQuest's TOEFL coaching covers all four sections with section-specific strategies and full-length timed practice tests.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good TOEFL score for top universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most top universities in the US and UK require a TOEFL iBT score of 90–100. Highly competitive Ivy League programmes typically expect 105 or above. MIT, Stanford and Harvard generally require 100+. For Canadian universities, a score of 88–100 is typically required. EduQuest's TOEFL coaching is tailored to help students consistently achieve 100+ with targeted practice across all four sections.",
      },
    },
    {
      "@type": "Question",
      name: "How is TOEFL different from IELTS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TOEFL is primarily accepted by North American institutions and uses an American English standard, while IELTS is more widely accepted in the UK, Australia and Canada and uses British English. TOEFL is entirely computer-based; IELTS offers both paper-based and computer-based formats. The TOEFL Speaking section is recorded and rated by AI and human raters, unlike IELTS which uses a face-to-face examiner. EduQuest helps you decide which test best matches your target institutions and personal strengths.",
      },
    },
    {
      "@type": "Question",
      name: "What does EduQuest's TOEFL coaching programme cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's TOEFL programme covers: Reading (passage-based inference, vocabulary-in-context, prose summary), Listening (lecture and conversation strategies, purpose questions), Speaking (Independent Task frameworks, Integrated Task note-taking and synthesis), and Writing (Integrated Task reading-lecture synthesis, Academic Discussion Task strategies). Full-length scored mocks, spoken response recordings with feedback, and essay evaluations are included.",
      },
    },

    /* ── PTE ── */
    {
      "@type": "Question",
      name: "What is PTE Academic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PTE Academic (Pearson Test of English Academic) is a fully computer-based, AI-scored English proficiency test accepted by thousands of universities worldwide and by the Australian, UK and New Zealand governments for visa applications. It is known for delivering results within 48 hours, making it popular among applicants with tight deadlines. The test is scored objectively by AI, eliminating human examiner variation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the format of the PTE Academic test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PTE Academic is a single computer-based session of approximately 2 hours, divided into three parts: Speaking and Writing (54–67 minutes), Reading (29–30 minutes), and Listening (30–43 minutes). The test uses integrated tasks that assess multiple skills simultaneously. Scores are reported on a scale of 10–90, with sub-scores for each communicative skill. EduQuest's PTE coaching covers every task type with AI-aligned response strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What PTE score do I need for Australian immigration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Australian Skilled Migration (subclasses 189, 190 and 491), you typically need a minimum PTE score of 65 in each communicative skill — Listening, Reading, Speaking and Writing. Scores of 79+ in each component can earn you additional immigration points under Australia's points-based system. For Australian student visas, most universities require an overall score of 58–65. EduQuest prepares students specifically for Australian immigration PTE targets.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly are PTE results available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PTE Academic results are typically available within 48 hours of completing the test — and often sooner. This is significantly faster than IELTS (3–5 days for computer-based, up to 13 days for paper-based). You can then share your PTE score with unlimited institutions at no additional cost. EduQuest advises students who have urgent deadlines to choose PTE for this reason.",
      },
    },
    {
      "@type": "Question",
      name: "What does EduQuest's PTE coaching programme cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's PTE programme covers all task types: Speaking (Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, Answer Short Question), Writing (Summarise Written Text, Write Essay), Reading (Multiple-choice, Re-order Paragraphs, Fill in the Blanks), and Listening (Summarise Spoken Text, Multiple-choice, Highlight Correct Summary, Fill in the Blanks, Write from Dictation). AI-scoring strategies, fluency drills and full-length timed mock tests are included.",
      },
    },

    /* ── Duolingo ── */
    {
      "@type": "Question",
      name: "What is the Duolingo English Test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Duolingo English Test (DET) is an affordable, AI-proctored online English proficiency test that can be taken from home at any time. It is accepted by over 5,000 programmes at more than 3,500 institutions worldwide, including many top universities in the US, UK, Canada and Australia. Scores are reported on a scale of 10–160 and results are typically available within 2 days.",
      },
    },
    {
      "@type": "Question",
      name: "What is the format of the Duolingo English Test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DET is approximately 1 hour long and consists of an adaptive section (45 minutes) testing Reading, Writing, Listening and Speaking through integrated adaptive tasks, followed by a video interview section where you record short responses to open-ended prompts. The test is fully online, proctored by AI with human review. EduQuest's Duolingo coaching covers the adaptive scoring engine, task types, and video interview techniques.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good Duolingo English Test score for university admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duolingo scores range from 10 to 160. Most universities require a minimum score of 105–115 for admission, while highly competitive programmes at top universities typically require 120 or above. Georgetown, Northeastern, and many Canadian universities require 110–120. EduQuest's Duolingo coaching targets 120+ through focused vocabulary, adaptive task strategies and video interview preparation.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Duolingo English Test compare to IELTS, TOEFL and PTE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Duolingo English Test is the most affordable and convenient option — it can be taken from home, costs significantly less than IELTS, TOEFL or PTE, and delivers results in 2 days. Score reports are shared with unlimited institutions at no extra cost. However, DET is not accepted for immigration purposes; for UK, Canadian or Australian visas, IELTS, TOEFL or PTE is required. EduQuest counsellors help you select the right test based on your target institutions and goals.",
      },
    },
    {
      "@type": "Question",
      name: "What does EduQuest's Duolingo coaching programme cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's Duolingo programme covers all adaptive task types: Read and Select, Listen and Type, Read Aloud, Write About the Photo, Speak About the Photo, Read then Write, Listen then Speak, and the Video Interview. Coaching focuses on the adaptive scoring engine, vocabulary range, fluency development, and strategic time management. Full-length practice tests and personalised feedback are included.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════
   2. BREADCRUMB SCHEMA
══════════════════════════════════════════════════════════════════ */
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
      name: "English Test Coaching",
      item: "https://eduquest.org.in/english-test-coaching/",
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════
   3. COURSE SCHEMA  (one per test)
══════════════════════════════════════════════════════════════════ */

const sharedCourseFields = {
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  inLanguage: "en-IN",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  offers: {
    "@type": "Offer",
    category: "Online & Offline Coaching",
    availability: "https://schema.org/InStock",
    url: "https://eduquest.org.in/english-test-coaching/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT80H",
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
    reviewCount: "640",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "HighSchool,Undergraduate,Graduate",
};

export const ieltsCoursSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IELTS Coaching — EduQuest Gurgaon",
  description:
    "India's most comprehensive IELTS coaching in Gurgaon for students targeting band 7.0–8.5 for UK, Australia, Canada and US university admissions, immigration and professional registration. Covers all four IELTS skills — Listening, Reading, Writing and Speaking — with full-length timed mocks, personalised band feedback and complete application support.",
  url: "https://eduquest.org.in/ielts-coaching/",
  ...sharedCourseFields,
  teaches: [
    "IELTS Listening — Section Strategies, Note Completion and Multiple Choice",
    "IELTS Reading Academic — Skimming, Scanning, True/False/Not Given, Matching Headings",
    "IELTS Reading General Training — Letter and Notice Comprehension",
    "IELTS Writing Task 1 Academic — Graphs, Charts, Diagrams and Process Descriptions",
    "IELTS Writing Task 1 General — Formal, Semi-Formal and Informal Letters",
    "IELTS Writing Task 2 — Argumentative and Discursive Essay Techniques",
    "IELTS Speaking Part 1 — Fluency and Personal Questions",
    "IELTS Speaking Part 2 — Cue Card Technique and Long Turn",
    "IELTS Speaking Part 3 — Abstract Discussion and Opinion Development",
    "IELTS Full-Length Mock Tests and Band Score Analysis",
    "IELTS on Computer vs Paper Strategy",
    "IELTS Vocabulary, Grammar and Pronunciation for Band 7.5+",
  ],
};

export const toeflCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "TOEFL iBT Coaching — EduQuest Gurgaon",
  description:
    "Comprehensive TOEFL iBT coaching in Gurgaon for students targeting 100+ for US, Canadian and UK university admissions. Covers all four TOEFL sections — Reading, Listening, Speaking and Writing — with full-length scored practice tests, spoken response feedback and Integrated Writing evaluations.",
  url: "https://eduquest.org.in/toefl-coaching/",
  ...sharedCourseFields,
  teaches: [
    "TOEFL Reading — Passage Inference, Vocabulary-in-Context and Prose Summary",
    "TOEFL Listening — Lecture and Conversation Strategies, Purpose Questions",
    "TOEFL Speaking Task 1 — Independent Task Framework and Delivery",
    "TOEFL Speaking Tasks 2–4 — Integrated Note-Taking and Synthesis",
    "TOEFL Writing — Integrated Task Reading-Lecture Synthesis",
    "TOEFL Writing — Academic Discussion Task Strategies",
    "TOEFL Full-Length Scored Mock Tests",
    "TOEFL Score Improvement from 80 to 100+",
  ],
};

export const pteCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "PTE Academic Coaching — EduQuest Gurgaon",
  description:
    "Expert PTE Academic coaching in Gurgaon for students targeting scores of 65–85 for Australian immigration, UK visas and university admissions worldwide. Covers all PTE task types with AI-scoring strategies, fluency drills and full-length timed mock tests with feedback within 48 hours.",
  url: "https://eduquest.org.in/pte-coaching/",
  ...sharedCourseFields,
  teaches: [
    "PTE Speaking — Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture",
    "PTE Writing — Summarise Written Text and Write Essay",
    "PTE Reading — Re-order Paragraphs, Fill in the Blanks, Multiple Choice",
    "PTE Listening — Summarise Spoken Text, Write from Dictation, Highlight Correct Summary",
    "PTE AI Scoring Engine Strategies",
    "PTE Full-Length Mock Tests with Score Reports",
    "PTE for Australian Immigration — Skilled Migration Score Targets",
  ],
};

export const duolingoCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Duolingo English Test Coaching — EduQuest Gurgaon",
  description:
    "Specialised Duolingo English Test (DET) coaching in Gurgaon and online for students targeting scores of 120+ for US, Canadian and UK university admissions. Covers all adaptive task types, video interview preparation, vocabulary development and full-length practice tests.",
  url: "https://eduquest.org.in/duolingo-coaching/",
  ...sharedCourseFields,
  teaches: [
    "Duolingo Adaptive Task Types — Read and Select, Listen and Type, Read Aloud",
    "Duolingo Write About the Photo and Speak About the Photo",
    "Duolingo Read then Write and Listen then Speak",
    "Duolingo Video Interview Technique and Response Frameworks",
    "Duolingo Vocabulary Range for Score 120+",
    "Duolingo Adaptive Scoring Engine Strategy",
    "Duolingo Full-Length Practice Tests with Personalised Feedback",
  ],
};

/* ══════════════════════════════════════════════════════════════════
   4. ORGANIZATION SCHEMA
══════════════════════════════════════════════════════════════════ */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is India's leading coaching institute for IELTS, TOEFL, PTE, Duolingo, SAT, ACT, AP, GMAT and GRE — with 20+ years of experience and 10,000+ students coached for university admissions and immigration worldwide.",
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
    reviewCount: "640",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ══════════════════════════════════════════════════════════════════
   5. WEBPAGE SCHEMA
══════════════════════════════════════════════════════════════════ */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best IELTS, TOEFL, PTE & Duolingo Coaching in Gurgaon | EduQuest",
  url: "https://eduquest.org.in/english-test-coaching/",
  description:
    "India's most comprehensive English test coaching in Gurgaon — personalised score plans for IELTS, TOEFL iBT, PTE Academic and Duolingo English Test. Certified trainers, full-length mocks, Speaking and Writing feedback for UK, Australia, Canada and US admissions and immigration.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "IELTS Exam" },
    { "@type": "Thing", name: "IELTS Academic" },
    { "@type": "Thing", name: "IELTS General Training" },
    { "@type": "Thing", name: "TOEFL iBT" },
    { "@type": "Thing", name: "PTE Academic" },
    { "@type": "Thing", name: "Duolingo English Test" },
    { "@type": "Thing", name: "English Proficiency Test India" },
    { "@type": "Thing", name: "Study Abroad for Indian Students" },
    { "@type": "Thing", name: "Canada Immigration English Test" },
    { "@type": "Thing", name: "Australia Immigration English Test" },
    { "@type": "Thing", name: "UK University Admissions" },
    { "@type": "Thing", name: "US University Admissions" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                   item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "English Test Coaching",  item: "https://eduquest.org.in/english-test-coaching/" },
    ],
  },
};

/* ══════════════════════════════════════════════════════════════════
   6. ITEMLIST SCHEMA — All four test sections
══════════════════════════════════════════════════════════════════ */
export const testSectionListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "English Proficiency Tests Coached by EduQuest",
  description:
    "All English proficiency test programmes and sub-topics covered in EduQuest's coaching in Gurgaon, India — IELTS Academic, IELTS General Training, TOEFL iBT, PTE Academic and Duolingo English Test.",
  url: "https://eduquest.org.in/english-test-coaching/",
  itemListElement: [
    /* IELTS */
    {
      "@type": "ListItem",
      position: 1,
      name: "IELTS Listening — Section Strategies, Note Completion, Map Labelling, Multiple Choice",
      url: "https://eduquest.org.in/ielts-coaching/#listening",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IELTS Reading Academic — Skimming, Scanning, True/False/Not Given, Matching Headings",
      url: "https://eduquest.org.in/ielts-coaching/#reading-academic",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IELTS Reading General Training — Notice, Advertisement and Passage Comprehension",
      url: "https://eduquest.org.in/ielts-coaching/#reading-general",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "IELTS Writing Task 1 Academic — Graphs, Bar Charts, Pie Charts, Process Diagrams",
      url: "https://eduquest.org.in/ielts-coaching/#writing-task1-academic",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "IELTS Writing Task 1 General — Formal, Semi-Formal and Informal Letter Writing",
      url: "https://eduquest.org.in/ielts-coaching/#writing-task1-general",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "IELTS Writing Task 2 — Argumentative, Discussion and Opinion Essays",
      url: "https://eduquest.org.in/ielts-coaching/#writing-task2",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "IELTS Speaking Parts 1, 2 and 3 — Fluency, Cue Card and Discussion",
      url: "https://eduquest.org.in/ielts-coaching/#speaking",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "IELTS Full-Length Mock Tests and Band Score Analysis",
      url: "https://eduquest.org.in/ielts-coaching/#mock-tests",
    },
    /* TOEFL */
    {
      "@type": "ListItem",
      position: 9,
      name: "TOEFL iBT Reading — Inference, Vocabulary-in-Context, Prose Summary",
      url: "https://eduquest.org.in/toefl-coaching/#reading",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "TOEFL iBT Listening — Lecture and Conversation Strategies, Purpose Questions",
      url: "https://eduquest.org.in/toefl-coaching/#listening",
    },
    {
      "@type": "ListItem",
      position: 11,
      name: "TOEFL iBT Speaking — Independent and Integrated Task Frameworks",
      url: "https://eduquest.org.in/toefl-coaching/#speaking",
    },
    {
      "@type": "ListItem",
      position: 12,
      name: "TOEFL iBT Writing — Integrated and Academic Discussion Tasks",
      url: "https://eduquest.org.in/toefl-coaching/#writing",
    },
    /* PTE */
    {
      "@type": "ListItem",
      position: 13,
      name: "PTE Academic Speaking — Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture",
      url: "https://eduquest.org.in/pte-coaching/#speaking",
    },
    {
      "@type": "ListItem",
      position: 14,
      name: "PTE Academic Writing — Summarise Written Text and Write Essay",
      url: "https://eduquest.org.in/pte-coaching/#writing",
    },
    {
      "@type": "ListItem",
      position: 15,
      name: "PTE Academic Reading — Re-order Paragraphs, Fill in the Blanks, Multiple Choice",
      url: "https://eduquest.org.in/pte-coaching/#reading",
    },
    {
      "@type": "ListItem",
      position: 16,
      name: "PTE Academic Listening — Write from Dictation, Summarise Spoken Text, Highlight Correct Summary",
      url: "https://eduquest.org.in/pte-coaching/#listening",
    },
    /* Duolingo */
    {
      "@type": "ListItem",
      position: 17,
      name: "Duolingo English Test — Adaptive Task Types: Read and Select, Listen and Type, Read Aloud",
      url: "https://eduquest.org.in/duolingo-coaching/#adaptive-tasks",
    },
    {
      "@type": "ListItem",
      position: 18,
      name: "Duolingo English Test — Write About the Photo and Speak About the Photo",
      url: "https://eduquest.org.in/duolingo-coaching/#photo-tasks",
    },
    {
      "@type": "ListItem",
      position: 19,
      name: "Duolingo English Test — Video Interview Preparation and Response Frameworks",
      url: "https://eduquest.org.in/duolingo-coaching/#video-interview",
    },
    {
      "@type": "ListItem",
      position: 20,
      name: "Duolingo English Test — Full-Length Practice Tests and Score 120+ Strategy",
      url: "https://eduquest.org.in/duolingo-coaching/#practice-tests",
    },
  ],
};