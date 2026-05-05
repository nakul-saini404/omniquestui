"use client"
import { useState } from "react";
import styles from "./OurAchievers.module.css";

/* ─── Types ─────────────────────────────────────────────────── */

interface Score {
  subject: string;
  grade: number;
}

interface Achiever {
  name: string;
  initials: string;
  year: string;
  photoUrl: string;
  scores: Score[];
}

/* ─── Data ──────────────────────────────────────────────────── */

const ACHIEVERS: Achiever[] = [
  {
    name: "Vedant",
    initials: "V",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-21.41.32-pbxrm2z48h5jpmqbos2n0leaphv3hwd65bln3reemw.jpeg",
    scores: [
      { subject: "Calculus BC", grade: 5 },
      { subject: "Chemistry", grade: 5 },
      { subject: "Physics C", grade: 5 },
      { subject: "Psychology", grade: 5 },
    ],
  },
  {
    name: "Akshay Nair",
    initials: "AN",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.56-1-pbxsvxjpljx20w4ryljin0vpu3vmyedts969tnf34o.jpeg",
    scores: [
      { subject: "Human Geography", grade: 5 },
      { subject: "English Literature", grade: 5 },
      { subject: "Biology", grade: 5 },
      { subject: "Computer Science A", grade: 5 },
    ],
  },
  {
    name: "Nitin Parashar",
    initials: "NP",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.56-pbxsw52f487clrtuqosj6yzel6uknz7ohae5nv3xqw.jpeg",
    scores: [
      { subject: "Psychology", grade: 5 },
      { subject: "Calculus BC", grade: 5 },
      { subject: "Physics C", grade: 5 },
      { subject: "Chemistry", grade: 5 },
    ],
  },
  {
    name: "Aryan Sharma",
    initials: "AS",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.56-2-pbxsvrwogjpc38cyvj3r82ay9snfo7rfrh9cxzng60.jpeg",
    scores: [
      { subject: "Microeconomics", grade: 5 },
      { subject: "Macroeconomics", grade: 5 },
      { subject: "Human Geography", grade: 5 },
      { subject: "English Literature", grade: 4 },
    ],
  },
  {
    name: "Prisha Singhal",
    initials: "PS",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-21.41.30-1-pbxsqqhttiszuhohauorcu2zmfhlemr8qjcnbl4fiw.jpeg",
    scores: [
      { subject: "Calculus BC", grade: 5 },
      { subject: "English Literature", grade: 4 },
    ],
  },
  {
    name: "Rohan Bhasin",
    initials: "RB",
    year: "AP 2022",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/Rohan-bhasin-1-pe410ajzx9zn3vi1utf9q1k9w8zcnfe2ygdbx1qvtk.jpg",
    scores: [
      { subject: "Calculus BC", grade: 5 },
      { subject: "Computer Science", grade: 4 },
      { subject: "Statistics", grade: 4 },
      { subject: "Microeconomics", grade: 4 },
    ],
  },
  {
    name: "Rishaant Jain",
    initials: "RJ",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.57-pbxsvlbt4pgbtymixy9d8lyq43jv6c1bekoyl1x7dk.jpeg",
    scores: [
      { subject: "Calculus BC", grade: 5 },
      { subject: "Physics C", grade: 5 },
    ],
  },
  {
    name: "Alicya",
    initials: "AL",
    year: "AP 2021",
    photoUrl:
      "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-21.41.33-pbxssflc5r4mt57qe33icwny8h4gayhsmxr7ikluag.jpeg",
    scores: [
      { subject: "Calculus AB", grade: 5 },
      { subject: "Microeconomics", grade: 5 },
      { subject: "Macroeconomics", grade: 5 },
    ],
  },
];

/* ─── Sub-components ─────────────────────────────────────────── */

/** Photo with automatic fallback to initials placeholder on error */
function AchieverPhoto({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <div className={styles.photoPlaceholder} aria-label={alt}>
        {initials}
      </div>
    );
  }

  return (
    <img
      className={styles.photo}
      src={src}
      alt={alt}
      onError={() => setImgFailed(true)}
    />
  );
}

/** Single achiever card */
function AchieverCard({ achiever }: { achiever: Achiever }) {
  return (
    <div className={styles.card}>
      {/* Card header: photo + name + year */}
      <div className={styles.cardHeader}>
        <AchieverPhoto
          src={achiever.photoUrl}
          alt={achiever.name}
          initials={achiever.initials}
        />
        <div className={styles.info}>
          <div className={styles.name}>{achiever.name}</div>
          <div className={styles.year}>{achiever.year}</div>
        </div>
      </div>

      {/* Score rows */}
      <div className={styles.scores}>
        {achiever.scores.map((score) => (
          <div key={score.subject} className={styles.scoreRow}>
            <span className={styles.subject}>{score.subject}</span>
            <span
              className={`${styles.grade} ${
                score.grade === 5 ? styles.perfect : ""
              }`}
            >
              {score.grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */

export default function OurAchievers() {
  return (
    <section
      className={styles.results}
      aria-labelledby="results-heading"
    >
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span>Our Achievers</span>
          </div>

          <h2 id="results-heading" className={styles.heading}>
            Real Students.{" "}
            <span className={styles.highlight}>Real 5/5 Scores.</span>
          </h2>

          <p className={styles.subheading}>
            Verified AP results from EduQuest students — India, USA, UAE &amp;
            beyond.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.grid}>
          {ACHIEVERS.map((achiever) => (
            <AchieverCard key={achiever.name} achiever={achiever} />
          ))}
        </div>

      </div>
    </section>
  );
}