"use client";
import { useState } from "react";
import { PERSONALITY_QUESTIONS } from "@/lib/personality";
import type { PersonalityReport } from "@/lib/personality";
import LeadForm from "@/components/personality/LeadForm";
import PersonalityReportView from "@/components/personality/PersonalityReportView";
import Link from "next/link";
import type { Metadata } from "next";

type Stage = "intro" | "quiz" | "form" | "loading" | "report";
const ICONS: Record<string, string> = { analytical:"🧠", creative:"🎨", leadership:"🎯", empathy:"💙", ambition:"🚀", resilience:"⚡" };
const LOADS = ["Sending answers to  AI…","Analysing 6 personality dimensions…","Identifying your unique type…","Mapping career strengths…","Crafting personalised insights…","Almost ready…"];

export default function PersonalityTestPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [report, setReport] = useState<PersonalityReport | null>(null);
  const [loadMsg, setLoadMsg] = useState(LOADS[0]);

  const q = PERSONALITY_QUESTIONS[current];
  const total = PERSONALITY_QUESTIONS.length;

  function next() {
    if (selected === null) return;
    const na = { ...answers, [q.id]: selected };
    setAnswers(na); setSelected(null);
    current < total - 1 ? setCurrent(current + 1) : setStage("form");
  }

  function prev() {
    if (current === 0) return;
    setCurrent(current - 1);
    setSelected(answers[PERSONALITY_QUESTIONS[current - 1].id] ?? null);
  }

  async function handleFormSubmit(data: Record<string, string>) {
    setStage("loading");
    let i = 0;
    const iv = setInterval(() => { i = (i + 1) % LOADS.length; setLoadMsg(LOADS[i]); }, 1900);
    try {
      const aiRes = await fetch("/api/personality-test", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, studentName: data.fullName }),
      });
      const { report: aiReport, error } = await aiRes.json();
      if (error) throw new Error(error);
      setReport(aiReport);
      fetch("/api/submit-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ leadData: data, answers, report: aiReport }) });
    } catch (err) {
      console.error("OpenAi failed, using fallback:", err);
      const { computeReport } = await import("@/lib/personality");
      const fb = computeReport(answers, data.fullName);
      setReport(fb);
      fetch("/api/submit-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ leadData: data, answers, report: fb }) });
    } finally { clearInterval(iv); setStage("report"); }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#060812", color: "#f1f5ff", fontFamily: "var(--font-body)", position: "relative", overflow: "hidden" }}>
      {/* Orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {[{ w:600, h:600, bg:"rgba(91,138,255,.09)", top:-200, left:-100, dur:"9s" }, { w:500, h:500, bg:"rgba(167,139,250,.07)", bottom:-100, right:-80, dur:"11s", delay:"-4s" }, { w:380, h:380, bg:"rgba(0,201,177,.06)", top:"40%", left:"55%", dur:"13s", delay:"-7s" }].map((o, i) => (
          <div key={i} style={{ position:"absolute", width:o.w, height:o.h, borderRadius:"50%", background:o.bg, filter:"blur(100px)", top:o.top, left:o.left, bottom:(o as {bottom?:number}).bottom, right:(o as {right?:number}).right, animation:`orbFloat ${o.dur} ease-in-out infinite alternate`, animationDelay:(o as {delay?:string}).delay }} />
        ))}
      </div>

      {/* Nav */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"16px 40px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(6,8,18,.65)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(255,255,255,.07)" }}>
        <Link href="/" style={{ fontFamily:"var(--font-head)", fontSize:"1.2rem", fontWeight:700, background:"var(--grad-teal)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", textDecoration:"none" }}>OmniQuest</Link>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          {stage === "quiz" && <span style={{ fontSize:".8rem", color:"rgba(241,245,255,.4)" }}>Q {current+1}/{total}</span>}
          <span style={{ fontSize:".72rem", color:"rgba(241,245,255,.4)", letterSpacing:".1em", textTransform:"uppercase" }}>AI Personality Test</span>
        </div>
      </nav>

      <div style={{ position:"relative", zIndex:1, maxWidth:720, margin:"0 auto", padding:"96px 24px 60px" }}>

        {/* ── INTRO ── */}
        {stage === "intro" && (
          <div style={{ textAlign:"center", animation:"fadeUp .7s ease both" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"7px 18px", borderRadius:100, background:"rgba(91,138,255,.12)", border:"1px solid rgba(91,138,255,.3)", color:"#5b8aff", fontSize:".72rem", letterSpacing:".14em", fontWeight:600, textTransform:"uppercase", marginBottom:26 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#5b8aff", animation:"blink 1.5s ease-in-out infinite" }} />
              Powered by OmniQuest
            </div>
            <h1 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:800, lineHeight:1.14, marginBottom:18 }}>
              Discover Your<br />
              <span style={{ background:"linear-gradient(135deg,#5b8aff,#a78bfa,#00C9B1)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>True Potential</span>
            </h1>
            <p style={{ fontSize:"1.05rem", color:"rgba(241,245,255,.55)", maxWidth:500, margin:"0 auto 36px", lineHeight:1.75 }}>
              12 questions across 6 dimensions. AI analyses your answers and generates a personalised personality report with career matches and program recommendations.
            </p>
            <div style={{ display:"flex", gap:20, justifyContent:"center", marginBottom:44, flexWrap:"wrap" }}>
              {[["⏱️","5 min"],["⚡"," AI"],["📊","Full report"],["🎯","Program match"]].map(([ic,lb]) => (
                <div key={lb} style={{ textAlign:"center" }}><div style={{ fontSize:"1.5rem", marginBottom:4 }}>{ic}</div><div style={{ fontSize:".74rem", color:"rgba(241,245,255,.4)" }}>{lb}</div></div>
              ))}
            </div>
            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <button onClick={() => setStage("quiz")} style={{ padding:"15px 40px", borderRadius:50, background:"var(--grad-teal)", color:"white", fontSize:"1rem", fontWeight:700, border:"none", cursor:"pointer", boxShadow:"0 8px 32px rgba(0,201,177,.35)", transition:"transform .2s, box-shadow .2s" }}
                onMouseEnter={(e)=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLElement).style.boxShadow="0 12px 40px rgba(0,201,177,.5)"}}
                onMouseLeave={(e)=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="0 8px 32px rgba(0,201,177,.35)"}}>
                🚀 Start Free Assessment
              </button>
              <Link href="/" style={{ padding:"15px 28px", borderRadius:50, background:"rgba(255,255,255,.06)", border:"1.5px solid rgba(255,255,255,.15)", color:"rgba(241,245,255,.7)", fontSize:"1rem", textDecoration:"none", display:"inline-flex", alignItems:"center" }}>← Home</Link>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginTop:52 }}>
              {Object.entries(ICONS).map(([cat, ic]) => (
                <div key={cat} style={{ padding:16, borderRadius:12, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", textAlign:"center", transition:"border .2s" }}
                  onMouseEnter={(e)=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,177,.3)"}}
                  onMouseLeave={(e)=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)"}}>
                  <div style={{ fontSize:"1.5rem", marginBottom:5 }}>{ic}</div>
                  <div style={{ fontSize:".72rem", color:"rgba(241,245,255,.45)", textTransform:"capitalize" }}>{cat}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── QUIZ ── */}
        {stage === "quiz" && (
          <div style={{ animation:"fadeUp .45s ease both" }}>
            <div style={{ marginBottom:32 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                <span style={{ fontSize:".76rem", color:"rgba(241,245,255,.45)", textTransform:"uppercase", letterSpacing:".1em" }}>{ICONS[q.category]} {q.category.charAt(0).toUpperCase()+q.category.slice(1)}</span>
                <span style={{ fontSize:".82rem", color:"rgba(241,245,255,.5)" }}>{current+1}/{total}</span>
              </div>
              <div style={{ height:5, background:"rgba(255,255,255,.07)", borderRadius:99, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${(current/total)*100}%`, background:"var(--grad-teal)", borderRadius:99, transition:"width .5s ease", boxShadow:"0 0 14px rgba(0,201,177,.5)" }} />
              </div>
              <div style={{ display:"flex", gap:3, marginTop:8, justifyContent:"center" }}>
                {PERSONALITY_QUESTIONS.map((_,i) => (
                  <div key={i} style={{ width:i===current?16:5, height:5, borderRadius:99, background:i<current?"var(--teal)":i===current?"#5b8aff":"rgba(255,255,255,.08)", transition:"all .3s" }} />
                ))}
              </div>
            </div>

            <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:20, padding:"32px 28px", marginBottom:18 }}>
              <div style={{ fontSize:".7rem", color:"#5b8aff", fontWeight:600, letterSpacing:".12em", textTransform:"uppercase", marginBottom:14 }}>Question {current+1}</div>
              <h2 style={{ fontFamily:"var(--font-head)", fontSize:"clamp(1.1rem,3vw,1.45rem)", fontWeight:700, lineHeight:1.4, marginBottom:26 }}>{q.text}</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
                {q.options.map((opt) => {
                  const sel = selected === opt.value;
                  return (
                    <button key={opt.value} onClick={() => setSelected(opt.value)}
                      style={{ padding:"15px 18px", borderRadius:12, textAlign:"left", background:sel?"rgba(0,201,177,.11)":"rgba(255,255,255,.04)", border:`1.5px solid ${sel?"rgba(0,201,177,.55)":"rgba(255,255,255,.07)"}`, color:sel?"#00C9B1":"rgba(241,245,255,.78)", cursor:"pointer", fontSize:".9rem", lineHeight:1.5, transition:"all .18s", fontFamily:"var(--font-body)", display:"flex", alignItems:"center", gap:12 }}
                      onMouseEnter={(e)=>{if(!sel){(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.07)";(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.18)"}}}
                      onMouseLeave={(e)=>{if(!sel){(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)";(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)"}}}>
                      <div style={{ width:21, height:21, borderRadius:"50%", border:`2px solid ${sel?"#00C9B1":"rgba(255,255,255,.2)"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, background:sel?"rgba(0,201,177,.18)":"transparent", transition:"all .18s" }}>
                        {sel && <div style={{ width:9, height:9, borderRadius:"50%", background:"#00C9B1" }} />}
                      </div>
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display:"flex", gap:11 }}>
              <button onClick={prev} disabled={current===0} style={{ padding:"12px 22px", borderRadius:12, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", color:current===0?"rgba(241,245,255,.2)":"rgba(241,245,255,.65)", cursor:current===0?"default":"pointer", fontSize:".9rem", fontFamily:"var(--font-body)" }}>← Back</button>
              <button onClick={next} disabled={selected===null} style={{ flex:1, padding:"12px 24px", borderRadius:12, background:selected!==null?"var(--grad-teal)":"rgba(255,255,255,.06)", border:"none", color:selected!==null?"white":"rgba(241,245,255,.3)", cursor:selected!==null?"pointer":"default", fontSize:".92rem", fontWeight:600, fontFamily:"var(--font-body)", transition:"all .22s", boxShadow:selected!==null?"0 4px 20px rgba(0,201,177,.3)":"none" }}>
                {current===total-1?"✨ Generate My AI Report →":"Next →"}
              </button>
            </div>
          </div>
        )}

        {stage === "form" && <LeadForm onSubmit={handleFormSubmit} />}

        {/* ── LOADING ── */}
        {stage === "loading" && (
          <div style={{ textAlign:"center", animation:"fadeUp .5s ease both", padding:"40px 0" }}>
            <div style={{ position:"relative", width:120, height:120, margin:"0 auto 32px" }}>
              <div style={{ width:120, height:120, borderRadius:"50%", background:"rgba(91,138,255,.1)", border:"2px solid rgba(91,138,255,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"3rem", animation:"float 2.5s ease-in-out infinite" }}>⚡</div>
              <div style={{ position:"absolute", inset:-8, borderRadius:"50%", border:"3px solid transparent", borderTopColor:"#5b8aff", borderRightColor:"#a78bfa", animation:"spin 1.4s linear infinite" }} />
              <div style={{ position:"absolute", inset:-18, borderRadius:"50%", border:"2px solid transparent", borderTopColor:"rgba(0,201,177,.5)", borderBottomColor:"rgba(0,201,177,.3)", animation:"spin 2.5s linear infinite reverse" }} />
            </div>
            <h2 style={{ fontFamily:"var(--font-head)", fontSize:"1.6rem", fontWeight:800, marginBottom:10 }}>AI is analysing your profile</h2>
            <p style={{ color:"rgba(241,245,255,.4)", fontSize:".9rem", marginBottom:32, minHeight:26, transition:"opacity .5s" }}>{loadMsg}</p>
            <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:40 }}>
              {[0,1,2,3,4].map(i => <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:"var(--teal)", animation:"typingDot 1.4s ease-in-out infinite", animationDelay:`${i*.18}s` }} />)}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:9, maxWidth:420, margin:"0 auto" }}>
              {[["🧠","Processing 12 answers"],["📊","Scoring 6 dimensions"],["⚡","AI reasoning"],["🎯","Matching personality type"],["💼","Finding career paths"],["🎓","Picking best program"]].map(([ic,tx]) => (
                <div key={tx} style={{ padding:"10px 14px", borderRadius:10, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8, fontSize:".78rem", color:"rgba(241,245,255,.4)" }}><span>{ic}</span>{tx}</div>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `@keyframes spin{to{transform:rotate(360deg)}}` }} />
          </div>
        )}

        {stage === "report" && report && <PersonalityReportView report={report} />}
      </div>
    </div>
  );
}
