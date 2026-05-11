"use client";

import { useEffect, useRef } from "react";
import styles from "./PreApSections.module.css";

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook — replicates the IntersectionObserver
   from the original HTML file
───────────────────────────────────────────────────────── */
function useReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

/* ─────────────────────────────────────────────────────────
   SECTION 1 — THE HARD TRUTH
   "Why Most Students Struggle in AP Exams"
───────────────────────────────────────────────────────── */

const FAIL_REASONS = [
  {
    icon: "⏰",
    title: "Starting Too Late",
    body: "Most students begin AP prep 8–12 weeks before the exam. College Board content requires 6–18 months of conceptual build-up. Cramming a year's worth of material in weeks leads to surface-level recall — not the analytical depth AP questions demand.",
  },
  {
    icon: "📚",
    title: "Weak Foundational Knowledge",
    body: "AP Chemistry assumes mastery of Moles and Equilibrium. AP Calculus BC assumes fluency in limits and derivatives. Students who skip the foundation and jump into AP content consistently struggle with multi-step problems and free-response questions.",
  },
  {
    icon: "🎯",
    title: "No Personalised Strategy",
    body: "Generic coaching and YouTube playlists treat all students the same. AP exams have 19+ skill clusters, and each student's gap profile is different. Without a diagnostic-driven plan, students spend time on what they already know and neglect their actual weak areas.",
  },
  {
    icon: "📝",
    title: "Poor Free-Response Technique",
    body: "Free-response questions account for 40–50% of AP scores, yet most students practise almost exclusively on multiple-choice. Learning how to structure FRQ answers — with the right vocabulary, data citation, and argumentation — requires months of deliberate practice.",
  },
  {
    icon: "🧪",
    title: "No Real Mock Testing",
    body: "Students who haven't taken full-length, timed, exam-condition mock tests before May are almost always surprised by the pacing and mental stamina required. AP exams are 3+ hours — familiarity with exam conditions is a performance factor in itself.",
  },
  {
    icon: "🧩",
    title: "Subject-Only Focus",
    body: "AP is not just about knowing Biology or History — it is about communicating that knowledge in College Board's specific style. Students who learn content without simultaneously learning how AP frames and weights questions consistently underperform relative to their knowledge level.",
  },
  {
    icon: "😰",
    title: "Exam Anxiety & Burnout",
    body: "Grade 12 students juggling SAT, school board exams, extracurriculars, and college applications simultaneously often hit burnout by April. Pre-AP students spread their load across Grades 9–11, arriving at Grade 12 calmer and better prepared.",
  },
  {
    icon: "🗺️",
    title: "No Long-Term Roadmap",
    body: "Students who choose AP subjects randomly — without aligning them to their intended major, target universities, or academic strengths — often take too many or the wrong combination. A strategic AP subject selection plan is as important as the coaching itself.",
  },
];

const SCORE_ROWS = [
  {
    label: "Score 5 (Extremely Well Qualified)",
    pct: "~15%",
    width: "15%",
    fillClass: "fillGold" as const,
    redPct: false,
  },
  {
    label: "Score 4 (Well Qualified)",
    pct: "~20%",
    width: "20%",
    fillClass: "fillGold2" as const,
    redPct: false,
  },
  {
    label: "Score 3 (Qualified)",
    pct: "~25%",
    width: "25%",
    fillClass: "fillGrey" as const,
    redPct: false,
  },
  {
    label: "Score 1–2 (Not Qualified)",
    pct: "~40%",
    width: "40%",
    fillClass: "fillRed" as const,
    redPct: true,
  },
];

