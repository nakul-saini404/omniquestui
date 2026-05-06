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
  // NEW: precise timeline months (0-indexed, 0 = Jan)
  examStartMonth?: number;       // month exams/tests begin
  admissionOpenMonth?: number;   // month applications open
  resultMonth?: number;          // month results/offers released
}

// ─── Flags ────────────────────────────────────────────────────────────────────

export const COUNTRY_FLAGS: Record<Country, string> = {
  USA: "🇺🇸", UK: "🇬🇧", Canada: "🇨🇦", Australia: "🇦🇺",
  Germany: "🇩🇪", Netherlands: "🇳🇱", Singapore: "🇸🇬", Japan: "🇯🇵", India: "🇮🇳",
};

export const NO_VISA_COUNTRIES: Country[] = ["India"];
export const INDIA_SKIP_EXAMS = ["ucat", "sat", "ielts", "toefl", "tmua", "esat", "lnat", "gre", "mcat", "bmat"];

// ─── PrepPhase ────────────────────────────────────────────────────────────────

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

export interface ExamTimelineItem {
  month: string;
  action: string;
}

export interface UniAdmissionEvent {
  month: string;
  monthIndex: number;
  year: number;
  title: string;
  description: string;
  type: "open" | "deadline" | "result" | "exam" | "visa" | "travel";
  urgent: boolean;
}

