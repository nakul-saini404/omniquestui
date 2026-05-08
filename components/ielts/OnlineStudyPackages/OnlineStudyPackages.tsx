"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OnlineStudyPackages.module.css";

/* ─── Data ─────────────────────────────────────────────── */

type Package = {
  title: string;
  sub: string;
  validity: string;
  tag?: string;
  featured?: boolean;
  features: string[];
};

type SubTab = {
  key: string;
  label: string;
  packages: Package[];
};

type MainTab = {
  key: string;
  label: string;
  typeLabel: string;
  subTabs: SubTab[];
};

const data: MainTab[] = [
  {
    key: "academic",
    label: "IELTS Academic",
    typeLabel: "Online IELTS Academic Study Packages",
    subTabs: [
      {
        key: "self",
        label: "Self Preparation",
        packages: [
          {
            title: "Self Preparation Pack",
            sub: "IELTS Academic",
            validity: "180 Days",
            tag: "Most Popular",
            featured: true,
            features: [
              "English Level Checker",
              "Quizzes & Video Lessons for Grammar, Vocabulary, Idioms & Spelling",
              "100+ Lessons and 20+ Hours of Videos on all 4 modules",
              "14 Writing Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "14 Speaking Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "14 Listening Practice Tests with Instant Band Scores",
              "14 Reading Practice Tests with Instant Band Scores",
              "14 Full Timed Mock Tests with Band Scores & Expert Feedback",
              "Practice Test & Mock Test Analysis every Saturday",
              "1 Hour Live Session with Expert Trainers every Sunday for Doubt Solving",
            ],
          },
        ],
      },
      {
        key: "champion",
        label: "Champion Pack",
        packages: [
          {
            title: "Champion Pack",
            sub: "IELTS Academic · Includes Live Lectures",
            validity: "180 Days",
            tag: "Best Value",
            features: [
              "English Level Checker",
              "Quizzes & Video Lessons for Grammar, Vocabulary, Idioms & Spelling",
              "100+ Lessons and 20+ Hours of Videos on all 4 modules",
              "14 Listening Practice Tests with Instant Band Scores",
              "14 Reading Practice Tests with Instant Band Scores",
              "14 Writing Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "14 Speaking Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "14 Timed Mock Tests with Band Scores & Expert Feedback",
              "Study Recommendation based on Demo Performance",
              "40 Hours Starter Live Lectures for Foundation Building (4 Weeks, Mon–Fri, 2 Hrs/Day)",
              "60 Hours Advanced Lectures for Final Preparation (4 Weeks, Mon–Fri, 3 Hrs/Day)",
              "Additional 18 Hours FREE Marathon Live Lectures each for Reading, Writing & Speaking",
              "Practice Test & Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
              "Free 4-Week French Language Course",
              "Recording of all previous lectures available",
            ],
          },
        ],
      },
      {
        key: "marathon",
        label: "Marathon",
        packages: [
          {
            title: "Reading Marathon",
            sub: "IELTS Academic",
            validity: "45 Days",
            features: [
              "English Level Checker",
              "Grammar, Vocabulary & Idiom Video Lessons",
              "100+ Lessons and 20+ Hours of Videos",
              "14 Reading Practice Tests with Instant Band Scores",
              "18 Hours Reading Live Lectures (Mon, Wed & Fri — 4 Weeks)",
              "Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
              "Recording of all previous lectures available",
            ],
          },
          {
            title: "Writing Marathon",
            sub: "IELTS Academic",
            validity: "45 Days",
            features: [
              "English Level Checker",
              "Grammar, Vocabulary & Idiom Video Lessons",
              "100+ Lessons and 20+ Hours of Videos",
              "14 Writing Practice Tests with Instant Band Scores",
              "18 Hours Writing Live Lectures (Tue, Thu & Sat — 4 Weeks)",
              "Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
              "Recording of all previous lectures available",
            ],
          },
          {
            title: "Speaking Marathon",
            sub: "IELTS Academic",
            validity: "45 Days",
            features: [
              "English Level Checker",
              "Grammar, Vocabulary & Idiom Video Lessons",
              "100+ Lessons and 20+ Hours of Videos",
              "14 Speaking Practice Tests with Instant Band Scores",
              "18 Hours Speaking Live Lectures (4 Weeks, Mon–Fri)",
              "Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
              "Recording of all previous lectures available",
            ],
          },
        ],
      },
    ],
  },
  {
    key: "general",
    label: "IELTS General",
    typeLabel: "Online IELTS General Study Packages",
    subTabs: [
      {
        key: "self",
        label: "Self Preparation",
        packages: [
          {
            title: "Self Preparation Pack",
            sub: "IELTS General",
            validity: "180 Days",
            tag: "Recommended",
            featured: true,
            features: [
              "English Level Checker",
              "5 Listening Practice Tests with Instant Band Scores",
              "Quizzes & Video Lessons for Grammar, Vocabulary, Idioms & Spelling",
              "5 Reading Practice Tests with Instant Band Scores",
              "100+ Lessons and 20+ Hours of Videos on all 4 modules",
              "10 Full Timed Mock Tests with Band Scores & Expert Feedback",
              "5 Writing Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "Practice Test & Mock Test Analysis every Saturday",
              "5 Speaking Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "1 Hour Live Session with Expert Trainers every Sunday for Doubt Solving",
            ],
          },
        ],
      },
      {
        key: "champion",
        label: "Champion Pack",
        packages: [
          {
            title: "Champion Pack",
            sub: "IELTS General · Includes Live Lectures",
            validity: "90 Days",
            tag: "Best Value",
            features: [
              "English Level Checker",
              "Quizzes & Video Lessons for Grammar, Vocabulary, Idioms & Spelling",
              "100+ Lessons and 20+ Hours of Videos on all 4 modules",
              "5 Listening Practice Tests with Instant Band Scores",
              "5 Reading Practice Tests with Instant Band Scores",
              "5 Writing Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "5 Speaking Practice Tests with Band Scores & Expert Feedback within 48 Hours",
              "10 Timed Mock Tests with Band Scores & Expert Feedback",
              "Study Recommendation based on Demo Performance",
              "60 Hours Live Lectures (6 Weeks, Mon–Fri, 2 Hrs/Day)",
              "Additional 18 Hours FREE Marathon Live Lectures for Reading, Writing & Speaking",
              "Practice Test & Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
              "Free 4-Week French Language Course",
              "Recording of all previous lectures available",
            ],
          },
        ],
      },
      {
        key: "marathon",
        label: "Marathon",
        packages: [
          {
            title: "Reading Marathon",
            sub: "IELTS General",
            validity: "45 Days",
            features: [
              "English Level Checker",
              "Grammar, Vocabulary & Idiom Video Lessons",
              "100+ Lessons and 20+ Hours of Videos",
              "5 Reading Practice Tests with Instant Band Scores",
              "18 Hours Reading Live Lectures (Tue, Thu & Sat — 4 Weeks)",
              "Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
            ],
          },
          {
            title: "Writing Marathon",
            sub: "IELTS General",
            validity: "45 Days",
            features: [
              "English Level Checker",
              "Grammar, Vocabulary & Idiom Video Lessons",
              "100+ Lessons and 20+ Hours of Videos",
              "5 Writing Practice Tests with Instant Band Scores",
              "18 Hours Writing Live Lectures (Mon, Wed & Fri — 4 Weeks)",
              "Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
            ],
          },
          {
            title: "Speaking Marathon",
            sub: "IELTS General",
            validity: "45 Days",
            features: [
              "English Level Checker",
              "Grammar, Vocabulary & Idiom Video Lessons",
              "100+ Lessons and 20+ Hours of Videos",
              "5 Speaking Practice Tests with Instant Band Scores",
              "18 Hours Speaking Live Lectures (4 Weeks, Mon–Fri)",
              "Mock Test Analysis every Saturday",
              "Free E-Book for Live Class Reference",
            ],
          },
        ],
      },
    ],
  },
];

