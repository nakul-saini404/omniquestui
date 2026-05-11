'use client';

import { useEffect, useRef } from 'react';
import styles from './ProvenResults.module.css';

/* ─── TYPES ───────────────────────────────────────────── */
interface ResultStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

interface Testimonial {
  initial: string;
  quote: string;
  name: string;
  meta: string;
}

/* ─── DATA ────────────────────────────────────────────── */
const stats: ResultStat[] = [
  { value: 1500, suffix: '+',  label: 'PSAT Students Coached' },
  { value: 92,   suffix: '%',  label: 'Score Improvement Rate' },
  { value: 210,  suffix: '',   prefix: '+', label: 'Average Points Gained' },
  { value: 8,    suffix: 'M+', prefix: '$', label: 'Scholarships Secured' },
];

const testimonials: Testimonial[] = [
  {
    initial: 'A',
    quote:
      '"Started PSAT prep with EduQuest in Class 9. By Class 11, I scored 1490 on the NMSQT and qualified as a Commended Scholar. The systematic approach and weekly mocks made all the difference."',
    name: 'Aanya Sharma',
    meta: 'PSAT 1490 · NM Commended · Delhi',
  },
  {
    initial: 'R',
    quote:
      '"EduQuest\'s 5-year track was the best decision we made. My son went from a 980 PSAT 8/9 in Class 8 to a 1510 NMSQT in Class 11. He\'s now applying to MIT with a National Merit Finalist designation."',
    name: 'Rajesh Kumar (Parent)',
    meta: 'PSAT/NMSQT 1510 · NM Finalist · Mumbai',
  },
  {
    initial: 'P',
    quote:
      '"The AI mock analytics were incredible — they showed me exactly which question types were losing me points. Improved from 1200 to 1460 in 5 months. EduQuest\'s doubt support was available literally any time."',
    name: 'Priya Mehta',
    meta: 'PSAT 1460 · +260 Points · Gurgaon',
  },
];

/* ─── COUNTER HELPER ──────────────────────────────────── */
function animateCounter(
  el: HTMLElement,
  target: number,
  prefix: string,
  suffix: string,
  duration = 1800
) {
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, 16);
}

/* ─── COMPONENT ───────────────────────────────────────── */
export default function ProvenResults() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const statRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const testiRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    /* ── Fade-up observer for header + testimonial cards ── */
    const fadeTargets: Element[] = [
      headerRef.current,
      ...testiRefs.current,
    ].filter(Boolean) as Element[];

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeTargets.forEach((el) => fadeObserver.observe(el));

    /* ── Counter + fade observer for stat cards ── */
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);

            /* find which stat index this card is */
            const idx = statRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            const numEl = numRefs.current[idx];
            if (numEl && stats[idx]) {
              animateCounter(
                numEl,
                stats[idx].value,
                stats[idx].prefix ?? '',
                stats[idx].suffix
              );
            }

            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    statRefs.current.forEach((el) => el && statObserver.observe(el));

    return () => {
      fadeObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return (
    <section id="results" className={styles.section}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Proven Results</div>
          <h2 className={styles.sectionTitle}>
            Numbers That{' '}
            <span className={styles.titleAccent}>Speak</span>
          </h2>
        </div>

        {/* ── Stats ── */}
        <div className={styles.resultsGrid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { statRefs.current[i] = el; }}
              className={styles.resultStat}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                ref={(el) => { numRefs.current[i] = el; }}
                className={styles.resultNum}
              >
                {/* initial display before counter fires */}
                {(stat.prefix ?? '') + stat.value.toLocaleString() + stat.suffix}
              </div>
              <div className={styles.resultLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Testimonials ── */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => { testiRefs.current[i] = el; }}
              className={styles.testiCard}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.testiStars}>★★★★★</div>
              <p className={styles.testiText}>{t.quote}</p>
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar}>{t.initial}</div>
                <div>
                  <div className={styles.testiName}>{t.name}</div>
                  <div className={styles.testiMeta}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}