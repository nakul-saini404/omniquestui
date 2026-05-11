'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyStudentsFail.module.css';

interface FailReason {
  number: string;
  icon: string;
  title: string;
  description: string;
  fix: string;
  transitionDelay: string;
}

const reasons: FailReason[] = [
  {
    number: '01',
    icon: '📅',
    title: 'Missing the Score Deadline',
    description:
      'DASA requires SAT scores to be received by IIIT Hyderabad by 31 May — not just taken. Students who sit the SAT in May often don\'t realise College Board takes 2–3 weeks to dispatch official reports.',
    fix: 'Plan your last SAT attempt no later than early May. Use CB code 6997 immediately after your test.',
    transitionDelay: '0s',
  },
  {
    number: '02',
    icon: '🎯',
    title: 'Treating SAT Like Any Entrance Exam',
    description:
      'Students trained for JEE or NEET often over-rotate on advanced problem-solving and neglect the ERW section entirely. DASA ranks on a combined 1600 — a 600 ERW with a 800 Math is still only 1400.',
    fix: 'Balance both sections from day one. A 50-point ERW gain is often easier than 50 points in Math.',
    transitionDelay: '0.08s',
  },
  {
    number: '03',
    icon: '🔢',
    title: 'Not Leveraging Super-Scoring',
    description:
      'Many applicants sit the SAT once and accept their composite score. Both IIIT Hyderabad and BITS Pilani accept super-scores — meaning your best Math from one attempt plus your best ERW from another.',
    fix: 'Plan 2–3 attempts across different dates. Even a single strong section retake can lift your composite by 60–80 points.',
    transitionDelay: '0.16s',
  },
  {
    number: '04',
    icon: '📋',
    title: 'Wrong or Missing Documentation',
    description:
      'CIWG applicants regularly get rejected at the portal stage for submitting incorrect Gulf residency documents or outdated NRI/OCI certificates. The DASA portal is unforgiving — a wrong upload means disqualification.',
    fix: 'Start document collection 6–8 weeks before the application window. EduQuest provides a complete checklist per category.',
    transitionDelay: '0.24s',
  },
  {
    number: '05',
    icon: '🏫',
    title: 'Applying to Only One Institute',
    description:
      'Students fixated on IIIT Hyderabad miss BITS Pilani\'s ISA route entirely — or vice versa. Both accept SAT, both are world-class, and both have different cut-offs and application portals.',
    fix: 'Apply to both DASA (IIIT-H) and ISA (BITS Pilani) in parallel. The SAT score works for both. Double your chances.',
    transitionDelay: '0.32s',
  },
  {
    number: '06',
    icon: '📚',
    title: 'Self-Studying Without Strategy',
    description:
      'Generic SAT prep books and YouTube tutorials don\'t account for the DASA minimum threshold, the digital adaptive format, or the specific score band that puts you in a competitive merit rank at IIIT Hyderabad.',
    fix: 'DASA-focused coaching adapts your prep to the actual target — not a generalised 1600 ceiling chase.',
    transitionDelay: '0.40s',
  },
];

export default function WhyStudentsFail() {
  const headRef   = useRef<HTMLDivElement | null>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );

    if (headRef.current) observer.observe(headRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="why-fail" aria-labelledby="fail-heading">

      {/* Noise texture overlay */}
      <div className={styles.noiseOverlay} aria-hidden="true" />

      <div className={styles.container}>

        {/* Section Head */}
        <div
          className={`${styles.sectionHead} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>Common Mistakes</div>
          <h2 id="fail-heading">
            Why Students Fail to Get In —{' '}
            <em>And How to Make Sure You Don&apos;t</em>
          </h2>
          <p>
            Most rejections under DASA and ISA are avoidable. These are the six
            mistakes we see again and again — and the exact fixes for each.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={styles.card}
              style={{ transitionDelay: r.transitionDelay }}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              {/* Card top bar accent */}
              <div className={styles.cardAccent} aria-hidden="true" />

              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{r.number}</span>
                <span className={styles.cardIcon}>{r.icon}</span>
              </div>

              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.description}</p>

              <div className={styles.fixBox}>
                <span className={styles.fixLabel}>✦ The Fix</span>
                <p className={styles.fixText}>{r.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className={`${styles.ctaStrip} ${styles.fadeUp}`}>
          <p className={styles.ctaText}>
            Don&apos;t let an avoidable mistake cost you your seat.
            EduQuest&apos;s DASA &amp; ISA programme is built around these exact failure points.
          </p>
          <a href="#contact" className={styles.ctaBtn}>
            Talk to a Counsellor →
          </a>
        </div>

      </div>
    </section>
  );
}