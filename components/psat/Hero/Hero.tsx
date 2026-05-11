'use client';

import styles from './Hero.module.css';

const stats = [
  { num: '1500+', label: 'PSAT Students' },
  { num: '92%',   label: 'Score Improvement' },
  { num: '$8M+',  label: 'Scholarships Won' },
  { num: '30+',   label: 'Years Experience' },
];

const scoreBands = [
  {
    emoji: '📖',
    label: 'Reading & Writing',
    score: '720',
    scoreClass: styles.bandScoreTeal,
    barWidth: '95%',
    barClass: styles.bandBarTeal,
  },
  {
    emoji: '🔢',
    label: 'Math',
    score: '760',
    scoreClass: styles.bandScoreGold,
    barWidth: '100%',
    barClass: styles.bandBarGold,
  },
];

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* Dot-grid background */}
      <div className={styles.heroGrid} aria-hidden="true" />

      <div className={styles.heroInner}>
        {/* ── Left column ── */}
        <div>
          {/* Badge */}
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            PSAT 8/9 · PSAT 10 · PSAT/NMSQT · 2026
          </div>

          {/* Heading */}
          <h1 className={styles.heroHeading}>
            Master the{' '}
            <span className={styles.heroHeadingAccent}>PSAT</span>
            <br />
            Before the SAT
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSub}>
            India's most specialised PSAT coaching. Integrated 4-year and
            5-year pathways for Class 8–12 students. Qualify for National Merit
            Scholarships. Build the SAT advantage early.
          </p>

          {/* CTA buttons */}
          <div className={styles.heroActions}>
            <a href="#enroll" className={styles.btnPrimary}>
              📅 Book Free Demo Class
            </a>
            <a href="https://test.eduquest.org.in/psat-score-calculator/" className={styles.btnSecondary}>
              Calculate PSAT Score
            </a>
          </div>

          {/* Stats */}
          <div className={styles.heroStats}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Score card ── */}
        <div className={styles.heroCard}>
          {/* SVG ring */}
          <div className={styles.scoreRingWrap}>
            <svg width="160" height="160" viewBox="0 0 160 160" aria-label="PSAT score 1480 out of 1520">
              <circle
                cx="80" cy="80" r="60"
                fill="none"
                stroke="rgba(255,255,255,.06)"
                strokeWidth="10"
              />
              <circle
                cx="80" cy="80" r="60"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="330 377"
                strokeDashoffset="94"
                style={{ filter: 'drop-shadow(0 0 12px rgba(0,201,177,.5))' }}
              />
              <defs>
                <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"   stopColor="#00C9B1" />
                  <stop offset="100%" stopColor="#2355C8" />
                </linearGradient>
              </defs>
              <text
                x="80" y="72"
                textAnchor="middle"
                fill="#00C9B1"
                fontFamily="Syne, sans-serif"
                fontSize="26"
                fontWeight="900"
              >
                1480
              </text>
              <text
                x="80" y="90"
                textAnchor="middle"
                fill="rgba(241,245,255,.4)"
                fontFamily="DM Sans, sans-serif"
                fontSize="11"
              >
                /1520
              </text>
              <text
                x="80" y="108"
                textAnchor="middle"
                fill="rgba(241,245,255,.3)"
                fontFamily="DM Sans, sans-serif"
                fontSize="10"
              >
                PSAT Score
              </text>
            </svg>
          </div>

          {/* Card title */}
          <div className={styles.cardTitle}>
            Typical EduQuest PSAT Improvement
          </div>

          {/* Score bands */}
          <div className={styles.scoreBands}>
            {scoreBands.map((band) => (
              <div key={band.label} className={styles.scoreBand}>
                <span className={styles.bandEmoji}>{band.emoji}</span>
                <span className={styles.bandLabel}>{band.label}</span>
                <span className={`${styles.bandScore} ${band.scoreClass}`}>
                  {band.score}
                </span>
                <div className={styles.bandBarWrap}>
                  <div
                    className={`${styles.bandBar} ${band.barClass}`}
                    style={{ width: band.barWidth }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className={styles.cardNote}>
            🏆 Average score improvement: <strong>+180 points</strong>
            <br />
            across our PSAT student cohort 2025
          </div>
        </div>
      </div>
    </div>
  );
}