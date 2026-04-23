"use client";
import { useEffect, useRef } from "react";
import type { PersonalityReport } from "@/lib/personality";
import Link from "next/link";

export default function PersonalityReportView({ report }: { report: PersonalityReport }) {
  const radarRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (radarRef.current) drawRadar(radarRef.current, report.categories);
  }, [report]);

  const scoreColor = report.overallScore >= 80 ? "#34d399" : report.overallScore >= 60 ? "#5b8aff" : "#fb923c";
  const r = 60, circ = 2 * Math.PI * r;
  const dash = (report.overallScore / 100) * circ;

  return (
    <div style={{ animation: "fadeUp .6s ease both" }}>
      {/* HERO */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(91,138,255,.12)", border: "1px solid rgba(91,138,255,.25)", color: "#5b8aff", fontSize: ".7rem", letterSpacing: ".14em", fontWeight: 600, textTransform: "uppercase", marginBottom: 18 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5b8aff", animation: "blink 1.5s ease-in-out infinite" }} />
          Grok AI Personality Intelligence Report
        </div>
        <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.8rem,5vw,2.8rem)", fontWeight: 800, marginBottom: 8 }}>{report.studentName}</h1>
        <div style={{ display: "inline-block", padding: "9px 26px", borderRadius: 100, background: "linear-gradient(135deg,rgba(91,138,255,.18),rgba(167,139,250,.18))", border: "1px solid rgba(91,138,255,.3)", marginBottom: 10 }}>
          <span style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", fontWeight: 800, background: "linear-gradient(135deg,#5b8aff,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{report.personalityType}</span>
        </div>
        <p style={{ color: "rgba(241,245,255,.45)", fontStyle: "italic", fontSize: ".95rem", marginBottom: 28 }}>"{report.tagline}"</p>

        {/* Score ring */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <svg width={160} height={160} viewBox="0 0 160 160">
            <circle cx={80} cy={80} r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth={12} />
            <circle cx={80} cy={80} r={r} fill="none" stroke={scoreColor} strokeWidth={12} strokeLinecap="round"
              strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={circ / 4}
              style={{ filter: `drop-shadow(0 0 10px ${scoreColor}88)`, transition: "stroke-dasharray 1.4s ease" }} />
            <text x={80} y={76} textAnchor="middle" fill={scoreColor} fontFamily="Syne,sans-serif" fontSize="28" fontWeight="800">{report.overallScore}</text>
            <text x={80} y={96} textAnchor="middle" fill="rgba(241,245,255,.35)" fontFamily="DM Sans,sans-serif" fontSize="11">/100</text>
          </svg>
        </div>
        <div style={{ fontSize: ".75rem", color: "rgba(241,245,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Overall Readiness Score</div>
      </div>

      {/* CATEGORIES */}
      <Box title="Dimension Breakdown" icon="📊">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 14 }}>
          {report.categories.map((cat) => (
            <div key={cat.name} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 14, padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: ".95rem", fontWeight: 700 }}>{cat.name}</div>
                  <div style={{ fontSize: ".7rem", color: "rgba(241,245,255,.35)", marginTop: 2 }}>{cat.label}</div>
                </div>
                <div style={{ fontFamily: "var(--font-head)", fontSize: "1.35rem", fontWeight: 800, color: cat.color }}>{cat.percentage}%</div>
              </div>
              <div style={{ height: 5, background: "rgba(255,255,255,.06)", borderRadius: 99, overflow: "hidden", marginBottom: 10 }}>
                <div style={{ height: "100%", width: `${cat.percentage}%`, background: cat.color, borderRadius: 99, boxShadow: `0 0 10px ${cat.color}66` }} />
              </div>
              <p style={{ fontSize: ".78rem", color: "rgba(241,245,255,.45)", lineHeight: 1.65 }}>{cat.description}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* RADAR */}
      <Box title="Personality Radar" icon="🎯">
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
          <canvas ref={radarRef} width={380} height={280} style={{ maxWidth: "100%" }} />
        </div>
      </Box>

      {/* STRENGTHS + GROWTH */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <Box title="Core Strengths" icon="✨" inline>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {report.strengths.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 14px", borderRadius: 10, background: "rgba(52,211,153,.07)", border: "1px solid rgba(52,211,153,.15)" }}>
                <span style={{ color: "#34d399", flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: ".82rem", color: "rgba(241,245,255,.7)", lineHeight: 1.55 }}>{s}</span>
              </div>
            ))}
          </div>
        </Box>
        <Box title="Growth Areas" icon="🌱" inline>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {report.growthAreas.map((g, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 14px", borderRadius: 10, background: "rgba(251,191,36,.07)", border: "1px solid rgba(251,191,36,.15)" }}>
                <span style={{ color: "#fbbf24", flexShrink: 0, marginTop: 1 }}>↑</span>
                <span style={{ fontSize: ".82rem", color: "rgba(241,245,255,.7)", lineHeight: 1.55 }}>{g}</span>
              </div>
            ))}
          </div>
        </Box>
      </div>

      {/* CAREER MATCHES */}
      <Box title="Top Career Matches" icon="💼">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {report.careerMatches.slice(0, 5).map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 16px", borderRadius: 12, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}>
              <span style={{ fontSize: "1.3rem", width: 34, textAlign: "center" }}>{c.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: ".88rem", marginBottom: 5 }}>{c.title}</div>
                <div style={{ height: 4, background: "rgba(255,255,255,.06)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${c.fit}%`, background: i === 0 ? "linear-gradient(90deg,#5b8aff,#a78bfa)" : i === 1 ? "linear-gradient(90deg,#00C9B1,#2563EB)" : "rgba(255,255,255,.18)", borderRadius: 99, transition: "width 1.2s ease" }} />
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: ".95rem", color: i === 0 ? "#5b8aff" : i === 1 ? "#00C9B1" : "rgba(241,245,255,.5)", minWidth: 40, textAlign: "right" }}>{c.fit}%</div>
            </div>
          ))}
        </div>
      </Box>

      {/* AI INSIGHT */}
      <Box title="Grok AI Counsellor Insight" icon="🤖">
        <div style={{ padding: "18px 22px", borderRadius: 13, background: "linear-gradient(135deg,rgba(91,138,255,.09),rgba(167,139,250,.07))", border: "1px solid rgba(91,138,255,.2)" }}>
          <p style={{ fontSize: ".92rem", color: "rgba(241,245,255,.78)", lineHeight: 1.85 }}>{report.aiInsight}</p>
        </div>
      </Box>

      {/* PROGRAM CTA */}
      <div style={{ background: "linear-gradient(135deg,#0B1C3D,#102454)", borderRadius: 20, padding: "32px 28px", textAlign: "center", marginBottom: 14, border: "1px solid rgba(0,201,177,.2)" }}>
        <div style={{ fontSize: ".72rem", color: "var(--teal)", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 10 }}>🎯 Recommended OmniQuest Program</div>
        <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 8 }}>{report.programRecommendation}</h3>
        <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".84rem", marginBottom: 22 }}>Matched to your unique personality profile by Grok AI</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/#contact" style={{ padding: "12px 26px", borderRadius: 50, background: "var(--grad-teal)", color: "white", fontWeight: 600, fontSize: ".88rem", textDecoration: "none", boxShadow: "0 6px 24px rgba(0,201,177,.35)" }}>📅 Book Free Counselling</a>
          <Link href="/personality-test" style={{ padding: "12px 22px", borderRadius: 50, background: "rgba(255,255,255,.08)", border: "1.5px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)", fontSize: ".88rem", textDecoration: "none" }}>🔄 Retake Test</Link>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => window.print()} style={{ padding: "10px 22px", borderRadius: 10, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", color: "rgba(241,245,255,.5)", cursor: "pointer", fontSize: ".82rem", fontFamily: "var(--font-body)" }}>🖨️ Print Report</button>
      </div>
    </div>
  );
}

