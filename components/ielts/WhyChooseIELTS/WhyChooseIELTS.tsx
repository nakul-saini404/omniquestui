"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyChooseIELTS.module.css";

const examData = {
  IELTS: {
    label: "IELTS",
    reasons: [
      {
        num: "01",
        icon: "🏛️",
        title: "Access 9,000+ Institutions Worldwide",
        body: "Get admission in more than 9,000 Colleges and Universities worldwide, including top-ranked institutions in the UK, USA, Canada, and Australia.",
      },
      {
        num: "02",
        icon: "💬",
        title: "Boost Your Everyday English",
        body: "IELTS preparation dramatically improves English communication skill in routine life — reading, writing, speaking, and listening all sharpen simultaneously.",
      },
      {
        num: "03",
        icon: "📊",
        title: "Highly Accurate Proficiency Gauge",
        body: "The result is highly accurate in gauging English proficiency — designed by Cambridge Assessment, it is the gold standard for language evaluation.",
      },
      {
        num: "04",
        icon: "✈️",
        title: "Your Passport to Global Travel",
        body: "If you wish to travel the world, IELTS can bring you closer to your goal — accepted for visa applications in the UK, Canada, Australia, and New Zealand.",
      },
      {
        num: "05",
        icon: "🎯",
        title: "Best-in-Class Evaluation Framework",
        body: "Best training and evaluation for English language skills — the test covers all four language skills in real-life scenarios, not just grammar.",
      },
      {
        num: "06",
        icon: "🌍",
        title: "Accepted in 140+ Countries",
        body: "IELTS is accepted worldwide in more than 140 countries and by governments, employers, universities, and immigration authorities globally.",
      },
      {
        num: "07",
        icon: "💼",
        title: "Better Career Prospects Abroad",
        body: "Better chances of getting a job after studying abroad — many international employers require a minimum IELTS band as proof of professional communication ability.",
      },
    ],
  },
  TOEFL: {
    label: "TOEFL",
    reasons: [
      {
        num: "01",
        icon: "🎓",
        title: "Preferred by US & Canadian Universities",
        body: "TOEFL is the #1 choice for US and Canadian admissions. Over 11,500 universities in 190+ countries accept TOEFL scores for undergraduate and graduate programs.",
      },
      {
        num: "02",
        icon: "💻",
        title: "100% Internet-Based Testing",
        body: "TOEFL iBT is conducted entirely online, simulating real academic tasks. The familiar digital format reduces test anxiety and matches modern study habits.",
      },
      {
        num: "03",
        icon: "📝",
        title: "Academic English Focus",
        body: "TOEFL rigorously tests academic reading and writing skills required in university classrooms, making it the ideal choice for postgraduate applicants.",
      },
      {
        num: "04",
        icon: "🔄",
        title: "MyBest™ Scores Feature",
        body: "Send your best section scores from multiple test dates combined into one super-score — maximising your result without retaking the entire exam.",
      },
      {
        num: "05",
        icon: "🌐",
        title: "Accepted in 190+ Countries",
        body: "From the USA to Europe, Asia, and beyond — TOEFL scores are recognised by universities, government agencies, and professional licensing boards worldwide.",
      },
      {
        num: "06",
        icon: "⏱️",
        title: "Shorter, Smarter Test Format",
        body: "The updated TOEFL iBT is under 2 hours — shorter than ever with no unscored questions, making your test day more focused and less exhausting.",
      },
      {
        num: "07",
        icon: "🏆",
        title: "Score Valid for 2 Years",
        body: "Your TOEFL score remains valid for two years from the test date, giving you ample time to apply to multiple institutions across different admission cycles.",
      },
    ],
  },
  PTE: {
    label: "PTE",
    reasons: [
      {
        num: "01",
        icon: "🤖",
        title: "AI-Powered Unbiased Scoring",
        body: "PTE Academic uses advanced AI to score your responses — eliminating human bias entirely and delivering consistent, objective results every single time.",
      },
      {
        num: "02",
        icon: "⚡",
        title: "Results in as Little as 48 Hours",
        body: "Get your official PTE scores in as fast as 48 hours after your test — one of the fastest turnaround times among all major English proficiency exams.",
      },
      {
        num: "03",
        icon: "🗓️",
        title: "Flexible Test Scheduling",
        body: "Book your PTE test any day of the year with over 400+ test centres globally. Reschedule up to 48 hours before your test with no extra charges.",
      },
      {
        num: "04",
        icon: "🇦🇺",
        title: "Approved for Australian & UK Visas",
        body: "PTE Academic is officially accepted by the Australian Department of Home Affairs and UK Visas & Immigration — essential for migration applications.",
      },
      {
        num: "05",
        icon: "📱",
        title: "Computer-Based Convenience",
        body: "Speak into a microphone and type your answers — no examiner interaction means no nerves. The computer-based format is consistent and distraction-free.",
      },
      {
        num: "06",
        icon: "🔁",
        title: "Unlimited Score Sending",
        body: "Send your PTE scores to as many institutions as you want at no extra cost — unlike other exams that charge per score report sent.",
      },
      {
        num: "07",
        icon: "🌏",
        title: "Accepted by 3,000+ Institutions",
        body: "Over 3,000 academic programs worldwide accept PTE, including Harvard, INSEAD, and Yale, along with top Australian and Canadian universities.",
      },
    ],
  },
  Duolingo: {
    label: "Duolingo",
    reasons: [
      {
        num: "01",
        icon: "🏠",
        title: "Take the Test From Home",
        body: "The Duolingo English Test can be taken from the comfort of your home at any time — no test centre visits required, just your laptop and a webcam.",
      },
      {
        num: "02",
        icon: "💸",
        title: "Highly Affordable",
        body: "At just $65 USD, the DET is significantly cheaper than IELTS, TOEFL, and PTE — making high-quality English certification accessible to everyone.",
      },
      {
        num: "03",
        icon: "⏩",
        title: "Results in 48 Hours",
        body: "Receive your certified Duolingo English Test results within 48 hours — one of the fastest in the industry, perfect for tight application deadlines.",
      },
      {
        num: "04",
        icon: "🎓",
        title: "Accepted by 4,000+ Programs",
        body: "Over 4,000 universities and programs worldwide now accept the DET, including MIT, Stanford, Columbia, and hundreds of top institutions in the UK and Canada.",
      },
      {
        num: "05",
        icon: "🧠",
        title: "Adaptive AI Testing",
        body: "Questions adapt in real time to your ability level — making the 1-hour test feel more natural and accurately measuring your true English proficiency.",
      },
      {
        num: "06",
        icon: "📤",
        title: "Free Unlimited Score Sharing",
        body: "Share your DET results with unlimited institutions at no additional cost. Send scores to every university on your list without worrying about extra fees.",
      },
      {
        num: "07",
        icon: "🔒",
        title: "Secure & Proctored Online",
        body: "AI-powered proctoring monitors your test session remotely, ensuring integrity and producing results that are trusted by leading global universities.",
      },
    ],
  },
};

type ExamKey = keyof typeof examData;
const EXAM_KEYS = Object.keys(examData) as ExamKey[];

function ReasonCard({
  reason,
  index,
  animKey,
}: {
  reason: (typeof examData.IELTS.reasons)[0];
  index: number;
  animKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), index * 60 + 40);
    return () => clearTimeout(t);
  }, [animKey, index]);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
    >
      <div className={styles.cardAccent} />
      <div className={styles.cardTop}>
        <span
          className={`${styles.num} ${visible ? styles.numAnimate : ""}`}
          aria-hidden="true"
        >
          {reason.num}
        </span>
        <span
          className={`${styles.icon} ${visible ? styles.iconAnimate : ""}`}
          aria-hidden="true"
        >
          {reason.icon}
        </span>
      </div>
      <h3 className={styles.cardTitle}>{reason.title}</h3>
      <p className={styles.cardBody}>{reason.body}</p>
    </div>
  );
}

export default function WhyChooseIELTS() {
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
    return () => {
      cleanA();
      cleanB();
    };
  }, []);

  const currentData = examData[activeExam];

  return (
    <section className={styles.section} id="reasons">
      <div className={styles.bgGrid} aria-hidden="true" />

      {/* ── TOP: centred label + exam tabs ── */}
      <div className={styles.topBar}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine} />
          Why Choose
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

      <div className={styles.inner}>
        {/* ── LEFT: header + cards ── */}
        <div className={styles.leftCol}>
          <div
            ref={headerRef}
            className={`${styles.header} ${headerVisible ? styles.headerVisible : ""}`}
          >
            <h2 className={styles.heading}>
              Top Reasons to
              <br />
              <em className={styles.headingEm}>
                Take {currentData.label}
              </em>
            </h2>
            <p className={styles.subtext}>
              {activeExam === "IELTS" &&
                "IELTS opens doors to over 9,000 institutions across 140 countries. Here's why millions choose it every year."}
              {activeExam === "TOEFL" &&
                "TOEFL iBT is the world's most widely accepted English test for academic admissions. Here's why top students choose it."}
              {activeExam === "PTE" &&
                "PTE Academic delivers AI-scored, fast, and flexible English certification trusted by universities and visa authorities globally."}
              {activeExam === "Duolingo" &&
                "The Duolingo English Test is the modern, affordable, and convenient certification accepted by 4,000+ institutions worldwide."}
            </p>
          </div>

          <div className={styles.grid}>
            {currentData.reasons.map((r, i) => (
              <ReasonCard key={`${animKey}-${r.num}`} reason={r} index={i} animKey={animKey} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: student image panel ── */}
        <div
          ref={imageRef}
          className={`${styles.imagePanel} ${imageVisible ? styles.imagePanelVisible : ""}`}
        >
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80"
              alt="Student studying"
              className={styles.studentImg}
            />
            <div className={styles.imgOverlay} aria-hidden="true" />
          </div>

          <div
            className={`${styles.floatCard} ${styles.floatTop} ${imageVisible ? styles.floatVisible : ""}`}
            style={{ animationDelay: "0.45s" }}
          >
            <span className={styles.floatNum}>
              {activeExam === "IELTS" && "9,000+"}
              {activeExam === "TOEFL" && "11,500+"}
              {activeExam === "PTE" && "3,000+"}
              {activeExam === "Duolingo" && "4,000+"}
            </span>
            <span className={styles.floatLabel}>Institutions Worldwide</span>
          </div>

          <div
            className={`${styles.floatCard} ${styles.floatBottom} ${imageVisible ? styles.floatVisible : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            <span className={styles.floatNum}>
              {activeExam === "IELTS" && "140+"}
              {activeExam === "TOEFL" && "190+"}
              {activeExam === "PTE" && "400+"}
              {activeExam === "Duolingo" && "48 hrs"}
            </span>
            <span className={styles.floatLabel}>
              {activeExam === "IELTS" && "Countries Accept IELTS"}
              {activeExam === "TOEFL" && "Countries Accept TOEFL"}
              {activeExam === "PTE" && "Test Centres Globally"}
              {activeExam === "Duolingo" && "Results Turnaround"}
            </span>
          </div>

          <div className={styles.ring} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}