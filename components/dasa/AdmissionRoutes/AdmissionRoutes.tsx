"use client";

import { useState } from "react";
import styles from "./AdmissionRoutes.module.css";

/* ─── Types ─── */
interface RouteCard {
  icon: string;
  title: string;
  description: string;
  badge: string;
  delay: number;
}

interface InstituteDetail {
  key: string;
  value: string;
}

interface Institute {
  name: string;
  scheme: string;
  schemeShort: string;
  details: InstituteDetail[];
  link: string;
  linkLabel: string;
  tag: "dasa" | "isa";
}

interface ComparisonRow {
  aspect: string;
  dasa: string;
  isa: string;
  dasaHighlight?: boolean;
  isaHighlight?: boolean;
}

type ActiveTab = "overview" | "dasa" | "isa" | "compare";

/* ─── Data ─── */
const routeCards: RouteCard[] = [
  {
    icon: "🏛️",
    title: "DASA Scheme — IIIT Hyderabad",
    description:
      "Direct Admission of Students Abroad scheme operated centrally. IIIT Hyderabad is among the few institutions still accepting SAT under DASA even as most NITs moved to JEE Main.",
    badge: "Centralised DASA Portal",
    delay: 0,
  },
  {
    icon: "🎓",
    title: "ISA Route — BITS Pilani",
    description:
      "International Student Admission route lets foreign nationals, OCI/PIO, and CIWG students use SAT scores in place of BITSAT — India's most competitive private engineering test.",
    badge: "All 3 Campuses Eligible",
    delay: 70,
  },
  {
    icon: "📊",
    title: "Super-Scoring Accepted",
    description:
      "Both IIIT Hyderabad and BITS Pilani allow super-scoring — combine your best Math score from one attempt with your best ERW score from another, maximising your composite.",
    badge: "Multiple Attempts Allowed",
    delay: 140,
  },
  {
    icon: "💸",
    title: "CIWG Fee Advantage",
    description:
      "CIWG students at IIIT Hyderabad pay domestic-level tuition fees rather than international rates — a massive financial advantage worth lakhs per year for qualifying Gulf families.",
    badge: "Domestic Fees Apply",
    delay: 210,
  },
  {
    icon: "📅",
    title: "Score Deadline Aware",
    description:
      "For DASA 2025, SAT scores must be received by IIIT Hyderabad by 31 May 2025 using College Board code 6997. Plan your SAT dates at least 3–4 weeks before the deadline.",
    badge: "Code: 6997",
    delay: 280,
  },
  {
    icon: "🤝",
    title: "No Essay Required",
    description:
      "Neither IIIT Hyderabad DASA nor BITS Pilani ISA require the SAT Essay section. Only your combined Math + ERW score (out of 1600) counts for admission ranking.",
    badge: "Math + ERW Only",
    delay: 350,
  },
];

const iiitDetails: InstituteDetail[] = [
  { key: "Minimum Score", value: "1070 / 1600 (Math + ERW combined)" },
  { key: "Super-Scoring", value: "✅ Accepted — best Math + best ERW across attempts" },
  { key: "Essay Required", value: "❌ Not required" },
  { key: "Score Deadline", value: "31 May 2025 — scores must be received by IIIT-H" },
  { key: "CB Code", value: "6997 — use this when sending official scores" },
  { key: "Top Programmes", value: "CSE, ECE, Computational Linguistics, CND" },
  { key: "CIWG Fees", value: "✅ Domestic fee structure applies" },
];

const bitsDetails: InstituteDetail[] = [
  { key: "Exam Accepted", value: "SAT only — BITSAT not required for ISA students" },
  { key: "Scoring", value: "Math + ERW (out of 1600). Super-scoring allowed." },
  { key: "Campuses", value: "Pilani · Goa · Hyderabad — all three campuses" },
  { key: "Application", value: "Direct application to BITS Pilani ISA portal" },
  { key: "Eligibility", value: "Foreign Nationals, PIO/OCI, CIWG, NRI" },
  { key: "Top Programmes", value: "CS, EEE, Mechanical, Chemical, Pharmacy, MBA" },
  { key: "Essay Required", value: "❌ Not required" },
];

