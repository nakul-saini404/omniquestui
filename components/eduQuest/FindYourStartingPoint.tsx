'use client';

// ─── SEGMENT CARD DATA (from HTML) ───────────────────────────────────────────
const segmentCards = [
  {
    id: 'early',
    grade: 'Grade 8–10',
    title: 'Build Your Advantage Early',
    desc: "Early clarity compounds into elite admissions positioning. The students who start in Grade 8 arrive at Grade 12 with a narrative that's impossible to replicate.",
    cta: 'Start With the Right Direction →',
    href: 'https://eduquest.org.in/mentoring-services-for-class-6-to-class-8-students/',
    topBar: 'linear-gradient(90deg, #2E3A52, #4A90D9)',
  },
  {
    id: 'late',
    grade: 'Grade 11–12',
    title: 'Reposition Your Profile Now',
    desc: 'At this stage, strategy determines outcome — not effort. We compress years of profile work into targeted, high-impact months before your application deadline.',
    cta: "Fix Your Direction Before It's Late →",
    href: 'https://eduquest.org.in/mentoring-services-for-class-11/',
    topBar: 'linear-gradient(90deg, #B8432C, #E07B5A)',
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function FindYourStartingPoint() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --ink:         #0A0A14;
          --paper:       #FAFAF7;
          --cream:       #F5F0E8;
          --gold:        #C9973A;
          --gold-light:  #E8B84B;
          --slate:       #2E3A52;
          --slate-light: #4A5568;
          --border:      rgba(10,10,20,0.1);
          --serif:       'DM Serif Display', Georgia, serif;
          --sans:        'DM Sans', system-ui, sans-serif;
          --ease:        cubic-bezier(0.4,0,0.2,1);
        }

        /* ── SECTION ── */
        .eq-segment-section {
          background: var(--paper);
          padding: 100px 80px;
          font-family: var(--sans);
        }

        .eq-segment-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .eq-segment-title {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 20px;
        }

        .eq-segment-sub {
          font-size: 1rem;
          color: var(--slate-light);
          max-width: 560px;
          line-height: 1.7;
        }

        /* ── CARDS GRID ── */
        .eq-segment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 60px;
        }

        /* ── SINGLE CARD ── */
        .eq-segment-card {
          border-radius: 20px;
          border: 2px solid var(--border);
          padding: 44px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s var(--ease),
                      transform 0.3s var(--ease),
                      box-shadow 0.3s var(--ease);
          background: #fff;
          text-decoration: none;
          display: block;
        }
        .eq-segment-card:hover {
          border-color: var(--gold);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        /* Coloured top bar */
        .eq-segment-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
        }
        .eq-segment-card--early::before {
          background: linear-gradient(90deg, #2E3A52, #4A90D9);
        }
        .eq-segment-card--late::before {
          background: linear-gradient(90deg, #B8432C, #E07B5A);
        }

        /* Grade pill */
        .eq-segment-grade {
          display: inline-block;
          background: var(--cream);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 4px 14px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--slate);
          margin-bottom: 20px;
        }

        .eq-segment-card-title {
          font-family: var(--serif);
          font-size: 1.6rem;
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .eq-segment-card-desc {
          font-size: 0.88rem;
          color: var(--slate-light);
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .eq-segment-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 2px solid var(--gold);
          padding-bottom: 2px;
          transition: color 0.2s var(--ease);
        }
        .eq-segment-card:hover .eq-segment-cta {
          color: var(--gold);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .eq-segment-section { padding: 60px 24px; }
          .eq-segment-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <section className="eq-segment-section">

        <div className="eq-segment-label">Find Your Starting Point</div>
        <h2 className="eq-segment-title">Ivy League Admissions Strategy India</h2>
        <p className="eq-segment-sub">
          Every student's journey is different. Choose the phase that fits your grade and we'll build the strategy from there.
        </p>

        <div className="eq-segment-grid">
          {segmentCards.map(card => (
            <a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className={`eq-segment-card eq-segment-card--${card.id}`}
            >
              <div className="eq-segment-grade">{card.grade}</div>
              <div className="eq-segment-card-title">{card.title}</div>
              <div className="eq-segment-card-desc">{card.desc}</div>
              <span className="eq-segment-cta">{card.cta}</span>
            </a>
          ))}
        </div>

      </section>
    </>
  );
}