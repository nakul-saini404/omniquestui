// components/sat_city/extras/CollegeBoardSection.tsx
"use client";
import styles from "./extras.module.css";

export default function CollegeBoardSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head reveal">
          <p className="label">Test Registration</p>
          <h2>Digital SAT <em>Test Dates</em> 2026</h2>
          <p>College Board's 2026 Digital SAT international test date calendar.</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Test Date</th>
                <th>Registration Deadline</th>
                <th>Score Release</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["March 8, 2026", "February 20, 2026", "March 20, 2026"],
                ["May 2, 2026", "April 17, 2026", "May 14, 2026"],
                ["June 6, 2026", "May 22, 2026", "June 18, 2026"],
                ["August 29, 2026", "August 14, 2026", "September 10, 2026"],
                ["October 3, 2026", "September 18, 2026", "October 15, 2026"],
                ["November 7, 2026", "October 23, 2026", "November 19, 2026"],
              ] as [string, string, string][]).map(([date, reg, score]) => (
                <tr key={date}>
                  <td>{date}</td>
                  <td>{reg}</td>
                  <td>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}