'use client';

import { useEffect, useRef, useState } from 'react';

const calculators = [
  { title: 'PSAT Score Calculator', href: 'https://test.eduquest.org.in/psat-score-calculator/' },
  { title: 'SAT Score Calculator', href: 'https://test.eduquest.org.in/sat-score-calculator/' },
  { title: 'ACT Score Calculator', href: 'https://test.eduquest.org.in/act-score-calculator/' },
  { title: 'AP Score Calculator', href: 'https://test.eduquest.org.in/ap-score-calculator/' },
  { title: 'TMUA Score Calculator', href: 'https://test.eduquest.org.in/tmua-score-calculator/' },
  { title: 'UCAT Score Calculator', href: 'https://test.eduquest.org.in/ucat-score-calculator/' },
  { title: 'ESAT Score Calculator', href: 'https://test.eduquest.org.in/esat-score-calculator/' },
  { title: 'LSAT Score Calculator', href: 'https://test.eduquest.org.in/lsat-score-calculator/' },
  { title: 'LNAT Score Calculator', href: 'https://test.eduquest.org.in/lnat-score-calculator/' },
  { title: 'GMAT Score Calculator', href: 'https://test.eduquest.org.in/gmat-score-calculator/' },
  { title: 'GRE Score Calculator', href: 'https://test.eduquest.org.in/gre-score-calculator/' },
  { title: 'CAT Score Calculator', href: 'https://test.eduquest.org.in/cat-score-calculator/' },
  { title: 'MCAT Score Calculator', href: 'https://test.eduquest.org.in/mcat-score-calculator/' },
  { title: 'SSAT Score Calculator', href: 'https://test.eduquest.org.in/ssat-score-calculator/' },
];

