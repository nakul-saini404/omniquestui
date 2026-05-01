'use client';
import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import {  useRef, useEffect } from 'react';

/* ── WhatsApp SVG Icon ───────────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 1024 1024" style={{ display: 'block', pointerEvents: 'none' }}>
      <defs>
        <path
          id="wa-bg"
          d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"
        />
      </defs>
      <linearGradient id="wa-grad" gradientUnits="userSpaceOnUse" x1="512" y1="1" x2="512" y2="1025">
        <stop offset="0" stopColor="#61fd7d" />
        <stop offset="1" stopColor="#2bb826" />
      </linearGradient>
      <use xlinkHref="#wa-bg" style={{ fill: 'url(#wa-grad)' }} />
      <path
        fill="#FFF"
        d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
      />
    </svg>
  );
}

/* ── Chat Window ─────────────────────────────────────────────────────────── */
function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hi! I\'m Kritika from EduQuest. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Sorry, I am unable to connect right now.' }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div
      className="w-80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      style={{
        height: '520px',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        animation: 'chat-enter 0.25s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      {/* ── Header ── */}
      <div
        className="relative p-4 text-white flex items-center justify-between rounded-t-2xl overflow-hidden flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #ec4899 0%, #ff95e6 100%)' }}
      >
        <div className="flex items-center gap-3 relative z-10 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-full p-0.5 flex-shrink-0"
            style={{ background: 'linear-gradient(45deg, #ec4899, #ffaeff)' }}>
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Image
                src="https://storage.files-vault.com/uploads/1771241332-Yp12oCHwxC.png"
                alt="Agent" width={28} height={28}
                className="w-7 h-7 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-bold text-base leading-tight truncate">EduQuest</p>
            <div className="flex items-center gap-1.5 text-xs opacity-90 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span>Kritika is online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose}
          className="relative z-10 p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
          aria-label="Close chat">
          <X size={18} />
        </button>
      </div>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed"
              style={{
                background: msg.role === 'user' ? '#ec4899' : '#fff',
                color: msg.role === 'user' ? '#fff' : '#374151',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border border-gray-200 rounded-full text-sm outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-200 transition-all"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-opacity disabled:opacity-50"
          style={{ background: 'linear-gradient(135deg, #ec4899, #ff7bcc)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────────────── */
export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [promptDismissed, setPromptDismissed] = useState(false);

  // 🔧 Replace with your actual WhatsApp number (country code + number, no +)
  const WHATSAPP_NUMBER = '9958041888';
  const WHATSAPP_MESSAGE = 'Hi! I have a question about EduQuest.';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  function handleChatToggle() {
    setChatOpen((o) => !o);
    if (!chatOpen) setPromptDismissed(true); // hide tooltip when chat opens
  }

  return (
    <>
      {/* ── WhatsApp button (bottom-left) ── */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="block hover:scale-110 transition-transform duration-300"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(37,211,102,0.4))' }}
        >
          <WhatsAppIcon />
        </a>
      </div>

      {/* ── Chat area (bottom-right) ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Chat window */}
        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}

        {/* Prompt tooltip — only when chat is closed and not dismissed */}
        {!chatOpen && !promptDismissed && (
          <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 max-w-xs min-w-48 animate-fade-in">
            <p className="text-sm text-gray-700 pr-5 leading-snug">
              Hi there, have a question? Text us here.
            </p>
            <button
              onClick={() => setPromptDismissed(true)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
            <div
              className="absolute right-5 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-100"
              style={{ transform: 'rotate(45deg)' }}
            />
          </div>
        )}

        {/* Chat toggle button */}
        <div className="relative">
          {!chatOpen && (
            <span
              className="absolute inset-0 rounded-full border-2 animate-ping opacity-30 pointer-events-none"
              style={{ borderColor: '#ec4899' }}
            />
          )}
          <button
            onClick={handleChatToggle}
            aria-label={chatOpen ? 'Close chat' : 'Open chat'}
            className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 overflow-hidden border-0"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #ff7bcc 100%)',
              boxShadow: '0 10px 40px rgba(236,72,153,0.35)',
            }}
          >
            {/* Shimmer */}
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2.5s infinite',
              }}
            />
            {chatOpen
              ? <X size={22} className="relative z-10" />
              : <MessageCircle size={24} className="relative z-10" />
            }
            {/* Badge — hide when open */}
            {!chatOpen && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-bounce">
                1
              </span>
            )}
          </button>
        </div>
      </div>

        <style
        dangerouslySetInnerHTML={{
          __html: `
           @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes chat-enter {
          from { opacity: 0; transform: scale(0.85) translateY(16px); transform-origin: bottom right; }
          to   { opacity: 1; transform: scale(1)    translateY(0);    transform-origin: bottom right; }
        }
        .animate-fade-in { animation: fade-in 0.25s ease-out; }
          `
        }}
      />
       
    </>
  );
}