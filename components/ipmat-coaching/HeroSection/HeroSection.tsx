"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 500, suffix: "+", label: "IIM Selections" },
  { target: 98,  suffix: "%", label: "Success Rate" },
  { target: 50,  suffix: "+", label: "Research Papers" },
];

const partners =
  "IIM Indore · IIM Rohtak · IIM Ranchi · IIM Bodh Gaya · IIM Jammu · IIFT";

/** Easing: easeOutExpo */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);

  return value;
}

function AnimatedStat({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.target, 1800, started);
  return (
    <div className={styles.heroStat}>
      <span className={styles.heroStatNum}>
        {count}
        {stat.suffix}
      </span>
      <span className={styles.heroStatLabel}>{stat.label}</span>
    </div>
  );
}

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container} style={{maxWidth:"1600px" ,padding:"10px"}}>
        <div className={styles.heroInner}>
          {/* ── LEFT: Text ── */}
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              ★ Powered by Aptech | Technology Partner
            </div>

            <h1 className={styles.heroHeading}>
              Stop Dreaming.
              <br />
              <em>Start Architecting</em>
              <br />
              Your IIM Journey.
            </h1>

            <p className={styles.heroSub}>
              India&apos;s only IPMAT coaching with integrated profile building,
              global certifications &amp; interview mastery — for students who
              want IIM Indore, not just a rank.
            </p>

            <div className={styles.heroActions}>
              <a href="/contact-us" className={`${styles.btn} ${styles.btnGold}`}>
                Book Free Consultation →
              </a>
              <a
                href="#curriculum"
                className={`${styles.btn} ${styles.btnGhost}`}
              >
                Explore Curriculum
              </a>
            </div>

            {/* Stats strip */}
            <div className={styles.heroStats} ref={statsRef}>
              {stats.map((s) => (
                <AnimatedStat key={s.label} stat={s} started={animationStarted} />
              ))}
            </div>

            {/* IIM partner strip */}
            <div className={styles.heroPartner}>
              <div className={styles.heroPartnerDot} />
              {partners}
            </div>
          </div>

          {/* ── RIGHT: Image ── */}
          <div className={styles.heroImageCol}>
            <div className={styles.heroImgWrap}>
              <img
                src="https://eduquest.org.in/wp-content/uploads/2026/01/img13a.jpeg"
                alt="IPMAT Coaching EduQuest"
                className={styles.heroImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80";
                }}
              />
              <div className={styles.heroImgOverlay} />
              <span className={styles.heroImgTag}>IPMAT 2026</span>
              <div className={styles.heroImgBadge}>
                <div className={styles.heroImgBadgeIcon}>🏛️</div>
                <div className={styles.heroImgBadgeText}>
                  <strong>IIM Indore — #1 Target</strong>
                  <span>98% placement record • Batch of 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}