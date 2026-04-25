'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const profiles = [
  {
    univ: 'UToronto', name: 'Rohit', school: 'CSE/ISC · New Delhi',
    admitted: 'Mech. Engineering, University of Toronto',
    story: 'Joined with many interests, no direction. We developed a hyper-specialisation in foldable structures that made him stand out as an engineer.',
    score: 'SAT 1480', scholarship: null, photo: '', youtubeId: '',
  },
  {
    univ: 'NUS', name: 'Kavya', school: 'IB · Mumbai',
    admitted: 'Env. Engineering, NUS Singapore',
    story: 'Interests in environment, art & culture — we connected them through a project revamping a police wasteland into an ecological-cultural center.',
    score: 'IB 42/45', scholarship: '$18,000', photo: '', youtubeId: '',
  },
  {
    univ: 'Brown', name: 'Shalini', school: 'ICSE/IB · Mumbai',
    admitted: 'Mixed Streams, Brown University',
    story: 'No national awards, no SAT score. We wove a compelling narrative from her theatrical and athletic resilience. Accepted at Brown — an Ivy League.',
    score: 'No SAT', scholarship: '$22,000',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Aaisha-Sawlani.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    univ: 'UBC', name: 'Ayush', school: 'CBSE/ISC · Kolkata',
    admitted: 'Business, UBC Sauder',
    story: 'Sub-40% in Grade 11 maths. We built a business profile around a beverage distributor engagement, linked to beach cleanup and polymer research.',
    score: 'SAT 1390', scholarship: '$15,000', photo: '', youtubeId: '',
  },
  {
    univ: 'Harvard', name: 'Priya', school: 'CBSE · Bangalore',
    admitted: 'Computer Science, Harvard University',
    story: 'A coder with no story. We built her identity around accessible tech for the hearing impaired — creating a project that Harvard reviewers remembered.',
    score: 'SAT 1560', scholarship: '$30,000', photo: '', youtubeId: 'dQw4w9WgXcQ',
  },
  {
    univ: 'Oxford', name: 'Arjun', school: 'IB · Hyderabad',
    admitted: 'PPE, University of Oxford',
    story: 'Strong academics, weak narrative. We reframed his grassroots policy internship into a coherent story of civic leadership that Oxford could not ignore.',
    score: 'IB 44/45', scholarship: null, photo: '', youtubeId: '',
  },
];

const UNIV_COLORS: Record<string, { bg: string; text: string }> = {
  Harvard:  { bg: '#A51C30', text: '#fff' },
  Brown:    { bg: '#4E3629', text: '#fff' },
  Oxford:   { bg: '#002147', text: '#fff' },
  NUS:      { bg: '#003D7C', text: '#fff' },
  UBC:      { bg: '#002145', text: '#fff' },
  UToronto: { bg: '#002A5C', text: '#fff' },
  Stanford: { bg: '#8C1515', text: '#fff' },
};
const DEFAULT_COLOR = { bg: '#2E3A52', text: '#C9973A' };

const T = {
  ink: '#0A0A14', cream: '#F5F0E8', gold: '#C9973A',
  slate: '#2E3A52', slateLight: '#4A5568', green: '#1A6B4A',
  border: 'rgba(10,10,20,0.1)', white: '#ffffff',
  serif: '"DM Serif Display", Georgia, serif',
  sans: '"DM Sans", system-ui, sans-serif',
};

// ─── YOUTUBE MODAL ────────────────────────────────────────────────────────────
function YouTubeModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(0,0,0,.92)', display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
      <div style={{ width:'min(860px,95vw)', position:'relative' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position:'absolute', top:-46, right:0, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', width:38, height:38, borderRadius:'50%', fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
        <div style={{ position:'relative', paddingBottom:'56.25%', height:0 }}>
          <iframe style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none', borderRadius:12 }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allowFullScreen allow="autoplay; encrypted-media" />
        </div>
      </div>
    </div>
  );
}

