import styles from "./FinalCta.module.css";

const GRADES = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export default function FinalCta() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.inner}>
        {/* Left */}
        <div>
          <div className={styles.badge}>✦ Limited Diagnostic Slots · Delhi 2026</div>
          <h2 className={styles.h2}>
            Your Child Has Potential —<br />
            They Need <em>Positioning</em>
          </h2>
          <p className={styles.desc}>
            Without the right strategy, even talented students fall short. With
            EduQuest&apos;s SAT coaching in Delhi — built around diagnostics,
            strategy, and admissions positioning — anything is possible.
          </p>
          <div className={styles.btns}>
            <a
              href="https://eduquest.org.in/contact-us/"
              className={`btn-primary ${styles.btnGold}`}
            >
              Book Free Strategy Session
            </a>
            <a href="#faq" className={`btn-outline ${styles.btnOutlineLight}`}>
              Read FAQs →
            </a>
          </div>
        </div>

        {/* Right form card */}
        <div className={styles.formCard}>
          <h3>Request a Callback</h3>
          <p>Our SAT strategy team will reach out within 24 hours.</p>
          <input type="text" placeholder="Your Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />
          <select defaultValue="">
            <option value="" disabled>Current Grade</option>
            {GRADES.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
          <a
            href="https://eduquest.org.in/contact-us/"
            className={`btn-primary ${styles.btnGold}`}
            style={{ display: "block", textAlign: "center", width: "100%" }}
          >
            Request Callback →
          </a>
          <p className={styles.formNote}>
            No commitment required. Free initial diagnostic included.
          </p>
        </div>
      </div>
    </section>
  );
}
