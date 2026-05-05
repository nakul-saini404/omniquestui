import type { Country, Stream } from "@/types/edupath";

// ─── Types ─────────────────────────────────────────────────────────────────────

export type ExamStatus = "Mandatory" | "Recommended" | "Optional" | "Not Required";

export interface UniExamSupport {
  uniName: string;
  status: ExamStatus;
  note: string;
}

export interface ExamCountryInfo {
  country: Country;
  status: ExamStatus;
  benefit: string;
  requiredScore: string;
  waivable: boolean;
  waiveCondition?: string;
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  tagline: string;
  format: string;
  duration: string;
  fee: string;
  website: string;
  prepMonths: number;
  prepStrategy: string;
  currentYearDates: string;
  nextYearDates: string;
  registrationDeadline: string;
  resultsTimeline: string;
  countryInfo: ExamCountryInfo[];
  relevantStreams: Stream[];
  howToRegister: string[];
  universitySupport: UniExamSupport[];
  notNeededIn: Country[];
}

export interface VisaStep {
  step: number;
  title: string;
  detail: string;
  timing: string;
}

export interface VisaInfo {
  country: Country;
  visaType: string;
  keyDocument: string;
  processingTime: string;
  interviewRequired: boolean;
  interviewTips?: string[];
  financialProof: string;
  validityAfterCourse: string;
  officialPortal: string;
  currentYearTimeline: string;
  nextYearTimeline: string;
  steps: VisaStep[];
  commonReasons: string[];
  postStudyWorkRights: string;
}

export interface IntakeTimelineEvent {
  id: string;
  dateLabel: string;
  month: number;
  year: number;
  title: string;
  description: string;
  countries: Country[];
  type: "prep" | "register" | "exam" | "apply" | "decision" | "visa" | "travel";
  urgent: boolean;
}

// ─── Exam Database ─────────────────────────────────────────────────────────────

