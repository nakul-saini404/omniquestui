import styles from "./ScoreImprovement.module.css";

const scores = [
  {
    name: "Seher T.",
    school: "EduQuest Online",
    before: 1250,
    after: 1510,
  },
  {
    name: "Hiya G.",
    school: "EduQuest Online",
    before: 1200,
    after: 1480,		
  },
  {
    name: "Avinash B.",
    school: "UAE / EduQuest",
    before: 1310,
    after: 1500,		
  },
  {
    name: "Aaisha S.",
    school: "EduQuest Online",
    before: 1180,
    after: 1450,		
  },
  {
    name: "Shruti G.",
    school: "Shriram Millennium, Noida",
    before: 1350,
    after: 1540,		
  },
];

export default function ScoreImprovement() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Score Improvement — At a Glance</div>
      <h2 className={styles.heading}>
        EduQuest Jaipur <em>Score Results</em>
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