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

        {/* ══ 1. HERO ══ */}
        <section
          id="home"
          aria-label="Hero"
          style={{
            minHeight: "100vh",
            background: "linear-gradient(160deg,#060c1a 0%,#0b1c3d 60%,#091428 100%)",
            position: "relative",
            overflow: "hidden",
            paddingTop: 70,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Grid */}
          <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"60px 60px", maskImage:"radial-gradient(ellipse 80% 70% at 50% 50%,black 40%,transparent 100%)", WebkitMaskImage:"radial-gradient(ellipse 80% 70% at 50% 50%,black 40%,transparent 100%)", pointerEvents:"none" }} />
          {/* Orbs */}
          <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", background:"rgba(37,99,235,.15)", filter:"blur(80px)", top:-100, right:-100, pointerEvents:"none" }} />
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"rgba(0,201,177,.08)", filter:"blur(80px)", bottom:0, left:-80, pointerEvents:"none" }} />

          <div className="hero-grid" style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center", position:"relative", zIndex:2, flex:1 }}>
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="animate-fade-up" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(212,175,55,.12)", border:"1px solid rgba(212,175,55,.25)", borderRadius:4, padding:"5px 14px", marginBottom:32, fontSize:".72rem", fontWeight:700, color:"#d4af37", letterSpacing:".12em", textTransform:"uppercase" }}>
                ✦ India&apos;s Premium Global Admissions Strategy Firm
              </div>

              {/* H1 */}
              <h1 className="animate-fade-up delay-1" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2.4rem,4.5vw,3.8rem)", fontWeight:800, color:"white", lineHeight:1.1, marginBottom:24 }}>
                We Design<br />
                <em style={{ fontStyle:"italic", color:"#d4af37" }}>Globally<br />Competitive</em><br />
                Futures.
              </h1>

              <p className="animate-fade-up delay-2" style={{ fontSize:"clamp(.9rem,1.8vw,1.05rem)", color:"rgba(255,255,255,.58)", marginBottom:40, fontWeight:300, lineHeight:1.75, maxWidth:440 }}>
                A premium admissions and career strategy consultancy helping students secure Ivy League, top global universities, and elite careers — through psychometric intelligence and structured profile architecture.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up delay-3" style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:44, maxWidth:300 }}>
                <Link
                  href="/personality-test"
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"14px 28px", borderRadius:6, background:"#d4af37", color:"#0a0f1e", fontWeight:700, fontSize:".9rem", textDecoration:"none", transition:"opacity .2s" }}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity=".88"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity="1"}
                >
                  🧠 Start Psychometric Profile
                </Link>
                <a
                  href="https://eduquest.org.in/contact-us/"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"13px 28px", borderRadius:6, background:"transparent", border:"1px solid rgba(255,255,255,.2)", color:"white", fontWeight:600, fontSize:".9rem", textDecoration:"none", transition:"all .2s" }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.4)"; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.05)"; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.2)"; (e.currentTarget as HTMLElement).style.background="transparent"; }}
                >
                  Book Advisory Session
                </a>
              </div>

              <div style={{ width:40, height:1, background:"rgba(255,255,255,.2)", marginBottom:20 }} />

              {/* Trust tags */}
              <div className="animate-fade-up delay-4" style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {["✦ Ivy League Admits","✦ 10,000+ Profiles Built","✦ 40+ Countries","✦ 4.9 Advisory Rating"].map(t=>(
                  <div key={t} style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.09)", borderRadius:4, padding:"7px 13px", fontSize:".75rem", color:"rgba(255,255,255,.7)", fontWeight:500 }}>{t}</div>
                ))}
              </div>
            </div>

            {/* Right — Strategy Outcomes Card */}
            <div className="animate-fade-up delay-2 hero-right" style={{ display:"flex", justifyContent:"center" }}>
              <div style={{ width:"100%", maxWidth:460 }}>
                <div style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", borderRadius:20, padding:"32px 36px", backdropFilter:"blur(16px)", marginBottom:16 }}>
                  <p style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".14em", color:"rgba(255,255,255,.3)", textTransform:"uppercase", marginBottom:24 }}>Strategy Outcomes · 2024</p>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px 32px", marginBottom:28 }}>
                    {[{val:"92%",label:"First-choice admit rate"},{val:"8K+",label:"UG admits secured"},{val:"720+",label:"Average GMAT score"},{val:"$2M+",label:"Scholarships won"}].map(s=>(
                      <div key={s.label}>
                        <div style={{ fontFamily:"var(--font-head)", fontSize:"2rem", fontWeight:800, color:"white", marginBottom:4 }}>{s.val}</div>
                        <div style={{ fontSize:".72rem", color:"rgba(255,255,255,.38)", lineHeight:1.4 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {["🏛 Ivy League Strategy","🧠 Psychometric Profiling","🏗️ Global Profile Architecture"].map(tag=>(
                      <span key={tag} style={{ fontSize:".7rem", fontWeight:600, padding:"5px 12px", borderRadius:50, background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.55)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO strip */}
          <div style={{ background:"rgba(255,255,255,.03)", borderTop:"1px solid rgba(255,255,255,.06)", padding:"24px 0" }}>
            <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
              <p style={{ fontSize:".78rem", color:"rgba(255,255,255,.28)", lineHeight:1.85, textAlign:"center" }}>
                OmniQuest — India&apos;s premier <strong style={{ color:"rgba(255,255,255,.45)" }}>global admissions strategy consultancy</strong> — specialises in Ivy League profile building, GMAT &amp; MBA consulting, and future-ready career strategy. Through psychometric intelligence and structured <strong style={{ color:"rgba(255,255,255,.45)" }}>profile architecture</strong>, we help students secure admits at Harvard, MIT, Wharton, Oxford, and 200+ elite institutions worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 2. PSYCHOMETRIC / INTELLIGENCE SECTION ══ */}
        <section style={{ padding:"100px 0", background:"linear-gradient(160deg,#060c1a,#0b1c3d)", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle at 70% 50%,rgba(0,201,177,.05) 0%,transparent 60%)", pointerEvents:"none" }} />
          <div className="psycho-grid" style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"flex-start", position:"relative", zIndex:2 }}>

            {/* Left */}
            <div className="reveal">
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
                <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>Free Psychometric Evaluation</span>
              </div>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.9rem,3.5vw,2.8rem)", fontWeight:800, color:"white", lineHeight:1.15, marginBottom:4 }}>
                Intelligence First.
              </h2>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.9rem,3.5vw,2.8rem)", fontWeight:800, fontStyle:"italic", color:"#d4af37", lineHeight:1.15, marginBottom:28 }}>
                Applications Later.
              </h2>
              <p style={{ fontSize:".95rem", color:"rgba(255,255,255,.48)", lineHeight:1.8, maxWidth:400 }}>
                We begin every advisory engagement with a deep understanding of you — your cognitive style, <em style={{ color:"rgba(255,255,255,.65)" }}>personality</em>, and career alignment — before recommending a single strategy.
              </p>
            </div>

            {/* Right — form card */}
            <div className="reveal">
              <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", borderRadius:20, padding:"36px 32px", backdropFilter:"blur(12px)" }}>
                <h3 style={{ fontFamily:"var(--font-head)", fontSize:"1.25rem", fontWeight:800, color:"white", marginBottom:8, textAlign:"center" }}>Start Your Psychometric Profile</h3>
                <p style={{ fontSize:".8rem", color:"rgba(255,255,255,.38)", marginBottom:28, textAlign:"center", lineHeight:1.65 }}>Complete your profile to receive a personalised cognitive and career alignment report — sent directly to your inbox.</p>

                <div className="gate-form-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
                  {[{label:"FULL NAME *",placeholder:"Your full name",type:"text"},{label:"MOBILE NUMBER *",placeholder:"+91 XXXXX XXXXX",type:"tel"},{label:"EMAIL ADDRESS *",placeholder:"your@email.com",type:"email"},{label:"CITY *",placeholder:"Your city",type:"text"}].map(f=>(
                    <div key={f.label}>
                      <label style={{ display:"block", fontSize:".63rem", fontWeight:700, letterSpacing:".09em", color:"rgba(255,255,255,.38)", marginBottom:6, textTransform:"uppercase" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} style={{ width:"100%", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:8, padding:"10px 12px", fontSize:".82rem", color:"white", outline:"none", boxSizing:"border-box", transition:"border-color .2s" }}
                        onFocus={e=>(e.target as HTMLInputElement).style.borderColor="#d4af37"}
                        onBlur={e=>(e.target as HTMLInputElement).style.borderColor="rgba(255,255,255,.1)"}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom:12 }}>
                  <label style={{ display:"block", fontSize:".63rem", fontWeight:700, letterSpacing:".09em", color:"rgba(255,255,255,.38)", marginBottom:6, textTransform:"uppercase" }}>I AM A *</label>
                  <select style={{ width:"100%", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:8, padding:"10px 12px", fontSize:".82rem", color:"rgba(255,255,255,.55)", outline:"none", cursor:"pointer" }}>
                    <option value="">Select your profile...</option>
                    <option>School Student (Grade 9–12)</option>
                    <option>Undergraduate Student</option>
                    <option>Working Professional</option>
                    <option>Recent Graduate</option>
                    <option>Parent planning for child</option>
                  </select>
                </div>

                <div style={{ marginBottom:20 }}>
                  <label style={{ display:"block", fontSize:".63rem", fontWeight:700, letterSpacing:".09em", color:"rgba(255,255,255,.38)", marginBottom:6, textTransform:"uppercase" }}>PRIMARY GOAL *</label>
                  <select style={{ width:"100%", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:8, padding:"10px 12px", fontSize:".82rem", color:"rgba(255,255,255,.55)", outline:"none", cursor:"pointer" }}>
                    <option value="">What&apos;s your main goal?</option>
                    <option>Study Abroad (UG)</option>
                    <option>MBA / PG Abroad</option>
                    <option>Career Switch to Tech</option>
                    <option>Score higher on SAT/GMAT</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {/* ✅ Navigates to /personality-test */}
                <Link
                  href="/personality-test"
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, width:"100%", padding:"14px", borderRadius:8, background:"#d4af37", color:"#0a0f1e", fontWeight:800, fontSize:".9rem", textDecoration:"none", boxSizing:"border-box", transition:"opacity .2s" }}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity=".88"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity="1"}
                >
                  🧠 Begin Psychometric Evaluation →
                </Link>
                <p style={{ textAlign:"center", fontSize:".7rem", color:"rgba(255,255,255,.28)", marginTop:12 }}>
                  🔒 Your data is safe. We&apos;ll email your full report and never spam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. STRATEGY CONSULTING MODEL ══ */}
        <section style={{ padding:"100px 0", background:"#f8f7f4" }}>
          <div className="consultant-grid" style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>
            {/* Left */}
            <div className="reveal">
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:28 }}>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
                <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>Strategy Consulting Model</span>
              </div>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:800, color:"#0b1c3d", lineHeight:1.15, marginBottom:20 }}>
                Every Student Works<br />with a<br />
                <em style={{ fontStyle:"italic", color:"#d4af37" }}>Global Strategy<br />Consultant</em>
              </h2>
              <p style={{ fontSize:".88rem", color:"#64748b", lineHeight:1.85, marginBottom:32, maxWidth:400 }}>
                Not tutors. Not counsellors. At <strong style={{ color:"#0b1c3d" }}>OmniQuest</strong>, you are assigned a dedicated team of <strong style={{ color:"#0b1c3d" }}>specialists</strong> who work as your personal admissions <strong style={{ color:"#d4af37" }}>architecture firm</strong>.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  { icon:"⏱", title:"Career Strategy Advisor", desc:"Maps your cognitive profile to long-term career trajectories and identifies the optimal university and programme combination for your goals." },
                  { icon:"🎒", title:"Profile Architect", desc:"Designs your extracurricular narrative, leadership positioning, and academic profile to meet Ivy League and top-50 university standards." },
                  { icon:"🎯", title:"Admissions Strategist", desc:"Orchestrates your full application — essays, recommendations, interviews, and school selection — with surgical precision and insider knowledge." },
                ].map(item=>(
                  <div key={item.title} style={{ display:"flex", gap:14, alignItems:"flex-start", background:"white", border:"1px solid #e2e8f0", borderRadius:10, padding:"18px 20px" }}>
                    <div style={{ fontSize:"1.25rem", flexShrink:0, marginTop:2 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily:"var(--font-head)", fontSize:".88rem", fontWeight:700, color:"#0b1c3d", marginBottom:5 }}>{item.title}</div>
                      <div style={{ fontSize:".78rem", color:"#64748b", lineHeight:1.7 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="reveal">
              <div style={{ background:"#0b1c3d", borderRadius:16, padding:"28px 26px", marginBottom:20 }}>
                <p style={{ fontSize:".86rem", color:"rgba(255,255,255,.5)", lineHeight:1.85, fontStyle:"italic", marginBottom:24 }}>
                  &ldquo;We do not fill out applications. We build the <strong style={{ color:"white" }}>candidate that elite universities want to admit</strong> — long before the application opens.&rdquo;
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, borderTop:"1px solid rgba(255,255,255,.1)", paddingTop:20 }}>
                  {[{num:"92%",label:"First-choice rate"},{num:"15+",label:"Years experience"},{num:"40+",label:"Destination countries"}].map(m=>(
                    <div key={m.num} style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"var(--font-head)", fontSize:"1.5rem", fontWeight:800, color:"white", marginBottom:4 }}>{m.num}</div>
                      <div style={{ fontSize:".65rem", fontWeight:700, letterSpacing:".08em", color:"rgba(255,255,255,.3)", textTransform:"uppercase" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. THREE PATHWAYS / DIVISIONS ══ */}
        <section id="pathways" style={{ padding:"100px 0", background:"#f8f7f4" }} aria-labelledby="pathways-h">
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:64 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:16 }}>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
                <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>OmniQuest Global Education System</span>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
              </div>
              <h2 id="pathways-h" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"#0b1c3d", lineHeight:1.15, marginBottom:4 }}>Three Divisions.</h2>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, fontStyle:"italic", color:"#d4af37", lineHeight:1.15, marginBottom:20 }}>One Integrated Strategy.</h2>
              <p style={{ fontSize:".9rem", color:"#64748b", maxWidth:500, margin:"0 auto", lineHeight:1.75 }}>Each division operates as a specialist consulting unit. Together, they cover every stage of your global education and career journey.</p>
            </div>

            <div className="three-col-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
              {PATHWAYS.map((p,i)=>(
                <article
                  key={p.title}
                  className="reveal"
                  style={{ background:"white", border:"1px solid #e2e8f0", borderRadius:14, padding:28, cursor:"pointer", transition:"all .25s", display:"flex", flexDirection:"column", transitionDelay:`${i*.1}s` }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#d4af37"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 20px 60px rgba(0,0,0,.08)"; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#e2e8f0"; (e.currentTarget as HTMLElement).style.transform="none"; (e.currentTarget as HTMLElement).style.boxShadow="none"; }}
                  onClick={()=>window.open(p.href,"_blank","noopener,noreferrer")}
                  role="link" tabIndex={0}
                  onKeyDown={e=>{ if(e.key==="Enter"||e.key===" ") window.open(p.href,"_blank","noopener,noreferrer"); }}
                >
                  <div style={{ fontSize:".63rem", fontWeight:700, letterSpacing:".12em", color:"#d4af37", textTransform:"uppercase", marginBottom:16 }}>{p.division}</div>
                  <div style={{ fontSize:"1.6rem", marginBottom:14 }}>{p.icon}</div>
                  <h3 style={{ fontFamily:"var(--font-head)", fontSize:"1.1rem", fontWeight:800, color:"#0b1c3d", marginBottom:10, lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ fontSize:".8rem", color:"#64748b", lineHeight:1.8, marginBottom:18, flex:1 }}>{p.desc}</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:7, marginBottom:22 }}>
                    {p.features.map(f=>(
                      <li key={f} style={{ display:"flex", alignItems:"center", gap:8, fontSize:".76rem", color:"#475569" }}>
                        <span style={{ color:"#d4af37", fontSize:".55rem" }}>✦</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.href} target="_blank" rel="noopener noreferrer"
                    onClick={e=>e.stopPropagation()}
                    style={{ display:"inline-flex", alignItems:"center", gap:5, fontSize:".78rem", fontWeight:700, color:"#0b1c3d", textDecoration:"none", borderBottom:"1px solid #0b1c3d", paddingBottom:2, transition:"color .2s", width:"fit-content" }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#d4af37"; (e.currentTarget as HTMLElement).style.borderBottomColor="#d4af37"; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="#0b1c3d"; (e.currentTarget as HTMLElement).style.borderBottomColor="#0b1c3d"; }}
                  >
                    Explore {p.shortName} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. WHY US — dark numbered grid ══ */}
        <section id="why-us" style={{ padding:"100px 0", background:"#0b1c3d", position:"relative" }} aria-labelledby="why-h">
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:64 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:16 }}>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
                <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>Our Difference</span>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
              </div>
              <h2 id="why-h" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"white", lineHeight:1.15, marginBottom:4 }}>We Don&apos;t Coach.</h2>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, fontStyle:"italic", color:"#d4af37", lineHeight:1.15, marginBottom:20 }}>We Build Global Profiles.</h2>
              <p style={{ fontSize:".9rem", color:"rgba(255,255,255,.42)", maxWidth:520, margin:"0 auto", lineHeight:1.78 }}>
                OmniQuest is not a coaching centre. We are a global admissions strategy firm — competing with the best international education consultants, not the local coaching institute down the road.
              </p>
            </div>

            <div className="why-numbered-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.07)", borderRadius:16, overflow:"hidden" }}>
              {WHY.map((w,i)=>(
                <div
                  key={w.title}
                  className="reveal"
                  style={{ padding:"36px 28px", background:"#0b1c3d", borderRight:i%3!==2?"1px solid rgba(255,255,255,.07)":"none", borderBottom:i<3?"1px solid rgba(255,255,255,.07)":"none", transition:"background .2s", transitionDelay:`${i*.07}s` }}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="#0b1c3d"}
                >
                  <div style={{ fontFamily:"var(--font-head)", fontSize:"2.2rem", fontWeight:800, color:"rgba(255,255,255,.1)", marginBottom:14, lineHeight:1 }}>
                    {String(i+1).padStart(2,"0")}
                  </div>
                  <h3 style={{ fontFamily:"var(--font-head)", fontSize:".95rem", fontWeight:700, color:"white", marginBottom:10 }}>{w.title}</h3>
                  <p style={{ fontSize:".78rem", color:"rgba(255,255,255,.4)", lineHeight:1.75 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. RESULTS — light background ══ */}
        <section id="results" style={{ padding:"100px 0", background:"#f8f9fb" }} aria-labelledby="results-h">
          <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:56 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:16 }}>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
                <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>Success Outcomes</span>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
              </div>
              <h2 id="results-h" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"#0b1c3d", lineHeight:1.15, marginBottom:4 }}>Numbers That Speak</h2>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, fontStyle:"italic", color:"#d4af37", lineHeight:1.15, marginBottom:20 }}>For Themselves</h2>
              <p style={{ fontSize:".9rem", color:"#64748b", maxWidth:460, margin:"0 auto", lineHeight:1.78 }}>
                A decade of strategic consulting, <em>precision profile building</em>, and data-driven <em style={{ color:"#d4af37" }}>admissions outcomes</em>.
              </p>
            </div>

            {/* Metrics */}
            <div className="reveal metrics-row" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, marginBottom:56, border:"1px solid #e2e8f0", borderRadius:16, overflow:"hidden" }}>
              {METRICS.map((m,i)=>(
                <div key={m.label} style={{ padding:"36px 24px", textAlign:"center", borderRight:i<3?"1px solid #e2e8f0":"none", background:"white" }}>
                  <span style={{ fontSize:".63rem", color:"#d4af37", fontWeight:700, letterSpacing:".1em", display:"block", marginBottom:10, textTransform:"uppercase" }}>{m.badge}</span>
                  <span data-target={m.target} style={{ fontFamily:"var(--font-head)", fontSize:"2.6rem", fontWeight:800, color:"#0b1c3d", display:"block", marginBottom:6 }}>0</span>
                  <div style={{ fontSize:".76rem", color:"#94a3b8", fontWeight:500 }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* University tags */}
            <div className="reveal uni-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40 }}>
              <div>
                <p style={{ fontSize:".78rem", fontWeight:700, color:"#0b1c3d", marginBottom:14 }}>
                  <span style={{ textDecoration:"underline", textDecorationColor:"#d4af37" }}>United States</span> &amp; <span style={{ textDecoration:"underline", textDecorationColor:"#d4af37" }}>United Kingdom</span>
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {["Harvard","MIT","Stanford","Wharton","Columbia","NYU Stern","UCLA","UC Berkeley","Oxford","Cambridge","LSE","UCL","KCL","Imperial","LBS"].map(u=>(
                    <span key={u} style={{ fontSize:".74rem", padding:"5px 12px", borderRadius:6, border:"1px solid #e2e8f0", color:"#475569", background:"white", fontWeight:500 }}>{u}</span>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize:".78rem", fontWeight:700, color:"#0b1c3d", marginBottom:14 }}>Global Institutions</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {["INSEAD","ISB","NUS","McGill","UBC","Toronto","HEC Paris"].map(u=>(
                    <span key={u} style={{ fontSize:".74rem", padding:"5px 12px", borderRadius:6, border:"1px solid #e2e8f0", color:"#475569", background:"white", fontWeight:500 }}>{u}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. GLOBAL MAP ══ */}
        <section id="global-map" style={{ padding:"100px 0", background:"linear-gradient(160deg,#060c1a,#0b1c3d)", position:"relative", overflow:"hidden" }} aria-labelledby="map-h">
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 60% 50%,rgba(0,201,177,.05) 0%,transparent 60%)", pointerEvents:"none" }} />
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:2 }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:56 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:16 }}>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
                <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>Global Reach</span>
                <div style={{ width:32, height:1, background:"#d4af37" }} />
              </div>
              <h2 id="map-h" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"white", lineHeight:1.15, marginBottom:4 }}>From India to</h2>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, fontStyle:"italic", color:"#d4af37", lineHeight:1.15, marginBottom:20 }}>Every Elite Institution</h2>
              <p style={{ fontSize:".9rem", color:"rgba(255,255,255,.42)", maxWidth:460, margin:"0 auto", lineHeight:1.78 }}>
                We place students from across India into the world&apos;s most competitive universities — in the USA, UK, Canada, Europe, and beyond.
              </p>
            </div>
            <div className="reveal" style={{ maxWidth:860, margin:"0 auto" }}>
              <div style={{ width:"100%", height:380, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)", borderRadius:20, position:"relative", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize:"22px 22px", opacity:.5 }} />
                {MAP_LABELS.map(l=>(
                  <div key={l.name} style={{ position:"absolute", top:l.top, left:l.left, background:l.gold?"rgba(212,175,55,.15)":"rgba(255,255,255,.07)", border:`1px solid ${l.gold?"rgba(212,175,55,.4)":"rgba(255,255,255,.15)"}`, color:l.gold?"#d4af37":"rgba(255,255,255,.6)", borderRadius:50, padding:"6px 14px", fontSize:".72rem", fontWeight:700, letterSpacing:".06em", display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap" }}>
                    <span style={{ width:7, height:7, borderRadius:"50%", background:l.gold?"#d4af37":"rgba(255,255,255,.5)", display:"inline-block" }} />
                    ✦ {l.name} {l.flag ?? ""}
                  </div>
                ))}
                <div style={{ textAlign:"center", position:"relative", zIndex:2 }}>
                  <h3 style={{ fontFamily:"var(--font-head)", fontSize:"1.3rem", fontWeight:800, color:"white", marginBottom:8 }}>40+ Destination Countries</h3>
                  <p style={{ fontSize:".82rem", color:"rgba(255,255,255,.35)" }}>Students admitted to 200+ elite institutions worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 8. BLOG / STRATEGIC INSIGHTS ══ */}
        <section id="blog" style={{ padding:"100px 0", background:"white" }} aria-labelledby="blog-h">
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
            <div className="reveal" style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:20 }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                  <div style={{ width:32, height:1, background:"#d4af37" }} />
                  <span style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".14em", color:"#d4af37", textTransform:"uppercase" }}>Strategic Insights</span>
                </div>
                <h2 id="blog-h" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:800, color:"#0b1c3d", lineHeight:1.15, marginBottom:2 }}>Intelligence for</h2>
                <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:800, fontStyle:"italic", color:"#d4af37", lineHeight:1.15 }}>Your Journey</h2>
              </div>
              <a
                href="https://eduquest.org.in/blog"
                target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"10px 22px", borderRadius:6, border:"1px solid #cbd5e1", background:"white", fontSize:".82rem", fontWeight:700, color:"#0b1c3d", textDecoration:"none", transition:"all .2s" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#d4af37"; (e.currentTarget as HTMLElement).style.color="#d4af37"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#cbd5e1"; (e.currentTarget as HTMLElement).style.color="#0b1c3d"; }}
              >
                View All Insights →
              </a>
            </div>

            <div className="four-col-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
              {BLOGS.map((b,i)=>(
                <article key={i} className="reveal" style={{ background:"white", border:"1px solid #e2e8f0", borderRadius:12, overflow:"hidden", cursor:"pointer", transition:"all .25s", transitionDelay:`${i*.07}s` }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#d4af37"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 16px 48px rgba(0,0,0,.08)"; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#e2e8f0"; (e.currentTarget as HTMLElement).style.transform="none"; (e.currentTarget as HTMLElement).style.boxShadow="none"; }}
                >
                  <div style={{ height:110, background:BLOG_COLORS[i], display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem" }}>{b.emoji}</div>
                  <div style={{ padding:"18px 16px" }}>
                    <div style={{ fontSize:".63rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#d4af37", marginBottom:8 }}>{b.tag}</div>
                    <h3 style={{ fontFamily:"var(--font-head)", fontSize:".88rem", fontWeight:700, color:"#0b1c3d", lineHeight:1.45, marginBottom:8 }}>{b.title}</h3>
                    <p style={{ fontSize:".72rem", color:"#94a3b8" }}>{b.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 9. FINAL CTA ══ */}
        <section id="contact" style={{ padding:"120px 0", background:"linear-gradient(160deg,#060c1a,#0b1c3d)", position:"relative", overflow:"hidden", textAlign:"center" }} aria-labelledby="cta-h">
          <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />
          <div style={{ position:"absolute", width:500, height:500, background:"rgba(212,175,55,.06)", borderRadius:"50%", filter:"blur(100px)", top:-150, left:-100, pointerEvents:"none" }} />
          <div style={{ position:"absolute", width:400, height:400, background:"rgba(37,99,235,.1)", borderRadius:"50%", filter:"blur(80px)", bottom:-100, right:-80, pointerEvents:"none" }} />
          <div style={{ maxWidth:680, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:2 }}>
            <div className="reveal">
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:32, background:"rgba(212,175,55,.1)", border:"1px solid rgba(212,175,55,.25)", borderRadius:4, padding:"6px 16px", fontSize:".68rem", fontWeight:700, color:"#d4af37", letterSpacing:".12em", textTransform:"uppercase" }}>
                ✦ Limited Advisory Slots · Fall 2026 Intake
              </div>
              <h2 id="cta-h" style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2.2rem,5vw,3.6rem)", fontWeight:800, color:"white", marginBottom:20, lineHeight:1.1 }}>
                Your Global Journey<br />Starts with a{" "}
                <em style={{ fontStyle:"italic", color:"#d4af37" }}>Strategy</em>
              </h2>
              <p style={{ fontSize:"1rem", color:"rgba(255,255,255,.45)", marginBottom:48, lineHeight:1.8 }}>
                Join 10,000+ students whose globally competitive futures were designed by OmniQuest.
              </p>
              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
                {/* ✅ External link preserved */}
                <a
                  href="https://eduquest.org.in/contact-us/"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"15px 32px", borderRadius:6, background:"#d4af37", color:"#0a0f1e", fontWeight:700, fontSize:".9rem", textDecoration:"none", transition:"opacity .2s" }}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity=".88"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity="1"}
                >
                  📅 Book Strategy Session
                </a>
                {/* ✅ Next.js Link preserved */}
                <Link
                  href="/personality-test"
                  style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"15px 32px", borderRadius:6, background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", color:"white", fontWeight:700, fontSize:".9rem", textDecoration:"none", transition:"all .2s" }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.12)"; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.08)"; }}
                >
                  🧠 Start Psychometric Test
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 10. FOOTER ══ */}
        <footer id="footer" style={{ background:"#060c1a", color:"rgba(255,255,255,.5)", borderTop:"1px solid rgba(255,255,255,.06)" }} role="contentinfo">
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"72px 24px 0" }}>
            <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:48 }}>
              <div>
                <div style={{ fontFamily:"var(--font-head)", fontSize:"1.5rem", fontWeight:800, color:"white", marginBottom:14 }}>
                  Omni<span style={{ color:"#d4af37" }}>Quest</span>
                </div>
                <p style={{ fontSize:".82rem", lineHeight:1.8, marginBottom:20, maxWidth:280, color:"rgba(255,255,255,.38)" }}>
                  India&apos;s premium global admissions strategy firm — designing globally competitive futures through psychometric intelligence and profile architecture.
                </p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  {["School Division","MBA Division","Tech & Skills"].map(b=>(
                    <span key={b} style={{ fontSize:".68rem", fontWeight:600, padding:"4px 12px", borderRadius:4, border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.32)" }}>{b}</span>
                  ))}
                </div>
              </div>
              {FOOTER_COLS.map(col=>(
                <div key={col.title}>
                  <div style={{ fontSize:".68rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", marginBottom:20 }}>{col.title}</div>
                  <ul style={{ display:"flex", flexDirection:"column", gap:12 }}>
                    {col.links.map(l=>(
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target={l.external?"_blank":undefined}
                          rel={l.external?"noopener noreferrer":undefined}
                          style={{ fontSize:".82rem", color:"rgba(255,255,255,.33)", transition:"color .2s", textDecoration:"none" }}
                          onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color="#d4af37"}
                          onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.33)"}
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", padding:"24px 0", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
              <p style={{ fontSize:".74rem", color:"rgba(255,255,255,.22)" }}>© 2026 OmniQuest. All rights reserved. A premium division of EduQuest · MbaWizards · Aptech.</p>
              <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                {[{label:"Privacy Policy",href:"https://eduquest.org.in/privacy-policy/"},{label:"Terms of Service",href:"https://eduquest.org.in/terms-of-use/"},{label:"Cookie Policy",href:"#"}].map(l=>(
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize:".74rem", color:"rgba(255,255,255,.22)", transition:"color .2s", textDecoration:"none" }}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.5)"}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.22)"}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </main>
      <Chatbot />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Reveal animation ── */
        .reveal { opacity:0; transform:translateY(24px); transition:opacity .6s ease,transform .6s ease; }
        .reveal.visible { opacity:1; transform:none; }
        .animate-fade-up { opacity:0; transform:translateY(20px); animation:fadeUp .7s ease forwards; }
        .delay-1{animation-delay:.12s} .delay-2{animation-delay:.22s} .delay-3{animation-delay:.32s} .delay-4{animation-delay:.42s}
        @keyframes fadeUp { to { opacity:1; transform:none; } }

        /* ── Responsive ── */

        /* Tablet landscape */
        @media(max-width:1024px){
          .hero-grid { grid-template-columns:1fr!important; gap:40px!important; }
          .hero-right { display:none!important; }
          .psycho-grid { grid-template-columns:1fr!important; gap:40px!important; }
          .consultant-grid { grid-template-columns:1fr!important; gap:40px!important; }
          .three-col-grid { grid-template-columns:1fr 1fr!important; }
          .four-col-grid { grid-template-columns:1fr 1fr!important; }
          .footer-grid { grid-template-columns:1fr 1fr!important; gap:32px!important; }
        }

        /* Tablet portrait */
        @media(max-width:768px){
          .three-col-grid { grid-template-columns:1fr!important; }
          .four-col-grid { grid-template-columns:1fr 1fr!important; }
          .metrics-row { grid-template-columns:1fr 1fr!important; }
          .uni-grid { grid-template-columns:1fr!important; gap:24px!important; }
          .why-numbered-grid { grid-template-columns:1fr 1fr!important; }
          .footer-grid { grid-template-columns:1fr 1fr!important; }
          .gate-form-grid { grid-template-columns:1fr!important; }
        }

        /* Mobile */
        @media(max-width:480px){
          .four-col-grid { grid-template-columns:1fr!important; }
          .metrics-row { grid-template-columns:1fr 1fr!important; }
          .why-numbered-grid { grid-template-columns:1fr!important; }
          .footer-grid { grid-template-columns:1fr!important; }
          [style*="padding: 80px 24px"] { padding:48px 20px!important; }
        }

        /* Input placeholder color */
        input::placeholder, select { color:rgba(255,255,255,.35); }
        select option { background:#0b1c3d; color:white; }
      `}} />
    </>
  );
}

/* ── DATA ── */
const PATHWAYS = [
  {
    icon:"🏛", division:"School Division · EduQuest",
    title:"Ivy League & Global UG Admissions",
    href:"https://eduquest.org.in/",
    desc:"End-to-end admissions architecture for students targeting Ivy League, Oxbridge, and top-50 global universities — from cognitive profiling to offer letter.",
    features:["SAT / ACT / AP Coaching","Ivy League Profile Building","Essay & Application Architecture","Scholarship & Financial Aid Strategy"],
    shortName:"School Strategy",
  },
  {
    icon:"💼", division:"MBA Division · MbaWizards",
    title:"Elite MBA & Master's Admissions",
    href:"https://eduquest.org.in/",
    desc:"Precision MBA consulting for M7, ISB, INSEAD, and top European schools — built by former admissions officers and alumni of the programmes themselves.",
    features:["GMAT / GRE Strategy (720+ avg)","School Selection Architecture","Essay & Interview Coaching","Post-MBA Career Positioning"],
    shortName:"MBA Strategy",
  },
  {
    icon:"⚡", division:"Tech & Skills Division · Aptech",
    title:"Future-Ready Career Acceleration",
    href:"https://eduquest.org.in/eduquest-aptech/",
    desc:"Industry-designed programmes in AI, Data Science, and technology — built for professionals who want to pivot fast and land elite roles in the digital economy.",
    features:["AI & Data Science Bootcamp","Tech Career Strategy","Portfolio & Project Architecture","Placement & Hiring Support"],
    shortName:"Tech Pathways",
  },
];

const WHY = [
  { title:"We Don't Coach. We Build Profiles.", desc:"Every engagement begins with a full strategic audit — not a course enrollment. We architect your academic and professional profile from first principles." },
  { title:"Ivy League & Top 50 Strategy", desc:"Our consultants have personally navigated Harvard, Wharton, MIT, and INSEAD admissions. We bring insider precision — not guesswork." },
  { title:"End-to-End Architecture", desc:"From psychometric assessment to visa approval — we manage every milestone of your journey with dedicated strategy consultants." },
  { title:"Leadership by Design", desc:"We engineer the extracurricular profile, leadership narrative, and essay architecture that admissions committees at elite schools actually reward." },
  { title:"Data-Driven Decisions", desc:"We analyse thousands of successful applicant profiles to give you a statistically-informed strategy — not hope and guesswork." },
  { title:"Long-Term Career Positioning", desc:"Our work does not stop at admission. We align your university choice and profile to your 10-year career trajectory from day one." },
];

const METRICS = [
  { badge:"Profile Outcomes", target:2299, label:"Student Profiles Designed" },
  { badge:"UG Strategy",      target:1839, label:"Undergraduate Admits"      },
  { badge:"MBA Division",     target:460,  label:"MBA Admits Secured"        },
  { badge:"Scholarships",     target:115,  label:"Scholarships Won (₹Cr+)"  },
];

const MAP_LABELS = [
  { name:"Canada",        top:"18%", left:"14%", gold:false },
  { name:"United States", top:"30%", left:"10%", gold:false },
  { name:"United Kingdom",top:"22%", left:"40%", gold:false },
  { name:"Europe",        top:"30%", left:"46%", gold:false },
  { name:"India",         top:"50%", left:"58%", gold:true, flag:"🇮🇳" },
  { name:"Australia",     top:"68%", left:"70%", gold:false },
];

const BLOGS = [
  { emoji:"📚", tag:"SAT Strategy",  title:"How to Score 1500+ on the SAT: A Proven Study Plan",                         meta:"8 min read · Study Abroad"   },
  { emoji:"🎯", tag:"GMAT Guide",    title:"The Complete GMAT 720+ Blueprint for Indian MBA Aspirants",                   meta:"12 min read · MBA Admissions" },
  { emoji:"🌍", tag:"Ivy League",    title:"What Ivy League Admissions Officers Actually Look For in 2026",               meta:"10 min read · Profile Strategy"},
  { emoji:"🤖", tag:"Tech Careers",  title:"Careers in AI: Skills, Salaries & How to Break In Without a CS Degree",      meta:"9 min read · Career Strategy" },
];

const BLOG_COLORS = [
  "linear-gradient(135deg,#dbeafe,#bfdbfe)",
  "linear-gradient(135deg,#fef3c7,#fde68a)",
  "linear-gradient(135deg,#d1fae5,#a7f3d0)",
  "linear-gradient(135deg,#fce7f3,#fbcfe8)",
];

const FOOTER_COLS = [
  {
    title:"Strategy",
    links:[
      { label:"Ivy League Admissions",     href:"https://eduquest.org.in/",                   external:true  },
      { label:"UG Profile Building",        href:"https://eduquest.org.in/",                   external:true  },
      { label:"MBA Admissions",             href:"https://eduquest.org.in/",                   external:true  },
      { label:"GMAT Strategy",              href:"https://eduquest.org.in/",                   external:true  },
      { label:"Tech Career Programs",       href:"https://eduquest.org.in/eduquest-aptech/",   external:true  },
      { label:"Psychometric Assessment",    href:"/personality-test",                           external:false },
    ],
  },
  {
    title:"Offices",
    links:[
      { label:"Delhi / NCR",         href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Bangalore",           href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Mumbai",              href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Hyderabad",           href:"https://eduquest.org.in/contact-us/", external:true },
      { label:"Online — Pan India",  href:"https://eduquest.org.in/contact-us/", external:true },
    ],
  },
  {
    title:"Company",
    links:[
      { label:"About OmniQuest",    href:"https://eduquest.org.in/about-us/",         external:true  },
      { label:"Success Outcomes",   href:"https://eduquest.org.in/our-achievements/", external:true  },
      { label:"Strategic Insights", href:"https://eduquest.org.in/blog",              external:true  },
      { label:"FAQs",               href:"#faq",                                       external:false },
      { label:"Contact Us",         href:"https://eduquest.org.in/contact-us/",        external:true  },
      { label:"Join Our Team",      href:"https://eduquest.org.in/franchise/",         external:true  },
    ],
  },
];