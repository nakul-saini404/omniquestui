"use client";

import type { StudentData, Country } from "@/types/edupath";
import { COUNTRY_FLAGS } from "@/lib/edupath-data";

// ─── Field-specific taglines ───────────────────────────────────────────────────
function getFieldTagline(field: string, countries: Country[]): string {
  const f = field.toLowerCase();
  const c = countries[0];

  if (f.includes("computer science") || f.includes("ai") || f.includes("data")) {
    if (c === "India") return "Your path to IIT / BITS / NIT through JEE";
    if (c === "UK") return "Cambridge ESAT · Imperial · UCL Computer Science";
    if (c === "USA") return "MIT · Stanford · CMU · Georgia Tech";
    return "Top CS programs in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("engineering")) {
    if (c === "India") return "Your path to IIT / NIT / BITS through JEE";
    if (c === "Germany") return "TU Munich · RWTH Aachen · KIT — World-class & free";
    if (c === "UK") return "Imperial · Cambridge · Edinburgh Engineering";
    return "Top Engineering programs in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("medicine") || f.includes("pre-med")) {
    if (c === "India") return "Your path to AIIMS / CMC through NEET-UG";
    if (c === "UK") return "Cambridge · Edinburgh · KCL Medicine (UCAT required)";
    if (c === "USA") return "Pre-Med track → Top US Medical Schools";
    return "Medicine pathway in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("business") || f.includes("economics")) {
    if (c === "India") return "SRCC · IIM IPM · Ashoka through CUET / IPMAT";
    if (c === "UK") return "LSE · Warwick · Cambridge Economics";
    if (c === "USA") return "Wharton · NYU Stern · Michigan Ross";
    return "Top Business programs in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("law") || f.includes("political")) {
    if (c === "India") return "NLUs through CLAT · NLU Delhi through AILET";
    if (c === "UK") return "Oxford · Cambridge · UCL Law (LNAT required)";
    return "Law & Political Science in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("design") || f.includes("architecture")) {
    if (c === "India") return "NID · IIT Design (UCEED) · NIFT through portfolio";
    if (c === "UK") return "Royal College of Art · UAL · Architecture portfolio";
    return "Design & Architecture in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("life sciences") || f.includes("biotech")) {
    if (c === "India") return "IISERs · IISc · DU Biotechnology through CUET / IAT";
    return "Life Sciences & Biotech in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("liberal arts") || f.includes("humanities")) {
    if (c === "India") return "Ashoka · KREA · St. Stephen's · DU through CUET";
    if (c === "USA") return "Liberal Arts Colleges · Ivy League Humanities";
    return "Liberal Arts & Humanities in " + countries.slice(0, 2).join(" & ");
  }
  if (f.includes("media") || f.includes("communication")) {
    if (c === "India") return "IIMC · Xavier's · Symbiosis Media programs";
    return "Media & Communications in " + countries.slice(0, 2).join(" & ");
  }
  return "University applications in " + countries.slice(0, 2).join(" & ");
}

// ─── HeroSection ──────────────────────────────────────────────────────────────
export function HeroSection({
  data,
  predictedFinal,
}: {
  data: StudentData;
  predictedFinal: number;
}) {
  const { name, grade, stream, field, countries } = data;
  const firstName = name.split(" ")[0];
  const yearsLeft = 12 - grade;
  const tagline   = getFieldTagline(field, countries);

  return (
    <div className="ep-hero">
      <div>
        <div className="ep-hero-title">
          Hey {firstName}, your roadmap is ready! 🎯
        </div>
        <div className="ep-hero-sub">
          You&apos;re in Grade {grade} studying {stream}, targeting{" "}
          <strong style={{ color: "var(--ep-accent)" }}>{field}</strong>. We&apos;ve
          mapped your path to {countries.length} countr
          {countries.length > 1 ? "ies" : "y"} based on your profile.{" "}
          {yearsLeft > 0
            ? `You have ~${yearsLeft} year${yearsLeft > 1 ? "s" : ""} to strengthen your application.`
            : "Application season is NOW — let's get moving!"}
        </div>

        {/* Field-specific pathway hint */}
        <div
          style={{
            marginTop: 10,
            fontSize: 12,
            color: "var(--ep-text-muted)",
            background: "rgba(99,102,241,.08)",
            border: "1px solid rgba(99,102,241,.2)",
            borderRadius: 8,
            padding: "6px 12px",
            display: "inline-block",
          }}
        >
          🎯 <strong style={{ color: "#818cf8" }}>Your pathway:</strong> {tagline}
        </div>

        <div className="ep-hero-badges" style={{ marginTop: 10 }}>
          <span className="ep-badge ep-badge-blue">📚 {stream}</span>
          <span className="ep-badge ep-badge-green">🎓 Grade {grade}</span>
          <span className="ep-badge ep-badge-gold">🏫 {field.split("/")[0].trim()}</span>
          {countries.map((c) => (
            <span key={c} className="ep-badge ep-badge-purple">
              {COUNTRY_FLAGS[c]} {c}
            </span>
          ))}
        </div>
      </div>
      <div className="ep-hero-glow" />
    </div>
  );
}

// ─── StatsRow ─────────────────────────────────────────────────────────────────
export function StatsRow({
  score,
  predictedFinal,
  satEst,
  uniCount,
  countries,
}: {
  score: number;
  predictedFinal: number;
  satEst: number;
  uniCount: number;
  countries: Country[];
}) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { scoreLabel } = require("@/lib/edupath-data");
  const hasSAT     = countries.includes("USA");
  const satDisplay = hasSAT ? satEst : "N/A";
  const satHint    = hasSAT
    ? "Based on current academics"
    : "Not required for your countries";

  return (
    <div className="ep-stats-row">
      <div className="ep-stat-card">
        <div className="ep-stat-label">Current Score</div>
        <div className="ep-stat-value ep-val-blue">{score}%</div>
        <div className="ep-stat-hint">{scoreLabel(score)} performance</div>
        <div className="ep-stat-icon">📊</div>
      </div>
      <div className="ep-stat-card">
        <div className="ep-stat-label">Predicted 12th %</div>
        <div className="ep-stat-value ep-val-gold">{predictedFinal.toFixed(0)}%</div>
        <div className="ep-stat-hint">AI estimate based on trend</div>
        <div className="ep-stat-icon">🔮</div>
      </div>
      <div className="ep-stat-card">
        <div className="ep-stat-label">SAT Estimate</div>
        <div className="ep-stat-value ep-val-purple">{satDisplay}</div>
        <div className="ep-stat-hint">{satHint}</div>
        <div className="ep-stat-icon">✏️</div>
      </div>
      <div className="ep-stat-card">
        <div className="ep-stat-label">Universities Matched</div>
        <div className="ep-stat-value ep-val-green">{uniCount}</div>
        <div className="ep-stat-hint">
          Across {countries.length} countr{countries.length > 1 ? "ies" : "y"}
        </div>
        <div className="ep-stat-icon">🏫</div>
      </div>
    </div>
  );
}

// ─── AIInsight ────────────────────────────────────────────────────────────────
export function AIInsight({ text, loading }: { text: string; loading: boolean }) {
  return (
    <div className="ep-section-card ep-mb">
      <div className="ep-section-title">
        <span className="ep-dot" />
        AI Profile Insight
      </div>
      <div className="ep-ai-box">
        <div className="ep-ai-label">✦ AI Analysis</div>
        {loading ? (
          <div className="ep-ai-skeleton">
            <div className="ep-skel-line ep-skel-80" />
            <div className="ep-skel-line ep-skel-60" />
          </div>
        ) : (
          <div>{text}</div>
        )}
      </div>
    </div>
  );
}