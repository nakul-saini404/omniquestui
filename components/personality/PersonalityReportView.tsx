"use client";
import { useEffect, useRef } from "react";
import type {
  PersonalityReport,
  ExamRecommendation,
  ProfileBuildingItem,
} from "@/lib/personality";
import Link from "next/link";

/* ── colour helpers ── */
const scoreColor = (s: number) =>
  s >= 80 ? "#34d399" : s >= 60 ? "#5b8aff" : "#fb923c";

const STREAM_ICONS: Record<string, string> = {
  "Science (PCM)":         "⚙️",
  "Science (PCB)":         "🧬",
  Commerce:                "📈",
  "Arts / Humanities":     "🎭",
  "Vocational / Design":   "🎨",
};

const PRIORITY_COLOR: Record<string, string> = {
  Essential: "#34d399",
  High:      "#5b8aff",
  Medium:    "#fb923c",
  primary:   "#5b8aff",
  secondary: "rgba(255,255,255,.4)",
};

const REGION_COLOR: Record<string, string> = {
  USA:          "#5b8aff",
  UK:           "#ef4444",
  Canada:       "#ef4444",
  Australia:    "#f59e0b",
  Europe:       "#a78bfa",
  Singapore:    "#34d399",
  "South Korea":"#fb923c",
};

const CLASS_LEVEL_COLOR: Record<string, string> = {
  "Class 9–10":    "#34d399",
  "Class 11":      "#5b8aff",
  "Class 11–12":   "#5b8aff",
  "Class 12":      "#fb923c",
  "Post Class 12": "#a78bfa",
};

