"use client";

import { useState, useRef, useEffect } from "react";
import type { StudentData, Country, Grade, Stream } from "@/types/edupath";

interface Props {
  onSubmit: (data: StudentData) => void;
}

const COUNTRIES: { value: Country; label: string }[] = [
  { value: "USA",         label: "🇺🇸 United States" },
  { value: "UK",          label: "🇬🇧 United Kingdom" },
  { value: "Canada",      label: "🇨🇦 Canada" },
  { value: "Australia",   label: "🇦🇺 Australia" },
  { value: "Germany",     label: "🇩🇪 Germany" },
  { value: "Netherlands", label: "🇳🇱 Netherlands" },
  { value: "Singapore",   label: "🇸🇬 Singapore" },
  { value: "Japan",       label: "🇯🇵 Japan" },
  { value: "India",       label: "🇮🇳 India (Top Colleges)" },
];

const COUNTRY_CODES = [
  { code: "+91",  flag: "🇮🇳", name: "India" },
  { code: "+1",   flag: "🇺🇸", name: "USA" },
  { code: "+44",  flag: "🇬🇧", name: "UK" },
  { code: "+1",   flag: "🇨🇦", name: "Canada" },
  { code: "+61",  flag: "🇦🇺", name: "Australia" },
  { code: "+49",  flag: "🇩🇪", name: "Germany" },
  { code: "+31",  flag: "🇳🇱", name: "Netherlands" },
  { code: "+65",  flag: "🇸🇬", name: "Singapore" },
  { code: "+81",  flag: "🇯🇵", name: "Japan" },
  { code: "+86",  flag: "🇨🇳", name: "China" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+60",  flag: "🇲🇾", name: "Malaysia" },
  { code: "+33",  flag: "🇫🇷", name: "France" },
  { code: "+39",  flag: "🇮🇹", name: "Italy" },
  { code: "+34",  flag: "🇪🇸", name: "Spain" },
];

// ── Field options with stream alignment hints ─────────────────────────────────
const FIELD_OPTIONS: {
  value: string;
  label: string;
  streams: Stream[];
  hint: string;
}[] = [
  {
    value: "Computer Science / AI / Data Science",
    label: "💻 Computer Science / AI / Data Science",
    streams: ["Science (PCM)", "Undecided"],
    hint: "Requires PCM. JEE for India, SAT for USA, ESAT/TMUA for UK.",
  },
  {
    value: "Engineering (Mechanical / Civil / EE)",
    label: "⚙️ Engineering (Mechanical / Civil / EE)",
    streams: ["Science (PCM)", "Undecided"],
    hint: "Requires PCM. JEE for India, ESAT for Cambridge/Imperial.",
  },
  {
    value: "Medicine / Pre-Med",
    label: "🩺 Medicine / Pre-Med",
    streams: ["Science (PCB)", "Undecided"],
    hint: "Requires PCB. NEET for India, UCAT for UK/Australia.",
  },
  {
    value: "Business / Economics",
    label: "💼 Business / Economics",
    streams: ["Commerce", "Science (PCM)", "Humanities", "Undecided"],
    hint: "Commerce ideal. CUET/IPMAT for India, SAT for USA, TMUA for Cambridge.",
  },
  {
    value: "Law / Political Science",
    label: "⚖️ Law / Political Science",
    streams: ["Humanities", "Commerce", "Science (PCM)", "Undecided"],
    hint: "Any stream. CLAT/AILET for India, LNAT for UK.",
  },
  {
    value: "Design / Architecture",
    label: "🎨 Design / Architecture",
    streams: ["Science (PCM)", "Humanities", "Commerce", "Undecided"],
    hint: "Architecture needs Maths. Design accepts any stream. Portfolio critical.",
  },
  {
    value: "Life Sciences / Biotech",
    label: "🔬 Life Sciences / Biotech",
    streams: ["Science (PCB)", "Science (PCM)", "Undecided"],
    hint: "PCB preferred. CUET/IISER IAT for India.",
  },
  {
    value: "Liberal Arts / Humanities",
    label: "📚 Liberal Arts / Humanities",
    streams: ["Humanities", "Commerce", "Science (PCM)", "Science (PCB)", "Undecided"],
    hint: "Any stream accepted. CUET for India, SAT for USA/Ashoka.",
  },
  {
    value: "Media / Communications",
    label: "📺 Media / Communications",
    streams: ["Humanities", "Commerce", "Science (PCM)", "Undecided"],
    hint: "Any stream. CUET/IIMC exam for India. Portfolio/writing samples abroad.",
  },
  {
    value: "Not decided yet",
    label: "❓ Not decided yet",
    streams: ["Science (PCM)", "Science (PCB)", "Commerce", "Humanities", "Undecided"],
    hint: "We'll help you explore options based on your stream and countries.",
  },
];

// ── Stream-field alignment warning ───────────────────────────────────────────
function getStreamFieldWarning(stream: string, field: string): string | null {
  if (!stream || !field || field === "Not decided yet") return null;
  const f = field.toLowerCase();
  const s = stream.toLowerCase();

  if ((f.includes("medicine") || f.includes("biotech") || f.includes("life sciences")) && s.includes("pcm") && !s.includes("pcb")) {
    return "⚠️ Medicine, Biotech, and Life Sciences programs typically require Biology (PCB stream). Consider switching to PCB or confirming your school's curriculum.";
  }
  if ((f.includes("engineering") || f.includes("computer") || f.includes("ai")) && s.includes("pcb") && !s.includes("pcm")) {
    return "⚠️ Engineering and CS programs require Mathematics (PCM stream). If you're in PCB, you may need to confirm whether Maths is available as an additional subject.";
  }
  if (f.includes("architecture") && !s.includes("pcm") && !s.includes("undecided")) {
    return "ℹ️ Architecture programs universally require Mathematics in Class 12. Science PCM stream is ideal. Confirm with your school if Maths is available in your stream.";
  }
  return null;
}

export default function OnboardingForm({ onSubmit }: Props) {
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [selectedCC, setSelectedCC] = useState(COUNTRY_CODES[0]);
  const [ccOpen,   setCcOpen]   = useState(false);
  const [phone,    setPhone]    = useState("");
  const [grade,    setGrade]    = useState<string>("");
  const [score,    setScore]    = useState<string>("");
  const [stream,   setStream]   = useState<string>("");
  const [field,    setField]    = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");
  const [phoneError, setPhoneError] = useState("");

  const ccRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ccRef.current && !ccRef.current.contains(e.target as Node)) {
        setCcOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleCountry = (c: Country) => {
    setSelectedCountries((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const getDigits = (val: string) => val.replace(/\D/g, "");

  const handlePhoneChange = (val: string) => {
    const cleaned = val.replace(/[^\d\s\-]/g, "");
    setPhone(cleaned);
    const digits = getDigits(cleaned);
    if (digits.length > 0 && digits.length < 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
    } else if (digits.length > 10) {
      setPhoneError("Phone number must not exceed 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async () => {
    if (
      !name ||
      !email ||
      !phone ||
      !grade ||
      !score ||
      !stream ||
      !field ||
      selectedCountries.length === 0
    ) {
      setError("Please fill in all fields and select at least one country.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (getDigits(phone).length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));

    onSubmit({
      name:      name.trim(),
      email:     email.trim(),
      phone:     `${selectedCC.code} ${phone.trim()}`,
      grade:     parseInt(grade) as Grade,
      score:     parseFloat(score),
      stream:    stream as Stream,
      field,
      countries: selectedCountries,
    });
  };

  // Derive the stream-field warning
  const streamFieldWarning = getStreamFieldWarning(stream, field);

  // Derive field hint for currently selected field
  const selectedFieldOption = FIELD_OPTIONS.find((o) => o.value === field);

  if (loading) {
    return (
      <div className="ep-loading">
        <div className="ep-spinner" />
        <div className="ep-loading-text">
          Building your personalised dashboard
          <span className="ep-dots" />
        </div>
        <div className="ep-loading-sub">
          Analysing your profile — {field !== "Not decided yet" ? field : "all fields"} in{" "}
          {selectedCountries.join(", ") || "your countries"}
        </div>
      </div>
    );
  }

  return (
    <div className="ep-onboarding">
      <div className="ep-card">
        <div className="ep-logo">
          Edu<span>Path</span>
        </div>
        <p className="ep-sub">
          AI-powered university application planner for students in grades 8–12.
          Fill in your details and we&apos;ll build your personalised dashboard
          with country-specific exams, timelines, subjects, and universities
          for your chosen field.
        </p>

        {/* ── Name ── */}
        <div className="ep-field">
          <label className="ep-label">Your Full Name</label>
          <input
            className="ep-input"
            type="text"
            placeholder="e.g. Arjun Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* ── Email + Phone ── */}
        <div className="ep-grid-2">
          <div className="ep-field">
            <label className="ep-label">Email Address</label>
            <input
              className="ep-input"
              type="email"
              placeholder="e.g. arjun@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="ep-field">
            <label className="ep-label">Phone Number</label>
            <div className="ep-phone-wrapper">
              {/* Country Code Picker */}
              <div className="ep-cc-dropdown" ref={ccRef}>
                <button
                  type="button"
                  className="ep-cc-trigger"
                  onClick={() => setCcOpen((o) => !o)}
                  aria-haspopup="listbox"
                  aria-expanded={ccOpen}
                >
                  <span className="ep-cc-flag">{selectedCC.flag}</span>
                  <span className="ep-cc-code">{selectedCC.code}</span>
                  <svg
                    className={`ep-cc-arrow${ccOpen ? " open" : ""}`}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2 3.5l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {ccOpen && (
                  <ul className="ep-cc-menu" role="listbox">
                    {COUNTRY_CODES.map((cc, i) => (
                      <li
                        key={`${cc.name}-${i}`}
                        role="option"
                        aria-selected={selectedCC.name === cc.name}
                        className={`ep-cc-option${
                          selectedCC.name === cc.name ? " active" : ""
                        }`}
                        onClick={() => {
                          setSelectedCC(cc);
                          setCcOpen(false);
                        }}
                      >
                        <span className="ep-cc-flag">{cc.flag}</span>
                        <span className="ep-cc-name">{cc.name}</span>
                        <span className="ep-cc-num">{cc.code}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Phone digits */}
              <input
                className={`ep-input ep-phone-input${phoneError ? " ep-input-error" : ""}`}
                type="tel"
                placeholder="10-digit number"
                value={phone}
                maxLength={12}
                onChange={(e) => handlePhoneChange(e.target.value)}
                aria-label="Phone number"
              />
            </div>
            {phoneError && (
              <span className="ep-field-error">{phoneError}</span>
            )}
          </div>
        </div>

        {/* ── Grade + Score ── */}
        <div className="ep-grid-2">
          <div className="ep-field">
            <label className="ep-label">Current Grade</label>
            <select
              className="ep-input"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="">Select grade</option>
              {[8, 9, 10, 11, 12].map((g) => (
                <option key={g} value={g}>
                  {g}th Grade
                </option>
              ))}
            </select>
          </div>
          <div className="ep-field">
            <label className="ep-label">Current % / GPA</label>
            <input
              className="ep-input"
              type="number"
              placeholder="e.g. 88"
              min={40}
              max={100}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
        </div>

        {/* ── Stream ── */}
        <div className="ep-field">
          <label className="ep-label">Stream / Subject Focus</label>
          <select
            className="ep-input"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
          >
            <option value="">Select stream</option>
            <option value="Science (PCM)">
              Science — PCM (Engineering / Tech / CS)
            </option>
            <option value="Science (PCB)">
              Science — PCB (Medicine / Biology)
            </option>
            <option value="Commerce">Commerce (Business / Finance)</option>
            <option value="Humanities">
              Humanities / Arts / Social Sciences
            </option>
            <option value="Undecided">Undecided / Exploring</option>
          </select>
        </div>

        {/* ── Field of Study ── */}
        <div className="ep-field">
          <label className="ep-label">Intended Field of Study</label>
          <select
            className="ep-input"
            value={field}
            onChange={(e) => setField(e.target.value)}
          >
            <option value="">Select field</option>
            {FIELD_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Field hint */}
          {selectedFieldOption && field && field !== "Not decided yet" && (
            <div
              style={{
                marginTop: 6,
                padding: "7px 10px",
                borderRadius: 8,
                background: "rgba(99,102,241,.08)",
                border: "1px solid rgba(99,102,241,.2)",
                fontSize: 11,
                color: "#c4b5fd",
                lineHeight: 1.5,
              }}
            >
              💡 {selectedFieldOption.hint}
            </div>
          )}

          {/* Stream-field mismatch warning */}
          {streamFieldWarning && (
            <div
              style={{
                marginTop: 6,
                padding: "7px 10px",
                borderRadius: 8,
                background: "rgba(245,158,11,.08)",
                border: "1px solid rgba(245,158,11,.2)",
                fontSize: 11,
                color: "#fcd34d",
                lineHeight: 1.55,
              }}
            >
              {streamFieldWarning}
            </div>
          )}
        </div>

        {/* ── Countries ── */}
        <div className="ep-field">
          <label className="ep-label">Countries You Want to Apply To</label>
          <div className="ep-country-grid">
            {COUNTRIES.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`ep-cpill${
                  selectedCountries.includes(c.value) ? " active" : ""
                }`}
                onClick={() => toggleCountry(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Country-specific hints */}
          {selectedCountries.length > 0 && field && field !== "Not decided yet" && (
            <div
              style={{
                marginTop: 8,
                padding: "8px 11px",
                borderRadius: 8,
                background: "rgba(16,185,129,.07)",
                border: "1px solid rgba(16,185,129,.2)",
                fontSize: 11,
                color: "#6ee7b7",
                lineHeight: 1.6,
              }}
            >
              {selectedCountries.includes("India") && (
                <div>
                  🇮🇳 <strong>India:</strong>{" "}
                  {field.toLowerCase().includes("engineering") || field.toLowerCase().includes("computer")
                    ? "JEE Main + Advanced for IITs/NITs. BITSAT for BITS Pilani."
                    : field.toLowerCase().includes("medicine")
                    ? "NEET-UG is mandatory. Exam: May 3, 2026."
                    : field.toLowerCase().includes("business")
                    ? "CUET UG for DU/BHU colleges. IPMAT for IIM 5-year program."
                    : field.toLowerCase().includes("law")
                    ? "CLAT 2026: December 7, 2025. AILET: December 14, 2025."
                    : field.toLowerCase().includes("design")
                    ? "UCEED (Jan 18, 2026), NID DAT, NATA, NIFT — all run Jan–Apr."
                    : "CUET UG is required for most central university programs."
                  }
                </div>
              )}
              {selectedCountries.includes("UK") && (
                <div style={{ marginTop: selectedCountries.includes("India") ? 4 : 0 }}>
                  🇬🇧 <strong>UK:</strong>{" "}
                  {field.toLowerCase().includes("medicine")
                    ? "UCAT (Jul–Sep) + UCAS Medicine deadline: October 15 — much earlier than other programs."
                    : field.toLowerCase().includes("engineering") || field.toLowerCase().includes("computer")
                    ? "ESAT mandatory for Cambridge/Imperial. Register in August — slots fill in 48 hours."
                    : field.toLowerCase().includes("business") || field.toLowerCase().includes("economics")
                    ? "TMUA required for Cambridge Economics. Helpful for LSE and Warwick."
                    : field.toLowerCase().includes("law")
                    ? "LNAT required for Oxford, UCL, Durham, Glasgow law programs."
                    : "UCAS deadline: January 13. IELTS for UKVI Academic required for student visa."
                  }
                </div>
              )}
              {selectedCountries.includes("USA") && (
                <div style={{ marginTop: selectedCountries.includes("India") || selectedCountries.includes("UK") ? 4 : 0 }}>
                  🇺🇸 <strong>USA:</strong> SAT 1400+ strongly recommended. Common App opens August 1.
                  TOEFL 100+ or IELTS 7.0+ required.
                </div>
              )}
              {selectedCountries.includes("Germany") && (
                <div style={{ marginTop: 4 }}>
                  🇩🇪 <strong>Germany:</strong> APS Certificate is MANDATORY — apply at aps-india.de
                  immediately (takes 4–8 weeks). Near-zero tuition at public universities.
                </div>
              )}
            </div>
          )}
        </div>

        {error && <div className="ep-error">{error}</div>}

        <button className="ep-btn-primary" onClick={handleSubmit}>
          ✦ Generate My AI Dashboard
        </button>

        <p
          style={{
            fontSize: 11,
            color: "var(--ep-text-muted)",
            textAlign: "center",
            marginTop: 12,
            lineHeight: 1.5,
          }}
        >
          Your dashboard will show exams, subjects, timeline, and universities
          specific to <strong>{field || "your chosen field"}</strong> in{" "}
          <strong>
            {selectedCountries.length > 0
              ? selectedCountries.join(", ")
              : "your selected countries"}
          </strong>
          .
        </p>
      </div>
    </div>
  );
}