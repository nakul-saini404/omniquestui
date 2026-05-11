"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./UcatMythsFacts.module.css";

/* ── Data ────────────────────────────────────────────── */
const mythsAndFacts = [
  {
    id: 1,
    myth: "Without professional coaching, the UCAT can be cleared.",
    mythShort: "Self-study alone is enough to crack the UCAT.",
    fact: "Professional coaching is required to perform competitively in UCAT.",
    factExplanation:
      "UCAT is not a knowledge exam — it tests aptitude, speed, and reasoning under extreme time pressure. Professional coaching provides structured mock tests, personalised score-gap analysis, section-specific strategies, and expert mentorship that self-study simply cannot replicate. Without guidance, most students underestimate the exam's difficulty and miss critical techniques that separate average scorers from top percentiles. Given that your score is ranked globally against thousands of candidates, the difference between coached and uncoached performance is statistically significant — often 200–400 points on the 2700 scale.",
    mythIcon: "❌",
    factIcon: "✅",
  },
  {
    id: 2,
    myth: "You can prepare for UCAT in a few weeks before the exam.",
    mythShort: "Last-minute cramming works for UCAT.",
    fact: "Ideal UCAT preparation takes 3–6 months of consistent, structured practice.",
    factExplanation:
      "UCAT tests skills that take time to develop — not content you can memorise overnight. Speed, accuracy, and reasoning patterns are built through weeks of deliberate practice under timed conditions. Students who begin preparation less than 8 weeks before their exam date consistently score lower than those who start earlier. Your brain needs time to internalize UCAT's unique question formats, build mental stamina for a 2-hour high-pressure session, and course-correct through multiple mock test cycles.",
    mythIcon: "❌",
    factIcon: "✅",
  },
  {
    id: 3,
    myth: "A high academic score means you'll naturally do well in UCAT.",
    mythShort: "Good grades guarantee UCAT success.",
    fact: "Academic performance and UCAT aptitude are largely independent skills.",
    factExplanation:
      "UCAT does not test curriculum knowledge. Topping your board exams or scoring well in science subjects does not predict UCAT performance. Many high-achieving academic students struggle with UCAT's time pressure and unfamiliar question types, while students with average grades but strong analytical training perform exceptionally. The exam demands a completely different skillset — one that must be trained deliberately and specifically.",
    mythIcon: "❌",
    factIcon: "✅",
  },
  {
    id: 4,
    myth: "Situational Judgement doesn't really affect your admission chances.",
    mythShort: "SJT is just a formality — universities don't care much.",
    fact: "A low SJT band can disqualify you even with an outstanding cognitive score.",
    factExplanation:
      "Many students treat Situational Judgement as an afterthought and focus entirely on the cognitive sections. This is a costly mistake. Several universities use SJT bands as a hard filter — scoring Band 3 or Band 4 can automatically disqualify you from shortlisting, regardless of how high your cognitive score is. SJT assesses your alignment with NHS values and medical ethics, and universities consider it a direct indicator of professional suitability. Aim for Band 1 or 2, always.",
    mythIcon: "❌",
    factIcon: "✅",
  },
];

/* ── Scroll-reveal hook ──────────────────────────────── */
function useReveal() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(styles.visible), i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return refs;
}

/* ── Single card ─────────────────────────────────────── */
function MythFactCard({
  item,
  index,
  revealRef,
}: {
  item: (typeof mythsAndFacts)[0];
  index: number;
  revealRef: (el: HTMLElement | null) => void;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={styles.cardOuter}
      ref={revealRef}
    >
      {/* Card number */}
      <div className={styles.cardNum}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className={`${styles.flipper} ${flipped ? styles.flipped : ""}`}
        onClick={() => setFlipped((f) => !f)}
      >
        {/* ── MYTH FACE (front) ── */}
        <div className={styles.faceFront}>
          <div className={styles.faceInner}>
            <div className={styles.faceBadge} data-type="myth">
              <span>{item.mythIcon}</span> Myth
            </div>
            <blockquote className={styles.mythQuote}>
              &ldquo;{item.myth}&rdquo;
            </blockquote>
            <p className={styles.mythSub}>{item.mythShort}</p>
            <div className={styles.flipHint}>
              <span className={styles.flipHintDot} />
              <span className={styles.flipHintDot} />
              <span className={styles.flipHintDot} />
              Tap to reveal the fact
            </div>
          </div>
          <div className={styles.frontPattern} aria-hidden="true" />
        </div>

        {/* ── FACT FACE (back) ── */}
        <div className={styles.faceBack}>
          <div className={styles.faceInner}>
            <div className={styles.faceBadge} data-type="fact">
              <span>{item.factIcon}</span> Fact
            </div>
            <p className={styles.factStatement}>{item.fact}</p>
            <p className={styles.factExplanation}>{item.factExplanation}</p>
            <button
              className={styles.flipBack}
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
            >
              ← Back to Myth
            </button>
          </div>
          <div className={styles.backGlow} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────── */
export default function UcatMythsFacts() {
  const refs = useReveal();

  return (
    <section className={styles.section}>
      {/* Background decoration */}
      <div className={styles.bgDeco} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.tag}>Clear the Air</span>
        <h2 className={styles.title}>
          UCAT Myths <em>vs</em> Facts
        </h2>
        <p className={styles.sub}>
          Misinformation about UCAT costs students months of misdirected effort.
          Here's what's actually true — tap each card to reveal the fact.
        </p>
      </div>

      {/* Highlight strip — the key myth/fact featured */}
      <div
        className={styles.featureStrip}
        ref={(el) => { refs.current[0] = el; }}
      >
        <div className={styles.featureLeft}>
          <div className={styles.featureTag} data-side="myth">
            <span>❌</span> Common Myth
          </div>
          <p className={styles.featureText}>
            &ldquo;Without professional coaching, the UCAT can be cleared.&rdquo;
          </p>
          <div className={styles.strikeBar} />
        </div>

        <div className={styles.featureDivider}>
          <div className={styles.vsCircle}>vs</div>
        </div>

        <div className={styles.featureRight}>
          <div className={styles.featureTag} data-side="fact">
            <span>✅</span> The Reality
          </div>
          <p className={styles.featureText}>
            Professional coaching is essential to compete at the level UCAT demands.
          </p>
          <div className={styles.factPoints}>
            {[
              "Structured mock tests & score-gap analysis",
              "Section-specific speed strategies",
              "Expert mentorship through every stage",
              "200–400 point advantage over uncoached peers",
            ].map((pt) => (
              <div key={pt} className={styles.factPoint}>
                <span className={styles.factPointDot} />
                {pt}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        {mythsAndFacts.map((item, i) => (
          <MythFactCard
            key={item.id}
            item={item}
            index={i}
            revealRef={(el) => { refs.current[i + 1] = el; }}
          />
        ))}
      </div>

      {/* Bottom note */}
      <div
        className={styles.bottomNote}
        ref={(el) => { refs.current[mythsAndFacts.length + 1] = el; }}
      >
        <span className={styles.noteIcon}>💡</span>
        <p>
          EduQuest's structured UCAT program addresses every one of these myths
          with a proven, data-backed preparation framework — so you compete with
          full confidence, not guesswork.
        </p>
      </div>
    </section>
  );
}