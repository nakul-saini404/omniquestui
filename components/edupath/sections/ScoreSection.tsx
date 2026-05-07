"use client";

import { useState } from "react";
import type { Country, Grade, Stream } from "@/types/edupath";
import {
  COUNTRY_FLAGS,
  getCountryAdmissionTimeline,
  type UniAdmissionEvent,
} from "@/lib/edupath-data";

// ─────────────────────────────────────────────────────────────────────────────
// SCORE SECTION
// ─────────────────────────────────────────────────────────────────────────────

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
          🇬🇧 UK uses UCAS — no SAT needed. IELTS for UKVI Academic required for student visa.
        </div>
      )}

      {(countries.includes("Germany") || countries.includes("Netherlands")) && (
        <div className="ep-info-pill" style={{ marginTop: 8 }}>
          🇩🇪🇳🇱 EU universities: Low/no tuition. German B2 for German programmes. IELTS 6.5+ for English tracks.
        </div>
      )}

      {countries.includes("India") && (
        <div className="ep-info-pill" style={{ marginTop: 8 }}>
          🇮🇳 India: Entrance exam scores (JEE/NEET/CUET) are what matter most alongside board %
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

// ─────────────────────────────────────────────────────────────────────────────
// SHARED CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const TYPE_META: Record<
  UniAdmissionEvent["type"],
  { color: string; bg: string; border: string; label: string }
> = {
  exam:     { color: "#a78bfa", bg: "rgba(167,139,250,.12)", border: "rgba(167,139,250,.25)", label: "Exam"      },
  open:     { color: "#60a5fa", bg: "rgba(96,165,250,.12)",  border: "rgba(96,165,250,.25)",  label: "App opens" },
  deadline: { color: "#f87171", bg: "rgba(239,68,68,.12)",   border: "rgba(239,68,68,.25)",   label: "Deadline"  },
  result:   { color: "#34d399", bg: "rgba(52,211,153,.12)",  border: "rgba(52,211,153,.25)",  label: "Result"    },
  visa:     { color: "#c084fc", bg: "rgba(192,132,252,.12)", border: "rgba(192,132,252,.25)", label: "Visa"      },
  travel:   { color: "#2dd4bf", bg: "rgba(45,212,191,.12)",  border: "rgba(45,212,191,.25)",  label: "Travel"    },
};

const SCORE_PILL: Record<"green" | "amber" | "blue", { bg: string; border: string; color: string }> = {
  green: { bg: "rgba(52,211,153,.15)",  border: "rgba(52,211,153,.3)",  color: "#34d399" },
  amber: { bg: "rgba(251,191,36,.15)",  border: "rgba(251,191,36,.3)",  color: "#fbbf24" },
  blue:  { bg: "rgba(96,165,250,.15)",  border: "rgba(96,165,250,.3)",  color: "#60a5fa" },
};

// ─────────────────────────────────────────────────────────────────────────────
// PER-COUNTRY ADMISSION SUMMARY
// ─────────────────────────────────────────────────────────────────────────────

interface AdmissionSummary {
  windowLabel: string;
  mode: string;
  keyReq: string;
  intakeLabel: string;
}

const COUNTRY_ADMISSION_SUMMARY: Record<Country, AdmissionSummary> = {
  USA: {
    windowLabel : "Aug – Jan",
    mode        : "Common App · Essays · Recs · Test scores",
    keyReq      : "SAT 1400+  ·  TOEFL 100+ or IELTS 7.0+",
    intakeLabel : "Fall intake (Aug – Sep)",
  },
  UK: {
    windowLabel : "Sep – Jan 15",
    mode        : "UCAS · Personal Statement · Predicted grades",
    keyReq      : "IELTS for UKVI 7.0+  ·  ESAT / UCAT / TMUA / LNAT where applicable",
    intakeLabel : "September intake",
  },
  Canada: {
    windowLabel : "Oct – Feb",
    mode        : "Grades · Supplementary essays · IELTS / TOEFL",
    keyReq      : "IELTS 6.5+  ·  85%+ academics",
    intakeLabel : "September intake",
  },
  Australia: {
    windowLabel : "Aug – Jan",
    mode        : "Academic record · IELTS · Personal statement",
    keyReq      : "IELTS 6.5–7.0+  ·  GTE statement for visa",
    intakeLabel : "Feb & Jul intakes",
  },
  Germany: {
    windowLabel : "Nov – Jun",
    mode        : "uni-assist · APS certificate · Motivation letter",
    keyReq      : "APS certificate (mandatory)  ·  German B2 or IELTS 6.5+",
    intakeLabel : "Winter (Oct) & Summer (Apr)",
  },
  Netherlands: {
    windowLabel : "Jan – May",
    mode        : "Studielink · IELTS · Motivation letter",
    keyReq      : "IELTS 6.5+  ·  Numerus fixus by Jan 15",
    intakeLabel : "September intake",
  },
  Singapore: {
    windowLabel : "Dec – Mar",
    mode        : "Direct university portal · IELTS / TOEFL · Interview",
    keyReq      : "IELTS 6.5+  ·  88–92%+ academics",
    intakeLabel : "August intake",
  },
  Japan: {
    windowLabel : "Sep – Dec",
    mode        : "Direct portal · MEXT / JASSO scholarship · Interview",
    keyReq      : "IELTS 6.5+ or JLPT N2  ·  MEXT application Apr–May",
    intakeLabel : "April intake",
  },
  India: {
    windowLabel : "Nov – Jun",
    mode        : "JEE / NEET / CUET / IPMAT / Own entrance test",
    keyReq      : "JEE 99%ile for IIT  ·  NEET 650+ for AIIMS  ·  CUET 95%ile for top DU",
    intakeLabel : "July – August intake",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE REQUIREMENTS
// ─────────────────────────────────────────────────────────────────────────────

interface ProfileReq {
  icon: string;
  label: string;
  note: string;
  score: string;
  scoreColor: "green" | "amber" | "blue";
}

const EXAM_REQS: Record<string, ProfileReq[]> = {
  SAT: [
    { icon: "📐", label: "SAT target",        note: "1400+ for most US schools; 1500+ for MIT / CMU / Ivy",                   score: "1400+",  scoreColor: "green" },
    { icon: "📊", label: "Academic baseline",  note: "Maintain 85%+ boards alongside SAT prep",                               score: "85%+",   scoreColor: "amber" },
  ],
  IELTS: [
    { icon: "🗣️", label: "IELTS Academic",    note: "7.0+ overall, no band below 6.5; Oxford/Cambridge require 7.5+",        score: "7.0+",   scoreColor: "green" },
    { icon: "⚠️", label: "UK visa note",       note: "Must be IELTS for UKVI Academic — NOT standard IELTS",                 score: "UKVI",   scoreColor: "amber" },
  ],
  TOEFL: [
    { icon: "💬", label: "TOEFL iBT",          note: "100+ for competitive schools; 110+ for Ivy / top-10 US",               score: "100+",   scoreColor: "green" },
  ],
  UCAT: [
    { icon: "🩺", label: "UCAT overall",       note: "2700+ overall; Edinburgh 2900+; KCL 2800+; Manchester 2700+",          score: "2700+",  scoreColor: "green" },
    { icon: "🎯", label: "SJT Band",           note: "Band 1 or 2 is equally important as the numerical score",             score: "Band 1", scoreColor: "amber" },
  ],
  ESAT: [
    { icon: "⚗️", label: "ESAT percentile",   note: "Top 25–30% nationally — no fixed cutoff. A-level depth required",      score: "Top 25%", scoreColor: "green" },
    { icon: "📚", label: "Content depth",      note: "Significantly harder than CBSE 12th. Needs 4+ months prep",           score: "A-level", scoreColor: "amber" },
  ],
  TMUA: [
    { icon: "🔢", label: "TMUA score",         note: "6.5+ for Cambridge; 7.0+ is exceptional. LSE benefits from 6.5+",     score: "6.5+",   scoreColor: "green" },
    { icon: "📐", label: "Paper 2 reasoning",  note: "Mathematical reasoning — unlike CBSE. Needs dedicated prep",          score: "Paper 2", scoreColor: "amber" },
  ],
  JEE: [
    { icon: "📊", label: "JEE Main",           note: "99+ percentile needed for JEE Advanced eligibility (IIT entry)",      score: "99%ile", scoreColor: "green" },
    { icon: "📊", label: "JEE Advanced rank",  note: "Top 500 → IIT Bombay CS; Top 2000 → IIT Kharagpur",                  score: "Top 500", scoreColor: "amber" },
  ],
  NEET: [
    { icon: "🩺", label: "NEET score",         note: "650+ for AIIMS (top 50 rank); 550+ for govt medical colleges",        score: "650/720", scoreColor: "green" },
    { icon: "🔬", label: "Biology depth",      note: "NCERT Biology line-by-line. Physics + Chemistry 85%+",               score: "NCERT",  scoreColor: "amber" },
  ],
  LNAT: [
    { icon: "⚖️", label: "LNAT score",         note: "25+ out of 42 for competitive Oxford/UCL applications",               score: "25+/42", scoreColor: "green" },
    { icon: "📝", label: "Essay component",    note: "40-minute essay is equally weighted. Argue clearly and concisely",    score: "Essay",  scoreColor: "amber" },
  ],
  CLAT: [
    { icon: "⚖️", label: "CLAT rank",          note: "Top 1000 for NLSIU Bangalore; Top 5000 for all NLUs",                score: "Top 1K", scoreColor: "green" },
    { icon: "📰", label: "GK/Current Affairs", note: "CLAT tests extensively on GK and current legal affairs",             score: "Daily GK", scoreColor: "amber" },
  ],
  NATA: [
    { icon: "🎨", label: "NATA score",         note: "100+/200 for top architecture colleges. Multiple attempts allowed",   score: "100+/200", scoreColor: "green" },
    { icon: "✏️", label: "Drawing test",       note: "Freehand drawing is heavily tested. Practice daily",                 score: "Daily",  scoreColor: "amber" },
  ],
  CUET: [
    { icon: "📊", label: "CUET percentile",    note: "95–99 percentile for SRCC/Miranda House. 90%+ for most DU colleges",  score: "95%ile", scoreColor: "green" },
    { icon: "📚", label: "Domain subjects",    note: "Score highly in your domain subjects (Economics, Commerce, etc.)",   score: "Domain", scoreColor: "amber" },
  ],
};

function profileReqsFor(ev: UniAdmissionEvent): ProfileReq[] {
  const t = ev.title.toLowerCase();
  const d = ev.description.toLowerCase();

  if (t.includes("sat")   || d.includes("sat"))   return EXAM_REQS.SAT;
  if (t.includes("ielts") || d.includes("ielts")) return EXAM_REQS.IELTS;
  if (t.includes("toefl") || d.includes("toefl")) return EXAM_REQS.TOEFL;
  if (t.includes("ucat")  || d.includes("ucat"))  return EXAM_REQS.UCAT;
  if (t.includes("esat")  || d.includes("esat"))  return EXAM_REQS.ESAT;
  if (t.includes("tmua")  || d.includes("tmua"))  return EXAM_REQS.TMUA;
  if (t.includes("jee"))                           return EXAM_REQS.JEE;
  if (t.includes("neet"))                          return EXAM_REQS.NEET;
  if (t.includes("lnat"))                          return EXAM_REQS.LNAT;
  if (t.includes("clat"))                          return EXAM_REQS.CLAT;
  if (t.includes("nata"))                          return EXAM_REQS.NATA;
  if (t.includes("cuet"))                          return EXAM_REQS.CUET;

  if (ev.type === "open") return [
    { icon: "📝", label: "Activities profile",        note: "8–10 quality activities with leadership & consistency",        score: "8–10",   scoreColor: "blue"  },
    { icon: "👩‍🏫", label: "Teacher recommendations", note: "Request at least 2 recs early — they need 4–6 weeks",         score: "2 recs", scoreColor: "amber" },
  ];
  if (ev.type === "visa") return [
    { icon: "🏦", label: "Bank statements",            note: "1 year tuition + living. Continuous balance — not last-minute deposits", score: "1yr+",    scoreColor: "green" },
    { icon: "📄", label: "Documents",                  note: "Admission letter, English scores, transcripts — originals + copies",    score: "Complete", scoreColor: "amber" },
  ];
  if (ev.type === "deadline") return [
    { icon: "✅", label: "Submission checklist",       note: "Transcripts, scores, essays, recs — verify each is received by portal", score: "100%",   scoreColor: "green" },
  ];
  return [];
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function MonthTrack({
  events,
  onMonthClick,
}: {
  events: UniAdmissionEvent[];
  onMonthClick: (key: string) => void;
}) {
  const nowMonth = new Date().getMonth();
  const nowYear  = new Date().getFullYear();

  const monthMap: Record<string, UniAdmissionEvent["type"]> = {};
  events.forEach((ev) => {
    const k = `${ev.year}-${ev.monthIndex}`;
    if (!monthMap[k]) monthMap[k] = ev.type;
  });

  const years = Array.from(new Set(events.map((e) => e.year))).sort();

  return (
    <div style={{ overflowX: "auto", paddingBottom: 6, marginBottom: 14 }}>
      <div style={{ display: "flex", gap: 3, minWidth: "max-content" }}>
        {years.map((yr) =>
          Array.from({ length: 12 }, (_, m) => {
            const key     = `${yr}-${m}`;
            const type    = monthMap[key];
            const isPast  = yr < nowYear || (yr === nowYear && m < nowMonth);
            const isCurr  = yr === nowYear && m === nowMonth;
            const meta    = type ? TYPE_META[type] : null;
            const dotColor = isCurr ? "#34d399" : meta ? meta.color : undefined;

            return (
              <div
                key={key}
                onClick={() => type && onMonthClick(key)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  cursor: type ? "pointer" : "default",
                  userSelect: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    color: "var(--ep-muted)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    textAlign: "center",
                  }}
                >
                  {MONTHS_SHORT[m]}
                  <br />
                  <span style={{ fontSize: 8, opacity: 0.7 }}>{String(yr).slice(2)}</span>
                </span>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    boxSizing: "border-box",
                    border: isCurr
                      ? "2px solid #34d399"
                      : meta
                      ? `1.5px solid ${meta.color}`
                      : "0.5px solid var(--ep-border)",
                    background: isCurr
                      ? "rgba(16,185,129,.15)"
                      : meta
                      ? `${meta.color}18`
                      : "var(--ep-surface2)",
                    opacity: isPast && meta ? 0.4 : 1,
                    outline: isCurr ? "3px solid rgba(16,185,129,.18)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all .12s",
                  }}
                >
                  {dotColor && (
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: dotColor,
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
      {Object.entries(TYPE_META).map(([type, m]) => (
        <div
          key={type}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 10,
            color: "var(--ep-muted)",
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: m.color,
            }}
          />
          {m.label}
        </div>
      ))}
    </div>
  );
}

function ProfileBox({ reqs }: { reqs: ProfileReq[] }) {
  if (!reqs.length) return null;
  return (
    <div
      style={{
        background: "var(--ep-surface2)",
        borderRadius: 8,
        padding: "9px 11px",
        border: "0.5px solid var(--ep-border)",
        marginTop: 10,
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: "var(--ep-muted)",
          marginBottom: 7,
        }}
      >
        🎯 Profile strength requirements
      </div>
      {reqs.map((r, i) => {
        const p = SCORE_PILL[r.scoreColor];
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 7,
              paddingTop: 5,
              paddingBottom: 5,
              borderBottom:
                i < reqs.length - 1 ? "0.5px solid var(--ep-border)" : "none",
            }}
          >
            <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{r.icon}</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ep-text)",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  flexWrap: "wrap",
                }}
              >
                {r.label}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "1px 6px",
                    borderRadius: 999,
                    fontSize: 10,
                    fontWeight: 700,
                    background: p.bg,
                    border: `0.5px solid ${p.border}`,
                    color: p.color,
                  }}
                >
                  {r.score}
                </span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--ep-muted)",
                  lineHeight: 1.5,
                  marginTop: 2,
                }}
              >
                {r.note}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function EventCard({
  event,
  isOpen,
  onToggle,
  cardId,
}: {
  event: UniAdmissionEvent;
  isOpen: boolean;
  onToggle: () => void;
  cardId: string;
}) {
  const nowMonth = new Date().getMonth();
  const nowYear  = new Date().getFullYear();
  const isPast   =
    event.year < nowYear ||
    (event.year === nowYear && event.monthIndex < nowMonth);
  const isCurr   = event.year === nowYear && event.monthIndex === nowMonth;
  const meta     = TYPE_META[event.type] ?? TYPE_META.open;
  const reqs     = profileReqsFor(event);

  return (
    <div
      id={cardId}
      style={{
        borderRadius: 10,
        border: "0.5px solid var(--ep-border)",
        overflow: "hidden",
        opacity: isPast ? 0.5 : 1,
      }}
    >
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: "9px 11px",
          cursor: "pointer",
          background: "var(--ep-surface2)",
          userSelect: "none",
        }}
      >
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: isPast ? "rgba(255,255,255,.22)" : meta.color,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: isPast ? "var(--ep-muted)" : meta.color,
            flexShrink: 0,
            minWidth: 88,
          }}
        >
          {event.month}
        </span>
        <div
          style={{
            flex: 1,
            fontSize: 12,
            fontWeight: 600,
            color: "var(--ep-text)",
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {event.title}
          {isCurr && (
            <span
              style={{
                fontSize: 10,
                padding: "1px 6px",
                borderRadius: 999,
                fontWeight: 800,
                background: "rgba(16,185,129,.15)",
                border: "0.5px solid rgba(16,185,129,.3)",
                color: "#34d399",
              }}
            >
              ← Now
            </span>
          )}
          {isPast && (
            <span
              style={{ fontSize: 10, color: "var(--ep-muted)", fontWeight: 400 }}
            >
              ✓ Done
            </span>
          )}
          {event.urgent && !isPast && (
            <span
              style={{
                fontSize: 10,
                padding: "1px 6px",
                borderRadius: 999,
                fontWeight: 700,
                background: "rgba(239,68,68,.12)",
                border: "0.5px solid rgba(239,68,68,.25)",
                color: "#fca5a5",
              }}
            >
              ⚠ Urgent
            </span>
          )}
        </div>
        <span
          style={{
            fontSize: 10,
            padding: "2px 5px",
            borderRadius: 4,
            fontWeight: 600,
            textTransform: "uppercase",
            flexShrink: 0,
            background: meta.bg,
            border: `0.5px solid ${meta.border}`,
            color: meta.color,
          }}
        >
          {meta.label}
        </span>
        <span
          style={{
            fontSize: 12,
            color: "var(--ep-muted)",
            flexShrink: 0,
            display: "inline-block",
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform .2s",
          }}
        >
          ▾
        </span>
      </div>

      {isOpen && (
        <div
          style={{
            padding: "11px 13px",
            background: "var(--ep-surface)",
            borderTop: "0.5px solid var(--ep-border)",
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "var(--ep-muted)",
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            {event.description}
          </p>
          {reqs.length > 0 && <ProfileBox reqs={reqs} />}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY ADMISSION SUMMARY HEADER
// ─────────────────────────────────────────────────────────────────────────────

function AdmissionSummaryHeader({ country }: { country: Country }) {
  const s = COUNTRY_ADMISSION_SUMMARY[country];
  if (!s) return null;

  const rows: { icon: string; label: string; value: string }[] = [
    { icon: "📅", label: "Application window", value: s.windowLabel  },
    { icon: "📋", label: "Admission mode",     value: s.mode         },
    { icon: "🎯", label: "Key requirements",   value: s.keyReq       },
    { icon: "🗓️", label: "Intake",             value: s.intakeLabel  },
  ];

  return (
    <div
      style={{
        background: "var(--ep-surface2)",
        border: "0.5px solid var(--ep-border)",
        borderRadius: 10,
        padding: "11px 13px",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "var(--ep-text)",
          marginBottom: 9,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {COUNTRY_FLAGS[country]} {country} — Admission at a glance
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6px 14px",
        }}
      >
        {rows.map((r) => (
          <div
            key={r.label}
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <span
              style={{
                fontSize: 10,
                color: "var(--ep-muted)",
                fontWeight: 500,
              }}
            >
              {r.icon} {r.label}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--ep-text)",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERAL TIMELINE (grades 8–10 or no country selected)
// ─────────────────────────────────────────────────────────────────────────────

const GENERAL_TIMELINE_DATA: Record<
  number,
  { month: number; title: string; desc: string }[]
> = {
  12: [
    { month: 6,  title: "Begin Applications",      desc: "Start filling Common App / UCAS / country-specific forms." },
    { month: 8,  title: "SAT / IELTS Tests",        desc: "Take standardised tests. Retake if needed." },
    { month: 9,  title: "Finalize Shortlist",       desc: "Select 8–12 universities across reach/target/safety tiers." },
    { month: 10, title: "Submit Applications",      desc: "Early Decision / Action deadlines. Submit well before deadline." },
    { month: 11, title: "Financial Aid Docs",       desc: "File FAFSA (USA), scholarship applications, bank statements." },
    { month: 2,  title: "Decisions Arrive",         desc: "March–April: Accept/decline offers. Enrollment deadline May 1." },
  ],
  11: [
    { month: 5,  title: "Explore Countries & Fields", desc: "Research programs. Attend virtual open days." },
    { month: 7,  title: "SAT / ACT Prep Begins",      desc: "Enroll in prep courses. Aim for first attempt in Oct/Nov." },
    { month: 9,  title: "Build Activities Profile",   desc: "Clubs, competitions, internships, research projects." },
    { month: 11, title: "Finalize Stream & Subjects", desc: "Confirm 12th subjects align with target program requirements." },
    { month: 1,  title: "Draft Personal Statement",   desc: "Start brainstorming essays. Seek teacher feedback." },
  ],
  10: [
    { month: 4,  title: "Career Exploration",       desc: "Shadow professionals, take aptitude tests, attend seminars." },
    { month: 7,  title: "Choose 11th Stream",       desc: "Align stream with target university requirements." },
    { month: 9,  title: "Build Portfolio",          desc: "Science fairs, olympiads, community service, online courses." },
    { month: 0,  title: "Research Programs",        desc: "Shortlist 20 universities across countries. Visit websites." },
  ],
  9: [
    { month: 4,  title: "Skill Building",           desc: "Coding, debate, sports — build well-rounded profile." },
    { month: 8,  title: "Academic Excellence",      desc: "Aim for consistent 85%+ in core subjects." },
    { month: 11, title: "English Proficiency",      desc: "Start reading English books, news. Vocab building." },
    { month: 2,  title: "First Country Research",   desc: "Pick 3 dream countries. Watch YouTube tours of universities." },
  ],
  8: [
    { month: 3,  title: "Discover Your Passion",       desc: "Try coding, design, science, writing — find what clicks." },
    { month: 6,  title: "Join Clubs & Activities",     desc: "School clubs, reading, sports, arts." },
    { month: 9,  title: "Strong Academic Foundation",  desc: "Prioritize Math, Science, English consistently." },
    { month: 11, title: "Dream Big",                   desc: "Browse university websites. Watch campus tours." },
  ],
};

function GeneralTimeline({ grade }: { grade: Grade }) {
  const items = GENERAL_TIMELINE_DATA[grade] ?? GENERAL_TIMELINE_DATA[12];
  const nowMonth = new Date().getMonth();
  let activeSet = false;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-green" />
        Application Timeline
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => {
          const done     = item.month < nowMonth && grade === 12;
          const isActive = !done && !activeSet ? ((activeSet = true), true) : false;
          const isOpen   = openIdx === i;
          const dotColor = done
            ? "rgba(255,255,255,.2)"
            : isActive
            ? "#34d399"
            : "rgba(255,255,255,.35)";

          return (
            <div
              key={i}
              style={{
                border: "0.5px solid var(--ep-border)",
                borderRadius: 10,
                overflow: "hidden",
                opacity: done ? 0.5 : 1,
              }}
            >
              <div
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 11px",
                  cursor: "pointer",
                  background: "var(--ep-surface2)",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: dotColor,
                    border: isActive ? "2px solid #34d399" : "none",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: isActive ? "#34d399" : "var(--ep-muted)",
                    minWidth: 52,
                    flexShrink: 0,
                  }}
                >
                  {MONTHS_SHORT[item.month]}
                  {done ? " ✓" : isActive ? " ← Now" : ""}
                </span>
                <span
                  style={{
                    flex: 1,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--ep-text)",
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--ep-muted)",
                    display: "inline-block",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform .2s",
                  }}
                >
                  ▾
                </span>
              </div>
              {isOpen && (
                <div
                  style={{
                    padding: "10px 13px",
                    background: "var(--ep-surface)",
                    borderTop: "0.5px solid var(--ep-border)",
                    fontSize: 12,
                    color: "var(--ep-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE SECTION (main export)
// ─────────────────────────────────────────────────────────────────────────────

export function TimelineSection({
  grade,
  countries = [],
  career    = "",
  stream    = "Undecided",
}: {
  grade: Grade;
  countries?: Country[];
  career?: string;
  stream?: Stream;
}) {
  const [activeCountry, setActiveCountry] = useState<Country | null>(
    countries.length > 0 ? countries[0] : null
  );
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const showCountryTimeline = countries.length > 0 && grade >= 11;
  if (!showCountryTimeline) return <GeneralTimeline grade={grade} />;

  const current = activeCountry ?? countries[0];
  const events  = getCountryAdmissionTimeline(current, stream);

  function toggleCard(id: string) {
    setOpenCards((prev) => {
      const next = new Set(Array.from(prev));
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleMonthClick(key: string) {
    const idx = events.findIndex(
      (ev) => `${ev.year}-${ev.monthIndex}` === key
    );
    if (idx === -1) return;
    const id = `ev-sc-${idx}`;
    setOpenCards((prev) => new Set(Array.from(prev).concat(id)));
    setTimeout(
      () =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "center" }),
      50
    );
  }

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
            marginBottom: 12,
          }}
        >
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActiveCountry(c);
                setOpenCards(new Set());
              }}
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                background:
                  current === c
                    ? "rgba(16,185,129,.15)"
                    : "var(--ep-surface2)",
                border: `1px solid ${
                  current === c
                    ? "rgba(16,185,129,.4)"
                    : "var(--ep-border)"
                }`,
                color: current === c ? "#34d399" : "var(--ep-muted)",
                fontFamily: "DM Sans, sans-serif",
                transition: "all .2s",
              }}
            >
              {COUNTRY_FLAGS[c]} {c}
            </button>
          ))}
        </div>
      )}

      <AdmissionSummaryHeader country={current} />

      {career && career !== "Not decided yet" && (
        <div
          style={{
            background: "rgba(139,92,246,.08)",
            border: "1px solid rgba(139,92,246,.2)",
            borderRadius: 8,
            padding: "7px 11px",
            marginBottom: 10,
            fontSize: 11,
            color: "#c4b5fd",
            fontWeight: 600,
          }}
        >
          🎯 Timeline filtered for: {career}
        </div>
      )}
      {stream && stream !== "Undecided" && (
        <div
          style={{
            background: "rgba(59,130,246,.07)",
            border: "1px solid rgba(59,130,246,.2)",
            borderRadius: 8,
            padding: "6px 11px",
            marginBottom: 12,
            fontSize: 11,
            color: "#93c5fd",
            fontWeight: 600,
          }}
        >
          📚 Stream: {stream}
        </div>
      )}

      <Legend />
      <MonthTrack events={events} onMonthClick={handleMonthClick} />

      {events.length === 0 ? (
        <div
          style={{
            padding: 20,
            textAlign: "center",
            color: "var(--ep-muted)",
            fontSize: 13,
          }}
        >
          No timeline events found for this combination.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {events.map((ev, i) => {
            const id = `ev-sc-${i}`;
            return (
              <EventCard
                key={id}
                cardId={id}
                event={ev}
                isOpen={openCards.has(id)}
                onToggle={() => toggleCard(id)}
              />
            );
          })}
        </div>
      )}

      {grade < 12 && (
        <div
          style={{
            marginTop: 14,
            padding: "9px 12px",
            borderRadius: 8,
            background: "rgba(59,130,246,.07)",
            border: "1px solid rgba(59,130,246,.18)",
            fontSize: 11,
            color: "var(--ep-muted)",
          }}
        >
          📌 You are in Grade {grade} — approximately {12 - grade} year
          {12 - grade !== 1 ? "s" : ""} before application season. The
          timeline above is for the{" "}
          <strong style={{ color: "var(--ep-text)" }}>2027 intake</strong>.
        </div>
      )}
    </div>
  );
}