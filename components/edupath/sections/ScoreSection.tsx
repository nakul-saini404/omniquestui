"use client";

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

// ─── TimelineSection ──────────────────────────────────────────────────────────
const TIMELINE_DATA: Record<
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

export function TimelineSection({ grade }: { grade: Grade }) {
  const items = TIMELINE_DATA[grade] ?? TIMELINE_DATA[12];
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