import styles from "./RootCause.module.css";

const CARDS = [
  {
    icon: "🔍",
    title: "Lack of Clarity",
    text: "Students study without a diagnostic baseline or understanding of their adaptive weak points. Random effort doesn't compound into a 1500+ score.",
  },
  {
    icon: "📊",
    title: "No Strategy Layer",
    text: "Knowing content is not enough. Time management, question elimination strategy, and module-level targeting are skills most students never develop.",
  },
  {
    icon: "🌐",
    title: "No Global Context",
    text: "Indian students often don't understand how holistic admissions really work. A 1450 SAT without the right profile narrative still results in rejection.",
  },
];

export default function RootCause() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.sectionLabel}>Root Cause Analysis</div>
        <h2 className={styles.sectionTitle}>
          Why Most Students Get Rejected Despite Being <em>Good</em>
        </h2>
        <p className={styles.sectionSub}>
          It's not intelligence. It's missing strategic depth. Here are the 3
          patterns we see repeatedly.
        </p>

        {/* ── 3-COL CARDS ── */}
        <div className={styles.rootcauseGrid}>
          {CARDS.map((c) => (
            <div key={c.title} className={styles.rcCard}>
              <div className={styles.rcIcon}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        {/* ── QUOTE ── */}
        <div className={styles.rcQuote}>
          "A 1480 without a strategy is just a number. A{" "}
          <strong>1480 with the right positioning</strong> is an Ivy League
          application."
        </div>

      </div>
    </section>
  );
}