"use client";
// components/sat/sat_city/CityHero/CityHero.tsx

import { useEffect, useState } from "react";
import styles from "./CityHero.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

const SCORE_BARS = [
  { label: "Highest Score",         val: "1560", width: "97.5%", green: false },
  { label: "Avg EduQuest Score",    val: "1490", width: "93%",   green: false },
  { label: "Avg Score Improvement", val: "+220", width: "55%",   green: true  },
];

export default function CityHero({ data }: Props) {
  const { hero, city } = data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const citySlug = city.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className={styles.hero} aria-label={`SAT Coaching in ${city} Hero`}>

      {/* background orb */}
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={styles.heroInner}>

        {/* ══════════ LEFT COLUMN ══════════ */}
        <div>

          {/* Breadcrumb */}
          <nav className={`${styles.breadcrumb} ${visible ? styles.in0 : ""}`}>
            <a href="https://eduquest.org.in">Home</a>
            {" › "}
            <a href={`https://eduquest.org.in/sat-coaching-classes-${citySlug}/`}>
              SAT Coaching {city}
            </a>
          </nav>

          {/* Badge */}
          <div className={`${styles.heroBadge} ${visible ? styles.in0 : ""}`}>
            {hero.tagline}
          </div>

          {/* Headline */}
          <h1 className={`${styles.h1} ${visible ? styles.in1 : ""}`}>
            {hero.headline.includes("—") ? (
              <>
                {hero.headline.split(/—\s*.+/)[0]}
                {"— "}
                <em>{hero.headline.match(/—\s*(.+)/)?.[1] ?? ""}</em>
              </>
            ) : (
              hero.headline
            )}
          </h1>

          {/* Sub copy */}
          <p className={`${styles.heroSub} ${visible ? styles.in2 : ""}`}>
            {hero.subheadline}
          </p>

          {/* Highlight box */}
          <div className={`${styles.heroHighlight} ${visible ? styles.in2 : ""}`}>
            <strong>What is the Digital SAT 2026?</strong>
            <br />
            A fully adaptive, computer-based test by College Board. 98 questions ·
            2 hrs 14 min · Scored 400–1600. Accepted by 4,000+ universities in
            USA, UK, Canada &amp; Australia.
          </div>

          {/* CTAs */}
          <div className={`${styles.heroBtns} ${visible ? styles.in3 : ""}`}>
            <a href="https://eduquest.org.in/contact-us/" className={styles.btnPrimary}>
              {hero.ctaLabel}
            </a>
            {/* <a href="#pattern" className={styles.btnSecondary}>
              View SAT Pattern 2026 →
            </a> */}
          </div>

          {/* Stats grid */}
          <div
            className={`${styles.heroStats} ${visible ? styles.in4 : ""}`}
            aria-label="Key statistics"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className={styles.hstat}>
                <div className={styles.hstatNum}>{stat.value}</div>
                <div className={styles.hstatLbl}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* ══════════ RIGHT COLUMN — Estimator Card ══════════ */}
        <div className={visible ? styles.in2 : ""}>
          <div className={styles.estimatorCard}>
            <div className={styles.estTitle}>🎯 SAT Score Estimator</div>
            <div className={styles.estSub}>Based on 2,299+ EduQuest students</div>

            {SCORE_BARS.map((b) => (
              <div key={b.label}>
                <div className={styles.scoreRow}>
                  <span className={styles.scoreLabel}>{b.label}</span>
                  <span
                    className={styles.scoreVal}
                    style={b.green ? { color: "#16a34a" } : undefined}
                  >
                    {b.val}
                  </span>
                </div>
                <div className={styles.scoreBarTrack}>
                  <div
                    className={styles.scoreBarFill}
                    style={{
                      width: b.width,
                      ...(b.green && {
                        background: "linear-gradient(90deg,#16a34a,#4ade80)",
                      }),
                    }}
                  />
                </div>
              </div>
            ))}

            <div className={styles.estTotal}>
              <div>
                <span>Reading &amp; Writing</span>
                <br />
                <strong className={styles.estTotalSub}>800</strong>
              </div>
              <div>
                <span>Mathematics</span>
                <br />
                <strong className={styles.estTotalSub}>800</strong>
              </div>
              <div>
                <span>Total SAT</span>
                <br />
                <strong className={styles.estTotalMain}>1600</strong>
              </div>
            </div>

            <div className={styles.estBadges}>
              <span className={`${styles.estBadge} ${styles.badgeGreen}`}>✓ Online Available</span>
              <span className={`${styles.estBadge} ${styles.badgeBlue}`}>✓ {city} Centre</span>
              <span className={`${styles.estBadge} ${styles.badgeGold}`}>✓ Hybrid Mode</span>
            </div>

            {/* <a href="https://eduquest.org.in/contact-us/" className={styles.cardCta}>
              Request a Callback
            </a> */}
          </div>
        </div>

      </div>
    </section>
  );
}