// ─── PROFILE CARD ─────────────────────────────────────────────────────────────
function ProfileCard({ p, onWatch }: { p: typeof profiles[0]; onWatch: (id: string) => void }) {
  const uc = UNIV_COLORS[p.univ] ?? DEFAULT_COLOR;
  return (
    <div className="pf-card">
      {/* Univ badge */}
      <div className="pf-univ" style={{ background: uc.bg, color: uc.text }}>{p.univ}</div>

      {/* Avatar + name */}
      <div className="pf-who">
        {p.photo
          ? <Image src={p.photo} alt={p.name} width={44} height={44} className="pf-avatar-img" />
          : <div className="pf-avatar-init">{p.name[0]}</div>
        }
        <div>
          <div className="pf-name">{p.name}</div>
          <div className="pf-school">{p.school}</div>
        </div>
      </div>

      {/* Admitted */}
      <div className="pf-admitted">🎓 {p.admitted}</div>

      {/* Score / scholarship badges */}
      <div className="pf-badges">
        <span className="pf-badge pf-score">{p.score}</span>
        {p.scholarship && <span className="pf-badge pf-schol">💰 {p.scholarship}</span>}
      </div>

      {/* Story */}
      <p className="pf-story">{p.story}</p>

      {/* Watch button */}
      {p.youtubeId && (
        <button className="pf-watch" onClick={() => onWatch(p.youtubeId)}>
          <span className="pf-play" /> Watch Story
        </button>
      )}
    </div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  const [modal, setModal] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);           // active card index (left-most visible)
  const [visible, setVisible] = useState(3);   // cards visible at once
  const touchStart = useRef(0);

  // How many cards are visible depends on viewport
  useEffect(() => {
    const upd = () => setVisible(window.innerWidth < 640 ? 1 : window.innerWidth < 960 ? 2 : 3);
    upd();
    window.addEventListener('resize', upd);
    return () => window.removeEventListener('resize', upd);
  }, []);

  const maxIdx = profiles.length - visible;   // idx can go from 0 … maxIdx

  const goTo = useCallback((next: number) => {
    setIdx(Math.max(0, Math.min(next, maxIdx)));
  }, [maxIdx]);

  // Auto-advance — loop back when reaching the end
  useEffect(() => {
    const t = setInterval(() => {
      setIdx(prev => (prev >= maxIdx ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(t);
  }, [maxIdx]);

  // translateX = idx * (100% / visible cards)
  // Each card is (100/visible)% wide; moving by 1 card = (100/visible)%
  const translatePct = idx * (100 / visible);

  // Dot count = maxIdx + 1 positions
  const dotCount = maxIdx + 1;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .pf-section {
          background: ${T.cream};
          padding: clamp(60px,8vw,100px) clamp(20px,5vw,80px);
          font-family: ${T.sans};
        }

        /* Header */
        .pf-eyebrow { display:inline-block; font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:${T.gold}; border:1px solid rgba(201,151,58,.35); background:rgba(201,151,58,.08); padding:5px 14px; border-radius:100px; margin-bottom:12px; }
        .pf-title { font-family:${T.serif}; font-size:clamp(1.8rem,3.5vw,2.8rem); font-weight:400; color:${T.ink}; line-height:1.2; margin:0 0 10px; }
        .pf-title em { font-style:italic; color:${T.gold}; }
        .pf-subtitle { font-size:.97rem; color:${T.slateLight}; line-height:1.7; margin:0 0 36px; max-width:520px; }

        /* ── Carousel ── */
        .pf-clip { overflow:hidden; }   /* clips the moving track */

        /* Track holds ALL cards in a single row */
        .pf-track {
          display: flex;
          transition: transform .42s cubic-bezier(.4,0,.2,1);
          will-change: transform;
          align-items: stretch;
        }

        /* Each card takes exactly (100/visible)% of the clip width */
        .pf-card-wrap {
          flex-shrink: 0;
          padding: 0 10px;
        }

        /* ── Profile card ── */
        .pf-card {
          background: ${T.white};
          border: 1px solid ${T.border};
          border-radius: 16px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: box-shadow .2s, transform .2s;
        }
        .pf-card:hover { box-shadow:0 8px 32px rgba(0,0,0,.09); transform:translateY(-3px); }

        .pf-univ { width:46px; height:46px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:.63rem; font-weight:800; letter-spacing:.05em; margin-bottom:14px; flex-shrink:0; }

        .pf-who { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
        .pf-avatar-img { width:42px; height:42px; border-radius:50%; object-fit:cover; object-position:top; border:2px solid ${T.border}; flex-shrink:0; }
        .pf-avatar-init { width:42px; height:42px; border-radius:50%; flex-shrink:0; background:linear-gradient(135deg,${T.slate} 0%,#1a2744 100%); display:flex; align-items:center; justify-content:center; font-family:${T.serif}; font-size:1.1rem; font-weight:700; color:${T.gold}; border:2px solid rgba(201,151,58,.25); }
        .pf-name { font-weight:700; font-size:.96rem; color:${T.ink}; line-height:1.2; }
        .pf-school { font-size:.71rem; color:${T.slateLight}; margin-top:2px; }

        .pf-admitted { font-size:.79rem; color:${T.green}; font-weight:600; margin-bottom:10px; line-height:1.4; }

        .pf-badges { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:12px; }
        .pf-badge { font-size:.61rem; font-weight:700; padding:3px 8px; border-radius:5px; letter-spacing:.03em; }
        .pf-score { background:rgba(201,151,58,.1); color:${T.gold}; border:1px solid rgba(201,151,58,.25); }
        .pf-schol { background:rgba(26,107,74,.1); color:${T.green}; border:1px solid rgba(26,107,74,.2); }

        .pf-story { font-size:.81rem; color:${T.slateLight}; line-height:1.65; flex:1; margin:0 0 14px; }

        .pf-watch { display:inline-flex; align-items:center; gap:8px; background:rgba(239,68,68,.08); border:1px solid rgba(239,68,68,.22); color:#dc2626; padding:7px 13px; border-radius:8px; font-size:.71rem; font-weight:600; cursor:pointer; font-family:${T.sans}; transition:all .2s; margin-top:auto; width:fit-content; }
        .pf-watch:hover { background:rgba(239,68,68,.16); color:#b91c1c; }
        .pf-play { width:18px; height:18px; border-radius:50%; background:#ef4444; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
        .pf-play::after { content:''; border-style:solid; border-width:4px 0 4px 7px; border-color:transparent transparent transparent #fff; margin-left:2px; }

        /* ── Controls ── */
        .pf-controls { display:flex; align-items:center; justify-content:space-between; margin-top:20px; gap:12px; flex-wrap:wrap; }
        .pf-dots { display:flex; gap:7px; align-items:center; }
        .pf-dot { width:8px; height:8px; border-radius:50%; background:rgba(10,10,20,.15); border:none; cursor:pointer; transition:all .25s; padding:0; }
        .pf-dot.on { background:${T.gold}; width:24px; border-radius:4px; }
        .pf-dot:hover:not(.on) { background:rgba(10,10,20,.3); }
        .pf-counter { font-size:.75rem; color:${T.slateLight}; }
        .pf-arrows { display:flex; gap:10px; }
        .pf-arr { width:42px; height:42px; border-radius:50%; background:${T.white}; border:1px solid ${T.border}; color:${T.slate}; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,.06); }
        .pf-arr:hover { background:${T.slate}; color:${T.white}; border-color:${T.slate}; }
        .pf-arr:disabled { opacity:.3; cursor:default; }
        .pf-arr:active:not(:disabled) { transform:scale(.92); }
      `}</style>

      {modal && <YouTubeModal videoId={modal} onClose={() => setModal(null)} />}

      <section className="pf-section" id="profiles">
        <div className="pf-eyebrow">2020 Cohort Profiles</div>
        <h2 className="pf-title">A Few Profiles <em>We've Built</em></h2>
        <p className="pf-subtitle">Every student has a unique story. We find it, shape it, and make it impossible to ignore.</p>

        {/* Carousel */}
        <div
          className="pf-clip"
          onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            const d = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(d) > 40) goTo(d > 0 ? idx + 1 : idx - 1);
          }}
        >
          <div
            className="pf-track"
            style={{ transform: `translateX(-${translatePct}%)` }}
          >
            {profiles.map((p) => (
              <div
                key={p.name}
                className="pf-card-wrap"
                style={{ width: `${100 / visible}%` }}
              >
                <ProfileCard p={p} onWatch={id => setModal(id)} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="pf-controls">
          <div className="pf-dots">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button key={i} className={`pf-dot${i === idx ? ' on' : ''}`} onClick={() => goTo(i)} aria-label={`Card ${i + 1}`} />
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span className="pf-counter">{idx + 1} – {Math.min(idx + visible, profiles.length)} / {profiles.length}</span>
            <div className="pf-arrows">
              <button className="pf-arr" onClick={() => goTo(idx - 1)} disabled={idx === 0} aria-label="Previous">←</button>
              <button className="pf-arr" onClick={() => goTo(idx + 1)} disabled={idx >= maxIdx} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProfilesSection() {
  return <TestimonialsSection />;
}