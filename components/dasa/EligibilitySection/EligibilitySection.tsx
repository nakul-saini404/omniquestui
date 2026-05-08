"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./EligibilitySection.module.css";

/* ── DATA ────────────────────────────────────────────── */

interface EligCard {
  icon: string;
  title: string;
  body: string;
  delay: number; // ms
}

interface EligTag {
  label: string;
  gold: boolean;
}

const tags: EligTag[] = [
  { label: "NRI (Non-Resident Indian)", gold: true },
  { label: "OCI (Overseas Citizen of India)", gold: true },
  { label: "PIO (Person of Indian Origin)", gold: true },
  { label: "CIWG (Children of Indian Workers in Gulf)", gold: true },
  { label: "Foreign Nationals", gold: false },
  { label: "Children of Gulf Workers", gold: false },
];

const cards: EligCard[] = [
  {
    icon: "🛂",
    title: "NRI / OCI / PIO Status",
    body: "Students holding an Indian passport or OCI/PIO card who have been residing abroad qualify directly under both DASA and ISA schemes.",
    delay: 50,
  },
  {
    icon: "🌙",
    title: "CIWG — Gulf Workers' Children",
    body: "Children of Indian workers employed in Gulf Cooperation Council (GCC) countries. Eligible even if the student studied Class 11 & 12 in India — parent's Gulf employment is what qualifies you.",
    delay: 150,
  },
  {
    icon: "🌐",
    title: "Foreign Nationals",
    body: "Students with foreign citizenship may also apply under both DASA (IIIT Hyderabad) and ISA (BITS Pilani) schemes using SAT scores as the primary criterion.",
    delay: 250,
  },
];

/* ── HOOK — observe a single element ─────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── ANIMATED CARD ───────────────────────────────────── */
function EligCard({ icon, title, body, delay }: EligCard) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.eligCard} ${inView ? styles.eligCardVisible : ""}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {/* animated gold left-border fill */}
      <span className={styles.eligCardAccent} aria-hidden="true" />

      <div className={styles.eligCardTop}>
        <span className={styles.eligCardIcon}>{icon}</span>
        <span className={styles.eligCardTitle}>{title}</span>
      </div>
      <p className={styles.eligCardSub}>{body}</p>

      {/* shimmer layer on hover */}
      <span className={styles.eligCardShimmer} aria-hidden="true" />
    </div>
  );
}

/* ── SECTION ─────────────────────────────────────────── */
export default function EligibilitySection() {
  const { ref: headRef, inView: headVisible } = useInView(0.2);
  const { ref: tagsRef, inView: tagsVisible } = useInView(0.2);

  return (
    <section
      className={styles.eligibility}
      id="eligibility"
      aria-labelledby="elig-heading"
    >
      <div className={styles.container}>
        <div className={styles.eligGrid}>

          {/* ── LEFT — heading + tags ── */}
          <div className={styles.eligLeft}>
            <div
              ref={headRef}
              className={`${styles.sectionHead} ${headVisible ? styles.fadeUpVisible : styles.fadeUp}`}
            >
              <div className={styles.sectionLabel}>Who Can Apply</div>
              <h2 id="elig-heading" className={styles.sectionH2}>
                DASA &amp; CIWG Eligibility — Are You Qualified?
              </h2>
              <p className={styles.sectionP}>
                Both DASA and ISA routes are open to students with international
                or NRI status. If you or your parent holds any of the following
                designations, SAT is your path into India's top tech colleges —
                without JEE.
              </p>
            </div>

            <div
              ref={tagsRef}
              className={`${styles.eligTags} ${tagsVisible ? styles.fadeUpVisible : styles.fadeUp}`}
              style={{ transitionDelay: tagsVisible ? "120ms" : "0ms" }}
            >
              {tags.map((t) => (
                <span
                  key={t.label}
                  className={`${styles.eligTag} ${t.gold ? styles.eligTagGold : ""}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — animated cards ── */}
          <div className={styles.eligCards}>
            {cards.map((c) => (
              <EligCard key={c.title} {...c} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}