'use client';

import { useEffect, useRef, useState } from 'react';

const calculators = [
  { title: 'PSAT Score Calculator', href: 'https://test.eduquest.org.in/psat-score-calculator/' },
  { title: 'SAT Score Calculator',  href: 'https://test.eduquest.org.in/sat-score-calculator/' },
  { title: 'ACT Score Calculator',  href: 'https://test.eduquest.org.in/act-score-calculator/' },
  { title: 'AP Score Calculator',   href: 'https://test.eduquest.org.in/ap-score-calculator/' },
  { title: 'TMUA Score Calculator', href: 'https://test.eduquest.org.in/tmua-score-calculator/' },
  { title: 'UCAT Score Calculator', href: 'https://test.eduquest.org.in/ucat-score-calculator/' },
  { title: 'ESAT Score Calculator', href: 'https://test.eduquest.org.in/esat-score-calculator/' },
  { title: 'LSAT Score Calculator', href: 'https://test.eduquest.org.in/lsat-score-calculator/' },
  { title: 'LNAT Score Calculator', href: 'https://test.eduquest.org.in/lnat-score-calculator/' },
  { title: 'GMAT Score Calculator', href: 'https://test.eduquest.org.in/gmat-score-calculator/' },
  { title: 'GRE Score Calculator',  href: 'https://test.eduquest.org.in/gre-score-calculator/' },
  { title: 'CAT Score Calculator',  href: 'https://test.eduquest.org.in/cat-score-calculator/' },
  { title: 'MCAT Score Calculator', href: 'https://test.eduquest.org.in/mcat-score-calculator/' },
  { title: 'SSAT Score Calculator', href: 'https://test.eduquest.org.in/ssat-score-calculator/' },
];

