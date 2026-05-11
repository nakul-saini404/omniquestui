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
  const f = field.toLowerCase();
  const isIndia  = countries.includes("India") && countries.length === 1;
  const hasIndia = countries.includes("India");
  const hasUSA   = countries.includes("USA");
  const hasUK    = countries.includes("UK");

  // ── Grade 12 ─────────────────────────────────────────────────────────────
  if (grade === 12) {
    const actions: ActionItem[] = [];

    // Field-specific urgent actions
    if (f.includes("medicine") || f.includes("pre-med")) {
      if (hasIndia) {
        actions.push({
          icon: "🩺",
          title: "Register for NEET-UG 2026",
          desc: "Registration: Feb 8 – Mar 8, 2026 at neet.nta.ac.in. Exam: May 3, 2026. Target 650+ for AIIMS.",
          urgency: "urgent-red",
          urgLabel: "Urgent",
        });
      }
      if (hasUK) {
        actions.push(
          {
            icon: "🩺",
            title: "Register for UCAT (UK/Australia Medicine)",
            desc: "Registration opens May 2026 at ucat.ac.uk. Exam: Jul–Sep 2026. Target 2700+; SJT Band 1.",
            urgency: "urgent-red",
            urgLabel: "Urgent",
          },
          {
            icon: "📋",
            title: "UCAS Medicine Deadline: October 15",
            desc: "ALL UK medical school applications must be submitted by Oct 15 — much earlier than other programs. Start Personal Statement NOW.",
            urgency: "urgent-red",
            urgLabel: "Hard Deadline",
          }
        );
      }
    }

    if (f.includes("law") || f.includes("political")) {
      if (hasIndia) {
        actions.push(
          {
            icon: "⚖️",
            title: "CLAT 2026 Registration (Aug–Oct 2025)",
            desc: "CLAT 2026 is December 7, 2025. Register at consortiumofnlus.ac.in immediately. AILET: December 14, 2025.",
            urgency: "urgent-red",
            urgLabel: "Urgent",
          }
        );
      }
      if (hasUK) {
        actions.push({
          icon: "⚖️",
          title: "Register for LNAT (UK Law)",
          desc: "Required for Oxford, UCL, Durham, Glasgow law. Register at lnat.ac.uk from September. Complete before January UCAS deadline.",
          urgency: "urgent-red",
          urgLabel: "Urgent",
        });
      }
    }

    if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
      if (hasIndia) {
        actions.push({
          icon: "📊",
          title: "Register for JEE Main 2026",
          desc: "Registration: Oct–Nov 2025 at jeemain.nta.ac.in. Session 1: Jan 2026. Aim 99+ percentile for IIT eligibility.",
          urgency: "urgent-red",
          urgLabel: "Urgent",
        });
      }
      if (hasUK) {
        actions.push({
          icon: "⚗️",
          title: "Register for ESAT (Cambridge/Imperial)",
          desc: "ESAT registration opens August. Slots fill within 48 hours. Required for Cambridge Engineering/Natural Sciences and Imperial.",
          urgency: "urgent-red",
          urgLabel: "Urgent",
        });
      }
    }

    if (f.includes("design") || f.includes("architecture")) {
      if (hasIndia) {
        actions.push(
          {
            icon: "🎨",
            title: "Register for UCEED 2026 (IIT Design)",
            desc: "UCEED registration closes December 2025. Exam: January 18, 2026. Start portfolio building immediately.",
            urgency: "urgent-red",
            urgLabel: "Urgent",
          },
          {
            icon: "🎨",
            title: "Build Your Design Portfolio",
            desc: "Start a 15–20 piece portfolio now. Include sketches, digital work, design process documentation. Critical for NID/NIFT/UCEED.",
            urgency: "urgent-red",
            urgLabel: "Urgent",
          }
        );
      }
    }

    if (f.includes("business") || f.includes("economics")) {
      if (hasIndia) {
        actions.push({
          icon: "📊",
          title: "Register for CUET UG & IPMAT",
          desc: "CUET registration: Jan–Mar 2026. IPMAT (IIM Indore) registration: Feb–Apr 2026. Both needed for top Commerce programs.",
          urgency: "urgent-red",
          urgLabel: "Urgent",
        });
      }
    }

    // USA actions
    if (hasUSA) {
      actions.push({
        icon: "📋",
        title: "Create Common App Profile",
        desc: "Common App opens August 1 for Fall 2027. Fill academics, activities, honors. Request teacher recommendations NOW.",
        urgency: "urgent-red",
        urgLabel: "Urgent",
      });
      if (score < 85 || actions.length < 3) {
        actions.push({
          icon: "📐",
          title: "Book SAT Test Date",
          desc: `Register for SAT at sat.collegeboard.org. Target ${f.includes("engineering") || f.includes("computer") ? "1480+" : f.includes("business") ? "1460+" : "1400+"}. First attempt: Aug 23, 2026.`,
          urgency: "urgent-red",
          urgLabel: "Urgent",
        });
      }
    }

    // General actions for international
    if (!isIndia) {
      actions.push(
        {
          icon: "🗣️",
          title: "Begin IELTS / TOEFL Prep",
          desc: `Target ${hasUK ? "IELTS for UKVI Academic 7.0+" : "IELTS 7.0+ or TOEFL 100+"}. Allow 3 months of preparation. First attempt: June–July 2026.`,
          urgency: "urgent-red",
          urgLabel: "Urgent",
        },
        {
          icon: "✍️",
          title: "Write Your Personal Statement / Essays",
          desc: hasUK
            ? "UCAS Personal Statement: 4,000 characters. Focus 75% on your subject passion. Start drafts immediately."
            : "650-word Common App main essay + supplemental essays. Start brainstorming now.",
          urgency: "urgent-red",
          urgLabel: "Urgent",
        }
      );
    }

    // Scholarship action
    actions.push({
      icon: "💰",
      title: "Research & Apply for Scholarships",
      desc: hasIndia
        ? "Explore institute-level merit scholarships. For Ashoka/KREA/Shiv Nadar, SAT 1400+ unlocks significant scholarships."
        : "Check Inlaks, JN Tata, DAAD (Germany), Lester B. Pearson (Canada). Most have Nov–Jan deadlines.",
      urgency: "urgent-blue",
      urgLabel: "Soon",
    });

    return actions.slice(0, 6); // cap at 6 for clean UI
  }

  // ── Grade 11 ──────────────────────────────────────────────────────────────
  if (grade === 11) {
    const actions: ActionItem[] = [
      {
        icon: "🎯",
        title: "Finalise your country & field shortlist",
        desc: `You've chosen ${field}. Research top programs in ${countries.join(", ")} and narrow to 10–15 specific universities.`,
        urgency: "urgent-yellow",
        urgLabel: "This Month",
      },
    ];

    if (f.includes("medicine") || f.includes("pre-med")) {
      if (hasIndia) {
        actions.push({
          icon: "🩺",
          title: "Start NEET-UG Intensive Preparation",
          desc: "NEET 2027 is ~12 months away. Join a coaching program. Focus on NCERT Biology line-by-line, Physics, Chemistry.",
          urgency: "urgent-yellow",
          urgLabel: "This Month",
        });
      }
      if (hasUK || countries.includes("Australia")) {
        actions.push({
          icon: "🩺",
          title: "Research UCAT Requirements for UK/Australia",
          desc: "UCAT prep takes 3–4 months. Start studying UCAT question types now. Register in May 2026 when portal opens.",
          urgency: "urgent-yellow",
          urgLabel: "Important",
        });
      }
    }

    if (f.includes("engineering") || f.includes("computer") || f.includes("ai")) {
      if (hasIndia) {
        actions.push({
          icon: "📊",
          title: "Begin JEE Preparation in Earnest",
          desc: "Grade 11 is the most critical year for JEE. Cover Class 11 syllabus thoroughly. Join a coaching program if not already.",
          urgency: "urgent-yellow",
          urgLabel: "This Month",
        });
      }
      if (hasUK) {
        actions.push({
          icon: "⚗️",
          title: "Research ESAT & TMUA Requirements",
          desc: "Cambridge Engineering requires ESAT. Start understanding A-level depth required — it's harder than CBSE 12th.",
          urgency: "urgent-blue",
          urgLabel: "Plan Now",
        });
      }
    }

    if (f.includes("design") || f.includes("architecture")) {
      actions.push({
        icon: "🎨",
        title: "Start Building Your Portfolio",
        desc: "Begin creating a design portfolio now. Include 15–20 diverse works. Join art classes. Practice drawing daily for NATA/UCEED.",
        urgency: "urgent-yellow",
        urgLabel: "This Month",
      });
    }

    if (hasUSA) {
      actions.push({
        icon: "📐",
        title: "Begin SAT Preparation",
        desc: `Enroll in SAT prep. Target ${f.includes("engineering") || f.includes("computer") ? "1480+" : "1400+"}. First attempt in Aug 2026.`,
        urgency: "urgent-yellow",
        urgLabel: "This Month",
      });
    }

    actions.push(
      {
        icon: "🏅",
        title: "Participate in Relevant Competitions",
        desc: f.includes("engineering") || f.includes("computer")
          ? "Enter coding competitions (ICPC, hackathons), science olympiads (IOQM, IPhO). These differentiate your application."
          : f.includes("business")
          ? "Join Model UN, business case competitions, entrepreneurship programs. Build a leadership narrative."
          : f.includes("medicine")
          ? "Volunteer in hospitals/clinics, shadow doctors, participate in science olympiads."
          : "Participate in subject-relevant competitions, conferences, or projects.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
      {
        icon: "💡",
        title: "Start a Side Project Related to Your Field",
        desc: f.includes("computer") || f.includes("engineering")
          ? "Build a coding project, app, or hardware prototype. GitHub projects are viewed positively by US/UK universities."
          : f.includes("business")
          ? "Start a small business, social enterprise, or blog on economics/finance."
          : f.includes("design")
          ? "Create a personal design project — app redesign, branding project, or architectural sketch series."
          : "Start a research project, blog, or community initiative in your field.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      }
    );
    return actions.slice(0, 6);
  }

  // ── Grade 10 ──────────────────────────────────────────────────────────────
  if (grade === 10) {
    return [
      {
        icon: "📚",
        title: `Choose 11th Stream for ${field}`,
        desc: f.includes("medicine") || f.includes("biotech")
          ? "PCB (Physics, Chemistry, Biology) is required for Medicine and Life Sciences."
          : f.includes("engineering") || f.includes("computer") || f.includes("ai")
          ? "PCM (Physics, Chemistry, Maths) is required for Engineering and CS programs worldwide."
          : f.includes("business") || f.includes("economics")
          ? "Commerce (with Maths) is ideal for Business/Economics. Science stream also accepted at top programs."
          : f.includes("law") || f.includes("humanities") || f.includes("media")
          ? "Humanities/Arts stream is well-aligned. Commerce is also accepted. Science background can help too."
          : f.includes("design") || f.includes("architecture")
          ? "Any stream is accepted for Design. Architecture requires Maths — Science PCM is ideal."
          : "Choose a stream that aligns with your field. Confirm with a career counselor.",
        urgency: "urgent-yellow",
        urgLabel: "Important",
      },
      {
        icon: "🌐",
        title: "Improve English Proficiency",
        desc: "Read English newspapers (The Hindu, Guardian), watch TED Talks, take online writing courses. IELTS/TOEFL requires 7.0+ in 2 years.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
      {
        icon: "🧪",
        title: "Join Relevant School Clubs & Activities",
        desc: f.includes("computer") || f.includes("engineering")
          ? "Join coding club, robotics team, science fair. Start learning programming (Python, Java)."
          : f.includes("business")
          ? "Join student council, business club, Model UN. Learn Excel and basic finance."
          : f.includes("design")
          ? "Join art club, take drawing/digital design classes. Build a digital portfolio platform."
          : "Join subject-relevant clubs and extracurriculars that build your profile.",
        urgency: "urgent-blue",
        urgLabel: "Ongoing",
      },
      {
        icon: "🗺️",
        title: `Research ${field} Programs in ${countries[0]}`,
        desc: `Browse specific programs for ${field} at your target universities. Watch virtual campus tours. Understand entry requirements now.`,
        urgency: "urgent-blue",
        urgLabel: "This Year",
      },
    ];
  }

  // ── Grade 8–9 ─────────────────────────────────────────────────────────────
  return [
    {
      icon: "📖",
      title: "Build Strong Academic Habits",
      desc: `Consistent 85%+ in core subjects now = stronger ${field} applications later. Focus especially on subjects relevant to your field.`,
      urgency: "urgent-blue",
      urgLabel: "Ongoing",
    },
    {
      icon: "🌟",
      title: `Explore ${field} Through Projects & Reading`,
      desc: f.includes("computer") || f.includes("engineering")
        ? "Try free coding courses (Scratch, Python). Build small projects. Watch engineering YouTube channels."
        : f.includes("medicine")
        ? "Read biology books, follow health science news. Volunteer at local clinics when possible."
        : f.includes("business")
        ? "Read business news (Economic Times). Learn Excel basics. Study entrepreneurship stories."
        : f.includes("design")
        ? "Practise drawing daily. Use Canva or Figma. Study design history and iconic products."
        : "Explore your field through books, documentaries, and online courses to confirm your passion.",
      urgency: "urgent-blue",
      urgLabel: "This Year",
    },
    {
      icon: "🗺️",
      title: "Browse Universities in Your Target Countries",
      desc: `Look up ${field} programs in ${countries.slice(0, 2).join(" and ")}. Watch virtual campus tours. It's never too early to dream big.`,
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
    { label: "Academics",  pct: academicReady, color: "#3b82f6" },
    { label: "App Ready",  pct: appReady,       color: "#f59e0b" },
    { label: "Time Left",  pct: timeLeft,       color: "#10b981" },
  ];

  const notes: Record<number, string> = {
    12: "Application season is active. Prioritise exams, essays, and meeting field-specific deadlines.",
    11: "One year to go. Build your activities record, begin entrance exam prep, and research programs deeply.",
    10: "Two years ahead. Confirm your stream, start English prep, and explore your field through projects.",
    9:  "Three years away — form strong study habits and explore your field interests actively.",
    8:  "Four years to shape your profile. Dream big, stay curious, and build a strong academic base.",
  };

  return (
    <div className="ep-section-card">
      <div className="ep-section-title">
        <span className="ep-dot ep-dot-purple" />
        Readiness Overview
      </div>
      <div className="ep-progress-wrap">
        {circles.map((c) => {
          const r    = 32;
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