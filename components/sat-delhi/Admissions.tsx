import styles from "./Admissions.module.css";

const ITEMS = [
  {
    icon: "📗",
    title: "Profile Building",
    desc: "We develop your extracurricular narrative, academic achievements, and personal story into a cohesive profile that resonates with top admissions officers.",
  },
  {
    icon: "✍️",
    title: "Narrative Development",
    desc: "Craft compelling application essays and personal statements that align your academic journey with your target universities' values.",
  },
  {
    icon: "🏛️",
    title: "University Selection Strategy",
    desc: "Build a strategic list of target universities that aligns with your academic profile, SAT scores, and long-term career aspirations.",
  },
];

export default function Admissions() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="label">The Bigger Picture</div>
        <h2 className={styles.h2}>
          Beyond SAT:
          <br />
          <em>Full Admissions Positioning</em>
        </h2>
        <p className={styles.sub}>
          SAT is only one component of your application. EduQuest integrates it
          with a complete admissions strategy — from profile building to
          university selection to application writing.
        </p>

        <div className={styles.grid}>
          <div className={styles.items}>
            {ITEMS.map((item) => (
              <div key={item.title} className={styles.item}>
                <div className={styles.itemIcon}>{item.icon}</div>
                <div>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
            <p className={styles.itemsNote}>
              SAT performance is most powerful when aligned with a larger
              admissions strategy.
            </p>
            <a
              href="https://eduquest.org.in/profile-building-programs/"
              className="btn-primary"
            >
              Explore Admissions Strategy →
            </a>
          </div>

          <div className={styles.highlight}>
            <h3>Programs Designed Around Your Goals</h3>
            <p>
              At EduQuest, we do not offer one-size-fits-all coaching packages.
              Programs are customized based on your diagnostic evaluation, target
              universities, academic timeline, and specific goals.
            </p>
            <p className={styles.highlightKey}>
              &ldquo;Preparation without personalization is preparation without
              direction.&rdquo;
            </p>
            <p>
              Our approach integrates SAT coaching in Delhi with profile
              building, AP courses, and university application support to create
              a complete preparation ecosystem for each student.
            </p>
            <br />
            <a
              href="https://eduquest.org.in/contact-us/"
              className={`btn-primary ${styles.btnGold}`}
            >
              Inquire About Your Program →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
