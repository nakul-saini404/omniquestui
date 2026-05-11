"use client";

import { useState } from "react";
import styles from "./WhyIPMAT.module.css";

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

interface ReasonCard {
  icon: string;
  tag: string;
  title: string;
  description: string;
  highlight: string;
}

interface ComparisonRow {
  aspect: string;
  ipmat: string;
  cat: string;
  advantage: boolean;
}

const stats: StatItem[] = [
  { value: "₹28", label: "Average Starting Package", suffix: "LPA" },
  { value: "100%", label: "Placement Rate at IIM Indore" },
  { value: "5", label: "Years — BBA + MBA Integrated" },
  { value: "500+", label: "IIM Selections via EduQuest" },
];

const reasons: ReasonCard[] = [
  {
    icon: "🏛️",
    tag: "Prestige",
    title: "IIM Brand at 17",
    description:
      "Secure your IIM seat straight out of Class 12 — before CAT, before MBA, before anyone else. The IIM Indore IPM degree is respected by the same corporates that recruit from IIM's flagship programmes.",
    highlight: "Start IIM at 17, not 24",
  },
  {
    icon: "⏱️",
    tag: "Head Start",
    title: "5-Year Integrated Edge",
    description:
      "While your peers spend 3 years in a regular college, then 2 more in MBA prep, then 2 in MBA — you're already done. The integrated BBA+MBA programme compresses the timeline without cutting corners.",
    highlight: "Save 2+ years over the traditional route",
  },
  {
    icon: "💼",
    tag: "Placements",
    title: "Top-Tier Recruiters",
    description:
      "IIM Indore IPM sees recruiters like McKinsey, Goldman Sachs, Amazon, Deloitte, and Bain — the same pool as their flagship MBA. Your degree opens doors that a regular BBA simply cannot.",
    highlight: "₹28 LPA average package",
  },
  {
    icon: "🌍",
    tag: "Network",
    title: "IIM Alumni Network",
    description:
      "Access the most powerful management alumni network in India from day one. 50,000+ IIM alumni across boardrooms, startups, and government — your network starts compounding at 17.",
    highlight: "50,000+ IIM alumni globally",
  },
  {
    icon: "📊",
    tag: "Low Competition",
    title: "Easier Than CAT",
    description:
      "IPMAT tests Class 12-level mathematics and English — far more manageable than CAT's advanced quantitative requirements. With the right strategy and 12 months of preparation, a top rank is very achievable.",
    highlight: "No advanced CAT-level quant",
  },
  {
    icon: "🎯",
    tag: "Certainty",
    title: "Avoid the CAT Lottery",
    description:
      "CAT is given by 3 lakh+ candidates annually, with extreme variance. IPMAT gives you certainty — a clear, achievable path to an IIM seat without the decade-long uncertainty of the MBA route.",
    highlight: "Clear path vs 3-lakh CAT crowd",
  },
];

const comparison: ComparisonRow[] = [
  {
    aspect: "Age of IIM Entry",
    ipmat: "17–18 years",
    cat: "24–26 years",
    advantage: true,
  },
  {
    aspect: "Programme Duration",
    ipmat: "5 Years (Integrated)",
    cat: "2 Years (MBA only)",
    advantage: true,
  },
  {
    aspect: "Total Education Cost",
    ipmat: "Lower Overall",
    cat: "Higher (UG + MBA)",
    advantage: true,
  },
  {
    aspect: "Competition Level",
    ipmat: "~30,000 applicants",
    cat: "3,00,000+ applicants",
    advantage: true,
  },
  {
    aspect: "Syllabus Difficulty",
    ipmat: "Class 12 Level",
    cat: "Advanced Graduate",
    advantage: true,
  },
  {
    aspect: "IIM Brand Value",
    ipmat: "Full IIM Degree",
    cat: "Full IIM Degree",
    advantage: false,
  },
  {
    aspect: "Corporate Recruiters",
    ipmat: "Same Top Pool",
    cat: "Same Top Pool",
    advantage: false,
  },
];

const institutes = [
  { name: "IIM Indore", seats: "120 seats", tag: "Most Preferred" },
  { name: "IIM Rohtak", seats: "120 seats", tag: "Strong Placements" },
  { name: "IIM Ranchi", seats: "60 seats", tag: "Finance Focus" },
  { name: "IIM Bodh Gaya", seats: "60 seats", tag: "Emerging" },
  { name: "IIM Jammu", seats: "60 seats", tag: "Growing Fast" },
  { name: "IIFT Delhi", seats: "65 seats", tag: "Trade & Business" },
];