export default function PersonalityReportView({
  report,
}: {
  report: PersonalityReport;
}) {
  const radarRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (radarRef.current) drawRadar(radarRef.current, report.categories);
  }, [report]);

  const sc   = scoreColor(report.overallScore);
  const r    = 60;
  const circ = 2 * Math.PI * r;
  const dash = (report.overallScore / 100) * circ;

  const isStreamMode    = report.streamRecommendation != null;
  const isUniversityMode = !isStreamMode;
  const stream          = report.streamRecommendation;
  const confColor       = scoreColor(stream?.confidence ?? 50);

  return (
    <div style={{ animation: "fadeUp .6s ease both", color: "white" }}>

      {/* ══ 1. HERO ══ */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", borderRadius: 100,
          background: "rgba(91,138,255,.12)", border: "1px solid rgba(91,138,255,.25)",
          color: "#5b8aff", fontSize: ".7rem", letterSpacing: ".14em",
          fontWeight: 600, textTransform: "uppercase", marginBottom: 18,
        }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#5b8aff", animation:"blink 1.5s infinite" }} />
          AI Career Intelligence Report · OmniQuest
        </div>
        <h1 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.8rem,5vw,2.8rem)", fontWeight:800, marginBottom:8 }}>
          {report.studentName}
        </h1>

        {/* Class + Target badges */}
        <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap", marginBottom:12 }}>
          {report.currentClass && (
            <span style={{
              padding:"4px 14px", borderRadius:50,
              background:"rgba(52,211,153,.1)", border:"1px solid rgba(52,211,153,.25)",
              color:"#34d399", fontSize:".72rem", fontWeight:700,
            }}>
              📚 Class {report.currentClass}
            </span>
          )}
          {isUniversityMode && report.targetCountry && (
            <span style={{
              padding:"4px 14px", borderRadius:50,
              background:`${REGION_COLOR[report.targetCountry] ?? "#5b8aff"}18`,
              border:`1px solid ${REGION_COLOR[report.targetCountry] ?? "#5b8aff"}40`,
              color: REGION_COLOR[report.targetCountry] ?? "#5b8aff",
              fontSize:".72rem", fontWeight:700,
            }}>
              🌍 Target: {report.targetCountry}
            </span>
          )}
          {isUniversityMode && report.targetDegree && (
            <span style={{
              padding:"4px 14px", borderRadius:50,
              background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.25)",
              color:"#d4af37", fontSize:".72rem", fontWeight:700,
            }}>
              🎓 {report.targetDegree}
            </span>
          )}
          {isStreamMode && (
            <span style={{
              padding:"4px 14px", borderRadius:50,
              background:"rgba(52,211,153,.1)", border:"1px solid rgba(52,211,153,.25)",
              color:"#34d399", fontSize:".72rem", fontWeight:700,
            }}>
              🏫 Stream Recommendation Report
            </span>
          )}
        </div>

        <div style={{
          display:"inline-block", padding:"9px 26px", borderRadius:100,
          background:"linear-gradient(135deg,rgba(91,138,255,.18),rgba(167,139,250,.18))",
          border:"1px solid rgba(91,138,255,.3)", marginBottom:10,
        }}>
          <span style={{
            fontFamily:"var(--font-head)", fontSize:"1.2rem", fontWeight:800,
            background:"linear-gradient(135deg,#5b8aff,#a78bfa)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>
            {report.personalityType}
          </span>
        </div>
        <p style={{ color:"rgba(241,245,255,.45)", fontStyle:"italic", fontSize:".95rem", marginBottom:28 }}>
          "{report.tagline}"
        </p>

        {/* Score ring */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:8 }}>
          <svg width={160} height={160} viewBox="0 0 160 160">
            <circle cx={80} cy={80} r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth={12} />
            <circle cx={80} cy={80} r={r} fill="none" stroke={sc} strokeWidth={12} strokeLinecap="round"
              strokeDasharray={`${dash} ${circ-dash}`} strokeDashoffset={circ/4}
              style={{ filter:`drop-shadow(0 0 10px ${sc}88)`, transition:"stroke-dasharray 1.4s ease" }} />
            <text x={80} y={76} textAnchor="middle" fill={sc} fontFamily="Syne,sans-serif" fontSize="28" fontWeight="800">{report.overallScore}</text>
            <text x={80} y={96} textAnchor="middle" fill="rgba(241,245,255,.35)" fontFamily="DM Sans,sans-serif" fontSize="11">/100</text>
          </svg>
        </div>
        <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.4)", letterSpacing:".1em", textTransform:"uppercase" }}>
          Overall Readiness Score
        </div>
      </div>

      {/* ══ 2A. STREAM RECOMMENDATION (Class 8–10 only) ══ */}
      {isStreamMode && stream && (
        <Box icon="🏫" title="Stream Recommendation After 10th">
          <div style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom:20, flexWrap:"wrap" }}>
            {/* Primary stream badge */}
            <div style={{
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6,
              background:"rgba(212,175,55,.15)", border:"2px solid rgba(212,175,55,.4)", borderRadius:16,
              padding:"20px 24px", minWidth:130, flexShrink:0,
            }}>
              <span style={{ fontSize:"2.2rem" }}>{STREAM_ICONS[stream.primary] ?? "🎓"}</span>
              <div style={{ fontFamily:"var(--font-head)", fontSize:".82rem", fontWeight:800, color:"#d4af37", textAlign:"center", lineHeight:1.3 }}>
                {stream.primary}
              </div>
              <div style={{ fontSize:".62rem", color:"rgba(241,245,255,.4)", textTransform:"uppercase", letterSpacing:".08em" }}>
                Recommended
              </div>
            </div>

            <div style={{ flex:1, minWidth:200 }}>
              {/* Confidence bar */}
              <div style={{ marginBottom:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                  <span style={{ fontSize:".7rem", color:"rgba(241,245,255,.4)", textTransform:"uppercase", letterSpacing:".08em" }}>Confidence Match</span>
                  <span style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:800, color:confColor }}>{stream.confidence}%</span>
                </div>
                <div style={{ height:6, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${stream.confidence}%`, background:confColor, borderRadius:99, boxShadow:`0 0 10px ${confColor}66`, transition:"width 1.2s ease" }} />
                </div>
              </div>
              <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.6)", lineHeight:1.7, margin:0 }}>{stream.reasoning}</p>
            </div>
          </div>

          {/* Subjects + Career Paths */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
            <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:10 }}>Core Subjects</div>
              {stream.subjects.map((s, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:"#d4af37", flexShrink:0 }} />
                  <span style={{ fontSize:".8rem", color:"rgba(241,245,255,.7)" }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:10 }}>Career Paths</div>
              {stream.careerPathsFromStream.map((p, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <span style={{ color:"#00C9B1", fontSize:".75rem", flexShrink:0 }}>→</span>
                  <span style={{ fontSize:".8rem", color:"rgba(241,245,255,.7)" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternate streams */}
          {stream.alternates?.length > 0 && (
            <div>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.35)", textTransform:"uppercase", marginBottom:8 }}>Also Consider</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {stream.alternates.map((alt, i) => (
                  <span key={i} style={{
                    display:"flex", alignItems:"center", gap:6, padding:"6px 14px",
                    borderRadius:50, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)",
                    fontSize:".75rem", color:"rgba(241,245,255,.55)", fontWeight:500,
                  }}>
                    {STREAM_ICONS[alt] ?? "🎓"} {alt}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* What to do now */}
          <div style={{ marginTop:20, padding:"16px 18px", borderRadius:12, background:"linear-gradient(135deg,rgba(52,211,153,.08),rgba(52,211,153,.03))", border:"1px solid rgba(52,211,153,.2)" }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#34d399", textTransform:"uppercase", marginBottom:8 }}>✦ What To Do Now</div>
            <p style={{ fontSize:".84rem", color:"rgba(241,245,255,.65)", lineHeight:1.75, margin:0 }}>
              Start your SAT foundation now — students who begin early consistently score 100–150 points higher. 
              Book a free counselling session with <strong style={{ color:"#34d399" }}>EduQuest</strong> to get a personalised roadmap for your chosen stream, subject selection, and international university preparation.
            </p>
          </div>
        </Box>
      )}

      {/* ══ 2B. UNIVERSITY RANKED LIST (Class 11/12+) ══ */}
      {isUniversityMode && report.universities?.length > 0 && (
        <Box icon="🏛️" title={`Top Universities for You — ${report.targetCountry ?? ""}`}>
          <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:18 }}>
            Universities ranked from <strong style={{ color:"white" }}>most to least recommended</strong> based on your personality profile, academic strengths, and target degree in <strong style={{ color: REGION_COLOR[report.targetCountry ?? ""] ?? "#5b8aff" }}>{report.targetCountry}</strong>.
          </p>

          {/* Region + required exams legend */}
          {report.targetCountry && (
            <div style={{ padding:"12px 16px", borderRadius:10, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", marginBottom:18, fontSize:".78rem", color:"rgba(241,245,255,.55)", lineHeight:1.65 }}>
              <strong style={{ color: REGION_COLOR[report.targetCountry] ?? "#5b8aff" }}>
                {report.targetCountry} Track Strategy:
              </strong>{" "}
              {getTrackInsight(report.targetCountry)}
            </div>
          )}

          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {report.universities.map((u, i) => (
              <a key={i} href={u.website} target="_blank" rel="noopener noreferrer"
                style={{ display:"block", textDecoration:"none", color:"inherit" }}>
                <div style={{
                  display:"flex", gap:0, borderRadius:14, overflow:"hidden",
                  border:`1px solid ${i === 0 ? (REGION_COLOR[u.region] ?? "#5b8aff") + "50" : "rgba(255,255,255,.07)"}`,
                  background: i === 0 ? "rgba(91,138,255,.06)" : "rgba(255,255,255,.02)",
                  transition:"all .2s", cursor:"pointer",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = (REGION_COLOR[u.region] ?? "#5b8aff") + "60";
                  el.style.background = "rgba(255,255,255,.05)";
                  el.style.transform = "translateX(4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = i === 0 ? (REGION_COLOR[u.region] ?? "#5b8aff") + "50" : "rgba(255,255,255,.07)";
                  el.style.background = i === 0 ? "rgba(91,138,255,.06)" : "rgba(255,255,255,.02)";
                  el.style.transform = "none";
                }}>
                  {/* Rank strip */}
                  <div style={{
                    width:44, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center",
                    background: i === 0 ? REGION_COLOR[u.region] ?? "#5b8aff" : "rgba(255,255,255,.04)",
                    borderRight:"1px solid rgba(255,255,255,.06)",
                  }}>
                    <span style={{
                      fontFamily:"var(--font-head)", fontSize:i === 0 ? "1.1rem" : ".95rem",
                      fontWeight:800,
                      color: i === 0 ? "white" : "rgba(241,245,255,.3)",
                    }}>#{i + 1}</span>
                  </div>

                  {/* Content */}
                  <div style={{ flex:1, padding:"16px 18px" }}>
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12, marginBottom:8 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <span style={{ fontSize:"1.5rem" }}>{u.flag}</span>
                        <div>
                          <div style={{ fontFamily:"var(--font-head)", fontSize:i === 0 ? "1.05rem" : ".95rem", fontWeight:700, color:"white" }}>
                            {u.name}
                          </div>
                          <div style={{ fontSize:".68rem", color:"rgba(241,245,255,.35)", marginTop:1 }}>
                            {u.country} · {u.ranking}
                          </div>
                        </div>
                      </div>
                      <div style={{ display:"flex", gap:6, flexShrink:0, flexWrap:"wrap", justifyContent:"flex-end" }}>
                        <span style={{
                          padding:"2px 10px", borderRadius:50, fontSize:".62rem", fontWeight:700,
                          background: `${REGION_COLOR[u.region] ?? "#5b8aff"}18`,
                          border:     `1px solid ${REGION_COLOR[u.region] ?? "#5b8aff"}35`,
                          color:       REGION_COLOR[u.region] ?? "#5b8aff",
                        }}>
                          {u.region}
                        </span>
                        {i === 0 && (
                          <span style={{ padding:"2px 10px", borderRadius:50, fontSize:".62rem", fontWeight:700, background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.25)", color:"#d4af37" }}>
                            ⭐ Best Fit
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Program pill */}
                    <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.5)", padding:"4px 10px", borderRadius:8, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.06)", display:"inline-block", marginBottom:8 }}>
                      {u.program}
                    </div>

                    {/* Tuition */}
                    {u.tuitionRange && (
                      <div style={{ fontSize:".7rem", color:"#fb923c", fontWeight:600, marginBottom:6 }}>
                        💸 Tuition: {u.tuitionRange}
                      </div>
                    )}

                    {/* Why for you */}
                    {u.whyForYou && (
                      <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.5)", lineHeight:1.6, fontStyle:"italic", marginBottom:10 }}>
                        {u.whyForYou}
                      </div>
                    )}

                    {/* Required exams for this university */}
                    {u.requiredExams && u.requiredExams.length > 0 && (
                      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                        <span style={{ fontSize:".65rem", color:"rgba(241,245,255,.35)", alignSelf:"center" }}>Required:</span>
                        {u.requiredExams.map((ex, j) => (
                          <span key={j} style={{
                            padding:"2px 8px", borderRadius:50, fontSize:".65rem", fontWeight:600,
                            background:"rgba(52,211,153,.08)", border:"1px solid rgba(52,211,153,.15)", color:"#34d399",
                          }}>
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={{ fontSize:".68rem", color:"#5b8aff", fontWeight:600, marginTop:8 }}>
                      Visit Official Website →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Box>
      )}

      {/* ══ 3. TOP CAREER MATCHES ══ */}
      <Box icon="🏆" title="Your Top Career Matches">
        <div style={{ marginBottom:8 }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#5b8aff", textTransform:"uppercase", marginBottom:14 }}>
            Primary Matches — Highest Fit
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {report.careerMatches?.map((c, i) => (
              <div key={i} style={{
                background:"rgba(255,255,255,.04)",
                border:`1px solid ${i===0 ? "rgba(91,138,255,.3)" : "rgba(255,255,255,.07)"}`,
                borderRadius:14, padding:"16px 18px", transition:"all .2s",
              }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.07)"; el.style.borderColor="rgba(91,138,255,.4)"; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.04)"; el.style.borderColor=i===0?"rgba(91,138,255,.3)":"rgba(255,255,255,.07)"; }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:i===0?"rgba(91,138,255,.15)":"rgba(255,255,255,.06)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", flexShrink:0 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4, flexWrap:"wrap", gap:8 }}>
                      <div>
                        <div style={{ fontFamily:"var(--font-head)", fontSize:"1rem", fontWeight:700, color:"white", marginBottom:2 }}>{c.title}</div>
                        <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.45)" }}>{c.description}</div>
                      </div>
                      <div style={{ fontFamily:"var(--font-head)", fontSize:"1.3rem", fontWeight:800, color:i===0?"#5b8aff":i===1?"#00C9B1":"rgba(241,245,255,.5)", flexShrink:0 }}>{c.fit}%</div>
                    </div>
                    <div style={{ height:4, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden", marginBottom:10 }}>
                      <div style={{ height:"100%", width:`${c.fit}%`, background:i===0?"linear-gradient(90deg,#5b8aff,#a78bfa)":i===1?"linear-gradient(90deg,#00C9B1,#2563EB)":"rgba(255,255,255,.18)", borderRadius:99, transition:"width 1.2s ease" }} />
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
                      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                        {c.primarySkills?.map((sk, j) => (
                          <span key={j} style={{ padding:"3px 10px", borderRadius:50, background:"rgba(91,138,255,.08)", border:"1px solid rgba(91,138,255,.15)", fontSize:".65rem", color:"#5b8aff", fontWeight:600 }}>{sk}</span>
                        ))}
                      </div>
                      <span style={{ fontSize:".72rem", color:"#34d399", fontWeight:700 }}>{c.salaryRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {report.secondaryCareerMatches?.length > 0 && (
          <div style={{ marginTop:20 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.35)", textTransform:"uppercase", marginBottom:12 }}>
              Secondary Matches — Also Strong Fit
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:10 }}>
              {report.secondaryCareerMatches.map((c, i) => (
                <div key={i} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:12, padding:"14px 16px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                    <span style={{ fontSize:"1.1rem" }}>{c.icon}</span>
                    <span style={{ fontFamily:"var(--font-head)", fontSize:".88rem", fontWeight:700, color:"rgba(241,245,255,.75)" }}>{c.title}</span>
                    <span style={{ marginLeft:"auto", fontSize:".82rem", fontWeight:800, color:"rgba(241,245,255,.35)" }}>{c.fit}%</span>
                  </div>
                  <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.4)", marginBottom:8 }}>{c.description}</div>
                  <div style={{ fontSize:".72rem", color:"#34d399", fontWeight:600 }}>{c.salaryRange}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Box>

      {/* ══ 4. RECOMMENDED EXAMS ══ */}
      {(report.recommendedExams?.length > 0 || report.profileBuilding?.exams?.length > 0) && (
        <Box icon="📝" title={isStreamMode ? "Exams to Prepare For Now" : `Required Exams for ${report.targetCountry ?? "Your Target Country"}`}>
          <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:18 }}>
            {isStreamMode
              ? "Start preparing for these exams now. Early preparation gives you a significant competitive advantage."
              : `These are the exams required to gain admission to top universities in ${report.targetCountry}. Each exam is ranked by priority for your specific degree target.`}
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {(report.recommendedExams ?? report.profileBuilding?.exams ?? []).map((ex: ExamRecommendation, i: number) => (
              <div key={i} style={{
                padding:"18px 20px", borderRadius:14,
                background:"rgba(255,255,255,.03)", border:`1px solid ${ex.priority==="Essential" ? "rgba(52,211,153,.2)" : ex.priority==="High" ? "rgba(91,138,255,.15)" : "rgba(255,255,255,.06)"}`,
              }}>
                {/* Header */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:10, marginBottom:8 }}>
                  <div>
                    <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginBottom:3 }}>
                      <span style={{ fontFamily:"var(--font-head)", fontSize:"1.05rem", fontWeight:800, color:"white" }}>{ex.title}</span>
                      {ex.classLevel && (
                        <span style={{
                          padding:"2px 10px", borderRadius:50, fontSize:".62rem", fontWeight:700,
                          background:`${CLASS_LEVEL_COLOR[ex.classLevel] ?? "#5b8aff"}18`,
                          border:`1px solid ${CLASS_LEVEL_COLOR[ex.classLevel] ?? "#5b8aff"}35`,
                          color: CLASS_LEVEL_COLOR[ex.classLevel] ?? "#5b8aff",
                        }}>📅 {ex.classLevel}</span>
                      )}
                      {ex.preparationTime && (
                        <span style={{ padding:"2px 10px", borderRadius:50, background:"rgba(251,146,60,.08)", border:"1px solid rgba(251,146,60,.18)", fontSize:".62rem", color:"#fb923c", fontWeight:600 }}>
                          ⏱ {ex.preparationTime}
                        </span>
                      )}
                    </div>
                    {ex.fullForm && <div style={{ fontSize:".72rem", color:"rgba(241,245,255,.35)", fontStyle:"italic" }}>{ex.fullForm}</div>}
                  </div>
                  <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <span style={{
                      padding:"3px 12px", borderRadius:50, fontSize:".65rem", fontWeight:700,
                      border:`1px solid ${PRIORITY_COLOR[ex.priority] ?? "rgba(255,255,255,.2)"}`,
                      color: PRIORITY_COLOR[ex.priority] ?? "rgba(255,255,255,.4)",
                    }}>{ex.priority}</span>
                    {ex.link && (
                      <a href={ex.link} target="_blank" rel="noopener noreferrer" style={{
                        padding:"3px 10px", borderRadius:8,
                        background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.2)",
                        color:"#d4af37", fontSize:".65rem", fontWeight:600, textDecoration:"none",
                      }}>Learn →</a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize:".8rem", color:"rgba(241,245,255,.5)", lineHeight:1.65, margin:"0 0 10px" }}>{ex.description}</p>

                {/* Why for you */}
                {ex.whyForYou && (
                  <div style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"10px 14px", borderRadius:10, background:"rgba(91,138,255,.07)", border:"1px solid rgba(91,138,255,.15)", marginBottom:8 }}>
                    <span style={{ color:"#5b8aff", fontSize:".8rem", flexShrink:0 }}>🤖</span>
                    <p style={{ fontSize:".78rem", color:"rgba(91,138,255,.9)", lineHeight:1.6, margin:0 }}>
                      <strong>Why this exam for you: </strong>{ex.whyForYou}
                    </p>
                  </div>
                )}

                {/* Benefit */}
                {ex.benefit && (
                  <div style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"8px 14px", borderRadius:10, background:"rgba(52,211,153,.06)", border:"1px solid rgba(52,211,153,.12)" }}>
                    <span style={{ color:"#34d399", fontSize:".75rem", flexShrink:0, marginTop:1 }}>✓</span>
                    <p style={{ fontSize:".76rem", color:"rgba(52,211,153,.8)", lineHeight:1.55, margin:0 }}>{ex.benefit}</p>
                  </div>
                )}

                {/* Target countries */}
                {ex.targetCountries && ex.targetCountries.length > 0 && (
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginTop:8 }}>
                    <span style={{ fontSize:".62rem", color:"rgba(241,245,255,.3)", alignSelf:"center" }}>Accepted in:</span>
                    {ex.targetCountries.map((c, j) => (
                      <span key={j} style={{
                        padding:"1px 8px", borderRadius:50, fontSize:".62rem", fontWeight:600,
                        background:`${REGION_COLOR[c] ?? "rgba(255,255,255,.08)"}18`,
                        border:`1px solid ${REGION_COLOR[c] ?? "rgba(255,255,255,.08)"}35`,
                        color: REGION_COLOR[c] ?? "rgba(241,245,255,.4)",
                      }}>{c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Box>
      )}

      {/* ══ 5. FUTURISTIC CAREERS ══ */}
      <Box icon="🚀" title="Futuristic Interdisciplinary Careers">
        <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:18 }}>
          Explore the forefront of interdisciplinary career possibilities — innovative paths that blend diverse skill sets.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {report.futuristicCareers?.map((fc, i) => (
            <div key={i} style={{
              display:"flex", gap:14, alignItems:"flex-start", padding:"16px 18px", borderRadius:12,
              background:"linear-gradient(135deg,rgba(167,139,250,.06),rgba(91,138,255,.04))",
              border:"1px solid rgba(167,139,250,.15)", transition:"all .2s",
            }}
            onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(167,139,250,.1)"; el.style.borderColor="rgba(167,139,250,.3)"; }}
            onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="linear-gradient(135deg,rgba(167,139,250,.06),rgba(91,138,255,.04))"; el.style.borderColor="rgba(167,139,250,.15)"; }}>
              <div style={{ width:42, height:42, borderRadius:12, background:"rgba(167,139,250,.12)", border:"1px solid rgba(167,139,250,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", flexShrink:0 }}>
                {fc.icon}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:700, color:"white", marginBottom:4 }}>{fc.title}</div>
                <div style={{ fontSize:".78rem", color:"rgba(241,245,255,.5)", marginBottom:8 }}>{fc.description}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  <span style={{ padding:"3px 10px", borderRadius:50, background:"rgba(167,139,250,.1)", border:"1px solid rgba(167,139,250,.2)", fontSize:".65rem", color:"#a78bfa", fontWeight:600 }}>⚡ {fc.blend}</span>
                  <span style={{ padding:"3px 10px", borderRadius:50, background:"rgba(52,211,153,.08)", border:"1px solid rgba(52,211,153,.15)", fontSize:".65rem", color:"#34d399", fontWeight:600 }}>📈 {fc.growthOutlook}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* ══ 6. DIMENSION BREAKDOWN ══ */}
      <Box icon="📊" title="Dimension Breakdown">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:14 }}>
          {report.categories?.map(cat => (
            <div key={cat.name} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, padding:18 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                <div>
                  <div style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:700 }}>{cat.name}</div>
                  <div style={{ fontSize:".7rem", color:"rgba(241,245,255,.35)", marginTop:2 }}>{cat.label}</div>
                </div>
                <div style={{ fontFamily:"var(--font-head)", fontSize:"1.35rem", fontWeight:800, color:cat.color }}>{cat.percentage}%</div>
              </div>
              <div style={{ height:5, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden", marginBottom:10 }}>
                <div style={{ height:"100%", width:`${cat.percentage}%`, background:cat.color, borderRadius:99, boxShadow:`0 0 10px ${cat.color}66` }} />
              </div>
              <p style={{ fontSize:".78rem", color:"rgba(241,245,255,.45)", lineHeight:1.65, margin:0 }}>{cat.description}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* ══ 7. RADAR ══ */}
      <Box icon="🎯" title="Personality Radar">
        <div style={{ display:"flex", justifyContent:"center", padding:"12px 0" }}>
          <canvas ref={radarRef} width={380} height={280} style={{ maxWidth:"100%" }} />
        </div>
      </Box>

      {/* ══ 8. APTITUDE ASSESSMENT ══ */}
      <Box icon="🧪" title="Aptitude Assessment">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:12 }}>📚 Books</div>
            {report.aptitudeEnhancement?.books?.map((b, i) => (
              <div key={i} style={{ marginBottom:10, paddingBottom:10, borderBottom:i<report.aptitudeEnhancement.books.length-1?"1px solid rgba(255,255,255,.05)":"none" }}>
                <div style={{ fontSize:".8rem", fontWeight:600, color:"white", marginBottom:2 }}>{b.title}</div>
                <div style={{ fontSize:".7rem", color:"rgba(241,245,255,.4)" }}>by {b.author}</div>
              </div>
            ))}
          </div>
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:12 }}>📱 Apps & Games</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {report.aptitudeEnhancement?.apps?.map((app, i) => (
                <span key={i} style={{ padding:"4px 10px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.15)", fontSize:".7rem", color:"#5b8aff", fontWeight:600 }}>{app}</span>
              ))}
            </div>
          </div>
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:12 }}>⚡ Techniques</div>
            {report.aptitudeEnhancement?.techniques?.map((t, i) => (
              <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:8 }}>
                <span style={{ color:"#d4af37", fontSize:".7rem", flexShrink:0, marginTop:2 }}>◆</span>
                <span style={{ fontSize:".78rem", color:"rgba(241,245,255,.65)", lineHeight:1.55 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Box>

      {/* ══ 9. STRENGTHS + GROWTH ══ */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
        <Box icon="✨" title="Core Strengths" inline>
          {report.strengths?.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"11px 14px", borderRadius:10, background:"rgba(52,211,153,.07)", border:"1px solid rgba(52,211,153,.15)", marginBottom:8 }}>
              <span style={{ color:"#34d399", flexShrink:0, marginTop:1 }}>✓</span>
              <span style={{ fontSize:".82rem", color:"rgba(241,245,255,.7)", lineHeight:1.55 }}>{s}</span>
            </div>
          ))}
        </Box>
        <Box icon="🌱" title="Growth Areas" inline>
          {report.growthAreas?.map((g, i) => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"11px 14px", borderRadius:10, background:"rgba(251,191,36,.07)", border:"1px solid rgba(251,191,36,.15)", marginBottom:8 }}>
              <span style={{ color:"#fbbf24", flexShrink:0, marginTop:1 }}>↑</span>
              <span style={{ fontSize:".82rem", color:"rgba(241,245,255,.7)", lineHeight:1.55 }}>{g}</span>
            </div>
          ))}
        </Box>
      </div>

      {/* ══ 10. SKILL ASSESSMENT ══ */}
      <Box icon="⚙️" title="Skill Assessment">
        <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
          {report.skillAttributes?.map((sk, i) => (
            <div key={i} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                <span style={{ fontSize:"1.1rem" }}>{sk.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                    <span style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white" }}>{sk.skill}</span>
                    <span style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:800, color:scoreColor(sk.level) }}>{sk.level}%</span>
                  </div>
                  <div style={{ height:5, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${sk.level}%`, background:scoreColor(sk.level), borderRadius:99, boxShadow:`0 0 8px ${scoreColor(sk.level)}66`, transition:"width 1.2s ease" }} />
                  </div>
                </div>
              </div>
              <p style={{ fontSize:".75rem", color:"rgba(241,245,255,.4)", margin:0 }}>{sk.description}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* ══ 11. PROFILE BUILDING BENEFITS ══ */}
      {report.profileBuildingBenefits && (
        <Box icon="💡" title="Why Profile Building Matters">
          <p style={{ fontSize:".86rem", color:"rgba(241,245,255,.6)", lineHeight:1.8, marginBottom:22 }}>
            {report.profileBuildingBenefits.overview}
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12, marginBottom:24 }}>
            {report.profileBuildingBenefits.keyBenefits?.map((b, i) => (
              <div key={i} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, padding:"16px 18px", transition:"all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(91,138,255,.08)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(91,138,255,.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)"; }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:"1.5rem" }}>{b.icon}</span>
                  <span style={{ fontFamily:"var(--font-head)", fontSize:".88rem", fontWeight:700, color:"white", lineHeight:1.3 }}>{b.title}</span>
                </div>
                <p style={{ fontSize:".78rem", color:"rgba(241,245,255,.5)", lineHeight:1.65, margin:0 }}>{b.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ marginBottom:22 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:14 }}>📅 Your Action Timeline</div>
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {report.profileBuildingBenefits.timelineByClass?.map((stage, i) => (
                <div key={i} style={{ display:"flex", gap:0, position:"relative" }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:48, flexShrink:0 }}>
                    <div style={{
                      width:14, height:14, borderRadius:"50%",
                      background: CLASS_LEVEL_COLOR[stage.classLevel] ?? "#5b8aff",
                      border:"3px solid rgba(255,255,255,.15)", flexShrink:0, marginTop:18, zIndex:1,
                      boxShadow:`0 0 10px ${CLASS_LEVEL_COLOR[stage.classLevel] ?? "#5b8aff"}66`,
                    }} />
                    {i < (report.profileBuildingBenefits.timelineByClass?.length ?? 0) - 1 && (
                      <div style={{ flex:1, width:2, background:"rgba(255,255,255,.07)", minHeight:40 }} />
                    )}
                  </div>
                  <div style={{ flex:1, paddingBottom:20 }}>
                    <div style={{
                      display:"inline-flex", alignItems:"center", gap:6, padding:"4px 12px", borderRadius:50,
                      background:`${CLASS_LEVEL_COLOR[stage.classLevel] ?? "#5b8aff"}18`,
                      border:`1px solid ${CLASS_LEVEL_COLOR[stage.classLevel] ?? "#5b8aff"}35`,
                      fontSize:".68rem", color: CLASS_LEVEL_COLOR[stage.classLevel] ?? "#5b8aff",
                      fontWeight:700, marginBottom:10, marginTop:12,
                    }}>{stage.classLevel}</div>
                    <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:12, padding:"14px 16px" }}>
                      {stage.actions.map((action, j) => (
                        <div key={j} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:j<stage.actions.length-1?8:0 }}>
                          <span style={{ color:CLASS_LEVEL_COLOR[stage.classLevel]??"#5b8aff", fontSize:".75rem", flexShrink:0, marginTop:2 }}>✦</span>
                          <span style={{ fontSize:".8rem", color:"rgba(241,245,255,.65)", lineHeight:1.55 }}>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding:"18px 22px", borderRadius:14, background:"linear-gradient(135deg,rgba(212,175,55,.1),rgba(212,175,55,.03))", border:"1px solid rgba(212,175,55,.25)" }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:8 }}>🌟 Why It Matters For You</div>
            <p style={{ fontSize:".85rem", color:"rgba(241,245,255,.65)", lineHeight:1.8, margin:0 }}>{report.profileBuildingBenefits.whyItMatters}</p>
          </div>
        </Box>
      )}

      {/* ══ 12. SCHOLARSHIPS ══ */}
      <Box icon="🎖️" title="Scholarship Insights">
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {report.scholarships?.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"14px 16px", borderRadius:12, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", transition:"all .2s" }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.06)"; el.style.borderColor="rgba(212,175,55,.2)"; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.03)"; el.style.borderColor="rgba(255,255,255,.06)"; }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-head)", fontWeight:800, fontSize:".82rem", color:"#d4af37", flexShrink:0 }}>
                {i + 1}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:4 }}>
                  <div>
                    <span style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white" }}>{s.name}</span>
                    <span style={{ marginLeft:10, fontSize:".72rem", color:"rgba(241,245,255,.4)" }}>{s.country}</span>
                  </div>
                  <span style={{ fontFamily:"var(--font-head)", fontSize:".82rem", fontWeight:800, color:"#34d399" }}>{s.amount}</span>
                </div>
                <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.45)", marginBottom:4 }}>{s.eligibility}</div>
                <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                  <span style={{ fontSize:".68rem", color:"rgba(241,245,255,.3)" }}>📅 {s.deadline}</span>
                  {s.link && <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ fontSize:".68rem", color:"#5b8aff", fontWeight:600, textDecoration:"none" }}>Apply →</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* ══ 13. BEST COLLEGES ══ */}
      <Box icon="🏛️" title="Best Colleges for Your Career Path">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:12 }}>
          {report.bestColleges?.map((c, i) => (
            <div key={i} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"16px 18px", transition:"all .2s" }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.07)"; el.style.borderColor="rgba(212,175,55,.25)"; el.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.03)"; el.style.borderColor="rgba(255,255,255,.07)"; el.style.transform="none"; }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:"1.4rem" }}>{c.flag}</span>
                  <div>
                    <div style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white" }}>{c.name}</div>
                    <div style={{ fontSize:".68rem", color:"rgba(241,245,255,.35)" }}>{c.country}</div>
                  </div>
                </div>
                {c.region && (
                  <span style={{ padding:"2px 8px", borderRadius:50, background:`${REGION_COLOR[c.region] ?? "#5b8aff"}18`, border:`1px solid ${REGION_COLOR[c.region] ?? "#5b8aff"}35`, fontSize:".6rem", color:REGION_COLOR[c.region] ?? "#5b8aff", fontWeight:700 }}>
                    {c.region}
                  </span>
                )}
              </div>
              <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.5)", marginBottom:10, padding:"4px 10px", borderRadius:8, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.06)", display:"inline-block" }}>
                {c.program}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                <div style={{ background:"rgba(255,255,255,.04)", borderRadius:8, padding:"8px 10px", textAlign:"center" }}>
                  <div style={{ fontSize:".65rem", color:"rgba(241,245,255,.35)", marginBottom:3, textTransform:"uppercase", letterSpacing:".06em" }}>Acceptance</div>
                  <div style={{ fontFamily:"var(--font-head)", fontSize:".88rem", fontWeight:800, color:"#fb923c" }}>{c.acceptanceRate}</div>
                </div>
                <div style={{ background:"rgba(255,255,255,.04)", borderRadius:8, padding:"8px 10px", textAlign:"center" }}>
                  <div style={{ fontSize:".65rem", color:"rgba(241,245,255,.35)", marginBottom:3, textTransform:"uppercase", letterSpacing:".06em" }}>Avg Package</div>
                  <div style={{ fontFamily:"var(--font-head)", fontSize:".88rem", fontWeight:800, color:"#34d399" }}>{c.avgPackage}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* ══ 14. AI INSIGHT ══ */}
      <Box icon="🤖" title="AI Counsellor Insight">
        <div style={{ padding:"18px 22px", borderRadius:13, background:"linear-gradient(135deg,rgba(91,138,255,.09),rgba(167,139,250,.07))", border:"1px solid rgba(91,138,255,.2)" }}>
          <p style={{ fontSize:".92rem", color:"rgba(241,245,255,.78)", lineHeight:1.85, margin:0 }}>{report.aiInsight}</p>
        </div>
      </Box>

      {/* ══ 15. PROGRAM CTA ══ */}
      <div style={{ background:"linear-gradient(135deg,#0B1C3D,#102454)", borderRadius:20, padding:"32px 28px", textAlign:"center", marginBottom:14, border:"1px solid rgba(0,201,177,.2)" }}>
        <div style={{ fontSize:".72rem", color:"var(--teal)", fontWeight:600, letterSpacing:".12em", textTransform:"uppercase", marginBottom:10 }}>🎯 Recommended OmniQuest Program</div>
        <h3 style={{ fontFamily:"var(--font-head)", fontSize:"1.2rem", fontWeight:800, color:"white", marginBottom:8 }}>{report.programRecommendation}</h3>
        <p style={{ color:"rgba(255,255,255,.45)", fontSize:".84rem", marginBottom:22 }}>Matched to your unique personality profile by AI</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="/#contact" style={{ padding:"12px 26px", borderRadius:50, background:"var(--grad-teal)", color:"white", fontWeight:600, fontSize:".88rem", textDecoration:"none", boxShadow:"0 6px 24px rgba(0,201,177,.35)" }}>
            📅 Book Free Counselling
          </a>
          <Link href="/personality-test" style={{ padding:"12px 22px", borderRadius:50, background:"rgba(255,255,255,.08)", border:"1.5px solid rgba(255,255,255,.2)", color:"rgba(255,255,255,.8)", fontSize:".88rem", textDecoration:"none" }}>
            🔄 Retake Test
          </Link>
        </div>
      </div>

      {/* ══ 16. ADMIN CONTACT ══ */}
      {report.adminContact && (
        <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:16, padding:"24px 28px", marginBottom:14, textAlign:"center" }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".12em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:12 }}>Get in Touch with Our Team</div>
          <div style={{ fontFamily:"var(--font-head)", fontSize:"1rem", fontWeight:700, color:"white", marginBottom:16 }}>{report.adminContact.name}</div>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <a href={`mailto:${report.adminContact.email}`} style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", color:"#5b8aff", fontSize:".85rem", fontWeight:600, textDecoration:"none" }}>
              ✉ {report.adminContact.email}
            </a>
            <a href={`tel:${report.adminContact.phone.replace(/\s/g,"")}`} style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", borderRadius:50, background:"rgba(52,211,153,.1)", border:"1px solid rgba(52,211,153,.2)", color:"#34d399", fontSize:".85rem", fontWeight:600, textDecoration:"none" }}>
              📞 {report.adminContact.phone}
            </a>
          </div>
        </div>
      )}

      {/* Print */}
      <div style={{ display:"flex", justifyContent:"center", paddingBottom:20 }}>
        <button onClick={() => window.print()} style={{ padding:"10px 22px", borderRadius:10, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"rgba(241,245,255,.5)", cursor:"pointer", fontSize:".82rem", fontFamily:"var(--font-body)" }}>
          🖨️ Print / Save Report
        </button>
      </div>
    </div>
  );
}

