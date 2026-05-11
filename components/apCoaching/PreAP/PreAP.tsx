import styles from "./PreAP.module.css";

/* ─── Data ──────────────────────────────────────────────────── */

const BENEFITS: string[] = [
  "Builds strong foundation in critical subjects",
  "Prepares students for AP-level rigor in Grades 9–12",
  "Significantly increases chances of scoring 5/5 in AP later",
  "Develops academic discipline, study habits, and confidence",
  "Signals academic ambition to top admissions committees",
];

const COURSES: string[] = [
  "Pre-AP Algebra 1",
  "Pre-AP Geometry with Statistics",
  "Pre-AP English 1",
  "Pre-AP English 2",
  "Pre-AP Biology",
  "Pre-AP Chemistry",
  "Pre-AP Physics 1",
  "Pre-AP World History",
  "Pre-AP Visual Arts",
  "Pre-AP Music",
  "Pre-AP Dance",
  "Pre-AP Theatre",
];

/* ─── Component ─────────────────────────────────────────────── */

export default function PreAP() {
  return (
    <section
      className={styles.preap}
      aria-labelledby="preap-heading"
    >
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left column — content ── */}
          <div className={styles.content}>

            {/* Section label */}
            <div className={styles.sectionLabel}>
              <span>For Grades 6–8</span>
            </div>

            {/* Heading */}
            <h2 id="preap-heading" className={styles.heading}>
              Pre-AP: Build the{" "}
              <span className={styles.highlight}>Foundation</span>
              <br />
              Before AP
            </h2>

            {/* Paragraphs */}
            <p className={styles.para}>
              Pre-AP courses, designed by College Board for Grades 6–8, build
              critical thinking, advanced writing, and problem-solving skills
              that are essential for AP success later.
            </p>
            <p className={styles.para}>
              EduQuest offers expert Pre-AP coaching for all 12 College Board
              Pre-AP subjects, helping younger students develop a powerful
              academic foundation early.
            </p>

            {/* Benefits list */}
            <ul className={styles.benefitsList}>
              {BENEFITS.map((benefit) => (
                <li key={benefit} className={styles.benefitItem}>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Ghost CTA button */}
            <div className={styles.btnWrap}>
              <a
                href="https://eduquest.org.in/pre-ap-coaching-in-gurgaon/"
                className={styles.btnGhost}
                target="_blank"
                rel="noreferrer"
              >
                Learn About Pre-AP →
              </a>
            </div>
          </div>

          {/* ── Right column — course cards ── */}
          <div className={styles.rightCol}>

            {/* Green pill badge */}
            <div className={styles.badge}>
              Available Pre-AP Courses (College Board)
            </div>

            {/* 2-column courses grid */}
            <div className={styles.coursesGrid}>
              {COURSES.map((course) => (
                <div key={course} className={styles.courseCard}>
                  {course}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}