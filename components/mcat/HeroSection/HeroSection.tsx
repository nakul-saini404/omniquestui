'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const heroUlRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroUlRef.current) {
        heroUlRef.current.classList.add(styles.visibleLine);
      }
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Background decorations */}
      <div className={styles.heroGeo} />
      <div className={styles.heroGridLines} />
      <div className={styles.heroOrnament} />

      <div className={styles.heroInner}>

        {/* ── Left: Content ── */}
        <div className={styles.heroContent}>

          {/* Badge */}
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            India&apos;s Premier MCAT Coaching
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine}>
              Conquer the <em>MCAT.</em>
            </span>
            <span className={styles.heroLine}>Secure Your</span>
            <span className={styles.heroLine}>
              <span className={styles.underlineGold} ref={heroUlRef}>
                Medical School Future.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSub}>
            Precision-engineered MCAT preparation from EduQuest — combining
            expert mentorship, adaptive science-focused practice, and proven
            strategy to push your score into the{' '}
            <strong className={styles.heroSubAccent}>520+</strong> elite tier.
          </p>

          {/* CTAs */}
          <div className={styles.heroActions}>
            <a href="https://test.eduquest.org.in/mcat-score-calculator/" className={styles.btnPrimary}>
              Track Your MCAT Score
            </a>
            <a href="#exam-structure" className={styles.btnOutline}>
              Explore Programme
            </a>
          </div>

          {/* Stats */}
          <div className={styles.heroStats}>
            <div>
              <div className={styles.heroStatNum}>96%</div>
              <div className={styles.heroStatLabel}>Score Improvement Rate</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>520+</div>
              <div className={styles.heroStatLabel}>Avg. Target Score</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>3,800+</div>
              <div className={styles.heroStatLabel}>Students Enrolled</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>+12.4</div>
              <div className={styles.heroStatLabel}>Avg. Score Gain</div>
            </div>
          </div>
        </div>

        {/* ── Right: Score Panel ── */}
        <div className={styles.heroPanel}>
          <div className={styles.heroPanelTitle}>Score Progress Tracker</div>
          <div className={styles.heroPanelSub}>Live dashboard preview</div>

          {/* Score Ring */}
          <div className={styles.scoreRingWrap}>
            <div className={styles.scoreRing}>
              {/* className on SVG — uses scoreRingSvg to apply rotate(-90deg) */}
              <svg
                className={styles.scoreRingSvg}
                width="130"
                height="130"
                viewBox="0 0 130 130"
              >
                <circle
                  className={styles.scoreRingBg}
                  cx="65"
                  cy="65"
                  r="52"
                  strokeWidth="8"
                />
                <circle
                  className={styles.scoreRingFill}
                  cx="65"
                  cy="65"
                  r="52"
                  strokeWidth="8"
                />
              </svg>
              <div className={styles.scoreRingText}>
                <div className={styles.scoreRingNum}>522</div>
                <div className={styles.scoreRingCap}>Current</div>
              </div>
            </div>
          </div>

          {/* Panel Metrics */}
          <div className={styles.panelMetrics}>
            <div className={styles.panelMetric}>
              <div className={styles.panelMetricVal}>+14</div>
              <div className={styles.panelMetricLbl}>Score Gain</div>
            </div>
            <div className={styles.panelMetric}>
              <div className={styles.panelMetricVal}>10wks</div>
              <div className={styles.panelMetricLbl}>Duration</div>
            </div>
            <div className={styles.panelMetric}>
              <div className={styles.panelMetricVal}>97%</div>
              <div className={styles.panelMetricLbl}>Accuracy</div>
            </div>
            <div className={styles.panelMetric}>
              <div className={styles.panelMetricVal}>480+</div>
              <div className={styles.panelMetricLbl}>Drills Done</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}