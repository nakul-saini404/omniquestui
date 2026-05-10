"use client";

import { useEffect, useRef } from "react";
import styles from "./AboutToefl.module.css";

const features = [
  {
    icon: "🌍",
    title: "Accepted & Preferred Worldwide",
    body: "Over 11,500 universities and institutions in 180+ countries recognise TOEFL iBT, including every Ivy League university in the USA.",
  },
  {
    icon: "🖥️",
    title: "Test Your Way",
    body: "Take TOEFL at a certified test centre or from the privacy of your home with the TOEFL iBT Home Edition — same test, same score validity.",
  },
  {
    icon: "📊",
    title: "Score Out of 120",
    body: "Each of the four sections — Reading, Listening, Speaking, Writing — is scored out of 30, totalling a maximum score of 120.",
  },
];

export default function AboutToefl() {
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
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.aboutInner}>

          {/* ── Left: Text ── */}
          <div className={styles.revealLeft} ref={leftRef}>
            <div className={styles.secLabel}>About TOEFL iBT</div>

            <h2 className={styles.aboutH2}>
              What Is <em>TOEFL iBT</em>?
            </h2>

            <p className={styles.aboutP}>
              The TOEFL iBT (Internet-Based Test) is the world's most accepted
              English-language test for study, work, and immigration. Administered
              by ETS, it is preferred by more universities and institutions
              globally than any other English proficiency exam.
            </p>
            <p className={styles.aboutP}>
              Unlike tests with human examiners, TOEFL uses a combination of
              certified human raters and AI scoring — giving you objective,
              bias-free evaluation of your academic English skills.
            </p>

            <div className={styles.aboutFeatures}>
              {features.map((f) => (
                <div key={f.title} className={styles.aboutFeat}>
                  <div className={styles.aboutFeatIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.aboutFeatTitle}>{f.title}</div>
                    <div className={styles.aboutFeatBody}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className={`${styles.aboutImgWrap} ${styles.revealRight}`} ref={rightRef}>
            {/* Floating blob */}
            <div className={styles.aboutImgBlob} aria-hidden="true" />

            <div className={styles.aboutImgCard}>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80"
                alt="TOEFL student studying"
                className={styles.aboutImg}
              />
              {/* Dark gradient overlay */}
              <div className={styles.aboutImgOverlay} aria-hidden="true" />

              {/* Floating badge */}
              <div className={styles.aboutImgBadge}>
                <div className={styles.aboutImgBadgeIcon}>🏆</div>
                <div>
                  <span className={styles.aboutImgBadgeNum}>
                    World's Most Accepted
                  </span>
                  <span className={styles.aboutImgBadgeSub}>
                    English proficiency test globally
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}