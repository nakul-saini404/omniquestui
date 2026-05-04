import { useState } from "react";
import styles from "./StudentStories.module.css";

interface Testimonial {
  initials: string;
  name: string;
  school: string;
  score: string;
  improvement?: string;
  quote: string;
  state: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "RP",
    name: "Riya Patel",
    school: "Princeton Day School, NJ",
    score: "1570",
    improvement: "+180",
    quote:
      "EduQuest fit perfectly into my US schedule. The 1-on-1 sessions were laser-focused on my weak areas. Scored 1570 and got into Princeton Day School's honors track.",
    state: "New Jersey",
  },
  {
    initials: "NC",
    name: "Neha Chandrasekaran",
    school: "Thomas Jefferson HS, VA",
    score: "1590",
    improvement: "+190",
    quote:
      "Even with a strong background at TJ, EduQuest showed me Bluebook adaptive strategies I hadn't considered. Improved 190 points to hit 1590.",
    state: "Virginia",
  },
  {
    initials: "KS",
    name: "Karan Sharma",
    school: "Westwood High School, TX",
    score: "1550",
    improvement: "+210",
    quote:
      "Scored 1550 and got into UT Austin with a merit scholarship. EduQuest's approach to Math adaptive modules was extremely focused and efficient.",
    state: "Texas",
  },
  {
    initials: "PI",
    name: "Pooja Iyer",
    school: "Saratoga High School, CA",
    score: "1575",
    improvement: "+220",
    quote:
      "The PST-compatible sessions were a relief. EduQuest's faculty is genuinely the best I've worked with — deep content knowledge and exceptional clarity.",
    state: "California",
  },
  {
    initials: "AD",
    name: "Anika Desai",
    school: "Naperville North HS, IL",
    score: "1560",
    improvement: "+200",
    quote:
      "EduQuest's programme matches anything available locally in the US — and the 1-on-1 individual attention is something most local tutors can't provide.",
    state: "Illinois",
  },
  {
    initials: "VS",
    name: "Vikram Subramanian",
    school: "Mission San Jose HS, CA",
    score: "1585",
    improvement: "+205",
    quote:
      "The diagnostic identified exactly two question types where I was losing marks in R&W. Targeted practice resolved it in 4 weeks. Went from 1380 to 1585.",
    state: "California",
  },
];

const StarRating = () => (
  <div className={styles.stars} aria-label="5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 16 16" className={styles.starIcon}>
        <polygon
          points="8,1 10.2,5.9 15.5,6.6 11.7,10.3 12.7,15.5 8,13 3.3,15.5 4.3,10.3 0.5,6.6 5.8,5.9"
          fill="currentColor"
        />
      </svg>
    ))}
  </div>
);

export default function StudentStories() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      {/* Decorative background glyphs */}
      <div className={styles.bgGlyph1} aria-hidden />
      <div className={styles.bgGlyph2} aria-hidden />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Student Stories</span>
          <h2 className={styles.title}>
            Real Results from{" "}
            <em className={styles.titleAccent}>US Students</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            320+ US students coached. Average improvement of{" "}
            <strong>+220 points</strong> — across every state.
          </p>
        </div>

        {/* Aggregate stat strip */}
        <div className={styles.statStrip}>
          {[
            { num: "1560", label: "Avg Score · 2025 Batch" },
            { num: "97%", label: "Score Improvement Rate" },
            { num: "+220", label: "Avg Point Improvement" },
            { num: "320+", label: "US Students Coached" },
          ].map((s) => (
            <div className={styles.stat} key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`${styles.card} ${active === i ? styles.cardActive : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ "--i": i } as React.CSSProperties}
            >
              {/* Score badge */}
              <div className={styles.scoreBadge}>
                <span className={styles.scoreNum}>{t.score}</span>
                {t.improvement && (
                  <span className={styles.improvement}>{t.improvement}</span>
                )}
              </div>

              <StarRating />

              <blockquote className={styles.quote}>
                <span className={styles.openQuote}>"</span>
                {t.quote}
              </blockquote>

              {/* Author row */}
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorSchool}>{t.school}</div>
                </div>
              </div>

              {/* Hover shimmer line */}
              <div className={styles.shimmer} aria-hidden />
            </article>
          ))}
        </div>

        {/* CTA row */}
       
      </div>
    </section>
  );
}