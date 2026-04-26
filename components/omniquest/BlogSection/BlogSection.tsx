"use client";
// components/BlogSection/BlogSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./BlogSection.module.css";
import { BLOGS, BLOG_COLORS } from "@/app/omniquest/data/constants";

export default function BlogSection() {
  return (
    <section id="blog" aria-labelledby="blog-h" className={styles.section}>
      <div className={styles.inner}>
        {/* ── Header row ── */}
        <div className={`reveal ${styles.headerRow}`}>
          <div>
            <div className={styles.eyebrowRow}>
              <div className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Strategic Insights</span>
            </div>
            <h2 id="blog-h" className={styles.h2}>Intelligence for</h2>
            <h2 className={styles.h2Gold}>Your Journey</h2>
          </div>

          <a
            href="https://eduquest.org.in/blog"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAll}
          >
            View All Insights →
          </a>
        </div>

        {/* ── Cards ── */}
        <div className={styles.cardGrid}>
          {BLOGS.map((b, i) => (
            <article
              key={i}
              className={`reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                className={styles.cardImage}
                style={{ background: BLOG_COLORS[i] }}
              >
                {b.emoji}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTag}>{b.tag}</div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardMeta}>{b.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}