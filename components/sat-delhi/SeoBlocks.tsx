import styles from "./SeoBlocks.module.css";

const BLOCKS = [
  {
    title: "Digital SAT Coaching in Delhi: Online & Offline",
    body: "EduQuest offers both online live group classes and offline classroom SAT coaching in Delhi NCR. Students benefit from flexible scheduling, unlimited doubt-clearing sessions, and access to best-in-class preparation materials — making quality SAT preparation accessible regardless of location.",
  },
  {
    title: "Our Strategic SAT Preparation Approach",
    body: "We combine diagnostics, personalized strategy, and performance tracking to ensure that preparation is efficient, focused, and outcome-driven. Every element of our SAT classes in Delhi is connected to your admissions goals — from baseline to target score.",
  },
  {
    title: "SAT Score vs Admissions Outcome",
    body: "A high SAT score alone does not guarantee admission to top universities. It must align with your overall profile, narrative, and university strategy. EduQuest bridges this gap by treating your SAT as part of a larger positioning plan for global university admissions.",
  },
  {
    title: "Who Should Start SAT Prep in Delhi",
    body: "Students from Grades 8–12 in Delhi, Noida, and Gurgaon aiming for top global universities should begin early. EduQuest offers 1-year, 2-year, 3-year, 4-year, and 5-year integrated SAT programs that combine PSAT, SAT, AP, TOEFL/IELTS, and university admissions counselling.",
  },
];

export default function SeoBlocks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div>
          <div className="label">Why EduQuest</div>
          <h2 className={styles.heading}>
            SAT Coaching in Delhi —<br />
            What Makes EduQuest Different
          </h2>
          <p className={styles.intro}>
            EduQuest is not a traditional SAT coaching institute in Delhi. We
            focus on building academic positioning aligned with top university
            expectations — not just score improvement.
          </p>
        </div>

        <div className={styles.grid}>
          {BLOCKS.map((b) => (
            <div key={b.title} className={styles.block}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
