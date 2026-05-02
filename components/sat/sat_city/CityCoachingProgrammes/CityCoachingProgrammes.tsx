"use client";
// components/sat_city/CityCoachingProgrammes/CityCoachingProgrammes.tsx
// Layout: 70% content left | 30% animated cycling mode words right
// No cards — clean typographic section with feature list and CTAs

import { useEffect, useRef, useState } from "react";
import type { SATCityData } from "@/constants/satCities";
import styles from "./CityCoachingProgrammes.module.css";

interface Props {
  data: SATCityData;
}

const MODES = ["Online", "Offline", "Hybrid"] as const;

const FEATURES = [
  { label: "Minimum Hours",       value: "100+ hrs" },
  { label: "Doubt Clearing",      value: "Unlimited" },
  { label: "Batch Size",          value: "Max 12" },
  { label: "Adaptive Mocks",      value: "6–15 tests" },
  { label: "Study Materials",     value: "Included" },
  { label: "Diagnostic Test",     value: "Free" },
];

export default function CityCoachingProgrammes({ data }: Props) {
  const { city, slug } = data;

  // ── Cycling word state ───────────────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const [exiting, setExiting]         = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function cycle() {
      // 1. Trigger exit animation
      setExiting(true);
      timerRef.current = setTimeout(() => {
        // 2. Advance index & reset exit
        setActiveIndex((prev) => (prev + 1) % MODES.length);
        setExiting(false);
        // 3. Schedule next cycle
        timerRef.current = setTimeout(cycle, 2800);
      }, 400); // matches CSS exit duration
    }

    timerRef.current = setTimeout(cycle, 2800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section id="courses" className={styles.section}>
      <div className={styles.inner}>

        {/* ══════════════════════════════════════
            LEFT — 70% content column
        ══════════════════════════════════════ */}
        <div className={styles.left}>

          {/* Label */}
          <p className={styles.label}>Programmes</p>

          {/* Heading */}
          <h2 className={styles.heading}>
            SAT Coaching&nbsp;
            <em>Programmes</em>
            <br />
            in&nbsp;{city}
          </h2>

          {/* Description */}
          <p className={styles.desc}>
            Every student gets a personalised roadmap built from a full
            Bluebook diagnostic. Choose the format that fits your schedule
            — all formats use the same expert faculty and adaptive mock
            infrastructure.
          </p>

          {/* Feature grid */}
          {/* <dl className={styles.featureGrid}>
            {FEATURES.map(({ label, value }) => (
              <div key={label} className={styles.featureItem}>
                <dt className={styles.featureValue}>{value}</dt>
                <dd className={styles.featureLabel}>{label}</dd>
              </div>
            ))}
          </dl> */}

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a
              href="https://test.eduquest.org.in/sat-score-calculator/"
              className={styles.btnPrimary}
            >
              Book Free Diagnostic
            </a>
            <a
              href="https://eduquest.org.in/contact-us/"
              className={styles.btnOutline}
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════
            RIGHT — 30% animated word column
        ══════════════════════════════════════ */}
        <div className={styles.right} aria-hidden="true">

          {/* Static stack — all three words rendered, active one highlighted */}
          <div className={styles.wordStack}>
            {MODES.map((mode, i) => (
              <span
                key={mode}
                className={[
                  styles.word,
                  i === activeIndex && !exiting  ? styles.wordActive  : "",
                  i === activeIndex &&  exiting  ? styles.wordExiting : "",
                  i !== activeIndex              ? styles.wordIdle    : "",
                ].filter(Boolean).join(" ")}
              >
                {mode}
              </span>
            ))}
          </div>

          {/* Decorative vertical rule */}
          <div className={styles.vRule} />

          {/* Decorative counter */}
          <p className={styles.counter}>
            {String(activeIndex + 1).padStart(2, "0")}&nbsp;/&nbsp;
            {String(MODES.length).padStart(2, "0")}
          </p>
        </div>

      </div>
    </section>
  );
}