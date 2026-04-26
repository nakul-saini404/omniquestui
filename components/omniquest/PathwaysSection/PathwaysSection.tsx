"use client";
// components/PathwaysSection/PathwaysSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./PathwaysSection.module.css";
import { PATHWAYS } from "@/app/omniquest/data/constants";

export default function PathwaysSection() {
  return (
    <section id="pathways" aria-labelledby="pathways-h" className={styles.section}>
      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={`reveal ${styles.header}`}>
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>OmniQuest Global Education System</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 id="pathways-h" className={styles.h2}>Three Divisions.</h2>
          <h2 className={styles.h2Gold}>One Integrated Strategy.</h2>
          <p className={styles.headerBody}>
            Each division operates as a specialist consulting unit. Together,
            they cover every stage of your global education and career journey.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className={styles.cardGrid}>
          {PATHWAYS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              role="link"
              tabIndex={0}
              onClick={() => window.open(p.href, "_blank", "noopener,noreferrer")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  window.open(p.href, "_blank", "noopener,noreferrer");
              }}
            >
              <div className={styles.division}>{p.division}</div>
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <ul className={styles.featureList}>
                {p.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.featureDot}>✦</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
                onClick={(e) => e.stopPropagation()}
              >
                Explore {p.shortName} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}