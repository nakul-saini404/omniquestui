// components/sat_city/CityLongTermProgrammes/CityLongTermProgrammes.tsx
// City-aware version of LongTermProgrammes.
// Only the subText references the city name — all URLs are shared (no slug in them).

import type { SATCityData } from "@/constants/satCities";
import styles from "./CityLongTermProgrammes.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  data: SATCityData;
}

interface Programme {
  name: string;
  suitableFor: string;
  coverage: string;
  href: string;
  actionLabel: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────
// URLs are shared across cities — no slug injection needed here.

const PROGRAMMES: Programme[] = [
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
    href: "/contact-us",
    actionLabel: "Enquire →",
  },
  {
    name: "1-Year Programme",
    suitableFor: "Grade 12 students",
    coverage: "Digital SAT, AP, TOEFL/IELTS — intensive final preparation",
    href: "/contact-us",
    actionLabel: "Enquire →",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CityLongTermProgrammes({ data }: Props) {
  const { city } = data;

  return (
    <section className={styles.section}>
      <div className="container" style={{maxWidth:"1200px"}}>
        {/* ── Label ── */}
        <p className={styles.sectionLabel}>Long-term Programmes</p>

        {/* ── Heading — static, no city name needed ── */}
        <h2 className={styles.heading}>
          Integrated <em>Multi-Year</em> SAT Programmes
        </h2>

        {/* ── Subtext — city-aware ── */}
        <p className={styles.subText}>
          Start early for the best advantage. EduQuest&apos;s integrated
          programs cover PSAT, SAT, AP, TOEFL/IELTS, Olympiads, and university
          admissions counselling for{" "}
          <strong>{city}</strong> students.
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
              {PROGRAMMES.map((prog) => (
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

        {/* ── Mobile cards ── */}
        <div className={styles.mobileCards}>
          {PROGRAMMES.map((prog) => (
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

        {/* ── Footnote ── */}
        <p className={styles.footnote}>
          For integrated multi-year programmes (Grades 8–12),{" "}
          <a
            href="/contact-us"
            className={styles.footnoteLink}
          >
            contact us
          </a>{" "}
          for customised fee structures.
        </p>
      </div>
    </section>
  );
}