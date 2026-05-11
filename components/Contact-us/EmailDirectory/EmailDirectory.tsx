"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./EmailDirectory.module.css";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface EmailEntry {
  id: string;
  dept: string;
  addr: string;
}

const emails: EmailEntry[] = [
  { id: "general",  dept: "General",      addr: "contact@eduquest.org.in"  },
  { id: "info",     dept: "Information",  addr: "info@eduquest.org.in"     },
  { id: "director", dept: "Director",     addr: "director@eduquest.org.in" },
  { id: "hr",       dept: "Careers / HR", addr: "hr@eduquest.org.in"       },
  { id: "accounts", dept: "Accounts",     addr: "account@eduquest.org.in"  },
  { id: "legal",    dept: "Legal",        addr: "legal@eduquest.org.in"    },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const EmailDirectory: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // ✅ Use Array.from instead of spread to avoid downlevelIteration error
            setVisibleItems((prev) => new Set(Array.from(prev).concat(i)));
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
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
          <div className={styles.sectionTag}>Email Directory</div>
          <h2 className={styles.sectionTitle}>
            Write to the <em>Right Team</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
          <p className={styles.sectionSub}>
            Direct emails get faster responses. Use the right address for your
            query type.
          </p>
        </header>

        {/* ── Email list ── */}
        <div className={styles.emailList}>
          {emails.map((entry, i) => (
            <a
              key={entry.id}
              href={`https://mail.google.com/mail/?view=cm&to=${entry.addr}`}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { itemRefs.current[i] = el; }}
              className={`${styles.emailItem} ${
                visibleItems.has(i) ? styles.emailItemVisible : ""
              }`}
              style={{ animationDelay: `${i * 65}ms` }}
            >
              <div className={styles.emailDot} aria-hidden="true" />
              <div className={styles.emailDept}>{entry.dept}</div>
              <div className={styles.emailAddr}>{entry.addr}</div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EmailDirectory;