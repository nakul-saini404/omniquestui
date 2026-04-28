"use client";
import { useState } from "react";
import type { LeadFormData } from "@/lib/personality";

interface Props {
  onSubmit: (data: LeadFormData) => void;
  // Called after quiz completes, for Class 11/12 students
  mode?: "pre_quiz" | "post_quiz";
  existingData?: Partial<LeadFormData>;
}

const CLASS_OPTIONS = [
  { value: "8",  label: "Class 8" },
  { value: "9",  label: "Class 9" },
  { value: "10", label: "Class 10" },
  { value: "11", label: "Class 11" },
  { value: "12", label: "Class 12" },
  { value: "Graduate",          label: "Graduate / Undergraduate" },
  { value: "Working Professional", label: "Working Professional" },
];

const COUNTRY_OPTIONS = [
  { value: "USA",          label: "🇺🇸 United States (Ivy League / Top US)",   desc: "Harvard, MIT, Stanford, Yale…" },
  { value: "UK",           label: "🇬🇧 United Kingdom (Russell Group)",         desc: "Oxford, Cambridge, LSE, Imperial…" },
  { value: "Canada",       label: "🇨🇦 Canada",                                desc: "University of Toronto, UBC, McGill…" },
  { value: "Australia",    label: "🇦🇺 Australia",                             desc: "Melbourne, ANU, Sydney, UNSW…" },
  { value: "Europe",       label: "🇪🇺 Europe",                                desc: "ETH Zurich, LMU Munich, Amsterdam…" },
  { value: "Singapore",    label: "🇸🇬 Singapore",                             desc: "NUS, NTU, SMU" },
  { value: "South Korea",  label: "🇰🇷 South Korea",                           desc: "Seoul National University, KAIST…" },
];

const DEGREE_OPTIONS = [
  { value: "Computer Science / AI",     label: "💻 Computer Science / AI & Data Science" },
  { value: "Engineering",               label: "⚙️ Engineering (Mechanical, Civil, Electrical)" },
  { value: "Business / Management",     label: "📈 Business, Management & Finance" },
  { value: "Medicine / Healthcare",     label: "🏥 Medicine, Pharmacy & Healthcare" },
  { value: "Law",                       label: "⚖️ Law & Political Science" },
  { value: "Arts & Design",             label: "🎨 Arts, Design & Architecture" },
  { value: "Natural Sciences",          label: "🔬 Natural Sciences (Physics, Chemistry, Bio)" },
  { value: "Social Sciences",           label: "🌍 Social Sciences & Psychology" },
  { value: "Economics",                 label: "📊 Economics & Finance" },
  { value: "Media & Communication",     label: "📡 Media, Journalism & Communication" },
  { value: "Not sure yet",              label: "🤷 Not sure yet — help me decide" },
];

