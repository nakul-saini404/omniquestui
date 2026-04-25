'use client';
import Image from 'next/image';

const universities = [
  { name: 'Yale',                     logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Yale.webp' },
  { name: 'Stanford',                 logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Stanford.webp' },
  { name: 'MIT',                      logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/MIT.webp' },
  { name: 'Oxford',                   logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Oxford.webp' },
  { name: 'Cambridge',                logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Cambridge.webp' },
  { name: 'Columbia',                 logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Columbia.webp' },
  { name: 'Imperial',                 logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Imperial.webp' },
  { name: 'LSE',                      logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/LSE.webp' },
  { name: 'University of Pennsylvania', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Pennsylvania.webp' },
  { name: "King's College London",    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Kings.webp' },
  { name: 'Brown',                    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Brown.webp' },
  { name: 'University of Chicago',    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Chicago.webp' },
  { name: 'University of Toronto',    logo: 'https://join.eduquest.org.in/wp-content/uploads/2023/11/Toronto.jpg' },
  { name: 'NYU',                      logo: 'https://join.eduquest.org.in/wp-content/uploads/2023/11/NYU.jpg' },
  { name: 'University of Melbourne',  logo: 'https://join.eduquest.org.in/wp-content/uploads/2023/11/Melbourne.jpg' },
  { name: 'Warwick',                  logo: 'https://join.eduquest.org.in/wp-content/uploads/2023/11/Warwick.jpg' },
  { name: 'NTU Singapore',            logo: 'https://join.eduquest.org.in/wp-content/uploads/2023/11/Nanyang.jpg' },
  { name: 'University of Michigan',   logo: 'https://join.eduquest.org.in/wp-content/uploads/2023/11/Michigan.jpg' },
  { name: 'UCL',                      logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/London.webp' },
];

export default function Universities() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

            /* ── Section ── */
            .uni-section {
              background: #ffffff;
              padding: 88px 24px;
              font-family: 'DM Sans', system-ui, sans-serif;
              border-top: 1px solid #e2e8f0;
            }
            .uni-inner {
              max-width: 1140px;
              margin: 0 auto;
              padding: 0 24px;
            }

            /* ── Header ── */
            .uni-header {
              max-width: 680px;
              margin-bottom: 56px;
            }
            .uni-tag {
              display: inline-block;
              font-size: 12px;
              font-weight: 600;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: #c9a84c;
              margin-bottom: 16px;
            }
            .uni-title {
              font-family: 'Playfair Display', Georgia, serif;
              font-size: clamp(28px, 3.5vw, 44px);
              font-weight: 700;
              line-height: 1.15;
              color: #0a1628;
              margin-bottom: 0;
            }
            .uni-title em {
              font-style: normal;
              color: #c9a84c;
            }

            /* ── Marquee wrapper ── */
            .uni-marquee-wrap {
              position: relative;
              overflow: hidden;
              margin-bottom: 56px;
            }
            /* Gradient fades */
            .uni-marquee-wrap::before,
            .uni-marquee-wrap::after {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              width: 80px;
              z-index: 2;
              pointer-events: none;
            }
            .uni-marquee-wrap::before {
              left: 0;
              background: linear-gradient(to right, #ffffff, transparent);
            }
            .uni-marquee-wrap::after {
              right: 0;
              background: linear-gradient(to left, #ffffff, transparent);
            }

            /* Scrolling track */
            .uni-track {
              display: flex;
              gap: 12px;
              width: max-content;
              animation: uni-scroll 32s linear infinite;
            }
            .uni-marquee-wrap:hover .uni-track {
              animation-play-state: paused;
            }
            @keyframes uni-scroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }

            /* Logo card — matches HTML .country-card style adapted for white bg */
            .uni-logo-card {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 14px 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 130px;
              height: 64px;
              flex-shrink: 0;
              transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            }
            .uni-logo-card:hover {
              border-color: #c9a84c;
              transform: translateY(-2px);
              box-shadow: 0 4px 16px rgba(201, 168, 76, 0.15);
            }
            .uni-logo-card img {
              max-height: 36px;
              max-width: 100px;
              object-fit: contain;
              filter: grayscale(30%);
              transition: filter 0.2s ease;
            }
            .uni-logo-card:hover img {
              filter: grayscale(0%);
            }

            /* ── Stats row — mirrors HTML stats-row adapted for white bg ── */
            .uni-stats-row {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1px;
              background: #e2e8f0;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              overflow: hidden;
              margin-bottom: 56px;
            }
            .uni-stat-box {
              background: #f8fafc;
              padding: 28px 24px;
              text-align: center;
            }
            .uni-stat-num {
              font-family: 'Playfair Display', serif;
              font-size: 36px;
              font-weight: 700;
              color: #c9a84c;
              display: block;
            }
            .uni-stat-label {
              font-size: 13px;
              color: #64748b;
              margin-top: 4px;
            }

            /* ── CTA row ── */
            .uni-cta {
              text-align: left;
            }
            .btn-gold-uni {
              display: inline-block;
              background: #c9a84c;
              color: #0a1628;
              padding: 15px 32px;
              border-radius: 8px;
              font-weight: 700;
              font-size: 15px;
              text-decoration: none;
              transition: background 0.2s ease, transform 0.15s ease;
              font-family: 'DM Sans', sans-serif;
              cursor: pointer;
              border: none;
            }
            .btn-gold-uni:hover {
              background: #f0c96e;
              transform: translateY(-1px);
            }

            /* ── Responsive ── */
            @media (max-width: 768px) {
              .uni-section { padding: 56px 20px; }
              .uni-marquee-wrap::before,
              .uni-marquee-wrap::after { width: 40px; }
              .uni-stats-row { grid-template-columns: 1fr 1fr; }
            }
          `
        }}
      />

      <section className="uni-section" id="universities">
        <div className="uni-inner">

          {/* Header — matches HTML .section-head pattern */}
          <div className="uni-header">
            <span className="uni-tag">Student Admissions</span>
            <h2 className="uni-title">
              Our Students Are Accepted at <em>World&apos;s Best</em> Universities
            </h2>
          </div>

          {/* Stats row — matches HTML hero stats-row */}
          <div className="uni-stats-row">
            <div className="uni-stat-box">
              <span className="uni-stat-num">98%</span>
              <div className="uni-stat-label">Success Ratio</div>
            </div>
            <div className="uni-stat-box">
              <span className="uni-stat-num">10K+</span>
              <div className="uni-stat-label">Happy Students</div>
            </div>
            <div className="uni-stat-box">
              <span className="uni-stat-num">$8M+</span>
              <div className="uni-stat-label">Scholarships Awarded</div>
            </div>
            <div className="uni-stat-box">
              <span className="uni-stat-num">50+</span>
              <div className="uni-stat-label">Partner Universities</div>
            </div>
          </div>

          {/* Scrolling marquee */}
          <div className="uni-marquee-wrap">
            <div className="uni-track">
              {/* Duplicate for seamless loop */}
              {[...universities, ...universities].map((u, i) => (
                <div className="uni-logo-card" key={`${u.name}-${i}`}>
                  <Image
                    src={u.logo}
                    alt={u.name}
                    width={100}
                    height={36}
                    style={{ maxHeight: 36, maxWidth: 100, objectFit: 'contain' }}
                    onError={(e) => {
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `<span style="font-size:0.8rem;font-weight:700;color:#0a1628;text-align:center;line-height:1.2">${u.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="uni-cta">
            <a href="#enroll" className="btn-gold-uni">
              View All University Partnerships →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}