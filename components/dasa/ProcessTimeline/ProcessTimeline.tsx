'use client';

import { useEffect, useRef } from 'react';
import styles from './ProcessTimeline.module.css';

interface TimelineStep {
  step: number;
  title: string;
  description: string;
  note: string;
  transitionDelay: string;
}

const steps: TimelineStep[] = [
  {
    step: 1,
    title: 'Confirm Your Eligibility',
    description:
      'Verify that you, your parent, or your guardian holds NRI, OCI, PIO, or CIWG status. EduQuest will help you confirm eligibility under the correct category before you invest in coaching.',
    note: 'Free eligibility check with our counsellors',
    transitionDelay: '0s',
  },
  {
    step: 2,
    title: 'Take a Diagnostic SAT Practice Test',
    description:
      'Start with a full-length timed diagnostic test. EduQuest analyses your Math and ERW breakdown to build a personalised study plan targeting your weakest module.',
    note: 'Digital SAT adaptive format',
    transitionDelay: '0.08s',
  },
  {
    step: 3,
    title: 'Structured SAT Coaching (6–12 Weeks)',
    description:
      'Live classes covering every tested concept in Math, Reading, and Writing. Section-specific mock tests every week, with post-test analysis to close gaps before your actual attempt.',
    note: 'Flexible morning / evening batches',
    transitionDelay: '0.16s',
  },
  {
    step: 4,
    title: 'Register & Sit Your SAT Attempts',
    description:
      'We help you register on the College Board portal, choose test dates strategically, and plan for 2–3 attempts to maximise your super-score before the DASA/ISA deadline.',
    note: 'DASA score deadline: 31 May 2025',
    transitionDelay: '0.24s',
  },
  {
    step: 5,
    title: 'Send Official Scores & Apply',
    description:
      'Send SAT scores to IIIT Hyderabad using College Board code 6997. Apply via the DASA portal. For BITS Pilani, apply directly through the ISA channel with your score report.',
    note: 'We assist with every document and portal step',
    transitionDelay: '0.32s',
  },
  {
    step: 6,
    title: 'Accept Your Offer & Enrol',
    description:
      'Once your merit rank is published, EduQuest guides you through seat acceptance, fee payment, and any additional documentation required by the institute.',
    note: '🎉 Congratulations — you\'re in!',
    transitionDelay: '0.40s',
  },
];

export default function ProcessTimeline() {
  const headRef  = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    stepRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.process} id="process" aria-labelledby="proc-heading">
      <div className={styles.container}>

        {/* Section Head */}
        <div
          className={`${styles.sectionHead} ${styles.center} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>Step-by-Step</div>
          <h2 id="proc-heading">How to Apply — From SAT Prep to Admission Offer</h2>
          <p>A clear six-step roadmap to IIIT Hyderabad or BITS Pilani through the DASA / ISA route.</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`${styles.tlStep}${i === steps.length - 1 ? ` ${styles.tlStepLast}` : ''}`}
              style={{ transitionDelay: s.transitionDelay }}
              ref={(el) => { stepRefs.current[i] = el; }}
            >
              <div className={styles.tlDot}>{s.step}</div>
              <div className={styles.tlBody}>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
                <span className={styles.tlNote}>{s.note}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}