// components/FooterSection/FooterSection.tsx

import Link from "next/link";
import styles from "./FooterSection.module.css";
import { FOOTER_BRAND, FOOTER_COLS, FOOTER_BOTTOM } from "@/app/omniquest/data/constants";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>

      {/* ── Main grid ── */}
      <div className={styles.grid}>

        {/* Brand column */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>
            {FOOTER_BRAND.logoText}
            <span className={styles.logoSpan}>{FOOTER_BRAND.logoSpan}</span>
          </h3>
          <p className={styles.tagline}>{FOOTER_BRAND.tagline}</p>

          {FOOTER_BRAND.offices.map((o) => (
            <div key={o.label} className={styles.office}>
              <strong className={styles.officeLabel}>{o.label}</strong>
              <p className={styles.officeAddress}>{o.address}</p>
            </div>
          ))}
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.title} className={styles.col}>
            <h4 className={styles.colTitle}>{col.title}</h4>
            <ul className={styles.colList}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.colLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <p className={styles.bottomCopy}>{FOOTER_BOTTOM.copy}</p>
        <div className={styles.bottomLinks}>
          {FOOTER_BOTTOM.links.map((l) => (
            <Link key={l.label} href={l.href} className={styles.bottomLink}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
}