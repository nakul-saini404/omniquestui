"use client";
// components/sat_city/CityHero/CityHero.tsx

import { useEffect, useState } from "react";
import styles from "./CityHero.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

const TRUST_PILLS = [
  "✓ Digital SAT 2026",
  "✓ Adaptive Model",
  "✓ 100+ Hours Min",
  "✓ Unlimited Doubt Clearing",
];

export default function CityHero({ data }: Props) {
  const { hero, city } = data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero} aria-label={`SAT Coaching in ${city} Hero`}>
      {/* Decorative background elements */}
      <div className={styles.orbA} aria-hidden="true" />
      <div className={styles.orbB} aria-hidden="true" />
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* ── Badge ── */}
        <div className={`${styles.badge} ${visible ? styles.in0 : ""}`}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {hero.tagline}
        </div>

        {/* ── Headline ── */}
        <h1 className={`${styles.headline} ${visible ? styles.in1 : ""}`}>
          {hero.headline.includes("—") ? (
            <>
              {hero.headline.split(/—\s*.+/)[0]}
              {"— "}
              <em className={styles.headlineEm}>
                {hero.headline.match(/—\s*(.+)/)?.[1] ?? ""}
              </em>
            </>
          ) : (
            hero.headline
          )}
        </h1>

        {/* ── Sub copy ── */}
        <p className={`${styles.sub} ${visible ? styles.in2 : ""}`}>
          {hero.subheadline}
        </p>

        {/* ── Trust pills ── */}
        <div className={`${styles.pills} ${visible ? styles.in2 : ""}`}
             style={{ animationDelay: "0.32s" }}>
          {TRUST_PILLS.map((pill) => (
            <span key={pill} className={styles.pill}>{pill}</span>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className={`${styles.actions} ${visible ? styles.in3 : ""}`}>
          <a href="#contact" className="btn-primary">
            {hero.ctaLabel} →
          </a>
          <a href="#programmes" className="btn-outline">
            View Programmes
          </a>
        </div>

        {/* ── Stats bar ── */}
        <div
          className={`${styles.statsBar} ${visible ? styles.in4 : ""}`}
          aria-label="Key statistics"
        >
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={styles.statCell}
              style={{ animationDelay: `${0.55 + i * 0.07}s` }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Watermark city name — vertical, bottom-right */}
      <span className={styles.cityWatermark} aria-hidden="true">
        {city}
      </span>
    </section>
  );
}