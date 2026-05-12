"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LSATDates.module.css";

/* ── Types ── */
interface DateRow {
  administration: string;
  primaryDates: string[];
  writingOpens: string;
  regDeadline: string;
  schedulingOpens: string;
  scoreRelease: string;
  registerUrl: string;
  detailUrl: string;
}

/* ── Data ── */
const usCanadaDates: DateRow[] = [
  {
    administration: "April 2026",
    primaryDates: ["Apr 9, 2026", "Apr 10, 2026", "Apr 11, 2026"],
    writingOpens: "Apr 1, 2026",
    regDeadline: "Feb 26, 2026",
    schedulingOpens: "Mar 24, 2026",
    scoreRelease: "Apr 29, 2026",
    registerUrl: "https://os.lsac.org/Release/startup.aspx?Static_To_LSAT_Registration=",
    detailUrl: "https://www.lsac.org/lsat/lsat-dates-deadlines/april-lsat",
  },
  {
    administration: "June 2026",
    primaryDates: ["Jun 3, 2026", "Jun 4, 2026", "Jun 5, 2026", "Jun 6, 2026"],
    writingOpens: "May 26, 2026",
    regDeadline: "Apr 21, 2026",
    schedulingOpens: "May 19, 2026",
    scoreRelease: "Jun 24, 2026",
    registerUrl: "https://os.lsac.org/Release/startup.aspx?Static_To_LSAT_Registration=",
    detailUrl: "https://www.lsac.org/lsat/lsat-dates-deadlines/june-lsat",
  },
];

const internationalDates: DateRow[] = [
  {
    administration: "April 2026 (International)",
    primaryDates: ["Apr 10, 2026"],
    writingOpens: "Apr 1, 2026",
    regDeadline: "Feb 26, 2026",
    schedulingOpens: "Mar 24, 2026",
    scoreRelease: "Apr 29, 2026",
    registerUrl: "https://os.lsac.org/Release/startup.aspx?Static_To_LSAT_Registration=",
    detailUrl: "https://www.lsac.org/lsat/lsat-dates-deadlines/april-lsat-international",
  },
  {
    administration: "June 2026 (International)",
    primaryDates: ["Jun 5, 2026"],
    writingOpens: "May 26, 2026",
    regDeadline: "Apr 21, 2026",
    schedulingOpens: "May 19, 2026",
    scoreRelease: "Jun 24, 2026",
    registerUrl: "https://os.lsac.org/Release/startup.aspx?Static_To_LSAT_Registration=",
    detailUrl: "https://www.lsac.org/lsat/lsat-dates-deadlines/june-lsat-international",
  },
];

const columns = [
  { key: "administration",  label: "Administration" },
  { key: "primaryDates",    label: "Primary Test Dates" },
  { key: "writingOpens",    label: "Writing Opens" },
  { key: "regDeadline",     label: "Reg. Deadline" },
  { key: "schedulingOpens", label: "Scheduling Opens" },
  { key: "scoreRelease",    label: "Score Release" },
];

/* ── Component ── */
export default function LSATDates() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  // ✅ Single ref on the container — observe ALL .reveal children inside it
  const containerRef = useRef<HTMLDivElement>(null);

  const rows = activeTab === 0 ? usCanadaDates : internationalDates;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    // ✅ Observe every .reveal element inside the container
    container.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.section} id="lsat-dates">
      {/* ✅ ref moved here — wraps everything */}
      <div className={styles.container} ref={containerRef}>

        {/* ── Header ── */}
        <div className={`${styles.reveal} ${styles.headerWrap}`}>
          <div className={styles.secLabel}>2025–2026 Testing Year</div>
          <h2 className={styles.heading}>
            Upcoming <em>LSAT Dates</em> &amp; Deadlines
          </h2>
          <p className={styles.sub}>
            Test dates, registration deadlines, and score release dates. All dates in Eastern Time (ET). Registration deadlines are by 11:59 p.m. ET.
          </p>
        </div>

        {/* ── Notice banner ── */}
        <div className={`${styles.notice} ${styles.reveal}`}>
          <span className={styles.noticeIcon}>⚠️</span>
          <p>
            Starting with the <strong>August 2026 LSAT</strong>, testing moves toward in-center for almost all U.S. and international test takers, with limited exceptions for certain medical accommodations.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className={`${styles.tabsWrap} ${styles.reveal}`}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 0 ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(0)}
            >
              🇺🇸 U.S. / Canada
            </button>
            <button
              className={`${styles.tab} ${activeTab === 1 ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(1)}
            >
              🌐 International
            </button>
          </div>
        </div>

        {/* ── Table ── */}
        <div className={`${styles.tblWrap} ${styles.reveal}`}>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                  <th>Register</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className={styles.tdAdmin}>
                      <a href={row.detailUrl} target="_blank" rel="noreferrer" className={styles.adminLink}>
                        {row.administration}
                      </a>
                    </td>
                    <td>
                      <div className={styles.dateList}>
                        {row.primaryDates.map((d) => (
                          <span key={d} className={styles.dateChip}>{d}</span>
                        ))}
                      </div>
                    </td>
                    <td>{row.writingOpens}</td>
                    <td>
                      <span className={styles.deadlineBadge}>{row.regDeadline}</span>
                    </td>
                    <td>{row.schedulingOpens}</td>
                    <td>
                      <span className={styles.scoreBadge}>{row.scoreRelease}</span>
                    </td>
                    <td>
                      <a href={row.registerUrl} target="_blank" rel="noreferrer" className={styles.registerBtn}>
                        Register →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Footnotes ── */}
        <div className={`${styles.footnotes} ${styles.reveal}`}>
          <p><span className={styles.fnMark}>*</span> The registration deadline is also the last day to request disability-related testing accommodations, assistive technology, a free Test Date Change, and/or a full refund. Fees apply for changes after the deadline.</p>
          <p><span className={styles.fnMark}>**</span> Registered test takers will receive an email when scheduling becomes available.</p>
        </div>

        {/* ── CTA ── */}
        <div className={`${styles.cta} ${styles.reveal}`}>
          <p>Ready to take the next step toward law school?</p>
          <a
            href="https://os.lsac.org/Release/startup.aspx?Static_To_LSAT_Registration="
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            Register for the LSAT →
          </a>
        </div>

      </div>
    </section>
  );
}