export default function TestPrep() {
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
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

            :root {
              --ink: #0A0A14;
              --paper: #FAFAF7;
              --cream: #F5F0E8;
              --gold: #C9973A;
              --gold-light: #E8B84B;
              --slate: #2E3A52;
              --slate-light: #4A5568;
              --border: rgba(10,10,20,0.1);
              --serif: 'DM Serif Display', Georgia, serif;
              --sans: 'DM Sans', system-ui, sans-serif;
              --mono: 'DM Mono', monospace;
            }

            /* ===== TEST PREP SECTION ===== */
            .eq-testprep {
              background: var(--cream);
              padding: 100px 80px;
              font-family: var(--sans);
            }

            .eq-testprep .eq-section-label {
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: var(--gold);
              margin-bottom: 12px;
            }

            .eq-testprep .eq-section-title {
              font-family: var(--serif);
              font-size: clamp(1.8rem, 3vw, 2.6rem);
              line-height: 1.2;
              color: var(--ink);
              margin-bottom: 20px;
            }

            .eq-testprep .eq-section-sub {
              font-size: 1rem;
              color: var(--slate-light);
              max-width: 560px;
              line-height: 1.7;
            }

            /* ── Grid ── */
            .eq-testprep-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 60px;
              margin-top: 60px;
              align-items: start;
            }

            /* ── Left: exam items ── */
            .eq-testprep-items {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }

            .eq-testprep-item {
              display: flex;
              align-items: center;
              gap: 16px;
              background: #fff;
              border: 1px solid var(--border);
              border-radius: 12px;
              padding: 18px 24px;
              transition: all 0.2s;
              text-decoration: none;
              color: inherit;
            }

            .eq-testprep-item:hover {
              border-color: var(--gold);
              transform: translateX(4px);
            }

            .eq-testprep-item-icon {
              width: 40px;
              height: 40px;
              background: var(--slate);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--gold);
              font-weight: 800;
              font-size: 0.8rem;
              flex-shrink: 0;
              font-family: var(--sans);
            }

            .eq-testprep-item-icon.small {
              font-size: 0.65rem;
            }

            .eq-testprep-item-name {
              font-weight: 600;
              font-size: 0.95rem;
              color: var(--ink);
              margin-bottom: 2px;
            }

            .eq-testprep-item-desc {
              font-size: 0.78rem;
              color: var(--slate-light);
            }

            /* ── Right: tool cards ── */
            .eq-testprep-tools {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }

            .eq-tool-card {
              background: #fff;
              border: 1px solid var(--border);
              border-radius: 16px;
              padding: 28px;
            }

            .eq-tool-title {
              font-weight: 700;
              font-size: 1rem;
              margin-bottom: 8px;
              color: var(--ink);
            }

            .eq-tool-desc {
              font-size: 0.85rem;
              color: var(--slate-light);
              margin-bottom: 16px;
              line-height: 1.6;
            }

            /* ── Button (shared by all three tool cards) ── */
            .eq-tool-btn {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              background: var(--slate);
              color: #fff;
              padding: 10px 20px;
              border-radius: 8px;
              font-size: 0.85rem;
              font-weight: 600;
              text-decoration: none;
              transition: background 0.2s;
              font-family: var(--sans);
            }

            .eq-tool-btn:hover { background: var(--ink); }

            /* ── Animated text span inside the calculator button ── */
            .eq-calc-btn-text {
              font-family: 'DM Serif Display', Georgia, serif;
              font-weight: 700;
              display: inline-block;
            }

            /* Slow gentle blink while visible */
            .eq-calc-btn-text.blinking {
              animation: eq-calc-blink 3s ease-in-out infinite;
            }

            /* Fade + slide up before swap */
            .eq-calc-btn-text.fading-out {
              animation: eq-calc-fade-out 0.4s ease-out forwards;
            }

            /* Slide up + fade in after swap */
            .eq-calc-btn-text.fading-in {
              animation: eq-calc-fade-in 0.4s ease-out forwards;
            }

            @keyframes eq-calc-blink {
              0%, 80%, 100% { opacity: 1; }
              90%            { opacity: 0.2; }
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
            @media (max-width: 1024px) {
              .eq-testprep       { padding: 80px 40px; }
              .eq-testprep-grid  { gap: 40px; }
            }

            @media (max-width: 768px) {
              .eq-testprep { padding: 60px 20px; }
              .eq-testprep-grid {
                grid-template-columns: 1fr;
                gap: 40px;
              }
            }
          `,
        }}
      />

      <section className="eq-testprep" id="test-prep">

        {/* ── Section header ── */}
        <div className="eq-section-label">Precision Test Preparation System</div>
        <h2 className="eq-section-title">SAT ACT AP Coaching with Strategy Approach</h2>
        <p className="eq-section-sub">
          We don't just prepare you for tests. We use tests as a strategic lever in your overall admissions architecture.
        </p>

        {/* ── Two-column grid ── */}
        <div className="eq-testprep-grid">

          {/* ── Left: exam list ── */}
          <div className="eq-testprep-items">

            <a href="https://eduquest.org.in/sat/" className="eq-testprep-item">
              <div className="eq-testprep-item-icon">SAT</div>
              <div>
                <div className="eq-testprep-item-name">Digital SAT Coaching</div>
                <div className="eq-testprep-item-desc">Highest SAT scores: 1590–1600. AI-powered diagnostics + score gap analysis.</div>
              </div>
            </a>

            <a href="https://eduquest.org.in/act/" className="eq-testprep-item">
              <div className="eq-testprep-item-icon">ACT</div>
              <div>
                <div className="eq-testprep-item-name">ACT Coaching</div>
                <div className="eq-testprep-item-desc">Perfect 36 achieved. Online live, hybrid, and classroom modes.</div>
              </div>
            </a>

            <a href="https://eduquest.org.in/ap-coaching/" className="eq-testprep-item">
              <div className="eq-testprep-item-icon">AP</div>
              <div>
                <div className="eq-testprep-item-name">AP Coaching</div>
                <div className="eq-testprep-item-desc">Multiple 5/5 scores across AP CS, Calculus, Micro &amp; Macroeconomics.</div>
              </div>
            </a>

            <a href="https://eduquest.org.in/tmua/" className="eq-testprep-item">
              <div className="eq-testprep-item-icon small">TMUA</div>
              <div>
                <div className="eq-testprep-item-name">TMUA / UCAT / LSAT</div>
                <div className="eq-testprep-item-desc">Specialist coaching for UK and law school admissions routes.</div>
              </div>
            </a>

            <a href="https://eduquest.org.in/ielts/" className="eq-testprep-item">
              <div className="eq-testprep-item-icon small">IELT</div>
              <div>
                <div className="eq-testprep-item-name">IELTS / TOEFL / PTE</div>
                <div className="eq-testprep-item-desc">Language proficiency aligned with your application strategy.</div>
              </div>
            </a>

          </div>

          {/* ── Right: tool cards ── */}
          <div className="eq-testprep-tools">

            {/* Diagnostic */}
            <div className="eq-tool-card">
              <div className="eq-tool-title">🧠 Free AI Diagnostic Test</div>
              <div className="eq-tool-desc">
                Know exactly where you stand before you start. Our AI-based diagnostic gives you a score gap
                analysis, strengths map, and a strategy-based learning path in minutes.
              </div>
              <a href="https://test.eduquest.org.in/" target="_blank" rel="noreferrer" className="eq-tool-btn">
                Take Free Diagnostic Test →
              </a>
            </div>

            {/* Interactive Score Calculators — animated button */}
            <div className="eq-tool-card">
              <div className="eq-tool-title">📊 Interactive Score Calculators</div>
              <div className="eq-tool-desc">
                Instantly estimate, convert, and benchmark your scores for SAT, ACT, AP, TMUA, UCAT, LSAT,
                GRE, GMAT and more.
              </div>
              <a
                href={currentCalc.href}
                target="_blank"
                rel="noreferrer"
                className="eq-tool-btn"
              >
                <span className={`eq-calc-btn-text ${isChanging ? 'fading-out' : 'blinking'}`}>
                  {currentCalc.title}
                </span>
                {' →'}
              </a>
            </div>

            {/* Practice Platform */}
            <div className="eq-tool-card">
              <div className="eq-tool-title">📚 Practice Test Platform</div>
              <div className="eq-tool-desc">
                Access full-length mocks designed to mirror the real exam. Used by 10,000+ students globally.
              </div>
              <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="eq-tool-btn">
                Go to Practice Kiln →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}