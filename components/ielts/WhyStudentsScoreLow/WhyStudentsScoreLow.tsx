"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyStudentsScoreLow.module.css";

/* ══════════════════════════════
   DATA — reasons per exam
══════════════════════════════ */
const examData = {
  IELTS: {
    label: "IELTS",
    subtitle:
      "Most IELTS candidates underperform not because of weak English, but because of avoidable strategic and preparation mistakes.",
    floatTop: { num: "68%", label: "Score Below Band 7" },
    floatBottom: { num: "3–4×", label: "Avg. Retake Attempts" },
    reasons: [
      {
        num: "01",
        icon: "⏳",
        title: "Poor Time Management in Writing",
        body: "Spending too long on Task 1 leaves no time for Task 2, which carries double the marks. Most students lose a full band just from time misallocation.",
      },
      {
        num: "02",
        icon: "📖",
        title: "Not Reading the Question Carefully",
        body: "Answering what you think is asked instead of what is actually asked is the #1 Reading trap. Skimming questions leads to choosing plausible but wrong answers.",
      },
      {
        num: "03",
        icon: "🎙️",
        title: "Rehearsed Speaking Answers",
        body: "Examiners are trained to detect memorised responses. Scripted answers lead to immediate band reduction under Lexical Resource and Fluency criteria.",
      },
      {
        num: "04",
        icon: "👂",
        title: "Losing Focus During Listening",
        body: "One moment of distraction means missing a question — and the recording never repeats. Students who don't pre-read questions while audio plays consistently underperform.",
      },
      {
        num: "05",
        icon: "📝",
        title: "Ignoring Task Achievement in Writing",
        body: "A grammatically perfect essay that misses the task prompt receives a low Task Achievement score, capping the entire Writing band — no matter how good the vocabulary.",
      },
      {
        num: "06",
        icon: "🔁",
        title: "Repeating Words Instead of Paraphrasing",
        body: "Lifting words directly from the question into answers signals limited vocabulary range. IELTS rewards academic paraphrase — a skill that must be deliberately practised.",
      },
      {
        num: "07",
        icon: "📅",
        title: "Insufficient Practice with Timed Mocks",
        body: "Reading and understanding content in a relaxed environment is very different from performing under exam pressure. Students who skip timed mocks always underestimate the difficulty.",
      },
    ],
  },
  TOEFL: {
    label: "TOEFL",
    subtitle:
      "TOEFL iBT demands integrated skills under strict time constraints. These are the most common reasons students walk out with a lower score than expected.",
    floatTop: { num: "55%", label: "Miss Target Score" },
    floatBottom: { num: "2.5×", label: "Avg. Retake Attempts" },
    reasons: [
      {
        num: "01",
        icon: "🧩",
        title: "Struggling with Integrated Tasks",
        body: "The Speaking and Writing integrated tasks require synthesising a lecture with a reading passage simultaneously — a skill most students never practise before exam day.",
      },
      {
        num: "02",
        icon: "⚡",
        title: "Slow Typing Speed in Writing",
        body: "TOEFL Writing requires typing two full essays in under 50 minutes. Students who are not fluent typists consistently run out of time before reaching the required word count.",
      },
      {
        num: "03",
        icon: "🎧",
        title: "No Note-Taking Strategy for Listening",
        body: "TOEFL Listening passages are long and complex. Without a structured note-taking system, students forget key details needed to answer inference and detail questions correctly.",
      },
      {
        num: "04",
        icon: "📚",
        title: "Unfamiliar with Academic Vocabulary",
        body: "TOEFL Reading uses dense academic prose. Students who have not studied the Academic Word List regularly misread passage meaning and eliminate correct answer choices.",
      },
      {
        num: "05",
        icon: "🗣️",
        title: "Weak Independent Speaking Delivery",
        body: "Rambling, fillers, and no clear structure in 45-second responses tank Delivery and Language Use scores. Students who haven't timed their spoken answers always overrun or fall short.",
      },
      {
        num: "06",
        icon: "🔍",
        title: "Misreading Inference Questions",
        body: "Students choose answers that are directly stated in the text rather than those that are implied — confusing recall questions with inference questions costs multiple points.",
      },
      {
        num: "07",
        icon: "🕒",
        title: "Not Pacing Reading Sections",
        body: "With ~20 questions per passage and tight timing, spending more than 2 minutes on any single question means the final questions go unanswered. Pacing is non-negotiable.",
      },
    ],
  },
  PTE: {
    label: "PTE",
    subtitle:
      "PTE Academic is scored by AI with zero human tolerance for error patterns. These specific mistakes cause the most consistent score drops.",
    floatTop: { num: "61%", label: "Don't Hit Target Score" },
    floatBottom: { num: "79", label: "Avg. First Attempt Score" },
    reasons: [
      {
        num: "01",
        icon: "🤖",
        title: "Misunderstanding AI Scoring Logic",
        body: "PTE is marked by machine algorithms, not humans. Strategies that work for IELTS or TOEFL (like expressive speaking tone) are irrelevant — the AI rewards specific acoustic and fluency patterns.",
      },
      {
        num: "02",
        icon: "🔊",
        title: "Hesitations Kill Speaking Scores",
        body: "PTE's Oral Fluency scoring penalises any pause, false start, or 'umm' heavily. A single long hesitation in Read Aloud or Repeat Sentence resets the fluency score to near zero.",
      },
      {
        num: "03",
        icon: "⌨️",
        title: "Poor Summarise Written Text Strategy",
        body: "Most students write multiple sentences when SWT requires exactly one sentence of 5–75 words. Exceeding the sentence limit or missing key ideas each reduce the score significantly.",
      },
      {
        num: "04",
        icon: "👂",
        title: "Ignoring Write From Dictation",
        body: "WFD carries disproportionately high marks in both Listening and Writing. Students who don't practise verbatim transcription under time pressure lose a large chunk of their overall score.",
      },
      {
        num: "05",
        icon: "📋",
        title: "Not Practising Enabling Skills",
        body: "PTE scores individual enabling skills (grammar, vocabulary, spelling, fluency, pronunciation) across multiple tasks. Most students only review overall task scores and miss the diagnostic data.",
      },
      {
        num: "06",
        icon: "🧠",
        title: "Re-Reading Instead of Skimming",
        body: "PTE Reading tasks have strict time limits per question. Students who re-read full passages to find answers consistently run out of time on Reorder Paragraphs and Fill in the Blanks.",
      },
      {
        num: "07",
        icon: "🎯",
        title: "Targeting Only Weak Areas",
        body: "PTE scores are interlinked — a strong performance in Speaking boosts Listening scores and vice versa. Neglecting 'already good' skills causes unexpected drops in dependent score bands.",
      },
    ],
  },
  Duolingo: {
    label: "Duolingo",
    subtitle:
      "The DET's adaptive AI and unconventional question types catch most first-timers off guard. Here's exactly what causes scores to drop below target.",
    floatTop: { num: "52%", label: "Score Under 120" },
    floatBottom: { num: "1.8×", label: "Avg. Retake Attempts" },
    reasons: [
      {
        num: "01",
        icon: "🔀",
        title: "Underestimating Adaptive Difficulty",
        body: "DET questions get harder as you answer correctly. Students who relax after a good start fail to maintain quality on harder adaptive questions and see their score plateau unexpectedly.",
      },
      {
        num: "02",
        icon: "🖊️",
        title: "Skipping the Writing Sample",
        body: "The optional Writing Sample and Speaking Sample are sent directly to institutions. Students who skip them leave admissions officers without key evidence — hurting their overall application.",
      },
      {
        num: "03",
        icon: "🔡",
        title: "Typing Errors in Dictation Tasks",
        body: "In Listen and Type, every misspelling counts against you. Students who type quickly without checking destroy their Literacy subscore — one of four sub-scores institutions review.",
      },
      {
        num: "04",
        icon: "🌀",
        title: "Unfamiliar Question Formats",
        body: "Tasks like Read and Complete, Read Aloud, and Interactive Reading don't exist in other tests. Students who sit DET without format-specific practice waste time on instructions during the real test.",
      },
      {
        num: "05",
        icon: "😶",
        title: "Quiet Speaking Environment Not Secured",
        body: "Background noise detected during Speaking tasks lowers the Conversation and Production subscores. Students taking the test in shared spaces or with ambient noise consistently underperform.",
      },
      {
        num: "06",
        icon: "📉",
        title: "Ignoring Sub-Score Breakdown",
        body: "Institutions often require minimum sub-scores in Literacy, Comprehension, Conversation, and Production — not just the overall score. Ignoring sub-score targets leads to rejections despite a good total.",
      },
      {
        num: "07",
        icon: "⏰",
        title: "No Pacing Strategy",
        body: "The full DET lasts about 1 hour with no section breaks. Students who don't practise maintaining consistent concentration for the full duration experience quality drops in the final 20 minutes.",
      },
    ],
  },
};

