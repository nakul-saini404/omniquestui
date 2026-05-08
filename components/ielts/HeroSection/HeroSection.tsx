"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

/* ── Stat item with animated number ── */
interface StatProps {
  raw: number;
  suffix: string;
  label: string;
  shouldAnimate: boolean;
  delay?: number;
}

function AnimatedStat({ raw, suffix, label, shouldAnimate, delay = 0 }: StatProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [shouldAnimate, delay]);

  const count = useCountUp(raw, 1200, active);

  return (
    <div className={styles.heroStat}>
      <span className={styles.heroStatNum}>
        {active ? `${count}${suffix}` : `0${suffix}`}
      </span>
      <span className={styles.heroStatLabel}>{label}</span>
    </div>
  );
}

/* ── Module card with bouncing icon ── */
interface ModuleProps {
  icon: string;
  name: string;
}

function ModuleCard({ icon, name }: ModuleProps) {
  return (
    <div className={styles.heroModule}>
      <span className={styles.heroModuleIcon} role="img" aria-label={name}>
        {icon}
      </span>
      <span className={styles.heroModuleName}>{name}</span>
    </div>
  );
}

/* ══════════════════════════════
   HERO SECTION COMPONENT
══════════════════════════════ */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  /* Trigger stat animation on intersection */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const modules: ModuleProps[] = [
    { icon: "🎧", name: "Listening" },
    { icon: "📖", name: "Reading" },
    { icon: "✍️", name: "Writing" },
    { icon: "🎙️", name: "Speaking" },
  ];

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      {/* Decorative blobs */}
      <div className={styles.heroBlobLeft} aria-hidden="true" />
      <div className={styles.heroBlobRight} aria-hidden="true" />

      <div className={styles.heroInner}>
        {/* ── LEFT: TEXT ── */}
        <div className={styles.heroText}>
          {/* Badge */}
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            World&apos;s Most Popular English Test
          </div>

          {/* Heading */}
          <h1 className={styles.heroH1}>
            Achieve Your
            <br />
            <em className={styles.heroH1Em}>Dream IELTS</em>
            <br />
            Band Score.
          </h1>

          {/* Subtext */}
          <p className={styles.heroSub}>
            Comprehensive online IELTS coaching with live lectures, mock tests,
            personalised feedback, and expert mentorship — for Academic and
            General Training.
          </p>

          {/* CTA Buttons */}
          <div className={styles.heroActions}>
            <a href="/contact-us" className={styles.btnGold}>
              Start FREE Trial →
            </a>
            <a href="#packages" className={styles.btnGhost}>
              Explore Packages
            </a>
          </div>

          {/* Animated Stats */}
          <div className={styles.heroStats}>
            <AnimatedStat
              raw={4}
              suffix="M+"
              label="Tests Annually"
              shouldAnimate={hasAnimated}
              delay={0}
            />
            <AnimatedStat
              raw={140}
              suffix="+"
              label="Countries Accept"
              shouldAnimate={hasAnimated}
              delay={120}
            />
            <AnimatedStat
              raw={9000}
              suffix="+"
              label="Institutions"
              shouldAnimate={hasAnimated}
              delay={240}
            />
          </div>
        </div>

        {/* ── RIGHT: IMAGE + MODULES ── */}
        <div className={styles.heroRight}>
          {/* Student Image */}
          <div className={styles.heroImgWrap}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=85"
              alt="IELTS student studying and preparing for the exam"
              className={styles.heroImg}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80";
              }}
            />
            {/* Floating score badge */}
            <div className={styles.heroScoreBadge} aria-label="Target Band Score">
              🏆 <span>Band 8+</span> Achievable
            </div>
          </div>

          {/* IELTS Module Cards */}
          <div className={styles.heroModules}>
            {modules.map((m) => (
              <ModuleCard key={m.name} icon={m.icon} name={m.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}