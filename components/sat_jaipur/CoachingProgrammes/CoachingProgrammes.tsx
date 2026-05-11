import styles from "./CoachingProgrammes.module.css";

const courses = [
  {
    type: "Online Live",
    title: "Group Course",
    popular: false,
    features: [
      "Online Live Group Sessions",
      "100+ Hours Minimum",
      "Unlimited Doubt Clearing",
      "Study Materials Provided",
      "AI-based Test Generation",
      "Diagnostic Test Framework",
    ],
    btnLabel: "Enquire Now →",
    btnHref: "https://eduquest.org.in/product/sat-in-online-live/",
    btnVariant: "outline",
  },
  {
    type: "Personalized",
    title: "One-on-One",
    popular: true,
    features: [
      "Personal 1:1 Sessions",
      "100+ Hours Guaranteed",
      "Unlimited Retakes",
      "Personalized Roadmap",
      "Section-wise Strategy",
      "Score-till-goal Programme",
    ],
    btnLabel: "Book Free Diagnostic →",
    btnHref:
      "https://eduquest.org.in/product/sat-in-jaipur-one-on-one-online-live/",
    btnVariant: "primary",
  },
  {
    type: "Hybrid",
    title: "One-on-One Hybrid",
    popular: false,
    features: [
      "Online + Classroom Sessions",
      "100+ Hours Minimum",
      "Unlimited Doubt Clearing",
      "Profile Building Advice",
      "University Counselling",
      "Application Writing Support",
    ],
    btnLabel: "Enquire Now →",
    btnHref:
      "https://eduquest.org.in/product/sat-in-jaipur-hybridonline-live/",
    btnVariant: "outline",
  },
];

export default function CoachingProgrammes() {
  return (
    <section id="courses" className={styles.section}>
      <div className={styles.sectionLabel}>Course</div>
      <h2 className={styles.heading}>
        SAT Coaching <em>Programmes</em> in Jaipur
      </h2>
      <p className={styles.sectionSub}>
        Flexible formats for every student — online, offline, and hybrid. All
        courses include unlimited doubt-clearing and study materials.
      </p>

      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div
            key={course.title}
            className={`${styles.courseCard} ${
              course.popular ? styles.popular : ""
            }`}
          >
            {course.popular && (
              <div className={styles.popularBadge}>★ Most Popular</div>
            )}
            <div className={styles.courseType}>{course.type}</div>
            <h3>{course.title}</h3>
            <ul className={styles.courseFeatures}>
              {course.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href={course.btnHref}
              className={`${styles.btn} ${
                course.btnVariant === "primary"
                  ? styles.btnPrimary
                  : styles.btnGhostLight
              }`}
            >
              {course.btnLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}