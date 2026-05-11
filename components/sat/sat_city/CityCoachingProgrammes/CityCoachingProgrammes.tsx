"use client";
// components/sat_city/CityCoachingProgrammes/CityCoachingProgrammes.tsx

import type { SATCityData } from "@/constants/satCities";
import styles from "./CityCoachingProgrammes.module.css";

interface Props {
  data: SATCityData;
}

export default function CityCoachingProgrammes({ data }: Props) {
  const { city } = data;

  return (
    <section id="courses" className={styles.section}>
      <div className={styles.inner}>

        {/* ══════════════════════════════════════
            LEFT — 70% content column
        ══════════════════════════════════════ */}
        <div className={styles.left}>

          <p className={styles.label}>Programmes</p>

          <h2 className={styles.heading}>
            SAT Coaching&nbsp;
            <em>Programmes</em>
            <br />
            in&nbsp;{city}
          </h2>

          <p className={styles.desc}>
            Every student gets a personalised roadmap built from a full
            Bluebook diagnostic. Choose the format that fits your schedule
            — all formats use the same expert faculty and adaptive mock
            infrastructure.
          </p>

          <div className={styles.ctaRow}>
            <a
              href="https://test.eduquest.org.in/sat-score-calculator/"
              className={styles.btnPrimary}
            >
              Book Free Diagnostic
            </a>
            <a
              href="/contact-us"
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
          <div className={styles.vRule} />

          <div className={styles.wordStack}>
            <span className={styles.word}>Online</span>
          </div>

          {/* <p className={styles.counter}>01&nbsp;/&nbsp;01</p> */}
        </div>

      </div>
    </section>
  );
}