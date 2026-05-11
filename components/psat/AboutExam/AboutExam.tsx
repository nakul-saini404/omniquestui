'use client';

import { useEffect, useRef } from 'react';
import styles from './AboutExam.module.css';

/* ─── DATA ────────────────────────────────────────────── */
interface PsatType {
  name: string;
  grade: string;
  gradeGold?: boolean;
  desc: string;
  descStrong?: string;
  scoreRange: string;
  scoreTeal?: boolean;
  cardGold?: boolean;
}

const psatTypes: PsatType[] = [
  {
    name: 'PSAT 8/9',
    grade: 'Class 8–9',
    desc: 'Designed for Class 8 and 9 students. An introductory benchmark that identifies strengths and gaps early, giving students a 3–4 year head start on their SAT journey.',
    scoreRange: 'Score Range: 240–1440 \u00a0|\u00a0 Duration: 2h 25m',
    scoreTeal: true,
  },
  {
    name: 'PSAT 10',
    grade: 'Class 10',
    desc: 'Taken in Class 10. Scored the same as the PSAT/NMSQT but not eligible for National Merit. Serves as a critical mid-point check before Class 11.',
    scoreRange: 'Score Range: 320–1520 \u00a0|\u00a0 Duration: 2h 45m',
    scoreTeal: true,
  },
  {
    name: 'PSAT/NMSQT',
    grade: 'Class 11 ⭐',
    gradeGold: true,
    desc: 'The most important version. Taken in Class 11. Scores determine National Merit Scholarship eligibility. ',
    descStrong: 'This is the version that can win scholarships',
    scoreRange: 'Score Range: 320–1520 \u00a0|\u00a0 Duration: 2h 45m',
    cardGold: true,
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
export default function AboutExam() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [textRef.current, cardsRef.current].filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.whatGrid}>

          {/* ── Left: text ── */}
          <div ref={textRef} className={styles.whatText}>
            <div className={styles.sectionBadge}>About the Exam</div>

            <h2 className={styles.heading}>
              What is the{' '}
              <span className={styles.headingAccent}>PSAT?</span>
            </h2>

            <p className={styles.bodyText}>
              The PSAT (Preliminary SAT) is a standardised test administered by the
              College Board that serves as practice for the SAT and qualifies students
              for the prestigious{' '}
              <strong className={styles.highlightGold}>
                National Merit Scholarship Program (NMSQT)
              </strong>
              .
            </p>

            <p className={styles.bodyText}>
              Unlike a simple practice test, the PSAT is a strategic tool — students
              who score in the top percentile can qualify for National Merit
              recognition, unlocking{' '}
              <strong className={styles.highlightTeal}>
                life-changing scholarships worth thousands of dollars
              </strong>
              .
            </p>

            <div className={styles.highlightBox}>
              <div className={styles.hlTitle}>
                🏅 National Merit Scholarship Connection
              </div>
              <p className={styles.hlBody}>
                The PSAT 10 and PSAT/NMSQT scores in Class 11 are used by the
                National Merit Scholarship Corporation. Semifinalist cutoffs vary
                by state — typically 1460–1520. EduQuest has helped students
                achieve Commended and Semifinalist recognition.
              </p>
            </div>
          </div>

          {/* ── Right: PSAT type cards ── */}
          <div ref={cardsRef} className={styles.psatTypes}>
            {psatTypes.map((type) => (
              <div
                key={type.name}
                className={[
                  styles.ptypeCard,
                  type.cardGold ? styles.ptypeCardGold : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <div className={styles.ptypeHeader}>
                  <div className={styles.ptypeName}>{type.name}</div>
                  <div
                    className={[
                      styles.ptypeGrade,
                      type.gradeGold ? styles.ptypeGradeGold : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {type.grade}
                  </div>
                </div>

                <div className={styles.ptypeDesc}>
                  {type.desc}
                  {type.descStrong && (
                    <strong className={styles.ptypeDescStrong}>
                      {type.descStrong}
                    </strong>
                  )}
                  {type.descStrong && ' worth $2,500 to full rides.'}
                </div>

                <div
                  className={[
                    styles.ptypeScore,
                    type.scoreTeal ? styles.ptypeScoreTeal : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {type.scoreRange}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}