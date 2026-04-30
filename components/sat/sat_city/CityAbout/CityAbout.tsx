"use client";
// components/sat_city/CityAbout/CityAbout.tsx

import styles from "./CityAbout.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

export default function CityAbout({ data }: Props) {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className="label">About EduQuest in {data.city}</p>
            <h2 className={styles.heading}>
              Why {data.city} Students Choose <em>EduQuest</em>
            </h2>
            <p className={styles.localContext}>{data.localContext}</p>
          </div>

          <div className={styles.right}>
            {data.about.paragraphs.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}

            <div className={styles.trust}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Bluebook-identical mock infrastructure</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Adaptive 2-module test engine</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>Senior faculty with 15+ years SAT expertise</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>US admissions strategy alignment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}