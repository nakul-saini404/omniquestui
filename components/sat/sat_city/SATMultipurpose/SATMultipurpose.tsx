"use client";
// components/sat_city/SATMultipurpose/SATMultipurpose.tsx

import { useEffect, useRef, useState } from "react";
import styles from "./SATMultipurpose.module.css";

const PURPOSES = [
  {
    tag: "Where SAT is mandatory",
    headline: "Your gateway to admission",
    body: "In the USA, Singapore, and select universities across the Middle East, SAT is non-negotiable. No score — no application. Your result is the very first filter universities run on your profile.",
    highlight: "No SAT = No application",
    highlightType: "red" as const,
    stat: "1,500+",
    statLabel: "Universities require SAT for admission",
  },
  {
    tag: "Where SAT is optional",
    headline: "Your shortcut to scholarships",
    body: "In the UK, Canada, Australia and Europe, SAT isn't required for admission — but a strong score unlocks merit scholarships worth lakhs. Universities reward students who go the extra mile.",
    highlight: "Strong SAT → More scholarship money",
    highlightType: "green" as const,
    stat: "$500M+",
    statLabel: "In scholarships awarded to SAT scorers globally",
  },
];

export default function SATMultipurpose() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const scheduleCycle = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setExiting(true);
      timerRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % PURPOSES.length);
        setExiting(false);
        scheduleCycle();
      }, 400);
    }, 5000);
  };

  useEffect(() => {
    scheduleCycle();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDotClick = (i: number) => {
    clearTimer();
    setExiting(true);
    timerRef.current = setTimeout(() => {
      setActiveIndex(i);
      setExiting(false);
      scheduleCycle();
    }, 400);
  };

  const active = PURPOSES[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── LEFT — headline, description, dots, CTAs ── */}
        <div className={styles.left}>

          <p className={styles.label}>Why SAT?</p>

          <h2 className={styles.heading}>
            SAT is a&nbsp;<em>multipurpose</em>
            <br />exam — always
            <br />worth it
          </h2>

          <p className={styles.desc}>
            Whether a country makes SAT mandatory or not, the exam works for
            you. It either opens the door to admission or adds thousands in
            scholarship money to your profile. There is no scenario where a
            great SAT score hurts you.
          </p>

          {/* Dot indicators */}
          <div className={styles.dots}>
            {PURPOSES.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                onClick={() => handleDotClick(i)}
                aria-label={`View purpose ${i + 1}`}
              />
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a
              href="https://test.eduquest.org.in/sat-score-calculator/"
              className={styles.btnPrimary}
            >
              Check my SAT score target
            </a>
            <a
              href="https://eduquest.org.in/contact-us/"
              className={styles.btnOutline}
            >
              Talk to a counsellor
            </a>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── RIGHT — animated purpose card ── */}
        <div className={styles.right}>
          <div
            className={[
              styles.purposeCard,
              active.highlightType === "green" ? styles.cardGreen : styles.cardRed,
              exiting ? styles.cardExit : styles.cardEnter,
            ].join(" ")}
          >
            <span className={styles.cardTag}>{active.tag}</span>
            <h3 className={styles.cardHeadline}>{active.headline}</h3>
            <p className={styles.cardBody}>{active.body}</p>
            <div
              className={[
                styles.cardHighlight,
                active.highlightType === "green"
                  ? styles.highlightGreen
                  : styles.highlightRed,
              ].join(" ")}
            >
              {active.highlight}
            </div>
            <div className={styles.cardStat}>
              <span className={styles.statNum}>{active.stat}</span>
              <span className={styles.statLabel}>{active.statLabel}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}