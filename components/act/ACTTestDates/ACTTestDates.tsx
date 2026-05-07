"use client";

import styles from "./ACTTestDates.module.css";

const dates = [
  {
    testDates: "5–6 September, 2025",
    regular: "8 August",
    late: "22 August",
    photo: "22 August",
  },
  {
    testDates: "17–18 October, 2025",
    regular: "19 September",
    late: "3 October",
    photo: "3 October",
  },
  {
    testDates: "12–13 December, 2025",
    regular: "14 November",
    late: "28 November",
    photo: "28 November",
  },
  {
    testDates: "6–7 February, 2026",
    regular: "9 January",
    late: "23 January",
    photo: "23 January",
  },
  {
    testDates: "10–11 April, 2026",
    regular: "13 March",
    late: "27 March",
    photo: "27 March",
  },
  {
    testDates: "12–13 June, 2026",
    regular: "15 May",
    late: "29 May",
    photo: "29 May",
  },
  {
    testDates: "10–11 July, 2026",
    regular: "12 June",
    late: "26 June",
    photo: "26 June",
  },
];

const columns = [
  { key: "testDates", label: "Test Dates" },
  { key: "regular", label: "Regular Registration Deadline" },
  { key: "late", label: "Late Registration Deadline" },
  { key: "photo", label: "Photo Upload Deadline" },
] as const;

export default function ACTTestDates() {
  return (
    <section id="test-dates" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>International Test Schedule</span>
        <h2 className={styles.title}>
          ACT Test Dates <em className={styles.em}>2025 | 2026</em>
        </h2>
        <p className={styles.sub}>
          Official international ACT test dates and registration deadlines.
          Register early — late registration carries additional fees.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`${styles.th} ${col.key === "testDates" ? styles.thFirst : ""}`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dates.map((row, i) => (
                <tr key={i} className={styles.row}>
                  <td className={styles.tdDate}>{row.testDates}</td>
                  <td className={`${styles.td} ${styles.tdBold}`}>{row.regular}</td>
                  <td className={styles.td}>{row.late}</td>
                  <td className={styles.td}>{row.photo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
      </div>
    </section>
  );
}