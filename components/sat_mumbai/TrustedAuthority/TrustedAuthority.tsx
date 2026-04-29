import React, { useEffect, useRef } from "react";
import styles from "./TrustedAuthority.module.css";

const outcomes = [
  { num: "2,299+", label: "Student Profiles Designed" },
  { num: "1,839+", label: "Undergraduate Admits" },
  { num: "1540",   label: "Highest SAT Score (India)" },
];

const testimonials = [
  {
    initial: "S",
    name: "Seher Taneja",
    score: "SAT 1510 · New Delhi",
    text: "I scored 1510 in my SAT. EduQuest was a huge part of my journey — constant support, identifying weak spots, and a consistent benchmarking approach.",
  },
  {
    initial: "H",
    name: "Hardik",
    score: "SAT 1520 · Gurgaon",
    text: "First attempt, scored 1520. EduQuest's digital SAT coaching and direction — especially Rupali ma'am — made all the difference. Highly recommended.",
  },
  {
    initial: "A",
    name: "Aaisha Sawlani",
    score: "SAT 1450 · Nigeria",
    text: "Scored 1450 on my SAT from Nigeria. EduQuest understood expectations and ensured I was thorough in every detail. Their framework is exemplary.",
  },
];

const TrustedAuthority: React.FC = () => {
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
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.sectionLabel}>Trusted Authority</div>
          <h2 className={styles.sectionTitle}>
            Trusted by Students Scoring{" "}
            <em className={styles.em}>1500–1600+</em>
          </h2>
          <p className={styles.sectionSub}>
            Real proof. Real students. Real outcomes — from India, Nigeria, UAE,
            and beyond.
          </p>
        </div>

        {/* ── Outcomes bar ── */}
        <div className={`${styles.outcomesBar} ${styles.reveal}`}>
          {outcomes.map((o) => (
            <div className={styles.outItem} key={o.label}>
              <div className={styles.outNum}>{o.num}</div>
              <div className={styles.outLabel}>{o.label}</div>
            </div>
          ))}
        </div>

        {/* ── Bottom: testimonials (3-col) + student photo ── */}
        <div className={styles.bottomGrid}>

          {/* Testimonial cards */}
          <div className={styles.testiGrid}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`${styles.testiCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiText}>{t.text}</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>{t.initial}</div>
                  <div>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiScore}>{t.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student photo */}
          <div className={`${styles.photoWrap} ${styles.reveal}`}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
              alt="EduQuest students celebrating SAT success"
              className={styles.photo}
            />
            <div className={styles.photoOverlay}>
              <span className={styles.photoBadge}>1,839+ Admits</span>
              <p className={styles.photoCaption}>
                Trusted by students across India, UAE &amp; beyond
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedAuthority;