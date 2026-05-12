"use client";

import { useEffect, useRef } from "react";
import styles from "./ProfileChecklist.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface BrandRow {
  grade: number;
  accentColor: string;
  textColor: string;
  checklistThinking: string;
  brandThinking: string;
  whatsHappening: string;
}

interface TrapItem {
  icon: string;
  text: string;
}

interface ActivityItem {
  icon: string;
  name: string;
  detail: string;
  boldPart: string;
}

interface ShiftPair {
  checklist: string;
  brand: string;
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const BRAND_ROWS: BrandRow[] = [
  {
    grade: 8,
    accentColor: "#7ec8e3",
    textColor: "#0b1c3d",
    checklistThinking: 'Join random clubs, try coding, MUN, Olympiads because "it\'s good for profile"',
    brandThinking: "Explore without pressure. Observe what genuinely excites you. Document curiosity.",
    whatsHappening: "You're not building a profile yet — you're discovering raw signals of identity.",
  },
  {
    grade: 9,
    accentColor: "#a8d5a2",
    textColor: "#0b1c3d",
    checklistThinking: 'Continue multiple activities to "show consistency"',
    brandThinking: "Notice patterns: What do you enjoy + perform well in? Drop the noise.",
    whatsHappening: "Your interests start becoming intentional.",
  },
  {
    grade: 10,
    accentColor: "#d4a843",
    textColor: "#0b1c3d",
    checklistThinking: "Add certifications, competitions, resume lines",
    brandThinking: "Begin building skills + small projects in 1–2 clear directions.",
    whatsHappening: "Your profile shifts from participation → capability.",
  },
  {
    grade: 11,
    accentColor: "#f4a261",
    textColor: "#ffffff",
    checklistThinking: "Stack achievements, internships, research for college apps",
    brandThinking: "Go deep: Solve a problem, build something original, take ownership.",
    whatsHappening: "Your profile becomes distinct and differentiated.",
  },
  {
    grade: 12,
    accentColor: "#e76f51",
    textColor: "#ffffff",
    checklistThinking: "Compile everything into a resume and essays",
    brandThinking: "Craft a clear narrative: Why you, why this field, what impact you've created.",
    whatsHappening: "Your profile becomes a story universities remember.",
  },
];

const TRAP_BAD: TrapItem[] = [
  { icon: "📜", text: "10 certificates from random online courses" },
  { icon: "🎭", text: "MUN + coding + volunteering — chosen randomly with no connecting thread" },
  { icon: "🐑", text: 'Following what "top students do" rather than building your own path' },
  { icon: "📋", text: "Resume full of activities with no clear identity or narrative thread" },
];

const TRAP_GOOD: TrapItem[] = [
  { icon: "🔬", text: "1 meaningful project with real depth, impact, and original thinking" },
  { icon: "🎯", text: "A clear direction with consistent, escalating growth over multiple years" },
  { icon: "🦅", text: "Building what only you can build — an authentic, unrepeatable story" },
  { icon: "🧠", text: "Profile with a clear identity that answers: Who are you? What do you care about?" },
];

const ACTIVITIES: ActivityItem[] = [
  {
    icon: "🏆",
    name: "Olympiads",
    detail: "if they reflect real academic depth",
    boldPart: "if they reflect real academic depth",
  },
  {
    icon: "🌐",
    name: "MUNs",
    detail: "if they align with a policy, law, or global affairs narrative — not just attendance.",
    boldPart: "if they align with a policy, law, or global affairs narrative",
  },
  {
    icon: "💼",
    name: "Internships",
    detail: "if they lead to learning, contribution, or genuine insight you can articulate.",
    boldPart: "if they lead to learning, contribution, or genuine insight",
  },
  {
    icon: "📖",
    name: "Courses",
    detail: "if they translate into application — a project, an idea, a published outcome.",
    boldPart: "if they translate into application",
  },
  {
    icon: "🤝",
    name: "Volunteering",
    detail: "if it creates real impact, not just hours logged for the sake of the resume.",
    boldPart: "if it creates real impact",
  },
];

const SHIFT_PAIRS: ShiftPair[] = [
  { checklist: '"What should I do next?"',     brand: '"Who am I becoming?"' },
  { checklist: '"How many activities?"',        brand: '"What story is forming?"' },
  { checklist: '"What do colleges want?"',      brand: '"What do I genuinely care about?"' },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function ProfileChecklist() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Scroll-reveal */
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.07 }
    );
    root.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>

      {/* ══════════════════════════════════════
          SECTION 1 — Brand Evolution Table
      ══════════════════════════════════════ */}
      <section className={styles.tableSection} id="brand-evolution">
        <div className={styles.container}>

          {/* Header */}
          <div className={`${styles.header} ${styles.reveal}`}>
            <p className={styles.secLabel}>Profile Building Is NOT a Checklist</p>
            <h2 className={styles.secHeading}>
              It's <em>Brand Evolution</em>
            </h2>
            <p className={styles.secSub}>
              Every grade is a shift — from random activities to a compelling, coherent identity.
              Here's what most students do vs. what actually builds a strong profile.
            </p>
          </div>

          {/* Table */}
          <div className={`${styles.tableWrap} ${styles.reveal} ${styles.revealDelay1}`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thGrade}>Grade</th>
                  <th className={styles.thBad}>
                    ❌ Checklist Thinking
                    <span className={styles.thSub}>What most students do</span>
                  </th>
                  <th className={styles.thGood}>
                    ✅ Brand Thinking
                    <span className={styles.thSub}>What actually builds a strong profile</span>
                  </th>
                  <th className={styles.thWhat}>🔍 What's Really Happening</th>
                </tr>
              </thead>
              <tbody>
                {BRAND_ROWS.map((row) => (
                  <tr key={row.grade} className={styles.tr}>
                    <td className={styles.tdGrade}>
                      <div
                        className={styles.gradeBadge}
                        style={{ background: row.accentColor, color: row.textColor }}
                      >
                        {row.grade}
                      </div>
                    </td>
                    <td className={styles.tdBad}>{row.checklistThinking}</td>
                    <td className={styles.tdGood}>{row.brandThinking}</td>
                    <td className={styles.tdWhat}>{row.whatsHappening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — The Trap
      ══════════════════════════════════════ */}
      <section className={styles.trapSection} id="the-trap">
        <div className={styles.container}>

          {/* Header */}
          <div className={`${styles.header} ${styles.reveal}`}>
            <p className={`${styles.secLabel} ${styles.secLabelLight}`}>
              The Trap Most Students Fall Into
            </p>
            <h2 className={`${styles.secHeading} ${styles.secHeadingLight}`}>
              Looks impressive <em className={styles.emRed}>vs.</em> actually impressive
            </h2>
            <p className={`${styles.secSub} ${styles.secSubLight}`}>
              Admissions officers read thousands of applications. They see through the noise
              immediately. Here's the difference that matters.
            </p>
          </div>

          {/* Trap grid */}
          <div className={`${styles.trapGrid} ${styles.reveal} ${styles.revealDelay1}`}>
            {/* Bad col */}
            <div className={styles.trapCol}>
              <div className={`${styles.trapColHead} ${styles.trapColHeadBad}`}>
                ❌ Looks Impressive (But Isn't)
              </div>
              <div className={styles.trapColBody}>
                {TRAP_BAD.map((item) => (
                  <div key={item.text} className={styles.trapRow}>
                    <span className={styles.trapIcon}>{item.icon}</span>
                    <span className={`${styles.trapText} ${styles.trapTextBad}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Good col */}
            <div className={styles.trapCol}>
              <div className={`${styles.trapColHead} ${styles.trapColHeadGood}`}>
                ✅ Actually Impressive
              </div>
              <div className={styles.trapColBody}>
                {TRAP_GOOD.map((item) => (
                  <div key={item.text} className={styles.trapRow}>
                    <span className={styles.trapIcon}>{item.icon}</span>
                    <span className={`${styles.trapText} ${styles.trapTextGood}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className={`${styles.actHeader} ${styles.reveal} ${styles.revealDelay1}`}>
            <p className={`${styles.secLabel} ${styles.secLabelLight}`}>So What About Activities?</p>
            <p className={styles.actSubtitle}>
              Activities are <strong className={styles.actStrong}>tools</strong>, not the goal.
              The same activity can be weak (done for resume) or powerful (done with intent and depth).
            </p>
          </div>
          <div className={`${styles.actGrid} ${styles.reveal} ${styles.revealDelay2}`}>
            {ACTIVITIES.map((act) => (
              <div key={act.name} className={styles.actCard}>
                <div className={styles.actCardName}>
                  {act.icon} {act.name}
                </div>
                <div className={styles.actCardDetail}>
                  Only powerful{" "}
                  <strong className={styles.actCardBold}>{act.boldPart}</strong>
                  {act.detail.replace(act.boldPart, "").replace("if", "").trim()
                    ? " — " + act.detail.slice(act.detail.indexOf(act.boldPart) + act.boldPart.length).replace(/^[\s,—]+/, "")
                    : "."}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — The Shift
      ══════════════════════════════════════ */}
      <section className={styles.shiftSection} id="the-shift">
        <div className={styles.container}>

          {/* Header */}
          <div className={`${styles.header} ${styles.reveal}`}>
            <p className={styles.secLabel}>The Shift That Changes Everything</p>
            <h2 className={styles.secHeading}>
              From <em>Checklist</em> to Brand
            </h2>
            <p className={styles.secSub}>
              The question you ask yourself every year determines the kind of profile you build.
              One mindset produces a resume. The other produces a story.
            </p>
          </div>

          {/* Shift pairs grid */}
          <div className={`${styles.shiftGrid} ${styles.reveal} ${styles.revealDelay1}`}>
            {SHIFT_PAIRS.map((pair) => (
              <div key={pair.checklist} className={styles.shiftPair}>
                <div className={`${styles.shiftCard} ${styles.shiftCardBad}`}>
                  <span className={`${styles.shiftLabel} ${styles.shiftLabelBad}`}>
                    ❌ Checklist Mindset
                  </span>
                  <p className={`${styles.shiftQ} ${styles.shiftQBad}`}>{pair.checklist}</p>
                </div>
                <div className={styles.shiftArrow}>→</div>
                <div className={`${styles.shiftCard} ${styles.shiftCardGood}`}>
                  <span className={`${styles.shiftLabel} ${styles.shiftLabelGood}`}>
                    ✅ Brand Mindset
                  </span>
                  <p className={`${styles.shiftQ} ${styles.shiftQGood}`}>{pair.brand}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Strong profile box */}
          <div className={`${styles.spBox} ${styles.reveal} ${styles.revealDelay2}`}>
            <div className={styles.spLeft}>
              <h4 className={styles.spTitle}>
                🎯 What a Strong Profile Actually Looks Like (By Grade 12)
              </h4>
              <p className={styles.spDesc}>
                It's not a list of activities. It's a coherent, evolving narrative that only you
                could have lived. That's what EduQuest helps you build — from Grade 8 to acceptance day.
              </p>
            </div>
            <div className={styles.spRight}>
              <div className={styles.spBad}>
                ❌&nbsp; "I did MUN, coding, volunteering, and internships"
                <span className={styles.spBadSub}>— A resume. Forgettable.</span>
              </div>
              <div className={styles.spGood}>
                ✅&nbsp; "Over 4 years, I developed a deep interest in{" "}
                <em className={styles.spEm}>X</em>, built skills in{" "}
                <em className={styles.spEm}>Y</em>, created{" "}
                <em className={styles.spEm}>Z</em> impact — and now I want to take this
                forward at your university."
                <span className={styles.spGoodSub}>— A brand with a narrative. Unforgettable.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}