function Box({ title, icon, children, inline }: { title: string; icon: string; children: React.ReactNode; inline?: boolean }) {
  return (
    <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 18, padding: 22, marginBottom: inline ? 0 : 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
        <span style={{ fontSize: "1rem" }}>{icon}</span>
        <h2 style={{ fontFamily: "var(--font-head)", fontSize: ".95rem", fontWeight: 700, color: "rgba(241,245,255,.88)" }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function drawRadar(canvas: HTMLCanvasElement, cats: PersonalityReport["categories"]) {
  const ctx = canvas.getContext("2d"); if (!ctx) return;
  const W = 380, H = 280, cx = W / 2, cy = H / 2, r = Math.min(cx, cy) - 42, n = cats.length;
  canvas.width = W; canvas.height = H; ctx.clearRect(0, 0, W, H);
  for (let ring = 1; ring <= 4; ring++) {
    ctx.beginPath();
    cats.forEach((_, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; const x = cx + Math.cos(a) * r * (ring / 4); const y = cy + Math.sin(a) * r * (ring / 4); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
    ctx.closePath(); ctx.strokeStyle = "rgba(255,255,255,.07)"; ctx.stroke();
  }
  cats.forEach((_, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); ctx.strokeStyle = "rgba(255,255,255,.06)"; ctx.stroke(); const lx = cx + Math.cos(a) * (r + 22); const ly = cy + Math.sin(a) * (r + 22); ctx.fillStyle = "rgba(241,245,255,.45)"; ctx.font = "11px DM Sans,sans-serif"; ctx.textAlign = "center"; ctx.fillText(cats[i].name.slice(0, 6), lx, ly + 4); });
  ctx.beginPath();
  cats.forEach((cat, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; const v = (cat.percentage / 100) * r; const x = cx + Math.cos(a) * v; const y = cy + Math.sin(a) * v; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
  ctx.closePath();
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r); g.addColorStop(0, "rgba(0,201,177,.3)"); g.addColorStop(1, "rgba(37,99,235,.12)");
  ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = "#00C9B1"; ctx.lineWidth = 2; ctx.stroke();
  cats.forEach((cat, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; const v = (cat.percentage / 100) * r; const x = cx + Math.cos(a) * v; const y = cy + Math.sin(a) * v; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fillStyle = cat.color; ctx.fill(); });
}
