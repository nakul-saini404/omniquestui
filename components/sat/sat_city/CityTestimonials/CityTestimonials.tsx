"use client";
// components/sat_city/CityTestimonials/CityTestimonials.tsx

import { useState, useCallback } from "react";
import styles from "./CityTestimonials.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

export default function CityTestimonials({ data }: Props) {
  const { testimonials, city } = data;
  const [current, setCurrent] = useState(0);

  const CARDS_PER_SLIDE = 3;
  const total = testimonials.length;
  const maxIndex = Math.max(0, total - CARDS_PER_SLIDE);
  const dotCount = maxIndex + 1;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(maxIndex, c + 1)),
    [maxIndex]
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head">
          <div className="label">What Our Students Say</div>
          <h2>
            Real Results, <em>{city} Stories</em>
          </h2>
          <p>Real results from real {city} students. Every score verified.</p>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Prev arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous testimonials"
          >
            ‹
          </button>

          {/* Sliding track */}
          <div className={styles.trackOuter}>
            <div
              className={styles.track}
              style={{
                transform: `translateX(calc(-${current} * (100% / 3 + var(--gap) / 3)))`,
              }}
            >
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
                    <div className={styles.authorInfo}>
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

          {/* Next arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        {dotCount > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}