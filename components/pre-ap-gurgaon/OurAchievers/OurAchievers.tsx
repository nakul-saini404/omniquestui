"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./OurAchievers.module.css";

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook (header only)
───────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    ref.current
      ?.querySelectorAll(`.${styles.reveal}`)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─────────────────────────────────────────────────────────
   DATA
   Images sourced directly from eduquest.org.in/ap-coaching/
   The first 6 cards have no caption on the live site.
   Replace src values with local /public paths in production.
───────────────────────────────────────────────────────── */
interface Achiever {
  src: string;
  alt: string;
  name?: string;
  scores?: string;
  year?: string;
}

const ACHIEVERS: Achiever[] = [
  // ── Unlabelled achievement cards (row 1) ──────────────────
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-02-17-at-2.49.36-PM-r1tfe2qnhs7iv8fv55pf637xk9s46crzq5y5psk8m0.jpeg",
    alt: "EduQuest AP achiever 2025",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-02-17-at-2.49.36-PM-2-r1tfdy1gjm1396mowloabmemlcfa3v9c1ioqber7h4.jpeg",
    alt: "EduQuest AP achiever 2025",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-02-17-at-2.49.36-PM-1-r1tfdua3s9vxyqs5ik1s1ncs7sxt92uep02seaws60.jpeg",
    alt: "EduQuest AP achiever 2025",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-02-17-at-2.49.35-PM-1-r1tfdqir0xqsoaxm4if9roaxu9gceafhchguh72cuw.jpeg",
    alt: "EduQuest AP achiever 2025",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-02-17-at-2.49.34-PM-r1tfdmre9llndv32qgsrhp93gpyvji0jzyuwk37xjs.jpeg",
    alt: "EduQuest AP achiever 2025",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-02-17-at-2.49.35-PM-r1tfdj01i9gi3f8jcf697q7936heoplmng8ymzdi8o.jpeg",
    alt: "EduQuest AP achiever 2025",
  },

  // ── Named achievers (AP 2021) ────────────────────────────
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-21.41.32-pbxrm2z48h5jpmqbos2n0leaphv3hwd65bln3reemw.jpeg",
    alt: "Vedant — AP 2021",
    name: "Vedant",
    scores: "Calculus BC 5 · Chemistry 5 · Physics C 5 · Psychology 5",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-21.41.30-1-pbxsqqhttiszuhohauorcu2zmfhlemr8qjcnbl4fiw.jpeg",
    alt: "Prisha Singhal — AP 2021",
    name: "Prisha Singhal",
    scores: "Calculus BC 5 · English Literature 4",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-21.41.33-pbxssflc5r4mt57qe33icwny8h4gayhsmxr7ikluag.jpeg",
    alt: "Alicya — AP 2021",
    name: "Alicya",
    scores: "Calculus AB 5 · Microeconomics 5 · Macroeconomics 5",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.57-pbxsvlbt4pgbtymixy9d8lyq43jv6c1bekoyl1x7dk.jpeg",
    alt: "Rishaant Jain — AP 2021",
    name: "Rishaant Jain",
    scores: "Calculus BC 5 · Physics C 5",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.56-2-pbxsvrwogjpc38cyvj3r82ay9snfo7rfrh9cxzng60.jpeg",
    alt: "Aryan Sharma — AP 2021",
    name: "Aryan Sharma",
    scores: "Microeconomics 5 · Macroeconomics 5 · Human Geography 5 · English Lit 4",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.56-1-pbxsvxjpljx20w4ryljin0vpu3vmyedts969tnf34o.jpeg",
    alt: "Akshay Nair — AP 2021",
    name: "Akshay Nair",
    scores: "Human Geography 5 · English Literature 5 · Biology 5 · CS A 5",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-20-at-15.51.56-pbxsw52f487clrtuqosj6yzel6uknz7ohae5nv3xqw.jpeg",
    alt: "Nitin Parashar — AP 2021",
    name: "Nitin Parashar",
    scores: "Psychology 5 · Calculus BC 5 · Physics C 5 · Chemistry 5",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-08-21-at-13.49.03-pbxtqy7z4qdp5n2qu08ax73bjuzoytiy1s73ydfdso.jpeg",
    alt: "Ajay Vats — AP 2021",
    name: "Ajay Vats",
    scores: "Calculus AB 5 · Physics C 5 · Chemistry 5",
    year: "AP 2021",
  },
  {
    src: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/Rohan-bhasin-1-pe410ajzx9zn3vi1utf9q1k9w8zcnfe2ygdbx1qvtk.jpg",
    alt: "Rohan Bhasin",
    name: "Rohan Bhasin",
    scores: "CS 4 · Statistics 4 · Microeconomics 4 · Calculus BC 5",
    year: "AP",
  },
];

/* Duplicate for seamless infinite loop */
const DOUBLED = [...ACHIEVERS, ...ACHIEVERS];

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function OurAchievers() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.section}
      id="achievers"
    >
      {/* ── Header ── */}
      <div className={styles.inner}>
        <div className={`${styles.hdrCenter} ${styles.reveal}`}>
          <span className={styles.sTag}>Hall of Fame</span>
          <span className={styles.goldLineCenter} />
          <h2 className={styles.sHead}>Our Achievers</h2>
          <p className={styles.sSub}>
            Students who turned preparation into perfect scores — and perfect
            scores into dream university admissions.
          </p>
        </div>
      </div>

      {/* ── Marquee scrolling gallery ── */}
      <div className={styles.marqueeOuter}>
        <div className={styles.marqueeTrack}>
          {DOUBLED.map((achiever, idx) => {
            const hasCaption = Boolean(achiever.name);
            return (
              <div
                key={`${achiever.alt}-${idx}`}
                className={`${styles.card} ${!hasCaption ? styles.cardNoCaption : ""}`}
              >
                {/* Photo */}
                <Image
                  src={achiever.src}
                  alt={achiever.alt}
                  fill
                  sizes="240px"
                  className={styles.cardImg}
                  unoptimized // external URLs
                />

                {/* Gradient overlay */}
                <div className={styles.cardOverlay} aria-hidden="true" />

                {/* Caption (named achievers only) */}
                {hasCaption && (
                  <div className={styles.cardContent}>
                    <div className={styles.cardName}>{achiever.name}</div>
                    <div className={styles.cardScores}>{achiever.scores}</div>
                    {achiever.year && (
                      <span className={styles.cardYear}>{achiever.year}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}