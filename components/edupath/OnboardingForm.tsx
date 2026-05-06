"use client";

import { useState, useRef, useEffect } from "react";
import type { StudentData, Country, Grade, Stream } from "@/types/edupath";

interface Props {
  onSubmit: (data: StudentData) => void;
}

const COUNTRIES: { value: Country; label: string }[] = [
  { value: "USA", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Singapore", label: "Singapore" },
  { value: "Japan", label: "Japan" },
  { value: "India", label: "India (Top Colleges)" },
];

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1",  flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+1",  flag: "🇨🇦", name: "Canada" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+971",flag: "🇦🇪", name: "UAE" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
];

export default function OnboardingForm({ onSubmit }: Props) {
  const [name, setName]                   = useState("");
  const [email, setEmail]                 = useState("");
  const [selectedCC, setSelectedCC]       = useState(COUNTRY_CODES[0]);
  const [ccOpen, setCcOpen]               = useState(false);
  const [phone, setPhone]                 = useState("");
  const [grade, setGrade]                 = useState<string>("");
  const [score, setScore]                 = useState<string>("");
  const [stream, setStream]               = useState<string>("");
  const [field, setField]                 = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [loading, setLoading]             = useState(false);
  const [error, setError]                 = useState("");
  const [phoneError, setPhoneError]       = useState("");

  const ccRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const getDigits    = (val: string) => val.replace(/\D/g, "");

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
    if (!name || !email || !phone || !grade || !score || !stream || !field || selectedCountries.length === 0) {
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

  if (loading) {
    return (
      <div className="ep-loading">
        <div className="ep-spinner" />
        <div className="ep-loading-text">
          Building your personalised dashboard<span className="ep-dots" />
        </div>
        <div className="ep-loading-sub">Analysing your profile with AI</div>
      </div>
    );
  }

  return (
    <div className="ep-onboarding">
      <div className="ep-card">
        <div className="ep-logo">Edu<span>Path</span></div>
        <p className="ep-sub">
          AI-powered university application planner for students in grades 8–12. Fill in your
          details and we&apos;ll build your personalised dashboard instantly.
        </p>

        {/* Name */}
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

        {/* Email + Phone */}
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

              {/* ── Custom Country Code Picker ── */}
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
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                  >
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {ccOpen && (
                  <ul className="ep-cc-menu" role="listbox">
                    {COUNTRY_CODES.map((cc, i) => (
                      <li
                        key={`${cc.name}-${i}`}
                        role="option"
                        aria-selected={selectedCC.name === cc.name}
                        className={`ep-cc-option${selectedCC.name === cc.name ? " active" : ""}`}
                        onClick={() => { setSelectedCC(cc); setCcOpen(false); }}
                      >
                        <span className="ep-cc-flag">{cc.flag}</span>
                        <span className="ep-cc-name">{cc.name}</span>
                        <span className="ep-cc-num">{cc.code}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Phone digits input */}
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
            {phoneError && <span className="ep-field-error">{phoneError}</span>}
          </div>
        </div>

        {/* Grade + Score */}
        <div className="ep-grid-2">
          <div className="ep-field">
            <label className="ep-label">Current Grade</label>
            <select className="ep-input" value={grade} onChange={(e) => setGrade(e.target.value)}>
              <option value="">Select grade</option>
              {[8, 9, 10, 11, 12].map((g) => (
                <option key={g} value={g}>{g}th Grade</option>
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

        {/* Stream */}
        <div className="ep-field">
          <label className="ep-label">Stream / Subject Focus</label>
          <select className="ep-input" value={stream} onChange={(e) => setStream(e.target.value)}>
            <option value="">Select stream</option>
            <option value="Science (PCM)">Science — PCM (Engineering / Tech)</option>
            <option value="Science (PCB)">Science — PCB (Medicine / Biology)</option>
            <option value="Commerce">Commerce (Business / Finance)</option>
            <option value="Humanities">Humanities / Arts / Social Sciences</option>
            <option value="Undecided">Undecided / Exploring</option>
          </select>
        </div>

        {/* Countries */}
        <div className="ep-field">
          <label className="ep-label">Countries You Want to Apply To</label>
          <div className="ep-country-grid">
            {COUNTRIES.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`ep-cpill${selectedCountries.includes(c.value) ? " active" : ""}`}
                onClick={() => toggleCountry(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Field of Study */}
        <div className="ep-field">
          <label className="ep-label">Intended Field of Study</label>
          <select className="ep-input" value={field} onChange={(e) => setField(e.target.value)}>
            <option value="">Select field</option>
            <option>Computer Science / AI / Data Science</option>
            <option>Engineering (Mechanical / Civil / EE)</option>
            <option>Medicine / Pre-Med</option>
            <option>Business / Economics</option>
            <option>Law / Political Science</option>
            <option>Design / Architecture</option>
            <option>Life Sciences / Biotech</option>
            <option>Liberal Arts / Humanities</option>
            <option>Media / Communications</option>
            <option>Not decided yet</option>
          </select>
        </div>

        {error && <div className="ep-error">{error}</div>}

        <button className="ep-btn-primary" onClick={handleSubmit}>
          ✦ Generate My AI Dashboard
        </button>
      </div>
    </div>
  );
}