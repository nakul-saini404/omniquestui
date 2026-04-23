"use client";
import { useEffect, useRef } from "react";
import type { PersonalityReport } from "@/lib/personality";
import Link from "next/link";

/* ── colour helpers ── */
const scoreColor = (s: number) => s>=80?"#34d399":s>=60?"#5b8aff":"#fb923c";
const STREAM_ICONS: Record<string,string> = { "Science (PCM)":"⚙️","Science (PCB)":"🧬","Commerce":"📈","Arts / Humanities":"🎭","Vocational / Design":"🎨" };
const PRIORITY_COLOR: Record<string,string> = { Essential:"#34d399", High:"#5b8aff", Medium:"#fb923c", primary:"#5b8aff", secondary:"rgba(255,255,255,.4)" };

export default function PersonalityReportView({ report }: { report: PersonalityReport }) {
  const radarRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => { if (radarRef.current) drawRadar(radarRef.current, report.categories); }, [report]);

  const sc = scoreColor(report.overallScore);
  const r=60, circ=2*Math.PI*r, dash=(report.overallScore/100)*circ;
  const stream = report.streamRecommendation;
  const confColor = scoreColor(stream?.confidence ?? 50);

  return (
    <div style={{ animation:"fadeUp .6s ease both", color:"white" }}>

      {/* ══ 1. HERO ══ */}
      <div style={{ textAlign:"center", marginBottom:32 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 16px", borderRadius:100, background:"rgba(91,138,255,.12)", border:"1px solid rgba(91,138,255,.25)", color:"#5b8aff", fontSize:".7rem", letterSpacing:".14em", fontWeight:600, textTransform:"uppercase", marginBottom:18 }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#5b8aff", animation:"blink 1.5s infinite" }} />
          AI Career Intelligence Report · OmniQuest
        </div>
        <h1 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.8rem,5vw,2.8rem)", fontWeight:800, marginBottom:8 }}>{report.studentName}</h1>
        <div style={{ display:"inline-block", padding:"9px 26px", borderRadius:100, background:"linear-gradient(135deg,rgba(91,138,255,.18),rgba(167,139,250,.18))", border:"1px solid rgba(91,138,255,.3)", marginBottom:10 }}>
          <span style={{ fontFamily:"var(--font-head)", fontSize:"1.2rem", fontWeight:800, background:"linear-gradient(135deg,#5b8aff,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{report.personalityType}</span>
        </div>
        <p style={{ color:"rgba(241,245,255,.45)", fontStyle:"italic", fontSize:".95rem", marginBottom:28 }}>"{report.tagline}"</p>

        {/* Score ring */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:8 }}>
          <svg width={160} height={160} viewBox="0 0 160 160">
            <circle cx={80} cy={80} r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth={12}/>
            <circle cx={80} cy={80} r={r} fill="none" stroke={sc} strokeWidth={12} strokeLinecap="round"
              strokeDasharray={`${dash} ${circ-dash}`} strokeDashoffset={circ/4}
              style={{ filter:`drop-shadow(0 0 10px ${sc}88)`, transition:"stroke-dasharray 1.4s ease" }}/>
            <text x={80} y={76} textAnchor="middle" fill={sc} fontFamily="Syne,sans-serif" fontSize="28" fontWeight="800">{report.overallScore}</text>
            <text x={80} y={96} textAnchor="middle" fill="rgba(241,245,255,.35)" fontFamily="DM Sans,sans-serif" fontSize="11">/100</text>
          </svg>
        </div>
        <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.4)", letterSpacing:".1em", textTransform:"uppercase" }}>Overall Readiness Score</div>
      </div>

      {/* ══ 2. STREAM RECOMMENDATION ══ */}
      {stream && (
        <Box icon="🏫" title="Stream Recommendation After 10th">
          <div style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom:20, flexWrap:"wrap" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, background:"rgba(212,175,55,.15)", border:"2px solid rgba(212,175,55,.4)", borderRadius:16, padding:"20px 24px", minWidth:120, flexShrink:0 }}>
              <span style={{ fontSize:"2.2rem" }}>{STREAM_ICONS[stream.primary] ?? "🎓"}</span>
              <div style={{ fontFamily:"var(--font-head)", fontSize:".78rem", fontWeight:800, color:"#d4af37", textAlign:"center", lineHeight:1.3 }}>{stream.primary}</div>
              <div style={{ fontSize:".62rem", color:"rgba(241,245,255,.4)", textTransform:"uppercase", letterSpacing:".08em" }}>Recommended</div>
            </div>
            <div style={{ flex:1, minWidth:200 }}>
              <div style={{ marginBottom:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                  <span style={{ fontSize:".7rem", color:"rgba(241,245,255,.4)", textTransform:"uppercase", letterSpacing:".08em" }}>Confidence Match</span>
                  <span style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:800, color:confColor }}>{stream.confidence}%</span>
                </div>
                <div style={{ height:6, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${stream.confidence}%`, background:confColor, borderRadius:99, boxShadow:`0 0 10px ${confColor}66`, transition:"width 1.2s ease" }}/>
                </div>
              </div>
              <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.6)", lineHeight:1.7, margin:0 }}>{stream.reasoning}</p>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
            <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:10 }}>Core Subjects</div>
              {stream.subjects.map((s,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:"#d4af37", flexShrink:0 }}/>
                  <span style={{ fontSize:".8rem", color:"rgba(241,245,255,.7)" }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:10 }}>Career Paths</div>
              {stream.careerPathsFromStream.map((p,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <span style={{ color:"#00C9B1", fontSize:".75rem", flexShrink:0 }}>→</span>
                  <span style={{ fontSize:".8rem", color:"rgba(241,245,255,.7)" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          {stream.alternates?.length>0 && (
            <div>
              <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.35)", textTransform:"uppercase", marginBottom:8 }}>Also Consider</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {stream.alternates.map((alt,i)=>(
                  <span key={i} style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 14px", borderRadius:50, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", fontSize:".75rem", color:"rgba(241,245,255,.55)", fontWeight:500 }}>
                    {STREAM_ICONS[alt]??"🎓"} {alt}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Box>
      )}

      {/* ══ 3. TOP CAREER MATCHES (PRIMARY) ══ */}
      <Box icon="🏆" title="Your Top Career Matches">
        <div style={{ marginBottom:8 }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#5b8aff", textTransform:"uppercase", marginBottom:14 }}>Primary Matches — Highest Fit</div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {report.careerMatches?.map((c,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,.04)", border:`1px solid ${i===0?"rgba(91,138,255,.3)":"rgba(255,255,255,.07)"}`, borderRadius:14, padding:"16px 18px", transition:"all .2s" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.07)"; el.style.borderColor="rgba(91,138,255,.4)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.04)"; el.style.borderColor=i===0?"rgba(91,138,255,.3)":"rgba(255,255,255,.07)"; }}
              >
                <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:i===0?"rgba(91,138,255,.15)":"rgba(255,255,255,.06)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", flexShrink:0 }}>{c.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4, flexWrap:"wrap", gap:8 }}>
                      <div>
                        <div style={{ fontFamily:"var(--font-head)", fontSize:"1rem", fontWeight:700, color:"white", marginBottom:2 }}>{c.title}</div>
                        <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.45)" }}>{c.description}</div>
                      </div>
                      <div style={{ fontFamily:"var(--font-head)", fontSize:"1.3rem", fontWeight:800, color:i===0?"#5b8aff":i===1?"#00C9B1":"rgba(241,245,255,.5)", flexShrink:0 }}>{c.fit}%</div>
                    </div>
                    <div style={{ height:4, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden", marginBottom:10 }}>
                      <div style={{ height:"100%", width:`${c.fit}%`, background:i===0?"linear-gradient(90deg,#5b8aff,#a78bfa)":i===1?"linear-gradient(90deg,#00C9B1,#2563EB)":"rgba(255,255,255,.18)", borderRadius:99, transition:"width 1.2s ease" }}/>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
                      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                        {c.primarySkills?.map((sk,j)=>(
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

        {/* Secondary careers */}
        {report.secondaryCareerMatches?.length>0 && (
          <div style={{ marginTop:20 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.35)", textTransform:"uppercase", marginBottom:12 }}>Secondary Matches — Also Strong Fit</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:10 }}>
              {report.secondaryCareerMatches.map((c,i)=>(
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

      {/* ══ 4. UNIVERSITIES TO CONSIDER ══ */}
      <Box icon="🎓" title="Universities to Consider">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12 }}>
          {report.universities?.map((u,i)=>(
            <a key={i} href={u.website} target="_blank" rel="noopener noreferrer"
              style={{ display:"block", background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"16px 18px", textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.07)"; el.style.borderColor="rgba(212,175,55,.3)"; el.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.03)"; el.style.borderColor="rgba(255,255,255,.07)"; el.style.transform="none"; }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                <span style={{ fontSize:"1.4rem" }}>{u.flag}</span>
                <div>
                  <div style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white" }}>{u.name}</div>
                  <div style={{ fontSize:".68rem", color:"rgba(241,245,255,.35)" }}>{u.country} · {u.ranking}</div>
                </div>
              </div>
              <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.5)", padding:"5px 10px", borderRadius:8, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.06)" }}>{u.program}</div>
              <div style={{ marginTop:8, fontSize:".68rem", color:"#5b8aff", fontWeight:600 }}>Visit Website →</div>
            </a>
          ))}
        </div>
      </Box>

      {/* ══ 5. FUTURISTIC INTERDISCIPLINARY CAREERS ══ */}
      <Box icon="🚀" title="Futuristic Interdisciplinary Careers">
        <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:18 }}>
          Explore the forefront of interdisciplinary career possibilities — innovative paths that blend diverse skill sets. These visionary roles transcend traditional boundaries, revealing opportunities where multidisciplinary expertise is highly valued.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {report.futuristicCareers?.map((fc,i)=>(
            <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"16px 18px", borderRadius:12, background:"linear-gradient(135deg,rgba(167,139,250,.06),rgba(91,138,255,.04))", border:"1px solid rgba(167,139,250,.15)", transition:"all .2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(167,139,250,.1)"; el.style.borderColor="rgba(167,139,250,.3)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="linear-gradient(135deg,rgba(167,139,250,.06),rgba(91,138,255,.04))"; el.style.borderColor="rgba(167,139,250,.15)"; }}
            >
              <div style={{ width:42, height:42, borderRadius:12, background:"rgba(167,139,250,.12)", border:"1px solid rgba(167,139,250,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", flexShrink:0 }}>{fc.icon}</div>
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
          {report.categories?.map(cat=>(
            <div key={cat.name} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, padding:18 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                <div>
                  <div style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:700 }}>{cat.name}</div>
                  <div style={{ fontSize:".7rem", color:"rgba(241,245,255,.35)", marginTop:2 }}>{cat.label}</div>
                </div>
                <div style={{ fontFamily:"var(--font-head)", fontSize:"1.35rem", fontWeight:800, color:cat.color }}>{cat.percentage}%</div>
              </div>
              <div style={{ height:5, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden", marginBottom:10 }}>
                <div style={{ height:"100%", width:`${cat.percentage}%`, background:cat.color, borderRadius:99, boxShadow:`0 0 10px ${cat.color}66` }}/>
              </div>
              <p style={{ fontSize:".78rem", color:"rgba(241,245,255,.45)", lineHeight:1.65, margin:0 }}>{cat.description}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* ══ 7. RADAR ══ */}
      <Box icon="🎯" title="Personality Radar">
        <div style={{ display:"flex", justifyContent:"center", padding:"12px 0" }}>
          <canvas ref={radarRef} width={380} height={280} style={{ maxWidth:"100%" }}/>
        </div>
      </Box>

      {/* ══ 8. APTITUDE ASSESSMENT ══ */}
      <Box icon="🧪" title="Aptitude Assessment">
        <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:20 }}>
          Aptitude is your natural ability to learn and excel in certain areas. Recognising your strengths early helps in making informed decisions about future studies and professions — ensuring a more fulfilling and successful journey ahead.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
          {/* Books */}
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"16px" }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:12 }}>📚 Books</div>
            {report.aptitudeEnhancement?.books?.map((b,i)=>(
              <div key={i} style={{ marginBottom:10, paddingBottom:10, borderBottom:i<(report.aptitudeEnhancement.books.length-1)?"1px solid rgba(255,255,255,.05)":"none" }}>
                <div style={{ fontSize:".8rem", fontWeight:600, color:"white", marginBottom:2 }}>{b.title}</div>
                <div style={{ fontSize:".7rem", color:"rgba(241,245,255,.4)" }}>by {b.author}</div>
              </div>
            ))}
          </div>
          {/* Apps */}
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"16px" }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:12 }}>📱 Games, Puzzles & Apps</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {report.aptitudeEnhancement?.apps?.map((app,i)=>(
                <span key={i} style={{ padding:"4px 10px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.15)", fontSize:".7rem", color:"#5b8aff", fontWeight:600 }}>{app}</span>
              ))}
            </div>
          </div>
          {/* Techniques */}
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"16px" }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:12 }}>⚡ Techniques</div>
            {report.aptitudeEnhancement?.techniques?.map((t,i)=>(
              <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:8 }}>
                <span style={{ color:"#d4af37", fontSize:".7rem", flexShrink:0, marginTop:2 }}>◆</span>
                <span style={{ fontSize:".78rem", color:"rgba(241,245,255,.65)", lineHeight:1.55 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        {report.aptitudeEnhancement?.quote && (
          <div style={{ marginTop:16, padding:"14px 20px", borderRadius:12, background:"linear-gradient(135deg,rgba(212,175,55,.08),rgba(212,175,55,.03))", border:"1px solid rgba(212,175,55,.2)", textAlign:"center" }}>
            <p style={{ fontSize:".88rem", fontStyle:"italic", color:"rgba(241,245,255,.6)", margin:0 }}>
              "<span style={{ color:"#d4af37" }}>Aptitude</span> ignites potential, turning passion into purpose and dreams into reality."
            </p>
          </div>
        )}
      </Box>

      {/* ══ 9. STRENGTHS + GROWTH ══ */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
        <Box icon="✨" title="Core Strengths" inline>
          {report.strengths?.map((s,i)=>(
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"11px 14px", borderRadius:10, background:"rgba(52,211,153,.07)", border:"1px solid rgba(52,211,153,.15)", marginBottom:8 }}>
              <span style={{ color:"#34d399", flexShrink:0, marginTop:1 }}>✓</span>
              <span style={{ fontSize:".82rem", color:"rgba(241,245,255,.7)", lineHeight:1.55 }}>{s}</span>
            </div>
          ))}
        </Box>
        <Box icon="🌱" title="Growth Areas" inline>
          {report.growthAreas?.map((g,i)=>(
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"11px 14px", borderRadius:10, background:"rgba(251,191,36,.07)", border:"1px solid rgba(251,191,36,.15)", marginBottom:8 }}>
              <span style={{ color:"#fbbf24", flexShrink:0, marginTop:1 }}>↑</span>
              <span style={{ fontSize:".82rem", color:"rgba(241,245,255,.7)", lineHeight:1.55 }}>{g}</span>
            </div>
          ))}
        </Box>
      </div>

      {/* ══ 10. SKILL ASSESSMENT ══ */}
      <Box icon="⚙️" title="Skill Assessment">
        <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:18 }}>
          Evaluate the depth and breadth of your skills. This section highlights areas of expertise and potential avenues for development — guiding you towards where focused effort will amplify your profile most.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
          {report.skillAttributes?.map((sk,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                <span style={{ fontSize:"1.1rem" }}>{sk.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                    <span style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white" }}>{sk.skill}</span>
                    <span style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:800, color:scoreColor(sk.level) }}>{sk.level}%</span>
                  </div>
                  <div style={{ height:5, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${sk.level}%`, background:scoreColor(sk.level), borderRadius:99, boxShadow:`0 0 8px ${scoreColor(sk.level)}66`, transition:"width 1.2s ease" }}/>
                  </div>
                </div>
              </div>
              <p style={{ fontSize:".75rem", color:"rgba(241,245,255,.4)", margin:0 }}>{sk.description}</p>
            </div>
          ))}
        </div>

        {/* Top skill attributes summary */}
        <div style={{ background:"linear-gradient(135deg,rgba(91,138,255,.06),rgba(167,139,250,.04))", border:"1px solid rgba(91,138,255,.15)", borderRadius:12, padding:"16px 18px" }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#5b8aff", textTransform:"uppercase", marginBottom:12 }}>YOUR TOP SKILL ATTRIBUTES</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {report.skillAttributes?.sort((a,b)=>b.level-a.level).slice(0,5).map((sk,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 14px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", fontSize:".75rem", color:"#5b8aff", fontWeight:600 }}>
                {sk.icon} {sk.skill}
              </div>
            ))}
          </div>
          <p style={{ fontSize:".78rem", fontStyle:"italic", color:"rgba(241,245,255,.3)", marginTop:14, marginBottom:0 }}>
            "Skills are your super-power — cultivate them and <span style={{ color:"#d4af37" }}>Conquer the World</span>"
          </p>
        </div>
      </Box>

      {/* ══ 11. PROFILE BUILDING ROADMAP ══ */}
      <Box icon="🏗️" title="Profile Building Roadmap">
        <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:20 }}>
          Receive personalised recommendations to strengthen your profile — tailored guidance on skill enhancement, academic pursuits, and personal development aimed at maximising your potential for success.
        </p>

        {/* Recommended Degrees */}
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:12 }}>Academic Recommendations</div>
          {report.profileBuilding?.degrees?.map((d,i)=>(
            <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"13px 16px", borderRadius:12, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", marginBottom:8 }}>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white", marginBottom:4 }}>{d.title}</div>
                <div style={{ fontSize:".78rem", color:"rgba(241,245,255,.45)" }}>{d.description}</div>
              </div>
              <span style={{ padding:"3px 10px", borderRadius:50, background:"transparent", border:`1px solid ${PRIORITY_COLOR[d.priority]??"rgba(255,255,255,.2)"}`, color:PRIORITY_COLOR[d.priority]??"rgba(255,255,255,.4)", fontSize:".62rem", fontWeight:700, flexShrink:0 }}>{d.priority}</span>
            </div>
          ))}
        </div>

        {/* Entrance Exam Recommendations */}
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:12 }}>Entrance Exam Recommendations</div>
          {report.profileBuilding?.exams?.map((ex,i)=>(
            <div key={i} style={{ padding:"12px 16px", borderRadius:12, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", marginBottom:8 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4, flexWrap:"wrap", gap:8 }}>
                <span style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:800, color:"white" }}>{ex.title}</span>
                <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <span style={{ padding:"2px 8px", borderRadius:50, border:`1px solid ${PRIORITY_COLOR[ex.priority]??"rgba(255,255,255,.2)"}`, color:PRIORITY_COLOR[ex.priority]??"rgba(255,255,255,.4)", fontSize:".62rem", fontWeight:700 }}>{ex.priority}</span>
                  {ex.link && <a href={ex.link} target="_blank" rel="noopener noreferrer" style={{ padding:"3px 10px", borderRadius:8, background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.2)", color:"#d4af37", fontSize:".65rem", fontWeight:600, textDecoration:"none" }}>Learn →</a>}
                </div>
              </div>
              <div style={{ fontSize:".78rem", color:"rgba(241,245,255,.45)" }}>{ex.description}</div>
            </div>
          ))}
        </div>

        {/* Extracurricular */}
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:12 }}>Recommended Extracurricular Activities</div>
          {report.profileBuilding?.activities?.map((act,i)=>(
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:8 }}>
              <span style={{ color:"#00C9B1", fontSize:".75rem", flexShrink:0, marginTop:2 }}>→</span>
              <span style={{ fontSize:".82rem", color:"rgba(241,245,255,.65)" }}>{act}</span>
            </div>
          ))}
        </div>

        {/* Important tip */}
        {report.profileBuilding?.importantTip && (
          <div style={{ padding:"16px 18px", borderRadius:12, background:"linear-gradient(135deg,rgba(212,175,55,.1),rgba(212,175,55,.04))", border:"1px solid rgba(212,175,55,.25)", marginBottom:12 }}>
            <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".1em", color:"#d4af37", textTransform:"uppercase", marginBottom:8 }}>⚠ IMPORTANT TIP</div>
            <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.65)", lineHeight:1.7, margin:0 }}>{report.profileBuilding.importantTip}</p>
          </div>
        )}

        {report.profileBuilding?.quote && (
          <p style={{ textAlign:"center", fontSize:".88rem", fontStyle:"italic", color:"rgba(241,245,255,.35)", margin:0 }}>
            "The difference between <span style={{ color:"#d4af37" }}>Ordinary</span> and <span style={{ color:"#d4af37" }}>Extraordinary</span> is that <span style={{ color:"#d4af37" }}>little extra</span>"
          </p>
        )}
      </Box>

      {/* ══ 12. SCHOLARSHIP INSIGHTS ══ */}
      <Box icon="🎖️" title="Scholarship Insights">
        <p style={{ fontSize:".82rem", color:"rgba(241,245,255,.45)", lineHeight:1.75, marginBottom:18 }}>
          Unlock the gateway to educational opportunities. Discover top scholarships offered by prestigious global universities — empower your academic journey with funding that aligns with your aspirations.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {report.scholarships?.map((s,i)=>(
            <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"14px 16px", borderRadius:12, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", transition:"all .2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.06)"; el.style.borderColor="rgba(212,175,55,.2)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.03)"; el.style.borderColor="rgba(255,255,255,.06)"; }}
            >
              <div style={{ width:32, height:32, borderRadius:"50%", background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-head)", fontWeight:800, fontSize:".82rem", color:"#d4af37", flexShrink:0 }}>{i+1}</div>
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
          {report.bestColleges?.map((c,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, padding:"16px 18px", transition:"all .2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.07)"; el.style.borderColor="rgba(212,175,55,.25)"; el.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.03)"; el.style.borderColor="rgba(255,255,255,.07)"; el.style.transform="none"; }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                <span style={{ fontSize:"1.4rem" }}>{c.flag}</span>
                <div>
                  <div style={{ fontFamily:"var(--font-head)", fontSize:".9rem", fontWeight:700, color:"white" }}>{c.name}</div>
                  <div style={{ fontSize:".68rem", color:"rgba(241,245,255,.35)" }}>{c.country}</div>
                </div>
              </div>
              <div style={{ fontSize:".75rem", color:"rgba(241,245,255,.5)", marginBottom:10, padding:"4px 10px", borderRadius:8, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.06)", display:"inline-block" }}>{c.program}</div>
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
          <a href="/#contact" style={{ padding:"12px 26px", borderRadius:50, background:"var(--grad-teal)", color:"white", fontWeight:600, fontSize:".88rem", textDecoration:"none", boxShadow:"0 6px 24px rgba(0,201,177,.35)" }}>📅 Book Free Counselling</a>
          <Link href="/personality-test" style={{ padding:"12px 22px", borderRadius:50, background:"rgba(255,255,255,.08)", border:"1.5px solid rgba(255,255,255,.2)", color:"rgba(255,255,255,.8)", fontSize:".88rem", textDecoration:"none" }}>🔄 Retake Test</Link>
        </div>
      </div>

      {/* ══ 16. ADMIN CONTACT ══ */}
      {report.adminContact && (
        <div style={{ background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:16, padding:"24px 28px", marginBottom:14, textAlign:"center" }}>
          <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".12em", color:"rgba(241,245,255,.4)", textTransform:"uppercase", marginBottom:12 }}>Get in Touch with Our Team</div>
          <div style={{ fontFamily:"var(--font-head)", fontSize:"1rem", fontWeight:700, color:"white", marginBottom:16 }}>{report.adminContact.name}</div>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <a href={`mailto:${report.adminContact.email}`} style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", borderRadius:50, background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", color:"#5b8aff", fontSize:".85rem", fontWeight:600, textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(91,138,255,.2)"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(91,138,255,.1)"; }}
            >
              ✉ {report.adminContact.email}
            </a>
            <a href={`tel:${report.adminContact.phone.replace(/\s/g,"")}`} style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", borderRadius:50, background:"rgba(52,211,153,.1)", border:"1px solid rgba(52,211,153,.2)", color:"#34d399", fontSize:".85rem", fontWeight:600, textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(52,211,153,.2)"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(52,211,153,.1)"; }}
            >
              📞 {report.adminContact.phone}
            </a>
          </div>
        </div>
      )}

      {/* Print */}
      <div style={{ display:"flex", justifyContent:"center", paddingBottom:20 }}>
        <button onClick={()=>window.print()} style={{ padding:"10px 22px", borderRadius:10, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"rgba(241,245,255,.5)", cursor:"pointer", fontSize:".82rem", fontFamily:"var(--font-body)" }}>
          🖨️ Print / Save Report
        </button>
      </div>
    </div>
  );
}