export const EXAMS: Exam[] = [

  // ── SAT ──────────────────────────────────────────────────────────────────────
  {
    id: "sat",
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    icon: "📐",
    tagline: "The standard US university entrance exam — digital adaptive format",
    format: "Reading & Writing (800) + Math (800) = 1600 total. Fully digital since 2024.",
    duration: "2 hours 14 minutes",
    fee: "~₹6,500 (USD 68 + international processing fee)",
    website: "sat.collegeboard.org",
    prepMonths: 6,
    prepStrategy:
      "Use Khan Academy's free official SAT prep (linked with College Board). Practice 1 full-length digital test every 2 weeks, scaling to weekly in the final month. Focus on Math (algebra, problem-solving) and Reading comprehension. Use the Bluebook app for official digital SAT practice. Target 1400+ for strong applications; 1520+ for Ivy/top-10.",
    currentYearDates:
      "2026 dates: Aug 23, Oct 4, Nov 1, Dec 6. Register at sat.collegeboard.org as soon as registration opens — Indian test centres fill within days.",
    nextYearDates:
      "2027 dates: Mar 8, May 3, Jun 7 (for 2028 intake). For 2027 intake, Dec 2026 is the last practical sitting.",
    registrationDeadline:
      "Registration opens approximately 5 weeks before each test date. For Oct 4 sitting: register by ~Sep 5. Seats at Indian centres are very limited.",
    resultsTimeline:
      "Digital SAT results released approximately 2 weeks after exam. Score reports sent to universities instantly if selected during registration.",
    notNeededIn: ["UK", "Canada", "Australia", "Germany", "Netherlands", "Singapore", "Japan", "India"],
    relevantStreams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    countryInfo: [
      {
        country: "USA",
        status: "Recommended",
        benefit:
          "A 1400+ SAT dramatically strengthens US applications even at test-optional schools — 75%+ of admitted students at top universities still submit scores. SAT is required for merit scholarships at many public universities (Purdue, UT Austin, ASU). At Ivy League schools, 1550+ is the competitive range. A strong SAT can compensate for a slightly lower GPA.",
        requiredScore: "1400+ overall (1520+ for top-10 universities; 1300+ for merit aid at state schools)",
        waivable: true,
        waiveCondition:
          "Most US universities are test-optional — you can apply without SAT. However, submitting a strong score (1400+) is always advantageous. Only skip if your score is below 1200.",
      },
    ],
    howToRegister: [
      "Create a free account at sat.collegeboard.org (name must match passport exactly)",
      "Click 'Register for the SAT' and select your test date",
      "Choose test centre: Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune available",
      "Pay ~₹6,500 via international debit/credit card",
      "Download your admission ticket 1 week before exam",
      "Bring original passport on exam day — only passport accepted as photo ID",
      "Download the Bluebook app and practise the digital format before exam day",
    ],
    universitySupport: [
      { uniName: "MIT",                       status: "Recommended",  note: "Test-optional but 90%+ of admitted students submit. Median submitted score: 1570." },
      { uniName: "Harvard University",        status: "Recommended",  note: "Test-optional. Mid-50% range of submitted scores: 1500–1580." },
      { uniName: "Stanford University",       status: "Recommended",  note: "Test-optional. Strong scores submitted by ~75% of admitted students." },
      { uniName: "Carnegie Mellon",           status: "Recommended",  note: "Strongly recommended for CS/Engineering. Median: 1540." },
      { uniName: "Purdue University",         status: "Mandatory",    note: "SAT used for direct Engineering admission. 1300+ expected for College of Engineering." },
      { uniName: "UT Austin",                 status: "Recommended",  note: "1400+ strengthens out-of-state admission chances significantly." },
      { uniName: "NYU Stern",                 status: "Recommended",  note: "Test-optional but median submitted SAT: 1490. Helpful for Business applicants." },
      { uniName: "Johns Hopkins",             status: "Recommended",  note: "Test-optional until 2027. 75th percentile of submitted scores: 1570." },
      { uniName: "Duke University",           status: "Recommended",  note: "Test-optional. Mid-50% of submitted: 1500–1570." },
      { uniName: "Emory University",          status: "Recommended",  note: "Test-optional. Strong scores support merit scholarship applications." },
      { uniName: "Univ. of Michigan Ross",    status: "Recommended",  note: "Test-optional. 1400+ strengthens Business school application." },
      { uniName: "Indiana University Kelley", status: "Recommended",  note: "1300+ qualifies for automatic merit scholarship consideration." },
      { uniName: "Arizona State Univ.",       status: "Optional",     note: "Test-optional. 1200+ qualifies for merit aid up to $10,000/year." },
      { uniName: "Univ. of Florida",          status: "Recommended",  note: "Test-optional but 1350+ is competitive for out-of-state applicants." },
      { uniName: "Univ. of Washington",       status: "Optional",     note: "Test-optional. Submitting a strong score can help in holistic review." },
    ],
  },

  // ── IELTS ─────────────────────────────────────────────────────────────────────
  {
    id: "ielts",
    name: "IELTS Academic",
    fullName: "International English Language Testing System — Academic",
    icon: "🗣️",
    tagline: "Proof of English proficiency — mandatory for almost all international applications",
    format: "4 sections: Listening (40 min), Reading (60 min), Writing (60 min), Speaking (11–14 min). Band 0–9.",
    duration: "2 hours 45 minutes + Speaking (separate appointment, same day or different day)",
    fee: "~₹17,000 at IDP India or British Council",
    website: "ielts.idp.com  |  britishcouncil.in",
    prepMonths: 3,
    prepStrategy:
      "Take an official mock test first to find your baseline band score. Focus on weak sections: Writing Task 2 essays and Speaking are where most Indian students lose bands. For Writing: practise 1 Task 1 + 1 Task 2 daily; get tutor feedback. For Speaking: record yourself and compare with Band 7 sample answers at ielts.org. Use E2Language (YouTube) and British Council IELTS prep app. Plan to sit the exam twice — a diagnostic attempt and your final official attempt.",
    currentYearDates:
      "2026: Tests run almost every Saturday at IDP and British Council centres across India. Check ielts.idp.com or britishcouncil.in for your city. Book 4–6 weeks in advance. Computer-delivered IELTS gives results in 3–5 days.",
    nextYearDates:
      "2027: Year-round availability. For Jan 2027 deadlines, take IELTS by Oct–Nov 2026 to allow a retake. IELTS scores are valid for 2 years from the exam date.",
    registrationDeadline:
      "Register 4–8 weeks before your chosen date. Popular centres (Delhi, Mumbai) book up fast. Computer-delivered IELTS results in 3–5 days vs. 13 days for paper-based.",
    resultsTimeline:
      "Paper-based: 13 calendar days. Computer-delivered: 3–5 calendar days. Results via your IDP or British Council account online. Test Report Form (TRF) sent directly to universities.",
    notNeededIn: ["Germany", "Japan", "India"],
    relevantStreams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    countryInfo: [
      {
        country: "USA",
        status: "Mandatory",
        benefit:
          "Required by virtually all US universities for international applicants. A 7.0+ score demonstrates academic readiness. Sub-6.5 may result in conditional admission only. Some universities waive for students from English-medium schools but this must be requested per university.",
        requiredScore: "6.5–7.0 overall; no individual band below 6.0 (top schools: 7.0+)",
        waivable: true,
        waiveCondition: "Waiver possible if you studied in an English-medium school for 3+ consecutive years at secondary level. Must be requested individually from each university with a medium-of-instruction letter.",
      },
      {
        country: "UK",
        status: "Mandatory",
        benefit:
          "For UK Student Visa you need IELTS for UKVI specifically (ask IDP/BC for 'IELTS UKVI Academic'). Without a valid IELTS UKVI score your university cannot issue a CAS, which means no student visa. Oxford and Cambridge require 7.5+ with no band below 7.0.",
        requiredScore: "6.5–7.5 (Russell Group: 7.0+; Oxford/Cambridge: 7.5+, no band below 7.0)",
        waivable: true,
        waiveCondition: "Some UK universities waive for CBSE/ISC English-medium school applicants. Verify directly with university admissions.",
      },
      {
        country: "Canada",
        status: "Mandatory",
        benefit:
          "Required for admission at all major Canadian universities and for the Canadian Study Permit. 6.5+ is the standard undergraduate requirement; competitive programs at UoT and UBC require 7.0+.",
        requiredScore: "6.5 overall (UoT/UBC competitive programs: 7.0+; no band below 6.0)",
        waivable: false,
      },
      {
        country: "Australia",
        status: "Mandatory",
        benefit:
          "Required for university admission and Australian Student Visa (Subclass 500). Group of Eight universities require 7.0+. Must also be shown when purchasing mandatory OSHC health cover.",
        requiredScore: "6.5 overall (Group of Eight: 7.0+; no band below 6.0)",
        waivable: false,
      },
      {
        country: "Netherlands",
        status: "Mandatory",
        benefit:
          "Required for all English-taught programmes at Dutch universities. TU Delft, University of Amsterdam, and Leiden all require 6.5+. Without IELTS you cannot enrol in English-medium tracks.",
        requiredScore: "6.5 overall (some programmes: 7.0+)",
        waivable: false,
      },
      {
        country: "Singapore",
        status: "Mandatory",
        benefit:
          "Required by NUS, NTU, and SMU for all international applicants. NUS minimum is 6.0; NTU and SMU require 6.5. Without IELTS or TOEFL you will not receive an offer letter.",
        requiredScore: "6.0–6.5 (NUS: 6.0+; NTU/SMU: 6.5+)",
        waivable: true,
        waiveCondition: "Waivable with an official medium-of-instruction letter from your English-medium school. NUS is most flexible on this.",
      },
    ],
    howToRegister: [
      "Visit ielts.idp.com or britishcouncil.in and click 'Book a test'",
      "Select 'IELTS Academic' — NOT General Training (General is for migration/work visas only)",
      "If applying to UK universities: select 'IELTS for UKVI Academic' specifically",
      "Choose your city and preferred test date",
      "Upload passport-size photo and enter passport details (Passport is mandatory ID)",
      "Pay ~₹17,000 online via UPI, net banking, or card",
      "Receive booking confirmation; download admit card",
      "Bring original passport on exam day — Aadhaar and PAN are NOT accepted",
    ],
    universitySupport: [
      { uniName: "University College London",    status: "Mandatory", note: "7.0 overall; no band below 6.5. Some courses require 7.5." },
      { uniName: "Imperial College London",       status: "Mandatory", note: "7.0 overall; Engineering courses often require 7.0 in each component." },
      { uniName: "University of Edinburgh",       status: "Mandatory", note: "6.5–7.0 depending on programme." },
      { uniName: "University of Manchester",      status: "Mandatory", note: "6.5 overall minimum; no band below 6.0." },
      { uniName: "University of Sheffield",       status: "Mandatory", note: "6.5 overall; no band below 5.5." },
      { uniName: "Coventry University",           status: "Mandatory", note: "6.0 overall minimum." },
      { uniName: "King's College London",         status: "Mandatory", note: "7.0 overall; no band below 6.5." },
      { uniName: "Univ. of Exeter",               status: "Mandatory", note: "6.5 overall; no band below 6.0." },
      { uniName: "University of Toronto",         status: "Mandatory", note: "6.5 overall; some programs 7.0+." },
      { uniName: "UBC Vancouver",                 status: "Mandatory", note: "6.5 overall; Engineering/Business programs: 7.0." },
      { uniName: "McGill University",             status: "Mandatory", note: "6.5 overall minimum." },
      { uniName: "University of Waterloo",        status: "Mandatory", note: "6.5 overall; no band below 6.0." },
      { uniName: "Dalhousie University",          status: "Mandatory", note: "6.5 overall minimum." },
      { uniName: "Univ. of Melbourne",            status: "Mandatory", note: "7.0 overall; no band below 6.5." },
      { uniName: "UNSW Sydney",                   status: "Mandatory", note: "6.5 overall; no band below 6.0." },
      { uniName: "Monash University",             status: "Mandatory", note: "6.5 overall; some courses require 7.0." },
      { uniName: "University of Adelaide",        status: "Mandatory", note: "6.0 overall minimum." },
      { uniName: "NUS Singapore",                 status: "Mandatory", note: "6.0 minimum; competitive applicants typically have 7.0+." },
      { uniName: "NTU Singapore",                 status: "Mandatory", note: "6.5 overall minimum." },
      { uniName: "SMU Singapore",                 status: "Mandatory", note: "6.5 overall minimum." },
      { uniName: "Delft University",              status: "Mandatory", note: "6.5 for most English-taught programmes." },
      { uniName: "Univ. of Amsterdam",            status: "Mandatory", note: "6.5 overall; some programmes require 7.0." },
      { uniName: "Leiden University",             status: "Mandatory", note: "6.5 overall minimum." },
    ],
  },

  // ── TMUA ─────────────────────────────────────────────────────────────────────
  {
    id: "tmua",
    name: "TMUA",
    fullName: "Test of Mathematics for University Admission",
    icon: "🔢",
    tagline: "Essential for UK Maths, Economics & CS at Cambridge, LSE and Warwick",
    format: "2 papers × 75 minutes. Paper 1: Mathematical Knowledge (20 MCQs). Paper 2: Mathematical Reasoning (20 MCQs). Scaled score 1.0–9.0.",
    duration: "2 × 75 minutes (short break between papers)",
    fee: "~£75 (~₹8,000) at authorised test centres in India",
    website: "admissionstesting.org/tmua",
    prepMonths: 3,
    prepStrategy:
      "Download the TMUA specification and all past papers from admissionstesting.org. Paper 1 tests pure maths knowledge at A-level/ISC standard: functions, calculus, sequences, statistics. Paper 2 tests proof-based reasoning — evaluate mathematical arguments and identify flaws. Practise 2 hours daily, alternating past TMUA papers and Cambridge STEP I papers. Mock under timed conditions from week 3. The exam is time-pressured — speed and accuracy both matter.",
    currentYearDates:
      "2026: October–November. Exact date announced at admissionstesting.org in July 2026. Registration opens August 2026 — register immediately as Indian centre slots are limited.",
    nextYearDates:
      "2027 TMUA is for 2028 intake. For 2027 intake, the Oct–Nov 2026 sitting is what you need.",
    registrationDeadline:
      "Registration opens August each year, closes ~3 weeks before exam. India test centres: Delhi, Mumbai, Bangalore, Chennai, Hyderabad.",
    resultsTimeline:
      "Results released November–December via the admissionstesting.org portal. Scores automatically shared with all UCAS-listed universities that use TMUA.",
    notNeededIn: ["USA", "Canada", "Australia", "Germany", "Netherlands", "Singapore", "Japan", "India"],
    relevantStreams: ["Science (PCM)", "Commerce"],
    countryInfo: [
      {
        country: "UK",
        status: "Mandatory",
        benefit:
          "At Cambridge, no TMUA = no interview — it is a hard prerequisite for Mathematics, CS, Economics, and Engineering. At LSE, a score of 6.5+ can make the difference between an offer and rejection in a competitive year. At Warwick, 6.0+ separates applicants with near-identical predicted grades. A score of 7.0+ is exceptional and will be highlighted by admissions tutors.",
        requiredScore: "6.5+ (Cambridge expects 6.5–7.5+; LSE/Warwick benefit from 6.0+)",
        waivable: false,
      },
    ],
    howToRegister: [
      "Visit admissionstesting.org and create a candidate account",
      "Search for 'TMUA' and click 'Register'",
      "Select India as your country and choose an authorised test centre",
      "Pay ~£75 via international debit or credit card",
      "Download confirmation and bring valid photo ID (Passport) on exam day",
      "No calculator is permitted in either paper",
    ],
    universitySupport: [
      { uniName: "Cambridge University",     status: "Mandatory",    note: "Required for Maths, CS, Economics, Engineering. No TMUA = no interview shortlist." },
      { uniName: "LSE",                      status: "Optional",     note: "Not mandatory but 6.5+ significantly improves Economics and Mathematics offer chances." },
      { uniName: "Warwick University",       status: "Optional",     note: "Not mandatory but 6.0+ helps differentiate applicants for Maths and Economics." },
      { uniName: "Imperial College London",  status: "Not Required", note: "Uses ESAT instead. TMUA is not accepted or considered at Imperial." },
      { uniName: "University College London",status: "Not Required", note: "UCL does not use TMUA for any undergraduate programme." },
      { uniName: "University of Edinburgh",  status: "Not Required", note: "Edinburgh does not require TMUA." },
      { uniName: "University of Manchester", status: "Not Required", note: "Manchester does not use TMUA." },
      { uniName: "University of Sheffield",  status: "Not Required", note: "Sheffield does not use TMUA." },
      { uniName: "King's College London",    status: "Not Required", note: "KCL does not use TMUA." },
      { uniName: "Univ. of Exeter",          status: "Not Required", note: "Exeter does not use TMUA." },
    ],
  },

  // ── ESAT ─────────────────────────────────────────────────────────────────────
  {
    id: "esat",
    name: "ESAT",
    fullName: "Engineering & Science Admissions Test",
    icon: "⚗️",
    tagline: "Gateway to Cambridge Engineering/Science and Imperial — replaced ENGAA/NSAA in 2024",
    format: "3 parts (40 min each): Part 1 Mathematics (mandatory) + choose 2 from Physics, Chemistry, Biology, Further Maths. 27 MCQs per part.",
    duration: "~2 hours (3 × 40-minute parts with short breaks)",
    fee: "~£75 (~₹8,000) at authorised test centres in India",
    website: "admissionstesting.org/esat",
    prepMonths: 4,
    prepStrategy:
      "ESAT replaced ENGAA and NSAA from 2024. Use past ENGAA and NSAA papers alongside new ESAT specimen papers. Mathematics section: ISC/CBSE 12th standard content. Physics section: mechanics, waves, electricity, fields, optics at A-level depth. Chemistry: organic, inorganic, and physical. Practise 2–3 hours daily from July onward. Focus on speed under pressure. Use mark schemes to understand examiner logic.",
    currentYearDates:
      "2026: October–November. Registration opens August 2026 at admissionstesting.org.",
    nextYearDates:
      "2027: Oct–Nov 2027 for 2028 intake. For 2027 intake the Oct–Nov 2026 sitting applies.",
    registrationDeadline:
      "Registration opens August, closes ~3 weeks before exam. India centres: Delhi, Mumbai, Bangalore, Chennai, Hyderabad. Register the moment registration opens.",
    resultsTimeline:
      "Results released November–December via admissionstesting.org. Automatically sent to Cambridge and Imperial via UCAS.",
    notNeededIn: ["USA", "Canada", "Australia", "Germany", "Netherlands", "Singapore", "Japan", "India"],
    relevantStreams: ["Science (PCM)", "Science (PCB)"],
    countryInfo: [
      {
        country: "UK",
        status: "Mandatory",
        benefit:
          "Without ESAT you cannot be shortlisted for Engineering at Cambridge or Science/Engineering at Imperial. Cambridge uses ESAT as the primary filter for interview shortlists — top-25-percentile performance essentially guarantees an interview. At Imperial, a strong ESAT score can compensate for slightly lower predicted grades in competitive years.",
        requiredScore: "Top 25–30 percentile nationally. No fixed cutoff — relative scoring. Aim above average in all sections.",
        waivable: false,
      },
    ],
    howToRegister: [
      "Visit admissionstesting.org and log in to your candidate account",
      "Search for 'ESAT' and click 'Register'",
      "Select India and choose an authorised test centre",
      "Choose your two optional modules (e.g. Physics + Chemistry for Engineering; Biology + Chemistry for Natural Sciences)",
      "Pay ~£75 via international card",
      "Bring Passport as ID on exam day — no calculators or formula sheets permitted",
    ],
    universitySupport: [
      { uniName: "Cambridge University",     status: "Mandatory",    note: "Required for Engineering, Natural Sciences, Chemical Engineering, Veterinary Medicine. No ESAT = no interview." },
      { uniName: "Imperial College London",  status: "Mandatory",    note: "Required for all Engineering and most Science programmes from 2024 intake onward." },
      { uniName: "University College London",status: "Not Required", note: "UCL does not use ESAT." },
      { uniName: "University of Edinburgh",  status: "Not Required", note: "Edinburgh does not use ESAT." },
      { uniName: "University of Manchester", status: "Not Required", note: "Manchester does not use ESAT." },
      { uniName: "University of Sheffield",  status: "Not Required", note: "Sheffield does not use ESAT." },
      { uniName: "LSE",                      status: "Not Required", note: "LSE does not offer Engineering/Science programmes." },
      { uniName: "King's College London",    status: "Not Required", note: "KCL does not use ESAT." },
    ],
  },

  // ── TOEFL ─────────────────────────────────────────────────────────────────────
  {
    id: "toefl",
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language — Internet-Based Test",
    icon: "💬",
    tagline: "American English test — alternative to IELTS, preferred by many US universities",
    format: "Reading (35 min), Listening (36 min), Speaking (16 min, AI-scored), Writing (29 min). Total 0–120.",
    duration: "Approximately 2 hours",
    fee: "~$185 (~₹15,500). Home Edition available at same price.",
    website: "ets.org/toefl",
    prepMonths: 3,
    prepStrategy:
      "TOEFL suits students comfortable with integrated tasks. Use ETS Official TOEFL Guide and free TOEFL Practice Online (TPO) tests. Focus on Integrated Writing (summarise a lecture contradicting a passage) and note-taking for Listening. Speaking: use templates for each question type. Home Edition allows testing at home with a webcam — very convenient for Indian students outside major cities.",
    currentYearDates:
      "2026: Available almost every week at ETS-authorised centres across India. Home Edition year-round on demand. Visit ets.org/toefl for schedule.",
    nextYearDates:
      "2027: Continuous year-round availability. For Jan 2027 deadlines, take by Oct–Nov 2026. Scores valid 2 years.",
    registrationDeadline:
      "Book at ets.org/toefl at least 4 weeks in advance for test centres. Home Edition can be booked with 4+ days' notice.",
    resultsTimeline:
      "Unofficial Reading/Listening scores immediately after exam. Full official scores online within 4–6 days. Reports sent to universities within 11 business days.",
    notNeededIn: ["Germany", "Netherlands", "Singapore", "Japan", "India"],
    relevantStreams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    countryInfo: [
      {
        country: "USA",
        status: "Mandatory",
        benefit:
          "Every US university accepts TOEFL — it has broader acceptance in the US than IELTS. Some schools like MIT slightly prefer TOEFL. A score of 100+ iBT is expected at competitive universities; 110+ for Ivy/top-10. Home Edition is extremely convenient and has identical validity.",
        requiredScore: "100+ iBT (110+ for Ivy/top-10; 80+ for most state universities)",
        waivable: true,
        waiveCondition: "Same waiver policy as IELTS — English-medium schooling for 3+ years. Verify per university.",
      },
      {
        country: "UK",
        status: "Optional",
        benefit:
          "Most top UK universities accept TOEFL as an alternative to IELTS. Oxford and Cambridge accept TOEFL (110+). If IELTS prep isn't working well for you, TOEFL is a valid alternative — but verify with your specific UK university first.",
        requiredScore: "100+ (Cambridge/Oxford: 110+; most Russell Group: 95–100+)",
        waivable: true,
        waiveCondition: "Same waiver policies as IELTS — verify with individual UK universities.",
      },
      {
        country: "Canada",
        status: "Mandatory",
        benefit:
          "Accepted alongside IELTS at all major Canadian universities and for Study Permit. UoT accepts TOEFL 100+; UBC accepts TOEFL 90+. Good alternative if you prefer the digital integrated format.",
        requiredScore: "90–100+ iBT (UoT: 100+; UBC: 90+)",
        waivable: false,
      },
      {
        country: "Australia",
        status: "Optional",
        benefit:
          "Accepted as alternative to IELTS by most Australian universities. Slightly less common than IELTS in Australia but fully valid. University of Melbourne accepts TOEFL 79+.",
        requiredScore: "79–94+ iBT depending on university",
        waivable: false,
      },
    ],
    howToRegister: [
      "Create an ETS account at ets.org/toefl (name must match passport)",
      "Click 'Register for a test' and choose Test Centre or Home Edition",
      "Select preferred date and location",
      "Add up to 4 free score reports to universities during registration (additional cost $20 each)",
      "Pay ~$185 (~₹15,500) by international card",
      "Download admit card; bring Passport on exam day",
    ],
    universitySupport: [
      { uniName: "MIT",                   status: "Mandatory",  note: "Accepts TOEFL. Minimum 90 iBT; competitive admits typically score 110+." },
      { uniName: "Harvard University",    status: "Mandatory",  note: "Minimum 100 iBT. Waived for English-medium schools (apply separately)." },
      { uniName: "Johns Hopkins",         status: "Mandatory",  note: "Minimum 100 iBT accepted alongside IELTS." },
      { uniName: "Duke University",       status: "Mandatory",  note: "Minimum 100 iBT." },
      { uniName: "University of Toronto", status: "Mandatory",  note: "Minimum 100 iBT; some programs 105+." },
      { uniName: "UBC Vancouver",         status: "Mandatory",  note: "Minimum 90 iBT overall; no sub-section below 22." },
      { uniName: "Cambridge University",  status: "Optional",   note: "Accepts TOEFL as alternative to IELTS. Minimum 110 iBT." },
      { uniName: "Imperial College London",status: "Optional",  note: "Accepts TOEFL 100+ as alternative to IELTS 7.0." },
      { uniName: "Univ. of Melbourne",    status: "Mandatory",  note: "Minimum 79 iBT for undergraduate programmes." },
      { uniName: "UNSW Sydney",           status: "Mandatory",  note: "Minimum 72 iBT overall; no band below 18." },
    ],
  },
];

// ─── Visa Database ─────────────────────────────────────────────────────────────

export const VISA_DB: Partial<Record<Country, VisaInfo>> = {

  USA: {
    country: "USA",
    visaType: "F-1 Student Visa",
    keyDocument: "Form I-20 — Certificate of Eligibility for Nonimmigrant Student Status, issued by your US university after accepting admission",
    processingTime: "3–8 weeks after visa interview. Book appointment the day you receive your I-20 — Embassy slots in India fill within hours.",
    interviewRequired: true,
    interviewTips: [
      "Demonstrate strong ties to India: family, property, career plans requiring you to return",
      "Be clear about your course name, university name, degree duration, and career goal",
      "Have proof of sufficient funds: bank statements for tuition + $10,000/yr living for 2+ years",
      "Answer only what is asked — do not volunteer extra information",
      "Common questions: 'Why this university?' / 'Who is funding you?' / 'What after graduation?' / 'Do you have family in the US?'",
      "Carry originals of every document — visa officers may ask for originals",
      "Dress formally",
    ],
    financialProof: "Bank statements showing sufficient funds for full tuition + $10,000–$15,000/yr living. Typically 2 years of tuition in account. Fixed deposits, liquid accounts, and property documents accepted.",
    validityAfterCourse: "60-day grace period after graduation. OPT: 12 months work authorisation (36 months for STEM). H-1B sponsorship required for continued long-term work.",
    officialPortal: "ustraveldocs.com/in",
    currentYearTimeline: "For Fall 2026: Accept offer May 1 → Receive I-20 May–Jun 2026 → Pay SEVIS fee immediately → Fill DS-160 → Book visa appointment (do not delay) → Interview Jun–Jul 2026 → Fly Aug 2026.",
    nextYearTimeline: "For Fall 2027: Accept offer May 2027 → Receive I-20 May–Jun 2027 → Pay SEVIS → DS-160 → Book appointment immediately → Interview Jun–Jul 2027 → Fly Aug 2027.",
    steps: [
      { step: 1, title: "Accept offer and pay enrollment deposit", detail: "By May 1 deadline. This triggers the I-20 issuance process at the university's DSO office.", timing: "May 1" },
      { step: 2, title: "Receive Form I-20", detail: "Check all details carefully — name, course, start date, school address must be accurate. This is your most important document.", timing: "May–June" },
      { step: 3, title: "Pay SEVIS I-901 fee ($350)", detail: "Pay at fmjfee.com immediately after receiving I-20. This receipt is required at the visa interview.", timing: "Same day as I-20" },
      { step: 4, title: "Complete DS-160 online form", detail: "US visa application form at ceac.state.gov. Fill carefully — errors cause delays. Print the barcode confirmation page.", timing: "Within 1 week of I-20" },
      { step: 5, title: "Book visa appointment", detail: "At ustraveldocs.com/in. Choose nearest US Consulate: Delhi, Mumbai, Chennai, Hyderabad, or Kolkata. Slots open and fill within minutes — book immediately.", timing: "Immediately — same day as DS-160" },
      { step: 6, title: "Attend visa interview", detail: "Bring: I-20, DS-160 confirmation, SEVIS receipt, passport, 2×2 photos, bank statements, admission letter, academic transcripts. Arrive 15 minutes early.", timing: "June–July" },
      { step: 7, title: "Receive visa and book travel", detail: "Visa stamped in passport within 1–5 working days. You may enter the US up to 30 days before your I-20 start date.", timing: "July–August" },
    ],
    commonReasons: [
      "Insufficient proof of funds — bank balance too low or not sustained over time",
      "Weak demonstration of ties to India — officer believes intent to overstay",
      "Vague or inconsistent answers about course or career goals",
      "Applying to a little-known institution that raises scrutiny",
      "Prior US visa refusal not disclosed (always disclose)",
    ],
    postStudyWorkRights: "OPT: 12 months open work authorisation (36 months for STEM). Then requires H-1B employer sponsorship for continued work status.",
  },

  UK: {
    country: "UK",
    visaType: "UK Student Visa (formerly Tier 4 General Student Visa)",
    keyDocument: "CAS (Confirmation of Acceptance for Studies) — a unique reference number issued by your university after you accept and meet all conditions",
    processingTime: "2–3 weeks via online application + VFS Global biometrics appointment",
    interviewRequired: false,
    financialProof: "Show required funds in your bank for 28 consecutive days before applying. Amount: first-year tuition + £1,334/month for up to 9 months (outside London) or £1,023/month for London. Example: £15,000 tuition + £12,000 living = £27,000 needed for 28 days.",
    validityAfterCourse: "Graduate Route Visa: 2 years open work permit after graduation (3 years for PhD). No employer sponsorship needed during this period.",
    officialPortal: "gov.uk/student-visa",
    currentYearTimeline: "For Sept 2026: Accept UCAS offer May 2026 → Meet conditions June → CAS issued Jun–Jul 2026 → Apply online + VFS biometrics July 2026 → Decision 2–3 weeks → Fly August 2026.",
    nextYearTimeline: "For Sept 2027: Accept offer May 2027 → CAS Jun–Jul 2027 → Apply visa July 2027 → Decision 2–3 weeks → Fly August 2027.",
    steps: [
      { step: 1, title: "Accept UCAS offer and meet conditions", detail: "Pay any deposit and submit conditional offer requirements (English test scores, predicted grades) to your university.", timing: "May–June" },
      { step: 2, title: "Receive CAS from university", detail: "Your university's International Office issues your CAS number. Contains course details and sponsorship information needed for the visa application.", timing: "June–July" },
      { step: 3, title: "Apply online at gov.uk/student-visa", detail: "Need: CAS number, passport, English test score, bank statement for 28 days, parents' details (if under 18).", timing: "July (no earlier than 6 months before course start)" },
      { step: 4, title: "Pay visa fee and Immigration Health Surcharge", detail: "Visa fee ~£490. IHS: £776/year of your course (e.g., 3-year degree = £2,328). Pay online during application.", timing: "During online application" },
      { step: 5, title: "Book and attend VFS Global biometrics", detail: "Book at nearest VFS Global centre (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata). Give fingerprints and photograph.", timing: "Within 1 week of online application" },
      { step: 6, title: "Receive visa decision", detail: "Standard: 2–3 weeks. Priority service (£500 extra): 5 working days. Visa affixed as a vignette sticker in your passport.", timing: "August" },
    ],
    commonReasons: [
      "Financial evidence not showing required balance for 28 consecutive days",
      "Submitting regular IELTS instead of IELTS for UKVI Academic",
      "CAS details not matching the visa application form exactly",
      "Applying before receiving CAS — cannot apply without valid CAS",
    ],
    postStudyWorkRights: "Graduate Route Visa: 2 years (3 years PhD). Work for any employer. Then Skilled Worker Visa with employer sponsorship.",
  },

  Canada: {
    country: "Canada",
    visaType: "Study Permit",
    keyDocument: "Letter of Acceptance from a Designated Learning Institution (DLI) — verify at canada.ca/dli",
    processingTime: "8–12 weeks online. Student Direct Stream (SDS) can take ~20 business days for eligible applicants.",
    interviewRequired: false,
    financialProof: "First-year tuition + CAD 10,000 living expenses + return airfare. GIC (Guaranteed Investment Certificate) from a Canadian bank accepted as living expense proof for SDS stream.",
    validityAfterCourse: "Post-Graduate Work Permit (PGWP): 1–3 years depending on program length. Open work permit — work for any employer. Excellent PR pathway via Express Entry.",
    officialPortal: "canada.ca/study-permit",
    currentYearTimeline: "For Sept 2026: Acceptance by Apr–May 2026 → Apply Study Permit immediately → 8–12 weeks processing → Permit by Jul–Aug 2026.",
    nextYearTimeline: "For Sept 2027: Acceptance Apr–May 2027 → Apply immediately → Permit Jul–Aug 2027.",
    steps: [
      { step: 1, title: "Receive Letter of Acceptance", detail: "From your Canadian DLI-listed university. Verify your university is on the DLI list at canada.ca/dli.", timing: "April–May" },
      { step: 2, title: "Apply online via IRCC", detail: "Create GCKey account at canada.ca. Apply online immediately — processing takes 2–3 months. Include a strong Statement of Purpose.", timing: "Immediately on receiving acceptance" },
      { step: 3, title: "Complete biometrics if required", detail: "Book at VFS Global after IRCC sends Biometric Collection Letter. Must be done within 30 days of the letter.", timing: "Within 30 days of biometrics request" },
      { step: 4, title: "Submit supporting documents", detail: "Acceptance letter, passport, proof of funds (bank statements or GIC), IELTS/TOEFL, transcripts, Statement of Purpose.", timing: "With online application" },
      { step: 5, title: "Receive approval and Port of Entry letter", detail: "IRCC issues a POE letter of introduction. Present this at the Canadian border — actual Study Permit is issued on arrival.", timing: "July–August" },
    ],
    commonReasons: [
      "Insufficient financial evidence — funds must be clearly documented",
      "Weak or vague Statement of Purpose",
      "University not listed as a Designated Learning Institution",
      "Unclear immigration history or prior refusals not disclosed",
    ],
    postStudyWorkRights: "PGWP up to 3 years. Then Express Entry for PR via Canadian Experience Class. One of the world's best post-study pathways.",
  },

  Australia: {
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    keyDocument: "Confirmation of Enrolment (CoE) from your Australian university — issued after accepting offer and paying fees",
    processingTime: "2–4 weeks if GTE statement is strong and documents complete",
    interviewRequired: false,
    financialProof: "Full first-year tuition + AUD 24,505/yr living + return airfare. Must also show OSHC (Overseas Student Health Cover) — purchase before applying.",
    validityAfterCourse: "Temporary Graduate Visa (Subclass 485): 2–4 years open work rights depending on study location and qualification.",
    officialPortal: "immi.homeaffairs.gov.au",
    currentYearTimeline: "For Feb 2026: CoE by Nov 2025 → Apply visa Nov–Dec 2025. For Jul 2026: CoE Apr 2026 → Apply visa Apr–May 2026.",
    nextYearTimeline: "For Feb 2027: CoE Nov 2026 → Apply visa Nov–Dec 2026. For Jul 2027: CoE Apr 2027 → Apply visa Apr–May 2027.",
    steps: [
      { step: 1, title: "Accept offer and receive CoE", detail: "Accept offer and pay deposit. University issues CoE. Also purchase OSHC (mandatory) from approved providers: Bupa, Medibank, CBHS.", timing: "After accepting offer" },
      { step: 2, title: "Apply via ImmiAccount", detail: "Create account at immi.homeaffairs.gov.au. Apply online for Subclass 500. Upload CoE, OSHC, financial evidence, IELTS/TOEFL, transcripts.", timing: "Immediately after CoE" },
      { step: 3, title: "Write Genuine Temporary Entrant (GTE) statement", detail: "Critical document. Explain your genuine intent to study then return to India. Include career plans and ties to India. Weak GTE is the most common rejection reason.", timing: "With application" },
      { step: 4, title: "Health examination", detail: "Book with DIBP-approved doctor in India (eMedical system). Results submitted directly to the Department — you don't collect them.", timing: "Within 28 days of application" },
      { step: 5, title: "Receive visa grant notice", detail: "Grant conditions emailed to you. Visa is linked to your passport electronically — no physical stamp. Airlines can verify it.", timing: "2–4 weeks after application" },
    ],
    commonReasons: [
      "Weak GTE statement — insufficient evidence of intent to return to India",
      "Insufficient financial evidence",
      "OSHC not purchased before application",
      "Health examination not completed within required timeframe",
    ],
    postStudyWorkRights: "Subclass 485 Temporary Graduate Visa: 2–4 years open work rights. Pathway to skilled migration via General Skilled Migration points test.",
  },

  Germany: {
    country: "Germany",
    visaType: "National Visa (Type D) for Study Purposes",
    keyDocument: "Unconditional university admission letter + Sperrkonto (blocked account) proof showing €11,208",
    processingTime: "6–12 weeks. Consulate appointment slots are extremely limited — book the moment you have your admission letter.",
    interviewRequired: true,
    interviewTips: [
      "Know your course content thoroughly — expect 'What modules will you study?' and 'Why this German university?'",
      "For German-taught programmes: demonstrate B2 German language ability at the interview",
      "Show your blocked account (Sperrkonto) document and explain it confidently",
      "Bring originals AND photocopies of all documents",
      "APS certificate is mandatory — not having it results in automatic rejection",
    ],
    financialProof: "Sperrkonto at Deutsche Bank, Fintiba, or Expatrio holding €11,208 (2025 rate). Monthly withdrawal limit of €934 — cannot withdraw full amount at once.",
    validityAfterCourse: "Job Seeker Visa: 18 months after graduation to find relevant employment. Then EU Blue Card. Permanent Residency possible after 21–33 months on EU Blue Card.",
    officialPortal: "india.diplo.de",
    currentYearTimeline: "For Oct/Nov 2026 intake: Admission letter by May 2026 → APS certificate (apply immediately at aps-india.de, takes 4–8 weeks) → Open Sperrkonto → Book consulate appointment May–June 2026 → Interview Jun–Jul 2026 → Fly Sep 2026.",
    nextYearTimeline: "For Oct 2027: APS by Mar 2027 → Sperrkonto by Apr → Consulate appointment May–Jun 2027 → Fly Sep 2027.",
    steps: [
      { step: 1, title: "Apply for APS Certificate — do this FIRST", detail: "Mandatory for all Indian students. Verifies your 10th and 12th certificates. Apply at aps-india.de. Takes 4–8 weeks. Without APS your visa WILL be refused.", timing: "3+ months before intended visa appointment" },
      { step: 2, title: "Receive unconditional admission letter", detail: "Meet all conditions to receive the unconditional Zulassungsbescheid (admission notice) from your German university.", timing: "April–May" },
      { step: 3, title: "Open Sperrkonto (blocked account)", detail: "Open with Fintiba (fintiba.com), Expatrio (expatrio.com), or Deutsche Bank. Deposit €11,208. Verification takes 1–2 weeks.", timing: "As soon as possible after admission" },
      { step: 4, title: "Book German Consulate appointment", detail: "At india.diplo.de. Slots are extremely scarce — book immediately. Available in Mumbai, New Delhi, Bangalore, Chennai.", timing: "Book immediately — same day as Sperrkonto" },
      { step: 5, title: "Attend visa interview", detail: "Bring: passport, APS certificate, admission letter, Sperrkonto proof, health insurance, IELTS/German certificate, 10th+12th certificates with translations, completed visa form, photos.", timing: "June–July" },
    ],
    commonReasons: [
      "Missing APS certificate — most common rejection reason for Indian applicants",
      "Sperrkonto amount below current minimum",
      "Insufficient German language proof for German-taught programmes",
      "Unsigned or incorrectly completed visa application form",
    ],
    postStudyWorkRights: "18-month Job Seeker visa. Then EU Blue Card (4 years, renewable). PR possible after 21–33 months on EU Blue Card.",
  },

  Netherlands: {
    country: "Netherlands",
    visaType: "MVV (Machtiging tot Voorlopig Verblijf) — arranged by your Dutch university",
    keyDocument: "IND approval — your university's International Office manages the entire process on your behalf",
    processingTime: "4–8 weeks after your university submits the IND application",
    interviewRequired: false,
    financialProof: "~€900/month living costs. Your university includes this as part of their sponsorship confirmation to IND. You also need to show ability to pay tuition.",
    validityAfterCourse: "Orientation Year Visa (Zoekjaar): 1 year after graduation to find work matching your qualification. No employer sponsorship needed during this year.",
    officialPortal: "ind.nl",
    currentYearTimeline: "For Sept 2026: Accept offer May/Jun 2026 → Provide documents to university → University submits to IND → Approval July → Collect MVV sticker at Dutch Consulate in India → Fly Aug 2026.",
    nextYearTimeline: "For Sept 2027: Accept offer May/Jun 2027 → Same process → Collect sticker Jul 2027 → Fly Aug 2027.",
    steps: [
      { step: 1, title: "Accept offer and pay tuition deposit", detail: "Your university's International Office will send a checklist of required documents to begin the MVV application.", timing: "May–June" },
      { step: 2, title: "Submit documents to your university", detail: "Typically: passport copy, photo, tuition payment proof, English test score. University handles the IND submission — you do not apply to IND directly.", timing: "June" },
      { step: 3, title: "University submits to IND", detail: "University acts as your sponsor and submits your application via IND's online portal. They'll update you on progress.", timing: "June–July" },
      { step: 4, title: "Receive IND approval", detail: "IND approves and you receive an authorisation reference from your university to collect the MVV sticker.", timing: "July–August" },
      { step: 5, title: "Collect MVV sticker at Dutch Consulate", detail: "Visit Dutch Embassy in Mumbai or New Delhi with passport and IND reference. MVV entry visa sticker affixed to passport.", timing: "2–3 weeks before departure" },
      { step: 6, title: "Register with gemeente on arrival", detail: "Register at your local municipality office within 5 days of arrival. University will guide you.", timing: "Within 5 days of arrival" },
    ],
    commonReasons: [
      "Incomplete documents submitted to university — delays IND application",
      "Tuition deposit not paid — university cannot sponsor without confirmed enrollment",
      "Passport expiring within 1 year of course end — renew before applying",
    ],
    postStudyWorkRights: "Orientation Year (Zoekjaar): 1 year open work permit. Then apply for regular work permit or self-employment.",
  },

  Singapore: {
    country: "Singapore",
    visaType: "Student Pass (ICA — Immigration and Checkpoints Authority)",
    keyDocument: "In-Principle Approval (IPA) letter from ICA — triggered when your university nominates you via the SOLAR system",
    processingTime: "4–8 weeks from university nomination to IPA letter",
    interviewRequired: false,
    financialProof: "Tuition fees + SGD 12,000/year living expenses. Bank statements from parents or sponsors showing ability to fund full degree.",
    validityAfterCourse: "No automatic post-study work rights. Must secure Employment Pass (EP) with employer sponsorship to work in Singapore.",
    officialPortal: "solar.ica.gov.sg",
    currentYearTimeline: "For Aug 2026: Accept offer Mar–Apr 2026 → University nominates to ICA Apr–May → IPA letter May–Jun 2026 → Apply Student Pass via SOLAR → Arrive Jul–Aug 2026.",
    nextYearTimeline: "For Aug 2027: Same process ~2–3 months earlier in 2027.",
    steps: [
      { step: 1, title: "Accept university offer", detail: "Pay acceptance fee. NUS/NTU/SMU will request your passport details to begin the SOLAR nomination.", timing: "After receiving offer" },
      { step: 2, title: "University nominates you via SOLAR", detail: "University submits your details (passport, course info) to ICA's SOLAR system.", timing: "April–May" },
      { step: 3, title: "Receive IPA letter from ICA", detail: "ICA sends your IPA letter by email. This allows you to enter Singapore and apply for the Student Pass in person.", timing: "May–June" },
      { step: 4, title: "Apply for Student Pass via SOLAR", detail: "Log into solar.ica.gov.sg with your IPA reference. Complete eForm 16 online.", timing: "After receiving IPA" },
      { step: 5, title: "Arrive and collect Student Pass", detail: "IPA allows entry. Visit ICA Building within 2 weeks of arrival to complete biometrics and collect Student Pass card.", timing: "1–2 weeks before course start" },
    ],
    commonReasons: [
      "Incomplete SOLAR eForm 16 application",
      "Medical checkup not completed on arrival (some nationalities require this)",
      "Passport photo not meeting ICA specifications",
    ],
    postStudyWorkRights: "No automatic post-study visa. Must secure Employment Pass (EP) or S-Pass with employer. NUS/NTU/SMU graduates are competitive EP candidates.",
  },
};


