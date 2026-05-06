"use client";

import type { Country, Stream } from "@/types/edupath";
import {
  COUNTRY_FLAGS,
  getUnisForCountry,
  calcChance,
  showVisaTab,
  getUniExamRequirements,
  getCountryAdmissionTimeline,
  type University,
  type UniExamRequirement,
  type UniAdmissionEvent,
} from "@/lib/edupath-data";
import {
  EXAMS,
  VISA_DB,
  getExamsForCountry,
  getExamStatusForCountry,
  type Exam,
  type ExamStatus,
  type VisaInfo,
} from "@/lib/edupath-exams";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  countries: Country[];
  stream: Stream;
  predictedFinal: number;
  grade?: number;
}

type MainTab = "universities" | "exams" | "visa" | "timeline";

// ─── Colour helpers ───────────────────────────────────────────────────────────

const STATUS_COLORS: Record<
  ExamStatus,
  { bg: string; border: string; text: string; dot: string; badge: string }
> = {
  Mandatory: {
    bg: "rgba(239,68,68,.08)",
    border: "rgba(239,68,68,.25)",
    text: "#ef4444",
    dot: "#ef4444",
    badge: "rgba(239,68,68,.12)",
  },
  Recommended: {
    bg: "rgba(245,158,11,.08)",
    border: "rgba(245,158,11,.25)",
    text: "#f59e0b",
    dot: "#f59e0b",
    badge: "rgba(245,158,11,.12)",
  },
  Optional: {
    bg: "rgba(99,102,241,.08)",
    border: "rgba(99,102,241,.25)",
    text: "#818cf8",
    dot: "#6366f1",
    badge: "rgba(99,102,241,.12)",
  },
  "Not Required": {
    bg: "rgba(107,114,128,.06)",
    border: "rgba(107,114,128,.2)",
    text: "#9ca3af",
    dot: "#6b7280",
    badge: "rgba(107,114,128,.08)",
  },
};

const REQ_COLORS: Record<
  UniExamRequirement["required"],
  { bg: string; border: string; text: string; badge: string }
> = {
  Mandatory: {
    bg: "rgba(239,68,68,.07)",
    border: "rgba(239,68,68,.22)",
    text: "#ef4444",
    badge: "rgba(239,68,68,.12)",
  },
  Recommended: {
    bg: "rgba(245,158,11,.07)",
    border: "rgba(245,158,11,.22)",
    text: "#f59e0b",
    badge: "rgba(245,158,11,.12)",
  },
  Optional: {
    bg: "rgba(99,102,241,.07)",
    border: "rgba(99,102,241,.22)",
    text: "#818cf8",
    badge: "rgba(99,102,241,.12)",
  },
  "Not Required": {
    bg: "rgba(107,114,128,.05)",
    border: "rgba(107,114,128,.18)",
    text: "#9ca3af",
    badge: "rgba(107,114,128,.08)",
  },
};

const SAT_COLORS: Record<string, { bg: string; border: string; text: string; label: string }> = {
  Yes:         { bg: "rgba(239,68,68,.08)",  border: "rgba(239,68,68,.25)",  text: "#ef4444", label: "Required" },
  Recommended: { bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.25)", text: "#f59e0b", label: "Recommended" },
  Optional:    { bg: "rgba(99,102,241,.08)", border: "rgba(99,102,241,.25)", text: "#818cf8", label: "Optional" },
  No:          { bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.25)", text: "#10b981", label: "Not Required" },
};

const TIMELINE_TYPE_COLORS: Record<
  UniAdmissionEvent["type"],
  { bg: string; border: string; dot: string; label: string; icon: string }
> = {
  exam:     { bg: "rgba(239,68,68,.06)",  border: "rgba(239,68,68,.18)",  dot: "#f87171", label: "Exam",       icon: "✏️" },
  open:     { bg: "rgba(59,130,246,.06)", border: "rgba(59,130,246,.18)", dot: "#60a5fa", label: "Opens",      icon: "📋" },
  deadline: { bg: "rgba(245,158,11,.06)", border: "rgba(245,158,11,.18)", dot: "#fbbf24", label: "Deadline",   icon: "⚠️" },
  result:   { bg: "rgba(16,185,129,.06)", border: "rgba(16,185,129,.18)", dot: "#34d399", label: "Results",    icon: "🎉" },
  visa:     { bg: "rgba(139,92,246,.06)", border: "rgba(139,92,246,.18)", dot: "#a78bfa", label: "Visa",       icon: "🛂" },
  travel:   { bg: "rgba(20,184,166,.06)", border: "rgba(20,184,166,.18)", dot: "#2dd4bf", label: "Travel",     icon: "✈️" },
};

const UK_ONLY_EXAMS = ["tmua", "esat", "lnat", "bmat", "ucat"];

const INDIA_NOT_NEEDED = [
  { name: "SAT / ACT",   icon: "📐", reason: "Only for US/Canada & select Indian private unis" },
  { name: "IELTS / TOEFL", icon: "🗣️", reason: "Not required for Indian domestic admissions" },
  { name: "Common App",  icon: "📋", reason: "US application portal — not used in India" },
  { name: "UCAS",        icon: "📝", reason: "UK application portal — not used in India" },
  { name: "UCAT",        icon: "🩺", reason: "UK/Australia medical test — not needed here" },
];

interface TypedUni {
  name: string;
  tier: "Reach" | "Target" | "Safety";
  req: number;
  sat: number | null;
  satRequired: "Yes" | "Recommended" | "Optional" | "No";
  deadline: string;
  cost: string;
  country?: Country;
  admissionMode: string;
  scholarshipStrength: string;
  indianStudentTip?: string;
}

// ─── Shared Mini-components ───────────────────────────────────────────────────

function Pill({
  children,
  color,
  size = "sm",
}: {
  children: React.ReactNode;
  color: { bg: string; border: string; text: string };
  size?: "xs" | "sm";
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: size === "xs" ? "2px 7px" : "3px 10px",
        borderRadius: 999,
        fontSize: size === "xs" ? 10 : 11,
        fontWeight: 600,
        background: color.bg,
        border: `1px solid ${color.border}`,
        color: color.text,
        whiteSpace: "nowrap" as const,
      }}
    >
      {children}
    </span>
  );
}

