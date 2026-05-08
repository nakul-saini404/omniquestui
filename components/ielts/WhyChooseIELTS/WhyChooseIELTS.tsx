"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyChooseIELTS.module.css";

const reasons = [
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
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className={styles.cardAccent} />

      <div className={styles.cardTop}>
        <span
          className={`${styles.num} ${visible ? styles.numAnimate : ""}`}
          style={{ animationDelay: `${index * 0.07 + 0.2}s` }}
        >
          {reason.num}
        </span>
        <span
          className={`${styles.icon} ${visible ? styles.iconAnimate : ""}`}
          style={{ animationDelay: `${index * 0.07 + 0.3}s` }}
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
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(false);

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

  return (
    <section className={styles.section} id="reasons">
      {/* Background grid texture */}
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── LEFT: header + cards ── */}
        <div className={styles.leftCol}>
          <div
            ref={headerRef}
            className={`${styles.header} ${headerVisible ? styles.headerVisible : ""}`}
          >
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              Why Choose IELTS
            </div>
            <h2 className={styles.heading}>
              Top Reasons to
              <br />
              <em className={styles.headingEm}>Take IELTS</em>
            </h2>
            <p className={styles.subtext}>
              IELTS opens doors to over 9,000 institutions across 140 countries.
              Here&rsquo;s why millions choose it every year.
            </p>
          </div>

          <div className={styles.grid}>
            {reasons.map((r, i) => (
              <ReasonCard key={r.num} reason={r} index={i} />
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
              alt="IELTS student studying"
              className={styles.studentImg}
            />
            {/* Gradient overlay */}
            <div className={styles.imgOverlay} aria-hidden="true" />
          </div>

          {/* Floating stat cards */}
          <div className={`${styles.floatCard} ${styles.floatTop} ${imageVisible ? styles.floatVisible : ""}`} style={{ animationDelay: "0.45s" }}>
            <span className={styles.floatNum}>9,000+</span>
            <span className={styles.floatLabel}>Institutions Worldwide</span>
          </div>

          <div className={`${styles.floatCard} ${styles.floatBottom} ${imageVisible ? styles.floatVisible : ""}`} style={{ animationDelay: "0.6s" }}>
            <span className={styles.floatNum}>140+</span>
            <span className={styles.floatLabel}>Countries Accept IELTS</span>
          </div>

          {/* Decorative gold ring */}
          <div className={styles.ring} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}