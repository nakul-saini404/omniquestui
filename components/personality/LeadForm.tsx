"use client";
import { useState } from "react";

interface Props { onSubmit: (data: Record<string, string>) => void; }

export default function LeadForm({ onSubmit }: Props) {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", city: "", educationLevel: "", programInterest: "", age: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^[0-9+\-\s]{8,15}$/)) e.phone = "Valid phone required";
    if (!form.consent) e.consent = "Please give consent to proceed";
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    await onSubmit({ ...form, consent: String(form.consent) });
    setSubmitting(false);
  }

  const iStyle = (field: string): React.CSSProperties => ({
    width: "100%", padding: "13px 16px", borderRadius: 12, background: "rgba(255,255,255,.05)",
    border: `1.5px solid ${errors[field] ? "#f87171" : "rgba(255,255,255,.12)"}`,
    color: "#f1f5ff", fontSize: ".9rem", fontFamily: "var(--font-body)", outline: "none",
    transition: "border .2s",
  });

  const lStyle: React.CSSProperties = { display: "block", fontSize: ".76rem", fontWeight: 600, color: "rgba(241,245,255,.45)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { e.target.style.borderColor = "#5b8aff"; };
  const onBlur = (field: string) => (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { e.target.style.borderColor = errors[field] ? "#f87171" : "rgba(255,255,255,.12)"; };

  return (
    <div style={{ animation: "fadeUp .5s ease both" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ fontSize: "2.8rem", marginBottom: 14 }}>🎉</div>
        <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.5rem,4vw,2.1rem)", fontWeight: 800, marginBottom: 12 }}>
          Your Report is Ready!
        </h2>
        <p style={{ color: "rgba(241,245,255,.5)", fontSize: ".95rem", lineHeight: 1.7, maxWidth: 440, margin: "0 auto" }}>
          Enter your details to unlock your  AI–generated personality report and personalised program recommendation.
        </p>
      </div>

      {/* Card */}
      <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)", borderRadius: 24, padding: "36px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Full name */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={lStyle}>Full Name *</label>
            <input style={iStyle("fullName")} placeholder="Your full name" value={form.fullName}
              onChange={(e) => { setForm({ ...form, fullName: e.target.value }); setErrors({ ...errors, fullName: "" }); }}
              onFocus={onFocus} onBlur={onBlur("fullName")} />
            {errors.fullName && <p style={{ color: "#f87171", fontSize: ".74rem", marginTop: 5 }}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label style={lStyle}>Email *</label>
            <input type="email" style={iStyle("email")} placeholder="you@example.com" value={form.email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
              onFocus={onFocus} onBlur={onBlur("email")} />
            {errors.email && <p style={{ color: "#f87171", fontSize: ".74rem", marginTop: 5 }}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label style={lStyle}>Phone *</label>
            <input type="tel" style={iStyle("phone")} placeholder="+91 98765 43210" value={form.phone}
              onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
              onFocus={onFocus} onBlur={onBlur("phone")} />
            {errors.phone && <p style={{ color: "#f87171", fontSize: ".74rem", marginTop: 5 }}>{errors.phone}</p>}
          </div>

          {/* City */}
          <div>
            <label style={lStyle}>City</label>
            <input style={iStyle("city")} placeholder="Delhi, Mumbai, Bangalore…" value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              onFocus={onFocus} onBlur={onBlur("city")} />
          </div>

          {/* Age */}
          <div>
            <label style={lStyle}>Age</label>
            <input type="number" style={iStyle("age")} placeholder="e.g. 22" value={form.age} min={14} max={60}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              onFocus={onFocus} onBlur={onBlur("age")} />
          </div>

          {/* Education */}
          <div>
            <label style={lStyle}>Education Level</label>
            <select style={{ ...iStyle("educationLevel"), appearance: "none" as const }} value={form.educationLevel}
              onChange={(e) => setForm({ ...form, educationLevel: e.target.value })}
              onFocus={onFocus} onBlur={onBlur("educationLevel")}>
              <option value="" style={{ background: "#090d1e" }}>Select level</option>
              <option value="High School (10th/12th)" style={{ background: "#090d1e" }}>High School (10th/12th)</option>
              <option value="Undergraduate" style={{ background: "#090d1e" }}>Undergraduate</option>
              <option value="Graduate" style={{ background: "#090d1e" }}>Graduate / Postgraduate</option>
              <option value="Working Professional" style={{ background: "#090d1e" }}>Working Professional</option>
            </select>
          </div>

          {/* Program interest */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={lStyle}>Program Interest</label>
            <select style={{ ...iStyle("programInterest"), appearance: "none" as const }} value={form.programInterest}
              onChange={(e) => setForm({ ...form, programInterest: e.target.value })}
              onFocus={onFocus} onBlur={onBlur("programInterest")}>
              <option value="" style={{ background: "#090d1e" }}>Select a program</option>
              <option value="Study Abroad (EduQuest)" style={{ background: "#090d1e" }}>Study Abroad (EduQuest)</option>
              <option value="SAT / ACT Coaching" style={{ background: "#090d1e" }}>SAT / ACT Coaching</option>
              <option value="MBA Admissions (MbaWizards)" style={{ background: "#090d1e" }}>MBA Admissions (MbaWizards)</option>
              <option value="GMAT Prep" style={{ background: "#090d1e" }}>GMAT Prep</option>
              <option value="AI & Data Science (Aptech)" style={{ background: "#090d1e" }}>AI & Data Science (Aptech)</option>
              <option value="Not sure yet" style={{ background: "#090d1e" }}>Not sure yet</option>
            </select>
          </div>

          {/* Consent */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
              <div onClick={() => { setForm({ ...form, consent: !form.consent }); setErrors({ ...errors, consent: "" }); }}
                style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${errors.consent ? "#f87171" : form.consent ? "#00C9B1" : "rgba(255,255,255,.25)"}`, background: form.consent ? "rgba(0,201,177,.18)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, transition: "all .2s", cursor: "pointer" }}>
                {form.consent && <span style={{ color: "#00C9B1", fontSize: ".8rem", fontWeight: 900, lineHeight: 1 }}>✓</span>}
              </div>
              <span style={{ fontSize: ".84rem", color: "rgba(241,245,255,.5)", lineHeight: 1.65 }}>
                I consent to OmniQuest contacting me about relevant programs. My data will be handled per their Privacy Policy.
              </span>
            </label>
            {errors.consent && <p style={{ color: "#f87171", fontSize: ".74rem", marginTop: 6 }}>{errors.consent}</p>}
          </div>
        </div>

        <button onClick={handleSubmit} disabled={submitting}
          style={{ width: "100%", marginTop: 28, padding: "16px", borderRadius: 14, background: submitting ? "rgba(255,255,255,.08)" : "var(--grad-teal)", border: "none", color: "white", fontSize: "1rem", fontWeight: 700, cursor: submitting ? "default" : "pointer", transition: "transform .2s", boxShadow: submitting ? "none" : "0 8px 32px rgba(0,201,177,.3)", fontFamily: "var(--font-body)" }}
          onMouseEnter={(e) => { if (!submitting) (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; }}>
          {submitting ? "⏳ Generating with  AI…" : "🔓 Unlock My Personality Report →"}
        </button>

        <p style={{ textAlign: "center", color: "rgba(241,245,255,.25)", fontSize: ".72rem", marginTop: 14 }}>
          🔒 Secure · Your data is never sold or shared
        </p>
      </div>
    </div>
  );
}
