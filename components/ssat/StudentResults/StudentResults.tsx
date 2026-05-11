"use client";

import styles from "./StudentResults.module.css";

/* ── Types ──────────────────────────────────── */
interface Testimonial {
  initial: string;
  quote: string;
  name: string;
  score: string;
}

/* ── Static data ─────────────────────────────── */
const testimonials: Testimonial[] = [
  {
    initial: "R",
    quote:
      "My son appeared for the Upper Level SSAT targeting boarding schools in the US. EduQuest's vocabulary programme and timed mock practice transformed his verbal section. He went from 72nd to 94th percentile in three months.",
    name: "Rajiv Mehta (Parent)",
    score: "Son scored 94th Percentile · Delhi",
  },
  {
    initial: "A",
    quote:
      "I took the Middle Level SSAT for admission to a school in Switzerland. The EduQuest team understood exactly what each school was looking for and prepared me section by section. I got in with a scholarship.",
    name: "Ananya S.",
    score: "Middle Level · 91st Percentile · Gurgaon",
  },
  {
    initial: "K",
    quote:
      "As an international student from Nigeria, the SSAT was completely new to me. EduQuest's online programme was thorough, structured, and exactly what I needed. Their writing sample coaching was something no other institute offered.",
    name: "Kofi Osei",
    score: "Upper Level · 88th Percentile · Nigeria",
  },
];

/* ── Component ───────────────────────────────── */
export default function StudentResults() {
  return (
    <section className={styles.testiSection} id="results">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Student Results</span>
          <h2 className={styles.sectionTitle}>
            Trusted by Families Targeting <em>Elite Private Schools</em>
          </h2>
          <p className={styles.sectionSub}>
            Real students. Real scores. Real outcomes — from India, UAE,
            Nigeria, and beyond.
          </p>
        </div>

        {/* ── Testimonial cards ── */}
        <div className={styles.testiGrid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.testiCard}>
              <div className={styles.testiStars} aria-label="5 stars">
                ★★★★★
              </div>
              <p className={styles.testiText}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar} aria-hidden="true">
                  {t.initial}
                </div>
                <div>
                  <div className={styles.testiName}>{t.name}</div>
                  <div className={styles.testiScore}>{t.score}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}