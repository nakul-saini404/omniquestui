"use client";
// components/What/What.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Centred single-column layout.
// Quote block + pathway cards removed per design update.
// Dark color theme preserved throughout.

import styles from "./Whatsection.module.css";

// ── Design tokens ─────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Cormorant Garamond', Georgia, serif";
const FONT_MONO    = "'DM Mono', monospace";

const COLOR = {
  text:  "#F0EDE6",
  text2: "#9E9B94",
  gold:  "#C9A84C",
};

// ── Pill data ─────────────────────────────────────────────────────────────────
const PILLS = [
  { label: "Foundation", text: "Structured Thinking",      icon: "◈" },
  { label: "Method",     text: "Strategic Positioning",    icon: "◎" },
  { label: "Voice",      text: "Narrative Clarity",        icon: "◇" },
  { label: "Result",     text: "Outcome-Driven Execution", icon: "✦" },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function What() {
  return (
    <section id="what" className={styles.section}>
      <div className={styles.inner}>

        {/* ── Section tag ── */}
        <div className={styles.sectionTag} style={{
          fontFamily:    FONT_MONO,
          fontSize:      "0.65rem",
          fontWeight:    500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color:         COLOR.gold,
          marginBottom:  "28px",
          display:       "flex",
          alignItems:    "center",
          justifyContent:"center",
          gap:           "0.9rem",
        }}>
          <span style={{ opacity: 0.4, letterSpacing: 0 }}>——</span>
          What is OmniQuest
          <span style={{ opacity: 0.4, letterSpacing: 0 }}>——</span>
        </div>

        {/* ── Heading ── */}
        <h2 style={{
          fontFamily:    FONT_DISPLAY,
          fontSize:      "clamp(2.2rem, 4.5vw, 3.8rem)",
          fontWeight:    300,
          lineHeight:    1.15,
          letterSpacing: "-0.01em",
          color:         COLOR.text,
          margin:        "0 0 28px",
          padding:       0,
          textAlign:     "center",
        }}>
          A Unified{" "}
          <em style={{ fontStyle: "italic", color: COLOR.gold }}>
            Intelligence System.
          </em>
          <br />
          Not a Program.
        </h2>

        {/* ── Sub-heading rule ── */}
        <div className={styles.rule} />

        {/* ── Body paragraph ── */}
        <p style={{
          fontFamily: FONT_MONO,
          fontSize:   "14px",
          color:      COLOR.text2,
          lineHeight: 1.9,
          maxWidth:   "680px",
          margin:     "0 auto 64px",
          padding:    0,
          textAlign:  "center",
        }}>
          OmniQuest is not a linear journey or bundled service. It is the
          intelligence layer behind three specialized education pathways —
          each designed for a distinct audience and outcome. EduQuest, MBA
          Wizards, and Aptech operate independently, but are all built on the
          same strategic foundation: structured thinking, strategic positioning,
          narrative clarity, and outcome-driven execution.
        </p>

        {/* ── Four pill cards ── */}
        <div className={styles.pills}>
          {PILLS.map((p) => (
            <div key={p.label} className={styles.pill}>

              {/* Icon */}
              <div style={{
                fontFamily:  FONT_DISPLAY,
                fontSize:    "1.3rem",
                color:       COLOR.gold,
                opacity:     0.7,
                marginBottom:"14px",
                lineHeight:  1,
              }}>
                {p.icon}
              </div>

              {/* Label */}
              <div style={{
                fontFamily:    FONT_MONO,
                fontSize:      "0.58rem",
                fontWeight:    600,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color:         COLOR.gold,
                marginBottom:  "10px",
              }}>
                {p.label}
              </div>

              {/* Text */}
              <div style={{
                fontFamily: FONT_DISPLAY,
                fontSize:   "1.1rem",
                fontWeight: 300,
                color:      COLOR.text,
                lineHeight: 1.3,
              }}>
                {p.text}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}