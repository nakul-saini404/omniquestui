"use client";

import styles from "./ACTTestDates.module.css";

const dates = [
  {
    testDate: "September 6, 2025",
    regular: "August 1",
    late: "August 19",
    photo: "August 29",
  },
  {
    testDate: "October 18, 2025",
    regular: "September 12",
    late: "September 30",
    photo: "October 10",
  },
  {
    testDate: "December 13, 2025",
    regular: "November 7",
    late: "November 24",
    photo: "December 5",
  },
  {
    testDate: "February 14, 2026",
    regular: "January 9",
    late: "January 23",
    photo: "February 9",
  },
  {
    testDate: "April 11, 2026",
    regular: "March 6",
    late: "March 24",
    photo: "April 6",
  },
  {
    testDate: "June 13, 2026",
    regular: "May 8",
    late: "May 29",
    photo: "June 8",
  },
  {
    testDate: "July 11, 2026 *",
    regular: "June 5",
    late: "June 24",
    photo: "July 6",
  },
];

const columns = [
  { key: "testDate", label: "Test Dates" },
  { key: "regular", label: "Regular Registration Deadline" },
  { key: "late", label: "Late Registration Deadline" },
  { key: "photo", label: "Photo Upload and Standby Deadline" },
] as const;

export default function ACTTestDates() {
  return (
    <section id="test-dates" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>National Test Schedule</span>
        <h2 className={styles.title}>
          ACT Test Dates <em className={styles.em}>2025 | 2026</em>
        </h2>
        <p className={styles.sub}>
          Official national ACT test dates and registration deadlines.
          Register early — late registration carries additional fees.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`${styles.th} ${col.key === "testDate" ? styles.thFirst : ""}`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dates.map((row, i) => (
                <tr key={i} className={styles.row}>
                  <td className={styles.tdDate}>{row.testDate}</td>
                  <td className={`${styles.td} ${styles.tdBold}`}>{row.regular}</td>
                  <td className={styles.td}>{row.late}</td>
                  <td className={styles.td}>{row.photo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>
          * No test centers are scheduled in New York for the July test date.
        </p>
        <p className={styles.footnote}>
          My Answer Key (formerly known as Test Information Release) for the 2025–2026 testing year
          will occur in October, April, and June.{" "}
          <a
            href="https://www.act.org/the-act/tir"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            See www.act.org/the-act/tir for more information.
          </a>
        </p>
      </div>
    </section>
  );
}