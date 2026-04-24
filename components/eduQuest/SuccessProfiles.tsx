'use client';
import Image from 'next/image';

const profiles = [
  {
    name: 'Rohit',
    bg: 'CSE/ISC — New Delhi',
    admit: 'Mech. Engineering, University of Toronto',
    story:
      'Joined with many interests but no direction. Through personalized mentorship, we developed Rohit\'s profile in material engineering, leading to a hyper-specialisation in foldable structures.',
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Torronto.jpg',
    logoAlt: 'University of Toronto',
  },
  {
    name: 'Kavya',
    bg: 'IB — Mumbai',
    admit: 'Environmental Engineering, NUS',
    story:
      'A budding environmental scientist with interests in art and culture. We connected her passions through a project on revamping a local wasteland to a cultural ecological center.',
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/NUS.png',
    logoAlt: 'NUS',
  },
  {
    name: 'Shalini',
    bg: 'ICSE/IB — Mumbai',
    admit: 'Mixed Streams, Brown University',
    story:
      'A runner and theater artist with no national awards and no SAT score. We wove a compelling personal narrative showcasing academic focus and extracurricular resilience — Brown accepted.',
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/1024px-Cornell_University_seal_svg.webp',
    logoAlt: 'Brown University',
  },
  {
    name: 'Ayush',
    bg: 'CBSE/ISC — Kolkata',
    admit: 'Business, UBC Sauder School',
    story:
      "Joined with sub-40% in Grade 11 Maths. We built a business profile around his work with a beverage distributor, linked to environmental research — accepted to Canada's best business school.",
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/UBC.webp',
    logoAlt: 'UBC',
  },
];

export default function SuccessProfiles() {
  return (
    <>
    
       <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Section ── */
        .sp-section {
          background: #f8f4ed;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .sp-inner { max-width: 1320px; margin: 0 auto; }

        /* ── Header ── */
        .sp-header { text-align: center; margin-bottom: 48px; }
        .sp-tag {
          display: inline-block;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c9a84c; padding: 4px 12px;
          background: rgba(201,168,76,0.1); border-radius: 4px;
          margin-bottom: 12px;
        }
        .sp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800; line-height: 1.2;
          color: #0a1628; margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .sp-title em { font-style: normal; color: #c9a84c; }
        .sp-desc {
          font-size: 1.05rem; color: #6b7280;
          max-width: 600px; margin: 0 auto; line-height: 1.7;
        }

        /* ── Grid ── */
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        /* ── Card ── */
        .sp-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 28px;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 20px;
          align-items: start;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .sp-card:hover {
          border-color: #c9a84c;
          box-shadow: 0 8px 30px rgba(201,168,76,0.1);
          transform: translateY(-2px);
        }

        /* Logo column */
        .sp-logo-wrap {
          width: 70px; height: 70px;
          border-radius: 10px; overflow: hidden;
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          background: #ffffff; flex-shrink: 0;
        }
        .sp-logo-wrap img {
          max-width: 60px; max-height: 60px;
          object-fit: contain;
        }

        /* Text column */
        .sp-name {
          font-weight: 700; color: #0a1628;
          font-size: 1.05rem; margin-bottom: 2px;
        }
        .sp-bg {
          font-size: 0.78rem; color: #6b7280; margin-bottom: 8px;
        }
        .sp-admit-badge {
          display: inline-block;
          font-size: 0.82rem; font-weight: 600;
          color: #1d4ed8; margin-bottom: 12px;
        }
        .sp-story {
          font-size: 0.82rem; color: #6b7280;
          line-height: 1.6; margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .sp-section { padding: 56px 20px; }
          .sp-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .sp-card {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
          `
        }}
      />

      <section className="sp-section" id="profiles">
        <div className="sp-inner">

          {/* Header */}
          <div className="sp-header">
            <div className="sp-tag">Student Success Stories</div>
            <h2 className="sp-title">
              Real Profiles. <em>Real Admits.</em>
            </h2>
            <p className="sp-desc">
              A few profiles from students who went through the EduQuest admissions program.
            </p>
          </div>

          {/* Cards */}
          <div className="sp-grid">
            {profiles.map((p) => (
              <div className="sp-card" key={p.name}>

                {/* Logo */}
                <div className="sp-logo-wrap">
                  <Image
                    src={p.logo}
                    alt={p.logoAlt}
                    width={60}
                    height={60}
                    style={{ maxWidth: 60, maxHeight: 60, objectFit: 'contain' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '🎓';
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="sp-name">{p.name}</div>
                  <div className="sp-bg">{p.bg}</div>
                  <div className="sp-admit-badge">🎓 {p.admit}</div>
                  <p className="sp-story">{p.story}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}