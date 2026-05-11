import styles from "./Positioning.module.css";

const PILLS = [
  {
    icon: "🎯",
    title: "Academic Positioning",
    desc: "We integrate SAT performance into a broader strategy that strengthens your academic narrative for top university applications.",
  },
  {
    icon: "📈",
    title: "Profile Strength",
    desc: "Your SAT score becomes a component of a comprehensive profile designed to stand out in competitive admissions environments.",
  },
  {
    icon: "🗺️",
    title: "University Targeting Strategy",
    desc: "We align your score goals with your specific target universities to ensure your SAT preparation in Delhi is purposeful and directed.",
  },
];

export default function Positioning() {
  return (
    <section className={styles.positioning}>
      <div className={styles.grid}>
        <div>
          <div className={styles.label}>The EduQuest Difference</div>
          <h2 className={styles.h2}>
            SAT Is Not Just a Test.
            <br />
            {"It's a "}
            <em>Positioning Tool.</em>
          </h2>
          <p className={styles.sub}>
            Most students prepare for the SAT in isolation. Top applicants use it
            as a strategic component of their overall admissions profile.
            EduQuest&apos;s digital SAT coaching in Mumbai is built around this
            distinction.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;A high score matters. Strategic positioning matters more.&rdquo;
          </blockquote>
        </div>

        <div className={styles.pills}>
          {PILLS.map((p) => (
            <div key={p.title} className={styles.pill}>
              <div className={styles.pillIcon}>{p.icon}</div>
              <div>
                <div className={styles.pillTitle}>{p.title}</div>
                <div className={styles.pillDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
