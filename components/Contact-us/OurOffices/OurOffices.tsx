'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from "./OurOffices.module.css";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface Office {
  id: string;
  mapSrc: string;
  mapLabel: string;
  city: string;
  name: string;
  address: React.ReactNode;
  tags: string[];
}

const offices: Office[] = [
  {
    id: "dlf",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9!2d77.0877!3d28.4583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDLF+Phase+4+Gurugram!5e0!3m2!1sen!2sin!4v1620000000000",
    mapLabel: "HQ — Gurugram",
    city: "Gurugram · Regional Office 1",
    name: "Galleria Boulevard, DLF Phase IV",
    address: (
      <>
        1210, Galleria Boulevard, DLF Phase IV,
        <br />
        Gurugram, Haryana 122009
      </>
    ),
    tags: ["SAT Coaching", "AP Coaching", "Admissions"],
  },
  {
    id: "sc2",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509!2d77.097!3d28.4189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSouth+City+II+Gurugram!5e0!3m2!1sen!2sin!4v1620000000001",
    mapLabel: "South City II",
    city: "Gurugram · Regional Office 2",
    name: "South City II, Sector 50",
    address: (
      <>
        F-45, First Floor, South City II,
        <br />
        Sector 50, Gurugram, Haryana 122018
      </>
    ),
    tags: ["Test Prep", "Profile Building", "UCAT"],
  },
  {
    id: "blr",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888!2d77.5916!3d12.9082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJP+Nagar+Bangalore!5e0!3m2!1sen!2sin!4v1620000000002",
    mapLabel: "Bangalore Alpha Lab",
    city: "Bangalore · Corporate Office",
    name: "Alpha Lab, JP Nagar 2nd Phase",
    address: (
      <>
        #1316/C, 1st Floor, 9th Cross,
        <br />
        J.P. Nagar 2nd Phase, Bangalore – 560078
      </>
    ),
    tags: ["Strategy", "Research", "IB Tuition"],
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const OurOffices: React.FC = () => {
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
          <div className={styles.sectionTag}>Our Offices</div>
          <h2 className={styles.sectionTitle}>
            Visit Us in <em>Person</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
          <p className={styles.sectionSub}>
            Three offices across India — or reach us online no matter where you
            are in the world.
          </p>
        </header>

        {/* ── Cards grid ── */}
        <div className={styles.officesGrid}>
          {offices.map((office, i) => (
            <div
              key={office.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${styles.officeCard} ${
                visibleCards.has(i) ? styles.officeCardVisible : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Map thumbnail */}
              <div className={styles.officeMap}>
                <iframe
                  src={office.mapSrc}
                  title={`Map of ${office.name}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className={styles.officeMapLabel}>{office.mapLabel}</div>
              </div>

              {/* Body */}
              <div className={styles.officeBody}>
                <div className={styles.officeCity}>{office.city}</div>
                <div className={styles.officeName}>{office.name}</div>
                <div className={styles.officeAddress}>{office.address}</div>
                <div className={styles.officeTags}>
                  {office.tags.map((tag) => (
                    <span key={tag} className={styles.officeTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurOffices;