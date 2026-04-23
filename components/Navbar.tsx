"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Programs",
    items: [
      { icon: "✈️", label: "Study Abroad", sub: "EduQuest Global", href: "https://eduquest.org.in/", external: true },
      { icon: "📊", label: "SAT / ACT Coaching", sub: "Score 1500+", href: "https://eduquest.org.in/sat/", external: true },
      { icon: "💼", label: "MBA Admissions", sub: "MbaWizards", href: "https://eduquest.org.in/", external: true },
      { icon: "🎯", label: "GMAT Prep", sub: "720+ Blueprint", href: "https://eduquest.org.in/", external: true },
      { icon: "💻", label: "Skill Programs", sub: "AI, Data Science", href: "https://eduquest.org.in/eduquest-aptech/", external: true },
    ],
  },
  { label: "Results", href: "#results" },
  { label: "About", href: "#legacy" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(11,28,61,.98)" : "rgba(11,28,61,.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,.07)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,.24)" : "none",
        transition: "var(--transition)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70, gap: 32 }}>

          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              fontFamily: "var(--font-head)", fontSize: "1.55rem", fontWeight: 800,
              color: "white", flexShrink: 0, textDecoration: "none",
            }}
          >
            <div style={{ width: 8, height: 8, background: "var(--teal)", borderRadius: "50%", animation: "glowPulse 2s ease-in-out infinite" }} />
            Omni<span style={{ background: "var(--grad-teal)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Quest</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "center" }}
            className="desktop-nav">
            {NAV_ITEMS.map((item) =>
              item.items ? (
                // Dropdown item
                <div
                  key={item.label}
                  ref={dropdownRef}
                  style={{ position: "relative" }}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setDropdownOpen(o => !o)}
                    style={{
                      display: "flex", alignItems: "center", gap: 5,
                      padding: "8px 14px", borderRadius: 8, fontSize: ".88rem",
                      fontWeight: 500, color: dropdownOpen ? "white" : "rgba(255,255,255,.78)",
                      background: dropdownOpen ? "rgba(255,255,255,.07)" : "transparent",
                      border: "none", cursor: "pointer", transition: "var(--transition)",
                    }}
                  >
                    {item.label}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      style={{ transition: "transform .2s", transform: dropdownOpen ? "rotate(180deg)" : "none" }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: dropdownOpen
                        ? "translate(-50%, 0)"
                        : "translate(-50%, -8px)",

                      background: "white",
                      borderRadius: 16,
                      boxShadow: "var(--shadow-xl)",
                      minWidth: 260,
                      overflow: "hidden",

                      opacity: dropdownOpen ? 1 : 0,
                      visibility: dropdownOpen ? "visible" : "hidden",

                      transition: "opacity .22s ease, transform .22s ease, visibility .22s",
                      pointerEvents: dropdownOpen ? "auto" : "none",
                    }}
                  >
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target={sub.external ? "_blank" : undefined}
                        rel={sub.external ? "noopener noreferrer" : undefined}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "flex", alignItems: "center", gap: 12,
                          padding: "14px 20px", fontSize: ".88rem",
                          color: "var(--grey-800)", transition: "var(--transition)",
                          borderLeft: "3px solid transparent", textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "var(--sky)";
                          el.style.borderLeftColor = "var(--teal)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "transparent";
                          el.style.borderLeftColor = "transparent";
                        }}
                      >
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                          {sub.icon}
                        </div>
                        <div>
                          <span style={{ fontWeight: 600, display: "block", color: "var(--navy)" }}>{sub.label}</span>
                          <span style={{ fontSize: ".78rem", color: "var(--grey-400)" }}>{sub.sub}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                // Regular nav link
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: "8px 14px", borderRadius: 8, fontSize: ".88rem",
                    fontWeight: 500, color: "rgba(255,255,255,.78)",
                    textDecoration: "none", transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "white"; el.style.background = "rgba(255,255,255,.07)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "rgba(255,255,255,.78)"; el.style.background = "transparent";
                  }}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* ── CTAs ── */}
          <div style={{ display: "flex", gap: 10, flexShrink: 0, alignItems: "center" }}>
            <Link
              href="/personality-test"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px",
                borderRadius: 50, background: "rgba(0,201,177,.15)",
                border: "1.5px solid rgba(0,201,177,.4)", color: "var(--teal)",
                fontSize: ".85rem", fontWeight: 500, textDecoration: "none",
                transition: "var(--transition)", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,177,.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,177,.15)"; }}
            >
              🧠 Personality Test
            </Link>
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", padding: "10px 22px",
                borderRadius: 50, background: "var(--grad-teal)", color: "white",
                fontSize: ".88rem", fontWeight: 500, textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,201,177,.35)", transition: "var(--transition)",
                whiteSpace: "nowrap",
              }}
            >
              Book Free Call
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none", flexDirection: "column", gap: 5,
              background: "transparent", border: "none", cursor: "pointer", padding: 8,
            }}
            className="hamburger-btn"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 24, height: 2, background: "white", borderRadius: 2, transition: "var(--transition)",
                transform: mobileOpen
                  ? i === 0 ? "rotate(45deg) translateY(7px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translateY(-7px)"
                  : "none",
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div style={{
          background: "rgba(11,28,61,.98)", borderTop: "1px solid rgba(255,255,255,.07)",
          padding: "16px 24px 24px", animation: "fadeIn .2s ease",
        }}>
          {/* Programs accordion */}
          <div style={{ marginBottom: 4 }}>
            <button
              onClick={() => setMobileProgOpen(o => !o)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", borderRadius: 10, background: "transparent",
                border: "none", cursor: "pointer", color: "rgba(255,255,255,.78)",
                fontSize: ".9rem", fontWeight: 500,
              }}
            >
              Programs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ transform: mobileProgOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {mobileProgOpen && (
              <div style={{ paddingLeft: 16, borderLeft: "2px solid rgba(0,201,177,.3)", marginLeft: 16, marginTop: 4 }}>
                {NAV_ITEMS[0].items!.map(sub => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    target={sub.external ? "_blank" : undefined}
                    rel={sub.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block", padding: "10px 12px", borderRadius: 8,
                      color: "rgba(255,255,255,.65)", fontSize: ".88rem",
                      textDecoration: "none", transition: "color .2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)"; }}
                  >
                    {sub.icon} {sub.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other nav items */}
          {NAV_ITEMS.slice(1).map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", padding: "12px 16px", borderRadius: 10,
                color: "rgba(255,255,255,.78)", fontSize: ".9rem",
                fontWeight: 500, textDecoration: "none", transition: "color .2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.78)"; }}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.08)" }}>
            <Link
              href="/personality-test"
              onClick={() => setMobileOpen(false)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 20px", borderRadius: 50, background: "rgba(0,201,177,.15)", border: "1.5px solid rgba(0,201,177,.4)", color: "var(--teal)", fontSize: ".9rem", fontWeight: 500, textDecoration: "none" }}
            >
              🧠 Personality Test
            </Link>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "13px 22px", borderRadius: 50, background: "var(--grad-teal)", color: "white", fontSize: ".9rem", fontWeight: 500, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,201,177,.35)" }}
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}