type ExamKey = keyof typeof examData;
const EXAM_KEYS = Object.keys(examData) as ExamKey[];

/* ══════════════════════════════
   REASON CARD
══════════════════════════════ */
function ReasonCard({
  reason,
  index,
  animKey,
}: {
  reason: (typeof examData.IELTS.reasons)[0];
  index: number;
  animKey: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), index * 65 + 40);
    return () => clearTimeout(t);
  }, [animKey, index]);

  return (
    <div className={`${styles.card} ${visible ? styles.cardVisible : ""}`}>
      <div className={styles.cardAccent} />
      <div className={styles.cardTop}>
        <span className={`${styles.num} ${visible ? styles.numAnimate : ""}`} aria-hidden="true">
          {reason.num}
        </span>
        <span className={`${styles.icon} ${visible ? styles.iconAnimate : ""}`} aria-hidden="true">
          {reason.icon}
        </span>
      </div>
      <h3 className={styles.cardTitle}>{reason.title}</h3>
      <p className={styles.cardBody}>{reason.body}</p>
    </div>
  );
}

/* ══════════════════════════════
   MAIN COMPONENT
══════════════════════════════ */
export default function WhyStudentsScoreLow() {
  const [activeExam, setActiveExam] = useState<ExamKey>("IELTS");
  const [animKey, setAnimKey] = useState("IELTS");
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(false);

  const handleSwitch = (key: ExamKey) => {
    if (key === activeExam) return;
    setActiveExam(key);
    setAnimKey(key + Date.now());
  };

  useEffect(() => {
    const observe = (
      ref: React.RefObject<HTMLDivElement | null>,
      setter: (v: boolean) => void
    ) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };

    const cleanA = observe(headerRef, setHeaderVisible);
    const cleanB = observe(imageRef, setImageVisible);
    return () => { cleanA(); cleanB(); };
  }, []);

  const current = examData[activeExam];

  return (
    <section className={styles.section} id="low-scores">
      {/* Background texture */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      {/* ── TOP BAR: label + exam tabs ── */}
      <div className={styles.topBar}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine} />
          Common Pitfalls
          <span className={styles.labelLine} />
        </div>
        <div className={styles.examTabs} role="tablist" aria-label="Select exam">
          {EXAM_KEYS.map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeExam === key}
              className={`${styles.examTab} ${activeExam === key ? styles.examTabActive : ""}`}
              onClick={() => handleSwitch(key)}
            >
              {examData[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className={styles.inner}>

        {/* LEFT: heading + cards */}
        <div className={styles.leftCol}>
          <div
            ref={headerRef}
            className={`${styles.header} ${headerVisible ? styles.headerVisible : ""}`}
          >
            <h2 className={styles.heading}>
              Why Students Score
              <br />
              <em className={styles.headingEm}>Low in {current.label}</em>
            </h2>
            <p className={styles.subtext}>{current.subtitle}</p>
          </div>

          <div className={styles.grid}>
            {current.reasons.map((r, i) => (
              <ReasonCard
                key={`${animKey}-${r.num}`}
                reason={r}
                index={i}
                animKey={animKey}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: image panel */}
        <div
          ref={imageRef}
          className={`${styles.imagePanel} ${imageVisible ? styles.imagePanelVisible : ""}`}
        >
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80"
              alt="Student frustrated while studying"
              className={styles.studentImg}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80";
              }}
            />
            <div className={styles.imgOverlay} aria-hidden="true" />

            {/* Warning ribbon overlay */}
            <div className={styles.warningRibbon} aria-hidden="true">
              ⚠ Avoid These Mistakes
            </div>
          </div>

          {/* Floating stat cards */}
          <div
            className={`${styles.floatCard} ${styles.floatTop} ${imageVisible ? styles.floatVisible : ""}`}
            style={{ animationDelay: "0.45s" }}
          >
            <span className={styles.floatNum}>{current.floatTop.num}</span>
            <span className={styles.floatLabel}>{current.floatTop.label}</span>
          </div>

          <div
            className={`${styles.floatCard} ${styles.floatBottom} ${imageVisible ? styles.floatVisible : ""}`}
            style={{ animationDelay: "0.62s" }}
          >
            <span className={styles.floatNum}>{current.floatBottom.num}</span>
            <span className={styles.floatLabel}>{current.floatBottom.label}</span>
          </div>

          {/* Decorative ring */}
          <div className={styles.ring} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}