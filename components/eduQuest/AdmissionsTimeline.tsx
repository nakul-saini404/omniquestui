'use client';
import { useState } from 'react';

// ─── PHASE CARD DATA (from HTML) ──────────────────────────────────────────────
const phases = [
  {
    id: 'foundation',
    grade: 'Grade 8–10',
    title: 'Foundation Phase',
    goal: 'Goal: Build Direction + Advantage Early',
    items: [
      'Identify strengths & positioning path',
      'Start structured profile building',
      'Build early academic discipline',
      'Create long-term narrative direction',
    ],
    outcome: 'A student with clear advantage before competition begins',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2E3A52 100%)',
    accentColor: '#60a5fa',
    timelineTabIds: ['10', '11'],
  },
  {
    id: 'execution',
    grade: 'Grade 11–12',
    title: 'Execution Phase',
    goal: 'Goal: Convert Profile into Admission Outcome',
    items: [
      'Profile refinement + gap correction',
      'University targeting strategy',
      'Application narrative engineering',
      'Essay & SOP architecture',
    ],
    outcome: 'A student ready for top-tier admissions conversion',
    gradient: 'linear-gradient(135deg, #7B2D1E 0%, #B8432C 100%)',
    accentColor: '#fb923c',
    timelineTabIds: ['11', '12'],
  },
];