export const INTAKE_TIMELINE_2027: IntakeTimelineEvent[] = [

  // ── PHASE 1: RESEARCH & PREP (Jan–Apr 2026) ───────────────────────────────

  {
    id: "t01", dateLabel: "Jan–Feb 2026", month: 0, year: 2026,
    title: "Research Countries, Programmes & Shortlist Universities",
    description: "Compare QS rankings, tuition fees, career outcomes, scholarships, and post-study work rights. Shortlist 12–15 universities across reach/target/safety. Attend virtual open days. Use official university websites only — not aggregators.",
    countries: ["USA","UK","Canada","Australia","Germany","Netherlands","Singapore","Japan","India"],
    type: "prep", urgent: false,
  },
  {
    id: "t02", dateLabel: "Jan–Jun 2026", month: 0, year: 2026,
    title: "Begin IELTS / TOEFL Preparation",
    description: "English proficiency tests are required for USA (IELTS 6.5–7.0+ / TOEFL 100+), UK (IELTS for UKVI 7.0+), Canada (IELTS 6.5+), Australia (IELTS 6.5–7.0+), Netherlands (IELTS 6.5+), and Singapore (IELTS 6.0–6.5+). Start now — plan for first attempt by June–July 2026 to allow a retake.",
    countries: ["USA","UK","Canada","Australia","Netherlands","Singapore"],
    type: "prep", urgent: true,
  },
  {
    id: "t03", dateLabel: "Jan–Apr 2026", month: 0, year: 2026,
    title: "Begin SAT Preparation (USA Applicants)",
    description: "Start SAT prep using Khan Academy + Bluebook app. Take a diagnostic in week 1 to set baseline. Target 6 months of consistent prep for 1400+. First sitting: Aug 23, 2026. PCM/CS → target 750+ Math; PCB → Reading 700+; Business/Commerce → 1400+ overall for Wharton/Stern/Ross.",
    countries: ["USA"],
    type: "prep", urgent: true,
  },
  {
    id: "t04", dateLabel: "Jan–Mar 2026", month: 0, year: 2026,
    title: "🇩🇪 APS Certificate — APPLY FIRST (Germany — MANDATORY)",
    description: "APS (Academic Evaluation Centre) certificate is mandatory for all Indian students applying to German universities or German student visa. Without APS your visa WILL be refused. Apply at aps-india.de immediately. Processing takes 4–8 weeks. This is the most commonly missed step — do it before anything else.",
    countries: ["Germany"],
    type: "register", urgent: true,
  },
  {
    id: "t05", dateLabel: "Jan–May 2026", month: 0, year: 2026,
    title: "🇸🇬 NUS / NTU / SMU Applications Open",
    description: "NUS application window for international qualifications (CBSE/ISC): December 3, 2025 – February 23, 2026. NTU: similar window. SMU: own portal. These are for August 2026 intake. If targeting August 2027 intake, equivalent window will be December 2026 – February 2027. Apply as early as possible — competitive spots fill fast.",
    countries: ["Singapore"],
    type: "apply", urgent: true,
  },
  {
    id: "t06", dateLabel: "Jan–Apr 2026", month: 0, year: 2026,
    title: "🇮🇳 JEE Main Registration & Session 1 (India Engineering)",
    description: "JEE Main 2026 Session 1: January–February 2026 at jeemain.nta.ac.in. Registration opens November 2025. Top 2.5 lakh qualifiers attempt JEE Advanced. BITSAT registration: March 2026. VITEEE: March 2026. Register for all entrance exams simultaneously to avoid missing windows.",
    countries: ["India"],
    type: "exam", urgent: true,
  },
  {
    id: "t07", dateLabel: "Apr–May 2026", month: 3, year: 2026,
    title: "🇬🇧 Begin UCAT Preparation (UK / Australia Medicine)",
    description: "UCAT is mandatory for UK medical schools (Edinburgh, KCL, Manchester, Newcastle, Queen Mary BLSA) and Australian medical schools (Melbourne, Monash — UCAT ANZ). Registration opens May 2026 at ucat.ac.uk. Exam window: July–September 2026. Must complete BEFORE the October 15 UCAS Medicine deadline. Target: 2700+ overall; SJT Band 1–2.",
    countries: ["UK","Australia"],
    type: "prep", urgent: false,
  },
  {
    id: "t08", dateLabel: "Apr–Jun 2026", month: 3, year: 2026,
    title: "🇬🇧 Begin TMUA & ESAT Preparation (UK — Maths/Eng/CS/Science)",
    description: "TMUA: mandatory for Cambridge Maths, CS, Economics, Engineering. LSE Economics benefits from 6.5+. Warwick Maths/Economics: 6.0+ helps. ESAT: mandatory for Cambridge Engineering/Natural Sciences/Vet and Imperial Engineering/Science (replaced ENGAA/NSAA in 2024). Use past ENGAA and NSAA papers for ESAT practice. Registration opens August 2026.",
    countries: ["UK"],
    type: "prep", urgent: false,
  },
  {
    id: "t09", dateLabel: "Apr–May 2026", month: 3, year: 2026,
    title: "🇮🇳 NEET-UG 2026 Registration & Exam (India Medicine)",
    description: "NEET-UG 2026 registration at neet.nta.ac.in (typically March–April 2026). Exam: May 2026. 720 marks (Biology 360 + Physics 180 + Chemistry 180). Target: 650+ for AIIMS/CMC Vellore; 550+ for government medical colleges; 500+ for private. MCC counselling begins June–July 2026.",
    countries: ["India"],
    type: "exam", urgent: true,
  },
  {
    id: "t10", dateLabel: "Apr–Jun 2026", month: 3, year: 2026,
    title: "🇳🇱 Dutch University Applications — APPLY EARLY",
    description: "Netherlands: Most programmes accept applications from January 2026. Key deadline: April 1, 2026 for September 2026 intake via Studielink (studielink.nl). TU Delft popular programmes (numerus fixus) fill by January–February. University of Amsterdam, Leiden, Vrije Universiteit: April 1. Do NOT wait until April — many programmes fill in February–March.",
    countries: ["Netherlands"],
    type: "apply", urgent: true,
  },

  // ── PHASE 2: EXAMS (Jun–Sep 2026) ────────────────────────────────────────

  {
    id: "t11", dateLabel: "Jun–Jul 2026", month: 5, year: 2026,
    title: "Sit IELTS Academic / TOEFL — First Attempt",
    description: "Take your English proficiency test. Computer-delivered IELTS: results in 3–5 days. Paper-based: 13 days. Targets: IELTS 7.0+ (Russell Group UK; Group of Eight Australia; UoT/UBC Canada) or TOEFL 100+ iBT (US top schools). If below target, retake in September–October 2026 — last practical window before January 2027 deadlines.",
    countries: ["USA","UK","Canada","Australia","Netherlands","Singapore"],
    type: "exam", urgent: true,
  },
  {
    id: "t12", dateLabel: "Jul–Sep 2026", month: 6, year: 2026,
    title: "🇬🇧🇦🇺 UCAT Exam (Medicine Applicants)",
    description: "Sit UCAT between July–September 2026. Results available same day. 2700+ overall is competitive; 2900+ distinguishes you at Edinburgh, KCL, Manchester. SJT Band 1 is as important as the total score. Required before October 15 UCAS Medicine deadline. Also valid for Australian medical schools (UCAT ANZ).",
    countries: ["UK","Australia"],
    type: "exam", urgent: true,
  },
  {
    id: "t13", dateLabel: "Aug 23, 2026", month: 7, year: 2026,
    title: "🇺🇸 SAT First Attempt (Aug 23 Sitting)",
    description: "Sit SAT August 23, 2026. Results arrive ~2 weeks later. Register at sat.collegeboard.org — Indian centres (Delhi, Mumbai, Bangalore, Chennai, Hyderabad) fill within days of registration opening. Target: 1400+ for most US schools; 1500+ for MIT/Harvard/Stanford/CMU; 1480+ for Wharton/Stern. If 1350+, consider retake only to push higher.",
    countries: ["USA"],
    type: "exam", urgent: true,
  },
  {
    id: "t14", dateLabel: "Aug 1, 2026", month: 7, year: 2026,
    title: "🇺🇸 Common App Opens — Create Profile Immediately",
    description: "Common App launches August 1, 2026 for Fall 2027 entry. Create your account, fill academics, activities (up to 10), and honours sections. Request teacher recommendation letters NOW — give teachers 6+ weeks minimum. Brainstorm your 650-word personal essay. All supplemental essays (school-specific) should be drafted by September.",
    countries: ["USA"],
    type: "apply", urgent: true,
  },
  {
    id: "t15", dateLabel: "Aug–Sep 2026", month: 7, year: 2026,
    title: "🇬🇧 UCAS Opens — Begin Personal Statement",
    description: "UCAS opens for 2027 entry from September 2, 2026. Start your 4,000-character Personal Statement immediately (75% on your subject passion, 25% activities). Medicine: reference clinical experience and your understanding of the profession. Engineering/CS: mention specific technical projects. Choose your 5 UK university choices carefully. You cannot submit before October 1.",
    countries: ["UK"],
    type: "apply", urgent: true,
  },
  {
    id: "t16", dateLabel: "Aug 2026", month: 7, year: 2026,
    title: "🇬🇧 Register for TMUA and ESAT — Immediately When Opens",
    description: "Registration for TMUA and ESAT opens August 2026 at admissionstesting.org. Register immediately — Indian test centre slots (Delhi, Mumbai, Bangalore, Chennai, Hyderabad) are strictly limited. Pay ~£75 per exam. ESAT: select your 2 optional modules (e.g. Physics+Chemistry for Engineering; Biology+Chemistry for Natural Sciences). No calculator in any exam.",
    countries: ["UK"],
    type: "register", urgent: true,
  },
  {
    id: "t17", dateLabel: "Sep–Oct 2026", month: 8, year: 2026,
    title: "IELTS / TOEFL Retake If Needed",
    description: "If June/July score was below target, retake in September–October 2026. This is your last practical opportunity to have results ready before January 2027 application deadlines. Computer-delivered IELTS results in 3–5 days — choose this format for fastest turnaround. Do not delay if a retake is needed.",
    countries: ["USA","UK","Canada","Australia","Netherlands","Singapore"],
    type: "exam", urgent: false,
  },
  {
    id: "t18", dateLabel: "Oct 4 & Nov 1, 2026", month: 9, year: 2026,
    title: "🇺🇸 SAT Retake Opportunities",
    description: "Oct 4: results arrive ~Oct 18 — before Nov 1 Early Decision deadlines. Nov 1: results may arrive too late for some Nov 1 ED schools — check each school's policy. Dec 6: final SAT sitting before most Regular Decision January deadlines. Register at sat.collegeboard.org at least 5 weeks ahead.",
    countries: ["USA"],
    type: "exam", urgent: false,
  },

  // ── PHASE 3: APPLICATIONS (Oct–Jan) ──────────────────────────────────────

  {
    id: "t19", dateLabel: "Oct 15, 2026", month: 9, year: 2026,
    title: "🇬🇧 UCAS HARD DEADLINE: Oxford & Cambridge + ALL Medicine/Dentistry/Vet",
    description: "6:00 PM UK time — NO EXTENSIONS under any circumstances. Oxford and Cambridge (all courses). All UK medical schools including Edinburgh, KCL, Manchester, Newcastle, Queen Mary BLSA. All UK dentistry and veterinary medicine programmes. TMUA/ESAT/UCAT must already be registered. Personal Statement, teacher references, and predicted grades must all be in UCAS by this moment.",
    countries: ["UK"],
    type: "apply", urgent: true,
  },
  {
    id: "t20", dateLabel: "Oct–Nov 2026", month: 9, year: 2026,
    title: "🇬🇧 TMUA & ESAT Exams",
    description: "Sit TMUA (Mathematical Knowledge + Reasoning, 2×75 min) and/or ESAT (Maths + 2 subject modules, 3×40 min) in October–November 2026. No calculator. No formula sheet. Scores automatically sent to all UCAS-listed universities using these tests. Cambridge TMUA cutoff: aim 6.5+. ESAT: aim top 25 percentile nationally.",
    countries: ["UK"],
    type: "exam", urgent: true,
  },
  {
    id: "t21", dateLabel: "Nov 1–15, 2026", month: 10, year: 2026,
    title: "🇺🇸 USA: Early Decision & Early Action Deadlines",
    description: "Nov 1: MIT EA, Harvard SCEA, Yale EA, Princeton EA, Columbia ED, UPenn (Wharton) ED, Johns Hopkins REA, CMU EA, NYU ED. Nov 15: Georgia Tech EA, UVA EA, UNC, Emory ED. ED is binding — only apply if that school is your absolute first choice AND you can manage the finances. EA is non-binding. Submit at least 3 days before deadline.",
    countries: ["USA"],
    type: "apply", urgent: true,
  },
  {
    id: "t22", dateLabel: "Nov 2026–Jan 2027", month: 10, year: 2026,
    title: "🇨🇦 Canadian University Application Deadlines",
    description: "University of Toronto: November 1. UBC Vancouver: January 15. McGill: January 15. University of Waterloo: varies by program (verify at uwaterloo.ca). Dalhousie: March 1. For UoT Lester B. Pearson Scholarship (full ride — C$200,000 total) your school must nominate you — speak to your principal immediately. Apply Study Permit as soon as acceptance arrives.",
    countries: ["Canada"],
    type: "apply", urgent: true,
  },
  {
    id: "t23", dateLabel: "Dec 1–15, 2026", month: 11, year: 2026,
    title: "🇺🇸 USA: Early Decision Results Released",
    description: "ED results typically released December 12–15, 2026. Admitted: binding — immediately withdraw all other applications. Deferred: continue with Regular Decision at same school. Rejected: apply Regular Decision elsewhere. Compare financial aid award letters carefully before accepting any binding ED offer — negotiate if needed.",
    countries: ["USA"],
    type: "decision", urgent: false,
  },
  {
    id: "t24", dateLabel: "Dec 2026", month: 11, year: 2026,
    title: "🇬🇧 Oxford & Cambridge Interviews",
    description: "Oxford interviews: online, early to mid-December 2026. Cambridge interviews: December 1–18, 2026 (online or in-person depending on course and college). Prepare with subject-specific mock interviews. For Engineering/CS/Maths: expect to solve problems live. For Medicine: MMI-style ethical scenarios. Results released January 12, 2027 (Oxford) and January 2027 (Cambridge).",
    countries: ["UK"],
    type: "decision", urgent: false,
  },
  {
    id: "t25", dateLabel: "Jan 1, 2027", month: 0, year: 2027,
    title: "🇺🇸 USA Regular Decision Deadlines — MOST SCHOOLS",
    description: "January 1 deadline: MIT, Harvard, Yale, Princeton, Stanford, Caltech, Columbia, Chicago, Johns Hopkins, Emory, Purdue, UT Austin. Ensure all test scores (SAT/TOEFL/IELTS) are sent directly from testing agencies. All recommendation letters and transcripts must be submitted. No extensions. Submit 24–48 hours early to avoid portal crashes.",
    countries: ["USA"],
    type: "apply", urgent: true,
  },
  {
    id: "t26", dateLabel: "Jan 13, 2027", month: 0, year: 2027,
    title: "🇬🇧 UCAS Final Deadline — ALL Non-Oxbridge/Medicine Courses",
    description: "6:00 PM UK time — equal consideration deadline. All remaining UK undergraduate courses: UCL, Imperial, Edinburgh, Manchester, Sheffield, KCL, King's, Exeter, Coventry, and all others not with October 15 deadline. Applications submitted after this date go into UCAS Extra or Clearing. This is a hard deadline — no extensions.",
    countries: ["UK"],
    type: "apply", urgent: true,
  },
  {
    id: "t27", dateLabel: "Jan 15, 2027", month: 0, year: 2027,
    title: "🇺🇸 USA Regular Decision — Remaining Schools & 🇨🇦 UBC/McGill",
    description: "USA Jan 15: UBC, McGill, Duke, Cornell, Brown, Dartmouth, NYU Stern, Carnegie Mellon (some programmes), University of Michigan Ross, Indiana Kelley, ASU. Canada Jan 15: UBC Vancouver and McGill University final deadlines. Ensure all supporting documents are submitted.",
    countries: ["USA","Canada"],
    type: "apply", urgent: true,
  },
  {
    id: "t28", dateLabel: "Jan–Apr 2027", month: 0, year: 2027,
    title: "🇦🇺🇳🇱 Australia & Netherlands Applications (July 2027 / Sep 2027 Intake)",
    description: "Australia July 2027 intake: apply January–April 2027 at Monash, UNSW, UoM, Adelaide. Netherlands September 2027 intake: apply via Studielink January–April 2027; key deadline April 1, 2027 for most programmes; January 15 for TU Delft numerus fixus. Motivation letters must be tailored per programme.",
    countries: ["Australia","Netherlands"],
    type: "apply", urgent: false,
  },
  {
    id: "t29", dateLabel: "Jan 2027", month: 0, year: 2027,
    title: "🇬🇧 Oxford & Cambridge Offers Released",
    description: "Oxford decisions released January 12, 2027. Cambridge decisions released January 2027. Offer conditions typically specify A-level grades (A*A*A for Engineering/Maths) or CBSE/ISC equivalents (95%+). You must confirm meeting conditions after your 12th board results. Non-Oxbridge UK universities respond on a rolling basis through May 2027.",
    countries: ["UK"],
    type: "decision", urgent: false,
  },
  {
    id: "t30", dateLabel: "Jan–Feb 2027", month: 0, year: 2027,
    title: "🇩🇪 Germany: Winter Semester 2027 Application Deadline",
    description: "For Winter Semester 2027 (Oct/Nov 2027 start): Applications through uni-assist.de or direct university portals typically close January 15 – July 15, 2027 depending on university. APS certificate MUST be ready before applying. Sperrkonto (€11,208) required before visa appointment. Book consulate appointment the same day as Sperrkonto.",
    countries: ["Germany"],
    type: "apply", urgent: false,
  },

  // ── PHASE 4: DECISIONS (Mar–May 2027) ────────────────────────────────────

  {
    id: "t31", dateLabel: "Mar–Apr 2027", month: 2, year: 2027,
    title: "Admission Decisions — USA Regular Decision & All Other Offers",
    description: "US Regular Decision results: March 28–April 1, 2027. UK non-Oxbridge rolling decisions: January–May 2027. Canada rolling: March–April 2027. Singapore NUS/NTU/SMU: May–July 2027. Australia Group of Eight: March–May 2027. Compare all financial aid packages. Request aid appeals if another school offered significantly more.",
    countries: ["USA","UK","Canada","Australia","Singapore","Netherlands"],
    type: "decision", urgent: false,
  },
  {
    id: "t32", dateLabel: "May 1, 2027", month: 4, year: 2027,
    title: "🇺🇸 USA: National Candidate Reply Date — FINALISE YOUR CHOICE",
    description: "May 1 is the universal US enrollment deadline. Accept your chosen offer and pay the deposit. Decline all other US university offers on the same day to free seats for waitlisted students. Compare financial aid award letters carefully — net cost (after scholarships/grants) matters more than sticker price. Contact university's International Student Office.",
    countries: ["USA"],
    type: "decision", urgent: true,
  },
  {
    id: "t33", dateLabel: "May–Jun 2027", month: 4, year: 2027,
    title: "Receive Key Visa Trigger Documents",
    description: "USA: I-20 issued after paying enrollment deposit (triggers F-1 visa process). UK: CAS number issued after meeting all offer conditions (triggers UK Student Visa). Germany: Unconditional Zulassungsbescheid + Sperrkonto required for National Visa appointment. Canada: Letter of Acceptance received for Study Permit. Apply for visa IMMEDIATELY after receiving your document — do not wait.",
    countries: ["USA","UK","Germany","Canada","Australia","Netherlands","Singapore"],
    type: "visa", urgent: true,
  },

  // ── PHASE 5: VISA (Jun–Jul 2027) ─────────────────────────────────────────

  {
    id: "t34", dateLabel: "May–Jun 2027", month: 4, year: 2027,
    title: "🇺🇸 Pay SEVIS Fee & Book F-1 Visa Interview — SAME DAY AS I-20",
    description: "The moment you receive Form I-20: (1) Pay SEVIS I-901 fee ($350 at fmjfee.com). (2) Fill DS-160 visa application at ceac.state.gov. (3) Book visa interview at ustraveldocs.com/in — slots at US Consulates in Delhi, Mumbai, Chennai, Hyderabad, Kolkata fill within MINUTES of opening. Do not delay even one day.",
    countries: ["USA"],
    type: "visa", urgent: true,
  },
  {
    id: "t35", dateLabel: "Jun–Jul 2027", month: 5, year: 2027,
    title: "Apply for Student Visa — All Countries",
    description: "USA F-1: Interview at US Consulate (processing 3–8 weeks). UK Student Visa: Apply online at gov.uk/student-visa + VFS Global biometrics (processing 2–3 weeks). Canada Study Permit: Apply at canada.ca immediately (8–12 weeks). Germany National Visa: Consulate interview (6–12 weeks). Australia Subclass 500: ImmiAccount online (2–4 weeks). Singapore Student Pass: via SOLAR after university nomination (4–8 weeks).",
    countries: ["USA","UK","Canada","Australia","Germany","Netherlands","Singapore"],
    type: "visa", urgent: true,
  },
  {
    id: "t36", dateLabel: "Jun–Jul 2027", month: 5, year: 2027,
    title: "🇬🇧 Apply for UK Student Visa",
    description: "Apply online at gov.uk/student-visa. You need: CAS number, IELTS for UKVI Academic score (NOT standard IELTS), bank statements showing 28 consecutive days with tuition + £1,334/month living (outside London) or £1,023/month (London). Pay visa fee ~£490 + Immigration Health Surcharge £776/year. Book VFS Global biometrics. Decision: 2–3 weeks standard, 5 working days priority (£500 extra).",
    countries: ["UK"],
    type: "visa", urgent: true,
  },
  {
    id: "t37", dateLabel: "Jun–Jul 2027", month: 5, year: 2027,
    title: "🇩🇪 Germany Student Visa Interview",
    description: "Consulate interview required. Bring: APS certificate, unconditional admission letter, Sperrkonto proof (€11,208 at Fintiba/Expatrio), IELTS 6.5+ or German language certificate, 10th+12th certificates with official translations, health insurance, completed visa application form, passport photos — originals AND photocopies of everything. Answer: 'What will you study?' and 'Why this university?' confidently.",
    countries: ["Germany"],
    type: "visa", urgent: true,
  },
  {
    id: "t38", dateLabel: "Jul–Aug 2027", month: 6, year: 2027,
    title: "🇦🇺 Australia GTE Statement & Health Exam",
    description: "Genuine Temporary Entrant (GTE) statement: the most critical document in your Subclass 500 application. Explain why Australia, your study plan, career goals, and strong ties to India. Weak GTE is the #1 rejection reason. Purchase OSHC (Bupa/Medibank/CBHS) BEFORE applying. Health examination: book with DIBP-approved doctor — results sent directly to the Department.",
    countries: ["Australia"],
    type: "visa", urgent: true,
  },

  // ── PHASE 6: PRE-DEPARTURE & TRAVEL (Aug–Sep 2027) ───────────────────────

  {
    id: "t39", dateLabel: "Aug 14, 2027", month: 7, year: 2027,
    title: "🇬🇧 UK A-Level Results & UCAS Confirmation",
    description: "UK A-level results day (expected August 14, 2027). UCAS automatically confirms or releases your place based on grades. Indian 12th marksheets: UCAS has a conversion process for CBSE/ISC — verify your board percentile meets the conditional offer equivalent. If grades not met: UCAS Clearing available until October 2027.",
    countries: ["UK"],
    type: "decision", urgent: false,
  },
  {
    id: "t40", dateLabel: "Aug–Sep 2027", month: 7, year: 2027,
    title: "Pre-Departure Preparation & Travel",
    description: "Book flights 2–3 months ahead for best prices (book by June 2027). Arrange university halls or private accommodation. Get a multi-currency Forex card (Niyo/IndusInd/HDFC). Medical checkup + vaccinations as required by destination country. Prepare your document folder: visa, I-20/CAS/CoE, financial statements, admission letter, academic transcripts, health insurance. Most courses begin August–September 2027.",
    countries: ["USA","UK","Canada","Australia","Germany","Netherlands","Singapore","Japan","India"],
    type: "travel", urgent: false,
  },
];

// ─── Helper functions ──────────────────────────────────────────────────────────

export function getExamsForCountry(country: Country, stream: Stream): Exam[] {
  return EXAMS.filter(
    (e) =>
      e.countryInfo.some((ci) => ci.country === country) &&
      (e.relevantStreams.includes(stream) || stream === "Undecided")
  );
}

export function getExamStatusForCountry(exam: Exam, country: Country): ExamCountryInfo | undefined {
  return exam.countryInfo.find((ci) => ci.country === country);
}

export function getTimelineForCountries(countries: Country[]): IntakeTimelineEvent[] {
  return INTAKE_TIMELINE_2027
    .filter((e) => e.countries.some((c) => countries.includes(c)))
    .sort((a, b) => a.year * 12 + a.month - (b.year * 12 + b.month));
}