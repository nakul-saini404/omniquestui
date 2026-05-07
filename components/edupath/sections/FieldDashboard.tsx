"use client";

import { useState } from "react";
import type { Country, Stream } from "@/types/edupath";
import {
  getExamsForFieldAndCountry,
  getSubjectsForField,
  getFieldCountryTimeline,
  getTopCollegesForField,
  getAbroadNote,
  isSATNeeded,
  getSATNote,
} from "@/lib/field-country-data";
import { COUNTRY_FLAGS } from "@/lib/edupath-data";

interface Props {
  countries: Country[];
  field: string;
  stream: Stream;
  grade: number;
  score: number;
}

type Tab = "exams" | "subjects" | "timeline" | "colleges";

const TAB_LABELS: Record<Tab, string> = {
  exams: "📝 Required Exams",
  subjects: "📚 Subjects Needed",
  timeline: "📅 Your Timeline",
  colleges: "🏫 Top Colleges",
};

const STATUS_COLORS = {
  Mandatory: { bg: "rgba(239,68,68,.1)", border: "rgba(239,68,68,.25)", text: "#ef4444", dot: "#ef4444" },
  Recommended: { bg: "rgba(245,158,11,.1)", border: "rgba(245,158,11,.25)", text: "#f59e0b", dot: "#fbbf24" },
  Optional: { bg: "rgba(99,102,241,.1)", border: "rgba(99,102,241,.25)", text: "#818cf8", dot: "#6366f1" },
  "Not Required": { bg: "rgba(107,114,128,.07)", border: "rgba(107,114,128,.2)", text: "#9ca3af", dot: "#6b7280" },
};

const IMPORTANCE_COLORS = {
  Required: { bg: "rgba(239,68,68,.08)", border: "rgba(239,68,68,.22)", text: "#ef4444" },
  "Strongly Recommended": { bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.22)", text: "#f59e0b" },
  Helpful: { bg: "rgba(99,102,241,.08)", border: "rgba(99,102,241,.22)", text: "#818cf8" },
};

const TIMELINE_COLORS = {
  exam: { bg: "rgba(239,68,68,.07)", border: "rgba(239,68,68,.2)", dot: "#f87171", icon: "✏️" },
  open: { bg: "rgba(59,130,246,.07)", border: "rgba(59,130,246,.2)", dot: "#60a5fa", icon: "📋" },
  deadline: { bg: "rgba(245,158,11,.07)", border: "rgba(245,158,11,.2)", dot: "#fbbf24", icon: "⚠️" },
  result: { bg: "rgba(16,185,129,.07)", border: "rgba(16,185,129,.2)", dot: "#34d399", icon: "🎉" },
  visa: { bg: "rgba(139,92,246,.07)", border: "rgba(139,92,246,.2)", dot: "#a78bfa", icon: "🛂" },
  travel: { bg: "rgba(20,184,166,.07)", border: "rgba(20,184,166,.2)", dot: "#2dd4bf", icon: "✈️" },
  prep: { bg: "rgba(59,130,246,.07)", border: "rgba(59,130,246,.2)", dot: "#60a5fa", icon: "📖" },
};

