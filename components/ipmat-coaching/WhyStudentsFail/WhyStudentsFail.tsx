"use client";

import { useState } from "react";
import styles from "./WhyStudentsFail.module.css";

interface FailureReason {
  id: number;
  icon: string;
  tag: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  mistake: string;
  fix: string;
}

interface MythFact {
  myth: string;
  fact: string;
}

interface WarningSigns {
  sign: string;
  impact: string;
  severity: "high" | "medium" | "low";
}

const failureReasons: FailureReason[] = [
  {
    id: 1,
    icon: "📚",
    tag: "Mistake #1",
    title: "Over-Studying, Under-Strategising",
    description:
      "Most students spend 80% of their time reading textbooks and only 20% on mock tests and strategy. IPMAT is a speed-and-accuracy game — the examiner doesn't care how much you know, only how fast and correctly you apply it.",
    stat: "60%",
    statLabel: "of failures are strategy failures, not knowledge failures",
    mistake: "Studying 8 hours daily without attempting a single timed mock",
    fix: "Flip the ratio — 40% learning, 60% mock practice from Month 3 onwards",
  },
  {
    id: 2,
    icon: "🎯",
    tag: "Mistake #2",
    title: "Ignoring Profile Building",
    description:
      "Students who clear the written exam often lose in the PI (Personal Interview) round because they have nothing unique to say. A blank extracurricular profile, no certifications, no research experience — interviewers have seen it a thousand times.",
    stat: "40%",
    statLabel: "of shortlisted students fail at the PI stage due to weak profiles",
    mistake: "Clearing the written test but walking into the PI with nothing to show",
    fix: "Start profile building on Day 1 — research papers, internships, certifications",
  },
  {
    id: 3,
    icon: "⏰",
    tag: "Mistake #3",
    title: "Starting Too Late",
    description:
      "IPMAT is a 12-month preparation journey. Students who begin 3–4 months before the exam are playing catch-up from Day 1. Vocabulary, speed maths, and analytical reasoning cannot be built in 90 days — they need compounding over time.",
    stat: "70%",
    statLabel: "of failed students started preparation less than 4 months before the exam",
    mistake: "Thinking 3 months of intense prep can replace 12 months of consistent effort",
    fix: "Begin in Class 11 or at the very start of Class 12 — compounding is everything",
  },
  {
    id: 4,
    icon: "📉",
    tag: "Mistake #4",
    title: "No Mock Test Analysis",
    description:
      "Taking mocks without analysing them is like going to the gym and never checking your form. Students attempt 10 mocks but spend zero time understanding why they got questions wrong. The analysis session is where the actual improvement happens.",
    stat: "3x",
    statLabel: "faster improvement when mock analysis time equals mock-taking time",
    mistake: "Taking 50 mocks, scoring 65% every single time, and wondering why nothing improves",
    fix: "For every 1 hour of mock, spend 45 minutes reviewing every wrong and skipped answer",
  },
  {
    id: 5,
    icon: "🧩",
    tag: "Mistake #5",
    title: "Weak Subject Prioritisation",
    description:
      "IPMAT Indore has 100 Quant + 40 Verbal questions. Students from Science backgrounds neglect Verbal; Humanities students avoid Quant entirely. Both sections are eliminatory — you cannot afford to have a blind spot in either.",
    stat: "55%",
    statLabel: "of students fail because of a single weak section pulling their overall score down",
    mistake: "Spending 90% of prep time on your strong subject and ignoring the weak one",
    fix: "Identify your weakest section by Week 2 and give it 60% of your daily preparation time",
  },
  {
    id: 6,
    icon: "🗺️",
    tag: "Mistake #6",
    title: "No Structured Roadmap",
    description:
      "Winging it is not a strategy. Students who study random topics on random days, follow 5 different YouTube channels, and switch between 3 different books never build the systematic mastery that IPMAT requires. Structure beats intensity every time.",
    stat: "90%",
    statLabel: "of EduQuest selections follow a structured 12-month roadmap from Day 1",
    mistake: "Following 4 different coaching YouTube channels with no single unified plan",
    fix: "Commit to one structured programme with a clear week-by-week syllabus calendar",
  },
];

const myths: MythFact[] = [
  {
    myth: "You need to be a Science student to crack IPMAT Quant",
    fact: "Class 12-level maths is all that's needed. Humanities students with structured prep consistently outperform Science students who rely on raw ability.",
  },
  {
    myth: "Coaching isn't necessary — self-study is enough",
    fact: "Strategy, mock analysis frameworks, and profile building require expert guidance. Self-study works for content, but not for the 60% that is strategy.",
  },
  {
    myth: "A high Class 12 score guarantees IPMAT success",
    fact: "IPMAT tests speed and accuracy under pressure — not memorised answers. Board exam toppers regularly underperform without specific IPMAT preparation.",
  },
  {
    myth: "The PI round is easy if you clear the written test",
    fact: "40% of written-test qualifiers fail the PI. A weak profile and lack of interview coaching are the two biggest reasons. The PI is a separate battle entirely.",
  },
];

const warningSign: WarningSigns[] = [
  {
    sign: "You haven't taken a single timed mock test yet",
    impact: "No awareness of time pressure, accuracy rate, or section-wise weakness",
    severity: "high",
  },
  {
    sign: "Your Class 12 Maths score is below 80%",
    impact: "Foundational gaps that will show up in the Quant section",
    severity: "high",
  },
  {
    sign: "You have zero extracurriculars or profile credentials",
    impact: "Vulnerable in the Personal Interview even if written score is excellent",
    severity: "high",
  },
  {
    sign: "You're starting preparation in January for a May exam",
    impact: "Only 4 months to cover 12 months of required compounding",
    severity: "medium",
  },
  {
    sign: "You haven't built a reading habit (newspapers, books)",
    impact: "Verbal Ability speed and RC comprehension will be below par",
    severity: "medium",
  },
  {
    sign: "You're preparing without a structured syllabus calendar",
    impact: "Topic gaps, uneven coverage, and last-minute panic",
    severity: "low",
  },
];

const severityConfig = {
  high: { label: "High Risk", color: "severityHigh" },
  medium: { label: "Medium Risk", color: "severityMedium" },
  low: { label: "Low Risk", color: "severityLow" },
};

export default function WhyStudentsFail() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"mistakes" | "myths" | "warning">(
    "mistakes"
  );

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>The Hard Truth</div>
          <h2 className={styles.heading}>
            Why{" "}
            <em className={styles.headingEm}>Most Students Fail</em>{" "}
            IPMAT
          </h2>
          <p className={styles.subheading}>
            Over 85% of IPMAT aspirants don't make it — not because they aren't smart enough, but because they make the same avoidable mistakes. Understanding these failure patterns is the first step to avoiding them.
          </p>

          {/* Tab switcher */}
          <div className={styles.tabGroup}>
            <button
              className={`${styles.tab} ${activeTab === "mistakes" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("mistakes")}
            >
              6 Critical Mistakes
            </button>
            <button
              className={`${styles.tab} ${activeTab === "myths" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("myths")}
            >
              Myths vs Facts
            </button>
            <button
              className={`${styles.tab} ${activeTab === "warning" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("warning")}
            >
              Warning Signs
            </button>
          </div>
        </div>

        {/* ── Failure Rate Banner ── */}
        <div className={styles.failBanner}>
          <div className={styles.failBannerLeft}>
            <span className={styles.failBigNum}>85%</span>
            <span className={styles.failBigLabel}>of aspirants don't make it to IIM</span>
          </div>
          <div className={styles.failBannerDivider} />
          <div className={styles.failBannerRight}>
            <p className={styles.failBannerText}>
              The difference between the 15% who succeed and the 85% who don't is rarely intelligence — it's preparation strategy, profile building, and structured coaching.
            </p>
            <div className={styles.failBannerStats}>
              <div className={styles.failMiniStat}>
                <span className={styles.failMiniNum}>60%</span>
                <span className={styles.failMiniLabel}>fail at strategy</span>
              </div>
              <div className={styles.failMiniStat}>
                <span className={styles.failMiniNum}>40%</span>
                <span className={styles.failMiniLabel}>fail at PI stage</span>
              </div>
              <div className={styles.failMiniStat}>
                <span className={styles.failMiniNum}>70%</span>
                <span className={styles.failMiniLabel}>started too late</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── TAB: Mistakes ── */}
        {activeTab === "mistakes" && (
          <div className={styles.mistakesGrid}>
            {failureReasons.map((reason) => {
              const isExpanded = expandedCard === reason.id;
              return (
                <div
                  key={reason.id}
                  className={`${styles.mistakeCard} ${isExpanded ? styles.mistakeCardExpanded : ""}`}
                >
                  {/* Card Header */}
                  <div
                    className={styles.mistakeHeader}
                    onClick={() => toggleCard(reason.id)}
                    role="button"
                    aria-expanded={isExpanded}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && toggleCard(reason.id)}
                  >
                    <div className={styles.mistakeHeaderLeft}>
                      <div className={styles.mistakeIcon}>{reason.icon}</div>
                      <div>
                        <span className={styles.mistakeTag}>{reason.tag}</span>
                        <h3 className={styles.mistakeTitle}>{reason.title}</h3>
                      </div>
                    </div>
                    <div className={styles.mistakeStatPill}>
                      <span className={styles.mistakePillNum}>{reason.stat}</span>
                    </div>
                    <div className={`${styles.mistakeChevron} ${isExpanded ? styles.mistakeChevronOpen : ""}`}>
                      ▾
                    </div>
                  </div>

                  {/* Card Body — expandable */}
                  {isExpanded && (
                    <div className={styles.mistakeBody}>
                      <p className={styles.mistakeDesc}>{reason.description}</p>

                      <div className={styles.mistakeStatBlock}>
                        <span className={styles.mistakeStatNum}>{reason.stat}</span>
                        <span className={styles.mistakeStatLabel}>{reason.statLabel}</span>
                      </div>

                      <div className={styles.mistakeMFGrid}>
                        <div className={styles.mistakeMistakeBox}>
                          <div className={styles.mistakeMFLabel}>
                            <span className={styles.mistakeMFDot} data-type="mistake" />
                            Common Mistake
                          </div>
                          <p className={styles.mistakeMFText}>{reason.mistake}</p>
                        </div>
                        <div className={styles.mistakeFixBox}>
                          <div className={styles.mistakeMFLabel}>
                            <span className={styles.mistakeMFDot} data-type="fix" />
                            EduQuest Fix
                          </div>
                          <p className={styles.mistakeMFText}>{reason.fix}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── TAB: Myths ── */}
        {activeTab === "myths" && (
          <div className={styles.mythsGrid}>
            {myths.map((item, i) => (
              <div key={i} className={styles.mythCard}>
                <div className={styles.mythSide}>
                  <div className={styles.mythBadge}>
                    <span className={styles.mythBadgeIcon}>✗</span>
                    Myth
                  </div>
                  <p className={styles.mythText}>{item.myth}</p>
                </div>
                <div className={styles.mythArrow}>→</div>
                <div className={styles.factSide}>
                  <div className={styles.factBadge}>
                    <span className={styles.factBadgeIcon}>✓</span>
                    Reality
                  </div>
                  <p className={styles.factText}>{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB: Warning Signs ── */}
        {activeTab === "warning" && (
          <div className={styles.warningWrap}>
            <div className={styles.warningIntro}>
              <p className={styles.warningIntroText}>
                Check yourself honestly against these warning signs. The more that apply to you right now, the more urgently you need a structured preparation plan.
              </p>
            </div>
            <div className={styles.warningList}>
              {warningSign.map((w, i) => (
                <div key={i} className={styles.warningItem}>
                  <div className={styles.warningLeft}>
                    <span className={styles.warningNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={styles.warningCenter}>
                    <p className={styles.warningSign}>{w.sign}</p>
                    <p className={styles.warningImpact}>
                      <span className={styles.warningImpactLabel}>Impact: </span>
                      {w.impact}
                    </p>
                  </div>
                  <div className={styles.warningRight}>
                    <span
                      className={`${styles.severityBadge} ${styles[severityConfig[w.severity].color]}`}
                    >
                      {severityConfig[w.severity].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.warningFooter}>
              <span className={styles.warningFooterIcon}>⚠️</span>
              <p>
                If 3 or more of these apply to you,{" "}
                <strong>your current trajectory will not lead to an IIM seat.</strong>{" "}
                A free strategy session with EduQuest takes 60 minutes and can change the entire course of your preparation.
              </p>
            </div>
          </div>
        )}

        {/* ── EduQuest Solution Strip ── */}
        <div className={styles.solutionStrip}>
          <div className={styles.solutionLeft}>
            <div className={styles.solutionLabel}>The EduQuest Solution</div>
            <h3 className={styles.solutionTitle}>
              We Built Our Entire Programme Around{" "}
              <em className={styles.solutionEm}>These 6 Failures</em>
            </h3>
            <p className={styles.solutionDesc}>
              Every module, every mock test, every profile-building session at EduQuest is designed specifically to prevent these exact failure patterns. 500+ IIM selections. 98% success rate. This is why.
            </p>
          </div>
          <div className={styles.solutionRight}>
            <div className={styles.solutionChecks}>
              {[
                "Strategy-first preparation framework",
                "Profile building from Day 1",
                "12-month structured roadmap",
                "Mock analysis methodology",
                "Section-wise weak point targeting",
                "Interview mastery bootcamp",
              ].map((item, i) => (
                <div key={i} className={styles.solutionCheckItem}>
                  <span className={styles.solutionCheckIcon}>✓</span>
                  <span className={styles.solutionCheckText}>{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className={styles.solutionBtn}>
              Fix My Preparation Strategy →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}