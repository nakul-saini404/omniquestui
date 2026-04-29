'use client';

import { useEffect, useRef, useState } from 'react';

const exams = [
  {
    icon: 'SAT',
    name: 'Digital SAT Coaching',
    desc: 'Highest SAT scores: 1590–1600. AI-powered diagnostics + score gap analysis.',
    href: 'https://eduquest.org.in/sat/',
  },
  {
    icon: 'ACT',
    name: 'ACT Coaching',
    desc: 'Perfect 36 achieved. Online live, hybrid, and classroom modes available.',
    href: 'https://eduquest.org.in/act/',
  },
  {
    icon: 'AP',
    name: 'AP Coaching',
    desc: 'Multiple 5/5 scores across AP CS, Calculus, Micro & Macroeconomics.',
    href: 'https://eduquest.org.in/ap-coaching/',
  },
  {
    icon: 'TMUA',
    name: 'TMUA / UCAT / LSAT',
    desc: 'Specialist coaching for UK and law school admissions routes.',
    href: 'https://eduquest.org.in/tmua/',
  },
  {
    icon: 'IELT',
    name: 'IELTS / TOEFL / PTE',
    desc: 'Language proficiency coaching aligned with your application strategy.',
    href: 'https://eduquest.org.in/ielts/',
  },
];

const calcs = [
  { title: 'SAT Score Calculator',  href: 'https://test.eduquest.org.in/sat-score-calculator/' },
  { title: 'ACT Score Calculator',  href: 'https://test.eduquest.org.in/act-score-calculator/' },
  { title: 'AP Score Calculator',   href: 'https://test.eduquest.org.in/ap-score-calculator/' },
  { title: 'TMUA Score Calculator', href: 'https://test.eduquest.org.in/tmua-score-calculator/' },
  { title: 'SCAT Score Estimator', href: 'https://test.eduquest.org.in/scat-score-calculator/' },
  { title: 'PSAT Score Estimator', href: 'https://test.eduquest.org.in/psat-score-calculator/' },
  { title: 'UCAT Score Estimator', href: 'https://test.eduquest.org.in/ucat-score-calculator/' },
  { title: 'ESAT Score Estimator', href: 'https://test.eduquest.org.in/esat-score-calculator/' },
  { title: 'LSAT Score Estimator', href: 'https://test.eduquest.org.in/lsat-score-calculator/' },
  { title: 'LNAT Score Estimator', href: 'https://test.eduquest.org.in/lnat-score-calculator/' },
  { title: 'GMAT Score Estimator', href: 'https://test.eduquest.org.in/gmat-score-calculator/' },
  { title: 'GRE Score Estimator', href: 'https://test.eduquest.org.in/gre-score-calculator/' },
  { title: 'CAT Score Estimator', href: 'https://test.eduquest.org.in/cat-score-calculator/' },
  { title: 'MCAT Score Estimator', href: 'https://test.eduquest.org.in/mcat-score-calculator/' },
];