const institutes: Institute[] = [
  {
    name: "IIIT Hyderabad",
    scheme: "DASA — Direct Admission of Students Abroad",
    schemeShort: "DASA",
    details: iiitDetails,
    link: "https://ugadmissions.iiit.ac.in/dasa/",
    linkLabel: "Official DASA Portal ↗",
    tag: "dasa",
  },
  {
    name: "BITS Pilani",
    scheme: "ISA — International Student Admission",
    schemeShort: "ISA",
    details: bitsDetails,
    link: "https://www.bits-pilani.ac.in/admissions/",
    linkLabel: "BITS Pilani Admissions ↗",
    tag: "isa",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Scheme Name",
    dasa: "DASA — Direct Admission of Students Abroad",
    isa: "ISA — International Student Admission",
  },
  {
    aspect: "Institutes Covered",
    dasa: "IIIT Hyderabad (standalone)",
    isa: "BITS Pilani — Pilani, Goa, Hyderabad campuses",
  },
  {
    aspect: "Eligibility",
    dasa: "NRI, OCI, PIO, Foreign Nationals, CIWG",
    isa: "NRI, OCI, PIO, Foreign Nationals, Children of Gulf workers",
  },
  {
    aspect: "Exam Accepted",
    dasa: "SAT (Math + ERW, min 1070/1600)",
    isa: "SAT (Math + ERW, replaces BITSAT completely)",
  },
  {
    aspect: "Super-Scoring",
    dasa: "✅ Accepted across multiple attempts",
    isa: "✅ Accepted across multiple attempts",
    dasaHighlight: true,
    isaHighlight: true,
  },
  {
    aspect: "Application Process",
    dasa: "Centralised DASA portal (CB code 6997)",
    isa: "Direct application to BITS Pilani ISA portal",
  },
  {
    aspect: "CIWG Fee Benefit",
    dasa: "✅ Domestic-level tuition for CIWG students",
    isa: "Separate international fee structure applies",
    dasaHighlight: true,
  },
  {
    aspect: "Score Deadline",
    dasa: "31 May 2025 (scores must be received)",
    isa: "As per BITS Pilani admissions calendar",
  },
  {
    aspect: "Special Note",
    dasa: "One of the few IIITs still accepting SAT under DASA",
    isa: "Complete SAT replaces BITSAT for international students",
  },
];

const tabs: { id: ActiveTab; label: string }[] = [
  { id: "overview", label: "Route Overview" },
  { id: "dasa", label: "IIIT Hyderabad (DASA)" },
  { id: "isa", label: "BITS Pilani (ISA)" },
  { id: "compare", label: "DASA vs ISA" },
];

