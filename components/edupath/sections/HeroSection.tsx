"use client";

import type { StudentData, Country } from "@/types/edupath";
import { COUNTRY_FLAGS } from "@/lib/edupath-data";

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

  return (
    <div className="ep-hero">
      <div>
        <div className="ep-hero-title">Hey {firstName}, your roadmap is ready! 🎯</div>
        <div className="ep-hero-sub">
          You&apos;re in Grade {grade} studying {stream}. We&apos;ve mapped your path to{" "}
          {countries.length} countr{countries.length > 1 ? "ies" : "y"} based on your profile.{" "}
          {yearsLeft > 0
            ? `You have ~${yearsLeft} year${yearsLeft > 1 ? "s" : ""} to strengthen your application.`
            : "Application season is NOW — let's get moving!"}
        </div>
        <div className="ep-hero-badges">
          <span className="ep-badge ep-badge-blue">📚 {stream}</span>
          <span className="ep-badge ep-badge-green">🎓 Grade {grade}</span>
          <span className="ep-badge ep-badge-gold">🏫 {field}</span>
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
  const { scoreLabel } = require("@/lib/edupath-data");
  const hasSAT = countries.includes("USA");

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
        <div className="ep-stat-value ep-val-purple">{hasSAT ? satEst : "N/A"}</div>
        <div className="ep-stat-hint">
          {hasSAT ? "Based on current academics" : "Not required for your countries"}
        </div>
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