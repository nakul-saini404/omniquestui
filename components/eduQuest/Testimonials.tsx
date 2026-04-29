'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

// ─── TIMELINE DATA ────────────────────────────────────────────────────────────
const timelineTabs = [
  {
    id: 'all',
    label: 'Class 8–12 Overview',
    note: null,
    slogan: null,
    steps: [
      { month: 'April', milestone: true, title: '8TH STANDARD', desc: null },
      { month: 'May', milestone: false, title: 'PSAT 8 Preparation', desc: null },
      { month: 'June – September', milestone: false, title: 'Profile Building Discussion', desc: 'Discussion on profile building so that student makes up his mind and start taking small steps for better profiling. Begin preparing for the AP exam in August for the exam in May.' },
      { month: 'October', milestone: true, title: '8 – PSAT ATTEMPT', desc: null },
      { month: 'January – February', milestone: false, title: 'Choose Summer School', desc: null },
      { month: 'April', milestone: false, title: '9TH STANDARD', desc: null },
      { month: 'May', milestone: false, title: 'PSAT 9 Preparation', desc: 'Attempt first AP and start preparing for others' },
      { month: 'June – July', milestone: false, title: 'Do Summer School', desc: null },
      { month: 'August – September', milestone: false, title: 'Concrete Steps on Profile Building', desc: null },
      { month: 'October', milestone: true, title: '9 – PSAT ATTEMPT', desc: null },
      { month: 'January – February', milestone: false, title: 'Choose Summer School', desc: null },
      { month: 'April', milestone: true, title: '10th Standard Start 🎉', desc: null },
      { month: 'May – September', milestone: false, title: 'Key Activities', desc: 'Attempt AP Exam · Prepare for SAT/ACT · Go to Summer School · Concrete steps on profile building' },
      { month: 'October / December', milestone: true, title: 'SAT/ACT Attempt 1 (take this)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School', desc: null },
      { month: 'April', milestone: false, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      { month: 'August', milestone: true, title: 'SAT/ACT Attempt 2', desc: 'Make an excel sheet with college details. Max 12 colleges — 5–6 Dream, 6–7 Target, 3–4 Safe.' },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 3 (if needed)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coalition App / Quest Bridge' },
      { month: 'September / October', milestone: false, title: 'College Essay & Documents', desc: 'Collect Predicted scores certificate and LOR. Prepare college essay for early action. Fill the CSS profile for US scholarships.' },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action deadline November 1st – 30th, varies by college.' },
      { month: 'December', milestone: false, title: 'Regular Decision & Board Exams', desc: 'Regular Decision deadlines December–January. Some colleges have rolling admissions. Submit all applications. 12th Board Exams too!' },
      { month: 'April', milestone: false, title: 'Give TOEFL / IELTS / PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance · Fee · VISA', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '10',
    label: 'Class 10 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in March / May / August / October / December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOURSELF — YOU'RE NOT SO LATE",
    steps: [
      { month: 'April', milestone: true, title: '10th Standard Start 🎉', desc: null },
      { month: 'May', milestone: false, title: 'Attempt AP Exam', desc: null },
      { month: 'June', milestone: false, title: 'Prepare for SAT/ACT', desc: null },
      { month: 'July', milestone: false, title: 'Go to Summer School', desc: null },
      { month: 'August', milestone: false, title: 'Continue SAT/ACT Prep', desc: null },
      { month: 'September', milestone: false, title: 'Concrete Steps on Profile Building', desc: null },
      { month: 'October / December', milestone: true, title: 'SAT/ACT Attempt 1 (take this)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School', desc: null },
      { month: 'April', milestone: false, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      { month: 'August', milestone: true, title: 'SAT/ACT Attempt 2', desc: 'Max 12 colleges — 5–6 Dream, 6–7 Target, 3–4 Safe.' },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 3 (if needed)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coalition App / Quest Bridge' },
      { month: 'September / October', milestone: false, title: 'College Essay & Documents', desc: 'Predicted scores, LOR, college essay for early action. Fill CSS profile for US scholarships.' },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'November 1st – 30th, varies by college.' },
      { month: 'December', milestone: false, title: 'Regular Decision & Board Exams', desc: 'Submit all applications. 12th Board Exams!' },
      { month: 'April', milestone: false, title: 'Give TOEFL / IELTS / PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance · Fee · VISA', desc: 'Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '11',
    label: 'Class 11 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in March / May / August / October / December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOURSELF — YOU'RE NOT SO LATE",
    steps: [
      { month: 'April', milestone: true, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      { month: 'August', milestone: true, title: 'SAT/ACT Attempt 1', desc: 'Begin preparing for the AP exam in August for the exam in May.' },
      { month: 'September', milestone: false, title: 'College Research & Scholarship Tips', desc: 'Max 12 colleges — 5–6 Dream, 6–7 Target, 3–4 Safe. Search "<college> international undergraduate scholarships".' },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 2', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coalition App / Quest Bridge' },
      { month: 'September / October', milestone: false, title: 'College Essay & Documents', desc: 'Collect scores, LOR. Prepare college essay. Fill CSS profile for US scholarships.' },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'November 1st – 30th.' },
      { month: 'December', milestone: false, title: 'Regular Decision & Board Exams', desc: 'Submit all applications. 12th Board Exams!' },
      { month: 'April', milestone: false, title: 'Give TOEFL / IELTS / PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance · Fee · VISA', desc: 'Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '12',
    label: 'Class 12 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in March / May / August / October / December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOURSELF — YOU'RE NOT SO LATE",
    steps: [
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coalition App / Quest Bridge' },
      { month: 'September / October', milestone: false, title: 'College Essay & Documents', desc: 'Collect scores, LOR. Prepare college essay. Fill CSS profile for US scholarships.' },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'November 1st – 30th, varies by college.' },
      { month: 'December', milestone: false, title: 'Regular Decision & Board Exams', desc: 'Submit all applications. Rolling admissions vary. 12th Board Exams!' },
      { month: 'April', milestone: false, title: 'Give TOEFL / IELTS / PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance · Fee · VISA', desc: 'Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Hardik',
    score: 'SAT 1520',
    exam: 'SAT',
    location: 'Gurgaon',
    scholarship: null,
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/hardik1.jpeg',
    text: "I'm Hardik from Gurgaon, and on my first attempt at the SAT, I scored 1520. I appreciate EduQuest for their helpful guidance. Their direction through digital SAT coaching supported me to get such a high score. They gave me a lot of insightful recommendations. Additionally, Rupali maam helped me immensely in one of summer programme applications recently.",
    youtubeId: '',
  },
  {
    name: 'Seher Taneja',
    score: 'SAT 1510',
    exam: 'SAT',
    location: 'Delhi',
    scholarship: null,
    photo: 'https://eduquest.org.in/wp-content/uploads/2021/09/Screenshot-181.png',
    text: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful and I will be forever grateful for their guidance. They helped me identify and work on my weak spots and gave me a consistent way to improve.",
    youtubeId: '',
  },
  {
    name: 'Hiya Garg',
    score: 'SAT 1480',
    exam: 'SAT',
    location: 'Delhi',
    scholarship: null,
    photo: 'https://eduquest.org.in/wp-content/uploads/2021/09/Screenshot-177.png',
    text: "I got a 1480 in my SAT and EduQuest was a huge part of my journey. EduQuest, in my opinion, is unique in the field of education. This is the first time I've come across a group of professors so willing to help you at every turn. EduQuest, thank you!",
    youtubeId: '',
  },
  {
    name: 'Avinash Biju',
    score: 'SAT 1500 · Math 800',
    exam: 'SAT',
    location: 'UAE',
    scholarship: '$15,000',
    photo: 'https://eduquest.org.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-30-at-15.26.01.jpeg',
    text: "I scored 1500, 800 in Maths and 700 in English. EduQuest is a group of compassionate and hardworking teachers who are always ready to help you out. They always went the extra mile via digital SAT classes to ensure that I had access to helpful resources. Without them, I would not have achieved the score I have.",
    youtubeId: '',
  },
  {
    name: 'Aaisha Sawlani',
    score: 'SAT 1450',
    exam: 'SAT',
    location: 'Nigeria',
    scholarship: '$20,000',
    photo: 'https://eduquest.org.in/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-01-at-13.40.17.jpeg',
    text: "I scored 1450 in SAT August exam. I am extremely proud of the way Eduquest has coached me. They understood the proactive side of expectations and ensured we can easily overcome the tough side of SAT. Their framework is exemplary and very robust. Thank You Eduquest.",
    youtubeId: '',
  },
  {
    name: 'Soham Sharma',
    score: 'AP CS 5/5 · SAT 1500',
    exam: 'AP + SAT',
    location: 'New Delhi',
    scholarship: '$12,000',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Soham.jpeg',
    text: "I prepared for the AP exam with EduQuest and scored 1500, with perfect scores in AP CS 5/5. Throughout my AP journey, EduQuest and its team have been supportive. The mocks were almost identical to the real test, which helped me prepare enormously.",
    youtubeId: '',
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getTabIndex(input: string): number {
  const v = input.toLowerCase().replace(/[^0-9a-z]/g, '');
  if (v === '10' || v === '10th') return 1;
  if (v === '11' || v === '11th') return 2;
  if (v === '12' || v === '12th') return 3;
  return 0;
}

function groupSteps(steps: typeof timelineTabs[0]['steps']) {
  const groups: { heading: string; period: string; isMilestone: boolean; desc: string | null; items: typeof steps }[] = [];
  let current: (typeof groups)[0] | null = null;
  steps.forEach((step) => {
    if (step.milestone) {
      if (current) groups.push(current);
      current = { heading: step.title, period: step.month, isMilestone: true, desc: step.desc, items: [] };
    } else {
      if (!current) current = { heading: 'Getting Started', period: step.month, isMilestone: false, desc: null, items: [] };
      current.items.push(step);
    }
  });
  if (current) groups.push(current);
  return groups;
}

const PHASE_COLORS = [
  '#c9a84c','#3b82f6','#10b981','#8b5cf6','#f59e0b',
  '#06b6d4','#f97316','#ec4899','#22c55e','#ef4444',
];

/* ══════════════════════════════════════════════════
   SECTION 1 — TIMELINE
══════════════════════════════════════════════════ */
export function TimelineSection() {
  const [inputValue, setInputValue] = useState('');
  const [searched, setSearched] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    setActiveTabIdx(getTabIndex(inputValue));
    setSearched(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  const tab = timelineTabs[activeTabIdx];
  const groups = groupSteps(tab.steps);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        .tl-section { background:#faf8f3; padding:clamp(56px,7vw,96px) 0; font-family:'DM Sans',sans-serif; }
        .tl-inner { max-width:1280px; margin:0 auto; padding:0 clamp(20px,4vw,52px); }

        .tl-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.68rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#c9a84c; background:rgba(201,168,76,.1); border:1px solid rgba(201,168,76,.25); padding:4px 14px; border-radius:100px; margin-bottom:14px; }
        .tl-title { font-family:'Cormorant Garamond',serif; font-size:clamp(1.9rem,4vw,3rem); font-weight:700; line-height:1.15; color:#0a1628; margin-bottom:12px; letter-spacing:-.02em; }
        .tl-title em { color:#c9a84c; font-style:italic; }
        .tl-subtitle { font-size:.95rem; color:#6b7280; max-width:560px; line-height:1.7; margin-bottom:32px; }

        /* Search */
        .tl-search-wrap { display:flex; align-items:stretch; max-width:480px; margin-bottom:8px; border-radius:12px; overflow:hidden; border:2px solid #e2e8f0; box-shadow:0 4px 20px rgba(0,0,0,.06); background:#fff; transition:border-color .25s,box-shadow .25s; }
        .tl-search-wrap:focus-within { border-color:#c9a84c; box-shadow:0 0 0 4px rgba(201,168,76,.12); }
        .tl-input { flex:1; border:none; outline:none; background:transparent; padding:14px 18px; font-size:1rem; font-family:'DM Sans',sans-serif; color:#0a1628; }
        .tl-input::placeholder { color:#9ca3af; }
        .tl-search-btn { background:#0a1628; color:#fff; border:none; cursor:pointer; padding:0 24px; font-size:.85rem; font-weight:600; font-family:'DM Sans',sans-serif; letter-spacing:.04em; white-space:nowrap; transition:background .2s; display:flex; align-items:center; gap:8px; }
        .tl-search-btn:hover { background:#c9a84c; color:#0a1628; }
        .tl-search-hint { font-size:.76rem; color:#9ca3af; }

        /* Result card */
        .tl-result { margin-top:36px; background:#fff; border:1px solid #e2e8f0; border-radius:20px; overflow:hidden; box-shadow:0 12px 48px rgba(0,0,0,.08); animation:tlFadeUp .4s cubic-bezier(.4,0,.2,1) both; }
        @keyframes tlFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        .tl-result-header { background:#0a1628; padding:clamp(18px,3vw,28px) clamp(20px,4vw,36px); display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; }
        .tl-result-title { font-family:'Cormorant Garamond',serif; font-size:clamp(1.3rem,2.5vw,1.8rem); font-weight:700; color:#fff; margin-bottom:3px; }
        .tl-result-title span { color:#c9a84c; }
        .tl-result-meta { font-size:.78rem; color:rgba(255,255,255,.45); }
        .tl-change-btn { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15); color:rgba(255,255,255,.7); padding:8px 16px; border-radius:8px; font-size:.76rem; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; transition:all .2s; white-space:nowrap; flex-shrink:0; }
        .tl-change-btn:hover { background:rgba(201,168,76,.2); color:#c9a84c; border-color:rgba(201,168,76,.3); }

        /* Vertical track */
        .tl-track-wrap { padding:clamp(24px,3vw,40px) clamp(20px,4vw,36px); }
        .tl-track { position:relative; display:flex; flex-direction:column; gap:12px; }
        .tl-track::before { content:''; position:absolute; top:22px; bottom:22px; left:20px; width:2px; background:linear-gradient(180deg,#c9a84c 0%,rgba(226,232,240,.5) 100%); z-index:0; }

        /* Phase row */
        .tl-phase { display:flex; align-items:flex-start; gap:clamp(12px,2vw,20px); position:relative; z-index:1; width:100%; }

        /* Node */
        .tl-node { width:40px; height:40px; min-width:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:.6rem; font-weight:700; color:#fff; border:3px solid #faf8f3; box-shadow:0 0 0 2px rgba(0,0,0,.06); font-family:'DM Mono',monospace; z-index:2; margin-top:3px; flex-shrink:0; }
        .tl-node.milestone { width:44px; height:44px; min-width:44px; margin-top:1px; box-shadow:0 0 0 3px rgba(201,168,76,.35),0 4px 14px rgba(201,168,76,.2); }

        /* Full-width card */
        .tl-phase-card { flex:1; width:100%; min-width:0; background:#faf8f3; border:1px solid #ede9e0; border-radius:12px; padding:clamp(12px,2vw,18px) clamp(14px,2.5vw,24px); transition:box-shadow .2s,transform .2s,border-color .2s; }
        .tl-phase-card:hover { box-shadow:0 6px 24px rgba(0,0,0,.08); transform:translateX(4px); border-color:#d4c89a; }
        .tl-phase-card.milestone-card { border-color:#c9a84c; border-width:1.5px; background:rgba(201,168,76,.04); }

        .tl-phase-period { font-size:.6rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#c9a84c; margin-bottom:3px; font-family:'DM Mono',monospace; }
        .tl-milestone-badge { display:inline-flex; align-items:center; gap:4px; font-size:.6rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#c9a84c; background:rgba(201,168,76,.12); border:1px solid rgba(201,168,76,.25); padding:2px 7px; border-radius:4px; margin-bottom:4px; }
        .tl-phase-heading { font-size:clamp(.88rem,1.3vw,1rem); font-weight:700; color:#0a1628; line-height:1.3; }
        .tl-phase-heading.has-items { margin-bottom:10px; }
        .tl-milestone-desc { font-size:.78rem; color:#6b7280; line-height:1.5; margin-top:4px; }

        /* Items grid — fills full width with auto columns */
        .tl-items-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(clamp(160px,22%,240px),1fr)); gap:6px 16px; margin-top:8px; }
        .tl-phase-item { font-size:.78rem; color:#6b7280; line-height:1.5; display:flex; gap:5px; align-items:flex-start; }
        .tl-phase-item::before { content:'›'; color:#c9a84c; flex-shrink:0; font-size:.85rem; line-height:1.4; }
        .tl-item-title { color:#374151; font-weight:600; font-size:.78rem; display:block; }
        .tl-item-desc { color:#9ca3af; font-size:.72rem; display:block; margin-top:1px; }

        /* Footer */
        .tl-footer-wrap { padding:0 clamp(20px,4vw,36px) clamp(20px,3vw,32px); display:flex; flex-direction:column; gap:12px; }
        .tl-footer-note { background:rgba(201,168,76,.07); border:1px solid rgba(201,168,76,.2); border-radius:10px; padding:13px 18px; font-size:.81rem; color:#92400e; line-height:1.6; }
        .tl-footer-slogan { background:#0a1628; border-radius:10px; padding:14px 20px; text-align:center; font-size:.78rem; font-weight:700; color:#c9a84c; letter-spacing:.1em; text-transform:uppercase; }

        @media(max-width:560px) {
          .tl-track::before { left:17px; }
          .tl-node { width:36px; height:36px; min-width:36px; }
          .tl-node.milestone { width:40px; height:40px; min-width:40px; }
          .tl-items-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <section className="tl-section" id="timeline">
        <div className="tl-inner">
          <div className="tl-eyebrow">Class-wise Timeline</div>
          <h2 className="tl-title">Your Year-by-Year <em>Admissions Roadmap</em></h2>
          <p className="tl-subtitle">
            Enter your current class below to instantly see your personalised action plan for getting into a top global university.
          </p>

          <div className="tl-search-wrap">
            <input
              className="tl-input"
              type="text"
              placeholder="Type your class: 8, 9, 10, 11 or 12…"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
            <button className="tl-search-btn" onClick={handleSearch}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search
            </button>
          </div>
          <p className="tl-search-hint">Try "10", "11", "12" or leave blank for full 8–12 overview</p>

          {searched && (
            <div className="tl-result" ref={resultRef}>
              <div className="tl-result-header">
                <div>
                  <div className="tl-result-title"><span>{tab.label}</span></div>
                  <div className="tl-result-meta">{groups.length} phases · {tab.steps.length} total activities</div>
                </div>
                <button className="tl-change-btn" onClick={() => { setSearched(false); setInputValue(''); }}>
                  ← Change Class
                </button>
              </div>

              <div className="tl-track-wrap">
                <div className="tl-track">
                  {groups.map((g, gi) => (
                    <div key={gi} className="tl-phase">
                      <div
                        className={`tl-node${g.isMilestone ? ' milestone' : ''}`}
                        style={{ background: PHASE_COLORS[gi % PHASE_COLORS.length] }}
                      >
                        {String(gi + 1).padStart(2, '0')}
                      </div>

                      <div className={`tl-phase-card${g.isMilestone ? ' milestone-card' : ''}`}>
                        <div className="tl-phase-period">{g.period}</div>
                        {g.isMilestone && (
                          <div className="tl-milestone-badge">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="#c9a84c"><circle cx="3" cy="3" r="3"/></svg>
                            Milestone
                          </div>
                        )}
                        <div className={`tl-phase-heading${g.items.length > 0 ? ' has-items' : ''}`}>
                          {g.heading}
                        </div>
                        {g.desc && <div className="tl-milestone-desc">{g.desc}</div>}
                        {g.items.length > 0 && (
                          <div className="tl-items-grid">
                            {g.items.map((item, ii) => (
                              <div key={ii} className="tl-phase-item">
                                <span>
                                  <span className="tl-item-title">{item.title}</span>
                                  {item.desc && <span className="tl-item-desc">{item.desc}</span>}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {(tab.note || tab.slogan) && (
                <div className="tl-footer-wrap">
                  {tab.note && <div className="tl-footer-note">📌 {tab.note}</div>}
                  {tab.slogan && <div className="tl-footer-slogan">✨ {tab.slogan}</div>}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════
   YOUTUBE MODAL
══════════════════════════════════════════════════ */
function YouTubeModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <div
      style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(0,0,0,.94)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}
      onClick={onClose}
    >
      <div style={{ width:'min(860px,95vw)', position:'relative' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position:'absolute', top:-46, right:0, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', width:38, height:38, borderRadius:'50%', fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
        <div style={{ position:'relative', paddingBottom:'56.25%', height:0 }}>
          <iframe
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none', borderRadius:12 }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allowFullScreen allow="autoplay; encrypted-media"
          />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION 2 — TESTIMONIALS CAROUSEL
══════════════════════════════════════════════════ */
export function TestimonialsSection() {
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length;
  const touchStart = useRef(0);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(((idx % total) + total) % total);
    setTimeout(() => setAnimating(false), 420);
  }, [animating, total]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 5500);
    return () => clearInterval(t);
  }, [current, goTo]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .ts-section { background:#0a1628; padding:clamp(56px,7vw,96px) 0; font-family:'DM Sans',sans-serif; overflow:hidden; }
        .ts-inner { max-width:1280px; margin:0 auto; padding:0 clamp(20px,4vw,52px); }

        .ts-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.68rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#c9a84c; background:rgba(201,168,76,.12); border:1px solid rgba(201,168,76,.25); padding:4px 14px; border-radius:100px; margin-bottom:14px; }
        .ts-title { font-family:'Cormorant Garamond',serif; font-size:clamp(1.9rem,4vw,3rem); font-weight:700; line-height:1.15; color:#fff; margin-bottom:10px; letter-spacing:-.02em; }
        .ts-title em { color:#c9a84c; font-style:italic; }
        .ts-subtitle { font-size:.95rem; color:rgba(255,255,255,.45); max-width:520px; line-height:1.7; margin-bottom:36px; }

        /* Carousel wrapper */
        .ts-carousel { position:relative; user-select:none; }

        /* Overflow clip */
        .ts-track-outer { overflow:hidden; border-radius:18px; }

        /* Sliding track */
        .ts-track { display:flex; will-change:transform; transition:transform .42s cubic-bezier(.4,0,.2,1); }
        .ts-slide { flex:0 0 100%; min-width:0; }

        /* Card — horizontal two-column */
        .ts-card {
          display:flex; flex-direction:row;
          background:#0f1f3d;
          border:1px solid rgba(201,168,76,.15);
          border-radius:18px;
          overflow:hidden;
          min-height:clamp(220px,30vw,300px);
        }

        /* Left: photo */
        .ts-photo-col { width:clamp(110px,16vw,180px); flex-shrink:0; background:#112240; overflow:hidden; position:relative; }
        .ts-photo-img { width:100%; height:100%; object-fit:cover; object-position:top center; display:block; }
        .ts-photo-placeholder { width:100%; height:100%; min-height:240px; display:flex; align-items:center; justify-content:center; background:linear-gradient(145deg,#112240 0%,#1d3a6b 100%); font-family:'Cormorant Garamond',serif; font-size:clamp(2.2rem,5vw,3.5rem); font-weight:700; color:#c9a84c; }

        /* Right column */
        .ts-right-col { flex:1; min-width:0; display:flex; flex-direction:column; border-left:1px solid rgba(201,168,76,.1); }

        /* Meta */
        .ts-meta { padding:clamp(16px,2.5vw,26px) clamp(16px,2.5vw,28px) clamp(12px,2vw,18px); border-bottom:1px solid rgba(201,168,76,.1); display:flex; align-items:flex-start; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .ts-name { font-size:clamp(.95rem,1.8vw,1.15rem); font-weight:700; color:#fff; margin-bottom:2px; }
        .ts-location { font-size:.73rem; color:rgba(255,255,255,.38); margin-bottom:10px; display:flex; align-items:center; gap:4px; }
        .ts-location::before { content:'📍'; font-size:.6rem; }
        .ts-badges { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:8px; }
        .ts-badge-exam { font-size:.62rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; padding:3px 8px; border-radius:4px; background:rgba(59,130,246,.15); color:#60a5fa; border:1px solid rgba(59,130,246,.2); }
        .ts-badge-score { font-size:.62rem; font-weight:700; padding:3px 8px; border-radius:4px; background:rgba(201,168,76,.12); color:#c9a84c; border:1px solid rgba(201,168,76,.25); }
        .ts-badge-scholarship { font-size:.62rem; font-weight:700; padding:3px 8px; border-radius:4px; background:rgba(34,197,94,.12); color:#4ade80; border:1px solid rgba(34,197,94,.2); display:inline-flex; align-items:center; gap:3px; }
        .ts-stars { color:#c9a84c; font-size:.82rem; letter-spacing:2px; }

        /* Video button */
        .ts-video-btn { display:inline-flex; align-items:center; gap:7px; background:rgba(239,68,68,.1); border:1px solid rgba(239,68,68,.25); color:#f87171; padding:7px 14px; border-radius:7px; font-size:.7rem; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; transition:all .2s; white-space:nowrap; }
        .ts-video-btn:hover { background:rgba(239,68,68,.2); color:#fca5a5; border-color:rgba(239,68,68,.4); }
        .ts-play-dot { width:18px; height:18px; background:#ef4444; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ts-play-dot::after { content:''; border-style:solid; border-width:4px 0 4px 7px; border-color:transparent transparent transparent #fff; margin-left:1px; }

        /* Quote */
        .ts-quote-wrap { flex:1; padding:clamp(14px,2vw,22px) clamp(16px,2.5vw,28px); position:relative; display:flex; align-items:flex-start; }
        .ts-quote-mark { font-family:'Cormorant Garamond',serif; font-size:5rem; line-height:.5; color:rgba(201,168,76,.15); position:absolute; top:12px; left:14px; user-select:none; pointer-events:none; }
        .ts-quote-text { font-size:clamp(.8rem,1.1vw,.88rem); color:rgba(255,255,255,.58); line-height:1.75; font-style:italic; padding-left:22px; }

        /* Controls row */
        .ts-controls { display:flex; align-items:center; justify-content:space-between; margin-top:22px; gap:12px; flex-wrap:wrap; }
        .ts-dots { display:flex; gap:7px; align-items:center; }
        .ts-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.2); border:none; cursor:pointer; transition:all .25s; padding:0; }
        .ts-dot.active { background:#c9a84c; width:26px; border-radius:4px; }
        .ts-dot:hover:not(.active) { background:rgba(255,255,255,.4); }
        .ts-counter { font-size:.76rem; color:rgba(255,255,255,.3); }
        .ts-arrows { display:flex; gap:10px; }
        .ts-arrow { width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.7); font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; font-family:'DM Sans',sans-serif; }
        .ts-arrow:hover { background:rgba(201,168,76,.2); color:#c9a84c; border-color:rgba(201,168,76,.3); }
        .ts-arrow:active { transform:scale(.94); }

        /* Mobile: stack card vertically */
        @media(max-width:600px) {
          .ts-card { flex-direction:column; }
          .ts-photo-col { width:100%; height:clamp(140px,40vw,180px); }
          .ts-photo-placeholder { min-height:140px; }
          .ts-right-col { border-left:none; border-top:1px solid rgba(201,168,76,.1); }
        }
      `}</style>

      {videoModal && <YouTubeModal videoId={videoModal} onClose={() => setVideoModal(null)} />}

      <section className="ts-section" id="testimonials">
        <div className="ts-inner">
          <div className="ts-eyebrow">Student Voices</div>
          <h2 className="ts-title">What Our Students &amp; <em>Families Say</em></h2>
          <p className="ts-subtitle">Real stories from students who achieved their dream university admissions with EduQuest.</p>

          <div className="ts-carousel">
            <div
              className="ts-track-outer"
              onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
              onTouchEnd={e => {
                const d = touchStart.current - e.changedTouches[0].clientX;
                if (Math.abs(d) > 40) d > 0 ? goTo(current + 1) : goTo(current - 1);
              }}
            >
              <div className="ts-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((t) => (
                  <div key={t.name} className="ts-slide">
                    <div className="ts-card">
                      {/* Photo */}
                      <div className="ts-photo-col">
                        {t.photo ? (
                          <Image
                            src={t.photo}
                            alt={t.name}
                            width={180}
                            height={320}
                            className="ts-photo-img"
                            style={{ objectFit: 'cover', objectPosition: 'top center' }}
                          />
                        ) : (
                          <div className="ts-photo-placeholder">{t.name[0]}</div>
                        )}
                      </div>

                      {/* Right */}
                      <div className="ts-right-col">
                        <div className="ts-meta">
                          <div>
                            <div className="ts-name">{t.name}</div>
                            <div className="ts-location">{t.location}</div>
                            <div className="ts-badges">
                              <span className="ts-badge-exam">{t.exam}</span>
                              <span className="ts-badge-score">{t.score}</span>
                              {t.scholarship && (
                                <span className="ts-badge-scholarship">🎓 {t.scholarship} Scholarship</span>
                              )}
                            </div>
                            <div className="ts-stars">★★★★★</div>
                          </div>
                          {t.youtubeId && (
                            <div style={{ flexShrink: 0 }}>
                              <button className="ts-video-btn" onClick={() => setVideoModal(t.youtubeId)}>
                                <span className="ts-play-dot" />
                                Watch Video
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="ts-quote-wrap">
                          <div className="ts-quote-mark">"</div>
                          <p className="ts-quote-text">{t.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="ts-controls">
              <div className="ts-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`ts-dot${i === current ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="ts-counter">{current + 1} / {total}</span>
                <div className="ts-arrows">
                  <button className="ts-arrow" onClick={() => goTo(current - 1)} aria-label="Previous">←</button>
                  <button className="ts-arrow" onClick={() => goTo(current + 1)} aria-label="Next">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════════════ */
export default function TimelineAndTestimonials() {
  return (
    <>
      <TimelineSection />
      <TestimonialsSection />
    </>
  );
}