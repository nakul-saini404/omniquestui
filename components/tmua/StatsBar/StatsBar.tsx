"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsBar.module.css";

interface StatItem {
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const STATS: StatItem[] = [
  { target: 10,  suffix: "K+", label: "Happy Students" },
  { target: 95,  suffix: "%",  label: "Success Ratio" },
  { prefix: "$", target: 5,   suffix: "M+", label: "In Scholarships" },
  { target: 15,  suffix: "+",  label: "Years of Service" },
];

function useCountUp(
  target: number,
  duration = 1800,
  decimals = 0,
  active = false
) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    // Cancel the rAF loop if the component unmounts mid-animation
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration, decimals]);

  return value;
}

function StatCounter({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.target, 1800, stat.decimals ?? 0, active);

  return (
    <div className={styles.statItem}>
      <div className={styles.statNum}>
        {stat.prefix ?? ""}
        {count}
        {stat.suffix}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible]   = useState(false);
  // Defer all browser-only logic until after hydration
  const [mounted, setMounted]   = useState(false);

  // Step 1: mark as mounted after first client render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: only attach IntersectionObserver after mount
  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div id="stats" className={styles.statsBar} ref={ref}>
      <div className={styles.statsInner}>
        {STATS.map((stat) => (
          <StatCounter
            key={stat.label}
            stat={stat}
            active={mounted && visible}
          />
        ))}
      </div>
    </div>
  );
}