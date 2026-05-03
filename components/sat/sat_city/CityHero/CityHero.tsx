"use client";
// components/sat/sat_city/CityHero/CityHero.tsx

import { useEffect, useRef, useState } from "react";
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

/* ── Counter hook ───────────────────────────────────────────────────
   Parses a string like "10K+", "97%", "$8M+", "4,000+"
   Animates the numeric part from 0 → target over `duration` ms.
   Non-numeric strings are returned as-is immediately.
──────────────────────────────────────────────────────────────────── */
function useCountUp(rawValue: string, active: boolean, duration = 1400) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    // Extract: prefix (e.g. "$"), numeric part, suffix (e.g. "K+", "%", "M+")
    const match = rawValue.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplay(rawValue);
      return;
    }

    const prefix  = match[1];
    const numStr  = match[2].replace(/,/g, "");
    const suffix  = match[3];
    const target  = parseFloat(numStr);
    const hasComma = match[2].includes(",");
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased   = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      const formatted = hasComma
        ? Math.round(current).toLocaleString()
        : current.toFixed(decimals);

      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, rawValue, duration]);

  return display;
}

/* ── Single animated stat tile ───────────────────────────────────── */
function AnimatedStat({
  value,
  label,
  active,
  delay,
}: {
  value: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const displayed = useCountUp(value, started);

  return (
    <div className={styles.hstat}>
      <div className={styles.hstatNum}>{displayed}</div>
      <div className={styles.hstatLbl}>{label}</div>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────────── */
export default function CityHero({ data }: Props) {
  const { hero, city } = data;
  const [visible,      setVisible]      = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [statsActive,  setStatsActive]  = useState(false);

  const cardRef  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  /* hero fade-in */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* bar animation — fires once when the estimator card enters the viewport */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setBarsAnimated(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* counter animation — fires once when the stats grid enters the viewport */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStatsActive(true); observer.disconnect(); }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} aria-label={`SAT Coaching in ${city} Hero`}>

      <div className={styles.heroBg} aria-hidden="true" />

      <div className={styles.heroInner}>

        {/* ══════════ LEFT COLUMN ══════════ */}
        <div>

          <div className={`${styles.heroBadge} ${visible ? styles.in0 : ""}`}>
            {hero.tagline}
          </div>

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

          <p className={`${styles.heroSub} ${visible ? styles.in2 : ""}`}>
            {hero.subheadline}
          </p>

          <div className={`${styles.heroHighlight} ${visible ? styles.in2 : ""}`}>
            <strong>What is the Digital SAT 2026?</strong>
            <br />
            A fully adaptive, computer-based test by College Board. 98 questions ·
            2 hrs 14 min · Scored 400–1600. Accepted by 4,000+ universities in
            USA, UK, Canada &amp; Australia.
          </div>

          <div className={`${styles.heroBtns} ${visible ? styles.in3 : ""}`}>
            <a href="https://test.eduquest.org.in/sat-score-calculator/" className={styles.btnPrimary}>
              {hero.ctaLabel}
            </a>
          </div>

          {/* Stats grid — attach ref so IntersectionObserver can watch it */}
          <div
            ref={statsRef}
            className={`${styles.heroStats} ${visible ? styles.in4 : ""}`}
            aria-label="Key statistics"
          >
            {hero.stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                active={statsActive}
                delay={i * 120}          /* each tile starts 120 ms after the previous */
              />
            ))}
          </div>

        </div>

        {/* ══════════ RIGHT COLUMN — Estimator Card ══════════ */}
        <div className={visible ? styles.in2 : ""}>
          <div className={styles.estimatorCard} ref={cardRef}>
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
                      width: barsAnimated ? b.width : "0%",
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

            <a href="/contact-us" className={styles.cardCta}>
              Check Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}