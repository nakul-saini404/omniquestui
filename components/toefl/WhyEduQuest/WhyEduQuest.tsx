"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyEduQuest.module.css";

const eqItems = [
  {
    icon: "🎯",
    title: "iBT-Focused Curriculum",
    body: "Every session is tailored to the internet-based TOEFL format — integrated tasks, academic vocabulary, and AI scoring strategy.",
  },
  {
    icon: "🗣️",
    title: "Speaking Response Templates",
    body: "Proven answer structures for all 4 speaking tasks that consistently achieve high scores with both human raters and e-rater AI.",
  },
  {
    icon: "✍️",
    title: "Integrated Writing Mastery",
    body: "We specifically train the unique TOEFL skill of synthesising listening + reading material into a single cohesive essay response.",
  },
  {
    icon: "📊",
    title: "Section-Wise Score Tracking",
    body: "Track your R / L / S / W sub-scores separately after every mock test, with a detailed gap-closure action plan each week.",
  },
  {
    icon: "🏛️",
    title: "University-Specific Coaching",
    body: "We align your target score to specific university cut-offs — so you know exactly what you're working toward, not a generic benchmark.",
  },
  {
    icon: "🔁",
    title: "Unlimited Mock Tests",
    body: "Full-length iBT simulations with authentic question types, timed conditions, and detailed AI-aligned score reports after every attempt.",
  },
];

export default function WhyEduQuest() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [leftRef.current, rightRef.current].filter(
      Boolean
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.whyEq} id="why-eq">
      <div className={styles.container}>
        <div className={styles.whyEqInner}>

          {/* ── Left: Image ── */}
          <div
            className={`${styles.whyEqImg} ${styles.revealLeft}`}
            ref={leftRef}
          >
            {/* Animated gold blob */}
            <div className={styles.whyEqImgBlob} aria-hidden="true" />

            <div className={styles.whyEqImgCard}>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80"
                alt="EduQuest TOEFL coaching"
                className={styles.whyEqImgPhoto}
              />
              {/* Dark gradient overlay */}
              <div className={styles.whyEqImgOverlay} aria-hidden="true" />

              {/* Floating score badge */}
              <div className={styles.eqBadge}>
                <div>
                  <div className={styles.eqBadgeNum}>100+</div>
                  <div className={styles.eqBadgeLbl}>
                    Students scored 100+ TOEFL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div
            className={`${styles.revealRight}`}
            ref={rightRef}
          >
            <div className={styles.secLabel}>Why EduQuest</div>

            <h2 className={styles.heading}>
              What Makes <em>EduQuest</em> Different for TOEFL?
            </h2>

            <p className={styles.intro}>
              Our TOEFL programme is built by coaches who have scored 110+
              themselves. We don't teach you to pass a test — we teach you to
              think in academic English.
            </p>

            <div className={styles.eqList}>
              {eqItems.map((item) => (
                <div key={item.title} className={styles.eqItem}>
                  <div className={styles.eqItemIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.eqItemTitle}>{item.title}</div>
                    <div className={styles.eqItemBody}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}