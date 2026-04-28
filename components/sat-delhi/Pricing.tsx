import styles from "./Pricing.module.css";

const PLANS = [
  {
    label: "Online Live",
    title: "Group Course",
    // price: "₹50,000",
    // note: "+ GST · Per course",
    features: [
      "Online Live Group Sessions",
      "100+ Hours Minimum",
      "Unlimited Doubt Clearing",
      "Study Materials Provided",
      "AI-based Test Generation",
      "Diagnostic Test Framework",
    ],
    cta: "Enquire Now →",
    featured: false,
  },
  {
    label: "★ Most Popular",
    title: "One-on-One",
    // price: "₹50,000",
    // note: "+ GST · Online Live",
    features: [
      "Personal 1:1 Sessions",
      "100+ Hours Guaranteed",
      "Unlimited Retakes",
      "Personalized Roadmap",
      "Section-wise Strategy",
      "Score-till-goal Programme",
    ],
    cta: "Book Free Diagnostic →",
    featured: true,
  },
  {
    label: "Hybrid",
    title: "One-on-One Hybrid",
    // price: "₹70,000",
    // note: "+ GST · Online + Offline",
    features: [
      "Online + Classroom Sessions",
      "100+ Hours Minimum",
      "Unlimited Doubt Clearing",
      "Profile Building Advice",
      "University Counselling",
      "Application Writing Support",
    ],
    cta: "Enquire Now →",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className="section-head">
          <div className="label">Course </div>
          <h2>
            SAT Coaching <em>Programmes</em> in Delhi
          </h2>
          <p>
            Flexible formats for every student — online, offline, and hybrid. All
            courses include unlimited doubt-clearing and study materials.
          </p>
        </div>

        <div className={styles.grid}>
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
            >
              <div className={styles.cardLabel}>{plan.label}</div>
              <h3 className={styles.cardTitle}>{plan.title}</h3>
              {/* <div className={styles.price}>{plan.price}</div>
              <div className={styles.priceNote}>{plan.note}</div> */}
              <ul className={styles.list}>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="https://eduquest.org.in/contact-us/"
                className={`btn-primary ${styles.btnFull} ${plan.featured ? styles.btnGold : ""}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          For integrated multi-year programmes (Grades 8–12),{" "}
          <a href="https://eduquest.org.in/contact-us/">contact us</a> for
          customised fee structures.
        </p>
      </div>
    </section>
  );
}
