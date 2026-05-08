"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./StudentSuccess.module.css";

const stats = [
  { num: 500, suffix: "+", label: "IIM Selections" },
  { num: 98, suffix: "%", label: "Success Rate" },
  { num: 50, suffix: "+", label: "Research Papers" },
];

const testimonials = [
  {
    name: "Arjun Sharma",
    iim: "IIM Indore",
    percentile: "99.2 Percentile",
    avatar: "https://eduquest.org.in/wp-content/uploads/2026/01/img13a.jpeg",
    quote:
      "EduQuest's profile building program made all the difference. My published research paper and Aptech certifications gave me a tangible edge in the interview. The mentors prepared me for every possible question.",
  },
  {
    name: "Priya Patel",
    iim: "IIM Rohtak",
    percentile: "98.5 Percentile",
    avatar: "https://eduquest.org.in/wp-content/uploads/2026/01/img13d.jpeg",
    quote:
      "The 360° curriculum and mock interview bootcamps prepared me for every aspect of the selection process. The strategy-first approach EduQuest follows is genuinely different from anywhere else.",
  },
  {
    name: "Rahul Verma",
    iim: "IIM Ranchi",
    percentile: "97.8 Percentile",
    avatar: "https://eduquest.org.in/wp-content/uploads/2026/01/img13c.jpeg",
    quote:
      "Coming from a humanities background, I was genuinely worried about Quant. The bridge classes built my foundation from scratch in 6 weeks. The structured approach made everything feel achievable.",
  },
  {
    name: "Sneha Gupta",
    iim: "IIM Bodh Gaya",
    percentile: "96.9 Percentile",
    avatar: "https://eduquest.org.in/wp-content/uploads/2026/01/img13b.jpeg",
    quote:
      "The mentors understood my strengths and weaknesses within the first session. Their personalized approach and consistent mock schedule helped me achieve the score I always knew I was capable of.",
  },
  {
    name: "Hardik",
    iim: "IIM Jammu",
    percentile: "96.1 Percentile",
    avatar: "https://eduquest.org.in/wp-content/uploads/2023/09/hardik1.jpeg",
    quote:
      "The EduQuest mock ecosystem is unmatched. I gave 80+ full-length tests before the real exam, and the actual IPMAT felt easier than my practice sessions. That confidence is priceless.",
  },
  {
    name: "Soham Sharma",
    iim: "IIFT Delhi",
    percentile: "95.4 Percentile",
    avatar: "https://eduquest.org.in/wp-content/uploads/2023/09/Soham.jpeg",
    quote:
      "The research paper I published with EduQuest's support became a central talking point in my IIFT interview. No other coaching program gives you that kind of real-world differentiator.",
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function AnimatedStat({
  num,
  suffix,
  label,
  delay,
  triggered,
}: {
  num: number;
  suffix: string;
  label: string;
  delay: number;
  triggered: boolean;
}) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1800, started);

  useEffect(() => {
    if (triggered) {
      const timer = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(timer);
    }
  }, [triggered, delay]);

  return (
    <div className={styles.statItem} style={{ animationDelay: `${delay}ms` }}>
      <span className={styles.statNum}>
        {count}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function TestiCard({
  t,
  index,
  visible,
}: {
  t: (typeof testimonials)[0];
  index: number;
  visible: boolean;
}) {
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0b1c3d&color=d4a843&size=100`;
  return (
    <div
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.avatar}>
          <img
            src={t.avatar}
            alt={t.name}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = fallback;
            }}
          />
        </div>
        <div className={styles.meta}>
          <div className={styles.name}>{t.name}</div>
          <div className={styles.iim}>{t.iim}</div>
          <div className={styles.score}>⭐ {t.percentile}</div>
        </div>
      </div>
      <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
    </div>
  );
}

export default function StudentSuccess() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [statsTriggered, setStatsTriggered] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  const GAP = 24;

  const calcPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 1;
    return 3;
  };

  const recalc = useCallback(() => {
    const pv = calcPerView();
    setPerView(pv);
    if (trackRef.current) {
      const trackW = trackRef.current.parentElement?.offsetWidth ?? 0;
      const cw = (trackW - GAP * (pv - 1)) / pv;
      setCardWidth(cw);
    }
    setCurrent(0);
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsTriggered(true);
          setTimeout(() => setCardsVisible(true), 300);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
  };

  const prev = () => goTo(current <= 0 ? maxIndex : current - 1);
  const next = () => goTo(current >= maxIndex ? 0 : current + 1);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  });

  const totalPages = Math.ceil(testimonials.length / perView);
  const activePage = Math.round(current / perView);

  const offset = current * (cardWidth + GAP);

  return (
    <section className={styles.section} id="success" ref={sectionRef}>
      {/* Decorative bg blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headingBlock}>
            <div className={styles.label}>
              <span className={styles.labelLine} />
              Student Success
            </div>
            <h2 className={styles.heading}>Hear From Our Achievers</h2>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          {stats.map((s, i) => (
            <AnimatedStat
              key={s.label}
              num={s.num}
              suffix={s.suffix}
              label={s.label}
              delay={i * 200}
              triggered={statsTriggered}
            />
          ))}
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrap}>
          <div className={styles.carouselInner} ref={trackRef}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${offset}px)`,
                gap: `${GAP}px`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={styles.cardSlot}
                  style={{
                    minWidth: cardWidth > 0 ? `${cardWidth}px` : undefined,
                    width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                  }}
                >
                  <TestiCard t={t} index={i} visible={cardsVisible} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button
            className={styles.arrowBtn}
            onClick={prev}
            aria-label="Previous"
          >
            ←
          </button>

          <div className={styles.dots}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activePage ? styles.dotActive : ""}`}
                onClick={() => goTo(i * perView)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={next}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}