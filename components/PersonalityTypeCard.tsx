"use client";
import { MBTI_TYPES } from "@/lib/personality";
import type { MBTIType } from "@/lib/personality";

/* ══════════════════════════════════════════════════════════════
   PersonalityTypeCard
   Shows the hero MBTI card at the top of any report
══════════════════════════════════════════════════════════════ */
interface Props {
  personalityType: string;   // e.g. "INTJ"
  studentName: string;
  overallScore: number;
  tagline?: string;
}

export default function PersonalityTypeCard({ personalityType, studentName, overallScore, tagline }: Props) {
  const typeData: MBTIType = MBTI_TYPES.find(t => t.code === personalityType) ?? MBTI_TYPES[0];
  const sc   = overallScore >= 80 ? "#34d399" : overallScore >= 60 ? "#5b8aff" : "#fb923c";
  const r    = 54;
  const circ = 2 * Math.PI * r;
  const dash = (overallScore / 100) * circ;

  return (
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes glow  { 0%,100%{opacity:.6} 50%{opacity:1} }
      `}} />

      {/* AI Report badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "6px 18px", borderRadius: 100,
        background: "rgba(91,138,255,.12)", border: "1px solid rgba(91,138,255,.25)",
        color: "#5b8aff", fontSize: ".7rem", letterSpacing: ".14em",
        fontWeight: 700, textTransform: "uppercase", marginBottom: 22,
      }}>
        <span style={{ width:6, height:6, borderRadius:"50%", background:"#5b8aff", animation:"blink 1.5s infinite" }}/>
        AI Career Intelligence Report · OmniQuest
      </div>

      {/* Student name */}
      <h1 style={{
        fontFamily: "var(--font-head)",
        fontSize: "clamp(1.6rem,5vw,2.5rem)",
        fontWeight: 800, marginBottom: 20, color: "white", lineHeight: 1.1,
      }}>
        {studentName}
      </h1>

      {/* ── MAIN MBTI CARD ── */}
      <div style={{
        display: "inline-block", position: "relative",
        padding: "36px 44px 32px",
        background: "linear-gradient(145deg,rgba(12,16,38,.98),rgba(8,12,28,.98))",
        border: `2px solid ${typeData.color}35`,
        borderRadius: 24,
        boxShadow: `0 0 80px ${typeData.color}16, 0 24px 64px rgba(0,0,0,.6)`,
        minWidth: 280, marginBottom: 24,
      }}>
        {/* Corner dots */}
        <div style={{ position:"absolute", top:14, left:14, width:8, height:8, borderRadius:"50%", background:typeData.color, boxShadow:`0 0 14px ${typeData.color}` }}/>
        <div style={{ position:"absolute", top:14, right:14, width:8, height:8, borderRadius:"50%", background:typeData.color, opacity:.4 }}/>
        <div style={{ position:"absolute", bottom:14, left:14, width:6, height:6, borderRadius:"50%", background:typeData.color, opacity:.3 }}/>
        <div style={{ position:"absolute", bottom:14, right:14, width:6, height:6, borderRadius:"50%", background:typeData.color, opacity:.3 }}/>

        {/* Top label */}
        <div style={{
          fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em",
          textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 20,
        }}>
          Your Personality Type
        </div>

        {/* Big emoji */}
        <div style={{
          fontSize: "4rem", lineHeight: 1, marginBottom: 16,
          filter: `drop-shadow(0 0 28px ${typeData.color}90)`,
          animation: "glow 3s ease-in-out infinite",
        }}>
          {typeData.emoji}
        </div>

        {/* MBTI code */}
        <div style={{
          fontFamily: "var(--font-head)",
          fontSize: "clamp(.9rem,2.5vw,1.1rem)",
          fontWeight: 900, letterSpacing: ".25em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.5)",
          marginBottom: 4,
        }}>
          {typeData.code}
        </div>

        {/* Type name */}
        <div style={{
          fontFamily: "var(--font-head)",
          fontSize: "clamp(1.4rem,4vw,2rem)",
          fontWeight: 900, letterSpacing: ".04em",
          background: typeData.gradient,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 14, lineHeight: 1.1,
        }}>
          {typeData.name}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${typeData.color}40,transparent)`, margin: "14px 0" }}/>

        {/* Tagline */}
        <p style={{
          fontSize: ".9rem", fontStyle: "italic",
          color: `${typeData.color}cc`, marginBottom: 16,
          lineHeight: 1.55, maxWidth: 320,
        }}>
          "{tagline ?? typeData.tagline}"
        </p>

        {/* Description */}
        <p style={{
          fontSize: ".8rem", color: "rgba(255,255,255,.5)",
          lineHeight: 1.75, maxWidth: 340, margin: "0 auto 20px",
        }}>
          {typeData.description}
        </p>

        {/* Strength chips */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {typeData.strengths.map(s => (
            <span key={s} style={{
              padding: "4px 14px", borderRadius: 50,
              background: `${typeData.color}16`,
              border: `1px solid ${typeData.color}40`,
              fontSize: ".68rem", fontWeight: 700, color: typeData.color,
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Score ring */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
        <svg width={144} height={144} viewBox="0 0 144 144">
          <circle cx={72} cy={72} r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth={10}/>
          <circle cx={72} cy={72} r={r} fill="none" stroke={sc} strokeWidth={10} strokeLinecap="round"
            strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={circ / 4}
            style={{ filter:`drop-shadow(0 0 10px ${sc}88)`, transition:"stroke-dasharray 1.4s ease" }}/>
          <text x={72} y={68} textAnchor="middle" fill={sc} fontFamily="Syne,sans-serif" fontSize="24" fontWeight="900">
            {overallScore}
          </text>
          <text x={72} y={86} textAnchor="middle" fill="rgba(241,245,255,.35)" fontFamily="DM Sans,sans-serif" fontSize="10">
            /100
          </text>
        </svg>
      </div>
      <div style={{ fontSize: ".7rem", color: "rgba(241,245,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>
        Overall Readiness Score
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   AllPersonalityTypesGrid
   Shows all 16 types in a grid — for the landing/info section
══════════════════════════════════════════════════════════════ */
export function AllPersonalityTypesGrid() {
  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 12,
      }}>
        {MBTI_TYPES.map(type => (
          <div key={type.code} style={{
            padding: "20px 16px", borderRadius: 16, textAlign: "center",
            background: "rgba(255,255,255,.03)",
            border: `1px solid ${type.color}25`,
            transition: "all .2s", cursor: "default",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = `${type.color}12`;
            el.style.borderColor = `${type.color}50`;
            el.style.transform = "translateY(-3px)";
            el.style.boxShadow = `0 8px 24px ${type.color}18`;
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "rgba(255,255,255,.03)";
            el.style.borderColor = `${type.color}25`;
            el.style.transform = "none";
            el.style.boxShadow = "none";
          }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{type.emoji}</div>
            <div style={{
              fontFamily: "var(--font-head)",
              fontSize: ".72rem", fontWeight: 900,
              letterSpacing: ".12em", color: type.color, marginBottom: 4,
            }}>
              {type.code}
            </div>
            <div style={{
              fontSize: ".8rem", fontWeight: 700,
              color: "rgba(255,255,255,.75)", lineHeight: 1.3,
            }}>
              {type.name}
            </div>
            <p style={{ fontSize: ".66rem", color: "rgba(255,255,255,.35)", marginTop: 6, lineHeight: 1.4 }}>
              {type.tagline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}