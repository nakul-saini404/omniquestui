'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─── NAV DATA ───────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Home', href: '/eduQuest' },
  { label: 'About Us', href: 'https://eduquest.org.in/about-us/' },
  { label: 'EduQuest × Aptech', href: 'https://eduquest.org.in/eduquest-aptech/' },
  {
    label: 'Profile Building',
    href: '/eduquest-guide',
    children: [
      { label: 'EduQuest Guide', href: '/eduquest-guide' },
    
    ],
  },
  {
    label: 'Test Prep',
    href: '#',
    children: [
      { label: 'SAT Coaching', href: '/sat' },
      { label: 'LSAT Coaching', href: '/lsat' },
      { label: 'SSAT Coaching', href: '/ssat' },
      { label: 'PSAT Coaching', href: '/psat' },
      { label: 'ACT Coaching', href: '/act' },
      { label: 'AP Coaching', href: '/ap-coaching' },
      { label: 'Pre-AP Coaching', href: '/pre-ap-gurgaon' },
      { label: 'TMUA Coaching', href: '/tmua' },
      { label: 'UCAT Coaching', href: '/ucat' },
      { label: 'MCAT Coaching', href: '/mcat' },
      { label: 'IPMAT Coaching', href: '/ipmat-coaching-and-profile-building-eduquest-2026' },
      { label: 'IELTS Coaching', href: '/ielts' },
      { label: 'DASA/CIWG', href: '/dasa-and-ciwg-quota' },
      { label: 'PTE Coaching', href: '/pte' },
      { label: 'TOEFL Coaching', href: '/toefl' },
    ],
  },
  {
    label: 'Online Tuition',
    href: '#',
    children: [
      { label: 'Online Home Tuition', href: 'https://eduquest.org.in/online-home-tuition/' },
      { label: 'IB', href: 'https://eduquest.org.in/ib-international-baccalaureate/' },
      { label: 'Indian Curricula', href: 'https://eduquest.org.in/indian-curricula/' },
      { label: 'International Curricula', href: 'https://eduquest.org.in/international-curricula/' },
      { label: 'Olympiads', href: 'https://eduquest.org.in/olympiad/' },
    ],
  },
  { label: 'Study Abroad', href: 'https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/' },
  {
    label: 'Language',
    href: '#',
    children: [
      { label: 'English', href: 'https://eduquest.org.in/spoken-english/' },
      { label: 'German', href: 'https://eduquest.org.in/german/' },
      { label: 'French', href: 'https://eduquest.org.in/french/' },
      { label: 'Duolingo', href: 'https://eduquest.org.in/duolingo/' },
      { label: 'Celpip', href: 'https://eduquest.org.in/celpip/' },
    ],
  },
  { label: 'Blog', href: 'https://eduquest.org.in/blog' },
  { label: 'Contact', href: '/contact-us' },
  { label: 'Dashboard', href: '/edupath' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/eduquestind/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/eduquest1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eduquest_education_',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/eduquest-learning-centre/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCtbeu57cbXt1NTyZGfkaQ3w',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const CSS = {
  navy: '#0a1628',
  navyMid: '#112240',
  gold: '#c9a84c',
  goldLight: '#f0c96e',
  white: '#ffffff',
  text: '#1a1a2e',
  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
};

export default function Navbar({ onToggleDesign }: { onToggleDesign?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>

     <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        /* ════════════════════════════════════════
           ROW 1 — TOPBAR (phone + social)
        ════════════════════════════════════════ */
        .eq-row1 {
          background: ${CSS.navy};
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: #a0aec0;
          letter-spacing: 0.02em;
        }
        .eq-row1-inner {
          width: 100%;
          padding: 5px clamp(14px, 2.5vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }
        .eq-row1-contact {
          display: flex;
          gap: clamp(8px, 1.5vw, 20px);
          align-items: center;
          flex-wrap: wrap;
        }
        .eq-row1-contact a {
          color: #a0aec0;
          text-decoration: none;
          transition: ${CSS.transition};
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .eq-row1-contact a:hover { color: ${CSS.gold}; }
        .eq-row1-social {
          display: flex;
          gap: 5px;
          align-items: center;
        }
        .eq-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 5px;
          color: #a0aec0;
          background: rgba(255,255,255,0.06);
          transition: ${CSS.transition};
          text-decoration: none;
          flex-shrink: 0;
        }
        .eq-social-btn:hover { color: ${CSS.white}; background: rgba(201,168,76,0.25); }
        .eq-social-btn svg { display: block; }

        /* ════════════════════════════════════════
           ROW 2 — LOGO + CTA BUTTONS
        ════════════════════════════════════════ */
        .eq-row2 {
          background: ${CSS.white};
          border-bottom: 1px solid rgba(0,0,0,0.07);
          width: 100%;
          font-family: 'DM Sans', sans-serif;
        }
        .eq-row2-inner {
          width: 100%;
          padding: 10px clamp(14px, 2.5vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(8px, 1.5vw, 24px);
        }
        .eq-logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .eq-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 1.8vw, 1.6rem);
          font-weight: 900;
          color: ${CSS.navy};
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .eq-logo-text span { color: ${CSS.gold}; }
        .eq-row2-actions {
          display: flex;
          gap: clamp(6px, 0.8vw, 10px);
          align-items: center;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .eq-btn-outline {
          border: 1.5px solid ${CSS.navy};
          color: ${CSS.navy};
          padding: 7px clamp(10px, 1vw, 18px);
          border-radius: 6px;
          font-size: clamp(0.72rem, 0.85vw, 0.82rem);
          font-weight: 600;
          text-decoration: none;
          transition: ${CSS.transition};
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
          display: inline-block;
        }
        .eq-btn-outline:hover { background: ${CSS.navy}; color: ${CSS.white}; }
        .eq-btn-gold {
          background: ${CSS.gold};
          color: ${CSS.navy};
          padding: 8px clamp(12px, 1.2vw, 22px);
          border-radius: 6px;
          font-size: clamp(0.72rem, 0.85vw, 0.82rem);
          font-weight: 700;
          text-decoration: none;
          transition: ${CSS.transition};
          white-space: nowrap;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          display: inline-block;
        }
        .eq-btn-gold:hover { background: ${CSS.goldLight}; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(201,168,76,0.35); }

        /* ════════════════════════════════════════
           ROW 3 — NAV MENU
        ════════════════════════════════════════ */
        .eq-row3 {
          background: ${CSS.navy};
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: ${CSS.transition};
        }
        .eq-row3.scrolled { box-shadow: 0 4px 20px rgba(0,0,0,0.25); }
        .eq-row3-inner {
          width: 100%;
          padding: 0 clamp(14px, 2.5vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .eq-nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0;
          flex: 1;
        }
        .eq-nav-menu > li { position: relative; }
        .eq-nav-menu > li > a {
          display: block;
          padding: 0 clamp(6px, 0.9vw, 15px);
          height: 46px;
          line-height: 46px;
          font-size: clamp(0.7rem, 0.82vw, 0.82rem);
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          white-space: nowrap;
          transition: ${CSS.transition};
          letter-spacing: 0.01em;
          position: relative;
        }
        .eq-nav-menu > li > a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          right: 50%;
          height: 2px;
          background: ${CSS.gold};
          transition: ${CSS.transition};
        }
        .eq-nav-menu > li:hover > a,
        .eq-nav-menu > li.has-open > a { color: ${CSS.gold}; }
        .eq-nav-menu > li:hover > a::after,
        .eq-nav-menu > li.has-open > a::after { left: clamp(6px, 0.9vw, 15px); right: clamp(6px, 0.9vw, 15px); }
        .eq-has-arrow::after { content: '▾' !important; position: static !important; height: auto !important; background: none !important; margin-left: 2px; font-size: 0.6rem; display: inline; }
        .eq-has-arrow { position: relative; }
        .eq-has-arrow .eq-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: clamp(6px, 0.9vw, 15px);
          right: clamp(6px, 0.9vw, 15px);
          height: 2px;
          background: ${CSS.gold};
          opacity: 0;
          transition: ${CSS.transition};
        }

        /* Simpler approach for arrow items */
        .eq-nav-menu > li > a.eq-has-arrow {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .eq-nav-menu > li > a.eq-has-arrow::after {
          content: '▾';
          position: static;
          height: auto;
          background: none;
          width: auto;
          font-size: 0.6rem;
          line-height: 1;
          transition: transform 0.2s;
        }
        .eq-nav-menu > li.has-open > a.eq-has-arrow::after { transform: rotate(180deg); }

        /* ── DROPDOWN ── */
        .eq-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 210px;
          background: ${CSS.white};
          border: 1px solid rgba(0,0,0,0.08);
          border-top: 2px solid ${CSS.gold};
          border-radius: 0 0 8px 8px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: ${CSS.transition};
          z-index: 999;
          list-style: none;
          padding: 8px 0;
          margin: 0;
          pointer-events: none;
        }
        .eq-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .eq-dropdown li a {
          display: block;
          padding: 8px 16px;
          font-size: 0.78rem;
          color: ${CSS.text};
          text-decoration: none;
          transition: ${CSS.transition};
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          border-left: 2px solid transparent;
        }
        .eq-dropdown li a:hover {
          background: rgba(201,168,76,0.08);
          color: ${CSS.gold};
          border-left-color: ${CSS.gold};
          padding-left: 20px;
        }

        /* Hamburger — only shown on small screens */
        .eq-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          background: none;
          border: none;
          flex-shrink: 0;
        }
        .eq-hamburger span {
          width: 22px;
          height: 2px;
          background: ${CSS.navy};
          border-radius: 2px;
          transition: ${CSS.transition};
          display: block;
        }
        .eq-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .eq-hamburger.open span:nth-child(2) { opacity: 0; }
        .eq-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ════════════════════════════════════════
           MOBILE DRAWER
        ════════════════════════════════════════ */
        .eq-mobile-nav {
          display: none;
          position: fixed;
          inset: 0;
          background: ${CSS.navy};
          z-index: 1999;
          overflow-y: auto;
          padding: 20px 20px 40px;
          -webkit-overflow-scrolling: touch;
        }
        .eq-mobile-nav.open { display: block; animation: eq-fadeIn 0.25s ease; }
        .eq-mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .eq-mobile-nav-close {
          background: none;
          border: none;
          color: ${CSS.white};
          font-size: 1.5rem;
          cursor: pointer;
          padding: 4px 8px;
        }
        .eq-mobile-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 900;
          color: ${CSS.white};
        }
        .eq-mobile-logo span { color: ${CSS.gold}; }
        .eq-mobile-nav ul { list-style: none; padding: 0; margin: 0; }
        .eq-mobile-nav ul > li > a,
        .eq-mobile-nav-btn {
          display: flex;
          width: 100%;
          text-align: left;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: ${CSS.white};
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          justify-content: space-between;
          align-items: center;
        }
        .eq-mobile-dropdown { padding-left: 14px; }
        .eq-mobile-dropdown a {
          display: block;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.83rem;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }
        .eq-mobile-dropdown a:hover { color: ${CSS.gold}; }
        .eq-mobile-ctas { margin-top: 22px; display: flex; flex-direction: column; gap: 10px; }
        .eq-mobile-ctas a {
          display: block;
          text-align: center;
          padding: 13px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
        }
        .eq-mobile-cta-gold { background: ${CSS.gold}; color: ${CSS.navy}; }
        .eq-mobile-cta-outline { border: 1.5px solid rgba(255,255,255,0.3); color: ${CSS.white}; }
        .eq-mobile-social {
          display: flex;
          gap: 10px;
          margin-top: 26px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          flex-wrap: wrap;
        }
        .eq-mobile-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.08);
          transition: ${CSS.transition};
          text-decoration: none;
        }
        .eq-mobile-social-btn:hover { color: ${CSS.white}; background: rgba(201,168,76,0.3); }
        .eq-chevron { font-size: 0.75rem; transition: transform 0.2s; color: rgba(255,255,255,0.5); }
        .eq-chevron.open { transform: rotate(180deg); color: ${CSS.gold}; }

        @keyframes eq-fadeIn { from { opacity: 0 } to { opacity: 1 } }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 899px) {
          .eq-nav-menu { display: none; }
          .eq-hamburger { display: flex; }
          .eq-row2-actions { display: none; }
          .eq-row3 { display: none; }
        }
        @media (max-width: 640px) {
          .eq-row1-social { display: none; }
          .eq-row1-contact a:not(:first-child) { display: none; }
          .eq-row2-inner { padding: 8px 14px; }
        }
        @media (max-width: 375px) {
          .eq-mobile-nav { padding: 16px 16px 36px; }
        }

        /* On medium screens (900–1200): show nav, hide some CTAs */
        @media (max-width: 1200px) and (min-width: 900px) {
          .eq-row2-actions .eq-btn-outline:nth-child(2),
          .eq-row2-actions .eq-btn-outline:nth-child(3) { display: none; }
          .eq-nav-menu > li > a { padding: 0 clamp(4px, 0.65vw, 10px); font-size: clamp(0.67rem, 0.76vw, 0.78rem); }
        }
          `
        }}
      />
      
      {/* ── ROW 1: TOPBAR (phone + social) ──────────────────────────── */}
      <div className="eq-row1">
        <div className="eq-row1-inner">
          <div className="eq-row1-contact">
            <a href="tel:+919958041888">📞 +91-9958041888</a>
            <a href="tel:+919717738553">+91-9717738553</a>
            <a href="mailto:contact@eduquest.org.in">✉ contact@eduquest.org.in</a>
          </div>
          <div className="eq-row1-social">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="eq-social-btn"
                title={s.label}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── ROW 2: LOGO + CTA BUTTONS ───────────────────────────────── */}
      <div className="eq-row2">
        <div className="eq-row2-inner">
          {/* Logo */}
          <a href="/eduQuest" className="eq-logo-wrap">
            <Image
              src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
              alt="EduQuest Logo"
              width={130}
              height={42}
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              priority
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'block';
              }}
            />
            <span className="eq-logo-text" style={{ display: 'none' }}>
              Edu<span>Quest</span>
            </span>
          </a>

          {/* CTA Buttons */}
          <div className="eq-row2-actions">
            <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="eq-btn-outline">
              Practice Kiln
            </a>
            <a href="https://eduquest.org.in/free-download/" className="eq-btn-outline">
              Free Guide
            </a>
            <a href="https://eduquest.org.in/franchise/" className="eq-btn-outline">
              Franchise
            </a>
            <a href="/contact-us" className="eq-btn-gold">
              Apply Now ▶
            </a>
            {onToggleDesign && (
              <button
                onClick={onToggleDesign}
                style={{
                  border: `1.5px dashed ${CSS.gold}`,
                  color: CSS.gold,
                  background: 'transparent',
                  padding: '7px 12px',
                  borderRadius: 6,
                  fontSize: '0.73rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'DM Sans',sans-serif",
                  transition: CSS.transition,
                  whiteSpace: 'nowrap',
                }}
              >
                ✦ New Design
              </button>
            )}
          </div>

          {/* Hamburger — shown on mobile via CSS */}
          <button
            className={`eq-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── ROW 3: NAV MENU ─────────────────────────────────────────── */}
      <nav
        className={`eq-row3${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="eq-row3-inner">
          <ul className="eq-nav-menu">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={activeDropdown === item.label ? 'has-open' : ''}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={item.children ? 'eq-has-arrow' : ''}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className={`eq-dropdown${activeDropdown === item.label ? ' open' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ───────────────────────────────────────────── */}
      <div
        className={`eq-mobile-nav${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="eq-mobile-nav-header">
          <div className="eq-mobile-logo">Edu<span>Quest</span></div>
          <button className="eq-mobile-nav-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="eq-mobile-nav-btn"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    aria-expanded={mobileExpanded === item.label}
                  >
                    <span>{item.label}</span>
                    <span className={`eq-chevron${mobileExpanded === item.label ? ' open' : ''}`}>▾</span>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="eq-mobile-dropdown">
                      {item.children.map((child) => (
                        <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="eq-mobile-ctas">
          <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="eq-mobile-cta-outline">Practice Kiln</a>
          <a href="https://eduquest.org.in/free-download/" className="eq-mobile-cta-outline">Free Guide Book</a>
          <a href="https://eduquest.org.in/franchise/" className="eq-mobile-cta-outline">Franchise</a>
          <a href="#enroll" className="eq-mobile-cta-gold" onClick={() => setMobileOpen(false)}>▶ Apply for Elite Program 2027</a>
        </div>

        <div className="eq-mobile-social">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="eq-mobile-social-btn"
              title={s.label}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}