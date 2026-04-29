import styles from "./RelatedProgrammes.module.css";

const programmes = [
  {
    icon: "📘",
    title: "SAT Coaching (All India)",
    desc: "Complete Digital SAT 2026 syllabus, pattern, scoring guide and 1500+ strategy.",
    link: "Explore SAT →",
    href: "https://eduquest.org.in/sat/",
  },
  {
    icon: "🏆",
    title: "Profile Building Programs",
    desc: "Integrate your SAT score with a complete academic and extracurricular positioning strategy.",
    link: "Build Your Profile →",
    href: "https://eduquest.org.in/profile-building-programs/",
  },
  {
    icon: "📗",
    title: "AP Coaching",
    desc: "Strengthen your university application with AP subject scores alongside your SAT.",
    link: "Explore AP →",
    href: "https://eduquest.org.in/ap-coaching/",
  },
  {
    icon: "📐",
    title: "ACT Coaching",
    desc: "Considering the ACT instead? EduQuest offers expert ACT preparation for Gurgaon students.",
    link: "Explore ACT →",
    href: "https://eduquest.org.in/act/",
  },
  {
    icon: "🎓",
    title: "UG Admissions Premium",
    desc: "Full-service undergraduate admissions counselling for top global universities.",
    link: "Explore UG Admissions →",
    href: "https://eduquest.org.in/undergraduate-admission-premium/",
  },
  {
    icon: "🌍",
    title: "Study Abroad Consulting",
    desc: "End-to-end guidance for studying at top universities in the USA, UK, Canada, and beyond.",
    link: "Explore Study Abroad →",
    href: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
  },
];

export default function RelatedProgrammes() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Explore More</div>
      <h2 className={styles.heading}>
        Related <em>Programmes</em>
      </h2>

      <div className={styles.relatedGrid}>
        {programmes.map((p) => (
          <a key={p.title} href={p.href} className={styles.relatedCard}>
            <div className={styles.relatedIcon}>{p.icon}</div>
            <div className={styles.relatedTitle}>{p.title}</div>
            <div className={styles.relatedDesc}>{p.desc}</div>
            <div className={styles.relatedLink}>{p.link}</div>
          </a>
        ))}
      </div>
    </section>
  );
}