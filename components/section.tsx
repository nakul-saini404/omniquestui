'use client';
import { useEffect, useRef } from 'react';
import { WHY_CARDS, BLOG_POSTS, METRICS, UNIVERSITIES } from '@/lib/data';
import Link from "next/link";
import { useRouter } from 'next/navigation';

// ─────────────────────────────────────────────────────────────
// BRAND STRIP  — no navigation needed, unchanged
// ─────────────────────────────────────────────────────────────
export function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Brand heritage">
      <div className="container">
        <div className="brand-strip-inner">
          <div className="brand-logos">
            <div className="brand-logo-item">
              <div className="brand-logo-badge blb-eq">EQ</div>
              <div className="brand-logo-name">EduQuest</div>
            </div>
            <span className="brand-arrow">+</span>
            <div className="brand-logo-item">
              <div className="brand-logo-badge blb-mba">MW</div>
              <div className="brand-logo-name">MbaWizards</div>
            </div>
            <span className="brand-arrow">+</span>
            <div className="brand-logo-item">
              <div className="brand-logo-badge blb-apt">AP</div>
              <div className="brand-logo-name">Aptech</div>
            </div>
          </div>
          <span className="brand-arrow" style={{ fontSize: '1.4rem', color: '#cbd5e1' }}>→</span>
          <div className="unified-tag"><span className="sparkle">✦</span> Now unified as OmniQuest</div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PATHWAYS — FIX: removed nested <Link> wrapping <article>.
// Each card is now a plain <article> with an onClick handler.
// The "Explore X →" button inside navigates to the real URL.
// This eliminates the nested interactive element + stopPropagation bug.
// ─────────────────────────────────────────────────────────────
const PATHWAY_CARDS = [
  {
    href: 'https://eduquest.org.in/',
    className: 'pc1',
    icon: '🎓',
    brand: 'EduQuest · Study Abroad',
    title: 'Undergraduate & Study Abroad',
    desc: "Expert SAT/ACT coaching and holistic profile building to get you into your dream university — from Ivy League to top global campuses.",
    features: ['SAT / ACT / AP Coaching', 'UG Admissions Consulting', 'Profile & Essay Building', 'Scholarship Guidance'],
    cta: 'Explore EduQuest →',
  },
  {
    href: 'https://eduquest.org.in/',
    className: 'pc2',
    icon: '💼',
    brand: 'MbaWizards · MBA Admissions',
    title: 'MBA & Postgraduate Admissions',
    desc: 'From a 700+ GMAT to a compelling application — our MBA specialists have placed candidates at Wharton, ISB, INSEAD, and beyond.',
    features: ['GMAT / GRE Prep', 'Application Strategy', 'Essay & Interview Coaching', 'School Selection'],
    cta: 'Explore MbaWizards →',
  },
  {
    href: 'https://eduquest.org.in/eduquest-aptech/',
    className: 'pc3',
    icon: '💻',
    brand: 'Aptech · Skills & Careers',
    title: 'Skill Programs & Career Launch',
    desc: 'Industry-aligned programs in AI, Data Science, and Coding — designed to make you job-ready in 3–6 months with real projects and placements.',
    features: ['AI & Data Science', 'Coding & Web Dev', 'Finance & Business', 'Career Placement Support'],
    cta: 'Explore Aptech Programs →',
  },
];

