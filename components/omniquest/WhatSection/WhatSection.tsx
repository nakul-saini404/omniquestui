"use client";
// components/What/What.tsx
// ─────────────────────────────────────────────────────────────────────────────
// All typography is applied via inline styles — this fully bypasses Tailwind
// preflight which resets h1–h6, p, etc. to unstyled. Layout stays in the
// CSS module.

import styles from "./Whatsection.module.css";

// ── Design tokens ─────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Cormorant Garamond', Georgia, serif";
const FONT_UI      = "'Syne', sans-serif";
const FONT_BODY    = "'DM Sans', sans-serif";

const COLOR = {
  text:   "#F0EDE6",
  text2:  "#9E9B94",
  text3:  "#6A6865",
  gold:   "#C9A84C",
  blue:   "#4A9EE8",
  purple: "#9B7FE8",
  green:  "#5EC97A",
};

// ── Data ──────────────────────────────────────────────────────────────────────
const CARDS = [
  {
    accentBg: COLOR.blue,
    tagColor: COLOR.blue,
    tag:      "EduQuest",
    title:    "For students targeting top global universities",
    desc:     "Builds academically strong students into strategically positioned applicants for the world's most selective universities. We architect positioning — aligning academics, narrative, and profile into a coherent admissions identity.",
  },
  {
    accentBg: COLOR.purple,
    tagColor: COLOR.purple,
    tag:      "MBA Wizards",
    title:    "For professionals targeting top global business schools",
    desc:     "Transforms professional experience into high-impact, strategically positioned MBA applications. We design career narratives, reposition trajectories, and build strategies that convert experience into admission outcomes.",
  },
  {
    accentBg: COLOR.green,
    tagColor: COLOR.green,
    tag:      "Aptech",
    title:    "For individuals building real-world capability",
    desc:     "Develops applied skill systems that translate learning into measurable, industry-relevant capability. Beyond learning, we focus on execution — building demonstrable competence that strengthens career outcomes and academic profiles.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function What() {
  return (
    <section id="what" className={styles.section}>
      <div className={styles.layout}>

        {/* ══════════════════════════════
            LEFT COLUMN
        ══════════════════════════════ */}
        <div className={styles.left}>

          {/* Section label */}
          <span style={{
            fontFamily:    FONT_BODY,
            fontSize:      "11px",
            fontWeight:    500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color:         COLOR.gold,
            marginBottom:  "24px",
            display:       "block",
          }}>
            <span style={{ opacity: 0.6 }}>—— </span>
            What is OmniQuest
          </span>

          {/* Heading */}
          <h2 style={{
            fontFamily:    FONT_DISPLAY,
            fontSize:      "clamp(40px, 4vw, 64px)",
            fontWeight:    300,
            lineHeight:    1.1,
            letterSpacing: "-0.5px",
            color:         COLOR.text,
            marginBottom:  "24px",
            padding:       0,
          }}>
            A Unified<br />
            <em style={{ fontStyle: "italic", color: COLOR.gold }}>
              Intelligence System.
            </em><br />
            Not a Program.
          </h2>

          {/* Body para 1 */}
          <p style={{
            fontFamily:   FONT_BODY,
            fontSize:     "16px",
            color:        COLOR.text2,
            lineHeight:   1.8,
            marginBottom: "20px",
            padding:      0,
          }}>
            OmniQuest is not a linear journey or bundled service. It is the
            intelligence layer behind three specialized education pathways —
            each designed for a distinct audience and outcome.
          </p>

          {/* Body para 2 */}
          <p style={{
            fontFamily:   FONT_BODY,
            fontSize:     "16px",
            color:        COLOR.text2,
            lineHeight:   1.8,
            marginBottom: "20px",
            padding:      0,
          }}>
            EduQuest, MBA Wizards, and Aptech operate independently, but are
            built on the same strategic foundation.
          </p>

          {/* Principle quote box */}
          <div className={styles.principleBox}>
            <p style={{
              fontFamily: FONT_DISPLAY,
              fontSize:   "18px",
              fontStyle:  "italic",
              fontWeight: 400,
              color:      COLOR.text,
              lineHeight: 1.6,
              margin:     0,
              padding:    0,
            }}>
              Outcomes are not achieved by effort alone — they are engineered
              through positioning.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════
            RIGHT COLUMN — pathway cards
        ══════════════════════════════ */}
        <div className={styles.right}>
          {CARDS.map((c) => (
            <div key={c.tag} className={styles.card}>

              {/* Coloured left-edge accent bar */}
              <div
                className={styles.accent}
                style={{ background: c.accentBg }}
              />

              {/* Card content */}
              <div className={styles.cardInner}>

                {/* Pathway tag */}
                <span style={{
                  fontFamily:    FONT_BODY,
                  fontSize:      "10px",
                  fontWeight:    600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color:         c.tagColor,
                  marginBottom:  "8px",
                  display:       "block",
                }}>
                  {c.tag}
                </span>

                {/* Card title */}
                <h4 style={{
                  fontFamily:   FONT_UI,
                  fontSize:     "17px",
                  fontWeight:   700,
                  color:        COLOR.text,
                  lineHeight:   1.3,
                  marginBottom: "6px",
                  padding:      0,
                }}>
                  {c.title}
                </h4>

                {/* Card description */}
                <p style={{
                  fontFamily: FONT_BODY,
                  fontSize:   "14px",
                  color:      COLOR.text2,
                  lineHeight: 1.6,
                  margin:     0,
                  padding:    0,
                }}>
                  {c.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}