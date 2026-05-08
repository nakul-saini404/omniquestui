'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LiveBatchTimings.module.css';

/* ── Types ── */
interface SchedRow {
  name?: string;
  time: string;
}

interface SchedSection {
  label: string;
  rows: SchedRow[];
}

interface SchedCard {
  title: string;
  subtitle: string;
  delay: number;
  sections: SchedSection[];
}

interface ExtraItem {
  label: string;
  times: string[];
}

/* ── Data ── */
const academicCards: SchedCard[] = [
  {
    title: 'Champion Combo Batch',
    subtitle: 'IELTS Academic · Full Programme',
    delay: 0.05,
    sections: [
      {
        label: 'Live Lectures (Mon–Fri)',
        rows: [
          { name: "Beginner's Batch", time: '07:30AM–09:30AM · 08:30PM–10:30PM · 02:00PM–04:00PM' },
          { name: 'Advance Batch', time: '07:30AM–10:30AM · 02:00PM–05:00PM · 08:00PM–11:00PM' },
        ],
      },
      {
        label: 'Test & Mock Analysis (Saturday)',
        rows: [
          { name: 'Practice Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
          { name: 'Mock Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
        ],
      },
      {
        label: 'Demo Batches (Mon–Sat)',
        rows: [{ time: '07:30AM–09:30AM  |  02:00PM–04:00PM  |  08:30PM–10:30PM' }],
      },
    ],
  },
  {
    title: 'Champion Morning Batch',
    subtitle: 'IELTS Academic',
    delay: 0.1,
    sections: [
      {
        label: 'Live Lectures (Mon–Fri)',
        rows: [
          { name: "Beginner's Batch", time: '07:30AM–09:30AM' },
          { name: 'Advance Batch', time: '07:30AM–10:30AM' },
        ],
      },
      {
        label: 'Test & Mock Analysis (Saturday)',
        rows: [
          { name: 'Practice Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
          { name: 'Mock Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
        ],
      },
    ],
  },
  {
    title: 'Champion Evening Batch',
    subtitle: 'IELTS Academic',
    delay: 0.15,
    sections: [
      {
        label: 'Live Lectures (Mon–Fri)',
        rows: [
          { name: "Beginner's Batch", time: '08:30PM–10:30PM' },
          { name: 'Advance Batch', time: '08:00PM–11:00PM' },
        ],
      },
      {
        label: 'Test & Mock Analysis (Saturday)',
        rows: [
          { name: 'Practice Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
          { name: 'Mock Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
        ],
      },
    ],
  },
  {
    title: 'Marathon — Reading',
    subtitle: 'IELTS Academic',
    delay: 0.2,
    sections: [
      {
        label: 'Live Lectures (Mon, Wed & Fri)',
        rows: [
          { name: 'Morning', time: '10:30AM–12:00PM' },
          { name: 'Evening', time: '06:30PM–08:00PM' },
        ],
      },
      {
        label: 'Mock Analysis (Saturday)',
        rows: [{ time: '07:30AM–09:30AM · 02:00PM–04:00PM' }],
      },
    ],
  },
  {
    title: 'Marathon — Writing',
    subtitle: 'IELTS Academic',
    delay: 0.25,
    sections: [
      {
        label: 'Live Lectures (Tue, Thu & Sat)',
        rows: [
          { name: 'Morning', time: '10:30AM–12:00PM' },
          { name: 'Evening', time: '06:30PM–08:00PM' },
        ],
      },
      {
        label: 'Mock Analysis (Saturday)',
        rows: [{ time: '07:30AM–09:30AM · 02:00PM–04:00PM' }],
      },
    ],
  },
  {
    title: 'Marathon — Speaking',
    subtitle: 'IELTS Academic',
    delay: 0.3,
    sections: [
      {
        label: 'Live Lectures (Mon–Fri)',
        rows: [
          { name: 'Morning', time: '12:00PM–01:00PM' },
          { name: 'Evening', time: '05:30PM–06:30PM' },
        ],
      },
      {
        label: 'Mock Analysis (Saturday)',
        rows: [{ time: '07:30AM–09:30AM · 02:00PM–04:00PM' }],
      },
    ],
  },
  {
    title: 'Self Preparation Pack',
    subtitle: 'IELTS Academic · Schedule',
    delay: 0.35,
    sections: [
      {
        label: 'Doubt Solving (Sunday)',
        rows: [{ name: 'Batch Timing', time: '08:00PM–09:00PM' }],
      },
      {
        label: 'Test & Mock Analysis (Saturday)',
        rows: [
          { name: 'Practice Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
          { name: 'Mock Test', time: '07:30AM–09:30AM · 02:00PM–04:00PM' },
        ],
      },
      {
        label: 'Demo Batches (Mon–Sat)',
        rows: [{ time: '07:30AM–09:30AM  |  02:00PM–04:00PM  |  08:30PM–10:30PM' }],
      },
    ],
  },
];

const academicExtras: ExtraItem[] = [
  { label: 'Reading Marathon (Mon, Wed & Fri)', times: ['10:30AM–12:00PM', '06:30PM–08:00PM'] },
  { label: 'Speaking Marathon (Mon–Fri)', times: ['12:00PM–01:00PM', '05:30PM–06:30PM'] },
  { label: 'Writing Marathon (Tue, Thu & Sat)', times: ['10:30AM–12:00PM', '06:30PM–08:00PM'] },
  { label: 'French Basic (Mon–Fri)', times: ['07:00AM–08:30AM', '04:30PM–06:00PM'] },
];

const generalCards: SchedCard[] = [
  {
    title: 'Champion Combo Batch',
    subtitle: 'IELTS General · Full Programme',
    delay: 0.05,
    sections: [
      {
        label: 'Live Lectures (Mon–Fri)',
        rows: [{ name: 'Rapid Batch', time: '07:30AM–09:30AM · 08:30PM–10:30PM' }],
      },
      {
        label: 'Test & Mock Analysis (Saturday)',
        rows: [
          { name: 'Practice Test', time: '07:30AM–09:30AM' },
          { name: 'Mock Test', time: '07:30AM–09:30AM' },
        ],
      },
      {
        label: 'Demo Batches (Mon–Sat)',
        rows: [{ time: '07:30AM–09:30AM  |  02:00PM–04:00PM  |  08:30PM–10:30PM' }],
      },
    ],
  },
  {
    title: 'Marathon — Reading',
    subtitle: 'IELTS General',
    delay: 0.1,
    sections: [
      {
        label: 'Live Lectures (Tue, Thu & Sat)',
        rows: [
          { name: 'Morning', time: '10:30AM–12:00PM' },
          { name: 'Evening', time: '06:30PM–08:00PM' },
        ],
      },
      {
        label: 'Mock Analysis (Saturday)',
        rows: [{ time: '07:30AM–09:30AM' }],
      },
    ],
  },
];

const generalExtras: ExtraItem[] = [
  { label: 'Reading Marathon (Tue, Thu & Sat)', times: ['10:30AM–12:00PM', '06:30PM–08:00PM'] },
  { label: 'Speaking Marathon (Mon–Fri)', times: ['12:00PM–01:00PM', '05:30PM–06:30PM'] },
  { label: 'Writing Marathon (Mon, Wed & Fri)', times: ['10:30AM–12:00PM', '06:30PM–08:00PM'] },
  { label: 'French Basic (Mon–Fri)', times: ['07:00AM–08:30AM', '04:30PM–06:00PM'] },
];

/* ── Animated Counter ── */
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current && mounted) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            if (!mounted) return;
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * value));
            if (t < 1) {
              rafId.current = requestAnimationFrame(tick);
            }
          };
          rafId.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);

    return () => {
      mounted = false;
      obs.disconnect();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [value]);

  return (
    <span ref={ref} className={styles.statNum}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Animated Icon ── */
function PulseIcon({ emoji }: { emoji: string }) {
  return <span className={styles.pulseIcon}>{emoji}</span>;
}

/* ── Schedule Card ── */
function SchedCardComponent({ card }: { card: SchedCard }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mounted) setVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => {
      mounted = false;
      obs.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.schedCard} ${visible ? styles.schedCardVisible : ''}`}
      style={{ transitionDelay: `${card.delay}s` }}
    >
      <div className={styles.schedHead}>
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
      </div>
      <div className={styles.schedBody}>
        {card.sections.map((sec, si) => (
          <div key={si} className={`${styles.schedSection} ${si === card.sections.length - 1 ? styles.schedSectionLast : ''}`}>
            <div className={styles.schedSectionLabel}>{sec.label}</div>
            <div className={styles.schedRows}>
              {sec.rows.map((row, ri) => (
                <div key={ri} className={styles.schedRow}>
                  {row.name && <span className={styles.schedRowName}>{row.name}</span>}
                  <span className={styles.schedRowTime}>{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function LiveBatchTimings() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mounted) {
          setHeaderVisible(true);
          setStatsVisible(true);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => {
      mounted = false;
      obs.disconnect();
    };
  }, []);

  return (
    <section className={styles.schedule} id="schedule" ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Header + Right Image ── */}
        <div className={`${styles.topRow} ${headerVisible ? styles.topRowVisible : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.sectionLabel}>Live Batch Timings</div>
            <h2 className={styles.heading}>Batch Schedule &amp; Timings</h2>
            <p className={styles.subText}>
              Choose from morning, afternoon, or evening batches designed to fit every routine.
              All batches run Mon–Fri with Saturday test analysis.
            </p>

            {/* Animated Stats */}
            <div className={`${styles.statsRow} ${statsVisible ? styles.statsRowVisible : ''}`}>
              <div className={styles.statCard}>
                <PulseIcon emoji="📅" />
                <AnimatedNumber value={6} suffix="+" />
                <span className={styles.statLabel}>Daily Batches</span>
              </div>
              <div className={styles.statCard}>
                <PulseIcon emoji="🕗" />
                <AnimatedNumber value={3} />
                <span className={styles.statLabel}>Time Slots</span>
              </div>
              <div className={styles.statCard}>
                <PulseIcon emoji="🎓" />
                <AnimatedNumber value={120} suffix="+" />
                <span className={styles.statLabel}>Days Access</span>
              </div>
              <div className={styles.statCard}>
                <PulseIcon emoji="🏆" />
                <AnimatedNumber value={14} />
                <span className={styles.statLabel}>Mock Tests</span>
              </div>
            </div>
          </div>

          {/* Right – IELTS Student Image */}
          <div className={styles.heroImgWrap}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80&auto=format&fit=crop"
              alt="IELTS student studying"
              className={styles.heroImg}
            />
            <div className={styles.imgBadge}>
              <span className={styles.imgBadgeDot} />
              Live Classes Running
            </div>
          </div>
        </div>

        {/* ── Academic Batches ── */}
        <div className={styles.typeLabel}>
          <span className={styles.typeLabelLine} />
          IELTS Academic Batches
        </div>
        <div className={styles.schedGrid}>
          {academicCards.map((card, i) => (
            <SchedCardComponent key={i} card={card} />
          ))}
        </div>

        {/* Academic Complementary */}
        <div className={styles.schedExtra}>
          <h4>Complementary Batches — IELTS Academic</h4>
          <div className={styles.schedExtraGrid}>
            {academicExtras.map((item, i) => (
              <div key={i} className={styles.schedExtraItem}>
                <div className={styles.schedExtraLabel}>{item.label}</div>
                <div className={styles.schedExtraTimes}>{item.times.join('\n')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── General Batches ── */}
        <div className={`${styles.typeLabel} ${styles.typeLabelSpaced}`}>
          <span className={styles.typeLabelLine} />
          IELTS General Batches
        </div>
        <div className={styles.schedGrid}>
          {generalCards.map((card, i) => (
            <SchedCardComponent key={i} card={card} />
          ))}
        </div>

        {/* General Complementary */}
        <div className={styles.schedExtra}>
          <h4>Complementary Batches — IELTS General</h4>
          <div className={styles.schedExtraGrid}>
            {generalExtras.map((item, i) => (
              <div key={i} className={styles.schedExtraItem}>
                <div className={styles.schedExtraLabel}>{item.label}</div>
                <div className={styles.schedExtraTimes}>{item.times.join('\n')}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}