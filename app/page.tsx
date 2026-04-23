"use client";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/chatbot/Chatbot";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    function animCounter(el: HTMLElement, target: number) {
      let s = 0;
      const fn = (ts: number) => {
        if (!s) s = ts;
        const p = Math.min((ts - s) / 1800, 1);
        const e = 1 - Math.pow(1 - p, 3);
        const v = Math.round(e * target);
        el.textContent = v >= 1000 ? v.toLocaleString() + "+" : v + "+";
        if (p < 1) requestAnimationFrame(fn);
      };
      requestAnimationFrame(fn);
    }
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) {
          animCounter(e.target as HTMLElement, parseInt((e.target as HTMLElement).dataset.target || "0"));
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll<HTMLElement>("[data-target]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ══ HERO ══ */}
        {/*
          FIX: "Get Free Counselling" href changed from #contact to
          https://eduquest.org.in/contact-us/ (external real link).
          "Explore Programs" href kept as #pathways (matches section id below).
        */}
        <section
          id="home"
          aria-label="Hero"
          style={{
            minHeight: "100vh", background: "var(--grad-hero)",
            position: "relative", overflow: "hidden",
            paddingTop: 70, display: "flex", flexDirection: "column",
          }}
        >
          {/* Grid lines */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%,black 40%,transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%,black 40%,transparent 100%)", pointerEvents: "none" }} />
          {/* Orbs */}
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "rgba(37,99,235,.18)", filter: "blur(80px)", top: -100, right: -100, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(0,201,177,.12)", filter: "blur(80px)", bottom: 0, left: -80, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(245,158,11,.08)", filter: "blur(60px)", top: "40%", right: "20%", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 2, flex: 1 }}>
            {/* Left */}
            <div>
              <div className="animate-fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(0,201,177,.12)", border: "1px solid rgba(0,201,177,.25)", borderRadius: 50, padding: "6px 16px", marginBottom: 28, fontSize: ".8rem", fontWeight: 600, color: "var(--teal)", letterSpacing: ".06em" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", animation: "blink 2s infinite" }} />
                India&apos;s Premier Global Education Platform
              </div>
              <h1 className="animate-fade-up delay-1" style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2.2rem,4.5vw,3.6rem)", fontWeight: 800, color: "white", lineHeight: 1.12, marginBottom: 16 }}>
                Global Education.<br />
                <span style={{ background: "var(--grad-teal)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MBA Admissions.</span><br />
                Career Programs.
              </h1>
              <p className="animate-fade-up delay-2" style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(255,255,255,.62)", marginBottom: 36, fontWeight: 300, lineHeight: 1.65 }}>
                One Platform. Endless Opportunities.<br />Your complete journey from aspiration to achievement.
              </p>
              <div className="animate-fade-up delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
                {/* FIX: real contact URL */}
                <a
                  href="https://eduquest.org.in/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🎯 Get Free Counselling
                </a>
                {/* FIX: #pathways matches section id="pathways" below */}
                <a href="#pathways" className="btn btn-outline">Explore Programs</a>
              </div>
              <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {["10,000+ Students", "1500+ SAT Score", "720+ GMAT Score", "Global Admits"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 50, padding: "8px 16px", fontSize: ".82rem", color: "rgba(255,255,255,.8)", fontWeight: 500 }}>
                    <span style={{ color: "var(--teal)" }}>✔</span> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — SVG world map */}
            <div className="animate-fade-up delay-2" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: 520 }}>
                <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 24, padding: 32, backdropFilter: "blur(12px)", animation: "float 6s ease-in-out infinite" }}>
                  <svg viewBox="0 0 500 300" fill="none" style={{ width: "100%", opacity: .75 }} aria-hidden="true">
                    <ellipse cx="100" cy="110" rx="75" ry="60" fill="rgba(255,255,255,.07)" stroke="rgba(0,201,177,.25)" strokeWidth="1.5"/>
                    <ellipse cx="130" cy="210" rx="42" ry="55" fill="rgba(255,255,255,.05)" stroke="rgba(0,201,177,.18)" strokeWidth="1.5"/>
                    <ellipse cx="240" cy="90" rx="38" ry="35" fill="rgba(255,255,255,.07)" stroke="rgba(0,201,177,.25)" strokeWidth="1.5"/>
                    <ellipse cx="252" cy="185" rx="44" ry="58" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                    <ellipse cx="370" cy="105" rx="90" ry="60" fill="rgba(255,255,255,.07)" stroke="rgba(0,201,177,.2)" strokeWidth="1.5"/>
                    <ellipse cx="408" cy="210" rx="38" ry="28" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                    <line x1="385" y1="125" x2="100" y2="110" stroke="rgba(0,201,177,.5)" strokeWidth="1.5" strokeDasharray="6 4"/>
                    <line x1="385" y1="125" x2="240" y2="90" stroke="rgba(37,99,235,.5)" strokeWidth="1.5" strokeDasharray="6 4"/>
                    <line x1="385" y1="125" x2="408" y2="210" stroke="rgba(0,201,177,.35)" strokeWidth="1" strokeDasharray="6 4"/>
                    <line x1="385" y1="125" x2="80" y2="75" stroke="rgba(37,99,235,.35)" strokeWidth="1" strokeDasharray="6 4"/>
                    <circle cx="385" cy="125" r="6" fill="var(--teal)" opacity=".9"/>
                    <circle cx="385" cy="125" r="14" fill="var(--teal)" opacity=".12"/>
                    <circle cx="100" cy="110" r="4" fill="#60a5fa" opacity=".8"/>
                    <circle cx="240" cy="90" r="4" fill="#60a5fa" opacity=".8"/>
                    <circle cx="80" cy="75" r="3" fill="#60a5fa" opacity=".6"/>
                    <circle cx="408" cy="210" r="3" fill="#60a5fa" opacity=".6"/>
                    <text x="90" y="105" fill="rgba(255,255,255,.5)" fontSize="9" fontFamily="DM Sans,sans-serif">USA</text>
                    <text x="232" y="86" fill="rgba(255,255,255,.5)" fontSize="9" fontFamily="DM Sans,sans-serif">UK</text>
                    <text x="371" y="140" fill="rgba(0,201,177,.9)" fontSize="9" fontWeight="bold" fontFamily="DM Sans,sans-serif">INDIA</text>
                    <text x="397" y="206" fill="rgba(255,255,255,.4)" fontSize="8" fontFamily="DM Sans,sans-serif">AUS</text>
                  </svg>
                </div>
                {[
                  { emoji:"🏆", num:"10K+", label:"Students Placed", style:{ top:-20, left:10 } },
                  { emoji:"🌍", num:"40+", label:"Countries", style:{ bottom:0, right:-10 } },
                  { emoji:"⭐", num:"4.9", label:"Student Rating", style:{ top:"40%", left:-30 } },
                ].map((c, i) => (
                  <div key={i} style={{ position:"absolute", background:"white", borderRadius:14, padding:"12px 16px", boxShadow:"0 16px 64px rgba(11,28,61,.16)", display:"flex", alignItems:"center", gap:10, animation:`float ${4+i}s ease-in-out infinite`, animationDelay:`${-i*1.5}s`, ...c.style }}>
                    <span style={{ fontSize:"1.4rem" }}>{c.emoji}</span>
                    <div>
                      <div style={{ fontFamily:"var(--font-head)", fontSize:"1.15rem", fontWeight:800, color:"var(--navy)" }}>{c.num}</div>
                      <div style={{ fontSize:".7rem", color:"var(--grey-400)" }}>{c.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEO strip */}
          <div style={{ background: "rgba(255,255,255,.04)", borderTop: "1px solid rgba(255,255,255,.07)", padding: "24px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.32)", lineHeight: 1.8, textAlign: "center" }}>
                OmniQuest — India&apos;s most trusted <strong style={{ color: "rgba(255,255,255,.5)" }}>study abroad consultants</strong> — offers end-to-end services for <strong style={{ color: "rgba(255,255,255,.5)" }}>SAT coaching</strong>, <strong style={{ color: "rgba(255,255,255,.5)" }}>GMAT coaching</strong>, and <strong style={{ color: "rgba(255,255,255,.5)" }}>MBA admissions consulting</strong>. With 10,000+ success stories across USA, UK, Canada and Europe — powered by EduQuest, MbaWizards, and Aptech — OmniQuest is your single platform for academic and career excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ══ BRAND STRIP ══ */}
        <section style={{ background: "var(--grey-50)", borderTop: "1px solid var(--grey-200)", borderBottom: "1px solid var(--grey-200)", padding: "40px 0" }} aria-label="Brand heritage">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { abbr:"EQ", name:"EduQuest", bg:"linear-gradient(135deg,#3b82f6,#1d4ed8)" },
              { abbr:"MW", name:"MbaWizards", bg:"linear-gradient(135deg,#8b5cf6,#6d28d9)" },
              { abbr:"AP", name:"Aptech", bg:"linear-gradient(135deg,#10b981,#059669)" },
            ].map((b, i) => (
              <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 48 }}>
                <div
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, filter: "grayscale(1) opacity(.5)", transition: "filter .25s", cursor: "default" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "none"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(1) opacity(.5)"; }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "var(--font-head)", fontSize: "1rem", fontWeight: 800 }}>{b.abbr}</div>
                  <div style={{ fontSize: ".78rem", fontWeight: 600, color: "var(--grey-600)" }}>{b.name}</div>
                </div>
                {i < 2 && <span style={{ color: "var(--grey-300)", fontSize: "1.3rem", fontWeight: 300 }}>+</span>}
              </div>
            ))}
            <span style={{ color: "#cbd5e1", fontSize: "1.5rem" }}>→</span>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--navy)", color: "white", borderRadius: 50, padding: "10px 22px", fontSize: ".85rem", fontWeight: 600, fontFamily: "var(--font-head)" }}>
              <span style={{ color: "var(--teal)" }}>✦</span> Now unified as OmniQuest
            </div>
          </div>
        </section>

        {/* ══ THREE PATHWAYS ══ */}
        {/*
          FIX: id changed from "programs" → "pathways"
          so that href="#pathways" in the Hero CTA and Navbar actually scroll here.
        */}
        <section id="pathways" style={{ padding: "100px 0", background: "white" }} aria-labelledby="pathways-h">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="section-label">Choose Your Path</div>
              <h2 className="section-title" id="pathways-h">Three Pathways.<br />One Destination: Your Best Life.</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>Whether you&apos;re aiming for a top global university, a prestigious MBA, or a career in tech — we have a dedicated programme for you.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {PATHWAYS.map((p, i) => (
                /*
                  FIX: The original code wrapped <article> inside <Link display:contents>
                  which creates invalid DOM (interactive element inside interactive element)
                  and causes the "Explore" button click to not fire properly.
                  Solution: article has onClick to open the link, and the button is a real <a>.
                */
                <article
                  key={p.title}
                  className={`pathway-card card-${i+1} reveal`}
                  style={{ transitionDelay: `${i*.1}s`, cursor: "pointer" }}
                  onClick={() => window.open(p.href, "_blank", "noopener,noreferrer")}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.open(p.href, "_blank", "noopener,noreferrer"); }}
                >
                  <div className="top-accent" />
                  <div className="pathway-icon-wrap">{p.icon}</div>
                  <div className="pathway-brand">{p.brand}</div>
                  <h3 className="pathway-title">{p.title}</h3>
                  <p className="pathway-desc">{p.desc}</p>
                  <ul className="pathway-features" aria-label="Features">
                    {p.features.map(f => <li key={f} className="pathway-feature"><span className="feat-dot" />{f}</li>)}
                  </ul>
                  {/* FIX: was a <button>, now a real <a> so browser handles navigation natively */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pathway-cta"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore {p.shortName} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY US ══ */}
        <section id="why-us" className="why-us" aria-labelledby="why-h">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="why-us-header reveal">
              <div className="section-label">Why OmniQuest</div>
              <h2 className="section-title" id="why-h">Built Different.<br />Results-First. Always.</h2>
              <p className="section-sub">We don&apos;t just prep you — we transform how you think, apply, and succeed in a global world.</p>
            </div>
            <div className="why-grid">
              {WHY.map((w, i) => (
                <div key={w.title} className="why-card reveal" style={{ transitionDelay: `${i*.08}s` }}>
                  <div className="why-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ RESULTS (DARK) ══ */}
        <section id="results" style={{ padding: "100px 0", background: "var(--navy)", position: "relative", overflow: "hidden" }} aria-labelledby="results-h">
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%,rgba(0,201,177,.08) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(37,99,235,.1) 0%,transparent 40%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="section-label">Our Track Record</div>
              <h2 className="section-title" id="results-h" style={{ color: "white" }}>Numbers That<br />Speak for Themselves</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.5)", margin: "0 auto" }}>A decade of dedication, data, and delivery — across every programme we run.</p>
            </div>
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginBottom: 72 }}>
              {METRICS.map((m) => (
                <div key={m.label} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: "36px 24px", textAlign: "center", transition: "all .25s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.09)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.05)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                  <span style={{ fontSize: ".72rem", color: "var(--teal)", fontWeight: 700, letterSpacing: ".08em", display: "block", marginBottom: 4, textTransform: "uppercase" }}>{m.badge}</span>
                  <span data-target={m.target} style={{ fontFamily: "var(--font-head)", fontSize: "3rem", fontWeight: 800, background: "var(--grad-teal)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block", marginBottom: 8 }}>0</span>
                  <div style={{ fontSize: ".85rem", color: "rgba(255,255,255,.5)", fontWeight: 500 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div className="reveal">
              <p style={{ textAlign: "center", fontSize: ".78rem", color: "rgba(255,255,255,.32)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 28 }}>Students admitted to leading global institutions</p>
              <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)" }}>
                <div className="marquee-track">
                  {[...UNIS, ...UNIS].map((u, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 22px", fontSize: ".82rem", fontWeight: 600, color: "rgba(255,255,255,.5)", marginRight: 14, whiteSpace: "nowrap", transition: "all .2s", cursor: "default" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.13)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.07)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.5)"; }}>
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ GLOBAL MAP ══ */}
        <section id="global-map" style={{ padding: "100px 0", background: "var(--grey-800)", position: "relative", overflow: "hidden" }} aria-labelledby="map-h">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%,rgba(0,201,177,.06) 0%,transparent 60%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label">Our Reach</div>
              <h2 className="section-title" id="map-h" style={{ color: "white" }}>From India to<br />Every Corner of the World</h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,.45)", margin: "0 auto" }}>We connect ambitious students across India to top universities and career opportunities worldwide.</p>
            </div>
            <div className="reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ width: "100%", height: 380, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 24, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px)", backgroundSize: "22px 22px" }} />
                {MAP_LABELS.map((l) => (
                  <div key={l.name} style={{ position: "absolute", top: l.top, left: l.left, background: l.gold ? "rgba(245,158,11,.15)" : "rgba(0,201,177,.15)", border: `1px solid ${l.gold ? "rgba(245,158,11,.4)" : "rgba(0,201,177,.3)"}`, color: l.gold ? "var(--gold)" : "var(--teal)", borderRadius: 50, padding: "6px 14px", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".06em", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: l.gold ? "var(--gold)" : "var(--teal)", display: "inline-block", position: "relative" }}>
                      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: l.gold ? "var(--gold)" : "var(--teal)", animation: "ping 1.5s ease-in-out infinite" }} />
                    </span>
                    {l.name} {l.flag ?? ""}
                  </div>
                ))}
                <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem", color: "white", marginBottom: 8 }}>40+ Destination Countries</h3>
                  <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.4)" }}>Placed students in 200+ institutions worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ LEGACY ══ */}
        {/* FIX: id="legacy" so "#legacy" href in Navbar ("About") scrolls here */}
        <section id="legacy" style={{ padding: "100px 0", background: "white" }} aria-labelledby="legacy-h">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="section-label">Our Legacy</div>
              <h2 className="section-title" id="legacy-h">Three Trusted Names.<br />One Unified Vision.</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>Decades of combined expertise converging into OmniQuest — your most powerful educational partner.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
              {LEGACY.map((l, i) => (
                /*
                  FIX: same issue as PATHWAYS — nested <Link> + <div> breaks click.
                  Now card is the clickable element via onClick.
                */
                <div
                  key={l.title}
                  className="legacy-card reveal"
                  style={{ transitionDelay: `${i*.1}s`, cursor: "pointer" }}
                  onClick={() => window.open(l.href, "_blank", "noopener,noreferrer")}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.open(l.href, "_blank", "noopener,noreferrer"); }}
                >
                  <div className="legacy-year">{l.year}</div>
                  <div className={`legacy-badge ${l.color}`}>{l.icon} {l.brand}</div>
                  <h3 className="legacy-title">{l.title}</h3>
                  <p className="legacy-desc">{l.desc}</p>
                  <div className="legacy-stats">
                    {l.stats.map(s => <div key={s.num}><div className="ls-num">{s.num}</div><div className="ls-label">{s.label}</div></div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PERSONALITY TEST CTA ══ */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#060812,#0B1C3D)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <div className="reveal">
              <div style={{ fontSize: "3rem", marginBottom: 18 }}>🧠</div>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(0,201,177,.12)", border: "1px solid rgba(0,201,177,.25)", color: "var(--teal)", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>⚡ Powered by Eduquest AI</div>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, color: "white", marginBottom: 16 }}>Not Sure Which Program is Right for You?</h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.5)", marginBottom: 32, lineHeight: 1.75 }}>Our 5-minute Eduquest AI Personality Test analyses 6 dimensions of your profile and matches you to the perfect OmniQuest program — completely free.</p>
              {/* FIX: Link to /personality-test — this is correct, kept as-is */}
              <Link href="/personality-test" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 36px", borderRadius: 50, background: "var(--grad-teal)", color: "white", fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 8px 32px rgba(0,201,177,.35)" }}>
                🚀 Discover Your Personality Type — Free
              </Link>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section style={{ padding: "100px 0", background: "var(--grey-50)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label">Success Stories</div>
              <h2 className="section-title">Real Students. Real Results.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i*.08}s` }}>
                  <div style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: 14 }}>★★★★★</div>
                  <p style={{ fontSize: ".9rem", color: "var(--grey-600)", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--grad-teal)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-head)", fontWeight: 800, color: "white", fontSize: "1rem", flexShrink: 0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--navy)" }}>{t.name}</div>
                      <div style={{ fontSize: ".74rem", color: "var(--grey-400)" }}>{t.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BLOG ══ */}
        <section id="blog" style={{ padding: "100px 0", background: "white" }} aria-labelledby="blog-h">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div className="section-label">Knowledge Hub</div>
                <h2 className="section-title" id="blog-h" style={{ marginBottom: 0 }}>Insights to Power Your Journey</h2>
              </div>
              {/* FIX: real blog URL */}
              <a
                href="https://eduquest.org.in/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
              >
                View All Articles →
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {BLOGS.map((b, i) => (
                <article key={i} className="blog-card reveal" style={{ transitionDelay: `${i*.07}s` }}>
                  <div className={`blog-thumb blog-thumb-${i+1}`}>{b.emoji}</div>
                  <div style={{ padding: "20px 18px" }}>
                    <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 8 }}>{b.tag}</div>
                    <h3 style={{ fontFamily: "var(--font-head)", fontSize: ".93rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.42, marginBottom: 10 }}>{b.title}</h3>
                    <p style={{ fontSize: ".73rem", color: "var(--grey-400)" }}>{b.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ══ */}
        {/* FIX: id="contact" so "#contact" in Navbar scrolls here */}
        <section id="contact" style={{ padding: "120px 0", background: "var(--grad-hero)", position: "relative", overflow: "hidden", textAlign: "center" }} aria-labelledby="cta-h">
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 500, height: 500, background: "rgba(0,201,177,.1)", borderRadius: "50%", filter: "blur(100px)", top: -100, left: -100, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, background: "rgba(37,99,235,.12)", borderRadius: "50%", filter: "blur(80px)", bottom: -80, right: -80, pointerEvents: "none" }} />
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32, background: "rgba(245,158,11,.12)", border: "1px solid rgba(245,158,11,.3)", borderRadius: 50, padding: "8px 20px", fontSize: ".8rem", fontWeight: 700, color: "var(--gold)", letterSpacing: ".05em" }}>⚡ Limited Slots Available · Fall 2026 Intake</div>
              <h2 id="cta-h" style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, color: "white", marginBottom: 20, lineHeight: 1.15 }}>
                Start Your <em style={{ fontStyle: "normal", color: "var(--teal)" }}>Global Journey</em> Today.
              </h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.55)", marginBottom: 48 }}>Join 10,000+ students who chose OmniQuest and never looked back.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                {/* FIX: real contact URL instead of tel:+911234567890 placeholder */}
                <a
                  href="https://eduquest.org.in/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: "1rem", padding: "16px 36px" }}
                >
                  📅 Book Free Counselling
                </a>
                {/* FIX: kept as Link to /personality-test (correct) */}
                <Link href="/personality-test" className="btn btn-outline" style={{ fontSize: "1rem", padding: "16px 36px" }}>
                  🗺️ Get Personalised Roadmap
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer id="footer" style={{ background: "var(--grey-800)", color: "rgba(255,255,255,.55)" }} role="contentinfo">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 800, color: "white", marginBottom: 14 }}>
                  Omni<span style={{ color: "var(--teal)" }}>Quest</span>
                </div>
                <p style={{ fontSize: ".85rem", lineHeight: 1.75, marginBottom: 20, maxWidth: 280 }}>India&apos;s premier global education platform — unifying EduQuest, MbaWizards, and Aptech for students who dream big.</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["by EduQuest", "MbaWizards", "Aptech"].map(b => (
                    <span key={b} style={{ fontSize: ".7rem", fontWeight: 600, padding: "4px 12px", borderRadius: 50, border: "1px solid rgba(255,255,255,.12)", color: "rgba(255,255,255,.4)" }}>{b}</span>
                  ))}
                </div>
              </div>
              {FOOTER_COLS.map(col => (
                <div key={col.title}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "white", marginBottom: 20 }}>{col.title}</div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {col.links.map(l => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target={l.external ? "_blank" : undefined}
                          rel={l.external ? "noopener noreferrer" : undefined}
                          style={{ fontSize: ".84rem", color: "rgba(255,255,255,.45)", transition: "color .2s", textDecoration: "none" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.45)"; }}
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <p style={{ fontSize: ".76rem", color: "rgba(255,255,255,.28)" }}>© 2026 OmniQuest (by EduQuest | MbaWizards | Aptech). All rights reserved.</p>
              <div style={{ display: "flex", gap: 20 }}>
                {[
                  { label: "Privacy Policy", href: "https://eduquest.org.in/privacy-policy/" },
                  { label: "Terms of Service", href: "https://eduquest.org.in/terms-of-use/" },
                  { label: "Cookie Policy", href: "#" },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".76rem", color: "rgba(255,255,255,.28)", transition: "color .2s", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.6)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.28)"; }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </main>
      <Chatbot />

     // ✅ ADD THIS INSTEAD:
<style dangerouslySetInnerHTML={{ __html: `
  @media(max-width:1024px){
    #home > div:first-of-type > div { grid-template-columns:1fr!important; }
    #home > div:first-of-type > div > div:last-child { display:none; }
  }
  @media(max-width:768px){
    [style*="grid-template-columns: repeat(3,1fr)"] { grid-template-columns:1fr!important; }
    [style*="grid-template-columns: repeat(4,1fr)"] { grid-template-columns:repeat(2,1fr)!important; }
    [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] { grid-template-columns:1fr 1fr!important; gap:32px!important; }
  }
  @media(max-width:480px){
    [style*="grid-template-columns: repeat(2,1fr)"] { grid-template-columns:1fr!important; }
  }
`}} />
    </>
  );
}

/* ── DATA ── */
const PATHWAYS = [
  { icon:"🎓", brand:"EduQuest · Study Abroad", title:"Undergraduate & Study Abroad", href:"https://eduquest.org.in/", desc:"Expert SAT/ACT coaching and holistic profile building to get you into your dream university — from Ivy League to top global campuses.", features:["SAT / ACT / AP Coaching","UG Admissions Consulting","Profile & Essay Building","Scholarship Guidance"], shortName:"EduQuest" },
  { icon:"💼", brand:"MbaWizards · MBA Admissions", title:"MBA & Postgraduate Admissions", href:"https://eduquest.org.in/", desc:"From a 720+ GMAT to a compelling application — our MBA specialists have placed candidates at Wharton, ISB, INSEAD, and beyond.", features:["GMAT / GRE Prep","Application Strategy","Essay & Interview Coaching","School Selection"], shortName:"MbaWizards" },
  { icon:"💻", brand:"Aptech · Skills & Careers", title:"Skill Programs & Career Launch", href:"https://eduquest.org.in/eduquest-aptech/", desc:"Industry-aligned programs in AI, Data Science, and Coding — designed to make you job-ready in 3–6 months with real projects and placements.", features:["AI & Data Science","Coding & Web Dev","Finance & Business","Career Placement Support"], shortName:"Aptech" },
];

const WHY = [
  { icon:"🗺️", title:"End-to-End Journey", desc:"From choosing your path to landing your dream admit or job offer — we're with you at every milestone, not just for the exam." },
  { icon:"📊", title:"Data-Driven Strategy", desc:"We analyse thousands of admit profiles and market trends to craft a personalised strategy with the highest probability of success." },
  { icon:"🌐", title:"Global Expertise", desc:"Our counsellors have studied or worked at MIT, Harvard, Wharton, and INSEAD — bringing first-hand global perspective to your application." },
  { icon:"🚀", title:"Career-Focused Learning", desc:"Every programme is built backwards from career outcomes — so you learn exactly what the industry pays for, nothing less." },
  { icon:"🤝", title:"Personalised Mentorship", desc:"No batches. No shortcuts. Every student gets a dedicated mentor who knows their story, strengths, and aspirations inside out." },
  { icon:"🏆", title:"Proven Results", desc:"10,000+ success stories. 1500+ SAT scorers. 720+ GMAT achievers. Our track record speaks louder than any promise." },
];

const METRICS = [
  { badge:"SAT PREP", target:1500, label:"Average SAT Score Achieved" },
  { badge:"GMAT PREP", target:720, label:"Average GMAT Score Achieved" },
  { badge:"COMMUNITY", target:10000, label:"Students Transformed" },
  { badge:"SCHOLARSHIPS", target:500, label:"Scholarships Secured (₹Cr+)" },
];

const UNIS = ["MIT","Harvard","Stanford","Wharton","INSEAD","Oxford","Cambridge","ISB","NUS","UC Berkeley","NYU Stern","LBS","Kellogg","Yale SOM","Columbia","Ross","Booth","Tuck","Sloan","HBS"];

const MAP_LABELS = [
  { name:"United States", top:"28%", left:"12%", gold:false },
  { name:"United Kingdom", top:"20%", left:"36%", gold:false },
  { name:"Canada", top:"14%", left:"16%", gold:false },
  { name:"Europe", top:"26%", left:"44%", gold:false },
  { name:"India", top:"48%", left:"60%", gold:true, flag:"🇮🇳" },
  { name:"Australia", top:"65%", left:"72%", gold:false },
];

const LEGACY = [
  { year:"15+", brand:"EduQuest", icon:"🎓", color:"blue", href:"https://eduquest.org.in/", title:"Study Abroad Excellence", desc:"For over 15 years, EduQuest has been India's most trusted study abroad consultant, helping thousands of students crack the SAT, build standout profiles, and earn admits to top universities across the USA, UK, and Canada.", stats:[{num:"8,000+",label:"UG Admits"},{num:"92%",label:"First-Choice Rate"}] },
  { year:"10+", brand:"MbaWizards", icon:"💼", color:"purple", href:"https://eduquest.org.in/", title:"MBA Admissions Mastery", desc:"MbaWizards specialises in cracking the most competitive MBA programmes in the world. With former admissions officers on our team and a 720+ average GMAT score, we offer an unmatched edge in essays, interviews, and school selection.", stats:[{num:"2,000+",label:"MBA Admits"},{num:"720+",label:"Avg GMAT"}] },
  { year:"20+", brand:"Aptech", icon:"💻", color:"green", href:"https://eduquest.org.in/eduquest-aptech/", title:"Skills & Career Legacy", desc:"Aptech's 20+ year legacy in skill development now powers OmniQuest's career programmes. Our AI, Data Science, and Coding bootcamps are industry-designed, placement-backed, and built for the jobs of tomorrow.", stats:[{num:"50K+",label:"Alumni"},{num:"85%",label:"Placement Rate"}] },
];

const TESTIMONIALS = [
  { quote:"OmniQuest's SAT program took me from 1280 to 1540 in just 3 months. The structured approach and mock tests made all the difference.", name:"Priya Sharma", detail:"SAT 1540 → Boston University" },
  { quote:"MbaWizards helped me craft essays that got me into 4 top-10 MBA programs including Kellogg. Worth every penny.", name:"Rahul Mehta", detail:"MBA → Kellogg School of Management" },
  { quote:"The EduQuest team handled everything from shortlisting to visa. I never felt overwhelmed during the entire process.", name:"Ananya Gupta", detail:"M.S. CS → UC San Diego" },
  { quote:"The AI & Data Science track through Aptech gave me exactly what I needed to switch careers and triple my salary.", name:"Vikram Nair", detail:"Data Scientist → MNC (₹32 LPA)" },
  { quote:"I used the Personality Test to figure out I was better suited for MBA than MS. Best decision I ever made.", name:"Sanya Kapoor", detail:"MBA → London Business School" },
  { quote:"The counsellors at OmniQuest genuinely care. They helped me find scholarships I didn't even know existed.", name:"Arjun Patel", detail:"B.Tech → Purdue University (80% Scholarship)" },
];

const BLOGS = [
  { emoji:"📚", tag:"SAT Strategy", title:"How to Score 1500+ on the SAT: A Proven Study Plan", meta:"8 min read · Study Abroad" },
  { emoji:"🎯", tag:"GMAT Guide", title:"The Complete GMAT 720+ Blueprint for Indian MBA Aspirants", meta:"12 min read · MBA Admissions" },
  { emoji:"🌍", tag:"Universities", title:"Top 20 Universities for Indian Students: 2026 Rankings & Insights", meta:"10 min read · Study Abroad" },
  { emoji:"🤖", tag:"Tech Careers", title:"Careers in AI: Skills, Salaries & How to Break In Without a CS Degree", meta:"9 min read · Skill Programs" },
];

// FIX: Footer links now have real href values instead of "#"
const FOOTER_COLS = [
  {
    title: "Programs",
    links: [
      { label:"Study Abroad (EduQuest)", href:"https://eduquest.org.in/", external:true },
      { label:"SAT / ACT Coaching", href:"https://eduquest.org.in/sat/", external:true },
      { label:"MBA Admissions (MbaWizards)", href:"https://eduquest.org.in/", external:true },
      { label:"GMAT Prep", href:"https://eduquest.org.in/", external:true },
      { label:"AI & Data Science (Aptech)", href:"https://eduquest.org.in/eduquest-aptech/", external:true },
      { label:"Skill Development", href:"https://eduquest.org.in/eduquest-aptech/", external:true },
    ],
  },
  {
    title: "Company",
    links: [
      { label:"About OmniQuest", href:"https://eduquest.org.in/about-us/", external:true },
      { label:"Results & Stories", href:"https://eduquest.org.in/our-achievements/", external:true },
      { label:"Blog / Resources", href:"https://eduquest.org.in/blog", external:true },
      { label:"FAQs", href:"#faq", external:false },
      { label:"Contact Us", href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Careers", href:"https://eduquest.org.in/franchise/", external:true },
    ],
  },
  {
    title: "Locations",
    links: [
      { label:"Delhi / NCR", href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Bangalore", href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Mumbai", href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Hyderabad", href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Online (Pan-India)", href:"https://eduquest.org.in/contact-us/", external:true },
    ],
  },
];