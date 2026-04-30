// components/sat_city/CityFeeStructure/CityFeeStructure.tsx
// City-aware version of FeeStructure.
// Heading uses data.city; product URLs inject data.slug for city-specific links.

import type { SATCityData } from "@/constants/satCities";
import styles from "./CityFeeStructure.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  data: SATCityData;
}

interface FeeRow {
  label: string;
  desc: string;
  amount: string;
  /** href is a function so we can inject the city slug */
  href: (slug: string) => string;
}

// ─── Static fee data ──────────────────────────────────────────────────────────

const FEES: FeeRow[] = [
  {
    label: "Online Live Group Course",
    desc: "Live sessions, AI tests, unlimited doubt clearing",
    amount: "₹45,000/-",
    href: (_slug) => "https://eduquest.org.in/product/sat-in-online-live/",
  },
  {
    label: "Hybrid Group Course",
    desc: "Online + classroom, comprehensive support",
    amount: "₹70,800/-",
    href: (slug) =>
      `https://eduquest.org.in/product/sat-in-${slug}-hybridonline-live/`,
  },
  {
    label: "Classroom Group Course",
    desc: "In-person at Gurgaon centre",
    amount: "₹55,000/-",
    href: (_slug) => "https://eduquest.org.in/product/sat-classroom/",
  },
  {
    label: "One-on-One (Online Live)",
    desc: "Fully personalized, score-till-goal guarantee",
    amount: "₹80,000/-",
    href: (slug) =>
      `https://eduquest.org.in/product/sat-in-${slug}-one-on-one-online-live/`,
  },
  {
    label: "Hybrid One-on-One",
    desc: "Premium: online + classroom + admissions support",
    amount: "₹1,18,000/-",
    href: (slug) =>
      `https://eduquest.org.in/product/sat-in-${slug}-hybrid-one-on-oneonline-live/`,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CityFeeStructure({ data }: Props) {
  const { city, slug } = data;

  return (
    <section className={styles.section}>
      <div className="container" style={{maxWidth:"1200px"}}>
        {/* ── Label ── */}
        <div className={styles.sectionLabel}>Fee Structure</div>

        {/* ── Heading — city-aware ── */}
        <h2 className={styles.heading}>
          SAT Coaching <em>Fee Structure</em> — {city}
        </h2>

        {/* ── Subtext ── */}
        <p className={styles.sectionSub}>
          Transparent pricing with no hidden costs. All courses include study
          materials and mock tests. GST applicable.
        </p>

        {/* ── Pricing rows ── */}
        <div className={styles.pricingList}>
          {FEES.map((fee) => (
            <div key={fee.label} className={styles.priceRow}>
              <div>
                <div className={styles.priceRowLabel}>{fee.label}</div>
                <div className={styles.priceRowDesc}>{fee.desc}</div>
              </div>
              <div className={styles.priceRowRight}>
                <div className={styles.priceRowAmount}>{fee.amount}</div>
                <a href={fee.href(slug)} className={styles.priceRowLink}>
                  Enroll →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footnote ── */}
        <p className={styles.footnote}>
          For integrated multi-year programmes (Grades 8–12),{" "}
          <a
            href="https://eduquest.org.in/contact-us/"
            className={styles.footnoteLink}
          >
            contact us
          </a>{" "}
          for customised fee structures.
        </p>
      </div>
    </section>
  );
}