"use client";

import { useState } from "react";
import styles from "./RealityCheck.module.css";

/* ─── Data ─────────────────────────────────────────────────────────────────── */
type MistakeType = "student" | "parent";

interface Mistake {
  type: MistakeType;
  icon: string;
  title: string;
  body: string;
}

const mistakes: Mistake[] = [
  {
    type: "student",
    icon: "🎓",
    title: "Starting too late — Grade 11 is not the beginning",
    body: `Most students arrive in Grade 11 thinking they have "one year to prepare." In reality, the profile is already 60% decided by Grade 10. <strong>Extracurriculars, research, and leadership roles take years to build</strong> — not months. Starting in Grade 11 means compromising on all three.`,
  },
  {
    type: "parent",
    icon: "👨‍👩‍👧",
    title: "Treating the SAT score as the whole application",
    body: `Parents often believe a 1500+ SAT is the ticket to Harvard. The reality: <strong>top universities are test-optional and holistic</strong>. A 1550 SAT with a generic activity list loses to a 1420 with a compelling, cohesive story every single time. The score opens the door — the profile walks through it.`,
  },
  {
    type: "student",
    icon: "📋",
    title: "Stacking random activities to \u201clook impressive\u201d",
    body: `Admissions officers can spot a padded activity list instantly. <strong>10 unrelated clubs signal nothing</strong> — 3 deeply pursued, connected activities that tell a coherent story signal genuine intellectual identity. Depth beats breadth every time at selective universities.`,
  },
  {
    type: "parent",
    icon: "💸",
    title: "Choosing a counsellor based on price, not track record",
    body: `Many families switch counsellors in Grade 12 after spending Grade 9–11 with someone who "seemed fine." By then, <strong>the profile damage is done</strong>. No essay can fix a weak activity list or a missed research opportunity. Invest in strategy early — it costs far less than a gap year.`,
  },
  {
    type: "student",
    icon: "✍️",
    title: "Writing the essay about achievements, not character",
    body: `The most common essay mistake: writing a highlight reel of awards and accomplishments. Admissions readers want to know <strong>who you are, how you think, and what drives you</strong> — not what you've won. The best essays reveal character through small, specific, human moments.`,
  },
  {
    type: "parent",
    icon: "🎯",
    title: "Applying only to \u201cbrand name\u201d universities",
    body: `Parents often push students toward a narrow list of Harvard / Oxford / MIT — missing dozens of exceptional universities with <strong>better fit, higher aid, and stronger programmes</strong> for the student's actual interests. A strategic Dream/Match/Safety list across 10–15 universities dramatically improves outcome.`,
  },
  {
    type: "student",
    icon: "🔬",
    title: "Ignoring research until it\u2019s \u201crequired\u201d",
    body: `Research — a published paper, a significant independent project — is one of the strongest differentiators on any top-university application. Yet <strong>most students treat it as optional</strong> until they see a peer get accepted with one. Starting by Grade 10 allows time for a genuinely publishable outcome.`,
  },
  {
    type: "parent",
    icon: "📅",
    title: "Underestimating application deadlines & financial aid timelines",
    body: `ED1 deadlines fall in November — months before most families even begin thinking about applications. <strong>CSS Profile and FAFSA have their own earlier deadlines</strong>. Missing these doesn't just reduce chances of admission — it eliminates access to institutional financial aid entirely.`,
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */
type Filter = "all" | "student" | "parent";

export default function RealityCheck() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = mistakes.filter(
    (m) => filter === "all" || m.type === filter
  );

  const handleToggle = (globalIndex: number) => {
    setOpenIndex((prev) => (prev === globalIndex ? null : globalIndex));
  };

  return (
    <section className={styles.section} id="mistakes">
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* ── LEFT: intro + filter tabs ── */}
          <div className={styles.intro}>
            <div className={styles.secLabel}>Reality Check</div>
            <h2 className={styles.heading}>
              Mistakes Students &amp;&nbsp;<em>Parents</em> Make
            </h2>
            <p className={styles.sub}>
              These are the patterns EduQuest sees every year — avoidable,
              fixable, and costly when left unchecked. Filter by who it applies
              to.
            </p>

            <div className={styles.tabs}>
              {(["all", "student", "parent"] as Filter[]).map((f) => (
                <button
                  key={f}
                  className={`${styles.tab} ${filter === f ? styles.tabActive : ""}`}
                  onClick={() => {
                    setFilter(f);
                    setOpenIndex(null);
                  }}
                >
                  {f === "all" ? "All" : f === "student" ? "Students" : "Parents"}
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: accordion list ── */}
          <div className={styles.list}>
            {filtered.map((mistake, idx) => {
              // use original index so open state persists across filter switches isn't needed;
              // we reset on filter change — local idx is fine
              const isOpen = openIndex === idx;
              return (
                <div
                  key={`${filter}-${idx}`}
                  className={`${styles.item} ${
                    mistake.type === "student"
                      ? styles.itemStudent
                      : styles.itemParent
                  } ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    className={styles.itemHeader}
                    onClick={() => handleToggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`${styles.badge} ${
                        mistake.type === "student"
                          ? styles.badgeStudent
                          : styles.badgeParent
                      }`}
                    >
                      {mistake.icon}
                    </div>
                    <span className={styles.itemTitle}>{mistake.title}</span>
                    <span
                      className={`${styles.chevron} ${
                        isOpen ? styles.chevronOpen : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>

                  <div
                    className={`${styles.body} ${isOpen ? styles.bodyOpen : ""}`}
                  >
                    <div
                      className={styles.bodyInner}
                      dangerouslySetInnerHTML={{ __html: mistake.body }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}