/* ─── Package Card ─────────────────────────────────────── */

function PackageCard({
  pkg,
  index,
  panelKey,
}: {
  pkg: Package;
  index: number;
  panelKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, 60);
    return () => clearTimeout(timer);
  }, [panelKey]);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${pkg.featured ? styles.cardFeatured : ""} ${visible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card header */}
      <div className={`${styles.cardHead} ${pkg.featured ? styles.cardHeadFeatured : ""}`}>
        {pkg.tag && <span className={styles.tag}>{pkg.tag}</span>}
        <h3 className={styles.cardTitle}>{pkg.title}</h3>
        <p className={styles.cardSub}>{pkg.sub}</p>
        <div className={styles.validity}>
          <span aria-hidden="true">📅</span>
          Validity: {pkg.validity}
        </div>
      </div>

      {/* Card body */}
      <div className={styles.cardBody}>
        <ul className={styles.features}>
          {pkg.features.map((f, fi) => (
            <li
              key={fi}
              className={`${styles.featureItem} ${visible ? styles.featureVisible : ""}`}
              style={{ animationDelay: `${index * 0.1 + fi * 0.04}s` }}
            >
              <span className={styles.check} aria-hidden="true">✓</span>
              {f}
            </li>
          ))}
        </ul>
        {/* "Sign Up for Free 3-Day Trial" button intentionally removed */}
      </div>

      {/* Featured glow border sweep */}
      {pkg.featured && <div className={styles.featuredGlow} aria-hidden="true" />}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────── */

