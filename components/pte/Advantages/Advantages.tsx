'use client';

import { useEffect, useRef } from 'react';
import styles from './Advantages.module.css';

interface Advantage {
  num: string;
  title: string;
  description: string;
  delay: string;
}

const advantages: Advantage[] = [
  {
    num: '01',
    title: 'Results in 5 Business Days',
    description:
      'Unlike IELTS which takes up to 13 days, PTE delivers your official score report within five working days — critical when visa deadlines are tight.',
    delay: '0s',
  },
  {
    num: '02',
    title: 'Completely AI-Scored — Zero Bias',
    description:
      'Every response is graded by Pearsons AI engine. No human subjectivity means the same accent or writing style scores consistently across all test attempts.',
    delay: '0.06s',
  },
  {
    num: '03',
    title: 'Valid for Canada SDS Visa',
    description:
      'Since August 2023, PTE Academic (at authorised centres) with an overall score of 60 qualifies under Canada Student Direct Stream — unlocking faster study permits.',
    delay: '0.12s',
  },
  {
    num: '04',
    title: '360+ Test Days, 200+ Centres',
    description:
      'With over 200 test centres worldwide including 35 in India, and tests available on more than 360 days a year, scheduling is never a barrier.',
    delay: '0.18s',
  },
  {
    num: '05',
    title: 'Unlimited Score Sends — Free',
    description:
      'Send your PTE score to an unlimited number of institutions without any additional fee — a major advantage over IELTS and TOEFLs per-institution charges.',
    delay: '0.24s',
  },
  {
    num: '06',
    title: 'All 4 Skills Tested in One Sitting',
    description:
      'Speaking, Writing, Reading and Listening are all assessed in approximately two hours in a single session — no split-day scheduling, no partial cancellations.',
    delay: '0.30s',
  },
];

export default function Advantages() {
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10 }
    );

    if (headRef.current) observer.observe(headRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="advantages-heading">
      <div className={styles.container}>

        {/* Section head */}
        <div
          className={`${styles.sectionHead} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>Advantages</div>
          <h2 id="advantages-heading" className={styles.heading}>
            Why Choose PTE Academic?
          </h2>
          <p className={styles.subtext}>
            PTE Academic offers distinct advantages over other English
            proficiency tests — from faster results to broader global
            acceptance.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {advantages.map((adv, i) => (
            <div
              key={adv.num}
              className={styles.card}
              style={{ transitionDelay: adv.delay }}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              {/* Decorative number */}
              <span className={styles.num} aria-hidden="true">
                {adv.num}
              </span>

              {/* Divider line between num and body */}
              <div className={styles.divider} aria-hidden="true" />

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{adv.title}</h3>
                <p className={styles.cardDesc}>{adv.description}</p>
              </div>

              {/* Hover accent bar */}
              <span className={styles.accentBar} aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}