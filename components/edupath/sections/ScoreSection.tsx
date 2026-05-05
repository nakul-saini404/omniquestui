"use client";

import { useState } from "react";
import type { Country, Grade } from "@/types/edupath";

// ─── ScoreSection ─────────────────────────────────────────────────────────────
export function ScoreSection({
  score,
  predictedFinal,
  satEst,
  countries,
}: {
  score: number;
  predictedFinal: number;
  satEst: number;
  countries: Country[];
}) {
  const needsSAT = countries.includes("USA");
  const satPercent = Math.round((satEst / 1600) * 100);

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-gold" />
        Score Profile
      </div>

      <ScoreBar label="Current Academics" value={score} display={`${score}%`} colorClass="ep-fill-blue" />
      <ScoreBar label="Predicted 12th %" value={predictedFinal} display={`${predictedFinal.toFixed(0)}%`} colorClass="ep-fill-gold" />

      {needsSAT && (
        <>
          <ScoreBar label="SAT Estimate" value={satPercent} display={`${satEst}/1600`} colorClass="ep-fill-purple" />
          <div className="ep-score-note">
            💡 Prep 6–12 months ahead. Target 1400+ for strong US applications.
          </div>
        </>
      )}

      {countries.includes("UK") && (
        <div className="ep-info-pill">
          🇬🇧 UK uses UCAS — no SAT needed. IELTS/TOEFL may be required.
        </div>
      )}

      {(countries.includes("Germany") || countries.includes("Netherlands")) && (
        <div className="ep-info-pill" style={{ marginTop: 8 }}>
          🇩🇪🇳🇱 EU universities: Low/no tuition. German B2 for German programmes. IELTS for English tracks.
        </div>
      )}
    </div>
  );
}