/* ─── Component ─── */
export default function AdmissionRoutes() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [expandedInst, setExpandedInst] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Admission Routes</div>
          <h2 className={styles.heading}>
            Two Routes, One Exam —{" "}
            <em className={styles.headingEm}>Your SAT Opens Both Doors</em>
          </h2>
          <p className={styles.subheading}>
            DASA and ISA are independent schemes — you can apply to both
            simultaneously. Here's everything you need to know about each route,
            the institutes they cover, and how to navigate them.
          </p>

          {/* Eligibility Pills */}
          <div className={styles.eligPills}>
            {["NRI", "OCI", "PIO", "CIWG", "Foreign Nationals"].map((tag) => (
              <span key={tag} className={styles.eligPill}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Stat Strip ── */}
        <div className={styles.statStrip}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>1070</span>
            <span className={styles.statLabel}>Min SAT Score (DASA)</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>3+</span>
            <span className={styles.statLabel}>BITS Campuses (ISA)</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Students Admitted</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>6997</span>
            <span className={styles.statLabel}>CB Score Code (IIIT-H)</span>
          </div>
        </div>

        {/* ── Tab Bar ── */}
        <div className={styles.tabBar}>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`${styles.tabBtn} ${activeTab === t.id ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ══════════════════════════
            TAB: Route Overview
        ══════════════════════════ */}
        {activeTab === "overview" && (
          <div className={styles.overviewGrid}>
            {routeCards.map((card, i) => (
              <div key={i} className={styles.routeCard}>
                <div className={styles.routeCardTop}>
                  <span className={styles.routeIcon}>{card.icon}</span>
                  <span className={styles.routeBadge}>{card.badge}</span>
                </div>
                <h3 className={styles.routeTitle}>{card.title}</h3>
                <p className={styles.routeDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* ══════════════════════════
            TAB: DASA (IIIT Hyderabad)
        ══════════════════════════ */}
        {activeTab === "dasa" && (
          <div className={styles.instWrap}>
            <div className={styles.instPanel}>
              {/* Panel Header */}
              <div className={`${styles.instHead} ${styles.instHeadDasa}`}>
                <div className={styles.instHeadInner}>
                  <div>
                    <div className={styles.instSchemeTag}>DASA Scheme</div>
                    <h3 className={styles.instName}>IIIT Hyderabad</h3>
                    <p className={styles.instScheme}>
                      Direct Admission of Students Abroad
                    </p>
                  </div>
                  <a
                    href="https://ugadmissions.iiit.ac.in/dasa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instPortalBtn}
                  >
                    Official Portal ↗
                  </a>
                </div>
              </div>

              {/* Detail rows */}
              <div className={styles.instBody}>
                <div className={styles.detailGrid}>
                  {iiitDetails.map((d, i) => (
                    <div key={i} className={styles.detailRow}>
                      <span className={styles.detailKey}>{d.key}</span>
                      <span className={styles.detailVal}>{d.value}</span>
                    </div>
                  ))}
                </div>

                {/* CIWG Callout */}
                <div className={styles.ciwgCallout}>
                  <div className={styles.ciwgCalloutIcon}>🌙</div>
                  <div>
                    <strong className={styles.ciwgCalloutTitle}>
                      CIWG Special Benefit
                    </strong>
                    <p className={styles.ciwgCalloutText}>
                      Children of Indian workers in Gulf countries pay
                      domestic-level tuition at IIIT Hyderabad — even if they
                      completed Class 11 &amp; 12 in India. It's the parent's
                      Gulf employment that qualifies you, not where you studied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════
            TAB: ISA (BITS Pilani)
        ══════════════════════════ */}
        {activeTab === "isa" && (
          <div className={styles.instWrap}>
            <div className={styles.instPanel}>
              {/* Panel Header */}
              <div className={`${styles.instHead} ${styles.instHeadIsa}`}>
                <div className={styles.instHeadInner}>
                  <div>
                    <div className={`${styles.instSchemeTag} ${styles.instSchemeTagGold}`}>
                      ISA Route
                    </div>
                    <h3 className={styles.instName}>BITS Pilani</h3>
                    <p className={styles.instScheme}>
                      International Student Admission
                    </p>
                  </div>
                  <a
                    href="https://www.bits-pilani.ac.in/admissions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instPortalBtn}
                  >
                    Official Portal ↗
                  </a>
                </div>
              </div>

              {/* Detail rows */}
              <div className={styles.instBody}>
                <div className={styles.detailGrid}>
                  {bitsDetails.map((d, i) => (
                    <div key={i} className={styles.detailRow}>
                      <span className={styles.detailKey}>{d.key}</span>
                      <span className={styles.detailVal}>{d.value}</span>
                    </div>
                  ))}
                </div>

                {/* Campuses callout */}
                <div className={`${styles.ciwgCallout} ${styles.campusCallout}`}>
                  <div className={styles.ciwgCalloutIcon}>🏛️</div>
                  <div>
                    <strong className={styles.ciwgCalloutTitle}>
                      Three Prestigious Campuses
                    </strong>
                    <p className={styles.ciwgCalloutText}>
                      Your SAT score is valid for all three BITS campuses —
                      Pilani (flagship), Goa, and Hyderabad. A single ISA
                      application gives you access to all three simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════
            TAB: Comparison Table
        ══════════════════════════ */}
        {activeTab === "compare" && (
          <div className={styles.compareWrap}>
            <div className={styles.tableScroll}>
              <table className={styles.compTable}>
                <thead>
                  <tr>
                    <th className={styles.thAspect}>Aspect</th>
                    <th className={`${styles.th} ${styles.thDasa}`}>
                      <span className={styles.thBadgeDasa}>
                        🏛️ IIIT Hyderabad (DASA)
                      </span>
                    </th>
                    <th className={`${styles.th} ${styles.thIsa}`}>
                      <span className={styles.thBadgeIsa}>
                        🎓 BITS Pilani (ISA)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? styles.trEven : styles.trOdd}
                    >
                      <td className={styles.tdAspect}>{row.aspect}</td>
                      <td
                        className={`${styles.td} ${row.dasaHighlight ? styles.tdHighlight : ""}`}
                      >
                        {row.dasa}
                      </td>
                      <td
                        className={`${styles.td} ${row.isaHighlight ? styles.tdHighlightIsa : ""}`}
                      >
                        {row.isa}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comparison note */}
            <div className={styles.compareNote}>
              <span className={styles.compareNoteIcon}>💡</span>
              <p className={styles.compareNoteText}>
                You can apply to{" "}
                <strong>both DASA and ISA simultaneously</strong> — they are
                completely independent schemes. A strong SAT score gives you
                maximum options across IIIT Hyderabad and all three BITS Pilani
                campuses in a single preparation cycle.
              </p>
            </div>
          </div>
        )}

        {/* ── CIWG Clarification Banner ── */}
        <div className={styles.ciwgBanner}>
          <div className={styles.ciwgBannerLeft}>
            <div className={styles.ciwgQ}>
              <p className={styles.ciwgQText}>
                "If a student completed Class 11 &amp; 12{" "}
                <strong className={styles.ciwgQStrong}>in India</strong>, but
                their parent works in the Gulf — are they still eligible under{" "}
                <strong className={styles.ciwgQStrong}>CIWG quota</strong>?"
              </p>
            </div>
          </div>
          <div className={styles.ciwgBannerRight}>
            <div className={styles.ciwgAnswer}>
              <span className={styles.ciwgYes}>YES ✅</span>
              <p className={styles.ciwgAnswerText}>
                Schooling location does <strong>not</strong> determine CIWG
                eligibility. What matters is the parent's employment status in a
                Gulf Cooperation Council (GCC) country.
              </p>
            </div>
            <div className={styles.ciwgNote}>
              <strong>Key Rule:</strong> As long as the parent has been working
              in a Gulf country and meets CIWG residency requirements, the
              student qualifies — regardless of where they completed Class 11
              &amp; 12.
            </div>
            <div className={styles.ciwgChecks}>
              {[
                "Parent employed in UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, or Oman",
                "Student can have completed schooling in India (CBSE, ICSE, State Board)",
                "CIWG students at IIIT Hyderabad pay domestic tuition fees",
                "Apply via DASA portal just like other CIWG-eligible students",
              ].map((item, i) => (
                <div key={i} className={styles.ciwgCheckItem}>
                  <span className={styles.ciwgCheckIcon}>✓</span>
                  <span className={styles.ciwgCheckText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className={styles.ctaRow}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaLabel}>Not Sure Which Route Fits You?</div>
            <h3 className={styles.ctaTitle}>
              Get a Free Eligibility Check —{" "}
              <em className={styles.ctaTitleEm}>DASA, ISA, or Both</em>
            </h3>
            <p className={styles.ctaDesc}>
              EduQuest counsellors will confirm your category (NRI / OCI / PIO /
              CIWG), recommend the right route, and build a SAT preparation
              timeline around your deadlines.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="#contact" className={styles.btnGold}>
              Book Free Consultation →
            </a>
            <a href="#comparison" className={styles.btnOutline}>
              Compare DASA vs ISA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}