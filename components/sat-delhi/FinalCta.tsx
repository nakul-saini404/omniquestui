import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.inner}>
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
          <a
            href="#faq"
            className={`btn-outline ${styles.btnOutlineLight}`}
          >
            Read FAQs →
          </a>
          <a
            href="https://eduquest.org.in/contact-us/"
            className={`btn-primary ${styles.btnGold}`}
          >
            Request Callback →
          </a>
        </div>
      </div>
    </section>
  );
}