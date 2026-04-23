"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Divisions",
    items: [
      { icon: "✈️", label: "Study Abroad", sub: "EduQuest Global", href: "https://eduquest.org.in/", external: true },
      { icon: "📊", label: "SAT / ACT Coaching", sub: "Score 1500+", href: "https://eduquest.org.in/sat/", external: true },
      { icon: "💼", label: "MBA Admissions", sub: "MbaWizards", href: "https://eduquest.org.in/", external: true },
      { icon: "🎯", label: "GMAT Prep", sub: "720+ Blueprint", href: "https://eduquest.org.in/", external: true },
      { icon: "💻", label: "Skill Programs", sub: "AI, Data Science", href: "https://eduquest.org.in/eduquest-aptech/", external: true },
    ],
  },
  { label: "Strategy Team", href: "#why-us" },
  { label: "Why OmniQuest", href: "#legacy" },
  { label: "Outcomes", href: "#results" },
  { label: "Insights", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close mobile on resize >= 768 */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const onEnter = () => { if (timerRef.current) clearTimeout(timerRef.current); setDropdownOpen(true); };
  const onLeave = () => { timerRef.current = setTimeout(() => setDropdownOpen(false), 150); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(11,28,61,.99)" : "rgba(11,28,61,.94)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,.07)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,.28)" : "none",
        transition: "background .3s, box-shadow .3s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            height: 64, gap: 16,
          }}>

            {/* Logo */}
            <Link
              href="/"
              className="oq-logo-text"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-head)", fontSize: "1.4rem",
                fontWeight: 800, color: "white", flexShrink: 0,
                textDecoration: "none", letterSpacing: "-.01em",
              }}
            >
              <div style={{
                width: 8, height: 8, background: "var(--teal)",
                borderRadius: "50%", animation: "glowPulse 2s ease-in-out infinite",
                flexShrink: 0,
              }} />
              Omni
              <span style={{
                background: "var(--grad-teal)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Quest
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="oq-desktop-nav" style={{
              display: "flex", alignItems: "center",
              gap: 2, flex: 1, justifyContent: "center",
            }}>
              {NAV_ITEMS.map((item) =>
                item.items ? (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    style={{ position: "relative" }}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                  >
                    <button
                      onClick={() => setDropdownOpen(o => !o)}
                      style={{
                        display: "flex", alignItems: "center", gap: 4,
                        padding: "7px 12px", borderRadius: 8,
                        fontSize: ".83rem", fontWeight: 500,
                        color: dropdownOpen ? "white" : "rgba(255,255,255,.78)",
                        background: dropdownOpen ? "rgba(255,255,255,.08)" : "transparent",
                        border: "none", cursor: "pointer",
                        transition: "all .2s", whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        style={{ transition: "transform .2s", transform: dropdownOpen ? "rotate(180deg)" : "none" }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: "50%",
                      transform: dropdownOpen ? "translate(-50%,0)" : "translate(-50%,-8px)",
                      background: "white",
                      borderRadius: 14,
                      boxShadow: "0 20px 60px rgba(0,0,0,.18)",
                      minWidth: 250,
                      overflow: "hidden",
                      opacity: dropdownOpen ? 1 : 0,
                      visibility: dropdownOpen ? "visible" : "hidden",
                      transition: "opacity .2s ease, transform .2s ease, visibility .2s",
                      pointerEvents: dropdownOpen ? "auto" : "none",
                      zIndex: 100,
                    }}>
                      {item.items.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target={sub.external ? "_blank" : undefined}
                          rel={sub.external ? "noopener noreferrer" : undefined}
                          onClick={() => setDropdownOpen(false)}
                          style={{
                            display: "flex", alignItems: "center", gap: 12,
                            padding: "13px 18px", fontSize: ".85rem",
                            color: "var(--grey-800)",
                            borderLeft: "3px solid transparent",
                            textDecoration: "none", transition: "all .15s",
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "#f0fafa";
                            el.style.borderLeftColor = "var(--teal)";
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "transparent";
                            el.style.borderLeftColor = "transparent";
                          }}
                        >
                          <div style={{
                            width: 34, height: 34, borderRadius: 8,
                            background: "#f0fafa", display: "flex",
                            alignItems: "center", justifyContent: "center",
                            fontSize: "1rem", flexShrink: 0,
                          }}>
                            {sub.icon}
                          </div>
                          <div>
                            <span style={{ fontWeight: 600, display: "block", color: "var(--navy)", fontSize: ".85rem" }}>{sub.label}</span>
                            <span style={{ fontSize: ".73rem", color: "var(--grey-400)" }}>{sub.sub}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      padding: "7px 12px", borderRadius: 8,
                      fontSize: ".83rem", fontWeight: 500,
                      color: "rgba(255,255,255,.78)",
                      textDecoration: "none", transition: "all .2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "white";
                      el.style.background = "rgba(255,255,255,.07)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "rgba(255,255,255,.78)";
                      el.style.background = "transparent";
                    }}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="oq-desktop-ctas" style={{
              display: "flex", gap: 8,
              flexShrink: 0, alignItems: "center",
            }}>
              <Link
                href="/personality-test"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "9px 18px", borderRadius: 50,
                  background: "rgba(0,201,177,.12)",
                  border: "1.5px solid rgba(0,201,177,.35)",
                  color: "var(--teal)", fontSize: ".82rem",
                  fontWeight: 600, textDecoration: "none",
                  transition: "all .2s", whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,177,.22)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,177,.12)"; }}
              >
                🧠 Test
              </Link>
              <a
                href="https://eduquest.org.in/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "9px 18px", borderRadius: 50,
                  background: "var(--grad-teal)", color: "white",
                  fontSize: ".82rem", fontWeight: 600,
                  textDecoration: "none", whiteSpace: "nowrap",
                  boxShadow: "0 4px 18px rgba(0,201,177,.32)",
                  transition: "opacity .2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = ".88"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Book Strategy Session
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="oq-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                display: "none",
                flexDirection: "column", gap: 5,
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 8,
                cursor: "pointer", padding: "10px 10px",
                flexShrink: 0,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: 20, height: 2,
                  background: "white", borderRadius: 2,
                  transition: "transform .25s, opacity .25s",
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translateY(7px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translateY(-7px)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className="oq-mobile-drawer"
          style={{
            display: "none",
            maxHeight: mobileOpen ? "100vh" : "0",
            overflow: "hidden",
            transition: "max-height .35s ease",
          }}
        >
          <div style={{
            background: "rgba(6,12,26,.98)",
            borderTop: "1px solid rgba(255,255,255,.07)",
            padding: "12px 16px 28px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 64px)",
          }}>

            {/* Programs accordion */}
            <div style={{
              borderRadius: 10,
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.06)",
              marginBottom: 6, overflow: "hidden",
            }}>
              <button
                onClick={() => setMobileProgOpen(o => !o)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px", background: "transparent",
                  border: "none", cursor: "pointer",
                  color: "rgba(255,255,255,.85)",
                  fontSize: ".9rem", fontWeight: 600,
                }}
              >
                <span>Divisions</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: mobileProgOpen ? "rotate(180deg)" : "none", transition: "transform .25s" }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {mobileProgOpen && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
                  {NAV_ITEMS[0].items!.map(sub => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      target={sub.external ? "_blank" : undefined}
                      rel={sub.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(255,255,255,.04)",
                        color: "rgba(255,255,255,.7)",
                        fontSize: ".87rem", textDecoration: "none",
                        transition: "color .15s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.7)"; }}
                    >
                      <span style={{
                        width: 32, height: 32, borderRadius: 7,
                        background: "rgba(255,255,255,.07)",
                        display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: ".95rem", flexShrink: 0,
                      }}>
                        {sub.icon}
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: ".85rem" }}>{sub.label}</div>
                        <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.35)", marginTop: 1 }}>{sub.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {NAV_ITEMS.slice(1).map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center",
                  padding: "13px 16px", borderRadius: 10,
                  color: "rgba(255,255,255,.78)", fontSize: ".9rem",
                  fontWeight: 500, textDecoration: "none",
                  transition: "color .15s, background .15s",
                  marginBottom: 2,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "white";
                  el.style.background = "rgba(255,255,255,.05)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "rgba(255,255,255,.78)";
                  el.style.background = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTAs */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 10,
              marginTop: 16, paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,.08)",
            }}>
              <Link
                href="/personality-test"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8,
                  padding: "13px 20px", borderRadius: 50,
                  background: "rgba(0,201,177,.12)",
                  border: "1.5px solid rgba(0,201,177,.35)",
                  color: "var(--teal)", fontSize: ".9rem",
                  fontWeight: 600, textDecoration: "none",
                }}
              >
                🧠 Start Personality Test
              </Link>
              <a
                href="https://eduquest.org.in/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "center", padding: "13px 22px",
                  borderRadius: 50, background: "var(--grad-teal)",
                  color: "white", fontSize: ".9rem", fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(0,201,177,.3)",
                }}
              >
                📅 Book Strategy Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(0,0,0,.5)",
            backdropFilter: "blur(2px)",
            animation: "fadeIn .2s ease",
          }}
        />
      )}

      {/* ✅ FIX: Replaced < with the unicode equivalent in comments to prevent SSR hydration mismatch */}
      <style>{`
        /* Desktop 1024px and above — show full nav + both CTAs */
        @media (min-width: 1024px) {
          .oq-desktop-nav   { display: flex !important; }
          .oq-desktop-ctas  { display: flex !important; }
          .oq-hamburger     { display: none !important; }
          .oq-mobile-drawer { display: none !important; }
        }

        /* Tablet 768px to 1023px — hide long nav labels, show hamburger */
        @media (min-width: 768px) and (max-width: 1023px) {
          .oq-desktop-nav   { display: none !important; }
          .oq-desktop-ctas  { display: flex !important; }
          .oq-hamburger     { display: flex !important; }
          .oq-mobile-drawer { display: block !important; }
        }

        /* Mobile 767px and below — hamburger only, hide all desktop nav + CTAs */
        @media (max-width: 767px) {
          .oq-desktop-nav   { display: none !important; }
          .oq-desktop-ctas  { display: none !important; }
          .oq-hamburger     { display: flex !important; }
          .oq-mobile-drawer { display: block !important; }
        }

        /* Small mobile 420px and below — tighten logo size */
        @media (max-width: 420px) {
          .oq-logo-text { font-size: 1.2rem !important; }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,201,177,.6); }
          50%       { box-shadow: 0 0 0 6px rgba(0,201,177,0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}