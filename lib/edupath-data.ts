import type { Country, Stream, University } from "@/types/edupath";

export const COUNTRY_FLAGS: Record<Country, string> = {
  USA: "🇺🇸",
  UK: "🇬🇧",
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  Netherlands: "🇳🇱",
  Singapore: "🇸🇬",
  Japan: "🇯🇵",
  India: "🇮🇳",
};

// ─── CAREER PATH TYPE ─────────────────────────────────────────────────────────

export type CareerPath =
  | "Medicine / Pre-Med"
  | "Engineering / Tech"
  | "Computer Science / AI / Data Science"
  | "Business / Economics"
  | "Law / Political Science"
  | "Life Sciences / Biotech"
  | "Design / Architecture"
  | "Liberal Arts / Humanities"
  | "Media / Communications"
  | "Not decided yet";

// ─── EXAM DATABASE ────────────────────────────────────────────────────────────

export interface Exam {
  name: string;
  fullName: string;
  icon: string;
  countries: Country[];
  streams: Stream[];
  careers: CareerPath[];                // which career paths this exam is for
  type: "Required" | "Recommended" | "Optional";
  requiredFor: string[];
  optionalFor: string[];
  notRequiredFor: string[];
  recommendedScore: string;
  benefits: string[];
  howToApply: string;
  applyLink: string;
  cost: string;
  registrationWindow: string;
  examWindow: string;
  prepTime: string;
  prepTips: string[];
  timeline2026: { month: string; action: string }[];
  timeline2027: { month: string; action: string }[];
  eduquestNote?: string;               // referral note to EduQuest
}

