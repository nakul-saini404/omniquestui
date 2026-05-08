import type { Country, Stream, FieldExamInfo, FieldSubjectInfo, FieldTimelineEvent } from "@/types/edupath";

// ─── SAT requirement by country ──────────────────────────────────────────────
export const SAT_REQUIRED_COUNTRIES: Country[] = ["USA"];
export const SAT_OPTIONAL_COUNTRIES: Country[] = ["India"];

export function isSATNeeded(country: Country): boolean {
  return SAT_REQUIRED_COUNTRIES.includes(country);
}

export function getSATNote(country: Country): string {
  if (country === "USA") return "SAT is required/strongly recommended. Target 1400+ (1520+ Ivy/top-10). Attempt 1: Oct/Dec of 10th standard. Attempt 2: Aug of 11th standard. Attempt 3: Oct of 11th if needed. Late starters in 12th: attempt Mar/May/Aug/Oct/Dec.";
  if (country === "India") return "SAT not required for most Indian colleges. However, Ashoka (1450+), KREA (1400+), FLAME (1300+), Shiv Nadar, and Jindal accept SAT as an alternative to their own entrance tests.";
  if (country === "UK") return "SAT is NOT required by UK universities. Focus on UCAS Personal Statement, predicted grades, and subject-specific tests (UCAT/ESAT/TMUA/LNAT).";
  if (country === "Canada") return "SAT is NOT required by Canadian universities. Academic grades and IELTS/TOEFL are the key requirements.";
  if (country === "Australia") return "SAT is NOT required by Australian universities. IELTS 6.5–7.0+ and strong academic record are what matter.";
  if (country === "Germany") return "SAT is NOT required by German universities. APS Certificate + academic records + German B2/IELTS are needed.";
  if (country === "Netherlands") return "SAT is NOT required by Dutch universities. Academic record + IELTS 6.5+ + motivation letter is the pathway.";
  if (country === "Singapore") return "SAT is NOT required by NUS/NTU/SMU. Academic excellence + IELTS/TOEFL + interview are key.";
  if (country === "Japan") return "SAT is NOT required by Japanese universities. IELTS/TOEFL + academic record (+ JLPT for Japanese-medium programmes) is needed.";
  return "Check individual university requirements.";
}

// ─── India SAT university split ───────────────────────────────────────────────
export const INDIA_SAT_UNIVERSITIES = {
  accepting: [
    { name: "Ashoka University",      minSAT: 1450, note: "SAT 1450+ qualifies for merit scholarship up to 100% tuition. Multiple admission rounds Oct–Apr." },
    { name: "KREA University",        minSAT: 1400, note: "SAT 1400+ accepted. Merit scholarships 25–100% of tuition." },
    { name: "FLAME University",       minSAT: 1300, note: "SAT or FLAME Test accepted. Merit aid available for 1300+." },
    { name: "Shiv Nadar University",  minSAT: 1350, note: "SAT or SNUSAT accepted. Research-intensive private university near Delhi." },
    { name: "OP Jindal Global Univ.", minSAT: 1300, note: "SAT accepted. Strong Law and Liberal Arts programs." },
  ],
  notAccepting: [
    { name: "IITs",        exam: "JEE Advanced",  note: "Only JEE Advanced rank accepted. No SAT pathway exists." },
    { name: "NITs",        exam: "JEE Main",       note: "Only JEE Main rank accepted. No SAT pathway." },
    { name: "AIIMS",       exam: "NEET-UG",        note: "Only NEET-UG score accepted. No SAT pathway." },
    { name: "NLUs",        exam: "CLAT",           note: "Only CLAT/AILET score accepted. No SAT pathway." },
    { name: "BITS Pilani", exam: "BITSAT",         note: "BITSAT score required. SAT not accepted." },
    { name: "SRCC / DU",   exam: "CUET UG",        note: "Only CUET score used for DU admissions. No SAT." },
    { name: "VIT",         exam: "VITEEE",         note: "VITEEE or JEE Main score accepted. No SAT." },
  ],
};

