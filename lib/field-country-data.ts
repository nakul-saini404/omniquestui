import type { Country, Stream, FieldCountryData, FieldExamInfo, FieldSubjectInfo, FieldTimelineEvent } from "@/types/edupath";

// ─── SAT requirement by country ──────────────────────────────────────────────
export const SAT_REQUIRED_COUNTRIES: Country[] = ["USA"];
export const SAT_OPTIONAL_COUNTRIES: Country[] = ["India"]; // Ashoka/KREA accept SAT
export const SAT_NOT_NEEDED: Country[] = ["UK", "Canada", "Australia", "Germany", "Netherlands", "Singapore", "Japan"];

export function isSATNeeded(country: Country): boolean {
  return SAT_REQUIRED_COUNTRIES.includes(country);
}

export function getSATNote(country: Country): string {
  if (country === "USA") return "SAT is required/strongly recommended for US admissions. Target 1400+ (1520+ for Ivy/top-10). Register at sat.collegeboard.org.";
  if (country === "India") return "SAT not required for most Indian colleges. However, Ashoka University (1450+), KREA University (1400+), FLAME University (1300+), and Shiv Nadar University accept SAT.";
  if (country === "UK") return "SAT is NOT required or considered by UK universities. Focus on UCAS Personal Statement, predicted grades, and subject-specific tests (UCAT/ESAT/TMUA/LNAT).";
  if (country === "Canada") return "SAT is generally NOT required by Canadian universities. Academic grades and IELTS/TOEFL are the key requirements.";
  if (country === "Australia") return "SAT is NOT required by Australian universities. IELTS 6.5–7.0+ and strong academic record are what matter.";
  if (country === "Germany") return "SAT is NOT required by German universities. APS Certificate + academic records + German/IELTS are needed.";
  if (country === "Netherlands") return "SAT is NOT required by Dutch universities. Academic record + IELTS 6.5+ + motivation letter is the pathway.";
  if (country === "Singapore") return "SAT is NOT required by NUS/NTU/SMU. Academic excellence + IELTS/TOEFL + interview are key.";
  if (country === "Japan") return "SAT is NOT required by Japanese universities. IELTS/TOEFL + academic record (+ JLPT for Japanese-medium programmes) is needed.";
  return "Check individual university requirements.";
}

