"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "System",       href: "#what" },
  { label: "Architecture", href: "#architecture" },
  { label: "Pathways",     href: "#pathways" },
  { label: "Philosophy",   href: "#philosophy" },
  { label: "Outcomes",     href: "#outcomes" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close mobile drawer on ≥900 px resize */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 900) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
     

       <style
        dangerouslySetInnerHTML={{
          __html: `
             @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --oq-bg:       #0A0A08;
          --oq-bg2:      #111110;
          --oq-line:     rgba(255,255,255,0.08);
          --oq-line2:    rgba(255,255,255,0.14);
          --oq-text:     #F0EDE6;
          --oq-text2:    #9E9B94;
          --oq-text3:    #6A6865;
          --oq-gold:     #C9A84C;
          --oq-gold-dim: rgba(201,168,76,0.12);
          --oq-ui:       'Syne', sans-serif;
          --oq-body:     'DM Sans', sans-serif;
        }

        /* ── Nav shell ── */
        .oq-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 5%;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(10,10,8,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--oq-line);
          transition: box-shadow 0.3s;
          font-family: var(--oq-body);
        }
        .oq-nav.scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.32);
        }

        /* ── Logo ── */
        .oq-logo {
          font-family: var(--oq-ui);
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -0.5px;
          color: var(--oq-text);
          text-decoration: none;
          flex-shrink: 0;
          line-height: 1;
        }
        .oq-logo span { color: var(--oq-gold); }

        /* ── Desktop links ── */
        .oq-links {
          display: flex; align-items: center; gap: 36px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .oq-links a {
          color: var(--oq-text2);
          text-decoration: none;
          font-family: var(--oq-body);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .oq-links a:hover { color: var(--oq-text); }

        /* ── CTA group ── */
        .oq-cta {
          display: flex; align-items: center; gap: 12px;
          flex-shrink: 0;
        }

        /* Outline button */
        .oq-btn-outline {
          padding: 9px 22px;
          border: 1px solid var(--oq-line2);
          border-radius: 2px;
          background: transparent;
          color: var(--oq-text);
          font-family: var(--oq-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, background 0.2s;
          display: inline-block;
        }
        .oq-btn-outline:hover {
          border-color: var(--oq-gold);
          background: var(--oq-gold-dim);
        }

        /* Gold button */
        .oq-btn-gold {
          padding: 9px 22px;
          border: 1px solid var(--oq-gold);
          border-radius: 2px;
          background: var(--oq-gold);
          color: #0A0A08;
          font-family: var(--oq-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.2s;
          display: inline-block;
        }
        .oq-btn-gold:hover { opacity: 0.88; }

        /* ── Hamburger ── */
        .oq-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--oq-line2);
          border-radius: 4px;
          cursor: pointer;
          padding: 10px;
          flex-shrink: 0;
        }
        .oq-hamburger span {
          display: block;
          width: 20px; height: 2px;
          background: var(--oq-text);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
        }

        /* ── Mobile drawer ── */
        .oq-drawer {
          display: none;
          position: fixed;
          top: 72px; left: 0; right: 0; bottom: 0;
          z-index: 99;
          background: rgba(10,10,8,0.98);
          border-top: 1px solid var(--oq-line);
          overflow-y: auto;
          padding: 16px 5% 40px;
          animation: oqDrawerIn 0.25s ease;
        }
        @keyframes oqDrawerIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .oq-drawer-links {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column;
        }
        .oq-drawer-links a {
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid var(--oq-line);
          color: var(--oq-text2);
          text-decoration: none;
          font-size: 1rem; font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          font-family: var(--oq-body);
        }
        .oq-drawer-links a:hover { color: var(--oq-text); }
        .oq-drawer-ctas {
          display: flex; flex-direction: column; gap: 12px;
          margin-top: 28px;
        }
        .oq-drawer-ctas .oq-btn-outline,
        .oq-drawer-ctas .oq-btn-gold {
          text-align: center;
          padding: 13px 22px;
          font-size: 14px;
          display: block;
        }

        /* Overlay */
        .oq-overlay {
          display: none;
          position: fixed; inset: 0; z-index: 98;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(2px);
          animation: oqFadeIn 0.2s ease;
        }
        @keyframes oqFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .oq-links         { display: none !important; }
          .oq-cta           { display: none !important; }
          .oq-hamburger     { display: flex !important; }
          .oq-drawer.open   { display: block !important; }
          .oq-overlay.open  { display: block !important; }
        }
        @media (min-width: 901px) {
          .oq-links        { display: flex !important; }
          .oq-cta          { display: flex !important; }
          .oq-hamburger    { display: none !important; }
          .oq-drawer       { display: none !important; }
          .oq-overlay      { display: none !important; }
        }
          `,
        }}
      />



      {/* ── NAV BAR ── */}
      <nav className={`oq-nav${scrolled ? " scrolled" : ""}`}>

        {/* Logo */}
        <Link href="/" className="oq-logo">
          Omni<span>Quest</span>
        </Link>

        {/* Desktop links */}
        <ul className="oq-links">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="oq-cta">
          <a href="#pathways" className="oq-btn-outline">
            Choose Pathway
          </a>
          <a
            href="https://eduquest.org.in/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="oq-btn-gold"
          >
            Book Strategy Session
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="oq-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span style={{
            transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
          }} />
          <span style={{
            transform: mobileOpen ? "scaleX(0)" : "none",
            opacity:   mobileOpen ? 0 : 1,
          }} />
          <span style={{
            transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }} />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`oq-drawer${mobileOpen ? " open" : ""}`}>
        <ul className="oq-drawer-links">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="oq-drawer-ctas">
          <a
            href="#pathways"
            className="oq-btn-outline"
            onClick={() => setMobileOpen(false)}
          >
            Choose Pathway
          </a>
          <a
            href="https://eduquest.org.in/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="oq-btn-gold"
            onClick={() => setMobileOpen(false)}
          >
            Book Strategy Session
          </a>
        </div>
      </div>

      {/* ── OVERLAY ── */}
      {mobileOpen && (
        <div
          className="oq-overlay open"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}