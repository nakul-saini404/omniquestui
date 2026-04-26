"use client";
// components/ConsultingModelSection/ConsultingModelSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./ConsultingModelSection.module.css";

const ROLES = [
  {
    icon: "⏱",
    title: "Career Strategy Advisor",
    desc: "Maps your cognitive profile to long-term career trajectories and identifies the optimal university and programme combination for your goals.",
  },
  {
    icon: "🎒",
    title: "Profile Architect",
    desc: "Designs your extracurricular narrative, leadership positioning, and academic profile to meet Ivy League and top-50 university standards.",
  },
  {
    icon: "🎯",
    title: "Admissions Strategist",
    desc: "Orchestrates your full application — essays, recommendations, interviews, and school selection — with surgical precision and insider knowledge.",
  },
];

const QUOTE_STATS = [
  { num: "92%", label: "First-choice rate" },
  { num: "15+", label: "Years experience" },
  { num: "40+", label: "Destination countries" },
];

export default function ConsultingModelSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left ── */}
        <div className="reveal">
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Strategy Consulting Model</span>
          </div>

          <h2 className={styles.h2}>
            Every Student Works with a{" "}
            <em className={styles.h2Em}>
              Global Strategy<br />Consultant
            </em>
          </h2>

          <p className={styles.body}>
            Not tutors. Not counsellors. At{" "}
            <strong className={styles.bodyStrong}>OmniQuest</strong>, you are
            assigned a dedicated team of{" "}
            <strong className={styles.bodyStrong}>specialists</strong> who work
            as your personal admissions{" "}
            <strong className={styles.bodyGold}>architecture firm</strong>.
          </p>

          <div className={styles.roleList}>
            {ROLES.map((r) => (
              <div key={r.title} className={styles.roleCard}>
                <div className={styles.roleIcon}>{r.icon}</div>
                <div>
                  <div className={styles.roleTitle}>{r.title}</div>
                  <div className={styles.roleDesc}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Quote card ── */}
        <div className="reveal">
          <div className={styles.quoteCard}>
            <p className={styles.quote}>
              &ldquo;We do not fill out applications. We build the{" "}
              <strong className={styles.quoteStrong}>
                candidate that elite universities want to admit
              </strong>{" "}
              — long before the application opens.&rdquo;
            </p>

            <div className={styles.quoteStats}>
              {QUOTE_STATS.map((s) => (
                <div key={s.num}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}