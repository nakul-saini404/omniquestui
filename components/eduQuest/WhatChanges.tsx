'use client';

const beforeItems = [
  'Random, disconnected activities',
  'No coherent narrative',
  'Weak positioning against peers',
  'Unclear university targeting',
  'Generic essays with no identity',
];

const afterItems = [
  'Structured, strategic identity',
  'Clear, compelling admissions narrative',
  'Differentiated positioning',
  'Precision university targeting',
  'Essays that win Ivy League readers',
];

const gradeJourney = [
  { grade: 'Grade 8',  wrong: 'Join random clubs, MUN, Olympiads "for the profile"',       right: 'Explore freely — discover what genuinely excites you',          insight: 'Discovering raw signals of identity' },
  { grade: 'Grade 9',  wrong: 'Continue multiple activities to "show consistency"',          right: 'Notice patterns — what do you enjoy AND perform well in?',      insight: 'Interests start becoming intentional' },
  { grade: 'Grade 10', wrong: 'Add certifications and resume lines',                         right: 'Build skills + small projects in 1–2 directions',              insight: 'Profile shifts: participation → capability' },
  { grade: 'Grade 11', wrong: 'Stack achievements and internships for apps',                 right: 'Go deep — solve a real problem, build something original',      insight: 'Profile becomes distinct and differentiated' },
  { grade: 'Grade 12', wrong: 'Compile everything into a resume',                            right: 'Craft a clear narrative: Why you, why this field, what impact', insight: 'Profile becomes a story universities remember' },
];

const mindshiftRows = [
  { bad: '"What should I do next?"', good: '"Who am I becoming?"' },
  { bad: '"How many activities?"',   good: '"What story is forming?"' },
  { bad: '"What do colleges want?"', good: '"What do I genuinely care about?"' },
];

const T = {
  ink: '#0A0A14', paper: '#FAFAF7', cream: '#F5F0E8',
  gold: '#C9973A', goldLight: '#E8B84B',
  slate: '#2E3A52', slateLight: '#4A5568',
  rust: '#B8432C', green: '#1A6B4A',
  greenBg: '#D1FAE5', redBg: '#FEE2E2',
  border: 'rgba(10,10,20,0.1)', white: '#ffffff',
  serif: '"DM Serif Display", Georgia, serif',
  sans:  '"DM Sans", system-ui, sans-serif',
};

const card = {
  background: T.white, border: `1px solid ${T.border}`,
  borderRadius: '14px', overflow: 'hidden' as const,
  boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
};

const pill = (color: string, bg: string) => ({
  display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
  letterSpacing: '0.12em', textTransform: 'uppercase' as const,
  color, border: `1px solid ${color}33`, background: bg,
  padding: '5px 14px', borderRadius: '100px',
  marginBottom: '12px', fontFamily: T.sans,
});

