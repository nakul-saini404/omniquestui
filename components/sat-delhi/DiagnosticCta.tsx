import styles from "./DiagnosticCta.module.css";

export default function DiagnosticCta() {
  return (
    <section className={styles.section} id="diagnostic">
      <div className={styles.inner}>
        <span className={styles.label}>Not Sure Where You Stand?</span>
        <h2 className={styles.h2}>
          Start With a Free <em>SAT Diagnostic</em>
        </h2>
        <p className={styles.desc}>
          Start with a structured evaluation of your current SAT positioning and
          score potential. No commitment required. Available for students in
          Delhi, Noida, Gurgaon, and online across India.
        </p>
        <div className={styles.btns}>
          <a
            href="https://eduquest.org.in/contact-us/"
            className={`btn-primary ${styles.btnGold}`}
          >
            📊 Take Free SAT Diagnostic Test
          </a>
          <a
            href="https://eduquest.org.in/sat/"
            className={`btn-outline ${styles.btnOutlineLight}`}
          >
            Explore Full SAT Programme →
          </a>
        </div>
      </div>
    </section>
  );
}
