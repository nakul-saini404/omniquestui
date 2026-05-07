"use client";

import { useState } from "react";
import type { Country, Stream } from "@/types/edupath";
import {
  getRelevantExams,
  getRelevantScholarships,
  getRelevantVisas,
  COUNTRY_FLAGS,
  type Exam,
  type Scholarship,
  type VisaInfo,
} from "@/lib/edupath-data";

interface Props {
  countries: Country[];
  stream: Stream;
  grade: number;
  career?: string;
}

type MainTab = "exams" | "scholarships" | "visa";

// ─── Country → Universities mapping ──────────────────────────────────────────
const COUNTRY_UNI_KEYWORDS: Record<Country, string[]> = {
  USA:         ["MIT", "Carnegie Mellon", "Purdue", "UT Austin", "Arizona State", "Johns Hopkins",
                "Duke", "Emory", "Univ. of Florida", "Univ. of Arizona", "Wharton", "NYU Stern",
                "Univ. of Michigan", "Indiana University", "Univ. of Nebraska", "Harvard",
                "Stanford", "Columbia", "Yale", "Princeton", "Caltech", "Cornell", "Brown",
                "Dartmouth", "Penn", "UPenn", "Vanderbilt", "Georgetown", "UCLA", "Berkeley",
                "UCSD", "UC Davis", "UNC", "USC", "Northeastern", "Boston", "Tufts", "Rice",
                "Washington University", "Case Western", "Georgia Tech", "Northwestern"],
  UK:          ["Cambridge", "Oxford", "Imperial", "UCL", "King's College", "Edinburgh",
                "Manchester", "Sheffield", "Exeter", "Coventry", "Warwick", "LSE", "Durham",
                "Birmingham", "Bristol", "Leeds", "Southampton", "Nottingham", "Glasgow",
                "Queen Mary", "Newcastle", "St Andrews", "BLSA"],
  Canada:      ["University of Toronto", "UBC", "McGill", "Waterloo", "Dalhousie", "UoT",
                "McMaster", "Queen's", "Simon Fraser", "Alberta", "Ottawa", "Calgary", "Western"],
  Australia:   ["Melbourne", "UNSW", "Monash", "Adelaide", "Queensland", "Sydney", "Deakin",
                "Macquarie", "RMIT", "Curtin", "ANU", "Wollongong", "UTS"],
  Germany:     ["TU Munich", "LMU Munich", "Heidelberg", "RWTH Aachen", "Humboldt", "FU Berlin",
                "TU Berlin", "Hamburg", "Stuttgart", "Karlsruhe", "Freiburg", "Mannheim",
                "Göttingen", "Cologne"],
  Netherlands: ["Delft", "Amsterdam", "Leiden", "Utrecht", "Erasmus", "Eindhoven", "Groningen",
                "Radboud", "Vrije Universiteit", "Tilburg"],
  Singapore:   ["NUS", "NTU", "SMU", "SUTD", "SIT"],
  Japan:       ["University of Tokyo", "Waseda", "Ritsumeikan", "Keio", "Kyoto", "Osaka",
                "Tohoku", "Nagoya", "Tokyo Tech"],
  India:       ["IIT", "AIIMS", "BITS Pilani", "VIT", "Ashoka", "KREA", "Shiv Nadar", "FLAME",
                "SRCC", "IIM", "Christ University", "St. Stephen", "CMC", "Kasturba", "NIT",
                "JIPMER", "NLU", "NID", "NIFT", "IISER", "IISc"],
};

