/* ─────────────────────────────────────────────────────────────────────────────
   ieltsSchema.ts  —  Structured Data for EduQuest IELTS Coaching Page
   All six schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ── 1. FAQ Schema ──────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the IELTS exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IELTS (International English Language Testing System) is the world's most popular English proficiency test, accepted by over 11,000 organisations in 140+ countries including universities, employers, immigration authorities and professional bodies. It is jointly managed by the British Council, IDP: IELTS Australia and Cambridge Assessment English. IELTS tests four skills: Listening, Reading, Writing and Speaking, each scored on a band scale of 0–9.",
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
        text: "Oxford and Cambridge typically require an overall band of 7.5–8.0 with no component below 7.0. Most UK and Australian universities require 6.5–7.0 overall. Canadian universities (University of Toronto, UBC) typically require 6.5 overall. US universities accepting IELTS generally require 7.0+. For immigration purposes (Canada PR, Australia PR), a band of 6.0–7.0 is commonly required. EduQuest targets a minimum of 7.5 for all academic students.",
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
      name: "What is the IELTS exam format and duration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IELTS exam takes approximately 2 hours and 45 minutes. Listening: 30 minutes (40 questions across 4 sections). Reading: 60 minutes (40 questions — 3 passages for Academic; 3 sections for General). Writing: 60 minutes (Task 1: 150 words minimum; Task 2: 250 words minimum). Speaking: 11–14 minutes (3 parts — Introduction, Long Turn and Discussion), usually conducted on the same day or within 7 days. IELTS on Computer follows the same format with computer-based Listening, Reading and Writing.",
      },
    },
    {
      "@type": "Question",
      name: "What is IELTS on Computer vs IELTS on Paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both IELTS on Computer and IELTS on Paper test the same skills and use identical scoring criteria. IELTS on Computer offers more flexible test dates, results in 3–5 days (vs 13 days for paper), and allows typing for Writing sections which many candidates find faster. Speaking is still conducted face-to-face with an examiner for both formats. EduQuest prepares students for both formats and advises on which suits their typing speed and comfort level.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for IELTS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 6–12 weeks of structured IELTS preparation for most students. Those starting with a band of 5.0–5.5 typically need 10–12 weeks to reach 7.0+. Students at 6.0–6.5 can typically achieve 7.5 within 6–8 weeks with focused coaching. EduQuest's diagnostic test on Day 1 identifies your current band and maps a personalised preparation timeline to reach your target band before your application deadlines.",
      },
    },
    {
      "@type": "Question",
      name: "When are IELTS exam dates available in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IELTS is conducted multiple times every month across India — typically 3–4 times per month for paper-based tests and daily for computer-based tests at authorised centres. Test centres are available in Delhi, Gurgaon, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Chandigarh and other major cities. EduQuest advises students on selecting a test date that aligns with their university application deadlines and preparation timeline.",
      },
    },
    {
      "@type": "Question",
      name: "What is the IELTS exam fee in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IELTS registration fee in India is approximately ₹17,000–₹17,500 for both Academic and General Training versions (subject to revision by the British Council and IDP). The fee covers the full test including Speaking. Score reports are sent to up to five institutions free of charge; additional reports carry a separate fee. EduQuest guides students through the registration process and helps them plan their test date strategically.",
      },
    },
    {
      "@type": "Question",
      name: "Is IELTS accepted by Canadian immigration (PR and study visa)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IELTS General Training is the primary English test accepted for Canada PR (Express Entry, Provincial Nominee Programme), Canada study permit, and Canada work permit applications. Immigration, Refugees and Citizenship Canada (IRCC) accepts IELTS scores under Designated Language Testing. Minimum band requirements vary by programme — Express Entry typically requires CLB 7 or above. EduQuest has extensive experience preparing students specifically for Canadian immigration IELTS targets.",
      },
    },
    {
      "@type": "Question",
      name: "Is IELTS accepted by Australian immigration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Australian Department of Home Affairs accepts IELTS for all visa categories including student visa (subclass 500), skilled migration (subclass 189, 190, 491), and partner visas. Most Australian university study visa applications require an overall band of 6.0–6.5. Skilled migration streams typically require 6.0–7.0 per component. EduQuest's IELTS programme has helped hundreds of students meet Australian visa and university band requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What does EduQuest's IELTS coaching programme cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's IELTS programme covers all four skills in depth: Listening (section-type strategies, note-completion, map labelling, multiple choice), Reading (Academic and General — skimming, scanning, True/False/Not Given, Matching Headings), Writing (Task 1 — graphs, charts, letters; Task 2 — argumentative and discursive essays with band-descriptor feedback), and Speaking (Part 1 fluency, Part 2 cue card technique, Part 3 discussion depth). Classes include full-length timed mocks, personalised examiner-style feedback and unlimited doubt sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online IELTS coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers online, offline and hybrid IELTS coaching. Online students receive live interactive classes with certified IELTS trainers, recorded session replays, complete study materials, full-length proctored mock tests, individual Writing and Speaking feedback reports, and unlimited doubt-clearing — identical to the in-centre experience. Students from Delhi, Gurgaon, Mumbai, Bangalore, and internationally enrol every batch.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest improve IELTS Writing scores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IELTS Writing is assessed on four criteria: Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. EduQuest's Writing coaching includes: band-descriptor-aligned essay templates, vocabulary banks for Task 2 topics, personalised written feedback on every essay submitted, paraphrasing and hedging language drills, and a structured Task 1 (Academic graph / General letter) methodology. Students submit 2–3 writing tasks per week with turnaround feedback within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest improve IELTS Speaking scores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's Speaking coaching includes: Part 1 topic banks and fluency drills, Part 2 cue card framework (PREP method — Point, Reason, Example, Point), Part 3 discussion expansion techniques, pronunciation and intonation coaching, and recorded mock Speaking sessions with examiner-style band feedback. Students also practice with native-level speaking partners to build spontaneous fluency before exam day.",
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
      name: "IELTS Coaching",
      item: "https://eduquest.org.in/ielts-coaching/",
    },
  ],
};

/* ── 3. Course Schema ──────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IELTS Coaching — EduQuest Gurgaon",
  description:
    "India's most comprehensive IELTS coaching in Gurgaon for students targeting band 7.0–8.5 for UK, Australia, Canada and US university admissions, immigration and professional registration. Covers all four IELTS skills — Listening, Reading, Writing and Speaking — with full-length timed mocks, personalised band feedback and complete application support.",
  url: "https://eduquest.org.in/ielts-coaching/",
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
    url: "https://eduquest.org.in/ielts-coaching/",
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

/* ── 4. Organization Schema ────────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is India's leading coaching institute for IELTS, SAT, ACT, AP, GMAT, GRE, UCAT and international admissions — with 20+ years of experience and 10,000+ students coached.",
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

/* ── 5. WebPage Schema ─────────────────────────────────────────────────────── */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best IELTS Coaching in Gurgaon | Band 7.5+ | EduQuest",
  url: "https://eduquest.org.in/ielts-coaching/",
  description:
    "India's most comprehensive IELTS coaching in Gurgaon — personalised band plans, certified trainers, 8+ full-length mocks and Speaking/Writing feedback for UK, Australia, Canada and US admissions and immigration.",
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
    { "@type": "Thing", name: "English Proficiency Test India" },
    { "@type": "Thing", name: "Study Abroad for Indian Students" },
    { "@type": "Thing", name: "Canada Immigration IELTS" },
    { "@type": "Thing", name: "Australia Immigration IELTS" },
    { "@type": "Thing", name: "UK University Admissions" },
    { "@type": "Thing", name: "IELTS Band 7.5" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",           item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "IELTS Coaching", item: "https://eduquest.org.in/ielts-coaching/" },
    ],
  },
};

