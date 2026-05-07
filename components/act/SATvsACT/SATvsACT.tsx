"use client";

import styles from "./SATvsACT.module.css";

const rows = [
  {
    factor: "Sections",
    sat: "2 (Reading & Writing, Math)",
    act: "4 (English, Math, Reading, Science)",
  },
  {
    factor: "Duration",
    sat: "~2 hrs 14 min",
    act: "~2 hrs 55 min",
  },
  {
    factor: "Score Range",
    sat: "400–1600",
    act: "1–36 (composite)",
  },
  {
    factor: "Science Section",
    sat: "No",
    act: "Yes — Data Interpretation",
  },
  {
    factor: "Math Coverage",
    sat: "Algebra & Advanced Math",
    act: "+ Trigonometry, Geometry",
  },
  {
    factor: "Time Pressure",
    sat: "Moderate",
    act: "High — faster pacing",
  },
  {
    factor: "Best For",
    sat: "CBSE students, strong Math",
    act: "All-rounders, ICSE backgrounds",
  },
  {
    factor: "EduQuest Highest",
    sat: "1590–1600",
    act: "36 (Perfect)",
  },
];

export default function SATvsACT() {
  return (
    <section id="compare" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>SAT vs ACT</span>
        <h2 className={styles.title}>
          Which Test Is <em className={styles.em}>Right for You?</em>
        </h2>
        <p className={styles.sub}>
          ACT and SAT are equally accepted. Use this comparison to decide — or
          better yet, take a free diagnostic on both to find your natural fit.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFactor}>Factor</th>
                <th className={styles.th}>SAT</th>
                <th className={`${styles.th} ${styles.thGold}`}>ACT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.factor} className={i % 2 === 1 ? styles.rowEven : ""}>
                  <td className={styles.tdFactor}>{row.factor}</td>
                  <td className={styles.td}>{row.sat}</td>
                  <td className={`${styles.td} ${styles.tdGold}`}>{row.act}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.insight}>
          <span className={styles.insightIcon}>💡</span>
          <p  style={{color:"#fff"}}>
            <strong className={styles.insightLabel}>EduQuest Insight:</strong>{" "}
            Interestingly, SAT and ACT complement each other — many common
            topics mean preparing for one gives you an edge in the other.
            EduQuest trains students for both to maximise your competitive
            advantage.
          </p>
        </div>
      </div>
    </section>
  );
}