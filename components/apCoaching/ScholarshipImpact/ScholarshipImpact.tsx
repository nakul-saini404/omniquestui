import styles from "./ScholarshipImpact.module.css";

/* ─── Data ──────────────────────────────────────────────────── */

interface SchStat {
  num: string;
  label: string;
}

const STATS: SchStat[] = [
  {
    num: "6–8",
    label: "Recommended AP Exams\nfor top university admits",
  },
  {
    num: "$60K",
    label: "Max tuition savings\nvia AP credit transfer",
  },
  {
    num: "4,000+",
    label: "Universities accepting\nAP scores globally",
  },
  {
    num: "98%",
    label: "EduQuest students\nscore 4 or 5",
  },
];

interface TableRow {
  subject: string;
  credits: string;
  value: string;
  bestFor: string;
  rating: string;
}

const TABLE_ROWS: TableRow[] = [
  {
    subject: "Calculus BC",
    credits: "Calc I + II (10 cr)",
    value: "$3,000–$6,000",
    bestFor: "STEM, Engineering",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    subject: "Physics C: Mechanics + E&M",
    credits: "8 credits",
    value: "$2,000–$5,000",
    bestFor: "Physics, Engineering",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    subject: "Chemistry",
    credits: "Chem I + II (10 cr)",
    value: "$3,000–$6,000",
    bestFor: "Pre-med, STEM",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    subject: "Biology",
    credits: "Bio I + II (8 cr)",
    value: "$2,500–$5,000",
    bestFor: "Pre-med, Bio",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    subject: "Computer Science A",
    credits: "CS I (4 cr)",
    value: "$1,500–$3,000",
    bestFor: "CS, Tech",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    subject: "Statistics",
    credits: "Stats (3–4 cr)",
    value: "$1,000–$2,500",
    bestFor: "All majors",
    rating: "⭐⭐⭐⭐",
  },
  {
    subject: "English Language",
    credits: "Comp (3 cr)",
    value: "$1,000–$2,000",
    bestFor: "All majors",
    rating: "⭐⭐⭐⭐",
  },
  {
    subject: "Micro + Macroeconomics",
    credits: "Econ I + II (6 cr)",
    value: "$1,500–$3,500",
    bestFor: "Business, Econ",
    rating: "⭐⭐⭐⭐",
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function ScholarshipImpact() {
  return (
    <section
      className={styles.scholarship}
      aria-labelledby="scholarship-heading"
    >
      <div className={styles.container}>

        {/* ── Banner ── */}
        <div className={styles.banner}>
          {/* radial amber glow — pure CSS ::before in the module */}

          {/* Amber pill badge */}
          <div className={styles.badge}>💰 Scholarship Impact</div>

          {/* Big dollar amount */}
          <div className={styles.amount}>$12M+</div>

          {/* Heading */}
          <h2 id="scholarship-heading" className={styles.bannerTitle}>
            In Scholarships Earned By
            <br />
            <span className={styles.highlight}>EduQuest Students</span>
          </h2>

          {/* Description */}
          <p className={styles.bannerDesc}>
            Students who score 5/5 in 6–8 high-value APs can enter university
            with sophomore standing — saving $20,000–$60,000 in tuition fees.
            Our strategic AP selection maximizes your scholarship potential.
          </p>

          {/* CTA buttons */}
          <div className={styles.ctaRow}>
            <a href="#enroll" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
              Start Your AP Journey
            </a>
            <a
              href="https://eduquest.org.in/profile-building-programs/"
              className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}
              target="_blank"
              rel="noreferrer"
            >
              Explore Admissions Strategy
            </a>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <div key={s.num} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>
                  {s.label.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Credit Value Table ── */}
        {/* <div className={styles.tableWrap}>
          <h3 className={styles.tableTitle}>
            AP Subjects → Best Credits &amp; Scholarship Value
          </h3>
          <p className={styles.tableSubtitle}>
            Which AP exams bring the highest college credit value at US universities?
          </p>

          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>AP Subject</th>
                  <th>Credits (5/5)</th>
                  <th>Credit Value (USD)</th>
                  <th>Best For</th>
                  <th>EduQuest Rating</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row) => (
                  <tr key={row.subject}>
                    <td>
                      <strong>{row.subject}</strong>
                    </td>
                    <td className={styles.highlight}>{row.credits}</td>
                    <td>{row.value}</td>
                    <td>{row.bestFor}</td>
                    <td>{row.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableFootnote}>
            * Credit values vary by university. Check with your specific target
            university for exact credit policies.
          </p>
        </div> */}

      </div>
    </section>
  );
}