/* ── 6. ItemList Schema — IELTS Sections ───────────────────────────────────── */
export const ieltsSectionListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IELTS Exam Sections Coached by EduQuest",
  description:
    "All IELTS exam sections and sub-topics covered in EduQuest's IELTS coaching programme in Gurgaon, India — for Academic and General Training candidates.",
  url: "https://eduquest.org.in/ielts-coaching/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "IELTS Listening — 4 Section Types, Note Completion, Map Labelling, Multiple Choice",
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
      name: "IELTS Speaking Part 1 — Introduction and Personal Questions",
      url: "https://eduquest.org.in/ielts-coaching/#speaking-part1",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "IELTS Speaking Part 2 — Cue Card Long Turn Technique",
      url: "https://eduquest.org.in/ielts-coaching/#speaking-part2",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "IELTS Speaking Part 3 — Abstract Discussion and Opinion Expansion",
      url: "https://eduquest.org.in/ielts-coaching/#speaking-part3",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "IELTS Full-Length Mock Tests and Band Score Analysis",
      url: "https://eduquest.org.in/ielts-coaching/#mock-tests",
    },
    {
      "@type": "ListItem",
      position: 11,
      name: "IELTS on Computer Strategy and Practice",
      url: "https://eduquest.org.in/ielts-coaching/#computer-based",
    },
    {
      "@type": "ListItem",
      position: 12,
      name: "IELTS Vocabulary, Grammar and Pronunciation for Band 7.5+",
      url: "https://eduquest.org.in/ielts-coaching/#language-skills",
    },
  ],
};