function filterByCountries(entries: string[], selectedCountries: Country[]): string[] {
  if (!selectedCountries || selectedCountries.length === 0) return entries;
  return entries.filter((entry) =>
    selectedCountries.some((country) =>
      COUNTRY_UNI_KEYWORDS[country]?.some((keyword) =>
        entry.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );
}

function filterNotRequiredCountries(
  notRequiredIn: Country[],
  selectedCountries: Country[]
): Country[] {
  if (!selectedCountries || selectedCountries.length === 0) return notRequiredIn;
  return notRequiredIn.filter((c) => selectedCountries.includes(c));
}

// ─── Career context messages ──────────────────────────────────────────────────
const CAREER_CONTEXT: Record<
  string,
  { headline: string; note: string; color: string; bg: string; border: string }
> = {
  "Medicine / Pre-Med": {
    headline: "Medical Pathway — Key Exams",
    note: "India: NEET-UG (May 3, 2026) is mandatory for ALL medical colleges. UK/Australia: UCAT exam (Jul–Sep 2026) + UCAS Medicine deadline October 15. USA: Pre-Med bachelor's first, then MCAT for medical school.",
    color: "#6ee7b7",
    bg: "rgba(16,185,129,.07)",
    border: "rgba(16,185,129,.25)",
  },
  "Engineering (Mechanical / Civil / EE)": {
    headline: "Engineering Pathway — Key Exams",
    note: "India: JEE Main + Advanced for IITs/NITs. BITSAT for BITS Pilani. UK: ESAT mandatory for Cambridge/Imperial. USA: SAT required for many engineering programs. Germany: Near-free tuition at TU Munich, RWTH Aachen, KIT.",
    color: "#93c5fd",
    bg: "rgba(59,130,246,.07)",
    border: "rgba(59,130,246,.25)",
  },
  "Computer Science / AI / Data Science": {
    headline: "CS / AI Pathway — Key Exams",
    note: "India: JEE Main + Advanced (IITs), BITSAT (BITS). UK: ESAT (Cambridge/Imperial), TMUA (Cambridge CS). USA: SAT required, target 1480+ for top CS schools. Germany: TU Munich CS, excellent free option.",
    color: "#c4b5fd",
    bg: "rgba(139,92,246,.07)",
    border: "rgba(139,92,246,.25)",
  },
  "Business / Economics": {
    headline: "Business / Economics Pathway — Key Exams",
    note: "India: CUET UG (May 2026) for DU colleges, IPMAT (May) for IIM 5-year program. UK: TMUA for Cambridge Economics, LSE. USA: SAT 1400+ for Wharton/Stern/Ross. No SAT needed for Canada/Australia.",
    color: "#fcd34d",
    bg: "rgba(245,158,11,.07)",
    border: "rgba(245,158,11,.25)",
  },
  "Law / Political Science": {
    headline: "Law Pathway — Key Exams",
    note: "India: CLAT 2026 (December 7, 2025) for NLUs; AILET (December 14, 2025) for NLU Delhi. UK: LNAT required for Oxford, UCL, Durham, Glasgow, KCL. USA: Law is graduate-entry — bachelor's degree + LSAT needed.",
    color: "#fca5a5",
    bg: "rgba(239,68,68,.07)",
    border: "rgba(239,68,68,.2)",
  },
  "Design / Architecture": {
    headline: "Design / Architecture Pathway — Key Exams",
    note: "India: UCEED (Jan 18, 2026) for IIT Design; NID DAT (Jan 2026); NATA (Apr–Jul 2026) for B.Arch; NIFT (Feb 2026). USA/UK: Portfolio is the primary requirement — 15–20 diverse creative works.",
    color: "#f9a8d4",
    bg: "rgba(236,72,153,.07)",
    border: "rgba(236,72,153,.2)",
  },
  "Life Sciences / Biotech": {
    headline: "Life Sciences / Biotech Pathway — Key Exams",
    note: "India: CUET UG (May 2026) for B.Sc Biotechnology at DU/BHU/JNU; IISER IAT (Jun 7, 2026) for BS-MS research programs. USA: Strong Biology + Chemistry + SAT. UK: ESAT for Cambridge Natural Sciences.",
    color: "#6ee7b7",
    bg: "rgba(16,185,129,.07)",
    border: "rgba(16,185,129,.2)",
  },
  "Liberal Arts / Humanities": {
    headline: "Liberal Arts / Humanities Pathway — Key Exams",
    note: "India: CUET UG (May 2026) for DU/JNU/BHU; Ashoka Aptitude Test (AAT) for Ashoka University. USA: SAT 1350+ for strong liberal arts colleges; writing/essays are critical. UK: UCAS Personal Statement is the key differentiator.",
    color: "#c4b5fd",
    bg: "rgba(139,92,246,.07)",
    border: "rgba(139,92,246,.25)",
  },
  "Media / Communications": {
    headline: "Media / Communications Pathway — Key Exams",
    note: "India: CUET UG for central universities; IIMC Entrance for India's top journalism school; SET (May 2026) for Symbiosis. USA/UK: Writing samples and portfolio required. No SAT needed for UK/Australia.",
    color: "#fbbf24",
    bg: "rgba(245,158,11,.07)",
    border: "rgba(245,158,11,.2)",
  },
  default: {
    headline: "Your Pathway Exams",
    note: "Exams are filtered based on your selected countries and field of study. Select a specific field to see personalised exam guidance.",
    color: "var(--ep-muted)",
    bg: "rgba(255,255,255,.03)",
    border: "var(--ep-border)",
  },
};

export default function ExamGuide({ countries, stream, grade, career }: Props) {
  const [mainTab,          setMainTab]          = useState<MainTab>("exams");
  const [selectedExam,     setSelectedExam]     = useState<string | null>(null);
  const [examTimelineYear, setExamTimelineYear] = useState<"2026" | "2027">("2026");
  const [selectedVisa,     setSelectedVisa]     = useState<Country | null>(null);

  const noSelection = countries.length === 0;
  const relevantExams        = noSelection ? [] : getRelevantExams(countries, stream, career);
  const relevantScholarships = noSelection ? [] : getRelevantScholarships(countries, stream, career);
  const relevantVisas        = noSelection ? [] : getRelevantVisas(countries);

  const activeExam = relevantExams.find((e) => e.name === selectedExam) ?? relevantExams[0];
  const activeVisa = relevantVisas.find((v) => v.country === selectedVisa) ?? relevantVisas[0];

  const ctx =
    career && CAREER_CONTEXT[career]
      ? CAREER_CONTEXT[career]
      : CAREER_CONTEXT["default"];

  const sortedExams = [...relevantExams].sort((a, b) => {
    const order = { Required: 0, Recommended: 1, Optional: 2 };
    return order[a.type] - order[b.type];
  });

  return (
    <div className="ep-section-card ep-mb">
      <div className="ep-section-title" style={{ marginBottom: 0 }}>
        <span className="ep-dot ep-dot-purple" />
        Exams, Scholarships &amp; Visa Guide
      </div>

      {/* Career context banner */}
      {career && career !== "Not decided yet" && (
        <div
          style={{
            background: ctx.bg,
            border: `1px solid ${ctx.border}`,
            borderRadius: 10,
            padding: "12px 16px",
            marginTop: 16,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: ctx.color,
                marginBottom: 4,
              }}
            >
              🎯 {ctx.headline}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.6,
              }}
            >
              {ctx.note}
            </div>
          </div>
        </div>
      )}

      {/* Tab bar */}
      <div className="ep-tab-bar" style={{ marginTop: 16, marginBottom: 24 }}>
        {(
          [
            { key: "exams",        label: "📝 Entrance Exams" },
            { key: "scholarships", label: "🎓 Scholarships"   },
            { key: "visa",         label: "✈️ Visa Guide"     },
          ] as { key: MainTab; label: string }[]
        ).map(({ key, label }) => (
          <button
            key={key}
            className={`ep-tab ${mainTab === key ? "active" : ""}`}
            onClick={() => setMainTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── EXAMS TAB ── */}
      {mainTab === "exams" && (
        <>
          {sortedExams.length === 0 ? (
            <div
              style={{
                color: "var(--ep-muted)",
                fontSize: 13,
                padding: "16px 0",
              }}
            >
              No specific standardised exams found for your profile. Focus on strong academics and IELTS/TOEFL.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: 20,
                minHeight: 480,
              }}
            >
              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {sortedExams.map((exam) => {
                  const isActive =
                    (selectedExam ?? sortedExams[0]?.name) === exam.name;
                  return (
                    <button
                      key={exam.name}
                      onClick={() => setSelectedExam(exam.name)}
                      style={{
                        background: isActive
                          ? "rgba(59,130,246,.15)"
                          : "var(--ep-surface2)",
                        border: `1px solid ${
                          isActive
                            ? "rgba(59,130,246,.4)"
                            : "var(--ep-border)"
                        }`,
                        borderRadius: 10,
                        padding: "10px 14px",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all .2s",
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 4,
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{exam.icon}</span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: isActive ? "#93c5fd" : "var(--ep-text)",
                          }}
                        >
                          {exam.name}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--ep-muted)",
                          paddingLeft: 26,
                        }}
                      >
                        {exam.countries.map((c) => COUNTRY_FLAGS[c]).join(" ")} ·{" "}
                        <span
                          style={{
                            color:
                              exam.type === "Required"
                                ? "#fca5a5"
                                : exam.type === "Recommended"
                                ? "#fcd34d"
                                : "#6ee7b7",
                          }}
                        >
                          {exam.type}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* EduQuest CTA */}
                <div
                  style={{
                    marginTop: 8,
                    padding: "14px",
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,.1), rgba(139,92,246,.08))",
                    border: "1px solid rgba(59,130,246,.25)",
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--ep-accent)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    ✦ Need Expert Help?
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--ep-muted)",
                      lineHeight: 1.5,
                      marginBottom: 10,
                    }}
                  >
                    EduQuest counsellors specialise in exam prep + applications
                    for {career || "your chosen career path"}.
                  </div>
                  <a
                    href="/contact-us"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "7px 0",
                      background:
                        "linear-gradient(135deg, var(--ep-accent), var(--ep-accent3))",
                      borderRadius: 8,
                      color: "white",
                      fontSize: 11,
                      fontWeight: 700,
                      textDecoration: "none",
                      letterSpacing: ".03em",
                    }}
                  >
                    Talk to EduQuest →
                  </a>
                </div>
              </div>

              {/* Detail panel */}
              {activeExam && (
                <ExamDetailPanel
                  exam={activeExam}
                  timelineYear={examTimelineYear}
                  onYearChange={setExamTimelineYear}
                  selectedCountries={countries}
                />
              )}
            </div>
          )}
        </>
      )}

      {/* ── SCHOLARSHIPS TAB ── */}
      {mainTab === "scholarships" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              background: "rgba(245,158,11,.06)",
              border: "1px solid rgba(245,158,11,.2)",
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 12,
              color: "#fcd34d",
            }}
          >
            💡 Apply for scholarships alongside your university applications —
            most have the same or earlier deadlines.
            {career === "Medicine / Pre-Med" &&
              " Medical scholarships often require a university offer letter first — apply to universities early."}
          </div>

          {relevantScholarships.length === 0 ? (
            <div style={{ color: "var(--ep-muted)", fontSize: 13 }}>
              No scholarships found for your selected profile. Try selecting
              countries and a field.
            </div>
          ) : (
            relevantScholarships.map((s, i) => (
              <ScholarshipCard key={i} scholarship={s} />
            ))
          )}

          <EduQuestBanner
            title="Need help applying for scholarships?"
            desc="EduQuest counsellors have helped students secure Inlaks, JN Tata, and university merit scholarships. Get personalised scholarship strategy."
          />
        </div>
      )}

      {/* ── VISA TAB ── */}
      {mainTab === "visa" && (
        <>
          {relevantVisas.length === 0 ? (
            <div style={{ color: "var(--ep-muted)", fontSize: 13 }}>
              Select international countries to see visa information. Indian domestic admissions don&apos;t require a visa.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 20,
                minHeight: 480,
              }}
            >
              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {relevantVisas.map((v) => {
                  const isActive =
                    (selectedVisa ?? relevantVisas[0]?.country) === v.country;
                  return (
                    <button
                      key={v.country}
                      onClick={() => setSelectedVisa(v.country)}
                      style={{
                        background: isActive
                          ? "rgba(59,130,246,.15)"
                          : "var(--ep-surface2)",
                        border: `1px solid ${
                          isActive
                            ? "rgba(59,130,246,.4)"
                            : "var(--ep-border)"
                        }`,
                        borderRadius: 10,
                        padding: "12px 14px",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "DM Sans, sans-serif",
                        transition: "all .2s",
                      }}
                    >
                      <div style={{ fontSize: 22, marginBottom: 4 }}>
                        {COUNTRY_FLAGS[v.country]}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: isActive ? "#93c5fd" : "var(--ep-text)",
                        }}
                      >
                        {v.country}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--ep-muted)",
                          marginTop: 2,
                        }}
                      >
                        {v.visaType}
                      </div>
                    </button>
                  );
                })}
              </div>

              {activeVisa && <VisaDetailPanel visa={activeVisa} />}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── Exam Detail Panel ────────────────────────────────────────────────────────