/* ── Track insight helper ── */
function getTrackInsight(country: string): string {
  const insights: Record<string,string> = {
    USA:         "Holistic evaluation — SAT/ACT + AP exams + narrative-driven profile required.",
    UK:          "Subject mastery driven — entrance tests (UCAT/TMUA/LNAT/ESAT) often define selection.",
    Canada:      "Academics-first — SAT optional but helpful; structured profile important for Business/CS/Engineering.",
    Australia:   "Flexible system — SAT/AP recommended for scholarships; UCAT required for Medicine.",
    Europe:      "Program-specific — academically strict, subject relevance over extracurricular diversity.",
    Singapore:   "Top-percentile academics required — SAT + strong quantitative reasoning signals highly valued.",
    "South Korea":"Highly exam-driven — SAT required for most international admissions routes.",
  };
  return insights[country] ?? "Strong academic profile + relevant entrance exams required.";
}

/* ── Box wrapper ── */
function Box({ icon, title, children, inline }: { icon: string; title: string; children: React.ReactNode; inline?: boolean }) {
  return (
    <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:18, padding:22, marginBottom:inline?0:14 }}>
      <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:18 }}>
        <span style={{ fontSize:"1rem" }}>{icon}</span>
        <h2 style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:700, color:"rgba(241,245,255,.88)" }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

