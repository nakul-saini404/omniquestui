'use client';

const problemItems = [
  {
    icon: '📋',
    title: 'Busy ≠ Competitive',
    sub: "Activity lists don't build narrative. Most students are doing everything — and saying nothing.",
  },
  {
    icon: '🏅',
    title: 'Certificates ≠ Clarity',
    sub: 'Dozens of awards mean nothing without a coherent identity. Admissions readers need a story.',
  },
  {
    icon: '📊',
    title: 'Scores ≠ Selection',
    sub: 'SAT 1550+ students get rejected every year. The score gets you seen. The narrative gets you in.',
  },
];

const insightQuote = '"Universities don\'t reject students. They reject unclear narratives."';
const insightNote =
  'Most students spend years collecting activities instead of building identity. EduQuest works differently — we engineer your admissions story from the ground up, starting as early as Grade 8.';

export default function Problem() {
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

        /* ── PROBLEM SECTION ── */
        .eq-problem {
          background: var(--slate);
          color: #fff;
          padding: 100px 80px;
          font-family: var(--sans);
        }

        .eq-problem-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 12px;
        }

        .eq-problem-title {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: #fff;
          margin-bottom: 20px;
        }

        .eq-problem-sub {
          font-size: 1rem;
          color: #9aa4b8;
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .eq-problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 60px;
          align-items: start;
        }

        /* Problem list */
        .eq-problem-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .eq-problem-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 20px;
        }

        .eq-problem-icon {
          width: 36px;
          height: 36px;
          background: rgba(201,151,58,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .eq-problem-item-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: #fff;
          margin-bottom: 4px;
        }

        .eq-problem-item-sub {
          font-size: 0.85rem;
          color: #7a88a3;
          line-height: 1.6;
        }

        /* Insight card */
        .eq-problem-insight {
          background: rgba(201,151,58,0.1);
          border: 1px solid rgba(201,151,58,0.25);
          border-radius: 16px;
          padding: 36px;
        }

        .eq-problem-insight-quote {
          font-family: var(--serif);
          font-size: 1.5rem;
          color: var(--gold-light);
          line-height: 1.4;
          margin-bottom: 24px;
        }

        .eq-problem-insight-note {
          font-size: 0.85rem;
          color: #9aa4b8;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .eq-problem { padding: 60px 24px; }
          .eq-problem-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}} />

      <section className="eq-problem">
        <div className="eq-problem-label">The Real Problem</div>
        <h2 className="eq-problem-title">Why Most Students Get Rejected Despite Being Good</h2>
        <p className="eq-problem-sub">
          The universities you're targeting see thousands of high-achieving students. What sets apart the ones who get in?
        </p>

        <div className="eq-problem-grid">

          {/* Left — problem list */}
          <div className="eq-problem-list">
            {problemItems.map(item => (
              <div key={item.title} className="eq-problem-item">
                <div className="eq-problem-icon">{item.icon}</div>
                <div>
                  <div className="eq-problem-item-title">{item.title}</div>
                  <div className="eq-problem-item-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — insight card */}
          <div className="eq-problem-insight">
            <div className="eq-problem-insight-quote">{insightQuote}</div>
            <div className="eq-problem-insight-note">{insightNote}</div>
          </div>

        </div>
      </section>
    </>
  );
}