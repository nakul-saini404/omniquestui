"use client";

import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a href="https://eduquest.org.in/" className={styles.navLogo}>
          Edu<span>Quest</span>
        </a>

        <ul className={styles.navLinks}>
          <li><a href="#what-is-sat">What is SAT?</a></li>
          <li><a href="#pattern">Exam Pattern</a></li>
          <li><a href="#scoring">Scoring</a></li>
          <li><a href="#strategy">Strategy</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className={styles.navCta}>
          <a href="/contact-us" className="btn-primary">
            Free Consultation
          </a>
        </div>

        <button
          className={styles.navHam}
          aria-label="Open menu"
          onClick={() => alert("Mobile menu — wire to your nav drawer component")}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