/* ── Radar chart ── */
function drawRadar(canvas: HTMLCanvasElement, cats: PersonalityReport["categories"]) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W=380, H=280, cx=W/2, cy=H/2, r=Math.min(cx,cy)-42, n=cats.length;
  canvas.width=W; canvas.height=H;
  ctx.clearRect(0,0,W,H);
  for (let ring=1;ring<=4;ring++) {
    ctx.beginPath();
    cats.forEach((_,i) => {
      const a=(i/n)*Math.PI*2-Math.PI/2;
      const x=cx+Math.cos(a)*r*(ring/4), y=cy+Math.sin(a)*r*(ring/4);
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });
    ctx.closePath(); ctx.strokeStyle="rgba(255,255,255,.07)"; ctx.stroke();
  }
  cats.forEach((_,i) => {
    const a=(i/n)*Math.PI*2-Math.PI/2;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);
    ctx.strokeStyle="rgba(255,255,255,.06)"; ctx.stroke();
    const lx=cx+Math.cos(a)*(r+22), ly=cy+Math.sin(a)*(r+22);
    ctx.fillStyle="rgba(241,245,255,.45)"; ctx.font="11px DM Sans,sans-serif"; ctx.textAlign="center";
    ctx.fillText(cats[i].name.slice(0,6),lx,ly+4);
  });
  ctx.beginPath();
  cats.forEach((cat,i) => {
    const a=(i/n)*Math.PI*2-Math.PI/2, v=(cat.percentage/100)*r;
    i===0?ctx.moveTo(cx+Math.cos(a)*v,cy+Math.sin(a)*v):ctx.lineTo(cx+Math.cos(a)*v,cy+Math.sin(a)*v);
  });
  ctx.closePath();
  const g=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
  g.addColorStop(0,"rgba(0,201,177,.3)"); g.addColorStop(1,"rgba(37,99,235,.12)");
  ctx.fillStyle=g; ctx.fill(); ctx.strokeStyle="#00C9B1"; ctx.lineWidth=2; ctx.stroke();
  cats.forEach((cat,i) => {
    const a=(i/n)*Math.PI*2-Math.PI/2, v=(cat.percentage/100)*r;
    const x=cx+Math.cos(a)*v, y=cy+Math.sin(a)*v;
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fillStyle=cat.color; ctx.fill();
  });
}