"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ImportantDatesSection.module.css";

// ── Types ─────────────────────────────────────────────────────────────────────

type BadgeVariant = "normal" | "important" | "main";

interface TimelineItem {
  month: string;
  year: string;
  badge: string;
  badgeVariant: BadgeVariant;
  dotVariant: "gold" | "red" | "navy";
  title: string;
  description: string;
  /** true = date left / card right; false = card left / date right */
  dateLeft: boolean;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const timelineItems: TimelineItem[] = [
  {
    month: "Feb",
    year: "2026",
    badge: "Notification",
    badgeVariant: "normal",
    dotVariant: "gold",
    title: "Official Notifications Released",
    description:
      "IIM Indore & Rohtak release official IPMAT 2026 notifications. Registration windows open — seats are limited.",
    dateLeft: true,
  },
  {
    month: "Mar",
    year: "2026",
    badge: "Critical Deadline",
    badgeVariant: "important",
    dotVariant: "red",
    title: "SAT International Deadline",
    description:
      "Last date for SAT International attempts for IIM Ranchi & Global tracks. Book your slot immediately.",
    dateLeft: false,
  },
  {
    month: "May",
    year: "2026",
    badge: "⭐ Main Exams",
    badgeVariant: "main",
    dotVariant: "navy",
    title: "IPMAT Indore & Rohtak Examinations",
    description:
      "Main examination week (Week 3). 12 months of preparation converges to this moment.",
    dateLeft: true,
  },
  {
    month: "June",
    year: "2026",
    badge: "Results",
    badgeVariant: "normal",
    dotVariant: "gold",
    title: "Shortlist Announcements",
    description:
      "JIPMAT & IIFT shortlists announced. Begin intensive mock interview bootcamp — this is where profiles shine.",
    dateLeft: false,
  },
  {
    month: "July",
    year: "2026",
    badge: "Interview Season",
    badgeVariant: "normal",
    dotVariant: "gold",
    title: "EduQuest Mock Interview Bootcamps",
    description:
      "Intensive sessions with IIM alumni — WAT practice, GD simulation, and personal feedback.",
    dateLeft: true,
  },
];

// ── Countdown ─────────────────────────────────────────────────────────────────

interface CountdownState {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

const TARGET_DATE = new Date("2026-05-19T09:00:00+05:30");

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getCountdown(): CountdownState {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: "00", hours: "00", mins: "00", secs: "00" };
  return {
    days:  pad(Math.floor(diff / 86_400_000)),
    hours: pad(Math.floor((diff % 86_400_000) / 3_600_000)),
    mins:  pad(Math.floor((diff % 3_600_000) / 60_000)),
    secs:  pad(Math.floor((diff % 60_000) / 1_000)),
  };
}

// ── Timeline item ─────────────────────────────────────────────────────────────

function TlItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dateBlock = (
    <div className={`${styles.tlDateBlock} ${item.dateLeft ? styles.tlDateRight : styles.tlDateLeft}`}>
      <span className={styles.tlMonth}>{item.month}</span>
      <span className={styles.tlYear}>{item.year}</span>
    </div>
  );

  const card = (
    <div className={styles.tlCard}>
      <span className={`${styles.tlBadge} ${styles[`tlBadge_${item.badgeVariant}`]}`}>
        {item.badge}
      </span>
      <h4 className={styles.tlCardTitle}>{item.title}</h4>
      <p className={styles.tlCardDesc}>{item.description}</p>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`${styles.tlItem} ${visible ? styles.tlItemVisible : ""} ${
        item.dateLeft ? styles.tlItemDateLeft : styles.tlItemDateRight
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left column */}
      <div className={styles.tlLeft}>
        {item.dateLeft ? dateBlock : card}
      </div>

      {/* Centre dot */}
      <div className={styles.tlCenter}>
        <div className={`${styles.tlDotOuter} ${styles[`tlDot_${item.dotVariant}`]}`}>
          <div className={styles.tlDotInner} />
        </div>
      </div>

      {/* Right column */}
      <div className={styles.tlRight}>
        {item.dateLeft ? card : dateBlock}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function ImportantDatesSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setHeadVisible(true); obs.disconnect(); }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.dates} id="dates">
      <div className={styles.container}>

        {/* Header */}
        <div
          ref={headRef}
          className={`${styles.sectionHead} ${headVisible ? styles.sectionHeadVisible : ""}`}
        >
          <div className={styles.sectionLabel}>Important Dates</div>
          <h2 className={styles.sectionHeading}>2026 Timeline &amp; Deadlines</h2>
          <p className={styles.sectionSub}>
            Stay ahead with our comprehensive timeline. Missing a single deadline
            can cost you an entire year.
          </p>
        </div>

     
        {/* Timeline */}
        <div className={styles.timeline}>
          {timelineItems.map((item, i) => (
            <TlItem key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}