export function Pathways({ onOpenChat }: { onOpenChat?: (msg: string) => void }) {
  return (
    <section className="pathways" id="pathways">
      <div className="container">
        <div className="pathways-header reveal">
          <div className="section-label">Choose Your Path</div>
          <h2 className="section-title">Three Pathways.<br />One Destination: Your Best Life.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Whether you&apos;re aiming for a top global university, a prestigious MBA, or a career in tech — we have a dedicated programme for you.
          </p>
        </div>
        <div className="pathways-grid">
          {PATHWAY_CARDS.map((card, i) => (
            // FIX: article is the clickable card — clicking anywhere opens the link
            <article
              key={i}
              className={`pathway-card ${card.className} reveal`}
              style={{ transitionDelay: `${i * 0.1}s`, cursor: 'pointer' }}
              onClick={() => window.open(card.href, '_blank', 'noopener,noreferrer')}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(card.href, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="card-accent" />
              <div className="p-icon">{card.icon}</div>
              <div className="p-brand">{card.brand}</div>
              <h3 className="p-title">{card.title}</h3>
              <p className="p-desc">{card.desc}</p>
              <ul className="p-features">
                {card.features.map((f) => (
                  <li key={f} className="p-feature">
                    <span className="feat-dot" />{f}
                  </li>
                ))}
              </ul>
              {/* FIX: button is a real anchor so it works independently too */}
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-cta"
                // Stop bubbling so the card onClick doesn't fire a second time
                onClick={(e) => e.stopPropagation()}
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// WHY US — no navigation, unchanged
// ─────────────────────────────────────────────────────────────
export function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us-header reveal">
          <div className="section-label">Why OmniQuest</div>
          <h2 className="section-title">Built Different.<br />Results-First. Always.</h2>
          <p className="section-sub">We don&apos;t just prep you — we transform how you think, apply, and succeed in a global world.</p>
        </div>
        <div className="why-grid">
          {WHY_CARDS.map((c, i) => (
            <div key={i} className="why-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="why-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// RESULTS — no navigation, unchanged
// ─────────────────────────────────────────────────────────────
export function Results() {
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const animate = (el: HTMLSpanElement, target: number) => {
      let start: number;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1800, 1);
        const val = Math.round((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = val >= 1000 ? val.toLocaleString() + '+' : val + '+';
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target as HTMLSpanElement;
            const target = parseInt(el.dataset.target || '0', 10);
            animate(el, target);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    numRefs.current.forEach(el => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="results" id="results">
      <div className="container results-inner">
        <div className="results-header reveal">
          <div className="section-label">Our Track Record</div>
          <h2 className="section-title">Numbers That<br />Speak for Themselves</h2>
          <p className="section-sub">A decade of dedication, data, and delivery — across every programme we run.</p>
        </div>
        <div className="metrics-grid reveal">
          {METRICS.map((m, i) => (
            <div key={i} className="metric-card">
              <span className="metric-badge">{m.badge}</span>
              <span
                className="metric-num"
                data-target={m.target}
                ref={el => { numRefs.current[i] = el; }}
              >
                0
              </span>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="uni-section reveal">
          <p className="uni-title">Students admitted to leading global institutions</p>
          <div className="uni-logos">
            {UNIVERSITIES.map(u => <div key={u} className="uni-logo">{u}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// GLOBAL MAP — no navigation, unchanged
// ─────────────────────────────────────────────────────────────
export function GlobalMap() {
  return (
    <section className="global-map" id="global-map">
      <div className="container">
        <div className="map-header reveal">
          <div className="section-label">Our Reach</div>
          <h2 className="section-title">From India to<br />Every Corner of the World</h2>
          <p className="section-sub">We connect ambitious students across India to top universities and career opportunities in the USA, UK, Canada, Europe, and beyond.</p>
        </div>
        <div className="map-visual reveal">
          <div className="map-bg">
            <div className="map-dots" />
            <div className="map-label ml-usa"><span className="map-ping" />United States</div>
            <div className="map-label ml-uk"><span className="map-ping" />United Kingdom</div>
            <div className="map-label ml-canada"><span className="map-ping" />Canada</div>
            <div className="map-label ml-europe"><span className="map-ping" />Europe</div>
            <div className="map-label ml-india"><span className="map-ping" />India 🇮🇳</div>
            <div className="map-label ml-aus"><span className="map-ping" />Australia</div>
            <div className="map-center">
              <h3>40+ Destination Countries</h3>
              <p>Placed students in 200+ institutions worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// LEGACY — FIX: same pattern as Pathways — removed nested Link.
// Each card is the clickable element via onClick + a real <a> tag
// for keyboard and right-click support.
// ─────────────────────────────────────────────────────────────
const LEGACY_CARDS = [
  {
    href: 'https://eduquest.org.in/',
    year: '15+',
    badgeClass: 'lb-blue',
    badgeLabel: '🎓 EduQuest',
    title: 'Study Abroad Excellence',
    desc: "For over 15 years, EduQuest has been India's most trusted study abroad consultant, helping thousands of students crack the SAT, build standout profiles, and earn admits to top universities across the USA, UK, and Canada. Our holistic approach — from test prep to visa — makes the entire journey seamless.",
    stats: [{ num: '8,000+', label: 'UG Admits' }, { num: '92%', label: 'First-Choice Rate' }],
  },
  {
    href: 'https://eduquest.org.in/',
    year: '10+',
    badgeClass: 'lb-purple',
    badgeLabel: '💼 MbaWizards',
    title: 'MBA Admissions Mastery',
    desc: "MbaWizards specialises in cracking the most competitive MBA programmes in the world. With former admissions officers on our team and a 720+ average GMAT score, we offer an unmatched edge in essay crafting, interview preparation, and school selection for M7, ISB, and European top schools.",
    stats: [{ num: '2,000+', label: 'MBA Admits' }, { num: '720+', label: 'Avg GMAT' }],
  },
  {
    href: 'https://eduquest.org.in/eduquest-aptech/',
    year: '20+',
    badgeClass: 'lb-green',
    badgeLabel: '💻 Aptech',
    title: 'Skills & Career Legacy',
    desc: "Aptech's 20+ year legacy in skill development now powers OmniQuest's career programmes. Our AI, Data Science, and Coding bootcamps are industry-designed, placement-backed, and built for the jobs of tomorrow. Thousands of professionals have switched careers or levelled up through our practical, mentor-led programmes.",
    stats: [{ num: '50K+', label: 'Alumni' }, { num: '85%', label: 'Placement Rate' }],
  },
];

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <div className="container">
        <div className="legacy-header reveal">
          <div className="section-label">Our Legacy</div>
          <h2 className="section-title">Three Trusted Names.<br />One Unified Vision.</h2>
          <p className="section-sub">Decades of combined expertise converging into OmniQuest — your most powerful educational partner.</p>
        </div>
        <div className="legacy-grid">
          {LEGACY_CARDS.map((card, i) => (
            <div
              key={i}
              className="legacy-card reveal"
              style={{ transitionDelay: `${i * 0.1}s`, cursor: 'pointer' }}
              onClick={() => window.open(card.href, '_blank', 'noopener,noreferrer')}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(card.href, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="legacy-year">{card.year}</div>
              <div className={`legacy-badge ${card.badgeClass}`}>{card.badgeLabel}</div>
              <h3 className="legacy-title">{card.title}</h3>
              <p className="legacy-desc">{card.desc}</p>
              <div className="legacy-stats">
                {card.stats.map(s => (
                  <div key={s.num}>
                    <div className="ls-num">{s.num}</div>
                    <div className="ls-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// BLOG — no navigation changes needed
// ─────────────────────────────────────────────────────────────
export function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog-header reveal">
          <div>
            <div className="section-label">Knowledge Hub</div>
            <h2 className="section-title">Insights to Power Your Journey</h2>
          </div>
          <a
            href="https://eduquest.org.in/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy"
            style={{ flexShrink: 0 }}
          >
            View All Articles →
          </a>
        </div>
        <div className="blog-grid reveal">
          {BLOG_POSTS.map((p, i) => (
            <article key={i} className="blog-card">
              <div className={`blog-thumb ${p.thumbClass}`}>{p.thumb}</div>
              <div className="blog-body">
                <div className="blog-tag">{p.tag}</div>
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-meta">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FINAL CTA — FIX: "Take Personality Test" button was pointing
// to #personality (doesn't exist). Now uses Link to /personality-test.
// "Book Free Counselling" now points to a real phone/contact link.
// ─────────────────────────────────────────────────────────────
export function FinalCta() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="cta-orb-a" /><div className="cta-orb-b" />
      <div className="container final-cta-inner">
        <div className="urgency-badge reveal">⚡ Limited Slots Available · Fall 2026 Intake</div>
        <h2 className="reveal">Start Your <em>Global Journey</em><br />Today.</h2>
        <p className="reveal">Join 10,000+ students who chose OmniQuest and never looked back.</p>
        <div className="final-cta-btns reveal">
          {/* FIX: real contact href */}
          <a
            href="https://eduquest.org.in/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            📅 Book Free Counseling
          </a>
          {/* FIX: was href="#personality" — now correct Next.js Link */}
          <Link href="/personality-test" className="btn btn-outline">
            🧠 Take Personality Test
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FOOTER — FIX: real hrefs on all links
// ─────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Omni<span>Quest</span></div>
              <p className="footer-tagline">India&apos;s premier global education platform — unifying EduQuest, MbaWizards, and Aptech under one powerful umbrella for students who dream big.</p>
              <div className="footer-sub-brands">
                <span className="fsb">by EduQuest</span>
                <span className="fsb">MbaWizards</span>
                <span className="fsb">Aptech</span>
              </div>
            </div>

            {/* Programs column */}
            <div>
              <div className="footer-col-title">Programs</div>
              <ul className="footer-links">
                <li><a href="https://eduquest.org.in/" target="_blank" rel="noopener noreferrer">Study Abroad (EduQuest)</a></li>
                <li><a href="https://eduquest.org.in/sat/" target="_blank" rel="noopener noreferrer">SAT / ACT Coaching</a></li>
                <li><a href="https://eduquest.org.in/" target="_blank" rel="noopener noreferrer">MBA Admissions (MbaWizards)</a></li>
                <li><a href="https://eduquest.org.in/" target="_blank" rel="noopener noreferrer">GMAT Prep</a></li>
                <li><a href="https://eduquest.org.in/eduquest-aptech/" target="_blank" rel="noopener noreferrer">Skill Programs (Aptech)</a></li>
                <li><a href="https://eduquest.org.in/eduquest-aptech/" target="_blank" rel="noopener noreferrer">AI &amp; Data Science</a></li>
              </ul>
            </div>

            {/* Locations column */}
            <div>
              <div className="footer-col-title">Locations</div>
              <ul className="footer-links">
                <li><a href="https://eduquest.org.in/contact-us/" target="_blank" rel="noopener noreferrer">Delhi / NCR</a></li>
                <li><a href="https://eduquest.org.in/contact-us/" target="_blank" rel="noopener noreferrer">Bangalore</a></li>
                <li><a href="https://eduquest.org.in/contact-us/" target="_blank" rel="noopener noreferrer">Mumbai</a></li>
                <li><a href="https://eduquest.org.in/contact-us/" target="_blank" rel="noopener noreferrer">Hyderabad</a></li>
                <li><a href="https://eduquest.org.in/contact-us/" target="_blank" rel="noopener noreferrer">Online (Pan-India)</a></li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="https://eduquest.org.in/about-us/" target="_blank" rel="noopener noreferrer">About OmniQuest</a></li>
                <li><a href="https://eduquest.org.in/our-achievements/" target="_blank" rel="noopener noreferrer">Results &amp; Stories</a></li>
                <li><a href="https://eduquest.org.in/blog" target="_blank" rel="noopener noreferrer">Blog / Resources</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="https://eduquest.org.in/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                <li><a href="https://eduquest.org.in/franchise/" target="_blank" rel="noopener noreferrer">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 OmniQuest (by EduQuest | MbaWizards | Aptech). All rights reserved.</p>
          <div className="footer-legal">
            <a href="https://eduquest.org.in/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://eduquest.org.in/terms-of-use/" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}