"use client";

import { useState } from "react";
import type { Country, Stream } from "@/types/edupath";
import { COUNTRY_FLAGS, getUnisForCountry, calcChance, showVisaTab } from "@/lib/edupath-data";
import {
  EXAMS,
  VISA_DB,
  getExamsForCountry,
  getExamStatusForCountry,
  getTimelineForCountries,
  type Exam,
  type ExamStatus,
  type IntakeTimelineEvent,
} from "@/lib/edupath-exams";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  countries: Country[];
  stream: Stream;
  predictedFinal: number;
  grade?: number;
}

type MainTab = "universities" | "exams" | "visa" | "timeline";

// ─── Colour helpers ───────────────────────────────────────────────────────────

const STATUS_COLORS: Record<ExamStatus, { bg: string; border: string; text: string; dot: string }> = {
  Mandatory:      { bg: "rgba(239,68,68,.12)",   border: "rgba(239,68,68,.35)",   text: "#fca5a5", dot: "#ef4444" },
  Recommended:    { bg: "rgba(245,158,11,.12)",  border: "rgba(245,158,11,.35)",  text: "#fcd34d", dot: "#f59e0b" },
  Optional:       { bg: "rgba(99,102,241,.12)",  border: "rgba(99,102,241,.35)",  text: "#c4b5fd", dot: "#6366f1" },
  "Not Required": { bg: "rgba(107,114,128,.1)",  border: "rgba(107,114,128,.25)", text: "#9ca3af", dot: "#6b7280" },
};

const SAT_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  Yes:         { bg: "rgba(239,68,68,.12)",  border: "rgba(239,68,68,.3)",   text: "#fca5a5" },
  Recommended: { bg: "rgba(245,158,11,.1)",  border: "rgba(245,158,11,.3)",  text: "#fcd34d" },
  Optional:    { bg: "rgba(99,102,241,.1)",  border: "rgba(99,102,241,.3)",  text: "#c4b5fd" },
  No:          { bg: "rgba(16,185,129,.1)",  border: "rgba(16,185,129,.3)",  text: "#6ee7b7" },
};

const TYPE_COLORS: Record<IntakeTimelineEvent["type"], string> = {
  prep: "#6366f1", register: "#f59e0b", exam: "#ef4444",
  apply: "#3b82f6", decision: "#10b981", visa: "#8b5cf6", travel: "#06b6d4",
};
const TYPE_ICONS: Record<IntakeTimelineEvent["type"], string> = {
  prep: "📚", register: "📋", exam: "✏️",
  apply: "📨", decision: "🎉", visa: "✈️", travel: "🌏",
};

