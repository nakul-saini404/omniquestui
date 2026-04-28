import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.ctaFinal} id="cta">
      <div className={styles.ctaFinalInner}>
        <div className={`${styles.ctaFinalTag} reveal`}>
          ✦ Limited Advisory Slots · 2026 Intake
        </div>
        <h2 className="reveal">
          Your Child Has Potential —<br />
          They Need <em>Positioning</em>
        </h2>
        <p className="reveal">
          Without the right strategy, even talented students fall short. With the right{" "}
          <strong>Top 80</strong> university framework, anything is possible.
        </p>
        <div className={`${styles.ctaBtns} reveal`}>
          <a href="https://eduquest.org.in/contact-us/" className={`btn-primary ${styles.ctaBtnGold}`}>
            Book Advance Strategy Session
          </a>
          <a href="#faq" className={`btn-outline ${styles.ctaBtnOutlineLight}`}>
            Explore Programme →
          </a>
        </div>
      </div>
    </section>
  );
}
