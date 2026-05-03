"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./OurCounsellors.module.css";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface Counsellor {
  id: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  name: string;
  role: string;
  expertise: string;
  emails: { label: string; href: string }[];
}

const counsellors: Counsellor[] = [
  {
    id: "admissions",
    initials: "AM",
    avatarBg: "#0b1c3d",
    avatarColor: "#d4a843",
    name: "Admissions Team",
    role: "US & UK Admissions",
    expertise:
      "Common App, UCAS, Ivy League strategy, essays, shortlisting, financial aid & scholarships.",
    emails: [
      { label: "✉ director@eduquest.org.in", href: "https://mail.google.com/mail/?view=cm&to=director@eduquest.org.in" },
    ],
  },
  {
    id: "testprep",
    initials: "TP",
    avatarBg: "#c84b31",
    avatarColor: "#ffffff",
    name: "Test Prep Faculty",
    role: "SAT · ACT · AP · UCAT",
    expertise:
      "Senior SAT/ACT faculty with 1570+ average student scores. AP specialists for 20+ subjects.",
    emails: [
      { label: "✉ contact@eduquest.org.in", href: "https://mail.google.com/mail/?view=cm&to=contact@eduquest.org.in" },
    ],
  },
  {
    id: "profile",
    initials: "PB",
    avatarBg: "#d4a843",
    avatarColor: "#0b1c3d",
    name: "Profile Building",
    role: "Class 6–12 Strategy",
    expertise:
      "Long-term mentoring for extracurriculars, research papers, internships, and academic positioning.",
    emails: [
      { label: "✉ info@eduquest.org.in", href: "https://mail.google.com/mail/?view=cm&to=info@eduquest.org.in" },
    ],
  },
  {
    id: "career",
    initials: "CS",
    avatarBg: "#1a3570",
    avatarColor: "#ffffff",
    name: "Career Support",
    role: "Franchise & HR",
    expertise:
      "Partnership enquiries, franchise opportunities, HR and corporate collaborations with EduQuest.",
    emails: [
      { label: "✉ hr@eduquest.org.in",    href: "https://mail.google.com/mail/?view=cm&to=hr@eduquest.org.in" },
      { label: "✉ legal@eduquest.org.in", href: "https://mail.google.com/mail/?view=cm&to=legal@eduquest.org.in" },
    ],
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const OurCounsellors: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // ✅ Use Array.from instead of spread to avoid downlevelIteration error
            setVisibleCards((prev) => new Set(Array.from(prev).concat(i)));
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Our Counsellors</div>
          <h2 className={styles.sectionTitle}>
            Who You'll <em>Speak With</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
          <p className={styles.sectionSub}>
            Every query is handled by a specialist — not a generalist. Our team
            of dedicated counsellors bring decades of collective experience.
          </p>
        </header>

        {/* ── Team grid ── */}
        <div className={styles.teamGrid}>
          {counsellors.map((c, i) => (
            <div
              key={c.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${styles.teamCard} ${
                visibleCards.has(i) ? styles.teamCardVisible : ""
              }`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Avatar */}
              <div
                className={styles.teamAvatar}
                style={{ background: c.avatarBg, color: c.avatarColor }}
                aria-hidden="true"
              >
                {c.initials}
              </div>

              {/* Name & role */}
              <div className={styles.teamName}>{c.name}</div>
              <div className={styles.teamRole}>{c.role}</div>

              {/* Expertise blurb */}
              <p className={styles.teamExpertise}>{c.expertise}</p>

              {/* Contact links */}
              <div className={styles.teamContact}>
                {c.emails.map((email) => (
                  <a key={email.href} href={email.href} target="_blank" rel="noopener noreferrer">
                    {email.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurCounsellors;