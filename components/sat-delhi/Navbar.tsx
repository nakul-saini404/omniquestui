"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About Us", href: "https://eduquest.org.in/about-us/" },
  { label: "Profile Building", href: "https://eduquest.org.in/profile-building-programs/" },
  { label: "SAT Coaching", href: "https://eduquest.org.in/sat/" },
  { label: "AP Coaching", href: "https://eduquest.org.in/ap-coaching/" },
  { label: "Study Abroad", href: "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/" },
  { label: "Blog", href: "https://eduquest.org.in/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="https://eduquest.org.in/" className={styles.logo}>
          Edu<span>Quest</span>
        </Link>

        <div className={styles.links}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="/contact-us" className="btn-primary">
            Book Free Counselling
          </a>
        </div>

        <button
          className={styles.ham}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileLinks} ${open ? styles.open : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="/contact-us"
          className="btn-primary"
          style={{ textAlign: "center" }}
          onClick={() => setOpen(false)}
        >
          Book Free Counselling
        </a>
      </div>
    </nav>
  );
}