function ScoreBar({
  label,
  value,
  display,
  colorClass,
}: {
  label: string;
  value: number;
  display: string;
  colorClass: string;
}) {
  return (
    <div className="ep-score-block">
      <div className="ep-score-head">
        <span>{label}</span>
        <span className="ep-score-val">{display}</span>
      </div>
      <div className="ep-score-bar">
        <div
          className={`ep-score-fill ${colorClass}`}
          style={{ width: `${Math.min(100, value)}%` }}
        />
      </div>
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimelineEvent {
  dateLabel: string;
  title: string;
  description: string;
  type: "prep" | "exam" | "apply" | "decision" | "visa" | "travel" | "register";
  urgent: boolean;
}

// ─── Country flag map ─────────────────────────────────────────────────────────

const FLAGS: Record<Country, string> = {
  USA: "🇺🇸", UK: "🇬🇧", Canada: "🇨🇦", Australia: "🇦🇺",
  Germany: "🇩🇪", Netherlands: "🇳🇱", Singapore: "🇸🇬", Japan: "🇯🇵", India: "🇮🇳",
};

const TYPE_COLORS: Record<string, { bg: string; border: string; dot: string; label: string }> = {
  prep:     { bg: "rgba(59,130,246,.08)",   border: "rgba(59,130,246,.2)",   dot: "#60a5fa", label: "Preparation" },
  exam:     { bg: "rgba(239,68,68,.07)",    border: "rgba(239,68,68,.2)",    dot: "#f87171", label: "Exam" },
  apply:    { bg: "rgba(245,158,11,.07)",   border: "rgba(245,158,11,.2)",   dot: "#fbbf24", label: "Application" },
  decision: { bg: "rgba(16,185,129,.07)",   border: "rgba(16,185,129,.2)",   dot: "#34d399", label: "Decision" },
  visa:     { bg: "rgba(139,92,246,.08)",   border: "rgba(139,92,246,.2)",   dot: "#a78bfa", label: "Visa" },
  travel:   { bg: "rgba(20,184,166,.07)",   border: "rgba(20,184,166,.2)",   dot: "#2dd4bf", label: "Travel" },
  register: { bg: "rgba(251,146,60,.07)",   border: "rgba(251,146,60,.2)",   dot: "#fb923c", label: "Registration" },
};

// ─── Per-country timeline builders ────────────────────────────────────────────

function buildCountryTimeline(country: Country, career: string): TimelineEvent[] {
  const isMed    = career.includes("Medicine") || career.includes("Pre-Med");
  const isEng    = career.includes("Engineering") || career.includes("Mechanical");
  const isCS     = career.includes("Computer Science") || career.includes("AI") || career.includes("Data");
  const isBiz    = career.includes("Business") || career.includes("Economics");
  const isLaw    = career.includes("Law") || career.includes("Political");
  const isArts   = career.includes("Liberal Arts") || career.includes("Humanities") || career.includes("Media");
  const isBio    = career.includes("Life Sciences") || career.includes("Biotech");

  switch (country) {
    // ── USA ────────────────────────────────────────────────────────────────────
    case "USA": return [
      { dateLabel: "Jan–Apr 2026",  type: "prep",     urgent: true,  title: "Begin SAT Preparation",                         description: "Start SAT prep using Khan Academy + Bluebook app. Take a diagnostic test in week 1. Target 6+ months of prep for 1400+. PCM/CS → aim 750+ Math; PCB → Reading 700+; Business → 1400+ overall." },
      { dateLabel: "Jan–Jun 2026",  type: "prep",     urgent: true,  title: "Begin IELTS / TOEFL Preparation",               description: "US universities require IELTS 6.5–7.0+ or TOEFL 100+ iBT. Start prep alongside SAT. Computer-delivered IELTS gives results in 3–5 days." },
      { dateLabel: "Jun–Jul 2026",  type: "exam",     urgent: true,  title: "Sit IELTS / TOEFL — First Attempt",             description: `Required for US universities. Target: IELTS 7.0+ or TOEFL 100+${isMed ? " (Johns Hopkins/Duke require 100+)" : isCS || isEng ? " (MIT/CMU: 100+)" : isBiz ? " (Wharton/Stern: 100+)" : ""}. Retake in Sep–Oct if needed.` },
      { dateLabel: "Aug 23, 2026",  type: "exam",     urgent: true,  title: "SAT — First Attempt",                           description: `Target score: ${isMed || isCS || isEng ? "1500+ (Johns Hopkins/MIT/CMU range)" : isBiz ? "1480+ (Wharton/Stern/Ross range)" : isArts ? "1400+ (test-optional at most Liberal Arts schools)" : "1400+ overall"}. Results arrive ~2 weeks later. Register at sat.collegeboard.org — Indian centres fill fast.` },
      { dateLabel: "Aug 1, 2026",   type: "register", urgent: true,  title: "Common App Opens — Create Profile Immediately", description: "Common App launches August 1, 2026. Create account, fill academics, activities (up to 10), and honours. Request teacher recommendations NOW — give teachers 6+ weeks. Brainstorm your 650-word main essay." },
      { dateLabel: "Sep–Oct 2026",  type: "prep",     urgent: false, title: "Finalise University Shortlist & Essays",        description: `Finalise your 8–12 university list across reach/target/safety. Write supplemental essays for each school. ${isMed ? "Pre-med: research experience, clinical hours, shadowing — document all ECs carefully." : isCS || isEng ? "Engineering/CS: list research projects, coding competitions, hackathons." : isBiz ? "Business: leadership roles, entrepreneurship, finance clubs, case competitions." : ""}` },
      { dateLabel: "Oct 4, 2026",   type: "exam",     urgent: false, title: "SAT Retake (Oct 4 sitting)",                    description: "Oct 4 results arrive before Nov 1 Early Decision deadlines. If Aug score was 1350+, retake only to push to 1480+. If below 1300, this retake is important. Register at sat.collegeboard.org at least 5 weeks early." },
      { dateLabel: "Nov 1–15, 2026",type: "apply",    urgent: true,  title: "Early Decision / Early Action Deadlines",       description: `Nov 1: MIT EA, Harvard SCEA, Yale EA, Princeton EA, Columbia ED, UPenn ED${isMed ? " (Johns Hopkins REA Nov 1)" : isCS || isEng ? " (CMU EA Nov 1)" : isBiz ? " (Wharton ED Nov 1, Stern EA Nov 1)" : ""}. Nov 15: CMU, Georgia Tech, UVA, UNC. ED is binding — apply only if fully committed. Submit at least 3 days before deadline.` },
      { dateLabel: "Dec 1, 2026",   type: "exam",     urgent: false, title: "SAT Final Sitting (Dec 6)",                     description: "Last practical SAT sitting before Jan 2027 Regular Decision deadlines. Results arrive ~Dec 20. Some RD schools accept Dec scores; verify per school. Register now at sat.collegeboard.org." },
      { dateLabel: "Dec 12–15, 2026",type:"decision", urgent: false, title: "ED / EA Results Released",                     description: "ED result: Admitted (binding — withdraw all other apps), Deferred (continue RD), Rejected (apply RD elsewhere). EA result is non-binding. Compare financial aid letters carefully before accepting any ED offer." },
      { dateLabel: "Jan 1–15, 2027",type: "apply",    urgent: true,  title: "Regular Decision Deadlines — NO EXTENSIONS",   description: `Jan 1: MIT, Harvard, Yale, Princeton, Stanford, Caltech${isMed ? ", Emory, Johns Hopkins" : isCS || isEng ? ", CMU, Purdue" : isBiz ? ", Wharton, Stern" : ""}. Jan 15: Most remaining schools. No extensions. Ensure all test scores, transcripts, and recommendations are submitted. Check each school's portal.` },
      { dateLabel: "Mar–Apr 2027",  type: "decision", urgent: false, title: "RD Decisions & Financial Aid Packages",         description: "Most RD results arrive March 28–April 1. Compare all offer letters carefully — cost of attendance, scholarships, loans. Financial aid appeals are possible if another school offered more. Enrollment deadline is May 1 for all schools." },
      { dateLabel: "May 1, 2027",   type: "decision", urgent: true,  title: "National Candidate Reply Date — FINALISE",     description: "Accept your chosen offer and pay the enrollment deposit by May 1. Decline all other US offers on the same day to free up spots for waitlisted students. Contact university's International Student Office immediately." },
      { dateLabel: "May–Jun 2027",  type: "visa",     urgent: true,  title: "Receive Form I-20 & Apply for F-1 Visa",       description: "University issues I-20 after you pay enrollment deposit. Pay SEVIS fee ($350 at fmjfee.com) same day. Fill DS-160 within 1 week. Book F-1 visa interview immediately at ustraveldocs.com/in — slots fill within hours of opening." },
      { dateLabel: "Jun–Jul 2027",  type: "visa",     urgent: true,  title: "F-1 Visa Interview",                           description: "Interview at nearest US Consulate (Delhi, Mumbai, Chennai, Hyderabad, Kolkata). Bring: I-20, DS-160 confirmation, SEVIS receipt, passport, bank statements (2 years tuition + $10k/yr living), admission letter, transcripts. Dress formally. Answer only what is asked." },
      { dateLabel: "Aug 2027",      type: "travel",   urgent: false, title: "Depart for USA",                               description: "You may enter the US up to 30 days before your I-20 start date. Book flights 2–3 months ahead. Get multi-currency forex card. Arrange accommodation (dorms or off-campus). Most Fall semesters begin late August–early September." },
    ];

    // ── UK ─────────────────────────────────────────────────────────────────────
    case "UK": return [
      { dateLabel: "Jan–May 2026",  type: "prep",     urgent: true,  title: "Begin IELTS for UKVI Academic Preparation",    description: `UK Student Visa requires IELTS for UKVI Academic (NOT standard IELTS). Target: ${isMed ? "7.5+ overall, no band below 7.0 (Cambridge/Edinburgh Medicine)" : "7.0+ overall, no band below 6.5 (Russell Group standard)"}. Book at britishcouncil.in or ielts.idp.com.` },
      ...( (isMed || isBio) ? [
        { dateLabel: "Apr–May 2026",  type: "prep",     urgent: true,  title: "Begin UCAT Preparation",                       description: "UCAT is mandatory for most UK medical schools (Edinburgh, KCL, Manchester, Newcastle). Register at ucat.ac.uk when it opens in May 2026. Exam window: July–September 2026. Must complete BEFORE Oct 15 UCAS Medicine deadline. Target 2700+ overall; SJT Band 1." } as TimelineEvent,
        { dateLabel: "Jul–Sep 2026",  type: "exam",     urgent: true,  title: "UCAT Exam (Medicine applicants)",              description: "Sit UCAT between July–September 2026. Results available same day. Scores valid for UCAS cycle beginning October 2026. A 2900+ score significantly differentiates you. Edinburgh Medicine competitive range: 2900+; KCL: 2800+." } as TimelineEvent,
      ] : []),
      ...( (isCS || isEng || isEng || isBiz) ? [
        { dateLabel: "Apr–Jun 2026",  type: "prep",     urgent: false, title: `Begin ${isCS || isBiz ? "TMUA" : "ESAT"} Preparation`,  description: isCS || isBiz ? "TMUA is mandatory for Cambridge Maths, CS, Economics. Download past papers at admissionstesting.org. Paper 1: Mathematical Knowledge (ISC/CBSE level). Paper 2: Mathematical Reasoning (proof-based). LSE Economics benefits from 6.5+." : "ESAT replaced ENGAA/NSAA in 2024. Mandatory for Cambridge Engineering/Natural Sciences and Imperial Engineering. Part 1: Maths (mandatory). Choose 2 from Physics, Chemistry, Biology, Further Maths. Use past ENGAA papers for practice." } as TimelineEvent,
      ] : []),
      { dateLabel: "Jun–Jul 2026",  type: "exam",     urgent: true,  title: "IELTS for UKVI Academic — First Attempt",      description: "Sit IELTS for UKVI. Computer-delivered: results in 3–5 days. Paper-based: 13 days. If below target, retake in Sep–Oct 2026 — last chance before Jan 13 UCAS deadline." },
      { dateLabel: "Aug 2026",      type: "register", urgent: true,  title: `Register for ${(isCS || isBiz) ? "TMUA" : (isEng || isBio) ? "ESAT" : "Admissions Tests"} — Immediately`,  description: `Registration opens August 2026 at admissionstesting.org. ${(isCS || isBiz) ? "TMUA: £75. India centres: Delhi, Mumbai, Bangalore, Chennai, Hyderabad. Register immediately — slots are strictly limited." : isEng || isBio ? "ESAT: £75. Select modules: Physics+Chemistry (Engineering) or Biology+Chemistry (Natural Sciences/Vet). Register immediately." : "Check if your chosen courses require BMAT, LNAT, or other tests. Register as soon as registration opens."}` },
      { dateLabel: "Sep 2026",      type: "apply",    urgent: true,  title: "UCAS Account Open — Begin Personal Statement",  description: "UCAS opens for 2027 entry from September 2026. Write your 4,000-character Personal Statement (75% on subject passion, 25% activities). For Oxford/Cambridge: this must be exceptional — tutors read critically. For Medicine: reference clinical experience specifically." },
      { dateLabel: "Oct 15, 2026",  type: "apply",    urgent: true,  title: `UCAS HARD DEADLINE: Oxford, Cambridge${isMed || isBio ? " & ALL Medicine/Dentistry/Vet" : ""}`,  description: `6:00 PM UK time — no exceptions. ${isMed ? "ALL UK medical schools including Edinburgh, KCL, Manchester, Newcastle, Queen Mary BLSA." : "Cambridge and Oxford for all courses."}${(isCS || isBiz) ? " TMUA exam follows in Oct–Nov." : isEng || isBio ? " ESAT exam follows in Oct–Nov." : ""} Personal Statement, predicted grades, and teacher references must ALL be submitted by this time.` },
      ...( (isCS || isEng || isBiz || isBio) ? [
        { dateLabel: "Oct–Nov 2026",  type: "exam",     urgent: true,  title: `${(isCS || isBiz) ? "TMUA" : "ESAT"} Exam`,  description: `${(isCS || isBiz) ? "TMUA exams for Cambridge Maths/CS/Economics and LSE. 2×75 min papers. No calculator. Scores auto-sent to UCAS universities. Target: 6.5+ for Cambridge; 6.0+ for LSE/Warwick." : "ESAT exam for Cambridge Engineering/Sciences and Imperial. 3×40 min sections. No calculator, no formula sheet. Results released Nov–Dec, auto-sent to Cambridge and Imperial."}` } as TimelineEvent,
        { dateLabel: "Dec 2026",      type: "decision", urgent: false, title: "Cambridge / Oxford Interviews",               description: "Oxford interviews: online, early to mid-December. Cambridge interviews: December 1–18 (online or in-person depending on course and college). Prepare with subject-specific mock interviews. Results announced January 2027." } as TimelineEvent,
      ] : []),
      { dateLabel: "Jan 13, 2027",  type: "apply",    urgent: true,  title: "UCAS Final Deadline — ALL Non-Oxbridge Courses", description: "6:00 PM UK time. Applications for all UK undergraduate courses (except those with Oct 15 deadline) must arrive by now. UCL, Imperial, Edinburgh, Manchester, Sheffield, KCL, Exeter, Coventry — all have this deadline. No extensions." },
      { dateLabel: "Jan 2027",      type: "decision", urgent: false, title: "Oxford & Cambridge Offers Released",            description: "Oxford: decisions released January 12, 2027. Cambridge: decisions released January 2027. Offer conditions typically require specific A-level grades or CBSE/ISC equivalents (95%+ for most courses)." },
      { dateLabel: "Jan–May 2027",  type: "decision", urgent: false, title: "Other UK University Offer Decisions",          description: "Non-Oxbridge universities respond on a rolling basis January–May 2027. UCAS tracks your offers in real time. You must hold a maximum of 2 offers (Firm and Insurance choice) by the UCAS reply deadline (typically early June)." },
      { dateLabel: "May–Jun 2027",  type: "visa",     urgent: true,  title: "Meet Conditions & Receive CAS Number",        description: "After confirming grades meet offer conditions, your UK university issues a CAS (Confirmation of Acceptance for Studies) number. This is your key visa document. You cannot apply for the UK Student Visa without it." },
      { dateLabel: "Jun–Jul 2027",  type: "visa",     urgent: true,  title: "Apply for UK Student Visa",                   description: "Apply online at gov.uk/student-visa. Need: CAS number, IELTS for UKVI Academic score, bank statement (28 consecutive days showing tuition + £1,334/month living). Pay visa fee ~£490 + Immigration Health Surcharge (£776/yr). Book VFS Global biometrics. Decision in 2–3 weeks." },
      { dateLabel: "Aug–Sep 2027",  type: "travel",   urgent: false, title: "Depart for UK",                               description: "Most UK courses begin in mid-to-late September. Book flights 2–3 months ahead. Arrange university accommodation (halls) or private housing. Arrive at least 1 week before term starts for international student orientation." },
    ];

    // ── Canada ─────────────────────────────────────────────────────────────────
    case "Canada": return [
      { dateLabel: "Jan–Jun 2026",  type: "prep",     urgent: true,  title: "Begin IELTS / TOEFL Preparation",               description: `All Canadian universities require English proficiency. Target: IELTS 6.5+ (UoT/UBC competitive programs: 7.0+) or TOEFL 90–100+ iBT. ${isMed ? "Note: Canadian medical schools are almost entirely graduate-entry — you'll need a bachelor's degree first." : ""}` },
      { dateLabel: "Jun–Jul 2026",  type: "exam",     urgent: true,  title: "Sit IELTS / TOEFL — First Attempt",             description: "Take your English proficiency test by June–July. If score is below 6.5, retake in Sep–Oct 2026 — last chance before November application deadlines. UoT and UBC require 7.0+ for competitive programs." },
      { dateLabel: "Oct–Nov 2026",  type: "apply",    urgent: true,  title: "Canadian University Application Deadlines",     description: `University of Toronto: Nov 1. UBC: Jan 15. McGill: Jan 15. University of Waterloo: varies by program (check each). ${isMed ? "Note: Canadian undergrad programs are a prerequisite for medical school — apply to science programs. UoT Life Sciences or McMaster Health Sciences are strong pre-med pathways." : isCS || isEng ? "Waterloo CS/Engineering is globally ranked — apply early as it fills fast. UBC Engineering Nov deadline." : isBiz ? "UoT Rotman Commerce and UBC Sauder Business are top business schools. Apply early — both competitive." : ""}` },
      { dateLabel: "Nov 2026",      type: "prep",     urgent: false, title: "Prepare Supplementary Application (UoT)",      description: "University of Toronto requires a supplementary application with essays. Deadlines vary by program (some as early as Nov 1). UBC requires Personal Profile essays — these are effectively your scholarship application too. McGill and Waterloo have their own essay requirements." },
      { dateLabel: "Jan 15, 2027",  type: "apply",    urgent: true,  title: "UBC & McGill Final Deadlines",                 description: "UBC Vancouver: January 15. McGill: January 15. Ensure IELTS/TOEFL scores are sent directly to each university. For UBC, Personal Profile essays close with application. For Lester B. Pearson Scholarship (UoT, full ride), school nomination is needed — contact your principal now." },
      { dateLabel: "Mar–Apr 2027",  type: "decision", urgent: false, title: "Admission Decisions & Scholarship Offers",     description: "Canadian universities send decisions March–April 2027. UBC International Major Entrance Scholarship (up to C$80,000 over 4 years) awarded automatically to top applicants. UoT Lester B. Pearson Scholarship announced separately." },
      { dateLabel: "Apr–May 2027",  type: "visa",     urgent: true,  title: "Apply for Study Permit — DO NOT DELAY",        description: "Apply for Canadian Study Permit immediately on receiving acceptance — processing takes 8–12 weeks. Create GCKey account at canada.ca. Submit: acceptance letter, bank statements (tuition + CAD 10,000 living + airfare), IELTS/TOEFL, transcripts, Statement of Purpose. SDS stream (GIC + IELTS 6.0+) processes in ~20 working days." },
      { dateLabel: "May–Jun 2027",  type: "visa",     urgent: false, title: "Study Permit Biometrics & Processing",         description: "After IRCC sends Biometric Collection Letter, book at VFS Global within 30 days. Study Permit issued as a POE (Port of Entry) letter — actual permit stamped on arrival in Canada. Most permits arrive Jul–Aug 2027 for September intake." },
      { dateLabel: "Aug–Sep 2027",  type: "travel",   urgent: false, title: "Depart for Canada",                           description: "Canadian academic year begins early September. Book flights 2–3 months ahead. Arrange on-campus or off-campus housing. Toronto, Vancouver, Montreal, and Waterloo have large Indian student communities." },
    ];

    // ── Australia ──────────────────────────────────────────────────────────────
    case "Australia": return [
      { dateLabel: "Jan–Jun 2026",  type: "prep",     urgent: true,  title: "Begin IELTS Preparation",                      description: `Australian universities and the Student Visa (Subclass 500) require IELTS. Target: ${isMed || isBio ? "7.0+ overall, no band below 6.5 (Group of Eight for Medicine/Sciences)" : "6.5+ overall (Group of Eight: 7.0+)"}. Computer-delivered IELTS recommended for faster results (3–5 days).` },
      { dateLabel: "Jun–Jul 2026",  type: "exam",     urgent: true,  title: "Sit IELTS Academic — First Attempt",           description: "Take IELTS. If below target, retake Sep–Oct 2026. Must have valid IELTS before purchasing OSHC and applying for visa. Group of Eight (Melbourne, UNSW, Monash, Adelaide) require 7.0+ for competitive programs." },
      ...( (isMed || isBio) ? [
        { dateLabel: "Jun–Sep 2026",  type: "exam",     urgent: true,  title: "UCAT ANZ (Medicine applicants)",               description: "Australian medical schools (Melbourne, Monash) use UCAT ANZ — the same test as UK UCAT. Register at ucat.ac.uk. Exam window: July–September 2026. Required for University of Melbourne Medicine (graduate-entry) and Monash Medicine. Target 2700+." } as TimelineEvent,
      ] : []),
      { dateLabel: "Aug–Oct 2026",  type: "apply",    urgent: true,  title: "Australian University Applications Open",      description: `Most Australian universities have rolling admissions — apply as early as possible. February 2027 intake: apply by Oct–Nov 2026. July 2027 intake: apply by Mar–Apr 2027. ${isMed ? "University of Melbourne MBBS (graduate): apply through VTAC by September. Monash Medicine: VTAC September." : isEng || isCS ? "UoM Engineering, UNSW Engineering, Monash: apply directly by October." : isBiz ? "UoM Commerce, UNSW Business: apply by October for February intake." : ""}` },
      { dateLabel: "Oct–Nov 2026",  type: "apply",    urgent: true,  title: "February 2027 Intake — Application Deadlines", description: `University of Melbourne: October 31. UNSW Sydney: October 31. Monash University: December 15. University of Adelaide: January 31. Group of Eight universities are competitive — apply early. ${isMed ? "Medicine: graduate-entry only at Melbourne/Monash. Undergrad Medicine at Bond University and Notre Dame." : ""}` },
      { dateLabel: "Nov–Dec 2026",  type: "decision", urgent: false, title: "Receive Offer & CoE",                         description: "After accepting your offer and paying the deposit, your university issues a Confirmation of Enrolment (CoE). This is required for both the visa application and OSHC purchase. Do not delay accepting offers." },
      { dateLabel: "Nov–Dec 2026",  type: "visa",     urgent: true,  title: "Purchase OSHC & Apply for Subclass 500 Visa", description: "Purchase Overseas Student Health Cover (OSHC) BEFORE applying for visa — it is mandatory. Providers: Bupa, Medibank, CBHS. Apply online at immi.homeaffairs.gov.au via ImmiAccount. Submit: CoE, OSHC, financial evidence (tuition + AUD 24,505/yr living), IELTS, transcripts, GTE statement." },
      { dateLabel: "Dec 2026",      type: "prep",     urgent: true,  title: "Write GTE Statement",                         description: "Genuine Temporary Entrant (GTE) statement is the most critical document in your Australian visa application. Explain: why you chose Australia, your study plan, your career intentions, and strong ties to India. Weak GTE = most common rejection reason." },
      { dateLabel: "Jan 2027",      type: "visa",     urgent: false, title: "Visa Health Examination",                     description: "Book with a DIBP-approved doctor in India (eMedical system). Results submitted directly to the Department of Home Affairs — you do not collect them yourself. Must be completed within 28 days of applying." },
      { dateLabel: "Jan–Feb 2027",  type: "travel",   urgent: false, title: "Depart for Australia",                       description: "February intake begins early February 2027. Book flights by December 2026 for best prices. Melbourne, Sydney, Brisbane, and Adelaide have large Indian student communities. International student orientation usually 1 week before term." },
    ];

    // ── Germany ────────────────────────────────────────────────────────────────
    case "Germany": return [
      { dateLabel: "Jan–Mar 2026",  type: "register", urgent: true,  title: "Apply for APS Certificate — DO THIS FIRST",   description: "APS (Academic Evaluation Centre) certificate is MANDATORY for all Indian students applying to German universities. Without APS, your German visa WILL be refused. Apply at aps-india.de. Takes 4–8 weeks. Apply for APS before anything else in this process." },
      { dateLabel: "Jan–Apr 2026",  type: "prep",     urgent: false, title: "German Language Preparation (if applicable)", description: `For German-taught programmes: B2 level required for admission and visa interview. ${isEng ? "Most Engineering programmes at TU Munich, RWTH Aachen offer English-taught Masters — check if your undergraduate programme is German-taught." : isBiz ? "WHU, Mannheim Business School: German B2 needed for German-taught programmes. Some English programmes available." : "Heidelberg, LMU, and Berlin universities have both German and English-taught tracks."} IELTS 6.5+ required for English-taught programmes.` },
      { dateLabel: "Jan–Jun 2026",  type: "prep",     urgent: true,  title: "Begin IELTS Preparation (English Programmes)", description: "Germany does not require IELTS for admission (many English-taught programmes accept IELTS 6.5+) but it is needed for English-medium tracks. Check each programme's language requirement individually at the university website." },
      { dateLabel: "Apr–May 2026",  type: "prep",     urgent: false, title: "Research Programmes & Prepare Motivation Letter", description: `Research German university programmes thoroughly. ${isEng ? "TU Munich, RWTH Aachen, TU Berlin — top Engineering choices. Check if your CBSE/ISC equivalency is accepted (uni-assist.de)." : isCS ? "TU Munich, Saarland (AI), KIT, TU Berlin — top CS/AI universities. Most offer English-taught Masters." : isBiz ? "WHU, Mannheim Business School, HHL Leipzig — top Business schools. Some English-taught programmes." : "LMU Munich, Heidelberg, Humboldt — top research universities. Many English-taught Bachelor's available."} Motivation letter is the most important document — be specific about research interest.` },
      { dateLabel: "Mar–May 2026",  type: "apply",    urgent: true,  title: "Winter Semester 2026 Applications",           description: "Winter Semester 2026 (Oct/Nov 2026 start): Application deadline is typically May 15–June 15 through uni-assist.de (for universities using uni-assist) or directly via university portals. Check each university — deadlines vary significantly. APS certificate must be ready by now." },
      { dateLabel: "May–Jun 2026",  type: "apply",    urgent: false, title: "Summer Semester 2027 Application Deadline",   description: "For Summer Semester 2027 (Apr 2027 start): Most programme deadlines are January 15, 2027. If targeting summer semester, begin applications from November 2026." },
      { dateLabel: "Jun–Jul 2026",  type: "decision", urgent: false, title: "Winter 2026 Admission Decisions",             description: "German universities send conditional or unconditional admission decisions June–August. Unconditional admission (Zulassungsbescheid) triggers the visa application process. Conditional admission requires you to meet grade requirements first." },
      { dateLabel: "Jun–Jul 2026",  type: "visa",     urgent: true,  title: "Open Sperrkonto (Blocked Account)",           description: "Open Sperrkonto at Fintiba (fintiba.com) or Expatrio (expatrio.com) immediately after receiving admission. Deposit €11,208 (2025 rate — verify current amount). Takes 1–2 weeks to verify. Monthly withdrawal limit: €934. Required for visa appointment." },
      { dateLabel: "Jun–Jul 2026",  type: "visa",     urgent: true,  title: "Book German Consulate Appointment — URGENT", description: "Book visa appointment at india.diplo.de the SAME DAY as your Sperrkonto application. German consulate slots in India (Mumbai, Delhi, Bangalore, Chennai) are extremely scarce — often months ahead. Missing this step delays your entire intake by 1 year." },
      { dateLabel: "Jul–Aug 2026",  type: "visa",     urgent: true,  title: "German Student Visa Interview",               description: "Bring: passport, APS certificate, unconditional admission letter, Sperrkonto proof, IELTS/German language certificate, 10th+12th certificates (with official translations), health insurance, completed visa form, photos. Originals + photocopies of everything." },
      { dateLabel: "Oct–Nov 2026",  type: "travel",   urgent: false, title: "Depart for Germany — Winter Semester",       description: "Winter semester begins October/November 2026. Most courses: October start. Munich, Berlin, Hamburg, Cologne, Frankfurt are major student cities. Register with Einwohnermeldeamt (local registration office) within 2 weeks of arrival." },
    ];

    // ── Netherlands ────────────────────────────────────────────────────────────
    case "Netherlands": return [
      { dateLabel: "Jan–May 2026",  type: "prep",     urgent: true,  title: "Begin IELTS Preparation",                     description: `Dutch universities require IELTS for all English-taught programmes. Target: 6.5+ overall (TU Delft, University of Amsterdam, Leiden). ${isEng ? "TU Delft Engineering: 6.5+ required, some programmes 7.0+." : isBiz ? "University of Amsterdam Business: 6.5+. Erasmus Rotterdam Business: 6.5+" : ""} No IELTS = cannot enrol in English-medium tracks.` },
      { dateLabel: "Jan–Apr 2026",  type: "apply",    urgent: true,  title: "Dutch University Applications — APPLY EARLY", description: `Most Dutch programmes use Studielink (studielink.nl) plus a direct university portal. ${isCS || isEng ? "TU Delft: numerical selection (loting) for popular programmes — apply by January 15 for equal consideration. Some programmes fill by February." : isBiz ? "University of Amsterdam Business: rolling admissions but fills early. Erasmus School of Economics: January 15." : "University of Amsterdam, Leiden, Vrije Universiteit: rolling admissions — many programmes fill by February–March."}` },
      { dateLabel: "Jan 15, 2026",  type: "apply",    urgent: true,  title: "Studielink Registration Opens",               description: "Register at studielink.nl by January 15 for programmes with numerus fixus (selection). For non-selective programmes, April 1 is the main deadline. Apply to your preferred Dutch programme as early as January — many popular tracks fill months before the official deadline." },
      { dateLabel: "Feb–Apr 2026",  type: "apply",    urgent: true,  title: "April 1 — Main Dutch Application Deadline",  description: `April 1, 2026 is the main deadline for most Dutch programmes starting September 2026. ${isEng ? "TU Delft engineering programmes: April 1. Some selective programmes: January 15." : isBiz ? "UvA Economics/Business: April 1. RSM Erasmus Business: rolling but apply by February." : "Leiden, Vrije Universiteit: April 1. University of Amsterdam: April 1 for most programmes."}  Motivation letters must be excellent — Dutch admissions are competitive for top programmes.` },
      { dateLabel: "Feb–Apr 2026",  type: "decision", urgent: false, title: "Admission Decisions & Selection Process",     description: "Dutch universities run selection processes February–April. Some programmes conduct interviews or portfolio reviews. Numerus fixus programmes have strict selection caps. Decisions typically issued April–May 2026." },
      { dateLabel: "Apr–May 2026",  type: "visa",     urgent: true,  title: "Accept Offer — University Submits MVV to IND", description: "After accepting your offer and paying the tuition deposit, your university submits your MVV (Machtiging tot Voorlopig Verblijf) application to the IND (Dutch immigration) on your behalf. You do NOT apply to IND directly. Submit all requested documents to your university's International Office promptly." },
      { dateLabel: "Jun–Jul 2026",  type: "visa",     urgent: true,  title: "Collect MVV Sticker at Dutch Consulate",      description: "After IND approves, collect your MVV entry visa sticker at the Dutch Embassy in Mumbai or New Delhi. Bring: passport, IND approval reference from university, photos. MVV allows you to enter the Netherlands. Residence permit is arranged on arrival." },
      { dateLabel: "Aug–Sep 2026",  type: "travel",   urgent: false, title: "Depart for Netherlands",                     description: "Dutch academic year begins in September. Register at your gemeente (local municipality) within 5 days of arrival — your university will guide this. Holland Scholarship (€5,000) paid after arrival." },
    ];

    // ── Singapore ──────────────────────────────────────────────────────────────
    case "Singapore": return [
      { dateLabel: "Jan–May 2026",  type: "prep",     urgent: true,  title: "Begin IELTS / TOEFL Preparation",             description: `NUS requires IELTS 6.0+; NTU and SMU require 6.5+. ${isCS || isEng ? "NUS Computing and NTU EEE are globally ranked — competitive applicants typically score 7.0+." : isBiz ? "NUS Business and SMU Lee Kong Chian: 6.5+. Holistic admissions including interview." : isMed ? "NUS Medicine is graduate-entry only in Singapore — undergraduate route is through NUS Life Sciences." : ""} SAT is not required by Singapore universities for Indian CBSE/ISC applicants.` },
      { dateLabel: "Dec 2025–Feb 2026", type: "apply", urgent: true, title: "NUS & NTU Application Window",               description: `NUS: applications open December 3, 2025 and close February 23, 2026 for international qualifications (CBSE/ISC). NTU: similar window. SMU: separate portal. These are for August 2026 intake. ${isCS || isEng ? "NUS Computing, NTU EEE, NTU CS, SUTD Engineering are extremely competitive — 90%+ boards typically needed." : isBiz ? "NUS Business (BBA): competitive, interview required. SMU Business: holistic with interview." : ""}` },
      { dateLabel: "Jan–Mar 2026",  type: "apply",    urgent: true,  title: "Submit Complete Applications",                description: "Apply to NUS via nus.edu.sg/oam, NTU via ntu.edu.sg, SMU via smu.edu.sg. Attach: 10th and 11th/12th predicted/actual grades, IELTS/TOEFL score, passport copy, personal statement/essay. Some programmes require a portfolio or online aptitude test." },
      { dateLabel: "Mar–Apr 2026",  type: "decision", urgent: false, title: "Singapore University Offers",                 description: "NUS and NTU send offers March–June 2026. SMU sends results by July. Offers are conditional on final Class 12 results (if applying in Grade 11) or unconditional (if results are available). MOE Tuition Grant available to international students — sign a 3-year Singapore work bond." },
      { dateLabel: "Apr–Jun 2026",  type: "visa",     urgent: true,  title: "University Nominates You to ICA (SOLAR)",    description: "After accepting your offer, your university nominates you via ICA's SOLAR system. ICA sends your In-Principle Approval (IPA) letter within 4–8 weeks. This is what allows you to enter Singapore legally." },
      { dateLabel: "Jun–Jul 2026",  type: "visa",     urgent: true,  title: "Apply for Student Pass via SOLAR",           description: "Log into solar.ica.gov.sg with your IPA reference. Complete eForm 16 online. Bank statements (tuition + SGD 12,000/yr living) required. Arrive in Singapore 1–2 weeks before course starts. Visit ICA Building within 2 weeks of arrival to collect Student Pass card." },
      { dateLabel: "Jul–Aug 2026",  type: "travel",   urgent: false, title: "Depart for Singapore",                       description: "NUS/NTU/SMU courses begin in August. Orientation week is late July. Book flights by April–May for best prices. Singapore has a large Indian community. MOE Tuition Grant reduces fees significantly but requires 3 years of work in Singapore after graduation." },
    ];

    // ── Japan ──────────────────────────────────────────────────────────────────
    case "Japan": return [
      { dateLabel: "Jan–Jun 2026",  type: "prep",     urgent: false, title: "Japanese Language Preparation (JLPT)",        description: "For Japanese-taught programmes: JLPT N2 or higher required. Start Japanese language classes immediately — N2 takes 18–24 months from scratch. For English-taught programmes at Waseda, Keio, Ritsumeikan: IELTS 6.5+ or TOEFL 80+ required." },
      { dateLabel: "Jan–Jun 2026",  type: "prep",     urgent: false, title: "Research MEXT Scholarship",                   description: "MEXT (Japanese Government Scholarship) covers full tuition + ¥117,000/month stipend. Application via Indian Embassy in April–May each year. Requires: 85%+ boards, strong academics, JLPT N2+ (for Japanese programmes). Most competitive government scholarship for Japan." },
      { dateLabel: "Apr–May 2026",  type: "apply",    urgent: true,  title: "MEXT Scholarship Application Window",        description: "MEXT applications open through Japanese Embassy in India in April 2026. Deadline: May–June 2026. Screening includes written test (Maths + English + Japanese), interview, and document review. If selected, MEXT places you at a Japanese university — you don't choose the university first." },
      { dateLabel: "Sep–Nov 2026",  type: "apply",    urgent: false, title: "Japanese University Direct Applications",     description: "University of Tokyo (EAJ/PEAK English): October 31 deadline. Waseda University English-taught: November 15. Ritsumeikan: December 1. Apply with: academic records, IELTS/TOEFL, personal statement, letters of recommendation, and research plan (for engineering/science)." },
      { dateLabel: "Jan–Feb 2027",  type: "decision", urgent: false, title: "Admission Decisions",                        description: "Japanese universities send decisions December–February. University of Tokyo decisions: February. Waseda: January. If admitted, you receive a Certificate of Admission (COE) needed for the Student Visa." },
      { dateLabel: "Feb–Mar 2027",  type: "visa",     urgent: true,  title: "Apply for Japan Student Visa (COE)",         description: "Apply for Certificate of Eligibility (COE) through your Japanese university — takes 4–8 weeks. Then apply for Student Visa at nearest Japan Embassy/Consulate in India with COE. Processing: 2–4 weeks. Bring: COE, passport, photo, application form, admission letter, financial proof." },
      { dateLabel: "Mar–Apr 2027",  type: "travel",   urgent: false, title: "Depart for Japan",                          description: "Japanese academic year begins in April. Arrive 1–2 weeks early for orientation. Most universities begin in early April. Tokyo, Osaka, Kyoto, Fukuoka are major student cities." },
    ];

    // ── India ──────────────────────────────────────────────────────────────────
    case "India": return [
      ...( (isEng || isCS) ? [
        { dateLabel: "Nov 2025–Jan 2026", type: "register", urgent: true, title: "JEE Main Registration", description: "JEE Main 2026 registration opens November 2025 at jeemain.nta.ac.in. JEE Main is the gateway to IITs, NITs, IIITs, and state engineering colleges. Session 1: January 2026. Session 2: April 2026. Best of two scores counts for JEE Advanced eligibility." } as TimelineEvent,
        { dateLabel: "Jan–Feb 2026",      type: "exam",     urgent: true, title: "JEE Main Session 1",     description: "JEE Main Session 1 (January/February 2026). 300 marks (Physics + Chemistry + Mathematics). Aim for 99+ percentile for IIT eligibility. Top 2.5 lakh candidates qualify for JEE Advanced. BITSAT preparation overlaps significantly." } as TimelineEvent,
        { dateLabel: "Mar–Apr 2026",      type: "apply",    urgent: false,"title": "BITSAT & Private Engineering Exams", description: "BITSAT: April–May 2026 at bits-pilani.ac.in. For BITS Pilani, Goa, Hyderabad. VIT: VITEEE April 2026. Manipal, SRM, Amity have their own tests. Register for all relevant exams simultaneously." } as TimelineEvent,
        { dateLabel: "Apr 2026",          type: "exam",     urgent: true, title: "JEE Main Session 2",     description: "JEE Main Session 2 (April 2026). Your best of Session 1 and Session 2 percentile qualifies you for JEE Advanced. Ensure you're in the top 2.5 lakh to attempt JEE Advanced." } as TimelineEvent,
        { dateLabel: "May–Jun 2026",      type: "exam",     urgent: true, title: "JEE Advanced (IIT Gateway)", description: "JEE Advanced 2026 (May/June). Only top 2.5 lakh JEE Main qualifiers eligible. 2 papers × 3 hours. For IIT Bombay, Delhi, Madras, Kharagpur, Kanpur, Roorkee, etc. Target rank: under 500 for IIT Bombay CS; under 2,000 for top IITs." } as TimelineEvent,
        { dateLabel: "Jun–Jul 2026",      type: "apply",    urgent: true, title: "JoSAA Counselling (IIT/NIT Seat Allotment)", description: "Joint Seat Allocation Authority (JoSAA) counselling begins June 2026 at josaa.nic.in. Register, fill choices, lock preferences. Multiple rounds of allotment. Seat acceptance fee required to confirm. This determines your IIT/NIT/IIIT." } as TimelineEvent,
      ] : []),
      ...( (isMed || isBio) ? [
        { dateLabel: "Jan–Apr 2026",  type: "prep",     urgent: true,  title: "NEET-UG Preparation",                        description: "NEET-UG 2026 is the only gateway to MBBS/BDS/BAMS/Veterinary in India. 720 marks (Biology 360 + Physics 180 + Chemistry 180). Target 650+ for AIIMS/CMC Vellore. 550+ for government medical colleges. 500+ for private medical colleges." } as TimelineEvent,
        { dateLabel: "Apr–May 2026",  type: "register", urgent: true,  title: "NEET-UG 2026 Registration",                  description: "NEET-UG 2026 registration opens at neet.nta.ac.in (typically March–April). Fill form carefully — name, category, subjects must match Class 10 certificate. Application fee: ₹1,700 (general). Exam: May 2026." } as TimelineEvent,
        { dateLabel: "May 2026",      type: "exam",     urgent: true,  title: "NEET-UG 2026 Exam",                          description: "NEET-UG 2026 is a single sitting, offline exam. 3 hours 20 minutes. 720 total marks. Top rankers (1–50) almost exclusively get AIIMS Delhi/Jodhpur/Bhopal. Rank 1–1000 for AIIMS branches. Rank 1–10,000 for government MBBS." } as TimelineEvent,
        { dateLabel: "Jun–Jul 2026",  type: "decision", urgent: false, title: "NEET Results & MCC Counselling",             description: "NEET results declared June 2026. MCC (Medical Counselling Committee) counselling for All India Quota (AIQ) begins July 2026. State quota counselling conducted by respective state authorities separately. Register at mcc.nic.in for AIQ seats." } as TimelineEvent,
      ] : []),
      ...( (isBiz || isArts || isLaw) ? [
        { dateLabel: "Jan–Apr 2026",  type: "prep",     urgent: true,  title: "CUET / SAT / IPMAT Preparation",             description: `${isBiz ? "IPMAT (IIM Indore/Rohtak 5-year integrated MBA): April 2026 exam. CUET: for SRCC, St. Stephen's, other DU colleges. Ashoka University and KREA accept SAT 1450+ for merit scholarships." : isLaw ? "CLAT 2026: December 2025 for NLUs. AILET: December 2025 for NLU Delhi. LSAT India: January 2026. Common Law Admission Test (CLAT) is the gateway for National Law Universities." : "CUET-UG: for DU colleges, BHU, JNU, Ashoka. DUET: for DU-specific programmes. Ashoka University: own application + SAT 1450+ helps scholarship."}` } as TimelineEvent,
        { dateLabel: "Mar–Jun 2026",  type: "exam",     urgent: true,  title: `${isBiz ? "IPMAT / CUET Exams" : isLaw ? "CLAT / AILET / LSAT Exams" : "CUET-UG Exam"}`, description: `${isBiz ? "IPMAT exam: April–May 2026. Quantitative Ability + Verbal Ability + Short Essay. CUET-UG: May–June 2026 for DU colleges and SRCC." : isLaw ? "CLAT 2026: May 2026 at consortiumofnlus.ac.in. 120 minutes, 120 questions. Top 50 rank for NLU Delhi (AILET). Top 200 for NLSIU Bangalore and NLU Jodhpur." : "CUET-UG: May–June 2026. Sections: Language, Domain Subjects, General Test. Ashoka University applications open October 2025."}` } as TimelineEvent,
        { dateLabel: "Jun–Jul 2026",  type: "decision", urgent: false, title: "Admissions & Counselling", description: `${isBiz ? "IPMAT results: June. IIM Indore counselling July 2026. DU CSAS counselling (CUET): July–August 2026. Ashoka University scholarship interviews: October–April (multiple rounds)." : isLaw ? "CLAT results and NLU counselling: June–July 2026. Accept offer and pay seat acceptance fee to confirm." : "CUET results: July 2026. CSAS portal for DU: August 2026. Ashoka, KREA, FLAME University: own results timeline."}` } as TimelineEvent,
      ] : []),
      { dateLabel: "Jul–Aug 2026",  type: "travel",   urgent: false, title: "Move to Campus / Begin Academic Year", description: "Most Indian universities begin the academic year in July–August 2026. Arrange hostel accommodation early — IIT/NIT/AIIMS/NLU hostels are allocated through the institution. Private university accommodation may need to be arranged separately." },
    ];

    default: return [];
  }
}

// ─── TimelineSection ──────────────────────────────────────────────────────────

const GENERAL_TIMELINE_DATA: Record<
  number,
  { month: number; title: string; desc: string }[]
> = {
  12: [
    { month: 6, title: "Begin Applications", desc: "Start filling Common App / UCAS / country-specific forms." },
    { month: 8, title: "SAT / IELTS Tests", desc: "Take standardised tests. Retake if needed." },
    { month: 9, title: "Finalize Shortlist", desc: "Select 8–12 universities across reach/target/safety tiers." },
    { month: 10, title: "Submit Applications", desc: "Early Decision / Action deadlines. Submit well before deadline." },
    { month: 11, title: "Financial Aid Docs", desc: "File FAFSA (USA), scholarship applications, bank statements." },
    { month: 2, title: "Decisions Arrive", desc: "March–April: Accept/decline offers. Enrollment deadline May 1." },
  ],
  11: [
    { month: 5, title: "Explore Countries & Fields", desc: "Research programs. Attend virtual open days." },
    { month: 7, title: "SAT / ACT Prep Begins", desc: "Enroll in prep courses. Aim for first attempt in Oct/Nov." },
    { month: 9, title: "Build Activities Profile", desc: "Clubs, competitions, internships, research projects." },
    { month: 11, title: "Finalize Stream & Subjects", desc: "Confirm 12th subjects align with target program requirements." },
    { month: 1, title: "Draft Personal Statement", desc: "Start brainstorming essays. Seek teacher feedback." },
  ],
  10: [
    { month: 4, title: "Career Exploration", desc: "Shadow professionals, take aptitude tests, attend seminars." },
    { month: 7, title: "Choose 11th Stream", desc: "Align stream with target university requirements." },
    { month: 9, title: "Build Portfolio", desc: "Science fairs, olympiads, community service, online courses." },
    { month: 0, title: "Research Programs", desc: "Shortlist 20 universities across countries. Visit websites." },
  ],
  9: [
    { month: 4, title: "Skill Building", desc: "Coding, debate, sports — build well-rounded profile." },
    { month: 8, title: "Academic Excellence", desc: "Aim for consistent 85%+ in core subjects." },
    { month: 11, title: "English Proficiency", desc: "Start reading English books, news. Vocab building." },
    { month: 2, title: "First Country Research", desc: "Pick 3 dream countries. Watch YouTube tours of universities." },
  ],
  8: [
    { month: 3, title: "Discover Your Passion", desc: "Try coding, design, science, writing — find what clicks." },
    { month: 6, title: "Join Clubs & Activities", desc: "School clubs, reading, sports, arts." },
    { month: 9, title: "Strong Academic Foundation", desc: "Prioritize Math, Science, English consistently." },
    { month: 11, title: "Dream Big", desc: "Browse university websites. Watch campus tours." },
  ],
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ─── Main TimelineSection export ─────────────────────────────────────────────

export function TimelineSection({
  grade,
  countries = [],
  career = "",
}: {
  grade: Grade;
  countries?: Country[];
  career?: string;
}) {
  const [activeCountry, setActiveCountry] = useState<Country | null>(
    countries.length > 0 ? countries[0] : null
  );

  // If no countries selected or grade < 11, show general timeline
  const showCountryTimeline = countries.length > 0 && grade >= 11;

  if (!showCountryTimeline) {
    return <GeneralTimeline grade={grade} />;
  }

  const currentCountry = activeCountry ?? countries[0];
  const events = buildCountryTimeline(currentCountry, career || "");

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-green" />
        Application Timeline
      </div>

      {/* Country tabs */}
      {countries.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCountry(c)}
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                background: currentCountry === c ? "rgba(16,185,129,.15)" : "var(--ep-surface2)",
                border: `1px solid ${currentCountry === c ? "rgba(16,185,129,.4)" : "var(--ep-border)"}`,
                color: currentCountry === c ? "#34d399" : "var(--ep-muted)",
                fontFamily: "DM Sans, sans-serif",
                transition: "all .2s",
              }}
            >
              {FLAGS[c]} {c}
            </button>
          ))}
        </div>
      )}

      {/* Career context pill */}
      {career && career !== "Not decided yet" && (
        <div
          style={{
            background: "rgba(139,92,246,.08)",
            border: "1px solid rgba(139,92,246,.2)",
            borderRadius: 8,
            padding: "8px 12px",
            marginBottom: 14,
            fontSize: 11,
            color: "#c4b5fd",
            fontWeight: 600,
          }}
        >
          🎯 Timeline personalised for: {career}
        </div>
      )}

      {/* Timeline events */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, maxHeight: 520, overflowY: "auto" }}>
        {events.map((event, i) => {
          const colors = TYPE_COLORS[event.type] || TYPE_COLORS.prep;
          const isLast = i === events.length - 1;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                paddingBottom: isLast ? 0 : 14,
              }}
            >
              {/* Dot + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 16 }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: event.urgent ? "#f87171" : colors.dot,
                    flexShrink: 0,
                    marginTop: 3,
                    boxShadow: event.urgent ? "0 0 6px rgba(248,113,113,.5)" : "none",
                  }}
                />
                {!isLast && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      background: "var(--ep-border)",
                      marginTop: 3,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 10,
                  padding: "10px 12px",
                  marginBottom: isLast ? 0 : 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: event.urgent ? "#fca5a5" : colors.dot,
                    }}
                  >
                    {event.dateLabel} {event.urgent && "⚠️"}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "1px 6px",
                      borderRadius: 4,
                      background: colors.border,
                      color: colors.dot,
                      fontWeight: 600,
                      flexShrink: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    {colors.label}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--ep-text)",
                    marginBottom: 4,
                  }}
                >
                  {event.title}
                </div>
                <div
                  style={{ fontSize: 11, color: "var(--ep-muted)", lineHeight: 1.5 }}
                >
                  {event.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── GeneralTimeline (for lower grades / no country selected) ─────────────────

function GeneralTimeline({ grade }: { grade: Grade }) {
  const items = GENERAL_TIMELINE_DATA[grade] ?? GENERAL_TIMELINE_DATA[12];
  const currentMonth = new Date().getMonth();
  let activeSet = false;

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-green" />
        Application Timeline
      </div>
      <div className="ep-timeline">
        {items.map((item, i) => {
          const done = item.month < currentMonth && grade === 12;
          const isActive = !done && !activeSet ? ((activeSet = true), true) : false;
          const isLast = i === items.length - 1;

          return (
            <div key={i} className="ep-tl-item">
              <div className="ep-tl-left">
                <div
                  className={`ep-tl-dot ${done ? "done" : isActive ? "active" : "upcoming"}`}
                />
                {!isLast && <div className={`ep-tl-line ${done ? "done" : ""}`} />}
              </div>
              <div className="ep-tl-content">
                <div className="ep-tl-date">
                  {MONTHS[item.month]} {done ? "✓ Done" : isActive ? "← Now" : "Upcoming"}
                </div>
                <div className="ep-tl-title">{item.title}</div>
                <div className="ep-tl-desc">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}