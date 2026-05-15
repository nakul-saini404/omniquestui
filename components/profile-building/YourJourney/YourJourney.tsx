"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./YourJourney.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface GradeItem {
  icon: string;
  title: string;
  detail: string;
}

interface GradeData {
  grade: number;
  color: string;
  textColor: string;
  phase: string;
  title: string;
  desc: string;
  items: GradeItem[];
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const GRADES: GradeData[] = [
  {
    grade: 8,
    color: "#7ec8e3",
    textColor: "#0b1c3d",
    phase: "EXPLORE",
    title: "Class 8 — Explore",
    desc: "The foundation year. Before the race begins, EduQuest helps you understand yourself — your strengths, passions, and the vast landscape of global higher education.",
    items: [
      { icon: "🧭", title: "Interest Discovery", detail: "Aptitude & personality mapping to identify your authentic academic direction." },
      { icon: "📚", title: "Academic Foundation", detail: "Early SAT Math concepts, reading habits, introduction to AP subjects." },
      { icon: "🎯", title: "Activity Seeding", detail: "Identify 2–3 genuine interest areas — clubs, arts, science, community service." },
      { icon: "🌍", title: "Global University Awareness", detail: "Understand what US, UK, Canada & Singapore admissions actually look for." },
    ],
  },
  {
    grade: 9,
    color: "#a8d5a2",
    textColor: "#0b1c3d",
    phase: "DISCOVER",
    title: "Class 9 — Discover",
    desc: "Direction is set. You commit to subjects, begin SAT planning, and build the first chapter of your extracurricular story with 8–9 EduQuest workshops.",
    items: [
      { icon: "📐", title: "Subject Selection (Gr.11/12)", detail: "Choose the right subjects for Grade 11 & 12 — aligned to your target major." },
      { icon: "📝", title: "SAT/ACT Planning Begins", detail: "Diagnostic assessment + recommended timeline for 1400+ score." },
      { icon: "☀️", title: "Summer Programmes", detail: "Apply to skill-based summer programmes and age-appropriate internships." },
      { icon: "🏆", title: "Competitions & Workshops", detail: "8–9 EduQuest workshops + 6–7 projects. National competition participation." },
    ],
  },
  {
    grade: 10,
    color: "#d4a843",
    textColor: "#0b1c3d",
    phase: "DEVELOP",
    title: "Class 10 — Develop",
    desc: "Board exams meet SAT prep meets profile sharpening. The busiest and most pivotal year — guided by EduQuest every step of the way.",
    items: [
      { icon: "🧪", title: "Board + SAT Dual Strategy", detail: "CBSE/ICSE/IB boards strategy alongside full SAT preparation track." },
      { icon: "📊", title: "AP Subject Entry", detail: "Begin 1–2 AP subjects aligned to intended major. Target 4s & 5s." },
      { icon: "🌏", title: "Prestigious Summer Programmes", detail: "Apply to MIT, Stanford, and other selective summer research programmes." },
      { icon: "🏅", title: "National Recognition Track", detail: "6–7 workshops + 4–5 projects. Begin earning national-level awards." },
    ],
  },
  {
    grade: 11,
    color: "#f4a261",
    textColor: "#ffffff",
    phase: "DEFINE",
    title: "Class 11 — Define",
    desc: "Intended major crystallises. Leadership is claimed. Research is published. Grade 11 is when a good student becomes a compelling applicant.",
    items: [
      { icon: "🔬", title: "Research & Major Exploration", detail: "1-on-1 sessions with subject matter experts. Research paper pairing begins." },
      { icon: "📋", title: "SAT 1450+ & 3–5 APs", detail: "Target score attainment, AP 4s & 5s, IELTS/TOEFL early preparation." },
      { icon: "👑", title: "Leadership Positions", detail: "Captain, President, Editor — secure the leadership roles that define your story." },
      { icon: "🌐", title: "Intensive Summer & Research", detail: "2–3 publishable projects + abroad/online research programmes." },
    ],
  },
  {
    grade: 12,
    color: "#e76f51",
    textColor: "#ffffff",
    phase: "LAUNCH",
    title: "Class 12 — Launch",
    desc: "Everything built over four years converges into the most important applications of your life. EduQuest guides you from shortlist to acceptance letter.",
    items: [
      { icon: "🎓", title: "College List & Strategy", detail: "Dream/Match/Safety list. Activity list curation. Recommendation letter strategy." },
      { icon: "✍️", title: "Essay Coaching", detail: "Common App, UCAS personal statement, all supplementals — crafted to perfection." },
      { icon: "📅", title: "Deadline Management", detail: "ED/EA/RD strategy, interview prep, waitlist and deferral response coaching." },
      { icon: "💰", title: "Scholarships & Financial Aid", detail: "CSS Profile, FAFSA, merit scholarships, and education loan advisory." },
    ],
  },
];

/* ─────────────────────────────────────────
   SVG arc helper
───────────────────────────────────────── */
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(startDeg: number, endDeg: number, cx = 200, cy = 200, r = 190): string {
  const s = polarToCartesian(cx, cy, r, startDeg);
  const e = polarToCartesian(cx, cy, r, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M${cx},${cy} L${s.x},${s.y} A${r},${r} 0 ${large},1 ${e.x},${e.y} Z`;
}

function labelPos(midDeg: number, cx = 200, cy = 200, r = 128) {
  return polarToCartesian(cx, cy, r, midDeg);
}

/* ─────────────────────────────────────────
   Per-grade SVG config
───────────────────────────────────────── */
interface SegConfig {
  grade: number;
  startDeg: number;
  endDeg: number;
  midDeg: number;
  color: string;
  labelFill: string;
  subFill: string;
  phase: string;
}

const SEGS: SegConfig[] = [
  { grade: 8, startDeg: 0, endDeg: 72, midDeg: 36, color: "#7ec8e3", labelFill: "#0b1c3d", subFill: "rgba(11,28,61,.72)", phase: "EXPLORE" },
  { grade: 9, startDeg: 72, endDeg: 144, midDeg: 108, color: "#a8d5a2", labelFill: "#0b1c3d", subFill: "rgba(11,28,61,.72)", phase: "DISCOVER" },
  { grade: 10, startDeg: 144, endDeg: 216, midDeg: 180, color: "#d4a843", labelFill: "#0b1c3d", subFill: "rgba(11,28,61,.72)", phase: "DEVELOP" },
  { grade: 11, startDeg: 216, endDeg: 288, midDeg: 252, color: "#f4a261", labelFill: "#ffffff", subFill: "rgba(255,255,255,.88)", phase: "DEFINE" },
  { grade: 12, startDeg: 288, endDeg: 360, midDeg: 324, color: "#e76f51", labelFill: "#ffffff", subFill: "rgba(255,255,255,.88)", phase: "LAUNCH" },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function YourJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<SVGSVGElement>(null);
  const hasSpun = useRef(false);

  const [activeGrade, setActiveGrade] = useState<number>(8);
  const [isSpinning, setIsSpinning] = useState(false);

  const active = GRADES.find((g) => g.grade === activeGrade)!;

  /* ── Scroll-reveal + one-time wheel spin ── */
  useEffect(() => {
    const section = sectionRef.current;
    const wheel = wheelRef.current;
    if (!section || !wheel) return;

    /* Reveal observer */
    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            revealIO.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    section.querySelectorAll(`.${styles.reveal}`).forEach((el) => revealIO.observe(el));

    /* Wheel spin observer — fires once when wheel is 20% visible */
    const spinIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasSpun.current) {
            hasSpun.current = true;
            setIsSpinning(true);
            /* Remove spinning class after animation completes (1.2s) */
            setTimeout(() => setIsSpinning(false), 2200);
            spinIO.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    spinIO.observe(wheel);

    return () => {
      revealIO.disconnect();
      spinIO.disconnect();
    };
  }, []);

  function handleSegClick(grade: number) {
    setActiveGrade(grade);
  }

  return (
    <section className={styles.section} id="path-through">
      <div className={styles.container} ref={sectionRef}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <p className={styles.secLabel}>Your Journey</p>
          <h2 className={styles.secHeading}>
            Build Your Path <em>Through</em>
          </h2>
          <p className={styles.secSub}>
            Each grade is a chapter. Each chapter builds the next.
            Click a segment to explore what happens in that year.
          </p>
        </div>

        {/* ── Animated hint ── */}
        <p className={`${styles.hint} ${styles.reveal} ${styles.revealDelay1}`}>
          Click on each segment to view details.
        </p>

        {/* ── Two-column layout ── */}
        <div className={styles.layout}>

          {/* LEFT — SVG Wheel */}
          <div className={`${styles.wheelWrap} ${styles.reveal} ${styles.revealDelay1}`}>
            <svg
              ref={wheelRef}
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Grade journey wheel"
              role="img"
            /* Apply spin class on the SVG's inner group via className on a <g> below */
            >
              {/* Spinning group — wraps all segments + labels, rotates around centre */}
              <g
                className={`${styles.wheelGroup} ${isSpinning ? styles.wheelSpin : ""}`}
                style={{ transformOrigin: "200px 200px" }}
              >
                {SEGS.map((seg) => {
                  const path = slicePath(seg.startDeg, seg.endDeg);
                  const lbl = labelPos(seg.midDeg);
                  const isActive = activeGrade === seg.grade;

                  return (
                    <g
                      key={seg.grade}
                      className={`${styles.seg} ${isActive ? styles.segActive : ""}`}
                      onClick={() => handleSegClick(seg.grade)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Grade ${seg.grade} — ${seg.phase}`}
                      aria-pressed={isActive}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSegClick(seg.grade);
                        }
                      }}
                    >
                      <path
                        d={path}
                        fill={seg.color}
                        stroke="#0b1c3d"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      {/* Grade number */}
                      <text
                        x={lbl.x}
                        y={lbl.y - 11}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontSize={seg.grade === 10 ? "22" : "26"}
                        fontWeight="900"
                        fill={seg.labelFill}
                        style={{ pointerEvents: "none" }}
                      >
                        {seg.grade}
                      </text>
                      {/* Phase label */}
                      <text
                        x={lbl.x}
                        y={lbl.y + 12}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                        fontSize="9"
                        fontWeight="700"
                        fill={seg.subFill}
                        letterSpacing="1"
                        style={{ pointerEvents: "none" }}
                      >
                        {seg.phase}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Centre donut — NOT in spinning group, stays fixed */}
              <circle
                cx="200"
                cy="200"
                r="75"
                fill="#0b1c3d"
                stroke="rgba(212,168,67,.4)"
                strokeWidth="3"
              />
              <text
                x="200" y="188"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                letterSpacing="2.5"
                fill="rgba(255,255,255,.4)"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                style={{ pointerEvents: "none" }}
              >
                YOUR
              </text>
              <text
                x="200" y="207"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="#d4a843"
                fontFamily="'Playfair Display', Georgia, serif"
                style={{ pointerEvents: "none" }}
              >
                Journey
              </text>
              <text
                x="200" y="223"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                letterSpacing="2.5"
                fill="rgba(255,255,255,.4)"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                style={{ pointerEvents: "none" }}
              >
                AHEAD
              </text>
            </svg>
          </div>

          {/* RIGHT — Detail Panel */}
          <div
            className={`${styles.panel} ${styles.reveal} ${styles.revealDelay2}`}
            role="region"
            aria-live="polite"
            aria-label={`Details for ${active.title}`}
          >
            <span
              className={styles.gradeTag}
              style={{ background: active.color, color: active.textColor }}
            >
              CLASS {active.grade} · {active.phase}
            </span>

            <h3 className={styles.panelTitle}>{active.title}</h3>
            <p className={styles.panelDesc}>{active.desc}</p>

            <div className={styles.items}>
              {active.items.map((item) => (
                <div
                  key={item.title}
                  className={styles.item}
                  style={{ borderLeftColor: active.color }}
                >
                  <span className={styles.itemIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <strong className={styles.itemTitle}>{item.title}</strong>
                    <span className={styles.itemDetail}>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}