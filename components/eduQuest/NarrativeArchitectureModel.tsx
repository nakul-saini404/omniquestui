'use client';

// ─── METHOD CARD DATA (from HTML) ─────────────────────────────────────────────
const methodCards = [
  {
    num: '01',
    title: 'Academic Excellence',
    desc: 'Precision test preparation and academic positioning that builds scores and signals intellectual capability.',
    tags: ['SAT', 'ACT', 'AP', 'TMUA', 'UCAT'],
  },
  {
    num: '02',
    title: 'Profile Architecture',
    desc: 'Structured development of research, leadership, and real-world impact that makes a profile undeniable.',
    tags: ['Research', 'Leadership', 'Impact'],
  },
  {
    num: '03',
    title: 'Narrative Design',
    desc: 'The story layer: aligning identity, academics, and extracurriculars into a coherent university selection story.',
    tags: ['Identity', 'Story', 'Essays'],
  },
  {
    num: '04',
    title: 'Admission Strategy',
    desc: 'University positioning, targeting, and application execution — deployed with precision for each student.',
    tags: ['Targeting', 'SOP', 'LOR'],
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function NarrativeArchitectureModel() {
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
        .eq-method-section {
          background: var(--ink);
          color: #fff;
          padding: 100px 80px;
          font-family: var(--sans);
        }

        .eq-method-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .eq-method-title {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: #fff;
          margin-bottom: 20px;
        }

        .eq-method-sub {
          font-size: 1rem;
          color: #6b7a94;
          max-width: 560px;
          line-height: 1.7;
        }

        /* ── 4-COLUMN GRID ── */
        .eq-method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 60px;
        }

        /* ── CARD ── */
        .eq-method-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px 24px;
          transition: background 0.3s var(--ease),
                      border-color 0.3s var(--ease),
                      transform 0.3s var(--ease);
        }
        .eq-method-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(201,151,58,0.3);
          transform: translateY(-4px);
        }

        /* Large faint number */
        .eq-method-num {
          font-family: var(--serif);
          font-size: 2.5rem;
          color: rgba(201,151,58,0.25);
          line-height: 1;
          margin-bottom: 16px;
        }

        .eq-method-card-title {
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          margin-bottom: 10px;
        }

        .eq-method-desc {
          font-size: 0.84rem;
          color: #6b7a94;
          line-height: 1.6;
        }

        /* ── TAGS ── */
        .eq-method-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 16px;
        }

        .eq-method-tag {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 3px 8px;
          font-size: 0.7rem;
          color: #9aa4b8;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .eq-method-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .eq-method-section { padding: 60px 24px; }
        }
        @media (max-width: 560px) {
          .eq-method-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <section className="eq-method-section">

        <div className="eq-method-label">The EduQuest Narrative Architecture Model</div>
        <h2 className="eq-method-title">How We Build Selected Students</h2>
        <p className="eq-method-sub">
          The EduQuest 4-Layer Profile System is how we turn any student into a coherent, compelling admissions candidate.
        </p>

        <div className="eq-method-grid">
          {methodCards.map(card => (
            <div key={card.num} className="eq-method-card">
              <div className="eq-method-num">{card.num}</div>
              <div className="eq-method-card-title">{card.title}</div>
              <div className="eq-method-desc">{card.desc}</div>
              <div className="eq-method-tags">
                {card.tags.map(tag => (
                  <span key={tag} className="eq-method-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}