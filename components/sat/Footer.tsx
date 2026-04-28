import styles from "./Footer.module.css";

// ── SAT Coaching Locations ────────────────────────────────────────────────────
const satLocations = [
  { href: "/sat_delhi",      label: "Delhi/NCR" },
  { href: "https://eduquest.org.in/sat-coaching-classes-mumbai/",     label: "Mumbai" },
  { href: "https://eduquest.org.in/sat-coaching-classes-gurugram/",   label: "Gurgaon" },
  { href: "https://eduquest.org.in/sat-coaching-classes-jaipur/",     label: "Jaipur" },
  { href: "https://eduquest.org.in/sat-coaching-classes-nepal",       label: "Nepal" },
  { href: "https://eduquest.org.in/sat-coaching-classes-pune/",       label: "Pune" },
  { href: "https://eduquest.org.in/sat-coaching-classes-us/",         label: "US" },
  { href: "https://eduquest.org.in/sat-coaching-classes-sharjah/",    label: "Sharjah" },
  { href: "https://eduquest.org.in/sat-coaching-classes-bangalore/",  label: "Bangalore" },
  { href: "https://eduquest.org.in/sat-coaching-classes-chennai/",    label: "Chennai" },
  { href: "https://eduquest.org.in/sat-coaching-classes-hyderabad/",  label: "Hyderabad" },
  { href: "https://eduquest.org.in/sat-coaching-classes-indore/",     label: "Indore" },
  { href: "https://eduquest.org.in/sat-coaching-classes-uae/",        label: "UAE" },
  { href: "https://eduquest.org.in/sat-coaching-classes-ahmedabad/",  label: "Ahmedabad" },
  { href: "https://eduquest.org.in/sat-coaching-classes-uk/",         label: "UK" },
  { href: "https://eduquest.org.in/sat-coaching-classes-saudi-arabia/", label: "Saudi Arabia" },
  { href: "https://eduquest.org.in/sat-coaching-classes-dehradun/",   label: "Dehradun" },
  { href: "https://eduquest.org.in/sat-coaching-classes-singapore/",  label: "Singapore" },
  { href: "https://eduquest.org.in/sat-coaching-classes-chandigarh/", label: "Chandigarh" },
  { href: "https://eduquest.org.in/sat-coaching-classes-noida/",      label: "Noida" },
  { href: "https://eduquest.org.in/sat-coaching-classes-lucknow/",    label: "Lucknow" },
  { href: "https://eduquest.org.in/sat-coaching-classes-kolkata/",    label: "Kolkata" },
  { href: "https://eduquest.org.in/sat-coaching-classes-nigeria/",    label: "Nigeria" },
  { href: "https://eduquest.org.in/sat-coaching-classes-mauritius/",  label: "Mauritius" },
];

// ── Important Emails ──────────────────────────────────────────────────────────
const emails = [
  { href: "mailto:info@eduquest.org.in",      label: "info@eduquest.org.in" },
  { href: "mailto:hr@eduquest.org.in",        label: "hr@eduquest.org.in" },
  { href: "mailto:account@eduquest.org.in",   label: "account@eduquest.org.in" },
  { href: "mailto:director@eduquest.org.in",  label: "director@eduquest.org.in" },
  { href: "mailto:legal@eduquest.org.in",     label: "legal@eduquest.org.in" },
];

export default function Footer() {
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
                Landmark: Opposite Thirumalagiri Venkateswara Swamy Temple,
                above Central Bank of India
              </p>
            </div>
          </div>

          {/* ── Col 2: SAT Coaching In (left half of locations) ── */}
          <div>
            <div className={styles.footerColTitle}>SAT Coaching In</div>
            <div className={styles.footerColLinks}>
              {satLocations.slice(0, 12).map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 3: SAT Coaching In (right half of locations) ── */}
          <div>
            <div className={styles.footerColTitle}>&nbsp;</div>
            <div className={`${styles.footerColLinks} ${styles.footerColLinksOffset}`}>
              {satLocations.slice(12).map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
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