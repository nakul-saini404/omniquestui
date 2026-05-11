import React from 'react';
import styles from './APExamCalendar.module.css';

type ExamFormat = 'Paper-based' | 'Digital';
type ExamStatus = 'Upcoming' | 'Open';

interface ExamRow {
  week: string;
  exam: string;
  date: string;
  format: ExamFormat;
  status: ExamStatus;
}

const EXAM_DATA: ExamRow[] = [
  { week: 'Week 1', exam: 'AP Physics C: Mechanics',          date: 'May 4, 2026',  format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 1', exam: 'AP Calculus AB',                   date: 'May 5, 2026',  format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 1', exam: 'AP Calculus BC',                   date: 'May 5, 2026',  format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 1', exam: 'AP English Language & Composition',date: 'May 6, 2026',  format: 'Digital',      status: 'Upcoming' },
  { week: 'Week 1', exam: 'AP Chemistry',                     date: 'May 7, 2026',  format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 1', exam: 'AP Statistics',                    date: 'May 8, 2026',  format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP Biology',                       date: 'May 11, 2026', format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP Physics C: E&M',                date: 'May 11, 2026', format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP World History: Modern',         date: 'May 12, 2026', format: 'Digital',      status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP English Literature & Composition', date: 'May 13, 2026', format: 'Digital',  status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP Computer Science A',            date: 'May 14, 2026', format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP Psychology',                    date: 'May 14, 2026', format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP Microeconomics',                date: 'May 15, 2026', format: 'Paper-based', status: 'Upcoming' },
  { week: 'Week 2', exam: 'AP Macroeconomics',                date: 'May 15, 2026', format: 'Paper-based', status: 'Upcoming' },
];

const StatusBadge: React.FC<{ status: ExamStatus }> = ({ status }) => (
  <span
    className={`${styles.status} ${
      status === 'Open' ? styles.statusOpen : styles.statusUpcoming
    }`}
  >
    {status}
  </span>
);

const FormatBadge: React.FC<{ format: ExamFormat }> = ({ format }) => (
  <span
    className={`${styles.format} ${
      format === 'Digital' ? styles.formatDigital : styles.formatPaper
    }`}
  >
    {format === 'Digital' ? '💻' : '📄'} {format}
  </span>
);

const APExamCalendar: React.FC = () => (
  <section className={styles.section} aria-labelledby="dates-heading">
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.sectionLabel}>
        <span>AP Exam Calendar</span>
      </div>
      <h2 id="dates-heading" className={styles.title}>
        AP Exam Dates <span className={styles.highlight}>2026</span>
      </h2>
      <p className={styles.subtitle}>
        College Board conducts AP exams in May each year. Registration through
        your school opens in the fall. Plan your preparation 6–12 months in advance.
      </p>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Week</th>
              <th>AP Exam</th>
              <th>Date (2026)</th>
              <th>Format</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {EXAM_DATA.map((row, i) => (
              <tr key={i} className={styles.row}>
                <td className={styles.weekCell}>{row.week}</td>
                <td className={styles.examCell}><strong>{row.exam}</strong></td>
                <td className={styles.dateCell}>{row.date}</td>
                <td><FormatBadge format={row.format} /></td>
                <td><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      <p className={styles.footnote}>
        * Dates are indicative. Always verify on the official College Board
        website:{' '}
        <a
          href="https://collegeboard.org"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footnoteLink}
        >
          collegeboard.org
        </a>
        . Registration through your school opens in September–November each year.
      </p>
    </div>
  </section>
);

export default APExamCalendar;