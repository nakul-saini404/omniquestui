"use client";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message { role: "user" | "assistant"; content: string; }
type Phase = "idle" | "hello" | "help" | "chat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Greeting animation sequence
  useEffect(() => {
    if (!open) { setPhase("idle"); return; }
    setPhase("hello");
    const t1 = setTimeout(() => setPhase("help"), 2400);
    const t2 = setTimeout(() => { setPhase("chat"); inputRef.current?.focus(); }, 4600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, phase]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "I'm having a moment! Please try again or call us directly 📞" }]);
    }
    setLoading(false);
  }, [input, loading, messages]);

  const QUICK = ["Tell me about SAT coaching", "MBA admissions help", "Study abroad options", "Take personality test"];

  return (
    <>
      {/* Floating trigger */}
      <button onClick={() => setOpen(!open)} aria-label={open ? "Close chat" : "Open AI chat"}
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9000, width: 64, height: 64, borderRadius: "50%", background: open ? "var(--navy)" : "var(--grad-teal)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: open ? "0 8px 32px rgba(11,28,61,.4)" : "0 8px 32px rgba(0,201,177,.45)", transition: "all .3s cubic-bezier(.34,1.56,.64,1)", fontSize: "1.5rem" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
        <span style={{ transition: "all .3s", display: "inline-block", transform: open ? "rotate(90deg)" : "none" }}>
          {open ? "✕" : "🤖"}
        </span>
        {/* Ping ring when closed */}
        {!open && <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid rgba(0,201,177,.4)", animation: "ping 2s ease-in-out infinite" }} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{ position: "fixed", bottom: 104, right: 28, zIndex: 8999, width: 390, maxWidth: "calc(100vw - 40px)", background: "white", borderRadius: 22, boxShadow: "0 32px 100px rgba(11,28,61,.25), 0 0 0 1px rgba(11,28,61,.06)", display: "flex", flexDirection: "column", overflow: "hidden", animation: "slideUp .4s cubic-bezier(.34,1.56,.64,1) both", maxHeight: "82vh" }}>

          {/* Header */}
          <div style={{ background: "var(--grad-hero)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            {/* Animated avatar */}
            <div style={{ position: "relative" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,.12)", border: "2px solid rgba(0,201,177,.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", animation: open ? "avatarPop .5s cubic-bezier(.34,1.56,.64,1) both" : "none" }}>
                🧑‍🏫
              </div>
              <div style={{ position: "absolute", bottom: 2, right: 2, width: 12, height: 12, borderRadius: "50%", background: "#22c55e", border: "2px solid var(--navy)" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "white", fontWeight: 700, fontFamily: "var(--font-head)", fontSize: ".95rem" }}>OmniQuest AI</div>
              <div style={{ color: "rgba(255,255,255,.55)", fontSize: ".72rem", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "blink 2s ease-in-out infinite" }} />
                Powered by Grok · Online
              </div>
            </div>
            <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.3)", textAlign: "right", lineHeight: 1.4 }}>
              Your global<br />education guide
            </div>
          </div>

          {/* Messages area */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12, minHeight: 280 }}>

            {/* Hello animation */}
            {(phase === "hello" || phase === "help" || phase === "chat") && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, animation: "messageSlide .4s ease both" }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--sky)", border: "1.5px solid var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".95rem", flexShrink: 0 }}>🧑‍🏫</div>
                <div className="chat-bubble-bot">
                  <span style={{ display: "inline-block", animation: "wave 1.5s ease-in-out", fontSize: "1.2rem" }}>👋</span>
                  <strong style={{ marginLeft: 6 }}>Hello! Great to meet you!</strong>
                </div>
              </div>
            )}

            {/* How can I help */}
            {(phase === "help" || phase === "chat") && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, animation: "messageSlide .4s ease .1s both" }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--sky)", border: "1.5px solid var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".95rem", flexShrink: 0 }}>🧑‍🏫</div>
                <div className="chat-bubble-bot">
                  I'm your OmniQuest AI guide 🎓 Ask me about <strong>SAT, GMAT, MBA admissions, study abroad</strong>, or our AI skill programs — I'm here to help!
                </div>
              </div>
            )}

            {/* Quick replies */}
            {phase === "chat" && messages.length === 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, paddingLeft: 38, animation: "fadeIn .4s ease .2s both", opacity: 0, animationFillMode: "both" }}>
                {QUICK.map((q) => (
                  <button key={q} onClick={() => { setInput(q); setTimeout(() => send(), 0); }}
                    style={{ padding: "6px 12px", borderRadius: 50, background: "var(--sky)", border: "1px solid rgba(37,99,235,.15)", color: "var(--navy)", fontSize: ".75rem", fontWeight: 500, cursor: "pointer", transition: "all .18s", fontFamily: "var(--font-body)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--sky)"; (e.currentTarget as HTMLElement).style.color = "var(--navy)"; }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat messages */}
            {phase === "chat" && messages.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-end", gap: 8, justifyContent: m.role === "user" ? "flex-end" : "flex-start", animation: "messageSlide .35s ease both" }}>
                {m.role === "assistant" && (
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--sky)", border: "1.5px solid var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".95rem", flexShrink: 0 }}>🧑‍🏫</div>
                )}
                <div className={m.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"} style={{ whiteSpace: "pre-wrap" }}>
                  {m.content}
                </div>
              </div>
            ))}

            {/* Typing */}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--sky)", border: "1.5px solid var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".95rem" }}>🧑‍🏫</div>
                <div className="chat-bubble-bot" style={{ display: "flex", gap: 4, padding: "12px 16px" }}>
                  <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {phase === "chat" && (
            <div style={{ padding: "12px 14px", borderTop: "1px solid var(--grey-100)", display: "flex", gap: 8, flexShrink: 0, background: "var(--grey-50)" }}>
              <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="Ask about programs, SAT, MBA..." maxLength={400}
                style={{ flex: 1, border: "1.5px solid var(--grey-200)", borderRadius: 12, padding: "10px 14px", fontSize: ".87rem", outline: "none", fontFamily: "var(--font-body)", background: "white", transition: "border .2s" }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--teal)"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--grey-200)"; }}
              />
              <button onClick={send} disabled={loading || !input.trim()}
                style={{ width: 42, height: 42, borderRadius: 11, background: input.trim() && !loading ? "var(--grad-teal)" : "var(--grey-100)", border: "none", cursor: input.trim() && !loading ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", transition: "all .2s", flexShrink: 0, boxShadow: input.trim() ? "0 4px 12px rgba(0,201,177,.3)" : "none" }}>
                ➤
              </button>
            </div>
          )}

          {/* Powered by */}
          <div style={{ padding: "6px", textAlign: "center", fontSize: ".65rem", color: "var(--grey-400)", borderTop: "1px solid var(--grey-100)", background: "white", flexShrink: 0 }}>
            ⚡ Powered by Grok AI · xAI
          </div>
        </div>
      )}
    </>
  );
}