// ─── Subject requirements by field ───────────────────────────────────────────
export function getSubjectsForField(field: string, country: Country): FieldSubjectInfo[] {
  const f = field.toLowerCase();

  if (f.includes("computer science") || f.includes("ai") || f.includes("data")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Mathematics (PCM)", importance: "Required", note: "Strong maths foundation is essential — Algebra, Calculus, Statistics are core." },
      { subject: "Physics", importance: "Strongly Recommended", note: "Required for engineering-side CS programs. Many CS programs list Physics as preferred." },
      { subject: "Computer Science / Informatics", importance: "Helpful", note: "If available as a subject, it gives you an edge. Coding projects matter more than the subject itself." },
    ];
    if (country === "UK") base.push({ subject: "TMUA / ESAT", importance: "Required", note: "Cambridge CS requires TMUA. Imperial CS requires ESAT from 2024." });
    if (country === "USA") base.push({ subject: "SAT Math 750+", importance: "Strongly Recommended", note: "Top CS programs (MIT, CMU, Stanford) admit students with near-perfect SAT Math." });
    return base;
  }

  if (f.includes("engineering") || f.includes("mechanical") || f.includes("civil") || f.includes("electrical")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Mathematics (PCM)", importance: "Required", note: "Maths is compulsory — Calculus, Mechanics, Vectors, Statistics." },
      { subject: "Physics", importance: "Required", note: "Physics is mandatory for all Engineering programs worldwide." },
      { subject: "Chemistry", importance: "Strongly Recommended", note: "Required for Chemical/Materials Engineering. Recommended for all branches." },
    ];
    if (country === "UK") base.push({ subject: "ESAT (Cambridge/Imperial)", importance: "Required", note: "ESAT is mandatory for Cambridge Engineering and Imperial Engineering from 2024." });
    if (country === "India") base.push({ subject: "JEE Main + JEE Advanced", importance: "Required", note: "JEE Main is the gateway. JEE Advanced is required for IITs. BITSAT for BITS Pilani." });
    return base;
  }

  if (f.includes("medicine") || f.includes("pre-med")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Biology / Life Sciences", importance: "Required", note: "Core subject — without Biology/PCB stream, most medical programs won't consider you." },
      { subject: "Chemistry", importance: "Required", note: "Organic, inorganic, and physical chemistry are all tested in medical entrance exams." },
      { subject: "Physics", importance: "Required", note: "Required for NEET-UG (India). Also tested in UCAT/BMAT preparation." },
      { subject: "English", importance: "Strongly Recommended", note: "Strong English is required for IELTS/TOEFL and medical school personal statements." },
    ];
    if (country === "UK" || country === "Australia") base.push({ subject: "UCAT", importance: "Required", note: "UCAT (Verbal Reasoning, Abstract Reasoning, Quantitative Reasoning, SJT) is mandatory for UK/Australia medicine." });
    if (country === "India") base.push({ subject: "NEET-UG", importance: "Required", note: "NEET-UG is the only valid entrance exam for MBBS in India. Target 650+/720 for AIIMS." });
    if (country === "USA") base.push({ subject: "Pre-Med Track (Biology, Chemistry, Math)", importance: "Required", note: "USA requires a bachelor's degree first. MCAT is needed for medical school after graduation." });
    return base;
  }

  if (f.includes("business") || f.includes("economics")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Mathematics / Statistics", importance: "Required", note: "Quantitative skills are core for Business and Economics. Strong Maths improves admission chances." },
      { subject: "Economics", importance: "Strongly Recommended", note: "If available as a school subject, Economics background is highly valued." },
      { subject: "English", importance: "Required", note: "Business programs are communication-heavy. Strong English is essential everywhere." },
    ];
    if (country === "UK") base.push({ subject: "TMUA (Cambridge Economics)", importance: "Required", note: "TMUA is mandatory for Cambridge Economics. LSE Economics benefits from 6.5+ TMUA." });
    if (country === "India") base.push({ subject: "CUET / IPMAT", importance: "Required", note: "CUET is needed for DU colleges (SRCC). IPMAT is the gateway to IIM's 5-year integrated management program." });
    if (country === "USA") base.push({ subject: "SAT Math 700+", importance: "Strongly Recommended", note: "Business schools like Wharton and NYU Stern look for strong quantitative SAT scores." });
    return base;
  }

  if (f.includes("law") || f.includes("political")) {
    const base: FieldSubjectInfo[] = [
      { subject: "English Language & Literature", importance: "Required", note: "Law is about language precision. Strong reading, writing, and comprehension are critical." },
      { subject: "History / Social Sciences", importance: "Strongly Recommended", note: "Understanding of society, governance, and historical context is highly valued for law." },
      { subject: "General Knowledge / Current Affairs", importance: "Required", note: "CLAT (India) tests GK extensively. All law programs expect awareness of current events." },
    ];
    if (country === "UK") base.push({ subject: "LNAT (Oxford, UCL, Durham)", importance: "Required", note: "LNAT is required for UK Law at Oxford, UCL, Durham, Glasgow, and others." });
    if (country === "India") base.push({ subject: "CLAT / AILET", importance: "Required", note: "CLAT is the main exam for NLUs. AILET is for NLU Delhi specifically. CLAT 2026: Dec 7, 2025." });
    if (country === "USA") base.push({ subject: "SAT + Political Science Coursework", importance: "Strongly Recommended", note: "USA requires an undergraduate degree first. Political Science, History, or Philosophy are strong pre-law majors." });
    return base;
  }

  if (f.includes("design") || f.includes("architecture")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Art / Drawing / Visual Skills", importance: "Required", note: "Portfolio is the most critical element for Design programs worldwide. Start building yours early." },
      { subject: "Mathematics", importance: "Required", note: "Architecture specifically requires Maths in Class 12. Design programs often accept any stream." },
      { subject: "Creative Projects (UX, Product, Graphics)", importance: "Strongly Recommended", note: "Real projects show skill better than grades. Build a portfolio website." },
    ];
    if (country === "India") base.push(
      { subject: "NATA (Architecture)", importance: "Required", note: "NATA is mandatory for B.Arch in India. Tests drawing, creativity, aptitude, and maths." },
      { subject: "UCEED (IIT Design)", importance: "Strongly Recommended", note: "UCEED is for IIT Bombay, Guwahati, Hyderabad, and IITDM Jabalpur B.Des programs. 2026: Jan 18." },
      { subject: "NID DAT / NIFT", importance: "Strongly Recommended", note: "NID DAT for National Institute of Design. NIFT Exam for Fashion Design. Both are creative aptitude tests." }
    );
    if (country === "USA" || country === "UK") base.push({ subject: "Portfolio (15–20 works)", importance: "Required", note: "Portfolio submission is mandatory. Include 15–20 diverse creative works showing ideation, process, and execution." });
    return base;
  }

  if (f.includes("life sciences") || f.includes("biotech")) {
    const base: FieldSubjectInfo[] = [
      { subject: "Biology / Biotechnology", importance: "Required", note: "Core subject — PCB stream is the primary pathway for Life Sciences and Biotech." },
      { subject: "Chemistry", importance: "Required", note: "Organic chemistry is heavily tested in entrance exams and forms the basis of biochemistry." },
      { subject: "Mathematics", importance: "Helpful", note: "Useful for Bioinformatics and Computational Biology. Some programs require Maths." },
    ];
    if (country === "India") base.push(
      { subject: "CUET / IISER IAT", importance: "Required", note: "CUET for B.Sc Biotechnology at DU/BHU. IISER IAT (Jun 7, 2026) for research-focused BS-MS programs." },
      { subject: "NEET-UG (allied programs)", importance: "Helpful", note: "NEET score is useful for Biomedical and allied health science programs." }
    );
    if (country === "USA") base.push({ subject: "SAT + AP Biology/Chemistry", importance: "Strongly Recommended", note: "AP Biology and AP Chemistry scores strengthen applications to top Biotech/Life Sciences programs." });
    return base;
  }

  if (f.includes("liberal arts") || f.includes("humanities")) {
    const base: FieldSubjectInfo[] = [
      { subject: "English Language", importance: "Required", note: "All liberal arts programs are writing and reading intensive. Strong English is non-negotiable." },
      { subject: "Any Stream (Science/Commerce/Arts)", importance: "Required", note: "Most liberal arts programs accept students from any stream. Your stream doesn't restrict you." },
      { subject: "Writing / Essay Skills", importance: "Required", note: "Application essays and personal statements are the most important part of Liberal Arts applications." },
    ];
    if (country === "India") base.push({ subject: "CUET / Ashoka Aptitude Test (AAT)", importance: "Required", note: "CUET for Delhi University. Ashoka AAT tests critical thinking, reasoning, and essay writing." });
    if (country === "USA") base.push({ subject: "SAT Reading 680+", importance: "Strongly Recommended", note: "Liberal Arts colleges like Williams, Amherst, Swarthmore look for strong SAT Reading scores alongside essays." });
    return base;
  }

  if (f.includes("media") || f.includes("communication")) {
    const base: FieldSubjectInfo[] = [
      { subject: "English Language & Communication", importance: "Required", note: "Media and Communications programs demand excellent writing, speaking, and comprehension skills." },
      { subject: "Any Stream (Arts/Commerce/Science)", importance: "Required", note: "Most media programs accept students from any stream. Creativity and communication skills matter more." },
      { subject: "Current Affairs & General Knowledge", importance: "Strongly Recommended", note: "Journalism and media entrance exams test extensively on current affairs." },
    ];
    if (country === "India") base.push(
      { subject: "CUET / IIMC Entrance", importance: "Required", note: "CUET for BJMC/journalism at central universities. IIMC entrance is India's top journalism school exam." },
      { subject: "XIC OET / SET / IPU CET", importance: "Strongly Recommended", note: "XIC OET for Xavier's. SET for Symbiosis. IPU CET for GGSIPU media programs." }
    );
    if (country === "USA" || country === "UK") base.push({ subject: "Portfolio / Writing Samples", importance: "Strongly Recommended", note: "Many top journalism and media programs ask for writing samples, articles, or creative portfolio." });
    return base;
  }

  // Default / Not decided
  return [
    { subject: "English Language", importance: "Required", note: "English proficiency (IELTS/TOEFL) is required for international applications." },
    { subject: "Core Academic Subjects", importance: "Required", note: "Maintain strong grades in your primary subjects — universities look at overall academic performance." },
    { subject: "Extracurriculars", importance: "Strongly Recommended", note: "Leadership, research, volunteering, and competitions strengthen every application." },
  ];
}

