"use client";

import type { Country, Stream } from "@/types/edupath";

// ─── University interface ─────────────────────────────────────────────────────

export interface University {
  name: string;
  tier: "Reach" | "Target" | "Safety";
  req: number;
  sat: number | null;
  satRequired: "Yes" | "Recommended" | "Optional" | "No";
  deadline: string;
  cost: string;
  country?: Country;
  admissionMode: string;
  scholarshipStrength: string;
}

// ─── Flags ────────────────────────────────────────────────────────────────────

export const COUNTRY_FLAGS: Record<Country, string> = {
  USA: "🇺🇸", UK: "🇬🇧", Canada: "🇨🇦", Australia: "🇦🇺",
  Germany: "🇩🇪", Netherlands: "🇳🇱", Singapore: "🇸🇬", Japan: "🇯🇵", India: "🇮🇳",
};

export const NO_VISA_COUNTRIES: Country[] = ["India"];
export const INDIA_SKIP_EXAMS = ["ucat", "sat", "ielts", "toefl", "tmua", "esat", "lnat", "gre", "mcat", "bmat"];

// ─── PrepPhase — replaces flat prepTips ──────────────────────────────────────

export interface PrepWeek {
  label: string;
  focus: string;
  tasks: string[];
  eduquestTip?: string;
}

export interface SubjectFocus {
  subject: string;
  weight: string;
  topics: string[];
  streamNote?: string;
}

export interface PrepPlan {
  totalMonths: number;
  targetScore: string;
  phases: PrepWeek[];
  subjectFocus: SubjectFocus[];
  dailyRoutine: string;
  resources: { name: string; type: "Free" | "Paid" | "Official"; link?: string }[];
  commonMistakes: string[];
  eduquestNote: string;
  eduquestCTA: string;
}

// ─── Exam types for ExamGuide ─────────────────────────────────────────────────

export interface ExamTimelineItem {
  month: string;
  action: string;
}

export interface Exam {
  name: string;
  fullName: string;
  icon: string;
  type: "Required" | "Recommended" | "Optional";
  countries: Country[];
  streams: Stream[];
  careers: string[];
  recommendedScore: string;
  cost: string;
  prepTime: string;
  registrationWindow: string;
  examWindow: string;
  applyLink: string;
  benefits: string[];
  requiredFor: string[];
  optionalFor: string[];
  notRequiredFor: string[];
  howToApply: string;
  /** @deprecated Use prepPlan instead */
  prepTips: string[];
  /** Rich structured prep plan — replaces flat prepTips */
  prepPlan: PrepPlan;
  timeline2026: ExamTimelineItem[];
  timeline2027: ExamTimelineItem[];
  eduquestNote?: string;
}

export interface Scholarship {
  name: string;
  amount: string;
  countries: Country[];
  streams: Stream[];
  careers: string[];
  deadline: string;
  eligibility: string;
  howToApply: string;
  tips: string[];
  link?: string;
}

export interface VisaInfo {
  country: Country;
  visaType: string;
  processingTime: string;
  cost: string;
  triggerDocument: string;
  applyFrom: string;
  keyDeadlines: string;
  requiredDocuments: string[];
  financialRequirement: string;
  interviewRequired: boolean;
  interviewTips: string[];
  tips: string[];
  link?: string;
}

// ─── EXAM_DB ──────────────────────────────────────────────────────────────────

