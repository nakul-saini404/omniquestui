import styles from "./ScoreImprovement.module.css";

const scores = [
  {
    name: "Aryan M.",
    school: "DPS Gurgaon",
    before: 1240,
    after: 1540,
  },
  {
    name: "Priya S.",
    school: "TSRS Gurgaon",
    before: 1150,
    after: 1510,
  },
  {
    name: "Rohan K.",
    school: "Pathways School",
    before: 1390,
    after: 1580,
  },
  {
    name: "Ananya S.",
    school: "Modern School, Sohna Road",
    before: 1200,
    after: 1460,
  },
  {
    name: "Kabir T.",
    school: "Heritage Gurgaon",
    before: 1300,
    after: 1520,
  },
];

export default function ScoreImprovement() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Score Improvement — At a Glance</div>
      <h2 className={styles.heading}>
        EduQuest Gurgaon <em>Score Results</em>
      </h2>

      <table className={styles.scoreTable}>
        <thead>
          <tr>
            <th>Student</th>
            <th>School</th>
            <th>Score Journey</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s) => (
            <tr key={s.name}>
              <td>
                <strong>{s.name}</strong>
              </td>
              <td>{s.school}</td>
              <td>
                <span className={styles.scoreBefore}>{s.before}</span>
                <span className={styles.scoreArrow}>→</span>
                <span className={styles.scoreAfter}>{s.after}</span>
              </td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}