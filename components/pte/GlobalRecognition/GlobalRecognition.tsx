"use client";

import { useEffect, useRef } from "react";
import styles from "./GlobalRecognition.module.css";

/* ── Data ─────────────────────────────────────────────── */

const acceptCards = [
  {
    flag: "🇦🇺",
    country: "Australia",
    desc: "Approved for all Australian student and immigration visa applications via the Department of Home Affairs.",
    points: [
      "All Australian universities and TAFE colleges",
      "Skilled Worker & Partner visas",
      "Permanent Residency applications",
      "Professional registration bodies",
    ],
    delay: 0,
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    desc: "Accepted by IRCC as a valid English proficiency score, including under the fast-track Student Direct Stream.",
    points: [
      "Student Direct Stream (SDS) — score ≥ 60",
      "Express Entry — Federal Skilled Worker",
      "Provincial Nominee Programs",
      "Top Canadian universities",
    ],
    delay: 60,
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    desc: "Recognised by universities and the UKVI for student visa applications.",
    points: [
      "UK Visas & Immigration (UKVI)",
      "Top Russell Group universities",
      "Tier 4 Student visa route",
      "Post-study work visa applications",
    ],
    delay: 120,
  },
  {
    flag: "🇳🇿",
    country: "New Zealand",
    desc: "Accepted for all New Zealand student and immigration visa applications, equivalent to IELTS requirements.",
    points: [
      "All New Zealand universities",
      "Student visa applications",
      "Skilled Migrant Category",
      "Residency applications",
    ],
    delay: 180,
  },
  {
    flag: "🇺🇸",
    country: "United States",
    desc: "Accepted among the top 100 colleges and universities in the USA for graduate and undergraduate admissions.",
    points: [
      "Ivy League and Top-100 universities",
      "Graduate school applications",
      "Professional licence applications",
    ],
    delay: 240,
  },
  {
    flag: "🌐",
    country: "50+ Other Countries",
    desc: "PTE is widely recognised across Europe, Asia, Middle East and beyond for both education and professional purposes.",
    points: [
      "Ireland, Germany, Netherlands",
      "Singapore, Hong Kong, UAE",
      "3,300+ institutions globally",
      "Professional bodies worldwide",
    ],
    delay: 300,
  },
];

/* ── Component ─────────────────────────────────────────── */

export default function GlobalRecognition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.08 }
    );

    const els = sectionRef.current?.querySelectorAll(
      `.${styles.sectionHead}, .${styles.acceptCard}`
    );
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.acceptsSection} ref={sectionRef}>
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.sectionHead} ${styles.center}`}>
          <div className={styles.sectionLabel}>Global Recognition</div>
          <h2>Who Accepts PTE Academic?</h2>
          <p>
            PTE is accepted by over 3,300 institutions across more than 50
            countries for education, immigration and professional registration.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.acceptsGrid}>
          {acceptCards.map(({ flag, country, desc, points, delay }) => (
            <div
              key={country}
              className={styles.acceptCard}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className={styles.acceptFlag}>{flag}</div>
              <h3>{country}</h3>
              <p>{desc}</p>
              <ul className={styles.acceptList}>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note Banner */}
        <div className={styles.acceptsNote}>
          <strong>Important for Canada applicants:</strong> Only PTE Academic
          scores obtained at an authorised test centre (not home-based) are
          considered valid under Canada&apos;s SDS visa category. An overall
          score of <strong>60 or above</strong> is the minimum requirement.
        </div>

      </div>
    </section>
  );
}