export default function FieldDashboard({ countries, field, stream, grade, score }: Props) {
  const [activeCountry, setActiveCountry] = useState<Country>(countries[0]);
  const [activeTab, setActiveTab] = useState<Tab>("exams");
  const [expandedExam, setExpandedExam] = useState<string | null>(null);

  const exams = getExamsForFieldAndCountry(field, activeCountry);
  const subjects = getSubjectsForField(field, activeCountry);
  const timeline = getFieldCountryTimeline(field, activeCountry, grade);
  const colleges = getTopCollegesForField(field, activeCountry);
  const abroadNote = getAbroadNote(field, activeCountry);
  const satNeeded = isSATNeeded(activeCountry);
  const satNote = getSATNote(activeCountry);

  const nowMonth = new Date().getMonth();
  const nowYear = new Date().getFullYear();

  const fieldShort = field.length > 30 ? field.split("/")[0].trim() : field;

  return (
    <div style={{ marginBottom: 24 }}>
      {/* ── Section heading ── */}
      <div className="ep-sec-heading" style={{ marginBottom: 16 }}>
        Your Personalised Roadmap — {fieldShort}
        <div className="ep-heading-line" />
      </div>

      <div
        style={{
          background: "rgba(255,255,255,.02)",
          border: "1px solid var(--ep-border)",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {/* ── Country selector ── */}
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            padding: "14px 16px 0",
          }}
        >
          {countries.map((c) => {
            const active = activeCountry === c;
            return (
              <button
                key={c}
                onClick={() => { setActiveCountry(c); setExpandedExam(null); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 14px",
                  borderRadius: 10,
                  border: `1.5px solid ${active ? "var(--ep-accent)" : "var(--ep-border)"}`,
                  background: active ? "var(--ep-accent)" : "rgba(255,255,255,.03)",
                  color: active ? "#fff" : "var(--ep-text-muted)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all .18s",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ fontSize: 16 }}>{COUNTRY_FLAGS[c]}</span>
                {c}
              </button>
            );
          })}
        </div>

        {/* ── Contextual note (special paths like US medicine, UK law) ── */}
        {abroadNote && (
          <div
            style={{
              margin: "12px 16px 0",
              padding: "10px 14px",
              borderRadius: 10,
              background: "rgba(59,130,246,.06)",
              border: "1px solid rgba(59,130,246,.2)",
              fontSize: 12,
              color: "var(--ep-text)",
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontWeight: 700, color: "#60a5fa" }}>
              {COUNTRY_FLAGS[activeCountry]} {activeCountry} — {fieldShort}:
            </span>{" "}
            {abroadNote}
          </div>
        )}

        {/* ── SAT status pill ── */}
        <div
          style={{
            margin: "10px 16px 0",
            padding: "9px 13px",
            borderRadius: 9,
            background: satNeeded ? "rgba(239,68,68,.07)" : "rgba(16,185,129,.07)",
            border: `1px solid ${satNeeded ? "rgba(239,68,68,.22)" : "rgba(16,185,129,.22)"}`,
            display: "flex",
            alignItems: "flex-start",
            gap: 9,
            fontSize: 12,
            color: "var(--ep-text)",
            lineHeight: 1.55,
          }}
        >
          <span style={{ fontSize: 16, flexShrink: 0 }}>📐</span>
          <div>
            <span
              style={{
                fontWeight: 700,
                color: satNeeded ? "#fca5a5" : "#6ee7b7",
                marginRight: 6,
              }}
            >
              SAT: {satNeeded ? "Required / Strongly Recommended" : "NOT Required"}
            </span>
            {satNote}
          </div>
        </div>

        {/* ── Tab bar ── */}
        <div
          style={{
            display: "flex",
            gap: 4,
            margin: "14px 16px 0",
            background: "rgba(255,255,255,.04)",
            border: "1px solid var(--ep-border)",
            borderRadius: 12,
            padding: 4,
            flexWrap: "wrap",
          }}
        >
          {(Object.keys(TAB_LABELS) as Tab[]).map((t) => {
            const active = activeTab === t;
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                style={{
                  padding: "7px 14px",
                  borderRadius: 9,
                  border: "none",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  background: active ? "var(--ep-accent)" : "transparent",
                  color: active ? "#fff" : "var(--ep-text-muted)",
                  transition: "all .15s",
                  flex: 1,
                  minWidth: 110,
                  fontFamily: "inherit",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>

        {/* ── Tab content ── */}
        <div style={{ padding: "16px 16px 18px" }}>

          {/* ══ EXAMS TAB ══ */}
          {activeTab === "exams" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {exams.length === 0 ? (
                <div
                  style={{
                    padding: 24,
                    textAlign: "center",
                    color: "var(--ep-text-muted)",
                    fontSize: 13,
                    border: "1px dashed var(--ep-border)",
                    borderRadius: 12,
                  }}
                >
                  No specific entrance exams found for {field} in {activeCountry}. Focus on strong academics + IELTS/TOEFL.
                </div>
              ) : (
                exams.map((exam) => {
                  const col = STATUS_COLORS[exam.status] ?? STATUS_COLORS.Recommended;
                  const isOpen = expandedExam === exam.examName;
                  return (
                    <div
                      key={exam.examName}
                      style={{
                        borderRadius: 12,
                        border: `1.5px solid ${isOpen ? col.border : "var(--ep-border)"}`,
                        background: isOpen ? col.bg : "rgba(255,255,255,.02)",
                        overflow: "hidden",
                        transition: "all .2s",
                      }}
                    >
                      <div
                        onClick={() => setExpandedExam(isOpen ? null : exam.examName)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "13px 15px",
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: col.bg,
                            border: `1px solid ${col.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 20,
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
                              flexWrap: "wrap",
                              marginBottom: 4,
                            }}
                          >
                            <span
                              style={{ fontSize: 14, fontWeight: 700, color: "var(--ep-text)" }}
                            >
                              {exam.examName}
                            </span>
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                padding: "2px 8px",
                                borderRadius: 999,
                                background: col.bg,
                                border: `1px solid ${col.border}`,
                                color: col.text,
                              }}
                            >
                              {exam.status}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: 10,
                              flexWrap: "wrap",
                              fontSize: 11,
                              color: "var(--ep-text-muted)",
                            }}
                          >
                            <span>🎯 {exam.targetScore}</span>
                            <span>📅 {exam.examDate}</span>
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: 14,
                            color: "var(--ep-text-muted)",
                            flexShrink: 0,
                            paddingTop: 4,
                          }}
                        >
                          {isOpen ? "▲" : "▼"}
                        </span>
                      </div>
                      {isOpen && (
                        <div
                          style={{
                            borderTop: `1px solid ${col.border}`,
                            padding: "12px 15px 14px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontSize: 13,
                              color: "var(--ep-text)",
                              lineHeight: 1.6,
                            }}
                          >
                            {exam.note}
                          </p>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: 8,
                            }}
                          >
                            <div
                              style={{
                                padding: "9px 12px",
                                borderRadius: 9,
                                background: "rgba(255,255,255,.04)",
                                border: "1px solid var(--ep-border)",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: 10,
                                  color: "var(--ep-text-muted)",
                                  marginBottom: 3,
                                  textTransform: "uppercase",
                                  letterSpacing: ".06em",
                                }}
                              >
                                📋 Registration
                              </div>
                              <div
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color: "var(--ep-text)",
                                }}
                              >
                                {exam.registrationWindow}
                              </div>
                            </div>
                            <div
                              style={{
                                padding: "9px 12px",
                                borderRadius: 9,
                                background: "rgba(255,255,255,.04)",
                                border: "1px solid var(--ep-border)",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: 10,
                                  color: "var(--ep-text-muted)",
                                  marginBottom: 3,
                                  textTransform: "uppercase",
                                  letterSpacing: ".06em",
                                }}
                              >
                                🗓️ Exam Date
                              </div>
                              <div
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color: "#fbbf24",
                                }}
                              >
                                {exam.examDate}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}

              {/* Legend */}
              <div
                style={{
                  marginTop: 4,
                  padding: "8px 12px",
                  borderRadius: 9,
                  background: "rgba(255,255,255,.02)",
                  border: "1px solid var(--ep-border)",
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  fontSize: 11,
                  color: "var(--ep-text-muted)",
                }}
              >
                <span style={{ color: "#ef4444" }}>● Mandatory</span>
                <span style={{ color: "#f59e0b" }}>● Recommended</span>
                <span style={{ color: "#818cf8" }}>● Optional</span>
              </div>
            </div>
          )}

          {/* ══ SUBJECTS TAB ══ */}
          {activeTab === "subjects" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Stream alignment notice */}
              <div
                style={{
                  padding: "10px 13px",
                  borderRadius: 10,
                  background: "rgba(16,185,129,.07)",
                  border: "1px solid rgba(16,185,129,.2)",
                  fontSize: 12,
                  color: "#6ee7b7",
                  lineHeight: 1.55,
                }}
              >
                <strong>Your stream: {stream}</strong> — Subjects listed are specific to{" "}
                <strong>{field}</strong> applications for{" "}
                <strong>{COUNTRY_FLAGS[activeCountry]} {activeCountry}</strong>.
              </div>

              {subjects.map((s, i) => {
                const col = IMPORTANCE_COLORS[s.importance] ?? IMPORTANCE_COLORS.Helpful;
                return (
                  <div
                    key={i}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 11,
                      background: col.bg,
                      border: `1px solid ${col.border}`,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: 999,
                        background: `${col.border}`,
                        color: col.text,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {s.importance}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--ep-text)",
                          marginBottom: 3,
                        }}
                      >
                        {s.subject}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--ep-text-muted)",
                          lineHeight: 1.55,
                        }}
                      >
                        {s.note}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ══ TIMELINE TAB ══ */}
          {activeTab === "timeline" && (
            <div>
              {timeline.length === 0 ? (
                <div
                  style={{
                    padding: 24,
                    textAlign: "center",
                    color: "var(--ep-text-muted)",
                    fontSize: 13,
                    border: "1px dashed var(--ep-border)",
                    borderRadius: 12,
                  }}
                >
                  Timeline data not available for this combination.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {timeline.map((event, idx) => {
                    const tc = TIMELINE_COLORS[event.type] ?? TIMELINE_COLORS.prep;
                    const isLast = idx === timeline.length - 1;
                    const isPast =
                      event.year < nowYear ||
                      (event.year === nowYear && parseInt(event.month.split(" ")[0]) - 1 < nowMonth);

                    return (
                      <div
                        key={idx}
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
                            flexDirection: "column",
                            alignItems: "center",
                            width: 18,
                            flexShrink: 0,
                            paddingTop: 3,
                          }}
                        >
                          <div
                            style={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              background: event.urgent ? "#ef4444" : tc.dot,
                              border: event.urgent
                                ? "2px solid rgba(239,68,68,.3)"
                                : `2px solid ${tc.dot}55`,
                              flexShrink: 0,
                            }}
                          />
                          {!isLast && (
                            <div
                              style={{
                                width: 2,
                                flex: 1,
                                minHeight: 16,
                                background: `${tc.dot}28`,
                                margin: "3px 0",
                              }}
                            />
                          )}
                        </div>

                        {/* Card */}
                        <div
                          style={{
                            paddingBottom: isLast ? 0 : 10,
                            flex: 1,
                            background: tc.bg,
                            border: `1px solid ${tc.border}`,
                            borderRadius: 10,
                            padding: "10px 12px",
                            marginBottom: isLast ? 0 : 8,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              flexWrap: "wrap",
                              marginBottom: 4,
                            }}
                          >
                            <span
                              style={{
                                fontSize: 10,
                                color: tc.dot,
                                fontWeight: 700,
                              }}
                            >
                              {tc.icon} {event.month}
                            </span>
                            {event.urgent && (
                              <span
                                style={{
                                  fontSize: 9,
                                  padding: "1px 6px",
                                  borderRadius: 999,
                                  fontWeight: 800,
                                  background: "rgba(239,68,68,.12)",
                                  border: "1px solid rgba(239,68,68,.25)",
                                  color: "#fca5a5",
                                }}
                              >
                                ⚠️ URGENT
                              </span>
                            )}
                            {isPast && (
                              <span
                                style={{ fontSize: 10, color: "var(--ep-text-muted)" }}
                              >
                                ✓ Past
                              </span>
                            )}
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "var(--ep-text)",
                              marginBottom: 3,
                              lineHeight: 1.3,
                            }}
                          >
                            {event.title}
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "var(--ep-text-muted)",
                              lineHeight: 1.6,
                            }}
                          >
                            {event.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Grade note */}
              {grade < 12 && (
                <div
                  style={{
                    marginTop: 14,
                    padding: "9px 12px",
                    borderRadius: 9,
                    background: "rgba(59,130,246,.07)",
                    border: "1px solid rgba(59,130,246,.18)",
                    fontSize: 12,
                    color: "var(--ep-text-muted)",
                  }}
                >
                  📌 You are in Grade {grade} — approximately {12 - grade} year
                  {12 - grade !== 1 ? "s" : ""} before application season. The timeline above shows
                  the <strong style={{ color: "var(--ep-text)" }}>2027 intake</strong> roadmap.
                </div>
              )}
            </div>
          )}

          {/* ══ COLLEGES TAB ══ */}
          {activeTab === "colleges" && (
            <div>
              {colleges.length === 0 ? (
                <div
                  style={{
                    padding: 20,
                    textAlign: "center",
                    color: "var(--ep-text-muted)",
                    fontSize: 13,
                  }}
                >
                  College list not available for this specific combination.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      padding: "9px 13px",
                      borderRadius: 10,
                      background: "rgba(245,158,11,.07)",
                      border: "1px solid rgba(245,158,11,.2)",
                      fontSize: 12,
                      color: "#fcd34d",
                      marginBottom: 4,
                    }}
                  >
                    🎓 Top colleges for <strong>{field}</strong> in{" "}
                    <strong>{COUNTRY_FLAGS[activeCountry]} {activeCountry}</strong>
                  </div>

                  {colleges.map((college, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "11px 14px",
                        borderRadius: 11,
                        background: "rgba(255,255,255,.03)",
                        border: "1px solid var(--ep-border)",
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background:
                            i === 0
                              ? "rgba(245,158,11,.15)"
                              : i === 1
                              ? "rgba(107,114,128,.15)"
                              : i === 2
                              ? "rgba(180,100,60,.15)"
                              : "rgba(255,255,255,.06)",
                          border: "1px solid var(--ep-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 13,
                          fontWeight: 800,
                          color:
                            i === 0
                              ? "#fbbf24"
                              : i === 1
                              ? "#9ca3af"
                              : i === 2
                              ? "#cd7c54"
                              : "var(--ep-text-muted)",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "var(--ep-text)",
                          }}
                        >
                          {college}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--ep-text-muted)",
                            marginTop: 1,
                          }}
                        >
                          {COUNTRY_FLAGS[activeCountry]} {activeCountry} · {field}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}