// ─── Subject requirements ─────────────────────────────────────────────────────
export function getSubjectsForField(field: string, country: Country): FieldSubjectInfo[] {
  const f = field.toLowerCase();

  if (f.includes("computer science") || f.includes("ai") || f.includes("data")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Mathematics (PCM)", importance: "Required", note: "Strong maths — Algebra, Calculus, Statistics are core for CS/AI programs everywhere." },
      { subject: "Physics", importance: "Strongly Recommended", note: "Required for engineering-side CS programs." },
      { subject: "Computer Science / Informatics", importance: "Helpful", note: "Coding projects and GitHub portfolio matter more than the subject itself." },
    ];
    if (country === "UK") base.push({ subject: "TMUA / ESAT", importance: "Required", note: "Cambridge CS requires TMUA. Imperial CS requires ESAT from 2024." });
    if (country === "USA") base.push({ subject: "SAT Math 750+", importance: "Strongly Recommended", note: "Top CS programs (MIT, CMU, Stanford) admit students with near-perfect SAT Math." });
    return base;
  }

  if (f.includes("engineering") || f.includes("mechanical") || f.includes("civil") || f.includes("electrical")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Mathematics (PCM)", importance: "Required", note: "Maths is compulsory — Calculus, Mechanics, Vectors, Statistics." },
      { subject: "Physics", importance: "Required", note: "Physics is mandatory for all Engineering programs worldwide." },
      { subject: "Chemistry", importance: "Strongly Recommended", note: "Required for Chemical/Materials Engineering." },
    ];
    if (country === "UK") base.push({ subject: "ESAT (Cambridge/Imperial)", importance: "Required", note: "ESAT is mandatory for Cambridge Engineering and Imperial Engineering from 2024." });
    if (country === "India") base.push({ subject: "JEE Main + JEE Advanced", importance: "Required", note: "JEE Main is the gateway. JEE Advanced is required for IITs. BITSAT for BITS Pilani." });
    if (country === "USA") base.push({ subject: "SAT Math 730+", importance: "Strongly Recommended", note: "Strong SAT Math (730+) is expected for competitive engineering programs at Purdue, Georgia Tech, UIUC." });
    return base;
  }

  if (f.includes("medicine") || f.includes("pre-med")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Biology / Life Sciences", importance: "Required", note: "Core subject — PCB stream is the primary pathway." },
      { subject: "Chemistry", importance: "Required", note: "Organic, inorganic, and physical chemistry are all tested." },
      { subject: "Physics", importance: "Required", note: "Required for NEET-UG (India). Also tested in UCAT/BMAT prep." },
      { subject: "English", importance: "Strongly Recommended", note: "Strong English for IELTS/TOEFL and personal statements." },
    ];
    if (country === "UK" || country === "Australia") base.push({ subject: "UCAT", importance: "Required", note: "UCAT mandatory for UK/Australia medicine. Register May, sit Jul–Sep." });
    if (country === "India") base.push({ subject: "NEET-UG", importance: "Required", note: "NEET-UG is the only valid entrance exam for MBBS in India. Target 650+/720 for AIIMS." });
    if (country === "USA") base.push({ subject: "Pre-Med Track (Biology, Chemistry, Math)", importance: "Required", note: "USA requires a bachelor's degree first. MCAT needed for medical school after graduation." });
    return base;
  }

  if (f.includes("business") || f.includes("economics")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Mathematics / Statistics", importance: "Required", note: "Quantitative skills are core for Business and Economics." },
      { subject: "Economics", importance: "Strongly Recommended", note: "If available as a school subject, Economics background is highly valued." },
      { subject: "English", importance: "Required", note: "Business programs are communication-heavy. Strong English is essential." },
    ];
    if (country === "UK") base.push({ subject: "TMUA (Cambridge Economics)", importance: "Required", note: "TMUA mandatory for Cambridge Economics. LSE Economics benefits from 6.5+ TMUA." });
    if (country === "India") base.push({ subject: "CUET / IPMAT", importance: "Required", note: "CUET needed for DU colleges (SRCC). IPMAT for IIM's 5-year integrated program." });
    if (country === "USA") base.push({ subject: "SAT Math 700+", importance: "Strongly Recommended", note: "Business schools like Wharton and NYU Stern look for strong quantitative SAT scores." });
    return base;
  }

  if (f.includes("law") || f.includes("political")) {
    const base: FieldSubjectInfo[] = [
      { subject: "English Language & Literature", importance: "Required", note: "Law is about language precision. Strong reading, writing, and comprehension are critical." },
      { subject: "History / Social Sciences", importance: "Strongly Recommended", note: "Understanding of society and governance is highly valued." },
      { subject: "General Knowledge / Current Affairs", importance: "Required", note: "CLAT (India) tests GK extensively." },
    ];
    if (country === "UK") base.push({ subject: "LNAT (Oxford, UCL, Durham)", importance: "Required", note: "LNAT required for UK Law at Oxford, UCL, Durham, Glasgow, and others." });
    if (country === "India") base.push({ subject: "CLAT / AILET", importance: "Required", note: "CLAT 2026: December 7, 2025. AILET: December 14, 2025." });
    return base;
  }

  if (f.includes("design") || f.includes("architecture")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Art / Drawing / Visual Skills", importance: "Required", note: "Portfolio is the most critical element. Start building yours early." },
      { subject: "Mathematics", importance: "Required", note: "Architecture specifically requires Maths in Class 12." },
      { subject: "Creative Projects (UX, Product, Graphics)", importance: "Strongly Recommended", note: "Real projects show skill better than grades." },
    ];
    if (country === "India") base.push(
      { subject: "NATA (Architecture)", importance: "Required", note: "NATA mandatory for B.Arch in India." },
      { subject: "UCEED (IIT Design)", importance: "Strongly Recommended", note: "UCEED 2026: January 18. For IIT Bombay, Guwahati, Hyderabad B.Des programs." }
    );
    return base;
  }

  if (f.includes("life sciences") || f.includes("biotech")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Biology / Biotechnology", importance: "Required", note: "Core subject — PCB stream is the primary pathway." },
      { subject: "Chemistry", importance: "Required", note: "Organic chemistry forms the basis of biochemistry." },
      { subject: "Mathematics", importance: "Helpful", note: "Useful for Bioinformatics and Computational Biology." },
    ];
    if (country === "India") base.push(
      { subject: "CUET / IISER IAT", importance: "Required", note: "CUET for B.Sc Biotechnology at DU/BHU. IISER IAT (Jun 7, 2026) for BS-MS research programs." }
    );
    return base;
  }

  if (f.includes("liberal arts") || f.includes("humanities")) {
    const base: FieldSubjectInfo[] = [
      { subject: "English Language", importance: "Required", note: "All liberal arts programs are writing and reading intensive." },
      { subject: "Any Stream accepted", importance: "Required", note: "Most liberal arts programs accept students from any stream." },
      { subject: "Writing / Essay Skills", importance: "Required", note: "Application essays and personal statements are the most important part." },
    ];
    if (country === "India") base.push({ subject: "CUET / Ashoka AAT", importance: "Required", note: "CUET for Delhi University. Ashoka AAT tests critical thinking, reasoning, essay writing." });
    if (country === "USA") base.push({ subject: "SAT Reading 680+", importance: "Strongly Recommended", note: "Liberal Arts colleges look for strong SAT Reading scores alongside essays." });
    return base;
  }

  if (f.includes("media") || f.includes("communication")) {
    const base: FieldSubjectInfo[] = [
      { subject: "English Language & Communication", importance: "Required", note: "Excellent writing, speaking, and comprehension skills are mandatory." },
      { subject: "Any Stream accepted", importance: "Required", note: "Most media programs accept students from any stream." },
      { subject: "Current Affairs & General Knowledge", importance: "Strongly Recommended", note: "Journalism entrance exams test extensively on current affairs." },
    ];
    if (country === "India") base.push(
      { subject: "CUET / IIMC Entrance", importance: "Required", note: "CUET for BJMC/journalism at central universities. IIMC entrance for top journalism school." }
    );
    return base;
  }

  return [
    { subject: "English Language", importance: "Required", note: "English proficiency (IELTS/TOEFL) is required for international applications." },
    { subject: "Core Academic Subjects", importance: "Required", note: "Maintain strong grades in your primary subjects." },
    { subject: "Extracurriculars", importance: "Strongly Recommended", note: "Leadership, research, volunteering, and competitions strengthen every application." },
  ];
}

