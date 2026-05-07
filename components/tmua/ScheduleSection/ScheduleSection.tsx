"use client";

import styles from "./ScheduleSection.module.css";

/* ── Data ─────────────────────────────────────────────────── */

interface Sitting {
  sitting: string;
  dates: string;
  audience: string;
}

interface Deadline {
  sitting: string;
  opens: string;
  closes: string;
}

const SITTINGS: Sitting[] = [
  {
    sitting: "October 2026 Sitting",
    dates: "12–16 October 2026",
    audience: "Required for most Cambridge applicants",
  },
  {
    sitting: "January 2027 Sitting",
    dates: "4–8 January 2027",
    audience: "For Imperial, LSE, UCL, Warwick, Durham, etc.",
  },
];

const DEADLINES: Deadline[] = [
  {
    sitting: "October 2026",
    opens: "20 July 2026",
    closes: "28 September 2026",
  },
  {
    sitting: "January 2027",
    opens: "26 October 2026",
    closes: "21 December 2026",
  },
];

/* ── Component ───────────────────────────────────────────── */

export default function ScheduleSection() {
  return (
    <section id="dates" className={styles.schedule}>
      <div className={styles.container}>

        <span className={styles.tag}>Schedule</span>
        <h2 className={styles.sectionTitle}>
          2026–2027 Test Dates &amp; Booking Windows
        </h2>
        <p className={styles.sectionSub}>
          Plan ahead — booking closes weeks before the test date. Register as
          early as possible to secure your preferred test centre.
        </p>

        <div className={styles.datesTables}>

          {/* Table 1 — Test Sittings */}
          <div className={styles.dtBlock}>
            <h3 className={styles.dtBlockTitle}>Test Sittings</h3>
            <table className={styles.dtTable}>
              <thead>
                <tr>
                  <th>Test Sitting</th>
                  <th>Dates</th>
                  <th>Who Should Take It</th>
                </tr>
              </thead>
              <tbody>
                {SITTINGS.map((row) => (
                  <tr key={row.sitting}>
                    <td>{row.sitting}</td>
                    <td className={styles.highlight}>{row.dates}</td>
                    <td>{row.audience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table 2 — Booking Deadlines */}
          <div className={styles.dtBlock}>
            <h3 className={styles.dtBlockTitle}>Booking Deadlines</h3>
            <table className={styles.dtTable}>
              <thead>
                <tr>
                  <th>Sitting</th>
                  <th>Booking Opens</th>
                  <th>Booking Closes</th>
                </tr>
              </thead>
              <tbody>
                {DEADLINES.map((row) => (
                  <tr key={row.sitting}>
                    <td>{row.sitting}</td>
                    <td>{row.opens}</td>
                    <td className={styles.highlight}>{row.closes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}