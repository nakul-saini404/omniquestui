"use client";

import styles from "./LongTermProgrammes.module.css";

interface Programme {
  name: string;
  suitableFor: string;
  coverage: string;
  href: string;
  actionLabel: string;
}

const programmes: Programme[] = [
  {
    name: "5-Year Programme",
    suitableFor: "Grade 8 students",
    coverage: "PSAT, SAT, AP, TOEFL/IELTS, Board Exams, Olympiads & NTSE",
    href: "https://eduquest.org.in/five-year-sat-integrated-course-8th-12th/",
    actionLabel: "Learn More →",
  },
  {
    name: "4-Year Programme",
    suitableFor: "Grade 9 students",
    coverage: "PSAT, SAT, AP, TOEFL/IELTS, Board Exams, Olympiads & NTSE",
    href: "https://eduquest.org.in/four-year-sat-integrated-course-9th-12th/",
    actionLabel: "Learn More →",
  },
  {
    name: "3-Year Programme",
    suitableFor: "Grade 10 students",
    coverage: "PSAT, SAT, AP, TOEFL/IELTS, Olympiads, NTSE & Board Guidance",
    href: "https://eduquest.org.in/three-year-sat-integrated-course-10th-12th/",
    actionLabel: "Learn More →",
  },
  {
    name: "2-Year Programme",
    suitableFor: "Grade 11 students",
    coverage: "SAT/Digital SAT, AP, TOEFL/IELTS, Olympiads & NTSE",
    href: "https://eduquest.org.in/contact-us/",
    actionLabel: "Enquire →",
  },
  {
    name: "1-Year Programme",
    suitableFor: "Grade 12 students",
    coverage: "Digital SAT, AP, TOEFL/IELTS — intensive final preparation",
    href: "https://eduquest.org.in/contact-us/",
    actionLabel: "Enquire →",
  },
];

export default function LongTermProgrammes() {
  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Long-term Programmes</p>

      <h2 className={styles.heading}>
        Integrated <em>Multi-Year</em> SAT Programmes
      </h2>

      <p className={styles.subText}>
        Start early for the best advantage. EduQuest&apos;s integrated programs
        cover PSAT, SAT, AP, TOEFL/IELTS, Olympiads, and university admissions
        counselling for Jaipur students.
      </p>

      {/* ── Desktop table ── */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Programme</th>
              <th>Suitable For</th>
              <th>Coverage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {programmes.map((prog) => (
              <tr key={prog.name}>
                <td>
                  <strong>{prog.name}</strong>
                </td>
                <td>{prog.suitableFor}</td>
                <td>{prog.coverage}</td>
                <td>
                  <a
                    href={prog.href}
                    className={styles.actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {prog.actionLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile cards (shown below 640px) ── */}
      <div className={styles.mobileCards}>
        {programmes.map((prog) => (
          <div key={prog.name} className={styles.mobileCard}>
            <div className={styles.mobileCardHeader}>
              <span className={styles.mobileCardName}>{prog.name}</span>
              <span className={styles.mobileCardGrade}>{prog.suitableFor}</span>
            </div>
            <p className={styles.mobileCardCoverage}>{prog.coverage}</p>
            <a
              href={prog.href}
              className={styles.actionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {prog.actionLabel}
            </a>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        For integrated multi-year programmes (Grades 8–12),{" "}
        <a href="https://eduquest.org.in/contact-us/" className={styles.footnoteLink}>
          contact us
        </a>{" "}
        for customised fee structures.
      </p>
    </section>
  );
}