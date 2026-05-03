"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./UcatVersionDates.module.css";

/* ── Data ────────────────────────────────────────────── */
const rotatingSlides = [
  {
    goal: "Want to apply for UK only?",
    test: "UCAT (UK)",
    testColor: "blue",
    flag: "🇬🇧",
    sub: "Accepted exclusively by UK universities. Registration opens May 2026.",
  },
  {
    goal: "Want to apply for Australia / New Zealand only?",
    test: "UCAT ANZ",
    testColor: "gold",
    flag: "🇦🇺",
    sub: "Accepted by Australian & NZ medical schools. Registration opens March 2026.",
  },
  {
    goal: "Want to apply for UK AND Australia / New Zealand?",
    test: "UCAT ANZ",
    testColor: "gold",
    flag: "🌏",
    sub: "UCAT ANZ is the smartest choice — accepted across all three countries with earlier deadlines.",
  },
];

const dateRows = [
  {
    event: "Account Registration Opens",
    icon: "📋",
    anz: "03 Mar 2026",
    uk: "12 May 2026",
  },
  {
    event: "Booking (Slot Selection) Opens",
    icon: "📅",
    anz: "03 Mar 2026",
    uk: "23 Jun 2026",
  },
  {
    event: "Standard Booking Deadline",
    icon: "⏰",
    anz: "15 May 2026",
    uk: "16 Sep 2026",
    anzHighlight: true,
  },
  {
    event: "Testing Window",
    icon: "✍️",
    anz: "1 Jul – 5 Aug 2026",
    uk: "13 Jul – 24 Sep 2026",
  },
  {
    event: "Results Delivery",
    icon: "📊",
    anz: "Early September 2026",
    uk: "Early November 2026",
  },
  {
    event: "Best For",
    icon: "🎯",
    anz: "Australia, NZ, and UK applicants",
    uk: "UK universities only",
    isBestFor: true,
  },
];

const importantNotes = [
  {
    icon: "🎓",
    title: "Class 12 Students (Pursuing)",
    text: "Students currently in Class 12 can appear for UCAT (UK) during the exam window. However, UCAT ANZ can only be given after completing Class 12.",
  },
  {
    icon: "📌",
    title: "One Exam Per Year Rule",
    text: "A student can attempt only one version — either UCAT or UCAT ANZ — in a single year. Choose your version carefully before registering.",
  },
];

/* ── Rotating card component ─────────────────────────── */
function RotatingVersionCard() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % rotatingSlides.length);
        setAnimating(false);
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const slide = rotatingSlides[current];

  return (
    <div className={styles.rotatingCard}>
      <div className={`${styles.rotatingInner} ${animating ? styles.fadeOut : styles.fadeIn}`}>
        <div className={styles.rotatingFlag}>{slide.flag}</div>
        <p className={styles.rotatingGoal}>{slide.goal}</p>
        <div className={styles.rotatingArrow}>↓</div>
        <div className={`${styles.rotatingTest} ${styles[`test_${slide.testColor}`]}`}>
          {slide.test}
        </div>
        <p className={styles.rotatingSub}>{slide.sub}</p>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {rotatingSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 350); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────── */
export default function UcatVersionDates() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      {/* BG blobs */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgBlob1} />
        <div className={styles.bgBlob2} />
      </div>

      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Which Test Is Right for You?</span>
        <h2 className={styles.title}>
          UCAT Version & <em>Key Dates 2026</em>
        </h2>
        <p className={styles.sub}>
          There are two versions of the UCAT — choosing the wrong one can cost
          you an entire admissions year. Pick based on your target country, then
          mark the deadlines that matter.
        </p>
      </div>

      {/* ── Step 1: Left heading + Right rotating card ── */}
      <div className={styles.step1Wrap}>
        {/* Left */}
        <div className={styles.step1Left}>
          <span className={styles.stepTag}>Step 1</span>
          <h3 className={styles.step1Title}>Identify Your <em>Version</em></h3>
          <p className={styles.step1Body}>
            The version you choose determines which countries' universities you
            can apply to. UCAT ANZ offers the broadest flexibility — accepted
            across Australia, New Zealand, <em>and</em> the UK.
          </p>
          <div className={styles.step1Pills}>
            <div className={styles.pill} data-color="blue">
              <span>🇬🇧</span> UCAT (UK) — UK only
            </div>
            <div className={styles.pill} data-color="gold">
              <span>🌏</span> UCAT ANZ — AUS / NZ / UK
            </div>
          </div>
        </div>

        {/* Right */}
        <RotatingVersionCard />
      </div>

      {/* ── Step 2: Dates Table ── */}
      <div className={styles.datesBlock}>
        <div className={styles.datesHeader}>
          <span className={styles.stepTag}>Step 2</span>
          <h3 className={styles.datesTitle}>Know Your Deadlines</h3>
          <p className={styles.datesSub}>
            UCAT ANZ registration opens <strong>2+ months earlier</strong> than
            UCAT (UK). Missing the booking deadline delays your application by a
            full year — plan ahead.
          </p>
        </div>

        {/* Column headers */}
        <div className={styles.tableHead}>
          <div className={styles.thEvent}>Event</div>
          <div className={`${styles.thCol} ${styles.thAnz}`}>
            <span className={styles.thFlag}>🇦🇺 🇳🇿 🇬🇧</span>
            <span className={styles.thName}>UCAT ANZ</span>
            <span className={styles.thSub}>Australia / NZ / UK</span>
          </div>
          <div className={`${styles.thCol} ${styles.thUk}`}>
            <span className={styles.thFlag}>🇬🇧</span>
            <span className={styles.thName}>UCAT (UK)</span>
            <span className={styles.thSub}>UK / Global Only</span>
          </div>
        </div>

        {/* Rows — hover only, no scroll animation */}
        <div className={styles.tableBody}>
          {dateRows.map((row, i) => (
            <div
              key={row.event}
              className={`${styles.tableRow}
                ${activeRow === i ? styles.rowActive : ""}
                ${row.isBestFor ? styles.rowBestFor : ""}
              `}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <div className={styles.rowEvent}>
                <span className={styles.rowIcon}>{row.icon}</span>
                <span>{row.event}</span>
              </div>
              <div
                className={`${styles.rowCell} ${styles.cellAnz} ${
                  (row as any).anzHighlight ? styles.cellHighlight : ""
                }`}
              >
                {row.anz}
                {(row as any).anzHighlight && (
                  <span className={styles.earlierBadge}>Earlier</span>
                )}
              </div>
              <div className={`${styles.rowCell} ${styles.cellUk}`}>
                {row.uk}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Important Notes ── */}
      <div className={styles.notesWrap}>
        <div className={styles.notesHeader}>
          <span className={styles.stepTag}>Important Notes</span>
        </div>
        <div className={styles.notesGrid}>
          {importantNotes.map((note) => (
            <div key={note.title} className={styles.noteCard}>
              <span className={styles.noteIcon}>{note.icon}</span>
              <div>
                <p className={styles.noteTitle}>{note.title}</p>
                <p className={styles.noteText}>{note.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Callout ── */}
      <div className={styles.callout}>
        <div className={styles.calloutIcon}>💡</div>
        <div>
          <p className={styles.calloutTitle}>Not sure? Choose UCAT ANZ.</p>
          <p className={styles.calloutText}>
            UCAT ANZ is accepted by universities in Australia, New Zealand{" "}
            <em>and</em> the UK — giving you maximum flexibility across all
            three countries with earlier registration and results. It is the
            smartest default choice for most international applicants.
          </p>
        </div>
      </div>
    </section>
  );
}