export default function OnlineStudyPackages() {
  const [activeMain, setActiveMain] = useState(0);
  const [activeSub, setActiveSub] = useState(0);
  const [panelKey, setPanelKey] = useState("academic-self");

  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMainTab = (idx: number) => {
    setActiveMain(idx);
    setActiveSub(0);
    setPanelKey(`${data[idx].key}-${data[idx].subTabs[0].key}-${Date.now()}`);
  };

  const handleSubTab = (idx: number) => {
    setActiveSub(idx);
    setPanelKey(`${data[activeMain].key}-${data[activeMain].subTabs[idx].key}-${Date.now()}`);
  };

  const currentMain = data[activeMain];
  const currentSub = currentMain.subTabs[activeSub];
  const isMarathon = currentSub.key === "marathon";

  return (
    <section className={styles.section} id="packages">
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`${styles.header} ${headVisible ? styles.headerVisible : ""}`}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} aria-hidden="true" />
            Online Study Packages
          </div>
          <h2 className={styles.heading}>Choose Your IELTS Package</h2>
          <p className={styles.subtext}>
            Structured programmes for Academic and General Training — from self-paced
            preparation to comprehensive live lectures and focused marathon sprints.
          </p>
        </div>

        {/* ── Main Tabs: Academic / General ── */}
        <div className={styles.mainTabs} role="tablist">
          {data.map((tab, i) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeMain === i}
              className={`${styles.mainTab} ${activeMain === i ? styles.mainTabActive : ""}`}
              onClick={() => handleMainTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Panel ── */}
        <div className={styles.panel}>
          {/* Type label */}
          <div className={styles.typeLabel}>
            <span className={styles.typeLabelLine} aria-hidden="true" />
            {currentMain.typeLabel}
          </div>

          {/* Sub-tabs */}
          <div className={styles.subTabs} role="tablist">
            {currentMain.subTabs.map((st, i) => (
              <button
                key={st.key}
                role="tab"
                aria-selected={activeSub === i}
                className={`${styles.subTab} ${activeSub === i ? styles.subTabActive : ""}`}
                onClick={() => handleSubTab(i)}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div
            className={`${styles.cards} ${isMarathon ? styles.cardsMarathon : ""}`}
            key={panelKey}
          >
            {currentSub.packages.map((pkg, i) => (
              <PackageCard
                key={pkg.title}
                pkg={pkg}
                index={i}
                panelKey={panelKey}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}