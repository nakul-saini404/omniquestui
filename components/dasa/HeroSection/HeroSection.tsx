"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

interface StatItem {
  count: number;
  suffix?: string;
  label: string;
}

interface InstCard {
  icon: string;
  name: string;
  tag: string;
}

const stats: StatItem[] = [
  { count: 1070, label: "Min SAT Score (DASA)" },
  { count: 3, suffix: "+", label: "BITS Campuses (ISA)" },
  { count: 500, suffix: "+", label: "Students Admitted" },
];

const instCards: InstCard[] = [
  { icon: "🏛️", name: "IIIT Hyderabad", tag: "DASA Scheme" },
  { icon: "🎓", name: "BITS Pilani", tag: "ISA Route" },
  { icon: "📝", name: "No JEE Required", tag: "SAT Only" },
  { icon: "🌍", name: "Global Students", tag: "NRI / OCI / PIO" },
];

function useCountUp(target: number, duration = 1600, active = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function AnimatedStat({ count, suffix = "", label }: StatItem) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const value = useCountUp(count, 1600, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.heroStat} ref={ref} role="listitem">
      <span className={styles.heroStatNum}>
        {value}
        {suffix}
      </span>
      <span className={styles.heroStatLabel}>{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section className={styles.hero} id="top" aria-label="DASA CIWG SAT Admissions Hero" ref={heroRef}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroInner}>

          {/* ── LEFT ── */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>🎓 NRI · OCI · PIO · CIWG</div>

            <h1 className={styles.heroH1}>
              SAT for <em className={styles.heroEm}>IIIT Hyderabad</em> &amp; BITS Pilani Admissions
            </h1>

            <p className={styles.heroSub}>
              Use your SAT score — not JEE or BITSAT — to secure admission to two of India's most
              prestigious engineering institutions through the DASA &amp; ISA routes.
            </p>

            <div className={styles.heroActions}>
              <a href="#contact" className={`${styles.btn} ${styles.btnGold}`}>
                Book Free Consultation
              </a>
              <a href="#comparison" className={`${styles.btn} ${styles.btnGhost}`}>
                Compare DASA vs ISA
              </a>
            </div>

            <div className={styles.heroStats} role="list" aria-label="Key facts">
              {stats.map((s) => (
                <AnimatedStat key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className={styles.heroRight}>
            <div className={styles.heroImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700&q=80&auto=format&fit=crop"
                alt="Students studying for SAT DASA CIWG admissions"
                width={700}
                height={300}
                loading="eager"
                className={styles.heroImg}
              />
            </div>

            <div className={styles.heroInstitutes} role="list" aria-label="Partner institutes">
              {instCards.map((card) => (
                <div className={styles.heroInstCard} key={card.name} role="listitem">
                  <div className={styles.heroInstIcon}>{card.icon}</div>
                  <div className={styles.heroInstName}>{card.name}</div>
                  <div className={styles.heroInstTag}>{card.tag}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}