function SectionCard({
  icon,
  title,
  accent,
  bg,
  border,
  children,
}: {
  icon: string;
  title: string;
  accent: string;
  bg: string;
  border: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 12,
        padding: "13px 16px",
        marginTop: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: 14 }}>{icon}</span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: accent,
            textTransform: "uppercase" as const,
            letterSpacing: ".08em",
          }}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        marginBottom: 6,
        fontSize: 13,
      }}
    >
      <span
        style={{ color: "var(--ep-text-muted)", minWidth: 110, flexShrink: 0, fontSize: 12 }}
      >
        {label}
      </span>
      <span style={{ color: "var(--ep-text)", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function UniversityTabs({
  countries,
  stream,
  predictedFinal,
  grade = 12,
}: Props) {
  const [activeCountry, setActiveCountry] = useState<Country>(countries[0]);
  const [mainTab, setMainTab]             = useState<MainTab>("universities");
  const [expandedExam, setExpandedExam]   = useState<string | null>(null);
  const [expandedUniIdx, setExpandedUniIdx] = useState<number | null>(null);

  const unis     = getUnisForCountry(activeCountry, stream);
  const allExams = getExamsForCountry(activeCountry, stream);
  const exams    = allExams.filter((e) => {
    if (UK_ONLY_EXAMS.includes(e.id) && activeCountry !== "UK") return false;
    return true;
  });

  const visaInfo: VisaInfo | undefined = VISA_DB[activeCountry];
  const currentYear  = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const isIndia      = activeCountry === "India";

  const admissionTimeline = getCountryAdmissionTimeline(activeCountry, stream);

  const availableTabs: MainTab[] = ["universities", "exams"];
  if (!isIndia && showVisaTab(activeCountry)) availableTabs.push("visa");
  availableTabs.push("timeline");

  const safeTab = availableTabs.includes(mainTab) ? mainTab : "universities";

  const TAB_LABELS: Record<MainTab, string> = {
    universities: "🏫 Universities",
    exams:        isIndia ? "📝 Entrance Exams" : "📝 Exams & Tests",
    visa:         "✈️ Visa Guide",
    timeline:     "📅 Timeline",
  };

  return (
    <div style={{ fontFamily: "inherit" }}>

      {/* ── Country selector ── */}
      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap" as const,
          marginBottom: 0,
          padding: "4px 0",
        }}
      >
        {countries.map((c) => {
          const active = activeCountry === c;
          return (
            <button
              key={c}
              onClick={() => {
                setActiveCountry(c);
                setExpandedExam(null);
                setExpandedUniIdx(null);
                setMainTab("universities");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                borderRadius: 10,
                border: `1.5px solid ${active ? "var(--ep-accent)" : "var(--ep-border)"}`,
                background: active
                  ? "var(--ep-accent)"
                  : "rgba(255,255,255,.03)",
                color: active ? "#fff" : "var(--ep-text-muted)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              <span style={{ fontSize: 16 }}>{COUNTRY_FLAGS[c]}</span>
              {c}
            </button>
          );
        })}
      </div>

      {/* ── Main tab bar ── */}
      <div
        style={{
          display: "flex",
          gap: 4,
          margin: "14px 0 18px",
          background: "rgba(255,255,255,.04)",
          border: "1px solid var(--ep-border)",
          borderRadius: 12,
          padding: 4,
          flexWrap: "wrap" as const,
        }}
      >
        {availableTabs.map((t) => {
          const active = safeTab === t;
          return (
            <button
              key={t}
              onClick={() => setMainTab(t)}
              style={{
                padding: "7px 16px",
                borderRadius: 9,
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                background: active ? "var(--ep-accent)" : "transparent",
                color: active ? "#fff" : "var(--ep-text-muted)",
                transition: "all .15s",
                flex: 1,
                minWidth: 110,
              }}
            >
              {TAB_LABELS[t]}
            </button>
          );
        })}
      </div>

      {/* ── India quick notice ── */}
      {isIndia && (
        <div
          style={{
            marginBottom: 16,
            padding: "12px 16px",
            borderRadius: 12,
            background: "rgba(16,185,129,.06)",
            border: "1px solid rgba(16,185,129,.2)",
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 20, flexShrink: 0 }}>🇮🇳</span>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#10b981",
                marginBottom: 3,
              }}
            >
              Applying in India — No Visa Needed
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--ep-text-muted)",
                lineHeight: 1.6,
              }}
            >
              Focus on JEE / NEET / CUET / BITSAT depending on your stream.
              No IELTS, TOEFL, SAT, Common App or UCAS required for Indian
              domestic admissions.
            </div>
          </div>
        </div>
      )}

      {/* ══════ UNIVERSITIES TAB ══════ */}
      {safeTab === "universities" && (
        <UniversitiesTab
          activeCountry={activeCountry}
          stream={stream}
          predictedFinal={predictedFinal}
          unis={unis}
          exams={exams}
          expandedUniIdx={expandedUniIdx}
          setExpandedUniIdx={setExpandedUniIdx}
        />
      )}

      {/* ══════ EXAMS TAB ══════ */}
      {safeTab === "exams" && (
        <ExamsTab
          activeCountry={activeCountry}
          grade={grade}
          exams={exams}
          expandedExam={expandedExam}
          setExpandedExam={setExpandedExam}
          currentYear={currentYear}
        />
      )}

      {/* ══════ VISA TAB ══════ */}
      {safeTab === "visa" && !isIndia && (
        <VisaTab activeCountry={activeCountry} visaInfo={visaInfo} />
      )}

      {/* ══════ TIMELINE TAB ══════ */}
      {safeTab === "timeline" && (
        <AdmissionTimelineTab
          country={activeCountry}
          stream={stream}
          events={admissionTimeline}
          currentYear={currentYear}
          currentMonth={currentMonth}
          grade={grade}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: UNIVERSITIES
// ─────────────────────────────────────────────────────────────────────────────

function UniversitiesTab({
  activeCountry,
  stream,
  predictedFinal,
  unis,
  exams,
  expandedUniIdx,
  setExpandedUniIdx,
}: {
  activeCountry: Country;
  stream: Stream;
  predictedFinal: number;
  unis: unknown[];
  exams: Exam[];
  expandedUniIdx: number | null;
  setExpandedUniIdx: (v: number | null) => void;
}) {
  const isIndia = activeCountry === "India";

  return (
    <div>

      {/* India — what you do NOT need */}
      {isIndia && (
        <div
          style={{
            marginBottom: 16,
            padding: "14px 16px",
            borderRadius: 12,
            background: "rgba(239,68,68,.05)",
            border: "1px solid rgba(239,68,68,.18)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#ef4444",
              textTransform: "uppercase" as const,
              letterSpacing: ".08em",
              marginBottom: 10,
            }}
          >
            ❌ You do NOT need these for Indian admissions
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
            {INDIA_NOT_NEEDED.map((item) => (
              <div
                key={item.name}
                title={item.reason}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 10px",
                  borderRadius: 8,
                  background: "rgba(239,68,68,.08)",
                  border: "1px solid rgba(239,68,68,.2)",
                  fontSize: 12,
                  color: "#fca5a5",
                  fontWeight: 500,
                  cursor: "default",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--ep-text-muted)",
              marginTop: 8,
            }}
          >
            These are only needed for international applications (USA, UK, etc.)
          </div>
        </div>
      )}

      {/* Non-India exam banner */}
      {!isIndia && exams.length > 0 && (
        <div
          style={{
            marginBottom: 14,
            padding: "11px 14px",
            borderRadius: 10,
            background: "rgba(59,130,246,.05)",
            border: "1px solid rgba(59,130,246,.18)",
            display: "flex",
            flexWrap: "wrap" as const,
            gap: 6,
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "var(--ep-text-muted)",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: ".06em",
              marginRight: 2,
            }}
          >
            Key exams for {activeCountry}:
          </span>
          {exams.map((exam) => {
            const ci = getExamStatusForCountry(exam, activeCountry);
            if (!ci) return null;
            const col = STATUS_COLORS[ci.status];
            return (
              <Pill key={exam.id} color={{ bg: col.bg, border: col.border, text: col.text }}>
                {exam.icon} {exam.name} — {ci.status}
              </Pill>
            );
          })}
        </div>
      )}

      {/* Predicted score line */}
      {!isIndia && (
        <div
          style={{
            fontSize: 12,
            color: "var(--ep-text-muted)",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>Admission chance based on predicted score:</span>
          <span
            style={{
              fontWeight: 700,
              color: "var(--ep-text)",
              fontSize: 13,
              background: "rgba(255,255,255,.06)",
              padding: "2px 10px",
              borderRadius: 999,
              border: "1px solid var(--ep-border)",
            }}
          >
            {predictedFinal.toFixed(0)}%
          </span>
        </div>
      )}

      {/* University list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {unis.length === 0 ? (
          <div
            style={{
              padding: 32,
              textAlign: "center",
              color: "var(--ep-text-muted)",
              fontSize: 13,
              border: "1px dashed var(--ep-border)",
              borderRadius: 12,
            }}
          >
            No university data available for this combination.
          </div>
        ) : (
          unis.map((raw, i) => {
            const u       = raw as unknown as TypedUni;
            const chance  = calcChance(u.req, predictedFinal);
            const isOpen  = expandedUniIdx === i;
            const satRequired = (u.satRequired ?? "No") as "Yes" | "Recommended" | "Optional" | "No";
            const satCol  = SAT_COLORS[satRequired] ?? SAT_COLORS["No"];
            const uniExamReqs = getUniExamRequirements(u.name);
            const scoreDiff   = predictedFinal - u.req;

            const TIER_COLORS = {
              Reach:  { bg: "rgba(239,68,68,.1)",  text: "#ef4444" },
              Target: { bg: "rgba(245,158,11,.1)", text: "#f59e0b" },
              Safety: { bg: "rgba(16,185,129,.1)", text: "#10b981" },
            };
            const tierCol = TIER_COLORS[u.tier];

            return (
              <div
                key={i}
                style={{
                  borderRadius: 14,
                  border: `1px solid ${isOpen ? "rgba(99,102,241,.3)" : "var(--ep-border)"}`,
                  background: isOpen
                    ? "rgba(99,102,241,.04)"
                    : "rgba(255,255,255,.015)",
                  overflow: "hidden",
                  transition: "border-color .2s, background .2s",
                }}
              >
                {/* ── Card header ── */}
                <div
                  onClick={() => setExpandedUniIdx(isOpen ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "14px 16px",
                    cursor: "pointer",
                    userSelect: "none" as const,
                  }}
                >
                  {/* Flag */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid var(--ep-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {COUNTRY_FLAGS[activeCountry]}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexWrap: "wrap" as const,
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--ep-text)",
                        }}
                      >
                        {u.name}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: tierCol.bg,
                          color: tierCol.text,
                        }}
                      >
                        {u.tier}
                      </span>
                    </div>

                    {/* Quick stats row */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap" as const,
                        gap: 6,
                        alignItems: "center",
                      }}
                    >
                      {/* Marks required */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 11,
                          color: "var(--ep-text-muted)",
                          background: "rgba(255,255,255,.05)",
                          border: "1px solid var(--ep-border)",
                          padding: "2px 8px",
                          borderRadius: 7,
                        }}
                      >
                        <span>📊</span>
                        <span>Min: <strong style={{ color: "var(--ep-text)" }}>{u.req}%</strong></span>
                      </div>

                      {/* Deadline */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 11,
                          color: "var(--ep-text-muted)",
                          background: "rgba(255,255,255,.05)",
                          border: "1px solid var(--ep-border)",
                          padding: "2px 8px",
                          borderRadius: 7,
                        }}
                      >
                        <span>📅</span>
                        <span>{u.deadline}</span>
                      </div>

                      {/* Cost */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 11,
                          color: "var(--ep-text-muted)",
                          background: "rgba(255,255,255,.05)",
                          border: "1px solid var(--ep-border)",
                          padding: "2px 8px",
                          borderRadius: 7,
                        }}
                      >
                        <span>💰</span>
                        <span>{u.cost}</span>
                      </div>

                      {/* SAT pill */}
                      <Pill color={{ bg: satCol.bg, border: satCol.border, text: satCol.text }} size="xs">
                        📐 SAT: {satCol.label}
                      </Pill>

                      {/* Exam pills preview */}
                      {uniExamReqs.slice(0, 2).map((req) => {
                        const rc = REQ_COLORS[req.required];
                        return (
                          <Pill
                            key={req.examName}
                            color={{ bg: rc.bg, border: rc.border, text: rc.text }}
                            size="xs"
                          >
                            {req.examIcon} {req.examName}
                          </Pill>
                        );
                      })}
                      {uniExamReqs.length > 2 && (
                        <span style={{ fontSize: 10, color: "var(--ep-text-muted)" }}>
                          +{uniExamReqs.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right side */}
                  <div
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column" as const,
                      alignItems: "flex-end",
                      gap: 4,
                    }}
                  >
                    <div className={`ep-uni-chance ${chance.cls}`}>{chance.label}</div>
                    <div
                      style={{
                        fontSize: 16,
                        color: "var(--ep-text-muted)",
                        lineHeight: 1,
                      }}
                    >
                      {isOpen ? "▲" : "▼"}
                    </div>
                  </div>
                </div>

                {/* ── Expanded body ── */}
                {isOpen && (
                  <div
                    style={{
                      borderTop: "1px solid rgba(99,102,241,.15)",
                      padding: "14px 16px 16px",
                    }}
                  >

                    {/* Score & SAT section */}
                    <SectionCard
                      icon="📊"
                      title="Marks Required & SAT"
                      accent="#818cf8"
                      bg="rgba(99,102,241,.06)"
                      border="rgba(99,102,241,.2)"
                    >
                      {/* Score comparison */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          flexWrap: "wrap" as const,
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center" as const,
                            padding: "8px 14px",
                            borderRadius: 10,
                            background: "rgba(255,255,255,.06)",
                            border: "1px solid var(--ep-border)",
                          }}
                        >
                          <div style={{ fontSize: 10, color: "var(--ep-text-muted)", marginBottom: 2 }}>
                            Required
                          </div>
                          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--ep-text)" }}>
                            {u.req}%
                          </div>
                        </div>
                        <div style={{ fontSize: 18, color: "var(--ep-text-muted)" }}>→</div>
                        <div
                          style={{
                            textAlign: "center" as const,
                            padding: "8px 14px",
                            borderRadius: 10,
                            background: scoreDiff >= 0
                              ? "rgba(16,185,129,.1)"
                              : "rgba(239,68,68,.1)",
                            border: `1px solid ${scoreDiff >= 0 ? "rgba(16,185,129,.25)" : "rgba(239,68,68,.25)"}`,
                          }}
                        >
                          <div style={{ fontSize: 10, color: "var(--ep-text-muted)", marginBottom: 2 }}>
                            Your predicted
                          </div>
                          <div
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              color: scoreDiff >= 0 ? "#10b981" : "#ef4444",
                            }}
                          >
                            {predictedFinal.toFixed(0)}%
                          </div>
                        </div>
                        {scoreDiff < 0 && (
                          <div
                            style={{
                              fontSize: 12,
                              color: "#fca5a5",
                              padding: "4px 10px",
                              borderRadius: 8,
                              background: "rgba(239,68,68,.08)",
                              border: "1px solid rgba(239,68,68,.2)",
                            }}
                          >
                            {Math.abs(scoreDiff).toFixed(0)}% gap — aim higher
                          </div>
                        )}
                        {scoreDiff >= 0 && (
                          <div
                            style={{
                              fontSize: 12,
                              color: "#6ee7b7",
                              padding: "4px 10px",
                              borderRadius: 8,
                              background: "rgba(16,185,129,.08)",
                              border: "1px solid rgba(16,185,129,.2)",
                            }}
                          >
                            ✓ You qualify
                          </div>
                        )}
                      </div>

                      {/* SAT info */}
                      <div
                        style={{
                          padding: "10px 12px",
                          borderRadius: 9,
                          background: satCol.bg,
                          border: `1px solid ${satCol.border}`,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                        }}
                      >
                        <span style={{ fontSize: 18, flexShrink: 0 }}>📐</span>
                        <div>
                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: satCol.text,
                              marginBottom: 3,
                            }}
                          >
                            SAT is {satCol.label}
                            {u.sat ? ` — Target: ${u.sat}+` : ""}
                          </div>
                          <div style={{ fontSize: 12, color: "var(--ep-text)", lineHeight: 1.55 }}>
                            {satRequired === "Yes"
                              ? `SAT is required for admission. You must submit a score of ${u.sat}+ to be considered.`
                              : satRequired === "Recommended"
                              ? `Test-optional, but submitting ${u.sat}+ significantly strengthens your application and scholarship chances.`
                              : satRequired === "Optional"
                              ? `Fully test-optional. A score of ${u.sat ?? "1300"}+ can help but is not expected.`
                              : "SAT is not required or considered at this university. Focus on your grades and other requirements."}
                          </div>
                        </div>
                      </div>
                    </SectionCard>

                    {/* Admission Timeline */}
                    <SectionCard
                      icon="📅"
                      title="Admission Timeline"
                      accent="#34d399"
                      bg="rgba(16,185,129,.05)"
                      border="rgba(16,185,129,.18)"
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                          gap: 8,
                        }}
                      >
                        {[
                          { icon: "📋", label: "Apps open", value: "Aug–Sep" },
                          { icon: "⚠️", label: "Deadline", value: u.deadline },
                          { icon: "🎉", label: "Results", value: "Mar–Apr" },
                        ].map((step) => (
                          <div
                            key={step.label}
                            style={{
                              textAlign: "center" as const,
                              padding: "10px 8px",
                              borderRadius: 9,
                              background: "rgba(255,255,255,.04)",
                              border: "1px solid rgba(16,185,129,.15)",
                            }}
                          >
                            <div style={{ fontSize: 16, marginBottom: 4 }}>{step.icon}</div>
                            <div
                              style={{
                                fontSize: 10,
                                color: "var(--ep-text-muted)",
                                marginBottom: 3,
                                textTransform: "uppercase" as const,
                                letterSpacing: ".06em",
                              }}
                            >
                              {step.label}
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: "#34d399",
                              }}
                            >
                              {step.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </SectionCard>

                    {/* Exam requirements */}
                    {uniExamReqs.length > 0 && (
                      <SectionCard
                        icon="📝"
                        title="Exam Requirements"
                        accent="#fbbf24"
                        bg="rgba(245,158,11,.05)"
                        border="rgba(245,158,11,.18)"
                      >
                        <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                          {uniExamReqs.map((req) => {
                            const rc = REQ_COLORS[req.required];
                            return (
                              <div
                                key={req.examName}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 10,
                                  padding: "10px 12px",
                                  borderRadius: 9,
                                  background: rc.bg,
                                  border: `1px solid ${rc.border}`,
                                }}
                              >
                                <span style={{ fontSize: 20, flexShrink: 0 }}>{req.examIcon}</span>
                                <div style={{ flex: 1 }}>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 7,
                                      flexWrap: "wrap" as const,
                                      marginBottom: 4,
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: "var(--ep-text)",
                                      }}
                                    >
                                      {req.examName}
                                    </span>
                                    <Pill
                                      color={{ bg: rc.badge, border: rc.border, text: rc.text }}
                                      size="xs"
                                    >
                                      {req.required}
                                    </Pill>
                                    <Pill
                                      color={{
                                        bg: "rgba(245,158,11,.1)",
                                        border: "rgba(245,158,11,.25)",
                                        text: "#fcd34d",
                                      }}
                                      size="xs"
                                    >
                                      🎯 {req.minScore}
                                    </Pill>
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 12,
                                      color: "var(--ep-text-muted)",
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    {req.note}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </SectionCard>
                    )}

                    {/* No exam note */}
                    {uniExamReqs.length === 0 && !isIndia && (
                      <div
                        style={{
                          marginTop: 10,
                          padding: "10px 13px",
                          borderRadius: 9,
                          background: "rgba(107,114,128,.06)",
                          border: "1px solid rgba(107,114,128,.18)",
                          fontSize: 12,
                          color: "var(--ep-text-muted)",
                        }}
                      >
                        ℹ️ No specific standardised entrance exams beyond IELTS/TOEFL. Check the official admissions page.
                      </div>
                    )}

                    {/* India — not needed reminder */}
                    {isIndia && (
                      <SectionCard
                        icon="❌"
                        title="Not needed for this application"
                        accent="#ef4444"
                        bg="rgba(239,68,68,.05)"
                        border="rgba(239,68,68,.18)"
                      >
                        <div
                          style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}
                        >
                          {INDIA_NOT_NEEDED.map((item) => (
                            <Pill
                              key={item.name}
                              color={{
                                bg: "rgba(239,68,68,.08)",
                                border: "rgba(239,68,68,.2)",
                                text: "#fca5a5",
                              }}
                              size="xs"
                            >
                              {item.icon} {item.name}
                            </Pill>
                          ))}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--ep-text-muted)",
                            marginTop: 7,
                          }}
                        >
                          These are only needed if you also apply abroad.
                        </div>
                      </SectionCard>
                    )}

                    {/* Scholarship */}
                    <SectionCard
                      icon="🎓"
                      title="Scholarship & Admission Mode"
                      accent="#fcd34d"
                      bg="rgba(245,158,11,.05)"
                      border="rgba(245,158,11,.15)"
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--ep-text-muted)",
                          marginBottom: 6,
                        }}
                      >
                        <strong style={{ color: "var(--ep-text)" }}>Mode: </strong>
                        {u.admissionMode}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--ep-text)", lineHeight: 1.6 }}>
                        {u.scholarshipStrength}
                      </div>
                    </SectionCard>

                    {/* India tip */}
                    {"indianStudentTip" in u && u.indianStudentTip && (
                      <div
                        style={{
                          marginTop: 10,
                          padding: "10px 13px",
                          borderRadius: 9,
                          background: "rgba(16,185,129,.06)",
                          border: "1px solid rgba(16,185,129,.2)",
                          fontSize: 12,
                          color: "#6ee7b7",
                          lineHeight: 1.6,
                        }}
                      >
                        🇮🇳 <strong>India tip:</strong> {String(u.indianStudentTip)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Legend */}
      {!isIndia && unis.length > 0 && (
        <div
          style={{
            marginTop: 14,
            padding: "10px 14px",
            borderRadius: 9,
            background: "rgba(255,255,255,.03)",
            border: "1px solid var(--ep-border)",
            fontSize: 11,
            color: "var(--ep-text-muted)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap" as const,
          }}
        >
          <span>Expand any card to see full details</span>
          <span>·</span>
          <span style={{ color: "#ef4444" }}>● Mandatory</span>
          <span style={{ color: "#f59e0b" }}>● Recommended</span>
          <span style={{ color: "#818cf8" }}>● Optional</span>
          <span style={{ color: "#10b981" }}>● Not Required</span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: EXAMS
// ─────────────────────────────────────────────────────────────────────────────

function ExamsTab({
  activeCountry,
  grade,
  exams,
  expandedExam,
  setExpandedExam,
  currentYear,
}: {
  activeCountry: Country;
  grade: number;
  exams: Exam[];
  expandedExam: string | null;
  setExpandedExam: (v: string | null) => void;
  currentYear: number;
}) {
  const isIndia = activeCountry === "India";

  if (isIndia) {
    return (
      <div
        style={{
          padding: "24px",
          textAlign: "center" as const,
          background: "rgba(255,255,255,.03)",
          border: "1px solid var(--ep-border)",
          borderRadius: 14,
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 12 }}>🎓</div>
        <div
          style={{
            fontWeight: 700,
            color: "var(--ep-text)",
            marginBottom: 10,
            fontSize: 15,
          }}
        >
          Indian Entrance Exams
        </div>
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            maxWidth: 500,
            margin: "0 auto",
            color: "var(--ep-text-muted)",
          }}
        >
          JEE Advanced / Mains → IITs &amp; NITs · NEET-UG → Medical colleges ·
          CUET → DU colleges · BITSAT → BITS Pilani · VITEEE → VIT ·
          IPMAT → IIM integrated programs
        </div>
        <div
          style={{
            marginTop: 14,
            padding: "10px 14px",
            borderRadius: 9,
            background: "rgba(16,185,129,.06)",
            border: "1px solid rgba(16,185,129,.2)",
            fontSize: 12,
            color: "#6ee7b7",
            display: "inline-block",
          }}
        >
          ✅ SAT accepted at Ashoka, KREA, FLAME, Shiv Nadar as alternative to entrance exams
        </div>
      </div>
    );
  }

  if (exams.length === 0) {
    return (
      <div
        style={{
          padding: 28,
          textAlign: "center" as const,
          color: "var(--ep-text-muted)",
          border: "1px dashed var(--ep-border)",
          borderRadius: 12,
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
        <div style={{ fontWeight: 700, color: "var(--ep-text)", marginBottom: 6, fontSize: 14 }}>
          No entrance exams for {activeCountry}
        </div>
        <div style={{ fontSize: 13 }}>Focus on strong academics + IELTS/TOEFL for this country.</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
      {/* UK notice */}
      {activeCountry === "UK" && (
        <div
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            background: "rgba(139,92,246,.07)",
            border: "1px solid rgba(139,92,246,.2)",
            fontSize: 12,
            color: "#c4b5fd",
          }}
        >
          🇬🇧 <strong>UK-specific:</strong> TMUA (Maths/CS/Econ at Cambridge/LSE), ESAT
          (Engineering/Science at Cambridge/Imperial), UCAT (Medicine) are only required for UK
          universities.
        </div>
      )}

      <div
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          background: "rgba(59,130,246,.06)",
          border: "1px solid rgba(59,130,246,.18)",
          fontSize: 12,
          color: "var(--ep-text-muted)",
        }}
      >
        📅 Showing exam info for{" "}
        <strong style={{ color: "var(--ep-accent)" }}>2027 intake</strong>
        {grade < 12 &&
          ` (Grade ${grade} → ~${12 - grade} year${12 - grade !== 1 ? "s" : ""} until application season)`}
      </div>

      {exams.map((exam) => {
        const ci     = getExamStatusForCountry(exam, activeCountry);
        if (!ci) return null;
        const col    = STATUS_COLORS[ci.status];
        const isOpen = expandedExam === exam.id;

        return (
          <div
            key={exam.id}
            style={{
              borderRadius: 14,
              border: `1.5px solid ${isOpen ? col.border : "var(--ep-border)"}`,
              background: isOpen ? col.bg : "rgba(255,255,255,.015)",
              overflow: "hidden",
              transition: "all .2s",
            }}
          >
            <button
              onClick={() => setExpandedExam(isOpen ? null : exam.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "14px 16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left" as const,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: col.badge,
                  border: `1px solid ${col.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {exam.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap" as const,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "var(--ep-text)",
                    }}
                  >
                    {exam.name}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--ep-text-muted)",
                      fontStyle: "italic",
                    }}
                  >
                    {exam.fullName}
                  </span>
                  <Pill color={{ bg: col.bg, border: col.border, text: col.text }}>
                    {ci.status} in {activeCountry}
                  </Pill>
                </div>
                <div style={{ fontSize: 12, color: "var(--ep-text-muted)" }}>
                  {exam.tagline}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: col.text,
                    marginTop: 4,
                  }}
                >
                  🎯 Target: {ci.requiredScore}
                </div>
              </div>
              <span
                style={{
                  color: "var(--ep-text-muted)",
                  fontSize: 16,
                  flexShrink: 0,
                  paddingTop: 6,
                }}
              >
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 16px 18px",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                {/* Why this exam */}
                <SectionCard
                  icon="✨"
                  title={`Why ${exam.name} matters`}
                  accent="#6ee7b7"
                  bg="rgba(16,185,129,.06)"
                  border="rgba(16,185,129,.2)"
                >
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--ep-text)" }}>
                    {ci.benefit}
                  </p>
                  {ci.waivable && (
                    <div
                      style={{
                        marginTop: 8,
                        padding: "6px 10px",
                        borderRadius: 7,
                        background: "rgba(245,158,11,.1)",
                        border: "1px solid rgba(245,158,11,.2)",
                        fontSize: 12,
                        color: "#fcd34d",
                      }}
                    >
                      ⚡ Waiver possible: {ci.waiveCondition}
                    </div>
                  )}
                </SectionCard>

                {/* Dates grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <DateCard year={currentYear}     label="Current Year" content={exam.currentYearDates} />
                  <DateCard year={currentYear + 1} label="Next Year"    content={exam.nextYearDates} />
                </div>

                {/* Format */}
                <SectionCard
                  icon="📋"
                  title="Format & Details"
                  accent="var(--ep-text-muted)"
                  bg="rgba(255,255,255,.04)"
                  border="var(--ep-border)"
                >
                  <InfoRow label="Format"    value={exam.format} />
                  <InfoRow label="Duration"  value={exam.duration} />
                  <InfoRow label="Fee"       value={exam.fee} />
                  <InfoRow label="Website"   value={exam.website} />
                </SectionCard>

                {/* Prep */}
                <SectionCard
                  icon="🚀"
                  title={`Prep strategy (Grade ${grade})`}
                  accent="#93c5fd"
                  bg="rgba(59,130,246,.06)"
                  border="rgba(59,130,246,.2)"
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--ep-text)",
                      marginBottom: 5,
                    }}
                  >
                    Recommended: {exam.prepMonths} months of prep
                  </div>
                  <p style={{ margin: 0, fontSize: 12, lineHeight: 1.65, color: "var(--ep-text-muted)" }}>
                    {exam.prepStrategy}
                  </p>
                </SectionCard>

                {/* How to register */}
                <div
                  style={{
                    padding: 14,
                    borderRadius: 10,
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid var(--ep-border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--ep-text-muted)",
                      textTransform: "uppercase" as const,
                      letterSpacing: ".08em",
                      marginBottom: 12,
                    }}
                  >
                    📌 How to register — step by step
                  </div>
                  {exam.howToRegister.map((step, si) => (
                    <div
                      key={si}
                      style={{
                        display: "flex",
                        gap: 10,
                        marginBottom: 9,
                        fontSize: 13,
                        color: "var(--ep-text)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          minWidth: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "var(--ep-accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#fff",
                          flexShrink: 0,
                        }}
                      >
                        {si + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>

                {/* University support */}
                <div
                  style={{
                    padding: 14,
                    borderRadius: 10,
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid var(--ep-border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--ep-text-muted)",
                      textTransform: "uppercase" as const,
                      letterSpacing: ".08em",
                      marginBottom: 12,
                    }}
                  >
                    🏫 Which universities require / accept {exam.name}
                  </div>
                  {exam.universitySupport.map((us, ui) => {
                    const uc = STATUS_COLORS[us.status];
                    return (
                      <div
                        key={ui}
                        style={{
                          display: "flex",
                          gap: 10,
                          padding: "8px 10px",
                          borderRadius: 8,
                          marginBottom: 6,
                          background: uc.bg,
                          border: `1px solid ${uc.border}`,
                        }}
                      >
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: uc.dot,
                            marginTop: 5,
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "var(--ep-text)",
                            }}
                          >
                            {us.uniName}
                            <span
                              style={{
                                marginLeft: 8,
                                fontSize: 11,
                                fontWeight: 600,
                                color: uc.text,
                              }}
                            >
                              {us.status}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "var(--ep-text-muted)",
                              marginTop: 2,
                              lineHeight: 1.5,
                            }}
                          >
                            {us.note}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: VISA
// ─────────────────────────────────────────────────────────────────────────────

function VisaTab({
  activeCountry,
  visaInfo,
}: {
  activeCountry: Country;
  visaInfo: VisaInfo | undefined;
}) {
  if (!visaInfo) {
    return (
      <div
        style={{
          padding: 28,
          textAlign: "center" as const,
          color: "var(--ep-text-muted)",
          border: "1px dashed var(--ep-border)",
          borderRadius: 12,
        }}
      >
        Visa details for {activeCountry} are coming soon.
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
      {/* Header card */}
      <div
        style={{
          padding: "18px 20px",
          borderRadius: 14,
          background:
            "linear-gradient(135deg,rgba(59,130,246,.1),rgba(139,92,246,.07))",
          border: "1px solid rgba(59,130,246,.22)",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "var(--ep-text)",
            marginBottom: 10,
          }}
        >
          {COUNTRY_FLAGS[activeCountry]} {visaInfo.visaType}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 16 }}>
          {[
            { icon: "⏱️", label: "Processing", value: visaInfo.processingTime.split(".")[0] },
            { icon: "🎤", label: "Interview", value: visaInfo.interviewRequired ? "Required" : "Not required" },
            { icon: "🌐", label: "Portal", value: visaInfo.officialPortal },
          ].map((b) => (
            <div key={b.label}>
              <div style={{ fontSize: 11, color: "var(--ep-text-muted)" }}>
                {b.icon} {b.label}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#93c5fd",
                  marginTop: 2,
                }}
              >
                {b.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionCard
        icon="📄"
        title="Key document"
        accent="#fcd34d"
        bg="rgba(245,158,11,.06)"
        border="rgba(245,158,11,.2)"
      >
        <strong style={{ color: "var(--ep-text)", fontSize: 13 }}>
          {visaInfo.keyDocument}
        </strong>
      </SectionCard>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <DateCard
          year={new Date().getFullYear()}
          label="Current Year"
          content={visaInfo.currentYearTimeline}
        />
        <DateCard
          year={new Date().getFullYear() + 1}
          label="Next Year"
          content={visaInfo.nextYearTimeline}
        />
      </div>

      {/* Steps */}
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: "rgba(255,255,255,.03)",
          border: "1px solid var(--ep-border)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "var(--ep-text-muted)",
            textTransform: "uppercase" as const,
            letterSpacing: ".08em",
            marginBottom: 14,
          }}
        >
          📌 Step-by-step process
        </div>
        {visaInfo.steps.map((step) => (
          <div key={step.step} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
            <div
              style={{
                minWidth: 28,
                height: 28,
                borderRadius: "50%",
                background: "var(--ep-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 800,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {step.step}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap" as const,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--ep-text)",
                  }}
                >
                  {step.title}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--ep-text-muted)",
                    background: "rgba(255,255,255,.06)",
                    padding: "1px 8px",
                    borderRadius: 999,
                  }}
                >
                  {step.timing}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--ep-text-muted)",
                  marginTop: 3,
                  lineHeight: 1.6,
                }}
              >
                {step.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionCard
        icon="💳"
        title="Financial proof"
        accent="#6ee7b7"
        bg="rgba(16,185,129,.06)"
        border="rgba(16,185,129,.2)"
      >
        <p style={{ margin: 0, fontSize: 13, color: "var(--ep-text)", lineHeight: 1.6 }}>
          {visaInfo.financialProof}
        </p>
      </SectionCard>

      {visaInfo.interviewRequired &&
        visaInfo.interviewTips &&
        visaInfo.interviewTips.length > 0 && (
          <div
            style={{
              padding: 14,
              borderRadius: 10,
              background: "rgba(239,68,68,.05)",
              border: "1px solid rgba(239,68,68,.18)",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fca5a5",
                textTransform: "uppercase" as const,
                letterSpacing: ".08em",
                marginBottom: 10,
              }}
            >
              🎤 Interview tips
            </div>
            {visaInfo.interviewTips.map((tip, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 7,
                  fontSize: 13,
                  color: "var(--ep-text)",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#ef4444", flexShrink: 0 }}>→</span>
                {tip}
              </div>
            ))}
          </div>
        )}

      <div
        style={{
          padding: 12,
          borderRadius: 9,
          background: "rgba(245,158,11,.05)",
          border: "1px solid rgba(245,158,11,.18)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#fcd34d",
            textTransform: "uppercase" as const,
            letterSpacing: ".08em",
            marginBottom: 10,
          }}
        >
          ⚠️ Common rejection reasons
        </div>
        {visaInfo.commonReasons.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 7,
              fontSize: 13,
              color: "var(--ep-text)",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#f59e0b", flexShrink: 0 }}>✕</span>
            {r}
          </div>
        ))}
      </div>

      <SectionCard
        icon="💼"
        title="Post-study work rights"
        accent="#c4b5fd"
        bg="rgba(99,102,241,.06)"
        border="rgba(99,102,241,.2)"
      >
        <p style={{ margin: 0, fontSize: 13, color: "var(--ep-text)", lineHeight: 1.6 }}>
          {visaInfo.postStudyWorkRights}
        </p>
      </SectionCard>

      <div
        style={{
          padding: "9px 12px",
          borderRadius: 8,
          background: "rgba(255,255,255,.03)",
          border: "1px solid var(--ep-border)",
          fontSize: 12,
          color: "var(--ep-text-muted)",
        }}
      >
        ⚠️ Visa rules change frequently. Always verify at{" "}
        <strong style={{ color: "var(--ep-accent)" }}>{visaInfo.officialPortal}</strong> before
        applying.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: ADMISSION TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

function AdmissionTimelineTab({
  country,
  stream,
  events,
  currentYear,
  currentMonth,
  grade,
}: {
  country: Country;
  stream: Stream;
  events: UniAdmissionEvent[];
  currentYear: number;
  currentMonth: number;
  grade: number;
}) {
  const [filterType, setFilterType] = useState<UniAdmissionEvent["type"] | "all">("all");
  const isIndia = country === "India";

  const displayed =
    filterType === "all" ? events : events.filter((e) => e.type === filterType);

  const filterLabels: Partial<Record<UniAdmissionEvent["type"] | "all", string>> = {
    all:      "All",
    exam:     "✏️ Exams",
    open:     "📋 Opens",
    deadline: "⚠️ Deadlines",
    result:   "🎉 Results",
    visa:     "🛂 Visa",
    travel:   "✈️ Travel",
  };

  if (events.length === 0) {
    return (
      <div
        style={{
          padding: 24,
          textAlign: "center" as const,
          color: "var(--ep-text-muted)",
          border: "1px dashed var(--ep-border)",
          borderRadius: 12,
          fontSize: 13,
        }}
      >
        No admission timeline data for this country/stream combination.
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div
        style={{
          marginBottom: 14,
          padding: "12px 16px",
          borderRadius: 12,
          background: "linear-gradient(135deg, rgba(59,130,246,.08), rgba(139,92,246,.06))",
          border: "1px solid rgba(59,130,246,.2)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "var(--ep-text)",
            marginBottom: 4,
          }}
        >
          {COUNTRY_FLAGS[country]} {country} — Admission Timeline
          <span
            style={{
              marginLeft: 10,
              fontSize: 12,
              color: "var(--ep-text-muted)",
              fontWeight: 400,
            }}
          >
            {stream} applicants
          </span>
        </div>
        <div style={{ fontSize: 12, color: "var(--ep-text-muted)", lineHeight: 1.6 }}>
          {isIndia
            ? "Key exam, registration, and admission dates for Indian universities."
            : "Key application windows, exam dates, deadlines, visa steps, and travel dates."}
        </div>
      </div>

      {/* Filter chips */}
      <div
        style={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap" as const,
          marginBottom: 18,
          padding: "4px",
          background: "rgba(255,255,255,.04)",
          border: "1px solid var(--ep-border)",
          borderRadius: 10,
        }}
      >
        {(Object.entries(filterLabels) as [string, string][]).map(([f, label]) => (
          <button
            key={f}
            onClick={() => setFilterType(f as typeof filterType)}
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              background: filterType === f ? "var(--ep-accent)" : "transparent",
              color: filterType === f ? "#fff" : "var(--ep-text-muted)",
              transition: "all .15s",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Events */}
      <div style={{ display: "flex", flexDirection: "column" as const }}>
        {displayed.map((event, idx) => {
          const isPast =
            event.year < currentYear ||
            (event.year === currentYear && event.monthIndex < currentMonth);
          const isCurrent =
            event.year === currentYear && event.monthIndex === currentMonth;
          const isLast = idx === displayed.length - 1;
          const tc     = TIMELINE_TYPE_COLORS[event.type];

          return (
            <div
              key={`${event.month}-${idx}`}
              style={{
                display: "flex",
                gap: 14,
                opacity: isPast ? 0.45 : 1,
              }}
            >
              {/* Dot + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  width: 20,
                  flexShrink: 0,
                  paddingTop: 3,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: isPast
                      ? "rgba(255,255,255,.15)"
                      : isCurrent
                      ? "#10b981"
                      : tc.dot,
                    border: isCurrent
                      ? "3px solid rgba(16,185,129,.4)"
                      : `2px solid ${isPast ? "rgba(255,255,255,.12)" : tc.dot + "55"}`,
                    boxShadow: isCurrent ? "0 0 0 5px rgba(16,185,129,.1)" : "none",
                  }}
                />
                {!isLast && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 18,
                      background: isPast
                        ? "rgba(255,255,255,.06)"
                        : `${tc.dot}28`,
                      margin: "3px 0",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  paddingBottom: isLast ? 0 : 14,
                  flex: 1,
                  background: tc.bg,
                  border: `1px solid ${tc.border}`,
                  borderRadius: 10,
                  padding: "11px 13px",
                  marginBottom: isLast ? 0 : 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexWrap: "wrap" as const,
                    marginBottom: 5,
                  }}
                >
                  <span style={{ fontSize: 11, color: tc.dot, fontWeight: 700 }}>
                    {tc.icon} {event.month}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "1px 7px",
                      borderRadius: 999,
                      fontWeight: 700,
                      background: `${tc.dot}18`,
                      border: `1px solid ${tc.dot}38`,
                      color: tc.dot,
                    }}
                  >
                    {tc.label.toUpperCase()}
                  </span>
                  {isCurrent && (
                    <span
                      style={{
                        fontSize: 10,
                        padding: "1px 7px",
                        borderRadius: 999,
                        fontWeight: 800,
                        background: "rgba(16,185,129,.14)",
                        border: "1px solid rgba(16,185,129,.28)",
                        color: "#34d399",
                      }}
                    >
                      ← YOU ARE HERE
                    </span>
                  )}
                  {isPast && (
                    <span style={{ fontSize: 10, color: "var(--ep-text-muted)" }}>
                      ✓ Past
                    </span>
                  )}
                  {event.urgent && !isPast && (
                    <span
                      style={{
                        fontSize: 10,
                        padding: "1px 7px",
                        borderRadius: 999,
                        fontWeight: 700,
                        background: "rgba(239,68,68,.1)",
                        border: "1px solid rgba(239,68,68,.22)",
                        color: "#fca5a5",
                      }}
                    >
                      ⚠️ URGENT
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--ep-text)",
                    lineHeight: 1.3,
                    marginBottom: 4,
                  }}
                >
                  {event.title}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--ep-text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {event.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {grade < 12 && (
        <div
          style={{
            marginTop: 20,
            padding: "12px 14px",
            borderRadius: 10,
            background: "rgba(59,130,246,.06)",
            border: "1px solid rgba(59,130,246,.18)",
            fontSize: 12,
            color: "var(--ep-text-muted)",
          }}
        >
          📌 You&apos;re in Grade {grade} — ~{12 - grade} year{12 - grade !== 1 ? "s" : ""} before
          application season. The timeline above is for the{" "}
          <strong style={{ color: "var(--ep-text)" }}>2027 intake</strong>.
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Shared atoms
// ─────────────────────────────────────────────────────────────────────────────

function DateCard({
  year,
  label,
  content,
}: {
  year: number;
  label: string;
  content: string;
}) {
  const isCurrent = year === new Date().getFullYear();
  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        background: isCurrent
          ? "rgba(16,185,129,.07)"
          : "rgba(139,92,246,.07)",
        border: `1px solid ${isCurrent ? "rgba(16,185,129,.22)" : "rgba(139,92,246,.22)"}`,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: isCurrent ? "#6ee7b7" : "#c4b5fd",
          textTransform: "uppercase" as const,
          letterSpacing: ".07em",
          marginBottom: 5,
        }}
      >
        {label} ({year})
      </div>
      <div
        style={{ fontSize: 12, color: "var(--ep-text)", lineHeight: 1.65 }}
      >
        {content}
      </div>
    </div>
  );
}