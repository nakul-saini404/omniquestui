import styles from "./InternalLinks.module.css";

const LINKS = [
  {
    icon: "📘",
    title: "SAT Coaching (All India)",
    desc: "Complete Digital SAT 2026 syllabus, pattern, scoring guide and 1500+ strategy.",
    arrow: "Explore SAT →",
    href: "https://eduquest.org.in/sat/",
  },
  {
    icon: "🏆",
    title: "Profile Building Programs",
    desc: "Integrate your SAT score with a complete academic and extracurricular positioning strategy.",
    arrow: "Build Your Profile →",
    href: "https://eduquest.org.in/profile-building-programs/",
  },
  {
    icon: "📗",
    title: "AP Coaching",
    desc: "Strengthen your university application with AP subject scores alongside your SAT.",
    arrow: "Explore AP →",
    href: "https://eduquest.org.in/ap-coaching/",
  },
  {
    icon: "📐",
    title: "ACT Coaching",
    desc: "Considering the ACT instead? EduQuest offers expert ACT preparation for Delhi students.",
    arrow: "Explore ACT →",
    href: "https://eduquest.org.in/act/",
  },
  {
    icon: "🎓",
    title: "UG Admissions Premium",
    desc: "Full-service undergraduate admissions counselling for top global universities.",
    arrow: "Explore UG Admissions →",
    href: "https://eduquest.org.in/undergraduate-admission-premium/",
  },
  {
    icon: "🌍",
    title: "Study Abroad Consulting",
    desc: "End-to-end guidance for studying at top universities in the USA, UK, Canada, and beyond.",
    arrow: "Explore Study Abroad →",
    href: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/",
  },
];

export default function InternalLinks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head">
          <div className="label">Explore More</div>
          <h2>
            Related <em>Programmes</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.card}>
              <div className={styles.icon}>{l.icon}</div>
              <div>
                <h4>{l.title}</h4>
                <p>{l.desc}</p>
                <div className={styles.arrow}>{l.arrow}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
