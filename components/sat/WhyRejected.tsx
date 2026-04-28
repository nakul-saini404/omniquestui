import styles from "./WhyRejected.module.css";

const cells = [
  {
    icon: "🔍",
    title: "Lack of Clarity",
    desc: "Students study without a diagnostic baseline or understanding of their adaptive weak points. Random effort doesn't compound into a 1500+ score.",
  },
  {
    icon: "📊",
    title: "No Strategy Layer",
    desc: "Knowing content is not enough. Time management, question elimination strategy, and module-level targeting are skills most students never develop.",
  },
  {
    icon: "🌐",
    title: "No Global Context",
    desc: "Indian students often don't understand how holistic admissions really work. A 1450 SAT without the right profile narrative still results in rejection.",
  },
];

export default function WhyRejected() {
  return (
    <section className={styles.rejected} id="why-rejected">
      <div className="container">
        <div className="label reveal">Root Cause Analysis</div>
        <h2 className={`${styles.h2} reveal`}>
          Why Most Students Get Rejected<br />Despite Being <em>Good</em>
        </h2>
        <p className={`${styles.rejectedSub} reveal`}>
          It's not intelligence. It's missing strategic depth. Here are the 3 patterns
          we see repeatedly.
        </p>

        <div className={`${styles.rejectedGrid} reveal`}>
          {cells.map((c) => (
            <div key={c.title} className={styles.rejCell}>
              <div className={styles.rejIcon}>{c.icon}</div>
              <div className={styles.rejTitle}>{c.title}</div>
              <div className={styles.rejDesc}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.rejectedQuote} reveal`}>
          <blockquote>
            "A 1480 without a strategy is just a number. A{" "}
            <strong>1480 with the right positioning</strong> is an Ivy League application."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
