"use client";
// components/PathwaysSection/PathwaysSection.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Merged component: replaces both PathwaysSection + SystemArchitectureSection.
// Mirrors the #pathways section in omniquest.html exactly:
//   • Dark #0a0a0a background, 1px gap grid
//   • Animated top accent bar (scaleX on hover)
//   • Radial glow overlay per card colour
//   • → bullet markers in gold
//   • Italic tagline + gold CTA arrow
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./PathwaysSection.module.css";

// ── Design tokens ─────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Cormorant Garamond', Georgia, serif";
const FONT_MONO    = "'DM Mono', monospace";
const FONT_UI      = "'Syne', sans-serif";

const C = {
  text:    "#F0EDE6",
  text2:   "rgba(240,237,230,0.55)",
  text3:   "rgba(240,237,230,0.28)",
  muted:   "rgba(240,237,230,0.2)",
  gold:    "#C9A84C",
  tagMono: "rgba(255,255,255,0.2)",
};

// ── Data (merges PATHWAYS + PANELS into one source of truth) ──────────────────
const PATHWAYS = [
  {
    color:    "blue" as const,
    num:      "Pathway 01 · EduQuest",
    icon:     "🏛",
    name:     "EduQuest",
    audience: "For Students · Grades 8–12",
    href:     "/eduQuest",
    desc:     "Builds academically strong students into strategically positioned applicants for the world's most selective universities. We architect positioning — aligning academics, narrative, and profile into a coherent admissions identity.",
    bullets: [
      "Admissions strategy for Ivy League & top global universities",
      "Academic readiness & positioning architecture",
      "Essay & narrative design systems",
      "Long-term profile development (Grades 8–12)",
    ],
    tagline: "Where potential is structured into selection.",
    cta:     "Enter the Admissions Strategy System →",
  },
  {
    color:    "purple" as const,
    num:      "Pathway 02 · MBA Wizards",
    icon:     "💼",
    name:     "MBA Wizards",
    audience: "For Serious MBA Applicants & Professionals",
    href:     "https://www.mbawizards.co.in/",
    desc:     "Transforms professional experience into high-impact, strategically positioned MBA applications. We design career narratives, reposition trajectories, and build strategies that convert experience into admission outcomes.",
    bullets: [
      "MBA admissions strategy",
      "Application narrative architecture",
      "Career positioning & transition design",
      "Graduate school admissions systems",
    ],
    tagline: "From experience to elite business school positioning.",
    cta:     "Begin Your MBA Strategy Process →",
  },
  {
    color:    "green" as const,
    num:      "Pathway 03 · Aptech",
    icon:     "⚡",
    name:     "Aptech",
    audience: "For Execution-Focused Learners & Professionals",
    href:     "https://www.aptech-worldwide.com/",
    desc:     "Develops applied skill systems that translate learning into measurable, industry-relevant capability. Beyond learning, we focus on execution — building demonstrable competence that strengthens both career outcomes and academic profiles.",
    bullets: [
      "Applied skill development systems",
      "Industry-aligned capability building",
      "Real-world execution training",
      "Career readiness infrastructure",
    ],
    tagline: "Where capability becomes proof.",
    cta:     "Build Execution-Level Capability →",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function PathwaysSection() {
  return (
    <section id="pathways" className={styles.section}>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className={styles.header}>

        {/* Section label */}
        <span style={{
          fontFamily:    FONT_MONO,
          fontSize:      "11px",
          fontWeight:    500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color:         C.gold,
          marginBottom:  "20px",
          display:       "block",
        }}>
          <span style={{ opacity: 0.5 }}>—— </span>
          Three Pathways · One Intelligence System
        </span>

        {/* H2 */}
        <h2 style={{
          fontFamily:    FONT_DISPLAY,
          fontSize:      "clamp(36px, 4vw, 60px)",
          fontWeight:    300,
          lineHeight:    1.1,
          letterSpacing: "-0.5px",
          color:         C.text,
          marginBottom:  "0",
          padding:       0,
        }}>
          <em style={{ fontStyle: "italic", color: C.gold }}>Select Your</em>
          {" "}Strategic Entry Point
        </h2>

        {/* Sub */}
        <p style={{
          fontFamily:  FONT_MONO,
          fontSize:    "14px",
          color:       C.text2,
          lineHeight:  1.75,
          marginTop:   "16px",
          maxWidth:    "420px",
          padding:     0,
        }}>
          Each pathway serves a distinct audience — built on a unified
          intelligence framework designed to convert potential into measurable
          outcomes.
        </p>
      </div>

      {/* ── Card grid ──────────────────────────────────────────────────── */}
      <div className={styles.grid}>
        {PATHWAYS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles[p.color]}`}
          >
            {/* Pathway num label */}
            <div style={{
              fontFamily:    FONT_MONO,
              fontSize:      "10px",
              letterSpacing: "0.16em",
              color:         C.muted,
              marginBottom:  "1.6rem",
              position:      "relative",
              zIndex:        1,
            }}>
              {p.num}
            </div>

            {/* Icon */}
            <span style={{
              fontSize:     "1.8rem",
              marginBottom: "0.9rem",
              display:      "block",
              position:     "relative",
              zIndex:       1,
            }}>
              {p.icon}
            </span>

            {/* Name */}
            <div style={{
              fontFamily:   FONT_DISPLAY,
              fontSize:     "2rem",
              fontWeight:   300,
              color:        C.text,
              marginBottom: "0.3rem",
              position:     "relative",
              zIndex:       1,
            }}>
              {p.name}
            </div>

            {/* Audience */}
            <div style={{
              fontFamily:    FONT_MONO,
              fontSize:      "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color:         C.gold,
              marginBottom:  "1.3rem",
              position:      "relative",
              zIndex:        1,
            }}>
              {p.audience}
            </div>

            {/* Description */}
            <p style={{
              fontFamily:   FONT_MONO,
              fontSize:     "13px",
              color:        C.text2,
              lineHeight:   1.75,
              marginBottom: "1.6rem",
              flex:         1,
              position:     "relative",
              zIndex:       1,
              padding:      0,
            }}>
              {p.desc}
            </p>

            {/* Bullet features */}
            <ul className={styles.features} style={{ position: "relative", zIndex: 1 }}>
              {p.bullets.map((b) => (
                <li key={b} className={styles.featureItem}>
                  {b}
                </li>
              ))}
            </ul>

            {/* Tagline */}
            <div style={{
              fontFamily:   FONT_DISPLAY,
              fontStyle:    "italic",
              fontSize:     "0.92rem",
              color:        C.text3,
              marginBottom: "1.8rem",
              position:     "relative",
              zIndex:       1,
            }}>
              {p.tagline}
            </div>

            {/* CTA */}
            <div className={styles.cta} style={{ position: "relative", zIndex: 1 }}>
              {p.cta}
            </div>

          </a>
        ))}
      </div>

    </section>
  );
}