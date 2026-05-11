import styles from "./SyllabusCoverage.module.css";

const syllabusData = [
  {
    title: "📖 Reading & Writing (EBRW)",
    items: [
      "Information and Ideas — Central ideas, details, command of evidence",
      "Craft and Structure — Words in context, text structure, cross-text connections",
      "Expression of Ideas — Rhetorical synthesis, transitions",
      "Standard English Conventions — Boundaries, form, structure, sense",
    ],
  },
  {
    title: "📐 Math",
    items: [
      "Algebra — Linear equations, systems, linear inequalities",
      "Advanced Math — Equivalent expressions, nonlinear equations, functions",
      "Problem-Solving & Data Analysis — Ratios, percentages, statistics, probability",
      "Geometry & Trigonometry — Area, volume, angles, right triangles, trig",
    ],
  },
];

export default function SyllabusCoverage() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Syllabus Coverage</div>
      <h2 className={styles.heading}>
        Complete Digital SAT <em>Syllabus</em> Coverage
      </h2>
      <p className={styles.sectionSub}>
        Our SAT coaching in Gurgaon covers every section of the Digital SAT
        (dSAT) comprehensively — from foundational concepts to advanced
        strategy.
      </p>

      <div className={styles.syllabusGrid}>
        {syllabusData.map((card) => (
          <div key={card.title} className={styles.syllabusCard}>
            <h4>{card.title}</h4>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}