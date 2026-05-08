"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutStrip.module.css";

/* ── Partner tag data with BC-inspired colours ── */
const PARTNERS = [
  {
    label: "British Council",
    icon: "🇬🇧",
    accent: "#6a1f8a",      // BC signature purple
    accentLight: "rgba(106,31,138,0.09)",
  },
  {
    label: "IDP Education",
    icon: "🌏",
    accent: "#e05c1e",      // IDP orange
    accentLight: "rgba(224,92,30,0.09)",
  },
  {
    label: "Cambridge Assessment",
    icon: "🎓",
    accent: "#1a4a8a",      // Cambridge blue
    accentLight: "rgba(26,74,138,0.09)",
  },
  {
    label: "Paper & Computer",
    icon: "🖥️",
    accent: "#1a6b2e",      // green
    accentLight: "rgba(26,107,46,0.09)",
  },
  {
    label: "Valid 2 Years",
    icon: "📅",
    accent: "#b8860b",      // dark gold
    accentLight: "rgba(184,134,11,0.09)",
  },
];

/* ── Quick-fact pills ── */
const FACTS = [
  { num: "4M+", desc: "tests taken in 2023" },
  { num: "140+", desc: "countries accept it" },
  { num: "9,000+", desc: "institutions worldwide" },
];

/* ── Partner animated button ── */
interface PartnerProps {
  label: string;
  icon: string;
  accent: string;
  accentLight: string;
  delay: number;
  visible: boolean;
}

function PartnerButton({ label, icon, accent, accentLight, delay, visible }: PartnerProps) {
  return (
    <button
      className={styles.partnerBtn}
      style={
        {
          "--accent": accent,
          "--accentLight": accentLight,
          animationDelay: visible ? `${delay}ms` : "0ms",
        } as React.CSSProperties
      }
      data-visible={visible}
    >
      <span className={styles.partnerBtnRipple} aria-hidden="true" />
      <span className={styles.partnerBtnIcon}>{icon}</span>
      <span className={styles.partnerBtnLabel}>{label}</span>
      <span className={styles.partnerBtnArrow} aria-hidden="true">↗</span>
    </button>
  );
}

/* ══════════════════════════════
   ABOUT STRIP COMPONENT
══════════════════════════════ */
export default function AboutStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.aboutStrip} ref={sectionRef}>
      <div className={styles.aboutInner}>

        {/* ── LEFT: text content ── */}
        <div
          className={styles.aboutBody}
          data-visible={visible}
        >
          {/* Section label */}
          <div className={styles.sectionLabel}>
            International English Language Testing System
          </div>

          {/* Heading */}
          <h2 className={styles.aboutH2}>
            What Is <em className={styles.aboutH2Em}>IELTS?</em>
          </h2>

          {/* Body copy */}
          <p className={styles.aboutP}>
            The International English Language Testing System (IELTS) is the
            world&apos;s most popular English language proficiency test for higher
            education and global migration, with over{" "}
            <strong className={styles.highlight}>4.0 million tests</strong> taken
            in 2023.
          </p>
          <p className={styles.aboutP}>
            IELTS lets you select the best Colleges, Universities and academic
            programs globally. A higher IELTS score increases your chances of
            obtaining the visa tremendously. IELTS has been developed by some of
            the world&apos;s leading language assessment experts and tests the full
            range of English skills needed for success in your new job or study
            placement abroad.
          </p>
          <p className={styles.aboutP}>
            <strong className={styles.validity}>⏱ Score validity: 2 years</strong>{" "}
            from the date of the test.
          </p>

          {/* Quick-fact pills */}
          <div className={styles.factsRow}>
            {FACTS.map((f, i) => (
              <div
                key={f.num}
                className={styles.factPill}
                style={{ animationDelay: visible ? `${i * 80 + 300}ms` : "0ms" }}
                data-visible={visible}
              >
                <span className={styles.factNum}>{f.num}</span>
                <span className={styles.factDesc}>{f.desc}</span>
              </div>
            ))}
          </div>

          {/* ── Animated partner buttons ── */}
          <div className={styles.partnersLabel}>Jointly owned &amp; managed by</div>
          <div className={styles.partnerBtns}>
            {PARTNERS.map((p, i) => (
              <PartnerButton
                key={p.label}
                {...p}
                delay={i * 70 + 500}
                visible={visible}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: image ── */}
        <div
          className={styles.aboutImgCol}
          data-visible={visible}
        >
          {/* Decorative behind-card blob */}
          <div className={styles.imgBlob} aria-hidden="true" />

          <div className={styles.imgCard}>
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=760&q=85"
              alt="Students studying IELTS preparation material"
              className={styles.aboutImg}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=760&q=80";
              }}
            />

            {/* Overlay shimmer */}
            <div className={styles.imgOverlay} aria-hidden="true" />

            {/* Floating badge */}
            <div className={styles.imgBadge} data-visible={visible}>
              <span className={styles.imgBadgeIcon}>🏆</span>
              <div>
                <span className={styles.imgBadgeNum}>World&apos;s #1</span>
                <span className={styles.imgBadgeSub}>English proficiency test</span>
              </div>
            </div>
          </div>

          {/* Score band strip */}
          {/* <div className={styles.bandStrip} data-visible={visible}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((band) => (
              <div
                key={band}
                className={styles.bandCell}
                style={{ animationDelay: visible ? `${band * 60 + 700}ms` : "0ms" }}
                data-active={band >= 7}
              >
                <span className={styles.bandNum}>{band}</span>
              </div>
            ))}
            <span className={styles.bandLabel}>Band Scale</span>
          </div> */}
        </div>

      </div>
    </section>
  );
}