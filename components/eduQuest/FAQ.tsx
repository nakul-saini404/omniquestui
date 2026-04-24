'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'When should students start profile building?',
    a: 'Ideally from Grade 9–10 for the best results. Starting in Grade 9 gives 3–4 years to build a differentiated, compelling profile. Grade 11 is still workable with an intensive program. Grade 12 onwards is usually too late for meaningful profile building — applications become the only focus.',
  },
  {
    q: 'What makes EduQuest different from other consultants?',
    a: 'Most consultants focus on last-minute application polishing. EduQuest focuses on long-term profile building and strategic positioning — building the student who deserves to get in, over 12–18 months. We also limit our intake to 15–20 students per cycle to ensure deep, senior-level involvement.',
  },
  {
    q: 'Do you support SAT/ACT test preparation?',
    a: 'Yes. Test preparation is integrated within the overall admissions strategy. We offer dedicated SAT, ACT, AP, PSAT, TMUA, UCAT, LSAT, IELTS, TOEFL, and PTE coaching — both standalone and as part of the comprehensive admissions program.',
  },
  {
    q: 'Which countries and universities do you cover?',
    a: 'We cover US, UK, Canada, Australia, Singapore, and Europe. Our network spans 2,000+ universities. We specialise in Top 50 global universities — Ivy League, Russell Group, Go8, and U15 universities.',
  },
  {
    q: 'What is the EduQuest Elite Admissions Program?',
    a: 'It is a premium, application-based program for students targeting Top 50 global universities. The program spans 12–18 months and covers profile evaluation, strategic profile building, university selection, essay/SOP execution, interview preparation, scholarship strategy, and visa support. Only 15–20 students are selected per cycle.',
  },
  {
    q: 'How will EduQuest work with my child?',
    a: "Each student is assigned a primary senior counsellor supported by specialist experts for essays, test prep, country strategy, and interview coaching. We believe the student should drive the process, with parents involved in strategic decisions. We use a data-driven approach with regular progress reporting.",
  },
  {
    q: 'What scholarships have your students won?',
    a: 'Our students have collectively been awarded $8M+ in scholarships across US, UK, Canada, and Australian universities. We begin scholarship identification early in the program, matching each student\'s profile to relevant merit and need-based opportunities at their target universities.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <>
    
        <style
        dangerouslySetInnerHTML={{
          __html: `
         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Section ── */
        .faq-section {
          background: #ffffff;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .faq-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .faq-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .faq-tag {
          display: inline-block;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c9a84c; padding: 4px 12px;
          background: rgba(201,168,76,0.1); border-radius: 4px;
          margin-bottom: 12px;
        }
        .faq-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800; line-height: 1.2;
          color: #0a1628; margin-bottom: 0;
          letter-spacing: -0.02em;
        }
        .faq-title em { font-style: normal; color: #c9a84c; }

        /* ── Accordion list ── */
        .faq-list {
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Item ── */
        .faq-item {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-item.faq-open {
          border-color: #c9a84c;
          box-shadow: 0 4px 20px rgba(201,168,76,0.1);
        }

        /* ── Question button ── */
        .faq-question {
          width: 100%;
          padding: 20px 24px;
          background: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #0a1628;
          border: none;
          text-align: left;
          transition: color 0.25s;
          font-family: 'DM Sans', sans-serif;
          line-height: 1.4;
        }
        .faq-question:hover { color: #c9a84c; }
        .faq-item.faq-open .faq-question { color: #c9a84c; }

        /* Chevron */
        .faq-chevron {
          font-size: 1rem;
          color: #6b7280;
          transition: transform 0.3s, color 0.25s;
          flex-shrink: 0;
          line-height: 1;
        }
        .faq-item.faq-open .faq-chevron {
          transform: rotate(180deg);
          color: #c9a84c;
        }

        /* ── Answer ── */
        .faq-answer {
          padding: 0 24px 20px;
          font-size: 0.88rem;
          color: #6b7280;
          line-height: 1.7;
          animation: faq-fade-in 0.2s ease;
        }
        @keyframes faq-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .faq-section { padding: 56px 20px; }
          .faq-question { font-size: 0.88rem; padding: 16px 18px; }
          .faq-answer   { padding: 0 18px 16px; }
        }
          `
        }}
      />
      

      <section className="faq-section" id="faq">
        <div className="faq-inner">

          {/* Header */}
          <div className="faq-header">
            <div className="faq-tag">FAQ</div>
            <h2 className="faq-title">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          {/* Accordion */}
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item${open === i ? ' faq-open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <span className="faq-chevron">▾</span>
                </button>

                {open === i && (
                  <div className="faq-answer">{f.a}</div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}