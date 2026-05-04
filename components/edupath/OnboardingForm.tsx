"use client";

import { useState } from "react";
import type { StudentData, Country, Grade, Stream } from "@/types/edupath";

interface Props {
  onSubmit: (data: StudentData) => void;
}

const COUNTRIES: { value: Country; label: string }[] = [
  { value: "USA", label: "🇺🇸 United States" },
  { value: "UK", label: "🇬🇧 United Kingdom" },
  { value: "Canada", label: "🇨🇦 Canada" },
  { value: "Australia", label: "🇦🇺 Australia" },
  { value: "Germany", label: "🇩🇪 Germany" },
  { value: "Netherlands", label: "🇳🇱 Netherlands" },
  { value: "Singapore", label: "🇸🇬 Singapore" },
  { value: "Japan", label: "🇯🇵 Japan" },
  { value: "India", label: "🇮🇳 India (Top Colleges)" },
];

export default function OnboardingForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [stream, setStream] = useState<string>("");
  const [field, setField] = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleCountry = (c: Country) => {
    setSelectedCountries((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const handleSubmit = async () => {
    if (!name || !grade || !score || !stream || !field || selectedCountries.length === 0) {
      setError("Please fill in all fields and select at least one country.");
      return;
    }
    setError("");
    setLoading(true);

    // Small artificial delay for UX
    await new Promise((r) => setTimeout(r, 1800));

    onSubmit({
      name: name.trim(),
      grade: parseInt(grade) as Grade,
      score: parseFloat(score),
      stream: stream as Stream,
      field,
      countries: selectedCountries,
    });
  };

  if (loading) {
    return (
      <div className="ep-loading">
        <div className="ep-spinner" />
        <div className="ep-loading-text">
          Building your personalised dashboard
          <span className="ep-dots" />
        </div>
        <div className="ep-loading-sub">Analysing your profile with AI</div>
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
          AI-powered university application planner for students in grades 8–12. Fill in your
          details and we'll build your personalised dashboard instantly.
        </p>

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

        <div className="ep-grid-2">
          <div className="ep-field">
            <label className="ep-label">Current Grade</label>
            <select className="ep-input" value={grade} onChange={(e) => setGrade(e.target.value)}>
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

        <div className="ep-field">
          <label className="ep-label">Countries You Want to Apply To</label>
          <div className="ep-country-grid">
            {COUNTRIES.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`ep-cpill ${selectedCountries.includes(c.value) ? "active" : ""}`}
                onClick={() => toggleCountry(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

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