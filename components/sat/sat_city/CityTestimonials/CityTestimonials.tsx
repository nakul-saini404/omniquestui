"use client";
// components/sat_city/CityTestimonials/CityTestimonials.tsx

import styles from "./CityTestimonials.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

export default function CityTestimonials({ data }: Props) {
  const { testimonials, city } = data;

  return (
    <section className={styles.section}>
      <div className="container" >
        <div className="section-head">
          <div className="label">What Our Students Say</div>
          <h2>
            Real Results, <em>{city} Stories</em>
          </h2>
          <p>
            Real results from real {city} students. Every score verified.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.score}>
                    SAT {t.score} · {t.school}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}