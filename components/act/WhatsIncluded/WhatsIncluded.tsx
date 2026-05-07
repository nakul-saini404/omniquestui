"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhatsIncluded.module.css";

const FEATURES = [
  {
    letter: "A",
    title: "Minimum 90 Hours of Learning",
    desc: "Unmatched contact hours ensuring complete coverage of every ACT section.",
  },
  {
    letter: "B",
    title: "Class Tests & Surprise Full-Length Tests",
    desc: "Continuous assessment through scheduled and surprise mock exams.",
  },
  {
    letter: "C",
    title: "Rigorous Mock Tests & Doubt Clearing",
    desc: "15+ full-length tests with a bank of 5,000 papers. Dedicated doubt sessions.",
  },
  {
    letter: "D",
    title: "AI-Powered Test Generation",
    desc: "Choose topic, difficulty, and number of questions — the system builds your test.",
  },
  {
    letter: "E",
    title: "Unlimited Validity",
    desc: "Course validity extends until your admission in the desired college — no pressure on timelines.",
  },
  {
    letter: "F",
    title: "Previous ACT Actual Tests",
    desc: "Real-time practice with past ACT papers for authentic test-day simulation.",
  },
  {
    letter: "G",
    title: "Individual Attention & One-on-One Sessions",
    desc: "Micro gap identification and personal sessions to eliminate every weak area.",
  },
  {
    letter: "H",
    title: "College Selection Guidance",
    desc: "Profile matching with 2,000+ universities by interest, scores, and goals.",
  },
  {
    letter: "I",
    title: "Complimentary TOEFL/IELTS Training",
    desc: "Bonus language training included at no extra cost for every ACT student.",
  },
];

const SCORE_RANGES = [
  {
    emoji: "🥇",
    label: "Score Range",
    tier: "Gold",
    tierClass: "gold",
    detail: "1300+ ACT composite equivalent",
  },
  {
    emoji: "🥈",
    label: "Score Range",
    tier: "Silver",
    tierClass: "silver",
    detail: "800–1100 SAT equivalent",
  },
];

// ── Count-up hook ──────────────────────────────────────────────────────────────
// Counts from `from` to `target` over `duration` ms, starting when `active` flips true.
function useCountUp(
  target: number,
  from: number,
  duration: number,
  active: boolean
) {
  const [count, setCount] = useState(from);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const range = target - from;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — fast start, decelerates into the final value
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + eased * range));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, from, duration]);

  return count;
}

// ── Animated score badge — counts 30 → 36 ─────────────────────────────────────
function AnimatedScore({ active }: { active: boolean }) {
  const score = useCountUp(36, 30, 1200, active);
  return (
    <div className={styles.scoreBadge} aria-label="Perfect ACT Score 36">
      {score}
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function WhatsIncluded() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      id="features"
      aria-labelledby="whats-included-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── LEFT: feature list ── */}
          <div className={`${styles.left} ${visible ? styles.fadeIn : ""}`}>

            {/* Eyebrow */}
            <div className={styles.eyebrow}>
              <div className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>What&apos;s Included</span>
            </div>

            <h2 className={styles.title} id="whats-included-heading">
              Everything You Need to{" "}
              <em className={styles.accent}>Score Higher</em>
            </h2>

            <p className={styles.sub}>
              A comprehensive, adaptive ACT programme with no compromises —
              from first diagnostic to final admit.
            </p>

            <ul className={styles.featureList}>
              {FEATURES.map((f, i) => (
                <li
                  key={f.letter}
                  className={`${styles.featureItem} ${visible ? styles.itemVisible : ""}`}
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <div className={styles.featureLetter} aria-hidden="true">
                    {f.letter}
                  </div>
                  <div className={styles.featureText}>
                    <strong className={styles.featureTitle}>{f.title}</strong>
                    <span className={styles.featureDesc}>{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: visual panel ── */}
          <div
            className={`${styles.visual} ${visible ? styles.visualVisible : ""}`}
          >
            {/* Animated score number: counts 30 → 36 on scroll-in */}
            <AnimatedScore active={visible} />

            <div className={styles.scoreLabel}>ACT Perfect Score</div>

            <div className={styles.scoreDivider} aria-hidden="true" />

            <p className={styles.scoreNote} style={{ fontSize: 15, marginBottom: 10 }}>
              Our highest ACT achievers
            </p>
            <p className={styles.scoreNote}>
              EduQuest trains every student to their maximum potential. Our aim
              is to take{" "}
              <strong className={styles.scoreNoteStrong}>
                every student above 28+
              </strong>{" "}
              with a target of 36.
            </p>

            {/* Score tier cards */}
            <div className={styles.tierList}>
              {SCORE_RANGES.map((r) => (
                <div key={r.tier} className={styles.tierCard}>
                  <div className={styles.tierCardLabel}>{r.label}</div>
                  <div className={styles.tierCardDetail}>
                    {r.emoji}{" "}
                    <strong
                      className={
                        r.tierClass === "gold"
                          ? styles.tierGold
                          : styles.tierSilver
                      }
                    >
                      {r.tier}
                    </strong>{" "}
                    — {r.detail}
                  </div>
                </div>
              ))}

              {/* Goal card */}
              <div className={`${styles.tierCard} ${styles.tierGoal}`}>
                <div className={`${styles.tierCardLabel} ${styles.tierGoalLabel}`}>
                  Our Goal
                </div>
                <div className={styles.tierCardDetail}>
                  🎯 All students →{" "}
                  <strong className={styles.tierGold}>36 / 1500+</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}