export default function WhyIPMAT() {
  const [activeTab, setActiveTab] = useState<"reasons" | "comparison">(
    "reasons"
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Why IPMAT?</div>
          <h2 className={styles.heading}>
            The Smartest Move a{" "}
            <em className={styles.headingEm}>Class 12 Student</em> Can Make
          </h2>
          <p className={styles.subheading}>
            IPMAT isn't just another entrance exam — it's a once-in-a-lifetime
            shortcut to India's most prestigious management institutions, taken
            at the optimal age, before the corporate world even starts
            competing.
          </p>

          {/* Tab switcher */}
          <div className={styles.tabGroup}>
            <button
              className={`${styles.tab} ${activeTab === "reasons" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("reasons")}
            >
              6 Reasons to Choose IPMAT
            </button>
            <button
              className={`${styles.tab} ${activeTab === "comparison" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("comparison")}
            >
              IPMAT vs CAT Route
            </button>
          </div>
        </div>

        {/* ── Stats Strip ── */}
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.statValue}>
                {s.value}
                {s.suffix && (
                  <span className={styles.statSuffix}> {s.suffix}</span>
                )}
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── PANEL: Reasons ── */}
        {activeTab === "reasons" && (
          <div className={styles.reasonsGrid}>
            {reasons.map((r, i) => (
              <div key={i} className={styles.reasonCard}>
                <div className={styles.reasonTop}>
                  <div className={styles.reasonIcon}>{r.icon}</div>
                  <span className={styles.reasonTag}>{r.tag}</span>
                </div>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonDesc}>{r.description}</p>
                <div className={styles.reasonHighlight}>
                  <span className={styles.highlightDot} />
                  {r.highlight}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── PANEL: Comparison ── */}
        {activeTab === "comparison" && (
          <div className={styles.comparisonWrap}>
            <div className={styles.compTable}>
              {/* Header */}
              <div className={`${styles.compRow} ${styles.compHeaderRow}`}>
                <div className={styles.compAspect}>Aspect</div>
                <div className={`${styles.compCell} ${styles.compIpmat}`}>
                  <span className={styles.compBadgeIpmat}>✦ IPMAT Route</span>
                </div>
                <div className={`${styles.compCell} ${styles.compCat}`}>
                  <span className={styles.compBadgeCat}>CAT Route</span>
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className={`${styles.compRow} ${i % 2 === 0 ? styles.compRowAlt : ""}`}
                >
                  <div className={styles.compAspect}>
                    <span className={styles.compAspectText}>{row.aspect}</span>
                  </div>
                  <div className={`${styles.compCell} ${styles.compIpmat}`}>
                    <span
                      className={
                        row.advantage
                          ? styles.compWinner
                          : styles.compNeutral
                      }
                    >
                      {row.advantage && (
                        <span className={styles.winIcon}>✓</span>
                      )}
                      {row.ipmat}
                    </span>
                  </div>
                  <div className={`${styles.compCell} ${styles.compCat}`}>
                    <span className={styles.compNeutral}>{row.cat}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.compNote}>
              <span className={styles.compNoteIcon}>💡</span>
              <p>
                IPMAT gives you the{" "}
                <strong>same IIM brand and corporate access</strong> as CAT —
                but 7 years earlier, with far less competition, and at a stage
                when you still have the energy and time to truly make the most
                of the IIM experience.
              </p>
            </div>
          </div>
        )}

        {/* ── Target Institutes ── */}
        <div className={styles.institutesWrap}>
          <div className={styles.institutesHeader}>
            <div className={styles.sectionLabel}>Target Institutions</div>
            <h3 className={styles.institutesTitle}>
              Where IPMAT Can Take You
            </h3>
          </div>
          <div className={styles.institutesGrid}>
            {institutes.map((inst, i) => (
              <div key={i} className={styles.instituteCard}>
                <div className={styles.instituteIcon}>🏛️</div>
                <div className={styles.instituteInfo}>
                  <span className={styles.instituteName}>{inst.name}</span>
                  <span className={styles.instituteSeats}>{inst.seats}</span>
                </div>
                <span className={styles.instituteTag}>{inst.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className={styles.ctaRow}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaHeading}>
              Ready to Start Your{" "}
              <em className={styles.ctaEm}>IIM Journey?</em>
            </h3>
            <p className={styles.ctaDesc}>
              EduQuest has guided 500+ students into IIMs through IPMAT. Your
              12-month strategy starts with one conversation.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.btnGold}>
              Book Free Consultation →
            </a>
            <a href="#curriculum" className={styles.btnOutline}>
              View Curriculum
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}