export default function LeadForm({ onSubmit, mode = "pre_quiz", existingData }: Props) {
  const [form, setForm] = useState<LeadFormData>({
    fullName: existingData?.fullName ?? "",
    email: existingData?.email ?? "",
    phone: existingData?.phone ?? "",
    city: existingData?.city ?? "",
    currentClass: existingData?.currentClass ?? "",
    educationLevel: existingData?.educationLevel ?? "",
    programInterest: existingData?.programInterest ?? "",
    age: existingData?.age ?? "",
    consent: existingData?.consent ?? false,
    targetCountry: existingData?.targetCountry ?? "",
    targetDegree: existingData?.targetDegree ?? "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const classNum = parseInt(form.currentClass, 10);
  const isLowerClass = !isNaN(classNum) && classNum <= 10;
  const isUpperClass = !isNaN(classNum) && (classNum === 11 || classNum === 12);
  const isPostSchool = isNaN(classNum) && form.currentClass !== "";
  const showCountryDegree = mode === "post_quiz" && (isUpperClass || isPostSchool);

  function validate(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^[0-9+\-\s]{8,15}$/)) e.phone = "Valid phone required";
    if (!form.currentClass) e.currentClass = "Please select your current class";
    if (!form.consent) e.consent = "Please give consent to proceed";
    if (showCountryDegree) {
      if (!form.targetCountry) e.targetCountry = "Please select your target country";
      if (!form.targetDegree) e.targetDegree = "Please select your target degree";
    }
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    await onSubmit(form);
    setSubmitting(false);
  }

  const iStyle = (field: string): React.CSSProperties => ({
    width: "100%", padding: "13px 16px", borderRadius: 12,
    background: "rgba(255,255,255,.05)",
    border: `1.5px solid ${errors[field] ? "#f87171" : "rgba(255,255,255,.12)"}`,
    color: "#f1f5ff", fontSize: ".9rem", fontFamily: "var(--font-body)",
    outline: "none", transition: "border .2s",
  });

  const lStyle: React.CSSProperties = {
    display: "block", fontSize: ".76rem", fontWeight: 600,
    color: "rgba(241,245,255,.45)", letterSpacing: ".1em",
    textTransform: "uppercase", marginBottom: 8,
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#5b8aff";
  };
  const onBlur = (field: string) => (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = errors[field] ? "#f87171" : "rgba(255,255,255,.12)";
  };

  return (
    <div style={{ animation: "fadeUp .5s ease both" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ fontSize: "2.8rem", marginBottom: 14 }}>
          {mode === "post_quiz" ? "🎉" : "🧠"}
        </div>
        <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.5rem,4vw,2.1rem)", fontWeight: 800, marginBottom: 12 }}>
          {mode === "post_quiz" ? "Your Report is Ready!" : "Start Your Narrative Intelligence Scan"}
        </h2>
        <p style={{ color: "rgba(241,245,255,.5)", fontSize: ".95rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          {mode === "post_quiz"
            ? "Enter your details to unlock your AI-generated  Narrative Intelligence report and personalised program recommendation."
            : "Fill in your details to begin. Your results will be personalised to your stage of education."}
        </p>
      </div>

      {/* Card */}
      <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)", borderRadius: 24, padding: "36px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Full name */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={lStyle}>Full Name *</label>
            <input style={iStyle("fullName")} placeholder="Your full name" value={form.fullName}
              onChange={e => { setForm({...form, fullName: e.target.value}); setErrors({...errors, fullName: ""}); }}
              onFocus={onFocus} onBlur={onBlur("fullName")} />
            {errors.fullName && <p style={{color:"#f87171",fontSize:".74rem",marginTop:5}}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label style={lStyle}>Email *</label>
            <input type="email" style={iStyle("email")} placeholder="you@example.com" value={form.email}
              onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ""}); }}
              onFocus={onFocus} onBlur={onBlur("email")} />
            {errors.email && <p style={{color:"#f87171",fontSize:".74rem",marginTop:5}}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label style={lStyle}>Phone *</label>
            <input type="tel" style={iStyle("phone")} placeholder="+91 98765 43210" value={form.phone}
              onChange={e => { setForm({...form, phone: e.target.value}); setErrors({...errors, phone: ""}); }}
              onFocus={onFocus} onBlur={onBlur("phone")} />
            {errors.phone && <p style={{color:"#f87171",fontSize:".74rem",marginTop:5}}>{errors.phone}</p>}
          </div>

          {/* City */}
          <div>
            <label style={lStyle}>City</label>
            <input style={iStyle("city")} placeholder="Delhi, Mumbai, Bangalore…" value={form.city}
              onChange={e => setForm({...form, city: e.target.value})}
              onFocus={onFocus} onBlur={onBlur("city")} />
          </div>

          {/* Age */}
          <div>
            <label style={lStyle}>Age</label>
            <input type="number" style={iStyle("age")} placeholder="e.g. 16" value={form.age} min={10} max={60}
              onChange={e => setForm({...form, age: e.target.value})}
              onFocus={onFocus} onBlur={onBlur("age")} />
          </div>

          {/* Current Class — CRITICAL NEW FIELD */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={lStyle}>Current Class / Education Level *</label>
            <select style={{...iStyle("currentClass"), appearance:"none" as const}} value={form.currentClass}
              onChange={e => { setForm({...form, currentClass: e.target.value}); setErrors({...errors, currentClass: ""}); }}
              onFocus={onFocus} onBlur={onBlur("currentClass")}>
              <option value="" style={{background:"#090d1e"}}>Select your current class</option>
              {CLASS_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value} style={{background:"#090d1e"}}>{opt.label}</option>
              ))}
            </select>
            {errors.currentClass && <p style={{color:"#f87171",fontSize:".74rem",marginTop:5}}>{errors.currentClass}</p>}

            {/* Contextual hint based on class */}
            {form.currentClass && (
              <div style={{
                marginTop: 10, padding: "12px 16px", borderRadius: 10,
                background: isLowerClass ? "rgba(52,211,153,.07)" : isUpperClass ? "rgba(91,138,255,.07)" : "rgba(201,168,76,.07)",
                border: `1px solid ${isLowerClass ? "rgba(52,211,153,.2)" : isUpperClass ? "rgba(91,138,255,.2)" : "rgba(201,168,76,.2)"}`,
              }}>
                <p style={{fontSize:".8rem", margin:0, lineHeight:1.6,
                  color: isLowerClass ? "#34d399" : isUpperClass ? "#5b8aff" : "#d4af37"}}>
                  {isLowerClass
                    ? "🎓 Great! Based on your quiz results, we'll recommend the ideal stream (Science/Commerce/Arts) for Class 11."
                    : isUpperClass
                    ? "🌍 After completing the quiz, you'll tell us which country & degree you're targeting — we'll suggest the best universities and required exams."
                    : "🚀 We'll recommend programs, universities, and career pathways aligned to your profile."}
                </p>
              </div>
            )}
          </div>

          {/* Program interest */}
          {!showCountryDegree && (
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={lStyle}>Program Interest</label>
              <select style={{...iStyle("programInterest"), appearance:"none" as const}} value={form.programInterest}
                onChange={e => setForm({...form, programInterest: e.target.value})}
                onFocus={onFocus} onBlur={onBlur("programInterest")}>
                <option value="" style={{background:"#090d1e"}}>Select a program</option>
                <option value="Study Abroad (EduQuest)" style={{background:"#090d1e"}}>Study Abroad (EduQuest)</option>
                <option value="SAT / ACT Coaching" style={{background:"#090d1e"}}>SAT / ACT Coaching</option>
                <option value="MBA Admissions (MbaWizards)" style={{background:"#090d1e"}}>MBA Admissions (MbaWizards)</option>
                <option value="GMAT Prep" style={{background:"#090d1e"}}>GMAT Prep</option>
                <option value="AI & Data Science (Aptech)" style={{background:"#090d1e"}}>AI & Data Science (Aptech)</option>
                <option value="Not sure yet" style={{background:"#090d1e"}}>Not sure yet</option>
              </select>
            </div>
          )}

          {/* ── POST-QUIZ ONLY: Country + Degree for Class 11/12 ── */}
          {showCountryDegree && (
            <>
              {/* Divider */}
              <div style={{ gridColumn:"1/-1", padding:"4px 0" }}>
                <div style={{ height:1, background:"rgba(255,255,255,.08)", marginBottom:16 }} />
                <div style={{
                  padding:"14px 18px", borderRadius:12,
                  background:"linear-gradient(135deg,rgba(91,138,255,.1),rgba(167,139,250,.07))",
                  border:"1px solid rgba(91,138,255,.2)", marginBottom:4,
                }}>
                  <p style={{margin:0, fontSize:".85rem", color:"rgba(241,245,255,.7)", lineHeight:1.6}}>
                    <strong style={{color:"#5b8aff"}}>One more step!</strong> Tell us where you want to study and what you want to pursue — we'll build a personalised university recommendation list with required exams.
                  </p>
                </div>
              </div>

              {/* Target Country */}
              <div style={{ gridColumn:"1/-1" }}>
                <label style={lStyle}>Target Country for Studies *</label>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:10, marginTop:4 }}>
                  {COUNTRY_OPTIONS.map(opt => (
                    <div key={opt.value}
                      onClick={() => { setForm({...form, targetCountry:opt.value}); setErrors({...errors, targetCountry:""}); }}
                      style={{
                        padding:"12px 14px", borderRadius:12, cursor:"pointer",
                        background: form.targetCountry === opt.value ? "rgba(91,138,255,.18)" : "rgba(255,255,255,.04)",
                        border:`1.5px solid ${form.targetCountry === opt.value ? "#5b8aff" : "rgba(255,255,255,.1)"}`,
                        transition:"all .2s",
                      }}>
                      <div style={{fontSize:".88rem", fontWeight:600, color: form.targetCountry===opt.value ? "#5b8aff" : "rgba(241,245,255,.8)", marginBottom:3}}>
                        {opt.label}
                      </div>
                      <div style={{fontSize:".72rem", color:"rgba(241,245,255,.35)"}}>{opt.desc}</div>
                    </div>
                  ))}
                </div>
                {errors.targetCountry && <p style={{color:"#f87171",fontSize:".74rem",marginTop:8}}>{errors.targetCountry}</p>}
              </div>

              {/* Target Degree */}
              <div style={{ gridColumn:"1/-1" }}>
                <label style={lStyle}>Target Degree / Course *</label>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:10, marginTop:4 }}>
                  {DEGREE_OPTIONS.map(opt => (
                    <div key={opt.value}
                      onClick={() => { setForm({...form, targetDegree:opt.value}); setErrors({...errors, targetDegree:""}); }}
                      style={{
                        padding:"12px 16px", borderRadius:12, cursor:"pointer",
                        background: form.targetDegree === opt.value ? "rgba(201,168,76,.15)" : "rgba(255,255,255,.04)",
                        border:`1.5px solid ${form.targetDegree === opt.value ? "rgba(201,168,76,.6)" : "rgba(255,255,255,.1)"}`,
                        fontSize:".85rem", fontWeight:500,
                        color: form.targetDegree === opt.value ? "#d4af37" : "rgba(241,245,255,.7)",
                        transition:"all .2s",
                      }}>
                      {opt.label}
                    </div>
                  ))}
                </div>
                {errors.targetDegree && <p style={{color:"#f87171",fontSize:".74rem",marginTop:8}}>{errors.targetDegree}</p>}
              </div>
            </>
          )}

          {/* Consent */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={{ display:"flex", alignItems:"flex-start", gap:12, cursor:"pointer" }}>
              <div onClick={() => { setForm({...form, consent:!form.consent}); setErrors({...errors, consent:""}); }}
                style={{
                  width:20, height:20, borderRadius:6,
                  border:`2px solid ${errors.consent ? "#f87171" : form.consent ? "#00C9B1" : "rgba(255,255,255,.25)"}`,
                  background: form.consent ? "rgba(0,201,177,.18)" : "transparent",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0, marginTop:2, transition:"all .2s", cursor:"pointer",
                }}>
                {form.consent && <span style={{color:"#00C9B1",fontSize:".8rem",fontWeight:900,lineHeight:1}}>✓</span>}
              </div>
              <span style={{ fontSize:".84rem", color:"rgba(241,245,255,.5)", lineHeight:1.65 }}>
                I consent to OmniQuest contacting me about relevant programs. My data will be handled per their Privacy Policy.
              </span>
            </label>
            {errors.consent && <p style={{color:"#f87171",fontSize:".74rem",marginTop:6}}>{errors.consent}</p>}
          </div>
        </div>

        <button onClick={handleSubmit} disabled={submitting}
          style={{
            width:"100%", marginTop:28, padding:"16px", borderRadius:14,
            background: submitting ? "rgba(255,255,255,.08)" : "var(--grad-teal)",
            border:"none", color:"white", fontSize:"1rem", fontWeight:700,
            cursor: submitting ? "default" : "pointer", transition:"transform .2s",
            boxShadow: submitting ? "none" : "0 8px 32px rgba(0,201,177,.3)",
            fontFamily:"var(--font-body)",
          }}
          onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}>
          {submitting
            ? "⏳ Generating with AI…"
            : mode === "post_quiz"
            ? "🔓 Unlock My  Narrative Intelligence Report →"
            : "🧠 Begin My  Narrative Intelligence Scan →"}
        </button>

        <p style={{ textAlign:"center", color:"rgba(241,245,255,.25)", fontSize:".72rem", marginTop:14 }}>
          🔒 Secure · Your data is never sold or shared
        </p>
      </div>
    </div>
  );
}