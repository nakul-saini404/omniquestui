'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ─── NAV DATA ───────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Home', href: 'https://eduquest.org.in' },
  { label: 'About Us', href: 'https://eduquest.org.in/about-us/' },
  { label: 'EduQuest × Aptech', href: 'https://eduquest.org.in/eduquest-aptech/' },
  {
    label: 'Profile Building',
    href: 'https://eduquest.org.in/profile-building-programs/',
    children: [
      { label: 'EduQuest Guide', href: 'https://eduquest.org.in/eduquest-guide/' },
      { label: 'Class 6–8', href: 'https://eduquest.org.in/mentoring-services-for-class-6-to-class-8-students/' },
      { label: 'Class 9', href: 'https://eduquest.org.in/build-a-strong-profile-for-class-9-students/' },
      { label: 'Class 10', href: 'https://eduquest.org.in/mentoring-services-for-class-10-students/' },
      { label: 'Class 11', href: 'https://eduquest.org.in/mentoring-services-for-class-11/' },
      { label: 'Class 12', href: 'https://eduquest.org.in/mentoring-services-for-class-12/' },
    ],
  },
  {
    label: 'Test Prep',
    href: '#',
    children: [
      { label: 'SAT Coaching', href: 'https://eduquest.org.in/sat/' },
      { label: 'ACT Coaching', href: 'https://eduquest.org.in/act/' },
      { label: 'AP Coaching', href: 'https://eduquest.org.in/ap-coaching/' },
      { label: 'Pre-AP Coaching', href: 'https://eduquest.org.in/pre-ap-coaching-in-gurgaon/' },
      { label: 'TMUA Coaching', href: 'https://eduquest.org.in/tmua/' },
      { label: 'UCAT Coaching', href: 'https://eduquest.org.in/ucat-exam-2025/' },
      { label: 'IPMAT Coaching', href: 'https://eduquest.org.in/ipmat-coaching-and-profile-building-eduquest-2026/' },
      { label: 'IELTS Coaching', href: 'https://eduquest.org.in/ielts/' },
      { label: 'PTE Coaching', href: 'https://eduquest.org.in/pte/' },
      { label: 'TOEFL Coaching', href: 'https://eduquest.org.in/toefl/' },
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
  { label: 'Contact', href: 'https://eduquest.org.in/contact-us/' },
];

const socialLinks = [
  { label: 'FB', href: 'https://www.facebook.com/eduquestind/' },
  { label: 'TW', href: 'https://twitter.com/eduquest1' },
  { label: 'IG', href: 'https://www.instagram.com/eduquest_education_' },
  { label: 'LI', href: 'https://www.linkedin.com/company/eduquest-learning-centre/' },
  { label: 'YT', href: 'https://www.youtube.com/channel/UCtbeu57cbXt1NTyZGfkaQ3w' },
];

// ─── INLINE STYLES (mirrors HTML CSS variables) ───────────────────────────
const CSS = {
  navy: '#0a1628',
  navyMid: '#112240',
  gold: '#c9a84c',
  goldLight: '#f0c96e',
  white: '#ffffff',
  text: '#1a1a2e',
  muted: '#6b7280',
  border: 'rgba(201,168,76,0.2)',
  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
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

  // Close mobile nav on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* ── STYLES ─────────────────────────────────────────────────────── */}
      <style>{`
        .eq-topbar { background:${CSS.navy}; color:#a0aec0; font-size:0.75rem; padding:6px 0; letter-spacing:0.02em; font-family:'DM Sans',sans-serif; }
        .eq-topbar a { color:#a0aec0; text-decoration:none; transition:${CSS.transition}; }
        .eq-topbar a:hover { color:${CSS.gold}; }
        .eq-topbar-inner { max-width:1320px; margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; }
        .eq-topbar-contact { display:flex; gap:20px; align-items:center; }
        .eq-topbar-social { display:flex; gap:12px; }
        .eq-topbar-social a { font-size:0.85rem; }

        .eq-navbar { background:${CSS.white}; border-bottom:1px solid rgba(0,0,0,0.06); position:sticky; top:0; z-index:1000; transition:${CSS.transition}; }
        .eq-navbar.scrolled { box-shadow:0 2px 20px rgba(0,0,0,0.1); }
        .eq-navbar-inner {  margin:0 auto; padding:0 24px; display:flex; align-items:center; justify-content:space-between; height:70px; }

        /* Logo */
        .eq-logo-text { font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:900; color:${CSS.navy}; letter-spacing:-0.02em; text-decoration:none; }
        .eq-logo-text span { color:${CSS.gold}; }

        /* Desktop nav menu */
        .eq-nav-menu { display:flex; align-items:center; list-style:none; margin:0; padding:0; gap:0; }
        .eq-nav-menu > li { position:relative; }
        .eq-nav-menu > li > a {
          display:block; padding:0 12px; height:70px; line-height:70px;
          font-size:0.8rem; font-weight:600; color:${CSS.text};
          text-decoration:none; white-space:nowrap; transition:${CSS.transition};
          letter-spacing:0.01em; font-family:'DM Sans',sans-serif;
        }
        .eq-nav-menu > li > a:hover,
        .eq-nav-menu > li.has-open > a { color:${CSS.gold}; }
        .eq-has-arrow::after { content:'▾'; margin-left:3px; font-size:0.68rem; }

        /* Dropdown */
        .eq-dropdown {
          position:absolute; top:100%; left:0; min-width:220px;
          background:${CSS.white}; border:1px solid rgba(0,0,0,0.08);
          border-radius:8px; box-shadow:0 12px 40px rgba(0,0,0,0.12);
          opacity:0; visibility:hidden; transform:translateY(8px);
          transition:${CSS.transition}; z-index:999; list-style:none;
          padding:8px 0; margin:0;
          pointer-events:none;
        }
        .eq-dropdown.open { opacity:1; visibility:visible; transform:translateY(0); pointer-events:auto; }
        .eq-dropdown li a {
          display:block; padding:9px 18px;
          font-size:0.8rem; color:${CSS.text}; text-decoration:none;
          transition:${CSS.transition}; font-family:'DM Sans',sans-serif;
          white-space:nowrap;
        }
        .eq-dropdown li a:hover { background:rgba(201,168,76,0.08); color:${CSS.gold}; padding-left:24px; }

        /* Nav action buttons */
        .eq-nav-actions { display:flex; gap:8px; align-items:center; }
        .eq-btn-outline {
          border:1.5px solid ${CSS.navy}; color:${CSS.navy};
          padding:7px 14px; border-radius:6px; font-size:0.78rem; font-weight:600;
          text-decoration:none; transition:${CSS.transition}; white-space:nowrap;
          font-family:'DM Sans',sans-serif;
        }
        .eq-btn-outline:hover { background:${CSS.navy}; color:${CSS.white}; }
        .eq-btn-gold {
          background:${CSS.gold}; color:${CSS.navy};
          padding:8px 16px; border-radius:6px; font-size:0.78rem; font-weight:700;
          text-decoration:none; transition:${CSS.transition}; white-space:nowrap;
          border:none; cursor:pointer; font-family:'DM Sans',sans-serif; display:inline-block;
        }
        .eq-btn-gold:hover { background:${CSS.goldLight}; transform:translateY(-1px); }

        /* Hamburger */
        .eq-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:8px; background:none; border:none; }
        .eq-hamburger span { width:24px; height:2px; background:${CSS.navy}; border-radius:2px; transition:${CSS.transition}; display:block; }
        .eq-hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .eq-hamburger.open span:nth-child(2) { opacity:0; }
        .eq-hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* Mobile nav */
        .eq-mobile-nav {
          display:none; position:fixed; inset:0; background:${CSS.navy}; z-index:1999;
          overflow-y:auto; padding:20px;
        }
        .eq-mobile-nav.open { display:block; animation:eq-fadeIn 0.25s ease; }
        .eq-mobile-nav-close {
          position:absolute; top:20px; right:20px;
          background:none; border:none; color:${CSS.white}; font-size:1.5rem; cursor:pointer;
        }
        .eq-mobile-logo { font-family:'Playfair Display',serif; font-size:1.4rem; font-weight:900; color:${CSS.white}; }
        .eq-mobile-logo span { color:${CSS.gold}; }
        .eq-mobile-nav ul { list-style:none; margin-top:50px; padding:0; }
        .eq-mobile-nav ul > li > a,
        .eq-mobile-nav-btn {
          display:block; width:100%; text-align:left;
          padding:13px 0; border-bottom:1px solid rgba(255,255,255,0.08);
          color:${CSS.white}; text-decoration:none; font-size:0.9rem; font-weight:500;
          background:none; border-left:none; border-right:none; border-top:none; cursor:pointer;
          font-family:'DM Sans',sans-serif; letter-spacing:0.01em;
          display:flex; justify-content:space-between; align-items:center;
        }
        .eq-mobile-nav-btn:last-of-type { border-bottom:none; }
        .eq-mobile-dropdown { padding-left:16px; }
        .eq-mobile-dropdown a {
          display:block; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.05);
          color:rgba(255,255,255,0.65); text-decoration:none; font-size:0.83rem;
          font-family:'DM Sans',sans-serif;
        }
        .eq-mobile-dropdown a:hover { color:${CSS.gold}; }
        .eq-mobile-ctas { margin-top:24px; display:flex; flex-direction:column; gap:10px; }
        .eq-mobile-ctas a {
          display:block; text-align:center; padding:12px; border-radius:8px;
          font-size:0.88rem; font-weight:700; text-decoration:none; font-family:'DM Sans',sans-serif;
        }
        .eq-mobile-cta-gold { background:${CSS.gold}; color:${CSS.navy}; }
        .eq-mobile-cta-outline { border:1.5px solid rgba(255,255,255,0.4); color:${CSS.white}; }

        .eq-chevron { font-size:0.75rem; transition:${CSS.transition}; color:rgba(255,255,255,0.5); }
        .eq-chevron.open { transform:rotate(180deg); color:${CSS.gold}; }

        @keyframes eq-fadeIn { from{opacity:0} to{opacity:1} }

        /* Google Fonts import (Playfair + DM Sans) */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;500;600;700&display=swap');

        /* Responsive */
        @media(max-width:1024px){
          .eq-nav-menu { display:none; }
          .eq-nav-actions { display:none; }
          .eq-hamburger { display:flex; }
        }
        @media(max-width:640px){
          .eq-topbar-social, .eq-topbar-contact a:not(:first-child) { display:none; }
        }
      `}</style>

      {/* ── TOPBAR ─────────────────────────────────────────────────────── */}
      <div className="eq-topbar">
        <div className="eq-topbar-inner">
          <div className="eq-topbar-contact">
            <a href="tel:+919958041888">📞 +91-9958041888</a>
            <a href="tel:+919717738553">+91-9717738553</a>
            <a href="mailto:contact@eduquest.org.in">✉ contact@eduquest.org.in</a>
          </div>
          <div className="eq-topbar-social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ────────────────────────────────────────────────── */}
      <nav className={`eq-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="eq-navbar-inner">

          {/* Logo */}
          <a href="https://eduquest.org.in" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image
              src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
              alt="EduQuest Logo"
              width={130}
              height={40}
              style={{ height: 38, width: 'auto', objectFit: 'contain' }}
              priority
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const sibling = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'block';
              }}
            />
            <span className="eq-logo-text" style={{ display: 'none' }}>
              Edu<span>Quest</span>
            </span>
          </a>

          {/* Desktop menu */}
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

          {/* Desktop CTA actions */}
          <div className="eq-nav-actions">
            <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="eq-btn-outline">
              Practice Kiln
            </a>
            <a href="https://eduquest.org.in/free-download/" className="eq-btn-outline">
              Free Guide
            </a>
            <a href="https://eduquest.org.in/franchise/" className="eq-btn-outline">
              Franchise
            </a>
            <a href="#enroll" className="eq-btn-gold">
              Apply Now
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
                  fontSize: '0.75rem',
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

          {/* Hamburger */}
          <button
            className={`eq-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE NAV ─────────────────────────────────────────────────── */}
      <div className={`eq-mobile-nav${mobileOpen ? ' open' : ''}`} id="eqMobileNav">
        <button className="eq-mobile-nav-close" onClick={() => setMobileOpen(false)}>✕</button>
        <div className="eq-mobile-logo">Edu<span>Quest</span></div>

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
                  >
                    <span>{item.label}</span>
                    <span className={`eq-chevron${mobileExpanded === item.label ? ' open' : ''}`}>▾</span>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="eq-mobile-dropdown">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="eq-mobile-ctas">
          <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="eq-mobile-cta-outline">
            Practice Kiln
          </a>
          <a href="https://eduquest.org.in/free-download/" className="eq-mobile-cta-outline">
            Free Guide Book
          </a>
          <a
            href="#enroll"
            className="eq-mobile-cta-gold"
            onClick={() => setMobileOpen(false)}
          >
            ▶ Apply for Elite Program 2027
          </a>
        </div>
      </div>
    </>
  );
}