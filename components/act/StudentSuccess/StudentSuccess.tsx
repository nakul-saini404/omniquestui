"use client";

import styles from "./StudentSuccess.module.css";

const testimonials = [
  {
    stars: 5,
    score: "SAT 1520",
    quote:
      "I'm Hardik from Gurgaon, and on my first attempt I scored 1520. EduQuest's digital coaching and personal guidance through every step was outstanding. Rupali ma'am helped me immensely with my summer programme application too.",
    initial: "H",
    name: "Hardik",
    location: "Gurgaon",
  },
  {
    stars: 5,
    score: "SAT 1500 · Math 800 · $15K Scholarship",
    quote:
      "I scored 1500 with an 800 in Maths. EduQuest's team went the extra mile every time. Their digital classes gave me access to resources I never thought possible. Without them, this score would not have happened.",
    initial: "A",
    name: "Avinash Biju",
    location: "UAE",
  },
  {
    stars: 5,
    score: "AP CS 5/5 · SAT 1500 · $12K Scholarship",
    quote:
      "I prepared for AP with EduQuest and scored 1500 with perfect AP CS 5/5. The mocks were almost identical to the real test. Throughout my journey, the entire EduQuest team was incredibly supportive.",
    initial: "S",
    name: "Soham Sharma",
    location: "New Delhi",
  },
];

export default function StudentSuccess() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>Student Success</span>
        <h2 className={styles.title}>
          What Our <em className={styles.em}>Students Say</em>
        </h2>
        <p className={styles.sub}>
          Real stories from students who transformed their scores and earned
          admission to their dream universities.
        </p>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {"★".repeat(t.stars)}
              </div>
              <div className={styles.score}>{t.score}</div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initial}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.location}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}