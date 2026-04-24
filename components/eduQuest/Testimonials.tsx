'use client';
import { useState } from 'react';
import Image from 'next/image';

/* ─── TIMELINE DATA ──────────────────────────────────────────────────────── */
const timelineTabs = [
  {
    id: 'all',
    label: 'Class 8–12 Overview',
    note: null,
    slogan: null,
    steps: [
      { month: 'April', milestone: true, title: '8TH STANDARD', desc: null },
      { month: 'May', milestone: false, title: 'PSAT 8 Preparation', desc: null },
      {
        month: 'June – September', milestone: false, title: 'Profile Building Discussion',
        desc: 'Discussion on profile building so that student makes up his mind and start taking small steps for better profiling.\n\nNote: Begin preparing for the AP exam in August for the exam in May.',
      },
      { month: 'October', milestone: true, title: '8 – PSAT ATTEMPT', desc: null },
      { month: 'January – February', milestone: false, title: 'Choose Summer School', desc: null },
      { month: 'April', milestone: false, title: '9TH STANDARD', desc: null },
      { month: 'May', milestone: false, title: 'PSAT 9 Preparation', desc: 'Attempt first AP and start preparing for others' },
      { month: 'June – July', milestone: false, title: 'Do Summer School', desc: null },
      { month: 'August – September', milestone: false, title: 'Concrete Steps on Profile Building', desc: null },
      { month: 'October', milestone: true, title: '9 – PSAT ATTEMPT', desc: null },
      { month: 'January – February', milestone: false, title: 'Choose Summer School', desc: null },
      { month: 'April', milestone: true, title: '10th Standard Start (yay :D)', desc: null },
      {
        month: 'May – September', milestone: false, title: 'Key Activities',
        desc: '• Attempt AP Exam\n• Prepare for your SAT/ACT exam\n• Go to summer school\n• Concrete steps on profile building',
      },
      { month: 'October / December', milestone: true, title: 'SAT/ACT Attempt 1 (take this)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School', desc: null },
      { month: 'April', milestone: false, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      {
        month: 'August', milestone: true, title: 'SAT/ACT Attempt 2 (take this at least now)',
        desc: 'Tip: Make an excel sheet containing all college and course details. Max 12 colleges (5–6 Dream Universities, 6–7 Target, 3–4 Safe)\n\nGoogle search tip: Enter "<college name> international undergraduate student scholarships" to get scholarship info.',
      },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 3 IFF', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '10',
    label: 'Class 10 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in the month of March/May/August/October/December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOU, YOU'RE NOT SO LATE",
    steps: [
      { month: 'April', milestone: true, title: '10th Standard Start (yay :D)', desc: null },
      { month: 'May', milestone: false, title: 'Attempt AP Exam', desc: null },
      { month: 'June', milestone: false, title: 'Prepare for your SAT/ACT exam', desc: null },
      { month: 'July', milestone: false, title: 'Go to Summer School', desc: null },
      { month: 'August', milestone: false, title: 'Prepare for your SAT/ACT exam', desc: null },
      { month: 'September', milestone: false, title: 'Concrete steps on profile building', desc: null },
      { month: 'October / December', milestone: true, title: 'SAT/ACT Attempt 1 (take this)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School', desc: null },
      { month: 'April', milestone: false, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      {
        month: 'August', milestone: true, title: 'SAT/ACT Attempt 2 (take this at least now)',
        desc: 'Tip: Make an excel sheet containing all college and course details. Max 12 colleges (5–6 Dream Universities, 6–7 Target, 3–4 Safe)\n\nGoogle search tip: Enter "<college name> international undergraduate student scholarships" to get scholarship info.',
      },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 3 IFF', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '11',
    label: 'Class 11 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in the month of March/May/August/October/December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOU, YOU'RE NOT SO LATE",
    steps: [
      { month: 'April', milestone: true, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      { month: 'August', milestone: true, title: 'SAT/ACT Attempt 1', desc: 'Note: Begin preparing for the AP exam in August for the exam in May.' },
      {
        month: 'September', milestone: false, title: 'College Research & Scholarship Tips',
        desc: 'Tip: Make an excel sheet containing all college and course details. Max 12 colleges (5–6 Dream Universities, 6–7 Target, 3–4 Safe)\n\nGoogle search tip: Enter "<college name> international undergraduate student scholarships" to get scholarship info.',
      },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 2', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '12',
    label: 'Class 12 Timeline',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in the month of March/May/August/October/December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOU, YOU'RE NOT SO LATE",
    steps: [
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
];

/* ─── TESTIMONIAL DATA ───────────────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Hardik',
    score: 'SAT 1520',
    location: 'Gurgaon',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/hardik1.jpeg',
    text: "I'm Hardik from Gurgaon, and on my first attempt at the SAT, I scored 1520. I appreciate EduQuest for their helpful guidance. Their direction through digital SAT coaching supported me to get such a high score. They gave me a lot of insightful recommendations. Additionally, Rupali maam helped me immensely in one of summer programme applications recently.",
    youtubeId: 'ABC123xyz',
  },
  {
    name: 'Seher Taneja',
    score: 'SAT 1510',
    location: 'Delhi',
    photo: '',
    text: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful and I will be forever grateful for their guidance. They helped me identify and work on my weak spots and gave me a consistent way to improve.",
    youtubeId: '',
  },
  {
    name: 'Hiya Garg',
    score: 'SAT 1480',
    location: 'Delhi',
    photo: '',
    text: "I got a 1480 in my SAT and EduQuest was a huge part of my journey. EduQuest, in my opinion, is unique in the field of education. This is the first time I've come across a group of professors so willing to help you at every turn. EduQuest, thank you!",
    youtubeId: '',
  },
  {
    name: 'Avinash Biju',
    score: 'SAT 1500 · Math 800',
    location: 'UAE',
    photo: '',
    text: "I scored 1500, 800 in Maths and 700 in English. EduQuest is a group of compassionate and hardworking teachers who are always ready to help you out. They always went the extra mile via digital SAT classes to ensure that I had access to helpful resources. Without them, I would not have achieved the score I have.",
    youtubeId: '',
  },
  {
    name: 'Aaisha Sawlani',
    score: 'SAT 1450',
    location: 'Nigeria',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Aaisha-Sawlani.jpeg',
    text: "I scored 1450 in SAT August exam. I am extremely proud of the way Eduquest has coached me. They understood the proactive side of expectations and ensured we can easily overcome the tough side of SAT. Their framework is exemplary and very robust. Thank You Eduquest.",
    youtubeId: '',
  },
  {
    name: 'Soham Sharma',
    score: 'AP CS 5/5 · SAT 1500',
    location: 'New Delhi',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Soham.jpeg',
    text: "I prepared for the AP exam with EduQuest and scored 1500, with perfect scores in AP CS 5/5. Throughout my AP journey, EduQuest and its team have been supportive. The mocks were almost identical to the real test, which helped me prepare enormously.",
    youtubeId: '',
  },
];

/* ─── VIDEO STORIES DATA ─────────────────────────────────────────────────── */
const videoStories = [
  { label: "Hardik's SAT 1520 Journey",          thumb: 'https://eduquest.org.in/wp-content/uploads/2025/09/Student-Testimony-Video-4.jpg',  youtubeId: 'dQw4w9WgXcQ' },
  { label: "Seher's Study Abroad Story",          thumb: 'https://eduquest.org.in/wp-content/uploads/2025/09/Student-Testimonial-2.jpg',       youtubeId: 'dQw4w9WgXcQ' },
  { label: 'AP 5/5 — Soham Experience',           thumb: 'https://eduquest.org.in/wp-content/uploads/2025/09/Student-Video-3.jpg',             youtubeId: 'dQw4w9WgXcQ' },
  { label: 'From India to Top-50 Universities',   thumb: 'https://eduquest.org.in/wp-content/uploads/2025/09/Student-TESTIMONIAL-1.jpg',       youtubeId: 'dQw4w9WgXcQ' },
  { label: 'Profile Building — 18 Month Journey', thumb: 'https://eduquest.org.in/wp-content/uploads/2025/09/Student-Video-5.jpg',             youtubeId: 'dQw4w9WgXcQ' },
  { label: 'Watch More on YouTube',               thumb: '',                                                                                    youtubeId: 'dQw4w9WgXcQ' },
];

/* ── Helper: map class number → tab index ─────────────────────────────── */
function classToTabIndex(cls: number): number | null {
  if (cls === 8 || cls === 9) return 0;   // Class 8–12 Overview
  if (cls === 10) return 1;
  if (cls === 11) return 2;
  if (cls === 12) return 3;
  return null;
}

/* ══════════════════════════════════════════════════════════
   SECTION 1 — CLASS-WISE TIMELINE
══════════════════════════════════════════════════════════ */
export function TimelineSection() {
  const [activeTab, setActiveTab] = useState(0);

  /* ── NEW: class input state ── */
  const [classInput, setClassInput] = useState('');
  const [inputError, setInputError] = useState('');

  const tab = timelineTabs[activeTab];

  /* Handle input submit */
  function handleClassSearch() {
    const num = parseInt(classInput.trim(), 10);
    if (isNaN(num) || num < 8 || num > 12) {
      setInputError('Please enter a valid class between 8 and 12.');
      return;
    }
    setInputError('');
    const tabIdx = classToTabIndex(num);
    if (tabIdx !== null) setActiveTab(tabIdx);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleClassSearch();
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        /* ── Section ── */
        .tl-section {
          background: #f8f4ed;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .tl-inner { max-width: 1320px; margin: 0 auto; }

        /* ── Header ── */
        .tl-tag {
          display: inline-block; font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: #c9a84c;
          padding: 4px 12px; background: rgba(201,168,76,0.1); border-radius: 4px; margin-bottom: 12px;
        }
        .tl-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 800; line-height: 1.2;
          color: #0a1628; margin-bottom: 16px; letter-spacing: -0.02em;
        }
        .tl-title em { font-style: normal; color: #c9a84c; }
        .tl-desc { font-size: 1.05rem; color: #6b7280; max-width: 600px; line-height: 1.7; margin: 0; }

        /* ── Class Input ── */
        .tl-input-wrap {
          display: flex; align-items: flex-start; gap: 12px;
          flex-wrap: wrap; margin-top: 32px; margin-bottom: 8px;
        }
        .tl-input-group { display: flex; flex-direction: column; gap: 6px; }
        .tl-input-label {
          font-size: 0.78rem; font-weight: 600; color: #6b7280;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .tl-input-row { display: flex; gap: 10px; align-items: center; }
        .tl-class-input {
          width: 200px; padding: 10px 16px; border-radius: 8px;
          border: 1.5px solid #d1d5db; background: #ffffff;
          font-size: 0.92rem; font-family: 'DM Sans', sans-serif;
          color: #0a1628; outline: none; transition: border-color 0.2s;
        }
        .tl-class-input:focus { border-color: #c9a84c; }
        .tl-class-input::placeholder { color: #9ca3af; }
        .tl-class-input.tl-input-error { border-color: #ef4444; }
        .tl-search-btn {
          padding: 10px 24px; background: #0a1628; color: #ffffff;
          border: none; border-radius: 8px; font-size: 0.88rem;
          font-weight: 600; font-family: 'DM Sans', sans-serif;
          cursor: pointer; transition: background 0.2s, transform 0.1s;
          white-space: nowrap;
        }
        .tl-search-btn:hover { background: #c9a84c; }
        .tl-search-btn:active { transform: scale(0.97); }
        .tl-input-error-msg {
          font-size: 0.78rem; color: #ef4444; margin-top: 4px;
          display: flex; align-items: center; gap: 4px;
        }
        .tl-input-hint {
          font-size: 0.78rem; color: #9ca3af; margin-top: 4px;
        }

        /* ── Tabs ── */
        .tl-tabs {
          display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; margin-top: 32px;
        }
        .tl-tab {
          padding: 10px 22px; border-radius: 8px; font-size: 0.85rem; font-weight: 600;
          border: 1.5px solid #e2e8f0; background: transparent; cursor: pointer;
          transition: all 0.3s; color: #1a1a2e; font-family: 'DM Sans', sans-serif;
        }
        .tl-tab:hover:not(.tl-tab-active) { border-color: #c9a84c; color: #c9a84c; }
        .tl-tab-active { background: #0a1628; color: #ffffff; border-color: #0a1628; }

        /* ── Stage cards grid ── */
        .tl-stages {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .tl-stage {
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;
          padding: 24px; position: relative; transition: all 0.3s;
        }
        .tl-stage:hover {
          border-color: #c9a84c;
          box-shadow: 0 8px 30px rgba(201,168,76,0.1);
          transform: translateY(-3px);
        }
        .stage-num {
          font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #c9a84c;
          font-weight: 500; margin-bottom: 8px; letter-spacing: 0.1em; display: block;
        }
        .stage-period {
          position: absolute; top: 16px; right: 16px;
          font-size: 0.68rem; background: rgba(201,168,76,0.1); color: #c9a84c;
          padding: 3px 8px; border-radius: 100px; font-weight: 600;
          font-family: 'DM Sans', sans-serif;
        }
        .stage-title {
          font-size: 1rem; font-weight: 700; color: #0a1628; margin-bottom: 10px;
        }
        .stage-items { list-style: none; padding: 0; margin: 0; }
        .stage-items li {
          font-size: 0.82rem; color: #6b7280; padding: 4px 0;
          display: flex; align-items: flex-start; gap: 6px; line-height: 1.4;
        }
        .stage-items li::before {
          content: '→'; color: #c9a84c; font-size: 0.7rem; margin-top: 2px; flex-shrink: 0;
        }
        /* milestone dot */
        .stage-milestone-dot {
          position: absolute; top: -8px; left: 24px;
          width: 16px; height: 16px; border-radius: 50%;
          background: #c9a84c; border: 3px solid #f8f4ed;
          box-shadow: 0 0 0 2px rgba(201,168,76,0.3);
        }
        /* note + slogan */
        .tl-note {
          margin-top: 24px; background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.25); border-radius: 10px; padding: 14px 18px;
          font-size: 0.82rem; color: #92400e; line-height: 1.6;
        }
        .tl-slogan {
          margin-top: 12px; background: #0a1628; border-radius: 10px;
          padding: 14px 18px; text-align: center;
          font-size: 0.82rem; font-weight: 800; color: #c9a84c;
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .tl-section { padding: 56px 20px; }
          .tl-stages { grid-template-columns: 1fr; }
          .tl-class-input { width: 140px; }
        }
          `,
        }}
      />

      <section className="tl-section" id="timeline">
        <div className="tl-inner">
          <div className="tl-tag">Class-wise Timeline</div>
          <h2 className="tl-title">Your Year-by-Year <em>Admissions Roadmap</em></h2>
          <p className="tl-desc">
            Enter your current class below or select a tab to see your personalised action plan for getting into a top global university.
          </p>

          {/* ── Class Input Field (NEW) ── */}
          <div className="tl-input-wrap">
            <div className="tl-input-group">
              <span className="tl-input-label">Enter Your Current Class</span>
              <div className="tl-input-row">
                <input
                  type="number"
                  min={8}
                  max={12}
                  value={classInput}
                  onChange={(e) => {
                    setClassInput(e.target.value);
                    setInputError('');
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g. 10"
                  className={`tl-class-input${inputError ? ' tl-input-error' : ''}`}
                />
                <button className="tl-search-btn" onClick={handleClassSearch}>
                  Show Timeline →
                </button>
              </div>
              {inputError ? (
                <span className="tl-input-error-msg">⚠ {inputError}</span>
              ) : (
                <span className="tl-input-hint">Enter class 8, 9, 10, 11, or 12</span>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="tl-tabs">
            {timelineTabs.map((t, i) => (
              <button
                key={t.id}
                className={`tl-tab${activeTab === i ? ' tl-tab-active' : ''}`}
                onClick={() => {
                  setActiveTab(i);
                  setClassInput('');
                  setInputError('');
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Stage cards */}
          <TimelineStages steps={tab.steps} />

          {/* Note + Slogan */}
          {tab.note && <div className="tl-note">📌 {tab.note}</div>}
          {tab.slogan && <div className="tl-slogan">✨ {tab.slogan}</div>}
        </div>
      </section>
    </>
  );
}

/* ── Group flat steps into milestone-bounded cards ── */
function TimelineStages({ steps }: { steps: (typeof timelineTabs)[0]['steps'] }) {
  const groups: { heading: string; period: string; items: typeof steps }[] = [];
  let currentGroup: (typeof groups)[0] | null = null;

  steps.forEach((step) => {
    if (step.milestone) {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = { heading: step.title, period: step.month, items: [] };
    } else if (currentGroup) {
      currentGroup.items.push(step);
    } else {
      if (!currentGroup) currentGroup = { heading: 'Pre-Start', period: step.month, items: [] };
      currentGroup.items.push(step);
    }
  });
  if (currentGroup) groups.push(currentGroup);

  return (
    <div className="tl-stages">
      {groups.map((g, gi) => (
        <div className="tl-stage" key={gi}>
          {gi > 0 && <div className="stage-milestone-dot" />}
          <span className="stage-num">STAGE {String(gi + 1).padStart(2, '0')}</span>
          <span className="stage-period">{g.period}</span>
          <div className="stage-title">{g.heading}</div>
          {g.items.length > 0 && (
            <ul className="stage-items">
              {g.items.map((item, ii) => (
                <li key={ii}>
                  <span>
                    <strong style={{ color: '#0a1628', fontSize: '0.82rem' }}>{item.title}</strong>
                    {item.desc && (
                      <>
                        <br />
                        <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                          {item.desc.split('\n\n')[0]}
                        </span>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION 2 — TESTIMONIALS  (unchanged)
══════════════════════════════════════════════════════════ */
function YouTubeModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div style={{ width: 'min(860px, 95vw)', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: -44, right: 0,
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', width: 36, height: 36, borderRadius: '50%',
            fontSize: '1rem', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', borderRadius: 10 }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allowFullScreen
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [activePanel, setActivePanel] = useState<'written' | 'video'>('written');
  const [videoModal, setVideoModal] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ts-section { background: #0a1628; padding: 80px 24px; font-family: 'DM Sans', sans-serif; }
        .ts-inner { max-width: 1320px; margin: 0 auto; }
        .ts-header { text-align: center; margin-bottom: 48px; }
        .ts-tag {
          display: inline-block; font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: #c9a84c;
          padding: 4px 12px; background: rgba(201,168,76,0.15); border-radius: 4px; margin-bottom: 12px;
        }
        .ts-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 800; line-height: 1.2;
          color: #ffffff; margin-bottom: 16px; letter-spacing: -0.02em;
        }
        .ts-title em { font-style: normal; color: #c9a84c; }
        .ts-desc { font-size: 1.05rem; color: rgba(255,255,255,0.65); max-width: 600px; margin: 0 auto; line-height: 1.7; }
        .ts-panel-tabs { display: flex; gap: 10px; margin-bottom: 36px; flex-wrap: wrap; }
        .ts-panel-tab {
          padding: 10px 24px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;
          border: 1.5px solid rgba(255,255,255,0.2); background: transparent; cursor: pointer;
          transition: all 0.3s; color: #ffffff; font-family: 'DM Sans', sans-serif;
        }
        .ts-panel-tab:hover:not(.ts-panel-tab-active) { border-color: #c9a84c; color: #c9a84c; }
        .ts-panel-tab-active { background: #ffffff; color: #0a1628; border-color: #ffffff; }
        .ts-reviews-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .ts-review-card {
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px;
          padding: 28px; transition: all 0.3s;
        }
        .ts-review-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.15); transform: translateY(-3px); }
        .ts-stars { color: #c9a84c; font-size: 1rem; margin-bottom: 14px; letter-spacing: 2px; }
        .ts-quote { font-size: 0.85rem; color: #1a1a2e; line-height: 1.7; margin-bottom: 16px; font-style: italic; }
        .ts-author { display: flex; align-items: center; gap: 12px; }
        .ts-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg,#0a1628,#1d4ed8);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 700; color: #fff; flex-shrink: 0; overflow: hidden;
        }
        .ts-author-name { font-size: 0.88rem; font-weight: 700; color: #0a1628; }
        .ts-author-detail { font-size: 0.75rem; color: #6b7280; }
        .ts-score-badge {
          display: inline-block; background: rgba(201,168,76,0.1); color: #c9a84c;
          font-size: 0.72rem; font-weight: 700; padding: 2px 8px; border-radius: 100px; margin-top: 2px;
        }
        .ts-video-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .ts-video-thumb {
          position: relative; border-radius: 12px; overflow: hidden;
          aspect-ratio: 16/9; cursor: pointer;
          border: 2px solid transparent; transition: all 0.3s; background: #112240;
        }
        .ts-video-thumb:hover { border-color: #c9a84c; transform: scale(1.02); }
        .ts-video-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ts-video-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1));
          display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px;
          transition: all 0.3s;
        }
        .ts-video-thumb:hover .ts-video-overlay { background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.25)); }
        .ts-play-btn {
          width: 54px; height: 54px; border-radius: 50%;
          background: rgba(255,255,255,0.95);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .ts-play-btn::after {
          content: ''; border-style: solid;
          border-width: 9px 0 9px 16px;
          border-color: transparent transparent transparent #0a1628; margin-left: 3px;
        }
        .ts-video-thumb:hover .ts-play-btn { transform: scale(1.1); background: #c9a84c; }
        .ts-video-label { color: #fff; font-size: 0.78rem; font-weight: 600; text-align: center; padding: 0 12px; font-family: 'DM Sans', sans-serif; }
        .ts-no-thumb {
          width: 100%; height: 100%;
          background: linear-gradient(135deg,#0a1628,#1d4ed8);
          display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 10px;
        }
        @media (max-width: 1024px) {
          .ts-reviews-grid { grid-template-columns: 1fr 1fr; }
          .ts-video-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .ts-section { padding: 56px 20px; }
          .ts-reviews-grid { grid-template-columns: 1fr; }
          .ts-video-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {videoModal && <YouTubeModal videoId={videoModal} onClose={() => setVideoModal(null)} />}

      <section className="ts-section" id="testimonials">
        <div className="ts-inner">
          <div className="ts-header">
            <div className="ts-tag">Student Voices</div>
            <h2 className="ts-title">What Our Students &amp; <em>Families Say</em></h2>
            <p className="ts-desc">Real stories from students who achieved their dream university admissions with EduQuest.</p>
          </div>

          <div className="ts-panel-tabs">
            <button className={`ts-panel-tab${activePanel === 'written' ? ' ts-panel-tab-active' : ''}`} onClick={() => setActivePanel('written')}>
              📝 Written Reviews
            </button>
            <button className={`ts-panel-tab${activePanel === 'video' ? ' ts-panel-tab-active' : ''}`} onClick={() => setActivePanel('video')}>
              🎬 Video Stories
            </button>
          </div>

          {activePanel === 'written' && (
            <div className="ts-reviews-grid">
              {testimonials.map((t) => (
                <div className="ts-review-card" key={t.name}>
                  <div className="ts-stars">★★★★★</div>
                  <p className="ts-quote">"{t.text}"</p>
                  <div className="ts-author">
                    <div className="ts-avatar">
                      {t.photo ? (
                        <Image src={t.photo} alt={t.name} width={44} height={44} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        t.name[0]
                      )}
                    </div>
                    <div>
                      <div className="ts-author-name">{t.name}</div>
                      <div className="ts-author-detail">
                        {t.location} <span className="ts-score-badge">{t.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activePanel === 'video' && (
            <div className="ts-video-grid">
              {videoStories.map((v, i) => (
                <div className="ts-video-thumb" key={i} onClick={() => setVideoModal(v.youtubeId)}>
                  {v.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={v.thumb} alt={v.label} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  ) : (
                    <div className="ts-no-thumb">
                      <span style={{ fontSize: '2rem', color: '#fff' }}>▶</span>
                    </div>
                  )}
                  <div className="ts-video-overlay">
                    <div className="ts-play-btn" />
                    <span className="ts-video-label">{v.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════════════════════ */
export default function TimelineAndTestimonials() {
  return (
    <>
      <TimelineSection />
      <TestimonialsSection />
    </>
  );
}