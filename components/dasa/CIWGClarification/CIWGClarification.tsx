'use client';

import { useEffect, useRef } from 'react';
import styles from './CIWGClarification.module.css';

const checklistItems: string[] = [
  'Parent employed in UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, or Oman',
  'Student can have completed schooling in India (CBSE, ICSE, State Board)',
  'CIWG students at IIIT Hyderabad pay domestic tuition fees',
  'Apply via DASA portal just like other CIWG-eligible students',
];

export default function CIWGClarification() {
  const headRef = useRef<HTMLDivElement | null>(null);
  const questionRef = useRef<HTMLDivElement | null>(null);
  const answerRef = useRef<HTMLDivElement | null>(null);

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

    if (headRef.current) observer.observe(headRef.current);
    if (questionRef.current) observer.observe(questionRef.current);
    if (answerRef.current) observer.observe(answerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.ciwg} id="ciwg" aria-labelledby="ciwg-heading">
      <div className={styles.container}>

        {/* Section Head */}
        <div
          className={`${styles.sectionHead} ${styles.center} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>CIWG Clarification</div>
          <h2 id="ciwg-heading">
            Studied 11th &amp; 12th in India? You May Still Qualify Under CIWG
          </h2>
        </div>

        {/* Inner Grid */}
        <div className={styles.ciwgInner}>

          {/* Question Block */}
          <div
            className={`${styles.ciwgQ} ${styles.fadeUp}`}
            ref={questionRef}
          >
            <p>
              &ldquo;If a student has completed Class 11 &amp; 12{' '}
              <strong>in India</strong>, but their parent works in the Gulf —
              are they still eligible under{' '}
              <strong>CIWG quota</strong>?&rdquo;
            </p>
          </div>

          {/* Answer Block */}
          <div
            className={`${styles.ciwgAnswer} ${styles.fadeUp}`}
            style={{ transitionDelay: '0.15s' }}
            ref={answerRef}
          >
            <div className={styles.ciwgAnswerHead}>
              <span className={styles.ciwgYes}>YES ✅</span>
            </div>

            <p>
              Schooling location does <strong>not</strong> determine CIWG
              eligibility. What matters is the parent&apos;s employment status
              in a Gulf Cooperation Council (GCC) country and meeting the CIWG
              residency requirements.
            </p>

            <div className={styles.ciwgNote}>
              <strong>Key Rule:</strong> As long as the parent has been working
              in a Gulf country and meets CIWG residency requirements, the
              student is still considered under CIWG quota — regardless of
              where they completed Class 11 &amp; 12.
            </div>

            <div className={styles.ciwgChecklist}>
              {checklistItems.map((item) => (
                <div className={styles.ciwgCheck} key={item}>
                  <span className={styles.ciwgCheckIcon}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}