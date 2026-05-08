"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChooseYourPath.module.css";

/* ─── Data ─────────────────────────────────────────────── */
const PATHS = [
  {
    id: "academic",
    badge: "Academic",
    badgeStyle: "badgeAcademic",
    icon: "🎓",
    color: "#0b1c3d",
    colorLight: "rgba(11,28,61,0.07)",
    accentVar: "var(--navy)",
    title: "IELTS Academic",
    tagline: "For higher education & professional registration",
    goal: "Study in a University or College at Undergraduate or Postgraduate level — or register with a professional body.",
    recommended: ["UK universities", "Canadian colleges", "Australian universities", "US graduate schools", "Professional bodies (nurses, doctors, engineers)"],
    modes: [
      { icon: "📄", label: "Paper Delivered", note: "Traditional pen & paper format" },
      { icon: "🖥️", label: "Computer Delivered", note: "On-screen at a test centre" },
    ],
    band: "6.0 – 8.0+",
    bandNote: "Typical requirement",
    cta: "I want Academic",
  },
  {
    id: "general",
    badge: "General Training",
    badgeStyle: "badgeGeneral",
    icon: "✈️",
    color: "#7a5c10",
    colorLight: "rgba(212,168,67,0.1)",
    accentVar: "var(--gold)",
    title: "IELTS General Training",
    tagline: "For work, migration & below-degree study",
    goal: "Train or study below degree level, undertake work-related training in an English-speaking country, or emigrate.",
    recommended: ["UK visa & immigration", "Canadian PR (Express Entry)", "Australian PR & skilled migration", "New Zealand residency", "Secondary education abroad"],
    modes: [
      { icon: "📄", label: "Paper Delivered", note: "Traditional pen & paper format" },
      { icon: "🖥️", label: "Computer Delivered", note: "On-screen at a test centre" },
    ],
    band: "4.0 – 7.0+",
    bandNote: "Typical requirement",
    cta: "I want General",
  },
] as const;

/* shared facts shown below both cards */
const SHARED_FACTS = [
  { icon: "📅", label: "Score validity", value: "2 Years" },
  { icon: "⏱️", label: "Test duration", value: "~2 hr 45 min" },
  { icon: "🌍", label: "Test centres in India", value: "30+" },
  { icon: "🔁", label: "Retakes", value: "Unlimited" },
];

/* ─── Sub-components ────────────────────────────────────── */
interface ModeChipProps { icon: string; label: string; note: string; delay: number; visible: boolean; }
function ModeChip({ icon, label, note, delay, visible }: ModeChipProps) {
  return (
    <div
      className={styles.modeChip}
      data-visible={visible}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <span className={styles.modeIcon}>{icon}</span>
      <div>
        <span className={styles.modeLabel}>{label}</span>
        <span className={styles.modeNote}>{note}</span>
      </div>
    </div>
  );
}

interface PathCardProps {
  path: (typeof PATHS)[number];
  index: number;
  selected: boolean;
  visible: boolean;
  onSelect: (id: string) => void;
}

function PathCard({ path, index, selected, visible, onSelect }: PathCardProps) {
  return (
    <article
      className={styles.pathCard}
      data-selected={selected}
      data-visible={visible}
      style={
        {
          "--card-accent": path.color,
          "--card-accent-light": path.colorLight,
          transitionDelay: visible ? `${index * 130}ms` : "0ms",
        } as React.CSSProperties
      }
      onClick={() => onSelect(path.id)}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(path.id)}
    >
      {/* animated border glow */}
      <div className={styles.cardGlow} aria-hidden="true" />

      {/* top accent bar */}
      <div className={styles.cardTopBar} aria-hidden="true" />

      {/* header row */}
      <div className={styles.cardHeader}>
        <div className={styles.cardIconWrap}>
          <span className={styles.cardIconEmoji}>{path.icon}</span>
        </div>
        <div className={styles.cardHeaderText}>
          <span className={`${styles.versionBadge} ${styles[path.badgeStyle]}`}>
            {path.badge}
          </span>
          <h3 className={styles.cardTitle}>{path.title}</h3>
          <p className={styles.cardTagline}>{path.tagline}</p>
        </div>
        {/* selected checkmark */}
        <div className={styles.checkmark} aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 10l4.5 4.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* goal */}
      <div className={styles.goalBlock}>
        <div className={styles.goalLabel}>
          <span className={styles.goalDot} aria-hidden="true" />
          Your goal
        </div>
        <p className={styles.goalText}>{path.goal}</p>
      </div>

      {/* recommended for list */}
      <div className={styles.recBlock}>
        <div className={styles.recLabel}>Recommended for</div>
        <ul className={styles.recList}>
          {path.recommended.map((item, i) => (
            <li
              key={item}
              className={styles.recItem}
              data-visible={visible}
              style={{ transitionDelay: visible ? `${index * 130 + i * 55 + 300}ms` : "0ms" }}
            >
              <span className={styles.recDot} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* available modes */}
      <div className={styles.modesBlock}>
        <div className={styles.modesLabel}>Available in India</div>
        <div className={styles.modesRow}>
          {path.modes.map((m, mi) => (
            <ModeChip
              key={m.label}
              {...m}
              delay={index * 130 + mi * 80 + 500}
              visible={visible}
            />
          ))}
        </div>
      </div>

      {/* band score */}
      <div className={styles.bandBlock}>
        <div className={styles.bandScoreWrap}>
          <span className={styles.bandScore}>{path.band}</span>
          <span className={styles.bandNote}>{path.bandNote}</span>
        </div>
        {/* <button
          className={styles.ctaBtn}
          onClick={(e) => { e.stopPropagation(); onSelect(path.id); }}
          aria-label={path.cta}
        >
          {path.cta}
          <span className={styles.ctaArrow}>→</span>
          <span className={styles.ctaRipple} aria-hidden="true" />
        </button> */}
      </div>
    </article>
  );
}

/* ─── Main component ────────────────────────────────────── */
export default function ChooseYourPath() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className={styles.section}
      id="which-version"
      ref={sectionRef}
      data-visible={visible}
    >
      {/* ── background ── */}
      <div className={styles.bgTexture} aria-hidden="true" />
      <div className={styles.bgBlob1}  aria-hidden="true" />
      <div className={styles.bgBlob2}  aria-hidden="true" />

      {/* ── header ── */}
      <div className={styles.header} data-visible={visible}>
        <div className={styles.sectionLabel}>Choose Your Path</div>
        <h2 className={styles.heading}>
          Which IELTS Version{" "}
          <em className={styles.headingEm}>Do You Need?</em>
        </h2>
        <p className={styles.sub}>
          Select the right version based on your goal. Both Academic and General
          Training are available in Paper and Computer Delivered modes in India.
        </p>
      </div>

      {/* ── helper prompt ── */}
      <p
        className={styles.prompt}
        data-visible={visible}
        aria-live="polite"
      >
        {selected
          ? `✓ Great choice! You selected IELTS ${selected === "academic" ? "Academic" : "General Training"}.`
          : "👇 Tap a card to select your version"}
      </p>

      {/* ── path cards ── */}
      <div className={styles.cardsGrid}>
        {PATHS.map((path, i) => (
          <PathCard
            key={path.id}
            path={path}
            index={i}
            selected={selected === path.id}
            visible={visible}
            onSelect={setSelected}
          />
        ))}
      </div>

      {/* ── shared facts row ── */}
      <div className={styles.factsRow} data-visible={visible}>
        <div className={styles.factsLabel}>Both versions share</div>
        <div className={styles.facts}>
          {SHARED_FACTS.map((f, i) => (
            <div
              key={f.label}
              className={styles.factItem}
              data-visible={visible}
              style={{ transitionDelay: visible ? `${i * 75 + 600}ms` : "0ms" }}
            >
              <span className={styles.factIcon}>{f.icon}</span>
              <span className={styles.factValue}>{f.value}</span>
              <span className={styles.factLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div className={styles.ctaStrip} data-visible={visible} style={{margin:"20px auto 0"}}>
        <p className={styles.ctaStripText}>
          Not sure which to pick? Our counsellors will guide you for free.
        </p>
        <a href="/contact-us" className={styles.ctaStripBtn}>
          Get Free Guidance →
        </a>
      </div>
    </section>
  );
}