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
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Section ── */
        .uni-section {
          background: #ffffff;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .uni-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .uni-header { text-align: center; margin-bottom: 48px; }
        .uni-tag {
          display: inline-block;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c9a84c; padding: 4px 12px;
          background: rgba(201,168,76,0.1); border-radius: 4px;
          margin-bottom: 12px;
        }
        .uni-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800; line-height: 1.2;
          color: #0a1628; margin-bottom: 0;
          letter-spacing: -0.02em;
        }
        .uni-title em { font-style: normal; color: #c9a84c; }

        /* ── Marquee wrapper ── */
        .uni-marquee-wrap {
          position: relative;
          overflow: hidden;
          margin-bottom: 48px;
        }
        /* Gradient fades */
        .uni-marquee-wrap::before,
        .uni-marquee-wrap::after {
          content: '';
          position: absolute; top: 0; bottom: 0;
          width: 80px; z-index: 2; pointer-events: none;
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

        /* Logo card */
        .uni-logo-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          height: 60px;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .uni-logo-card:hover {
          border-color: #c9a84c;
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .uni-logo-card img {
          max-height: 36px;
          max-width: 100px;
          object-fit: contain;
          filter: grayscale(30%);
          transition: filter 0.3s;
        }
        .uni-logo-card:hover img { filter: grayscale(0%); }

        /* ── CTA row ── */
        .uni-cta { text-align: center; }
        .btn-gold-uni {
          display: inline-block;
          background: #c9a84c; color: #0a1628;
          padding: 14px 32px; border-radius: 8px;
          font-weight: 700; font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          font-family: 'DM Sans', sans-serif;
        }
        .btn-gold-uni:hover {
          background: #f0c96e;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.4);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .uni-section { padding: 56px 20px; }
          .uni-marquee-wrap::before,
          .uni-marquee-wrap::after { width: 40px; }
        }
          `
        }}
      />
      <section className="uni-section" id="universities">
        <div className="uni-inner">

          {/* Header */}
          <div className="uni-header">
            <div className="uni-tag">Student Admissions</div>
            <h2 className="uni-title">
              Our Students Are Accepted at <em>World&apos;s Best</em> Universities
            </h2>
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