// ─── UK-only exam IDs ─────────────────────────────────────────────────────────
const UK_ONLY_EXAMS = ["tmua", "esat", "lnat", "bmat", "ucat"];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function UniversityTabs({ countries, stream, predictedFinal, grade = 12 }: Props) {
  const [activeCountry, setActiveCountry]       = useState<Country>(countries[0]);
  const [mainTab, setMainTab]                   = useState<MainTab>("universities");
  const [expandedExam, setExpandedExam]         = useState<string | null>(null);
  const [expandedUniIdx, setExpandedUniIdx]     = useState<number | null>(null);

  const unis          = getUnisForCountry(activeCountry, stream);
  const allExams      = getExamsForCountry(activeCountry, stream);

  // Filter: UK-only exams must not appear for non-UK countries
  const exams = allExams.filter((e) => {
    if (UK_ONLY_EXAMS.includes(e.id) && activeCountry !== "UK") return false;
    return true;
  });

  const visaInfo      = VISA_DB[activeCountry];
  const timelineItems = getTimelineForCountries(countries);
  const currentYear   = new Date().getFullYear();
  const currentMonth  = new Date().getMonth();

  // Tabs available for active country
  const isIndia   = activeCountry === "India";
  const availableTabs: MainTab[] = ["universities", "exams"];
  if (!isIndia && showVisaTab(activeCountry)) availableTabs.push("visa");
  availableTabs.push("timeline");  // always show timeline (shows cross-country for India)

  // Ensure selected tab is valid
  const safeTab = availableTabs.includes(mainTab) ? mainTab : "universities";

  return (
    <div style={{ fontFamily: "inherit" }}>

      {/* ── Country selector ── */}
      <div className="ep-tab-bar" style={{ marginBottom: 0 }}>
        {countries.map((c) => (
          <button
            key={c}
            className={`ep-tab ${activeCountry === c ? "active" : ""}`}
            onClick={() => {
              setActiveCountry(c);
              setExpandedExam(null);
              setExpandedUniIdx(null);
              setMainTab("universities");
            }}
          >
            {COUNTRY_FLAGS[c]} {c}
          </button>
        ))}
      </div>

      {/* ── Main tab bar ── */}
      <div style={{ display: "flex", gap: 6, margin: "14px 0 20px", flexWrap: "wrap" }}>
        {availableTabs.map((t) => {
          const labels: Record<MainTab, string> = {
            universities: "🏫 Universities",
            exams:        isIndia ? "📝 Entrance Exams" : "📝 Exams & Tests",
            visa:         "✈️ Visa Guide",
            timeline:     isIndia ? "📅 International Timeline" : "📅 Full Timeline",
          };
          const active = safeTab === t;
          return (
            <button key={t} onClick={() => setMainTab(t)} style={{
              padding: "7px 16px", borderRadius: 999, border: "1px solid",
              fontSize: 13, fontWeight: 600, cursor: "pointer",
              background:  active ? "var(--ep-accent)" : "transparent",
              borderColor: active ? "var(--ep-accent)" : "var(--ep-border)",
              color:       active ? "#fff" : "var(--ep-text-muted)",
              transition:  "all .2s",
            }}>
              {labels[t]}
            </button>
          );
        })}
      </div>

      {/* India notice banner */}
      {isIndia && (
        <div style={{
          marginBottom: 16, padding: "10px 14px", borderRadius: 10,
          background: "rgba(16,185,129,.07)", border: "1px solid rgba(16,185,129,.25)",
          fontSize: 12, color: "#6ee7b7",
        }}>
          🇮🇳 <strong>India section:</strong> Showing Indian university admissions, entrance exams & domestic scholarships.
          The <em>International Timeline</em> tab shows your cross-country planning roadmap.
          No visa needed — you are applying from India!
        </div>
      )}

      {/* ══════════════════════════ UNIVERSITIES ══════════════════════════════ */}
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

      {/* ══════════════════════════ EXAMS ═════════════════════════════════════ */}
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

      {/* ══════════════════════════ VISA ══════════════════════════════════════ */}
      {safeTab === "visa" && !isIndia && (
        <VisaTab activeCountry={activeCountry} visaInfo={visaInfo} />
      )}

      {/* ══════════════════════════ TIMELINE ══════════════════════════════════ */}
      {safeTab === "timeline" && (
        <TimelineTab
          countries={isIndia ? countries.filter((c) => c !== "India") : countries}
          allCountries={countries}
          timelineItems={timelineItems}
          currentYear={currentYear}
          currentMonth={currentMonth}
          grade={grade}
          isIndia={isIndia}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: UNIVERSITIES
// ─────────────────────────────────────────────────────────────────────────────

function UniversitiesTab({ activeCountry, stream, predictedFinal, unis, exams, expandedUniIdx, setExpandedUniIdx }: {
  activeCountry: Country; stream: Stream; predictedFinal: number;
  unis: ReturnType<typeof getUnisForCountry>;
  exams: Exam[];
  expandedUniIdx: number | null;
  setExpandedUniIdx: (v: number | null) => void;
}) {
  const isIndia = activeCountry === "India";

  return (
    <div>
      {/* Exam quick-reference banner (skip for India) */}
      {!isIndia && exams.length > 0 && (
        <div style={{
          marginBottom: 14, padding: "11px 14px", borderRadius: 10,
          background: "rgba(59,130,246,.06)", border: "1px solid rgba(59,130,246,.2)",
          display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center",
        }}>
          <span style={{ fontSize: 12, color: "var(--ep-text-muted)", fontWeight: 700 }}>
            Exams for {activeCountry}:
          </span>
          {exams.map((exam) => {
            const ci = getExamStatusForCountry(exam, activeCountry);
            if (!ci) return null;
            const col = STATUS_COLORS[ci.status];
            return (
              <span key={exam.id} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 999, fontWeight: 700,
                background: col.bg, border: `1px solid ${col.border}`, color: col.text,
              }}>
                {exam.icon} {exam.name} — {ci.status}
              </span>
            );
          })}
        </div>
      )}

      {/* Score meta */}
      {!isIndia && (
        <div className="ep-uni-meta">
          Admission chance based on predicted 12th score:{" "}
          <strong style={{ color: "var(--ep-text)" }}>{predictedFinal.toFixed(0)}%</strong>
        </div>
      )}

      {/* University cards */}
      <div className="ep-uni-list">
        {unis.length === 0 ? (
          <div className="ep-uni-empty">No university data available for this combination.</div>
        ) : (
          unis.map((u, i) => {
            const chance   = calcChance(u.req, predictedFinal);
            const uniTags  = getExamTagsForUni(u.name, activeCountry, stream, exams);
            const isOpen   = expandedUniIdx === i;
            const satCol   = SAT_COLORS[u.satRequired ?? "No"];

            return (
              <div key={i} style={{
                borderRadius: 12, border: "1px solid var(--ep-border)",
                background: "rgba(255,255,255,.015)", marginBottom: 8, overflow: "hidden",
              }}>
                {/* Row */}
                <div
                  className="ep-uni-card"
                  style={{ cursor: "pointer", borderRadius: 0, border: "none", background: "transparent", marginBottom: 0 }}
                  onClick={() => setExpandedUniIdx(isOpen ? null : i)}
                >
                  <div className="ep-uni-flag">{COUNTRY_FLAGS[activeCountry]}</div>
                  <div className="ep-uni-info" style={{ flex: 1 }}>
                    <div className="ep-uni-name">{u.name}</div>

                    {/* Key meta row */}
                    <div className="ep-uni-country">
                      {!isIndia && u.sat ? `SAT ${u.sat}+` : !isIndia ? "No SAT req." : ""}
                      {!isIndia && " · "}Deadline: {u.deadline} · {u.cost}
                    </div>

                    {/* Admission mode */}
                    <div style={{ fontSize: 11, color: "var(--ep-text-muted)", marginTop: 4 }}>
                      🎓 <strong>Admission:</strong> {u.admissionMode}
                    </div>

                    {/* SAT pill (non-India only) */}
                    {!isIndia && (
                      <div style={{ display: "flex", gap: 5, marginTop: 6, flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{
                          fontSize: 11, padding: "2px 9px", borderRadius: 999, fontWeight: 700,
                          background: satCol.bg, border: `1px solid ${satCol.border}`, color: satCol.text,
                        }}>
                          📐 SAT: {u.satRequired}
                        </span>

                        {/* UK exam pills */}
                        {uniTags.map((tag) => {
                          const col = STATUS_COLORS[tag.status];
                          return (
                            <span key={tag.name} style={{
                              fontSize: 11, padding: "2px 8px", borderRadius: 999, fontWeight: 700,
                              background: col.bg, border: `1px solid ${col.border}`, color: col.text,
                            }}>
                              {tag.examIcon} {tag.name}: {tag.status}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* India SAT pill */}
                    {isIndia && u.satRequired !== "No" && (
                      <div style={{ display: "flex", gap: 5, marginTop: 6 }}>
                        <span style={{
                          fontSize: 11, padding: "2px 9px", borderRadius: 999, fontWeight: 700,
                          background: satCol.bg, border: `1px solid ${satCol.border}`, color: satCol.text,
                        }}>
                          📐 SAT accepted: {u.satRequired}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="ep-uni-right">
                    <div className={`ep-uni-chance ${chance.cls}`}>{chance.label}</div>
                    <div className="ep-uni-tier">{u.tier}</div>
                    <div style={{ fontSize: 11, color: "var(--ep-text-muted)", marginTop: 2 }}>
                      {isOpen ? "▲" : "▼"} details
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                {isOpen && (
                  <div style={{ padding: "0 16px 16px", borderTop: "1px solid var(--ep-border)" }}>

                    {/* Scholarship strength */}
                    <div style={{
                      marginTop: 12, padding: "11px 14px", borderRadius: 10,
                      background: "rgba(245,158,11,.07)", border: "1px solid rgba(245,158,11,.2)",
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#fcd34d", textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 5 }}>
                        🎓 Scholarship Profile Strength
                      </div>
                      <div style={{ fontSize: 13, color: "var(--ep-text)", lineHeight: 1.6 }}>
                        {u.scholarshipStrength}
                      </div>
                    </div>

                    {/* Admission mode detail */}
                    <div style={{
                      marginTop: 8, padding: "11px 14px", borderRadius: 10,
                      background: "rgba(59,130,246,.06)", border: "1px solid rgba(59,130,246,.18)",
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#93c5fd", textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 5 }}>
                        📋 Admission Mode
                      </div>
                      <div style={{ fontSize: 13, color: "var(--ep-text)", lineHeight: 1.6 }}>
                        {u.admissionMode}
                      </div>
                    </div>

                    {/* SAT section (non-India) */}
                    {!isIndia && (
                      <div style={{
                        marginTop: 8, padding: "11px 14px", borderRadius: 10,
                        background: SAT_COLORS[u.satRequired ?? "No"].bg,
                        border: `1px solid ${SAT_COLORS[u.satRequired ?? "No"].border}`,
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: SAT_COLORS[u.satRequired ?? "No"].text, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 5 }}>
                          📐 SAT Requirement: {u.satRequired}
                        </div>
                        <div style={{ fontSize: 13, color: "var(--ep-text)", lineHeight: 1.6 }}>
                          {u.satRequired === "Yes"         && `SAT is required for admission. Target: ${u.sat}+.`}
                          {u.satRequired === "Recommended" && `Test-optional but submitting ${u.sat}+ strengthens your application significantly.`}
                          {u.satRequired === "Optional"    && `Fully test-optional. A score of ${u.sat}+ can help but is not needed.`}
                          {u.satRequired === "No"          && "SAT is not required or accepted at this university."}
                        </div>
                      </div>
                    )}

                    {/* Exam requirements (non-India) */}
                    {!isIndia && (
                      <>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ep-text-muted)", margin: "12px 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>
                          Exam requirements for {u.name}
                        </div>
                        {uniTags.length === 0 ? (
                          <p style={{ fontSize: 12, color: "var(--ep-text-muted)" }}>No standardised exam specifically required by this university beyond IELTS/TOEFL.</p>
                        ) : (
                          uniTags.map((tag) => {
                            const col = STATUS_COLORS[tag.status];
                            return (
                              <div key={tag.name} style={{
                                display: "flex", gap: 10, padding: "9px 11px",
                                borderRadius: 8, marginBottom: 6,
                                background: col.bg, border: `1px solid ${col.border}`,
                              }}>
                                <span style={{ fontSize: 18 }}>{tag.examIcon}</span>
                                <div>
                                  <div style={{ fontSize: 13, fontWeight: 700, color: col.text }}>
                                    {tag.name} — {tag.status}
                                  </div>
                                  <div style={{ fontSize: 12, color: "var(--ep-text)", lineHeight: 1.55, marginTop: 2 }}>
                                    {tag.note}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </>
                    )}

                    {/* Score gap (non-India) */}
                    {!isIndia && (
                      <div style={{ fontSize: 12, color: "var(--ep-text-muted)", marginTop: 8 }}>
                        Minimum academic score: <strong style={{ color: "var(--ep-text)" }}>{u.req}%</strong>
                        {"  ·  "}
                        Your predicted: <strong style={{ color: predictedFinal >= u.req ? "#10b981" : "#ef4444" }}>
                          {predictedFinal.toFixed(0)}%
                        </strong>
                        {predictedFinal < u.req && (
                          <span style={{ color: "#fca5a5", marginLeft: 6 }}>
                            ({(u.req - predictedFinal).toFixed(0)}% gap — aim higher)
                          </span>
                        )}
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
      {!isIndia && (
        <div style={{
          marginTop: 12, padding: "10px 14px", borderRadius: 8,
          background: "rgba(255,255,255,.03)", border: "1px solid var(--ep-border)",
          fontSize: 12, color: "var(--ep-text-muted)",
        }}>
          <strong style={{ color: "var(--ep-text)" }}>SAT: </strong>
          <span style={{ color: "#fca5a5" }}>● Required</span>{"  "}
          <span style={{ color: "#fcd34d" }}>● Recommended</span>{"  "}
          <span style={{ color: "#c4b5fd" }}>● Optional</span>{"  "}
          <span style={{ color: "#6ee7b7" }}>● Not needed</span>
          {"  ·  "}Click any card to see scholarship & admission details.
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: EXAMS
// ─────────────────────────────────────────────────────────────────────────────

function ExamsTab({ activeCountry, grade, exams, expandedExam, setExpandedExam, currentYear }: {
  activeCountry: Country; grade: number;
  exams: Exam[];
  expandedExam: string | null;
  setExpandedExam: (v: string | null) => void;
  currentYear: number;
}) {
  const isIndia = activeCountry === "India";

  if (isIndia) {
    return (
      <div style={{ padding: 20, textAlign: "center", color: "var(--ep-text-muted)" }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>🎓</div>
        <div style={{ fontWeight: 700, color: "var(--ep-text)", marginBottom: 8 }}>
          Indian Entrance Exams
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
          For Indian universities: JEE Advanced / Mains, NEET-UG, CUET, IPMAT, BITSAT, VITEEE, SET, NPAT — exams are listed per university in the Universities tab. SAT is accepted as an alternative at select private Indian universities (Ashoka, KREA, Shiv Nadar, FLAME, etc.). No UCAT, IELTS, or international standardised tests needed for Indian domestic admissions.
        </div>
      </div>
    );
  }

  if (exams.length === 0) {
    return (
      <div style={{ padding: 28, textAlign: "center", color: "var(--ep-text-muted)" }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
        <div style={{ fontWeight: 700, color: "var(--ep-text)", marginBottom: 6 }}>
          No standardised entrance exams for {activeCountry}
        </div>
        <div style={{ fontSize: 13 }}>
          {activeCountry === "Germany" && "German universities evaluate via transcripts + mandatory APS certificate for Indian students (aps-india.de)."}
          {activeCountry === "Japan" && "Check individual university requirements for EJU (Examination for Japanese University Admission)."}
          {!["Germany", "Japan"].includes(activeCountry) && "Focus on strong academics + IELTS/TOEFL for this country."}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

      {/* UK-only exam notice */}
      {activeCountry === "UK" && (
        <div style={{
          padding: "10px 14px", borderRadius: 10,
          background: "rgba(139,92,246,.08)", border: "1px solid rgba(139,92,246,.25)",
          fontSize: 12, color: "#c4b5fd",
        }}>
          🇬🇧 <strong>UK-specific exams:</strong> TMUA (Maths/CS/Economics at Cambridge/LSE), ESAT (Engineering/Science at Cambridge/Imperial), UCAT (Medicine), LNAT (Law/Oxford) and BMAT are <em>only required for UK universities</em>. They are not used by USA, Canada, Australia, or other countries.
        </div>
      )}

      <div style={{
        padding: "10px 14px", borderRadius: 10,
        background: "rgba(59,130,246,.07)", border: "1px solid rgba(59,130,246,.2)",
        fontSize: 13, color: "var(--ep-text-muted)",
      }}>
        📅 Showing exam info for <strong style={{ color: "var(--ep-accent)" }}>2027 intake</strong>
        {" "}— both current year ({currentYear}) and next year ({currentYear + 1}) dates included.
        {grade < 12 && ` (Grade ${grade} → ~${12 - grade} year${12 - grade !== 1 ? "s" : ""} to application season.)`}
      </div>

      {exams.map((exam) => {
        const ci     = getExamStatusForCountry(exam, activeCountry);
        if (!ci) return null;
        const col    = STATUS_COLORS[ci.status];
        const isOpen = expandedExam === exam.id;

        return (
          <div key={exam.id} style={{
            borderRadius: 14, border: `1.5px solid ${col.border}`,
            background: "rgba(255,255,255,.015)", overflow: "hidden",
          }}>
            {/* ── Header ── */}
            <button
              onClick={() => setExpandedExam(isOpen ? null : exam.id)}
              style={{
                width: "100%", display: "flex", alignItems: "flex-start", gap: 14,
                padding: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
              }}
            >
              <div style={{ fontSize: 30, lineHeight: 1, flexShrink: 0 }}>{exam.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--ep-text)" }}>{exam.name}</span>
                  <span style={{ fontSize: 12, color: "var(--ep-text-muted)", fontStyle: "italic" }}>{exam.fullName}</span>
                  <span style={{
                    fontSize: 11, padding: "2px 10px", borderRadius: 999, fontWeight: 700,
                    background: col.bg, border: `1px solid ${col.border}`, color: col.text,
                  }}>
                    {ci.status} in {activeCountry}
                  </span>
                  {/* UK-only badge */}
                  {UK_ONLY_EXAMS.includes(exam.id) && (
                    <span style={{
                      fontSize: 11, padding: "2px 8px", borderRadius: 999, fontWeight: 700,
                      background: "rgba(139,92,246,.15)", border: "1px solid rgba(139,92,246,.3)", color: "#c4b5fd",
                    }}>
                      🇬🇧 UK Only
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: "var(--ep-text-muted)", marginTop: 4 }}>{exam.tagline}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: col.text, marginTop: 4 }}>
                  🎯 Target score: {ci.requiredScore}
                </div>
              </div>
              <span style={{ color: "var(--ep-text-muted)", fontSize: 18, flexShrink: 0, paddingTop: 4 }}>
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* ── Expanded body ── */}
            {isOpen && (
              <div style={{ padding: "0 16px 18px", display: "flex", flexDirection: "column", gap: 10 }}>

                {/* Why it matters */}
                <InfoSection icon="✨" title={`Why ${exam.name} matters in ${activeCountry}`} bg="rgba(16,185,129,.08)" border="rgba(16,185,129,.25)" accent="#6ee7b7">
                  <p style={{ margin: 0, lineHeight: 1.65 }}>{ci.benefit}</p>
                  {ci.waivable && (
                    <div style={{
                      marginTop: 8, padding: "6px 10px", borderRadius: 7,
                      background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.2)",
                      fontSize: 12, color: "#fcd34d",
                    }}>
                      ⚡ Waiver possible: {ci.waiveCondition}
                    </div>
                  )}
                </InfoSection>

                {/* Format */}
                <InfoSection icon="📋" title="Exam Format & Details" bg="rgba(255,255,255,.04)" border="var(--ep-border)" accent="var(--ep-text-muted)">
                  <DetailRow label="Format"   value={exam.format} />
                  <DetailRow label="Duration" value={exam.duration} />
                  <DetailRow label="Fee"      value={exam.fee} />
                  <DetailRow label="Website"  value={exam.website} />
                </InfoSection>

                {/* Dates */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <DateCard year={currentYear}     label="Current Year" content={exam.currentYearDates} />
                  <DateCard year={currentYear + 1} label="Next Year"    content={exam.nextYearDates} />
                </div>

                <InfoSection icon="⏰" title="Registration Deadline" bg="rgba(239,68,68,.07)" border="rgba(239,68,68,.25)" accent="#fca5a5">
                  {exam.registrationDeadline}
                </InfoSection>

                <InfoSection icon="🚀" title={`When to start preparing (Grade ${grade} student)`} bg="rgba(59,130,246,.08)" border="rgba(59,130,246,.25)" accent="#93c5fd">
                  <strong style={{ color: "var(--ep-text)" }}>Recommended: {exam.prepMonths} months of prep</strong>
                  <p style={{ margin: "6px 0 0", lineHeight: 1.65 }}>{exam.prepStrategy}</p>
                </InfoSection>

                {/* How to register */}
                <div style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,.03)", border: "1px solid var(--ep-border)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ep-text-muted)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>
                    📌 How to register — step by step
                  </div>
                  {exam.howToRegister.map((step, si) => (
                    <div key={si} style={{ display: "flex", gap: 10, marginBottom: 9, fontSize: 13, color: "var(--ep-text)", lineHeight: 1.5 }}>
                      <span style={{
                        minWidth: 22, height: 22, borderRadius: "50%",
                        background: "var(--ep-accent)", display: "flex",
                        alignItems: "center", justifyContent: "center",
                        fontSize: 11, fontWeight: 800, color: "#fff", flexShrink: 0,
                      }}>
                        {si + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>

                <InfoSection icon="📊" title="When results are released" bg="rgba(139,92,246,.08)" border="rgba(139,92,246,.25)" accent="#c4b5fd">
                  {exam.resultsTimeline}
                </InfoSection>

                {/* Universities */}
                <div style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,.03)", border: "1px solid var(--ep-border)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ep-text-muted)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>
                    🏫 Which universities require / accept {exam.name}
                  </div>
                  {exam.universitySupport.map((us, ui) => {
                    const uc = STATUS_COLORS[us.status];
                    return (
                      <div key={ui} style={{
                        display: "flex", gap: 10, padding: "8px 10px",
                        borderRadius: 8, marginBottom: 6,
                        background: uc.bg, border: `1px solid ${uc.border}`,
                      }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: uc.dot, marginTop: 4, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ep-text)" }}>
                            {us.uniName}
                            <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 600, color: uc.text }}>{us.status}</span>
                          </div>
                          <div style={{ fontSize: 12, color: "var(--ep-text-muted)", marginTop: 2, lineHeight: 1.5 }}>{us.note}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {exam.notNeededIn.length > 0 && (
                  <div style={{
                    padding: "8px 12px", borderRadius: 8,
                    background: "rgba(107,114,128,.08)", border: "1px solid rgba(107,114,128,.2)",
                    fontSize: 12, color: "var(--ep-text-muted)",
                  }}>
                    ℹ️ <strong>Not required for:</strong>{" "}
                    {exam.notNeededIn.map((c) => `${COUNTRY_FLAGS[c]} ${c}`).join("  ·  ")}
                  </div>
                )}
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

function VisaTab({ activeCountry, visaInfo }: {
  activeCountry: Country;
  visaInfo: (typeof VISA_DB)[Country];
}) {
  if (!visaInfo) {
    return (
      <div className="ep-uni-empty" style={{ padding: 28 }}>
        Visa details for {activeCountry} are coming soon. Please check the official embassy website.
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{
        padding: 18, borderRadius: 14,
        background: "linear-gradient(135deg,rgba(59,130,246,.12),rgba(139,92,246,.08))",
        border: "1px solid rgba(59,130,246,.25)",
      }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "var(--ep-text)", marginBottom: 8 }}>
          {COUNTRY_FLAGS[activeCountry]} {visaInfo.visaType}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <MetaBadge icon="⏱️" label="Processing time" value={visaInfo.processingTime.split(".")[0]} color="#93c5fd" />
          <MetaBadge icon="🎤" label="Interview"       value={visaInfo.interviewRequired ? "Required" : "Not required"} color={visaInfo.interviewRequired ? "#fca5a5" : "#6ee7b7"} />
          <MetaBadge icon="🌐" label="Official portal" value={visaInfo.officialPortal}   color="#fcd34d" />
        </div>
      </div>

      <InfoSection icon="📄" title="Key document needed" bg="rgba(245,158,11,.08)" border="rgba(245,158,11,.25)" accent="#fcd34d">
        <strong style={{ color: "var(--ep-text)" }}>{visaInfo.keyDocument}</strong>
      </InfoSection>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <DateCard year={new Date().getFullYear()}     label="Current Year" content={visaInfo.currentYearTimeline} />
        <DateCard year={new Date().getFullYear() + 1} label="Next Year"    content={visaInfo.nextYearTimeline} />
      </div>

      <div style={{ padding: 14, borderRadius: 12, background: "rgba(255,255,255,.03)", border: "1px solid var(--ep-border)" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ep-text-muted)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14 }}>
          📌 Step-by-step visa process
        </div>
        {visaInfo.steps.map((step) => (
          <div key={step.step} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
            <div style={{
              minWidth: 28, height: 28, borderRadius: "50%", background: "var(--ep-accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0,
            }}>
              {step.step}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ep-text)" }}>{step.title}</span>
                <span style={{ fontSize: 11, color: "var(--ep-text-muted)", background: "rgba(255,255,255,.06)", padding: "1px 8px", borderRadius: 999 }}>
                  {step.timing}
                </span>
              </div>
              <div style={{ fontSize: 12, color: "var(--ep-text-muted)", marginTop: 3, lineHeight: 1.6 }}>{step.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <InfoSection icon="💳" title="Financial proof required" bg="rgba(16,185,129,.08)" border="rgba(16,185,129,.25)" accent="#6ee7b7">
        {visaInfo.financialProof}
      </InfoSection>

      {visaInfo.interviewRequired && visaInfo.interviewTips && (
        <div style={{ padding: 14, borderRadius: 10, background: "rgba(239,68,68,.06)", border: "1px solid rgba(239,68,68,.2)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#fca5a5", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
            🎤 Interview tips
          </div>
          {visaInfo.interviewTips.map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, fontSize: 13, color: "var(--ep-text)", lineHeight: 1.5 }}>
              <span style={{ color: "#ef4444", flexShrink: 0 }}>→</span>
              {tip}
            </div>
          ))}
        </div>
      )}

      <div style={{ padding: 12, borderRadius: 10, background: "rgba(245,158,11,.06)", border: "1px solid rgba(245,158,11,.2)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#fcd34d", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          ⚠️ Common reasons for visa rejection
        </div>
        {visaInfo.commonReasons.map((r, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, fontSize: 13, color: "var(--ep-text)", lineHeight: 1.5 }}>
            <span style={{ color: "#f59e0b", flexShrink: 0 }}>✕</span>
            {r}
          </div>
        ))}
      </div>

      <InfoSection icon="💼" title="Post-study work rights" bg="rgba(99,102,241,.08)" border="rgba(99,102,241,.25)" accent="#c4b5fd">
        {visaInfo.postStudyWorkRights}
      </InfoSection>

      <div style={{
        padding: "9px 13px", borderRadius: 8,
        background: "rgba(255,255,255,.03)", border: "1px solid var(--ep-border)",
        fontSize: 12, color: "var(--ep-text-muted)",
      }}>
        ⚠️ Visa rules change frequently. Always verify at <strong style={{ color: "var(--ep-accent)" }}>{visaInfo.officialPortal}</strong> before applying.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAB: TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

function TimelineTab({ countries, allCountries, timelineItems, currentYear, currentMonth, grade, isIndia }: {
  countries: Country[];
  allCountries: Country[];
  timelineItems: IntakeTimelineEvent[];
  currentYear: number; currentMonth: number;
  grade: number;
  isIndia: boolean;
}) {
  const [filterType, setFilterType] = useState<IntakeTimelineEvent["type"] | "all">("all");

  // For India tab: show timeline of all selected international countries, exclude India-internal events
  const targetCountries = isIndia
    ? allCountries.filter((c) => c !== "India")
    : countries;

  const relevant = timelineItems.filter((e) => e.countries.some((c) => targetCountries.includes(c)));

  const displayed = filterType === "all"
    ? relevant
    : relevant.filter((i) => i.type === filterType);

  const filterLabels: Record<string, string> = {
    all: "All", prep: "📚 Prep", exam: "✏️ Exams",
    apply: "📨 Apply", visa: "✈️ Visa", decision: "🎉 Decisions", travel: "🌏 Travel",
  };

  if (targetCountries.length === 0) {
    return (
      <div style={{ padding: 24, textAlign: "center", color: "var(--ep-text-muted)" }}>
        <div style={{ fontSize: 13 }}>No international countries selected. Add a country to see the planning timeline.</div>
      </div>
    );
  }

  return (
    <div>
      {isIndia && (
        <div style={{
          marginBottom: 16, padding: "10px 14px", borderRadius: 10,
          background: "rgba(16,185,129,.07)", border: "1px solid rgba(16,185,129,.25)",
          fontSize: 12, color: "#6ee7b7",
        }}>
          🌍 Showing timeline for your <strong>international target countries</strong>: {targetCountries.map((c) => `${COUNTRY_FLAGS[c]} ${c}`).join("  ·  ")}
        </div>
      )}

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
        {Object.entries(filterLabels).map(([f, label]) => (
          <button key={f} onClick={() => setFilterType(f as typeof filterType)} style={{
            padding: "5px 13px", borderRadius: 999, fontSize: 12, fontWeight: 600,
            cursor: "pointer", border: "1px solid",
            background:  filterType === f ? "var(--ep-accent)" : "transparent",
            borderColor: filterType === f ? "var(--ep-accent)" : "var(--ep-border)",
            color:       filterType === f ? "#fff" : "var(--ep-text-muted)",
          }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {displayed.map((item, idx) => {
          const isPast    = item.year < currentYear || (item.year === currentYear && item.month < currentMonth);
          const isCurrent = item.year === currentYear && item.month === currentMonth;
          const isLast    = idx === displayed.length - 1;
          const typeColor = TYPE_COLORS[item.type];

          return (
            <div key={item.id} style={{ display: "flex", gap: 14, opacity: isPast ? .5 : 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
                  background: isPast ? "rgba(255,255,255,.18)" : isCurrent ? "#10b981" : typeColor,
                  border: isCurrent ? "3px solid rgba(16,185,129,.45)" : `2px solid ${isPast ? "rgba(255,255,255,.15)" : typeColor + "66"}`,
                  boxShadow: isCurrent ? "0 0 0 5px rgba(16,185,129,.12)" : "none",
                }} />
                {!isLast && (
                  <div style={{ width: 2, flex: 1, minHeight: 18, background: isPast ? "rgba(255,255,255,.07)" : `${typeColor}33`, margin: "3px 0" }} />
                )}
              </div>
              <div style={{ paddingBottom: isLast ? 0 : 18, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: "var(--ep-text-muted)", fontWeight: 600 }}>{item.dateLabel}</span>
                  <span style={{
                    fontSize: 10, padding: "1px 7px", borderRadius: 999, fontWeight: 700,
                    background: `${typeColor}20`, border: `1px solid ${typeColor}44`, color: typeColor,
                  }}>
                    {TYPE_ICONS[item.type]} {item.type.toUpperCase()}
                  </span>
                  {isCurrent && <span style={{ fontSize: 10, padding: "1px 7px", borderRadius: 999, fontWeight: 800, background: "rgba(16,185,129,.15)", border: "1px solid rgba(16,185,129,.3)", color: "#34d399" }}>← YOU ARE HERE</span>}
                  {isPast && <span style={{ fontSize: 10, color: "var(--ep-text-muted)" }}>✓ Past</span>}
                  {item.urgent && !isPast && <span style={{ fontSize: 10, padding: "1px 7px", borderRadius: 999, fontWeight: 700, background: "rgba(239,68,68,.12)", border: "1px solid rgba(239,68,68,.25)", color: "#fca5a5" }}>URGENT</span>}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ep-text)", lineHeight: 1.3, marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "var(--ep-text-muted)", lineHeight: 1.65 }}>{item.description}</div>
                <div style={{ display: "flex", gap: 4, marginTop: 6, flexWrap: "wrap" }}>
                  {item.countries.filter((c) => targetCountries.includes(c)).map((c) => (
                    <span key={c} style={{ fontSize: 11, padding: "1px 8px", borderRadius: 999, fontWeight: 600, background: "rgba(255,255,255,.05)", border: "1px solid var(--ep-border)", color: "var(--ep-text-muted)" }}>
                      {COUNTRY_FLAGS[c]} {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {grade < 12 && (
        <div style={{
          marginTop: 20, padding: "12px 14px", borderRadius: 10,
          background: "rgba(59,130,246,.07)", border: "1px solid rgba(59,130,246,.2)",
          fontSize: 12, color: "var(--ep-text-muted)",
        }}>
          📌 You're in Grade {grade} — ~{12 - grade} year{12 - grade !== 1 ? "s" : ""} before application season. The earlier you start building your profile and preparing exams, the stronger your application will be.
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Atoms
// ─────────────────────────────────────────────────────────────────────────────

function InfoSection({ icon, title, bg, border, accent, children }: {
  icon: string; title: string; bg: string; border: string; accent: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: "11px 14px", borderRadius: 10, background: bg, border: `1px solid ${border}` }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: accent, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 7 }}>
        {icon} {title}
      </div>
      <div style={{ fontSize: 13, color: "var(--ep-text)", lineHeight: 1.65 }}>{children}</div>
    </div>
  );
}

function DateCard({ year, label, content }: { year: number; label: string; content: string }) {
  const isCurrent = year === new Date().getFullYear();
  return (
    <div style={{
      padding: 12, borderRadius: 10,
      background: isCurrent ? "rgba(16,185,129,.08)" : "rgba(139,92,246,.08)",
      border: `1px solid ${isCurrent ? "rgba(16,185,129,.25)" : "rgba(139,92,246,.25)"}`,
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: isCurrent ? "#6ee7b7" : "#c4b5fd", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 5 }}>
        {label} ({year})
      </div>
      <div style={{ fontSize: 12, color: "var(--ep-text)", lineHeight: 1.65 }}>{content}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13 }}>
      <span style={{ color: "var(--ep-text-muted)", minWidth: 80, flexShrink: 0 }}>{label}:</span>
      <span style={{ color: "var(--ep-text)" }}>{value}</span>
    </div>
  );
}

function MetaBadge({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span style={{ fontSize: 11, color: "var(--ep-text-muted)" }}>{icon} {label}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color }}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Exam tags per university
// ─────────────────────────────────────────────────────────────────────────────

function getExamTagsForUni(uniName: string, country: Country, stream: Stream, exams: Exam[]) {
  const tags: { name: string; status: ExamStatus; note: string; examIcon: string }[] = [];
  const lowerUni = uniName.toLowerCase();

  for (const exam of exams) {
    const ci = getExamStatusForCountry(exam, country);
    if (!ci) continue;

    const uniRecord = exam.universitySupport.find((us) => {
      const a = us.uniName.toLowerCase();
      const b = lowerUni;
      return a.split(" ").some((w) => w.length > 3 && b.includes(w)) ||
             b.split(" ").some((w) => w.length > 3 && a.includes(w));
    });

    if (uniRecord) {
      tags.push({ name: exam.name, status: uniRecord.status, note: uniRecord.note, examIcon: exam.icon });
    } else if (ci.status === "Mandatory") {
      tags.push({ name: exam.name, status: "Mandatory", note: `Required for all ${country} applications`, examIcon: exam.icon });
    } else if (exam.id === "ielts" && ["USA", "UK", "Canada", "Australia", "Netherlands", "Singapore"].includes(country)) {
      tags.push({ name: "IELTS/TOEFL", status: "Mandatory", note: "English proficiency proof required for all international students", examIcon: "🗣️" });
    }
  }
  return tags;
}