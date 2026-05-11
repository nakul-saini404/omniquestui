import styles from "./FeaturedSnippet.module.css";

const INFO_BLOCKS = [
  {
    icon: "📅",
    title: "SAT Exam Dates 2026 (India)",
    text: "March, May, August, October, December — Saturdays. Register at collegeboard.org at least 3–4 weeks prior.",
  },
  {
    icon: "💻",
    title: "Digital SAT vs Paper SAT",
    text: "All SATs since 2024 are fully digital (Bluebook app). Adaptive, shorter (2h 14min vs 3h), and calculator-allowed throughout Math.",
  },
  {
    icon: "🔁",
    title: "How Many Attempts Are Allowed?",
    text: "No official limit. Most students take 2–3 attempts. Colleges take your best score or Superscore. EduQuest recommends starting in Grade 10.",
  },
  {
    icon: "🏫",
    title: "Who Should Take the SAT?",
    text: "Grades 10–12 students targeting undergraduate admissions at US, UK, Canadian, Australian universities. Also useful for scholarships and Honours programmes.",
  },
];

const TESTIMONIALS = [
  {
    avatar: "S",
    text: "\"I scored 1510 in my SAT. EduQuest was a huge part of my journey — constant preparation and support.\"",
    name: "Seher Taneja",
    score: "SAT 1510 · New Delhi",
  },
  {
    avatar: "H",
    text: "\"First attempt, scored 1520. EduQuest's digital SAT strategy and direction made it possible.\"",
    name: "Hardik, Gurgaon",
    score: "SAT 1520",
  },
];

const LOCATIONS = [
  { area: "Bandra",  sub: "West Mumbai" },
  { area: "Andheri", sub: "Western Suburbs" },
  { area: "Powai",   sub: "Central Mumbai" },
  { area: "Juhu",    sub: "North Mumbai" },
  { area: "Thane",   sub: "Extended Region" },
  { area: "Online",  sub: "Pan-Mumbai" },
];

export default function FeaturedSnippet() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.sectionLabel}>Featured Snippet</div>
        <h2 className={styles.sectionTitle}>
          What is the SAT Exam <em>2026?</em>
        </h2>

        {/* ── TWO-COL GRID ── */}
        <div className={styles.whatsatGrid}>

          {/* LEFT — intro + info blocks */}
          <div>
            <p className={styles.introPara}>
              The SAT is a standardised test developed by College Board,
              measuring college readiness through Reading &amp; Writing and
              Mathematics. The Digital SAT (launched 2024) is fully
              computer-adaptive — meaning the difficulty of Module 2 is
              determined by your Module 1 performance. It is scored from 400 to
              1600. Accepted by 4,000+ universities in the USA, UK, Canada, and
              Australia.
            </p>

            <div className={styles.infoBlocks}>
              {INFO_BLOCKS.map((b) => (
                <div key={b.title} className={styles.infoBlock}>
                  <div className={styles.infoBlockHead}>
                    <span className={styles.infoIcon}>{b.icon}</span>
                    <h3>{b.title}</h3>
                  </div>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo + testimonials */}
          <div>
            <div className={styles.photoFrame}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                alt="SAT exam preparation at EduQuest Mumbai"
              />
              <div className={styles.photoCaption}>
                Trusted by Students Scoring 1400–1560+ in Mumbai
              </div>
            </div>

            <div className={styles.testiList}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className={styles.testiCard}>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.testiText}>{t.text}</p>
                  <div className={styles.testiAuthor}>
                    <div className={styles.testiAv}>{t.avatar}</div>
                    <div>
                      <div className={styles.testiName}>{t.name}</div>
                      <div className={styles.testiScore}>{t.score}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── MUMBAI HIGHLIGHT ── */}
        <div className={styles.mumbaiHighlight}>
          <h3>📍 SAT Coaching in Mumbai — Where We Operate</h3>
          <p className={styles.mumbaiSub}>
            EduQuest serves Mumbai students across all major neighbourhoods —
            online, offline, and hybrid modes available.
          </p>
          <div className={styles.mumbaiGrid}>
            {LOCATIONS.map((l) => (
              <div key={l.area} className={styles.mumbaiLoc}>
                <strong>{l.area}</strong>
                {l.sub}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}