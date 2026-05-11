// components/sat/Footer.tsx
// Updated to use SAT_FOOTER_LOCATIONS from constants — all links now point to /sat/[city]

import styles from "./Footer.module.css";
import { SAT_FOOTER_LOCATIONS } from "@/constants/satCities";

// ── Important Emails ──────────────────────────────────────────────────────────
const emails = [
  { href: "mailto:info@eduquest.org.in",     label: "info@eduquest.org.in" },
  { href: "mailto:hr@eduquest.org.in",       label: "hr@eduquest.org.in" },
  { href: "mailto:account@eduquest.org.in",  label: "account@eduquest.org.in" },
  { href: "mailto:director@eduquest.org.in", label: "director@eduquest.org.in" },
  { href: "mailto:legal@eduquest.org.in",    label: "legal@eduquest.org.in" },
];

export default function Footer() {
  const half = Math.ceil(SAT_FOOTER_LOCATIONS.length / 2);
  const col1 = SAT_FOOTER_LOCATIONS.slice(0, half);
  const col2 = SAT_FOOTER_LOCATIONS.slice(half);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>

          {/* ── Col 1: Brand + Addresses ── */}
          <div>
            <div className={styles.footerBrandLogo}>
              Edu<span>Quest</span>
            </div>
            <p className={styles.footerBrandDesc}>
              India's premier SAT, ACT, AP, UCAT and global admissions strategy firm.
              Since 1995. 2,299+ student profiles. 1,839+ university admits.
            </p>
            <p className={styles.footerLocations}>
              Gurgaon · Bangalore · Mumbai · Hyderabad · Online Pan-India
            </p>

            <div className={styles.addressBlock}>
              <p>1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009</p>
              <p>
                <strong>Regional Office:</strong> F-45, First Floor, South City II,
                Sector 50, Gurugram, Haryana 122018
              </p>
              <p>
                <strong>Corporate Office:</strong> Bangalore Alpha Lab, #1316/C,
                1st Floor, 9th Cross, J.P. Nagar 2nd Phase, Bangalore – 560078.
              </p>
            </div>
          </div>

          {/* ── Col 2: SAT Coaching In (first half) ── */}
          <div>
            <div className={styles.footerColTitle}>SAT Coaching In</div>
            <div className={styles.footerColLinks}>
              {col1.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 3: SAT Coaching In (second half) ── */}
          <div>
            <div className={styles.footerColTitle}>&nbsp;</div>
            <div className={`${styles.footerColLinks} ${styles.footerColLinksOffset}`}>
              {col2.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 4: Important Emails ── */}
          <div>
            <div className={styles.footerColTitle}>Important Emails</div>
            <div className={styles.footerColLinks}>
              {emails.map((e) => (
                <a key={e.label} href={e.href}>
                  {e.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.footerBottom}>
          <span>© 2026 EduQuest. All rights reserved.</span>
          <span>Regional Office: F-45, First Floor, South City II, Gurugram 122018</span>
        </div>
      </div>
    </footer>
  );
}