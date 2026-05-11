'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from "./GetInTouch.module.css";

/* ─── ICONS ─────────────────────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 12.84 12.84 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface ContactCard {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  badge?: string;
  content: React.ReactNode;
}

const cards: ContactCard[] = [
  {
    id: "phone",
    icon: <PhoneIcon />,
    label: "Call / WhatsApp",
    title: "Direct Counsellor Line",
    badge: "WhatsApp Available",
    content: (
      <>
        <a href="tel:+919958041888">+91-9958041888</a>
        <br />
        <a href="tel:+919717738553">+91-9717738553</a>
        <p className="sub">Mon–Sat · 9 AM – 8 PM IST<br />WhatsApp available 24/7</p>
      </>
    ),
  },
  {
    id: "email",
    icon: <EmailIcon />,
    label: "Email Us",
    title: "General Enquiries",
    badge: "24hr Response",
    content: (
      <>
        <a href="https://mail.google.com/mail/?view=cm&to=contact@eduquest.org.in" target="_blank" rel="noopener noreferrer">contact@eduquest.org.in</a>
        <br />
        <a href="https://mail.google.com/mail/?view=cm&to=info@eduquest.org.in" target="_blank" rel="noopener noreferrer">info@eduquest.org.in</a>
        <p className="sub">Response within 24 hours on all business days</p>
      </>
    ),
  },
  {
    id: "hours",
    icon: <ClockIcon />,
    label: "Office Hours",
    title: "Walk-In & Appointments",
    badge: "Online Pan-India",
    content: (
      <>
        Monday – Saturday
        <br />
        <strong>9:00 AM – 7:00 PM IST</strong>
        <p className="sub">Online sessions available across all global time zones including GMT/BST and EST</p>
      </>
    ),
  },
  {
    id: "chat",
    icon: <ChatIcon />,
    label: "Live Chat",
    title: "Instant Support",
    content: (
      <>
        Chat with a counsellor directly on our portal or reach us on WhatsApp for quick queries about any programme, fee, or schedule.
        <div style={{ marginTop: 10 }}>
          <a
            href="https://wa.me/919958041888"
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Open WhatsApp Chat
          </a>
        </div>
      </>
    ),
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const GetInTouch: React.FC = () => {
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
        {/* Header */}
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Get in Touch</div>
          <h2 className={styles.sectionTitle}>
            Multiple Ways to <em>Reach Us</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
          <p className={styles.sectionSub}>
            Choose the channel that works best for you. Every query gets a response
            from a qualified counsellor — not a bot.
          </p>
        </header>

        {/* Cards grid */}
        <div className={styles.contactGrid}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${styles.contactCard} ${visibleCards.has(i) ? styles.contactCardVisible : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={styles.ccIcon}>{card.icon}</div>
              <div className={styles.ccLabel}>{card.label}</div>
              <div className={styles.ccTitle}>{card.title}</div>
              <div className={styles.ccBody}>{card.content}</div>
              {card.badge && (
                <span className={styles.ccBadge}>{card.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;