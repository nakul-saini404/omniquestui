'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from "./OurCommitment.module.css";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface PromiseItem {
  icon: string;
  num: string;
  label: string;
}

const items: PromiseItem[] = [
  { icon: "⚡", num: "< 2hrs",    label: "WhatsApp response time" },
  { icon: "📧", num: "24hrs",     label: "Email response guarantee" },
  { icon: "📞", num: "Same day",  label: "Callback for form submissions" },
  { icon: "🎯", num: "Free",      label: "First advisory session always" },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const OurCommitment: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Our Commitment</div>
          <h2 className={styles.sectionTitle}>
            The EduQuest <em>Response Promise</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
        </header>

        {/* ── Promise grid ── */}
        <div className={styles.promiseGrid}>
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`${styles.promiseItem} ${visible ? styles.promiseItemVisible : ""}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className={styles.promiseIcon} aria-hidden="true">
                {item.icon}
              </div>
              <div className={styles.promiseNum}>{item.num}</div>
              <div className={styles.promiseLabel}>{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurCommitment;