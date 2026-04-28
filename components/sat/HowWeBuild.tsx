import styles from "./HowWeBuild.module.css";

const steps = [
  {
    num: "01",
    title: "Academic Excellence",
    desc: "Structured curriculum mastery aligned with SAT syllabus 2026 and your school board (CBSE, IB, ICSE, IGCSE).",
    tags: ["CBSE", "IB", "IGCSE"],
  },
  {
    num: "02",
    title: "Profile Architecture",
    desc: "Extracurricular narrative design, leadership positioning, and research projects that strengthen your application.",
    tags: ["Essays", "ECs", "Research"],
  },
  {
    num: "03",
    title: "Narrative Design",
    desc: "Application essays, short answers, and supplemental writing crafted with admissions committee psychology in mind.",
    tags: ["Common App", "Essays", "LORs"],
  },
  {
    num: "04",
    title: "Admission Strategy",
    desc: "School selection, Early Decision / Regular Decision strategy, interview coaching, and financial aid optimisation.",
    tags: ["ED/EA", "Interviews", "Visa"],
  },
];

export default function HowWeBuild() {
  return (
    <section className={styles.howBuild} id="how-build">
      <div className="container">
        <div className="label reveal">Our System</div>
        <h2 className={`${styles.h2} reveal`}>
          How We Build <em>Selected</em> Students
        </h2>
        <p className={`${styles.howBuildSub} reveal`}>
          A structured consulting model — not a coaching class. Four intelligence layers
          working in sync.
        </p>
        <div className={`${styles.howSteps} reveal`}>
          {steps.map((s) => (
            <div key={s.num} className={styles.howStep}>
              <div className={styles.howStepNum}>{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className={styles.howStepTags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.howStepTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
