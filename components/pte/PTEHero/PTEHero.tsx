'use client';

import styles from './PTEHero.module.css';

const scoreBreakdown = [
  { label: 'Speaking',  pct: 82, val: 82 },
  { label: 'Writing',   pct: 79, val: 79 },
  { label: 'Reading',   pct: 85, val: 85 },
  { label: 'Listening', pct: 76, val: 76 },
];

const stats = [
  { num: '3,300+', lbl: 'Institutions accept PTE' },
  { num: '50+',    lbl: 'Countries worldwide'     },
  { num: '5 Days', lbl: 'Results turnaround'      },
];

export default function PTEHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Radial glow overlays */}
      <span className={styles.glowRight} aria-hidden="true" />
      <span className={styles.glowLeft}  aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.inner}>

          {/* ── Left column ── */}
          <div className={styles.left}>
            <div className={styles.eyebrow}>
              PTE Academic Coaching — EduQuest
            </div>

            <h1 id="hero-heading" className={styles.heading}>
              Score <em className={styles.accent}>High</em> on PTE.<br />
              Open Doors<br />
              Worldwide.
            </h1>

            <p className={styles.sub}>
              The Pearson Test of English Academic is your passport to universities
              and immigration in Australia, Canada, UK, USA &amp; New Zealand.
              EduQuest&apos;s expert coaching gets you there — faster.
            </p>

            {/* Stats row */}
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.lbl} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLbl}>{s.lbl}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={styles.btns}>
              <a
                href="https://eduquest.org.in/pte/"
                className={`${styles.btn} ${styles.btnGold}`}
              >
                Request a Free Demo
              </a>
              <a
                href="tel:+919958041888"
                className={`${styles.btn} ${styles.btnOutline}`}
              >
                Call +91-99580 41888
              </a>
            </div>
          </div>

          {/* ── Right column — Score card ── */}
          <div className={styles.card} role="complementary" aria-label="PTE score breakdown">
            <h2 className={styles.cardTitle}>PTE Score Breakdown</h2>

            <div className={styles.scoreList}>
              {scoreBreakdown.map((row) => (
                <div key={row.label} className={styles.scoreRow}>
                  <span className={styles.scoreLabel}>{row.label}</span>
                  <div className={styles.scoreBar} role="progressbar" aria-valuenow={row.val} aria-valuemin={0} aria-valuemax={90}>
                    <div
                      className={styles.scoreFill}
                      style={{ width: `${(row.pct / 90) * 100}%` }}
                    />
                  </div>
                  <span className={styles.scoreVal}>{row.val}</span>
                </div>
              ))}
            </div>

            <p className={styles.cardNote}>
              Score range: 10–90 per skill. Overall score is an average across all
              four communicative skills. SDS Canada requires a minimum overall of{' '}
              <strong>60</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}