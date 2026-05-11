'use client';

import { useEffect, useRef } from 'react';
import styles from './ISAvsDASA.module.css';

interface ComparisonRow {
  aspect: string;
  dasa: string;
  isa: string;
}

const rows: ComparisonRow[] = [
  {
    aspect: 'Scheme Name',
    dasa: 'DASA — Direct Admission of Students Abroad',
    isa: 'ISA — International Student Admission',
  },
  {
    aspect: 'Institutes Covered',
    dasa: 'IIIT Hyderabad (standalone)',
    isa: 'BITS Pilani — Pilani, Goa, Hyderabad campuses',
  },
  {
    aspect: 'Eligibility',
    dasa: 'NRI, OCI, PIO, Foreign Nationals, CIWG',
    isa: 'NRI, OCI, PIO, Foreign Nationals, Children of Gulf workers',
  },
  {
    aspect: 'Exam Accepted',
    dasa: 'SAT (Math + ERW, min 1070/1600)',
    isa: 'SAT (Math + ERW, replaces BITSAT completely)',
  },
  {
    aspect: 'Super-Scoring',
    dasa: '✅ Accepted across multiple attempts',
    isa: '✅ Accepted across multiple attempts',
  },
  {
    aspect: 'Application Process',
    dasa: 'Centralized DASA portal (CB code 6997)',
    isa: 'Direct application to BITS Pilani ISA portal',
  },
  {
    aspect: 'CIWG Fee Benefit',
    dasa: '✅ Domestic-level tuition for CIWG students',
    isa: 'Separate international fee structure applies',
  },
  {
    aspect: 'Score Deadline',
    dasa: '31 May 2025 (scores must be received)',
    isa: 'As per BITS Pilani admissions calendar',
  },
  {
    aspect: 'Special Note',
    dasa: 'One of the few IIITs still accepting SAT under DASA',
    isa: 'Complete SAT replaces BITSAT for international students',
  },
];

export default function ISAvsDASA() {
  const headRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headRef.current) observer.observe(headRef.current);
    if (tableRef.current) observer.observe(tableRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.comparison} id="comparison" aria-labelledby="comp-heading">
      <div className={styles.container}>

        {/* Section Head */}
        <div
          className={`${styles.sectionHead} ${styles.center} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>ISA vs DASA / CIWG</div>
          <h2 id="comp-heading">What's the Difference? A Side-by-Side Comparison</h2>
          <p>
            Both routes accept SAT — but the institutes, processes, and specific eligibility
            criteria differ in important ways.
          </p>
        </div>

        {/* Table */}
        <div
          className={`${styles.tableWrap} ${styles.fadeUp}`}
          ref={tableRef}
        >
          <table
            className={styles.compTable}
            role="table"
            aria-label="ISA vs DASA comparison table"
          >
            <thead>
              <tr>
                <th scope="col">Aspect</th>
                <th scope="col">
                  <span className={`${styles.tag} ${styles.tagDasa}`}>
                    IIIT Hyderabad (DASA)
                  </span>
                </th>
                <th scope="col">
                  <span className={`${styles.tag} ${styles.tagIsa}`}>
                    BITS Pilani (ISA)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.aspect}>
                  <td>{row.aspect}</td>
                  <td>{row.dasa}</td>
                  <td>{row.isa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}