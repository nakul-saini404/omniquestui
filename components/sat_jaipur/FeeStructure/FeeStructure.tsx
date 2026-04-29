import styles from "./FeeStructure.module.css";

const fees = [
  {
    label: "Online Live Group Course",
    desc: "Live sessions, AI tests, unlimited doubt clearing",
    amount: "₹45,000/-",
    href: "https://eduquest.org.in/product/sat-in-online-live/",
  },
  {
    label: "Hybrid Group Course",
    desc: "Online + classroom, comprehensive support",
    amount: "₹70,800/-",
    href: "https://eduquest.org.in/product/sat-in-jaipur-hybridonline-live/",
  },
  {
    label: "Classroom Group Course",
    desc: "In-person at Jaipur centre",
    amount: "₹55,000/-",
    href: "https://eduquest.org.in/product/sat-classroom/",
  },
  {
    label: "One-on-One (Online Live)",
    desc: "Fully personalized, score-till-goal guarantee",
    amount: "₹80,000/-",
    href: "https://eduquest.org.in/product/sat-in-jaipur-one-on-one-online-live/",
  },
  {
    label: "Hybrid One-on-One",
    desc: "Premium: online + classroom + admissions support",
    amount: "₹1,18,000/-",
    href: "https://eduquest.org.in/product/sat-in-jaipur-hybrid-one-on-oneonline-live/",
  },
];

export default function FeeStructure() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Fee Structure</div>
      <h2 className={styles.heading}>
        SAT Coaching <em>Fee Structure</em> — jaipur
      </h2>
      <p className={styles.sectionSub}>
        Transparent pricing with no hidden costs. All courses include study
        materials and mock tests. GST applicable.
      </p>

      <div className={styles.pricingList}>
        {fees.map((fee) => (
          <div key={fee.label} className={styles.priceRow}>
            <div>
              <div className={styles.priceRowLabel}>{fee.label}</div>
              <div className={styles.priceRowDesc}>{fee.desc}</div>
            </div>
            <div className={styles.priceRowRight}>
              <div className={styles.priceRowAmount}>{fee.amount}</div>
              <a href={fee.href} className={styles.priceRowLink}>
                Enroll →
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        For integrated multi-year programmes (Grades 8–12),{" "}
        <a href="https://eduquest.org.in/contact-us/">contact us</a> for
        customised fee structures.
      </p>
    </section>
  );
}