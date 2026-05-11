"use client";

import React, { useState } from "react";
import styles from "./APCreditsSection.module.css";

// ─── Types ───────────────────────────────────────────────────────────────────

interface UniversityGroup {
  tier: string;
  examples: string;
  score: string;
  credit: string;
  accentColor: string;
  points: string[];
}

interface ScholarshipInfo {
  helps: string[];
  lessUseful: string[];
  recommended: string[];
}

interface CountryData {
  key: string;
  flag: string;
  name: string;
  role: string;
  tagline: string;
  roleColor: string;
  overview: string[];
  groups: UniversityGroup[];
  insight: string;
  scholarship?: ScholarshipInfo;
}

interface QuickCompareItem {
  key: string;
  label: string;
  value: string;
  color: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const COUNTRIES: CountryData[] = [
  {
    key: "usa",
    flag: "🇺🇸",
    name: "USA",
    role: "Credits + Rigor Signal",
    tagline: "Credit & Admission Advantage",
    roleColor: "#f5a623",
    overview: [
      "Min scores 3–5 vary by institution",
      "Credit vs placement is subject-specific",
      "Max credit caps per university apply",
    ],
    groups: [
      {
        tier: "Ivy League / Elite",
        examples: "Harvard, MIT, Stanford, Yale, Columbia",
        score: "5",
        credit: "Placement Only",
        accentColor: "#f5a623",
        points: [
          "Rigor signal, not credit transfer",
          "Placement into advanced courses",
          "Demonstrates college-level readiness",
        ],
      },
      {
        tier: "Top Public Universities",
        examples: "UCLA, UC Berkeley, UT Austin, Michigan, Purdue",
        score: "3–5",
        credit: "Credits + Placement",
        accentColor: "#00d4aa",
        points: [
          "Real credits earned — save up to 1 year",
          "Best ROI on time and tuition",
          "Subject-by-subject credit awards",
        ],
      },
      {
        tier: "Mid-Tier Private",
        examples: "NYU, USC",
        score: "3–5",
        credit: "Mixed",
        accentColor: "#6373ff",
        points: [
          "Moderate credit + placement mix",
          "Strategic AP choices pay off",
          "Good for reducing overall course load",
        ],
      },
    ],
    insight:
      "Ivy League → AP signals academic rigor. Public Universities → AP = real ROI in time and money savings.",
  },
  {
    key: "australia",
    flag: "🇦🇺",
    name: "Australia",
    role: "Entry Qualification",
    tagline: "Eligibility & Strength Booster",
    roleColor: "#00d4aa",
    overview: [
      "AP used for admission eligibility & prerequisites",
      "Very limited credit transfer compared to USA",
      "Focus on subject readiness: Math, Science, English",
    ],
    groups: [
      {
        tier: "Top Universities",
        examples: "Melbourne, Sydney, UNSW, ANU",
        score: "3–5",
        credit: "Admission + Subject Proof",
        accentColor: "#00d4aa",
        points: [
          "Credits rarely granted",
          "AP proves subject prerequisite readiness",
          "Strengthens competitive merit ranking",
        ],
      },
    ],
    insight:
      "AP = entry qualification, not acceleration. Focus on eligibility over credits. Take 3–4 APs strategically: Calculus, one Science, English.",
    scholarship: {
      helps: [
        "Improves academic merit ranking",
        "Strengthens subject rigor on application",
        "Helps in competitive scholarship selection",
      ],
      lessUseful: [
        "Board marks already at 98–99%",
        "Lower-tier universities with lenient criteria",
      ],
      recommended: ["AP Calculus", "Physics / Chemistry / Biology", "AP English"],
    },
  },
  {
    key: "uk",
    flag: "🇬🇧",
    name: "UK",
    role: "Admission Requirement",
    tagline: "A-Level Equivalent",
    roleColor: "#6373ff",
    overview: [
      "AP scores treated as A-Level equivalents",
      "Score of 4–5 required at elite universities",
      "Subject alignment to chosen degree is critical",
    ],
    groups: [
      {
        tier: "Russell Group / Elite",
        examples: "Oxford, Cambridge, Imperial, UCL, LSE",
        score: "4–5",
        credit: "Admission Requirement",
        accentColor: "#f5a623",
        points: [
          "Score of 5 expected for competitive programmes",
          "3–4 APs typically required for entry",
          "Subject-specific requirements strictly apply",
        ],
      },
      {
        tier: "Other UK Universities",
        examples: "KCL, Edinburgh, Manchester, Bristol",
        score: "3–4",
        credit: "Admission Qualifier",
        accentColor: "#00d4aa",
        points: [
          "Score of 3 accepted for most courses",
          "Flexible subject-by-subject evaluation",
          "AP treated as a valid international credential",
        ],
      },
    ],
    insight:
      "AP scores are evaluated like A-Levels. Subject match to your degree programme matters more than quantity.",
  },
  {
    key: "india",
    flag: "🇮🇳",
    name: "India",
    role: "Rarely Recognized",
    tagline: "Selective Use for Global Programs",
    roleColor: "#ff9f43",
    overview: [
      "AP not widely recognized by Indian universities",
      "Useful for international/global programs at select colleges",
      "IITs and BITS prioritize JEE, not AP scores",
    ],
    groups: [
      {
        tier: "Top International / Liberal Arts Programs",
        examples: "Ashoka, FLAME, Krea, OP Jindal, Shiv Nadar",
        score: "3–5",
        credit: "Elective Credit / Exemption",
        accentColor: "#ff9f43",
        points: [
          "Elective credit or course exemption possible",
          "Valued as a signal of academic rigor",
          "Helpful for liberal arts-style programs",
        ],
      },
      {
        tier: "Study Abroad / Dual Degree Pathways",
        examples: "VIT, Manipal (global partner universities)",
        score: "3–5",
        credit: "Profile Strengthener",
        accentColor: "#6373ff",
        points: [
          "Strengthens profile for partner university transfers",
          "No formal credit policy at most Indian campuses",
          "Useful for overseas exchange applications",
        ],
      },
    ],
    insight:
      "AP adds little value for IIT/BITS/NIT admission. Best used to signal global academic readiness for liberal arts or international programs.",
  },
  {
    key: "canada",
    flag: "🇨🇦",
    name: "Canada",
    role: "Credits + Admission",
    tagline: "Strong Credit Recognition",
    roleColor: "#e63946",
    overview: [
      "AP widely recognized — similar to USA policies",
      "Score of 4–5 typically required for credits",
      "Provincial universities vary in generosity",
    ],
    groups: [
      {
        tier: "Top Universities",
        examples: "UofT, McGill, UBC, Waterloo, Queen's",
        score: "4–5",
        credit: "Credits + Placement",
        accentColor: "#e63946",
        points: [
          "Credits awarded for scores of 4 or 5",
          "Can reduce course load or waive prerequisites",
          "UBC and UofT have strong AP credit policies",
        ],
      },
    ],
    insight:
      "Canada mirrors USA in AP friendliness. Score 4+ to maximize credit. Engineering programs at Waterloo are especially AP-receptive.",
  },
  {
    key: "europe",
    flag: "🇪🇺",
    name: "Europe",
    role: "Varies by Country",
    tagline: "Inconsistent — Check Per School",
    roleColor: "#5bc0de",
    overview: [
      "No unified AP policy across European countries",
      "Netherlands, Germany, France: limited formal recognition",
      "Primarily used as an academic rigor signal",
    ],
    groups: [
      {
        tier: "Top European Universities",
        examples: "TU Delft, LMU Munich, Sciences Po, Bocconi",
        score: "4–5",
        credit: "Rigor Signal / Case-by-Case",
        accentColor: "#5bc0de",
        points: [
          "Recognition varies significantly per institution",
          "AP scores used to demonstrate academic readiness",
          "Credits rarely granted — IB preferred if available",
        ],
      },
    ],
    insight:
      "AP is not formally accredited in most European systems. IB or local qualifications are preferred. AP still signals global academic competitiveness.",
  },
];

const QUICK_COMPARE: QuickCompareItem[] = COUNTRIES.map((c) => ({
  key: c.key,
  label: c.role,
  value: c.tagline,
  color: c.roleColor,
}));

// ─── Sub-components ───────────────────────────────────────────────────────────

const OverviewPills: React.FC<{ items: string[] }> = ({ items }) => (
  <div className={styles.overviewPills}>
    {items.map((item, i) => (
      <span key={i} className={styles.overviewPill}>
        {item}
      </span>
    ))}
  </div>
);

const GroupCard: React.FC<{ group: UniversityGroup }> = ({ group }) => (
  <div
    className={styles.groupCard}
    style={{ borderLeftColor: group.accentColor }}
  >
    <div className={styles.groupHeader}>
      <div>
        <div className={styles.groupTier}>{group.tier}</div>
        <div className={styles.groupExamples}>{group.examples}</div>
      </div>
      <div className={styles.groupMeta}>
        <span className={styles.scoreBadge}>Score {group.score}</span>
        <span className={styles.creditBadge}>{group.credit}</span>
      </div>
    </div>
    <div className={styles.groupPoints}>
      {group.points.map((point, i) => (
        <div key={i} className={styles.groupPoint}>
          {point}
        </div>
      ))}
    </div>
  </div>
);

const InsightBox: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.insightBox}>
    <span className={styles.insightIcon}>💡</span>
    <p className={styles.insightText}>{text}</p>
  </div>
);

const ScholarshipBlock: React.FC<{ scholarship: ScholarshipInfo }> = ({
  scholarship,
}) => (
  <div className={styles.scholarshipMini}>
    <div className={styles.scholGrid}>
      <div className={`${styles.scholBox} ${styles.scholHelps}`}>
        <div className={styles.scholTitle}>Where AP Helps</div>
        {scholarship.helps.map((h, i) => (
          <div key={i} className={styles.scholItem}>
            {h}
          </div>
        ))}
      </div>
      <div className={`${styles.scholBox} ${styles.scholLess}`}>
        <div className={styles.scholTitle}>Where AP Matters Less</div>
        {scholarship.lessUseful.map((l, i) => (
          <div key={i} className={styles.scholItem}>
            {l}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.recommendedBlock}>
      <div className={styles.scholTitle}>Strategic AP Picks for Australia</div>
      <div className={styles.recTags}>
        {scholarship.recommended.map((r, i) => (
          <span key={i} className={styles.recTag}>
            {r}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const QuickCompareGrid: React.FC<{
  items: QuickCompareItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}> = ({ items, activeKey, onSelect }) => (
  <div className={styles.quickCompare}>
    {items.map((item) => {
      const country = COUNTRIES.find((c) => c.key === item.key)!;
      return (
        <button
          key={item.key}
          type="button"
          className={`${styles.qcCard} ${activeKey === item.key ? styles.qcCardActive : ""}`}
          style={{ "--card-color": item.color } as React.CSSProperties}
          onClick={() => onSelect(item.key)}
          aria-pressed={activeKey === item.key}
        >
          <span className={styles.qcFlag}>{country.flag}</span>
          <span className={styles.qcName}>{country.name}</span>
          <span className={styles.qcValue} style={{ color: item.color }}>
            {country.role}
          </span>
          <span className={styles.qcLabel}>{country.tagline}</span>
        </button>
      );
    })}
  </div>
);

// AccordionRow: accordion body is always rendered in the DOM and toggled via
// CSS classes only — avoids the SSR/hydration removeChild crash in Next.js 14
// that occurs when {isOpen && <div>} causes a server/client DOM tree mismatch.
const AccordionRow: React.FC<{
  country: CountryData;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ country, isOpen, onToggle }) => (
  <div className={styles.accRow}>
    <button
      type="button"
      className={`${styles.accTrigger} ${isOpen ? styles.accTriggerOpen : ""}`}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`acc-body-${country.key}`}
    >
      <span className={styles.accFlag}>{country.flag}</span>
      <span className={styles.accName}>{country.name}</span>
      <span className={styles.accTagline}>{country.tagline}</span>
      <span
        className={styles.accRolePill}
        style={{
          color: country.roleColor,
          borderColor: country.roleColor + "44",
          background: country.roleColor + "11",
        }}
      >
        {country.role}
      </span>
      <span
        className={`${styles.accChevron} ${isOpen ? styles.accChevronOpen : ""}`}
        aria-hidden="true"
      >
        ▼
      </span>
    </button>

    <div
      id={`acc-body-${country.key}`}
      className={`${styles.accBody} ${isOpen ? styles.accBodyOpen : styles.accBodyClosed}`}
      aria-hidden={!isOpen}
    >
      <OverviewPills items={country.overview} />
      <div className={styles.groupsGrid}>
        {country.groups.map((group, i) => (
          <GroupCard key={i} group={group} />
        ))}
      </div>
      <InsightBox text={country.insight} />
      {country.scholarship && (
        <ScholarshipBlock scholarship={country.scholarship} />
      )}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const APCreditsSection: React.FC = () => {
  // Start with null (all closed) so SSR and client render the same initial HTML.
  // This prevents the removeChild hydration mismatch from openKey: "usa" on server.
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeKey, setActiveKey] = useState<string>("usa");

  const handleSelect = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
    setActiveKey(key);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>University Policies</span>
        <h2 className={styles.sectionTitle}>
          AP Credits by <em>Country</em>
        </h2>
        <p className={styles.sectionSub}>
          Each country — and each university within it — evaluates AP scores
          differently. Tap a country to see the full breakdown.
        </p>
      </div>

      <QuickCompareGrid
        items={QUICK_COMPARE}
        activeKey={activeKey}
        onSelect={handleSelect}
      />

      <div className={styles.accordion}>
        {COUNTRIES.map((country) => (
          <AccordionRow
            key={country.key}
            country={country}
            isOpen={openKey === country.key}
            onToggle={() => handleSelect(country.key)}
          />
        ))}
      </div>

      <div className={styles.ctaBlock}>
        <p className={styles.ctaText}>
          Not sure which AP subjects to take for your target country?
        </p>
        <a
          href="https://eduquest.org.in/contact-us/"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaBtn}
        >
          Get Free AP Strategy Session →
        </a>
      </div>
    </section>
  );
};

export default APCreditsSection;