/* ── Box wrapper ── */
function Box({ icon, title, children, inline }: { icon:string; title:string; children:React.ReactNode; inline?:boolean }) {
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
  const ctx=canvas.getContext("2d"); if(!ctx) return;
  const W=380,H=280,cx=W/2,cy=H/2,r=Math.min(cx,cy)-42,n=cats.length;
  canvas.width=W; canvas.height=H; ctx.clearRect(0,0,W,H);
  for(let ring=1;ring<=4;ring++){
    ctx.beginPath();
    cats.forEach((_,i)=>{ const a=(i/n)*Math.PI*2-Math.PI/2; const x=cx+Math.cos(a)*r*(ring/4); const y=cy+Math.sin(a)*r*(ring/4); i===0?ctx.moveTo(x,y):ctx.lineTo(x,y); });
    ctx.closePath(); ctx.strokeStyle="rgba(255,255,255,.07)"; ctx.stroke();
  }
  cats.forEach((_,i)=>{ const a=(i/n)*Math.PI*2-Math.PI/2; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r); ctx.strokeStyle="rgba(255,255,255,.06)"; ctx.stroke(); const lx=cx+Math.cos(a)*(r+22); const ly=cy+Math.sin(a)*(r+22); ctx.fillStyle="rgba(241,245,255,.45)"; ctx.font="11px DM Sans,sans-serif"; ctx.textAlign="center"; ctx.fillText(cats[i].name.slice(0,6),lx,ly+4); });
  ctx.beginPath();
  cats.forEach((cat,i)=>{ const a=(i/n)*Math.PI*2-Math.PI/2; const v=(cat.percentage/100)*r; i===0?ctx.moveTo(cx+Math.cos(a)*v,cy+Math.sin(a)*v):ctx.lineTo(cx+Math.cos(a)*v,cy+Math.sin(a)*v); });
  ctx.closePath();
  const g=ctx.createRadialGradient(cx,cy,0,cx,cy,r); g.addColorStop(0,"rgba(0,201,177,.3)"); g.addColorStop(1,"rgba(37,99,235,.12)");
  ctx.fillStyle=g; ctx.fill(); ctx.strokeStyle="#00C9B1"; ctx.lineWidth=2; ctx.stroke();
  cats.forEach((cat,i)=>{ const a=(i/n)*Math.PI*2-Math.PI/2; const v=(cat.percentage/100)*r; const x=cx+Math.cos(a)*v; const y=cy+Math.sin(a)*v; ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fillStyle=cat.color; ctx.fill(); });
}