export const EXAM_DB: Exam[] = [
  // ── UCAT ─────────────────────────────────────────────────────────────────────
  {
    name: "UCAT",
    fullName: "University Clinical Aptitude Test",
    icon: "🩺",
    countries: ["UK", "Australia", "Singapore"],
    streams: ["Science (PCB)"],
    careers: ["Medicine / Pre-Med"],
    type: "Required",
    requiredFor: [
      "University of Edinburgh (Medicine)",
      "King's College London (Medicine/Dentistry)",
      "University of Manchester (Medicine)",
      "University of Leeds (Medicine)",
      "Queen Mary University of London (Medicine)",
      "Newcastle University (Medicine)",
      "University of Nottingham (Medicine)",
      "University of Glasgow (Medicine)",
      "University of Melbourne (Medicine) — UCAT ANZ",
      "University of Queensland (Medicine) — UCAT ANZ",
      "NUS Singapore (Medicine) — UCAT ANZ",
    ],
    optionalFor: [],
    notRequiredFor: [
      "Oxford (uses BMAT instead — see BMAT/UCAT note)",
      "Cambridge (uses BMAT — being phased out; check annually)",
      "All US universities (use MCAT for grad medicine)",
      "All Indian medical colleges (use NEET)",
    ],
    recommendedScore: "2800+ total (out of 3600); each subtest 600–900 scale",
    benefits: [
      "Mandatory gate for medicine/dentistry at 30+ UK universities — no UCAT = no interview",
      "UCAT ANZ accepted by Australian and NZ medical schools — one test, multiple countries",
      "High UCAT score secures interview invite; low score = rejection regardless of grades",
      "Tests verbal reasoning, decision making, quantitative reasoning, abstract reasoning, SJT",
      "Scores are valid for one admissions cycle only — timing matters",
      "Indian students with strong NEET prep have an advantage in quantitative subtest",
    ],
    howToApply:
      "Register at ucat.ac.uk (UK/international) or ucat.edu.au (ANZ) → Create account → Choose test centre & date in India (Pearson VUE) → Pay fee → Receive confirmation",
    applyLink: "https://www.ucat.ac.uk",
    cost: "£115 (international, outside EU) — approx ₹12,000",
    registrationWindow: "Registration opens May; test window July–October annually",
    examWindow: "July–October (must sit before applying via UCAS in October)",
    prepTime: "6–10 weeks intensive (start May–June for July test)",
    prepTips: [
      "Use official UCAT question bank — 1,000+ practice questions (free at ucat.ac.uk)",
      "Verbal Reasoning: read fast and answer only from passage — do NOT use prior knowledge",
      "Decision Making: practice syllogisms and Venn diagrams daily",
      "Quantitative Reasoning: mental maths speed is critical — no complex math needed",
      "Abstract Reasoning: identify patterns quickly; 65+ items in 13 minutes",
      "SJT (Situational Judgement): read GMC 'Good Medical Practice' — ethical scenarios",
      "Take 4–6 full timed mocks in the final 2 weeks",
      "Book your test for July/early August — leaves time to retake if needed (you can't retake in same year!)",
    ],
    timeline2026: [
      { month: "Apr 2026", action: "Register for UCAT — sign up at ucat.ac.uk, get access to question bank" },
      { month: "May–Jun 2026", action: "Intensive prep: 2–3 hrs/day. All 5 subtests. Use official question bank" },
      { month: "Jul 2026", action: "Sit UCAT exam (aim for July — early slot, less pressure)" },
      {
        month: "Aug–Sep 2026",
        action: "Receive scores → Shortlist UK medical schools by UCAT threshold → Write UCAS personal statement",
      },
      { month: "Oct 2026", action: "Submit UCAS application (15 Oct deadline for Medicine)" },
      { month: "Nov 2026–Feb 2027", action: "University interviews (MMI format for most medical schools)" },
      { month: "Mar–May 2027", action: "Offers received → Confirm firm and insurance choice" },
    ],
    timeline2027: [
      { month: "Apr 2027", action: "Register for UCAT 2027 — for 2028 intake" },
      { month: "May–Jul 2027", action: "Intensive prep — all subtests" },
      { month: "Jul–Aug 2027", action: "Sit UCAT exam" },
      { month: "Oct 2027", action: "UCAS submission (15 Oct medical deadline)" },
      { month: "Feb–Apr 2028", action: "Interviews and offers" },
    ],
    eduquestNote:
      "EduQuest's medical counsellors specialize in UCAT preparation and UK/Australia medical school applications. Reach out for personalized interview prep (MMI) and personal statement guidance.",
  },

  // ── BMAT ─────────────────────────────────────────────────────────────────────
  {
    name: "BMAT",
    fullName: "BioMedical Admissions Test",
    icon: "🔬",
    countries: ["UK"],
    streams: ["Science (PCB)"],
    careers: ["Medicine / Pre-Med"],
    type: "Required",
    requiredFor: [
      "University of Oxford (Medicine) — check if still in use each year",
      "Imperial College London (Medicine)",
      "UCL (Medicine) — verify annually",
      "Brighton and Sussex Medical School",
      "Some international medical schools (Lee Kong Chian, NTU Singapore — verify annually)",
    ],
    optionalFor: [],
    notRequiredFor: [
      "Most UK universities now use UCAT instead",
      "All US medical schools (MCAT required)",
      "Australian medical schools (use UCAT ANZ)",
    ],
    recommendedScore: "6.0+ in Sections 1 & 2 (scale 1–9); Section 3 graded A–E",
    benefits: [
      "Required specifically for Oxford Medicine — cannot apply without it",
      "Tests aptitudes: Scientific Knowledge, Problem Solving, Writing",
      "Section 2 tests Biology, Chemistry, Physics, Maths at A-level depth — great for JEE/NEET prep overlap",
      "Strong BMAT Section 3 essay demonstrates communication skills",
      "Used by fewer universities than UCAT — targeted prep possible",
    ],
    howToApply:
      "Register at admissionstesting.org → Select BMAT → Choose test centre (British Council in India) → Pay fee",
    applyLink: "https://www.admissionstesting.org/for-test-takers/bmat",
    cost: "£75 approx (international) — check current fees",
    registrationWindow: "August–September for November exam",
    examWindow: "November (one sitting per year)",
    prepTime: "3–5 months (start June–July)",
    prepTips: [
      "Section 1 (Aptitude): Critical thinking and problem solving — UKCAT-style practice helps",
      "Section 2 (Scientific Knowledge): A-level Biology, Chemistry, Physics, Maths — Indian JEE/NEET students have strong foundation",
      "Section 3 (Writing): Practise arguing both sides of medical ethics statements in 30 min",
      "Use official BMAT past papers (free at admissionstesting.org)",
      "Note: BMAT is being reviewed/phased out at some universities — verify each school's requirements annually",
    ],
    timeline2026: [
      { month: "Jun–Jul 2026", action: "Start BMAT prep — focus on scientific knowledge (Section 2)" },
      { month: "Aug 2026", action: "Register for BMAT November exam" },
      { month: "Sep–Oct 2026", action: "Full mock papers + essay practice for Section 3" },
      { month: "Nov 2026", action: "Sit BMAT exam" },
      { month: "Jan 2027", action: "Results used for Oxford/Imperial interviews — prepare MMI" },
    ],
    timeline2027: [
      { month: "Jun–Jul 2027", action: "Start BMAT prep for 2028 intake" },
      { month: "Aug 2027", action: "Register for November exam" },
      { month: "Nov 2027", action: "Sit BMAT exam" },
    ],
    eduquestNote:
      "EduQuest provides dedicated Oxford Medicine and Imperial BMAT coaching, including essay marking and interview preparation.",
  },

  // ── MCAT ─────────────────────────────────────────────────────────────────────
  {
    name: "MCAT",
    fullName: "Medical College Admission Test",
    icon: "🏥",
    countries: ["USA", "Canada"],
    streams: ["Science (PCB)"],
    careers: ["Medicine / Pre-Med"],
    type: "Required",
    requiredFor: [
      "All US MD/DO medical schools (graduate entry — after Bachelor's degree)",
      "Most Canadian medical schools (e.g., McGill, University of Toronto Medical School)",
    ],
    optionalFor: [],
    notRequiredFor: [
      "UK medical schools (use UCAT/BMAT for undergraduate entry)",
      "Australian undergraduate medicine programs (use UCAT ANZ)",
      "Indian medical colleges (NEET)",
      "Note: US medicine is GRADUATE ENTRY — you must complete a Bachelor's first",
    ],
    recommendedScore: "511+ (top medical schools); 515+ (Ivy League medical programs)",
    benefits: [
      "Gateway to all US/Canada medical schools — no MCAT = no application",
      "Tests Biology, Chemistry, Biochemistry, Psychology, Sociology, and Critical Analysis",
      "Valid for 3 years — gives flexibility in application timing",
      "Strong MCAT + GPA + research = competitive US med school profile",
      "US medicine offers one of the highest physician salaries globally",
    ],
    howToApply:
      "Register at aamc.org/mcat → Create AAMC account → Select test date and centre → Pay fee → Prepare 6+ months in advance",
    applyLink: "https://students-residents.aamc.org/mcat",
    cost: "$335 USD (₹28,000 approx)",
    registrationWindow: "Opens ~6 months before test date; early registration advised",
    examWindow: "January–September (multiple dates; spring/summer most popular for US applicants)",
    prepTime: "6–12 months (300+ hours recommended)",
    prepTips: [
      "Use Khan Academy MCAT prep (free, comprehensive) — covers all content areas",
      "Purchase AAMC official practice exams ($35 each) — most predictive of actual score",
      "Focus on Biochemistry and Psychology/Sociology — often weakest for international students",
      "Take 5–8 full-length timed practice exams in the final 2 months",
      "Note: MCAT is for US GRADUATE medicine — undergrad students should plan a pre-med Bachelor's first",
      "Consider pre-med programs at US universities (Biology, Biochemistry, Neuroscience)",
    ],
    timeline2026: [
      { month: "2026–2029", action: "Complete Bachelor's degree (pre-med track) — Biology/Biochemistry recommended" },
      {
        month: "3rd Year Bachelor's (e.g., 2028)",
        action: "Begin MCAT prep — 6–12 months before test date",
      },
      { month: "Final year", action: "Sit MCAT → Apply to US/Canada med schools via AMCAS" },
    ],
    timeline2027: [
      { month: "2027 onwards", action: "Same pathway — pre-med Bachelor's → MCAT → medical school application" },
    ],
    eduquestNote:
      "EduQuest can guide you through the US pre-med pathway — choosing the right undergraduate program, extracurriculars, and research opportunities to build a competitive medical school application.",
  },

  // ── SAT ───────────────────────────────────────────────────────────────────────
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    icon: "📝",
    countries: ["USA", "Canada"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Undecided"],
    careers: [
      "Engineering / Tech",
      "Computer Science / AI / Data Science",
      "Business / Economics",
      "Law / Political Science",
      "Life Sciences / Biotech",
      "Design / Architecture",
      "Liberal Arts / Humanities",
      "Media / Communications",
      "Not decided yet",
    ],
    type: "Recommended",
    requiredFor: [
      "Harvard University",
      "Stanford University",
      "MIT",
      "Princeton University",
      "Yale University",
      "Columbia University",
      "Cornell University",
    ],
    optionalFor: [
      "University of Michigan",
      "UT Austin",
      "Purdue University",
      "Carnegie Mellon",
      "Boston University",
      "UC Berkeley (test-blind for CA residents, test-optional for others)",
    ],
    notRequiredFor: [
      "All UK universities (use UCAS + A-levels / equivalent)",
      "All German universities",
      "All Australian universities",
      "Singapore universities",
    ],
    recommendedScore: "1400+ (competitive); 1500+ (Ivy League / MIT / Stanford)",
    benefits: [
      "Required or strongly recommended at top US universities",
      "Merit scholarships at many US universities require SAT scores",
      "High scores can offset slightly lower GPA in holistic review",
      "Superscore policy at most universities — best section scores combined",
      "SAT Math overlaps significantly with JEE Mains preparation",
    ],
    howToApply:
      "Register at collegeboard.org → Create account → Pick test centre & date → Pay fee → Receive admission ticket",
    applyLink: "https://collegeboard.org",
    cost: "$60 USD (International) — approx ₹5,000",
    registrationWindow: "Opens ~5 months before exam date",
    examWindow: "August, October, November, March, May (international dates vary by country)",
    prepTime: "6–12 months recommended",
    prepTips: [
      "Use Khan Academy free SAT prep (official College Board partner — personalised practice)",
      "Take 4–6 full-length timed practice tests under real conditions",
      "Focus on Math (calculators allowed section + no-calculator) and Reading/Writing",
      "Review grammar rules and evidence-based reading strategies",
      "Retake if score is below target — most universities take superscore",
      "Indian students often score higher in Math — prioritise verbal section prep",
    ],
    timeline2026: [
      { month: "Jan–Mar 2026", action: "Diagnostic test → identify weak areas (Khan Academy)" },
      { month: "Apr–Jun 2026", action: "Structured prep: 2–3 hrs/day using Khan Academy + official tests" },
      { month: "Jul 2026", action: "Full-length mock exams weekly" },
      { month: "Aug 2026", action: "First attempt (aim for Aug/Oct international date)" },
      { month: "Oct 2026", action: "Retake if needed — scores arrive ~2 weeks later" },
      { month: "Nov 2026", action: "Final attempt deadline for Early Decision applications" },
    ],
    timeline2027: [
      { month: "Jan–Jun 2027", action: "Prep for 2028 intake applications" },
      { month: "Aug 2027", action: "First attempt" },
      { month: "Oct–Nov 2027", action: "Retake / final attempt" },
    ],
    eduquestNote:
      "EduQuest offers SAT coaching and US college application guidance from shortlisting to essay editing.",
  },

  // ── IELTS ─────────────────────────────────────────────────────────────────────
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    icon: "🗣️",
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Netherlands", "Singapore", "Japan"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    careers: [
      "Medicine / Pre-Med",
      "Engineering / Tech",
      "Computer Science / AI / Data Science",
      "Business / Economics",
      "Law / Political Science",
      "Life Sciences / Biotech",
      "Design / Architecture",
      "Liberal Arts / Humanities",
      "Media / Communications",
      "Not decided yet",
    ],
    type: "Required",
    requiredFor: [
      "All UK universities (unless 3+ years English-medium schooling)",
      "All Australian universities",
      "Most Canadian universities",
      "Most German universities (English-taught programmes)",
      "NUS Singapore",
      "NTU Singapore",
    ],
    optionalFor: ["Some US universities waive if schooling was in English medium"],
    notRequiredFor: ["Indian universities", "Most Japanese universities (use JLPT/TOEFL instead)"],
    recommendedScore: "7.0+ overall (each band ≥ 6.5); Cambridge/Oxford requires 7.5+; Medical schools often require 7.5+",
    benefits: [
      "Accepted by 11,000+ institutions in 140+ countries",
      "Required for student visa in UK, Australia, Canada",
      "Proves English proficiency to employers globally",
      "Valid for 2 years",
      "Medical schools in UK/Australia require IELTS 7.5+ in each band",
    ],
    howToApply:
      "Register at ielts.org or idp.com → Choose Academic type → Select test centre & date in India → Pay fee",
    applyLink: "https://ielts.org",
    cost: "₹16,500–₹17,000 (India)",
    registrationWindow: "Rolling — register 2–3 months in advance",
    examWindow: "Multiple dates monthly at IDP/British Council centres across India",
    prepTime: "3–6 months",
    prepTips: [
      "Use British Council free practice materials and mock tests",
      "Speaking (often the weakest for Indian students): practise with fluency, not memorised answers",
      "Listening: daily BBC podcasts, TED talks — train your ear for British accents",
      "Writing Task 2: clear structure (intro, 2 body paragraphs, conclusion) — practice 10+ essays",
      "Academic Reading: skim first, then locate answers — never read word-by-word",
      "Medical applicants: target 7.5 in each band, not just overall — check each school's requirement",
    ],
    timeline2026: [
      { month: "Jan–Mar 2026", action: "Band 6 diagnostic mock → identify gaps in all 4 skills" },
      { month: "Apr–May 2026", action: "Intensive prep: speaking practice with tutor, writing feedback" },
      { month: "Jun 2026", action: "First attempt (target 7.0+ or 7.5+ for medicine)" },
      { month: "Jul–Aug 2026", action: "Retake if below target — must be complete before UK Oct deadline" },
      { month: "Sep 2026", action: "Score valid — ready for UK/Australia applications" },
    ],
    timeline2027: [
      { month: "Jan–Mar 2027", action: "Start prep for 2028 intake" },
      { month: "May–Jun 2027", action: "First attempt" },
      { month: "Aug 2027", action: "Retake if needed" },
    ],
    eduquestNote:
      "EduQuest provides IELTS coaching with mock interviews, essay correction, and speaking practice sessions.",
  },

  // ── TMUA ─────────────────────────────────────────────────────────────────────
  {
    name: "TMUA",
    fullName: "Test of Mathematics for University Admission",
    icon: "🔢",
    countries: ["UK"],
    streams: ["Science (PCM)", "Commerce"],
    careers: [
      "Engineering / Tech",
      "Computer Science / AI / Data Science",
      "Business / Economics",
    ],
    type: "Required",
    requiredFor: [
      "University of Cambridge (Maths, Computer Science, Economics)",
      "Durham University (Maths, Economics)",
    ],
    optionalFor: [
      "LSE (improves chances for Maths/Economics)",
      "Warwick (Maths/CS — optional but strongly recommended)",
      "Bath University (Maths)",
    ],
    notRequiredFor: [
      "Imperial College (uses ESAT instead)",
      "All US universities",
      "All Australian/Canadian universities",
      "Medical/Biology applicants",
    ],
    recommendedScore: "6.5+ (scale 1–9); Cambridge typically expects 7.0+",
    benefits: [
      "Mandatory for Cambridge Maths/CS/Economics — no TMUA = application not considered",
      "High TMUA score can offset slightly lower A-level predictions at LSE/Warwick",
      "Demonstrates mathematical reasoning beyond school curriculum",
      "Strengthens application for competitive UK Economics and Maths programmes",
    ],
    howToApply:
      "Register at admissionstesting.org or via Pearson VUE → Select test centre in India → Pay fee → Sit in October/November",
    applyLink: "https://www.admissionstesting.org/for-test-takers/tmua",
    cost: "£75 approx (₹8,000) — fee assistance available",
    registrationWindow: "August–September (for October/November exam)",
    examWindow: "October–November annually",
    prepTime: "4–6 months (start June–July for October exam)",
    prepTips: [
      "Study STEP (Sixth Term Examination Papers) for problem-solving style",
      "Master calculus, algebra, proof, and statistics at A-level depth",
      "Use official TMUA past papers (freely available at admissionstesting.org)",
      "Practise under timed conditions — 2 papers of 75 minutes each",
      "Paper 1: Application of Maths; Paper 2: Mathematical Reasoning",
      "Indian students with strong JEE Maths prep have significant advantage",
    ],
    timeline2026: [
      { month: "Jun–Jul 2026", action: "Begin TMUA prep alongside A-level/board exam revision" },
      { month: "Aug 2026", action: "Register for October/November test date at Pearson VUE" },
      { month: "Sep 2026", action: "Complete all past papers timed; review weak topics" },
      { month: "Oct–Nov 2026", action: "TMUA exam — results used for Jan 2027 UCAS deadline" },
    ],
    timeline2027: [
      { month: "Jun–Jul 2027", action: "Begin prep for 2028 intake" },
      { month: "Aug 2027", action: "Register for Oct/Nov 2027 exam" },
      { month: "Oct–Nov 2027", action: "Sit TMUA exam" },
    ],
    eduquestNote:
      "EduQuest's UK specialists can help you identify whether TMUA is needed for your specific Cambridge/LSE programme and provide targeted maths preparation.",
  },

  // ── ESAT ─────────────────────────────────────────────────────────────────────
  {
    name: "ESAT",
    fullName: "Engineering and Science Admissions Test",
    icon: "⚗️",
    countries: ["UK"],
    streams: ["Science (PCM)", "Science (PCB)"],
    careers: ["Engineering / Tech", "Life Sciences / Biotech"],
    type: "Required",
    requiredFor: [
      "University of Cambridge (Engineering, Natural Sciences, Chemical Engineering, Vet Medicine)",
      "Imperial College London (Engineering, Physics, Chemistry, Materials Science)",
    ],
    optionalFor: [],
    notRequiredFor: [
      "All US universities (SAT/ACT used instead)",
      "University of Edinburgh",
      "University of Manchester",
      "All Australian/Canadian universities",
      "Medical school applicants (use UCAT/BMAT instead)",
    ],
    recommendedScore: "Top 20–25% nationally — Cambridge and Imperial are extremely competitive",
    benefits: [
      "Mandatory for Cambridge Engineering/Natural Sciences — cannot apply without it",
      "Required for Imperial College Engineering — key differentiator for Indian applicants",
      "Tests Physics, Chemistry, Maths reasoning directly relevant to your degree",
      "Tests thinking and problem-solving, not just memorisation",
      "JEE Advanced preparation provides excellent foundation for ESAT",
    ],
    howToApply:
      "Register at esat.admissionstesting.org → Choose test centre in India → Pay fee → Sit in October/November",
    applyLink: "https://esat.admissionstesting.org",
    cost: "£75 (approx ₹8,000)",
    registrationWindow: "August–September (for October/November exam)",
    examWindow: "October–November annually",
    prepTime: "4–6 months (start June for November exam)",
    prepTips: [
      "JEE-level Physics and Chemistry gives a strong foundation — leverage it",
      "Practice official ESAT sample papers and PAT (Physics Aptitude Test) past papers",
      "Time management is critical — 40 minutes per section",
      "Maths 1 is compulsory; then choose Biology/Chemistry/Physics Paper 2",
      "Focus on conceptual understanding — rote memorisation won't work",
    ],
    timeline2026: [
      { month: "May–Jun 2026", action: "Assess ESAT syllabus vs. your JEE/board prep — identify gaps" },
      { month: "Jul–Aug 2026", action: "Targeted ESAT prep using official practice materials" },
      { month: "Aug 2026", action: "Register for ESAT (registration opens August)" },
      { month: "Sep 2026", action: "Full mock papers weekly; focus on speed and accuracy" },
      { month: "Oct–Nov 2026", action: "ESAT exam — scores sent directly to Cambridge/Imperial" },
    ],
    timeline2027: [
      { month: "May–Jul 2027", action: "Begin ESAT prep for 2028 intake" },
      { month: "Aug 2027", action: "Register for Oct/Nov 2027 exam" },
      { month: "Oct–Nov 2027", action: "Sit ESAT exam" },
    ],
    eduquestNote:
      "EduQuest's Cambridge and Imperial specialists offer ESAT preparation alongside JEE coaching — get personalised guidance on bridging the gap.",
  },

  // ── TOEFL ─────────────────────────────────────────────────────────────────────
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    icon: "📖",
    countries: ["USA", "Canada", "Germany", "Netherlands", "Japan"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    careers: [
      "Engineering / Tech",
      "Computer Science / AI / Data Science",
      "Business / Economics",
      "Law / Political Science",
      "Design / Architecture",
      "Liberal Arts / Humanities",
      "Not decided yet",
    ],
    type: "Optional",
    requiredFor: [
      "Many US universities (alternative to IELTS)",
      "Most German English-taught programmes",
      "Netherlands universities (many accept TOEFL)",
    ],
    optionalFor: ["Students who prefer computer-based format over IELTS paper test"],
    notRequiredFor: [
      "UK universities (strongly prefer IELTS Academic)",
      "Australian universities (strongly prefer IELTS)",
      "Medical school applicants (IELTS preferred by medical schools)",
    ],
    recommendedScore: "100+ iBT (competitive US universities); 90+ for most others; 110+ for top programmes",
    benefits: [
      "Widely accepted at US universities — some prefer it over IELTS",
      "Computer-based integrated format (Reading, Listening, Speaking, Writing)",
      "TOEFL iBT Home Edition available if no test centre nearby",
      "Score valid for 2 years",
    ],
    howToApply:
      "Register at ets.org/toefl → Create account → Pick test date and format → Pay fee",
    applyLink: "https://ets.org/toefl",
    cost: "~$245 USD (₹20,000 approx)",
    registrationWindow: "Rolling — book 2–3 months in advance",
    examWindow: "Year-round (multiple dates monthly)",
    prepTime: "2–4 months",
    prepTips: [
      "Use official ETS prep materials and free practice tests at ets.org",
      "Speaking: record yourself answering integrated tasks — listen back and improve",
      "Integrated Writing requires synthesising reading + lecture — unique skill to practise",
      "If applying to UK — prepare IELTS instead; TOEFL less preferred there",
    ],
    timeline2026: [
      { month: "Mar–Apr 2026", action: "Decide: IELTS or TOEFL based on target countries" },
      { month: "May–Jun 2026", action: "Structured prep using official materials" },
      { month: "Jul 2026", action: "First attempt" },
      { month: "Sep 2026", action: "Retake if needed" },
    ],
    timeline2027: [
      { month: "Apr–Jun 2027", action: "Prep for 2028 intake" },
      { month: "Jul 2027", action: "First attempt" },
    ],
    eduquestNote:
      "EduQuest helps students decide between IELTS and TOEFL based on their country targets, and offers preparation for both.",
  },

  // ── LNAT ─────────────────────────────────────────────────────────────────────
  {
    name: "LNAT",
    fullName: "Law National Aptitude Test",
    icon: "⚖️",
    countries: ["UK"],
    streams: ["Humanities", "Commerce"],
    careers: ["Law / Political Science"],
    type: "Required",
    requiredFor: [
      "University of Oxford (Law)",
      "University College London (Law)",
      "University of Glasgow (Law)",
      "King's College London (Law)",
      "University of Bristol (Law)",
      "Durham University (Law)",
      "Nottingham Trent University (Law)",
    ],
    optionalFor: [],
    notRequiredFor: [
      "Most UK universities outside the LNAT consortium",
      "All US law schools (use LSAT for law school — graduate entry in USA)",
      "Indian law colleges (use CLAT)",
    ],
    recommendedScore: "22+ out of 42 (Section A multiple choice); Section B essay — no score, read by admissions",
    benefits: [
      "Required for top UK law schools including Oxford and UCL",
      "Tests critical thinking, verbal reasoning, and argument analysis",
      "Section B essay read directly by Oxford admissions tutors — critical for interview invite",
      "One test used by all LNAT consortium universities — efficient preparation",
    ],
    howToApply:
      "Register at lnat.ac.uk → Choose test date and Pearson VUE centre → Pay fee → Sit before UCAS deadline",
    applyLink: "https://lnat.ac.uk",
    cost: "£50 (UK/EU) / £70 (international) — approx ₹7,500",
    registrationWindow: "Registration opens August; must sit before UCAS deadline (Oct 15 for Oxford)",
    examWindow: "September–January (Oxford applicants must sit before Oct 20)",
    prepTime: "6–10 weeks",
    prepTips: [
      "Section A: 42 MCQ in 95 minutes — no revision content, just argument analysis",
      "Practice with LNAT past papers (free at lnat.ac.uk) — at least 10 timed sections",
      "Section B: 750-word essay on a choice of 3 questions in 40 minutes — practise regularly",
      "Read quality journalism (The Economist, Guardian, Times) to sharpen argument analysis",
      "Do NOT try to 'learn' answers — it tests reasoning, not knowledge",
    ],
    timeline2026: [
      { month: "Jul–Aug 2026", action: "Begin LNAT prep — argument analysis, essay practice" },
      { month: "Sep–Oct 2026", action: "Sit LNAT (before Oct 15 for Oxford, before Jan 15 for others)" },
      { month: "Oct 2026", action: "Submit UCAS application (Oxford law: Oct 15 deadline)" },
      { month: "Dec 2026–Feb 2027", action: "Oxford/UCL interviews for shortlisted candidates" },
    ],
    timeline2027: [
      { month: "Jul–Aug 2027", action: "LNAT prep for 2028 intake" },
      { month: "Sep–Oct 2027", action: "Sit LNAT" },
    ],
    eduquestNote:
      "EduQuest's UK applications team can help with LNAT essay practice and Oxford Law personal statement guidance.",
  },

  // ── GRE ──────────────────────────────────────────────────────────────────────
  {
    name: "GRE",
    fullName: "Graduate Record Examinations",
    icon: "🎓",
    countries: ["USA", "Canada", "Germany", "Netherlands"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    careers: [
      "Engineering / Tech",
      "Computer Science / AI / Data Science",
      "Business / Economics",
      "Law / Political Science",
      "Life Sciences / Biotech",
      "Liberal Arts / Humanities",
    ],
    type: "Optional",
    requiredFor: ["Some US graduate school programmes (Master's / PhD)"],
    optionalFor: [
      "Many US Master's programmes — optional or waived post-COVID",
      "PhD programmes in Sciences/Engineering at top US universities",
    ],
    notRequiredFor: [
      "Undergraduate admissions anywhere",
      "UK/Australia undergraduate programmes",
      "Students applying for undergraduate — GRE is for GRADUATE school",
    ],
    recommendedScore: "320+ (Verbal 158 + Quant 162) for competitive programmes; 330+ for top schools",
    benefits: [
      "Accepted by 1,000+ graduate programmes worldwide",
      "Quant section is straightforward for Indian engineering graduates",
      "Strong GRE score can unlock merit scholarships at US graduate schools",
      "Valid for 5 years",
    ],
    howToApply:
      "Register at ets.org/gre → Select test format (home or centre) → Pay fee → Prepare 3–6 months",
    applyLink: "https://ets.org/gre",
    cost: "$220 USD",
    registrationWindow: "Rolling — year-round",
    examWindow: "Year-round",
    prepTime: "3–6 months",
    prepTips: [
      "Note: This is for GRADUATE (Master's/PhD) programmes, not undergraduate",
      "Verbal section requires strong vocabulary — use Magoosh flashcards daily",
      "Quant is similar to SAT Math — Indian students typically score well",
      "Analytical Writing: practise Issue and Argument essays with clear structure",
    ],
    timeline2026: [
      { month: "For graduate school 2027 intake", action: "Start GRE prep in Jan–Mar 2026" },
      { month: "Apr–Jun 2026", action: "Sit GRE — score valid 5 years" },
      { month: "Aug–Dec 2026", action: "Submit graduate school applications" },
    ],
    timeline2027: [
      { month: "For 2028 graduate intake", action: "Prep Jan–Apr 2027, sit by June 2027" },
    ],
    eduquestNote:
      "EduQuest provides GRE coaching and US graduate school application support including SOP writing and university shortlisting.",
  },
];

