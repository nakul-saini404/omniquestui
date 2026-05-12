/* ─────────────────────────────────────────────────────────────────────────────
   profileBuildingSchema.ts  —  Structured Data for EduQuest Profile Building Page
   Grades 8–12 | Six schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ── 1. FAQ Schema ──────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is profile building for students in grades 8–12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profile building is the strategic process of developing a student's academic, extracurricular, leadership, research, and community service record from grades 8 through 12 to make them a competitive applicant for top universities in India and abroad. A strong profile goes beyond grades — it includes olympiad medals, research projects, internships, sports achievements, community service, competitions and leadership roles that demonstrate a student's passions and impact. EduQuest's Profile Building programme guides students from Class 8 onwards with a personalised roadmap tailored to their target universities and career goals.",
      },
    },
    {
      "@type": "Question",
      name: "Why should profile building start in Class 8 or 9?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top universities — especially in the US, UK, Canada and Singapore — evaluate four years of high school activity, not just Class 11 and 12. Starting in Class 8 or 9 gives students time to explore interests, build depth in 2–3 focus areas, win meaningful competitions, pursue sustained community service, and develop a coherent narrative by the time they apply. Students who begin in Class 11 often have only one year of documented activity, making it hard to demonstrate long-term commitment. EduQuest recommends starting profile building no later than Class 9 for students targeting top-50 global universities.",
      },
    },
    {
      "@type": "Question",
      name: "What activities count as strong profile building for US university admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For US universities (Common App / Coalition App), strong extracurriculars include: student government and leadership positions, STEM olympiads (Math, Physics, Chemistry, Biology, Astronomy), independent or university-mentored research with published or presented findings, nationally or internationally recognised competitions (science fairs, debate, Model UN, robotics), sustained community service with measurable impact, internships at research labs, NGOs or companies, creative pursuits (music, art, writing) with tangible achievements, and entrepreneurial ventures. EduQuest helps students identify activities that align with their intended major and present them effectively on the Common App Activities section.",
      },
    },
    {
      "@type": "Question",
      name: "What activities are valued for UK university admissions (Oxford, Cambridge, LSE, Imperial)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UK universities, especially Oxford and Cambridge, prioritise academic depth over breadth. The most valued activities are: extended reading and self-study beyond the school curriculum, participation in subject-specific olympiads and competitions (UKMT, BPhO, Chemistry Olympiad), research projects or extended essays (EE in IB, EPQ in A-levels), work experience in relevant fields, attending university summer programmes (Oxford Pathways, Cambridge Pre-University), writing for publications, and mentoring or tutoring. EduQuest's UK profile building stream focuses on building a coherent academic story that complements the UCAS Personal Statement.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best olympiads and competitions for Indian students in Classes 8–12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-impact olympiads and competitions for Indian school students include: Indian National Mathematical Olympiad (INMO) and IMO selection, Indian National Physics / Chemistry / Biology / Astronomy Olympiads (INPhO, INChO, INBO, INAO) leading to international teams, Science Olympiad Foundation exams (NSO, IMO, IEO, ICO), KVPY (Kishore Vaigyanik Protsahan Yojana) scholarship exam, Aryabhatta Ganit Challenge, NTSE (National Talent Search Examination), Model United Nations (MUN) conferences, national debate championships, CBSE Science Exhibition, Intel ISEF-affiliated fairs, and Regeneron ISEF for research. EduQuest maps each student's subject strengths to a competition pathway starting in Class 8.",
      },
    },
    {
      "@type": "Question",
      name: "How does research experience help in university admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research experience is one of the most differentiating elements of a student's profile for top universities globally. For US admissions, independent or mentored research demonstrates intellectual initiative and real-world application. For UK, it shows academic depth. Research can take the form of: IB Extended Essay (4,000 words), CBSE project extensions, self-directed research published in school or external journals, collaboration with university professors via email outreach, participation in research programmes like MIT PRIMES, Stanford OHS, Breakthrough Junior Challenge, or Regeneron STS. EduQuest helps students identify a research question, find mentors, structure their project, and position findings in their applications.",
      },
    },
    {
      "@type": "Question",
      name: "What is EduQuest's Profile Building programme and what does it include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's Profile Building programme is a structured, multi-year coaching service for students in Classes 8 through 12. It includes: an initial profile assessment and target university mapping, a personalised activity roadmap by grade, olympiad and competition coaching and registration guidance, research project mentoring and documentation support, leadership and community service planning, summer programme application support (US, UK, Singapore), internship and shadowing opportunity identification, a Common App / UCAS / QS activities narrative development, college essay and personal statement ideation tied to profile themes, and regular profile review sessions with senior counsellors. The programme is customised for each student's interests, target regions and academic strengths.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between profile building for US vs UK university admissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "US admissions (Common App) rewards breadth, leadership, sustained commitment, and a clear personal narrative across 10 listed activities — diversity of engagement matters. UK admissions (UCAS Personal Statement) rewards academic focus: examiners look for deep subject passion, relevant reading, and intellectual curiosity demonstrated through a single 4,000-character essay. For US applications, EduQuest helps students build 2–3 core themes across academics, service and leadership. For UK, EduQuest focuses on sharpening subject-specific achievements and crafting a cohesive academic story. Students applying to both need a dual-strategy approach, which EduQuest manages cohesively.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest help Class 11 and 12 students who are starting profile building late?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students starting in Class 11 or 12 can still build a competitive profile with focused, high-impact activities. EduQuest's late-start strategy prioritises: identifying 1–2 signature activities with visible achievements (competitions, research, leadership), fast-tracking community service with measurable outcomes, applying to summer research or enrichment programmes, preparing for standardised tests (SAT, ACT, AP, IB), and crafting application essays that contextualise limited extracurriculars through intellectual curiosity and personal story. While an early start is always preferable, EduQuest has helped many Class 11 and 12 students gain admissions to top universities by presenting their profile authentically and strategically.",
      },
    },
    {
      "@type": "Question",
      name: "What summer programmes should Indian students apply to for profile building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Highly regarded summer programmes for Indian high school students include: MIT Primes and RSI (Research Science Institute), Stanford Online High School summer, Harvard Secondary School Programme, Yale Young Global Scholars (YYGS), Oxford Pathways and Cambridge Pre-University programmes, NUS High School Singapore programmes, Ashoka University Young Scholars Programme in India, Breakthrough Science Society India, National Science Summer School, and Indian Statistical Institute summer camps. EduQuest guides students through shortlisting programmes by grade and interest, writing application essays, and preparing for selection interviews.",
      },
    },
    {
      "@type": "Question",
      name: "How important is community service for university admissions from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Community service is valued by US universities as a signal of character, empathy, and real-world engagement — but only when it is sustained, self-initiated and has demonstrable impact. Generic volunteering hours are not as effective as specific, long-term projects. EduQuest helps students design or identify service initiatives aligned with their interests — environmental projects, education access programmes, health awareness campaigns — that they can describe with specific outcomes (students taught, funds raised, policy influenced). For UK and Indian university applications, service is a secondary factor but adds dimension to the overall profile.",
      },
    },
    {
      "@type": "Question",
      name: "What standardised tests should students in Classes 8–12 prepare for alongside profile building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's integrated profile building plan includes standardised test preparation at the right grade: Class 8–9 — foundational Maths and English building blocks, ASSET, NTSE and olympiad prep; Class 10 — PSAT (for US-bound students), SAT Subject preparation foundation, IGCSE and ICSE board strategy; Class 11 — SAT / ACT (US), IELTS / TOEFL (UK, Canada, Australia), AP or A-level subject selection; Class 12 — SAT / ACT retakes, IELTS / TOEFL final scores, AP exams, IB predicted grades. EduQuest coordinates test timelines with activity milestones so students are not overwhelmed in Class 12.",
      },
    },
    {
      "@type": "Question",
      name: "Can EduQuest help with profile building for medical and engineering programmes abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For medicine (UK, Ireland, Australia), EduQuest focuses on UCAT / BMAT preparation, hospital shadowing and clinical volunteering, science olympiad achievements, and UCAS personal statement crafting for medical school. For engineering and CS (MIT, Stanford, CMU, IIT), EduQuest focuses on Maths and Physics olympiads, robotics and coding competitions (USACO, ICPC junior, Google Code Jam), research projects in STEM, and strong SAT / ACT scores paired with AP CS, Physics and Calculus. Each medical and engineering profile track has a customised EduQuest roadmap.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest track and document a student's profile over multiple years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest maintains a live Profile Tracker for each student — a structured document updated every term that records academic achievements, competition results, extracurricular roles, service hours, certifications, research milestones, and test scores. This tracker feeds directly into the Common App Activities section, UCAS Personal Statement notes, and scholarship application lists. Students and parents receive quarterly profile review sessions with their assigned counsellor. By Class 12, students have a fully documented, narrative-ready profile.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer profile building for students targeting Indian universities like IITs, BITS and Ashoka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For IIT JEE, the focus is on JEE Main and Advanced preparation, Maths and Science olympiad pathways (PRMO, RMO, INMO, INPhO), and KVPY. For BITS Pilani, strong board scores, BITSAT coaching and science competition medals matter. For liberal arts universities like Ashoka, OP Jindal, and Krea, EduQuest focuses on building a well-rounded profile including essays, leadership, and social initiative, since these universities conduct holistic reviews similar to US admissions. EduQuest tailors the profile strategy based on whether the student is targeting IITs, BITS, liberal arts, or international universities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enrol in EduQuest's Profile Building programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To enrol, contact EduQuest at +91-9958041888 or contact@eduquest.org.in, or visit our centre at DLF Phase IV, Gurgaon. We begin with a complimentary Profile Assessment Session where a senior counsellor reviews the student's current academic record, interests and target universities, and presents a personalised activity roadmap. Online and in-person enrolment is available for students across India and internationally. Batches are kept small to ensure personalised attention.",
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
      name: "Profile Building",
      item: "https://eduquest.org.in/profile-building/",
    },
  ],
};

/* ── 3. Course Schema ──────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Profile Building for Classes 8–12 — EduQuest Gurgaon",
  description:
    "India's most comprehensive profile building programme for students in Classes 8 to 12 targeting top universities in the US, UK, Canada, Australia, Singapore and India. Covers olympiad pathways, research mentoring, leadership development, community service planning, summer programme applications, SAT/ACT/IELTS integration, and complete university application support.",
  url: "https://eduquest.org.in/profile-building/",
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
    url: "https://eduquest.org.in/profile-building/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT100H",
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
  educationalLevel: "MiddleSchool,HighSchool",
  teaches: [
    "Profile Assessment and Target University Mapping for Classes 8–12",
    "Olympiad Pathways — INMO, INPhO, INChO, INBO, INAO, NTSE, KVPY",
    "Research Project Mentoring and Documentation for High School Students",
    "Leadership Development and Student Government Coaching",
    "Community Service Planning with Measurable Impact",
    "Summer Programme Applications — MIT, Stanford, Harvard, Oxford, Cambridge, Yale, NUS",
    "Internship and Work Experience Identification for School Students",
    "SAT, ACT, AP, IELTS and TOEFL Integration into Profile Roadmap",
    "Common App Activities Section Strategy and Narrative Development",
    "UCAS Personal Statement Ideation for UK University Applications",
    "College Essay and Application Essay Brainstorming tied to Profile Themes",
    "Model United Nations (MUN), Debate and Public Speaking Coaching",
    "Robotics, Coding and STEM Competition Preparation (USACO, ICPC Junior)",
    "IB Extended Essay and CBSE Research Project Guidance",
    "Quarterly Profile Review and Live Profile Tracker Maintenance",
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
    "EduQuest is India's leading coaching institute for profile building, IELTS, SAT, ACT, AP, GMAT, GRE, UCAT and international admissions — with 20+ years of experience and 10,000+ students coached.",
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
  name: "Profile Building for Classes 8–12 | US, UK & India University Admissions | EduQuest",
  url: "https://eduquest.org.in/profile-building/",
  description:
    "EduQuest's Profile Building programme for Class 8, 9, 10, 11 and 12 students — personalised activity roadmaps, olympiad pathways, research mentoring, summer programme applications and university application strategy for US, UK, Canada, Australia and Indian top universities.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "Profile Building for School Students" },
    { "@type": "Thing", name: "Extracurricular Activities for University Admissions" },
    { "@type": "Thing", name: "US University Admissions from India" },
    { "@type": "Thing", name: "UK University Admissions from India" },
    { "@type": "Thing", name: "High School Research Projects India" },
    { "@type": "Thing", name: "Olympiad Preparation India" },
    { "@type": "Thing", name: "Common App Activities Section" },
    { "@type": "Thing", name: "UCAS Personal Statement" },
    { "@type": "Thing", name: "Study Abroad for Indian Students" },
    { "@type": "Thing", name: "Summer Programmes for High School Students India" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",             item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "Profile Building", item: "https://eduquest.org.in/profile-building/" },
    ],
  },
};

/* ── 6. ItemList Schema — Profile Building Pillars ─────────────────────────── */
export const profileBuildingPillarListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Profile Building Programme Pillars by EduQuest — Classes 8 to 12",
  description:
    "All pillars and activity tracks covered in EduQuest's Profile Building programme for students in Class 8, 9, 10, 11 and 12 targeting top universities in the US, UK, Canada, Australia, Singapore and India.",
  url: "https://eduquest.org.in/profile-building/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Profile Assessment and Personalised University Roadmap",
      url: "https://eduquest.org.in/profile-building/#assessment",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Olympiad Pathways — INMO, INPhO, INChO, INBO, INAO, NTSE, KVPY",
      url: "https://eduquest.org.in/profile-building/#olympiads",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Research Project Mentoring — IB EE, CBSE Projects, Independent Research",
      url: "https://eduquest.org.in/profile-building/#research",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Leadership Development — Student Government, Clubs, Founding Initiatives",
      url: "https://eduquest.org.in/profile-building/#leadership",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Community Service Planning — Sustained, Impact-Driven Service Projects",
      url: "https://eduquest.org.in/profile-building/#service",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Summer Programme Applications — MIT, Harvard, Stanford, Oxford, Cambridge, Yale, NUS",
      url: "https://eduquest.org.in/profile-building/#summer-programmes",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Internships and Work Experience for School Students",
      url: "https://eduquest.org.in/profile-building/#internships",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Competitions — MUN, Debate, Robotics, USACO, Science Fairs, Regeneron ISEF",
      url: "https://eduquest.org.in/profile-building/#competitions",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Standardised Test Integration — SAT, ACT, AP, IELTS, TOEFL by Grade",
      url: "https://eduquest.org.in/profile-building/#standardised-tests",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "Common App Activities Section Narrative and Essay Strategy",
      url: "https://eduquest.org.in/profile-building/#common-app",
    },
    {
      "@type": "ListItem",
      position: 11,
      name: "UCAS Personal Statement Strategy for UK University Admissions",
      url: "https://eduquest.org.in/profile-building/#ucas",
    },
    {
      "@type": "ListItem",
      position: 12,
      name: "Quarterly Profile Review and Live Profile Tracker",
      url: "https://eduquest.org.in/profile-building/#profile-tracker",
    },
    {
      "@type": "ListItem",
      position: 13,
      name: "Profile Building for IIT JEE, BITS Pilani and Indian Liberal Arts Universities",
      url: "https://eduquest.org.in/profile-building/#india-universities",
    },
    {
      "@type": "ListItem",
      position: 14,
      name: "Medical School Profile Building — UCAT, BMAT, Shadowing, UCAS Medicine",
      url: "https://eduquest.org.in/profile-building/#medical",
    },
    {
      "@type": "ListItem",
      position: 15,
      name: "Class-Specific Roadmaps — Grade 8, Grade 9, Grade 10, Grade 11, Grade 12",
      url: "https://eduquest.org.in/profile-building/#grade-roadmaps",
    },
  ],
};