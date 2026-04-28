import Link from "next/link";
import styles from "./Hero.module.css";

const STATS = [
  { num: "97", suffix: "%", label: "Score Improvement Rate" },
  { num: "1560", suffix: "+", label: "Top Student Scores" },
  { num: "24", suffix: "+", label: "Years in Delhi NCR" },
];

const CARD_ITEMS = [
  "Identify your current strengths and gaps",
  "Receive a personalized score roadmap",
  "Understand your university positioning",
  "Get a strategic SAT preparation plan",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
          <div>
            <div className={styles.eyebrow}>
              <div className={styles.eyebrowLine} />
              <div className={styles.eyebrowText}>SAT Coaching · Delhi NCR</div>
            </div>

            <h1 className={styles.h1}>
              SAT Coaching in Delhi —<br />
              Built for <em>Top University</em>
              <br />
              Admissions
            </h1>

            <p className={styles.sub}>
              At EduQuest, SAT preparation is not just about improving scores. We
              strategically position your academic performance as part of a
              high-impact global university application. Online &amp; offline SAT
              coaching in Delhi since 1995.
            </p>

            <p className={styles.micro}>
              → Designed for students targeting top global universities
            </p>

            <div className={styles.snippet}>
              <strong>Why Delhi Students Choose EduQuest</strong>
              <p>
                With flexible online and offline digital SAT coaching in Delhi, a
                Diagnostic Test Framework, 100+ minimum coaching hours, and
                unlimited doubt-clearing sessions — we prepare students for the
                score and the admission.
              </p>
            </div>

            <div className={styles.ctas}>
              <a href="https://eduquest.org.in/contact-us/" className="btn-primary">
                📊 Book Free SAT Diagnostic
              </a>
              <a href="#system" className="btn-outline">
                See How Our System Works →
              </a>
            </div>

            <div className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className={styles.statNum}>
                    {s.num}
                    <span>{s.suffix}</span>
                  </div>
                  <div className={styles.statLbl}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>🎯</div>
              <div className={styles.cardHeaderText}>
                <h3>Start Your SAT Diagnostic</h3>
                <p>Free · No commitment required</p>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardLabel}>Quick Diagnostic Registration</div>
              <ul className={styles.cardItems}>
                {CARD_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.form}>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
                <select defaultValue="">
                  <option value="" disabled>Current Grade</option>
                  {["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map(
                    (g) => <option key={g}>{g}</option>
                  )}
                </select>
                <select defaultValue="">
                  <option value="" disabled>SAT Target Score</option>
                  {["1400+", "1450+", "1500+", "1550+", "1580+"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <a
                  href="https://eduquest.org.in/contact-us/"
                  className={`btn-primary ${styles.formBtn}`}
                >
                  📊 Book Free SAT Diagnostic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
