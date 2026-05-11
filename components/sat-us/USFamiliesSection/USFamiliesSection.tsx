import React from "react";
import styles from "./USFamiliesSection.module.css";

export default function USFamiliesSection() {
  return (
    <section className={`${styles.sec} ${styles.secBorder}`} id="us">

      <div className={`${styles.sectionLabel} ${styles.dk}`}>Made for US Families</div>
      <h2 className={styles.sectionTitle}>
        Why <em>US Students</em> Choose EduQuest
      </h2>
      <div className={styles.divider}></div>
      <p className={styles.sectionSub}>
        EduQuest's US cohort averaged 1560 in 2025 — the highest of any EduQuest geography.
        Here's what makes the US programme different.
      </p>

      {/* Compare Grid */}
      <div className={styles.compareGrid}>

        {/* EduQuest — highlighted */}
        <div className={`${styles.compareBlock} ${styles.hl}`}>
          <h4>✅ EduQuest for US Students</h4>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>EST, CST, PST session slots — any US time zone</span></div>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>Aligned with College Board's US test dates (Aug, Oct, Nov, Mar, May)</span></div>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>Bluebook-native mock tests — identical to the real exam interface</span></div>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>PSAT / NMSQT prep for National Merit targeting</span></div>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>19-cluster skill mapping — pinpoints exactly where you lose marks</span></div>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>SAT integrated with full US college application strategy</span></div>
          <div className={styles.ci}><span className={styles.ic}>✓</span><span>Serves all 50 states — highest concentration in NJ, CA, TX, NY, GA, IL</span></div>
        </div>

        {/* Competitor */}
        <div className={styles.compareBlock}>
          <h4>❌ Typical US Tutors / Prep Centers</h4>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>Generic prep without adaptive module routing strategy</span></div>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>Often use outdated paper SAT materials</span></div>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>Limited mock test infrastructure; no Bluebook simulation</span></div>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>No PSAT / National Merit pathway guidance</span></div>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>Broad instruction — not personalized to your weak clusters</span></div>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>SAT coaching in isolation from college application</span></div>
          <div className={styles.ci}><span className={`${styles.ic} ${styles.bad}`}>✗</span><span>High cost ($150–$250/hr) with no structured outcome framework</span></div>
        </div>

      </div>

      {/* States */}
      <div className={`${styles.sectionLabel} ${styles.dk}`} style={{ marginTop: "3rem" }}>
        States We Serve
      </div>
      <h3 className={styles.statesHeading}>
        Serving All 50 US States — Highest Concentration:
      </h3>
      <div className={styles.statesGrid}>
        {[
          "🏙 New Jersey","☀️ California","⭐ Texas","🗽 New York",
          "🍑 Georgia","🌿 Illinois","🌲 Washington","🎓 Virginia",
          "🏛 Massachusetts","🌞 Florida","🎭 Pennsylvania","🌽 Ohio",
          "+ All Other States",
        ].map((s) => (
          <span key={s} className={styles.statePill}>{s}</span>
        ))}
      </div>

    </section>
  );
}