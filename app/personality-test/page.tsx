"use client";
import { useState, useEffect, useRef } from "react";
import { PERSONALITY_QUESTIONS, TOTAL_QUESTIONS, MBTI_TYPES } from "@/lib/personality";
import type { MBTIType } from "@/lib/personality";

/* ══════════════════════════════════════════════════════════════
   TYPES & CONSTANTS
══════════════════════════════════════════════════════════════ */

type Step =
  | "lead_form"
  | "country_select"
  | "quiz"
  | "generating"
  | "report";

interface LeadData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  age: string;
  currentClass: string;
  consent: boolean;
  targetCountry: string;
  targetDegree: string;
}

/* ── Typed report shape ── */
interface ReportCategory {
  name: string;
  percentage: number;
  label: string;
  description: string;
  color: string;
}

interface ReportUniversity {
  name: string;
  country: string;
  flag: string;
  program: string;
  ranking: string;
  website: string;
  region: string;
  tuitionRange: string;
  whyForYou: string;
  requiredExams: string[];
}

interface ReportCareerMatch {
  title: string;
  fit: number;
  icon: string;
  description: string;
  primarySkills: string[];
  salaryRange: string;
}

interface ReportExam {
  title: string;
  fullForm: string;
  classLevel: string;
  description: string;
  whyForYou: string;
  priority: string;
  preparationTime: string;
  link: string;
  benefit: string;
  targetCountries: string[];
}

interface ReportScholarship {
  name: string;
  country: string;
  amount: string;
  eligibility: string;
  deadline: string;
  link: string;
}

interface ProfileBenefit {
  icon: string;
  title: string;
  description: string;
}

interface TimelineStage {
  classLevel: string;
  actions: string[];
}

interface ProfileBuildingBenefits {
  overview: string;
  keyBenefits: ProfileBenefit[];
  whyItMatters: string;
  timelineByClass: TimelineStage[];
}

interface StreamRecommendation {
  primary: string;
  alternates: string[];
  reasoning: string;
  subjects: string[];
  careerPathsFromStream: string[];
  confidence: number;
}

interface AdminContact {
  name: string;
  email: string;
  phone: string;
}

interface Report {
  studentName: string;
  tagline: string;
  overallScore: number;
  personalityType: string;
  aiInsight: string;
  programRecommendation: string;
  categories: ReportCategory[];
  universities: ReportUniversity[];
  careerMatches: ReportCareerMatch[];
  recommendedExams: ReportExam[];
  scholarships: ReportScholarship[];
  profileBuildingBenefits?: ProfileBuildingBenefits;
  streamRecommendation?: StreamRecommendation;
  adminContact?: AdminContact;
}

const CLASS_OPTIONS = ["8","9","10","11","12","Graduate","Working Professional"];

const COUNTRY_OPTIONS = [
  { value:"USA",       flag:"🇺🇸", label:"United States",  unis:"Harvard, MIT, Stanford, Yale…" },
  { value:"UK",        flag:"🇬🇧", label:"United Kingdom", unis:"Oxford, Cambridge, LSE, Imperial…" },
  { value:"Canada",    flag:"🇨🇦", label:"Canada",         unis:"Toronto, UBC, McGill, Waterloo…" },
  { value:"Australia", flag:"🇦🇺", label:"Australia",      unis:"Melbourne, ANU, Sydney, UNSW…" },
  { value:"Singapore", flag:"🇸🇬", label:"Singapore",      unis:"NUS, NTU, SMU" },
];

const DEGREE_OPTIONS = [
  { value:"Computer Science / AI",  icon:"💻", label:"Computer Science / AI" },
  { value:"Engineering",            icon:"⚙️", label:"Engineering" },
  { value:"Business / Management",  icon:"📈", label:"Business & Management" },
  { value:"Medicine / Healthcare",  icon:"🏥", label:"Medicine & Healthcare" },
  { value:"Law",                    icon:"⚖️", label:"Law" },
  { value:"Arts & Design",          icon:"🎨", label:"Arts & Design" },
  { value:"Natural Sciences",       icon:"🔬", label:"Natural Sciences" },
  { value:"Economics / Finance",    icon:"📊", label:"Economics & Finance" },
  { value:"Social Sciences",        icon:"🌍", label:"Social Sciences" },
  { value:"Media & Communication",  icon:"📡", label:"Media & Communication" },
];

interface CareerRequirement {
  career: string;
  requirements: string[];
  exams: string[];
  degree: string;
  salary: string;
}