function ExamDetailPanel({
  exam,
  timelineYear,
  onYearChange,
  selectedCountries,
}: {
  exam: Exam;
  timelineYear: "2026" | "2027";
  onYearChange: (y: "2026" | "2027") => void;
  selectedCountries: Country[];
}) {
  const filteredRequired    = filterByCountries(exam.requiredFor,    selectedCountries);
  const filteredOptional    = filterByCountries(exam.optionalFor,    selectedCountries);
  const filteredNotRequired = filterNotRequiredCountries(
    exam.notRequiredFor as Country[],
    selectedCountries
  );

  const displayRequired    = filteredRequired.length    > 0 ? filteredRequired    : exam.requiredFor;
  const displayOptional    = filteredOptional.length    > 0 ? filteredOptional    : exam.optionalFor;
  const hasFiltered        = selectedCountries.length   > 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,.1), rgba(139,92,246,.08))",
          border: "1px solid rgba(59,130,246,.2)",
          borderRadius: 14,
          padding: "18px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "var(--ep-text)",
                marginBottom: 4,
              }}
            >
              {exam.icon} {exam.name}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--ep-muted)",
                marginBottom: 10,
              }}
            >
              {exam.fullName}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span
                className="ep-badge"
                style={{
                  background:
                    exam.type === "Required"
                      ? "rgba(239,68,68,.15)"
                      : exam.type === "Recommended"
                      ? "rgba(245,158,11,.12)"
                      : "rgba(16,185,129,.12)",
                  color:
                    exam.type === "Required"
                      ? "#fca5a5"
                      : exam.type === "Recommended"
                      ? "#fcd34d"
                      : "#6ee7b7",
                  border: `1px solid ${
                    exam.type === "Required"
                      ? "rgba(239,68,68,.3)"
                      : exam.type === "Recommended"
                      ? "rgba(245,158,11,.2)"
                      : "rgba(16,185,129,.2)"
                  }`,
                }}
              >
                {exam.type}
              </span>
              {exam.countries.map((c) => (
                <span key={c} className="ep-badge ep-badge-purple">
                  {COUNTRY_FLAGS[c]} {c}
                </span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: 11,
                color: "var(--ep-muted)",
                marginBottom: 4,
              }}
            >
              Target Score
            </div>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: 16,
                fontWeight: 800,
                color: "var(--ep-gold)",
              }}
            >
              {exam.recommendedScore.split(";")[0]}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "var(--ep-muted)",
                marginTop: 6,
              }}
            >
              Cost: {exam.cost}
            </div>
            <div style={{ fontSize: 11, color: "var(--ep-muted)" }}>
              Prep: {exam.prepTime}
            </div>
          </div>
        </div>
      </div>

      {/* Filtered notice */}
      {hasFiltered && (
        <div
          style={{
            padding: "7px 12px",
            borderRadius: 8,
            background: "rgba(59,130,246,.07)",
            border: "1px solid rgba(59,130,246,.18)",
            fontSize: 11,
            color: "#93c5fd",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span>🔍</span>
          <span>
            Showing universities for:{" "}
            <strong>
              {selectedCountries
                .map((c) => `${COUNTRY_FLAGS[c]} ${c}`)
                .join(", ")}
            </strong>
          </span>
        </div>
      )}

      {/* Required / Optional boxes */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
      >
        <InfoBox
          title="✅ Required For"
          items={
            displayRequired.length > 0
              ? displayRequired
              : ["No universities in your selected countries require this exam."]
          }
          color="#6ee7b7"
          bg="rgba(16,185,129,.08)"
          border="rgba(16,185,129,.2)"
          emptyMsg="No universities in your selected countries require this exam."
        />
        <InfoBox
          title="📌 Optional / Beneficial For"
          items={
            displayOptional.length > 0
              ? displayOptional
              : ["No universities in your selected countries list this as optional."]
          }
          color="#93c5fd"
          bg="rgba(59,130,246,.08)"
          border="rgba(59,130,246,.2)"
          emptyMsg="No universities in your selected countries list this as optional."
        />
      </div>

      {/* Not Required notice */}
      {filteredNotRequired.length > 0 && (
        <div
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            background: "rgba(107,114,128,.08)",
            border: "1px solid rgba(107,114,128,.2)",
            fontSize: 12,
            color: "var(--ep-text-muted)",
          }}
        >
          ℹ️ <strong>Not required for:</strong>{" "}
          {filteredNotRequired
            .map((c) => `${COUNTRY_FLAGS[c as Country]} ${c}`)
            .join("  ·  ")}
        </div>
      )}

      {/* Benefits */}
      <SectionBox label="✦ Why This Exam Matters" labelColor="var(--ep-accent)">
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {exam.benefits.map((b, i) => (
            <li
              key={i}
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.5,
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      </SectionBox>

      {/* How to apply + prep tips */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
      >
        <SectionBox label="📋 How to Apply" labelColor="var(--ep-gold)">
          <div
            style={{
              fontSize: 12,
              color: "var(--ep-text)",
              lineHeight: 1.6,
              marginBottom: 8,
            }}
          >
            {exam.howToApply}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--ep-muted)",
              marginBottom: 4,
            }}
          >
            📅 Registration: {exam.registrationWindow}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--ep-muted)",
              marginBottom: 8,
            }}
          >
            🗓️ Exam Window: {exam.examWindow}
          </div>
          <a
            href={exam.applyLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "rgba(59,130,246,.15)",
              border: "1px solid rgba(59,130,246,.3)",
              borderRadius: 8,
              color: "#93c5fd",
              fontSize: 11,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Official Website →
          </a>
        </SectionBox>

        <SectionBox label="💡 Prep Tips" labelColor="#c4b5fd">
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {exam.prepTips.map((t, i) => (
              <li
                key={i}
                style={{
                  fontSize: 12,
                  color: "var(--ep-text)",
                  lineHeight: 1.5,
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        </SectionBox>
      </div>

      {/* Timeline */}
      <SectionBox label="📅 Prep Timeline" labelColor="var(--ep-green)">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <div />
          <div style={{ display: "flex", gap: 6 }}>
            {(["2026", "2027"] as const).map((y) => (
              <button
                key={y}
                onClick={() => onYearChange(y)}
                style={{
                  padding: "3px 10px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  background:
                    timelineYear === y
                      ? "rgba(16,185,129,.15)"
                      : "transparent",
                  border: `1px solid ${
                    timelineYear === y
                      ? "rgba(16,185,129,.4)"
                      : "var(--ep-border)"
                  }`,
                  color: timelineYear === y ? "#6ee7b7" : "var(--ep-muted)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {y} Intake
              </button>
            ))}
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 0 }}
        >
          {(timelineYear === "2026"
            ? exam.timeline2026
            : exam.timeline2027
          ).map((item, i, arr) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                paddingBottom: i < arr.length - 1 ? 14 : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 10,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--ep-green)",
                    flexShrink: 0,
                    marginTop: 3,
                  }}
                />
                {i < arr.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      background: "var(--ep-border)",
                      marginTop: 3,
                    }}
                  />
                )}
              </div>
              <div style={{ paddingBottom: 2 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--ep-accent)",
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {item.month}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--ep-text)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.action}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBox>

      {/* EduQuest note */}
      {exam.eduquestNote && (
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,.1), rgba(139,92,246,.08))",
            border: "1px solid rgba(59,130,246,.25)",
            borderRadius: 12,
            padding: "14px 16px",
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "var(--ep-accent)",
                marginBottom: 6,
              }}
            >
              ✦ EduQuest Expert Guidance
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#c7d9f5",
                lineHeight: 1.6,
              }}
            >
              {exam.eduquestNote}
            </div>
          </div>
          <a
            href="/contact-us"
            target="_blank"
            rel="noreferrer"
            style={{
              flexShrink: 0,
              padding: "8px 16px",
              background:
                "linear-gradient(135deg, var(--ep-accent), var(--ep-accent3))",
              borderRadius: 8,
              color: "white",
              fontSize: 11,
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Get Help →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Visa Detail Panel ────────────────────────────────────────────────────────
function VisaDetailPanel({ visa }: { visa: VisaInfo }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,.1), rgba(139,92,246,.08))",
          border: "1px solid rgba(59,130,246,.2)",
          borderRadius: 14,
          padding: "18px 20px",
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 6 }}>
          {COUNTRY_FLAGS[visa.country]}
        </div>
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: "var(--ep-text)",
            marginBottom: 4,
          }}
        >
          {visa.visaType}
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            marginTop: 8,
          }}
        >
          {[
            { label: "⏱️ Processing", value: visa.processingTime },
            { label: "💰 Cost",       value: visa.cost           },
            { label: "📋 Trigger",    value: visa.triggerDocument },
          ].map((b) => (
            <div key={b.label}>
              <div style={{ fontSize: 12, color: "var(--ep-muted)" }}>
                {b.label}
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

      <div
        style={{
          background: "rgba(16,185,129,.06)",
          border: "1px solid rgba(16,185,129,.2)",
          borderRadius: 12,
          padding: "14px 16px",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: "var(--ep-green)",
            marginBottom: 8,
          }}
        >
          📅 When to Apply
        </div>
        <div
          style={{
            fontSize: 13,
            color: "var(--ep-text)",
            lineHeight: 1.6,
          }}
        >
          {visa.applyFrom}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--ep-muted)",
            marginTop: 4,
          }}
        >
          Deadline note: {visa.keyDeadlines}
        </div>
      </div>

      <SectionBox label="📁 Required Documents" labelColor="#fcd34d">
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {visa.requiredDocuments.map((doc, i) => (
            <li
              key={i}
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.4,
              }}
            >
              {doc}
            </li>
          ))}
        </ul>
      </SectionBox>

      <div
        style={{
          background: "rgba(245,158,11,.06)",
          border: "1px solid rgba(245,158,11,.2)",
          borderRadius: 12,
          padding: "14px 16px",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: "var(--ep-gold)",
            marginBottom: 8,
          }}
        >
          💰 Financial Proof Required
        </div>
        <div
          style={{
            fontSize: 13,
            color: "var(--ep-text)",
            lineHeight: 1.6,
          }}
        >
          {visa.financialRequirement}
        </div>
      </div>

      {visa.interviewRequired && visa.interviewTips.length > 0 && (
        <div
          style={{
            background: "rgba(139,92,246,.08)",
            border: "1px solid rgba(139,92,246,.2)",
            borderRadius: 12,
            padding: "14px 16px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".08em",
              color: "#c4b5fd",
              marginBottom: 10,
            }}
          >
            🎤 Interview Tips (Interview Required)
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {visa.interviewTips.map((tip, i) => (
              <li
                key={i}
                style={{
                  fontSize: 12,
                  color: "var(--ep-text)",
                  lineHeight: 1.5,
                }}
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      <SectionBox label="✦ Pro Tips" labelColor="var(--ep-accent)">
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {visa.tips.map((tip, i) => (
            <li
              key={i}
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.5,
              }}
            >
              {tip}
            </li>
          ))}
        </ul>
        {visa.link && (
          <a
            href={visa.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: 12,
              padding: "6px 14px",
              background: "rgba(59,130,246,.15)",
              border: "1px solid rgba(59,130,246,.3)",
              borderRadius: 8,
              color: "#93c5fd",
              fontSize: 11,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Official Visa Portal →
          </a>
        )}
      </SectionBox>
    </div>
  );
}

// ─── Reusable sub-components ──────────────────────────────────────────────────
function InfoBox({
  title,
  items,
  color,
  bg,
  border,
  emptyMsg,
}: {
  title: string;
  items: string[];
  color: string;
  bg: string;
  border: string;
  emptyMsg?: string;
}) {
  const isEmpty =
    items.length === 0 ||
    (items.length === 1 && emptyMsg && items[0] === emptyMsg);
  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 12,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: ".08em",
          color,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      {isEmpty ? (
        <div
          style={{
            fontSize: 12,
            color: "var(--ep-text-muted)",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          {emptyMsg ?? "None in your selected countries."}
        </div>
      ) : (
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.4,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionBox({
  label,
  labelColor,
  children,
}: {
  label: string;
  labelColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--ep-surface2)",
        border: "1px solid var(--ep-border)",
        borderRadius: 12,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: ".08em",
          color: labelColor,
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function EduQuestBanner({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(59,130,246,.1), rgba(139,92,246,.08))",
        border: "1px solid rgba(59,130,246,.25)",
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 200 }}>
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: 15,
            fontWeight: 700,
            color: "var(--ep-text)",
            marginBottom: 6,
          }}
        >
          ✦ {title}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#c7d9f5",
            lineHeight: 1.6,
          }}
        >
          {desc}
        </div>
      </div>
      <a
        href="https://eduquest.org.in"
        target="_blank"
        rel="noreferrer"
        style={{
          padding: "10px 20px",
          background:
            "linear-gradient(135deg, var(--ep-accent), var(--ep-accent3))",
          borderRadius: 10,
          color: "white",
          fontSize: 13,
          fontWeight: 700,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Talk to EduQuest →
      </a>
    </div>
  );
}

function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      style={{
        background: "var(--ep-surface2)",
        border: "1px solid var(--ep-border)",
        borderRadius: 14,
        overflow: "hidden",
        transition: "border-color .2s",
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "16px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          fontFamily: "DM Sans, sans-serif",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "var(--ep-text)",
              marginBottom: 4,
            }}
          >
            🎓 {scholarship.name}
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "var(--ep-green)",
                fontWeight: 600,
              }}
            >
              {scholarship.amount}
            </span>
            <span style={{ fontSize: 11, color: "var(--ep-muted)" }}>
              {scholarship.countries.map((c) => COUNTRY_FLAGS[c]).join(" ")}
            </span>
            <span style={{ fontSize: 11, color: "var(--ep-muted)" }}>
              📅 {scholarship.deadline}
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            color: "var(--ep-muted)",
            transition: "transform .2s",
            transform: expanded ? "rotate(180deg)" : "none",
            flexShrink: 0,
          }}
        >
          ▼
        </div>
      </button>

      {expanded && (
        <div
          style={{
            padding: "0 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            borderTop: "1px solid var(--ep-border)",
            paddingTop: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "var(--ep-muted)",
                marginBottom: 6,
              }}
            >
              Eligibility
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.6,
              }}
            >
              {scholarship.eligibility}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "var(--ep-gold)",
                marginBottom: 6,
              }}
            >
              How to Apply
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--ep-text)",
                lineHeight: 1.6,
              }}
            >
              {scholarship.howToApply}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "var(--ep-accent)",
                marginBottom: 6,
              }}
            >
              Tips to Win
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {scholarship.tips.map((t, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 12,
                    color: "var(--ep-text)",
                    lineHeight: 1.5,
                  }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {scholarship.link && (
            <a
              href={scholarship.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "7px 16px",
                background: "rgba(59,130,246,.15)",
                border: "1px solid rgba(59,130,246,.3)",
                borderRadius: 8,
                color: "#93c5fd",
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                alignSelf: "flex-start",
              }}
            >
              Apply / Learn More →
            </a>
          )}
        </div>
      )}
    </div>
  );
}