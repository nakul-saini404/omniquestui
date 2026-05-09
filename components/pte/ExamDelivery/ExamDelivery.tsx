"use client";

import { useEffect, useRef } from "react";
import styles from "./ExamDelivery.module.css";

/* ── Data ─────────────────────────────────────────────── */

const steps = [
  {
    num: 1,
    title: "Register Online",
    desc: "Create a myPTE account at pearsonpte.com and choose your test date and nearest authorised centre.",
    delay: 0,
  },
  {
    num: 2,
    title: "Arrive at Centre",
    desc: "Bring a valid government ID. Biometric data (photo, palm vein scan) is collected before entry.",
    delay: 80,
  },
  {
    num: 3,
    title: "Test Begins",
    desc: "Sit at a designated computer with headset. The test begins with a personal introduction, then proceeds through all three sections.",
    delay: 160,
  },
  {
    num: 4,
    title: "AI Scoring",
    desc: "Responses are auto-sent to Pearson's AI scoring engine the moment you finish. No human markers involved.",
    delay: 240,
  },
  {
    num: 5,
    title: "Score in 5 Days",
    desc: "Your official score report is available in your myPTE account within 5 business days. Send to institutions for free.",
    delay: 320,
  },
];

const detailCards: {
  title: string;
  desc: React.ReactNode;
  delay: number;
}[] = [
  {
    title: "Computer-Based Only",
    desc: "PTE is available exclusively in computer-based format — there is no paper-based option. Responses are typed or spoken directly into the system via a headset and microphone.",
    delay: 0,
  },
  {
    title: "Strict Security Protocols",
    desc: "Test centres enforce CCTV monitoring, palm vein scanning and no personal items in the test room. Notes are taken on erasable boards provided at the centre — no paper allowed.",
    delay: 80,
  },
  {
    title: "Reschedule & Cancellation",
    desc: "You may reschedule or cancel your test online or by phone. Different fees apply depending on how close to the test date you make changes — always check Pearson's current policy.",
    delay: 160,
  },
  {
    title: "Home-Based vs. Centre",
    desc: (
      <>
        PTE Academic Online (home-based) is available but its scores are{" "}
        <strong>not</strong> accepted for Canada&apos;s SDS visa category. For
        immigration and study permit purposes, always take the test at an
        authorised centre.
      </>
    ),
    delay: 240,
  },
  {
    title: "Retake Policy",
    desc: "You may retake the PTE test as many times as needed, with a mandatory gap of at least 5 days between attempts. There is no annual limit on the number of attempts.",
    delay: 320,
  },
  {
    title: "Score Validity",
    desc: (
      <>
        PTE scores are valid for <strong>two years</strong> from the date of the
        test. After two years, scores are no longer visible in your myPTE account
        and cannot be sent to institutions.
      </>
    ),
    delay: 400,
  },
];

/* ── Component ─────────────────────────────────────────── */

export default function ExamDelivery() {
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
      `.${styles.sectionHead}, .${styles.howStep}, .${styles.howDetailCard}`
    );
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.howSection} ref={sectionRef}>
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.sectionHead} ${styles.center}`}>
          <div className={styles.sectionLabel}>Exam Delivery</div>
          <h2>How the PTE Exam is Conducted</h2>
          <p>
            PTE Academic is a fully computer-based test conducted at authorised
            Pearson VUE test centres worldwide. Here&apos;s what to expect on
            test day.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className={styles.howSteps}>
          {steps.map(({ num, title, desc, delay }) => (
            <div
              key={num}
              className={styles.howStep}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className={styles.howCircle}>{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        {/* Detail Cards */}
        <div className={styles.howDetails}>
          {detailCards.map(({ title, desc, delay }) => (
            <div
              key={title}
              className={styles.howDetailCard}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}