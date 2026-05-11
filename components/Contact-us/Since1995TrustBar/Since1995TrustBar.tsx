'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from "./Since1995TrustBar.module.css";

interface TrustItem {
  icon: React.ReactNode;
  strong: string;
  span: string;
}

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3L1 9l4 2.18V15l7 4 7-4v-3.82L23 9 12 3zm-1 13.31L5 13.44v-1.74L11 14v2.31zm1-4.14L4.21 9 12 5.19 19.79 9 12 12.17zm4 4.14v-2.31l6-2.7v1.74l-6 3.27z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);

const CertIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1zm0 4.18l6 2.67v4.15c0 3.85-2.56 7.45-6 8.77-3.44-1.32-6-4.92-6-8.77V7.85l6-2.67z" />
  </svg>
);

const trustItems: TrustItem[] = [
  { icon: <ShieldIcon />, strong: "Since 1995", span: "30+ years of excellence" },
  { icon: <GroupIcon />, strong: "2,299+ Students", span: "Across 20+ countries" },
  { icon: <SchoolIcon />, strong: "1,839+ Admits", span: "Top 100 global universities" },
  { icon: <ClockIcon />, strong: "24-Hour Response", span: "Guaranteed reply time" },
  { icon: <CertIcon />, strong: "ISO Certified", span: "Verified quality standards" },
];

const Since1995TrustBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.trustBar} ref={ref}>
      <div className={styles.trustBarInner}>
        {trustItems.map((item, i) => (
          <React.Fragment key={item.strong}>
            <div
              className={`${styles.trustItem} ${visible ? styles.trustItemVisible : ""}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className={styles.trustIcon}>{item.icon}</div>
              <div className={styles.trustText}>
                <strong>{item.strong}</strong>
                <span>{item.span}</span>
              </div>
            </div>
            {i < trustItems.length - 1 && (
              <div className={styles.trustDivider} aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Since1995TrustBar;