'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyEduQuest.module.css';

interface WhyItem {
  icon: string;
  title: string;
  description: string;
  transitionDelay: string;
}

interface StatItem {
  count: number;
  suffix: string;
  label: string;
  animationDelay: string;
}

const whyItems: WhyItem[] = [
  {
    icon: '🧑‍🏫',
    title: 'Personalised SAT Coaching',
    description:
      'One-on-one and small group sessions focused specifically on Math & ERW. Faculty with 15+ years of SAT experience and DASA-specific coaching track record.',
    transitionDelay: '0s',
  },
  {
    icon: '📊',
    title: 'Adaptive Practice & Super-Scoring Strategy',
    description:
      'Maximise your composite in fewer attempts. Our attempt calendar is planned backwards from your DASA and ISA deadlines.',
    transitionDelay: '0.08s',
  },
  {
    icon: '📝',
    title: 'End-to-End Application Assistance',
    description:
      'Guidance for the IIIT Hyderabad DASA portal, BITS Pilani ISA application, score reporting, document preparation, and all submission deadlines.',
    transitionDelay: '0.16s',
  },
  {
    icon: '🏆',
    title: 'Proven Admission Track Record',
    description:
      'Students successfully admitted to IIIT Hyderabad, BITS Pilani, NIT Trichy, and international universities through DASA, ISA, and other international quotas.',
    transitionDelay: '0.24s',
  },
];

const stats: StatItem[] = [
  { count: 500, suffix: '+',  label: 'Students Placed',    animationDelay: '0s'     },
  { count: 1590, suffix: '',  label: 'Top SAT Score',      animationDelay: '0.07s'  },
  { count: 15,   suffix: '+', label: 'Years Experience',   animationDelay: '0.14s'  },
  { count: 8,    suffix: 'M+',label: 'Scholarships (USD)', animationDelay: '0.21s'  },
];

function animateCount(el: HTMLSpanElement, target: number, suffix: string) {
  const duration = 1600;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function WhyEduQuest() {
  const headRef    = useRef<HTMLDivElement | null>(null);
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs    = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    /* ── fade-up / slide-in observer ── */
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );

    if (headRef.current) fadeObserver.observe(headRef.current);
    itemRefs.current.forEach((el) => { if (el) fadeObserver.observe(el); });
    statRefs.current.forEach((el) => { if (el) fadeObserver.observe(el); });

    /* ── counter observer ── */
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const span = entry.target as HTMLSpanElement;
            const idx  = numRefs.current.indexOf(span);
            if (idx !== -1) {
              animateCount(span, stats[idx].count, stats[idx].suffix);
            }
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    numRefs.current.forEach((el) => { if (el) counterObserver.observe(el); });

    return () => {
      fadeObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <section className={styles.whyUs} id="why-us" aria-labelledby="why-heading">
      <div className={styles.container}>
        <div className={styles.whyGrid}>

          {/* ── Left col: heading + items ── */}
          <div>
            <div
              className={`${styles.sectionHead} ${styles.fadeUp}`}
              ref={headRef}
            >
              <div className={styles.sectionLabel}>Why EduQuest</div>
              <h2 id="why-heading">
                Why Choose EduQuest for SAT &amp; Admission Support
              </h2>
              <p>
                We&apos;ve guided hundreds of NRI, OCI, and CIWG students through
                this exact process — from their first SAT attempt to confirmed
                college admission.
              </p>
            </div>

            <div className={styles.whyBody}>
              {whyItems.map((item, i) => (
                <div
                  key={item.title}
                  className={styles.whyItem}
                  style={{ transitionDelay: item.transitionDelay }}
                  ref={(el) => { itemRefs.current[i] = el; }}
                >
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <div className={styles.whyText}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right col: stat cards ── */}
          <div className={styles.whyStats}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={styles.whyStat}
                style={{ animationDelay: stat.animationDelay }}
                ref={(el) => { statRefs.current[i] = el; }}
              >
                <span
                  className={styles.whyStatNum}
                  ref={(el) => { numRefs.current[i] = el; }}
                >
                  0
                </span>
                <span className={styles.whyStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}