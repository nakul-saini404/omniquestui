"use client";

import { useEffect, useState } from "react";
import styles from "./UCATHero.module.css";

interface HeroStat {
  num: string;
  lbl: string;
}

const STATS: HeroStat[] = [
  { num: "10K+", lbl: "Students Coached" },
  { num: "97%",  lbl: "Success Ratio"    },
  { num: "20+",  lbl: "Years Experience" },
  { num: "$8M+", lbl: "In Scholarships"  },
];

const INTEREST_OPTIONS = [
  "UCAT Coaching",
  "UCAT + University Application",
  "UCAT + MMI Interview Prep",
  "Full Medical Abroad Package",
  "Free Guide Only",
];

export default function UCATHero() {
  const [visible,   setVisible]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name:     "",
    phone:    "",
    email:    "",
    interest: "",
  });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.name || !form.phone || !form.email) return;
    setSubmitted(true);
  }

  function scrollToEnroll() {
    document.getElementById("enroll")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className={styles.hero} aria-label="UCAT 2026 Hero">
      <div className={styles.heroInner}>

        {/* ══════════ LEFT ══════════ */}
        <div
          className={`${styles.heroLeft} ${visible ? styles.fadeIn : ""}`}
        >
          <div className={styles.heroBadge}>
            📋 UCAT 2026 · Complete Guide for Indian Students
          </div>

          <h1 className={styles.heroH1}>
            Crack <em className={styles.em}>UCAT 2026</em> &amp;
            <br />Secure Global
            <br />MBBS Admission
          </h1>

          <p className={styles.heroSub}>
            Your all-in-one guide — exam structure, 2026 changes, score targets,
            prep strategy &amp; EduQuest&apos;s expert mentoring for UK, Australia &amp;
            New Zealand medical schools.
          </p>

          <div className={styles.heroCtas}>
            <button
              className={styles.btnGold}
              onClick={scrollToEnroll}
              aria-label="Book free demo class"
            >
              📋 Book Free Demo Class
            </button>
            <button
              className={styles.btnOutline}
              aria-label="Ucat Calculator"
            >
               <a href="https://test.eduquest.org.in/ucat-score-calculator/" >
            Calculate Your UCAT Score
          </a>
            </button>
          </div>

          <div className={styles.heroStats} aria-label="Key statistics">
            {STATS.map((s) => (
              <div key={s.lbl} className={styles.heroStat}>
                <div className={styles.num}>{s.num}</div>
                <div className={styles.lbl}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ RIGHT — Lead Card ══════════ */}
        <div
          id="enroll"
          className={`${styles.heroCard} ${visible ? styles.fadeInDelay : ""}`}
        >
          {!submitted ? (
            <>
              <h3 className={styles.cardTitle}>🎯 Get Expert UCAT Guidance</h3>

              <div className={styles.heroCardForm}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.heroInput}
                  autoComplete="name"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  className={styles.heroInput}
                  autoComplete="tel"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.heroInput}
                  autoComplete="email"
                />
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className={styles.heroSelect}
                >
                  <option value="" disabled>
                    I&apos;m interested in…
                  </option>
                  {INTEREST_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>

                <button
                  className={styles.cardCta}
                  onClick={handleSubmit}
                  disabled={!form.name || !form.phone || !form.email}
                >
                  Request Free Callback →
                </button>
              </div>

              <div className={styles.heroCardTrust}>
                🔒 100% secure &nbsp;·&nbsp; No spam &nbsp;·&nbsp; Reply within 24 hrs
              </div>
            </>
          ) : (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✅</div>
              <h3 className={styles.successTitle}>You&apos;re all set!</h3>
              <p className={styles.successText}>
                An EduQuest counsellor will reach you within 24 hours. Check your
                inbox for your free UCAT 2026 guide.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}