"use client";
// components/ucat/UCATUniversitiesStrip/UCATUniversitiesStrip.tsx
// Marquee strip: "UCAT accepted at top universities in …" with looping pills

import styles from "./UCATUniversitiesStrip.module.css";

const UNIVERSITIES = [
  { flag: "", name: "University of Oxford" },
  { flag: "", name: "King's College London" },
  { flag: "", name: "University of Edinburgh" },
  { flag: "", name: "University of Cambridge" },
  { flag: "", name: "UCL" },
  { flag: "", name: "Imperial College London" },
  { flag: "", name: "Monash University" },
  { flag: "", name: "UNSW Sydney" },
  { flag: "", name: "University of Queensland" },
  { flag: "", name: "University of Melbourne" },
  { flag: "", name: "University of Auckland" },
  { flag: "", name: "University of Otago" },
];

export default function UCATUniversitiesStrip() {
  // Duplicate the list so the marquee loops seamlessly
  const pills = [...UNIVERSITIES, ...UNIVERSITIES];

  return (
    <div className={styles.strip}>
      <div className={styles.inner}>

        <p className={styles.label}>UCAT accepted at top universities in</p>

        <div className={styles.marqueeWrapper} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {pills.map((uni, i) => (
              <span key={i} className={styles.pill}>
                <span className={styles.flag}>{uni.flag}</span>
                {uni.name}
              </span>
            ))}
          </div>
        </div>

        {/* Static accessible list hidden from view but readable by screen readers */}
        <ul className={styles.srOnly}>
          {UNIVERSITIES.map((uni) => (
            <li key={uni.name}>{uni.flag} {uni.name}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}