import React from "react";
import styles from "./Programmes.module.css";

export default function Programmes() {
  return (
    <div className={styles.programmesSection} id="programmes">
      <div className={styles.programmesInner}>

        <div className={styles.progHead}>
          {/* Left — label + headline + sub */}
          <div>
            {/* Live online pill with pulsing dot */}
            <div className={styles.progOnlinePill}>
              <div className={styles.pulseWrap}>
                <div className={styles.pulseRing}></div>
                <div className={styles.pulseDot}></div>
              </div>
              <span className={styles.pillLabel}>Online Available</span>
            </div>

            <div className={styles.sectionLabel}>Programmes</div>
            <h2 className={`${styles.sectionTitle} ${styles.lt}`}>
              SAT Coaching Programmes<br /><em>in United States</em>
            </h2>
            <div className={styles.divider}></div>
            <p className={`${styles.sectionSub} ${styles.lt}`}>
              Every student gets a personalised roadmap built from a full Bluebook
              diagnostic. Choose the format that fits your schedule — all formats
              use the same expert faculty and adaptive mock infrastructure.
            </p>
          </div>

          {/* Right — CTA buttons */}
          <div className={styles.progBtns}>
            <a
              href="https://test.eduquest.org.in/sat-score-calculator/"
              className={styles.btnPrimary}
            >
              Book Free Diagnostic
            </a>
            <a
              href="https://app.eduquest.org.in/contact-us"
              className={styles.btnGhost}
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Cards removed as requested */}

      </div>
    </div>
  );
}