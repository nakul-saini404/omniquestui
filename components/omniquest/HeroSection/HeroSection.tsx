"use client";
// components/HeroSection/HeroSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import styles from "./HeroSection.module.css";

const TRUST_TAGS = [
  "✦ Ivy League Admits",
  "✦ 10,000+ Profiles Built",
  "✦ 40+ Countries",
  "✦ 4.9 Advisory Rating",
];

const OUTCOME_STATS = [
  { val: "92%",  label: "First-choice admit rate" },
  { val: "8K+",  label: "UG admits secured" },
  { val: "720+", label: "Average GMAT score" },
  { val: "$2M+", label: "Scholarships won" },
];

const OUTCOME_TAGS = [
  "🏛 Ivy League Strategy",
  "🧠 Psychometric Profiling",
  "🏗️ Global Profile Architecture",
];

export default function HeroSection() {
  return (
    <section id="home" aria-label="Hero" className={styles.section}>
      {/* Background effects */}
      <div className={styles.grid} />
      <div className={styles.orbBlue} />
      <div className={styles.orbTeal} />

      {/* Main grid */}
      <div className={styles.heroGrid}>
        {/* ── Left column ── */}
        <div>
          <div className={`animate-fade-up ${styles.badge}`}>
            ✦ India&apos;s Premium Global Admissions Strategy Firm
          </div>

          <h1 className={`animate-fade-up delay-1 ${styles.h1}`}>
            We Design<br />
            <em className={styles.h1Italic}>
              Globally<br />Competitive
            </em>
            <br />Futures.
          </h1>

          <p className={`animate-fade-up delay-2 ${styles.subtitle}`}>
            A premium admissions and career strategy consultancy helping
            students secure Ivy League, top global universities, and elite
            careers — through psychometric intelligence and structured
            profile architecture.
          </p>

          <div className={`animate-fade-up delay-3 ${styles.ctaStack}`}>
            <Link href="/personality-test" className={styles.ctaPrimary}>
              🧠 Start Psychometric Profile
            </Link>
            <a
              href="https://eduquest.org.in/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Book Advisory Session
            </a>
          </div>

          <div className={styles.divider} />

          <div className={`animate-fade-up delay-4 ${styles.trustTags}`}>
            {TRUST_TAGS.map((t) => (
              <div key={t} className={styles.trustTag}>{t}</div>
            ))}
          </div>
        </div>

        {/* ── Right column — Strategy Outcomes Card ── */}
        <div className={`animate-fade-up delay-2 ${styles.heroRight}`}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <p className={styles.cardLabel}>Strategy Outcomes · 2024</p>

              <div className={styles.statsGrid}>
                {OUTCOME_STATS.map((s) => (
                  <div key={s.label}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className={styles.tagRow}>
                {OUTCOME_TAGS.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO strip */}
      <div className={styles.seoStrip}>
        <div className={styles.seoInner}>
          <p className={styles.seoText}>
            OmniQuest — India&apos;s premier{" "}
            <strong className={styles.seoStrong}>
              global admissions strategy consultancy
            </strong>{" "}
            — specialises in Ivy League profile building, GMAT &amp; MBA
            consulting, and future-ready career strategy. Through psychometric
            intelligence and structured{" "}
            <strong className={styles.seoStrong}>profile architecture</strong>,
            we help students secure admits at Harvard, MIT, Wharton, Oxford,
            and 200+ elite institutions worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}