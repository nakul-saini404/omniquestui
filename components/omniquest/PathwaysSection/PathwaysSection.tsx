"use client";
// components/PathwaysSection/PathwaysSection.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Mirrors the #pathways section from omniquest.html exactly.
// All typography via inline styles — immune to Tailwind preflight resets.

import Link from "next/link";
import styles from "./PathwaysSection.module.css";
import { PATHWAYS } from "@/app/omniquest/data/constants";

// ── Design tokens ─────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Cormorant Garamond', Georgia, serif";
const FONT_UI      = "'Syne', sans-serif";
const FONT_BODY    = "'DM Sans', sans-serif";

const C = {
  text:   "#F0EDE6",
  text2:  "#9E9B94",
  text3:  "#6A6865",
  gold:   "#C9A84C",
  blue:   "#4A9EE8",
  purple: "#9B7FE8",
  green:  "#5EC97A",
};

// Map color string → actual hex
const colorHex: Record<string, string> = {
  blue:   C.blue,
  purple: C.purple,
  green:  C.green,
};

// Map color string → card / icon CSS module class
const cardClass: Record<string, string> = {
  blue:   styles.cardBlue,
  purple: styles.cardPurple,
  green:  styles.cardGreen,
};
const iconClass: Record<string, string> = {
  blue:   styles.iconBlue,
  purple: styles.iconPurple,
  green:  styles.iconGreen,
};

// ─────────────────────────────────────────────────────────────────────────────
export default function PathwaysSection() {
  return (
    <section id="pathways" className={styles.section}>

      {/* ── Header ── */}
      <div className={styles.header}>

        {/* Section label */}
        <span style={{
          fontFamily:    FONT_BODY,
          fontSize:      "11px",
          fontWeight:    500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color:         C.gold,
          marginBottom:  "24px",
          display:       "block",
        }}>
          <span style={{ opacity: 0.6 }}>—— </span>
          Choose Your Pathway
        </span>

        {/* H2 */}
        <h2 style={{
          fontFamily:    FONT_DISPLAY,
          fontSize:      "clamp(36px, 4vw, 60px)",
          fontWeight:    300,
          lineHeight:    1.1,
          letterSpacing: "-0.5px",
          color:         C.text,
          marginBottom:  "16px",
          padding:       0,
        }}>
          <em style={{ fontStyle: "italic", color: C.gold }}>Select</em> Your<br />
          Strategic Entry Point
        </h2>

        {/* Sub */}
        <p style={{
          fontFamily: FONT_BODY,
          fontSize:   "15px",
          color:      C.text2,
          lineHeight: 1.8,
          marginTop:  "12px",
          margin:     0,
          padding:    0,
        }}>
          Each pathway serves a distinct audience, collectively powered by a
          unified intelligence system designed to convert potential into
          measurable outcomes.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className={styles.cardGrid}>
        {PATHWAYS.map((p) => {
          const accent = colorHex[p.color];
          return (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${cardClass[p.color]}`}
            >
              {/* Icon */}
              <div className={`${styles.icon} ${iconClass[p.color]}`}>
                {p.icon}
              </div>

              {/* Route label */}
              <div style={{
                fontFamily:    FONT_BODY,
                fontSize:      "12px",
                fontWeight:    500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:         accent,
                marginBottom:  "12px",
              }}>
                {p.route}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily:   FONT_UI,
                fontSize:     "20px",
                fontWeight:   700,
                color:        C.text,
                marginBottom: "12px",
                lineHeight:   1.2,
                padding:      0,
              }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily:   FONT_BODY,
                fontSize:     "14px",
                color:        C.text2,
                lineHeight:   1.7,
                marginBottom: "24px",
                flex:         1,
                padding:      0,
              }}>
                {p.desc}
              </p>

              {/* CTA */}
              <div style={{
                fontFamily:    FONT_BODY,
                fontSize:      "13px",
                fontWeight:    500,
                letterSpacing: "0.05em",
                color:         accent,
                display:       "inline-flex",
                alignItems:    "center",
                gap:           "6px",
              }}>
                {p.cta}
              </div>
            </a>
          );
        })}
      </div>

    </section>
  );
}