// ─── TIMELINE DATA ────────────────────────────────────────────────────────────
const timelineTabs: Record<string, {
  label: string;
  note: string | null;
  slogan: string | null;
  steps: { month: string; milestone: boolean; title: string; desc: string | null }[];
}> = {
  '10': {
    label: 'Class 10 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in March / May / August / October / December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOURSELF — YOU'RE NOT SO LATE",
    steps: [
      { month: 'April',              milestone: true,  title: '10th Standard Start 🎉',              desc: null },
      { month: 'May',                milestone: false, title: 'Attempt AP Exam',                      desc: null },
      { month: 'June',               milestone: false, title: 'Prepare for SAT/ACT',                  desc: null },
      { month: 'July',               milestone: false, title: 'Go to Summer School',                  desc: null },
      { month: 'August',             milestone: false, title: 'Continue SAT/ACT Prep',                desc: null },
      { month: 'September',          milestone: false, title: 'Concrete Steps on Profile Building',   desc: null },
      { month: 'October / December', milestone: true,  title: 'SAT/ACT Attempt 1 (take this)',        desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School',      desc: null },
    ],
  },
  '11': {
    label: 'Class 11 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in March / May / August / October / December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOURSELF — YOU'RE NOT SO LATE",
    steps: [
      { month: 'April',              milestone: true,  title: '11TH STANDARD',                       desc: null },
      { month: 'June – July',        milestone: false, title: 'Summer School',                        desc: null },
      { month: 'August',             milestone: true,  title: 'SAT/ACT Attempt 1',                   desc: 'Begin preparing for the AP exam in August for the exam in May.' },
      { month: 'September',          milestone: false, title: 'College Research & Scholarship Tips',  desc: 'Max 12 colleges — 5–6 Dream, 6–7 Target, 3–4 Safe.' },
      { month: 'October',            milestone: true,  title: 'SAT/ACT Attempt 2',                   desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs',   desc: null },
    ],
  },
  '12': {
    label: 'Class 12 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in March / May / August / October / December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOURSELF — YOU'RE NOT SO LATE",
    steps: [
      { month: 'January – February',  milestone: false, title: 'Research for Pre-college Programs',  desc: null },
      { month: 'April',               milestone: true,  title: '12th Standard',                      desc: null },
      { month: 'June – July',         milestone: false, title: 'Pre-college Program',                desc: null },
      { month: 'August',              milestone: true,  title: 'Online Applications Open',           desc: 'Common App / Coalition App / Quest Bridge' },
      { month: 'September / October', milestone: false, title: 'College Essay & Documents',          desc: 'Collect scores, LOR. Prepare college essay. Fill CSS profile for US scholarships.' },
      { month: 'November',            milestone: false, title: 'Early Action Deadlines',             desc: 'November 1st – 30th, varies by college.' },
      { month: 'December',            milestone: false, title: 'Regular Decision & Board Exams',     desc: 'Submit all applications. Rolling admissions vary. 12th Board Exams!' },
      { month: 'April',               milestone: false, title: 'Give TOEFL / IELTS / PTE',          desc: null },
      { month: 'May – July',          milestone: false, title: 'Acceptance · Fee · VISA',            desc: 'Pre-departure orientations' },
      { month: 'August',              milestone: true,  title: 'Bon Voyage!! Congratulations 🎉',    desc: null },
    ],
  },
};

const PHASE_COLORS = [
  '#c9a84c','#3b82f6','#10b981','#8b5cf6','#f59e0b',
  '#06b6d4','#f97316','#ec4899','#22c55e','#ef4444',
];

// ─── TIMELINE TRACK (two-column step grid) ────────────────────────────────────
function TimelineTrack({ tabIds, accentColor }: { tabIds: string[]; accentColor: string }) {
  const allSteps  = tabIds.flatMap(id => timelineTabs[id]?.steps ?? []);
  const allNote   = tabIds.map(id => timelineTabs[id]?.note).filter(Boolean)[0] ?? null;
  const allSlogan = tabIds.map(id => timelineTabs[id]?.slogan).filter(Boolean)[0] ?? null;

  let milestoneIdx = 0;

  return (
    <div className="tl-track-container">
      <div className="tl-steps-grid">
        {allSteps.map((step, i) => {
          const colorIdx = step.milestone ? milestoneIdx++ : milestoneIdx;
          return (
            <div key={i} className={`tl-phase${step.milestone ? ' tl-phase--milestone' : ''}`}>
              <div
                className={`tl-node${step.milestone ? ' tl-node--milestone' : ''}`}
                style={{ background: PHASE_COLORS[colorIdx % PHASE_COLORS.length] }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className={`tl-step-card${step.milestone ? ' tl-step-card--milestone' : ''}`}
                style={step.milestone ? { borderColor: accentColor } : {}}
              >
                <div className="tl-step-period" style={{ color: accentColor }}>{step.month}</div>
                {step.milestone && (
                  <div
                    className="tl-milestone-badge"
                    style={{ color: accentColor, borderColor: `${accentColor}55`, background: `${accentColor}18` }}
                  >
                    <svg width="6" height="6" viewBox="0 0 6 6" fill={accentColor}><circle cx="3" cy="3" r="3"/></svg>
                    Milestone
                  </div>
                )}
                <div className="tl-step-title">{step.title}</div>
                {step.desc && <div className="tl-step-desc">{step.desc}</div>}
              </div>
            </div>
          );
        })}
      </div>

      {(allNote || allSlogan) && (
        <div className="tl-footer">
          {allNote   && <div className="tl-footer-note">📌 {allNote}</div>}
          {allSlogan && (
            <div className="tl-footer-slogan" style={{ background: accentColor }}>
              ✨ {allSlogan}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function AdmissionsTimeline() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const activePhase = phases.find(p => p.id === expanded) ?? null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

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
          --mono:        'DM Mono', monospace;
          --ease:        cubic-bezier(0.4,0,0.2,1);
        }

        /* ── SECTION ── */
        .eq-timeline-section {
          background: var(--cream);
          padding: 100px 80px;
          font-family: var(--sans);
        }
        .eq-timeline-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }
        .eq-timeline-title {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 20px;
        }
        .eq-timeline-sub {
          font-size: 1rem;
          color: var(--slate-light);
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 60px;
        }

        /* ── GRID — always 2 cols so panel can span both ── */
        .eq-phase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        /* ── PHASE CARD ── */
        .eq-phase-card {
          border-radius: 20px;
          padding: 40px;
          color: #fff;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
          outline: none;
          border: none;
          text-align: left;
          width: 100%;
        }
        .eq-phase-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.2);
        }
        .eq-phase-card:focus-visible {
          outline: 3px solid rgba(255,255,255,0.6);
          outline-offset: 3px;
        }
        .eq-phase-card::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        .eq-card-grade {
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          opacity: 0.6; margin-bottom: 8px; font-family: var(--mono);
        }
        .eq-card-title {
          font-family: var(--serif); font-size: 1.6rem;
          line-height: 1.2; margin-bottom: 8px;
        }
        .eq-card-goal {
          font-size: 0.85rem; opacity: 0.7;
          margin-bottom: 24px; font-weight: 500;
        }
        .eq-card-items {
          display: flex; flex-direction: column;
          gap: 10px; margin-bottom: 28px;
        }
        .eq-card-item {
          display: flex; align-items: center;
          gap: 10px; font-size: 0.88rem; opacity: 0.9;
        }
        .eq-card-item::before {
          content: '→'; font-size: 0.9rem;
          opacity: 0.5; flex-shrink: 0;
        }
        .eq-card-outcome {
          background: rgba(255,255,255,0.12);
          border-radius: 10px; padding: 14px 18px;
          font-size: 0.85rem; font-weight: 600; line-height: 1.5;
        }
        .eq-card-outcome strong {
          display: block; font-size: 0.72rem;
          letter-spacing: 0.08em; text-transform: uppercase;
          opacity: 0.6; margin-bottom: 4px; font-weight: 500;
        }
        .eq-card-hint {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 22px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 100px; padding: 5px 14px;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          opacity: 0.85; transition: opacity 0.2s;
        }
        .eq-phase-card:hover .eq-card-hint { opacity: 1; }

        /* ── EXPANDED PANEL — spans BOTH columns ── */
        .eq-timeline-panel {
          grid-column: 1 / -1;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 64px rgba(0,0,0,0.2);
          animation: eqPanelIn 0.35s var(--ease) both;
        }
        @keyframes eqPanelIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Panel header */
        .eq-panel-header {
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
          padding: 24px 32px;
          background: rgba(0,0,0,0.22);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .eq-panel-title {
          font-family: var(--serif); font-size: 1.5rem;
          font-weight: 700; color: #fff; margin-bottom: 3px;
        }
        .eq-panel-sub {
          font-size: 0.75rem; color: rgba(255,255,255,0.45);
          font-family: var(--mono);
        }
        .eq-close-btn {
          display: flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.22);
          color: rgba(255,255,255,0.85);
          padding: 9px 22px; border-radius: 8px;
          font-size: 0.78rem; font-weight: 600;
          cursor: pointer; font-family: var(--sans);
          letter-spacing: 0.04em;
          transition: all 0.2s var(--ease);
          flex-shrink: 0; white-space: nowrap;
        }
        .eq-close-btn:hover {
          background: rgba(255,255,255,0.2);
          color: #fff; border-color: rgba(255,255,255,0.4);
        }

        /* ── TIMELINE TRACK — 2-col step grid ── */
        .tl-track-container { padding: 28px 32px 0; }

        .tl-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 32px;
        }

        .tl-phase {
          display: flex; align-items: flex-start;
          gap: 12px; position: relative; z-index: 1;
        }

        .tl-node {
          width: 36px; height: 36px; min-width: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.52rem; font-weight: 700; color: #fff;
          border: 2px solid rgba(255,255,255,0.25);
          font-family: var(--mono); z-index: 2;
          margin-top: 2px; flex-shrink: 0;
        }
        .tl-node--milestone {
          width: 40px; height: 40px; min-width: 40px; margin-top: 0;
          border: 2.5px solid rgba(255,255,255,0.5);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.2);
        }

        .tl-step-card {
          flex: 1; min-width: 0;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 11px 16px;
          transition: background 0.2s, transform 0.2s; color: #fff;
        }
        .tl-step-card:hover {
          background: rgba(255,255,255,0.11);
          transform: translateX(3px);
        }
        .tl-step-card--milestone {
          border-width: 1.5px;
          background: rgba(255,255,255,0.1);
        }
        .tl-step-period {
          font-size: 0.56rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 3px; font-family: var(--mono);
        }
        .tl-milestone-badge {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.56rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 2px 7px; border-radius: 4px;
          border: 1px solid; margin-bottom: 3px;
        }
        .tl-step-title {
          font-size: 0.82rem; font-weight: 700;
          color: #fff; line-height: 1.3;
        }
        .tl-step-desc {
          font-size: 0.72rem; color: rgba(255,255,255,0.52);
          line-height: 1.55; margin-top: 4px;
        }

        /* Footer */
        .tl-footer {
          display: flex; flex-direction: column;
          gap: 10px; padding: 20px 0 28px;
        }
        .tl-footer-note {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px; padding: 11px 16px;
          font-size: 0.78rem; color: rgba(255,255,255,0.6); line-height: 1.6;
        }
        .tl-footer-slogan {
          border-radius: 8px; padding: 12px 18px;
          text-align: center; font-size: 0.72rem;
          font-weight: 700; color: var(--ink);
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .eq-timeline-section { padding: 60px 24px; }
          .eq-phase-grid { grid-template-columns: 1fr; }
          .eq-timeline-panel { grid-column: 1 / -1; }
          .tl-steps-grid { grid-template-columns: 1fr; }
          .tl-track-container { padding: 20px 20px 0; }
          .eq-panel-header { padding: 18px 20px; }
        }
      `}} />

      <section className="eq-timeline-section">

        <div className="eq-timeline-label">Admissions Architecture Timeline</div>
        <h2 className="eq-timeline-title">The 8th–12th Grade Admissions Architecture Timeline</h2>
        <p className="eq-timeline-sub">
          Two distinct phases. One structured outcome. We map your entire journey before the journey begins.
        </p>

        <div className="eq-phase-grid">

          {expanded ? (
            /* ─── EXPANDED: single panel spanning both columns ─── */
            <div
              className="eq-timeline-panel"
              style={{ background: activePhase!.gradient }}
            >
              <div className="eq-panel-header">
                <div>
                  <div className="eq-panel-title">
                    {activePhase!.title} — {activePhase!.grade}
                  </div>
                  <div className="eq-panel-sub">{activePhase!.goal}</div>
                </div>
                <button className="eq-close-btn" onClick={() => setExpanded(null)}>
                  ✕ Close
                </button>
              </div>

              <TimelineTrack
                tabIds={activePhase!.timelineTabIds}
                accentColor={activePhase!.accentColor}
              />
            </div>

          ) : (
            /* ─── DEFAULT: both cards side by side ─── */
            <>
              {phases.map(phase => (
                <button
                  key={phase.id}
                  className="eq-phase-card"
                  style={{ background: phase.gradient }}
                  onClick={() => setExpanded(phase.id)}
                  aria-expanded={false}
                >
                  <div className="eq-card-grade">{phase.grade}</div>
                  <div className="eq-card-title">{phase.title}</div>
                  <div className="eq-card-goal">{phase.goal}</div>

                  <div className="eq-card-items">
                    {phase.items.map(item => (
                      <div key={item} className="eq-card-item">{item}</div>
                    ))}
                  </div>

                  <div className="eq-card-outcome">
                    <strong>Outcome</strong>
                    {phase.outcome}
                  </div>

                  <div className="eq-card-hint">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                    View Timeline
                  </div>
                </button>
              ))}
            </>
          )}

        </div>
      </section>
    </>
  );
}