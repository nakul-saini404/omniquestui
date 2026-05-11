'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from "./OurProgrammes.module.css";

/* ─── ICONS ──────────────────────────────────────────────────────────────── */
const GradCapIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  </svg>
);

const ArticleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6h-2.18c.07-.44.18-.88.18-1.33A4.67 4.67 0 0013.33 0c-1.3 0-2.4.52-3.23 1.35L9 2.46 7.9 1.35A4.54 4.54 0 004.67 0 4.67 4.67 0 000 4.67c0 .45.11.89.18 1.33H0v2h24V6zM4.67 4.67a2.67 2.67 0 012.67-2.67c.7 0 1.37.28 1.84.74L11 4.56 9.18 6H6l.01-.02C4.95 6 4.67 5.28 4.67 4.67z" />
    <path d="M0 20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-9H0v9z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
  </svg>
);

const NewsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3L1 9l4 2.18V15l7 4 7-4v-3.82L23 9 12 3zM5 13.18v1.37L12 18l7-3.45v-1.37L12 16l-7-2.82z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
  </svg>
);

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface Programme {
  id: string;
  icon: React.ReactNode;
  name: string;
  desc: string;
}

const programmes: Programme[] = [
  {
    id: "sat",
    icon: <GradCapIcon />,
    name: "SAT Coaching",
    desc: "Online & classroom · 1570+ target · Bluebook mocks",
  },
  {
    id: "act",
    icon: <GradCapIcon />,
    name: "ACT Coaching",
    desc: "Personalised strategy · All sections · Mock tests",
  },
  {
    id: "ap",
    icon: <ArticleIcon />,
    name: "AP Coaching",
    desc: "20+ subjects · Expert faculty · Score 4–5 target",
  },
  {
    id: "ucat",
    icon: <PinIcon />,
    name: "UCAT Coaching",
    desc: "UK medical admissions · Full section strategy",
  },
  {
    id: "tmua",
    icon: <InfoIcon />,
    name: "TMUA Coaching",
    desc: "Cambridge Maths admissions · Problem-solving focus",
  },
  {
    id: "profile",
    icon: <GiftIcon />,
    name: "Profile Building",
    desc: "Class 6–12 · Extracurriculars · Essay strategy",
  },
  {
    id: "ug",
    icon: <CheckCircleIcon />,
    name: "UG Admissions",
    desc: "US/UK counselling · Common App · Essays",
  },
  {
    id: "ielts",
    icon: <ChatBubbleIcon />,
    name: "IELTS / TOEFL / PTE",
    desc: "Language proficiency · Band 7+ / 100+ targets",
  },
  {
    id: "ipmat",
    icon: <NewsIcon />,
    name: "IPMAT Coaching",
    desc: "IIM Indore · IIM Rohtak · JIPMAT strategy",
  },
  {
    id: "ib",
    icon: <LayersIcon />,
    name: "IB / IGCSE Tuition",
    desc: "All subjects · HL & SL · Exam-aligned prep",
  },
  {
    id: "abroad",
    icon: <GlobeIcon />,
    name: "Study Abroad",
    desc: "Country selection · Visa guidance · Scholarships",
  },
  {
    id: "loan",
    icon: <ShieldCheckIcon />,
    name: "Education Loan",
    desc: "Partner banks · 0% processing fee guidance",
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const OurProgrammes: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // ✅ Use Array.from instead of spread to avoid downlevelIteration error
            setVisibleCards((prev) => new Set(Array.from(prev).concat(i)));
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Our Programmes</div>
          <h2 className={styles.sectionTitle}>
            What Can We <em>Help You With?</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
          <p className={styles.sectionSub}>
            Select a programme below and our counsellor will tailor the advisory
            session to your specific needs and timeline.
          </p>
        </header>

        {/* ── Programmes grid ── */}
        <div className={styles.programsGrid}>
          {programmes.map((prog, i) => (
            <div
              key={prog.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${styles.programCard} ${
                visibleCards.has(i) ? styles.programCardVisible : ""
              }`}
              style={{ animationDelay: `${(i % 4) * 70}ms` }}
            >
              <div className={styles.progIcon}>{prog.icon}</div>
              <div className={styles.progText}>
                <div className={styles.progName}>{prog.name}</div>
                <div className={styles.progDesc}>{prog.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProgrammes;