"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutStrip.module.css";

/* ══════════════════════════════
   EXAM DATA
══════════════════════════════ */
interface Partner {
  label: string;
  icon: string;
  accent: string;
  accentLight: string;
}

interface Fact {
  num: string;
  desc: string;
}

interface ExamData {
  id: string;
  label: string;
  fullName: string;
  accentColor: string;
  accentLight: string;
  heading: string;
  paragraphs: string[];
  validity: string;
  image: string;
  badgeIcon: string;
  badgeNum: string;
  badgeSub: string;
  facts: Fact[];
  partners: Partner[];
}

const EXAMS: ExamData[] = [
  {
    id: "ielts",
    label: "IELTS",
    fullName: "International English Language Testing System",
    accentColor: "#d4a843",
    accentLight: "rgba(212,168,67,0.12)",
    heading: "What Is IELTS?",
    paragraphs: [
      "The International English Language Testing System (IELTS) is the world's most popular English language proficiency test for higher education and global migration, with over 4.0 million tests taken in 2023.",
      "IELTS lets you select the best Colleges, Universities and academic programs globally. A higher IELTS score increases your chances of obtaining the visa tremendously.",
      "IELTS has been developed by some of the world's leading language assessment experts and tests the full range of English skills needed for success in your new job or study placement abroad.",
    ],
    validity: "⏱ Score validity: 2 years from the date of the test.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=760&q=85",
    badgeIcon: "🏆",
    badgeNum: "World's #1",
    badgeSub: "English proficiency test",
    facts: [
      { num: "4M+", desc: "tests taken in 2023" },
      { num: "140+", desc: "countries accept it" },
      { num: "9,000+", desc: "institutions worldwide" },
    ],
    partners: [
      { label: "British Council", icon: "🇬🇧", accent: "#6a1f8a", accentLight: "rgba(106,31,138,0.09)" },
      { label: "IDP Education", icon: "🌏", accent: "#e05c1e", accentLight: "rgba(224,92,30,0.09)" },
      { label: "Cambridge Assessment", icon: "🎓", accent: "#1a4a8a", accentLight: "rgba(26,74,138,0.09)" },
      { label: "Paper & Computer", icon: "🖥️", accent: "#1a6b2e", accentLight: "rgba(26,107,46,0.09)" },
      { label: "Valid 2 Years", icon: "📅", accent: "#b8860b", accentLight: "rgba(184,134,11,0.09)" },
    ],
  },
  {
    id: "toefl",
    label: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    accentColor: "#1a4a8a",
    accentLight: "rgba(26,74,138,0.12)",
    heading: "What Is TOEFL?",
    paragraphs: [
      "The Test of English as a Foreign Language (TOEFL) is one of the most widely respected English-language tests in the world, recognised by more than 11,500 universities and institutions in 160+ countries.",
      "TOEFL iBT measures your ability to use and understand English at the university level, evaluating how you combine reading, listening, speaking and writing skills to perform academic tasks.",
      "Administered by ETS, the TOEFL iBT is the preferred test for North American universities and is increasingly accepted globally as a benchmark for academic English proficiency.",
    ],
    validity: "⏱ Score validity: 2 years from the test date.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=760&q=85",
    badgeIcon: "🌐",
    badgeNum: "11,500+",
    badgeSub: "Accepting institutions",
    facts: [
      { num: "160+", desc: "countries accept it" },
      { num: "30M+", desc: "tests taken globally" },
      { num: "11,500+", desc: "recognising institutions" },
    ],
    partners: [
      { label: "ETS", icon: "📋", accent: "#1a4a8a", accentLight: "rgba(26,74,138,0.09)" },
      { label: "Internet-Based", icon: "💻", accent: "#2a6496", accentLight: "rgba(42,100,150,0.09)" },
      { label: "US Universities", icon: "🏛️", accent: "#8b1a1a", accentLight: "rgba(139,26,26,0.09)" },
      { label: "Valid 2 Years", icon: "📅", accent: "#b8860b", accentLight: "rgba(184,134,11,0.09)" },
    ],
  },
  {
    id: "pte",
    label: "PTE",
    fullName: "Pearson Test of English",
    accentColor: "#1a6b2e",
    accentLight: "rgba(26,107,46,0.12)",
    heading: "What Is PTE?",
    paragraphs: [
      "The Pearson Test of English Academic (PTE Academic) is a computer-based English language test designed to assess the readiness of non-native English speakers to study in an English-speaking environment.",
      "PTE Academic is accepted by thousands of universities worldwide including Harvard, INSEAD and Yale, and is approved for Australian and UK visa applications by their respective governments.",
      "One of PTE's key advantages is its fast results — typically delivered within 48 hours — and its AI-based marking system, which eliminates human examiner bias completely.",
    ],
    validity: "⏱ Score validity: 2 years from the test date.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=760&q=85",
    badgeIcon: "⚡",
    badgeNum: "48 hrs",
    badgeSub: "Fastest results turnaround",
    facts: [
      { num: "3,000+", desc: "accepting institutions" },
      { num: "48hrs", desc: "result delivery" },
      { num: "200+", desc: "test centres globally" },
    ],
    partners: [
      { label: "Pearson", icon: "📘", accent: "#1a6b2e", accentLight: "rgba(26,107,46,0.09)" },
      { label: "AI Scored", icon: "🤖", accent: "#2d7a3a", accentLight: "rgba(45,122,58,0.09)" },
      { label: "Visa Approved", icon: "✈️", accent: "#1a4a8a", accentLight: "rgba(26,74,138,0.09)" },
      { label: "Valid 2 Years", icon: "📅", accent: "#b8860b", accentLight: "rgba(184,134,11,0.09)" },
    ],
  },
  {
    id: "duolingo",
    label: "Duolingo",
    fullName: "Duolingo English Test",
    accentColor: "#58cc02",
    accentLight: "rgba(88,204,2,0.12)",
    heading: "What Is Duolingo English Test?",
    paragraphs: [
      "The Duolingo English Test (DET) is a modern, affordable, and convenient English proficiency test that can be taken online from home, anytime — making it one of the most accessible options available today.",
      "Accepted by over 4,000 universities and programmes worldwide — including MIT, Stanford, Carnegie Mellon and Yale — the DET has rapidly become a mainstream alternative to traditional tests.",
      "The test takes under an hour, results are available within 48 hours, and the cost is significantly lower than IELTS or TOEFL, making it the go-to choice for cost-conscious students.",
    ],
    validity: "⏱ Score validity: 2 years from the test date.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=760&q=85",
    badgeIcon: "🦉",
    badgeNum: "4,000+",
    badgeSub: "Accepting universities",
    facts: [
      { num: "4,000+", desc: "universities accept it" },
      { num: "$59", desc: "flat test fee" },
      { num: "48hrs", desc: "result turnaround" },
    ],
    partners: [
      { label: "Duolingo", icon: "🦉", accent: "#58cc02", accentLight: "rgba(88,204,2,0.09)" },
      { label: "Take From Home", icon: "🏠", accent: "#3a9a00", accentLight: "rgba(58,154,0,0.09)" },
      { label: "AI Proctored", icon: "🤖", accent: "#1a4a8a", accentLight: "rgba(26,74,138,0.09)" },
      { label: "Valid 2 Years", icon: "📅", accent: "#b8860b", accentLight: "rgba(184,134,11,0.09)" },
    ],
  },
];