export default function WhatChanges() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .eq-ti { display:flex; align-items:flex-start; gap:10px; padding:9px 0;
          border-bottom:1px solid ${T.border}; font-size:0.88rem;
          color:${T.slateLight}; font-family:${T.sans}; line-height:1.5; }
        .eq-ti:last-child { border-bottom:none; }
        .eq-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; margin-top:6px; }

        .eq-tbl { width:100%; border-collapse:collapse; font-family:${T.sans}; font-size:0.82rem; }
        .eq-tbl th { padding:9px 14px; text-align:left; font-weight:700; font-size:0.7rem;
          letter-spacing:.06em; text-transform:uppercase; border-bottom:2px solid ${T.border}; background:${T.cream}; }
        .eq-tbl td { padding:10px 14px; vertical-align:top; border-bottom:1px solid ${T.border}; line-height:1.5; color:${T.slateLight}; }
        .eq-tbl tr:last-child td { border-bottom:none; }
        .eq-tbl tbody tr:hover td { background:rgba(201,151,58,0.03); }
        .eq-bad  { color:${T.rust}  !important; }
        .eq-good { color:${T.green} !important; font-weight:500; }
        .eq-ital { color:${T.gold}  !important; font-style:italic; font-size:0.78rem !important; }
        .eq-gb   { display:inline-block; background:rgba(46,58,82,0.08); color:${T.slate};
          font-weight:700; font-size:0.7rem; padding:2px 7px; border-radius:4px; white-space:nowrap; }

        @media (max-width:900px) {
          .eq-tg { grid-template-columns:1fr !important; }
          .eq-arr { display:none !important; }
          .eq-mg  { grid-template-columns:1fr !important; }
        }
        @media (max-width:640px) {
          .eq-s1 { padding:50px 16px !important; }
          .eq-s2 { padding:0 16px 60px !important; }
        }
      `}} />

      {/* ── SECTION 1: What Changes ── */}
      <section className="eq-s1" id="transformation" style={{
        padding: '80px 80px 70px',
        background: `linear-gradient(180deg,${T.paper} 0%,${T.cream} 100%)`,
        fontFamily: T.sans,
      }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={pill(T.gold, 'rgba(201,151,58,0.08)')}>Busy vs Selected Students</div>
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 400, color: T.ink, lineHeight: 1.2, margin: '0 0 12px' }}>
            What Changes When You Work With Us
          </h2>
          <p style={{ fontSize: '0.97rem', color: T.slateLight, lineHeight: 1.7, margin: 0, maxWidth: '560px', fontFamily: T.sans }}>
            The difference between a rejected student and an admitted one is never just grades. It's always the narrative.
          </p>
        </div>

        <div className="eq-tg" style={{ display: 'grid', gridTemplateColumns: '1fr 52px 1fr' }}>
          {/* Before */}
          <div style={{ ...card, borderRadius: '14px 0 0 14px', padding: '22px 26px', borderRight: 'none' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', background:T.redBg, color:T.rust, fontWeight:700, fontSize:'0.78rem', padding:'5px 12px', borderRadius:'7px', marginBottom:'16px', fontFamily:T.sans }}>
              ❌ Before EduQuest
            </div>
            {beforeItems.map(item => (
              <div key={item} className="eq-ti"><div className="eq-dot" style={{ background: T.rust }} />{item}</div>
            ))}
          </div>

          {/* Arrow */}
          <div className="eq-arr" style={{ display:'flex', alignItems:'center', justifyContent:'center', background:`linear-gradient(180deg,${T.paper},${T.cream})` }}>
            <div style={{ width:'36px', height:'36px', borderRadius:'50%', background:T.gold, color:T.white, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', fontWeight:700, boxShadow:'0 2px 10px rgba(201,151,58,0.3)' }}>→</div>
          </div>

          {/* After */}
          <div style={{ ...card, borderRadius: '0 14px 14px 0', padding: '22px 26px', borderLeft: 'none' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', background:T.greenBg, color:T.green, fontWeight:700, fontSize:'0.78rem', padding:'5px 12px', borderRadius:'7px', marginBottom:'16px', fontFamily:T.sans }}>
              ✅ After EduQuest
            </div>
            {afterItems.map(item => (
              <div key={item} className="eq-ti"><div className="eq-dot" style={{ background: T.green }} />{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Doc Data ── */}
      <section className="eq-s2" style={{ padding: '0 80px 80px', background: T.cream, fontFamily: T.sans }}>
        <div style={{ marginBottom: '28px' }}>
          <div style={pill(T.gold, 'rgba(201,151,58,0.08)')}>The Thinking Behind the Work</div>
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 400, color: T.ink, lineHeight: 1.2, margin: '0 0 10px' }}>
            Profile Building Is <em style={{ fontStyle:'italic', color:T.gold }}>NOT</em> a Checklist
          </h2>
          <p style={{ fontSize: '0.95rem', color: T.slateLight, lineHeight: 1.7, margin: 0, maxWidth: '540px', fontFamily: T.sans }}>
            Most students collect activities. Our students build brands.
          </p>
        </div>

        {/* Grade Table */}
        <div style={{ ...card, marginBottom: '20px' }}>
          <div style={{ padding: '16px 20px 0', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' as const, color:T.slateLight, fontFamily:T.sans }}>
            📊 Grade-by-Grade: Checklist vs Brand Thinking
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="eq-tbl">
              <thead>
                <tr>
                  <th style={{ color:T.slate, width:'80px' }}>Grade</th>
                  <th style={{ color:T.rust }}>❌ Checklist</th>
                  <th style={{ color:T.green }}>✅ Brand Thinking</th>
                  <th style={{ color:T.gold }}>What's Happening</th>
                </tr>
              </thead>
              <tbody>
                {gradeJourney.map(row => (
                  <tr key={row.grade}>
                    <td><span className="eq-gb">{row.grade}</span></td>
                    <td className="eq-bad">{row.wrong}</td>
                    <td className="eq-good">{row.right}</td>
                    <td className="eq-ital">{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mindshift + Final Callout */}
        <div className="eq-mg" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px' }}>

          {/* Mindshift */}
          <div style={{ ...card, padding: '20px 22px' }}>
            <div style={{ fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' as const, color:T.slateLight, fontFamily:T.sans, marginBottom:'14px' }}>
              🧠 The Shift That Changes Everything
            </div>
            <div style={{ display:'flex', flexDirection:'column' as const, gap:'10px' }}>
              {mindshiftRows.map((row, i) => (
                <div key={i} style={{ background:T.cream, border:`1px solid ${T.border}`, borderRadius:'10px', padding:'14px 16px' }}>
                  <div style={{ fontSize:'0.8rem', color:T.rust, fontFamily:T.sans, marginBottom:'6px' }}>❌ {row.bad}</div>
                  <div style={{ fontSize:'0.85rem', color:T.green, fontWeight:600, fontFamily:T.sans }}>✅ {row.good}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Callout */}
          <div style={{ background:`linear-gradient(135deg,${T.slate} 0%,${T.ink} 100%)`, borderRadius:'14px', padding:'26px', display:'flex', flexDirection:'column' as const, gap:'14px' }}>
            <div style={{ fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' as const, color:T.gold, fontFamily:T.sans }}>
              🎯 What a Strong Profile Looks Like (Grade 12)
            </div>
            <div style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'14px 16px' }}>
              <div style={{ fontSize:'0.63rem', fontWeight:700, color:'rgba(255,255,255,0.35)', textTransform:'uppercase' as const, letterSpacing:'0.08em', fontFamily:T.sans, marginBottom:'6px' }}>❌ Not this</div>
              <p style={{ fontSize:'0.83rem', color:'rgba(255,255,255,0.5)', fontFamily:T.sans, lineHeight:1.6, margin:0, fontStyle:'italic' }}>
                "I did MUN, coding, volunteering, and internships"
              </p>
            </div>
            <div style={{ color:T.gold, fontSize:'1rem', textAlign:'center' as const, fontWeight:700 }}>↓</div>
            <div style={{ background:'rgba(201,151,58,0.12)', border:'1px solid rgba(201,151,58,0.3)', borderRadius:'10px', padding:'14px 16px' }}>
              <div style={{ fontSize:'0.63rem', fontWeight:700, color:T.goldLight, textTransform:'uppercase' as const, letterSpacing:'0.08em', fontFamily:T.sans, marginBottom:'6px' }}>✅ But this</div>
              <p style={{ fontSize:'0.83rem', color:T.white, fontFamily:T.sans, lineHeight:1.6, margin:0 }}>
                "Over 4 years, I developed a deep interest in X, built skills in Y, created Z impact."
              </p>
            </div>
            <p style={{ fontFamily:T.serif, fontSize:'0.95rem', color:T.gold, margin:0, textAlign:'center' as const }}>
              That's not a resume. That's a <em>brand with a narrative</em>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}