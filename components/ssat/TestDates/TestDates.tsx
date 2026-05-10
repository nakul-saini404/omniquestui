"use client";

import styles from "./TestDates.module.css";

/* ── Types ──────────────────────────────────── */
type BadgeVariant = "center" | "home";

interface StandardDate {
  month: string;
  badge: string;
  badgeVariant: BadgeVariant;
}

interface HomeDate {
  date: string;
  sub: string;
}

interface TimingRow {
  key: string;
  val: string;
}

/* ── Static data ─────────────────────────────── */
const standardDates: StandardDate[] = [
  { month: "October 2025",  badge: "Test Centre", badgeVariant: "center" },
  { month: "November 2025", badge: "Test Centre", badgeVariant: "center" },
  { month: "December 2025", badge: "Test Centre", badgeVariant: "center" },
  { month: "January 2026",  badge: "Test Centre", badgeVariant: "center" },
  { month: "February 2026", badge: "Test Centre", badgeVariant: "center" },
  { month: "March 2026",    badge: "Test Centre", badgeVariant: "center" },
  { month: "April 2026",    badge: "Test Centre", badgeVariant: "center" },
  { month: "June 2026",     badge: "Test Centre", badgeVariant: "center" },
];

const homeDates: HomeDate[] = [
  { date: "9th July 2025",  sub: "Wednesday · Secure online platform" },
  { date: "10th July 2025", sub: "Thursday · Secure online platform" },
  { date: "11th July 2025", sub: "Friday · Secure online platform" },
];

const timingRows: TimingRow[] = [
  { key: "Weekend Testing Hours",    val: "9:00 AM – 3:00 PM EST" },
  { key: "Weekday Testing Hours",    val: "9:00 AM – 7:00 PM EST" },
  { key: "Standard Exam Start",      val: "9:00 AM (confirm on ticket)" },
  { key: "Flex Test Notice Required", val: "At least 4 weeks prior" },
  { key: "Rescheduling Fee",         val: "~$35 change fee" },
];

/* ── Helpers ─────────────────────────────────── */
function badgeClass(variant: BadgeVariant): string {
  return variant === "home"
    ? `${styles.dateBadge} ${styles.badgeHome}`
    : `${styles.dateBadge} ${styles.badgeCenter}`;
}

/* ── Component ───────────────────────────────── */
export default function TestDates() {
  return (
    <section className={styles.datesSection} id="dates">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Test Dates 2025–26</span>
          <h2 className={styles.sectionTitle}>
            SSAT Test Dates &amp; <em>Registration</em>
          </h2>
          <p className={styles.sectionSub}>
            The SSAT is offered approximately 8 times per year at standard test
            centres, plus flexible Home Testing options. Plan your registration
            at least 4 weeks in advance.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className={styles.datesGrid}>
          {/* ── LEFT: Standard test dates ── */}
          <div>
            <div className={styles.dateTable}>
              <div className={styles.dateTableHeader}>
                📅 Standard Test Dates 2025–26
              </div>

              {standardDates.map((item) => (
                <div key={item.month} className={styles.dateRow}>
                  <div className={styles.dateDot} aria-hidden="true" />
                  <div className={styles.dateName}>{item.month}</div>
                  <span className={badgeClass(item.badgeVariant)}>
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Registration tip */}
            <div className={styles.tipBox}>
              <span className={styles.tipBoxLabel}>💡 Registration tip: </span>
              Standard test dates are on Saturdays. Register via your SSAT
              account at least 3–4 weeks before the exam date to secure your
              preferred test centre. Rush registration (within 3 weeks) incurs
              additional fees with no refund.
            </div>
          </div>

          {/* ── RIGHT: Home testing + timing ── */}
          <div>
            {/* Home testing dates */}
            <div className={styles.homeDates}>
              <div className={styles.homeDatesHeader}>
                🏠 SSAT Home Testing Dates (Available)
              </div>

              {homeDates.map((item) => (
                <div key={item.date} className={styles.homeDateItem}>
                  <span className={styles.homeDateCal} aria-hidden="true">
                    📆
                  </span>
                  <div>
                    <div className={styles.homeDateText}>{item.date}</div>
                    <div className={styles.homeDateSub}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timing info */}
            <div className={styles.timingInfo}>
              {timingRows.map((row) => (
                <div key={row.key} className={styles.timingRow}>
                  <span className={styles.timingKey}>{row.key}</span>
                  <span className={styles.timingVal}>{row.val}</span>
                </div>
              ))}
            </div>

            {/* Flex testing note */}
            <div className={styles.flexBox}>
              <span className={styles.flexBoxLabel}>📌 Flex Testing: </span>
              If standard dates don&apos;t work, a registered school or
              educational consultant (like EduQuest) can arrange Flex Tests on
              any weekday or weekend with at least 4 weeks&apos; advance notice.
              Availability may vary by region — contact us for assistance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}