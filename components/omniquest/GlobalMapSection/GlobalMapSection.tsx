"use client";
// components/GlobalMapSection/GlobalMapSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./GlobalMapSection.module.css";
import { MAP_LABELS } from "@/app/omniquest/data/constants";

const STATS = [
  { val: "40+",  label: "Countries" },
  { val: "200+", label: "Institutions" },
  { val: "10K+", label: "Students Placed" },
  { val: "92%",  label: "First-choice Rate" },
];

export default function GlobalMapSection() {
  return (
    <section id="global-map" aria-labelledby="map-h" className={styles.section}>
      <div className={styles.ambient} />

      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={`reveal ${styles.header}`}>
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Global Reach</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 id="map-h" className={styles.h2}>From India to</h2>
          <h2 className={styles.h2Gold}>Every Elite Institution</h2>
          <p className={styles.headerBody}>
            We place students from across India into the world&apos;s most
            competitive universities — in the USA, UK, Canada, Europe, and
            beyond.
          </p>
        </div>

        {/* ── Map card ── */}
        <div className="reveal">
          <div className={styles.mapCard}>
            <div className={styles.dotGrid} />

            {/* Desktop: absolutely-positioned pills */}
            <div className={styles.mapDesktop}>
              {MAP_LABELS.map((l) => (
                <div
                  key={l.name}
                  className={`${styles.mapPill} ${
                    l.gold ? styles.mapPillGold : styles.mapPillDefault
                  }`}
                  style={{ top: l.top, left: l.left }}
                >
                  <span
                    className={`${styles.pillDot} ${
                      l.gold ? styles.pillDotGold : styles.pillDotDefault
                    }`}
                  />
                  ✦ {l.name} {l.flag ?? ""}
                </div>
              ))}

              <div className={styles.mapCenter}>
                <h3 className={styles.mapCenterTitle}>40+ Destination Countries</h3>
                <p className={styles.mapCenterSub}>
                  Students admitted to 200+ elite institutions worldwide
                </p>
              </div>
            </div>

            {/* Mobile: flex-wrap pills */}
            <div className={styles.mapMobile}>
              <div className={styles.mapMobileHeader}>
                <h3 className={styles.mapMobileTitle}>40+ Destination Countries</h3>
                <p className={styles.mapMobileSub}>
                  Students admitted to 200+ elite institutions worldwide
                </p>
              </div>
              <div className={styles.mobilePillRow}>
                {MAP_LABELS.map((l) => (
                  <div
                    key={l.name}
                    className={`${styles.mapPill} ${
                      l.gold ? styles.mapPillGold : styles.mapPillDefault
                    }`}
                  >
                    <span
                      className={`${styles.pillDot} ${
                        l.gold ? styles.pillDotGold : styles.pillDotDefault
                      }`}
                    />
                    ✦ {l.name} {l.flag ?? ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className={`reveal ${styles.statsRow}`}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statCell}>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}