export default function TestPrep() {
  const [examIndex, setExamIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setExamIndex((prev) => (prev + 1) % exams.length);
        setIsChanging(false);
      }, 350);
    }, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const currentExam = exams[examIndex];
  const currentCalc = calcs[examIndex % calcs.length];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

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
            }

            /* ===== TEST PREP SECTION ===== */
            .tp {
              background: var(--cream);
              padding: 64px 48px;
              font-family: var(--sans);
              border-radius: 16px;
            }

            .tp-top {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 48px;
              align-items: center;
              margin-bottom: 48px;
            }

            .tp-label {
              font-size: 0.7rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: var(--gold);
              margin-bottom: 10px;
            }

            .tp-title {
              font-family: var(--serif);
              font-size: clamp(1.5rem, 2.5vw, 2.2rem);
              line-height: 1.22;
              color: var(--ink);
            }

            .tp-title em {
              font-style: italic;
              color: var(--gold);
            }

            /* ── Animated Exam Card ── */
            .exam-card {
              background: #fff;
              border: 1px solid var(--border);
              border-radius: 16px;
              padding: 28px 24px;
              position: relative;
              overflow: hidden;
              min-height: 148px;
              display: flex;
              align-items: center;
              gap: 20px;
              box-shadow: 0 2px 16px rgba(0,0,0,0.05);
            }

            .exam-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, var(--gold), var(--gold-light));
              border-radius: 16px 16px 0 0;
            }

            .exam-icon {
              width: 60px;
              height: 60px;
              background: var(--slate);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--gold);
              font-weight: 800;
              font-size: 0.85rem;
              flex-shrink: 0;
              font-family: var(--sans);
              letter-spacing: 0.02em;
              transition: all 0.35s ease;
            }

            .exam-content { flex: 1; }

            .exam-name {
              font-weight: 700;
              font-size: 1.05rem;
              color: var(--ink);
              margin-bottom: 6px;
              transition: all 0.35s ease;
            }

            .exam-desc {
              font-size: 0.82rem;
              color: var(--slate-light);
              line-height: 1.6;
              transition: all 0.35s ease;
            }

            .exam-dots {
              position: absolute;
              bottom: 14px;
              right: 18px;
              display: flex;
              gap: 5px;
            }

            .exam-dot {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: var(--border);
              transition: background 0.3s;
            }

            .exam-dot.active { background: var(--gold); }

            /* Fade out / fade in states */
            .exam-card.fading .exam-icon,
            .exam-card.fading .exam-name,
            .exam-card.fading .exam-desc {
              opacity: 0;
              transform: translateY(-6px);
            }

            .exam-card.entering .exam-icon,
            .exam-card.entering .exam-name,
            .exam-card.entering .exam-desc {
              opacity: 0;
              transform: translateY(8px);
            }

            /* ── Tool Cards Row ── */
            .tp-tools {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 18px;
            }

            .tool-card {
              background: #fff;
              border: 1px solid var(--border);
              border-radius: 14px;
              padding: 24px;
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            .tool-icon { font-size: 1.5rem; line-height: 1; }

            .tool-title {
              font-weight: 700;
              font-size: 0.92rem;
              color: var(--ink);
            }

            .tool-desc {
              font-size: 0.78rem;
              color: var(--slate-light);
              line-height: 1.6;
              flex: 1;
            }

            .tool-btn {
              display: inline-flex;
              align-items: center;
              gap: 5px;
              background: var(--slate);
              color: #fff;
              padding: 9px 16px;
              border-radius: 8px;
              font-size: 0.78rem;
              font-weight: 600;
              text-decoration: none;
              transition: background 0.2s;
              font-family: var(--sans);
              border: none;
              cursor: pointer;
              width: fit-content;
            }

            .tool-btn:hover { background: var(--ink); }

            /* ── Animated calc name ── */
            .calc-name {
              font-family: 'DM Serif Display', serif;
              display: inline-block;
              transition: opacity 0.35s, transform 0.35s;
            }

            .calc-name.fade {
              opacity: 0;
              transform: translateY(-4px);
            }

            /* ── Responsive ── */
            @media (max-width: 900px) {
              .tp { padding: 48px 28px; }
              .tp-top { grid-template-columns: 1fr; gap: 28px; }
              .tp-tools { grid-template-columns: 1fr; }
            }

            @media (max-width: 600px) {
              .tp { padding: 36px 16px; }
              .tp-tools { grid-template-columns: 1fr; }
            }
          `,
        }}
      />

      <div className="tp">
        {/* ── Top: heading + animated exam card ── */}
        <div className="tp-top">
          <div>
            <div className="tp-label">Precision Test Preparation System</div>
            <h2 className="tp-title">
              We don't just prepare you for tests.<br />
              We use tests as a <em>strategic lever</em> in your overall admissions architecture.
            </h2>
          </div>

          <div className={`exam-card ${isChanging ? 'fading' : ''}`}>
            <div className="exam-icon">{currentExam.icon}</div>
            <div className="exam-content">
              <div className="exam-name">{currentExam.name}</div>
              <div className="exam-desc">{currentExam.desc}</div>
            </div>
            <div className="exam-dots">
              {exams.map((_, i) => (
                <div key={i} className={`exam-dot${i === examIndex ? ' active' : ''}`} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Tool Cards Row ── */}
        <div className="tp-tools">

          {/* Free AI Diagnostic */}
          <div className="tool-card">
            <div className="tool-icon">🧠</div>
            <div className="tool-title">Free AI Diagnostic Test</div>
            <div className="tool-desc">
              Know exactly where you stand. Our AI diagnostic gives you a score gap analysis,
              strengths map, and strategy-based learning path in minutes.
            </div>
            <a href="https://test.eduquest.org.in/" target="_blank" rel="noreferrer" className="tool-btn">
              Take Free Diagnostic →
            </a>
          </div>

          {/* Interactive Score Calculators — animated button */}
          <div className="tool-card">
            <div className="tool-icon">📊</div>
            <div className="tool-title">Interactive Score Calculators</div>
            <div className="tool-desc">
              Estimate, convert, and benchmark your scores for SAT, ACT, AP, TMUA, UCAT,
              LSAT, GRE, GMAT and more.
            </div>
            <a href={currentCalc.href} target="_blank" rel="noreferrer" className="tool-btn">
              <span className={`calc-name${isChanging ? ' fade' : ''}`}>
                {currentCalc.title}
              </span>
              {' →'}
            </a>
          </div>

          {/* Practice Test Platform */}
          <div className="tool-card">
            <div className="tool-icon">📚</div>
            <div className="tool-title">Practice Test Platform</div>
            <div className="tool-desc">
              Full-length mocks designed to mirror the real exam. Used by 10,000+ students
              globally to track progress.
            </div>
            <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="tool-btn">
              Go to Practice Kiln →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}