// ─── Exams by field + country ─────────────────────────────────────────────────
export function getExamsForFieldAndCountry(field: string, country: Country): FieldExamInfo[] {
  const f = field.toLowerCase();
  const exams: FieldExamInfo[] = [];

  if (country !== "India") {
    exams.push({
      examName: "IELTS Academic",
      icon: "🗣️",
      status: "Mandatory",
      targetScore: country === "UK" || country === "Australia" || country === "Singapore" ? "7.0+" : country === "Germany" || country === "Netherlands" ? "6.5+" : "7.0+",
      note: country === "UK" ? "Must be IELTS for UKVI Academic (NOT standard IELTS). Required for UK Student Visa." : "Required for admission and student visa. Computer-delivered results in 3–5 days.",
      registrationWindow: "Year-round. Book 4–6 weeks ahead at ielts.idp.com",
      examDate: "Almost every Saturday across India",
    });
    if (country === "USA" || country === "Canada" || country === "Australia") {
      exams.push({
        examName: "TOEFL iBT",
        icon: "💬",
        status: "Optional",
        targetScore: country === "USA" ? "100+" : "90+",
        note: "Accepted as alternative to IELTS. Home Edition available year-round.",
        registrationWindow: "Year-round at ets.org/toefl",
        examDate: "Year-round (Home Edition: any day with 4+ days notice)",
      });
    }
  }

  if (country === "USA") {
    const satTarget = f.includes("engineering") || f.includes("computer") ? "1480+"
      : f.includes("business") ? "1460+"
      : f.includes("medicine") ? "1450+"
      : "1400+";
    exams.push({
      examName: "SAT",
      icon: "📐",
      status: "Recommended",
      targetScore: `${satTarget} for ${field}; 1500+ for Ivy/MIT/CMU/Stanford`,
      note: `SAT is strongly recommended. Attempt 1: Oct/Dec of 10th standard. Attempt 2: Aug of 11th. Attempt 3: Oct of 11th if needed. Late starters (12th): attempt Mar/May/Aug/Oct/Dec. 75%+ of admitted students at top schools submit scores.`,
      registrationWindow: "Opens ~5 weeks before each test date at sat.collegeboard.org",
      examDate: "2026: Mar 8, May 3, Jun 7, Aug 23, Oct 4, Nov 1, Dec 6",
    });
  }

  if (country === "Germany") {
    exams.push({
      examName: "APS Certificate",
      icon: "📜",
      status: "Mandatory",
      targetScore: "Pass (verification exam)",
      note: "MANDATORY for all Indian students applying to Germany. Apply at aps-india.de immediately. Takes 4–8 weeks. Without APS your visa WILL be refused.",
      registrationWindow: "Apply as early as possible at aps-india.de",
      examDate: "Rolling — apply 3+ months before visa appointment",
    });
  }

  if (f.includes("medicine") || f.includes("pre-med")) {
    if (country === "UK" || country === "Australia") {
      exams.push({
        examName: "UCAT",
        icon: "🩺",
        status: "Mandatory",
        targetScore: "2700+ overall; SJT Band 1–2",
        note: "Mandatory for UK medical schools (Edinburgh, KCL, Manchester, Newcastle, Queen Mary). Also used for Australian medicine (UCAT ANZ). Register May, sit Jul–Sep.",
        registrationWindow: "Registration opens May each year at ucat.ac.uk",
        examDate: "July–September (must complete before Oct 15 UCAS Medicine deadline)",
      });
    }
    if (country === "India") {
      exams.push({
        examName: "NEET-UG",
        icon: "🩺",
        status: "Mandatory",
        targetScore: "650+/720 for AIIMS; 550+ for govt colleges",
        note: "NEET is the ONLY valid entrance exam for MBBS/BDS in India. Registration: Feb 8 – Mar 8, 2026. Exam: May 3, 2026.",
        registrationWindow: "Feb 8 – Mar 8, 2026 at neet.nta.ac.in",
        examDate: "May 3, 2026",
      });
    }
    if (country === "USA") {
      exams.push({
        examName: "MCAT (After Bachelor's)",
        icon: "🧬",
        status: "Mandatory",
        targetScore: "515+ (510+ minimum for most schools)",
        note: "USA medical school requires a bachelor's degree first, then MCAT. Plan a 4-year pre-med undergraduate path.",
        registrationWindow: "After completing undergraduate degree",
        examDate: "Multiple dates throughout the year",
      });
    }
  }

  if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
    if (country === "UK") {
      exams.push({
        examName: "ESAT",
        icon: "⚗️",
        status: "Mandatory",
        targetScore: "Top 25 percentile nationally",
        note: "Mandatory for Cambridge Engineering/Natural Sciences and Imperial Engineering/Science. Registration opens August. Slots fill within 48 hours.",
        registrationWindow: "Registration opens August at admissionstesting.org",
        examDate: "October–November",
      });
      if (f.includes("computer") || f.includes("ai")) {
        exams.push({
          examName: "TMUA",
          icon: "🔢",
          status: "Mandatory",
          targetScore: "6.5+ (Cambridge CS); 6.0+ (LSE/Warwick)",
          note: "Mandatory for Cambridge CS. Also beneficial for LSE and Warwick. Register in August — slots fill within 48 hours.",
          registrationWindow: "Registration opens August at admissionstesting.org",
          examDate: "October–November",
        });
      }
    }
    if (country === "India") {
      exams.push(
        { examName: "JEE Main", icon: "📊", status: "Mandatory", targetScore: "99+ percentile", note: "Session 1: Jan 2026. Session 2: Apr 2026. Registration: Oct–Nov 2025. Needed for NITs and JEE Advanced eligibility.", registrationWindow: "Oct–Nov 2025 at jeemain.nta.ac.in", examDate: "Jan 21–30, 2026 (S1) | Apr 1–10, 2026 (S2)" },
        { examName: "JEE Advanced", icon: "📊", status: "Recommended", targetScore: "Top 500 (IIT Bombay CS); Top 5000 (any IIT)", note: "Required for IITs. Only top 2.5 lakh JEE Main qualifiers eligible. Exam: May 17, 2026.", registrationWindow: "April 2026", examDate: "May 17, 2026" },
        { examName: "BITSAT", icon: "📊", status: "Recommended", targetScore: "320+ (CS at Pilani)", note: "For BITS Pilani (Pilani/Goa/Hyderabad). Registration: Jan–Feb 2026.", registrationWindow: "Jan–Feb 2026", examDate: "April–May 2026" }
      );
    }
  }

  if (f.includes("business") || f.includes("economics")) {
    if (country === "UK") {
      exams.push({
        examName: "TMUA",
        icon: "🔢",
        status: "Recommended",
        targetScore: "6.5+ (Cambridge Economics); 6.0+ (LSE/Warwick)",
        note: "TMUA mandatory for Cambridge Economics. LSE and Warwick Economics benefit from strong scores.",
        registrationWindow: "Registration opens August at admissionstesting.org",
        examDate: "October–November",
      });
    }
    if (country === "India") {
      exams.push(
        { examName: "CUET UG", icon: "📊", status: "Mandatory", targetScore: "95–99 percentile (SRCC/LSR)", note: "Required for B.Com, BBA, BA Economics at DU, BHU, JNU. Exam: May 11–31, 2026.", registrationWindow: "Jan–Mar 2026 at cuet.samarth.ac.in", examDate: "May 11–31, 2026" },
        { examName: "IPMAT", icon: "📊", status: "Recommended", targetScore: "Top 1–2% nationally", note: "For IIM Indore / Rohtak 5-year integrated management. Registration: Feb–Apr 2026.", registrationWindow: "Feb–Apr 2026", examDate: "May 2026" }
      );
    }
  }

  if (f.includes("law") || f.includes("political")) {
    if (country === "UK") {
      exams.push({ examName: "LNAT", icon: "⚖️", status: "Mandatory", targetScore: "25+ out of 42", note: "Required for Law at Oxford, UCL, Durham, Glasgow, KCL, Nottingham, Bristol.", registrationWindow: "Registration opens September at lnat.ac.uk", examDate: "September–January" });
    }
    if (country === "India") {
      exams.push(
        { examName: "CLAT", icon: "⚖️", status: "Mandatory", targetScore: "Top 1000 (top NLUs)", note: "Main law entrance for all 24 NLUs. CLAT 2026: December 7, 2025.", registrationWindow: "Aug–Oct 2025 at consortiumofnlus.ac.in", examDate: "December 7, 2025" },
        { examName: "AILET", icon: "⚖️", status: "Recommended", targetScore: "Top 200 rank", note: "Only for NLU Delhi. AILET 2026: December 14, 2025.", registrationWindow: "Aug–Nov 2025", examDate: "December 14, 2025" }
      );
    }
  }

  if (f.includes("design") || f.includes("architecture")) {
    if (country === "India") {
      exams.push(
        { examName: "NATA", icon: "🎨", status: "Mandatory", targetScore: "100+/200", note: "Required for B.Arch. Tests drawing, creativity, aptitude, and maths. Multiple sessions Apr–Jul 2026.", registrationWindow: "March 2026 at nata.in", examDate: "April–July 2026" },
        { examName: "UCEED", icon: "🎨", status: "Recommended", targetScore: "Top 100 rank", note: "For B.Des at IIT Bombay, Guwahati, Hyderabad, IITDM Jabalpur. UCEED 2026: January 18.", registrationWindow: "October 2025 at uceed.iitb.ac.in", examDate: "January 18, 2026" },
        { examName: "NID DAT", icon: "🎨", status: "Recommended", targetScore: "Pass Prelims → Mains", note: "For National Institute of Design programs.", registrationWindow: "Sep–Nov 2025 at admissions.nid.edu", examDate: "January 2026 (Prelims)" },
        { examName: "NIFT Entrance", icon: "👗", status: "Recommended", targetScore: "High percentile", note: "For Fashion Design, Fashion Technology at NIFT institutes.", registrationWindow: "Nov–Jan at nift.ac.in", examDate: "February 2026" }
      );
    }
    if (country === "USA" || country === "UK") {
      exams.push({ examName: "Portfolio Submission", icon: "🎨", status: "Mandatory", targetScore: "15–20 diverse creative works", note: "Portfolio is the primary selection criterion. Include drawings, digital work, 3D models, concept sketches, and process documentation.", registrationWindow: "Submit with application", examDate: "With university application" });
    }
  }

  if (f.includes("life sciences") || f.includes("biotech")) {
    if (country === "India") {
      exams.push(
        { examName: "CUET UG", icon: "🔬", status: "Mandatory", targetScore: "90+ percentile", note: "Required for B.Sc Biotechnology, Life Sciences at DU, BHU, JNU.", registrationWindow: "Jan–Mar 2026 at cuet.samarth.ac.in", examDate: "May 11–31, 2026" },
        { examName: "IISER IAT", icon: "🔬", status: "Recommended", targetScore: "High rank", note: "For BS-MS programs at IISERs. Exam: June 7, 2026.", registrationWindow: "March–April 2026", examDate: "June 7, 2026" }
      );
    }
    if (country === "UK") {
      exams.push({ examName: "ESAT (Natural Sciences)", icon: "🔬", status: "Mandatory", targetScore: "Top 25 percentile", note: "ESAT mandatory for Cambridge Natural Sciences. Choose Biology + Chemistry modules.", registrationWindow: "Registration opens August at admissionstesting.org", examDate: "October–November" });
    }
  }

  if (f.includes("media") || f.includes("communication")) {
    if (country === "India") {
      exams.push(
        { examName: "CUET UG", icon: "📺", status: "Recommended", targetScore: "90+ percentile", note: "For BA Journalism, Mass Communication at DU and other central universities.", registrationWindow: "Jan–Feb 2026 at cuet.samarth.ac.in", examDate: "May 11–31, 2026" },
        { examName: "IIMC Entrance", icon: "📺", status: "Recommended", targetScore: "Top rank", note: "India's top journalism school. Check iimc.nic.in for dates.", registrationWindow: "Check iimc.nic.in for dates", examDate: "Typically April–May" }
      );
    }
  }

  if (f.includes("liberal arts") || f.includes("humanities")) {
    if (country === "India") {
      exams.push(
        { examName: "CUET UG", icon: "📚", status: "Mandatory", targetScore: "95–99 percentile for top DU/JNU", note: "Required for BA Political Science, Psychology, Sociology at central universities. Exam: May 11–31, 2026.", registrationWindow: "Jan–Feb 2026 at cuet.samarth.ac.in", examDate: "May 11–31, 2026" },
        { examName: "Ashoka AAT", icon: "📚", status: "Recommended", targetScore: "Strong critical thinking + essay", note: "For Ashoka University Liberal Arts. Multiple rounds: Dec 2025 – Jun 2026.", registrationWindow: "Multiple rounds at ashoka.edu.in", examDate: "December 2025 – June 2026" }
      );
    }
  }

  return exams;
}

// ─── USA EduQuest Timeline (from uploaded images) ─────────────────────────────
// This follows the exact EduQuest timeline: 10th → 11th → 12th → Departure
export const USA_EDUQUEST_TIMELINE: FieldTimelineEvent[] = [
  // ── 10TH STANDARD ──────────────────────────────────────────────────────────
  {
    month: "April", year: 2024,
    title: "10th Standard Starts 🎓",
    description: "Start of 10th standard — the foundation year for US college applications. Begin thinking about your career direction and which US universities interest you.",
    type: "prep", urgent: false,
  },
  {
    month: "May (10th)", year: 2024,
    title: "Attempt AP Exam",
    description: "Attempt AP (Advanced Placement) exams if your school offers them. AP scores are viewed very positively by US universities — they show college-level readiness.",
    type: "exam", urgent: false,
  },
  {
    month: "Jun–Aug (10th)", year: 2024,
    title: "Prepare for SAT/ACT + Go to Summer School",
    description: "Begin SAT/ACT preparation. Go to summer school if possible. US universities value pre-college summer programs — they show initiative and intellectual curiosity.",
    type: "prep", urgent: false,
  },
  {
    month: "September (10th)", year: 2024,
    title: "Concrete Steps on Profile Building",
    description: "Join clubs, start research projects, community service, sports, arts — US applications require 8–10 quality extracurriculars with demonstrated leadership and impact.",
    type: "prep", urgent: false,
  },
  {
    month: "Oct/Dec (10th)", year: 2024,
    title: "SAT/ACT Attempt 1 — TAKE THIS ✅",
    description: "First SAT/ACT attempt in Oct or Dec of 10th standard. This gives you a baseline score and maximum time to improve. Register immediately at sat.collegeboard.org — Indian test centres (Delhi, Mumbai, Bangalore, Chennai, Hyderabad) fill within days of registration opening.",
    type: "exam", urgent: true,
  },

  // ── 11TH STANDARD ──────────────────────────────────────────────────────────
  {
    month: "Jan–Feb (11th)", year: 2025,
    title: "Research Summer School Programs",
    description: "Research pre-college summer programs at MIT, Harvard, Stanford, Yale, Columbia. Apply early — spots are very limited. These programs significantly strengthen your application narrative.",
    type: "prep", urgent: false,
  },
  {
    month: "April", year: 2025,
    title: "11th Standard Begins",
    description: "11th standard is the most critical year for academics. US universities heavily review your 11th grade GPA when you apply. Prioritise academics above all other activities this year.",
    type: "prep", urgent: true,
  },
  {
    month: "Jun–Jul (11th)", year: 2025,
    title: "Summer School / Pre-College Program",
    description: "Attend your chosen pre-college summer program. Harvard Pre-College, MIT Launch, Stanford OHS, Columbia Summer Immersion, or subject-specific research internships add tremendous value to your application.",
    type: "prep", urgent: false,
  },
  {
    month: "August (11th)", year: 2025,
    title: "SAT/ACT Attempt 2 — TAKE THIS AT LEAST NOW ⭐",
    description: "This is your most important SAT sitting. Target 1400+ for most schools; 1500+ for Ivy/MIT/CMU/Stanford. After this: make an Excel sheet of max 12 colleges — 5–6 Dream Universities, 6–7 Target, 3–4 Safe. Google: '<college name> international undergraduate student scholarships' for each college on your list.",
    type: "exam", urgent: true,
  },
  {
    month: "September (11th)", year: 2025,
    title: "Finalise College Shortlist + Scholarship Research",
    description: "Build your final college shortlist of 12 max. Research scholarships for each college. Search Google: '<college name> international undergraduate student scholarships'. Check which colleges require CSS Profile for US financial aid — fill it early.",
    type: "prep", urgent: true,
  },
  {
    month: "October (11th)", year: 2025,
    title: "SAT/ACT Attempt 3 IFF (If and Only If) Needed",
    description: "Third SAT sitting only if your August score was significantly below target. Most students should be done with SAT by now and focusing on application essays and extracurricular activities.",
    type: "exam", urgent: false,
  },
  {
    month: "Jan–Feb (11th End)", year: 2026,
    title: "Research Pre-College Programs for Final Summer",
    description: "Research and apply for summer programs before 12th standard. Apply to research internships, college campus programs, and academic summer schools — these are your last chance before applications.",
    type: "prep", urgent: false,
  },

  // ── 12TH STANDARD ──────────────────────────────────────────────────────────
  {
    month: "April", year: 2026,
    title: "12th Standard Begins — Application Year 🚀",
    description: "12th standard is APPLICATION YEAR. Maintain strong academics — universities see your predicted 12th scores and first semester results. Every grade matters now.",
    type: "prep", urgent: true,
  },
  {
    month: "Jun–Jul (12th)", year: 2026,
    title: "Pre-College Program (Final Summer)",
    description: "Final summer before applications. Use this for pre-college programs, research internships, or intensive college essay writing workshops. This summer experience may appear in your application essays.",
    type: "prep", urgent: false,
  },
  {
    month: "August (12th)", year: 2026,
    title: "Online Applications Open — Common App / Coalition App / QuestBridge",
    description: "Common App, Coalition App, and QuestBridge all open August 1. Create your account the same day. Fill academics, activities (10 max with descriptions), honors. REQUEST teacher recommendation letters IMMEDIATELY — give teachers minimum 6 weeks. Start brainstorming your 650-word main essay.",
    type: "open", urgent: true,
  },
  {
    month: "Sep–Oct (12th)", year: 2026,
    title: "Collect Predicted Scores + LOR + Write Essays",
    description: "Collect your Predicted Scores Certificate and Letters of Recommendation (LOR) from teachers. Write and revise your 650-word Common App main essay and all supplemental essays for each college. Make sure your counselor and teachers have uploaded documents on time. Fill the CSS Profile for US scholarships.",
    type: "deadline", urgent: true,
  },
  {
    month: "November (12th)", year: 2026,
    title: "Early Action / Early Decision Deadlines: Nov 1–30",
    description: "Early Action / Early Decision deadlines: November 1st to November 30th — varies by college. Nov 1: MIT EA, Harvard SCEA, Yale EA, Princeton EA, Columbia ED, Wharton (UPenn) ED, Johns Hopkins REA, CMU EA. Nov 15: Georgia Tech EA, UVA EA, Emory ED. Submit at least 3 days early to avoid portal crashes and technical issues.",
    type: "deadline", urgent: true,
  },
  {
    month: "December (12th)", year: 2026,
    title: "Regular Decision Deadlines + 12th Board Exams",
    description: "Regular Decision application deadlines December to January — varies by college. Many colleges have deadlines till July end and some have rolling admission policy. Submit ALL your applications. IMPORTANT: 12th BOARD EXAMS also happen during this period — manage your time carefully!",
    type: "deadline", urgent: true,
  },
  {
    month: "April (After 12th)", year: 2027,
    title: "Study for and Give TOEFL / IELTS / PTE",
    description: "Take your English proficiency test in April if not already done. TOEFL 100+ iBT or IELTS 7.0+ required by most US universities for international students. Computer-delivered IELTS gives results in 3–5 days.",
    type: "exam", urgent: true,
  },
  {
    month: "May–July", year: 2027,
    title: "Acceptance + Fee Submission + VISA Completion",
    description: "Accept your chosen offer and pay enrollment deposit by May 1 (National Candidate Reply Date). Complete I-20 form → Pay SEVIS fee ($350) at fmjfee.com SAME DAY → Fill DS-160 → Book F-1 visa interview immediately (slots fill in minutes). Attend pre-departure orientations.",
    type: "visa", urgent: true,
  },
  {
    month: "August", year: 2027,
    title: "BON VOYAGE!! Congratulations 🎉✈️",
    description: "Depart for the USA! Most Fall semesters begin late August – early September 2027. NOTE: Those who start SAT prep in 12th can attempt in the month of March / May / August / October / December. GRAB YOUR CHANCES — YOU'RE NOT SO LATE!",
    type: "travel", urgent: false,
  },
];

// ─── Timeline by field + country ─────────────────────────────────────────────
export function getFieldCountryTimeline(field: string, country: Country, grade: number): FieldTimelineEvent[] {
  const f = field.toLowerCase();
  const events: FieldTimelineEvent[] = [];

  // ── USA: Always use the EduQuest canonical timeline ───────────────────────
  if (country === "USA") {
    const satTarget = f.includes("engineering") || f.includes("computer") ? "1480+"
      : f.includes("business") ? "1460+"
      : f.includes("medicine") ? "1450+"
      : "1400+";

    return USA_EDUQUEST_TIMELINE.map((ev) => {
      // Inject field-specific SAT target into Attempt 2 description
      if (ev.title.includes("SAT/ACT Attempt 2") && f) {
        return {
          ...ev,
          description: ev.description.replace(
            "1400+ for most schools; 1500+ for Ivy/MIT/CMU/Stanford",
            `${satTarget} for ${field} programs; 1500+ for Ivy/MIT/CMU/Stanford`
          ),
        };
      }
      return ev;
    });
  }

  // ── India ─────────────────────────────────────────────────────────────────
  if (country === "India") {
    if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
      events.push(
        { month: "Oct–Nov 2025", year: 2025, title: "JEE Main Registration Opens", description: "Register for JEE Main 2026 at jeemain.nta.ac.in. Session 1: January 2026. Don't miss the window.", type: "exam", urgent: true },
        { month: "Jan 21–30, 2026", year: 2026, title: "JEE Main Session 1", description: "First attempt. Aim for 99+ percentile to secure JEE Advanced eligibility.", type: "exam", urgent: true },
        { month: "Feb–Mar 2026", year: 2026, title: "BITSAT & VITEEE Registration", description: "BITSAT: Jan–Feb 2026. VITEEE: Feb–Mar 2026. Apply for BITS Pilani and VIT simultaneously.", type: "open", urgent: false },
        { month: "Apr 1–10, 2026", year: 2026, title: "JEE Main Session 2", description: "Second attempt. Best of two sessions counts for rank calculation.", type: "exam", urgent: true },
        { month: "Apr–May 2026", year: 2026, title: "BITSAT, VITEEE, SRMJEE Exams", description: "BITSAT: Apr–May. VITEEE: Apr 28–May 3. SRMJEE: Apr–May. Write all backup exams.", type: "exam", urgent: true },
        { month: "May 17, 2026", year: 2026, title: "JEE Advanced (IIT Gateway)", description: "Top 2.5 lakh JEE Main qualifiers eligible. Top 500 rank → IIT Bombay CS.", type: "exam", urgent: true },
        { month: "Jun–Jul 2026", year: 2026, title: "JoSAA Counselling — Seat Allotment", description: "JEE results → JoSAA counselling at josaa.nic.in. Fill choices carefully.", type: "result", urgent: true },
        { month: "Jul–Aug 2026", year: 2026, title: "College Reporting & Academic Year Begins", description: "Report to allotted college. Most IITs/NITs begin late July–August 2026.", type: "travel", urgent: false }
      );
    } else if (f.includes("medicine") || f.includes("pre-med")) {
      events.push(
        { month: "Feb 8, 2026", year: 2026, title: "NEET-UG Registration Opens", description: "Register at neet.nta.ac.in. Last date: March 8–11, 2026.", type: "open", urgent: true },
        { month: "Mar 8–11, 2026", year: 2026, title: "NEET Registration Closes", description: "Last date to apply. Correction window opens after.", type: "deadline", urgent: true },
        { month: "May 3, 2026", year: 2026, title: "NEET-UG 2026 Exam", description: "3.5 hrs, 180 questions, 720 marks. Physics + Chemistry + Biology. Aim 650+ for AIIMS.", type: "exam", urgent: true },
        { month: "Jun 2026", year: 2026, title: "NEET Results", description: "Results declared June 2026 at neet.nta.ac.in.", type: "result", urgent: false },
        { month: "Jul 2026", year: 2026, title: "MCC Counselling Starts", description: "MCC counselling at mcc.nic.in for All India Quota seats (15%).", type: "open", urgent: true },
        { month: "Aug–Sep 2026", year: 2026, title: "College Allotment & Admission", description: "State counselling runs parallel for 85% state quota seats. Report to allotted college.", type: "result", urgent: false }
      );
    } else if (f.includes("business") || f.includes("economics")) {
      events.push(
        { month: "Jan–Mar 2026", year: 2026, title: "CUET UG Registration", description: "Register at cuet.samarth.ac.in. Apply for Commerce/Economics subjects for DU/BHU/JNU.", type: "open", urgent: true },
        { month: "Feb–Apr 2026", year: 2026, title: "IPMAT Registration (IIM Programs)", description: "IPMAT for IIM Indore & Rohtak 5-year integrated management. Registration: Feb–Apr 2026.", type: "open", urgent: false },
        { month: "Apr–May 2026", year: 2026, title: "JIPMAT, SET, NPAT Exams", description: "JIPMAT: Apr 2026. SET (Symbiosis): May 2026. NPAT (NMIMS): Mar–May 2026.", type: "exam", urgent: true },
        { month: "May 2026", year: 2026, title: "CUET UG & IPMAT Exams", description: "CUET UG: May 11–31. IPMAT: May 2026. Prepare simultaneously.", type: "exam", urgent: true },
        { month: "Jun–Jul 2026", year: 2026, title: "CUET Results & DU Counselling", description: "CUET results: June. DU CSAS counselling starts July 2026.", type: "result", urgent: false },
        { month: "Jul–Aug 2026", year: 2026, title: "College Begins", description: "Final seat allotments. Academic year begins August.", type: "travel", urgent: false }
      );
    } else if (f.includes("law") || f.includes("political")) {
      events.push(
        { month: "Aug–Oct 2025", year: 2025, title: "CLAT 2026 Registration", description: "Register at consortiumofnlus.ac.in. Last date: October 2025.", type: "open", urgent: true },
        { month: "Aug–Nov 2025", year: 2025, title: "AILET 2026 Registration", description: "Only for NLU Delhi. Register at nationallawuniversitydelhi.in.", type: "open", urgent: true },
        { month: "Dec 7, 2025", year: 2025, title: "CLAT 2026 Exam", description: "2-hour exam. English, GK/Current Affairs, Legal Aptitude, Logical Reasoning, Quantitative Techniques.", type: "exam", urgent: true },
        { month: "Dec 14, 2025", year: 2025, title: "AILET 2026 Exam (NLU Delhi)", description: "Separate from CLAT. Only for NLU Delhi.", type: "exam", urgent: true },
        { month: "Mar–Apr 2026", year: 2026, title: "CLAT Results & NLU Counselling", description: "CLAT results February 2026. Consortium counselling begins March–April 2026.", type: "result", urgent: false },
        { month: "May–Jun 2026", year: 2026, title: "Seat Allotment & Admission", description: "Final NLU seat allotments. Law program begins August 2026.", type: "travel", urgent: false }
      );
    } else if (f.includes("design") || f.includes("architecture")) {
      events.push(
        { month: "Oct 2025", year: 2025, title: "UCEED 2026 Registration Opens", description: "Register at uceed.iitb.ac.in for B.Des at IIT Bombay, Guwahati, Hyderabad. Closes December 2025.", type: "open", urgent: true },
        { month: "Sep–Nov 2025", year: 2025, title: "NID DAT Prelims Registration", description: "Register at admissions.nid.edu for National Institute of Design. Prelims: January 2026.", type: "open", urgent: true },
        { month: "Nov–Jan 2026", year: 2025, title: "NIFT 2026 Registration", description: "Register at nift.ac.in for Fashion Design. Exam: February 2026.", type: "open", urgent: false },
        { month: "Jan 18, 2026", year: 2026, title: "UCEED 2026 Exam", description: "3-hour computer-based test. Observation, visualization, design thinking.", type: "exam", urgent: true },
        { month: "Jan 2026", year: 2026, title: "NID DAT Prelims Exam", description: "Written + studio test. Shortlisted candidates appear for Mains in April.", type: "exam", urgent: true },
        { month: "Feb 2026", year: 2026, title: "NIFT Entrance Exam", description: "CAT (Creative Ability Test) + GAT (General Ability Test) for Design programs.", type: "exam", urgent: false },
        { month: "Mar 2026", year: 2026, title: "NATA Registration Opens", description: "Register at nata.in for B.Arch. Multiple sessions April–July 2026.", type: "open", urgent: false },
        { month: "Apr–Jul 2026", year: 2026, title: "NATA Exam Sessions", description: "Multiple NATA sessions. Best score counts. Portfolio preparation equally important.", type: "exam", urgent: false },
        { month: "May–Jul 2026", year: 2026, title: "Results, Counselling & Admissions", description: "UCEED/NID/NIFT/NATA results and counselling. Programs begin July–August.", type: "result", urgent: false }
      );
    } else if (f.includes("life sciences") || f.includes("biotech")) {
      events.push(
        { month: "Jan–Mar 2026", year: 2026, title: "CUET UG Registration", description: "Register for B.Sc Biotechnology, Life Sciences, Microbiology at DU, BHU, JNU.", type: "open", urgent: true },
        { month: "Mar 2026", year: 2026, title: "IISER IAT Registration", description: "IISER IAT registration for BS-MS programs. Exam: June 7, 2026.", type: "open", urgent: true },
        { month: "May 11–31, 2026", year: 2026, title: "CUET UG Exam", description: "CUET for B.Sc admissions at central universities.", type: "exam", urgent: true },
        { month: "Jun 7, 2026", year: 2026, title: "IISER IAT Exam", description: "Tests Physics, Chemistry, Biology, Mathematics. For BS-MS research programs at IISERs.", type: "exam", urgent: true },
        { month: "Jun–Aug 2026", year: 2026, title: "Results, Counselling & Admissions", description: "Results June–July. Admissions and counselling July–August 2026.", type: "result", urgent: false }
      );
    } else {
      events.push(
        { month: "Jan–Mar 2026", year: 2026, title: "CUET UG Registration", description: "CUET is the common entrance test for central universities including DU, JNU, BHU.", type: "open", urgent: true },
        { month: "May 11–31, 2026", year: 2026, title: "CUET UG Exam", description: "Computer-based test for admissions to 200+ central and state universities.", type: "exam", urgent: true },
        { month: "Jun–Jul 2026", year: 2026, title: "Results & Counselling", description: "CUET results expected June. University-specific counselling begins July 2026.", type: "result", urgent: false },
        { month: "Jul–Aug 2026", year: 2026, title: "College Begins", description: "Academic year begins for most Indian colleges.", type: "travel", urgent: false }
      );
    }
    return events;
  }

  // ── International countries ───────────────────────────────────────────────
  events.push(
    { month: "Jan–May 2026", year: 2026, title: "Begin IELTS / TOEFL Preparation", description: `Start English proficiency test prep. Target ${country === "UK" ? "IELTS for UKVI Academic 7.0+" : country === "Australia" ? "IELTS 7.0+ (Group of Eight)" : "IELTS 6.5+"}. Allow 3 months of focused preparation.`, type: "prep", urgent: true },
    { month: "Jun–Jul 2026", year: 2026, title: "Sit IELTS / TOEFL — First Attempt", description: "Computer-delivered IELTS gives results in 3–5 days. If below target, retake September–October 2026.", type: "exam", urgent: true }
  );

  if (country === "Germany") {
    events.push(
      { month: "Jan–Mar 2026", year: 2026, title: "Apply for APS Certificate — DO THIS FIRST", description: "Apply at aps-india.de IMMEDIATELY. Takes 4–8 weeks. Without APS your German visa WILL be refused.", type: "exam", urgent: true },
      { month: "Mar–Jun 2026", year: 2026, title: "Apply to German Universities via uni-assist", description: "Apply through uni-assist.de. Deadline: May 31, 2026 for TU Munich, LMU, Heidelberg, RWTH Aachen.", type: "open", urgent: true },
      { month: "May–Jun 2026", year: 2026, title: "Receive Admission + Open Sperrkonto", description: "On receiving admission, open Sperrkonto at Fintiba/Expatrio with €11,208. Book consulate appointment SAME DAY.", type: "open", urgent: true },
      { month: "Jun–Jul 2026", year: 2026, title: "German Student Visa Interview", description: "Bring: APS certificate, unconditional admission letter, Sperrkonto proof, IELTS/German certificate, transcripts with translations.", type: "visa", urgent: true },
      { month: "Oct 2026", year: 2026, title: "Depart for Germany — Winter Semester Begins", description: "Winter Semester begins October/November 2026.", type: "travel", urgent: false }
    );
    return events;
  }

  if (country === "UK") {
    if (f.includes("medicine") || f.includes("pre-med")) {
      events.push(
        { month: "Apr–May 2026", year: 2026, title: "Begin UCAT Preparation", description: "UCAT mandatory for UK medicine. Register in May at ucat.ac.uk. Target 2700+; Edinburgh 2900+; SJT Band 1.", type: "prep", urgent: true },
        { month: "May 2026", year: 2026, title: "Register for UCAT", description: "Registration opens May 2026. Exam window: July–September 2026. Must complete before Oct 15 UCAS Medicine deadline.", type: "open", urgent: true },
        { month: "Jul–Sep 2026", year: 2026, title: "Sit UCAT Exam", description: "Results same day. Edinburgh 2900+; KCL 2800+; Manchester 2700+. SJT Band 1–2 critical.", type: "exam", urgent: true }
      );
    }
    if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
      events.push(
        { month: "Apr–Jun 2026", year: 2026, title: "Begin ESAT Preparation", description: "ESAT mandatory for Cambridge Engineering/NatSci and Imperial Engineering. Use past ENGAA/NSAA papers.", type: "prep", urgent: false },
        { month: "Aug 2026", year: 2026, title: "Register for ESAT — Register Immediately!", description: "Registration opens August at admissionstesting.org. India slots fill within 48 hours. Fee: ~£75.", type: "open", urgent: true },
        { month: "Oct–Nov 2026", year: 2026, title: "Sit ESAT Exam", description: "3 parts × 40 min. Part 1: Maths (mandatory). Choose 2 from: Physics, Chemistry, Biology. No calculator.", type: "exam", urgent: true }
      );
    }
    if (f.includes("business") || f.includes("economics")) {
      events.push(
        { month: "Apr–Jun 2026", year: 2026, title: "Begin TMUA Preparation", description: "TMUA mandatory for Cambridge Economics. Helpful for LSE (6.5+) and Warwick (6.0+).", type: "prep", urgent: false },
        { month: "Aug 2026", year: 2026, title: "Register for TMUA — Register Immediately!", description: "Registration opens August at admissionstesting.org. Slots fill within 48 hours.", type: "open", urgent: true },
        { month: "Oct–Nov 2026", year: 2026, title: "Sit TMUA Exam", description: "2 papers × 75 min. Paper 1: Maths Knowledge. Paper 2: Mathematical Reasoning. Scaled 1.0–9.0.", type: "exam", urgent: true }
      );
    }
    if (f.includes("law") || f.includes("political")) {
      events.push(
        { month: "Sep 2026", year: 2026, title: "Register for LNAT", description: "LNAT required for Law at Oxford, UCL, Durham, Glasgow, KCL, Nottingham, Bristol.", type: "open", urgent: true },
        { month: "Sep–Jan 2027", year: 2026, title: "Sit LNAT", description: "42 MCQ comprehension questions + 1 essay. Target 25+ for competitive applications.", type: "exam", urgent: true }
      );
    }
    const ucasDeadline = (f.includes("medicine") || f.includes("pre-med")) ? "Oct 15, 2026 (Medicine — NO EXTENSIONS)" : "Jan 13, 2027 (UCAS final deadline)";
    events.push(
      { month: "Sep 2, 2026", year: 2026, title: "UCAS Opens — Begin Personal Statement", description: "UCAS opens September 2, 2026. Write 4,000-character Personal Statement. Focus 75% on subject passion, 25% activities.", type: "open", urgent: true },
      { month: f.includes("medicine") ? "Oct 15, 2026" : "Jan 13, 2027", year: 2026, title: `UCAS Deadline: ${ucasDeadline}`, description: `6:00 PM UK time — NO EXTENSIONS. ${f.includes("medicine") ? "ALL UK medical schools." : "All non-Oxbridge/Medicine courses."}`, type: "deadline", urgent: true },
      { month: "Jan–May 2027", year: 2027, title: "UK University Decisions (Rolling)", description: "Non-Oxbridge universities respond January–May 2027. Oxford: Jan 12. Cambridge: Jan 2027.", type: "result", urgent: false },
      { month: "Jun–Jul 2027", year: 2027, title: "Apply for UK Student Visa", description: "Apply at gov.uk/student-visa. Need: CAS number, IELTS for UKVI Academic, 28-day bank balance. Fee: ~£490 + IHS £776/yr.", type: "visa", urgent: true },
      { month: "Aug–Sep 2027", year: 2027, title: "Depart for UK ✈️", description: "UK courses begin mid-to-late September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  if (country === "Canada") {
    events.push(
      { month: "Nov 1, 2026", year: 2026, title: "University of Toronto Deadline", description: "UoT deadline Nov 1. For Lester B. Pearson Scholarship (C$200k full ride), your school must nominate you — speak to your principal NOW.", type: "deadline", urgent: true },
      { month: "Jan 15, 2027", year: 2027, title: "UBC Vancouver & McGill Deadline", description: "UBC: Jan 15. McGill: Jan 15. University of Waterloo varies by program.", type: "deadline", urgent: true },
      { month: "Mar–Apr 2027", year: 2027, title: "Canadian University Decisions", description: "Rolling decisions. UBC IMES scholarship (up to C$80k) awarded automatically for top applicants.", type: "result", urgent: false },
      { month: "Apr–May 2027", year: 2027, title: "Apply for Canadian Study Permit", description: "Apply immediately on receiving acceptance. Processing: 8–12 weeks. Do NOT delay.", type: "visa", urgent: true },
      { month: "Sep 2027", year: 2027, title: "Depart for Canada ✈️", description: "Canadian academic year begins September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  if (country === "Australia") {
    events.push(
      { month: "Aug–Oct 2026", year: 2026, title: "Applications Open — Feb 2027 Intake", description: "UoM: Oct 31. UNSW Sydney: Oct 31. Monash: Dec 15. University of Adelaide: Jan 31.", type: "open", urgent: true },
      { month: "Oct 31, 2026", year: 2026, title: "UoM & UNSW Deadline", description: "University of Melbourne and UNSW Sydney deadline for February 2027 intake.", type: "deadline", urgent: true },
      { month: "Nov–Dec 2026", year: 2026, title: "Receive Offer, CoE & Apply Visa", description: "After accepting offer, university issues CoE. Purchase OSHC (mandatory) BEFORE applying for Subclass 500 visa.", type: "visa", urgent: true },
      { month: "Jan–Feb 2027", year: 2027, title: "Depart for Australia ✈️", description: "February 2027 intake begins. Arrive 1–2 weeks early for orientation.", type: "travel", urgent: false }
    );
    return events;
  }

  if (country === "Netherlands") {
    events.push(
      { month: "Jan 15, 2027", year: 2027, title: "Register at Studielink — Numerus Fixus Deadline", description: "Register at studielink.nl by January 15 for capped programs at TU Delft, UvA.", type: "open", urgent: true },
      { month: "Apr 1, 2027", year: 2027, title: "Main Dutch Application Deadline", description: "April 1 for most September 2027 programs. TU Delft, UvA, Leiden, VU, Utrecht, Erasmus.", type: "deadline", urgent: true },
      { month: "Apr–May 2027", year: 2027, title: "Admission Decisions", description: "Dutch universities send decisions April–May 2027.", type: "result", urgent: false },
      { month: "May–Jun 2027", year: 2027, title: "Accept Offer — University Submits MVV", description: "Pay deposit. University submits your MVV application to IND on your behalf.", type: "visa", urgent: true },
      { month: "Sep 2027", year: 2027, title: "Depart for Netherlands ✈️", description: "Dutch academic year begins September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  if (country === "Singapore") {
    events.push(
      { month: "Dec 2026–Feb 2027", year: 2026, title: "NUS / NTU / SMU Applications Open", description: "NUS: Dec 2026 – Feb 23, 2027 for international qualifications. Apply as early as possible.", type: "open", urgent: true },
      { month: "Feb 23, 2027", year: 2027, title: "NUS Application Deadline", description: "NUS closes Feb 23, 2027. NTU: similar. SMU: March 31, 2027.", type: "deadline", urgent: true },
      { month: "Mar–Jun 2027", year: 2027, title: "Singapore University Offers Released", description: "NUS and NTU send offers March–June 2027. MOE Tuition Grant available.", type: "result", urgent: false },
      { month: "Apr–Jun 2027", year: 2027, title: "University Nominates via ICA SOLAR", description: "After accepting offer, university submits Student Pass application via SOLAR. IPA letter arrives 4–8 weeks.", type: "visa", urgent: true },
      { month: "Jul–Aug 2027", year: 2027, title: "Depart for Singapore ✈️", description: "Visit ICA Building within 2 weeks of arrival to collect Student Pass card.", type: "travel", urgent: false }
    );
    return events;
  }

  if (country === "Japan") {
    events.push(
      { month: "Apr–May 2026", year: 2026, title: "MEXT Scholarship Application (Embassy Route)", description: "Apply through Japanese Embassy in India April–May. Full funding: tuition + ¥117,000/month stipend.", type: "open", urgent: true },
      { month: "Jul–Nov 2026", year: 2026, title: "Japanese University Direct Applications", description: "University of Tokyo (PEAK English): Oct 31. Waseda English: Nov 15. Keio: Dec 1. Ritsumeikan: Dec 1.", type: "open", urgent: false },
      { month: "Jan–Feb 2027", year: 2027, title: "Admission Decisions", description: "University of Tokyo: February 2027. Waseda: January. Receive Certificate of Admission.", type: "result", urgent: false },
      { month: "Feb–Mar 2027", year: 2027, title: "Apply for Japan Student Visa", description: "University applies for Certificate of Eligibility (COE) — takes 4–8 weeks. Then Student Visa.", type: "visa", urgent: true },
      { month: "Apr 2027", year: 2027, title: "Depart for Japan ✈️", description: "Japanese academic year begins April 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  return events;
}

// ─── Top colleges by field + country ─────────────────────────────────────────
export function getTopCollegesForField(field: string, country: Country): string[] {
  const f = field.toLowerCase();

  const collegeMap: Partial<Record<Country, Record<string, string[]>>> = {
    India: {
      engineering: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kharagpur", "IIT Kanpur", "NIT Trichy", "BITS Pilani", "IIT Roorkee"],
      medicine: ["AIIMS Delhi", "CMC Vellore", "JIPMER Puducherry", "AIIMS Jodhpur", "Maulana Azad Medical College"],
      business: ["IIM Indore (IPM)", "SRCC Delhi (CUET)", "Lady Shri Ram College", "Ashoka University", "NMIMS Mumbai"],
      law: ["NLSIU Bangalore (CLAT)", "NALSAR Hyderabad (CLAT)", "NLU Delhi (AILET)", "GNLU Gandhinagar", "Jindal Global Law School"],
      design: ["National Institute of Design (NID)", "IIT Bombay (IDC)", "NIFT Delhi", "SPA Delhi", "CEPT University"],
      biotech: ["IISERs (Pune/Bangalore/Kolkata)", "IISc Bangalore", "Delhi University", "JNU", "VIT Vellore"],
      humanities: ["Ashoka University", "KREA University", "St. Stephen's College DU", "Miranda House DU", "JNU"],
      media: ["IIMC Delhi", "Asian College of Journalism", "Xavier Institute of Communications", "Symbiosis Pune", "Whistling Woods"],
    },
    USA: {
      engineering: ["MIT", "Caltech", "Stanford", "Carnegie Mellon", "Georgia Tech", "Purdue", "UIUC", "UC Berkeley"],
      medicine: ["Johns Hopkins", "Duke", "Vanderbilt", "Case Western Reserve", "Emory", "Northwestern", "Washington University"],
      business: ["Wharton (UPenn)", "NYU Stern", "MIT Sloan", "Michigan Ross", "Indiana Kelley", "UT Austin McCombs", "Georgetown McDonough"],
      law: ["Yale Law", "Harvard Law", "Stanford Law", "Columbia Law", "NYU Law (all graduate entry)"],
      design: ["RISD", "Parsons School of Design", "Pratt Institute", "SVA", "SCAD"],
      biotech: ["MIT", "Stanford", "Johns Hopkins", "UC San Diego", "University of Michigan"],
      humanities: ["Yale", "Princeton", "University of Chicago", "Columbia", "Williams College", "Amherst"],
      media: ["Northwestern Medill", "USC Annenberg", "Columbia Journalism", "NYU Tisch", "Boston University"],
    },
    UK: {
      engineering: ["Imperial College London", "Cambridge University", "Oxford University", "UCL", "University of Edinburgh"],
      medicine: ["Cambridge Medicine", "Oxford Medicine", "Edinburgh Medicine", "King's College London Medicine", "UCL Medical School"],
      business: ["LSE", "Warwick Business School", "UCL", "King's College London", "University of Bath"],
      law: ["Oxford Law", "Cambridge Law", "UCL Law", "LSE Law", "King's College Law"],
      design: ["Royal College of Art", "Goldsmiths", "Middlesex University", "University of the Arts London"],
      biotech: ["Cambridge (Natural Sciences)", "Imperial College", "UCL", "Edinburgh", "Manchester"],
      humanities: ["Oxford", "Cambridge", "UCL", "LSE", "University of Edinburgh"],
      media: ["City, University of London", "Goldsmiths", "University of Westminster", "Nottingham"],
    },
    Canada: {
      engineering: ["University of Waterloo", "University of Toronto", "UBC", "McGill", "McMaster"],
      medicine: ["University of Toronto Medicine", "UBC Medicine", "McMaster Health Sciences", "McGill Medicine"],
      business: ["Ivey Business School (Western)", "Rotman (UoT)", "Sauder (UBC)", "Desautels (McGill)", "Smith (Queen's)"],
      law: ["University of Toronto Law", "Osgoode Hall (York)", "McGill Law", "UBC Allard Law"],
      design: ["OCAD University", "Concordia (Fine Arts)", "Emily Carr University"],
      biotech: ["University of Toronto", "UBC", "McGill", "McMaster"],
      humanities: ["University of Toronto", "McGill", "UBC", "Queen's", "Western"],
      media: ["Ryerson (TMU)", "Carleton University", "University of King's College"],
    },
    Germany: {
      engineering: ["TU Munich", "RWTH Aachen", "KIT Karlsruhe", "TU Berlin", "University of Stuttgart"],
      medicine: ["Heidelberg University", "Charité Berlin", "LMU Munich", "University of Freiburg"],
      business: ["Mannheim Business School", "Frankfurt School", "LMU Munich (Economics)", "TU Munich School of Management"],
      law: ["LMU Munich", "Humboldt University Berlin", "University of Hamburg"],
      design: ["Berlin University of the Arts (UdK)", "HfG Ulm", "Munich University of Applied Sciences"],
      biotech: ["Heidelberg University", "TU Munich", "LMU Munich", "University of Göttingen"],
      humanities: ["LMU Munich", "Humboldt University Berlin", "Freie Universität Berlin", "Heidelberg"],
      media: ["Hochschule für Film und Fernsehen (HFF)", "University of Cologne (Media Studies)"],
    },
  };

  const getKey = (f: string): string => {
    if (f.includes("engineering") || f.includes("computer") || f.includes("ai") || f.includes("data")) return "engineering";
    if (f.includes("medicine") || f.includes("pre-med")) return "medicine";
    if (f.includes("business") || f.includes("economics")) return "business";
    if (f.includes("law") || f.includes("political")) return "law";
    if (f.includes("design") || f.includes("architecture")) return "design";
    if (f.includes("life sciences") || f.includes("biotech")) return "biotech";
    if (f.includes("liberal arts") || f.includes("humanities")) return "humanities";
    if (f.includes("media") || f.includes("communication")) return "media";
    return "engineering";
  };

  const key = getKey(f);
  return (collegeMap[country] as Record<string, string[]>)?.[key] ?? [];
}

// ─── Abroad note by field + country ──────────────────────────────────────────
export function getAbroadNote(field: string, country: Country): string {
  const f = field.toLowerCase();
  const notes: Partial<Record<Country, string>> = {};

  if (f.includes("medicine") || f.includes("pre-med")) {
    notes.USA = "In the USA, you cannot do direct MBBS. You must complete a 4-year bachelor's degree (Pre-Med track), then apply to medical school with MCAT. Total path: ~8 years.";
    notes.UK = "UK offers direct medicine after 12th (5-year MBBS equivalent). UCAS Medicine deadline is OCTOBER 15 — much earlier than other programs. UCAT exam is mandatory.";
    notes.Canada = "Canada requires a bachelor's degree first, then medical school. MCAT required. Similar to USA pathway.";
    notes.Australia = "Australia offers direct medicine from school (5–6 years). UCAT ANZ is required. Competitive at University of Melbourne, Monash, UNSW.";
    notes.Germany = "Germany requires C1 German proficiency for medicine. Very few English-medium medical programs available.";
  } else if (f.includes("law") || f.includes("political")) {
    notes.USA = "In the USA, law is a graduate degree (JD — 3 years after a 4-year bachelor's). You cannot do direct law after 12th. LSAT needed for law school.";
    notes.UK = "UK allows direct LLB (law degree) after 12th. LNAT exam required for Oxford, UCL, Durham, Glasgow, KCL, Nottingham. UCAS deadline: January 13.";
  } else if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
    notes.UK = "Cambridge Engineering requires ESAT (replaced ENGAA in 2024). Imperial requires ESAT too. Register in August — slots fill within 48 hours.";
    notes.USA = "US Engineering programs are highly competitive. SAT Math 750+ strengthens top school applications. Start SAT in 10th standard (Oct/Dec attempt).";
    notes.Germany = "Germany is excellent for Engineering — TU Munich, RWTH Aachen, KIT are world-class at near-zero tuition. APS Certificate is MANDATORY.";
  } else if (f.includes("design") || f.includes("architecture")) {
    notes.USA = "Portfolio is the primary selection criterion. Start building a 15–20 piece portfolio early. RISD, Parsons, and Pratt are top art/design schools.";
    notes.UK = "UK design schools heavily emphasise portfolio. Royal College of Art and University of the Arts London are world-leading.";
  }

  return (notes as Record<Country, string>)[country] ?? `For ${field} in ${country}, strong academics, IELTS/TOEFL, and relevant extracurriculars are the key admission factors. Check individual university requirements.`;
}