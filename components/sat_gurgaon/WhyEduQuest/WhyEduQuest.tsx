import styles from "./WhyEduQuest.module.css";

export default function WhyEduQuest() {
  return (
    <div className={styles.diffSectionBg}>
      <section className={styles.section}>
        <div className={styles.sectionLabel}>Why EduQuest</div>
        <h2 className={styles.heading}>
          SAT Coaching in Gurgaon — What Makes EduQuest <em>Different</em>
        </h2>
        <p className={styles.sectionSub}>
          EduQuest is not a traditional SAT coaching institute in Gurgaon. We
          focus on building academic positioning aligned with top university
          expectations — not just score improvement.
        </p>

        <div className={styles.diffGrid}>
          <div className={styles.diffBlock}>
            <h3>Digital SAT Coaching in Gurgaon: Online &amp; Offline</h3>
            <p>
              EduQuest offers both online live group classes and offline
              classroom SAT coaching in Gurgaon NCR — covering DLF Phase, Sohna
              Road, Golf Course Road, South City, and Palam Vihar. Students
              benefit from flexible scheduling, unlimited doubt-clearing
              sessions, and access to best-in-class preparation materials.
            </p>
            <h3>Our Strategic SAT Preparation Approach</h3>
            <p>
              We combine diagnostics, personalized strategy, and performance
              tracking to ensure that preparation is efficient, focused, and
              outcome-driven. Every element of our SAT classes in Gurgaon is
              connected to your admissions goals — from baseline to target
              score.
            </p>
          </div>

          <div className={styles.diffBlock}>
            <h3>SAT Score vs Admissions Outcome</h3>
            <p>
              A high SAT score alone does not guarantee admission to top
              universities. It must align with your overall profile, narrative,
              and university strategy. EduQuest bridges this gap by treating
              your SAT as part of a larger positioning plan for global
              university admissions.
            </p>
            <h3>Who Should Start SAT Prep in Gurgaon</h3>
            <p>
              Students from Grades 8–12 in Gurgaon, Noida, and Delhi aiming
              for top global universities should begin early. EduQuest offers
              1-year, 2-year, 3-year, 4-year, and 5-year integrated SAT
              programs that combine PSAT, SAT, AP, TOEFL/IELTS, and university
              admissions counselling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}