export interface UniExamRequirement {
  examName: string;
  examIcon: string;
  required: "Mandatory" | "Recommended" | "Optional" | "Not Required";
  minScore: string;
  note: string;
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
  prepTips: string[];
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
        { label: "Month 1 — Diagnosis", focus: "Find your baseline. Understand the exam format.", tasks: ["Take 1 full official practice test under timed conditions", "Score and categorise every error: careless mistake / concept gap / time pressure", "Create a subject-weakness log"] },
        { label: "Month 2–3 — Foundation Building", focus: "Plug concept gaps. Build Math accuracy first.", tasks: ["Math: work through all SAT Math modules — Algebra, Problem Solving, Advanced Math, Geometry", "Reading & Writing: practise 5 passages daily", "Every error → note the sub-topic → revisit"] },
        { label: "Month 4 — Speed + Accuracy", focus: "Timed section practice. Reduce careless errors.", tasks: ["Take 1 full timed mock test every 2 weeks", "Math: complete 20 drill problems under 15 minutes", "Track your score trend"] },
        { label: "Month 5–6 — Test Simulation & Peak", focus: "Full test conditions. Maintain consistency. Register for exam.", tasks: ["Take 1 full mock test every weekend", "Register for Aug 23 test at sat.collegeboard.org", "Final week: only review your personal error log"] },
      ],
      subjectFocus: [
        { subject: "Math (800 points)", weight: "55% of prep time", topics: ["Linear equations & inequalities", "Systems of equations", "Quadratic equations", "Exponential functions", "Geometry", "Data analysis & statistics"] },
        { subject: "Reading & Writing (800 points)", weight: "45% of prep time", topics: ["Central idea and details", "Command of evidence", "Words in context", "Text structure", "Rhetorical synthesis", "Boundaries (grammar)"] },
      ],
      resources: [
        { name: "EduQuest SAT Prep Programme", type: "Paid", link: "https://eduquest.org.in" },
        { name: "College Board Official SAT Practice Tests", type: "Official", link: "https://sat.collegeboard.org/practice" },
        { name: "The College Panda SAT Math (book)", type: "Paid" },
        { name: "Erica Meltzer's SAT Reading (book)", type: "Paid" },
      ],
      commonMistakes: [
        "Starting with full tests before understanding why you're getting questions wrong",
        "Not practising the digital adaptive format",
        "PCM students neglecting Reading & Writing — Math alone cannot get you to 1400+",
        "Not registering early — Indian SAT centres fill within 24–48 hours",
      ],
      eduquestNote: "EduQuest runs India's most stream-specific SAT preparation programme.",
      eduquestCTA: "Join EduQuest SAT Batch →",
    },
    timeline2026: [
      { month: "Jan–Apr 2026", action: "Start prep with EduQuest SAT batch. Take diagnostic test in week 1." },
      { month: "May–Jul 2026", action: "Section-specific drilling. 1 full mock every 2 weeks." },
      { month: "Aug 23, 2026", action: "SAT first attempt. Results in ~2 weeks." },
      { month: "Oct 4, 2026", action: "SAT retake if Aug score below target." },
      { month: "Nov 1, 2026", action: "SAT retake (last practical attempt for Nov 15 ED deadlines)." },
      { month: "Dec 6, 2026", action: "Final SAT sitting before Jan 2027 application deadlines." },
    ],
    timeline2027: [
      { month: "Jan–Jun 2027", action: "Start SAT prep for Fall 2028 intake." },
      { month: "Jul–Aug 2027", action: "Intensive prep. 1 full mock weekly." },
      { month: "Aug 2027", action: "First SAT attempt for 2028 intake." },
      { month: "Oct–Nov 2027", action: "Retake if needed." },
      { month: "Dec 2027", action: "Final sitting for 2028 intake applications." },
    ],
    eduquestNote: "EduQuest offers structured SAT preparation with separate tracks for PCM, PCB, Commerce, and Humanities students.",
  },

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
      "Score valid for 2 years",
      "Computer-delivered IELTS gives results in 3–5 days",
    ],
    requiredFor: ["All UK universities (IELTS for UKVI Academic for visa)", "University of Toronto", "UBC Vancouver", "McGill", "Univ. of Melbourne", "UNSW Sydney", "NUS Singapore", "NTU Singapore", "TU Delft", "University of Amsterdam"],
    optionalFor: ["Some universities waive for English-medium CBSE/ISC schools (verify per university)"],
    notRequiredFor: ["Germany (not required)", "Japan (separate requirements)", "India (not required for domestic admissions)"],
    howToApply: "Visit ielts.idp.com or britishcouncil.in. Select 'IELTS Academic'. For UK universities: select 'IELTS for UKVI Academic'. Choose city and date. Pay ~₹17,000. Bring Passport on exam day.",
    prepTips: [
      "Register for EduQuest's IELTS batch — stream-specific prep with essay grading",
      "EduQuest Writing Task 2 coaching and Speaking mocks with British Council-trained teachers.",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "7.0+ overall for most universities; 7.5+ for Oxford/Cambridge/Medicine",
      dailyRoutine: "1.5 hrs daily on weekdays. 3 hrs on weekends. Prioritise Writing and Speaking.",
      phases: [
        { label: "Week 1–2 — Baseline Diagnosis", focus: "Know exactly where you stand.", tasks: ["Take 1 full official IELTS mock test", "Score each section honestly", "Choose Computer-Delivered IELTS for faster results"] },
        { label: "Month 1 — Writing Intensive", focus: "Writing is where bands are won or lost.", tasks: ["Writing Task 2: Write 1 essay daily", "Writing Task 1: Practise graphs, charts, maps", "Get essays checked by teacher per week"] },
        { label: "Month 2 — Listening & Reading", focus: "Score 7.0+ in both objective sections.", tasks: ["Listening: Do 1 full section daily", "Reading: Do 1 full section every 2 days", "Practise True/False/Not Given questions carefully"] },
        { label: "Month 3 — Speaking + Mock Tests", focus: "Speaking can be improved quickly.", tasks: ["Speaking Part 1: prepare 15–20 topic areas", "Speaking Part 2: practise 1 cue card per day", "Take 2 full mock tests in the final 3 weeks"] },
      ],
      subjectFocus: [
        { subject: "Writing (25%)", weight: "40% of total prep time", topics: ["Task 2 essay structure", "Task 1 graph/chart description", "Coherence and cohesion", "Lexical resource"] },
        { subject: "Speaking (25%)", weight: "25% of total prep time", topics: ["Fluency", "Pronunciation", "Lexical resource", "Coherence"] },
        { subject: "Reading (25%)", weight: "20% of total prep time", topics: ["True/False/Not Given", "Matching headings", "Summary completion"] },
        { subject: "Listening (25%)", weight: "15% of total prep time", topics: ["Section 3 & 4 (academic)", "Spelling accuracy", "Prediction from questions"] },
      ],
      resources: [
        { name: "EduQuest IELTS Preparation Programme", type: "Paid", link: "https://eduquest.org.in" },
        { name: "Cambridge IELTS Books 13–18 (official practice tests)", type: "Official" },
        { name: "IELTS.org Official Sample Tests", type: "Official", link: "https://www.ielts.org" },
      ],
      commonMistakes: [
        "Booking regular IELTS instead of IELTS for UKVI Academic for UK Student Visa",
        "Not practising Writing under timed conditions",
        "Speaking in short sentences instead of extended answers",
      ],
      eduquestNote: "EduQuest runs India's most stream-specific IELTS preparation.",
      eduquestCTA: "Join EduQuest IELTS Batch →",
    },
    timeline2026: [
      { month: "Jan–May 2026", action: "Begin IELTS prep. Take diagnostic mock test. Focus on Writing Task 2 daily." },
      { month: "Jun–Jul 2026", action: "First IELTS attempt. Computer-delivered recommended." },
      { month: "Aug–Sep 2026", action: "Retake if below target band." },
      { month: "Oct 2026", action: "Final retake window for January 2027 deadlines." },
    ],
    timeline2027: [
      { month: "Jan–May 2027", action: "Begin IELTS prep for 2028 intake." },
      { month: "Jun–Jul 2027", action: "First attempt. Aim to complete by July for retake headroom." },
      { month: "Aug–Oct 2027", action: "Retake if needed." },
    ],
    eduquestNote: "EduQuest runs stream-specific IELTS prep sessions with official band-descriptor-based essay grading.",
  },

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
    prepTime: "3–4 months",
    registrationWindow: "Opens May each year. Exam window: Jul–Sep. Register at ucat.ac.uk",
    examWindow: "July–September (for Oct 15 UK UCAS Medicine deadline)",
    applyLink: "https://www.ucat.ac.uk",
    benefits: [
      "Mandatory for UK Medical schools — no UCAT means you cannot apply to most UK Medicine programmes",
      "UCAS Medicine deadline is October 15 — UCAT must be completed BEFORE this date",
      "A 2900+ UCAT score significantly differentiates you among thousands of Medicine applicants",
      "SJT Band 1 is as important as the overall score for MMI interview selection",
    ],
    requiredFor: ["Edinburgh Medicine (2900+ competitive)", "King's College London Medicine (2800+)", "Manchester Medicine (2700+)", "Newcastle Medicine (2650+)", "Queen Mary BLSA Medicine (2600+)", "Univ. of Melbourne Medicine (UCAT ANZ)", "Monash Medicine (UCAT ANZ)"],
    optionalFor: [],
    notRequiredFor: ["Cambridge Medicine (uses ESAT)", "Oxford Medicine (uses TSA)", "US Medical schools (use MCAT)"],
    howToApply: "Register at ucat.ac.uk in May. Select Pearson VUE test centre in India. Pay ~£115. Results available same day.",
    prepTips: [
      "Join EduQuest's Medical pathway programme — weekly UCAT mock tests covering all 5 sections",
      "EduQuest Medical counsellors have guided students to Edinburgh, KCL, and Manchester Medicine offers.",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "2700+ overall; 2900+ for Edinburgh/KCL; SJT Band 1 is equally critical",
      dailyRoutine: "2 hrs daily from April onward. Increase to 3 hrs daily in July.",
      phases: [
        { label: "Month 1 (April) — Section Fundamentals", focus: "Learn each section's question types.", tasks: ["Verbal Reasoning: 20 passages daily", "Abstract Reasoning: 30 pattern sets daily", "SJT: read GMC Good Medical Practice document"] },
        { label: "Month 2 (May–June) — Speed Drills", focus: "UCAT is fundamentally a speed test.", tasks: ["Verbal Reasoning: target under 30 seconds per question", "Take 1 timed UCAT mock per week", "SJT: practise 15 clinical scenarios per session"] },
        { label: "Month 3 (July–Aug) — Full Simulation", focus: "Full-length simulations. Test strategy.", tasks: ["Take 1 full 2-hour UCAT simulation every 4–5 days", "Complete at least 600 questions across all sections", "SJT: aim for Band 1 consistently"] },
      ],
      subjectFocus: [
        { subject: "Verbal Reasoning (44 Q / 21 min)", weight: "30% of prep time", topics: ["True/False/Can't Tell from text", "Keyword scanning", "Inference questions"] },
        { subject: "Abstract Reasoning (50 Q / 12 min)", weight: "25% of prep time", topics: ["Series patterns", "Type patterns", "Odd one out"] },
        { subject: "Quantitative Reasoning (36 Q / 25 min)", weight: "20% of prep time", topics: ["Percentages and ratios", "Speed/distance/time", "Graph interpretation"] },
        { subject: "Decision Making (29 Q / 31 min)", weight: "15% of prep time", topics: ["Syllogisms", "Venn diagrams", "Logical puzzles"] },
        { subject: "SJT (66 Q / 26 min)", weight: "10% of prep time", topics: ["GMC Good Medical Practice", "Patient safety first", "Confidentiality"] },
      ],
      resources: [
        { name: "EduQuest Medical Pathway Programme", type: "Paid", link: "https://eduquest.org.in" },
        { name: "UCAT Official Practice", type: "Official", link: "https://www.ucat.ac.uk/ucat/practice-tests/" },
      ],
      commonMistakes: [
        "Starting UCAT prep in June — you need at least 3 months",
        "Using prior medical knowledge in Verbal Reasoning",
        "Underestimating SJT — a Band 4 SJT kills your application",
      ],
      eduquestNote: "EduQuest Medical counsellors have guided students to Edinburgh, KCL, and Manchester Medicine offers.",
      eduquestCTA: "Book Medical Counselling Session →",
    },
    timeline2026: [
      { month: "Apr 2026", action: "Begin UCAT preparation. Take diagnostic." },
      { month: "May 2026", action: "Register at ucat.ac.uk when registration opens." },
      { month: "Jun–Jul 2026", action: "Intensive prep: 2+ hrs daily. Weekly mocks begin." },
      { month: "Jul–Sep 2026", action: "Sit UCAT exam. Results same day." },
      { month: "Oct 15, 2026", action: "UCAS Medicine applications deadline." },
    ],
    timeline2027: [
      { month: "Apr 2027", action: "Start UCAT prep for 2028 Medical intake." },
      { month: "Jul–Sep 2027", action: "Sit UCAT exam." },
      { month: "Oct 15, 2027", action: "UCAS Medicine deadline for 2028 entry." },
    ],
    eduquestNote: "EduQuest Medical counsellors have guided students to Edinburgh, KCL, and Manchester Medicine offers.",
  },

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
    examWindow: "October–November",
    applyLink: "https://www.admissionstesting.org/tmua",
    benefits: [
      "Cambridge Maths, CS, Economics, Engineering — no TMUA = no interview",
      "LSE Economics: 6.5+ can be the deciding factor",
      "Warwick Maths/Economics: 6.0+ differentiates applicants with identical predicted grades",
    ],
    requiredFor: ["Cambridge University — Maths (mandatory)", "Cambridge University — CS (mandatory)", "Cambridge University — Economics (mandatory)"],
    optionalFor: ["LSE — Economics (beneficial, 6.5+)", "Warwick — Maths (beneficial, 6.0+)"],
    notRequiredFor: ["Imperial College (uses ESAT instead)", "UCL (no TMUA)", "All non-UK universities"],
    howToApply: "Create account at admissionstesting.org. Select India test centre. Pay ~£75. No calculator permitted. Bring Passport as ID.",
    prepTips: [
      "Join EduQuest's UK Maths preparation — fills the CBSE-to-A-level gap in 8–10 focused weeks",
      "EduQuest students targeting Cambridge Economics and CS consistently score 6.5–7.5.",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "6.5+ for Cambridge; 7.0+ is exceptional. Scoring is relative — top 25% nationally.",
      dailyRoutine: "2 hrs daily from April. Increase to 3 hrs daily from August.",
      phases: [
        { label: "Month 1 — A-Level Gap Analysis", focus: "Identify and fill CBSE-to-A-level gaps.", tasks: ["Download TMUA specification", "Complete all past TMUA Paper 1 questions", "Topics missing from CBSE: proof by induction, complex numbers, matrices"] },
        { label: "Month 2 — Paper 2 Reasoning", focus: "Paper 2 is unlike anything in CBSE.", tasks: ["Paper 2: evaluate mathematical arguments", "Study formal mathematical logic", "Every week: 1 timed Paper 1 + 1 timed Paper 2"] },
        { label: "Month 3 — Simulation & Registration", focus: "Full timed simulations. Register in August.", tasks: ["Register at admissionstesting.org in August immediately", "Take 1 full TMUA simulation every week", "Final 2 weeks: focus only on Paper 2 reasoning"] },
      ],
      subjectFocus: [
        { subject: "Paper 1 — Mathematical Knowledge (20 MCQ, 75 min)", weight: "50%", topics: ["Algebra and functions", "Calculus", "Trigonometry", "Proof", "Statistics and probability", "Complex numbers"] },
        { subject: "Paper 2 — Mathematical Reasoning (20 MCQ, 75 min)", weight: "50%", topics: ["Identifying valid mathematical arguments", "Spotting errors in proofs", "Formal deductive reasoning"] },
      ],
      resources: [
        { name: "EduQuest UK Maths Preparation Programme", type: "Paid", link: "https://eduquest.org.in" },
        { name: "TMUA Past Papers (admissionstesting.org)", type: "Official", link: "https://www.admissionstesting.org" },
        { name: "Cambridge STEP I Past Papers (free)", type: "Free", link: "https://www.maths.cam.ac.uk" },
      ],
      commonMistakes: [
        "Starting prep in September — only 6 weeks before the October exam",
        "Focusing only on Paper 1 and ignoring Paper 2 reasoning",
        "Not registering in August — India slots fill within 48 hours",
      ],
      eduquestNote: "EduQuest's UK pathway specialists have guided students applying to Cambridge Economics, CS, and Maths.",
      eduquestCTA: "Book EduQuest UK Maths Session →",
    },
    timeline2026: [
      { month: "Apr–Jun 2026", action: "Begin EduQuest UK Maths batch. Identify A-level content gaps." },
      { month: "Jul–Aug 2026", action: "Complete all past TMUA Paper 1 papers timed." },
      { month: "Aug 2026", action: "Register for TMUA at admissionstesting.org — slots fill fast." },
      { month: "Sep–Oct 2026", action: "TMUA Paper 2 prep. 3 proctored simulations." },
      { month: "Oct–Nov 2026", action: "TMUA exam. Scores auto-sent to UCAS universities." },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027", action: "Begin TMUA prep for 2028 Cambridge/LSE/Warwick intake." },
      { month: "Aug 2027", action: "Register for TMUA." },
      { month: "Oct–Nov 2027", action: "Sit TMUA exam." },
    ],
    eduquestNote: "EduQuest's UK specialists fill the CBSE-to-A-level Maths gap for TMUA in 8–10 weeks.",
  },

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
      "Cambridge Engineering/Natural Sciences — no ESAT = no interview (hard gate)",
      "Imperial Engineering/Science — ESAT is the primary academic filter",
      "Top-25-percentile ESAT essentially guarantees a Cambridge interview",
    ],
    requiredFor: ["Cambridge University — Engineering (mandatory)", "Cambridge University — Natural Sciences (mandatory)", "Imperial College London — Engineering (mandatory)", "Imperial College London — Science (mandatory)"],
    optionalFor: [],
    notRequiredFor: ["UCL (no ESAT)", "Edinburgh (no ESAT)", "All non-UK universities"],
    howToApply: "Create account at admissionstesting.org. Select ESAT. Choose modules: Engineering → Physics + Chemistry; Natural Sciences → Biology + Chemistry. Pay ~£75.",
    prepTips: [
      "Join EduQuest's ESAT programme — A-level Physics, Chemistry, Biology depth for CBSE/ISC students",
      "EduQuest students applying to Cambridge Engineering and Imperial consistently score in the top 25 percentile.",
    ],
    prepPlan: {
      totalMonths: 4,
      targetScore: "Top 25 percentile nationally — no fixed cutoff.",
      dailyRoutine: "2–3 hrs daily from June. 4 full simulations in October.",
      phases: [
        { label: "Month 1 — Module Selection + Gap Analysis", focus: "Choose your modules. Understand A-level depth.", tasks: ["Decide modules: Engineering → Maths + Physics + Chemistry", "Download ESAT specimen papers from admissionstesting.org", "ESAT is significantly harder than CBSE 12th standard"] },
        { label: "Month 2 — Content Building", focus: "Fill A-level content gaps.", tasks: ["Physics: A-level Mechanics, Waves, Electricity, Fields", "Chemistry: organic mechanisms, Equilibria, Electrochemistry", "Use past ENGAA papers for Physics content practice"] },
        { label: "Month 3 — Timed Section Practice", focus: "Speed under pressure.", tasks: ["Register for ESAT at admissionstesting.org in August immediately", "Take 1 full 3-section timed practice every week", "All sections: flag after 60 seconds and continue"] },
        { label: "Month 4 — Full Simulation + Exam", focus: "Full exam simulations. Final review.", tasks: ["Take 2 complete ESAT full simulations in October", "Final 10 days: review personal error log only", "Exam day: Part 1 Maths first — mandatory for all"] },
      ],
      subjectFocus: [
        { subject: "Part 1 — Mathematics (mandatory)", weight: "Mandatory for all", topics: ["Algebra and functions", "Calculus", "Coordinate geometry", "Trigonometry", "Vectors"] },
        { subject: "Part 2 — Physics (Engineering)", weight: "40% of Engineering prep", topics: ["Mechanics", "Waves", "Electricity and magnetism", "Fields", "Optics"] },
        { subject: "Part 3 — Chemistry", weight: "30% of prep", topics: ["Organic reaction mechanisms", "Equilibria", "Electrochemistry", "Energetics"] },
      ],
      resources: [
        { name: "EduQuest ESAT Preparation Programme", type: "Paid", link: "https://eduquest.org.in" },
        { name: "ESAT Specimen Papers (admissionstesting.org)", type: "Official", link: "https://www.admissionstesting.org/esat" },
        { name: "Past ENGAA Papers 2016–2023 (free)", type: "Free", link: "https://www.undergraduate.study.cam.ac.uk" },
      ],
      commonMistakes: [
        "Using only CBSE 12th content — ESAT is A-level depth",
        "Not registering in August — India slots fill within 48 hours",
        "Spending too long on any single question — 89 seconds per question max",
      ],
      eduquestNote: "EduQuest has guided students applying to Cambridge Engineering and Imperial through ESAT.",
      eduquestCTA: "Book EduQuest ESAT Session →",
    },
    timeline2026: [
      { month: "Apr–Jun 2026", action: "Begin ESAT batch. Decide modules. Identify A-level content gaps." },
      { month: "Jul–Sep 2026", action: "A-level content study + past ENGAA/NSAA papers daily." },
      { month: "Aug 2026", action: "Register for ESAT immediately when registration opens." },
      { month: "Sep–Oct 2026", action: "Full timed ESAT simulations." },
      { month: "Oct–Nov 2026", action: "ESAT exam. Results auto-sent to Cambridge and Imperial." },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027", action: "Begin ESAT prep for 2028 Cambridge/Imperial intake." },
      { month: "Aug 2027", action: "Register immediately when registration opens." },
      { month: "Oct–Nov 2027", action: "Sit ESAT for 2028 intake." },
    ],
    eduquestNote: "EduQuest ESAT programme covers A-level Physics, Chemistry, Biology depth for CBSE/ISC students.",
  },

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
      "Every single US university accepts TOEFL — broadest acceptance in the US",
      "Home Edition identical in validity — convenient for students outside major cities",
      "MIT and some schools slightly prefer TOEFL over IELTS",
      "Results in 4–6 days — fast turnaround",
    ],
    requiredFor: ["All US universities (100+ iBT at competitive schools)", "All Canadian universities (90–100+)", "Most Australian universities (79–94+)", "Cambridge/Oxford (110+ as IELTS alternative)"],
    optionalFor: ["UK universities that accept TOEFL as alternative to IELTS"],
    notRequiredFor: ["Germany", "Netherlands (IELTS preferred)", "Singapore (IELTS preferred)", "India"],
    howToApply: "Create account at ets.org/toefl. Choose Test Centre or Home Edition. Select date. Add 4 free score recipients. Pay ~$185.",
    prepTips: [
      "Register for EduQuest's TOEFL batch — Integrated Writing, Listening note-taking, and Speaking template training",
      "EduQuest students score 100–110+ within 3 months.",
    ],
    prepPlan: {
      totalMonths: 3,
      targetScore: "100+ iBT for most US/Canada; 110+ for Ivy/top-10 US",
      dailyRoutine: "1.5 hrs daily. Full test every 2 weeks in month 3.",
      phases: [
        { label: "Month 1 — Format Familiarisation", focus: "TOEFL integrated tasks are unique.", tasks: ["Take 1 full TOEFL diagnostic", "Reading: 2 academic passages daily", "Note differences from IELTS: Integrated tasks"] },
        { label: "Month 2 — Section Intensive", focus: "Each section requires a different strategy.", tasks: ["Speaking: templates for all 4 task types", "Integrated Writing: intro + 3 body paragraphs contrasting reading with lecture", "Listening: practise noting signal words"] },
        { label: "Month 3 — Full Tests + Registration", focus: "Full test simulation period.", tasks: ["Book TOEFL at ets.org/toefl", "Take 1 full practice test every week", "Home Edition: test setup at least 3 days before exam"] },
      ],
      subjectFocus: [
        { subject: "Reading (35 min)", weight: "25%", topics: ["Main idea and purpose", "Vocabulary in context", "Prose summary (worth 2 points each)"] },
        { subject: "Listening (36 min)", weight: "25%", topics: ["Main idea of lecture", "Supporting details", "Note-taking accuracy"] },
        { subject: "Speaking (17 min, AI-scored)", weight: "25%", topics: ["Task 1: Personal preference", "Task 2–4: Integrated (read+listen+speak)"] },
        { subject: "Writing (29 min)", weight: "25%", topics: ["Integrated Writing (contrast reading with lecture)", "Writing for Academic Purposes (opinion + support)"] },
      ],
      resources: [
        { name: "EduQuest TOEFL Preparation Programme", type: "Paid", link: "https://eduquest.org.in" },
        { name: "ETS Official TOEFL Practice Tests (TPO)", type: "Official", link: "https://www.ets.org/toefl" },
      ],
      commonMistakes: [
        "Confusing TOEFL Integrated Writing with IELTS Task 2 — never include your opinion in Integrated Writing",
        "Not testing the Home Edition setup before exam day",
        "Not taking full timed practice tests",
      ],
      eduquestNote: "EduQuest offers TOEFL-specific coaching with stream-based preparation.",
      eduquestCTA: "Join EduQuest TOEFL Batch →",
    },
    timeline2026: [
      { month: "Jan–Apr 2026", action: "Start TOEFL prep. Take diagnostic. EduQuest helps you decide TOEFL vs IELTS." },
      { month: "May–Jun 2026", action: "Intensive prep on weakest sections. 1 full mock per week." },
      { month: "Jun–Jul 2026", action: "Sit TOEFL first attempt. Results in 4–6 days." },
      { month: "Sep–Oct 2026", action: "Retake window for Jan 2027 deadlines if needed." },
    ],
    timeline2027: [
      { month: "Jan–May 2027", action: "Start TOEFL prep for 2028 intake." },
      { month: "Jun–Jul 2027", action: "First attempt." },
    ],
    eduquestNote: "EduQuest TOEFL coaching is stream-specific.",
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
    eligibility: "Indian citizen under 30. Strong academics (85%+). Exceptional extracurriculars and demonstrated social impact.",
    howToApply: "Apply at inlaksfoundation.org. Submit academic records, essays, and 2 reference letters.",
    tips: ["Show clear social impact", "Connect career plan to India's development needs", "Strong references from teachers"],
    link: "https://www.inlaksfoundation.org",
  },
  {
    name: "JN Tata Endowment for Higher Education",
    amount: "₹4–10 lakh (loan scholarship)",
    countries: ["USA", "UK", "Canada", "Australia", "Germany"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Life Sciences / Biotech"],
    deadline: "December–January each year",
    eligibility: "Indian citizen. Must have secured admission to a recognised foreign university.",
    howToApply: "Apply at jntataendowment.org after securing university admission.",
    tips: ["Must have university admission in hand before applying", "Essay asks about your contribution to India after degree"],
    link: "https://www.jntataendowment.org",
  },
  {
    name: "DAAD Scholarship (Germany)",
    amount: "€934/month living + tuition fee waiver",
    countries: ["Germany"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Engineering (Mechanical / Civil / EE)", "Life Sciences / Biotech", "Computer Science / AI / Data Science", "Liberal Arts / Humanities", "Business / Economics"],
    deadline: "October–November for following academic year",
    eligibility: "Strong academics (80%+). Research motivation letter.",
    howToApply: "Apply at daad.de/en. Submit motivation letter, transcripts, 2 academic references.",
    tips: ["Motivation letter is the most important document", "DAAD rewards students with a clear research agenda"],
    link: "https://www.daad.de/en",
  },
  {
    name: "Lester B. Pearson International Scholarship (UoT)",
    amount: "Full tuition + living for 4 years (~C$200,000 total)",
    countries: ["Canada"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities"],
    deadline: "November (with UoT application)",
    eligibility: "Exceptional international students. Must be nominated by your school.",
    howToApply: "Your school must nominate you at the time of applying to UoT.",
    tips: ["School nomination is critical — speak to your principal early", "Essays must show intellectual curiosity beyond school subjects"],
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
    howToApply: "Apply to UBC by January 15 and complete personal profile essays. Scholarship is awarded automatically.",
    tips: ["Personal profile essays are the scholarship application", "Demonstrate what makes you distinctly you"],
    link: "https://you.ubc.ca/financial-planning/scholarships-awards",
  },
  {
    name: "Ashoka University Fellowship (India)",
    amount: "Up to 100% tuition scholarship",
    countries: ["India"],
    streams: ["Commerce", "Humanities", "Undecided"],
    careers: ["Liberal Arts / Humanities", "Business / Economics", "Law / Political Science", "Media / Communications"],
    deadline: "October–April (multiple rounds)",
    eligibility: "Strong academic record (85%+). SAT 1450+ significantly strengthens scholarship applications.",
    howToApply: "Apply at ashoka.edu.in. Multiple application rounds.",
    tips: ["SAT 1450+ is strongly recommended", "Apply in Round 1 (October) for highest scholarship probability"],
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
    applyFrom: "Apply after receiving I-20 (May–June for Fall intake). Book appointment immediately.",
    keyDeadlines: "Accept offer May 1 → I-20 issued → Book F-1 slot immediately → Interview June–July → Fly August",
    requiredDocuments: ["Form I-20", "DS-160 online form", "SEVIS I-901 fee receipt ($350)", "Valid passport", "Bank statements (2 years tuition + $10k/yr living)", "University admission letter", "Academic transcripts"],
    financialRequirement: "Bank statements showing 2 years tuition + $10,000–$15,000/yr living expenses.",
    interviewRequired: true,
    interviewTips: ["Be clear about course name, university, degree duration, career plan", "Show strong ties to India", "Answer only what is asked", "Dress formally"],
    tips: ["Book visa appointment same day as I-20", "Pay SEVIS ($350) at fmjfee.com same day as I-20", "OPT after graduation: 12 months (36 months STEM)"],
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
    tips: ["CRITICAL: IELTS for UKVI Academic — NOT standard IELTS", "28 consecutive days bank balance", "Graduate Route after graduation: 2 years open work (3 for PhD)"],
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
    keyDeadlines: "Accept offer → CoE issued → Purchase OSHC → Apply via ImmiAccount → Health exam → Grant",
    requiredDocuments: ["CoE", "OSHC certificate", "Passport", "Financial evidence", "IELTS/TOEFL", "GTE statement", "Transcripts"],
    financialRequirement: "Tuition + AUD 24,505/yr living + return airfare + OSHC.",
    interviewRequired: false,
    interviewTips: [],
    tips: ["GTE statement is the most critical document", "Purchase OSHC BEFORE applying", "Subclass 485 after graduation: 2–4 years open work"],
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
  },
  {
    country: "Germany",
    visaType: "National Visa (Type D) for Study",
    processingTime: "6–12 weeks",
    cost: "~€75",
    triggerDocument: "Unconditional admission letter + Sperrkonto (€11,208)",
    applyFrom: "Apply for APS FIRST (3+ months before appointment). Then admission → Sperrkonto → Consulate.",
    keyDeadlines: "APS 3+ months early → Admission → Sperrkonto → Book consulate → Interview → Fly Sep",
    requiredDocuments: ["APS Certificate (MANDATORY)", "Unconditional admission letter", "Sperrkonto proof (€11,208)", "Passport", "Health insurance", "Language certificate", "10th+12th certificates with translations"],
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

// ─── UNI_DB ───────────────────────────────────────────────────────────────────
// Fields: examStartMonth (0=Jan), admissionOpenMonth, resultMonth

type UniDB = Partial<Record<Stream | "default", University[]>>;

export const UNI_DB: Record<Country, UniDB> = {

  // ══════════════════════════════════════════════════════════════════════════
  // USA
  // Exam prep: Jan (month 0) | Apps open: Aug (7) | Results: Mar-Apr (2-3)
  // ══════════════════════════════════════════════════════════════════════════
  USA: {
    "Science (PCM)": [
      { name: "MIT",                      tier: "Reach",  req: 95, sat: 1560, satRequired: "Recommended", deadline: "Jan 1",  cost: "$58k/yr", admissionMode: "Holistic + Essays + Recs + Activities", scholarshipStrength: "Need-blind for internationals; 1550+ SAT + outstanding research profile", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Stanford University",      tier: "Reach",  req: 95, sat: 1550, satRequired: "Recommended", deadline: "Jan 2",  cost: "$59k/yr", admissionMode: "Holistic + Essays + Recs (3 recs)", scholarshipStrength: "Need-blind; 1540+ SAT + remarkable research/leadership story", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "California Institute of Technology", tier: "Reach", req: 96, sat: 1570, satRequired: "Recommended", deadline: "Jan 3", cost: "$57k/yr", admissionMode: "Holistic + Essays + Research record", scholarshipStrength: "Need-blind for US + international; 1570+ SAT + exceptional STEM record", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Carnegie Mellon",          tier: "Reach",  req: 90, sat: 1510, satRequired: "Recommended", deadline: "Jan 1",  cost: "$57k/yr", admissionMode: "Holistic + Portfolio (CS/Eng)", scholarshipStrength: "Merit & need-based; 1500+ SAT + strong project portfolio", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Georgia Tech",             tier: "Reach",  req: 88, sat: 1470, satRequired: "Recommended", deadline: "Jan 1",  cost: "$33k/yr", admissionMode: "Holistic + Essays + Activities", scholarshipStrength: "Faculty Honors award $5k–$10k for 1450+ SAT + 90%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Purdue University",        tier: "Target", req: 80, sat: 1390, satRequired: "Yes",         deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "Grades + SAT / ACT score", scholarshipStrength: "Automatic merit awards $3k–$10k/yr for 1350+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "UT Austin",                tier: "Target", req: 78, sat: 1370, satRequired: "Recommended", deadline: "Dec 1",  cost: "$25k/yr", admissionMode: "Holistic + Essays (out-of-state)", scholarshipStrength: "Competitive merit aid for 1400+ SAT + top GPA", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Illinois UC",     tier: "Target", req: 80, sat: 1400, satRequired: "Recommended", deadline: "Dec 1",  cost: "$35k/yr", admissionMode: "GPA + Essays + SAT optional", scholarshipStrength: "Merit aid $3k–$8k/yr for 1380+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Michigan",        tier: "Target", req: 85, sat: 1440, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Merit aid $5k–$15k/yr; 1430+ SAT + strong ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Virginia Tech",            tier: "Target", req: 76, sat: 1340, satRequired: "Optional",    deadline: "Jan 15", cost: "$34k/yr", admissionMode: "GPA + SAT optional + Essays", scholarshipStrength: "Presidential Scholarship $5k–$10k for 90%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Wisconsin",       tier: "Target", req: 80, sat: 1380, satRequired: "Recommended", deadline: "Feb 1",  cost: "$32k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards $3k–$10k/yr for 1350+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Arizona State Univ.",      tier: "Safety", req: 65, sat: 1230, satRequired: "Optional",    deadline: "Mar 1",  cost: "$18k/yr", admissionMode: "GPA-based + Test-optional", scholarshipStrength: "Merit scholarships up to $10k/yr for 1200+ SAT or 3.5+ GPA", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
      { name: "Penn State University",    tier: "Safety", req: 70, sat: 1270, satRequired: "Optional",    deadline: "Nov 30", cost: "$20k/yr", admissionMode: "GPA-based rolling + SAT optional", scholarshipStrength: "Schreyer Honors merit aid $10k+/yr for 1350+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
      { name: "Ohio State University",    tier: "Safety", req: 70, sat: 1280, satRequired: "Optional",    deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "GPA-based + optional essays", scholarshipStrength: "Merit aid $3k–$8k/yr for 1280+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
    ],
    "Science (PCB)": [
      { name: "Johns Hopkins",            tier: "Reach",  req: 95, sat: 1550, satRequired: "Recommended", deadline: "Jan 2",  cost: "$59k/yr", admissionMode: "Holistic + Essays + Research ECs", scholarshipStrength: "Need-blind; 1550+ SAT + research/clinical experience", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Duke University",          tier: "Reach",  req: 92, sat: 1530, satRequired: "Recommended", deadline: "Jan 2",  cost: "$60k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Need-based only; strong research ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Vanderbilt University",    tier: "Reach",  req: 90, sat: 1510, satRequired: "Recommended", deadline: "Jan 1",  cost: "$54k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Cornelius Vanderbilt: full tuition; 1520+ SAT + top 5% class", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Emory University",         tier: "Target", req: 82, sat: 1420, satRequired: "Recommended", deadline: "Jan 15", cost: "$55k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Emory Scholars: merit up to full tuition; 1450+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Case Western Reserve",     tier: "Target", req: 80, sat: 1400, satRequired: "Recommended", deadline: "Jan 15", cost: "$50k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Scholarship up to $25k/yr; 1380+ SAT + 90%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Tulane University",        tier: "Target", req: 78, sat: 1390, satRequired: "Recommended", deadline: "Jan 15", cost: "$58k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Deans Scholarship up to full tuition; strong SAT + ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Florida",         tier: "Target", req: 76, sat: 1360, satRequired: "Recommended", deadline: "Nov 1",  cost: "$22k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards; competitive for 1350+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
      { name: "Univ. of Arizona",         tier: "Safety", req: 65, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$17k/yr", admissionMode: "GPA-based automatic admission", scholarshipStrength: "Merit aid up to $7k/yr for 1200+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
      { name: "Michigan State Univ.",     tier: "Safety", req: 68, sat: 1240, satRequired: "Optional",    deadline: "Mar 15", cost: "$19k/yr", admissionMode: "GPA-based rolling + SAT optional", scholarshipStrength: "Merit aid $2k–$6k/yr; 1220+ SAT or 3.5+ GPA", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
    ],
    "Commerce": [
      { name: "Wharton (UPenn)",          tier: "Reach",  req: 95, sat: 1560, satRequired: "Recommended", deadline: "Jan 5",  cost: "$60k/yr", admissionMode: "Holistic + Essays + Recs + Interview", scholarshipStrength: "Need-blind; 1550+ SAT + elite leadership/business ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "NYU Stern",                tier: "Reach",  req: 88, sat: 1500, satRequired: "Recommended", deadline: "Jan 15", cost: "$57k/yr", admissionMode: "Holistic + Essays + Activities", scholarshipStrength: "Dean's Scholarship up to $20k/yr for 1480+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Univ. of Michigan Ross",   tier: "Target", req: 82, sat: 1440, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays (BBA direct admit)", scholarshipStrength: "Merit aid $5k–$15k/yr; 1400+ SAT + leadership ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Univ. of Texas McCombs",   tier: "Target", req: 80, sat: 1400, satRequired: "Recommended", deadline: "Dec 1",  cost: "$27k/yr", admissionMode: "Holistic + Essays + SAT optional", scholarshipStrength: "Merit aid $3k–$10k/yr; 1380+ SAT + leadership", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Indiana Univ. Kelley",     tier: "Target", req: 75, sat: 1370, satRequired: "Recommended", deadline: "Feb 15", cost: "$37k/yr", admissionMode: "GPA + SAT / optional + Essays", scholarshipStrength: "Automatic merit $3k–$8k/yr for 1300+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Wisconsin Biz",   tier: "Target", req: 76, sat: 1350, satRequired: "Recommended", deadline: "Feb 1",  cost: "$30k/yr", admissionMode: "GPA + SAT + Essays", scholarshipStrength: "Merit awards $3k–$8k/yr for 1330+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Nebraska",        tier: "Safety", req: 65, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$22k/yr", admissionMode: "GPA-based rolling admission", scholarshipStrength: "Merit aid up to $6k/yr for 3.5+ GPA", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
      { name: "Arizona State W. P. Carey",tier: "Safety", req: 68, sat: 1220, satRequired: "Optional",    deadline: "Mar 1",  cost: "$20k/yr", admissionMode: "GPA-based + SAT optional", scholarshipStrength: "Merit aid up to $8k/yr for 1200+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
    ],
    "Humanities": [
      { name: "Columbia University",      tier: "Reach",  req: 95, sat: 1550, satRequired: "Recommended", deadline: "Jan 1",  cost: "$62k/yr", admissionMode: "Holistic + CC Core + Essays + Recs", scholarshipStrength: "Need-blind; 1540+ SAT + remarkable intellectual/creative profile", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Brown University",         tier: "Reach",  req: 93, sat: 1530, satRequired: "Recommended", deadline: "Jan 5",  cost: "$60k/yr", admissionMode: "Open Curriculum + Essays + Recs", scholarshipStrength: "Need-based only; strong writing/research ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Wellesley College",        tier: "Reach",  req: 90, sat: 1480, satRequired: "Recommended", deadline: "Jan 8",  cost: "$58k/yr", admissionMode: "Holistic + Essays + Recs (women's college)", scholarshipStrength: "Need-based + Davis Scholarship; 1460+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "University of Chicago",    tier: "Reach",  req: 93, sat: 1540, satRequired: "Recommended", deadline: "Jan 2",  cost: "$62k/yr", admissionMode: "Holistic + Uncommon App essays + Recs", scholarshipStrength: "Need-blind; 1530+ SAT + outstanding academic writing", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "NYU (Liberal Arts)",       tier: "Target", req: 84, sat: 1430, satRequired: "Recommended", deadline: "Jan 1",  cost: "$55k/yr", admissionMode: "Holistic + Essays + Activities", scholarshipStrength: "Merit up to $20k/yr for 1420+ SAT + strong portfolio", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Univ. of Washington",      tier: "Target", req: 78, sat: 1350, satRequired: "Optional",    deadline: "Jan 15", cost: "$36k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Need-based only for internationals; limited merit", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Minnesota",       tier: "Safety", req: 72, sat: 1280, satRequired: "Optional",    deadline: "Mar 1",  cost: "$25k/yr", admissionMode: "GPA-based rolling + SAT optional", scholarshipStrength: "Merit aid $3k–$7k/yr for 1250+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
    ],
    "default": [
      { name: "University of Michigan",   tier: "Reach",  req: 88, sat: 1470, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Merit aid $5k–$15k/yr; 1430+ SAT + strong ECs", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 3 },
      { name: "Univ. of Wisconsin",       tier: "Target", req: 80, sat: 1380, satRequired: "Recommended", deadline: "Feb 1",  cost: "$32k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards $3k–$10k/yr for 1350+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Univ. of Washington",      tier: "Target", req: 78, sat: 1350, satRequired: "Optional",    deadline: "Jan 15", cost: "$36k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Need-based only for internationals; limited merit", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 2 },
      { name: "Ohio State University",    tier: "Safety", req: 70, sat: 1280, satRequired: "Optional",    deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "GPA-based + optional essays", scholarshipStrength: "Merit aid $3k–$8k/yr for 1280+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
      { name: "Arizona State Univ.",      tier: "Safety", req: 60, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$18k/yr", admissionMode: "GPA-based automatic admission", scholarshipStrength: "Merit scholarships up to $10k/yr for 1200+ SAT", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UK
  // Exam prep: Apr (3) for UCAT/ESAT/TMUA | UCAS opens: Sep (8) | Results: Jan (0)
  // ══════════════════════════════════════════════════════════════════════════
  UK: {
    "Science (PCM)": [
      { name: "Imperial College London",  tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£35k/yr", admissionMode: "UCAS + ESAT (mandatory) + A-levels/12th", scholarshipStrength: "UG merit limited — strong ESAT + 95%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Cambridge University",     tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£37k/yr", admissionMode: "UCAS + ESAT/TMUA + interview (Dec)", scholarshipStrength: "Cambridge International Scholarship (rare); 95%+ boards + ESAT top-25%", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "University College London",tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£30k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "UCL Global UG Scholarship (partial); 90%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "University of Edinburgh",  tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£25k/yr", admissionMode: "UCAS + predicted grades", scholarshipStrength: "Edinburgh Global UG Scholarship (partial); 85%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "University of Manchester", tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£23k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "Partial merit bursaries; 80%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Univ. of Bath",            tier: "Target", req: 76, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£22k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "Vice-Chancellor scholarship partial; 80%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Univ. of Southampton",     tier: "Target", req: 74, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£21k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "Partial merit bursary; 78%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "University of Sheffield",  tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "Global Excellence Scholarship £2k–£4k; 70%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
      { name: "Newcastle University",     tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£19k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "Partial merit bursary; 70%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
    ],
    "Science (PCB)": [
      { name: "Cambridge Medicine",       tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£38k/yr", admissionMode: "UCAS + UCAT/BMAT + MMI interview", scholarshipStrength: "Limited UG merit; UCAT 2900+ + 95%+ boards essential", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Oxford Medicine",          tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£37k/yr", admissionMode: "UCAS + UCAT/BMAT + MMI interview", scholarshipStrength: "Limited UG merit; UCAT 2900+ + 95%+ boards essential", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Univ. of Edinburgh (Med)", tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£38k/yr", admissionMode: "UCAS + UCAT + MMI interview", scholarshipStrength: "Limited UG merit; UCAT 2900+ + 95%+ boards essential", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "King's College London (Med)",tier: "Reach",req: 90, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£36k/yr", admissionMode: "UCAS + UCAT + MMI interview", scholarshipStrength: "No significant UG merit aid; UCAT 2800+ + 90%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Univ. of Manchester (Med)",tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£34k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Limited bursaries; UCAT 2700+", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Newcastle University (Med)",tier: "Target",req: 80, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£32k/yr", admissionMode: "UCAS + UCAT + MMI", scholarshipStrength: "Occasional merit bursaries; UCAT 2650+", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Univ. of Leeds (Med)",     tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£31k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Limited merit bursaries; UCAT 2650+", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Queen Mary BLSA (Med)",    tier: "Safety", req: 75, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£30k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Need-based only; UCAT 2600+", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
      { name: "Univ. of Bristol (Med)",   tier: "Safety", req: 75, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£29k/yr", admissionMode: "UCAS + UCAT + MMI", scholarshipStrength: "Need-based only; UCAT 2600+", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
    ],
    "Commerce": [
      { name: "LSE",                      tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£25k/yr", admissionMode: "UCAS + TMUA (Economics) + personal statement", scholarshipStrength: "LSE partial merit; TMUA 6.5+ + 90%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Warwick Business School",  tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£24k/yr", admissionMode: "UCAS + personal statement + predicted grades", scholarshipStrength: "Warwick partial bursary; TMUA 6.0+ + 85%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "University College London",tier: "Reach",  req: 87, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£25k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "UCL Global partial; 88%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "King's College London",    tier: "Target", req: 82, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£24k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "King's India Scholarship (partial); 82%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Univ. of Bath (Business)", tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£22k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "Partial merit; 78%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "University of Sheffield",  tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "Global Excellence Scholarship £2k–£4k; 70%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
    ],
    "Humanities": [
      { name: "Oxford University",        tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£28k/yr", admissionMode: "UCAS + interview (Dec) + subject tests", scholarshipStrength: "Limited UG merit; 95%+ boards + exceptional interview", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "University College London",tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£26k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "UCL Global UG Scholarship partial; 88%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "King's College London",    tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£24k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "King's India Scholarship (partial); 80%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Univ. of Exeter",          tier: "Target", req: 72, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling + predicted grades", scholarshipStrength: "Exeter International Scholarship up to £4k; 75%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
      { name: "Univ. of York",            tier: "Target", req: 72, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£18k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "Partial bursary; 72%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
      { name: "Coventry University",      tier: "Safety", req: 60, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£15k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "VC Scholarship up to £3k; 65%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 3 },
    ],
    "default": [
      { name: "University College London",tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£28k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "UCL Global UG Scholarship (partial); 90%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "King's College London",    tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£26k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "King's India Scholarship (partial) + 85%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Univ. of Exeter",          tier: "Target", req: 72, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling + predicted grades", scholarshipStrength: "Exeter International Scholarship up to £4k; 75%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 2 },
      { name: "Coventry University",      tier: "Safety", req: 60, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£15k/yr", admissionMode: "UCAS rolling", scholarshipStrength: "VC Scholarship up to £3k; 65%+ boards", examStartMonth: 3, admissionOpenMonth: 8, resultMonth: 3 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CANADA
  // Exams: Jan (0) | Apps open: Oct (9) | Results: Mar (2)
  // ══════════════════════════════════════════════════════════════════════════
  Canada: {
    "Science (PCM)": [
      { name: "University of Toronto",    tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Nov 1",  cost: "C$45k/yr", admissionMode: "Grades + supplementary application", scholarshipStrength: "Lester B. Pearson: full scholarship for exceptional internationals", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "UBC Vancouver",            tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$40k/yr", admissionMode: "Grades + personal profile essays", scholarshipStrength: "UBC International Major Entrance Scholarship up to C$80k total", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "University of Waterloo",   tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Feb 1",  cost: "C$42k/yr", admissionMode: "Grades + AIF essays (mandatory for Engineering/CS)", scholarshipStrength: "Merit award C$2k–$5k; 90%+ avg + strong AIF", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "McGill University",        tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$30k/yr", admissionMode: "Grades-based with supplementary essays", scholarshipStrength: "Partial merit bursaries; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "McMaster University",      tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$33k/yr", admissionMode: "Grades-based + essays", scholarshipStrength: "McMaster Excellence Entrance Award C$5k; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Queen's University",       tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Feb 1",  cost: "C$35k/yr", admissionMode: "Grades + essays", scholarshipStrength: "Queen's National Scholar Award partial; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Simon Fraser University",  tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$22k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "SFU international entrance award C$1k–$3k", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 3 },
      { name: "Dalhousie University",     tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$18k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Entrance scholarship C$1k–$3k for 80%+", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 3 },
    ],
    "Science (PCB)": [
      { name: "University of Toronto (Life Sci)", tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Nov 1",  cost: "C$45k/yr", admissionMode: "Grades + supplementary application", scholarshipStrength: "Lester B. Pearson Scholarship (full ride) via school nomination", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "UBC (Life Sciences)",      tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$40k/yr", admissionMode: "Grades + personal profile essays", scholarshipStrength: "UBC International Major Entrance Scholarship up to C$80k", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "McMaster (Health Sci)",    tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$33k/yr", admissionMode: "Supplementary + personal essay + reference", scholarshipStrength: "McMaster entrance award C$5k; strong 88%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "McGill (Life Sciences)",   tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$30k/yr", admissionMode: "Grades + supplementary application", scholarshipStrength: "Partial merit; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Univ. of Calgary",         tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$22k/yr", admissionMode: "Grades-based + essays", scholarshipStrength: "International entrance award $2k–$5k; 80%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 3 },
      { name: "Dalhousie University",     tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$18k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Entrance scholarship C$1k–$3k for 80%+", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 3 },
    ],
    "Commerce": [
      { name: "Univ. of Toronto (Rotman)", tier: "Reach", req: 88, sat: null, satRequired: "No", deadline: "Nov 1",  cost: "C$45k/yr", admissionMode: "Grades + supplementary essay", scholarshipStrength: "Lester B. Pearson Scholarship via school nomination (full ride)", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "UBC (Sauder)",             tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$40k/yr", admissionMode: "Grades + personal profile essays + Sauder supplement", scholarshipStrength: "UBC International Major Entrance Scholarship up to C$80k", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "McGill (Desautels)",       tier: "Target", req: 82, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$30k/yr", admissionMode: "Grades + supplementary", scholarshipStrength: "Partial merit; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Queen's (Smith School)",   tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Feb 1",  cost: "C$36k/yr", admissionMode: "Grades + supplementary essays + interview", scholarshipStrength: "Queen's National Scholar Award partial; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Western (Ivey)",           tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Feb 1",  cost: "C$36k/yr", admissionMode: "Grades + essays (HBA direct entry from 2nd year)", scholarshipStrength: "Western Scholarship partial; 82%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Dalhousie University",     tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$18k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Entrance scholarship C$1k–$3k for 80%+", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 3 },
    ],
    "default": [
      { name: "University of Toronto",    tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Nov 1",  cost: "C$45k/yr", admissionMode: "Grades + supplementary application", scholarshipStrength: "Lester B. Pearson: full scholarship for exceptional internationals", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "UBC Vancouver",            tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$40k/yr", admissionMode: "Grades + personal profile essays", scholarshipStrength: "UBC International Major Entrance Scholarship up to C$80k total", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "McGill University",        tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "C$30k/yr", admissionMode: "Grades-based with supplementary essays", scholarshipStrength: "Partial merit bursaries; 85%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "University of Waterloo",   tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Feb 1",  cost: "C$32k/yr", admissionMode: "Grades + AIF essays", scholarshipStrength: "President's Scholarship up to C$2k; 90%+ avg", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 2 },
      { name: "Dalhousie University",     tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "C$18k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Entrance scholarship C$1k–$3k for 80%+", examStartMonth: 0, admissionOpenMonth: 9, resultMonth: 3 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AUSTRALIA
  // Exams: Jan (0) | Apps open: Aug (7) | Results: Nov-Feb (10-1)
  // ══════════════════════════════════════════════════════════════════════════
  Australia: {
    "Science (PCM)": [
      { name: "Univ. of Melbourne",       tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$40k/yr", admissionMode: "Academic record + personal statement", scholarshipStrength: "Melbourne International UG Scholarship up to A$25k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "UNSW Sydney",              tier: "Reach",  req: 82, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$38k/yr", admissionMode: "Grades + personal statement", scholarshipStrength: "International Merit Scholarship A$5k–$10k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "Univ. of Sydney",          tier: "Reach",  req: 83, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$42k/yr", admissionMode: "Academic record + IELTS + personal statement", scholarshipStrength: "Sydney Scholars Award A$6k; 83%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "Monash University",        tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Dec 15", cost: "A$33k/yr", admissionMode: "Grades-based rolling + personal statement", scholarshipStrength: "International Merit Scholarship up to A$10k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "Australian National Univ.",tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "A$36k/yr", admissionMode: "Academic record + personal statement + IELTS", scholarshipStrength: "ANU Merit Scholarship partial; 80%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "Univ. of Queensland",      tier: "Target", req: 76, sat: null, satRequired: "No", deadline: "Nov 30", cost: "A$34k/yr", admissionMode: "Academic record + IELTS", scholarshipStrength: "UQ International Scholarship A$5k; 78%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "Univ. of Western Australia",tier:"Target", req: 74, sat: null, satRequired: "No", deadline: "Nov 30", cost: "A$33k/yr", admissionMode: "Academic record + personal statement", scholarshipStrength: "International Postgrad/UG bursary; 76%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "University of Adelaide",   tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jan 31", cost: "A$25k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Adelaide Scholarship up to 25% fee reduction", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 0 },
      { name: "Deakin University",        tier: "Safety", req: 60, sat: null, satRequired: "No", deadline: "Feb 28", cost: "A$20k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Deakin International Merit Scholarship 20–50% fee reduction", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 1 },
    ],
    "Science (PCB)": [
      { name: "Univ. of Melbourne (Biomed)", tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$40k/yr", admissionMode: "Academic record + UCAT ANZ (Medicine) + IELTS", scholarshipStrength: "Melbourne International UG Scholarship up to A$25k", examStartMonth: 3, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "Monash (Medicine)",        tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Sep 30", cost: "A$40k/yr", admissionMode: "UCAT ANZ + academic record + interview", scholarshipStrength: "Monash International Merit Scholarship up to A$10k; UCAT ANZ 2700+", examStartMonth: 3, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "UNSW (Medicine)",          tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Sep 30", cost: "A$45k/yr", admissionMode: "UCAT ANZ + academic record + GAMSAT", scholarshipStrength: "International Merit Scholarship partial", examStartMonth: 3, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "Univ. of Queensland (BioMed)", tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Nov 30", cost: "A$37k/yr", admissionMode: "Academic record + IELTS + personal statement", scholarshipStrength: "UQ International Scholarship A$5k; 78%+ boards", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "University of Adelaide",   tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jan 31", cost: "A$28k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Adelaide Scholarship up to 25% fee reduction", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 0 },
    ],
    "Commerce": [
      { name: "Univ. of Melbourne (Biz)", tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$38k/yr", admissionMode: "Academic record + IELTS", scholarshipStrength: "Melbourne International UG Scholarship up to A$25k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "UNSW (Business)",          tier: "Reach",  req: 82, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$37k/yr", admissionMode: "Academic record + IELTS + personal statement", scholarshipStrength: "UNSW International Merit Scholarship A$5k–$10k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "Monash (Business)",        tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Dec 15", cost: "A$33k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Monash Merit Scholarship up to A$10k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "Univ. of Adelaide (Biz)",  tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jan 31", cost: "A$24k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Adelaide Scholarship up to 25% fee reduction", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 0 },
    ],
    "default": [
      { name: "Univ. of Melbourne",       tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$40k/yr", admissionMode: "Academic record + personal statement", scholarshipStrength: "Melbourne International UG Scholarship up to A$25k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "UNSW Sydney",              tier: "Reach",  req: 82, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$38k/yr", admissionMode: "Grades + personal statement", scholarshipStrength: "International Merit Scholarship A$5k–$10k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 10 },
      { name: "Monash University",        tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Dec 15", cost: "A$33k/yr", admissionMode: "Grades-based rolling + personal statement", scholarshipStrength: "International Merit Scholarship up to A$10k", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 11 },
      { name: "University of Adelaide",   tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jan 31", cost: "A$25k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Adelaide Scholarship up to 25% fee reduction", examStartMonth: 0, admissionOpenMonth: 7, resultMonth: 0 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GERMANY
  // APS/language exams: Jan (0) | Apps: May–Jun (4) | Results: Jun–Aug (5-7)
  // ══════════════════════════════════════════════════════════════════════════
  Germany: {
    "Science (PCM)": [
      { name: "TU Munich",                tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS certificate + motivation letter", scholarshipStrength: "DAAD: €934/month living; Deutschlandstipendium: €300/month", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "LMU Munich",               tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + language proof", scholarshipStrength: "DAAD scholarships; Deutschlandstipendium €300/month", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "RWTH Aachen",              tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS certificate", scholarshipStrength: "DAAD scholarships; German B2 + 80%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "KIT Karlsruhe",            tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German B2/IELTS", scholarshipStrength: "DAAD + Deutschlandstipendium; 78%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "TU Berlin",                tier: "Target", req: 76, sat: null, satRequired: "No", deadline: "Jun 1",  cost: "€300/sem", admissionMode: "Academic record + APS + language proof", scholarshipStrength: "DAAD + German partner scholarships; 76%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "Heidelberg University",    tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German/IELTS proof", scholarshipStrength: "DAAD + Deutschlandstipendium; 78%+ equiv", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "Univ. of Stuttgart",       tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS + German B2", scholarshipStrength: "DAAD + Deutschlandstipendium; 75%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
      { name: "TU Darmstadt",             tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS certificate", scholarshipStrength: "DAAD scholarships; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
    ],
    "Science (PCB)": [
      { name: "Heidelberg University (Medicine)", tier: "Reach", req: 85, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German C1 + TMS test", scholarshipStrength: "DAAD + Deutschlandstipendium; C1 German mandatory for Medicine", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "LMU Munich (Life Sci)",     tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German/IELTS", scholarshipStrength: "DAAD + Deutschlandstipendium; 80%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "Univ. of Freiburg",        tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Jun 1",  cost: "€400/sem", admissionMode: "Academic record + APS + German/IELTS", scholarshipStrength: "DAAD; 75%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
      { name: "Univ. of Tübingen",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€350/sem", admissionMode: "Academic record + APS + German B2", scholarshipStrength: "DAAD scholarships; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
    ],
    "Commerce": [
      { name: "Mannheim Univ. (Business)", tier: "Reach", req: 85, sat: null, satRequired: "No", deadline: "Jan 31", cost: "€500/sem", admissionMode: "Academic record + APS + IELTS + motivation letter", scholarshipStrength: "DAAD + Deutschlandstipendium; strong motivation letter critical", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 3 },
      { name: "LMU Munich (Economics)",   tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German/IELTS", scholarshipStrength: "DAAD + Deutschlandstipendium; 80%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "Univ. of Frankfurt",       tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Jun 1",  cost: "€350/sem", admissionMode: "Academic record + APS + German/IELTS", scholarshipStrength: "DAAD; 75%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
      { name: "Univ. of Cologne",         tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS + German B2", scholarshipStrength: "DAAD scholarships; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
    ],
    "default": [
      { name: "TU Munich",                tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS certificate + motivation letter", scholarshipStrength: "DAAD: €934/month living; Deutschlandstipendium: €300/month", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "LMU Munich",               tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + language proof", scholarshipStrength: "DAAD scholarships; Deutschlandstipendium €300/month", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "Heidelberg University",    tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German/IELTS proof", scholarshipStrength: "DAAD + Deutschlandstipendium; 78%+ equiv", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 6 },
      { name: "RWTH Aachen",              tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS certificate", scholarshipStrength: "DAAD scholarships; German B2 + 70%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 7 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NETHERLANDS
  // Exams (IELTS): Jan (0) | Apps open: Jan (0) via Studielink | Results: Apr-May (3-4)
  // ══════════════════════════════════════════════════════════════════════════
  Netherlands: {
    "Science (PCM)": [
      { name: "Delft University (TU Delft)", tier: "Reach", req: 85, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€10k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Holland Scholarship €5k + Delft Excellence partial merit", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Eindhoven Univ. (TU/e)",   tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9.5k/yr", admissionMode: "Academic grades + IELTS + motivation letter", scholarshipStrength: "Holland Scholarship €5k; 78%+ boards + IELTS 6.5", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Univ. of Amsterdam",       tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9k/yr",   admissionMode: "Academic grades + IELTS + motivation letter", scholarshipStrength: "Amsterdam Merit Scholarship: full tuition for top applicants", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Univ. of Groningen",       tier: "Target", req: 74, sat: null, satRequired: "No", deadline: "May 1", cost: "€8k/yr",   admissionMode: "Academic record + IELTS", scholarshipStrength: "University of Groningen Excellence Scholarship partial", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Utrecht University",       tier: "Target", req: 76, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9k/yr",   admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Utrecht Excellence Scholarship partial; 76%+ boards", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Leiden University",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "May 1", cost: "€8.5k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Leiden Excellence Scholarship: partial", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Vrije Universiteit Amsterdam", tier: "Safety", req: 68, sat: null, satRequired: "No", deadline: "May 1", cost: "€8k/yr", admissionMode: "Academic record + IELTS", scholarshipStrength: "VU partial scholarship; 68%+ boards", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
    ],
    "Commerce": [
      { name: "Univ. of Amsterdam (Business)", tier: "Reach", req: 80, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9.5k/yr", admissionMode: "Grades + IELTS + motivation + selection", scholarshipStrength: "Amsterdam Merit Scholarship full tuition for top 5%", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Erasmus Univ. Rotterdam",  tier: "Reach",  req: 80, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€10k/yr", admissionMode: "Grades + IELTS + motivation letter + numerus fixus", scholarshipStrength: "Erasmus Trustfonds partial scholarship; 80%+ boards", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Tilburg University",       tier: "Target", req: 74, sat: null, satRequired: "No", deadline: "May 1", cost: "€8k/yr",  admissionMode: "Academic record + IELTS", scholarshipStrength: "Holland Scholarship €5k; 74%+ boards", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Univ. of Groningen (Econ)",tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "May 1", cost: "€8k/yr",  admissionMode: "Academic record + IELTS", scholarshipStrength: "UG Excellence Scholarship partial; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
    ],
    "default": [
      { name: "Delft University",         tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€10k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Holland Scholarship €5k + Delft Excellence partial merit", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Univ. of Amsterdam",       tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9k/yr",  admissionMode: "Academic grades + IELTS + motivation letter", scholarshipStrength: "Amsterdam Merit Scholarship: full tuition for top applicants", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
      { name: "Leiden University",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "May 1", cost: "€8.5k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Leiden Excellence Scholarship: partial", examStartMonth: 0, admissionOpenMonth: 0, resultMonth: 4 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SINGAPORE
  // Exams: Jan (0) | Apps open: Dec prev year (11) | Results: Mar-May (2-4)
  // ══════════════════════════════════════════════════════════════════════════
  Singapore: {
    "Science (PCM)": [
      { name: "NUS Singapore",            tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Feb 23", cost: "S$30k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "MOE/ASEAN scholarship: up to full tuition; 92%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 3 },
      { name: "NTU Singapore",            tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$28k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "ASEAN/NTU merit: partial to full; 88%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 4 },
      { name: "SUTD Singapore",           tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$20k/yr", admissionMode: "Academic record + IELTS/TOEFL + portfolio", scholarshipStrength: "SUTD Merit Scholarship partial; 80%+ boards + creative portfolio", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 4 },
      { name: "SIT Singapore",            tier: "Target", req: 72, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$18k/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "SIT Scholarship partial; 72%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 5 },
    ],
    "Science (PCB)": [
      { name: "NUS (Life Sciences)",      tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Feb 23", cost: "S$30k/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "MOE/ASEAN scholarship; 92%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 3 },
      { name: "NTU (Biological Sciences)",tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$27k/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "ASEAN/NTU merit scholarship; 85%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 4 },
      { name: "SMU Singapore",            tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$22k/yr", admissionMode: "Academic record + essays + interview", scholarshipStrength: "SMU Global Impact Scholarship; 80%+ boards + ECs", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 5 },
    ],
    "Commerce": [
      { name: "NUS Business School",      tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Feb 23", cost: "S$28k/yr", admissionMode: "Academic record + IELTS + interview + activities", scholarshipStrength: "MOE/ASEAN scholarship + NUS merit; 90%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 3 },
      { name: "NTU (Business)",           tier: "Reach",  req: 86, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$26k/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "ASEAN/NTU merit scholarship; 86%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 4 },
      { name: "SMU (Lee Kong Chian)",     tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$22k/yr", admissionMode: "Academic record + essays + interview", scholarshipStrength: "SMU Global Impact Scholarship; 80%+ boards + leadership ECs", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 5 },
      { name: "SIT Singapore",            tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$16k/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "SIT Scholarship partial; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 5 },
    ],
    "default": [
      { name: "NUS Singapore",            tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Feb 23", cost: "S$30k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "MOE/ASEAN scholarship: up to full tuition; 92%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 3 },
      { name: "NTU Singapore",            tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$28k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "ASEAN/NTU merit: partial to full; 88%+ boards", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 4 },
      { name: "SMU Singapore",            tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$22k/yr", admissionMode: "Academic record + essays + interview", scholarshipStrength: "SMU Global Impact Scholarship; 80%+ boards + ECs", examStartMonth: 0, admissionOpenMonth: 11, resultMonth: 5 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // JAPAN
  // Language prep: Jan (0) | Apps: Sep-Nov (8-10) | Results: Jan-Feb (0-1)
  // ══════════════════════════════════════════════════════════════════════════
  Japan: {
    "Science (PCM)": [
      { name: "University of Tokyo",      tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 31", cost: "¥600k/yr",  admissionMode: "Academic record + Japanese/English + entrance exam", scholarshipStrength: "MEXT scholarship: full coverage", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Tokyo Institute of Tech",  tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Nov 1",  cost: "¥600k/yr",  admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "MEXT + Tokyo Tech scholarship; 88%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Osaka University",         tier: "Target", req: 82, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥600k/yr",  admissionMode: "Academic record + IELTS/JLPT + interview", scholarshipStrength: "MEXT + JASSO scholarship; 82%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Tohoku University",        tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Nov 30", cost: "¥600k/yr",  admissionMode: "Academic record + English + interview", scholarshipStrength: "MEXT + Tohoku scholarship; 80%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Waseda University",        tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥1.4M/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "Waseda Scholarship: partial; 80%+ boards + IELTS 6.5+", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Keio University",          tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥1.3M/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "Keio partial scholarship; 78%+ boards + IELTS 6.5", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Ritsumeikan Univ.",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "¥1.1M/yr", admissionMode: "Academic record + JLPT / IELTS", scholarshipStrength: "Partial scholarship; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Nagoya University",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "¥600k/yr",  admissionMode: "Academic record + IELTS/JLPT", scholarshipStrength: "MEXT + JASSO; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
    ],
    "Science (PCB)": [
      { name: "University of Tokyo (Medicine)", tier: "Reach", req: 92, sat: null, satRequired: "No", deadline: "Oct 31", cost: "¥600k/yr", admissionMode: "Academic record + Japanese C1 + entrance exam", scholarshipStrength: "MEXT full scholarship; Japanese C1 mandatory for Medicine", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Osaka Univ. (Life Sci)",   tier: "Target", req: 82, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥600k/yr",  admissionMode: "Academic record + IELTS/JLPT", scholarshipStrength: "MEXT + JASSO; 82%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Kyoto University",         tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 31", cost: "¥600k/yr",  admissionMode: "Academic record + Japanese C1 + entrance exam", scholarshipStrength: "MEXT scholarship; 90%+ boards + Japanese C1", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Ritsumeikan Univ.",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "¥1.1M/yr", admissionMode: "Academic record + JLPT / IELTS", scholarshipStrength: "Partial scholarship; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
    ],
    "Commerce": [
      { name: "Waseda (Commerce)",        tier: "Reach",  req: 82, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥1.4M/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "Waseda Scholarship partial; 82%+ boards + IELTS 6.5+", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Keio (Economics)",         tier: "Reach",  req: 80, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥1.3M/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "Keio partial scholarship; 80%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Hitotsubashi Univ.",       tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Nov 30", cost: "¥600k/yr",  admissionMode: "Academic record + IELTS + entrance exam", scholarshipStrength: "MEXT + JASSO; 80%+ boards + IELTS 6.5", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Ritsumeikan Univ.",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "¥1.1M/yr", admissionMode: "Academic record + JLPT / IELTS", scholarshipStrength: "Partial scholarship; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
    ],
    "default": [
      { name: "University of Tokyo",      tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 31", cost: "¥600k/yr",  admissionMode: "Academic record + Japanese/English + entrance exam", scholarshipStrength: "MEXT scholarship: full coverage", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
      { name: "Waseda University",        tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Nov 15", cost: "¥1.4M/yr", admissionMode: "Academic record + IELTS + interview", scholarshipStrength: "Waseda Scholarship: partial; 80%+ boards + IELTS 6.5+", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 0 },
      { name: "Ritsumeikan Univ.",        tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Dec 1",  cost: "¥1.1M/yr", admissionMode: "Academic record + JLPT / IELTS", scholarshipStrength: "Partial scholarship; 70%+ boards", examStartMonth: 0, admissionOpenMonth: 8, resultMonth: 1 },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // INDIA
  // Exams: JEE/NEET start Nov-Jan (10-0) | Apps: vary | Results: Jun-Jul (5-6)
  // ══════════════════════════════════════════════════════════════════════════
  India: {
    "Science (PCM)": [
      { name: "IIT Bombay (JEE)",         tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank-based counselling (JoSAA)", scholarshipStrength: "Government scholarships; top 500 JEE rank", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "IIT Delhi (JEE)",          tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank (JoSAA)", scholarshipStrength: "MCM scholarship for low income; JEE top 1000", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "IIT Madras (JEE)",         tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank (JoSAA)", scholarshipStrength: "MCM scholarship + merit awards; JEE top 1500", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "IIT Kharagpur (JEE)",      tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank (JoSAA)", scholarshipStrength: "MCM scholarship; JEE top 2000", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "NIT Trichy",               tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Apr (JEE Main)", cost: "₹1.5L/yr",  admissionMode: "JEE Main rank (JoSAA)", scholarshipStrength: "MCM scholarship; JEE Main top 5000", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "NIT Warangal",             tier: "Target", req: 83, sat: null, satRequired: "No", deadline: "Apr (JEE Main)", cost: "₹1.5L/yr",  admissionMode: "JEE Main rank (JoSAA)", scholarshipStrength: "MCM scholarship; JEE Main top 7000", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "BITS Pilani",              tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "May (BITSAT)",  cost: "₹5L/yr",    admissionMode: "BITSAT score", scholarshipStrength: "Merit cum Means; 320+ BITSAT", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "DTU Delhi",                tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jun (JEE Main)", cost: "₹1.5L/yr",  admissionMode: "JEE Main rank (JAC Delhi)", scholarshipStrength: "State merit; JEE Main top 10000", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 5 },
      { name: "Manipal Institute of Tech",tier: "Safety", req: 72, sat: null, satRequired: "No", deadline: "Apr (MET)",     cost: "₹3L/yr",    admissionMode: "MET entrance test or JEE Main", scholarshipStrength: "Merit scholarship; MET top ranks", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "VIT University",           tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Feb (VITEEE)",  cost: "₹2L/yr",    admissionMode: "VITEEE score", scholarshipStrength: "Chancellor's Award for VITEEE top rank or 95%+ boards", examStartMonth: 1, admissionOpenMonth: 1, resultMonth: 5 },
      { name: "SRM University",           tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Apr (SRMJEE)",  cost: "₹2.5L/yr",  admissionMode: "SRMJEE entrance test", scholarshipStrength: "Merit scholarship 25–50%; SRMJEE top ranks", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
    ],
    "Science (PCB)": [
      { name: "AIIMS Delhi",              tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Nov (NEET)",    cost: "₹1L/yr",    admissionMode: "NEET-UG rank (MCC counselling)", scholarshipStrength: "Government-funded; NEET top 50 rank", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "AIIMS Jodhpur/Bhopal",     tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Nov (NEET)",    cost: "₹1.2L/yr",  admissionMode: "NEET-UG rank (MCC counselling)", scholarshipStrength: "Government-funded; NEET top 500 rank", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "CMC Vellore",              tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹3L/yr",    admissionMode: "NEET-UG + CMC entrance + interview", scholarshipStrength: "CMC bursaries; NEET 650+", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "JIPMER Puducherry",        tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Nov (NEET)",    cost: "₹50k/yr",   admissionMode: "NEET-UG rank (MCC AI Quota)", scholarshipStrength: "Government-funded; NEET top 500", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "Maulana Azad Medical (MAMC)", tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Nov (NEET)", cost: "₹1L/yr",    admissionMode: "NEET-UG rank (Delhi state + AI quota)", scholarshipStrength: "Government-funded; NEET top 2000", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "Kasturba Medical",         tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹4L/yr",    admissionMode: "NEET-UG score + counselling", scholarshipStrength: "Merit awards; NEET 550+", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "Amrita School of Medicine",tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹5L/yr",    admissionMode: "NEET-UG score + counselling", scholarshipStrength: "Merit scholarship; NEET 550+", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "MS Ramaiah Medical",       tier: "Safety", req: 72, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹5.5L/yr",  admissionMode: "NEET-UG score + management quota", scholarshipStrength: "Merit scholarship partial; NEET 500+", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
      { name: "Yenepoya Medical College", tier: "Safety", req: 68, sat: null, satRequired: "No", deadline: "Apr (NEET)",    cost: "₹5L/yr",    admissionMode: "NEET-UG score", scholarshipStrength: "Merit scholarship; NEET 450+", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 5 },
    ],
    "Commerce": [
      { name: "Ashoka University",        tier: "Reach",  req: 88, sat: 1450, satRequired: "Yes", deadline: "Oct–Apr (Rounds)", cost: "₹15L/yr", admissionMode: "Holistic + Interview + Essays + SAT", scholarshipStrength: "Ashoka Fellowship: up to 100% scholarship; 1450+ SAT + leadership", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "KREA University",          tier: "Reach",  req: 85, sat: 1400, satRequired: "Yes", deadline: "Oct–Apr",          cost: "₹12L/yr", admissionMode: "Holistic + Interview + SAT", scholarshipStrength: "Merit scholarships 25–100%; 1400–1500 SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "SRCC Delhi",               tier: "Reach",  req: 96, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹50k/yr", admissionMode: "CUET score (DU counselling)", scholarshipStrength: "95–99 percentile CUET", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 6 },
      { name: "IIM Indore / Rohtak (IPM)",tier: "Reach",  req: 90, sat: null, satRequired: "No",  deadline: "Feb–Apr",          cost: "₹3L/yr",  admissionMode: "IPMAT aptitude test + PI", scholarshipStrength: "Top 1–2% IPMAT + PI", examStartMonth: 1, admissionOpenMonth: 1, resultMonth: 5 },
      { name: "Lady Shri Ram (DU CUET)",  tier: "Reach",  req: 94, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹30k/yr", admissionMode: "CUET score (DU counselling)", scholarshipStrength: "94+ CUET percentile", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 6 },
      { name: "Shiv Nadar University",    tier: "Target", req: 82, sat: 1350, satRequired: "Yes", deadline: "Dec–May",          cost: "₹7L/yr",  admissionMode: "SAT / SNUSAT + Interview", scholarshipStrength: "Merit based; 1350+ SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "FLAME University",         tier: "Target", req: 78, sat: 1300, satRequired: "Yes", deadline: "Oct–May",          cost: "₹8L/yr",  admissionMode: "SAT / FLAME Test + PI", scholarshipStrength: "Merit aid; 1300–1450 SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "Symbiosis Pune (SET)",     tier: "Target", req: 78, sat: null, satRequired: "No",  deadline: "Apr (SET)",        cost: "₹4L/yr",  admissionMode: "SET entrance test + PI + WAT", scholarshipStrength: "Merit scholarship; SET top ranks + 80%+ boards", examStartMonth: 1, admissionOpenMonth: 1, resultMonth: 5 },
      { name: "NMIMS Mumbai (NPAT)",      tier: "Target", req: 80, sat: null, satRequired: "No",  deadline: "Apr (NPAT)",       cost: "₹4.5L/yr",admissionMode: "NPAT entrance test", scholarshipStrength: "Merit scholarship; NPAT top ranks", examStartMonth: 1, admissionOpenMonth: 1, resultMonth: 5 },
      { name: "Christ University",        tier: "Safety", req: 75, sat: null, satRequired: "No",  deadline: "Dec–April",        cost: "₹1.5L/yr", admissionMode: "Own test + PI", scholarshipStrength: "Merit + interview; 80%+ boards", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 4 },
      { name: "Narsee Monjee (Mumbai)",   tier: "Safety", req: 72, sat: null, satRequired: "No",  deadline: "Mar (NPAT)",       cost: "₹2L/yr",  admissionMode: "NPAT score", scholarshipStrength: "Merit scholarship; 72%+ boards", examStartMonth: 1, admissionOpenMonth: 1, resultMonth: 5 },
    ],
    "Humanities": [
      { name: "Ashoka University",        tier: "Reach",  req: 88, sat: 1450, satRequired: "Yes", deadline: "Oct–Apr (Rounds)", cost: "₹15L/yr", admissionMode: "Holistic + Interview + Essays + SAT", scholarshipStrength: "Ashoka Fellowship: up to full scholarship; 1450+ SAT + leadership", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "KREA University",          tier: "Reach",  req: 85, sat: 1400, satRequired: "Yes", deadline: "Oct–Apr",          cost: "₹12L/yr", admissionMode: "Holistic + Interview + SAT", scholarshipStrength: "Merit scholarships 25–100%; 1400+ SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "St. Stephen's (CUET)",     tier: "Reach",  req: 95, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹60k/yr", admissionMode: "CUET score + Interview", scholarshipStrength: "95%+ CUET percentile", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 6 },
      { name: "Miranda House (DU)",       tier: "Reach",  req: 94, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹25k/yr", admissionMode: "CUET score (DU counselling)", scholarshipStrength: "94%+ CUET percentile", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 6 },
      { name: "Presidency University",    tier: "Target", req: 82, sat: null, satRequired: "No",  deadline: "Jun (CUET/own)",   cost: "₹30k/yr", admissionMode: "CUET or own entrance", scholarshipStrength: "Merit scholarship; 80%+ boards", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 6 },
      { name: "Shiv Nadar University",    tier: "Target", req: 80, sat: 1350, satRequired: "Yes", deadline: "Dec–May",          cost: "₹7L/yr",  admissionMode: "SAT / SNUSAT + Interview", scholarshipStrength: "Merit based; 1350+ SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "FLAME University",         tier: "Target", req: 78, sat: 1300, satRequired: "Yes", deadline: "Oct–May",          cost: "₹8L/yr",  admissionMode: "SAT / FLAME Test + PI", scholarshipStrength: "Merit aid; 1300–1450 SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "Symbiosis (Humanities)",   tier: "Safety", req: 72, sat: null, satRequired: "No",  deadline: "Apr (SET)",        cost: "₹3L/yr",  admissionMode: "SET + WAT + PI", scholarshipStrength: "Merit scholarship; 75%+ boards", examStartMonth: 1, admissionOpenMonth: 1, resultMonth: 5 },
      { name: "Christ University",        tier: "Safety", req: 70, sat: null, satRequired: "No",  deadline: "Dec–April",        cost: "₹1.5L/yr", admissionMode: "Own test + PI", scholarshipStrength: "Merit + interview; 75%+ boards", examStartMonth: 10, admissionOpenMonth: 10, resultMonth: 4 },
    ],
    "default": [
      { name: "Ashoka University",              tier: "Reach",  req: 88, sat: 1450, satRequired: "Yes", deadline: "Oct–Apr (Rounds)", cost: "₹15L/yr", admissionMode: "Holistic + Interview + Essays + SAT", scholarshipStrength: "Ashoka Fellowship: up to full scholarship; 1450+ SAT + leadership", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "KREA University",                tier: "Target", req: 82, sat: 1400, satRequired: "Yes", deadline: "Oct–Apr",          cost: "₹12L/yr", admissionMode: "Holistic + Interview + SAT", scholarshipStrength: "25–100% merit scholarship; 1400+ SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
      { name: "St. Stephen's College (CUET)",   tier: "Reach",  req: 95, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹60k/yr", admissionMode: "CUET score + Interview", scholarshipStrength: "95%+ CUET percentile", examStartMonth: 2, admissionOpenMonth: 2, resultMonth: 6 },
      { name: "Shiv Nadar University",          tier: "Target", req: 80, sat: 1350, satRequired: "Yes", deadline: "Dec–May",          cost: "₹7L/yr",  admissionMode: "SAT / SNUSAT + Interview", scholarshipStrength: "Merit based; 1350+ SAT", examStartMonth: 9, admissionOpenMonth: 9, resultMonth: 1 },
    ],
  },
};

// ─── Per-university exam requirements map ─────────────────────────────────────

export const UNI_EXAM_REQUIREMENTS: Record<string, UniExamRequirement[]> = {
  "MIT": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1540+", note: "Test-optional but 90%+ of admitted students submit. Median: 1570." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "English proficiency required for all international students." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Accepted as alternative to TOEFL." },
  ],
  "Carnegie Mellon": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1500+", note: "Strongly recommended for CS/Engineering. Median: 1540." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for all international applicants." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Accepted as TOEFL alternative." },
  ],
  "Stanford University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1500+", note: "Test-optional. Mid-50% of submitted: 1500–1570." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for all international applicants." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Accepted as TOEFL alternative." },
  ],
  "Georgia Tech": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1450+", note: "1450+ strengthens Engineering/CS applications significantly." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+", note: "Required for all international applicants." },
  ],
  "Purdue University": [
    { examName: "SAT", examIcon: "📐", required: "Mandatory", minScore: "1300+", note: "SAT used for direct Engineering admission. 1300+ expected." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "80+", note: "Required for international students." },
  ],
  "UT Austin": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1400+", note: "1400+ strengthens out-of-state admission significantly." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "79+", note: "Required for international applicants." },
  ],
  "Arizona State Univ.": [
    { examName: "SAT", examIcon: "📐", required: "Optional", minScore: "1200+", note: "Test-optional. 1200+ qualifies for merit aid up to $10,000/yr." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "61+", note: "Required for international students." },
  ],
  "Johns Hopkins": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1520+", note: "Test-optional until 2027. 75th percentile of submitted: 1570." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for all international applicants." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Accepted as TOEFL alternative." },
  ],
  "Duke University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1500+", note: "Test-optional. Mid-50% of submitted: 1500–1570." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for international students." },
  ],
  "Vanderbilt University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1510+", note: "Test-optional. Cornelius Vanderbilt full scholarship: 1520+ recommended." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for international applicants." },
  ],
  "Emory University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1400+", note: "Test-optional. Strong scores support merit scholarship applications." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+", note: "Required for international applicants." },
  ],
  "Wharton (UPenn)": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1520+", note: "Need-blind; 1550+ SAT + elite leadership ECs." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for all international applicants." },
  ],
  "NYU Stern": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1480+", note: "Test-optional but median submitted SAT: 1490." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for international students." },
  ],
  "Univ. of Michigan Ross": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1400+", note: "1400+ strengthens Business school application." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for international applicants." },
  ],
  "Indiana Univ. Kelley": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1300+", note: "1300+ qualifies for automatic merit scholarship consideration." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "80+", note: "Required for international students." },
  ],
  "University of Michigan": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1430+", note: "Test-optional. 1400+ strengthens application." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Required for international applicants." },
  ],
  "Imperial College London": [
    { examName: "ESAT", examIcon: "⚗️", required: "Mandatory", minScore: "Top 25 percentile", note: "Required for all Engineering and Science programmes from 2024 intake onward." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0 (no band < 6.5)", note: "Engineering courses often require 7.0 in each component." },
  ],
  "Cambridge University": [
    { examName: "ESAT/TMUA", examIcon: "⚗️", required: "Mandatory", minScore: "Top 25 percentile / 6.5+", note: "ESAT for Engineering/NatSci; TMUA for Maths/CS/Econ. Mandatory for all Cambridge applications." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.5 (no band < 7.0)", note: "Cambridge standard — higher than most UK universities." },
  ],
  "University College London": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0 (no band < 6.5)", note: "Some courses require 7.5." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Accepted as IELTS alternative." },
  ],
  "King's College London": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0 (no band < 6.5)", note: "Standard requirement across most programmes." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Accepted as IELTS alternative." },
  ],
  "University of Edinburgh": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5–7.0", note: "Depends on programme." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "92+", note: "Accepted as IELTS alternative." },
  ],
  "Univ. of Edinburgh (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2900+ (competitive)", note: "No UCAT = no interview shortlist for Medicine." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0 (no band < 6.5)", note: "Required for UK Student Visa." },
  ],
  "King's College London (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2800+", note: "UCAT is the primary filter for Medicine shortlisting at KCL." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Required for Medicine programme." },
  ],
  "Univ. of Manchester (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2700+", note: "UCAT required for Manchester Medicine." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Required." },
  ],
  "Newcastle University (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2650+", note: "UCAT required for Newcastle Medicine." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Required." },
  ],
  "Queen Mary BLSA (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2600+", note: "UCAT required. SJT Band 1–2 strongly advised." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Required." },
  ],
  "Univ. of Leeds (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2650+", note: "UCAT required for Leeds Medicine." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Required." },
  ],
  "Univ. of Bristol (Med)": [
    { examName: "UCAT", examIcon: "🩺", required: "Mandatory", minScore: "2600+", note: "UCAT required for Bristol Medicine." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0+", note: "Required." },
  ],
  "LSE": [
    { examName: "TMUA", examIcon: "🔢", required: "Optional", minScore: "6.5+", note: "Not mandatory but 6.5+ significantly improves Economics offer chances." },
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0 (no band < 6.5)", note: "LSE standard." },
  ],
  "University of Toronto": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+ (some programs: 7.0+)", note: "Required for all international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "100+", note: "Accepted as IELTS alternative." },
  ],
  "UBC Vancouver": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+ (Eng/Biz: 7.0+)", note: "Required for all international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+ (no section < 22)", note: "Accepted as IELTS alternative." },
  ],
  "McGill University": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+", note: "Required for international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+", note: "Accepted as IELTS alternative." },
  ],
  "University of Waterloo": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5 (no band < 6.0)", note: "Required. AIF essays are equally important." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+", note: "Accepted as IELTS alternative." },
  ],
  "McMaster University": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+", note: "Required for international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "88+", note: "Accepted as IELTS alternative." },
  ],
  "Univ. of Melbourne": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "7.0 (no band < 6.5)", note: "Group of Eight standard." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "79+", note: "Accepted as IELTS alternative." },
  ],
  "UNSW Sydney": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5 (no band < 6.0)", note: "Group of Eight standard." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "72+ (no section < 18)", note: "Accepted as IELTS alternative." },
  ],
  "Monash University": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+ (some courses: 7.0+)", note: "Required for admission and Student Visa." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "79+", note: "Accepted as IELTS alternative." },
  ],
  "Univ. of Sydney": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5 (no band < 6.0)", note: "Group of Eight standard; some programmes require 7.0+." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "85+", note: "Accepted as IELTS alternative." },
  ],
  "NUS Singapore": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.0+ (competitive: 7.0+)", note: "Required for international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "85+", note: "Accepted as IELTS alternative." },
  ],
  "NTU Singapore": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+", note: "Required for all international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+", note: "Accepted as IELTS alternative." },
  ],
  "SMU Singapore": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+", note: "Required for international applicants." },
    { examName: "TOEFL iBT", examIcon: "💬", required: "Mandatory", minScore: "90+", note: "Accepted as IELTS alternative." },
  ],
  "Delft University": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5 (some programmes: 7.0+)", note: "Required for all English-taught programmes." },
  ],
  "Univ. of Amsterdam": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5 (some programmes: 7.0+)", note: "Required for English-medium tracks." },
  ],
  "Eindhoven Univ. (TU/e)": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Mandatory", minScore: "6.5+", note: "Required for all English-taught Engineering programmes." },
  ],
  "TU Munich": [
    { examName: "IELTS Academic", examIcon: "🗣️", required: "Optional", minScore: "6.5+", note: "For English-taught programmes. German B2 for German-taught." },
  ],
  "IIT Bombay (JEE)":   [{ examName: "JEE Advanced", examIcon: "📊", required: "Mandatory", minScore: "Top 500 rank", note: "JoSAA counselling determines seat allotment." }],
  "IIT Delhi (JEE)":    [{ examName: "JEE Advanced", examIcon: "📊", required: "Mandatory", minScore: "Top 1000 rank", note: "JoSAA counselling." }],
  "IIT Madras (JEE)":   [{ examName: "JEE Advanced", examIcon: "📊", required: "Mandatory", minScore: "Top 1500 rank", note: "JoSAA counselling." }],
  "BITS Pilani":         [{ examName: "BITSAT", examIcon: "📊", required: "Mandatory", minScore: "320+", note: "BITS own entrance test." }],
  "VIT University":      [{ examName: "VITEEE", examIcon: "📊", required: "Mandatory", minScore: "Top 10000 rank", note: "VIT own entrance test." }],
  "AIIMS Delhi":         [{ examName: "NEET-UG", examIcon: "🩺", required: "Mandatory", minScore: "Top 50 rank (720 total)", note: "MCC counselling." }],
  "CMC Vellore":         [{ examName: "NEET-UG", examIcon: "🩺", required: "Mandatory", minScore: "650+ / 720", note: "CMC entrance + interview after NEET." }],
  "Kasturba Medical":    [{ examName: "NEET-UG", examIcon: "🩺", required: "Mandatory", minScore: "550+ / 720", note: "NEET score required for counselling." }],
  "Ashoka University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1450+", note: "SAT 1450+ significantly strengthens scholarship applications." },
  ],
  "KREA University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1400+", note: "SAT 1400+ accepted; helps for merit scholarships 25–100%." },
  ],
  "Shiv Nadar University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1350+", note: "SAT or SNUSAT — either accepted." },
  ],
  "FLAME University": [
    { examName: "SAT", examIcon: "📐", required: "Recommended", minScore: "1300+", note: "SAT or FLAME Test — either accepted." },
  ],
  "SRCC Delhi":          [{ examName: "CUET", examIcon: "📊", required: "Mandatory", minScore: "95–99 percentile", note: "DU admission via CUET score." }],
  "IIM Indore / Rohtak (IPM)": [{ examName: "IPMAT", examIcon: "📊", required: "Mandatory", minScore: "Top 1–2% nationally", note: "IIM own aptitude test + PI." }],
  "St. Stephen's (CUET)": [{ examName: "CUET", examIcon: "📊", required: "Mandatory", minScore: "95%+ percentile", note: "CUET + Interview for DU." }],
  "Symbiosis Pune (SET)": [{ examName: "SET", examIcon: "📊", required: "Mandatory", minScore: "High percentile", note: "Symbiosis Entrance Test + WAT + PI." }],
  "NMIMS Mumbai (NPAT)": [{ examName: "NPAT", examIcon: "📊", required: "Mandatory", minScore: "High percentile", note: "NMIMS own entrance test." }],
};

// ─── Per-country admission timeline ───────────────────────────────────────────

export function getCountryAdmissionTimeline(country: Country, stream: Stream): UniAdmissionEvent[] {
  const isMed   = stream === "Science (PCB)";
  const isEng   = stream === "Science (PCM)";

  const timelines: Record<Country, UniAdmissionEvent[]> = {
    USA: [
      { month: "Jan–Apr 2026", monthIndex: 0, year: 2026, title: "Begin SAT Preparation", description: "Start SAT prep. Take a diagnostic test. Target 1400+ for US applications. Register at sat.collegeboard.org. Indian centres fill within 48 hours.", type: "exam", urgent: true },
      { month: "Jan–Jun 2026", monthIndex: 0, year: 2026, title: "Begin TOEFL / IELTS Prep", description: "US universities require TOEFL 100+ iBT or IELTS 7.0+. Start alongside SAT prep.", type: "exam", urgent: true },
      { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "Sit IELTS / TOEFL — First Attempt", description: "Take your English proficiency test. Target IELTS 7.0+ or TOEFL 100+. Retake in Sep–Oct if below target.", type: "exam", urgent: true },
      { month: "Aug 1, 2026", monthIndex: 7, year: 2026, title: "Common App Opens — Create Profile", description: "Common App launches August 1 for Fall 2027 entry. Fill academics, activities, honours. Request teacher recommendations NOW.", type: "open", urgent: true },
      { month: "Aug 23, 2026", monthIndex: 7, year: 2026, title: "SAT First Attempt (Aug 23)", description: "First SAT attempt. Target 1400+ general; 1500+ for MIT/CMU/Harvard; 1480+ for Wharton/Stern.", type: "exam", urgent: true },
      { month: "Sep–Oct 2026", monthIndex: 8, year: 2026, title: "Finalise Shortlist & Write Essays", description: "Finalise 8–12 university list. Write supplemental essays. Draft 650-word Common App main essay.", type: "open", urgent: false },
      { month: "Oct 4, 2026", monthIndex: 9, year: 2026, title: "SAT Retake (Oct 4)", description: "Results arrive before Nov 1 ED deadlines. Register at sat.collegeboard.org at least 5 weeks early.", type: "exam", urgent: false },
      { month: "Nov 1–15, 2026", monthIndex: 10, year: 2026, title: "Early Decision / Action Deadlines", description: "Nov 1: MIT EA, Harvard SCEA, Yale EA, Princeton EA, Columbia ED, Wharton ED, Johns Hopkins REA, CMU EA, NYU ED. Nov 15: CMU, Georgia Tech, UVA, UNC, Emory ED.", type: "deadline", urgent: true },
      { month: "Dec 6, 2026", monthIndex: 11, year: 2026, title: "SAT Final Sitting", description: "Last practical SAT before Jan 2027 Regular Decision deadlines. Results arrive ~Dec 20.", type: "exam", urgent: false },
      { month: "Dec 12–15, 2026", monthIndex: 11, year: 2026, title: "ED / EA Results Released", description: "ED: Admitted (binding), Deferred (continue RD), Rejected. EA: non-binding.", type: "result", urgent: false },
      { month: "Jan 1, 2027", monthIndex: 0, year: 2027, title: "Regular Decision Deadlines — Most Schools", description: "Jan 1: MIT, Harvard, Yale, Princeton, Stanford, Caltech, Columbia, Chicago, Johns Hopkins, Emory, Purdue, UT Austin. No extensions.", type: "deadline", urgent: true },
      { month: "Jan 15, 2027", monthIndex: 0, year: 2027, title: "Remaining RD Deadlines", description: "Duke, Cornell, Brown, Dartmouth, NYU Stern, Carnegie Mellon, Michigan Ross, Indiana Kelley, ASU, UBC, McGill.", type: "deadline", urgent: true },
      { month: "Mar–Apr 2027", monthIndex: 2, year: 2027, title: "Regular Decision Results", description: "RD results typically arrive March 28–April 1. Compare all financial aid packages.", type: "result", urgent: false },
      { month: "May 1, 2027", monthIndex: 4, year: 2027, title: "National Candidate Reply Date — FINAL DECISION", description: "Accept your chosen offer and pay enrollment deposit by May 1. Decline all other US offers.", type: "deadline", urgent: true },
      { month: "May–Jun 2027", monthIndex: 4, year: 2027, title: "Receive I-20 & Apply for F-1 Visa", description: "University issues I-20 after enrollment deposit. Pay SEVIS fee ($350) same day. Book visa interview immediately.", type: "visa", urgent: true },
      { month: "Aug 2027", monthIndex: 7, year: 2027, title: "Depart for USA", description: "Most Fall semesters begin late August–early September.", type: "travel", urgent: false },
    ],
    UK: [
      { month: "Jan–May 2026", monthIndex: 0, year: 2026, title: "Begin IELTS for UKVI Academic Prep", description: "UK Student Visa requires IELTS for UKVI Academic — NOT standard IELTS. Target 7.0+ (Russell Group); 7.5+ (Oxford/Cambridge).", type: "exam", urgent: true },
      ...(isMed ? [
        { month: "Apr–May 2026", monthIndex: 3, year: 2026, title: "Begin UCAT Preparation", description: "UCAT mandatory for most UK medical schools. Register at ucat.ac.uk in May. Target 2700+; SJT Band 1.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "Jul–Sep 2026", monthIndex: 6, year: 2026, title: "Sit UCAT", description: "Competitive range: Edinburgh 2900+; KCL 2800+; Manchester 2700+. Results same day.", type: "exam", urgent: true } as UniAdmissionEvent,
      ] : []),
      ...(isEng ? [
        { month: "Apr–Jun 2026", monthIndex: 3, year: 2026, title: "Begin ESAT Preparation", description: "ESAT mandatory for Cambridge Engineering/Natural Sciences and Imperial Engineering/Science.", type: "exam", urgent: false } as UniAdmissionEvent,
      ] : []),
      { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "Sit IELTS for UKVI Academic", description: "Computer-delivered: results in 3–5 days. Retake Sep–Oct if below target.", type: "exam", urgent: true },
      { month: "Aug 2026", monthIndex: 7, year: 2026, title: "Register for TMUA / ESAT — Immediately", description: "Registration opens August at admissionstesting.org. India slots fill within 48 hours.", type: "exam", urgent: true },
      { month: "Sep 2, 2026", monthIndex: 8, year: 2026, title: "UCAS Opens — Begin Personal Statement", description: "UCAS opens for 2027 entry. Write your 4,000-character Personal Statement. Cannot submit before October 1.", type: "open", urgent: true },
      { month: "Oct 15, 2026", monthIndex: 9, year: 2026, title: "UCAS HARD DEADLINE: Oxford, Cambridge" + (isMed ? " & ALL Medicine" : ""), description: "6:00 PM UK time — NO EXTENSIONS. Oxford/Cambridge all courses." + (isMed ? " ALL UK medical schools." : ""), type: "deadline", urgent: true },
      { month: "Oct–Nov 2026", monthIndex: 9, year: 2026, title: isEng ? "ESAT Exam" : "TMUA / Admissions Tests", description: isEng ? "ESAT exam for Cambridge/Imperial. No calculator. Scores auto-sent." : "TMUA exam for Cambridge Maths/CS/Economics and LSE.", type: "exam", urgent: true },
      { month: "Dec 2026", monthIndex: 11, year: 2026, title: "Oxford & Cambridge Interviews", description: "Oxford: online, early to mid-December. Cambridge: December 1–18. Results: Oxford Jan 12; Cambridge Jan 2027.", type: "result", urgent: false },
      { month: "Jan 13, 2027", monthIndex: 0, year: 2027, title: "UCAS Final Deadline — All Non-Oxbridge Courses", description: "6:00 PM UK time. UCL, Imperial, Edinburgh, Manchester, Sheffield, KCL — all have this deadline. No extensions.", type: "deadline", urgent: true },
      { month: "Jan–May 2027", monthIndex: 0, year: 2027, title: "UK University Offers (Rolling)", description: "Non-Oxbridge universities respond rolling Jan–May. Oxford: Jan 12. Cambridge: Jan 2027.", type: "result", urgent: false },
      { month: "Jun–Jul 2027", monthIndex: 5, year: 2027, title: "Apply for UK Student Visa", description: "Apply online at gov.uk/student-visa. Need: CAS, IELTS for UKVI, 28-day bank balance.", type: "visa", urgent: true },
      { month: "Aug–Sep 2027", monthIndex: 7, year: 2027, title: "Depart for UK", description: "Most UK courses begin mid-to-late September.", type: "travel", urgent: false },
    ],
    Canada: [
      { month: "Jan–Jun 2026", monthIndex: 0, year: 2026, title: "Begin IELTS / TOEFL Preparation", description: "All Canadian universities require English proficiency. Target IELTS 6.5+ (UoT/UBC: 7.0+) or TOEFL 90–100+.", type: "exam", urgent: true },
      { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "Sit IELTS / TOEFL — First Attempt", description: "Take by June–July. If below 6.5, retake Sep–Oct 2026.", type: "exam", urgent: true },
      { month: "Nov 1, 2026", monthIndex: 10, year: 2026, title: "University of Toronto Application Deadline", description: "UoT deadline Nov 1. For Lester B. Pearson Scholarship (C$200k full ride) your school must nominate you — speak to your principal NOW.", type: "deadline", urgent: true },
      { month: "Jan 15, 2027", monthIndex: 0, year: 2027, title: "UBC & McGill Final Deadlines", description: "UBC Vancouver: Jan 15. McGill: Jan 15. University of Waterloo: varies by programme.", type: "deadline", urgent: true },
      { month: "Mar–Apr 2027", monthIndex: 2, year: 2027, title: "Admission Decisions & Scholarships", description: "Canadian universities send decisions Mar–Apr. UBC International Major Entrance Scholarship awarded automatically.", type: "result", urgent: false },
      { month: "Apr–May 2027", monthIndex: 3, year: 2027, title: "Apply for Study Permit — DO NOT DELAY", description: "Apply immediately on receiving acceptance — processing takes 8–12 weeks.", type: "visa", urgent: true },
      { month: "Sep 2027", monthIndex: 8, year: 2027, title: "Depart for Canada", description: "Canadian academic year begins early September.", type: "travel", urgent: false },
    ],
    Australia: [
      { month: "Jan–Jun 2026", monthIndex: 0, year: 2026, title: "Begin IELTS Preparation", description: "Australian universities and Student Visa require IELTS. Target 6.5+ (Group of Eight: 7.0+).", type: "exam", urgent: true },
      { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "Sit IELTS — First Attempt", description: "Take IELTS. Group of Eight universities require 7.0+ for competitive programmes.", type: "exam", urgent: true },
      { month: "Aug–Oct 2026", monthIndex: 7, year: 2026, title: "Applications Open — February 2027 Intake", description: "UoM: Oct 31. UNSW Sydney: Oct 31. Monash: Dec 15. University of Adelaide: Jan 31.", type: "open", urgent: true },
      { month: "Oct 31, 2026", monthIndex: 9, year: 2026, title: "UoM & UNSW Application Deadline (Feb intake)", description: "University of Melbourne and UNSW Sydney: Oct 31. Monash: Dec 15.", type: "deadline", urgent: true },
      { month: "Nov–Dec 2026", monthIndex: 10, year: 2026, title: "Receive Offer, CoE & Apply Visa", description: "After accepting offer, university issues CoE. Purchase OSHC BEFORE applying for visa.", type: "visa", urgent: true },
      { month: "Jan–Feb 2027", monthIndex: 0, year: 2027, title: "Depart for Australia (February Intake)", description: "February intake begins early February. Arrive 1–2 weeks early for orientation.", type: "travel", urgent: false },
    ],
    Germany: [
      { month: "Jan–Mar 2026", monthIndex: 0, year: 2026, title: "Apply for APS Certificate — DO THIS FIRST", description: "APS certificate is MANDATORY. Apply at aps-india.de. Takes 4–8 weeks. Without APS your visa WILL be refused.", type: "exam", urgent: true },
      { month: "Mar–May 2026", monthIndex: 2, year: 2026, title: "Applications — Winter Semester 2026", description: "Winter Semester 2026 (Oct/Nov start): Deadline May 15–June 15 via uni-assist.de. TU Munich, LMU, RWTH Aachen, Heidelberg.", type: "deadline", urgent: true },
      { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "Admission Decisions + Open Sperrkonto", description: "Receive decisions June–August. Open Sperrkonto at Fintiba/Expatrio immediately (€11,208). Book consulate SAME DAY.", type: "visa", urgent: true },
      { month: "Jul–Aug 2026", monthIndex: 6, year: 2026, title: "German Student Visa Interview", description: "Bring: APS certificate, unconditional admission, Sperrkonto proof, IELTS/German certificate, certificates with translations.", type: "visa", urgent: true },
      { month: "Oct–Nov 2026", monthIndex: 9, year: 2026, title: "Depart for Germany — Winter Semester", description: "Winter semester begins October/November.", type: "travel", urgent: false },
    ],
    Netherlands: [
      { month: "Jan–May 2026", monthIndex: 0, year: 2026, title: "Begin IELTS Preparation", description: "Dutch universities require IELTS 6.5+. No IELTS = cannot enrol in English-medium tracks.", type: "exam", urgent: true },
      { month: "Jan 15, 2026", monthIndex: 0, year: 2026, title: "Register at Studielink — Open from January", description: "Register at studielink.nl. Numerus fixus programmes: register by January 15.", type: "open", urgent: true },
      { month: "Apr 1, 2026", monthIndex: 3, year: 2026, title: "Main Dutch Application Deadline", description: "April 1 for most Dutch programmes starting September 2026. TU Delft, UvA, Leiden, VU.", type: "deadline", urgent: true },
      { month: "Apr–May 2026", monthIndex: 3, year: 2026, title: "Selection & Admission Decisions", description: "Dutch universities run selection processes Feb–April. Decisions typically issued April–May.", type: "result", urgent: false },
      { month: "May–Jun 2026", monthIndex: 4, year: 2026, title: "Accept Offer — University Submits MVV to IND", description: "After accepting offer and paying deposit, university submits MVV to IND on your behalf.", type: "visa", urgent: true },
      { month: "Sep 2026", monthIndex: 8, year: 2026, title: "Depart for Netherlands", description: "Dutch academic year begins September.", type: "travel", urgent: false },
    ],
    Singapore: [
      { month: "Jan–May 2026", monthIndex: 0, year: 2026, title: "Begin IELTS / TOEFL Preparation", description: "NUS: IELTS 6.0+; NTU/SMU: 6.5+. Competitive applicants typically score 7.0+.", type: "exam", urgent: true },
      { month: "Dec 2025–Feb 2026", monthIndex: 11, year: 2025, title: "NUS / NTU / SMU Applications Open", description: "NUS: applications open Dec 3, 2025 – Feb 23, 2026 for August 2026 intake. NTU: similar window.", type: "open", urgent: true },
      { month: "Feb 23, 2026", monthIndex: 1, year: 2026, title: "NUS Application Deadline (Aug 2026)", description: "NUS closes Feb 23, 2026 for international qualifications. NTU: similar. SMU: March 31.", type: "deadline", urgent: true },
      { month: "Mar–Jun 2026", monthIndex: 2, year: 2026, title: "Singapore University Offers Released", description: "NUS and NTU send offers Mar–June 2026. SMU by July. MOE Tuition Grant available.", type: "result", urgent: false },
      { month: "Apr–Jun 2026", monthIndex: 3, year: 2026, title: "University Nominates to ICA (SOLAR)", description: "After accepting offer, university nominates you via ICA SOLAR. IPA letter arrives in 4–8 weeks.", type: "visa", urgent: true },
      { month: "Jul–Aug 2026", monthIndex: 6, year: 2026, title: "Depart for Singapore", description: "NUS/NTU/SMU courses begin August. Visit ICA Building within 2 weeks of arrival.", type: "travel", urgent: false },
    ],
    Japan: [
      { month: "Jan–Jun 2026", monthIndex: 0, year: 2026, title: "Japanese / IELTS Preparation", description: "Japanese-taught: JLPT N2+. English-taught (Waseda, Keio): IELTS 6.5+ or TOEFL 80+.", type: "exam", urgent: false },
      { month: "Apr–May 2026", monthIndex: 3, year: 2026, title: "MEXT Scholarship Application Window", description: "Apply through Japanese Embassy in India in April–May. Includes written test + interview.", type: "open", urgent: true },
      { month: "Sep–Nov 2026", monthIndex: 8, year: 2026, title: "Japanese University Applications", description: "University of Tokyo (EAJ/PEAK English): Oct 31. Waseda English: Nov 15. Ritsumeikan: Dec 1.", type: "deadline", urgent: false },
      { month: "Jan–Feb 2027", monthIndex: 0, year: 2027, title: "Admission Decisions", description: "University of Tokyo: February. Waseda: January. Receive Certificate of Admission for Student Visa.", type: "result", urgent: false },
      { month: "Feb–Mar 2027", monthIndex: 1, year: 2027, title: "Apply for Japan Student Visa", description: "Apply for Certificate of Eligibility (COE) through your university — takes 4–8 weeks. Then Student Visa.", type: "visa", urgent: true },
      { month: "Apr 2027", monthIndex: 3, year: 2027, title: "Depart for Japan", description: "Japanese academic year begins April.", type: "travel", urgent: false },
    ],
    India: [
      ...(isEng ? [
        { month: "Nov–Jan 2026", monthIndex: 10, year: 2025, title: "JEE Main Registration", description: "JEE Main 2026 registration at jeemain.nta.ac.in. Session 1: January 2026.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "Jan–Feb 2026", monthIndex: 0, year: 2026, title: "JEE Main Session 1", description: "300 marks. Aim 99+ percentile for IIT eligibility.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "Apr 2026", monthIndex: 3, year: 2026, title: "JEE Main Session 2 + BITSAT", description: "JEE Main Session 2 (April). BITSAT: April–May. VITEEE: April.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "May–Jun 2026", monthIndex: 4, year: 2026, title: "JEE Advanced (IIT Gateway)", description: "Only top 2.5 lakh JEE Main qualifiers eligible. Top 500 rank → IIT Bombay CS.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "JoSAA Counselling — Seat Allotment", description: "JoSAA counselling at josaa.nic.in. Multiple allotment rounds.", type: "result", urgent: true } as UniAdmissionEvent,
      ] : isMed ? [
        { month: "Apr–May 2026", monthIndex: 3, year: 2026, title: "NEET-UG 2026 Registration & Exam", description: "Register at neet.nta.ac.in. Exam: May 2026. Target: 650+ for AIIMS; 550+ for govt medical colleges.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "Jun 2026", monthIndex: 5, year: 2026, title: "NEET Results & MCC Counselling", description: "Results declared June 2026. MCC counselling for All India Quota begins July 2026.", type: "result", urgent: true } as UniAdmissionEvent,
      ] : [
        { month: "Mar–Jun 2026", monthIndex: 2, year: 2026, title: "CUET-UG / IPMAT / CLAT Exams", description: "CUET-UG: May–June 2026 for DU colleges. IPMAT: April–May for IIM. CLAT: May for NLUs.", type: "exam", urgent: true } as UniAdmissionEvent,
        { month: "Jun–Jul 2026", monthIndex: 5, year: 2026, title: "Admissions & Counselling", description: "CUET results: July. DU CSAS counselling: August. Ashoka/KREA/FLAME: own timelines.", type: "result", urgent: false } as UniAdmissionEvent,
      ]),
      { month: "Oct–Apr (Rounds)", monthIndex: 9, year: 2026, title: "Ashoka / KREA / Private University Applications", description: "Ashoka, KREA, Shiv Nadar, FLAME: multiple application rounds Oct–April. SAT 1450+ strengthens scholarship applications.", type: "open", urgent: false },
      { month: "Jul–Aug 2026", monthIndex: 6, year: 2026, title: "Move to Campus / Academic Year Begins", description: "Most Indian universities begin July–August.", type: "travel", urgent: false },
    ],
  };

  return timelines[country] || [];
}

// ─── Helper functions ─────────────────────────────────────────────────────────

export function getUnisForCountry(country: Country, stream: Stream): University[] {
  const db = UNI_DB[country];
  if (!db) return [];
  return (db[stream] ?? db["default"] ?? []).map((u) => ({ ...u, country }));
}

export function getAllRecommendedUnis(countries: Country[], stream: Stream): University[] {
  return countries.flatMap((c) => getUnisForCountry(c, stream));
}

export function getUniExamRequirements(uniName: string): UniExamRequirement[] {
  return UNI_EXAM_REQUIREMENTS[uniName] || [];
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