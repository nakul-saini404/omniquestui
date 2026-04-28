import styles from "./Footer.module.css";

const TEST_PREP = [
  { label: "SAT Coaching", href: "https://eduquest.org.in/sat/" },
  { label: "SAT Coaching Delhi", href: "https://eduquest.org.in/sat-coaching-classes-delhi/" },
  { label: "ACT Coaching", href: "https://eduquest.org.in/act/" },
  { label: "AP Coaching", href: "https://eduquest.org.in/ap-coaching/" },
  { label: "IELTS", href: "https://eduquest.org.in/ielts/" },
  { label: "TOEFL", href: "https://eduquest.org.in/toefl/" },
];

const TUTORING = [
  { label: "IB Tutoring", href: "https://eduquest.org.in/ib-international-baccalaureate/" },
  { label: "Online Home Tuition", href: "https://eduquest.org.in/online-home-tuition/" },
  { label: "Olympiad Prep", href: "https://eduquest.org.in/olympiad/" },
  { label: "IGCSE / GCSE", href: "https://eduquest.org.in/international-curricula/" },
  { label: "PTE", href: "https://eduquest.org.in/pte/" },
];

const IMPORTANT = [
  { label: "About EduQuest", href: "https://eduquest.org.in/about-us/" },
  { label: "Success Outcomes", href: "https://eduquest.org.in/our-achievements/" },
  { label: "UG Admissions Premium", href: "https://eduquest.org.in/undergraduate-admission-premium/" },
  { label: "Profile Building", href: "https://eduquest.org.in/profile-building-programs/" },
  { label: "Study Abroad", href: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/" },
  { label: "Contact Us", href: "https://eduquest.org.in/contact-us/" },
  { label: "Free Psychometric Test", href: "https://eduquest.org.in/personality-test/" },
  { label: "Blog", href: "https://eduquest.org.in/blog" },
];

function ColLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className={styles.colLinks}>
      {links.map((l) => (
        <a key={l.href} href={l.href}>{l.label}</a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brandLogo}>
              Edu<span>Quest</span>
            </div>
            <p className={styles.brandDesc}>
              India&apos;s premier SAT, ACT, AP, UCAT and global admissions strategy
              firm. Since 1995. Online &amp; offline SAT coaching in Delhi,
              Gurgaon, Noida, Bangalore, Mumbai, Hyderabad.
            </p>
            <div className={styles.contact}>
              <a href="tel:+919958041888">+91-9958041888</a>
              <a href="tel:+919717738553">+91-9717738553</a>
              <a href="mailto:contact@eduquest.org.in">contact@eduquest.org.in</a>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Test Prep</div>
            <ColLinks links={TEST_PREP} />
          </div>

          <div>
            <div className={styles.colTitle}>Online Tutoring</div>
            <ColLinks links={TUTORING} />
          </div>

          <div>
            <div className={styles.colTitle}>Important Pages</div>
            <ColLinks links={IMPORTANT} />
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 EduQuest. All rights reserved.</span>
          <span>
            SAT Coaching in Delhi | F-45, First Floor, South City II, Gurugram
            122018
          </span>
        </div>
      </div>
    </footer>
  );
}
