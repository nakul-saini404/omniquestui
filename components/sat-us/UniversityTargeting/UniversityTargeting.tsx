import React, { useEffect, useRef, useState } from "react";
import styles from "./UniversityTargeting.module.css";

const colleges = [
  { score: "1580+", name: "MIT",                  tier: "Engineering · Cambridge, MA"  },
  { score: "1570+", name: "Harvard University",   tier: "Ivy League · Cambridge, MA"   },
  { score: "1570+", name: "Stanford University",  tier: "Stanford, CA"                 },
  { score: "1560+", name: "Yale University",      tier: "Ivy League · New Haven, CT"   },
  { score: "1545+", name: "Princeton University", tier: "Ivy League · Princeton, NJ"   },
  { score: "1540+", name: "Columbia University",  tier: "Ivy League · New York, NY"    },
  { score: "1510+", name: "UCLA",                 tier: "UC System · Los Angeles, CA"  },
  { score: "1510+", name: "UC Berkeley",          tier: "UC System · Berkeley, CA"     },
  { score: "1500+", name: "NYU",                  tier: "New York University, NY"      },
  { score: "1490+", name: "UT Austin",            tier: "University of Texas"          },
  { score: "1460+", name: "Purdue University",    tier: "West Lafayette, IN"           },
  { score: "1400+", name: "Penn State",           tier: "University Park, PA"          },
];

const scoreBars = [
  { tag: "1580–1600", width: "100%", desc: "99th+ · Ivy / MIT / Stanford",        highlight: true },
  { tag: "1540–1580", width: "88%",  desc: "98–99th · Top-10 US Universities"                     },
  { tag: "1490–1540", width: "73%",  desc: "96–98th · Top-25 US Universities"                     },
  { tag: "1400–1490", width: "55%",  desc: "90–96th · Top-50 US Universities"                     },
  { tag: "1300–1400", width: "38%",  desc: "82–90th · Strong State Universities"                  },
];

export default function UniversityTargeting() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.secFull} id="colleges">
      <div className={styles.inner}>

        <div className={`${styles.sectionLabel} ${styles.dk}`}>University Targeting</div>
        <h2 className={styles.sectionTitle}>
          SAT Targets by <em>US University Tier</em>
        </h2>
        <div className={styles.divider}></div>
        <p className={styles.sectionSub}>
          2025–2026 admissions data: middle 50% of admitted students. Your target
          score should match the 75th percentile of your dream school.
        </p>

        {/* College cards grid */}
        <div className={styles.collegeGrid}>
          {colleges.map((c) => (
            <div key={c.name} className={styles.collegeCard}>
              <div className={styles.scoreReq}>{c.score}</div>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.tier}>{c.tier}</div>
            </div>
          ))}
        </div>

        {/* Score → Percentile bars */}
        <div style={{ marginTop: "2.5rem" }} ref={barsRef}>
          <h3 className={styles.barHeading}>Score → Percentile Reference</h3>

          {scoreBars.map((b, i) => (
            <div key={b.tag} className={styles.scoreRow}>
              <div className={styles.scoreTag}>{b.tag}</div>
              <div className={styles.scoreBarBg}>
                <div
                  className={styles.scoreBarFill}
                  style={{
                    width: animate ? b.width : "0%",
                    transitionDelay: `${i * 0.12}s`,
                  }}
                ></div>
              </div>
              <div
                className={styles.scoreDesc}
                style={b.highlight ? { color: "var(--navy)", fontWeight: 700 } : undefined}
              >
                {b.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}