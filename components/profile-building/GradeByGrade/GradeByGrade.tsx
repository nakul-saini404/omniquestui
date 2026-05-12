"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GradeByGrade.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface BrandRow {
  bad: string;
  good: string;
  whatHappening: string;
}

interface CardItem {
  icon: string;
  title: string;
  points: string[];
}

interface GradeData {
  grade: number;
  label: string;
  phase: string;
  accentColor: string;
  textColor: string;
  heroDesc: string;
  tags: string[];
  brand: BrandRow;
  cards: CardItem[];
  callout: {
    icon: string;
    title: string;
    desc: string;
  };
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const GRADES: GradeData[] = [
  {
    grade: 8,
    label: "Class Eight",
    phase: "Explore",
    accentColor: "#7ec8e3",
    textColor: "#0b1c3d",
    heroDesc:
      "Grade 8 is the seed stage. Before the world narrows your options, EduQuest helps you explore widely — subjects, skills, activities — so that by Grade 9 you already have a head start on every peer.",
    tags: ["Foundational Year", "Wide Exploration", "Habit Formation", "Early Awareness"],
    brand: {
      bad: 'Join random clubs, try coding, MUN, Olympiads because "it\'s good for profile"',
      good: "Explore without pressure. Observe what genuinely excites you. Document curiosity.",
      whatHappening:
        "You're not building a profile yet — you're discovering raw signals of identity.",
    },
    cards: [
      {
        icon: "🧭",
        title: "Interest Discovery",
        points: [
          "Personality & aptitude assessment",
          "Subject strength mapping",
          "Career pathway overview sessions",
          "1-on-1 mentor introductory meeting",
        ],
      },
      {
        icon: "📚",
        title: "Academic Foundation",
        points: [
          "Early exposure to SAT Math concepts",
          "English reading & writing habit-building",
          "Introduction to AP subjects roadmap",
          "Science olympiad preparation awareness",
        ],
      },
      {
        icon: "🎯",
        title: "Activity Seeding",
        points: [
          "Identify 2–3 interest areas to pursue",
          "Join school clubs or start one",
          "Explore music, art, or performing arts",
          "Community service or volunteering start",
        ],
      },
      {
        icon: "🌍",
        title: "Global Awareness",
        points: [
          "Introduction to US/UK/Canada/Singapore admissions",
          "Understanding what top universities look for",
          "Summer programme awareness & research",
          "Online courses on Coursera / edX exploration",
        ],
      },
    ],
    callout: {
      icon: "💡",
      title: "Grade 8 Goal",
      desc: "Leave this year with clarity on 2–3 genuine interests, a habit of academic reading, and awareness of what the journey ahead looks like. You're planting seeds — they'll bloom by Grade 11.",
    },
  },
  {
    grade: 9,
    label: "Class Nine",
    phase: "Discover",
    accentColor: "#a8d5a2",
    textColor: "#0b1c3d",
    heroDesc:
      "Grade 9 is about committing to direction. You've explored — now you focus. EduQuest helps you select the right subjects, begin standardised test planning, and build your first meaningful extracurricular story.",
    tags: [
      "Direction Setting",
      "SAT/ACT Planning Begins",
      "8–9 EduQuest Workshops",
      "6–7 Project Modules",
    ],
    brand: {
      bad: 'Continue multiple activities to "show consistency"',
      good: "Notice patterns: What do you enjoy + perform well in? Drop the noise.",
      whatHappening: "Your interests start becoming intentional.",
    },
    cards: [
      {
        icon: "📐",
        title: "Academic Exploration",
        points: [
          "Subject selection guidance for Grade 11 & 12",
          "AP subject recommendations based on interests",
          "Strong GPA strategy & study technique coaching",
          "Introduction to Pre-AP preparation",
        ],
      },
      {
        icon: "📝",
        title: "Standardised Test Planning",
        points: [
          "SAT/ACT diagnostic assessment",
          "Recommended timeline to 1400+ SAT",
          "PSAT awareness & target setting",
          "AP subject selection support",
        ],
      },
      {
        icon: "☀️",
        title: "Summer Engagement",
        points: [
          "Apply to skill-based summer programmes",
          "Curated internship opportunities (age-appropriate)",
          "Summer research introduction programmes",
          "University campus tour planning (India/abroad)",
        ],
      },
      {
        icon: "🎗️",
        title: "Focus Areas",
        points: [
          "Identify subjects & activities aligned to your profile",
          "Begin participation in national/international competitions",
          "8–9 EduQuest skill workshops (certificates)",
          "6–7 guided project modules",
        ],
      },
    ],
    callout: {
      icon: "🚀",
      title: "Grade 9 Goal",
      desc: "Exit Grade 9 with a clear interest area, a SAT/ACT preparation plan, one meaningful summer experience, and the start of a competition or project track. The foundation is set.",
    },
  },
  {
    grade: 10,
    label: "Class Ten",
    phase: "Develop",
    accentColor: "#d4a843",
    textColor: "#0b1c3d",
    heroDesc:
      "Grade 10 is where good students become great applicants. Board exams, SAT prep, and the sharpening of your extracurricular story — this is the busiest and most important year to have expert guidance.",
    tags: ["Highest Stakes Year", "SAT Preparation", "6–7 Workshops", "4–5 Projects"],
    brand: {
      bad: "Add certifications, competitions, resume lines",
      good: "Begin building skills + small projects in 1–2 clear directions.",
      whatHappening: "Your profile shifts from participation → capability.",
    },
    cards: [
      {
        icon: "🧪",
        title: "Academic Exploration",
        points: [
          "Final subject selection for Grade 11 & 12 confirmed",
          "Board exam strategy (CBSE/ICSE/IB/IGCSE)",
          "SAT Math & Reading intensive begins",
          "AP subject deep-dive: Calc, Physics, CS, Bio",
        ],
      },
      {
        icon: "📊",
        title: "Standardised Test Prep",
        points: [
          "Full SAT diagnostic & 6-month prep plan",
          "PSAT participation & score analysis",
          "AP May exam preparation (1–2 subjects)",
          "First official SAT attempt (Oct/Nov)",
        ],
      },
      {
        icon: "🌏",
        title: "Summer Engagement",
        points: [
          "Applications to prestigious summer programmes (MIT, Stanford, etc.)",
          "Research internship placement support",
          "Model UN, debate, science fair participation",
          "Leadership role procurement in school activities",
        ],
      },
      {
        icon: "🏅",
        title: "Focus Areas",
        points: [
          "Hone extracurriculars aligned to your profile theme",
          "Begin working toward national-level recognition",
          "6–7 EduQuest skill workshops",
          "4–5 guided project & capstone modules",
        ],
      },
    ],
    callout: {
      icon: "🎯",
      title: "Grade 10 Goal",
      desc: "Finish with strong board grades, an SAT score in progress, one notable summer experience, and a clear narrative forming around 1–2 core extracurricular themes. Your story is taking shape.",
    },
  },
  {
    grade: 11,
    label: "Class Eleven",
    phase: "Define",
    accentColor: "#f4a261",
    textColor: "#ffffff",
    heroDesc:
      "Grade 11 is the defining chapter. Your intended major crystallises. Leadership positions are claimed. Research is published. Your profile goes from \"good student\" to \"compelling applicant\" — this is when it happens.",
    tags: [
      "Major Exploration",
      "Leadership Roles",
      "4–5 Workshops",
      "2–3 Capstone Projects",
    ],
    brand: {
      bad: "Stack achievements, internships, research for college apps",
      good: "Go deep: Solve a problem, build something original, take ownership.",
      whatHappening: "Your profile becomes distinct and differentiated.",
    },
    cards: [
      {
        icon: "🔬",
        title: "Academic Exploration",
        points: [
          "Intended major exploration: 1-on-1 with subject matter experts",
          "Deep AP coursework (3–5 subjects)",
          "Research paper ideation & mentor pairing",
          "TMUA / UCAT / LSAT early awareness (UK-bound)",
        ],
      },
      {
        icon: "📋",
        title: "Standardised Tests",
        points: [
          "SAT target score attainment (1450–1600 range)",
          "AP exams: 3–5 subjects, targeting 4s & 5s",
          "Subject SAT II planning (if required)",
          "IELTS/TOEFL early prep begins",
        ],
      },
      {
        icon: "🌐",
        title: "Summer Engagement",
        points: [
          "Intensive summer research programmes (abroad or online)",
          "Internships at startups, labs, or NGOs",
          "Publication of first research paper",
          "College campus visits (US/UK shortlisted unis)",
        ],
      },
      {
        icon: "👑",
        title: "Focus Areas",
        points: [
          "Obtain leadership: Captain, President, Editor-in-Chief",
          "External validation: awards, competitions, press coverage",
          "4–5 EduQuest capstone workshops",
          "2–3 major independent projects (publishable quality)",
        ],
      },
    ],
    callout: {
      icon: "✨",
      title: "Grade 11 Goal",
      desc: "By Grade 11's end: SAT 1450+, 3+ AP scores of 4–5, a published research paper or significant capstone, a leadership position, and a crystal-clear story to tell in your Grade 12 applications.",
    },
  },
  {
    grade: 12,
    label: "Class Twelve",
    phase: "Launch",
    accentColor: "#e76f51",
    textColor: "#ffffff",
    heroDesc:
      "Grade 12 is your moment. Everything built over the last four years comes together in the most consequential set of applications of your life. EduQuest's expert counsellors are with you every single step — from shortlisting to acceptance.",
    tags: [
      "Application Season",
      "Essay Coaching",
      "1–2 Final Projects",
      "Financial Aid Strategy",
    ],
    brand: {
      bad: "Compile everything into a resume and essays",
      good: "Craft a clear narrative: Why you, why this field, what impact you've created.",
      whatHappening: "Your profile becomes a story universities remember.",
    },
    cards: [
      {
        icon: "🎓",
        title: "Application Strategy",
        points: [
          "College list building: Dream / Match / Safety",
          "Major alignment with application strategy",
          "Activity list curation (top 10 from your journey)",
          "Recommendation letter strategy & briefing",
        ],
      },
      {
        icon: "✍️",
        title: "Essay & Writing",
        points: [
          "Common App / UCAS / Coalition essay coaching",
          "Supplemental essays: all universities",
          "Personal statement for UK (UCAS)",
          "Scholarship & financial aid essay support",
        ],
      },
      {
        icon: "📅",
        title: "Deadlines & Submission",
        points: [
          "ED1 / ED2 / EA / RD deadline management",
          "Interview preparation (mock Zoom interviews)",
          "Waitlist strategy and deferral responses",
          "Final score reporting strategy (SAT/AP)",
        ],
      },
      {
        icon: "💰",
        title: "Financial Aid & Scholarships",
        points: [
          "CSS Profile & FAFSA guidance",
          "Merit scholarship identification",
          "University-specific award applications",
          "Education loan advisory via trusted partners",
        ],
      },
    ],
    callout: {
      icon: "🏛️",
      title: "Grade 12 Goal",
      desc: "Submit polished, compelling applications to 10–15 universities. Walk away with multiple acceptances from dream schools — and a financial aid package that makes it possible. This is what we've been building toward.",
    },
  },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function GradeByGrade() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeGrade, setActiveGrade] = useState<number>(8);

  const active = GRADES.find((g) => g.grade === activeGrade)!;

  /* Scroll-reveal */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    section.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.section} id="by-grade">
      <div className={styles.container} ref={sectionRef}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <p className={styles.secLabel}>Grade by Grade</p>
          <h2 className={styles.secHeading}>
            The Game Plan: <em>Year by Year</em>
          </h2>
          <p className={styles.secSub}>
            Select your current grade and see exactly what EduQuest does with
            you this year — and what it sets up for the next.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className={`${styles.tabsWrap} ${styles.reveal} ${styles.revealDelay1}`}>
          <div className={styles.tabs}>
            {GRADES.map((g) => (
              <button
                key={g.grade}
                className={`${styles.tab} ${activeGrade === g.grade ? styles.tabActive : ""}`}
                onClick={() => setActiveGrade(g.grade)}
                style={
                  activeGrade === g.grade
                    ? { background: g.accentColor, color: g.textColor, borderColor: g.accentColor }
                    : {}
                }
              >
                Class {g.grade}
              </button>
            ))}
          </div>
        </div>

        {/* ── Panel ── */}
        <div className={`${styles.panel} ${styles.reveal} ${styles.revealDelay2}`}>

          {/* Hero bar */}
          <div className={styles.hero} style={{ borderLeftColor: active.accentColor }}>
            <div className={styles.heroLeft}>
              <div className={styles.gradeNum} style={{ color: active.accentColor }}>
                {active.grade}
              </div>
              <div className={styles.gradeLabel}>{active.label}</div>
              <div className={styles.phaseName}>{active.phase}</div>
            </div>
            <div className={styles.heroRight}>
              <p className={styles.heroDesc}>{active.heroDesc}</p>
              <div className={styles.tags}>
                {active.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Brand thinking row */}
          <div className={styles.brandRow}>
            <div className={styles.brandCol}>
              <h5 className={`${styles.brandColTitle} ${styles.brandColBad}`}>
                ❌ Checklist Thinking
              </h5>
              <p className={styles.brandColText}>{active.brand.bad}</p>
            </div>
            <div className={styles.brandCol}>
              <h5 className={`${styles.brandColTitle} ${styles.brandColGood}`}>
                ✅ Brand Thinking
              </h5>
              <p className={`${styles.brandColText} ${styles.brandColTextGood}`}>
                {active.brand.good}
              </p>
            </div>
            <div className={styles.whatHappening}>
              <strong>What's Really Happening:</strong> {active.brand.whatHappening}
            </div>
          </div>

          {/* Cards grid */}
          <div className={styles.cardsGrid}>
            {active.cards.map((card) => (
              <div
                key={card.title}
                className={styles.card}
                style={{ "--accent": active.accentColor } as React.CSSProperties}
              >
                <div className={styles.cardAccentBar} style={{ background: active.accentColor }} />
                <div className={styles.cardIcon}>{card.icon}</div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <ul className={styles.cardList}>
                  {card.points.map((pt) => (
                    <li key={pt} className={styles.cardListItem}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className={styles.callout}>
            <div className={styles.calloutIcon}>{active.callout.icon}</div>
            <div className={styles.calloutText}>
              <p className={styles.calloutTitle}>{active.callout.title}</p>
              <p className={styles.calloutDesc}>{active.callout.desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}