/* ══════════════════════════════
   PARTNER BUTTON
══════════════════════════════ */
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
          transitionDelay: visible ? `${delay}ms` : "0ms",
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
  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("ielts");
  const [animating, setAnimating] = useState(false);
  const [displayId, setDisplayId] = useState<string>("ielts");

  /* scroll-in observer */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSectionVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* tab switch with crossfade */
  const handleTabChange = (id: string) => {
    if (id === activeId || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayId(id);
      setActiveId(id);
      setAnimating(false);
    }, 260); // half of CSS transition
  };

  const exam = EXAMS.find((e) => e.id === displayId)!;

  return (
    <section className={styles.aboutStrip} ref={sectionRef}>
      {/* decorative cream wash */}
      <div className={styles.stripWash} aria-hidden="true" />

      <div className={styles.aboutInner}>

        {/* ══ TAB SWITCHER ══ */}
        <div
          className={styles.tabRow}
          data-visible={sectionVisible}
          role="tablist"
          aria-label="Select exam"
        >
          {EXAMS.map((e) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={activeId === e.id}
              aria-controls={`panel-${e.id}`}
              className={styles.tabBtn}
              data-active={activeId === e.id}
              style={{ "--tab-accent": e.accentColor } as React.CSSProperties}
              onClick={() => handleTabChange(e.id)}
            >
              <span className={styles.tabBtnInk} aria-hidden="true" />
              {e.label}
            </button>
          ))}
        </div>

        {/* ══ CONTENT PANEL ══ */}
        <div
          className={styles.contentPanel}
          data-animating={animating}
          id={`panel-${exam.id}`}
          role="tabpanel"
        >

          {/* ── LEFT: text ── */}
          <div
            className={styles.aboutBody}
            data-visible={sectionVisible}
          >
            <div className={styles.sectionLabel}>{exam.fullName}</div>

            <h2
              className={styles.aboutH2}
              style={{ "--heading-accent": exam.accentColor } as React.CSSProperties}
            >
              {exam.heading.split(/(IELTS|TOEFL|PTE|Duolingo)/g).map((part, i) =>
                ["IELTS", "TOEFL", "PTE", "Duolingo"].includes(part)
                  ? <em key={i} className={styles.aboutH2Em}>{part}</em>
                  : part
              )}
            </h2>

            {exam.paragraphs.map((p, i) => (
              <p key={i} className={styles.aboutP}>{p}</p>
            ))}

            <p className={styles.aboutP}>
              <strong className={styles.validity}>{exam.validity}</strong>
            </p>

            {/* facts */}
            <div className={styles.factsRow}>
              {exam.facts.map((f, i) => (
                <div
                  key={f.num}
                  className={styles.factPill}
                  style={{
                    "--fact-accent": exam.accentColor,
                    transitionDelay: sectionVisible ? `${i * 80 + 300}ms` : "0ms",
                  } as React.CSSProperties}
                  data-visible={sectionVisible}
                >
                  <span className={styles.factNum}>{f.num}</span>
                  <span className={styles.factDesc}>{f.desc}</span>
                </div>
              ))}
            </div>

            {/* partners */}
            <div className={styles.partnersLabel}>Jointly owned &amp; managed by</div>
            <div className={styles.partnerBtns}>
              {exam.partners.map((p, i) => (
                <PartnerButton
                  key={p.label}
                  {...p}
                  delay={i * 70 + 500}
                  visible={sectionVisible}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: image ── */}
          <div
            className={styles.aboutImgCol}
            data-visible={sectionVisible}
          >
            <div
              className={styles.imgBlob}
              style={{ background: `radial-gradient(circle, ${exam.accentLight} 0%, transparent 70%)` }}
              aria-hidden="true"
            />

            <div className={styles.imgCard}>
              <img
                key={exam.id}           /* force remount on tab change */
                src={exam.image}
                alt={`Students preparing for ${exam.label}`}
                className={styles.aboutImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=760&q=80";
                }}
              />
              <div className={styles.imgOverlay} aria-hidden="true" />

              {/* floating badge */}
              <div className={styles.imgBadge} data-visible={sectionVisible}>
                <span className={styles.imgBadgeIcon}>{exam.badgeIcon}</span>
                <div>
                  <span className={styles.imgBadgeNum}>{exam.badgeNum}</span>
                  <span className={styles.imgBadgeSub}>{exam.badgeSub}</span>
                </div>
              </div>

              {/* accent ticker strip at bottom of image */}
              <div
                className={styles.imgTicker}
                style={{ background: exam.accentColor }}
                aria-hidden="true"
              >
                {exam.label} &nbsp;·&nbsp; {exam.fullName}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}