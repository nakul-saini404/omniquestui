'use client';

import { useEffect, useRef } from 'react';
import styles from './KeyDetails.module.css';

interface DetailRow {
  key: string;
  value: string;
  isHtml?: boolean;
}

interface InstitutePanel {
  name: string;
  scheme: string;
  details: DetailRow[];
  linkHref: string;
  linkLabel: string;
  transitionDelay: string;
}

const institutes: InstitutePanel[] = [
  {
    name: 'IIIT Hyderabad',
    scheme: 'DASA — Direct Admission of Students Abroad',
    transitionDelay: '0.05s',
    linkHref: 'https://ugadmissions.iiit.ac.in/dasa/',
    linkLabel: 'Official DASA Portal ↗',
    details: [
      { key: 'Minimum Score', value: '<strong>1070 / 1600</strong> (Math + ERW combined)', isHtml: true },
      { key: 'Super-scoring', value: '✅ Accepted — best Math + best ERW across attempts' },
      { key: 'Essay Required', value: '❌ Not required' },
      { key: 'Score Deadline', value: '<strong>31 May 2025</strong> — scores must be received by IIIT-H', isHtml: true },
      { key: 'CB Code', value: '<strong>6997</strong> — use this when sending official scores', isHtml: true },
      { key: 'Top Programmes', value: 'CSE, ECE, Computational Linguistics, CND' },
      { key: 'CIWG Fees', value: '✅ Domestic fee structure applies' },
    ],
  },
  {
    name: 'BITS Pilani',
    scheme: 'ISA — International Student Admission',
    transitionDelay: '0.12s',
    linkHref: 'https://www.bits-pilani.ac.in/admissions/',
    linkLabel: 'BITS Pilani Admissions ↗',
    details: [
      { key: 'Exam Accepted', value: '<strong>SAT only</strong> — BITSAT not required for ISA students', isHtml: true },
      { key: 'Scoring', value: 'Math + ERW (out of 1600). Super-scoring allowed.' },
      { key: 'Campuses', value: '<strong>Pilani · Goa · Hyderabad</strong> — all three campuses', isHtml: true },
      { key: 'Application', value: 'Direct application to BITS Pilani ISA portal' },
      { key: 'Eligibility', value: 'Foreign Nationals, PIO/OCI, CIWG, NRI' },
      { key: 'Top Programmes', value: 'CS, EEE, Mechanical, Chemical, Pharmacy, MBA' },
      { key: 'Essay Required', value: '❌ Not required' },
    ],
  },
];

export default function KeyDetails() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headRef = useRef<HTMLDivElement | null>(null);

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

    panelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    if (headRef.current) observer.observe(headRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.institutes} id="institutes" aria-labelledby="inst-heading">
      <div className={styles.container}>
        <div className={`${styles.sectionHead} ${styles.center} ${styles.fadeUp}`} ref={headRef}>
          <div className={styles.sectionLabel}>Key Details</div>
          <h2 id="inst-heading">IIIT Hyderabad &amp; BITS Pilani — Admission Specifics</h2>
          <p>Everything you need to know before you send your scores or submit your application.</p>
        </div>

        <div className={styles.instGrid}>
          {institutes.map((inst, i) => (
            <div
              key={inst.name}
              className={styles.instPanel}
              style={{ transitionDelay: inst.transitionDelay }}
              ref={(el) => { panelRefs.current[i] = el; }}
            >
              <div className={styles.instHead}>
                <h3>{inst.name}</h3>
                <div className={styles.scheme}>{inst.scheme}</div>
              </div>
              <div className={styles.instBody}>
                <div className={styles.instDetailList}>
                  {inst.details.map((row) => (
                    <div className={styles.instDetailRow} key={row.key}>
                      <div className={styles.instDetailKey}>{row.key}</div>
                      {row.isHtml ? (
                        <div
                          className={styles.instDetailVal}
                          dangerouslySetInnerHTML={{ __html: row.value }}
                        />
                      ) : (
                        <div className={styles.instDetailVal}>{row.value}</div>
                      )}
                    </div>
                  ))}
                </div>
                <a
                  href={inst.linkHref}
                  className={styles.instLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inst.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}