export function HardTruthSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionCream2}`}
      id="why-fail"
    >
      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={`${styles.hdr} ${styles.reveal}`}>
          <span className={styles.sTag}>The Hard Truth</span>
          <span className={styles.goldLine} />
          <h2 className={styles.sHead}>
            Why Most Students Struggle in AP Exams
          </h2>
          <p className={styles.sSub}>
            Understanding the root causes of poor AP performance is the first
            step to avoiding them. These are the patterns we see most often —
            and exactly what Pre-AP coaching is designed to fix.
          </p>
        </div>

        {/* ── Intro two-col ── */}
        <div className={styles.failIntro}>
          {/* Left col — stat block + distribution */}
          <div className={styles.reveal}>
            <div className={styles.failStatBlock}>
              <div className={styles.bigNum}>60%</div>
              <div className={styles.bigLbl}>
                of AP students globally score 2 or below — not because they
                aren't smart, but because they start too late and study the
                wrong way.
              </div>
            </div>

            <div className={styles.scoreDistCard}>
              <h4 className={styles.scoreDistTitle}>
                The Score Distribution Reality
              </h4>
              <div className={styles.scoreDistRows}>
                {SCORE_ROWS.map((row) => (
                  <div key={row.label} className={styles.scoreRow}>
                    <div className={styles.scoreRowMeta}>
                      <span>{row.label}</span>
                      <span
                        className={
                          row.redPct
                            ? styles.scoreRowPctRed
                            : styles.scoreRowPct
                        }
                      >
                        {row.pct}
                      </span>
                    </div>
                    <div className={styles.scoreBar}>
                      <div
                        className={`${styles.scoreBarFill} ${styles[row.fillClass]}`}
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.scoreDistSource}>
                Source: College Board AP Score Distributions — global average
                across all subjects.
              </p>
            </div>
          </div>

          {/* Right col — narrative + avg block */}
          <div className={`${styles.failIntroRight} ${styles.reveal}`}>
            <p className={styles.failIntroText}>
              The difference between a 5 and a 2 is rarely intelligence. It is
              almost always preparation timing, study methodology, and
              conceptual depth. Here are the eight most common failure patterns
              we identify in our free diagnostic assessments:
            </p>
            <div className={styles.failAvgBlock}>
              <div className={styles.failAvgTitle}>
                EduQuest students average 4.8 / 5
              </div>
              <p className={styles.failAvgDesc}>
                Because every EduQuest student has their failure patterns
                identified at the diagnostic stage — and eliminated through
                structured Pre-AP coaching before exam season begins.
              </p>
            </div>
          </div>
        </div>

        {/* ── 8 Fail-reason cards ── */}
        <div className={`${styles.failReasons} ${styles.reveal}`}>
          {FAIL_REASONS.map((item) => (
            <div key={item.title} className={styles.failCard}>
              <div className={styles.failCardHead}>
                <div className={styles.failIcon}>{item.icon}</div>
                <h4 className={styles.failCardTitle}>{item.title}</h4>
              </div>
              <p className={styles.failCardBody}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* ── Solution banner ── */}
        <div className={`${styles.failSolution} ${styles.reveal}`}>
          <div className={styles.failSolutionIcon}>💡</div>
          <div>
            <h4 className={styles.failSolutionTitle}>
              How EduQuest Eliminates Every One of These
            </h4>
            <p className={styles.failSolutionText}>
              Our free diagnostic assessment maps every student across all
              failure categories on Day 1. The result is a personalised Pre-AP
              plan that starts at exactly the right time, covers exactly the
              right content, includes full mock testing, and is integrated with
              a long-term university admissions strategy — so students arrive at
              AP May exams fully prepared, not hoping for the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION 2 — ALL TRACKS
   "Subjects We Coach"
───────────────────────────────────────────────────────── */

interface Subject {
  icon: string;
  name: string;
  type: "STEM" | "Liberal Arts";
  badge?: string;
}

const SUBJECTS: Subject[] = [
  { icon: "∫", name: "AP Calculus AB & BC",                   type: "STEM",         badge: "High Demand" },
  { icon: "⚗️", name: "AP Chemistry",                         type: "STEM" },
  { icon: "🔬", name: "AP Biology",                           type: "STEM",         badge: "Pre-Med" },
  { icon: "⚡", name: "AP Physics 1 & C",                     type: "STEM" },
  { icon: "💻", name: "AP Computer Science A & CSP",           type: "STEM",         badge: "High Demand" },
  { icon: "📊", name: "AP Statistics",                        type: "STEM" },
  { icon: "📖", name: "AP English Language & Literature",     type: "Liberal Arts" },
  { icon: "🌍", name: "AP World & US History",                type: "Liberal Arts" },
  { icon: "🧠", name: "AP Psychology",                        type: "Liberal Arts" },
  { icon: "📈", name: "AP Micro & Macroeconomics",            type: "Liberal Arts" },
  { icon: "🌱", name: "AP Environmental Science",             type: "STEM" },
  { icon: "🗺️", name: "AP Human Geography",                  type: "Liberal Arts" },
];

export function AllTracksSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionWhite}`}
      id="subjects"
    >
      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={`${styles.hdrCenter} ${styles.reveal}`}>
          <span className={styles.sTag}>All Tracks</span>
          <span className={styles.goldLineCenter} />
          <h2 className={styles.sHead}>Subjects We Coach</h2>
          <p className={styles.sSub}>
            Comprehensive coverage across STEM and Liberal Arts — the subjects
            that matter most for Ivy League and top global university
            admissions.
          </p>
        </div>

        {/* ── Subject cards grid ── */}
        <div className={styles.subjectsGrid}>
          {SUBJECTS.map((subj) => (
            <div
              key={subj.name}
              className={`${styles.subjCard} ${styles.reveal}`}
            >
              <span className={styles.subjIcon}>{subj.icon}</span>
              <div className={styles.subjName}>{subj.name}</div>
              <div className={styles.subjType}>{subj.type}</div>
              {subj.badge && (
                <span className={styles.subjBadge}>{subj.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Combined default export — renders both sections together
   Usage in your page:  import PreApSections from "./PreApSections";
───────────────────────────────────────────────────────── */
export default function PreApSections() {
  return (
    <>
      <HardTruthSection />
      <AllTracksSection />
    </>
  );
}