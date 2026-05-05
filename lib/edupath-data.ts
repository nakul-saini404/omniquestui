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
  prepTips: string[];
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
      "Use Khan Academy free official SAT prep — personalised and linked with College Board",
      "Download the Bluebook app — this is the exact software used in the real exam",
      "Take 1 full practice test every 2 weeks to build stamina and identify weak areas",
      "PCM students: focus on Math 720+ (algebra, advanced maths). PCB students: Reading 700+",
      "Commerce students: practise data analysis and statistics questions in Math section",
      "Humanities students: Reading & Writing is your strength — invest extra time in Math",
    ],
    timeline2026: [
      { month: "Jan–Apr 2026", action: "Start prep: Khan Academy + Bluebook app. Take diagnostic test in week 1 to set baseline." },
      { month: "May–Jul 2026", action: "Section-specific drilling. 1 full test every 2 weeks. Focus on weakest section." },
      { month: "Aug 23, 2026", action: "SAT first attempt. Results in ~2 weeks. If 1300+, consider retake for improvement only." },
      { month: "Oct 4, 2026", action: "SAT retake if Aug score below target. Oct results arrive before Nov 1 ED deadlines." },
      { month: "Nov 1, 2026", action: "SAT retake (last practical attempt for Nov 15 ED deadlines)." },
      { month: "Dec 6, 2026", action: "Final SAT sitting. Absolute last date before Jan 2027 application deadlines." },
    ],
    timeline2027: [
      { month: "Jan–Jun 2027", action: "Start SAT prep for Fall 2028 intake. Diagnostic test in week 1." },
      { month: "Jul–Aug 2027", action: "Intensive prep. 1 full test weekly. Targeted section improvement." },
      { month: "Aug 2027", action: "First SAT attempt for 2028 intake." },
      { month: "Oct–Nov 2027", action: "Retake if needed. Oct sitting results arrive before Nov ED deadlines." },
      { month: "Dec 2027", action: "Final sitting for 2028 intake applications." },
    ],
    eduquestNote: "EduQuest offers structured SAT preparation modules for PCM, PCB, and Commerce students with separate tracks based on your stream. Our students average 120+ score improvement in 3 months.",
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
      "Score valid for 2 years — plan your sitting to align with application deadlines",
      "Computer-delivered IELTS gives results in 3–5 days, allowing faster retake decisions",
    ],
    requiredFor: ["All UK universities (IELTS for UKVI Academic for visa)", "University of Toronto", "UBC Vancouver", "McGill", "Univ. of Melbourne", "UNSW Sydney", "NUS Singapore", "NTU Singapore", "TU Delft", "University of Amsterdam"],
    optionalFor: ["Some universities waive for English-medium CBSE/ISC schools (verify per university)"],
    notRequiredFor: ["Germany (not required)", "Japan (separate requirements)", "India (not required for domestic admissions)"],
    howToApply: "Visit ielts.idp.com or britishcouncil.in. Select 'IELTS Academic' (NOT General Training). For UK universities: select 'IELTS for UKVI Academic' specifically. Choose city and date. Upload passport photo. Pay ~₹17,000 via UPI, net banking, or card. Bring Passport on exam day.",
    prepTips: [
      "Take a mock test first to find your baseline — don't study blindly",
      "Writing Task 2 essays and Speaking are where most Indian students lose bands — prioritise these",
      "PCM students: practise Writing Task 1 graph descriptions (very relevant for Engineering)",
      "PCB students: medical and ethics essay topics in Task 2 — practise these specifically",
      "Commerce/Humanities students: your writing strengths are an advantage — aim 7.5+",
      "Computer-delivered IELTS recommended — faster results (3–5 days) vs paper (13 days)",
    ],
    timeline2026: [
      { month: "Jan–May 2026", action: "Begin IELTS prep. Take diagnostic mock test. Identify weakest band. Focus on Writing Task 2 daily." },
      { month: "Jun–Jul 2026", action: "First IELTS attempt. Computer-delivered recommended for fast results." },
      { month: "Aug–Sep 2026", action: "Retake if below target band. Last chance before Oct–Nov for Jan 2027 deadlines." },
      { month: "Oct 2026", action: "Final retake window for January 2027 application deadlines." },
    ],
    timeline2027: [
      { month: "Jan–May 2027", action: "Begin IELTS prep for 2028 intake. Diagnostic test in month 1." },
      { month: "Jun–Jul 2027", action: "First attempt. Aim to complete by July for retake headroom." },
      { month: "Aug–Oct 2027", action: "Retake if needed. Results must be in hand before Jan 2028 deadlines." },
    ],
    eduquestNote: "EduQuest runs stream-specific IELTS prep sessions. PCM students get extra Writing Task 1 (diagrams, processes), PCB students focus on medical topics in Task 2, and Commerce students work on business essay arguments.",
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
    cost: "~£115 in the EU (India testing centres limited — check official site)",
    prepTime: "3–4 months alongside 12th boards",
    registrationWindow: "Opens May each year. Exam window: Jul–Sep. Register at ucat.ac.uk",
    examWindow: "July–September (for Oct 15 UK UCAS Medicine deadline)",
    applyLink: "https://www.ucat.ac.uk",
    benefits: [
      "Mandatory for UK Medical schools — no UCAT means you cannot apply to most UK Medicine programmes",
      "UCAS Medicine deadline is October 15 — UCAT must be completed BEFORE this date",
      "A 2900+ UCAT score significantly differentiates you among thousands of Medicine applicants",
      "SJT (Situational Judgement Test) Band 1 is as important as the overall score for MMI interviews",
      "Same exam used for Australia (UCAT ANZ) — one prep can cover both UK and Australian Med applications",
    ],
    requiredFor: ["Edinburgh Medicine (UCAT 2900+ competitive)", "King's College London Medicine", "Manchester Medicine", "Newcastle Medicine", "Queen Mary BLSA Medicine", "Univ. of Melbourne Medicine (UCAT ANZ)", "Monash Medicine (UCAT ANZ)", "NUS Medicine Singapore (UCAT ANZ)"],
    optionalFor: [],
    notRequiredFor: ["Cambridge Medicine (uses BMAT/ESAT instead)", "Oxford Medicine (uses BMAT)", "US Medical schools (use MCAT for grad entry)", "Canadian medical schools (use MCAT)", "German medical schools"],
    howToApply: "Register at ucat.ac.uk. Select test centre (limited India centres — Pearson VUE centres in major cities). You can also take it internationally. Pay ~£115. Exam is adaptive computer-based. Results available on the day.",
    prepTips: [
      "Start prep in April–May — you need 3 months before the July exam window",
      "Verbal Reasoning is the hardest for most Indian students — practise daily with timed passages",
      "Abstract Reasoning: pattern recognition — do 50+ practice sets weekly",
      "Decision Making: logic puzzles — LNAT prep overlaps here",
      "Quantitative Reasoning: maths under extreme time pressure — 25 questions in 25 minutes",
      "SJT: read the GMC Good Medical Practice document and practise ethical scenarios",
    ],
    timeline2026: [
      { month: "Apr–May 2026", action: "Begin UCAT preparation. Buy official UCAT prep book + Medify/Kaplan subscription. Take diagnostic." },
      { month: "Jun–Jul 2026", action: "Intensive prep: 2+ hours daily. Focus Verbal Reasoning and Abstract Reasoning." },
      { month: "Jul–Sep 2026", action: "Sit UCAT exam. Aim for 2700+ overall, Band 1–2 SJT. Results available same day." },
      { month: "Oct 15, 2026", action: "UCAS Medicine applications deadline. Your UCAT score is already submitted." },
    ],
    timeline2027: [
      { month: "Apr–May 2027", action: "Start UCAT prep for 2028 Medical intake." },
      { month: "Jul–Sep 2027", action: "Sit UCAT exam. Results for Oct 15 2027 UCAS deadline." },
      { month: "Oct 15, 2027", action: "UCAS Medicine deadline for 2028 entry." },
    ],
    eduquestNote: "Medicine is EduQuest's most specialised pathway. Our Medical counsellors guide UCAT prep, personal statement writing (clinical experience framing), and MMI interview preparation. Students we work with have secured offers at Edinburgh, KCL, and Manchester.",
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
    examWindow: "October–November (for Jan 15 UCAS deadline)",
    applyLink: "https://www.admissionstesting.org/tmua",
    benefits: [
      "Cambridge Maths, CS, Economics, Engineering — no TMUA = no interview (hard prerequisite)",
      "LSE Economics: 6.5+ can be the deciding factor between offer and rejection in competitive years",
      "Warwick Maths/Economics: 6.0+ differentiates applicants with identical predicted grades",
      "Score of 7.0+ is exceptional — admissions tutors explicitly mention it in interview offers",
      "PCM students have a natural advantage — CBSE/ISC Maths aligns well with Paper 1 content",
    ],
    requiredFor: ["Cambridge University — Maths (mandatory)", "Cambridge University — CS (mandatory)", "Cambridge University — Economics (mandatory)", "Cambridge University — Engineering (mandatory)"],
    optionalFor: ["LSE — Economics (beneficial, 6.5+)", "Warwick — Maths (beneficial, 6.0+)", "Warwick — Economics (beneficial, 6.0+)"],
    notRequiredFor: ["Imperial College (uses ESAT instead)", "UCL (no TMUA)", "Edinburgh (no TMUA)", "Manchester (no TMUA)", "All non-UK universities"],
    howToApply: "Create account at admissionstesting.org. Search 'TMUA'. Select India test centre (Delhi, Mumbai, Bangalore, Chennai, Hyderabad). Pay ~£75 by international card. No calculator permitted in either paper. Bring Passport as ID.",
    prepTips: [
      "Paper 1 (Mathematical Knowledge): cover A-level topics missing from CBSE — complex numbers, formal proof, matrices",
      "Paper 2 (Mathematical Reasoning): proof-based reasoning — identify flaws in mathematical arguments",
      "Use all past TMUA papers from admissionstesting.org + Cambridge STEP I for stretch",
      "Practise under strict time pressure — 3.75 minutes per question in Paper 1",
      "Commerce students: focus on statistics, probability, and algebraic reasoning for Economics",
    ],
    timeline2026: [
      { month: "Apr–Jun 2026", action: "Download TMUA specification. Identify A-level content gaps vs CBSE/ISC. Study missing topics." },
      { month: "Jul–Aug 2026", action: "Complete all past TMUA Paper 1 papers timed. Score and categorise errors." },
      { month: "Aug 2026", action: "Register for TMUA at admissionstesting.org — slots fill fast." },
      { month: "Sep–Oct 2026", action: "TMUA Paper 2 prep (reasoning). Cambridge STEP I problems for harder reasoning." },
      { month: "Oct–Nov 2026", action: "TMUA exam. Scores auto-sent to UCAS universities." },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027", action: "Begin TMUA prep for 2028 Cambridge/LSE/Warwick intake." },
      { month: "Aug 2027", action: "Register for TMUA." },
      { month: "Oct–Nov 2027", action: "Sit TMUA exam for 2028 intake." },
    ],
    eduquestNote: "EduQuest's UK pathway specialists have guided students through TMUA preparation specifically for Cambridge Economics and CS. Our approach fills the A-level Maths gap for CBSE/ISC students in 8–10 weeks.",
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
    registrationWindow: "Registration opens August each year at admissionstesting.org. Register immediately — India slots are limited.",
    examWindow: "October–November",
    applyLink: "https://www.admissionstesting.org/esat",
    benefits: [
      "Cambridge Engineering/Natural Sciences/Vet Med — no ESAT = no interview (hard gate)",
      "Imperial Engineering/Science — ESAT is the primary academic filter before interviews",
      "Top-25-percentile ESAT performance at Cambridge essentially guarantees an interview",
      "Strong ESAT score can compensate for slightly lower predicted A-level grades at Imperial",
      "Replaced ENGAA and NSAA in 2024 — use past ENGAA/NSAA papers for practice",
    ],
    requiredFor: ["Cambridge University — Engineering (mandatory)", "Cambridge University — Natural Sciences (mandatory)", "Cambridge University — Veterinary Medicine (mandatory)", "Imperial College London — Engineering (mandatory)", "Imperial College London — Science programmes (mandatory)"],
    optionalFor: [],
    notRequiredFor: ["UCL (no ESAT)", "Edinburgh (no ESAT)", "Manchester (no ESAT)", "Sheffield (no ESAT)", "All non-UK universities"],
    howToApply: "Create account at admissionstesting.org. Select ESAT. Choose India test centre. Select 2 optional modules: PCM → Physics + Chemistry (Engineering) or Physics + Further Maths. PCB → Biology + Chemistry (Natural Sciences/Vet). Pay ~£75. No calculator, no formula sheet.",
    prepTips: [
      "PCM → choose Mathematics (mandatory) + Physics + Chemistry modules for Engineering",
      "PCB → choose Mathematics (mandatory) + Biology + Chemistry for Natural Sciences",
      "Physics section is significantly harder than CBSE 12th — buy A-level Physics textbook (Edexcel/Cambridge)",
      "Use past ENGAA papers (2016–2023) for Physics practice — directly equivalent to ESAT Physics",
      "Use past NSAA papers for Biology and Chemistry practice",
      "Speed is critical — 89 seconds per question across all sections",
    ],
    timeline2026: [
      { month: "Apr–Jun 2026", action: "Decide module choices. Download ESAT specimen papers. Identify A-level content gaps vs CBSE 12th." },
      { month: "Jul–Sep 2026", action: "A-level content study + past ENGAA/NSAA papers daily. 2–3 hrs/day." },
      { month: "Aug 2026", action: "Register for ESAT at admissionstesting.org immediately when registration opens." },
      { month: "Sep–Oct 2026", action: "Full timed ESAT simulations. All 3 parts back-to-back. Mark against scheme." },
      { month: "Oct–Nov 2026", action: "ESAT exam. Results auto-sent to Cambridge and Imperial via UCAS." },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027", action: "Begin ESAT prep for 2028 Cambridge/Imperial intake." },
      { month: "Aug 2027", action: "Register immediately when registration opens." },
      { month: "Oct–Nov 2027", action: "Sit ESAT for 2028 intake." },
    ],
    eduquestNote: "EduQuest has worked with students applying to Cambridge Engineering and Imperial. Our Physics and Chemistry tutors specifically cover the A-level content gap for CBSE/ISC students preparing for ESAT.",
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
    examWindow: "Year-round (almost weekly). Home Edition available any day.",
    applyLink: "https://www.ets.org/toefl",
    benefits: [
      "Every single US university accepts TOEFL — broadest acceptance in the US vs IELTS",
      "Home Edition identical in validity — very convenient for students outside major cities",
      "Some US universities (MIT, Yale) slightly prefer TOEFL over IELTS",
      "Results available in 4–6 days — fast turnaround for application decisions",
      "If IELTS prep isn't working — TOEFL Integrated tasks may suit analytical PCM students better",
    ],
    requiredFor: ["All US universities (100+ iBT expected at competitive schools)", "All Canadian universities (90–100+ iBT)", "Most Australian universities (79–94+)", "Cambridge/Oxford (110+ as IELTS alternative)"],
    optionalFor: ["UK universities that accept TOEFL as alternative to IELTS (verify per university)"],
    notRequiredFor: ["Germany (not required)", "Netherlands (IELTS preferred)", "Singapore (IELTS preferred)", "Japan", "India"],
    howToApply: "Create account at ets.org/toefl. Choose Test Centre or Home Edition. Select date. Add 4 free score recipients during registration. Pay ~$185. Bring Passport on exam day.",
    prepTips: [
      "Integrated Writing task (read + listen + write) suits analytical PCM students — lean into this",
      "Speaking is the hardest section for Indian students — use templates for all 4 task types",
      "Listening: practise note-taking from English lectures (TED talks, YouTube lectures) daily",
      "Reading: 2 academic passages timed daily — 18 minutes each",
      "Home Edition: test your setup (microphone, camera, internet speed) a week before exam",
    ],
    timeline2026: [
      { month: "Jan–Apr 2026", action: "Start TOEFL or IELTS prep. Take both diagnostic tests and choose the format that suits you better." },
      { month: "May–Jun 2026", action: "Intensive prep on weakest sections. 1 full practice test per week." },
      { month: "Jun–Jul 2026", action: "Sit TOEFL first attempt. Results in 4–6 days. Retake if below 100." },
      { month: "Sep–Oct 2026", action: "Retake window for Jan 2027 deadlines if needed." },
    ],
    timeline2027: [
      { month: "Jan–May 2027", action: "Start TOEFL prep for 2028 intake." },
      { month: "Jun–Jul 2027", action: "First attempt. Retake headroom before Jan 2028 deadlines." },
    ],
    eduquestNote: "EduQuest offers TOEFL-specific coaching with stream-based preparation — PCM students work on Integrated Writing with scientific content, while Humanities students focus on Literary Reading passages.",
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
      "Interview is rigorous — prepare for questions on your field of study and long-term goals",
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
    howToApply: "Apply at jntataendowment.org after securing university admission. Submit application form, university offer letter, academic transcripts, references, and essay.",
    tips: [
      "Must have university admission in hand before applying — don't apply early",
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
    eligibility: "Indian students applying to German universities. Strong academics (80%+ equivalent). Research interest/motivation letter. Some programmes require German B2.",
    howToApply: "Apply at daad.de/en. Submit motivation letter, academic transcripts, 2 academic references, language certificates. Apply at least 10 months before programme start.",
    tips: [
      "Motivation letter is the most important document — explain research interest specifically",
      "DAAD rewards students with a clear research agenda — be specific about your topic",
      "German language skills (even B1) significantly help your application even for English programmes",
    ],
    link: "https://www.daad.de/en",
  },
  {
    name: "Lester B. Pearson International Scholarship (UoT)",
    amount: "Full tuition + living for 4 years (~C$200,000 total)",
    countries: ["Canada"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Computer Science / AI / Data Science", "Engineering (Mechanical / Civil / EE)", "Business / Economics", "Medicine / Pre-Med", "Liberal Arts / Humanities"],
    deadline: "Applications open with UoT admission — November",
    eligibility: "Exceptional international students applying to UoT. Top academic standing, outstanding extracurricular achievement, leadership, and community impact. Must be nominated by your school.",
    howToApply: "Your school must nominate you at the time of applying to UoT. Can also self-nominate through UoT's online portal. Requires essays, references, and school nomination letter.",
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
    deadline: "Automatic with UBC application (deadline Jan 15)",
    eligibility: "Top international applicants to UBC. 95%+ academic average. Strong personal profile essays. Leadership and extracurricular excellence.",
    howToApply: "Apply to UBC by January 15 and complete your personal profile essays. Scholarship is awarded automatically to the top applicants — no separate application.",
    tips: [
      "Personal profile essays on UBC application are the scholarship application — write them exceptionally well",
      "Demonstrate what makes you distinctly you — not just academic scores",
    ],
    link: "https://you.ubc.ca/financial-planning/scholarships-awards",
  },
  {
    name: "Fulbright-Nehru Undergraduate Fellowship",
    amount: "Full tuition + stipend + travel (for US)",
    countries: ["USA"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities"],
    careers: ["Liberal Arts / Humanities", "Law / Political Science", "Business / Economics", "Life Sciences / Biotech", "Media / Communications"],
    deadline: "June–July each year",
    eligibility: "Indian citizens. Outstanding academic record. Strong interest in US-India understanding/exchange. Primarily for students already at Indian universities (graduate level) — UG opportunities limited.",
    howToApply: "Apply at usief.org.in. Fulbright process is highly competitive — essay quality and references are decisive.",
    tips: [
      "Most Fulbright-Nehru awards are for postgraduate study — plan accordingly",
      "Essays must show how you'll contribute to Indo-US understanding",
      "Strong reference from a professor who can speak to your research potential",
    ],
    link: "https://www.usief.org.in",
  },
  {
    name: "Ashoka University Fellowship (India)",
    amount: "Up to 100% tuition scholarship",
    countries: ["India"],
    streams: ["Commerce", "Humanities", "Undecided"],
    careers: ["Liberal Arts / Humanities", "Business / Economics", "Law / Political Science", "Media / Communications"],
    deadline: "October–April (multiple rounds)",
    eligibility: "Strong academic record (85%+). Exceptional essays and personal statement. Interview performance. SAT 1450+ significantly strengthens scholarship applications.",
    howToApply: "Apply at ashoka.edu.in. Submit application form, essays, SAT/other test scores. Shortlisted for interview. Multiple application rounds — apply early for best scholarship chances.",
    tips: [
      "SAT 1450+ is strongly recommended — it is a major differentiator for scholarships",
      "Essays are the most important component — show intellectual curiosity and passions beyond grades",
      "Apply in Round 1 (October) for highest scholarship probability",
    ],
    link: "https://www.ashoka.edu.in/admissions",
  },
];

// ─── VISA_DB (for ExamGuide component) ────────────────────────────────────────

export const VISA_DB: VisaInfo[] = [
  {
    country: "USA",
    visaType: "F-1 Student Visa",
    processingTime: "3–8 weeks after interview",
    cost: "USD 160 application fee + USD 350 SEVIS fee",
    triggerDocument: "Form I-20 (from university after accepting admission)",
    applyFrom: "Apply after receiving I-20 (May–June for Fall intake). Book appointment immediately — slots fill in hours.",
    keyDeadlines: "Accept offer by May 1 → I-20 issued → Book F-1 slot immediately → Interview June–July → Fly August",
    requiredDocuments: [
      "Form I-20 from university DSO",
      "DS-160 online application form (ceac.state.gov)",
      "SEVIS I-901 fee receipt ($350 at fmjfee.com)",
      "Valid passport (6+ months beyond course end)",
      "2×2 inch passport photo (white background)",
      "Proof of financial support (bank statements: 2+ years tuition + $10k/yr living)",
      "University admission letter",
      "Academic transcripts (10th, 12th marksheets)",
    ],
    financialRequirement: "Bank statements showing 2 years of tuition fees + $10,000–$15,000/yr living expenses. Fixed deposits, liquid savings, and parental income letters all acceptable.",
    interviewRequired: true,
    interviewTips: [
      "Be clear about course name, university, degree duration, and career plan",
      "Show strong ties to India — family, property, career requiring you to return",
      "Answer only what is asked — no extra information",
      "Common questions: Why this university? Who funds you? What after graduation?",
      "Dress formally and arrive 15 minutes early",
    ],
    tips: [
      "Book visa appointment the same day you receive I-20 — slots open and vanish within minutes",
      "Pay SEVIS fee ($350) at fmjfee.com the same day you receive I-20",
      "Complete DS-160 within 1 week of receiving I-20 — do not delay",
      "Carry originals of every document to the interview — officers may ask for them",
      "OPT after graduation: 12 months (36 months STEM) — plan your career timeline around this",
    ],
    link: "https://ustraveldocs.com/in",
  },
  {
    country: "UK",
    visaType: "UK Student Visa",
    processingTime: "2–3 weeks (Priority: 5 working days for £500 extra)",
    cost: "~£490 visa fee + £776/yr Immigration Health Surcharge",
    triggerDocument: "CAS number from university (issued after accepting offer and meeting all conditions)",
    applyFrom: "Apply after receiving CAS (June–July for Sept intake). No earlier than 6 months before course start.",
    keyDeadlines: "Accept UCAS offer May → Conditions met June → CAS issued Jun–Jul → Apply online + VFS biometrics July → Decision 2–3 weeks → Fly August",
    requiredDocuments: [
      "CAS reference number from university",
      "Valid passport",
      "IELTS for UKVI Academic score (NOT standard IELTS)",
      "Bank statements showing required funds for 28 consecutive days",
      "Online visa application form (gov.uk/student-visa)",
    ],
    financialRequirement: "Show: first-year tuition + £1,334/month × 9 months (outside London) or £1,023/month (London) in your bank account for 28 consecutive days before applying.",
    interviewRequired: false,
    interviewTips: [],
    tips: [
      "CRITICAL: You need 'IELTS for UKVI Academic' — NOT standard IELTS. These are different tests.",
      "Bank balance must be maintained for 28 CONSECUTIVE days — any dip resets the clock",
      "CAS details must match your application form exactly — even small mismatches cause rejection",
      "Cannot apply before receiving CAS — do not try to apply early",
      "Graduate Route Visa after completion: 2 years open work (3 for PhD) — no employer needed",
    ],
    link: "https://www.gov.uk/student-visa",
  },
  {
    country: "Canada",
    visaType: "Study Permit",
    processingTime: "8–12 weeks (SDS stream: ~20 working days)",
    cost: "CAD 150",
    triggerDocument: "Letter of Acceptance from a Designated Learning Institution (DLI)",
    applyFrom: "Apply immediately after receiving acceptance letter — do NOT wait. Processing takes 2–3 months.",
    keyDeadlines: "Acceptance Apr–May → Apply Study Permit immediately → Biometrics at VFS → Permit Jul–Aug → Fly Sep",
    requiredDocuments: [
      "Letter of Acceptance (verify DLI at canada.ca/dli)",
      "Completed online application (canada.ca)",
      "Passport",
      "Proof of funds: tuition + CAD 10,000 living + return airfare",
      "IELTS/TOEFL score",
      "Statement of Purpose",
      "Biometrics appointment (VFS Global)",
    ],
    financialRequirement: "First-year tuition + CAD 10,000 living + return airfare. GIC (Guaranteed Investment Certificate) from a Canadian bank accepted for SDS stream — faster processing.",
    interviewRequired: false,
    interviewTips: [],
    tips: [
      "Apply the same day you receive your acceptance letter — 8–12 weeks processing is slow",
      "SDS (Student Direct Stream) is faster (~20 days) if you have GIC + IELTS 6.0+",
      "Statement of Purpose must clearly explain why Canada, why this university, why this course",
      "PGWP after graduation: 1–3 years open work permit — one of the world's best post-study pathways",
      "Express Entry for Permanent Residency available after 1 year of Canadian work experience",
    ],
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
  },
  {
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    processingTime: "2–4 weeks",
    cost: "AUD 710",
    triggerDocument: "Confirmation of Enrolment (CoE) + Overseas Student Health Cover (OSHC)",
    applyFrom: "Apply immediately after receiving CoE and purchasing OSHC.",
    keyDeadlines: "Accept offer → CoE issued → Purchase OSHC → Apply via ImmiAccount → Health exam → Grant notice 2–4 weeks",
    requiredDocuments: [
      "Confirmation of Enrolment (CoE)",
      "OSHC certificate (Bupa, Medibank, or CBHS)",
      "Passport",
      "Financial evidence (tuition + AUD 24,505/yr living)",
      "IELTS/TOEFL score",
      "Genuine Temporary Entrant (GTE) statement",
      "Academic transcripts",
    ],
    financialRequirement: "Full first-year tuition + AUD 24,505/yr living + return airfare. Must also show OSHC (Overseas Student Health Cover) is purchased.",
    interviewRequired: false,
    interviewTips: [],
    tips: [
      "GTE (Genuine Temporary Entrant) statement is the most critical document — explain why you'll return to India",
      "Purchase OSHC BEFORE applying for visa — it's mandatory and must be shown in application",
      "Weak GTE is the #1 rejection reason — be specific about career plans and Indian ties",
      "Subclass 485 Temporary Graduate Visa after graduation: 2–4 years open work rights",
    ],
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
  },
  {
    country: "Germany",
    visaType: "National Visa (Type D) for Study",
    processingTime: "6–12 weeks",
    cost: "~€75",
    triggerDocument: "Unconditional university admission letter + Sperrkonto showing €11,208",
    applyFrom: "Apply for APS certificate FIRST (3+ months before visa appointment). Then admission letter → Sperrkonto → Consulate appointment (very limited slots).",
    keyDeadlines: "Apply APS (aps-india.de) 3+ months early → Admission letter → Sperrkonto → Book consulate immediately → Interview June–July → Fly September",
    requiredDocuments: [
      "APS Certificate (MANDATORY for Indian students — aps-india.de)",
      "Unconditional university admission letter (Zulassungsbescheid)",
      "Sperrkonto (blocked account) at Fintiba/Expatrio/Deutsche Bank showing €11,208",
      "Passport",
      "Health insurance proof",
      "IELTS (for English programmes) or German language certificate (B2 for German programmes)",
      "10th and 12th certificates with official translations",
      "Completed visa application form",
      "Passport photos",
    ],
    financialRequirement: "Sperrkonto (blocked account) holding €11,208 (2025 rate). Monthly withdrawal limit: €934. Open at Fintiba (fintiba.com) or Expatrio (expatrio.com) — takes 1–2 weeks to verify.",
    interviewRequired: true,
    interviewTips: [
      "Know your course content — expect 'What will you study?' and 'Why this university?'",
      "For German-taught programmes: demonstrate B2 German at the interview",
      "Bring originals AND photocopies of every document",
      "APS certificate is non-negotiable — not having it = automatic refusal",
    ],
    tips: [
      "CRITICAL: Apply for APS certificate at aps-india.de immediately — takes 4–8 weeks and is mandatory",
      "Book consulate appointment the same day you have your admission letter — slots are extremely scarce",
      "Sperrkonto must show €11,208 BEFORE your consulate appointment",
      "German Job Seeker Visa after graduation: 18 months to find relevant work. Then EU Blue Card.",
      "APS is the most commonly missed step — many students miss their intake year because of it",
    ],
    link: "https://india.diplo.de",
  },
  {
    country: "Singapore",
    visaType: "Student Pass (ICA)",
    processingTime: "4–8 weeks",
    cost: "SGD 30",
    triggerDocument: "In-Principle Approval (IPA) letter from ICA (via university nomination)",
    applyFrom: "After university nominates you via SOLAR system. IPA letter arrives 4–8 weeks after nomination.",
    keyDeadlines: "Accept offer → University nominates to ICA → IPA letter → Apply via SOLAR (solar.ica.gov.sg) → Arrive Singapore → Collect Student Pass at ICA Building",
    requiredDocuments: [
      "IPA letter from ICA",
      "Passport",
      "Passport photo (ICA specifications)",
      "eForm 16 (SOLAR portal)",
      "Proof of financial support (tuition + SGD 12,000/yr living)",
    ],
    financialRequirement: "Full tuition fees + SGD 12,000/yr living expenses. Bank statements from parents or sponsors showing ability to fund full degree.",
    interviewRequired: false,
    interviewTips: [],
    tips: [
      "Student Pass is issued IN Singapore — your IPA letter is what allows you to enter",
      "Visit ICA Building within 2 weeks of arrival to collect Student Pass",
      "NUS/NTU/SMU graduates are strong candidates for Employment Pass but no automatic rights",
    ],
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

type UniDB = Partial<Record<Stream | "default", University[]>>;

export const UNI_DB: Record<Country, UniDB> = {
  USA: {
    "Science (PCM)": [
      { name: "MIT",               tier: "Reach",  req: 95, sat: 1560, satRequired: "Recommended", deadline: "Jan 1",  cost: "$58k/yr", admissionMode: "Holistic + Essays + Recs + Activities", scholarshipStrength: "Need-blind for internationals; 1550+ SAT + outstanding research profile" },
      { name: "Carnegie Mellon",   tier: "Reach",  req: 90, sat: 1510, satRequired: "Recommended", deadline: "Jan 1",  cost: "$57k/yr", admissionMode: "Holistic + Portfolio (CS/Eng)", scholarshipStrength: "Merit & need-based; 1500+ SAT + strong project portfolio" },
      { name: "Purdue University",  tier: "Target", req: 80, sat: 1390, satRequired: "Yes",          deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "Grades + SAT / ACT score", scholarshipStrength: "Automatic merit awards $3k–$10k/yr for 1350+ SAT" },
      { name: "UT Austin",          tier: "Target", req: 78, sat: 1370, satRequired: "Recommended", deadline: "Dec 1",  cost: "$25k/yr", admissionMode: "Holistic + Essays (out-of-state)", scholarshipStrength: "Competitive merit aid for 1400+ SAT + top GPA" },
      { name: "Arizona State Univ.", tier: "Safety", req: 65, sat: 1230, satRequired: "Optional",    deadline: "Mar 1",  cost: "$18k/yr", admissionMode: "GPA-based + Test-optional", scholarshipStrength: "Merit scholarships up to $10k/yr for 1200+ SAT or 3.5+ GPA" },
    ],
    "Science (PCB)": [
      { name: "Johns Hopkins",      tier: "Reach",  req: 95, sat: 1550, satRequired: "Recommended", deadline: "Jan 2",  cost: "$59k/yr", admissionMode: "Holistic + Essays + Research ECs", scholarshipStrength: "Need-blind; 1550+ SAT + research/clinical experience" },
      { name: "Duke University",    tier: "Reach",  req: 92, sat: 1530, satRequired: "Recommended", deadline: "Jan 2",  cost: "$60k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Need-based only; very competitive; strong research ECs" },
      { name: "Emory University",   tier: "Target", req: 82, sat: 1420, satRequired: "Recommended", deadline: "Jan 15", cost: "$55k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Emory Scholars: merit up to full tuition; 1450+ SAT" },
      { name: "Univ. of Florida",   tier: "Target", req: 76, sat: 1360, satRequired: "Recommended", deadline: "Nov 1",  cost: "$22k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards; competitive for 1350+ SAT" },
      { name: "Univ. of Arizona",   tier: "Safety", req: 65, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$17k/yr", admissionMode: "GPA-based automatic admission", scholarshipStrength: "Merit aid up to $7k/yr for 1200+ SAT" },
    ],
    Commerce: [
      { name: "Wharton (UPenn)",           tier: "Reach",  req: 95, sat: 1560, satRequired: "Recommended", deadline: "Jan 5",  cost: "$60k/yr", admissionMode: "Holistic + Essays + Recs + Interview", scholarshipStrength: "Need-blind; 1550+ SAT + elite leadership/business ECs" },
      { name: "NYU Stern",                 tier: "Reach",  req: 88, sat: 1500, satRequired: "Recommended", deadline: "Jan 15", cost: "$57k/yr", admissionMode: "Holistic + Essays + Activities", scholarshipStrength: "Dean's Scholarship up to $20k/yr for 1480+ SAT" },
      { name: "Univ. of Michigan Ross",   tier: "Target", req: 82, sat: 1440, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays (BBA direct admit)", scholarshipStrength: "Merit aid $5k–$15k/yr; 1400+ SAT + leadership ECs" },
      { name: "Indiana University Kelley", tier: "Target", req: 75, sat: 1370, satRequired: "Recommended", deadline: "Feb 15", cost: "$37k/yr", admissionMode: "GPA + SAT / optional + Essays", scholarshipStrength: "Automatic merit $3k–$8k/yr for 1300+ SAT" },
      { name: "Univ. of Nebraska",         tier: "Safety", req: 65, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$22k/yr", admissionMode: "GPA-based rolling admission", scholarshipStrength: "Merit aid up to $6k/yr for 3.5+ GPA" },
    ],
    default: [
      { name: "University of Michigan",   tier: "Reach",  req: 88, sat: 1470, satRequired: "Recommended", deadline: "Feb 1",  cost: "$48k/yr", admissionMode: "Holistic + Essays + Recs", scholarshipStrength: "Merit aid $5k–$15k/yr; 1430+ SAT + strong ECs" },
      { name: "Univ. of Wisconsin",       tier: "Target", req: 80, sat: 1380, satRequired: "Recommended", deadline: "Feb 1",  cost: "$32k/yr", admissionMode: "GPA + SAT / ACT + Essays", scholarshipStrength: "Merit awards $3k–$10k/yr for 1350+ SAT" },
      { name: "Univ. of Washington",      tier: "Target", req: 78, sat: 1350, satRequired: "Optional",    deadline: "Jan 15", cost: "$36k/yr", admissionMode: "Holistic + Essays", scholarshipStrength: "Need-based only for internationals; limited merit" },
      { name: "Ohio State University",    tier: "Safety", req: 70, sat: 1280, satRequired: "Optional",    deadline: "Feb 1",  cost: "$28k/yr", admissionMode: "GPA-based + optional essays", scholarshipStrength: "Merit aid $3k–$8k/yr for 1280+ SAT" },
      { name: "Arizona State Univ.",      tier: "Safety", req: 60, sat: 1200, satRequired: "Optional",    deadline: "Mar 1",  cost: "$18k/yr", admissionMode: "GPA-based automatic admission", scholarshipStrength: "Merit scholarships up to $10k/yr for 1200+ SAT" },
    ],
  },
  UK: {
    "Science (PCM)": [
      { name: "Imperial College London", tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£35k/yr", admissionMode: "UCAS + ESAT (mandatory) + A-levels/12th", scholarshipStrength: "UG merit limited — strong ESAT + 95%+ boards" },
      { name: "University of Edinburgh", tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£25k/yr", admissionMode: "UCAS + predicted grades", scholarshipStrength: "Edinburgh Global UG Scholarship (partial); 85%+ boards" },
      { name: "University of Manchester", tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£23k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "Partial merit bursaries; 80%+ boards" },
      { name: "University of Sheffield", tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling — grades + personal statement", scholarshipStrength: "Global Excellence Scholarship £2k–£4k; 70%+ boards" },
    ],
    "Science (PCB)": [
      { name: "University of Edinburgh (Medicine)", tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£38k/yr", admissionMode: "UCAS + UCAT (mandatory) + MMI interview", scholarshipStrength: "Limited UG merit; UCAT 2900+ + 95%+ boards essential" },
      { name: "King's College London (Medicine)",   tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£36k/yr", admissionMode: "UCAS + UCAT + MMI interview", scholarshipStrength: "No significant UG merit aid; UCAT 2800+ + 90%+ boards" },
      { name: "Univ. of Manchester (Medicine)",     tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£34k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Limited bursaries; UCAT 2700+ + strong interview" },
      { name: "Newcastle University (Medicine)",    tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£32k/yr", admissionMode: "UCAS + UCAT + MMI", scholarshipStrength: "Occasional merit bursaries; UCAT 2650+" },
      { name: "Queen Mary BLSA (Medicine)",         tier: "Safety", req: 75, sat: null, satRequired: "No", deadline: "Oct 15", cost: "£30k/yr", admissionMode: "UCAS + UCAT + interview", scholarshipStrength: "Need-based only; UCAT 2600+ considered" },
    ],
    default: [
      { name: "University College London",  tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£28k/yr", admissionMode: "UCAS + predicted grades + personal statement", scholarshipStrength: "UCL Global Undergraduate Scholarship (partial); 90%+ boards" },
      { name: "King's College London",      tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Jan 15", cost: "£26k/yr", admissionMode: "UCAS + grades + personal statement", scholarshipStrength: "King's India Scholarship (partial) + 85%+ boards" },
      { name: "Univ. of Exeter",            tier: "Target", req: 72, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£20k/yr", admissionMode: "UCAS rolling + predicted grades", scholarshipStrength: "Exeter International Scholarship up to £4k; 75%+ boards" },
      { name: "Coventry University",        tier: "Safety", req: 60, sat: null, satRequired: "No", deadline: "Jun 30", cost: "£15k/yr", admissionMode: "UCAS rolling — accessible entry", scholarshipStrength: "VC Scholarship up to £3k; 65%+ boards" },
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
      { name: "Univ. of Melbourne", tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$40k/yr", admissionMode: "Academic record + personal statement", scholarshipStrength: "Melbourne International UG Scholarship up to A$25k; 90%+ boards" },
      { name: "UNSW Sydney",        tier: "Reach",  req: 82, sat: null, satRequired: "No", deadline: "Oct 31", cost: "A$38k/yr", admissionMode: "Grades + personal statement", scholarshipStrength: "International Merit Scholarship A$5k–$10k; 85%+ boards" },
      { name: "Monash University",  tier: "Target", req: 75, sat: null, satRequired: "No", deadline: "Dec 15", cost: "A$33k/yr", admissionMode: "Grades-based rolling + personal statement", scholarshipStrength: "International Merit Scholarship up to A$10k; 80%+ boards" },
      { name: "University of Adelaide", tier: "Safety", req: 65, sat: null, satRequired: "No", deadline: "Jan 31", cost: "A$25k/yr", admissionMode: "Grades-based rolling", scholarshipStrength: "Adelaide Scholarship up to 25% fee reduction" },
    ],
  },
  Germany: {
    default: [
      { name: "TU Munich",            tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS certificate + motivation letter", scholarshipStrength: "DAAD: €934/month living; Deutschlandstipendium: €300/month" },
      { name: "LMU Munich",           tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + language proof", scholarshipStrength: "DAAD scholarships; Deutschlandstipendium €300/month" },
      { name: "Heidelberg University", tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "May 31", cost: "€500/sem", admissionMode: "Academic record + APS + German/IELTS proof", scholarshipStrength: "DAAD + Deutschlandstipendium; 78%+ equiv" },
      { name: "RWTH Aachen",          tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Jun 15", cost: "€300/sem", admissionMode: "Academic record + APS certificate", scholarshipStrength: "DAAD scholarships accessible; German B2 + 70%+ boards" },
    ],
  },
  Netherlands: {
    default: [
      { name: "Delft University",    tier: "Reach",  req: 85, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€10k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Holland Scholarship €5k + Delft Excellence partial merit" },
      { name: "Univ. of Amsterdam",  tier: "Target", req: 78, sat: null, satRequired: "No", deadline: "Apr 1", cost: "€9k/yr",  admissionMode: "Academic grades + IELTS + motivation letter", scholarshipStrength: "Amsterdam Merit Scholarship: full tuition for top applicants" },
      { name: "Leiden University",   tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "May 1", cost: "€8.5k/yr", admissionMode: "Academic record + IELTS + motivation letter", scholarshipStrength: "Leiden Excellence Scholarship: partial — 75%+ boards" },
    ],
  },
  Singapore: {
    default: [
      { name: "NUS Singapore", tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$30k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "MOE/ASEAN scholarship: up to full tuition; 92%+ boards" },
      { name: "NTU Singapore", tier: "Reach",  req: 88, sat: null, satRequired: "No", deadline: "Mar 1",  cost: "S$28k/yr", admissionMode: "Academic record + IELTS/TOEFL + interview", scholarshipStrength: "ASEAN/NTU merit: partial to full; 88%+ boards" },
      { name: "SMU Singapore", tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Mar 31", cost: "S$22k/yr", admissionMode: "Academic record + essays + interview", scholarshipStrength: "SMU Global Impact Scholarship; 80%+ boards + ECs" },
    ],
  },
  India: {
    "Science (PCM)": [
      { name: "IIT Bombay (JEE)",   tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank-based counselling (JoSAA)", scholarshipStrength: "Government scholarships; top 500 JEE rank" },
      { name: "IIT Delhi (JEE)",    tier: "Reach",  req: 92, sat: null, satRequired: "No", deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr",  admissionMode: "JEE Advanced rank (JoSAA)", scholarshipStrength: "MCM scholarship for low income; JEE top 1000" },
      { name: "BITS Pilani",        tier: "Target", req: 85, sat: null, satRequired: "No", deadline: "May (BITSAT)",  cost: "₹5L/yr",    admissionMode: "BITSAT score", scholarshipStrength: "Merit cum Means; 320+ BITSAT" },
      { name: "VIT University",     tier: "Safety", req: 70, sat: null, satRequired: "No", deadline: "Feb (VITEEE)", cost: "₹2L/yr",    admissionMode: "VITEEE score", scholarshipStrength: "Chancellor's Award for VITEEE top rank or 95%+ boards" },
    ],
    "Science (PCB)": [
      { name: "AIIMS Delhi",        tier: "Reach",  req: 95, sat: null, satRequired: "No", deadline: "Nov (NEET)",  cost: "₹1L/yr",  admissionMode: "NEET-UG rank (MCC counselling)", scholarshipStrength: "Government-funded; NEET top 50 rank" },
      { name: "CMC Vellore",        tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Apr (NEET)",  cost: "₹3L/yr",  admissionMode: "NEET-UG + CMC entrance + interview", scholarshipStrength: "CMC bursaries; NEET 650+" },
      { name: "Kasturba Medical",   tier: "Target", req: 80, sat: null, satRequired: "No", deadline: "Apr (NEET)",  cost: "₹4L/yr",  admissionMode: "NEET-UG score + institution counselling", scholarshipStrength: "Merit awards; NEET 550+" },
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
      { name: "Ashoka University",              tier: "Reach",  req: 88, sat: 1450, satRequired: "Yes", deadline: "Oct–Apr (Rounds)", cost: "₹15L/yr", admissionMode: "Holistic + Interview + Essays + SAT", scholarshipStrength: "Ashoka Fellowship: up to full scholarship; 1450+ SAT + leadership" },
      { name: "KREA University",                tier: "Target", req: 82, sat: 1400, satRequired: "Yes", deadline: "Oct–Apr",          cost: "₹12L/yr", admissionMode: "Holistic + Interview + SAT", scholarshipStrength: "25–100% merit scholarship; 1400+ SAT" },
      { name: "St. Stephen's College (CUET)",  tier: "Reach",  req: 95, sat: null, satRequired: "No",  deadline: "Jun (CUET)",       cost: "₹60k/yr", admissionMode: "CUET score + Interview", scholarshipStrength: "95%+ CUET percentile" },
      { name: "Shiv Nadar University",          tier: "Target", req: 80, sat: 1350, satRequired: "Yes", deadline: "Dec–May",          cost: "₹7L/yr",  admissionMode: "SAT / SNUSAT + Interview", scholarshipStrength: "Merit based; 1350+ SAT" },
    ],
  },
  Japan: {
    default: [
      { name: "University of Tokyo", tier: "Reach",  req: 90, sat: null, satRequired: "No", deadline: "Oct 31", cost: "¥600k/yr",  admissionMode: "Academic record + Japanese/English + entrance exam", scholarshipStrength: "MEXT scholarship: full coverage — 90%+ boards + JLPT N2" },
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