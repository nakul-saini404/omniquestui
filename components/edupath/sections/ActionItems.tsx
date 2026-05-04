"use client";

import type { Country, Grade, Stream, ActionItem } from "@/types/edupath";

// ─── ActionItems ──────────────────────────────────────────────────────────────
export function ActionItems({
  grade,
  score,
  countries,
  stream,
  field,
}: {
  grade: Grade;
  score: number;
  countries: Country[];
  stream: Stream;
  field: string;
}) {
  const actions = buildActions(grade, score, countries, stream, field);

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-red" />
        Immediate Action Items
      </div>
      <div className="ep-action-list">
        {actions.map((a, i) => (
          <div key={i} className="ep-action-item">
            <div className="ep-action-icon">{a.icon}</div>
            <div className="ep-action-text">
              <div className="ep-action-title">{a.title}</div>
              <div className="ep-action-desc">{a.desc}</div>
            </div>
            <div className={`ep-action-urgent ${a.urgency}`}>{a.urgLabel}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function buildActions(
  grade: Grade,
  score: number,
  countries: Country[],
  stream: Stream,
  field: string
): ActionItem[] {
  if (grade === 12) {
    const actions: ActionItem[] = [
      {
        icon: "📋",
        title: "Start Common App / UCAS profile",
        desc: "Set up your account on application portals immediately.",
        urgency: "urgent-red",
        urgLabel: "Urgent",
      },
      {
        icon: "✍️",
        title: "Write your Personal Statement",
        desc: "500–650 words for US, 4000 chars for UCAS. Start drafts now.",
        urgency: "urgent-red",
        urgLabel: "Urgent",
      },
    ];
    if (countries.includes("USA") && score < 85) {
      actions.push({
        icon: "📝",
        title: "Book SAT / ACT test date",
        desc: "Register for October or November test. Prep starts NOW.",
        urgency: "urgent-red",
        urgLabel: "Urgent",
      });
    }
    actions.push(
      {
        icon: "👩‍🏫",
        title: "Request teacher recommendation letters",
        desc: "Ask 2–3 teachers now. Give them 4–6 weeks lead time.",
        urgency: "urgent-yellow",
        urgLabel: "This Month",
      },
      {
        icon: "💰",
        title: "Research scholarships",
        desc: "Check Inlaks, JN Tata, Fulbright, GREAT, DAAD.",
        urgency: "urgent-blue",
        urgLabel: "Soon",
      }
    );
    return actions;
  }

  if (grade === 11) {
    return [
      {
        icon: "🎯",
        title: "Finalise your country shortlist",
        desc: "Narrow to 3–4 countries based on career goals and budget.",
        urgency: "urgent-yellow",
        urgLabel: "This Month",
      },
      ...(countries.includes("USA")
        ? [
            {
              icon: "📝",
              title: "Begin SAT preparation",
              desc: "Enroll in Khan Academy SAT or a coaching class.",
              urgency: "urgent-yellow" as const,
              urgLabel: "This Month",
            },
          ]
        : []),
      {
        icon: "🏅",
        title: "Participate in olympiads / competitions",
        desc: "IOQM, Science Olympiad, hackathons — adds to your profile.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
      {
        icon: "💡",
        title: "Start a side project",
        desc: "Coding project, research, blog, volunteering — pick one.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
    ];
  }

  if (grade === 10) {
    return [
      {
        icon: "📚",
        title: "Choose 11th stream wisely",
        desc: `${stream} aligns with ${field}. Confirm with school counselor.`,
        urgency: "urgent-yellow",
        urgLabel: "Important",
      },
      {
        icon: "🌐",
        title: "Improve English proficiency",
        desc: "Read newspapers, watch TED talks, take online writing courses.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
      {
        icon: "🧪",
        title: "Join school clubs",
        desc: "Science fair, model UN, coding club — start building CV now.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
    ];
  }

  return [
    {
      icon: "📖",
      title: "Build strong academic habits",
      desc: "Consistency now = stronger 12th grade. Aim for 85%+ each term.",
      urgency: "urgent-blue",
      urgLabel: "Ongoing",
    },
    {
      icon: "🌟",
      title: "Explore your interests",
      desc: "Try coding, robotics, debate, art — find your true passion.",
      urgency: "urgent-blue",
      urgLabel: "This Year",
    },
    {
      icon: "🗺️",
      title: "Browse university websites",
      desc: `Look up universities in ${countries[0]}. Watch virtual campus tours.`,
      urgency: "urgent-blue",
      urgLabel: "For Fun",
    },
  ];
}

// ─── ReadinessProgress ────────────────────────────────────────────────────────
export function ReadinessProgress({ grade, score }: { grade: Grade; score: number }) {
  const academicReady = Math.min(100, score);
  const appReady = grade === 12 ? 40 : grade === 11 ? 20 : grade === 10 ? 10 : 5;
  const timeLeft = Math.min(100, Math.round(((12 - grade) / 4) * 100));

  const circles = [
    { label: "Academics", pct: academicReady, color: "#3b82f6" },
    { label: "App Ready", pct: appReady, color: "#f59e0b" },
    { label: "Time Left", pct: timeLeft, color: "#10b981" },
  ];

  const notes: Record<number, string> = {
    12: "Application season is active. Prioritise essays, test scores, and meeting deadlines.",
    11: "One year to go. Build your activities record and begin test prep.",
    10: "Two years ahead. Focus on stream selection and English proficiency.",
    9: "Three years away — form strong habits and explore interests.",
    8: "Four years to shape your profile. Dream big, start curious.",
  };

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-purple" />
        Readiness Overview
      </div>
      <div className="ep-progress-wrap">
        {circles.map((c) => {
          const r = 32;
          const circ = 2 * Math.PI * r;
          const dash = circ - (c.pct / 100) * circ;
          return (
            <div key={c.label} className="ep-prog-item">
              <div className="ep-prog-circle">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle
                    className="ep-prog-bg"
                    cx="40"
                    cy="40"
                    r={r}
                    fill="none"
                    strokeWidth="6"
                    stroke="var(--ep-border)"
                  />
                  <circle
                    className="ep-prog-fg"
                    cx="40"
                    cy="40"
                    r={r}
                    fill="none"
                    strokeWidth="6"
                    stroke={c.color}
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    strokeDashoffset={dash}
                    style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                  />
                </svg>
                <div className="ep-prog-label">
                  <div className="ep-prog-num" style={{ color: c.color }}>
                    {c.pct}%
                  </div>
                </div>
              </div>
              <div className="ep-prog-title">{c.label}</div>
            </div>
          );
        })}
      </div>
      <div className="ep-readiness-note">{notes[grade] ?? notes[12]}</div>
    </div>
  );
}