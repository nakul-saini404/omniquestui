// components/sat_city/extras/CityRankSection.tsx
"use client";
import styles from "./extras.module.css";
import type { SATCityData } from "@/constants/satCities";

export default function CityRankSection({ data }: { data: SATCityData }) {
  const rows = [
    { city: "Gurgaon", score: "1555", improvement: "+223" },
    { city: "Delhi NCR", score: "1550", improvement: "+218" },
    { city: "Bangalore", score: "1540", improvement: "+210" },
    { city: "Jaipur", score: "1540", improvement: "+215" },
    { city: "Mumbai", score: "1535", improvement: "+205" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head reveal">
          <p className="label">City Performance</p>
          <h2>How <em>{data.city}</em> Compares</h2>
          <p>Average SAT scores across EduQuest's top city batches (2025).</p>
        </div>
        <div className={styles.rankTable}>
          {rows.map((row, i) => (
            <div
              key={row.city}
              className={`${styles.rankRow} ${row.city === data.city ? styles.rankRowActive : ""}`}
            >
              <span className={styles.rankNum}>{i + 1}</span>
              <span className={styles.rankCity}>{row.city}</span>
              <span className={styles.rankScore}>{row.score}</span>
              <span className={styles.rankImprovement}>{row.improvement}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}