// ─── SCHOLARSHIP DATABASE ─────────────────────────────────────────────────────

export interface Scholarship {
  name: string;
  countries: Country[];
  careers: CareerPath[];
  streams: Stream[];
  amount: string;
  eligibility: string;
  deadline: string;
  link: string;
  howToApply: string;
  tips: string[];
}

export const SCHOLARSHIPS: Scholarship[] = [
  {
    name: "Fulbright-Nehru Student Program",
    countries: ["USA"],
    careers: ["Engineering / Tech", "Computer Science / AI / Data Science", "Business / Economics", "Life Sciences / Biotech", "Liberal Arts / Humanities", "Law / Political Science", "Not decided yet"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    amount: "Full funding — tuition, living allowance, travel",
    eligibility: "Indian citizens; undergraduate degree required; exceptional academic record",
    deadline: "July–August (check usief.in annually)",
    link: "https://usief.org.in",
    howToApply:
      "Apply via usief.org.in → Online application → Statement of Purpose + References → Interview",
    tips: [
      "Research component is highly valued — have a clear study objective",
      "Community leadership and civic contribution carry significant weight",
      "Start 12 months before deadline — essays require multiple drafts",
    ],
  },
  {
    name: "Commonwealth Scholarships (Medical/Science)",
    countries: ["UK", "Australia", "Canada"],
    careers: ["Medicine / Pre-Med", "Life Sciences / Biotech", "Engineering / Tech"],
    streams: ["Science (PCB)", "Science (PCM)"],
    amount: "Full funding for Master's / PhD",
    eligibility: "Indian citizens; first-class undergraduate degree; strong research proposal",
    deadline: "Varies by country — typically October–December",
    link: "https://cscuk.fcdo.gov.uk",
    howToApply:
      "Via nominating body (UGC in India) → Academic transcripts → Research proposal",
    tips: [
      "Nominating bodies in India shortlist first — contact UGC",
      "Development impact of your proposed study is evaluated heavily",
      "Strong research publications or clinical experience helps",
    ],
  },
  {
    name: "Inlaks Shivdasani Foundation",
    countries: ["USA", "UK"],
    careers: ["Engineering / Tech", "Computer Science / AI / Data Science", "Business / Economics", "Life Sciences / Biotech", "Liberal Arts / Humanities", "Law / Political Science", "Medicine / Pre-Med"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    amount: "Up to $100,000 — covers tuition + living for 1–3 years",
    eligibility:
      "Indian citizens under 30; brilliant academic record + exceptional non-academic achievement",
    deadline: "March annually",
    link: "https://inlaksfoundation.org",
    howToApply:
      "Online application → Essay → Shortlisting → Interview panel in Mumbai/Delhi",
    tips: [
      "Must already have an offer from a top university before applying",
      "The interview is rigorous — be ready to defend your field of study",
      "Non-academic achievements (arts, sport, social work) are heavily weighted",
    ],
  },
  {
    name: "JN Tata Endowment",
    countries: ["USA", "UK", "Canada", "Australia", "Germany"],
    careers: ["Engineering / Tech", "Computer Science / AI / Data Science", "Business / Economics", "Life Sciences / Biotech", "Liberal Arts / Humanities", "Law / Political Science", "Medicine / Pre-Med"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    amount: "₹4–10 lakhs (partial top-up for other scholarships)",
    eligibility:
      "Indian citizens; first class throughout academics; admitted to foreign university",
    deadline: "January–February annually",
    link: "https://jntataendowment.org",
    howToApply:
      "Online form → Academic transcripts → Admission letter → Statement of Purpose",
    tips: [
      "Works as a top-up — apply alongside Inlaks or university scholarships",
      "Strong emphasis on merit and leadership",
      "Apply as soon as you receive university admission offer",
    ],
  },
  {
    name: "DAAD Scholarships (Germany)",
    countries: ["Germany"],
    careers: ["Engineering / Tech", "Computer Science / AI / Data Science", "Life Sciences / Biotech", "Business / Economics"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Undecided"],
    amount: "€934/month living stipend + tuition (at low/no cost German universities)",
    eligibility: "Undergraduate degree; research or study programme in Germany",
    deadline: "October–November for following year",
    link: "https://daad.de",
    howToApply:
      "Apply via daad.de → Study plan → Language certificate → Reference letters",
    tips: [
      "German B2 language certificate required for German-taught programmes",
      "English-taught programmes need IELTS/TOEFL",
      "Combine with low/no tuition at TU Munich, LMU — very cost-effective",
    ],
  },
  {
    name: "Chevening Scholarship (UK)",
    countries: ["UK"],
    careers: ["Law / Political Science", "Business / Economics", "Engineering / Tech", "Computer Science / AI / Data Science", "Liberal Arts / Humanities", "Media / Communications"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Undecided"],
    amount: "Full funding — tuition, living, travel for 1-year Master's",
    eligibility: "2 years work experience; Bachelor's degree; Indian citizen",
    deadline: "November annually",
    link: "https://chevening.org",
    howToApply:
      "chevening.org → 4 essays + references → Online interview",
    tips: [
      "Primarily for postgraduate (Master's) — less relevant for undergrad",
      "Leadership and networking potential are key evaluation criteria",
      "Must apply to 3 UK universities alongside Chevening application",
    ],
  },
  {
    name: "University Merit Scholarships (USA)",
    countries: ["USA"],
    careers: ["Engineering / Tech", "Computer Science / AI / Data Science", "Business / Economics", "Life Sciences / Biotech", "Liberal Arts / Humanities", "Law / Political Science", "Not decided yet"],
    streams: ["Science (PCM)", "Commerce", "Humanities", "Science (PCB)", "Undecided"],
    amount: "$5,000–$50,000/year (varies by university)",
    eligibility: "Strong SAT + GPA; automatic consideration on application",
    deadline: "Same as application deadline",
    link: "",
    howToApply:
      "Automatically considered when you submit university application — no separate form at most schools",
    tips: [
      "Apply Early Decision/Action to maximise scholarship chances",
      "Northeastern, Drexel, Purdue offer generous merit aid to international students",
      "CSS Profile required for need-based aid at private US universities",
      "Public US universities rarely give need-based aid to international students — focus on merit",
    ],
  },
  {
    name: "Singapore MOE Scholarship",
    countries: ["Singapore"],
    careers: ["Engineering / Tech", "Computer Science / AI / Data Science", "Business / Economics", "Life Sciences / Biotech"],
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Undecided"],
    amount: "Full tuition + SGD 500/month living allowance",
    eligibility:
      "Outstanding academic record; study in Singapore; 3-year bond after graduation",
    deadline: "November–February",
    link: "https://moe.gov.sg/financial-matters/scholarships",
    howToApply:
      "Online application → Academic records → Essay → Interview",
    tips: [
      "Bond requires working in Singapore for 3 years post-graduation",
      "Very competitive — requires near-perfect academic record",
      "Covers NUS and NTU programmes primarily",
    ],
  },
];

// ─── VISA DATABASE ────────────────────────────────────────────────────────────

export interface VisaInfo {
  country: Country;
  visaType: string;
  triggerDocument: string;
  applyFrom: string;
  processingTime: string;
  requiredDocuments: string[];
  financialRequirement: string;
  interviewRequired: boolean;
  interviewTips: string[];
  keyDeadlines: string;
  cost: string;
  link: string;
  tips: string[];
}

export const VISA_DB: VisaInfo[] = [
  {
    country: "USA",
    visaType: "F-1 Student Visa",
    triggerDocument: "I-20 form from your university",
    applyFrom: "May–June 2027 (after receiving I-20)",
    processingTime: "2–8 weeks (varies by US consulate in India)",
    requiredDocuments: [
      "Valid passport (6+ months validity beyond programme end)",
      "I-20 from university",
      "DS-160 online visa application form",
      "SEVIS fee receipt ($350 — pay at fmjfee.com)",
      "Visa interview appointment confirmation",
      "Financial proof (bank statements showing 1 year of tuition + living)",
      "Academic transcripts + admission letter",
      "Scholarship/financial aid letter (if applicable)",
      "SAT/IELTS/TOEFL score reports",
    ],
    financialRequirement:
      "Show bank balance equivalent to 1 year costs (typically $50,000–$70,000 USD)",
    interviewRequired: true,
    interviewTips: [
      "Be clear and concise — answer only what is asked",
      "Know your university, programme, and career plan confidently",
      "Demonstrate strong ties to India (family, property, job offer post-study)",
      "Don't memorise — be natural and honest",
      "Dress formally; arrive 30 min early",
      "Common questions: Why this university? What after graduation? Who funds you?",
    ],
    keyDeadlines:
      "Apply ASAP after receiving I-20 (typically May–June 2027 for September 2027 intake)",
    cost: "$185 USD visa fee + $350 SEVIS fee",
    link: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    tips: [
      "Book visa appointment early — Mumbai/Chennai/Delhi/Hyderabad consulates get booked weeks ahead",
      "SEVIS fee must be paid ≥3 days before interview",
      "Bring original documents + photocopies of everything",
      "OFC appointment (biometrics) happens before the interview",
    ],
  },
  {
    country: "UK",
    visaType: "Student Visa (Tier 4)",
    triggerDocument: "CAS (Confirmation of Acceptance for Studies) from university",
    applyFrom: "July 2027 (after receiving CAS)",
    processingTime: "2–3 weeks (standard); 5 working days (priority — extra cost)",
    requiredDocuments: [
      "Valid passport",
      "CAS reference number from university",
      "Proof of finances (28 consecutive days of bank statements)",
      "English language test result (IELTS Academic — 7.0+ required for medical schools)",
      "ATAS certificate (if required for your course)",
      "TB test certificate (required for Indian applicants — get this early)",
      "Academic transcripts and qualifications",
      "Proof of parental consent (if under 18)",
    ],
    financialRequirement:
      "£1,334/month for London (£1,023/month outside London) × 9 months + first year tuition shown in bank for 28 consecutive days",
    interviewRequired: false,
    interviewTips: [],
    keyDeadlines:
      "Apply from 6 months before course start (earliest); must arrive within 1 month before course starts",
    cost: "£490 GBP + £776 Immigration Health Surcharge per year (NHS access included)",
    link: "https://www.gov.uk/student-visa",
    tips: [
      "TB test required for Indian applicants — do it before applying (VFS Health in major cities)",
      "28-day bank statement rule is strict — don't withdraw large amounts during this window",
      "IHS (Immigration Health Surcharge) gives full NHS access — very valuable for medical needs",
      "Apply online via gov.uk/student-visa",
      "Keep photocopies of all submitted documents",
    ],
  },
  {
    country: "Canada",
    visaType: "Study Permit",
    triggerDocument: "Acceptance letter from Designated Learning Institution (DLI)",
    applyFrom: "As soon as you receive acceptance letter",
    processingTime: "4–8 weeks (online); longer for paper applications",
    requiredDocuments: [
      "Acceptance letter from Canadian DLI",
      "Valid passport",
      "Proof of financial support (tuition + $10,000 CAD/year living)",
      "Letter of explanation (why you want to study in Canada)",
      "Academic transcripts",
      "IELTS/TOEFL scores",
      "Biometrics (at VFS Canada centre)",
      "Custodianship declaration (if under 18)",
    ],
    financialRequirement: "Full tuition + CAD $10,000/year living expenses",
    interviewRequired: false,
    interviewTips: [],
    keyDeadlines: "Apply 3–4 months before programme start date",
    cost: "CAD $150 application fee + CAD $85 biometrics",
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
    tips: [
      "Apply online via IRCC portal — faster than paper application",
      "Post-Graduate Work Permit (PGWP) — up to 3 years work after graduation",
      "SDS (Student Direct Stream) gives faster processing for Indian students",
      "Some provinces have PNP (Provincial Nominee Program) for easy PR post-study",
    ],
  },
  {
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    triggerDocument: "CoE (Confirmation of Enrolment) from Australian university",
    applyFrom: "Immediately after receiving CoE",
    processingTime: "1–4 weeks (most applications processed quickly)",
    requiredDocuments: [
      "CoE from Australian university",
      "Valid passport",
      "Overseas Student Health Cover (OSHC) — purchased before applying",
      "Financial evidence (tuition + AUD $24,505/year living)",
      "English test results (IELTS 7.0+; medical schools require 7.5+)",
      "Genuine Temporary Entrant (GTE) statement",
      "Academic transcripts",
    ],
    financialRequirement: "Full tuition + AUD $24,505/year living expenses",
    interviewRequired: false,
    interviewTips: [],
    keyDeadlines:
      "Apply as soon as CoE is received — can apply up to 12 months before course start",
    cost: "AUD $710 visa application charge",
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    tips: [
      "GTE statement is key — explain genuine intent to study and return to India",
      "OSHC is mandatory — purchase before applying",
      "Australia allows 48 hours/fortnight work during studies",
      "Post-Study Work Visa (Subclass 485) available after graduation",
    ],
  },
  {
    country: "Germany",
    visaType: "Student Visa (Visum zu Studienzwecken)",
    triggerDocument: "University admission letter",
    applyFrom: "3–4 months before course start",
    processingTime: "6–12 weeks (apply early!)",
    requiredDocuments: [
      "University admission letter",
      "Valid passport",
      "Blocked account proof (€11,208/year in Fintiba/Coracle blocked account)",
      "Health insurance certificate",
      "Academic transcripts + degree certificates (often need apostille)",
      "Language proficiency: IELTS for English programmes; German B2 for German programmes",
      "Motivation letter",
      "Biometric photos",
    ],
    financialRequirement:
      "€11,208 blocked account (Sperrkonto) — mandatory; €934/month released monthly",
    interviewRequired: false,
    interviewTips: [],
    keyDeadlines:
      "Apply at German consulate 3–4 months before semester start (Oct or April intakes)",
    cost: "€75 visa fee",
    link: "https://www.germany.info/in-en/service/visa",
    tips: [
      "Blocked account (Fintiba or Coracle) must be set up BEFORE applying for visa",
      "Documents often need to be apostilled and translated by certified translator",
      "Germany has no tuition fees at public universities — total cost is very low",
      "18-month job-seeker visa available after graduation",
    ],
  },
  {
    country: "Singapore",
    visaType: "Student's Pass",
    triggerDocument: "In-Principle Approval (IPA) letter from ICA",
    applyFrom: "Apply via SOLAR+ system after university acceptance",
    processingTime: "4–8 weeks",
    requiredDocuments: [
      "Acceptance letter from NUS/NTU/SMU",
      "Valid passport",
      "Completed eForm 16 (SOLAR+ system)",
      "Recent passport photos",
      "Academic transcripts",
      "Financial proof",
    ],
    financialRequirement: "Sufficient funds for tuition + SGD $750/month living",
    interviewRequired: false,
    interviewTips: [],
    keyDeadlines:
      "Apply after acceptance; arrive with IPA letter; collect Student's Pass within 2 weeks of arrival",
    cost: "SGD $90",
    link: "https://www.ica.gov.sg/pass-visa/student-s-pass",
    tips: [
      "Apply via SOLAR+ system — university will guide you through the process",
      "SGD $5,000 security deposit may be required",
      "Singapore allows part-time work (16 hrs/week) with Student's Pass",
    ],
  },
];

// ─── UNIVERSITY DATABASE ──────────────────────────────────────────────────────

type UniDB = Partial<Record<Stream | "default", University[]>>;

export const UNI_DB: Record<Country, UniDB> = {
  USA: {
    "Science (PCM)": [
      { name: "MIT", tier: "Reach", req: 95, sat: 1560, deadline: "Jan 1", cost: "$58k/yr" },
      { name: "Carnegie Mellon", tier: "Reach", req: 90, sat: 1510, deadline: "Jan 1", cost: "$57k/yr" },
      { name: "Purdue University", tier: "Target", req: 80, sat: 1390, deadline: "Feb 1", cost: "$28k/yr" },
      { name: "UT Austin", tier: "Target", req: 78, sat: 1370, deadline: "Dec 1", cost: "$25k/yr" },
      { name: "Arizona State Univ.", tier: "Safety", req: 65, sat: 1230, deadline: "Mar 1", cost: "$18k/yr" },
    ],
    "Science (PCB)": [
      {
        name: "Johns Hopkins (Pre-Med)",
        tier: "Reach",
        req: 95,
        sat: 1550,
        deadline: "Jan 2",
        cost: "$59k/yr",
      },
      { name: "Duke University (Biology)", tier: "Reach", req: 92, sat: 1530, deadline: "Jan 2", cost: "$60k/yr" },
      { name: "Emory University (Pre-Med)", tier: "Target", req: 82, sat: 1420, deadline: "Jan 15", cost: "$55k/yr" },
      {
        name: "Univ. of Florida (Biology)",
        tier: "Target",
        req: 76,
        sat: 1360,
        deadline: "Nov 1",
        cost: "$22k/yr",
      },
      { name: "Univ. of Arizona (Bio)", tier: "Safety", req: 65, sat: 1200, deadline: "Mar 1", cost: "$17k/yr" },
    ],
    Commerce: [
      { name: "Wharton (UPenn)", tier: "Reach", req: 95, sat: 1560, deadline: "Jan 5", cost: "$60k/yr" },
      { name: "NYU Stern", tier: "Reach", req: 88, sat: 1500, deadline: "Jan 15", cost: "$57k/yr" },
      {
        name: "Univ. of Michigan Ross",
        tier: "Target",
        req: 82,
        sat: 1440,
        deadline: "Feb 1",
        cost: "$48k/yr",
      },
      {
        name: "Indiana University Kelley",
        tier: "Target",
        req: 75,
        sat: 1370,
        deadline: "Feb 15",
        cost: "$37k/yr",
      },
      { name: "Univ. of Nebraska", tier: "Safety", req: 65, sat: 1200, deadline: "Mar 1", cost: "$22k/yr" },
    ],
    default: [
      {
        name: "University of Michigan",
        tier: "Reach",
        req: 88,
        sat: 1470,
        deadline: "Feb 1",
        cost: "$48k/yr",
      },
      { name: "Univ. of Wisconsin", tier: "Target", req: 80, sat: 1380, deadline: "Feb 1", cost: "$32k/yr" },
      {
        name: "Univ. of Washington",
        tier: "Target",
        req: 78,
        sat: 1350,
        deadline: "Jan 15",
        cost: "$36k/yr",
      },
      {
        name: "Ohio State University",
        tier: "Safety",
        req: 70,
        sat: 1280,
        deadline: "Feb 1",
        cost: "$28k/yr",
      },
      {
        name: "Arizona State Univ.",
        tier: "Safety",
        req: 60,
        sat: 1200,
        deadline: "Mar 1",
        cost: "$18k/yr",
      },
    ],
  },
  UK: {
    "Science (PCM)": [
      {
        name: "Imperial College London (Eng)",
        tier: "Reach",
        req: 90,
        sat: null,
        deadline: "Jan 15",
        cost: "£35k/yr",
      },
      {
        name: "University of Edinburgh",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Jan 15",
        cost: "£25k/yr",
      },
      {
        name: "University of Manchester",
        tier: "Target",
        req: 75,
        sat: null,
        deadline: "Jan 15",
        cost: "£23k/yr",
      },
      {
        name: "University of Sheffield",
        tier: "Safety",
        req: 65,
        sat: null,
        deadline: "Jun 30",
        cost: "£20k/yr",
      },
    ],
    "Science (PCB)": [
      {
        name: "University of Edinburgh (Medicine)",
        tier: "Reach",
        req: 92,
        sat: null,
        deadline: "Oct 15",
        cost: "£38k/yr",
      },
      {
        name: "King's College London (Medicine)",
        tier: "Reach",
        req: 90,
        sat: null,
        deadline: "Oct 15",
        cost: "£36k/yr",
      },
      {
        name: "Univ. of Manchester (Medicine)",
        tier: "Target",
        req: 85,
        sat: null,
        deadline: "Oct 15",
        cost: "£34k/yr",
      },
      {
        name: "Newcastle University (Medicine)",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Oct 15",
        cost: "£32k/yr",
      },
      {
        name: "Queen Mary BLSA (Medicine)",
        tier: "Safety",
        req: 75,
        sat: null,
        deadline: "Oct 15",
        cost: "£30k/yr",
      },
    ],
    default: [
      {
        name: "University College London",
        tier: "Reach",
        req: 88,
        sat: null,
        deadline: "Jan 15",
        cost: "£28k/yr",
      },
      {
        name: "King's College London",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Jan 15",
        cost: "£26k/yr",
      },
      {
        name: "Univ. of Exeter",
        tier: "Target",
        req: 72,
        sat: null,
        deadline: "Jun 30",
        cost: "£20k/yr",
      },
      {
        name: "Coventry University",
        tier: "Safety",
        req: 60,
        sat: null,
        deadline: "Jun 30",
        cost: "£15k/yr",
      },
    ],
  },
  Canada: {
    "Science (PCB)": [
      {
        name: "McMaster (Health Sciences)",
        tier: "Reach",
        req: 90,
        sat: null,
        deadline: "Nov 1",
        cost: "C$40k/yr",
      },
      {
        name: "University of Toronto (Life Sci)",
        tier: "Reach",
        req: 88,
        sat: null,
        deadline: "Nov 1",
        cost: "C$45k/yr",
      },
      {
        name: "Western University (Sci)",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Jan 15",
        cost: "C$30k/yr",
      },
      {
        name: "Dalhousie University",
        tier: "Safety",
        req: 65,
        sat: null,
        deadline: "Mar 1",
        cost: "C$18k/yr",
      },
    ],
    default: [
      {
        name: "University of Toronto",
        tier: "Reach",
        req: 88,
        sat: null,
        deadline: "Nov 1",
        cost: "C$45k/yr",
      },
      { name: "UBC Vancouver", tier: "Reach", req: 85, sat: null, deadline: "Jan 15", cost: "C$40k/yr" },
      { name: "McGill University", tier: "Target", req: 80, sat: null, deadline: "Jan 15", cost: "C$30k/yr" },
      {
        name: "University of Waterloo",
        tier: "Target",
        req: 78,
        sat: null,
        deadline: "Feb 1",
        cost: "C$32k/yr",
      },
      {
        name: "Dalhousie University",
        tier: "Safety",
        req: 65,
        sat: null,
        deadline: "Mar 1",
        cost: "C$18k/yr",
      },
    ],
  },
  Australia: {
    "Science (PCB)": [
      {
        name: "Univ. of Melbourne (Medicine)",
        tier: "Reach",
        req: 90,
        sat: null,
        deadline: "Oct 31",
        cost: "A$65k/yr",
      },
      {
        name: "Monash University (Medicine)",
        tier: "Target",
        req: 82,
        sat: null,
        deadline: "Oct 31",
        cost: "A$60k/yr",
      },
      {
        name: "Univ. of Queensland (Medicine)",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Oct 31",
        cost: "A$55k/yr",
      },
      {
        name: "Deakin University (Health Sci)",
        tier: "Safety",
        req: 70,
        sat: null,
        deadline: "Jan 31",
        cost: "A$30k/yr",
      },
    ],
    default: [
      {
        name: "Univ. of Melbourne",
        tier: "Reach",
        req: 85,
        sat: null,
        deadline: "Oct 31",
        cost: "A$40k/yr",
      },
      { name: "UNSW Sydney", tier: "Reach", req: 82, sat: null, deadline: "Oct 31", cost: "A$38k/yr" },
      { name: "Monash University", tier: "Target", req: 75, sat: null, deadline: "Dec 15", cost: "A$33k/yr" },
      {
        name: "University of Adelaide",
        tier: "Safety",
        req: 65,
        sat: null,
        deadline: "Jan 31",
        cost: "A$25k/yr",
      },
    ],
  },
  Germany: {
    default: [
      { name: "TU Munich", tier: "Reach", req: 90, sat: null, deadline: "May 31", cost: "€500/sem" },
      { name: "LMU Munich", tier: "Target", req: 80, sat: null, deadline: "May 31", cost: "€500/sem" },
      {
        name: "Heidelberg University",
        tier: "Target",
        req: 78,
        sat: null,
        deadline: "May 31",
        cost: "€500/sem",
      },
      { name: "RWTH Aachen", tier: "Safety", req: 70, sat: null, deadline: "Jun 15", cost: "€300/sem" },
    ],
  },
  Netherlands: {
    default: [
      {
        name: "Delft University",
        tier: "Reach",
        req: 85,
        sat: null,
        deadline: "Apr 1",
        cost: "€10k/yr",
      },
      {
        name: "Univ. of Amsterdam",
        tier: "Target",
        req: 78,
        sat: null,
        deadline: "Apr 1",
        cost: "€9k/yr",
      },
      {
        name: "Leiden University",
        tier: "Safety",
        req: 70,
        sat: null,
        deadline: "May 1",
        cost: "€8.5k/yr",
      },
    ],
  },
  Singapore: {
    "Science (PCB)": [
      {
        name: "NUS Singapore (Medicine)",
        tier: "Reach",
        req: 95,
        sat: null,
        deadline: "Mar 1",
        cost: "S$32k/yr",
      },
      {
        name: "NTU Singapore (Bio Sci)",
        tier: "Reach",
        req: 88,
        sat: null,
        deadline: "Mar 1",
        cost: "S$28k/yr",
      },
      {
        name: "SMU Singapore (Life Sci)",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Mar 31",
        cost: "S$22k/yr",
      },
    ],
    default: [
      {
        name: "NUS Singapore",
        tier: "Reach",
        req: 92,
        sat: null,
        deadline: "Mar 1",
        cost: "S$30k/yr",
      },
      {
        name: "NTU Singapore",
        tier: "Reach",
        req: 88,
        sat: null,
        deadline: "Mar 1",
        cost: "S$28k/yr",
      },
      {
        name: "SMU Singapore",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Mar 31",
        cost: "S$22k/yr",
      },
    ],
  },
  India: {
    "Science (PCM)": [
      {
        name: "IIT Bombay (JEE)",
        tier: "Reach",
        req: 95,
        sat: null,
        deadline: "Jan (JEE Adv)",
        cost: "₹2.5L/yr",
      },
      {
        name: "IIT Delhi (JEE)",
        tier: "Reach",
        req: 92,
        sat: null,
        deadline: "Jan (JEE Adv)",
        cost: "₹2.5L/yr",
      },
      {
        name: "BITS Pilani",
        tier: "Target",
        req: 85,
        sat: null,
        deadline: "May (BITSAT)",
        cost: "₹5L/yr",
      },
      {
        name: "VIT University",
        tier: "Safety",
        req: 70,
        sat: null,
        deadline: "Feb (VITEEE)",
        cost: "₹2L/yr",
      },
    ],
    "Science (PCB)": [
      {
        name: "AIIMS Delhi",
        tier: "Reach",
        req: 95,
        sat: null,
        deadline: "Nov (NEET)",
        cost: "₹1L/yr",
      },
      {
        name: "CMC Vellore",
        tier: "Reach",
        req: 90,
        sat: null,
        deadline: "Apr (NEET)",
        cost: "₹3L/yr",
      },
      {
        name: "Kasturba Medical",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Apr (NEET)",
        cost: "₹4L/yr",
      },
    ],
    Commerce: [
      {
        name: "SRCC Delhi",
        tier: "Reach",
        req: 96,
        sat: null,
        deadline: "Jun (CUET)",
        cost: "₹50k/yr",
      },
      {
        name: "LSR Delhi",
        tier: "Target",
        req: 92,
        sat: null,
        deadline: "Jun (CUET)",
        cost: "₹50k/yr",
      },
      {
        name: "Christ University",
        tier: "Safety",
        req: 80,
        sat: null,
        deadline: "Mar",
        cost: "₹1.5L/yr",
      },
    ],
    default: [
      {
        name: "St. Stephen's College",
        tier: "Reach",
        req: 95,
        sat: null,
        deadline: "Jun (CUET)",
        cost: "₹60k/yr",
      },
      {
        name: "Presidency University",
        tier: "Target",
        req: 85,
        sat: null,
        deadline: "Jun (CUET)",
        cost: "₹70k/yr",
      },
      {
        name: "Ashoka University",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Jan",
        cost: "₹8L/yr",
      },
    ],
  },
  Japan: {
    default: [
      {
        name: "University of Tokyo",
        tier: "Reach",
        req: 90,
        sat: null,
        deadline: "Oct 31",
        cost: "¥600k/yr",
      },
      {
        name: "Waseda University",
        tier: "Target",
        req: 80,
        sat: null,
        deadline: "Nov 15",
        cost: "¥1.4M/yr",
      },
      {
        name: "Ritsumeikan Univ.",
        tier: "Safety",
        req: 70,
        sat: null,
        deadline: "Dec 1",
        cost: "¥1.1M/yr",
      },
    ],
  },
};

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
  if (diff >= 10) return { label: `${Math.min(90, 70 + diff)}%`, cls: "high" as const };
  if (diff >= 0) return { label: `${50 + diff * 2}%`, cls: "medium" as const };
  if (diff >= -10)
    return { label: `${Math.max(15, 45 + diff * 2)}%`, cls: "medium" as const };
  return { label: `${Math.max(5, 30 + diff * 1.5).toFixed(0)}%`, cls: "low" as const };
}

export function scoreLabel(s: number): string {
  if (s >= 90) return "Excellent";
  if (s >= 80) return "Strong";
  if (s >= 70) return "Good";
  if (s >= 60) return "Average";
  return "Needs work";
}

// ─── SMART EXAM FILTER ────────────────────────────────────────────────────────

export function getRelevantExams(
  countries: Country[],
  stream: Stream,
  career?: string
): Exam[] {
  return EXAM_DB.filter((e) => {
    const countryMatch = e.countries.some((c) => countries.includes(c));
    const streamMatch =
      e.streams.includes(stream) || e.streams.includes("Undecided");
    const careerMatch =
      !career ||
      career === "Not decided yet" ||
      e.careers.includes(career as CareerPath) ||
      e.careers.includes("Not decided yet");
    return countryMatch && streamMatch && careerMatch;
  });
}

export function getRelevantScholarships(
  countries: Country[],
  stream?: Stream,
  career?: string
): Scholarship[] {
  return SCHOLARSHIPS.filter((s) => {
    const countryMatch = s.countries.some((c) => countries.includes(c));
    const streamMatch =
      !stream || s.streams.includes(stream) || s.streams.includes("Undecided");
    const careerMatch =
      !career ||
      career === "Not decided yet" ||
      s.careers.includes(career as CareerPath);
    return countryMatch && streamMatch && careerMatch;
  });
}

export function getRelevantVisas(countries: Country[]): VisaInfo[] {
  return VISA_DB.filter((v) => countries.includes(v.country));
}