export const EXAM_DB: Exam[] = [
  // ── SAT ────────────────────────────────────────────────────────────────────
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    icon: "📐",
    type: "Recommended",
    countries: ["USA", "India"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities", "Life Sciences / Biotech", "Media / Communications", "Law / Political Science", "Design / Architecture", "Not decided yet"],
    recommendedScore: "1400+ (1520+ Ivy/top-10); 1300+ state merit aid",
    cost: "~₹6,500 (USD 68 + processing)",
    prepTime: "6–12 months",
    registrationWindow: "Opens ~5 weeks before each test date at sat.collegeboard.org",
    examWindow: "2026: Aug 23, Oct 4, Nov 1, Dec 6 · 2027: Mar 8, May 3, Jun 7",
    applyLink: "https://sat.collegeboard.org",
    benefits: [
      "1400+ SAT unlocks merit scholarships at Purdue, UT Austin, ASU, Indiana Kelley (up to $10k/yr)",
      "Submitted by 75–80% of admitted students at top US universities even at test-optional schools",
      "SAT Math section directly signals quantitative ability to Business and Engineering departments",
      "Accepted as alternative to JEE at Ashoka, KREA, Shiv Nadar, FLAME universities in India",
      "Score valid for 5 years — take early and improve over time",
    ],
    requiredFor: ["Purdue University (Engineering)", "Ashoka University India (1450+)", "KREA University India (1400+)", "Shiv Nadar University (1350+)", "FLAME University (1300+)"],
    optionalFor: ["MIT (test-optional, 92% submit)", "Harvard, Stanford, Yale (test-optional)", "Carnegie Mellon", "Johns Hopkins", "Duke, Emory, NYU Stern", "Wharton (UPenn)", "Univ. of Michigan Ross"],
    notRequiredFor: ["All UK universities (no SAT)", "Canada (no SAT)", "Germany (no SAT)", "Australia (no SAT)", "Netherlands (no SAT)", "Singapore (no SAT)", "Japan (no SAT)"],
    howToApply: "Create account at sat.collegeboard.org. Register for preferred test date. Choose nearest centre (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune). Pay ~₹6,500 by international debit/credit card. Download admit card 1 week before exam. Bring original Passport on exam day.",
    prepTips: [
      "Join EduQuest's structured SAT batch — stream-specific tracks for PCM, PCB, Commerce, and Humanities with weekly proctored mocks and personalised score reports",
      "EduQuest students average 120–150 point improvement in 3 months. Register at eduquest.org.in to get started with a diagnostic session in week 1",
    ],
    prepPlan: {
      totalMonths: 6,
      targetScore: "1400+ overall; 1520+ for Ivy/top-10; 1300+ for state university merit aid",
      dailyRoutine: "Weekdays: 1.5–2 hrs. Weekends: 3–4 hrs. One full test every 2 weeks in months 1–4; weekly in months 5–6.",
      phases: [
        {
          label: "Month 1 — Diagnosis",
          focus: "Find your baseline. Understand the exam format.",
          tasks: [
            "Take 1 full official practice test under timed conditions (no breaks) — EduQuest provides this as a proctored diagnostic in session 1",
            "Score and categorise every error: careless mistake / concept gap / time pressure",
            "EduQuest's diagnostic session identifies your exact weak sub-topics and builds a custom plan in the first week",
            "Create a subject-weakness log: list every topic you got wrong with the reason why",
            "Register at eduquest.org.in to begin your stream-specific SAT batch",
          ],
          eduquestTip: "EduQuest's diagnostic session identifies your exact weak sub-topics and builds a custom plan in the first week — skip 3–4 weeks of guesswork.",
        },
        {
          label: "Month 2–3 — Foundation Building",
          focus: "Plug concept gaps. Build Math accuracy first.",
          tasks: [
            "Math: work through all SAT Math modules in your EduQuest batch — Algebra, Problem Solving, Advanced Math, Geometry",
            "Reading & Writing: practise 5 passages daily focusing on eliminating wrong answers, not guessing right ones",
            "Do NOT attempt full tests yet — section drills only (25–30 min per module)",
            "PCM students: Math should feel like NCERT Level 1 — if it doesn't, revise coordinate geometry, functions, and statistics",
            "PCB students: invest extra time in Reading — medical and science passages appear frequently",
            "Commerce/Humanities students: prioritise Math — spend 60% of prep time here in months 2–3",
            "Every error → note the sub-topic → revisit with your EduQuest teacher the same week",
          ],
          eduquestTip: "EduQuest runs separate SAT tracks for PCM, PCB, Commerce, and Humanities students. Your batch practises passages specific to your stream's vocabulary and reasoning style.",
        },
        {
          label: "Month 4 — Speed + Accuracy",
          focus: "Timed section practice. Reduce careless errors.",
          tasks: [
            "Take 1 full timed mock test every 2 weeks in your EduQuest batch — review every single wrong answer the same day",
            "Math: complete 20 drill problems under 15 minutes (1 module = 22 questions in 35 min → target 25 min)",
            "Reading: practise eliminating 2 options immediately, then choose between remaining 2",
            "Track your score trend: are you improving by at least 30–50 points per practice test?",
            "If score is stuck — book a targeted EduQuest session. Plateaus at 1250 and 1350 are common and fixable.",
          ],
          eduquestTip: "EduQuest students take a proctored mock every 2 weeks. Our teachers review errors live and show exactly why the official answer is correct — not just what it is.",
        },
        {
          label: "Month 5–6 — Test Simulation & Peak",
          focus: "Full test conditions. Maintain consistency. Register for exam.",
          tasks: [
            "Take 1 full EduQuest mock test every weekend — same time slot as your actual exam (usually 8 AM)",
            "Register for Aug 23 test at sat.collegeboard.org — Indian centres fill within 48 hours of registration opening",
            "Reading & Writing: focus on Command of Evidence and Rhetoric questions — highest-point gains in month 6",
            "Math: make sure you've practised every question type in 'Advanced Math' module — these are the 700+ scorers",
            "Final week: only review your personal error log from EduQuest sessions. Sleep 8 hrs minimum.",
            "Target: score within 30 points of your goal consistently in EduQuest mocks before the real exam",
          ],
          eduquestTip: "EduQuest holds weekly mock SATs in a real exam environment starting 6 weeks before the test date. Students who complete 4+ mocks with us average 120+ score improvement.",
        },
      ],
      subjectFocus: [
        {
          subject: "Math (800 points)",
          weight: "55% of prep time",
          topics: ["Linear equations & inequalities", "Systems of equations", "Quadratic equations", "Exponential functions", "Geometry (circles, triangles)", "Data analysis & statistics", "Advanced algebra (polynomials, rational expressions)"],
          streamNote: "PCM: Math should be your advantage — target 750–800. PCB: invest extra time in statistics and data interpretation. Commerce: focus on linear models and percentages. Humanities: start with Algebra basics — EduQuest's Humanities track includes dedicated foundation modules.",
        },
        {
          subject: "Reading & Writing (800 points)",
          weight: "45% of prep time",
          topics: ["Central idea and details", "Command of evidence (textual + quantitative)", "Words in context", "Text structure and purpose", "Cross-text connections", "Rhetorical synthesis", "Boundaries (punctuation/grammar)", "Form, structure, sense"],
          streamNote: "PCM: you may find Reading passages less familiar — EduQuest's PCM track includes science and social science passage practice. PCB: medical and biology passages appear — your EduQuest batch covers these specifically. Commerce: business and economics texts appear. Humanities: Reading is your strength — invest extra time in Math instead.",
        },
      ],
      resources: [
        { name: "EduQuest SAT Prep Programme (stream-specific batches + 8 proctored mocks)", type: "Paid", link: "https://eduquest.org.in" },
        { name: "College Board Official SAT Practice Tests", type: "Official", link: "https://sat.collegeboard.org/practice" },
        { name: "The College Panda SAT Math (book)", type: "Paid" },
        { name: "Erica Meltzer's SAT Reading (book)", type: "Paid" },
      ],
      commonMistakes: [
        "Starting with full tests before understanding why you're getting questions wrong — EduQuest starts with a diagnostic to fix this from week 1",
        "Not practising the digital adaptive format — EduQuest mocks simulate the real digital SAT environment",
        "PCM students neglecting Reading & Writing — Math alone cannot get you to 1400+",
        "Not registering early — Indian SAT centres fill within 24–48 hours of registration opening",
        "Cramming in the final week instead of reviewing your personal error log from your EduQuest sessions",
        "Not sending score reports during registration — each post-registration score send costs extra",
      ],
      eduquestNote: "EduQuest runs India's most stream-specific SAT preparation programme. PCM students get advanced Math + Science Reading tracks. PCB students focus on biology passages and data interpretation. Commerce students get finance and economics passage practice. Humanities students get extra Math foundation support. Our structured 6-month programme includes 8+ proctored mocks, weekly error analysis sessions, and personal score reports. Students average 120–150 point improvement. Batches available in Delhi, Mumbai, Bangalore, and online.",
      eduquestCTA: "Join EduQuest SAT Batch →",
    },
    timeline2026: [
      { month: "Jan–Apr 2026", action: "Start prep with EduQuest SAT batch. Take diagnostic test in week 1 to set baseline. Enrolment open at eduquest.org.in." },
      { month: "May–Jul 2026", action: "Section-specific drilling with EduQuest. 1 full mock every 2 weeks. Focus on weakest section. EduQuest mock SATs begin." },
      { month: "Aug 23, 2026", action: "SAT first attempt. Results in ~2 weeks. If 1300+, consider retake for improvement only." },
      { month: "Oct 4, 2026",  action: "SAT retake if Aug score below target. Oct results arrive before Nov 1 ED deadlines." },
      { month: "Nov 1, 2026",  action: "SAT retake (last practical attempt for Nov 15 ED deadlines)." },
      { month: "Dec 6, 2026",  action: "Final SAT sitting. Absolute last date before Jan 2027 application deadlines." },
    ],
    timeline2027: [
      { month: "Jan–Jun 2027", action: "Start SAT prep with EduQuest for Fall 2028 intake. Diagnostic test in week 1." },
      { month: "Jul–Aug 2027", action: "Intensive prep. 1 full EduQuest mock weekly. Targeted section improvement." },
      { month: "Aug 2027",     action: "First SAT attempt for 2028 intake." },
      { month: "Oct–Nov 2027", action: "Retake if needed." },
      { month: "Dec 2027",     action: "Final sitting for 2028 intake applications." },
    ],
    eduquestNote: "EduQuest offers structured SAT preparation with separate tracks for PCM, PCB, Commerce, and Humanities students. Students average 120+ score improvement in 3 months of structured prep.",
  },

  // ── IELTS ───────────────────────────────────────────────────────────────────
  {
    name: "IELTS Academic",
    fullName: "International English Language Testing System — Academic",
    icon: "🗣️",
    type: "Required",
    countries: ["USA", "UK", "Canada", "Australia", "Netherlands", "Singapore"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities", "Life Sciences / Biotech", "Media / Communications", "Law / Political Science", "Design / Architecture", "Not decided yet"],
    recommendedScore: "7.0–7.5 overall (Oxford/Cambridge Medicine: 7.5+, no band below 7.0)",
    cost: "~₹17,000 (IDP India / British Council)",
    prepTime: "3–4 months",
    registrationWindow: "Book 4–8 weeks in advance at ielts.idp.com or britishcouncil.in. Available year-round.",
    examWindow: "Almost every Saturday across India. Computer-delivered: results in 3–5 days.",
    applyLink: "https://ielts.idp.com",
    benefits: [
      "Mandatory for UK Student Visa (CAS) — without it, no visa even if you have an offer",
      "Required by all major Canadian, Australian, Dutch, and Singapore universities",
      "Band 7.5+ at Oxford/Cambridge opens the most competitive medical and law programmes",
      "Score valid for 2 years — plan your sitting to align with application deadlines",
      "Computer-delivered IELTS gives results in 3–5 days, allowing faster retake decisions",
    ],
    requiredFor: ["All UK universities (IELTS for UKVI Academic for visa)", "University of Toronto", "UBC Vancouver", "McGill", "Univ. of Melbourne", "UNSW Sydney", "NUS Singapore", "NTU Singapore", "TU Delft", "University of Amsterdam"],
    optionalFor: ["Some universities waive for English-medium CBSE/ISC schools (verify per university)"],
    notRequiredFor: ["Germany (not required)", "Japan (separate requirements)", "India (not required for domestic admissions)"],
    howToApply: "Visit ielts.idp.com or britishcouncil.in. Select 'IELTS Academic' (NOT General Training). For UK universities: select 'IELTS for UKVI Academic' specifically. Choose city and date. Upload passport photo. Pay ~₹17,000. Bring Passport on exam day.",
    prepTips: [
      "Register for EduQuest's IELTS batch — stream-specific prep with essay grading using official band descriptors and live Speaking mock sessions",
      "EduQuest Writing Task 2 coaching and Speaking mocks with British Council-trained teachers. Register at eduquest.org.in",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "7.0+ overall for most universities; 7.5+ for Oxford/Cambridge/Medicine; no individual band below 6.5",
      dailyRoutine: "1.5 hrs daily on weekdays. 3 hrs on weekends. Prioritise Writing and Speaking — these have the highest improvement potential.",
      phases: [
        {
          label: "Week 1–2 — Baseline Diagnosis",
          focus: "Know exactly where you stand before studying anything.",
          tasks: [
            "Take 1 full official IELTS mock test (all 4 sections, timed) — EduQuest provides this as a proctored diagnostic in session 1",
            "Score each section honestly: Listening, Reading, Writing Task 1 and Task 2, Speaking",
            "Identify your lowest band — that section gets the most time in months 1–2",
            "Choose Computer-Delivered IELTS — results in 3–5 days (vs 13 days for paper) — allows faster retake decisions",
            "Book your test date at ielts.idp.com 6–8 weeks ahead from today",
            "Register at eduquest.org.in to begin your stream-specific IELTS batch",
          ],
          eduquestTip: "EduQuest's IELTS diagnostic session gives you a predicted band score and a section-by-section improvement plan in your first class.",
        },
        {
          label: "Month 1 — Writing Intensive",
          focus: "Writing is where bands are won or lost. Fix this first.",
          tasks: [
            "Writing Task 2 (Essay): Write 1 essay daily. EduQuest teachers grade every essay using official IELTS band descriptors",
            "Writing Task 1 (Academic): Practise graphs, charts, maps, and process diagrams — describe trends, not data points",
            "PCM students: practise describing scientific processes and technical graphs (these appear frequently)",
            "PCB students: medical ethics and health policy essays appear in Task 2 — EduQuest's PCB track covers these specifically",
            "Commerce students: economics, trade, and business essay topics — EduQuest has dedicated templates for these",
            "Humanities students: your essay structure is your strength — focus on achieving Band 7 coherence and vocabulary",
            "Get at least 4 Task 2 essays checked by your EduQuest teacher per week",
          ],
          eduquestTip: "EduQuest stream-specific IELTS: PCM students get graph/process Task 1 drills, PCB students get medical writing modules, Commerce students get economics essay templates. Our teachers grade essays using official IELTS band descriptors.",
        },
        {
          label: "Month 2 — Listening & Reading",
          focus: "Score 7.0+ in both objective sections to buffer your Writing.",
          tasks: [
            "Listening: Do 1 full Listening section daily (30 min) with your EduQuest batch. Focus on Section 3 and 4 (academic discussions and monologues — hardest)",
            "Predict answers before hearing them — read questions during the preparation time seriously",
            "Reading: Do 1 full Reading section every 2 days. Time yourself: 20 min per passage, no more",
            "True/False/Not Given questions: read the question extremely carefully — 'Not Given' is NOT the same as 'False'",
            "Matching Headings and Summary Completion: skim the whole passage first, then locate specific sections",
            "EduQuest vocabulary sessions cover the Academic Word List — high-frequency IELTS words",
          ],
          eduquestTip: "EduQuest weekly listening labs simulate real test audio at increasing difficulty levels. Our Reading workshops teach skimming and scanning strategy — not just answer-checking.",
        },
        {
          label: "Month 3 — Speaking + Mock Tests",
          focus: "Speaking can be improved quickly with the right technique. Full test simulations.",
          tasks: [
            "Speaking Part 1: prepare 15–20 topic areas with your EduQuest teacher — Hometown, Studies, Work, Hobbies, Technology, Food, Travel",
            "Speaking Part 2 (long turn): practise 1 cue card per day. EduQuest teachers give band scores after every mock",
            "Speaking Part 3 (discussion): give opinions with reasons — 'In my view… because…'; don't give one-word answers",
            "Take 2 full mock tests under exam conditions in the final 3 weeks with EduQuest",
            "Final week: review your weakest question types only. No new material. Light speaking practice daily.",
          ],
          eduquestTip: "EduQuest runs live Speaking mock sessions with British Council-trained teachers who give band scores and specific feedback on fluency, lexical resource, coherence, and pronunciation — the 4 official Speaking criteria.",
        },
      ],
      subjectFocus: [
        {
          subject: "Writing (high impact — 25% of score)",
          weight: "40% of total prep time",
          topics: ["Task 2 essay structure (4-paragraph model)", "Task 1 graph/chart/map/process description", "Coherence and cohesion (linking words)", "Lexical resource (avoiding repetition)", "Grammatical range (mix of simple and complex sentences)"],
          streamNote: "PCM: graphs and process diagrams in Task 1 are your advantage — EduQuest's PCM track has dedicated scientific process writing. PCB: health, medicine, and ethics essays in Task 2. Commerce: business, trade, globalisation essay topics. Humanities: academic essay structure is familiar — focus on vocabulary range.",
        },
        {
          subject: "Speaking (highest improvement potential — 25%)",
          weight: "25% of total prep time",
          topics: ["Fluency (no long pauses)", "Pronunciation (clear, not accent-perfect)", "Lexical resource (topic vocabulary)", "Coherence (logical, extended answers — never one-sentence)"],
          streamNote: "All streams: the biggest mistake is answering in short sentences. EduQuest Speaking sessions train you to give 5–8 sentence answers with reasons and examples every time.",
        },
        {
          subject: "Reading (scoring 7.0+ is very achievable)",
          weight: "20% of total prep time",
          topics: ["True/False/Not Given", "Matching headings", "Summary completion", "Multiple choice", "Matching information"],
          streamNote: "PCM: academic science texts are familiar — time management is your main issue. PCB: medical and biology passages appear. Commerce/Humanities: social science and arts passages are common.",
        },
        {
          subject: "Listening (most improvable in shortest time — 25%)",
          weight: "15% of total prep time",
          topics: ["Section 3 (academic discussion)", "Section 4 (academic monologue)", "Spelling accuracy in answers", "Prediction from questions"],
          streamNote: "All streams: spellings matter in Listening — one wrong letter = wrong answer. EduQuest Listening labs cover American, British, and Australian accents. Section 4 has no break — EduQuest dedicates extra drill time to this.",
        },
      ],
      resources: [
        { name: "EduQuest IELTS Preparation Programme (stream-specific + essay grading + Speaking mocks)", type: "Paid", link: "https://eduquest.org.in" },
        { name: "Cambridge IELTS Books 13–18 (official practice tests)", type: "Official" },
        { name: "IELTS.org Official Sample Tests", type: "Official", link: "https://www.ielts.org/for-test-takers/sample-test-questions" },
      ],
      commonMistakes: [
        "Booking IELTS for UKVI Academic vs standard IELTS — for UK Student Visa you MUST take IELTS for UKVI Academic (different test)",
        "Not practising Writing under timed conditions — EduQuest timed writing sessions build this discipline from week 1",
        "Speaking in short sentences — EduQuest Speaking mocks specifically train extended discourse for Band 7",
        "Attempting full tests without understanding band descriptors first — EduQuest starts with descriptor training",
        "Ignoring True/False/Not Given distinction in Reading — 'Not Given' is NOT 'False'",
        "Taking paper-based IELTS when Computer-Delivered is available — CD gives results in 3–5 days",
      ],
      eduquestNote: "EduQuest runs India's most stream-specific IELTS preparation. PCM students get science/graph Writing Task 1 drills and technical reading passages. PCB students get medical Writing Task 2 essay packs and healthcare vocabulary modules. Commerce students get business essay templates and economics reading practice. Humanities students get literary and social science passage work. All students receive weekly essay grading using official IELTS band descriptors, live Speaking mock sessions with teacher feedback, and 3+ full mock tests. Batches available in Delhi, Mumbai, Bangalore, and fully online.",
      eduquestCTA: "Join EduQuest IELTS Batch →",
    },
    timeline2026: [
      { month: "Jan–May 2026", action: "Begin IELTS prep with EduQuest batch. Take diagnostic mock test. Identify weakest band. Focus on Writing Task 2 daily. Enrolment at eduquest.org.in." },
      { month: "Jun–Jul 2026", action: "First IELTS attempt. Computer-delivered recommended for fast results." },
      { month: "Aug–Sep 2026", action: "Retake if below target band. Last chance before Oct–Nov for Jan 2027 deadlines." },
      { month: "Oct 2026",     action: "Final retake window for January 2027 application deadlines." },
    ],
    timeline2027: [
      { month: "Jan–May 2027", action: "Begin IELTS prep with EduQuest for 2028 intake. Diagnostic test in month 1." },
      { month: "Jun–Jul 2027", action: "First attempt. Aim to complete by July for retake headroom." },
      { month: "Aug–Oct 2027", action: "Retake if needed." },
    ],
    eduquestNote: "EduQuest runs stream-specific IELTS prep sessions with official band-descriptor-based essay grading and live Speaking mocks.",
  },

  // ── UCAT ────────────────────────────────────────────────────────────────────
  {
    name: "UCAT",
    fullName: "University Clinical Aptitude Test",
    icon: "🩺",
    type: "Required",
    countries: ["UK", "Australia", "Singapore"],
    streams: ["Science (PCB)"],
    careers: ["Medicine / Pre-Med"],
    recommendedScore: "2700+ overall (2900+ for top UK medical schools); SJT Band 1–2",
    cost: "~£115 at Pearson VUE test centres",
    prepTime: "3–4 months alongside 12th boards",
    registrationWindow: "Opens May each year. Exam window: Jul–Sep. Register at ucat.ac.uk",
    examWindow: "July–September (for Oct 15 UK UCAS Medicine deadline)",
    applyLink: "https://www.ucat.ac.uk",
    benefits: [
      "Mandatory for UK Medical schools — no UCAT means you cannot apply to most UK Medicine programmes",
      "UCAS Medicine deadline is October 15 — UCAT must be completed BEFORE this date",
      "A 2900+ UCAT score significantly differentiates you among thousands of Medicine applicants",
      "SJT Band 1 is as important as the overall score for MMI interview selection",
      "Same exam used for Australia (UCAT ANZ) — one prep covers both UK and Australian Med applications",
    ],
    requiredFor: ["Edinburgh Medicine (2900+ competitive)", "King's College London Medicine (2800+)", "Manchester Medicine (2700+)", "Newcastle Medicine (2650+)", "Queen Mary BLSA Medicine (2600+)", "Univ. of Melbourne Medicine (UCAT ANZ)", "Monash Medicine (UCAT ANZ)", "NUS Medicine Singapore"],
    optionalFor: [],
    notRequiredFor: ["Cambridge Medicine (uses ESAT)", "Oxford Medicine (uses TSA)", "US Medical schools (use MCAT)", "Canadian medical schools"],
    howToApply: "Register at ucat.ac.uk in May. Select Pearson VUE test centre in India (Delhi, Mumbai, Bangalore, Chennai). Pay ~£115. Exam is adaptive computer-based. Results available same day.",
    prepTips: [
      "Join EduQuest's Medical pathway programme — weekly UCAT mock tests from May covering all 5 sections with detailed score breakdowns",
      "EduQuest Medical counsellors have guided students to Edinburgh, KCL, and Manchester Medicine offers. Register at eduquest.org.in",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "2700+ overall; 2900+ for Edinburgh/KCL; SJT Band 1 is equally critical",
      dailyRoutine: "2 hrs daily from April onward. Increase to 3 hrs daily in July. 5 full mocks in the 4 weeks before exam.",
      phases: [
        {
          label: "Month 1 (April) — Section Fundamentals",
          focus: "Learn each section's question types before timing yourself.",
          tasks: [
            "Verbal Reasoning: practise 20 passages daily — answer only from the text, never from prior knowledge. This is the hardest section for most Indian students.",
            "Abstract Reasoning: do 30 pattern sets daily — train yourself to spot Series, Type, and Odd-One-Out patterns in under 10 seconds each",
            "Decision Making: logical puzzles — practise syllogisms, Venn diagrams, and probabilistic reasoning",
            "Quantitative Reasoning: 25 maths problems in 25 minutes — think GCSE-level maths at extreme speed. Practise with a basic onscreen calculator only.",
            "SJT: read the GMC document 'Good Medical Practice' — the official framework for all ethical scenarios. EduQuest Medical counsellors guide this in your first session.",
            "Register at eduquest.org.in to begin EduQuest's Medical pathway UCAT programme",
          ],
          eduquestTip: "EduQuest's Medical pathway counsellors introduce all 5 UCAT sections in the first 2 weeks with question-type catalogues and timed warm-up drills.",
        },
        {
          label: "Month 2 (May–June) — Speed Drills",
          focus: "The UCAT is fundamentally a speed test — accuracy under time pressure is everything.",
          tasks: [
            "Verbal Reasoning: target under 30 seconds per question. Flag questions over 30 seconds and move on.",
            "Abstract Reasoning: target under 14 seconds per question. Spot the rule in the first 5 seconds.",
            "Take 1 timed UCAT mock per week in your EduQuest batch — teachers analyse section scores and time-per-question data",
            "Quantitative Reasoning: practise mental arithmetic — avoid calculator for simple % and ratio questions",
            "SJT: practise 15 clinical scenarios per session with EduQuest — answers should consistently prioritise patient safety",
            "Review every wrong answer immediately — understand the examiners' reasoning, not just the correct option",
          ],
          eduquestTip: "EduQuest holds weekly UCAT mock tests from May onward under real test conditions. Teachers analyse your section scores and time-per-question data to identify exactly where you're losing marks.",
        },
        {
          label: "Month 3 (July–Aug) — Full Simulation + Exam",
          focus: "Full-length simulations. Test strategy. Peak performance.",
          tasks: [
            "Take 1 full 2-hour UCAT simulation every 4–5 days in July with EduQuest",
            "Complete at least 600 questions across all sections using EduQuest's question bank",
            "Decision Making: in the real exam, use the 'flag and return' strategy for any question taking over 45 seconds",
            "SJT: aim for Band 1 — consistently select options that prioritise patient welfare above convenience, hierarchy, or speed",
            "Final week: review your SJT error log from EduQuest sessions. Light drills only. No new material.",
            "Sit UCAT in July or August — earlier is better so you have score in hand for October 15 UCAS deadline",
          ],
          eduquestTip: "EduQuest's UCAT students have secured offers at Edinburgh, KCL, and Manchester. We run full 2-hour proctored mock UCATs in July with detailed score breakdowns. Our Medicine counsellors also guide your UCAS Personal Statement.",
        },
      ],
      subjectFocus: [
        {
          subject: "Verbal Reasoning (44 Q / 21 min)",
          weight: "30% of prep time — hardest for Indian students",
          topics: ["True/False/Can't Tell from text", "Keyword scanning", "Inference questions", "Tone and author purpose"],
          streamNote: "PCB students: treat each passage as if you have never seen this information before — answer ONLY from what the text says. Your medical knowledge is a trap in this section. EduQuest Verbal Reasoning sessions train this discipline specifically.",
        },
        {
          subject: "Abstract Reasoning (50 Q / 12 min)",
          weight: "25% of prep time",
          topics: ["Series patterns", "Type patterns", "Odd one out", "Shape count / symmetry / shading / arrows"],
          streamNote: "PCB students: this is entirely visual pattern recognition — no science knowledge helps. EduQuest Abstract Reasoning drills build speed from shapes and shading to rotation and size rules.",
        },
        {
          subject: "Quantitative Reasoning (36 Q / 25 min)",
          weight: "20% of prep time",
          topics: ["Percentages and ratios", "Speed/distance/time", "Currency conversions", "Graph and table interpretation", "Basic statistics"],
          streamNote: "PCB students: GCSE-level maths — not hard conceptually. The challenge is speed with the onscreen calculator. EduQuest speed drills train mental maths for simple % calculations.",
        },
        {
          subject: "Decision Making (29 Q / 31 min)",
          weight: "15% of prep time",
          topics: ["Syllogisms", "Venn diagrams", "Logical puzzles", "Probabilistic reasoning", "Weighing up arguments"],
          streamNote: "PCB students: treat these like logic puzzles, not medical problems. EduQuest Decision Making sessions cover formal logic structure separately from medical context.",
        },
        {
          subject: "SJT — Situational Judgement Test (66 Q / 26 min)",
          weight: "10% of prep time — equally weighted in shortlisting",
          topics: ["GMC Good Medical Practice principles", "Patient safety first", "Honest communication", "Teamwork and hierarchy", "Confidentiality"],
          streamNote: "PCB students: EduQuest Medical counsellors walk through the GMC Good Medical Practice document in your batch. Every SJT session asks: 'what would a good junior doctor do?' — patient welfare, then honesty, then teamwork.",
        },
      ],
      resources: [
        { name: "EduQuest Medical Pathway Programme (UCAT + Personal Statement + MMI prep)", type: "Paid", link: "https://eduquest.org.in" },
        { name: "UCAT Official Practice (ucat.ac.uk)", type: "Official", link: "https://www.ucat.ac.uk/ucat/practice-tests/" },
        { name: "GMC Good Medical Practice (mandatory reading)", type: "Official", link: "https://www.gmc-uk.org/professional-standards/professional-standards-for-doctors/good-medical-practice" },
      ],
      commonMistakes: [
        "Starting UCAT prep in June — you need at least 3 months. EduQuest Medical batch starts in April.",
        "Using prior medical knowledge in Verbal Reasoning — only the text exists",
        "Spending too long on individual questions — flagging and moving on is the correct strategy",
        "Underestimating SJT — a Band 4 SJT kills your application even with a 2900+ score",
        "Not sitting in July or August — waiting until September leaves no buffer for the Oct 15 UCAS deadline",
        "Not using timed practice from week 1 — EduQuest timed drills start in your very first session",
      ],
      eduquestNote: "Medicine is EduQuest's most specialised pathway. Our Medical counsellors have guided students to offers at Edinburgh, KCL, and Manchester. We provide: UCAT preparation (all 5 sections with weekly mocks), UCAS Personal Statement coaching (clinical experience framing, professional insight sections), MMI interview preparation (ethical scenarios, body language, structured answers), and school selection advice tailored to your UCAT score band. If you're applying to UK Medicine, this is the most important investment you'll make in your application.",
      eduquestCTA: "Book Medical Counselling Session →",
    },
    timeline2026: [
      { month: "Apr 2026",     action: "Begin UCAT preparation with EduQuest Medical batch. Take diagnostic. Enrolment at eduquest.org.in." },
      { month: "May 2026",     action: "Register at ucat.ac.uk when registration opens. Book test slot early." },
      { month: "Jun–Jul 2026", action: "Intensive prep: 2+ hrs daily. EduQuest weekly mock UCATs begin." },
      { month: "Jul–Sep 2026", action: "Sit UCAT exam. Results same day. Aim 2700+ overall, Band 1–2 SJT." },
      { month: "Oct 15, 2026", action: "UCAS Medicine applications deadline. UCAT score already submitted." },
    ],
    timeline2027: [
      { month: "Apr 2027",       action: "Start UCAT prep with EduQuest for 2028 Medical intake." },
      { month: "Jul–Sep 2027",   action: "Sit UCAT exam." },
      { month: "Oct 15, 2027",   action: "UCAS Medicine deadline for 2028 entry." },
    ],
    eduquestNote: "EduQuest Medical counsellors have guided students to Edinburgh, KCL, and Manchester Medicine offers. Our preparation covers UCAT, Personal Statement, and MMI interviews.",
  },

  // ── TMUA ────────────────────────────────────────────────────────────────────
  {
    name: "TMUA",
    fullName: "Test of Mathematics for University Admission",
    icon: "🔢",
    type: "Required",
    countries: ["UK"],
    streams: ["Science (PCM)", "Commerce"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics"],
    recommendedScore: "6.5+ (Cambridge: 6.5–7.5+; LSE/Warwick benefit from 6.0+)",
    cost: "~£75 (~₹8,000) at authorised India centres",
    prepTime: "3 months",
    registrationWindow: "Registration opens August each year at admissionstesting.org. Closes ~3 weeks before exam.",
    examWindow: "October–November (for Jan 15 UCAS deadline)",
    applyLink: "https://www.admissionstesting.org/tmua",
    benefits: [
      "Cambridge Maths, CS, Economics, Engineering — no TMUA = no interview (hard prerequisite)",
      "LSE Economics: 6.5+ can be the deciding factor between offer and rejection in competitive years",
      "Warwick Maths/Economics: 6.0+ differentiates applicants with identical predicted grades",
      "Score of 7.0+ is exceptional — admissions tutors explicitly mention it in interview offers",
    ],
    requiredFor: ["Cambridge University — Maths (mandatory)", "Cambridge University — CS (mandatory)", "Cambridge University — Economics (mandatory)", "Cambridge University — Engineering (mandatory)"],
    optionalFor: ["LSE — Economics (beneficial, 6.5+)", "Warwick — Maths (beneficial, 6.0+)", "Warwick — Economics (beneficial, 6.0+)"],
    notRequiredFor: ["Imperial College (uses ESAT instead)", "UCL (no TMUA)", "Edinburgh (no TMUA)", "All non-UK universities"],
    howToApply: "Create account at admissionstesting.org. Search 'TMUA'. Select India test centre (Delhi, Mumbai, Bangalore, Chennai, Hyderabad). Pay ~£75. No calculator permitted. Bring Passport as ID.",
    prepTips: [
      "Join EduQuest's UK Maths preparation — fills the CBSE-to-A-level gap in 8–10 focused weeks with 3 proctored TMUA simulations",
      "EduQuest students targeting Cambridge Economics and CS consistently score 6.5–7.5. Register at eduquest.org.in",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "6.5+ for Cambridge interview shortlist; 7.0+ is exceptional. Scoring is relative — top 25% nationally.",
      dailyRoutine: "2 hrs daily from April. Increase to 3 hrs daily from August. Alternate between Paper 1 drills and Paper 2 reasoning sessions.",
      phases: [
        {
          label: "Month 1 (Apr–May) — A-Level Gap Analysis",
          focus: "CBSE/ISC Maths covers ~70% of TMUA Paper 1 content. Identify and fill the remaining 30%.",
          tasks: [
            "EduQuest UK Maths specialists map the exact CBSE-to-A-level gap in week 1 — this is your starting point",
            "Download TMUA specification from admissionstesting.org — go through every topic against what your EduQuest teacher highlights",
            "Topics typically missing from CBSE: proof by induction, formal proof techniques, complex number geometry, matrix algebra, binomial theorem applications, further calculus",
            "Complete all past TMUA Paper 1 questions from available years — score and categorise errors by topic",
            "PCM students: your NCERT knowledge covers algebra and basic calculus — EduQuest focuses extra time on proof and complex number geometry",
            "Commerce students targeting LSE: EduQuest's Commerce TMUA track focuses on statistics, probability, and algebra",
            "Register at eduquest.org.in for EduQuest's UK Maths programme",
          ],
          eduquestTip: "EduQuest's UK Maths specialists map the exact CBSE-to-A-level gap in week 1. Our teachers fill these content gaps in focused 8–10 week modules specifically designed for Indian board students.",
        },
        {
          label: "Month 2 (Jun–Jul) — Paper 2 Reasoning",
          focus: "Paper 2 is unlike anything in CBSE — mathematical argument evaluation and proof critique.",
          tasks: [
            "Paper 2 format: 20 MCQs presenting mathematical arguments — you evaluate whether each step is valid or identify the first incorrect step",
            "EduQuest dedicates 4 full sessions to Paper 2 — worked examples of flawed proofs and valid counterexamples",
            "Study formal mathematical logic: valid deduction, invalid inference, counterexample construction",
            "Every week: 1 timed Paper 1 (75 min) + 1 timed Paper 2 (75 min) in your EduQuest batch",
            "Review your Paper 2 errors with your EduQuest teacher — understand why the wrong inference was wrong",
            "Practise speed: 3.75 minutes per question in both papers",
          ],
          eduquestTip: "TMUA Paper 2 is where most CBSE students struggle because Indian boards never test mathematical proof critique. EduQuest dedicates 4 full sessions to this — with worked examples of flawed proofs and valid counterexamples.",
        },
        {
          label: "Month 3 (Aug–Oct) — Simulation & Registration",
          focus: "Full timed simulations. Register in August. Peak preparation.",
          tasks: [
            "Register for TMUA at admissionstesting.org in August — do this the day registration opens; India slots fill within days",
            "Take 1 full TMUA simulation (both papers back-to-back, 75 min each) every week in your EduQuest batch",
            "EduQuest teachers mark Paper 2 responses and explain the exact reasoning expected",
            "Final 2 weeks: focus only on Paper 2 reasoning and your specific weak sub-topics from Paper 1",
            "Day before: review your personal error log from EduQuest sessions. No new material. Rest well.",
          ],
          eduquestTip: "EduQuest holds 3 proctored TMUA full simulations in September and October. Our teachers mark Paper 2 responses and explain the exact reasoning expected. Cambridge Economics and CS students we've prepared consistently score 6.5–7.5.",
        },
      ],
      subjectFocus: [
        {
          subject: "Paper 1 — Mathematical Knowledge (20 MCQ, 75 min)",
          weight: "50% of final score",
          topics: ["Algebra and functions", "Sequences and series", "Calculus (differentiation and integration)", "Trigonometry", "Proof (by contradiction, induction)", "Coordinate geometry", "Statistics and probability", "Complex numbers", "Matrices (if A-level Further Maths)"],
          streamNote: "PCM students: Paper 1 is closest to what you know — EduQuest focuses extra time on proof and complex number geometry beyond CBSE. Commerce students targeting LSE Economics: EduQuest's Commerce track concentrates on statistics, probability, and algebraic reasoning.",
        },
        {
          subject: "Paper 2 — Mathematical Reasoning (20 MCQ, 75 min)",
          weight: "50% of final score",
          topics: ["Identifying valid mathematical arguments", "Spotting errors in proofs", "Evaluating mathematical claims and counterexamples", "Formal deductive reasoning", "Logical inference from given conditions"],
          streamNote: "PCM students: this is the most unfamiliar section. EduQuest's Paper 2 sessions use worked proof-critique examples not available in CBSE preparation. Commerce students: EduQuest covers statistical reasoning applications for LSE Economics applicants.",
        },
      ],
      resources: [
        { name: "EduQuest UK Maths Preparation Programme (CBSE-to-A-level gap fill + 3 proctored simulations)", type: "Paid", link: "https://eduquest.org.in" },
        { name: "TMUA Past Papers (admissionstesting.org)", type: "Official", link: "https://www.admissionstesting.org/for-test-takers/tmua/preparing-for-tmua/" },
        { name: "Cambridge STEP I Past Papers (free)", type: "Free", link: "https://www.maths.cam.ac.uk/undergrad/admissions/step/papers" },
        { name: "TMUA Specification Document (free)", type: "Official", link: "https://www.admissionstesting.org/for-test-takers/tmua/" },
      ],
      commonMistakes: [
        "Starting prep in September — only 6 weeks before the October exam. EduQuest TMUA batch starts in April.",
        "Focusing only on Paper 1 and ignoring Paper 2 reasoning — both are equally weighted",
        "Not filling A-level content gaps — CBSE Maths is not sufficient for Paper 1 proof questions",
        "Not registering in August — India TMUA slots fill within 48 hours of registration opening",
        "Spending more than 4.5 minutes on any single question — flag and move on",
        "Not practising STEP I — EduQuest uses Cambridge STEP I problems as part of Paper 2 reasoning training",
      ],
      eduquestNote: "EduQuest's UK pathway specialists have guided students applying to Cambridge Economics, CS, and Maths. Our TMUA programme fills the A-level Maths gap for CBSE/ISC students in 8–10 focused weeks, covers Paper 2 mathematical reasoning from first principles, and includes 3 proctored full simulations. We also help you interpret your TMUA score in the context of your Cambridge and LSE applications.",
      eduquestCTA: "Book EduQuest UK Maths Session →",
    },
    timeline2026: [
      { month: "Apr–Jun 2026", action: "Begin EduQuest UK Maths batch. Identify A-level content gaps vs CBSE/ISC. Enrolment at eduquest.org.in." },
      { month: "Jul–Aug 2026", action: "Complete all past TMUA Paper 1 papers timed. Score and categorise errors with EduQuest teacher." },
      { month: "Aug 2026",     action: "Register for TMUA at admissionstesting.org — slots fill fast." },
      { month: "Sep–Oct 2026", action: "TMUA Paper 2 prep. 3 proctored EduQuest simulations." },
      { month: "Oct–Nov 2026", action: "TMUA exam. Scores auto-sent to UCAS universities." },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027", action: "Begin EduQuest TMUA prep for 2028 Cambridge/LSE/Warwick intake." },
      { month: "Aug 2027",     action: "Register for TMUA." },
      { month: "Oct–Nov 2027", action: "Sit TMUA exam." },
    ],
    eduquestNote: "EduQuest's UK specialists fill the CBSE-to-A-level Maths gap for TMUA in 8–10 weeks. Students targeting Cambridge Economics and CS consistently score 6.5–7.5 after our programme.",
  },

  // ── ESAT ────────────────────────────────────────────────────────────────────
  {
    name: "ESAT",
    fullName: "Engineering & Science Admissions Test",
    icon: "⚗️",
    type: "Required",
    countries: ["UK"],
    streams: ["Science (PCM)", "Science (PCB)"],
    careers: ["Engineering (Mechanical / Civil / EE)", "Life Sciences / Biotech", "Computer Science / AI / Data Science"],
    recommendedScore: "Top 25–30 percentile nationally (no fixed cutoff — relative scoring)",
    cost: "~£75 (~₹8,000) at authorised India centres",
    prepTime: "4 months",
    registrationWindow: "Registration opens August each year at admissionstesting.org.",
    examWindow: "October–November",
    applyLink: "https://www.admissionstesting.org/esat",
    benefits: [
      "Cambridge Engineering/Natural Sciences/Vet Med — no ESAT = no interview (hard gate)",
      "Imperial Engineering/Science — ESAT is the primary academic filter before interviews",
      "Top-25-percentile ESAT essentially guarantees a Cambridge interview",
      "Replaced ENGAA and NSAA in 2024 — use past ENGAA/NSAA papers for practice",
    ],
    requiredFor: ["Cambridge University — Engineering (mandatory)", "Cambridge University — Natural Sciences (mandatory)", "Cambridge University — Veterinary Medicine (mandatory)", "Imperial College London — Engineering (mandatory)", "Imperial College London — Science (mandatory)"],
    optionalFor: [],
    notRequiredFor: ["UCL (no ESAT)", "Edinburgh (no ESAT)", "Manchester (no ESAT)", "All non-UK universities"],
    howToApply: "Create account at admissionstesting.org. Select ESAT. Choose India test centre. Select 2 optional modules: Engineering → Physics + Chemistry. Natural Sciences → Biology + Chemistry or Physics + Chemistry. No calculator, no formula sheet. Pay ~£75.",
    prepTips: [
      "Join EduQuest's ESAT programme — A-level Physics, Chemistry, and Biology depth for CBSE/ISC students with 2 full proctored simulations",
      "EduQuest students applying to Cambridge Engineering and Imperial consistently score in the top 25 percentile. Register at eduquest.org.in",
    ],
    prepPlan: {
      totalMonths: 4,
      targetScore: "Top 25 percentile nationally — no fixed cutoff. Aim above the national average in all 3 parts.",
      dailyRoutine: "2–3 hrs daily from June. Weekends: 2 full practice sections per sitting. 4 full simulations in October.",
      phases: [
        {
          label: "Month 1 (May–Jun) — Module Selection + Gap Analysis",
          focus: "Choose your modules. Understand what ESAT demands beyond CBSE/ISC.",
          tasks: [
            "EduQuest's ESAT preparation begins with a diagnostic sitting — teachers identify exactly which A-level topics require most attention",
            "Decide your modules: Cambridge Engineering → Part 1 Maths (mandatory) + Part 2 Physics + Part 3 Chemistry. Natural Sciences → Part 1 Maths + Part 2 Biology + Part 3 Chemistry.",
            "Download ESAT specimen papers from admissionstesting.org — attempt 1 full sitting without prep to get your baseline",
            "ESAT is significantly harder than CBSE 12th standard — the Physics section in particular is A-level depth",
            "PCM students: your Maths section should be the strongest. PCB students: Biology section should be your advantage.",
            "Register at eduquest.org.in for EduQuest's ESAT batch",
          ],
          eduquestTip: "EduQuest's ESAT preparation begins with a diagnostic sitting. Our teachers identify exactly which A-level topics (beyond CBSE) require most attention — typically Mechanics, Waves, Electricity, and Optics for Physics.",
        },
        {
          label: "Month 2 (Jun–Jul) — Content Building",
          focus: "Fill A-level content gaps. This is the most important phase.",
          tasks: [
            "Physics (Engineering applicants): EduQuest teachers cover A-level Mechanics, Waves, Electricity, Fields — beyond CBSE depth",
            "Chemistry (Engineering/Natural Sciences): EduQuest Chemistry sessions cover organic mechanisms, Equilibria, Electrochemistry, Energetics at A-level depth",
            "Biology (Natural Sciences/Vet): EduQuest Biology sessions cover molecular genetics, ecosystem energy flow, and physiological mechanisms beyond CBSE 12th",
            "Maths: practise speed — 89 seconds per question. EduQuest uses past ENGAA papers for Physics content practice",
            "Use past ENGAA papers (2016–2023) for Physics content — ESAT Physics is directly equivalent to ENGAA Physics",
            "Use past NSAA papers for Biology and Chemistry practice alongside EduQuest sessions",
          ],
          eduquestTip: "EduQuest teachers cover A-level Physics, Chemistry, and Biology depth in focused module-by-module sessions. Our Physics teacher explains ESAT-level Mechanics and Electricity concepts using CBSE as a foundation — no A-level textbook required if you attend all sessions.",
        },
        {
          label: "Month 3 (Aug–Sep) — Timed Section Practice",
          focus: "Speed under pressure. Register in August.",
          tasks: [
            "Register for ESAT at admissionstesting.org in August — the moment registration opens. India slots fill within 48 hours.",
            "Take 1 full 3-section timed practice (all 3 parts back-to-back, 40 min each) every week from August in your EduQuest batch",
            "Physics: practise 27 MCQs in under 35 minutes. Every question = ~1.5 minutes max.",
            "All sections: if stuck on any question after 60 seconds → flag it and continue. Return at the end.",
            "EduQuest teachers mark your practice papers and explain exactly why each answer is correct",
          ],
          eduquestTip: "EduQuest runs weekly timed ESAT section drills from September. Our teachers time each section and identify exactly where students are losing time — most often in multi-step Physics calculations.",
        },
        {
          label: "Month 4 (Oct) — Full Simulation + Exam",
          focus: "Full exam simulations. Final review. Rest.",
          tasks: [
            "Take 2 complete EduQuest ESAT full simulations (all 3 parts, 120 min total) in the first 2 weeks of October",
            "EduQuest reviews every question after each simulation with the teacher",
            "Final 10 days: review your personal error log from all EduQuest sessions. No new content.",
            "Night before: rest. Review 1 page of key formulae per section. Sleep 8+ hours.",
            "Exam day: Part 1 (Maths) first — mandatory for all. Then your 2 chosen modules. No calculator, no formula sheet.",
          ],
          eduquestTip: "EduQuest holds 2 full proctored ESAT simulations in October under real exam conditions. After each simulation, every question is reviewed with the teacher. Students applying to Cambridge Engineering and Imperial through EduQuest consistently score in the top 25 percentile.",
        },
      ],
      subjectFocus: [
        {
          subject: "Part 1 — Mathematics (mandatory, 40 min, 27 MCQ)",
          weight: "Mandatory for all ESAT candidates",
          topics: ["Algebra and functions", "Calculus (differentiation, integration)", "Sequences", "Coordinate geometry", "Trigonometry", "Probability", "Vectors"],
          streamNote: "PCM students: this should be your strongest section. EduQuest's PCM track treats JEE-level Maths preparation as a foundation here. PCB students: EduQuest spends extra time on calculus and coordinate geometry in your batch.",
        },
        {
          subject: "Part 2 — Physics (Engineering choice)",
          weight: "40% of Engineering prep time",
          topics: ["Mechanics (circular motion, momentum, energy)", "Waves (superposition, diffraction, interference)", "Electricity and magnetism (capacitors, internal resistance)", "Fields (gravitational, electric)", "Optics", "Modern physics basics"],
          streamNote: "PCM students: CBSE Physics covers ~60% of ESAT Physics. EduQuest's Physics sessions cover the remaining 40% (capacitors, fields, interference) using past ENGAA papers as practice.",
        },
        {
          subject: "Part 3 — Chemistry (Engineering/NatSci choice)",
          weight: "30% of Engineering/NatSci Chemistry prep time",
          topics: ["Organic reaction mechanisms", "Equilibria (Le Chatelier, Ksp)", "Electrochemistry", "Energetics (Born-Haber cycles)", "Atomic structure and bonding"],
          streamNote: "PCM and PCB students: CBSE Chemistry covers most of this at surface level — EduQuest Chemistry sessions go deeper on mechanisms and energy calculations using past NSAA Chemistry papers.",
        },
        {
          subject: "Part 2/3 — Biology (Natural Sciences/Vet choice)",
          weight: "40% of NatSci/Vet Biology prep time",
          topics: ["Cell biology and division", "Protein synthesis and gene expression", "Genetics and inheritance", "Ecology and energy transfer", "Physiology (heart, lungs, nervous system at depth)"],
          streamNote: "PCB students: your CBSE Biology covers most of this well. EduQuest Biology sessions focus on the harder areas: molecular genetics depth, ecosystem energy flow calculations, and physiological mechanism questions.",
        },
      ],
      resources: [
        { name: "EduQuest ESAT Preparation Programme (A-level depth + 2 proctored simulations)", type: "Paid", link: "https://eduquest.org.in" },
        { name: "ESAT Specimen Papers (admissionstesting.org)", type: "Official", link: "https://www.admissionstesting.org/esat" },
        { name: "Past ENGAA Papers 2016–2023 (free)", type: "Free", link: "https://www.undergraduate.study.cam.ac.uk/applying/admissions-tests" },
        { name: "Past NSAA Papers 2016–2023 (free)", type: "Free", link: "https://www.undergraduate.study.cam.ac.uk/applying/admissions-tests" },
      ],
      commonMistakes: [
        "Using only CBSE 12th content — ESAT Physics and Chemistry are A-level depth. EduQuest covers this gap specifically.",
        "Not choosing modules before starting prep — EduQuest helps you decide in session 1",
        "Not registering in August — India ESAT slots fill within 48 hours of registration opening",
        "Spending too long on any single question — the exam is 89 seconds per question across all parts",
        "Practising ESAT without also using past ENGAA/NSAA papers — EduQuest integrates these into your batch",
        "Preparing Maths last — Part 1 Maths is mandatory and sets the tone for your whole paper",
      ],
      eduquestNote: "EduQuest has guided students applying to Cambridge Engineering and Imperial through ESAT preparation since its introduction in 2024. Our Physics and Chemistry teachers specifically cover A-level depth content that CBSE/ISC students have not seen, using ENGAA and NSAA papers as practice alongside the new ESAT specimen papers. Our programme includes weekly timed section drills, 2 full proctored simulations, and detailed percentile-based feedback. Students also receive support for their Cambridge Supplementary Application and Imperial admissions process.",
      eduquestCTA: "Book EduQuest ESAT Session →",
    },
    timeline2026: [
      { month: "Apr–Jun 2026",   action: "Begin EduQuest ESAT batch. Decide modules. Identify A-level content gaps. Enrolment at eduquest.org.in." },
      { month: "Jul–Sep 2026",   action: "A-level content study in EduQuest sessions + past ENGAA/NSAA papers daily. 2–3 hrs/day." },
      { month: "Aug 2026",       action: "Register for ESAT immediately when registration opens." },
      { month: "Sep–Oct 2026",   action: "Full timed EduQuest ESAT simulations. All 3 parts back-to-back." },
      { month: "Oct–Nov 2026",   action: "ESAT exam. Results auto-sent to Cambridge and Imperial via UCAS." },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027",   action: "Begin EduQuest ESAT prep for 2028 Cambridge/Imperial intake." },
      { month: "Aug 2027",       action: "Register immediately when registration opens." },
      { month: "Oct–Nov 2027",   action: "Sit ESAT for 2028 intake." },
    ],
    eduquestNote: "EduQuest ESAT programme covers A-level Physics, Chemistry, and Biology depth specifically for CBSE/ISC students. Weekly timed drills + 2 full proctored simulations.",
  },

  // ── TOEFL ───────────────────────────────────────────────────────────────────
  {
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language — Internet-Based",
    icon: "💬",
    type: "Required",
    countries: ["USA", "Canada", "UK", "Australia"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities", "Life Sciences / Biotech", "Media / Communications", "Law / Political Science", "Design / Architecture", "Not decided yet"],
    recommendedScore: "100+ iBT (110+ for Ivy/top-10 US schools)",
    cost: "~$185 (~₹15,500). Home Edition same price.",
    prepTime: "3 months",
    registrationWindow: "Year-round at ets.org/toefl. Home Edition bookable with 4+ days notice.",
    examWindow: "Year-round. Home Edition available any day.",
    applyLink: "https://www.ets.org/toefl",
    benefits: [
      "Every single US university accepts TOEFL — broadest acceptance in the US vs IELTS",
      "Home Edition identical in validity — convenient for students outside major cities",
      "MIT and some other schools slightly prefer TOEFL over IELTS",
      "Results in 4–6 days — fast turnaround",
      "Integrated tasks suit analytical PCM students who are comfortable reading and synthesising",
    ],
    requiredFor: ["All US universities (100+ iBT at competitive schools)", "All Canadian universities (90–100+)", "Most Australian universities (79–94+)", "Cambridge/Oxford (110+ as IELTS alternative)"],
    optionalFor: ["UK universities that accept TOEFL as alternative to IELTS"],
    notRequiredFor: ["Germany", "Netherlands (IELTS preferred)", "Singapore (IELTS preferred)", "Japan", "India"],
    howToApply: "Create account at ets.org/toefl. Choose Test Centre or Home Edition. Select date. Add 4 free score recipients. Pay ~$185. Bring Passport on exam day.",
    prepTips: [
      "Register for EduQuest's TOEFL batch — stream-specific Integrated Writing, Listening note-taking, and Speaking template training",
      "EduQuest students score 100–110+ within 3 months. Our teachers evaluate Speaking using ETS's exact scoring criteria. Register at eduquest.org.in",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "100+ iBT for most US/Canada; 110+ for Ivy/top-10 US; 90+ for Australian universities",
      dailyRoutine: "1.5 hrs daily. Weekends: 1 full section per sitting. Full test every 2 weeks in month 3.",
      phases: [
        {
          label: "Month 1 — Format Familiarisation + Baseline",
          focus: "TOEFL is different from IELTS — the Integrated tasks are unique. Understand the format first.",
          tasks: [
            "Take 1 full TOEFL diagnostic in your EduQuest session — score all 4 sections and identify your weakest area",
            "Note the key differences from IELTS: TOEFL uses integrated tasks (read + listen + respond), Speaking is AI-scored, Writing has 2 task types",
            "Reading (35 min / 2 passages): practise 2 academic passages daily under timed conditions",
            "Listening (36 min / 5 audio pieces): practise academic lecture note-taking — EduQuest provides audio materials at increasing difficulty",
            "PCM/Engineering students: Integrated Writing suits your analytical background — EduQuest's PCM track uses science passages for this",
            "Humanities/Commerce students: Reading passages are social science heavy — this is your natural strength",
            "Register at eduquest.org.in for EduQuest's TOEFL coaching",
          ],
          eduquestTip: "EduQuest TOEFL coaching starts with a diagnostic TPO-style test. Our teachers immediately identify whether TOEFL or IELTS suits your profile better — some students switch after week 1 once they see their section-by-section scores.",
        },
        {
          label: "Month 2 — Section Intensive",
          focus: "Each section requires a different strategy. Master them individually.",
          tasks: [
            "Speaking: EduQuest teachers provide templates for all 4 task types and evaluate recordings using ETS scoring criteria",
            "Integrated Writing (Task 1): always structure as — intro (what the reading argues) + 3 body paragraphs contrasting reading with lecture counter-point. Never give your own opinion.",
            "Writing for Academic Purposes (Task 2): give your opinion with 3 reasons and examples. EduQuest writing sessions cover both task types.",
            "Listening: practise noting signal words — 'however', 'therefore', 'for example', 'in contrast'. EduQuest Listening labs build this skill.",
            "Practise each section individually 5 times before combining into full tests",
          ],
          eduquestTip: "EduQuest TOEFL sessions teach Speaking templates that work for the AI-scoring system. Our teachers have studied ETS's scoring criteria and train students to deliver clear, structured spoken responses — not just fluent ones.",
        },
        {
          label: "Month 3 — Full Tests + Registration",
          focus: "2-week full test simulation period. Register for your exam.",
          tasks: [
            "Book TOEFL at ets.org/toefl — choose Home Edition if outside major cities. Home Edition is valid everywhere.",
            "Take 1 full 2-hour practice test every week in your EduQuest batch. Review every wrong answer immediately.",
            "Speaking: practise all 4 task types daily (15 min total) using EduQuest's Speaking evaluation feedback",
            "If using Home Edition: test your setup (microphone, camera, internet, room) at least 3 days before exam",
            "Final week: light review of your weak section only. Full rest. No new material.",
          ],
          eduquestTip: "EduQuest holds TOEFL mock sessions with Speaking evaluation. Our teachers give feedback on pacing, structure, and clarity — the 3 criteria the ETS AI scoring system rewards most.",
        },
      ],
      subjectFocus: [
        {
          subject: "Reading (35 min — 2 passages, 20 questions each)",
          weight: "25% of total score",
          topics: ["Main idea and purpose", "Vocabulary in context", "Inference questions", "Sentence simplification", "Insert the sentence", "Prose summary (worth 2 points each — very important)"],
          streamNote: "PCM students: science passages on biology, astronomy, geology — familiar content. EduQuest's PCM track uses science passages specifically. PCB students: life sciences passages are your advantage. Commerce/Humanities: social science and history passages — EduQuest provides academic article practice for these streams.",
        },
        {
          subject: "Listening (36 min — 3 lectures + 2 conversations)",
          weight: "25% of total score",
          topics: ["Main idea of lecture", "Supporting details", "Speaker's attitude", "Function of statements", "Note-taking accuracy"],
          streamNote: "All streams: note-taking is the key skill. EduQuest Listening labs build structured note-taking from lecture-format audio at increasing difficulty.",
        },
        {
          subject: "Speaking (17 min — 4 tasks, AI-scored)",
          weight: "25% of total score",
          topics: ["Task 1: Personal preference (independent)", "Task 2: Campus situation (integrated: read+listen)", "Task 3: Academic concept (integrated: read+listen)", "Task 4: Academic lecture summary (integrated: listen only)"],
          streamNote: "All streams: EduQuest Speaking sessions provide template structure for all 4 task types and evaluate responses using ETS scoring criteria — fluency, coherence, vocabulary, and pronunciation.",
        },
        {
          subject: "Writing (29 min — 2 tasks)",
          weight: "25% of total score",
          topics: ["Integrated Writing: contrast a reading passage with an opposing lecture (150–225 words)", "Writing for Academic Purposes: express + support your opinion on a practical question (250+ words, 10 min)"],
          streamNote: "PCM/Engineering students: Integrated Writing is your strength — EduQuest's PCM track uses science report structure. Commerce/Humanities students: Writing for Academic Purposes is your strength — EduQuest trains opinion argument development.",
        },
      ],
      resources: [
        { name: "EduQuest TOEFL Preparation Programme (stream-specific + Speaking evaluation)", type: "Paid", link: "https://eduquest.org.in" },
        { name: "ETS Official TOEFL Practice Tests (TPO)", type: "Official", link: "https://www.ets.org/toefl/test-takers/ibt/prepare.html" },
        { name: "ETS Official TOEFL Guide (book)", type: "Official" },
      ],
      commonMistakes: [
        "Confusing TOEFL Integrated Writing with IELTS Task 2 — Integrated Writing should NEVER include your opinion. EduQuest covers this difference in session 1.",
        "Not testing the Home Edition setup before exam day — technical failures invalidate scores",
        "Speaking in long unstructured sentences — EduQuest Speaking sessions specifically train template-based structure",
        "Not taking full timed practice tests — EduQuest monthly mocks build the endurance needed for 2+ hours",
        "Choosing TOEFL without checking if your specific UK universities accept it — EduQuest counsellors verify this for you",
      ],
      eduquestNote: "EduQuest offers TOEFL-specific coaching with stream-based preparation. PCM students work on Integrated Writing with scientific content, Listening note-taking from lecture format audio, and structured Speaking responses. Humanities and Commerce students focus on literary Reading passages, opinion-based Writing, and argument development. Our teachers evaluate Speaking responses using ETS's exact scoring criteria. Students who choose EduQuest's TOEFL track instead of IELTS typically score 100–110+ within 3 months.",
      eduquestCTA: "Join EduQuest TOEFL Batch →",
    },
    timeline2026: [
      { month: "Jan–Apr 2026", action: "Start TOEFL or IELTS prep with EduQuest. Take both diagnostic tests and choose the format that suits you. EduQuest helps you decide in session 1. Enrolment at eduquest.org.in." },
      { month: "May–Jun 2026", action: "Intensive prep on weakest sections. 1 full EduQuest mock test per week." },
      { month: "Jun–Jul 2026", action: "Sit TOEFL first attempt. Results in 4–6 days. Retake if below 100." },
      { month: "Sep–Oct 2026", action: "Retake window for Jan 2027 deadlines if needed." },
    ],
    timeline2027: [
      { month: "Jan–May 2027", action: "Start TOEFL prep with EduQuest for 2028 intake." },
      { month: "Jun–Jul 2027", action: "First attempt. Retake headroom before Jan 2028 deadlines." },
    ],
    eduquestNote: "EduQuest TOEFL coaching is stream-specific: PCM students get Integrated Writing + science listening modules. Humanities/Commerce students focus on opinion Writing and argument development.",
  },
];

// ─── SCHOLARSHIPS ─────────────────────────────────────────────────────────────

export const SCHOLARSHIPS: Scholarship[] = [
  {
    name: "Inlaks Shivdasani Foundation Scholarship",
    amount: "Up to USD 100,000 total (tuition + living)",
    countries: ["USA", "UK"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities", "Life Sciences / Biotech", "Law / Political Science"],
    deadline: "January each year",
    eligibility: "Indian citizen under 30. Undergraduate or postgraduate. Strong academics (85%+). Exceptional extracurriculars and demonstrated social impact. Must apply to university independently first.",
    howToApply: "Apply at inlaksfoundation.org. Submit academic records, essays, and 2 reference letters. Shortlisted candidates attend interviews in Mumbai.",
    tips: [
      "Show clear social impact — what have you done for your community?",
      "Connect your career plan to India's development needs",
      "Strong references from teachers who know you well beyond grades",
      "Interview is rigorous — prepare for questions on your field and long-term goals",
    ],
    link: "https://www.inlaksfoundation.org",
  },
  {
    name: "JN Tata Endowment for Higher Education",
    amount: "₹4–10 lakh (loan scholarship)",
    countries: ["USA", "UK", "Canada", "Australia", "Germany"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Life Sciences / Biotech"],
    deadline: "December–January each year",
    eligibility: "Indian citizen. Under 45. Must have secured admission to a recognised foreign university. Academic distinction required. Apply AFTER receiving university admission.",
    howToApply: "Apply at jntataendowment.org after securing university admission.",
    tips: [
      "Must have university admission in hand before applying",
      "The essay asks about your contribution to India after your degree — be specific",
      "Loan scholarship — repayable but interest-free period is generous",
    ],
    link: "https://www.jntataendowment.org",
  },
  {
    name: "DAAD Scholarship (Germany)",
    amount: "€934/month living + tuition fee waiver",
    countries: ["Germany"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Engineering (Mechanical / Civil / EE)", "Life Sciences / Biotech", "Computer Science / AI / Data Science", "Liberal Arts / Humanities", "Business / Economics"],
    deadline: "October–November for following academic year",
    eligibility: "Indian students applying to German universities. Strong academics (80%+ equivalent). Research motivation letter. Some programmes require German B2.",
    howToApply: "Apply at daad.de/en. Submit motivation letter, transcripts, 2 academic references, language certificates.",
    tips: [
      "Motivation letter is the most important document — explain research interest specifically",
      "DAAD rewards students with a clear research agenda",
      "German language skills (even B1) significantly help even for English programmes",
    ],
    link: "https://www.daad.de/en",
  },
  {
    name: "Lester B. Pearson International Scholarship (UoT)",
    amount: "Full tuition + living for 4 years (~C$200,000 total)",
    countries: ["Canada"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities"],
    deadline: "November (with UoT application)",
    eligibility: "Exceptional international students applying to UoT. Top academic standing, outstanding extracurricular achievement, leadership, and community impact. Must be nominated by your school.",
    howToApply: "Your school must nominate you at the time of applying to UoT.",
    tips: [
      "School nomination is critical — speak to your principal early to secure it",
      "Essays must show intellectual curiosity beyond your school subjects",
      "Demonstrate leadership that created change, not just participation",
    ],
    link: "https://future.utoronto.ca/pearson",
  },
  {
    name: "UBC International Major Entrance Scholarship",
    amount: "Up to C$80,000 over 4 years",
    countries: ["Canada"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Life Sciences / Biotech", "Liberal Arts / Humanities"],
    deadline: "Automatic with UBC application (Jan 15)",
    eligibility: "Top international applicants. 95%+ average. Strong personal profile essays.",
    howToApply: "Apply to UBC by January 15 and complete personal profile essays. Scholarship is awarded automatically — no separate application.",
    tips: [
      "Personal profile essays are the scholarship application — write them exceptionally well",
      "Demonstrate what makes you distinctly you — not just academic scores",
    ],
    link: "https://you.ubc.ca/financial-planning/scholarships-awards",
  },
  {
    name: "Ashoka University Fellowship (India)",
    amount: "Up to 100% tuition scholarship",
    countries: ["India"],
    streams: ["Commerce", "Humanities", "Undecided"],
    careers: ["Liberal Arts / Humanities", "Business / Economics", "Law / Political Science", "Media / Communications"],
    deadline: "October–April (multiple rounds)",
    eligibility: "Strong academic record (85%+). Exceptional essays and personal statement. Interview performance. SAT 1450+ significantly strengthens scholarship applications.",
    howToApply: "Apply at ashoka.edu.in. Submit application form, essays, SAT/other test scores. Multiple application rounds.",
    tips: [
      "SAT 1450+ is strongly recommended — major differentiator for scholarships",
      "Essays are the most important component — show intellectual curiosity",
      "Apply in Round 1 (October) for highest scholarship probability",
    ],
    link: "https://www.ashoka.edu.in/admissions",
  },
];

// ─── VISA_DB ──────────────────────────────────────────────────────────────────

export const VISA_DB: VisaInfo[] = [
  {
    country: "USA",
    visaType: "F-1 Student Visa",
    processingTime: "3–8 weeks after interview",
    cost: "USD 160 application fee + USD 350 SEVIS fee",
    triggerDocument: "Form I-20 (from university after accepting admission)",
    applyFrom: "Apply after receiving I-20 (May–June for Fall intake). Book appointment immediately — slots fill in hours.",
    keyDeadlines: "Accept offer May 1 → I-20 issued → Book F-1 slot immediately → Interview June–July → Fly August",
    requiredDocuments: ["Form I-20", "DS-160 online form", "SEVIS I-901 fee receipt ($350)", "Valid passport", "2×2 inch photo", "Bank statements (2 years tuition + $10k/yr living)", "University admission letter", "Academic transcripts"],
    financialRequirement: "Bank statements showing 2 years tuition + $10,000–$15,000/yr living expenses.",
    interviewRequired: true,
    interviewTips: ["Be clear about course name, university, degree duration, career plan", "Show strong ties to India", "Answer only what is asked", "Dress formally and arrive 15 min early"],
    tips: ["Book visa appointment same day as I-20 — slots vanish within minutes", "Pay SEVIS ($350) at fmjfee.com same day as I-20", "OPT after graduation: 12 months (36 months STEM)"],
    link: "https://ustraveldocs.com/in",
  },
  {
    country: "UK",
    visaType: "UK Student Visa",
    processingTime: "2–3 weeks",
    cost: "~£490 visa fee + £776/yr Immigration Health Surcharge",
    triggerDocument: "CAS number from university",
    applyFrom: "Apply after receiving CAS (June–July for Sept intake).",
    keyDeadlines: "Accept UCAS offer May → CAS issued Jun–Jul → Apply online + VFS biometrics July → Fly August",
    requiredDocuments: ["CAS reference number", "Valid passport", "IELTS for UKVI Academic score", "Bank statements (28 consecutive days)", "Online visa application"],
    financialRequirement: "Tuition + £1,334/month × 9 months (outside London) maintained for 28 consecutive days.",
    interviewRequired: false,
    interviewTips: [],
    tips: ["CRITICAL: IELTS for UKVI Academic — NOT standard IELTS", "28 consecutive days bank balance — any dip resets the clock", "Graduate Route after graduation: 2 years open work (3 for PhD)"],
    link: "https://www.gov.uk/student-visa",
  },
  {
    country: "Canada",
    visaType: "Study Permit",
    processingTime: "8–12 weeks (SDS: ~20 working days)",
    cost: "CAD 150",
    triggerDocument: "Letter of Acceptance from a DLI",
    applyFrom: "Apply immediately after receiving acceptance — processing takes 2–3 months.",
    keyDeadlines: "Acceptance Apr–May → Apply immediately → Biometrics → Permit Jul–Aug → Fly Sep",
    requiredDocuments: ["Letter of Acceptance (DLI)", "Passport", "Proof of funds", "IELTS/TOEFL", "Statement of Purpose", "Biometrics"],
    financialRequirement: "Tuition + CAD 10,000 living + return airfare. GIC accepted for SDS.",
    interviewRequired: false,
    interviewTips: [],
    tips: ["Apply same day as acceptance letter", "SDS faster (~20 days) if you have GIC + IELTS 6.0+", "PGWP after graduation: 1–3 years open work"],
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
  },
  {
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    processingTime: "2–4 weeks",
    cost: "AUD 710",
    triggerDocument: "Confirmation of Enrolment (CoE) + OSHC",
    applyFrom: "Apply immediately after CoE and purchasing OSHC.",
    keyDeadlines: "Accept offer → CoE issued → Purchase OSHC → Apply via ImmiAccount → Health exam → Grant 2–4 weeks",
    requiredDocuments: ["CoE", "OSHC certificate", "Passport", "Financial evidence", "IELTS/TOEFL", "GTE statement", "Transcripts"],
    financialRequirement: "Tuition + AUD 24,505/yr living + return airfare + OSHC.",
    interviewRequired: false,
    interviewTips: [],
    tips: ["GTE statement is the most critical document — explain why you'll return to India", "Purchase OSHC BEFORE applying", "Subclass 485 after graduation: 2–4 years open work"],
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
  },
  {
    country: "Germany",
    visaType: "National Visa (Type D) for Study",
    processingTime: "6–12 weeks",
    cost: "~€75",
    triggerDocument: "Unconditional admission letter + Sperrkonto (€11,208)",
    applyFrom: "Apply for APS FIRST (3+ months before appointment). Then admission → Sperrkonto → Consulate appointment.",
    keyDeadlines: "APS 3+ months early → Admission letter → Sperrkonto → Book consulate → Interview June–July → Fly Sep",
    requiredDocuments: ["APS Certificate (MANDATORY)", "Unconditional admission letter", "Sperrkonto proof (€11,208)", "Passport", "Health insurance", "Language certificate", "10th+12th certificates with translations", "Visa form", "Photos"],
    financialRequirement: "Sperrkonto at Fintiba/Expatrio showing €11,208. Monthly withdrawal: €934.",
    interviewRequired: true,
    interviewTips: ["Know your course content well", "Demonstrate German language for German-taught programmes", "Bring originals + photocopies of everything"],
    tips: ["CRITICAL: APS certificate at aps-india.de — takes 4–8 weeks, mandatory", "Book consulate same day as Sperrkonto", "Job Seeker Visa after graduation: 18 months"],
    link: "https://india.diplo.de",
  },
  {
    country: "Singapore",
    visaType: "Student Pass (ICA)",
    processingTime: "4–8 weeks",
    cost: "SGD 30",
    triggerDocument: "IPA letter from ICA (via university SOLAR nomination)",
    applyFrom: "After university nominates you via SOLAR.",
    keyDeadlines: "Accept offer → University nominates → IPA letter → Apply SOLAR → Arrive → Collect Student Pass at ICA",
    requiredDocuments: ["IPA letter", "Passport", "Passport photo (ICA spec)", "eForm 16 (SOLAR)", "Financial proof"],
    financialRequirement: "Tuition + SGD 12,000/yr living. Bank statements from parents.",
    interviewRequired: false,
    interviewTips: [],
    tips: ["Student Pass issued IN Singapore — IPA is your entry document", "Visit ICA Building within 2 weeks of arrival", "No automatic post-study visa — Employment Pass requires employer"],
    link: "https://solar.ica.gov.sg",
  },
];

// ─── Helper functions ─────────────────────────────────────────────────────────

export function getRelevantExams(countries: Country[], stream: Stream, career?: string): Exam[] {
  return EXAM_DB.filter((exam) => {
    const countryMatch = exam.countries.some((c) => countries.includes(c));
    const streamMatch  = exam.streams.includes(stream) || stream === "Undecided";
    const careerMatch  = !career || career === "Not decided yet" || exam.careers.includes(career);
    return countryMatch && streamMatch && careerMatch;
  }).sort((a, b) => {
    const order = { Required: 0, Recommended: 1, Optional: 2 };
    return order[a.type] - order[b.type];
  });
}

export function getRelevantScholarships(countries: Country[], stream: Stream, career?: string): Scholarship[] {
  return SCHOLARSHIPS.filter((s) => {
    const countryMatch = s.countries.some((c) => countries.includes(c));
    const streamMatch  = s.streams.includes(stream) || stream === "Undecided";
    const careerMatch  = !career || career === "Not decided yet" || s.careers.includes(career);
    return countryMatch && streamMatch && careerMatch;
  });
}

export function getRelevantVisas(countries: Country[]): VisaInfo[] {
  return VISA_DB.filter((v) => countries.includes(v.country) && !NO_VISA_COUNTRIES.includes(v.country));
}

// ─── UNI_DB (unchanged) ───────────────────────────────────────────────────────

type UniDB = Partial<Record<Stream | "default", University[]>>;

export const UNI_DB: Record<Country, UniDB> = {
  USA: {
    "Science (PCM)": [
      { name: "MIT",                tier: "Reach",  req: 95, sat: 1560, satRequired: "Recommended", deadline: "Jan 1",  cost: "$58k/yr", admissionMode: "Holistic + Essays + Recs + Activities", scholarshipStrength: "Need-blind for internationals; 1550+ SAT + outstanding research profile" },
      { name: "Carnegie Mellon",    tier: "Reach",  req: 90, sat: 1510, satRequired: "Recommended", deadline: "Jan 1",  cost: "$57k/yr", admissionMode: "Holistic + Portfolio (CS/Eng)", scholarshipStrength: "Merit & need-based; 1500+ SAT + strong project portfolio" },
      { name: "Purdue University",  tier: "Target", req: 80, sat: 1390, satRequired: "Yes",         deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "Grades + SAT / ACT score", scholarshipStrength: "Automatic merit awards $3k–$10k/yr for 1350+ SAT" },
      { name: "UT Austin",          tier: "Target", req: 78, sat: 1370, satRequired: "Recommended", deadline: "Dec 1",  cost: "$25k/yr", admissionMode: "Holistic + Essays (out-of-state)", scholarshipStrength: "Competitive merit aid for 1400+ SAT + top GPA" },
      { name: "Arizona State Univ.",tier: "Safety", req: 65, sat: 1230, satRequired: "Optional",    deadline: "Mar 1",  cost: "$18k/yr", admissionMode: "GPA-based + Test-optional", scholarshipStrength: "Merit scholarships up to $10k/yr for 1200+ SAT or 3.5+ GPA" },
    ],
    "Science (PCB)": [
      { name: "Johns Hopkins",      tier: "Reach",  req: 95, sat: 1550, satRequired: "Recommended", deadline: "Jan 2",  cost: "$59k/yr", admissionMode: "Holistic + Essays + Research ECs", scholarshipStrength: "Need-blind; 1550+ SAT + research/clinical experience" },
      { name: "Duke University",    tier: "Reach",  req: 92, sat: 1530, satRequired: "Recommended", deadline: "Jan 2",  cost: "$60k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Need-based only; strong research ECs" },
      { name: "Emory University",   tier: "Target", req: 82, sat: 1420, satRequired: "Recommended", deadline: "Jan 15",cost: "$55k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Emory Scholars: merit up to full tuition; 1450+ SAT" },
      { name: "Univ. of Florida",   tier: "Target", req: 76, sat: 1360, satRequired: "Recommended", deadline: "Nov 1",  cost: "$22k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards; competitive for 1350+ SAT" },
      { name: "Univ. of Arizona",   tier: "Safety", req: 65, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$17k/yr", admissionMode: "GPA-based automatic admission", scholarshipStrength: "Merit aid up to $7k/yr for 1200+ SAT" },
    ],
    Commerce: [
      { name: "Wharton (UPenn)",           tier: "Reach",  req: 95, sat: 1560, satRequired: "Recommended", deadline: "Jan 5",  cost: "$60k/yr", admissionMode: "Holistic + Essays + Recs + Interview", scholarshipStrength: "Need-blind; 1550+ SAT + elite leadership/business ECs" },
      { name: "NYU Stern",                 tier: "Reach",  req: 88, sat: 1500, satRequired: "Recommended", deadline: "Jan 15",cost: "$57k/yr", admissionMode: "Holistic + Essays + Activities", scholarshipStrength: "Dean's Scholarship up to $20k/yr for 1480+ SAT" },
      { name: "Univ. of Michigan Ross",    tier: "Target", req: 82, sat: 1440, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays (BBA direct admit)", scholarshipStrength: "Merit aid $5k–$15k/yr; 1400+ SAT + leadership ECs" },
      { name: "Indiana University Kelley", tier: "Target", req: 75, sat: 1370, satRequired: "Recommended", deadline: "Feb 15",cost: "$37k/yr", admissionMode: "GPA + SAT / optional + Essays", scholarshipStrength: "Automatic merit $3k–$8k/yr for 1300+ SAT" },
      { name: "Univ. of Nebraska",         tier: "Safety", req: 65, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$22k/yr", admissionMode: "GPA-based rolling admission", scholarshipStrength: "Merit aid up to $6k/yr for 3.5+ GPA" },
    ],
    default: [
      { name: "University of Michigan",  tier: "Reach",  req: 88, sat: 1470, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Merit aid $5k–$15k/yr; 1430+ SAT + strong ECs" },
      { name: "Univ. of Wisconsin",      tier: "Target", req: 80, sat: 1380, satRequired: "Recommended", deadline: "Feb 1",  cost: "$32k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards $3k–$10k/yr for 1350+ SAT" },
      { name: "Univ. of Washington",     tier: "Target", req: 78, sat: 1350, satRequired: "Optional",    deadline: "Jan 15", cost: "$36k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Need-based only for internationals; limited merit" },
      { name: "Ohio State University",   tier: "Safety", req: 70, sat: 1280, satRequired: "Optional",    deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "GPA-based + optional essays", scholarshipStrength: "Merit aid $3k–$8k/yr for 1280+ SAT" },
      { name: "Arizona State Univ.",     tier: "Safety", req: 60, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$18k/yr", admissionMode: "GPA-based automatic admission", scholarshipStrength: "Merit scholarships up to $10k/yr for 1200+ SAT" },
    ],
  },
  UK: {
    "Science (PCM)": [
      { name: "Imperial College London",  tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£35k/yr", admissionMode: "UCAS + ESAT (mandatory) + A-levels/12th", scholarshipStrength: "UG merit limited — strong ESAT + 95%+ boards" },
      { name: "University of Edinburgh",  tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£25k/yr", admissionMode: "UCAS + predicted grades", scholarshipStrength: "Edinburgh Global UG Scholarship (partial); 85%+ boards" },
      { name: "University of Manchester", tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£23k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "Partial merit bursaries; 80%+ boards" },
      { name: "University of Sheffield",  tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "Global Excellence Scholarship £2k–£4k; 70%+ boards" },
    ],
    "Science (PCB)": [
      { name: "University of Edinburgh (Medicine)", tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£38k/yr", admissionMode: "UCAS + UCAT + MMI interview", scholarshipStrength: "Limited UG merit; UCAT 2900+ + 95%+ boards essential" },
      { name: "King's College London (Medicine)",   tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£36k/yr", admissionMode: "UCAS + UCAT + MMI interview", scholarshipStrength: "No significant UG merit aid; UCAT 2800+ + 90%+ boards" },
      { name: "Univ. of Manchester (Medicine)",     tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£34k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Limited bursaries; UCAT 2700+ + strong interview" },
      { name: "Newcastle University (Medicine)",    tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£32k/yr", admissionMode: "UCAS + UCAT + MMI", scholarshipStrength: "Occasional merit bursaries; UCAT 2650+" },
      { name: "Queen Mary BLSA (Medicine)",         tier: "Safety", req: 75, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£30k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Need-based only; UCAT 2600+" },
    ],
    default: [
      { name: "University College London",  tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£28k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "UCL Global UG Scholarship (partial); 90%+ boards" },
      { name: "King's College London",      tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£26k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "King's India Scholarship (partial) + 85%+ boards" },
      { name: "Univ. of Exeter",            tier: "Target", req: 72, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling + predicted grades", scholarshipStrength: "Exeter International Scholarship up to £4k; 75%+ boards" },
      { name: "Coventry University",        tier: "Safety", req: 60, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£15k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "VC Scholarship up to £3k; 65%+ boards" },
    ],
  },
  Canada: {
    default: [
      { name: "University of Toronto",  tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Nov 1",  cost: "C$45k/yr", admissionMode: "Grades + supplementary application", scholarshipStrength: "Lester B. Pearson: full scholarship for exceptional internationals" },
      { name: "UBC Vancouver",          tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$40k/yr", admissionMode: "Grades + personal profile essays", scholarshipStrength: "UBC International Major Entrance Scholarship up to C$80k total" },
      { name: "McGill University",      tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$30k/yr", admissionMode: "Grades-based with supplementary essays", scholarshipStrength: "Partial merit bursaries; 85%+ avg" },
      { name: "University of Waterloo", tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Feb 1",  cost: "C$32k/yr", admissionMode: "Grades + AIF essays", scholarshipStrength: "President's Scholarship up to C$2k; 90%+ avg" },
      { name: "Dalhousie University",   tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$18k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Entrance scholarship C$1k–$3k for 80%+" },
    ],
  },
  Australia: {
    default: [
      { name: "Univ. of Melbourne", tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$40k/yr", admissionMode: "Academic record + personal statement", scholarshipStrength: "Melbourne International UG Scholarship up to A$25k" },
      { name: "UNSW Sydney",        tier: "Reach",  req: 82, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$38k/yr", admissionMode: "Grades + personal statement", scholarshipStrength: "International Merit Scholarship A$5k–$10k" },
      { name: "Monash University",  tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Dec 15", cost: "A$33k/yr", admissionMode: "Grades-based rolling + personal statement", scholarshipStrength: "International Merit Scholarship up to A$10k" },
      { name: "University of Adelaide", tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jan 31", cost: "A$25k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Adelaide Scholarship up to 25% fee reduction" },
    ],
  },
  Germany: {
    default: [
      { name: "TU Munich",             tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS certificate + motivation letter", scholarshipStrength: "DAAD: €934/month living; Deutschlandstipendium: €300/month" },
      { name: "LMU Munich",            tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + language proof", scholarshipStrength: "DAAD scholarships; Deutschlandstipendium €300/month" },
      { name: "Heidelberg University", tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German/IELTS proof", scholarshipStrength: "DAAD + Deutschlandstipendium; 78%+ equiv" },
      { name: "RWTH Aachen",           tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS certificate", scholarshipStrength: "DAAD scholarships; German B2 + 70%+ boards" },
    ],
  },
  Netherlands: {
    default: [
      { name: "Delft University",    tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€10k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Holland Scholarship €5k + Delft Excellence partial merit" },
      { name: "Univ. of Amsterdam",  tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9k/yr",  admissionMode: "Academic grades + IELTS + motivation letter", scholarshipStrength: "Amsterdam Merit Scholarship: full tuition for top applicants" },
      { name: "Leiden University",   tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "May 1", cost: "€8.5k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Leiden Excellence Scholarship: partial" },
    ],
  },
  Singapore: {
    default: [
      { name: "NUS Singapore", tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Feb 23", cost: "S$30k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "MOE/ASEAN scholarship: up to full tuition; 92%+ boards" },
      { name: "NTU Singapore", tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$28k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "ASEAN/NTU merit: partial to full; 88%+ boards" },
      { name: "SMU Singapore", tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$22k/yr", admissionMode: "Academic record + essays + interview", scholarshipStrength: "SMU Global Impact Scholarship; 80%+ boards + ECs" },
    ],
  },
  India: {
    "Science (PCM)": [
      { name: "IIT Bombay (JEE)",    tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank-based counselling (JoSAA)", scholarshipStrength: "Government scholarships; top 500 JEE rank" },
      { name: "IIT Delhi (JEE)",     tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank (JoSAA)", scholarshipStrength: "MCM scholarship for low income; JEE top 1000" },
      { name: "BITS Pilani",         tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "May (BITSAT)",  cost: "₹5L/yr",    admissionMode: "BITSAT score", scholarshipStrength: "Merit cum Means; 320+ BITSAT" },
      { name: "VIT University",      tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Feb (VITEEE)",  cost: "₹2L/yr",    admissionMode: "VITEEE score", scholarshipStrength: "Chancellor's Award for VITEEE top rank or 95%+ boards" },
    ],
    "Science (PCB)": [
      { name: "AIIMS Delhi",         tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Nov (NEET)",    cost: "₹1L/yr",    admissionMode: "NEET-UG rank (MCC counselling)", scholarshipStrength: "Government-funded; NEET top 50 rank" },
      { name: "CMC Vellore",         tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹3L/yr",    admissionMode: "NEET-UG + CMC entrance + interview", scholarshipStrength: "CMC bursaries; NEET 650+" },
      { name: "Kasturba Medical",    tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹4L/yr",    admissionMode: "NEET-UG score + counselling", scholarshipStrength: "Merit awards; NEET 550+" },
    ],
    Commerce: [
      { name: "Ashoka University",           tier: "Reach",  req: 88, sat: 1450, satRequired: "Yes", deadline: "Oct–Apr (Rounds)", cost: "₹15L/yr", admissionMode: "Holistic + Interview + Essays + SAT", scholarshipStrength: "Ashoka Fellowship: up to 100% scholarship; 1450+ SAT + leadership" },
      { name: "KREA University",             tier: "Reach",  req: 85, sat: 1400, satRequired: "Yes", deadline: "Oct–Apr",          cost: "₹12L/yr", admissionMode: "Holistic + Interview + SAT", scholarshipStrength: "Merit scholarships 25–100%; 1400–1500 SAT" },
      { name: "Shiv Nadar University",       tier: "Target", req: 82, sat: 1350, satRequired: "Yes", deadline: "Dec–May",          cost: "₹7L/yr",  admissionMode: "SAT / SNUSAT + Interview", scholarshipStrength: "Merit based; 1350+ SAT" },
      { name: "FLAME University",            tier: "Target", req: 78, sat: 1300, satRequired: "Yes", deadline: "Oct–May",          cost: "₹8L/yr",  admissionMode: "SAT / FLAME Test + PI", scholarshipStrength: "Merit aid; 1300–1450 SAT" },
      { name: "SRCC Delhi",                  tier: "Reach",  req: 96, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹50k/yr", admissionMode: "CUET score (DU counselling)", scholarshipStrength: "95–99 percentile CUET" },
      { name: "IIM Indore / Rohtak (IPM)",   tier: "Reach",  req: 90, sat: null, satRequired: "No",  deadline: "Feb–Apr",          cost: "₹3L/yr",  admissionMode: "IPMAT aptitude test + PI", scholarshipStrength: "Top 1–2% IPMAT + PI" },
      { name: "Christ University",           tier: "Safety", req: 75, sat: null, satRequired: "No",  deadline: "Dec–April",        cost: "₹1.5L/yr", admissionMode: "Own test + PI", scholarshipStrength: "Merit + interview; 80%+ boards" },
    ],
    default: [
      { name: "Ashoka University",             tier: "Reach",  req: 88, sat: 1450, satRequired: "Yes", deadline: "Oct–Apr (Rounds)", cost: "₹15L/yr", admissionMode: "Holistic + Interview + Essays + SAT", scholarshipStrength: "Ashoka Fellowship: up to full scholarship; 1450+ SAT + leadership" },
      { name: "KREA University",               tier: "Target", req: 82, sat: 1400, satRequired: "Yes", deadline: "Oct–Apr",          cost: "₹12L/yr", admissionMode: "Holistic + Interview + SAT", scholarshipStrength: "25–100% merit scholarship; 1400+ SAT" },
      { name: "St. Stephen's College (CUET)",  tier: "Reach",  req: 95, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹60k/yr", admissionMode: "CUET score + Interview", scholarshipStrength: "95%+ CUET percentile" },
      { name: "Shiv Nadar University",         tier: "Target", req: 80, sat: 1350, satRequired: "Yes", deadline: "Dec–May",          cost: "₹7L/yr",  admissionMode: "SAT / SNUSAT + Interview", scholarshipStrength: "Merit based; 1350+ SAT" },
    ],
  },
  Japan: {
    default: [
      { name: "University of Tokyo", tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 31", cost: "¥600k/yr",  admissionMode: "Academic record + Japanese/English + entrance exam", scholarshipStrength: "MEXT scholarship: full coverage" },
      { name: "Waseda University",   tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥1.4M/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "Waseda Scholarship: partial; 80%+ boards + IELTS 6.5+" },
      { name: "Ritsumeikan Univ.",   tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "¥1.1M/yr", admissionMode: "Academic record + JLPT / IELTS", scholarshipStrength: "Partial scholarship; 70%+ boards" },
    ],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getUnisForCountry(country: Country, stream: Stream): University[] {
  const db = UNI_DB[country];
  if (!db) return [];
  return (db[stream] ?? db["default"] ?? []).map((u) => ({ ...u, country }));
}

export function getAllRecommendedUnis(countries: Country[], stream: Stream): University[] {
  return countries.flatMap((c) => getUnisForCountry(c, stream));
}

export function calcChance(uniReq: number, score: number) {
  const diff = score - uniReq;
  if (diff >= 10)  return { label: `${Math.min(90, 70 + diff)}%`, cls: "high"   as const };
  if (diff >= 0)   return { label: `${50 + diff * 2}%`,           cls: "medium" as const };
  if (diff >= -10) return { label: `${Math.max(15, 45 + diff * 2)}%`, cls: "medium" as const };
  return { label: `${Math.max(5, 30 + diff * 1.5).toFixed(0)}%`,  cls: "low"    as const };
}

export function scoreLabel(s: number): string {
  if (s >= 90) return "Excellent";
  if (s >= 80) return "Strong";
  if (s >= 70) return "Good";
  if (s >= 60) return "Average";
  return "Needs work";
}

export function showVisaTab(country: Country): boolean {
  return !NO_VISA_COUNTRIES.includes(country);
}

export function showExamForContext(examId: string, country: Country): boolean {
  if (country === "India" && INDIA_SKIP_EXAMS.includes(examId)) return false;
  return true;
}