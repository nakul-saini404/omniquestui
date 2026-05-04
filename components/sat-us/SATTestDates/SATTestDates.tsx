import React from "react";
import styles from "./SATTestDates.module.css";

const testDates = [
  {
    date: "March 8, 2026",
    regDeadline: "February 20, 2026",
    lateReg: "Feb 27",
    scoreRelease: "March 20, 2026",
    recommendedFor: "Grade 11 — first attempt",
  },
  {
    date: "May 2, 2026",
    regDeadline: "April 17, 2026",
    lateReg: "Apr 24",
    scoreRelease: "May 14, 2026",
    recommendedFor: "Grade 11 — second / AP season",
  },
  {
    date: "June 6, 2026",
    regDeadline: "May 22, 2026",
    lateReg: "May 29",
    scoreRelease: "June 18, 2026",
    recommendedFor: "Grade 10–11 — summer payoff",
  },
  {
    date: "August 29, 2026",
    regDeadline: "August 14, 2026",
    lateReg: "Aug 21",
    scoreRelease: "Sept 10, 2026",
    recommendedFor: "Grade 12 — EA/ED applicants",
  },
  {
    date: "October 3, 2026",
    regDeadline: "September 18, 2026",
    lateReg: "Sep 25",
    scoreRelease: "Oct 15, 2026",
    recommendedFor: "Grade 12 — RD applicants",
  },
  {
    date: "November 7, 2026",
    regDeadline: "October 23, 2026",
    lateReg: "Oct 30",
    scoreRelease: "Nov 19, 2026",
    recommendedFor: "Grade 12 — final attempt",
  },
];

export default function SATTestDates() {
  return (
    <section className={`${styles.sec} ${styles.secBorder}`}>
      <div className={`${styles.sectionLabel} ${styles.dk}`}>2026 Calendar</div>
      <h2 className={styles.sectionTitle}>
        US SAT <em>Test Dates 2026</em>
      </h2>
      <div className={styles.divider}></div>
      <p className={styles.sectionSub}>
        All US test dates by College Board. Registration closes approximately 3
        weeks before each test date.
      </p>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Test Date</th>
              <th>Registration Deadline</th>
              <th>Late Registration</th>
              <th>Score Release</th>
              <th>Recommended For</th>
            </tr>
          </thead>
          <tbody>
            {testDates.map((row) => (
              <tr key={row.date}>
                <td>
                  <strong>{row.date}</strong>
                </td>
                <td>{row.regDeadline}</td>
                <td>{row.lateReg}</td>
                <td>{row.scoreRelease}</td>
                <td className={styles.mu}>{row.recommendedFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Info box */}
      <div className={styles.infoBox}>
        <h4>📅 When Should US Students Start SAT Prep?</h4>
        <p>
          <strong>Grade 9–10:</strong> Begin with PSAT prep and foundational
          skill building. EduQuest offers 2-year programmes.&nbsp;&nbsp;
          <strong>Grade 11:</strong> Ideal time for full SAT prep — target March
          or May test dates.&nbsp;&nbsp;
          <strong>Grade 12:</strong> August or October dates align with EA/ED
          deadlines (Nov 1–15).
        </p>
      </div>
    </section>
  );
}