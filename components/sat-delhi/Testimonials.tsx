import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    initials: "ST",
    name: "Sahil Taneja",
    score: "SAT 1520 · Admitted to NYU",
    text: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
  },
  {
    initials: "HK",
    name: "Hardik K.",
    score: "SAT 1520 · First Attempt · Gurgaon",
    text: "I'm Hardik from Gurgaon, and on my first attempt at the SAT, I scored 1520. EduQuest's guidance through digital SAT coaching in Delhi supported me immensely. Their unwavering commitment made a real difference.",
  },
  {
    initials: "SE",
    name: "Seher Taneja",
    score: "SAT 1510 · New Delhi",
    text: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head">
          <div className="label">What Our Students Say</div>
          <h2>
            Real Results, <em>Real Stories</em>
          </h2>
          <p>
            Students from Delhi, Gurgaon, Noida, and across India have achieved
            exceptional SAT scores and university admissions with EduQuest.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.score}>{t.score}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
