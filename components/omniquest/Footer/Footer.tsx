"use client";
// components/Footer/Footer.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./Footer.module.css";
import { FOOTER_COLS } from "@/app/omniquest/data/constants";

const OFFICES = [
  {
    label: "Main Office",
    addr: "1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009",
  },
  {
    label: "Regional Office",
    addr: "F-45, First Floor, South City II, Sector 50, Gurugram, Haryana 122018",
  },
  {
    label: "Corporate Office",
    addr: "Bangalore Alpha Lab, #1316/C, 1st Floor, 9th Cross, J.P. Nagar 2nd Phase, Bangalore – 560078",
  },
];

const DIVISION_TAGS = ["School Division", "MBA Division", "Tech & Skills"];

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "https://eduquest.org.in/privacy-policy/" },
  { label: "Terms of Service", href: "https://eduquest.org.in/terms-of-use/" },
  { label: "Cookie Policy",    href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" role="contentinfo" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* ── Brand column ── */}
          <div>
            <div className={styles.brand}>
              Omni<span className={styles.brandGold}>Quest</span>
            </div>

            <p className={styles.brandDesc}>
              India&apos;s premium global admissions strategy firm — designing
              globally competitive futures through psychometric intelligence and
              profile architecture.
            </p>

            <div className={styles.divisionTags}>
              {DIVISION_TAGS.map((t) => (
                <span key={t} className={styles.divisionTag}>{t}</span>
              ))}
            </div>

            {OFFICES.map((o) => (
              <div key={o.label} className={styles.officeBlock}>
                <div className={styles.officeLabel}>{o.label}</div>
                <p className={styles.officeAddr}>{o.addr}</p>
              </div>
            ))}
          </div>

          {/* ── Nav columns ── */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className={styles.colTitle}>{col.title}</div>
              <ul className={styles.linkList}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className={styles.navLink}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 OmniQuest. All rights reserved. A premium division of
            EduQuest · MbaWizards · Aptech.
          </p>
          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.legalLink}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}