// ─── Exams by field + country ─────────────────────────────────────────────────
export function getExamsForFieldAndCountry(field: string, country: Country): FieldExamInfo[] {
  const f = field.toLowerCase();
  const exams: FieldExamInfo[] = [];

  // ── IELTS/TOEFL for all international countries ────────────────────────────
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

  // ── SAT (USA) ─────────────────────────────────────────────────────────────
  if (country === "USA") {
    exams.push({
      examName: "SAT",
      icon: "📐",
      status: f.includes("medicine") || f.includes("pre-med") ? "Recommended" : "Recommended",
      targetScore: f.includes("engineering") || f.includes("computer") ? "1480+" : f.includes("business") ? "1460+" : "1400+",
      note: "Test-optional at most schools but strongly recommended. 75%+ of admitted students submit scores. Boosts merit scholarship eligibility.",
      registrationWindow: "Opens ~5 weeks before each test date at sat.collegeboard.org",
      examDate: "2026: Aug 23, Oct 4, Nov 1, Dec 6",
    });
  }

  // ── Germany APS ───────────────────────────────────────────────────────────
  if (country === "Germany") {
    exams.push({
      examName: "APS Certificate",
      icon: "📜",
      status: "Mandatory",
      targetScore: "Pass (verification exam)",
      note: "MANDATORY for all Indian students. Apply at aps-india.de immediately. Takes 4–8 weeks. Without APS your visa WILL be refused.",
      registrationWindow: "Apply as early as possible at aps-india.de",
      examDate: "Rolling — apply 3+ months before your intended visa appointment",
    });
  }

  // ── Field-specific exams ──────────────────────────────────────────────────
  if (f.includes("medicine") || f.includes("pre-med")) {
    if (country === "UK" || country === "Australia") {
      exams.push({
        examName: "UCAT",
        icon: "🩺",
        status: "Mandatory",
        targetScore: "2700+ overall; SJT Band 1–2",
        note: "Mandatory for UK medical schools (Edinburgh, KCL, Manchester, Newcastle, Queen Mary). Also used for Australian medicine (UCAT ANZ). Register at ucat.ac.uk in May.",
        registrationWindow: "Registration opens May each year",
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
        note: "USA medical school requires a bachelor's degree first, then MCAT for medical school admission. Plan a 4-year pre-med undergraduate path.",
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
          note: "Mandatory for Cambridge CS and Economics. Also beneficial for LSE and Warwick. Register in August — slots fill within 48 hours.",
          registrationWindow: "Registration opens August at admissionstesting.org",
          examDate: "October–November",
        });
      }
    }
    if (country === "India") {
      exams.push(
        {
          examName: "JEE Main",
          icon: "📊",
          status: "Mandatory",
          targetScore: "99+ percentile (for JEE Advanced eligibility)",
          note: "Session 1: Jan 2026. Session 2: Apr 2026. Registration: Oct–Nov 2025 at jeemain.nta.ac.in. Needed for NITs, IIITs, and JEE Advanced eligibility.",
          registrationWindow: "Oct–Nov 2025 at jeemain.nta.ac.in",
          examDate: "Jan 21–30, 2026 (S1) | Apr 1–10, 2026 (S2)",
        },
        {
          examName: "JEE Advanced",
          icon: "📊",
          status: "Recommended",
          targetScore: "Top 500 rank (IIT Bombay CS); Top 5000 (any IIT)",
          note: "Required for IITs. Only top 2.5 lakh JEE Main qualifiers are eligible. Exam: May 17, 2026.",
          registrationWindow: "April 2026 (post JEE Main results)",
          examDate: "May 17, 2026",
        },
        {
          examName: "BITSAT",
          icon: "📊",
          status: "Recommended",
          targetScore: "320+ (CS at Pilani); 280+ (other branches)",
          note: "For BITS Pilani (Pilani/Goa/Hyderabad). Registration: Jan–Feb 2026.",
          registrationWindow: "Jan–Feb 2026 at bitsadmission.com",
          examDate: "April–May 2026",
        }
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
        note: "TMUA is mandatory for Cambridge Economics. LSE and Warwick Economics benefit from strong TMUA scores. Register in August.",
        registrationWindow: "Registration opens August at admissionstesting.org",
        examDate: "October–November",
      });
    }
    if (country === "India") {
      exams.push(
        {
          examName: "CUET UG",
          icon: "📊",
          status: "Mandatory",
          targetScore: "95–99 percentile (SRCC/LSR); 90%+ for most DU colleges",
          note: "Required for B.Com, BBA, BA Economics at central universities including Delhi University. Exam: May 11–31, 2026.",
          registrationWindow: "Jan–Mar 2026 at cuet.samarth.ac.in",
          examDate: "May 11–31, 2026",
        },
        {
          examName: "IPMAT",
          icon: "📊",
          status: "Recommended",
          targetScore: "Top 1–2% nationally",
          note: "For IIM Indore / Rohtak 5-year integrated management program. Direct IIM admission without CAT. Registration: Feb–Apr 2026.",
          registrationWindow: "Feb–Apr 2026",
          examDate: "May 2026",
        },
        {
          examName: "SET (Symbiosis)",
          icon: "📊",
          status: "Recommended",
          targetScore: "High percentile + WAT + PI",
          note: "For Symbiosis BBA, BMS, BBA programs. SET + Written Ability Test + Personal Interview.",
          registrationWindow: "Dec 2025–Apr 2026",
          examDate: "May 2026",
        }
      );
    }
    if (country === "USA") {
      // SAT already added above
    }
  }

  if (f.includes("law") || f.includes("political")) {
    if (country === "UK") {
      exams.push({
        examName: "LNAT",
        icon: "⚖️",
        status: "Mandatory",
        targetScore: "25+ out of 42 (competitive)",
        note: "Required for Law at Oxford, UCL, Durham, Glasgow, KCL, Nottingham, Bristol. Tests verbal reasoning and essay writing.",
        registrationWindow: "Registration opens September at lnat.ac.uk",
        examDate: "September–January (must complete before UCAS deadline)",
      });
    }
    if (country === "India") {
      exams.push(
        {
          examName: "CLAT",
          icon: "⚖️",
          status: "Mandatory",
          targetScore: "Top 1000 rank (top NLUs); Top 5000 (all NLUs)",
          note: "The main law entrance exam for all 24 National Law Universities. CLAT 2026: December 7, 2025. Registration: Aug–Oct 2025.",
          registrationWindow: "Aug–Oct 2025 at consortiumofnlus.ac.in",
          examDate: "December 7, 2025",
        },
        {
          examName: "AILET",
          icon: "⚖️",
          status: "Recommended",
          targetScore: "Top 200 rank",
          note: "Only for NLU Delhi (NLUD) — India's most prestigious law school. AILET 2026: December 14, 2025.",
          registrationWindow: "Aug–Nov 2025",
          examDate: "December 14, 2025",
        }
      );
    }
    if (country === "USA") {
      exams.push({
        examName: "LSAT (After Bachelor's)",
        icon: "⚖️",
        status: "Mandatory",
        targetScore: "170+ (top law schools)",
        note: "USA law school is graduate-level (after a 4-year bachelor's degree). You need a bachelor's + LSAT score to apply to American law schools.",
        registrationWindow: "After completing undergraduate degree",
        examDate: "Multiple dates throughout the year (LSAC.org)",
      });
    }
  }

  if (f.includes("design") || f.includes("architecture")) {
    if (country === "India") {
      exams.push(
        {
          examName: "NATA",
          icon: "🎨",
          status: "Mandatory",
          targetScore: "100+/200 (top architecture colleges)",
          note: "National Aptitude Test in Architecture — required for B.Arch. Tests drawing, creativity, aptitude, and maths.",
          registrationWindow: "March 2026 at nata.in",
          examDate: "April–July 2026 (multiple attempts)",
        },
        {
          examName: "UCEED",
          icon: "🎨",
          status: "Recommended",
          targetScore: "Top 100 rank (IIT Bombay B.Des)",
          note: "For Bachelor of Design at IIT Bombay, Guwahati, Hyderabad, IITDM Jabalpur. UCEED 2026: January 18, 2026.",
          registrationWindow: "October 2025 at uceed.iitb.ac.in",
          examDate: "January 18, 2026",
        },
        {
          examName: "NID DAT",
          icon: "🎨",
          status: "Recommended",
          targetScore: "Pass Prelims → Mains shortlist",
          note: "For National Institute of Design — Product, Graphic, Animation, UX/UI design programs. Prelims: January 2026.",
          registrationWindow: "Sep–Nov 2025 at admissions.nid.edu",
          examDate: "January 2026 (Prelims) | April 2026 (Mains)",
        },
        {
          examName: "NIFT Entrance Exam",
          icon: "👗",
          status: "Recommended",
          targetScore: "Good percentile in CAT + SAT + GD + PI",
          note: "For Fashion Design, Fashion Technology, Communication Design at NIFT institutes.",
          registrationWindow: "Nov–Jan at nift.ac.in",
          examDate: "February 2026",
        }
      );
    }
    if (country === "USA" || country === "UK") {
      exams.push({
        examName: "Portfolio Submission",
        icon: "🎨",
        status: "Mandatory",
        targetScore: "15–20 diverse creative works",
        note: "Portfolio is the primary selection criterion. Include drawings, digital work, 3D models, concept sketches, and process documentation.",
        registrationWindow: "Submit with application (August–January for USA; September–January for UK)",
        examDate: "Submitted with university application",
      });
    }
  }

  if (f.includes("life sciences") || f.includes("biotech")) {
    if (country === "India") {
      exams.push(
        {
          examName: "CUET UG",
          icon: "🔬",
          status: "Mandatory",
          targetScore: "90+ percentile for top central universities",
          note: "Required for B.Sc Biotechnology, Life Sciences, Microbiology at Delhi University, BHU, JNU.",
          registrationWindow: "Jan–Mar 2026 at cuet.samarth.ac.in",
          examDate: "May 11–31, 2026",
        },
        {
          examName: "IISER IAT",
          icon: "🔬",
          status: "Recommended",
          targetScore: "High rank — competitive",
          note: "For BS-MS programs at IISERs (research-intensive science institutes). Registration opened March 5, 2026. Exam: June 7, 2026.",
          registrationWindow: "March–April 2026 at iiseradmission.in",
          examDate: "June 7, 2026",
        },
        {
          examName: "GAT-B",
          icon: "🔬",
          status: "Recommended",
          targetScore: "Top percentile",
          note: "For M.Sc Biotechnology at DBT-supported institutes. For PG entry, not UG. Registration: March 19 – April 9, 2026.",
          registrationWindow: "March 19 – April 9, 2026",
          examDate: "May 17, 2026",
        }
      );
    }
    if (country === "UK") {
      exams.push({
        examName: "ESAT (Natural Sciences)",
        icon: "🔬",
        status: "Mandatory",
        targetScore: "Top 25 percentile",
        note: "ESAT is mandatory for Cambridge Natural Sciences. Choose Biology + Chemistry modules.",
        registrationWindow: "Registration opens August at admissionstesting.org",
        examDate: "October–November",
      });
    }
  }

  if (f.includes("media") || f.includes("communication")) {
    if (country === "India") {
      exams.push(
        {
          examName: "CUET UG",
          icon: "📺",
          status: "Recommended",
          targetScore: "90+ percentile",
          note: "For BA Journalism, Mass Communication at Delhi University and other central universities.",
          registrationWindow: "Jan–Feb 2026 at cuet.samarth.ac.in",
          examDate: "May 11–31, 2026",
        },
        {
          examName: "IIMC Entrance Exam",
          icon: "📺",
          status: "Recommended",
          targetScore: "Top rank",
          note: "Indian Institute of Mass Communication — India's top journalism school. Entrance exam for all programs.",
          registrationWindow: "Check iimc.nic.in for dates",
          examDate: "Typically April–May",
        }
      );
    }
  }

  if (f.includes("liberal arts") || f.includes("humanities")) {
    if (country === "India") {
      exams.push(
        {
          examName: "CUET UG",
          icon: "📚",
          status: "Mandatory",
          targetScore: "95–99 percentile for top DU/JNU colleges",
          note: "Required for BA Political Science, Psychology, Sociology, Economics at central universities. Exam: May 11–31, 2026.",
          registrationWindow: "Jan–Feb 2026 at cuet.samarth.ac.in",
          examDate: "May 11–31, 2026",
        },
        {
          examName: "Ashoka Aptitude Test (AAT)",
          icon: "📚",
          status: "Recommended",
          targetScore: "Strong performance in critical thinking + essay",
          note: "For Ashoka University Liberal Arts. Tests analytical reasoning, essay writing. Multiple rounds: Dec 2025 – Jun 2026.",
          registrationWindow: "Multiple rounds at ashoka.edu.in",
          examDate: "December 2025 – June 2026 (multiple rounds)",
        }
      );
    }
  }

  return exams;
}

