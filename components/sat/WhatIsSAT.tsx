import styles from "./WhatIsSAT.module.css";

const facts = [
  {
    icon: "📅",
    title: "SAT Exam Dates 2026 (India)",
    desc: "March, May, August, October, December — Saturdays. Register at collegeboard.org at least 3–4 weeks prior.",
  },
  {
    icon: "💻",
    title: "Digital SAT vs Paper SAT",
    desc: "All SATs since 2024 are fully digital (Bluebook app). Adaptive, shorter (2h 14min vs 3h), and calculator-allowed throughout Math.",
  },
  {
    icon: "🔁",
    title: "How Many Attempts Are Allowed?",
    desc: "No official limit. Most students take 2–3 attempts. Colleges take your best score or Superscore across attempts. EduQuest recommends starting in Grade 10.",
  },
  {
    icon: "🏫",
    title: "Who Should Take the SAT?",
    desc: "Grades 10–12 students targeting undergraduate admissions at US, UK, Canadian, Australian universities. Also useful for scholarships and Honours programmes.",
  },
];

const testimonials = [
  {
    initial: "S",
    bg: "var(--gold)",
    color: "var(--navy)",
    quote: "I scored 1510 in my SAT. EduQuest was a huge part of my journey — constant preparation and support.",
    name: "Seher Taneja · 1510 SAT",
  },
  {
    initial: "H",
    bg: "rgba(255,255,255,.12)",
    color: "#fff",
    quote: "First attempt, scored 1520. EduQuest's digital SAT strategy and direction made it possible.",
    name: "Hardik, Gurgaon · 1520 SAT",
  },
];

export default function WhatIsSAT() {
  return (
    <section className={styles.whatSat} id="what-sat-deep">
      <div className="container">
        <div className={styles.whatSatGrid}>
          <div>
            <div className="label reveal">Featured Snippet Section</div>
            <h2 className={`${styles.h2} reveal`}>
              What is the SAT<br />Exam <em>2026?</em>
            </h2>
            <div className={`${styles.snippetBox} reveal`}>
              <p>
                The SAT is a standardised test developed by College Board, measuring
                college readiness through Reading &amp; Writing and Mathematics. The
                Digital SAT (launched 2024) is fully computer-adaptive — meaning the
                difficulty of Module 2 is determined by your Module 1 performance. It is
                scored from 400 to 1600. Accepted by 4,000+ universities in the USA, UK,
                Canada, and Australia.
              </p>
            </div>
            <div className={`${styles.whatFacts} reveal`}>
              {facts.map((f) => (
                <div key={f.title} className={styles.factRow}>
                  <div className={styles.factIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.factTitle}>{f.title}</div>
                    <div className={styles.factDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              alt="SAT exam preparation at EduQuest"
              className={styles.satImg}
            />
            <div className={styles.testimonialBox}>
              <div className={styles.testimonialLabel}>
                Trusted by Students Scoring 1400–1560+
              </div>
              {testimonials.map((t) => (
                <div key={t.name} className={styles.testimonialItem}>
                  <div
                    className={styles.testimonialAvatar}
                    style={{ background: t.bg, color: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className={styles.testimonialQuote}>"{t.quote}"</p>
                    <span className={styles.testimonialName}>{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
