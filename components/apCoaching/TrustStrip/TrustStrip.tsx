"use client";

import styles from "./TrustStrip.module.css";

// ── Data ───────────────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: "🌍", text: "Recognized by",   strong: "4,000+ Universities",   suffix: " globally"               },
  { icon: "🏆", text: "College Board",    strong: "Authorized Prep",        suffix: ""                        },
  { icon: "📡", text: "Live 1-on-1",      strong: "Online Classes",         suffix: ""                        },
  { icon: "🎓", text: "Students at",      strong: "Harvard, MIT, Stanford", suffix: ""                        },
  { icon: "💰", text: "Save",             strong: "$20K–$60K",              suffix: " in tuition via credits" },
] as const;

// ── Sub-component ──────────────────────────────────────────────────────────────
function TrustItem({ icon, text, strong, suffix }: (typeof TRUST_ITEMS)[number]) {
  return (
    <div className={styles.trustItem}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <span className={styles.label}>
        {text}{" "}
        <strong className={styles.strong}>{strong}</strong>
        {suffix}
      </span>
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function TrustStrip() {
  return (
    <div className={styles.trustStrip} aria-label="Trust indicators">
      <div className={styles.trustTrack}>
        {/* Set 1 */}
        <div className={styles.trustSet}>
          {TRUST_ITEMS.map((item) => (
            <TrustItem key={item.strong} {...item} />
          ))}
        </div>
        {/* Set 2 — duplicate for seamless infinite loop */}
        <div className={styles.trustSet} aria-hidden="true">
          {TRUST_ITEMS.map((item) => (
            <TrustItem key={`dup-${item.strong}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}