const CAREER_REQUIREMENTS: Record<string, CareerRequirement[]> = {
  INTJ: [
    { career:"Strategic Consultant", degree:"MBA / Business Analytics", exams:["GMAT 700+","GRE Quant 165+"], requirements:["Strong analytical skills","Systems thinking","Data interpretation","Leadership experience"], salary:"₹20–60 LPA" },
    { career:"Data Scientist / ML Engineer", degree:"B.Tech CS / M.Tech AI", exams:["SAT 1400+","JEE Advanced / GATE"], requirements:["Python, R, SQL proficiency","Statistical modelling","Machine learning frameworks","Research publications"], salary:"₹15–50 LPA" },
    { career:"Research Scientist", degree:"PhD in STEM field", exams:["GRE 320+","TOEFL 105+"], requirements:["Strong academic record","Research experience","Published papers","Fellowship applications"], salary:"₹12–40 LPA" },
  ],
  INFJ: [
    { career:"Clinical Psychologist", degree:"M.Sc Psychology / PhD", exams:["NEET / GRE Psychology"], requirements:["Empathy and active listening","Research methodology","Case study experience","Ethics certification"], salary:"₹8–25 LPA" },
    { career:"NGO / Policy Leader", degree:"BA/MA Public Policy", exams:["UPSC / IELTS 7.5+"], requirements:["Strong writing skills","Community leadership","Grant writing experience","Stakeholder management"], salary:"₹6–20 LPA" },
    { career:"Content Strategist", degree:"BA Mass Communication", exams:["IELTS 7.5+","Portfolio review"], requirements:["Creative writing portfolio","SEO knowledge","Brand storytelling","Analytics understanding"], salary:"₹8–30 LPA" },
  ],
  ESFP: [
    { career:"Event Manager / Brand Director", degree:"BBA / Mass Communication", exams:["SAT 1200+","IELTS 7.0+"], requirements:["Communication skills","Project management","Creative portfolio","Social media expertise"], salary:"₹6–25 LPA" },
    { career:"Actor / Performer", degree:"BFA / Film School", exams:["Audition tapes","Portfolio"], requirements:["Acting training (2+ years)","Vocal training","Physical fitness","Industry networking"], salary:"Variable" },
    { career:"Tourism & Hospitality Manager", degree:"BHM / International Hospitality", exams:["IELTS 7.0+","SAT 1200+"], requirements:["Customer service excellence","Multilingual skills","Cultural awareness","Business management"], salary:"₹6–20 LPA" },
  ],
  ENTP: [
    { career:"Entrepreneur / Founder", degree:"BBA / Engineering + MBA", exams:["CAT 95%ile / GMAT 700+"], requirements:["Business plan development","Pitch deck creation","Financial modelling","Market research skills"], salary:"Variable — High upside" },
    { career:"Product Manager", degree:"B.Tech / BBA + MBA", exams:["CAT 95%ile / GMAT 700+"], requirements:["User research skills","Agile/Scrum certification","Data analysis","Stakeholder communication"], salary:"₹18–55 LPA" },
    { career:"Investment Analyst", degree:"B.Com / BBA + CFA", exams:["CFA Level 1","GMAT 700+"], requirements:["Financial modelling (Excel/Python)","Equity research skills","Bloomberg terminal","Networking in finance"], salary:"₹15–50 LPA" },
  ],
  ENTJ: [
    { career:"Management Consultant", degree:"MBA (IIM / Global Top 30)", exams:["CAT 99%ile / GMAT 720+"], requirements:["Case study excellence","Data-driven decision making","Leadership track record","Consulting internships"], salary:"₹25–80 LPA" },
    { career:"C-Suite Executive", degree:"MBA / Executive Leadership", exams:["GMAT 730+","Executive Assessment"], requirements:["10+ years leadership","P&L management","Board-level communication","Global market exposure"], salary:"₹40–200 LPA" },
    { career:"Investment Banker", degree:"B.Tech/B.Com + MBA Finance", exams:["GMAT 720+","CFA Level 1"], requirements:["Financial modelling","M&A experience","Excel + Python","Analyst internship at top bank"], salary:"₹20–80 LPA" },
  ],
  ESTP: [
    { career:"Sales Director / Business Dev", degree:"BBA / MBA Marketing", exams:["CAT 90%ile / GMAT 680+"], requirements:["Persuasion & negotiation","CRM tools (Salesforce)","Revenue target achievement","Market expansion experience"], salary:"₹12–40 LPA" },
    { career:"Sports Coach / Athletic Director", degree:"B.Sc Sports Science", exams:["Sports trials / Coaching certification"], requirements:["Level 2/3 coaching license","Fitness certifications","Sports psychology basics","Team management"], salary:"₹6–20 LPA" },
    { career:"Real Estate Developer", degree:"BBA / Civil Engineering", exams:["RERA certification"], requirements:["Market analysis skills","Financial feasibility","Project management","Legal compliance knowledge"], salary:"₹10–50 LPA" },
  ],
  ENFP: [
    { career:"UX/UI Designer", degree:"B.Des / HCI / Psychology", exams:["Portfolio review","SAT 1250+"], requirements:["Figma / Adobe XD mastery","User research methodology","Design portfolio (5+ projects)","Frontend basics (HTML/CSS)"], salary:"₹8–35 LPA" },
    { career:"Social Entrepreneur", degree:"BA / BBA + Social Innovation", exams:["IELTS 7.5+","Fellowships"], requirements:["Impact measurement skills","Grant writing","Community mobilisation","B Corp / SDG knowledge"], salary:"₹6–25 LPA" },
    { career:"Journalist / Documentary Filmmaker", degree:"BA Mass Communication", exams:["IELTS 7.5+","Portfolio"], requirements:["Investigative research skills","Video editing (Premiere Pro)","Fact-checking methodology","Press credentials"], salary:"₹6–25 LPA" },
  ],
  ISTP: [
    { career:"Software Engineer / Architect", degree:"B.Tech CS / Computer Engineering", exams:["JEE Advanced / SAT 1450+"], requirements:["DSA mastery (LeetCode Hard)","System design skills","Open source contributions","Internships at top tech companies"], salary:"₹12–60 LPA" },
    { career:"Cybersecurity Analyst", degree:"B.Tech CS + CEH / CISSP", exams:["CompTIA Security+","CEH certification"], requirements:["Ethical hacking skills","Network security","Python/Bash scripting","CTF competition experience"], salary:"₹10–45 LPA" },
    { career:"Mechanical / Aerospace Engineer", degree:"B.Tech Mechanical / Aerospace", exams:["JEE Advanced / SAT 1400+","GATE"], requirements:["CAD/CAM proficiency","MATLAB / Simulink","Research projects","Industry internships"], salary:"₹8–30 LPA" },
  ],
  ISFJ: [
    { career:"Doctor / Physician", degree:"MBBS + MD/MS", exams:["NEET UG 650+","USMLE (USA)","PLAB (UK)"], requirements:["MBBS with 60%+ CGPA","Clinical rotations","Medical research publications","Residency applications"], salary:"₹8–60 LPA" },
    { career:"School Principal / Edu Admin", degree:"B.Ed + M.Ed / MBA Education", exams:["CTET / NET","IELTS 7.0+"], requirements:["5+ years teaching experience","Curriculum development","Staff management","School accreditation knowledge"], salary:"₹6–20 LPA" },
    { career:"Social Worker / Counsellor", degree:"MSW / M.Sc Clinical Psychology", exams:["NIMHANS entrance","State entrance exams"], requirements:["Empathy and communication","Case management skills","Community fieldwork (500 hrs)","Ethics training"], salary:"₹4–15 LPA" },
  ],
  ESFJ: [
    { career:"HR Director / People Manager", degree:"MBA HR / Industrial Psychology", exams:["CAT 90%ile / GMAT 680+"], requirements:["Labour law knowledge","HRIS tools (Workday/SAP)","Conflict resolution skills","Diversity & inclusion training"], salary:"₹12–40 LPA" },
    { career:"Public Relations Manager", degree:"BA / MBA Mass Communication", exams:["IELTS 7.5+","Portfolio"], requirements:["Media relations skills","Crisis communication","Press release writing","Brand management experience"], salary:"₹8–30 LPA" },
    { career:"Healthcare Administrator", degree:"MHA / MBA Healthcare", exams:["IELTS 7.0+","GMAT 650+"], requirements:["Hospital operations management","Healthcare regulations","Budget management","Patient experience design"], salary:"₹10–35 LPA" },
  ],
  ISTJ: [
    { career:"Chartered Accountant / CFO", degree:"B.Com + CA / CPA / ACCA", exams:["CA Foundation → Intermediate → Final","CPA (USA)","ACCA (UK)"], requirements:["ICAI articleship (3 years)","Financial reporting (IFRS/IndAS)","Audit experience","Big 4 internship"], salary:"₹8–50 LPA" },
    { career:"Civil Services (IAS/IPS)", degree:"Any graduation (UPSC pathway)", exams:["UPSC Prelims + Mains + Interview"], requirements:["10+ subjects preparation","Answer writing practice","Current affairs mastery","Optional subject mastery"], salary:"₹7–20 LPA + benefits" },
    { career:"Quality Assurance / Six Sigma", degree:"B.Tech / B.Sc + Six Sigma Black Belt", exams:["Six Sigma Green/Black Belt","ISO 9001 Lead Auditor"], requirements:["Statistical process control","Lean manufacturing","DMAIC methodology","Industry 4.0 knowledge"], salary:"₹8–30 LPA" },
  ],
  ESTJ: [
    { career:"Operations Director / COO", degree:"MBA Operations / Industrial Engg", exams:["CAT 95%ile / GMAT 700+"], requirements:["Supply chain management","ERP systems (SAP/Oracle)","Lean / Six Sigma Black Belt","10+ years operations experience"], salary:"₹25–80 LPA" },
    { career:"Army / Defence Officer", degree:"NDA / CDSE / OTA + B.Tech", exams:["NDA Written + SSB Interview","CDS Exam"], requirements:["Physical fitness (top tier)","Leadership under pressure","Strategic decision making","Patriotism and discipline"], salary:"₹7–25 LPA + benefits" },
    { career:"Bank Manager / Finance Director", degree:"B.Com / BBA + MBA Finance", exams:["IBPS PO / SBI PO","CA / CFA Level 1"], requirements:["Credit risk analysis","Regulatory compliance","Portfolio management","Customer relationship management"], salary:"₹8–40 LPA" },
  ],
  INTP: [
    { career:"AI Researcher / PhD", degree:"M.Tech AI / PhD Computer Science", exams:["GATE CS 700+","GRE 320+","TOEFL 105+"], requirements:["Research paper publications","Deep learning (PyTorch/TF)","Mathematics (Linear Algebra, Calculus)","Open-source ML contributions"], salary:"₹15–80 LPA" },
    { career:"Philosophy / Theoretical Physicist", degree:"MSc Physics / PhD Philosophy", exams:["JAM / JEST","GRE 325+"], requirements:["Advanced mathematics","Research publications","Teaching/TA experience","International conference presentations"], salary:"₹8–25 LPA" },
    { career:"Systems Architect / CTO", degree:"B.Tech CS + MBA Tech", exams:["AWS/GCP/Azure certifications","TOGAF certification"], requirements:["Cloud architecture mastery","10+ years engineering","Open source leadership","Technical vision communication"], salary:"₹30–120 LPA" },
  ],
  INFP: [
    { career:"Author / Creative Writer", degree:"BA English / Creative Writing MFA", exams:["IELTS 7.5+","Writing portfolio"], requirements:["Published short stories/blogs","Literary agent queries","Writing workshop completion","Genre specialisation"], salary:"₹4–30 LPA" },
    { career:"Art Therapist / Counsellor", degree:"MA Art Therapy / MSW", exams:["Entrance exams (TISS/NIMHANS)"], requirements:["300+ clinical hours","Art and psychology dual knowledge","Trauma-informed care training","Ethics certification"], salary:"₹6–20 LPA" },
    { career:"Environmental Scientist", degree:"M.Sc Environmental Science", exams:["GATE Environmental / GRE","IFS Exam"], requirements:["Field research experience","GIS and remote sensing skills","Environmental policy knowledge","NGO/government internships"], salary:"₹6–25 LPA" },
  ],
  ENFJ: [
    { career:"Educational Leader / Principal", degree:"M.Ed / MBA Education Leadership", exams:["UGC NET Education","IELTS 7.5+"], requirements:["5+ years teaching","Curriculum innovation","Staff mentoring track record","School improvement projects"], salary:"₹8–30 LPA" },
    { career:"Life Coach / Executive Coach", degree:"Psychology + ICF Coaching Cert", exams:["ICF ACC / PCC Certification"], requirements:["200+ coaching hours","NLP practitioner certification","Business development skills","Client testimonials"], salary:"₹10–50 LPA" },
    { career:"Political Leader / Diplomat", degree:"BA Political Science + MPA / LLB", exams:["UPSC IFS","IELTS 8.0+"], requirements:["Political internships","Public speaking record","International relations knowledge","Language skills (3+ languages)"], salary:"₹7–25 LPA + influence" },
  ],
  ISFP: [
    { career:"Fashion Designer", degree:"B.Des Fashion / NID / NIFT", exams:["NID/NIFT entrance exam","Portfolio review"], requirements:["Design portfolio (10+ pieces)","Sewing and pattern making","Trend forecasting","Brand collaboration experience"], salary:"₹5–30 LPA" },
    { career:"Photographer / Cinematographer", degree:"B.Des Visual Communication", exams:["Portfolio review","IELTS 7.0+"], requirements:["Professional camera mastery","Adobe Lightroom / Premiere Pro","Commercial assignment portfolio","Client base building"], salary:"₹6–40 LPA" },
    { career:"Wildlife Biologist / Conservationist", degree:"B.Sc/M.Sc Zoology / Wildlife", exams:["ICAR / CSIR NET","IFS Exam"], requirements:["Field experience (200+ hours)","Wildlife photography skills","Research publication","Conservation project leadership"], salary:"₹5–20 LPA" },
  ],
};

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════════════════════════════ */
export default function PersonalityTestPage() {
  const [step, setStep]           = useState<Step>("lead_form");
  const [leadData, setLeadData]   = useState<LeadData>({ fullName:"", email:"", phone:"", city:"", age:"", currentClass:"", consent:false, targetCountry:"", targetDegree:"" });
  const [answers, setAnswers]     = useState<Record<number,number>>({});
  const [currentQ, setCurrentQ]   = useState(0);
  const [report, setReport]       = useState<Report | null>(null);
  const [generatingMsg, setGeneratingMsg] = useState(0);
  const [formErrors, setFormErrors] = useState<Record<string,string>>({});
  const [activeTab, setActiveTab] = useState<"universities"|"careers"|"exams"|"profile">("universities");
  const reportRef = useRef<HTMLDivElement>(null);

  const isUpperClass = ["11","12","Graduate","Working Professional"].includes(leadData.currentClass);

  /* Generating messages cycle */
  useEffect(() => {
    if (step !== "generating") return;
    const msgs = [
      "Analysing your personality pattern…",
      "Mapping your MBTI type…",
      "Matching careers to your profile…",
      "Selecting best universities…",
      "Building your roadmap…",
      "Almost ready…",
    ];
    let i = 0;
    const t = setInterval(() => { i = (i+1) % msgs.length; setGeneratingMsg(i); }, 1800);
    return () => clearInterval(t);
  }, [step]);

  /* ── Form validation ── */
  function validateLeadForm(): boolean {
    const e: Record<string,string> = {};
    if (!leadData.fullName.trim())                               e.fullName    = "Required";
    if (!leadData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))   e.email       = "Valid email required";
    if (!leadData.phone.match(/^[0-9+\-\s]{8,15}$/))           e.phone       = "Valid phone required";
    if (!leadData.currentClass)                                  e.currentClass = "Please select your class";
    if (!leadData.consent)                                       e.consent     = "Consent required";
    setFormErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleLeadSubmit() {
    if (!validateLeadForm()) return;
    if (isUpperClass) setStep("country_select");
    else setStep("quiz");
  }

  /* ── Quiz navigation ── */
  function handleAnswer(qId: number, value: number) {
    const updated = { ...answers, [qId]: value };
    setAnswers(updated);
    if (currentQ < TOTAL_QUESTIONS - 1) {
      setTimeout(() => setCurrentQ(q => q + 1), 320);
    } else {
      setStep("generating");
      generateReport(updated);
    }
  }

  /* ── Generate report ── */
  async function generateReport(ans: Record<number,number>) {
    try {
      const res = await fetch("/api/personality-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: ans,
          studentName: leadData.fullName,
          email: leadData.email,
          leadData,
        }),
      });
      const data = await res.json();
      if (data.report) {
        fetch("/api/submit-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ leadData, answers: ans, report: data.report }),
        }).catch(() => {});
        setReport(data.report as Report);
        setStep("report");
        setTimeout(() => reportRef.current?.scrollIntoView({ behavior:"smooth" }), 100);
      }
    } catch {
      setStep("quiz");
      setCurrentQ(TOTAL_QUESTIONS - 1);
    }
  }

  const progress    = Math.round(((currentQ) / TOTAL_QUESTIONS) * 100);
  const q           = PERSONALITY_QUESTIONS[currentQ];
  const mbtiCode    = report?.personalityType ?? "";
  const mbtiData    = MBTI_TYPES.find(t => t.code === mbtiCode) ?? MBTI_TYPES[0];
  const careerReqs  = CAREER_REQUIREMENTS[mbtiCode] ?? [];

  /* ──────────────────────────────────────────────────────────
     RENDER
  ─────────────────────────────────────────────────────────── */
  return (
    <div style={{ minHeight:"100vh", background:"#080B14", color:"white", fontFamily:"'DM Sans', sans-serif" }}>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes shimmer { from{background-position:-200% 0} to{background-position:200% 0} }
        .fade-up { animation: fadeUp .5s ease both; }
        input, select { box-sizing:border-box; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:rgba(255,255,255,.03); }
        ::-webkit-scrollbar-thumb { background:rgba(255,255,255,.15); border-radius:2px; }
        .tab-btn { padding:10px 20px; border-radius:8px; border:1px solid rgba(255,255,255,.1); background:transparent; color:rgba(255,255,255,.5); font-family:'DM Sans',sans-serif; font-size:.82rem; font-weight:600; cursor:pointer; transition:all .2s; white-space:nowrap; }
        .tab-btn:hover { color:white; border-color:rgba(255,255,255,.3); }
        .tab-btn.active { background:rgba(91,138,255,.2); border-color:#5b8aff; color:#5b8aff; }
        .chip-country { padding:14px 12px; border-radius:14px; cursor:pointer; border:2px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); text-align:center; transition:all .2s; }
        .chip-country:hover { border-color:rgba(255,255,255,.2); background:rgba(255,255,255,.06); }
        .chip-country.selected { border-color:#5b8aff; background:rgba(91,138,255,.15); }
        .chip-degree { padding:11px 14px; border-radius:10px; cursor:pointer; border:1.5px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); transition:all .2s; display:flex; align-items:center; gap:8px; }
        .chip-degree:hover { border-color:rgba(255,255,255,.2); }
        .chip-degree.selected { border-color:rgba(212,175,55,.7); background:rgba(212,175,55,.12); }
        .answer-btn { width:100%; padding:16px 20px; border-radius:12px; border:1.5px solid rgba(255,255,255,.1); background:rgba(255,255,255,.03); color:rgba(255,255,255,.8); font-family:'DM Sans',sans-serif; font-size:.92rem; text-align:left; cursor:pointer; transition:all .2s; line-height:1.5; }
        .answer-btn:hover { border-color:rgba(91,138,255,.5); background:rgba(91,138,255,.1); color:white; transform:translateX(4px); }
        .answer-btn.selected { border-color:#5b8aff; background:rgba(91,138,255,.2); color:white; }
      `}</style>

      {/* ════════════════════════════════════════════════════════
          STEP 1 — LEAD FORM
      ════════════════════════════════════════════════════════ */}
      {step === "lead_form" && (
        <div style={{ maxWidth:580, margin:"0 auto", padding:"60px 20px 40px" }} className="fade-up">

          {/* Header */}
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 18px", borderRadius:100, background:"rgba(91,138,255,.12)", border:"1px solid rgba(91,138,255,.25)", color:"#5b8aff", fontSize:".7rem", letterSpacing:".14em", fontWeight:700, textTransform:"uppercase", marginBottom:20 }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#5b8aff",animation:"blink 1.5s infinite" }} />
              AI Personality Assessment · OmniQuest
            </div>
            <h1 style={{ fontFamily:"Syne,sans-serif", fontSize:"clamp(1.8rem,5vw,2.6rem)", fontWeight:900, lineHeight:1.1, marginBottom:14 }}>
              Discover Your<br/>
              <span style={{ background:"linear-gradient(135deg,#5b8aff,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Personality Type
              </span>
            </h1>
            <p style={{ color:"rgba(255,255,255,.5)", fontSize:".95rem", lineHeight:1.75, maxWidth:420, margin:"0 auto" }}>
              18 questions · 5 minutes · Get your MBTI type, career matches, university recommendations and a complete roadmap.
            </p>
          </div>

          {/* MBTI preview grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:36, padding:"16px", background:"rgba(255,255,255,.02)", borderRadius:16, border:"1px solid rgba(255,255,255,.06)" }}>
            {MBTI_TYPES.map(t => (
              <div key={t.code} style={{ textAlign:"center", padding:"8px 4px", borderRadius:8, background:"rgba(255,255,255,.03)" }}>
                <div style={{ fontSize:"1.1rem" }}>{t.emoji}</div>
                <div style={{ fontSize:".58rem", fontWeight:700, color:"rgba(255,255,255,.4)", marginTop:2 }}>{t.code}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.08)", borderRadius:20, padding:"28px 24px" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>

              <div style={{ gridColumn:"1/-1" }}>
                <FormLabel>Full Name *</FormLabel>
                <FormInput error={formErrors.fullName} value={leadData.fullName} placeholder="Your full name"
                  onChange={v => setLeadData(p=>({...p,fullName:v}))} />
                {formErrors.fullName && <ErrMsg>{formErrors.fullName}</ErrMsg>}
              </div>

              <div>
                <FormLabel>Email *</FormLabel>
                <FormInput type="email" error={formErrors.email} value={leadData.email} placeholder="you@example.com"
                  onChange={v => setLeadData(p=>({...p,email:v}))} />
                {formErrors.email && <ErrMsg>{formErrors.email}</ErrMsg>}
              </div>

              <div>
                <FormLabel>Phone *</FormLabel>
                <FormInput type="tel" error={formErrors.phone} value={leadData.phone} placeholder="+91 98765 43210"
                  onChange={v => setLeadData(p=>({...p,phone:v}))} />
                {formErrors.phone && <ErrMsg>{formErrors.phone}</ErrMsg>}
              </div>

              <div>
                <FormLabel>City</FormLabel>
                <FormInput value={leadData.city} placeholder="Delhi, Mumbai…"
                  onChange={v => setLeadData(p=>({...p,city:v}))} />
              </div>

              <div>
                <FormLabel>Age</FormLabel>
                <FormInput type="number" value={leadData.age} placeholder="e.g. 16"
                  onChange={v => setLeadData(p=>({...p,age:v}))} />
              </div>

              <div style={{ gridColumn:"1/-1" }}>
                <FormLabel>Current Class *</FormLabel>
                <select value={leadData.currentClass}
                  onChange={e => setLeadData(p=>({...p,currentClass:e.target.value}))}
                  style={{ width:"100%", padding:"13px 16px", borderRadius:12, background:"rgba(255,255,255,.05)", border:`1.5px solid ${formErrors.currentClass ? "#f87171" : "rgba(255,255,255,.12)"}`, color:"white", fontSize:".9rem", fontFamily:"DM Sans,sans-serif", outline:"none", appearance:"none" as const }}>
                  <option value="" style={{background:"#090d1e"}}>Select your class</option>
                  {CLASS_OPTIONS.map(c => <option key={c} value={c} style={{background:"#090d1e"}}>Class {c}</option>)}
                </select>
                {formErrors.currentClass && <ErrMsg>{formErrors.currentClass}</ErrMsg>}

                {leadData.currentClass && (
                  <div style={{ marginTop:10, padding:"10px 14px", borderRadius:10, background:isUpperClass ? "rgba(91,138,255,.07)" : "rgba(52,211,153,.07)", border:`1px solid ${isUpperClass ? "rgba(91,138,255,.2)" : "rgba(52,211,153,.2)"}` }}>
                    <p style={{ fontSize:".78rem", margin:0, color:isUpperClass ? "#5b8aff" : "#34d399", lineHeight:1.6 }}>
                      {isUpperClass
                        ? "🌍 After the quiz, you can tell us which country and degree you're targeting — we'll suggest specific universities and entrance exams."
                        : "🎓 Based on your quiz results, we'll recommend the ideal stream (Science / Commerce / Arts) for Class 11."}
                    </p>
                  </div>
                )}
              </div>

              <div style={{ gridColumn:"1/-1" }}>
                <label style={{ display:"flex", alignItems:"flex-start", gap:12, cursor:"pointer" }}>
                  <div onClick={() => setLeadData(p=>({...p,consent:!p.consent}))}
                    style={{ width:20, height:20, borderRadius:6, border:`2px solid ${formErrors.consent ? "#f87171" : leadData.consent ? "#00C9B1" : "rgba(255,255,255,.3)"}`, background:leadData.consent ? "rgba(0,201,177,.2)" : "transparent", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2, transition:"all .2s", cursor:"pointer" }}>
                    {leadData.consent && <span style={{color:"#00C9B1",fontWeight:900,fontSize:".75rem"}}>✓</span>}
                  </div>
                  <span style={{ fontSize:".82rem", color:"rgba(255,255,255,.45)", lineHeight:1.65 }}>
                    I consent to OmniQuest contacting me about programs relevant to my profile.
                  </span>
                </label>
                {formErrors.consent && <ErrMsg>{formErrors.consent}</ErrMsg>}
              </div>
            </div>

            <button onClick={handleLeadSubmit}
              style={{ width:"100%", marginTop:24, padding:"15px", borderRadius:12, background:"linear-gradient(135deg,#00C9B1,#2563EB)", border:"none", color:"white", fontSize:"1rem", fontWeight:700, cursor:"pointer", fontFamily:"DM Sans,sans-serif", letterSpacing:".02em" }}>
              {isUpperClass ? "Continue → Choose Target Country" : "Begin My Assessment →"}
            </button>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          STEP 2 — COUNTRY + DEGREE SELECTION
      ════════════════════════════════════════════════════════ */}
      {step === "country_select" && (
        <div style={{ maxWidth:680, margin:"0 auto", padding:"60px 20px 40px" }} className="fade-up">
          <div style={{ textAlign:"center", marginBottom:36 }}>
            <div style={{ fontSize:"2.4rem", marginBottom:14 }}>🌍</div>
            <h2 style={{ fontFamily:"Syne,sans-serif", fontSize:"clamp(1.6rem,4vw,2.2rem)", fontWeight:900, marginBottom:10 }}>
              Where Do You Want to Study?
            </h2>
            <p style={{ color:"rgba(255,255,255,.45)", fontSize:".9rem", lineHeight:1.75, maxWidth:480, margin:"0 auto" }}>
              Select your target country and degree area. We'll match you with specific universities and entrance exams.
              <span style={{ display:"block", marginTop:6, color:"rgba(255,255,255,.3)" }}>
                ✦ Skip if unsure — we'll suggest based on your personality type.
              </span>
            </p>
          </div>

          {/* Country grid */}
          <div style={{ marginBottom:32 }}>
            <p style={{ fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:14 }}>
              Target Country <span style={{ fontWeight:400, color:"rgba(255,255,255,.2)", textTransform:"none", letterSpacing:0 }}>— optional</span>
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10 }}>
              {COUNTRY_OPTIONS.map(c => (
                <div key={c.value}
                  className={`chip-country${leadData.targetCountry===c.value ? " selected" : ""}`}
                  onClick={() => setLeadData(p=>({...p, targetCountry: p.targetCountry===c.value ? "" : c.value}))}>
                  <div style={{ fontSize:"1.8rem", marginBottom:6 }}>{c.flag}</div>
                  <div style={{ fontSize:".75rem", fontWeight:700, color:leadData.targetCountry===c.value ? "#5b8aff" : "rgba(255,255,255,.75)" }}>{c.label}</div>
                  <div style={{ fontSize:".62rem", color:"rgba(255,255,255,.3)", marginTop:3, lineHeight:1.3 }}>{c.unis}</div>
                </div>
              ))}
            </div>
            {leadData.targetCountry && (
              <p style={{ marginTop:10, fontSize:".76rem", color:"#34d399" }}>
                ✓ {COUNTRY_OPTIONS.find(c=>c.value===leadData.targetCountry)?.label} selected — we'll prioritise universities and exams for this country.
              </p>
            )}
          </div>

          {/* Degree grid */}
          <div style={{ marginBottom:32 }}>
            <p style={{ fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:14 }}>
              Area of Interest / Degree <span style={{ fontWeight:400, color:"rgba(255,255,255,.2)", textTransform:"none", letterSpacing:0 }}>— optional</span>
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:8 }}>
              {DEGREE_OPTIONS.map(d => (
                <div key={d.value}
                  className={`chip-degree${leadData.targetDegree===d.value ? " selected" : ""}`}
                  onClick={() => setLeadData(p=>({...p, targetDegree: p.targetDegree===d.value ? "" : d.value}))}>
                  <span style={{ fontSize:"1.1rem" }}>{d.icon}</span>
                  <span style={{ fontSize:".84rem", fontWeight:500, color:leadData.targetDegree===d.value ? "#d4af37" : "rgba(255,255,255,.75)" }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {!leadData.targetCountry && !leadData.targetDegree && (
            <div style={{ padding:"14px 18px", borderRadius:12, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", marginBottom:24 }}>
              <p style={{ fontSize:".8rem", color:"rgba(255,255,255,.4)", lineHeight:1.65, margin:0 }}>
                💡 <strong style={{color:"rgba(255,255,255,.6)"}}>No selections?</strong> That's completely fine! Our AI will suggest the best universities across USA, UK, Canada, Australia and Singapore based entirely on your personality type.
              </p>
            </div>
          )}

          <div style={{ display:"flex", gap:12 }}>
            <button onClick={() => setStep("lead_form")}
              style={{ padding:"14px 24px", borderRadius:12, background:"transparent", border:"1px solid rgba(255,255,255,.15)", color:"rgba(255,255,255,.6)", fontSize:".9rem", cursor:"pointer", fontFamily:"DM Sans,sans-serif" }}>
              ← Back
            </button>
            <button onClick={() => setStep("quiz")} style={{ flex:1, padding:"14px", borderRadius:12, background:"linear-gradient(135deg,#00C9B1,#2563EB)", border:"none", color:"white", fontSize:"1rem", fontWeight:700, cursor:"pointer", fontFamily:"DM Sans,sans-serif" }}>
              {leadData.targetCountry || leadData.targetDegree ? "Continue to Quiz →" : "Skip & Start Quiz →"}
            </button>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          STEP 3 — QUIZ
      ════════════════════════════════════════════════════════ */}
      {step === "quiz" && q && (
        <div style={{ maxWidth:620, margin:"0 auto", padding:"40px 20px" }}>

          {/* Progress */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
              <span style={{ fontSize:".75rem", fontWeight:600, color:"rgba(255,255,255,.4)", letterSpacing:".08em" }}>
                QUESTION {currentQ + 1} / {TOTAL_QUESTIONS}
              </span>
              <span style={{ fontSize:".75rem", fontWeight:700, color:"#5b8aff" }}>{progress}%</span>
            </div>
            <div style={{ height:4, background:"rgba(255,255,255,.08)", borderRadius:99, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${progress}%`, background:"linear-gradient(90deg,#5b8aff,#a78bfa)", borderRadius:99, transition:"width .4s ease" }} />
            </div>
          </div>

          {/* Question card */}
          <div key={q.id} style={{ animation:"fadeUp .35s ease both" }}>
            <div style={{ display:"inline-flex", padding:"4px 12px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", fontSize:".68rem", fontWeight:700, color:"#5b8aff", textTransform:"uppercase", letterSpacing:".1em", marginBottom:20 }}>
              {q.category}
            </div>

            <h2 style={{ fontFamily:"Syne,sans-serif", fontSize:"clamp(1.1rem,3vw,1.5rem)", fontWeight:800, lineHeight:1.35, marginBottom:28, color:"white" }}>
              {q.text}
            </h2>

            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {q.options.map((opt, i) => (
                <button key={i}
                  className={`answer-btn${answers[q.id] === opt.value ? " selected" : ""}`}
                  onClick={() => handleAnswer(q.id, opt.value)}>
                  <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:26, height:26, borderRadius:8, background:"rgba(255,255,255,.06)", fontSize:".72rem", fontWeight:700, color:"rgba(255,255,255,.4)", marginRight:12, flexShrink:0 }}>
                    {["A","B","C","D"][i]}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {currentQ > 0 && (
            <button onClick={() => setCurrentQ(q => q-1)} style={{ marginTop:20, background:"transparent", border:"none", color:"rgba(255,255,255,.3)", cursor:"pointer", fontSize:".82rem", fontFamily:"DM Sans,sans-serif" }}>
              ← Previous question
            </button>
          )}
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          STEP 4 — GENERATING
      ════════════════════════════════════════════════════════ */}
      {step === "generating" && (
        <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 20px" }}>
          <div style={{ textAlign:"center", maxWidth:400 }}>
            <div style={{ width:72, height:72, borderRadius:"50%", border:"3px solid rgba(255,255,255,.08)", borderTop:"3px solid #5b8aff", animation:"spin 1s linear infinite", margin:"0 auto 28px" }} />
            <h2 style={{ fontFamily:"Syne,sans-serif", fontSize:"1.4rem", fontWeight:800, marginBottom:12, color:"white" }}>
              Analysing Your Profile
            </h2>
            <div style={{ padding:"14px 20px", borderRadius:12, background:"rgba(91,138,255,.08)", border:"1px solid rgba(91,138,255,.15)", minHeight:52, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <p style={{ fontSize:".88rem", color:"rgba(91,138,255,.9)", margin:0, animation:"pulse 1.8s infinite" }}>
                {["Analysing your personality pattern…","Mapping your MBTI type…","Matching careers to your profile…","Selecting best universities…","Building your roadmap…","Almost ready…"][generatingMsg]}
              </p>
            </div>
            <div style={{ marginTop:28, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6 }}>
              {MBTI_TYPES.map((t,i) => (
                <div key={t.code} style={{ padding:"8px 4px", borderRadius:8, background:"rgba(255,255,255,.03)", textAlign:"center", animation:`pulse ${1.5 + i*0.1}s infinite` }}>
                  <div style={{ fontSize:".9rem" }}>{t.emoji}</div>
                  <div style={{ fontSize:".55rem", fontWeight:700, color:"rgba(255,255,255,.3)", marginTop:2 }}>{t.code}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          STEP 5 — REPORT
      ════════════════════════════════════════════════════════ */}
      {step === "report" && report && (
        <div ref={reportRef} style={{ maxWidth:800, margin:"0 auto", padding:"40px 20px 60px" }} className="fade-up">

          {/* ── PERSONALITY TYPE HERO ── */}
          <div style={{ textAlign:"center", marginBottom:36, padding:"40px 24px", background:"linear-gradient(135deg,rgba(15,18,40,.95),rgba(12,15,35,.95))", borderRadius:24, border:`1.5px solid ${mbtiData.color}30`, boxShadow:`0 0 80px ${mbtiData.color}14` }}>

            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 18px", borderRadius:100, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.25)", color:"#5b8aff", fontSize:".68rem", letterSpacing:".14em", fontWeight:700, textTransform:"uppercase", marginBottom:20 }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#5b8aff",animation:"blink 1.5s infinite" }} />
              AI Career Intelligence Report · OmniQuest
            </div>

            <h1 style={{ fontFamily:"Syne,sans-serif", fontSize:"clamp(1.6rem,4vw,2.4rem)", fontWeight:900, marginBottom:20 }}>
              {report.studentName}
            </h1>

            {/* Big MBTI card */}
            <div style={{ display:"inline-block", padding:"32px 40px 28px", background:"rgba(255,255,255,.03)", border:`2px solid ${mbtiData.color}40`, borderRadius:20, marginBottom:20, boxShadow:`0 0 40px ${mbtiData.color}18` }}>
              <div style={{ fontSize:"3.5rem", marginBottom:12, filter:`drop-shadow(0 0 20px ${mbtiData.color}80)` }}>{mbtiData.emoji}</div>
              <div style={{ fontFamily:"Syne,sans-serif", fontSize:"clamp(1.1rem,3vw,1.8rem)", fontWeight:900, letterSpacing:".06em", background:mbtiData.gradient, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:6 }}>
                {mbtiData.fullLabel}
              </div>
              <p style={{ fontSize:".88rem", fontStyle:"italic", color:`${mbtiData.color}bb`, marginBottom:16, lineHeight:1.5 }}>
                "{report.tagline}"
              </p>
              <p style={{ fontSize:".82rem", color:"rgba(255,255,255,.55)", lineHeight:1.7, maxWidth:380, margin:"0 auto 18px" }}>
                {mbtiData.description}
              </p>
              <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
                {mbtiData.strengths.map((s: string) => (
                  <span key={s} style={{ padding:"4px 14px", borderRadius:50, background:`${mbtiData.color}18`, border:`1px solid ${mbtiData.color}40`, fontSize:".7rem", fontWeight:700, color:mbtiData.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Score ring */}
            <div style={{ display:"flex", justifyContent:"center", marginBottom:8 }}>
              <svg width={140} height={140} viewBox="0 0 140 140">
                {(() => {
                  const r = 54, circ = 2*Math.PI*r, score = report.overallScore;
                  const dash = (score/100)*circ;
                  const sc = score>=80?"#34d399":score>=60?"#5b8aff":"#fb923c";
                  return (
                    <>
                      <circle cx={70} cy={70} r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth={10}/>
                      <circle cx={70} cy={70} r={r} fill="none" stroke={sc} strokeWidth={10} strokeLinecap="round"
                        strokeDasharray={`${dash} ${circ-dash}`} strokeDashoffset={circ/4}
                        style={{filter:`drop-shadow(0 0 8px ${sc}88)`,transition:"stroke-dasharray 1.4s ease"}}/>
                      <text x={70} y={66} textAnchor="middle" fill={sc} fontFamily="Syne,sans-serif" fontSize="24" fontWeight="900">{score}</text>
                      <text x={70} y={84} textAnchor="middle" fill="rgba(255,255,255,.35)" fontFamily="DM Sans,sans-serif" fontSize="10">/100</text>
                    </>
                  );
                })()}
              </svg>
            </div>
            <div style={{ fontSize:".7rem", color:"rgba(255,255,255,.35)", letterSpacing:".1em", textTransform:"uppercase" }}>Overall Readiness Score</div>
          </div>

          {/* ── DIMENSION SCORES ── */}
          <Section icon="📊" title="Dimension Breakdown">
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:12 }}>
              {report.categories.map((cat: ReportCategory) => (
                <div key={cat.name} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, padding:16 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                    <div>
                      <div style={{ fontFamily:"Syne,sans-serif", fontSize:".9rem", fontWeight:700 }}>{cat.name}</div>
                      <div style={{ fontSize:".65rem", color:"rgba(255,255,255,.35)", marginTop:1 }}>{cat.label}</div>
                    </div>
                    <div style={{ fontFamily:"Syne,sans-serif", fontSize:"1.3rem", fontWeight:900, color:cat.color }}>{cat.percentage}%</div>
                  </div>
                  <div style={{ height:5, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden", marginBottom:10 }}>
                    <div style={{ height:"100%", width:`${cat.percentage}%`, background:cat.color, borderRadius:99, boxShadow:`0 0 8px ${cat.color}66` }} />
                  </div>
                  <p style={{ fontSize:".74rem", color:"rgba(255,255,255,.45)", lineHeight:1.6, margin:0 }}>{cat.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── STREAM RECOMMENDATION (Class 8–10) ── */}
          {report.streamRecommendation && (
            <Section icon="🏫" title="Recommended Stream for Class 11">
              {(() => {
                const sr: StreamRecommendation = report.streamRecommendation!;
                const streamIcons: Record<string,string> = {
                  "Science (PCM)":"⚙️",
                  "Science (PCB)":"🧬",
                  "Commerce":"📈",
                  "Arts / Humanities":"🎭",
                  "Vocational / Design":"🎨",
                };
                const confColor = sr.confidence>=80?"#34d399":sr.confidence>=60?"#5b8aff":"#fb923c";
                return (
                  <div>
                    <div style={{ display:"flex", gap:16, alignItems:"flex-start", flexWrap:"wrap", marginBottom:20 }}>
                      <div style={{ padding:"24px", background:"rgba(212,175,55,.12)", border:"2px solid rgba(212,175,55,.35)", borderRadius:16, textAlign:"center", minWidth:120, flexShrink:0 }}>
                        <div style={{ fontSize:"2.4rem" }}>{streamIcons[sr.primary] ?? "🎓"}</div>
                        <div style={{ fontFamily:"Syne,sans-serif", fontSize:".82rem", fontWeight:800, color:"#d4af37", marginTop:6 }}>{sr.primary}</div>
                        <div style={{ fontSize:".6rem", color:"rgba(255,255,255,.4)", textTransform:"uppercase", letterSpacing:".08em" }}>Recommended</div>
                      </div>
                      <div style={{ flex:1, minWidth:200 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                          <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.4)" }}>Confidence Match</span>
                          <span style={{ fontFamily:"Syne,sans-serif", fontSize:".95rem", fontWeight:800, color:confColor }}>{sr.confidence}%</span>
                        </div>
                        <div style={{ height:5, background:"rgba(255,255,255,.07)", borderRadius:99, overflow:"hidden", marginBottom:12 }}>
                          <div style={{ height:"100%", width:`${sr.confidence}%`, background:confColor, borderRadius:99 }} />
                        </div>
                        <p style={{ fontSize:".82rem", color:"rgba(255,255,255,.6)", lineHeight:1.7, margin:0 }}>{sr.reasoning}</p>
                      </div>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                      <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:14 }}>
                        <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(255,255,255,.4)", textTransform:"uppercase", marginBottom:10 }}>Core Subjects</div>
                        {sr.subjects.map((s, i) => (
                          <div key={i} style={{display:"flex",gap:8,alignItems:"center",marginBottom:6}}>
                            <span style={{width:5,height:5,borderRadius:"50%",background:"#d4af37",flexShrink:0}}/>
                            <span style={{fontSize:".8rem",color:"rgba(255,255,255,.7)"}}>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:14 }}>
                        <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(255,255,255,.4)", textTransform:"uppercase", marginBottom:10 }}>Career Paths</div>
                        {sr.careerPathsFromStream.map((p, i) => (
                          <div key={i} style={{display:"flex",gap:8,alignItems:"center",marginBottom:6}}>
                            <span style={{color:"#00C9B1",fontSize:".75rem"}}>→</span>
                            <span style={{fontSize:".8rem",color:"rgba(255,255,255,.7)"}}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Section>
          )}

          {/* ── TABBED SECTION ── */}
          <Section icon="🎯" title="Your Personalised Roadmap">

            {/* Tab bar */}
            <div style={{ display:"flex", gap:8, marginBottom:24, overflowX:"auto", paddingBottom:4 }}>
              {([
                { key:"universities", label:"🏛 Universities" },
                { key:"careers",      label:"💼 Careers & Requirements" },
                { key:"exams",        label:"📝 Entrance Exams" },
                { key:"profile",      label:"🏗 Profile Building" },
              ] as const).map(t => (
                <button key={t.key} className={`tab-btn${activeTab===t.key?" active":""}`} onClick={()=>setActiveTab(t.key)}>{t.label}</button>
              ))}
            </div>

            {/* Tab: Universities */}
            {activeTab === "universities" && (
              <div style={{ animation:"fadeUp .3s ease both" }}>
                {!leadData.targetCountry && !leadData.targetDegree && (
                  <div style={{ padding:"12px 16px", borderRadius:10, background:"rgba(212,175,55,.07)", border:"1px solid rgba(212,175,55,.2)", marginBottom:20 }}>
                    <p style={{ fontSize:".78rem", color:"rgba(212,175,55,.9)", margin:0, lineHeight:1.6 }}>
                      ✨ <strong>Personality-matched universities</strong> — Since you didn't specify a country, these are selected based on your <strong>{mbtiData.fullLabel}</strong> personality type across USA, UK, Canada, Australia & Singapore.
                    </p>
                  </div>
                )}
                {leadData.targetCountry && (
                  <div style={{ padding:"12px 16px", borderRadius:10, background:"rgba(91,138,255,.07)", border:"1px solid rgba(91,138,255,.2)", marginBottom:20 }}>
                    <p style={{ fontSize:".78rem", color:"rgba(91,138,255,.9)", margin:0 }}>
                      🎯 Universities ranked by best fit for <strong>{mbtiData.fullLabel}</strong> {leadData.targetDegree ? `studying ${leadData.targetDegree}` : ""} in <strong>{leadData.targetCountry}</strong>
                    </p>
                  </div>
                )}
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {report.universities.map((u: ReportUniversity, i: number) => (
                    <a key={i} href={u.website} target="_blank" rel="noopener noreferrer" style={{ display:"block", textDecoration:"none", color:"inherit" }}>
                      <div
                        style={{ display:"flex", gap:0, borderRadius:14, overflow:"hidden", border:`1px solid ${i===0?"rgba(91,138,255,.4)":"rgba(255,255,255,.07)"}`, background:i===0?"rgba(91,138,255,.06)":"rgba(255,255,255,.02)", transition:"all .2s", cursor:"pointer" }}
                        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(91,138,255,.5)";(e.currentTarget as HTMLElement).style.transform="translateX(4px)";}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=i===0?"rgba(91,138,255,.4)":"rgba(255,255,255,.07)";(e.currentTarget as HTMLElement).style.transform="none";}}>
                        {/* Rank */}
                        <div style={{ width:44, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:i===0?"#5b8aff":"rgba(255,255,255,.04)", borderRight:"1px solid rgba(255,255,255,.06)" }}>
                          <span style={{ fontFamily:"Syne,sans-serif", fontSize:i===0?"1.1rem":".9rem", fontWeight:900, color:i===0?"white":"rgba(255,255,255,.3)" }}>#{i+1}</span>
                        </div>
                        <div style={{ flex:1, padding:"14px 16px" }}>
                          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:10, marginBottom:8, flexWrap:"wrap" }}>
                            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                              <span style={{ fontSize:"1.4rem" }}>{u.flag}</span>
                              <div>
                                <div style={{ fontFamily:"Syne,sans-serif", fontSize:".95rem", fontWeight:800, color:"white" }}>{u.name}</div>
                                <div style={{ fontSize:".65rem", color:"rgba(255,255,255,.35)" }}>{u.country} · {u.ranking}</div>
                              </div>
                            </div>
                            <div style={{ display:"flex", gap:6 }}>
                              {i===0 && <span style={{padding:"2px 8px",borderRadius:50,background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",fontSize:".6rem",fontWeight:700,color:"#d4af37"}}>⭐ Best Fit</span>}
                              <span style={{padding:"2px 8px",borderRadius:50,background:"rgba(91,138,255,.1)",border:"1px solid rgba(91,138,255,.25)",fontSize:".6rem",fontWeight:700,color:"#5b8aff"}}>{u.region}</span>
                            </div>
                          </div>
                          <div style={{ fontSize:".75rem", color:"rgba(255,255,255,.5)", padding:"3px 10px", background:"rgba(255,255,255,.04)", borderRadius:6, display:"inline-block", marginBottom:6 }}>{u.program}</div>
                          {u.tuitionRange && <div style={{fontSize:".7rem",color:"#fb923c",fontWeight:600,marginBottom:6}}>💸 {u.tuitionRange}</div>}
                          {u.whyForYou && <p style={{fontSize:".75rem",color:"rgba(255,255,255,.5)",fontStyle:"italic",lineHeight:1.6,marginBottom:8}}>{u.whyForYou}</p>}
                          {u.requiredExams?.length > 0 && (
                            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                              <span style={{fontSize:".62rem",color:"rgba(255,255,255,.3)",alignSelf:"center"}}>Requires:</span>
                              {u.requiredExams.map((ex: string, j: number) => (
                                <span key={j} style={{padding:"2px 8px",borderRadius:50,background:"rgba(52,211,153,.08)",border:"1px solid rgba(52,211,153,.2)",fontSize:".62rem",fontWeight:600,color:"#34d399"}}>{ex}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Careers + Requirements */}
            {activeTab === "careers" && (
              <div style={{ animation:"fadeUp .3s ease both" }}>
                {/* AI career matches */}
                <div style={{ marginBottom:28 }}>
                  <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#5b8aff", textTransform:"uppercase", marginBottom:14 }}>AI-Matched Careers for {mbtiData.fullLabel}</div>
                  {report.careerMatches.map((c: ReportCareerMatch, i: number) => (
                    <div key={i} style={{ background:"rgba(255,255,255,.03)", border:`1px solid ${i===0?"rgba(91,138,255,.3)":"rgba(255,255,255,.07)"}`, borderRadius:14, padding:"14px 16px", marginBottom:10 }}>
                      <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                        <div style={{ width:42, height:42, borderRadius:10, background:"rgba(91,138,255,.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", flexShrink:0 }}>{c.icon}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4, flexWrap:"wrap", gap:8 }}>
                            <span style={{ fontFamily:"Syne,sans-serif", fontSize:".95rem", fontWeight:800 }}>{c.title}</span>
                            <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                              <span style={{ fontFamily:"Syne,sans-serif", fontSize:"1.1rem", fontWeight:900, color:i===0?"#5b8aff":i===1?"#00C9B1":"rgba(255,255,255,.4)" }}>{c.fit}%</span>
                              <span style={{ fontSize:".7rem", fontWeight:700, color:"#34d399" }}>{c.salaryRange}</span>
                            </div>
                          </div>
                          <div style={{ height:3, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden", marginBottom:8 }}>
                            <div style={{ height:"100%", width:`${c.fit}%`, background:i===0?"linear-gradient(90deg,#5b8aff,#a78bfa)":"linear-gradient(90deg,#00C9B1,#2563EB)", borderRadius:99 }} />
                          </div>
                          <p style={{ fontSize:".78rem", color:"rgba(255,255,255,.5)", marginBottom:8 }}>{c.description}</p>
                          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                            {c.primarySkills.map((sk: string, j: number) => (
                              <span key={j} style={{padding:"2px 10px",borderRadius:50,background:"rgba(91,138,255,.08)",border:"1px solid rgba(91,138,255,.15)",fontSize:".65rem",color:"#5b8aff",fontWeight:600}}>{sk}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Career requirements from hardcoded data */}
                {careerReqs.length > 0 && (
                  <div>
                    <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:14 }}>
                      What You Need to Achieve These Careers
                    </div>
                    {careerReqs.map((cr: CareerRequirement, i: number) => (
                      <div key={i} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, padding:"18px 18px", marginBottom:12 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:14 }}>
                          <div>
                            <div style={{ fontFamily:"Syne,sans-serif", fontSize:"1rem", fontWeight:800, color:"white", marginBottom:3 }}>{cr.career}</div>
                            <div style={{ fontSize:".75rem", color:"rgba(255,255,255,.4)" }}>Degree: <span style={{color:"#d4af37",fontWeight:600}}>{cr.degree}</span></div>
                          </div>
                          <span style={{ fontFamily:"Syne,sans-serif", fontSize:".88rem", fontWeight:800, color:"#34d399" }}>{cr.salary}</span>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                          <div style={{ background:"rgba(255,255,255,.03)", borderRadius:10, padding:"12px 14px" }}>
                            <div style={{ fontSize:".62rem", fontWeight:700, letterSpacing:".1em", color:"rgba(255,255,255,.4)", textTransform:"uppercase", marginBottom:10 }}>✦ Requirements</div>
                            {cr.requirements.map((r: string, j: number) => (
                              <div key={j} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:7 }}>
                                <span style={{ color:"#34d399", fontSize:".7rem", flexShrink:0, marginTop:1 }}>✓</span>
                                <span style={{ fontSize:".78rem", color:"rgba(255,255,255,.65)", lineHeight:1.5 }}>{r}</span>
                              </div>
                            ))}
                          </div>
                          <div style={{ background:"rgba(212,175,55,.04)", border:"1px solid rgba(212,175,55,.12)", borderRadius:10, padding:"12px 14px" }}>
                            <div style={{ fontSize:".62rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:10 }}>📝 Exams Needed</div>
                            {cr.exams.map((ex: string, j: number) => (
                              <div key={j} style={{ display:"flex", gap:8, alignItems:"center", marginBottom:7 }}>
                                <span style={{ color:"#d4af37", fontSize:".7rem", flexShrink:0 }}>◆</span>
                                <span style={{ fontSize:".78rem", color:"rgba(212,175,55,.9)", fontWeight:600, lineHeight:1.5 }}>{ex}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab: Entrance Exams */}
            {activeTab === "exams" && (
              <div style={{ animation:"fadeUp .3s ease both" }}>
                {report.recommendedExams.map((ex: ReportExam, i: number) => {
                  const pc = ex.priority==="Essential"?"#34d399":ex.priority==="High"?"#5b8aff":"#fb923c";
                  const clcMap: Record<string,string> = {
                    "Class 9–10":"#34d399","Class 11":"#5b8aff","Class 11–12":"#5b8aff","Class 12":"#fb923c","Post Class 12":"#a78bfa"
                  };
                  const clc = clcMap[ex.classLevel] ?? "#5b8aff";
                  return (
                    <div key={i} style={{ padding:"18px 20px", borderRadius:14, background:"rgba(255,255,255,.03)", border:`1px solid ${ex.priority==="Essential"?"rgba(52,211,153,.2)":"rgba(255,255,255,.06)"}`, marginBottom:12 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:10, marginBottom:8 }}>
                        <div>
                          <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginBottom:3 }}>
                            <span style={{ fontFamily:"Syne,sans-serif", fontSize:"1.05rem", fontWeight:800, color:"white" }}>{ex.title}</span>
                            <span style={{ padding:"2px 10px", borderRadius:50, background:`${clc}18`, border:`1px solid ${clc}35`, fontSize:".62rem", fontWeight:700, color:clc }}>📅 {ex.classLevel}</span>
                            <span style={{ padding:"2px 10px", borderRadius:50, background:"rgba(251,146,60,.08)", border:"1px solid rgba(251,146,60,.18)", fontSize:".62rem", color:"#fb923c", fontWeight:600 }}>⏱ {ex.preparationTime}</span>
                          </div>
                          {ex.fullForm && <div style={{ fontSize:".72rem", color:"rgba(255,255,255,.35)", fontStyle:"italic" }}>{ex.fullForm}</div>}
                        </div>
                        <div style={{ display:"flex", gap:8 }}>
                          <span style={{ padding:"3px 12px", borderRadius:50, border:`1px solid ${pc}`, color:pc, fontSize:".65rem", fontWeight:700 }}>{ex.priority}</span>
                          {ex.link && <a href={ex.link} target="_blank" rel="noopener noreferrer" style={{ padding:"3px 10px", borderRadius:8, background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.2)", color:"#d4af37", fontSize:".65rem", fontWeight:600, textDecoration:"none" }}>Learn →</a>}
                        </div>
                      </div>
                      <p style={{ fontSize:".8rem", color:"rgba(255,255,255,.5)", lineHeight:1.65, marginBottom:10 }}>{ex.description}</p>
                      <div style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"10px 14px", borderRadius:10, background:"rgba(91,138,255,.07)", border:"1px solid rgba(91,138,255,.15)", marginBottom:8 }}>
                        <span style={{ color:"#5b8aff", flexShrink:0 }}>🤖</span>
                        <p style={{ fontSize:".78rem", color:"rgba(91,138,255,.9)", lineHeight:1.6, margin:0 }}><strong>Why this exam for you: </strong>{ex.whyForYou}</p>
                      </div>
                      <div style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"8px 14px", borderRadius:10, background:"rgba(52,211,153,.06)", border:"1px solid rgba(52,211,153,.12)" }}>
                        <span style={{ color:"#34d399", flexShrink:0 }}>✓</span>
                        <p style={{ fontSize:".76rem", color:"rgba(52,211,153,.8)", lineHeight:1.55, margin:0 }}>{ex.benefit}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab: Profile Building */}
            {activeTab === "profile" && report.profileBuildingBenefits && (
              <div style={{ animation:"fadeUp .3s ease both" }}>
                {(() => {
                  const pb: ProfileBuildingBenefits = report.profileBuildingBenefits!;
                  return (
                    <>
                      <p style={{ fontSize:".86rem", color:"rgba(255,255,255,.6)", lineHeight:1.8, marginBottom:20 }}>{pb.overview}</p>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:10, marginBottom:24 }}>
                        {pb.keyBenefits.map((b: ProfileBenefit, i: number) => (
                          <div key={i} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"14px 16px" }}>
                            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                              <span style={{ fontSize:"1.3rem" }}>{b.icon}</span>
                              <span style={{ fontFamily:"Syne,sans-serif", fontSize:".85rem", fontWeight:700, color:"white" }}>{b.title}</span>
                            </div>
                            <p style={{ fontSize:".76rem", color:"rgba(255,255,255,.5)", lineHeight:1.65, margin:0 }}>{b.description}</p>
                          </div>
                        ))}
                      </div>
                      {/* Timeline */}
                      <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:14 }}>📅 Your Action Timeline</div>
                      {pb.timelineByClass.map((stage: TimelineStage, i: number) => {
                        const clcMap: Record<string,string> = {
                          "Class 11":"#5b8aff","Class 12":"#fb923c","Post Class 12":"#a78bfa","Class 9–10":"#34d399","Class 10":"#34d399"
                        };
                        const clc = clcMap[stage.classLevel] ?? "#5b8aff";
                        return (
                          <div key={i} style={{ display:"flex", gap:0, marginBottom:0 }}>
                            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:44, flexShrink:0 }}>
                              <div style={{ width:12, height:12, borderRadius:"50%", background:clc, border:"3px solid rgba(255,255,255,.12)", marginTop:16, zIndex:1, boxShadow:`0 0 10px ${clc}66`, flexShrink:0 }} />
                              {i < pb.timelineByClass.length - 1 && <div style={{ flex:1, width:2, background:"rgba(255,255,255,.07)", minHeight:40 }} />}
                            </div>
                            <div style={{ flex:1, paddingBottom:18 }}>
                              <div style={{ display:"inline-flex", padding:"3px 12px", borderRadius:50, background:`${clc}18`, border:`1px solid ${clc}35`, fontSize:".68rem", fontWeight:700, color:clc, marginBottom:8, marginTop:12 }}>{stage.classLevel}</div>
                              <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:10, padding:"12px 14px" }}>
                                {stage.actions.map((a: string, j: number) => (
                                  <div key={j} style={{ display:"flex", gap:8, marginBottom:j<stage.actions.length-1?7:0 }}>
                                    <span style={{ color:clc, fontSize:".72rem", flexShrink:0, marginTop:2 }}>✦</span>
                                    <span style={{ fontSize:".78rem", color:"rgba(255,255,255,.65)", lineHeight:1.55 }}>{a}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div style={{ marginTop:16, padding:"16px 20px", borderRadius:12, background:"linear-gradient(135deg,rgba(212,175,55,.1),rgba(212,175,55,.03))", border:"1px solid rgba(212,175,55,.25)" }}>
                        <p style={{ fontSize:".84rem", color:"rgba(255,255,255,.65)", lineHeight:1.8, margin:0 }}>{pb.whyItMatters}</p>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </Section>

          {/* ── AI INSIGHT ── */}
          <Section icon="🤖" title="AI Counsellor Insight">
            <div style={{ padding:"18px 20px", borderRadius:12, background:"linear-gradient(135deg,rgba(91,138,255,.08),rgba(167,139,250,.06))", border:"1px solid rgba(91,138,255,.2)" }}>
              <p style={{ fontSize:".9rem", color:"rgba(255,255,255,.78)", lineHeight:1.85, margin:0 }}>{report.aiInsight}</p>
            </div>
          </Section>

          {/* ── SCHOLARSHIPS ── */}
          <Section icon="🎖️" title="Scholarship Opportunities">
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {report.scholarships.map((s: ReportScholarship, i: number) => (
                <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"14px 16px", borderRadius:12, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)" }}>
                  <div style={{ width:30, height:30, borderRadius:"50%", background:"rgba(212,175,55,.12)", border:"1px solid rgba(212,175,55,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Syne,sans-serif", fontWeight:900, fontSize:".78rem", color:"#d4af37", flexShrink:0 }}>{i+1}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:6, marginBottom:4 }}>
                      <span style={{ fontFamily:"Syne,sans-serif", fontSize:".88rem", fontWeight:700, color:"white" }}>{s.name}</span>
                      <span style={{ fontFamily:"Syne,sans-serif", fontSize:".82rem", fontWeight:800, color:"#34d399" }}>{s.amount}</span>
                    </div>
                    <div style={{ fontSize:".72rem", color:"rgba(255,255,255,.4)", marginBottom:3 }}>{s.country} · {s.eligibility}</div>
                    <div style={{ display:"flex", gap:12 }}>
                      <span style={{ fontSize:".68rem", color:"rgba(255,255,255,.3)" }}>📅 {s.deadline}</span>
                      {s.link && <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ fontSize:".68rem", color:"#5b8aff", fontWeight:600, textDecoration:"none" }}>Apply →</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── CTA ── */}
          <div style={{ background:"linear-gradient(135deg,#0B1C3D,#102454)", borderRadius:20, padding:"32px 24px", textAlign:"center", border:"1px solid rgba(0,201,177,.2)", marginTop:8 }}>
            <div style={{ fontSize:".7rem", color:"#00C9B1", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", marginBottom:10 }}>🎯 {report.programRecommendation}</div>
            <h3 style={{ fontFamily:"Syne,sans-serif", fontSize:"1.2rem", fontWeight:900, marginBottom:8 }}>Ready to Build Your Global Future?</h3>
            <p style={{ color:"rgba(255,255,255,.4)", fontSize:".84rem", marginBottom:22 }}>Personalised guidance matched to your {mbtiData.fullLabel} profile.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="https://eduquest.org.in/contact-us/" style={{ padding:"12px 26px", borderRadius:50, background:"linear-gradient(135deg,#00C9B1,#2563EB)", color:"white", fontWeight:700, fontSize:".88rem", textDecoration:"none", boxShadow:"0 6px 24px rgba(0,201,177,.3)" }}>
                📅 Book Free Counselling
              </a>
              <button onClick={()=>{setStep("lead_form");setAnswers({});setCurrentQ(0);setReport(null);}} style={{ padding:"12px 22px", borderRadius:50, background:"rgba(255,255,255,.07)", border:"1.5px solid rgba(255,255,255,.2)", color:"rgba(255,255,255,.8)", fontSize:".88rem", cursor:"pointer", fontFamily:"DM Sans,sans-serif" }}>
                🔄 Retake Test
              </button>
            </div>
          </div>

          {/* Admin contact */}
          {report.adminContact && (
            <div style={{ textAlign:"center", padding:"24px", background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.06)", borderRadius:16, marginTop:14 }}>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".12em", color:"rgba(255,255,255,.35)", textTransform:"uppercase", marginBottom:12 }}>Get in Touch</div>
              <div style={{ fontFamily:"Syne,sans-serif", fontSize:".95rem", fontWeight:700, marginBottom:14 }}>{report.adminContact.name}</div>
              <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                <a href={`mailto:${report.adminContact.email}`} style={{ padding:"9px 18px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", color:"#5b8aff", fontSize:".82rem", fontWeight:600, textDecoration:"none" }}>
                  ✉ {report.adminContact.email}
                </a>
                <a href={`tel:${report.adminContact.phone.replace(/\s/g,"")}`} style={{ padding:"9px 18px", borderRadius:50, background:"rgba(52,211,153,.1)", border:"1px solid rgba(52,211,153,.2)", color:"#34d399", fontSize:".82rem", fontWeight:600, textDecoration:"none" }}>
                  📞 {report.adminContact.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Small helper components ── */
function Section({ icon, title, children }: { icon:string; title:string; children:React.ReactNode }) {
  return (
    <div style={{ background:"rgba(255,255,255,.025)", border:"1px solid rgba(255,255,255,.07)", borderRadius:18, padding:"20px 20px", marginBottom:14 }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
        <span style={{ fontSize:"1rem" }}>{icon}</span>
        <h2 style={{ fontFamily:"Syne,sans-serif", fontSize:".92rem", fontWeight:800, color:"rgba(255,255,255,.88)" }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display:"block", fontSize:".72rem", fontWeight:700, color:"rgba(255,255,255,.4)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:7 }}>
      {children}
    </label>
  );
}

function FormInput({ value, onChange, placeholder, type="text", error }: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      style={{ width:"100%", padding:"12px 15px", borderRadius:10, background:"rgba(255,255,255,.05)", border:`1.5px solid ${error?"#f87171":"rgba(255,255,255,.1)"}`, color:"white", fontSize:".88rem", fontFamily:"DM Sans,sans-serif", outline:"none", transition:"border .2s" }}
      onFocus={e => e.target.style.borderColor="#5b8aff"}
      onBlur={e => e.target.style.borderColor=error?"#f87171":"rgba(255,255,255,.1)"}
    />
  );
}

function ErrMsg({ children }: { children: React.ReactNode }) {
  return <p style={{ color:"#f87171", fontSize:".72rem", marginTop:5 }}>{children}</p>;
}