// ─── Timeline by field + country ─────────────────────────────────────────────
export function getFieldCountryTimeline(field: string, country: Country, grade: number): FieldTimelineEvent[] {
  const f = field.toLowerCase();
  const events: FieldTimelineEvent[] = [];

  // ── India-specific timelines ───────────────────────────────────────────────
  if (country === "India") {
    if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
      events.push(
        { month: "Oct–Nov 2025", year: 2025, title: "JEE Main Registration Opens", description: "Register for JEE Main 2026 at jeemain.nta.ac.in. Session 1: January 2026. Don't miss the registration window.", type: "exam", urgent: true },
        { month: "Jan 21–30, 2026", year: 2026, title: "JEE Main Session 1", description: "First attempt. Aim for 99+ percentile to secure JEE Advanced eligibility. Focus on speed and accuracy.", type: "exam", urgent: true },
        { month: "Feb–Mar 2026", year: 2026, title: "BITSAT & VITEEE Registration", description: "BITSAT registration: Jan–Feb 2026. VITEEE registration: Feb–Mar 2026. Apply for BITS Pilani and VIT simultaneously.", type: "open", urgent: false },
        { month: "Apr 1–10, 2026", year: 2026, title: "JEE Main Session 2", description: "Second attempt. Use your Session 1 experience to improve score. Best of two sessions counts.", type: "exam", urgent: true },
        { month: "Apr–May 2026", year: 2026, title: "BITSAT, VITEEE, SRMJEE Exams", description: "BITSAT: Apr–May. VITEEE: Apr 28 – May 3. SRMJEE: Apr–May. Write all backup exams.", type: "exam", urgent: true },
        { month: "May 17, 2026", year: 2026, title: "JEE Advanced (IIT Gateway)", description: "Top 2.5 lakh JEE Main qualifiers eligible. Top 500 rank → IIT Bombay CS. Prepare intensively.", type: "exam", urgent: true },
        { month: "Jun–Jul 2026", year: 2026, title: "JoSAA Counselling — Seat Allotment", description: "JEE Advanced results → JoSAA counselling at josaa.nic.in. Fill choices carefully. Multiple allotment rounds.", type: "result", urgent: true },
        { month: "Jul–Aug 2026", year: 2026, title: "College Reporting & Academic Year Begins", description: "Report to allotted college. Most IITs/NITs begin in late July or August 2026.", type: "travel", urgent: false }
      );
    } else if (f.includes("medicine") || f.includes("pre-med")) {
      events.push(
        { month: "Feb 8, 2026", year: 2026, title: "NEET-UG Registration Opens", description: "Register at neet.nta.ac.in. Last date: March 8–11, 2026. Fill all details carefully — name must match Class 10 certificate.", type: "open", urgent: true },
        { month: "Mar 2026", year: 2026, title: "NEET Registration Closes + Correction Window", description: "Last date to apply: March 8–11, 2026. Correction window opens for form editing. Admit card expected April 2026.", type: "deadline", urgent: true },
        { month: "May 3, 2026", year: 2026, title: "NEET-UG 2026 Exam", description: "3.5 hours, 180 questions, 720 marks. Physics (45Q) + Chemistry (45Q) + Biology (90Q). Aim 650+ for AIIMS.", type: "exam", urgent: true },
        { month: "Jun 2026", year: 2026, title: "NEET Results", description: "Results declared June 2026. Check scorecard at neet.nta.ac.in. Cut-off for general category typically 137+.", type: "result", urgent: false },
        { month: "Jul 2026", year: 2026, title: "MCC Counselling Starts", description: "Medical Counselling Committee (MCC) counselling at mcc.nic.in for All India Quota seats (15%). Register and fill choices.", type: "open", urgent: true },
        { month: "Aug–Sep 2026", year: 2026, title: "College Allotment & Admission", description: "State counselling runs parallel for 85% state quota seats. Report to allotted medical college.", type: "result", urgent: false }
      );
    } else if (f.includes("business") || f.includes("economics")) {
      events.push(
        { month: "Jan–Mar 2026", year: 2026, title: "CUET UG Registration", description: "Register at cuet.samarth.ac.in. Apply for Commerce/Economics subjects. Needed for DU (SRCC, LSR), BHU, JNU.", type: "open", urgent: true },
        { month: "Feb–Apr 2026", year: 2026, title: "IPMAT Registration (IIM Programs)", description: "IPMAT for IIM Indore & Rohtak 5-year integrated management program. Registration: Feb–Apr 2026.", type: "open", urgent: false },
        { month: "Apr 2026", year: 2026, title: "JIPMAT, SET, NPAT Exams", description: "JIPMAT for IIM Jammu/Bodh Gaya: Apr 2026. SET (Symbiosis): May 2026. NPAT (NMIMS): Mar–May 2026.", type: "exam", urgent: true },
        { month: "May 2026", year: 2026, title: "CUET UG & IPMAT Exams", description: "CUET UG: May 11–31, 2026. IPMAT: May 2026. Both happen in the same window — prepare simultaneously.", type: "exam", urgent: true },
        { month: "Jun–Jul 2026", year: 2026, title: "CUET Results & DU Counselling", description: "CUET results: June. DU CSAS counselling starts July 2026. Fill college and program preferences carefully.", type: "result", urgent: false },
        { month: "Jul–Aug 2026", year: 2026, title: "Seat Allotment & College Begins", description: "Final seat allotments. Report to college by deadline. Academic year begins August.", type: "travel", urgent: false }
      );
    } else if (f.includes("law") || f.includes("political")) {
      events.push(
        { month: "Aug–Oct 2025", year: 2025, title: "CLAT 2026 Registration", description: "Register at consortiumofnlus.ac.in. Last date: October 2025. CLAT tests English, GK, Legal Reasoning, Logical Reasoning, Maths.", type: "open", urgent: true },
        { month: "Aug–Nov 2025", year: 2025, title: "AILET 2026 Registration", description: "Only for NLU Delhi (NLUD). Register at nationallawuniversitydelhi.in. AILET is separate from CLAT.", type: "open", urgent: true },
        { month: "Dec 7, 2025", year: 2025, title: "CLAT 2026 Exam", description: "2-hour exam. 120 questions. Tests English Comprehension, GK/Current Affairs, Legal Aptitude, Logical Reasoning, Quantitative Techniques.", type: "exam", urgent: true },
        { month: "Dec 14, 2025", year: 2025, title: "AILET 2026 Exam (NLU Delhi)", description: "Separate from CLAT. Only for NLU Delhi. One of India's most competitive law school exams.", type: "exam", urgent: true },
        { month: "Jan–Mar 2026", year: 2026, title: "CUET Registration for Political Science/Humanities", description: "CUET UG registration for BA Political Science, BA LLB (some programs). For central universities.", type: "open", urgent: false },
        { month: "Mar–Apr 2026", year: 2026, title: "CLAT Results & Counselling", description: "CLAT 2026 results expected February 2026. Consortium counselling begins March–April 2026.", type: "result", urgent: false },
        { month: "May–Jun 2026", year: 2026, title: "Seat Allotment & Admission", description: "Final NLU seat allotments. Law program begins August 2026.", type: "travel", urgent: false }
      );
    } else if (f.includes("design") || f.includes("architecture")) {
      events.push(
        { month: "Oct 2025", year: 2025, title: "UCEED 2026 Registration Opens", description: "Register at uceed.iitb.ac.in for B.Des at IIT Bombay, Guwahati, Hyderabad. Closes December 2025.", type: "open", urgent: true },
        { month: "Sep–Nov 2025", year: 2025, title: "NID DAT Prelims Registration", description: "Register at admissions.nid.edu for National Institute of Design. NID DAT Prelims: January 2026.", type: "open", urgent: true },
        { month: "Nov–Jan 2026", year: 2025, title: "NIFT 2026 Registration", description: "Register at nift.ac.in for Fashion Design, Fashion Technology. Exam: February 2026.", type: "open", urgent: false },
        { month: "Jan 18, 2026", year: 2026, title: "UCEED 2026 Exam", description: "3-hour computer-based test. Tests observation, visualization, design thinking, environmental awareness.", type: "exam", urgent: true },
        { month: "Jan 2026", year: 2026, title: "NID DAT Prelims Exam", description: "Written + studio test. Shortlisted candidates appear for Mains in April 2026.", type: "exam", urgent: true },
        { month: "Feb 2026", year: 2026, title: "NIFT Entrance Exam", description: "CAT (Creative Ability Test) + GAT (General Ability Test) for Design programs. Studio test for some programs.", type: "exam", urgent: false },
        { month: "Mar 2026", year: 2026, title: "NATA Registration Opens", description: "Register at nata.in for B.Arch. Multiple sessions: April–July 2026. Required for all architecture colleges.", type: "open", urgent: false },
        { month: "Oct–Nov 2025", year: 2025, title: "JEE Main Paper 2 (B.Arch) Registration", description: "JEE Main Paper 2 is for B.Arch/B.Planning at NITs and SPAs. Register with JEE Main at jeemain.nta.ac.in.", type: "open", urgent: true },
        { month: "Apr–Jul 2026", year: 2026, title: "NATA Exam Sessions", description: "NATA has multiple sessions. Best score counts. Portfolio preparation is equally important.", type: "exam", urgent: false },
        { month: "May–Jul 2026", year: 2026, title: "Results, Counselling & Admissions", description: "UCEED/NID/NIFT/NATA results and counselling. Most design program years begin July–August.", type: "result", urgent: false }
      );
    } else if (f.includes("life sciences") || f.includes("biotech")) {
      events.push(
        { month: "Jan–Mar 2026", year: 2026, title: "CUET UG Registration", description: "Register for B.Sc Biotechnology, Life Sciences, Microbiology at central universities.", type: "open", urgent: true },
        { month: "Mar 2026", year: 2026, title: "IISER IAT Registration", description: "IISER IAT registration opened March 5, 2026. For BS-MS programs at IISERs. Exam: June 7, 2026.", type: "open", urgent: true },
        { month: "Mar 19–Apr 9, 2026", year: 2026, title: "GAT-B Registration", description: "GAT-B for M.Sc Biotechnology (for PG entry). Exam: May 17, 2026. DBT-supported institutes.", type: "open", urgent: false },
        { month: "May 3, 2026", year: 2026, title: "NEET-UG (for Biomedical programs)", description: "NEET score is required for some Biomedical Science programs and allied health courses.", type: "exam", urgent: true },
        { month: "May 11–31, 2026", year: 2026, title: "CUET UG Exam", description: "CUET for B.Sc admissions at central universities. Prepare Biology, Chemistry for Life Sciences.", type: "exam", urgent: true },
        { month: "Jun 7, 2026", year: 2026, title: "IISER IAT Exam", description: "Tests Physics, Chemistry, Biology, Mathematics. For research-focused BS-MS programs at IISERs.", type: "exam", urgent: true },
        { month: "Jun–Aug 2026", year: 2026, title: "Results, Counselling & Admissions", description: "CUET results June. IISER results June. Admissions and counselling July–August 2026.", type: "result", urgent: false }
      );
    } else {
      // Generic India timeline
      events.push(
        { month: "Jan–Mar 2026", year: 2026, title: "CUET UG Registration", description: "CUET is the common entrance test for central universities. Required for most programs at DU, JNU, BHU.", type: "open", urgent: true },
        { month: "May 11–31, 2026", year: 2026, title: "CUET UG Exam", description: "Computer-based test for admissions to 200+ central and state universities.", type: "exam", urgent: true },
        { month: "Jun–Jul 2026", year: 2026, title: "Results & Counselling", description: "CUET results expected June. University-specific counselling begins July 2026.", type: "result", urgent: false },
        { month: "Jul–Aug 2026", year: 2026, title: "College Begins", description: "Academic year begins for most Indian colleges and universities.", type: "travel", urgent: false }
      );
    }
    return events;
  }

  // ── International countries ────────────────────────────────────────────────
  // IELTS Prep (all non-India countries)
  events.push(
    { month: "Jan–May 2026", year: 2026, title: "Begin IELTS / TOEFL Preparation", description: `Start English proficiency test prep. Target ${country === "UK" ? "IELTS for UKVI Academic 7.0+" : country === "Australia" ? "IELTS 7.0+ (Group of Eight)" : country === "USA" ? "IELTS 7.0+ or TOEFL 100+" : "IELTS 6.5+"}. Allow 3 months of focused preparation.`, type: "prep", urgent: true },
    { month: "Jun–Jul 2026", year: 2026, title: "Sit IELTS / TOEFL — First Attempt", description: "Computer-delivered IELTS gives results in 3–5 days. If below target, retake September–October 2026.", type: "exam", urgent: true }
  );

  // Germany APS
  if (country === "Germany") {
    events.push(
      { month: "Jan–Mar 2026", year: 2026, title: "Apply for APS Certificate — DO THIS FIRST", description: "Apply at aps-india.de IMMEDIATELY. Takes 4–8 weeks. Without APS your German visa WILL be refused. This is the #1 missed step.", type: "exam", urgent: true },
      { month: "Mar–Jun 2026", year: 2026, title: "Apply to German Universities via uni-assist", description: `Apply through uni-assist.de for Winter Semester 2026 (Oct start). Deadline: May 31, 2026 for TU Munich, LMU, Heidelberg. ${f.includes("engineering") ? "TU Munich, RWTH Aachen, KIT are top Engineering choices." : f.includes("business") ? "Mannheim, LMU Munich Economics are top Business choices." : ""}`, type: "open", urgent: true },
      { month: "May–Jun 2026", year: 2026, title: "Receive Admission + Open Sperrkonto", description: "On receiving admission, open Sperrkonto at Fintiba/Expatrio with €11,208. Book consulate appointment SAME DAY — slots are scarce.", type: "open", urgent: true },
      { month: "Jun–Jul 2026", year: 2026, title: "German Student Visa Interview", description: "Bring: APS certificate, unconditional admission letter, Sperrkonto proof, IELTS/German certificate, transcripts (with translations). Visa takes 6–12 weeks.", type: "visa", urgent: true },
      { month: "Oct 2026", year: 2026, title: "Depart for Germany — Winter Semester Begins", description: "Most German universities begin Winter Semester in October/November 2026.", type: "travel", urgent: false }
    );
    return events;
  }

  // UK-specific
  if (country === "UK") {
    if (f.includes("medicine") || f.includes("pre-med")) {
      events.push(
        { month: "Apr–May 2026", year: 2026, title: "Begin UCAT Preparation", description: "UCAT mandatory for UK medicine. Register in May at ucat.ac.uk. Target 2700+; Edinburgh 2900+; SJT Band 1.", type: "prep", urgent: true },
        { month: "May 2026", year: 2026, title: "Register for UCAT", description: "Registration opens May 2026 at ucat.ac.uk. Exam window: July–September 2026. Must complete before October 15 UCAS Medicine deadline.", type: "open", urgent: true },
        { month: "Jul–Sep 2026", year: 2026, title: "Sit UCAT Exam", description: "Results available same day. 2700+ competitive. Edinburgh 2900+; KCL 2800+; Manchester 2700+. SJT Band 1–2 critical.", type: "exam", urgent: true }
      );
    }
    if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
      events.push(
        { month: "Apr–Jun 2026", year: 2026, title: "Begin ESAT Preparation", description: "ESAT mandatory for Cambridge Engineering/NatSci and Imperial Engineering. Use past ENGAA/NSAA papers. 4 months prep needed.", type: "prep", urgent: false },
        { month: "Aug 2026", year: 2026, title: "Register for ESAT — Register Immediately When Opens", description: "Registration opens August at admissionstesting.org. India slots fill within 48 hours. Fee: ~£75.", type: "open", urgent: true },
        { month: "Oct–Nov 2026", year: 2026, title: "Sit ESAT Exam", description: "3 parts × 40 min. Part 1: Maths (mandatory). Choose 2: Physics, Chemistry, Biology, Further Maths. No calculator.", type: "exam", urgent: true }
      );
    }
    if (f.includes("business") || f.includes("economics") || f.includes("computer") || f.includes("ai")) {
      events.push(
        { month: "Apr–Jun 2026", year: 2026, title: "Begin TMUA Preparation", description: "TMUA mandatory for Cambridge Maths, CS, Economics. Also helps for LSE Economics (6.5+) and Warwick Maths/Economics (6.0+).", type: "prep", urgent: false },
        { month: "Aug 2026", year: 2026, title: "Register for TMUA — Register Immediately When Opens", description: "Registration opens August at admissionstesting.org. India slots fill within 48 hours. Fee: ~£75.", type: "open", urgent: true },
        { month: "Oct–Nov 2026", year: 2026, title: "Sit TMUA Exam", description: "2 papers × 75 min. Paper 1: Maths Knowledge. Paper 2: Mathematical Reasoning. Scaled score 1.0–9.0.", type: "exam", urgent: true }
      );
    }
    if (f.includes("law") || f.includes("political")) {
      events.push(
        { month: "Sep 2026", year: 2026, title: "Register for LNAT", description: "LNAT required for Law at Oxford, UCL, Durham, Glasgow, KCL, Nottingham, Bristol. Register at lnat.ac.uk.", type: "open", urgent: true },
        { month: "Sep–Jan 2027", year: 2026, title: "Sit LNAT", description: "LNAT: 42 MCQ comprehension questions + 1 essay. Target 25+ for competitive applications.", type: "exam", urgent: true }
      );
    }

    const ucasDeadline = (f.includes("medicine") || f.includes("pre-med")) ? "Oct 15, 2026 (Medicine UCAS deadline — NO EXTENSIONS)" : "Jan 13, 2027 (UCAS final deadline)";
    events.push(
      { month: "Sep 2, 2026", year: 2026, title: "UCAS Opens — Begin Personal Statement", description: "UCAS opens September 2, 2026. Write 4,000-character Personal Statement. Focus 75% on subject passion, 25% activities.", type: "open", urgent: true },
      { month: f.includes("medicine") ? "Oct 15, 2026" : "Jan 13, 2027", year: 2026, title: `UCAS Deadline: ${ucasDeadline}`, description: `6:00 PM UK time — NO EXTENSIONS. ${f.includes("medicine") ? "ALL UK medical schools have this hard deadline." : "Non-Oxbridge/Medicine courses."}`, type: "deadline", urgent: true },
      { month: "Jan–May 2027", year: 2027, title: "UK University Decisions (Rolling)", description: "Non-Oxbridge universities respond January–May 2027. Oxford: January 12. Cambridge: January 2027.", type: "result", urgent: false },
      { month: "Jun–Jul 2027", year: 2027, title: "Apply for UK Student Visa (CAS + IELTS for UKVI)", description: "Apply at gov.uk/student-visa. Need: CAS number, IELTS for UKVI Academic, 28-day bank balance. Fee: ~£490 + IHS £776/yr.", type: "visa", urgent: true },
      { month: "Aug–Sep 2027", year: 2027, title: "Depart for UK", description: "UK courses begin mid-to-late September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  // USA
  if (country === "USA") {
    events.push(
      { month: "Jan–Apr 2026", year: 2026, title: "Begin SAT Preparation", description: `Target SAT score for ${field}: ${f.includes("engineering") || f.includes("computer") ? "1480+ (MIT/CMU/Georgia Tech)" : f.includes("business") ? "1460+ (Wharton/Stern/Ross)" : f.includes("medicine") ? "1450+ (strong pre-med profile)" : "1400+ for most programs"}. Register at sat.collegeboard.org.`, type: "prep", urgent: true },
      { month: "Aug 1, 2026", year: 2026, title: "Common App Opens — Create Profile", description: "Common App launches August 1 for Fall 2027 entry. Fill academics, activities (10 max), and honors. Request teacher recommendations immediately.", type: "open", urgent: true },
      { month: "Aug 23, 2026", year: 2026, title: "SAT First Attempt (Aug 23)", description: "First SAT attempt. Indian test centers fill within days. Bring original passport as ID.", type: "exam", urgent: true },
      { month: "Oct 4, 2026", year: 2026, title: "SAT Retake (Oct 4)", description: "Results arrive before Nov 1 Early Decision deadlines. Register at sat.collegeboard.org at least 5 weeks early.", type: "exam", urgent: false },
      { month: "Nov 1–15, 2026", year: 2026, title: "Early Decision / Action Deadlines", description: `Nov 1: ${f.includes("engineering") || f.includes("computer") ? "MIT EA, CMU EA, Georgia Tech EA" : f.includes("business") ? "Wharton (UPenn) ED, NYU Stern ED" : f.includes("medicine") ? "Johns Hopkins REA, Duke ED" : "MIT EA, Harvard SCEA, Yale EA, Columbia ED"}. Submit applications well ahead of deadline.`, type: "deadline", urgent: true },
      { month: "Dec 12–15, 2026", year: 2026, title: "ED/EA Results Released", description: "ED: Admitted (binding) / Deferred (continue RD) / Rejected. EA: Non-binding. Compare offers carefully.", type: "result", urgent: false },
      { month: "Jan 1, 2027", year: 2027, title: "Regular Decision Deadline — Most Schools", description: `Jan 1: MIT, Harvard, Stanford, ${f.includes("engineering") ? "Purdue, UIUC, Georgia Tech" : f.includes("business") ? "Wharton, NYU Stern, UT Austin McCombs" : f.includes("medicine") ? "Johns Hopkins, Emory, Vanderbilt, Case Western" : "Columbia, Chicago, Yale, Princeton, Caltech"}`, type: "deadline", urgent: true },
      { month: "Mar–Apr 2027", year: 2027, title: "Regular Decision Results", description: "Results released March 28 – April 1. Compare all financial aid packages before deciding.", type: "result", urgent: false },
      { month: "May 1, 2027", year: 2027, title: "National Candidate Reply Date — FINAL DECISION", description: "Accept offer and pay deposit by May 1. Decline all other US offers the same day.", type: "deadline", urgent: true },
      { month: "May–Jun 2027", year: 2027, title: "Receive I-20 + Apply for F-1 Visa", description: "Pay SEVIS fee ($350) same day as I-20. Book visa interview immediately — slots fill within minutes.", type: "visa", urgent: true },
      { month: "Aug 2027", year: 2027, title: "Depart for USA", description: "Most Fall semesters begin late August – early September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  // Canada
  if (country === "Canada") {
    events.push(
      { month: "Nov 1, 2026", year: 2026, title: "University of Toronto Deadline", description: "UoT deadline: Nov 1. For Lester B. Pearson Scholarship (C$200k full ride), your school must nominate you — speak to your principal NOW.", type: "deadline", urgent: true },
      { month: "Jan 15, 2027", year: 2027, title: "UBC Vancouver & McGill Deadline", description: "UBC: Jan 15. McGill: Jan 15. University of Waterloo varies by program.", type: "deadline", urgent: true },
      { month: "Mar–Apr 2027", year: 2027, title: "Canadian University Decisions", description: "Rolling decisions from Canadian universities. UBC International Major Entrance Scholarship (up to C$80k) awarded automatically.", type: "result", urgent: false },
      { month: "Apr–May 2027", year: 2027, title: "Apply for Canadian Study Permit", description: "Apply immediately on receiving acceptance. Processing: 8–12 weeks. Do NOT delay. Apply at canada.ca/study-permit.", type: "visa", urgent: true },
      { month: "Sep 2027", year: 2027, title: "Depart for Canada", description: "Canadian academic year begins September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  // Australia
  if (country === "Australia") {
    events.push(
      { month: "Aug–Oct 2026", year: 2026, title: "Applications Open — Feb 2027 Intake", description: `UoM: Oct 31. UNSW Sydney: Oct 31. Monash: Dec 15. ${f.includes("medicine") ? "Medicine: Apply before Oct 31 with UCAT ANZ score." : ""} University of Adelaide: Jan 31.`, type: "open", urgent: true },
      { month: "Oct 31, 2026", year: 2026, title: "UoM & UNSW Deadline", description: "University of Melbourne and UNSW Sydney deadline: October 31, 2026 for February 2027 intake.", type: "deadline", urgent: true },
      { month: "Dec 15, 2026", year: 2026, title: "Monash University Deadline", description: "Monash University deadline for February 2027 intake.", type: "deadline", urgent: false },
      { month: "Nov–Dec 2026", year: 2026, title: "Receive Offer, CoE & Apply for Visa", description: "After accepting offer, university issues CoE. Purchase OSHC (mandatory) BEFORE applying for Student Visa Subclass 500.", type: "visa", urgent: true },
      { month: "Jan–Feb 2027", year: 2027, title: "Depart for Australia — February Intake", description: "February 2027 intake begins. Arrive 1–2 weeks early for orientation.", type: "travel", urgent: false }
    );
    return events;
  }

  // Netherlands
  if (country === "Netherlands") {
    events.push(
      { month: "Jan 15, 2027", year: 2027, title: "Register at Studielink — Numerus Fixus Deadline", description: "Register at studielink.nl by January 15 for numerus fixus (capped enrollment) programs at TU Delft, UvA. Applies to September 2027 intake.", type: "open", urgent: true },
      { month: "Apr 1, 2027", year: 2027, title: "Main Dutch Application Deadline", description: "April 1, 2027 for most September 2027 programmes. TU Delft, UvA, Leiden, VU, Utrecht, Erasmus.", type: "deadline", urgent: true },
      { month: "Apr–May 2027", year: 2027, title: "Selection & Admission Decisions", description: "Dutch universities run selection processes. Decisions typically issued April–May 2027.", type: "result", urgent: false },
      { month: "May–Jun 2027", year: 2027, title: "Accept Offer — University Submits MVV to IND", description: "Pay deposit. University submits your MVV application to IND on your behalf.", type: "visa", urgent: true },
      { month: "Sep 2027", year: 2027, title: "Depart for Netherlands", description: "Dutch academic year begins September 2027.", type: "travel", urgent: false }
    );
    return events;
  }

  // Singapore
  if (country === "Singapore") {
    events.push(
      { month: "Dec 2026–Feb 2027", year: 2026, title: "NUS / NTU / SMU Applications Open", description: "NUS: December 2026 – February 23, 2027 for international qualifications. NTU: similar window. Apply as early as possible.", type: "open", urgent: true },
      { month: "Feb 23, 2027", year: 2027, title: "NUS Application Deadline", description: "NUS closes February 23, 2027 for international qualifications. NTU: similar. SMU: March 31, 2027.", type: "deadline", urgent: true },
      { month: "Mar–Jun 2027", year: 2027, title: "Singapore University Offers Released", description: "NUS and NTU send offers March–June 2027. MOE Tuition Grant available — reduces fees by 30–40% with 3-year Singapore work bond.", type: "result", urgent: false },
      { month: "Apr–Jun 2027", year: 2027, title: "University Nominates via ICA SOLAR", description: "University submits Student Pass application to ICA via SOLAR after you accept. IPA letter arrives 4–8 weeks.", type: "visa", urgent: true },
      { month: "Jul–Aug 2027", year: 2027, title: "Depart for Singapore", description: "Visit ICA Building within 2 weeks of arrival to collect Student Pass card.", type: "travel", urgent: false }
    );
    return events;
  }

  // Japan
  if (country === "Japan") {
    events.push(
      { month: "Apr–May 2026", year: 2026, title: "MEXT Scholarship Application (Embassy Route)", description: "Apply through Japanese Embassy in India in April–May. Includes written test + interview. Full funding: tuition + ¥117,000/month stipend.", type: "open", urgent: true },
      { month: "Jul–Nov 2026", year: 2026, title: "Japanese University Direct Applications", description: `University of Tokyo (PEAK English): Oct 31. Waseda English programs: Nov 15. Keio: Dec 1. Ritsumeikan: Dec 1. ${f.includes("engineering") ? "Tohoku Engineering: Nov 30." : ""}`, type: "open", urgent: false },
      { month: "Jan–Feb 2027", year: 2027, title: "Admission Decisions", description: "University of Tokyo: February 2027. Waseda: January. Receive Certificate of Admission for Student Visa.", type: "result", urgent: false },
      { month: "Feb–Mar 2027", year: 2027, title: "Apply for Japan Student Visa", description: "University applies for Certificate of Eligibility (COE) — takes 4–8 weeks. Then apply for Student Visa at Japanese consulate in India.", type: "visa", urgent: true },
      { month: "Apr 2027", year: 2027, title: "Depart for Japan", description: "Japanese academic year begins April 2027. Arrive a few days before orientation.", type: "travel", urgent: false }
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
      business: ["Wharton (UPenn)", "Stanford GSB (MBA)", "MIT Sloan", "Harvard Business (MBA)", "NYU Stern", "Michigan Ross", "Indiana Kelley"],
      law: ["Yale Law", "Harvard Law", "Stanford Law (all graduate)", "Columbia Law", "NYU Law"],
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
      media: ["Ryerson (TMU)", "Carleton University", "University of King's College (Journalism)"],
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
    notes.USA = "In the USA, you cannot do direct MBBS. You must complete a 4-year bachelor's degree (Pre-Med track: Biology, Chemistry, Physics, Maths), then apply to medical school with MCAT. Total path: ~8 years.";
    notes.UK = "UK offers direct medicine after 12th (5-year MBBS equivalent). UCAS Medicine deadline is OCTOBER 15 — much earlier than other programs. UCAT exam is mandatory. Very competitive.";
    notes.Canada = "Canada also requires a bachelor's degree first, then medical school. Similar to USA. MCAT required for medical school applications.";
    notes.Australia = "Australia offers direct medicine programs from school (5–6 years). UCAT ANZ is required. Very competitive at University of Melbourne, Monash, UNSW.";
    notes.Germany = "Germany offers medical programs (Medizin) but requires C1 German proficiency. Very few English-medium medical programs available. Consider UK or Australia instead.";
  } else if (f.includes("law") || f.includes("political")) {
    notes.USA = "In the USA, law is a graduate degree (JD — 3 years after a 4-year bachelor's). You cannot do direct law after 12th. Bachelor's in Political Science/History/Economics is the pathway, then LSAT for law school.";
    notes.UK = "UK allows direct LLB (law degree) after 12th. LNAT exam required for Oxford, UCL, Durham, Glasgow, KCL, Nottingham. UCAS deadline: January 13.";
    notes.Canada = "Canada follows a similar graduate-entry model for law (LLB/JD after a bachelor's). Undergraduate degrees in Political Science are the pathway.";
  } else if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
    notes.UK = "Cambridge Engineering requires ESAT (replaced ENGAA in 2024). Imperial requires ESAT too. Register in August — slots fill within 48 hours.";
    notes.USA = "US Engineering programs are highly competitive. SAT Math 750+ strengthens top school applications. Co-op programs at Northeastern, Purdue, and Georgia Tech offer paid work experience.";
    notes.Germany = "Germany is excellent for Engineering — TU Munich, RWTH Aachen, and KIT are world-class at near-zero tuition. Most programs available in German; English programs increasing.";
  } else if (f.includes("design") || f.includes("architecture")) {
    notes.USA = "Portfolio is the primary selection criterion. Start building a 15–20 piece portfolio early. Include process documentation, not just finished works. RISD, Parsons, and Pratt are top art/design schools.";
    notes.UK = "UK design schools heavily emphasise portfolio. Many schools offer portfolio review events before application. Royal College of Art (postgraduate) and Goldsmiths are world-leading.";
  }

  return (notes as Record<Country, string>)[country] ?? `For ${field} in ${country}, strong academics, IELTS/TOEFL, and relevant extracurriculars are the key admission factors. Check individual university requirements carefully.`;
}