export default function Calculators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Change calculator name every 3.5s, fade out 400ms before the swap
    intervalRef.current = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % calculators.length);
        setIsChanging(false);
      }, 400);
    }, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const currentCalc = calculators[currentIndex];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

            :root {
              --navy: #0a1628;
              --gold: #c9a84c;
              --gold-light: #f0c96e;
              --cream: #f8f4ed;
              --white: #ffffff;
              --muted: #6b7280;
            }

            .eq-calc-section {
              background: var(--cream);
              padding: 80px 24px;
              font-family: 'DM Sans', sans-serif;
            }

            .eq-calc-inner {
              max-width: 1400px;
              margin: 0 auto;
            }

            /* ── Header row ── */
            .eq-calc-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 40px;
              flex-wrap: wrap;
            }

            /* ── Left column — fully static ── */
            .eq-calc-left {
              flex: 1 1 280px;
            }

            .eq-calc-section-tag {
              display: inline-block;
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: var(--gold);
              margin-bottom: 12px;
              padding: 4px 12px;
              background: rgba(201,168,76,0.1);
              border-radius: 4px;
            }

            /* Static heading — zero animation */
            .eq-calc-title {
              font-family: 'Playfair Display', serif;
              font-size: clamp(1.8rem, 3vw, 2.4rem);
              font-weight: 800;
              line-height: 1.2;
              color: var(--navy);
              margin-bottom: 12px;
            }

            .eq-calc-title em {
              font-style: normal;
              color: var(--gold);
            }

            .eq-calc-desc {
              font-size: 1rem;
              color: var(--muted);
              max-width: 420px;
              line-height: 1.6;
            }

            .eq-calc-desc strong {
              color: var(--navy);
              font-weight: 600;
            }

            /* ── Right panel ── */
            .eq-calc-right-panel {
              flex: 0 0 auto;
              display: flex;
              align-items: center;
              gap: 20px;
              background: var(--white);
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              padding: 24px 32px;
              min-width: 300px;
              box-shadow: 0 4px 20px rgba(10,22,40,0.06);
            }

            /* Static label — left side of panel */
            .eq-calc-panel-label {
              font-size: 0.8rem;
              color: var(--muted);
              font-family: 'DM Mono', monospace;
              line-height: 1.5;
              white-space: nowrap;
            }

            .eq-calc-panel-label span {
              display: block;
              font-size: 0.88rem;
              color: var(--gold);
              font-weight: 600;
              font-family: 'DM Sans', sans-serif;
              margin-bottom: 2px;
            }

            /* Vertical divider */
            .eq-calc-panel-divider {
              width: 1px;
              height: 44px;
              background: #e2e8f0;
              flex-shrink: 0;
            }

            /* Calculator slot — right side of panel */
            .eq-calc-slot {
              display: flex;
              flex-direction: column;
              gap: 6px;
              min-width: 180px;
            }

            .eq-calc-explore-label {
              font-size: 0.66rem;
              font-weight: 700;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: var(--muted);
              font-family: 'DM Mono', monospace;
            }

            /*
             * Calculator link:
             * — slow gentle blink (3s cycle) while visible
             * — fade+slide out/in when changing
             * — hover pauses animation and shows gold underline
             */
            .eq-calc-link {
              font-family: 'Playfair Display', serif;
              font-size: 1.05rem;
              font-weight: 700;
              color: var(--navy);
              text-decoration: none;
              display: inline-block;
              position: relative;
              white-space: nowrap;
              cursor: pointer;
              transition: color 0.2s ease;
            }

            .eq-calc-link::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              right: 0;
              height: 2px;
              background: var(--gold);
              border-radius: 2px;
              transform: scaleX(0);
              transition: transform 0.25s ease;
            }

            .eq-calc-link:hover {
              color: var(--gold);
              animation-play-state: paused !important;
            }

            .eq-calc-link:hover::after {
              transform: scaleX(1);
            }

            /* Slow blink: visible most of 3s cycle, brief dip at 90% */
            .eq-calc-link.blinking {
              animation: eq-calc-blink 3s ease-in-out infinite;
            }

            /* Fade-out before swap */
            .eq-calc-link.fading-out {
              animation: eq-calc-fade-out 0.4s ease-out forwards;
            }

            /* Slide-up fade-in after swap */
            .eq-calc-link.fading-in {
              animation: eq-calc-fade-in 0.4s ease-out forwards;
            }

            @keyframes eq-calc-blink {
              0%, 80%, 100% { opacity: 1; }
              90%            { opacity: 0.15; }
            }

            @keyframes eq-calc-fade-out {
              from { opacity: 1; transform: translateY(0);    }
              to   { opacity: 0; transform: translateY(-6px); }
            }

            @keyframes eq-calc-fade-in {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0);   }
            }

            /* ── Responsive ── */
            @media (max-width: 768px) {
              .eq-calc-section      { padding: 60px 20px; }
              .eq-calc-header       { flex-direction: column; align-items: flex-start; }
              .eq-calc-right-panel  { min-width: unset; width: 100%; box-sizing: border-box; }
            }

            @media (max-width: 480px) {
              .eq-calc-right-panel  { flex-direction: column; align-items: flex-start; gap: 14px; }
              .eq-calc-panel-divider{ width: 100%; height: 1px; }
            }
          `,
        }}
      />

      <section className="eq-calc-section" id="score-calculators">
        <div className="eq-calc-inner">
          <div className="eq-calc-header">

            {/* ── Left: completely static heading & description ── */}
            <div className="eq-calc-left">
              <div className="eq-calc-section-tag">Free Online Tools</div>

              {/* Static headline — never changes or animates */}
              <h2 className="eq-calc-title">
                Interactive Score Calculators <em>2026</em>
              </h2>

              <p className="eq-calc-desc">
                Instantly Estimate, Convert & Benchmark Your Grades for{' '}
                <strong>
                  PSAT, SAT, ACT, AP, TMUA, UCAT, ESAT, LSAT, LNAT, GMAT, GRE,
                  CAT, MCAT, SSAT
                </strong>
              </p>
            </div>

            {/* ── Right: panel with animated calculator name only ── */}
            <div className="eq-calc-right-panel">

              {/* Static highlight label */}
              <div className="eq-calc-panel-label">
                <span>Calculate Your Score</span>
                for any exam
              </div>

              <div className="eq-calc-panel-divider" />

              {/* Animated slot — only the calculator name changes */}
              <div className="eq-calc-slot">
                <div className="eq-calc-explore-label">Calculate Your Score</div>

                <a
                  href={currentCalc.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`eq-calc-link ${isChanging ? 'fading-out' : 'blinking'}`}
                >
                  {currentCalc.title}
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}