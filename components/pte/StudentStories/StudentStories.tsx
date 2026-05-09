"use client";

import { useEffect, useRef } from "react";
import styles from "./StudentStories.module.css";

/* ── Data ─────────────────────────────────────────────── */

const testimonials = [
  {
    score: "Score: 79 Overall",
    quote:
      "I was stuck at 65 after two self-study attempts. EduQuest's trainers showed me exactly how the AI scoring works for Describe Image and Write From Dictation. Within 6 weeks I jumped to 79. Canada PR is now in process.",
    avatarLetter: "R",
    name: "Ravi S.",
    destination: "Canada PR — Express Entry",
    delay: 0,
  },
  {
    score: "Score: 83 Overall",
    quote:
      "The mock test engine is incredibly close to the real PTE environment. I took my actual test feeling like I'd already done it many times before. The confidence that gave me made a huge difference to my Speaking score.",
    avatarLetter: "P",
    name: "Priya M.",
    destination: "University of Melbourne, Australia",
    delay: 60,
  },
  {
    score: "Score: 72 Overall",
    quote:
      "I needed 65 for my SDS Canada student visa and was nervous about the Speaking section. EduQuest's mentor gave feedback on every single practice recording I submitted. Scored 72 on my first attempt.",
    avatarLetter: "A",
    name: "Anika J.",
    destination: "Canada SDS Student Visa",
    delay: 120,
  },
  {
    score: "Score: 76 Overall",
    quote:
      "The 300+ strategy videos were a game changer. I watched them on my commute and they covered every question type in detail. Combined with the live sessions, I cleared my target score for Australia immigration in one attempt.",
    avatarLetter: "K",
    name: "Karan T.",
    destination: "Australia Skilled Migration",
    delay: 180,
  },
  {
    score: "Score: 68 Overall",
    quote:
      "I'm a working professional with limited study time. EduQuest's flexible batch timings — 10 AM and 8 PM — meant I could join live classes without disrupting my job. Scored 68 in 5 weeks, well above my UK university requirement.",
    avatarLetter: "S",
    name: "Simran D.",
    destination: "University of Manchester, UK",
    delay: 240,
  },
  {
    score: "Score: 80 Overall",
    quote:
      "My writing score was pulling my overall down. The essay feedback from EduQuest's mentors was extremely detailed — they marked exactly what the AI penalises and what earns top marks. I went from 61 to 80 overall in two attempts.",
    avatarLetter: "N",
    name: "Neha R.",
    destination: "NZ Skilled Worker Visa",
    delay: 300,
  },
];

/* ── Component ─────────────────────────────────────────── */

export default function StudentStories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.08 }
    );

    const els = sectionRef.current?.querySelectorAll(
      `.${styles.sectionHead}, .${styles.testiCard}`
    );
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.testimonials} ref={sectionRef}>
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.sectionHead} ${styles.center}`}>
          <div className={styles.sectionLabel}>Student Stories</div>
          <h2>What Our PTE Students Say</h2>
          <p>
            Real results from real students who trusted EduQuest to prepare them
            for PTE Academic.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.testiGrid}>
          {testimonials.map(({ score, quote, avatarLetter, name, destination, delay }) => (
            <div
              key={name}
              className={styles.testiCard}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className={styles.testiStars}>★★★★★</div>
              <div className={styles.testiScore}>{score}</div>
              <blockquote className={styles.testiQuote}>
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar}>{avatarLetter}</div>
                <div>
                  <div className={styles.testiName}>{name}</div>
                  <div className={styles.testiDest}>{destination}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}