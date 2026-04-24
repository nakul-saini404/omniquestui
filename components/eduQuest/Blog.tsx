'use client';
import Image from 'next/image';

const articles = [
  {
    title: 'How Indian Students Can Smartly Get Into Top US Universities After 12th — 2027 Ultimate Guide',
    desc: 'A comprehensive strategy guide for Indian students targeting top US universities — covering profile building, SAT, essays and more.',
    date: 'April 23, 2026',
    href: 'https://eduquest.org.in/how-indian-students-can-smartly-get-into-top-us-universities-after-12th-2027-ultimate-guide/',
    img: 'https://eduquest.org.in/wp-content/uploads/2026/04/How-Indian-Students-Can-Get-Into-Top-US-Universities-After-12th.png',
  },
  {
    title: 'LSAT Exam 2026: Complete Preparation Guide for Beginners',
    desc: 'A complete LSAT 2026 preparation guide for beginners with syllabus, exam pattern and tips to score 170+.',
    date: 'April 19, 2026',
    href: 'https://eduquest.org.in/lsat-2026-preparation-guide-for-beginners/',
    img: 'https://eduquest.org.in/wp-content/uploads/2026/04/Untitled-design-logo-2.png',
  },
  {
    title: 'LSAT 2026 Preparation Guide for Indian Students: Dates, Syllabus & Strategy',
    desc: 'Dates, Syllabus Strategy & Score Goals — comprehensive LSAT exam 2026 preparation guide for Indian students.',
    date: 'April 18, 2026',
    href: 'https://eduquest.org.in/lsat-2026-preparation-guide-for-indian-students-dates-syllabus-strategy-score-goals-lsat-exam-2026/',
    img: 'https://eduquest.org.in/wp-content/uploads/2026/04/eduquest-logo-pic.png',
  },
];

export default function Blog() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
             @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Section ── */
        .blog-section {
          background: #f8f4ed;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .blog-inner { max-width: 1320px; margin: 0 auto; }

        /* ── Header row ── */
        .blog-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .blog-tag {
          display: inline-block;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c9a84c; padding: 4px 12px;
          background: rgba(201,168,76,0.1); border-radius: 4px;
          margin-bottom: 12px;
        }
        .blog-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800; line-height: 1.2;
          color: #0a1628; margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .blog-title em { font-style: normal; color: #c9a84c; }
        .blog-desc { font-size: 1.05rem; color: #6b7280; line-height: 1.7; margin: 0; }
        .blog-view-all {
          font-size: 0.85rem; font-weight: 600; color: #0a1628;
          text-decoration: none; white-space: nowrap;
          display: inline-flex; align-items: center; gap: 6px;
          transition: color 0.25s;
          font-family: 'DM Sans', sans-serif;
        }
        .blog-view-all:hover { color: #c9a84c; }
        .blog-view-all::after { content: '→'; transition: margin-left 0.25s; }
        .blog-view-all:hover::after { margin-left: 4px; }

        /* ── Cards grid ── */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ── Card ── */
        .blog-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          display: block;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .blog-card:hover {
          border-color: #c9a84c;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }

        /* Image wrapper */
        .blog-img-wrap {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .blog-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .blog-card:hover .blog-img-wrap img { transform: scale(1.04); }

        /* Body */
        .blog-body { padding: 20px; }
        .blog-date {
          font-size: 0.72rem; color: #6b7280; margin-bottom: 8px;
          display: flex; align-items: center; gap: 5px;
        }
        .blog-date::before { content: '📅'; font-size: 0.7rem; }
        .blog-card-title {
          font-size: 0.95rem; font-weight: 700;
          color: #0a1628; line-height: 1.4;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.25s;
        }
        .blog-card:hover .blog-card-title { color: #c9a84c; }
        .blog-card-desc {
          font-size: 0.82rem; color: #6b7280;
          line-height: 1.6; margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-read-more {
          font-size: 0.8rem; color: #1d4ed8;
          font-weight: 600; display: inline-flex;
          align-items: center; gap: 4px;
          transition: all 0.25s;
        }
        .blog-card:hover .blog-read-more { color: #c9a84c; gap: 8px; }
        .blog-read-more::after { content: '→'; }

        /* ── CTA row ── */
        .blog-cta { text-align: center; margin-top: 32px; }
        .btn-gold-blog {
          display: inline-block;
          background: #c9a84c; color: #0a1628;
          padding: 14px 32px; border-radius: 8px;
          font-weight: 700; font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          font-family: 'DM Sans', sans-serif;
        }
        .btn-gold-blog:hover {
          background: #f0c96e;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.4);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .blog-section { padding: 56px 20px; }
          .blog-grid { grid-template-columns: 1fr; }
          .blog-header { align-items: flex-start; }
        }
          `
        }}
      />
    

      <section className="blog-section" id="blog">
        <div className="blog-inner">

          {/* Header */}
          <div className="blog-header">
            <div>
              <div className="blog-tag">Useful Articles</div>
              <h2 className="blog-title">
                Expert Insights on <em>SAT, AP &amp; Study Abroad</em>
              </h2>
              <p className="blog-desc">
                Want to know more about AP &amp; digital SAT preparation? Check out our blog.
              </p>
            </div>
            <a
              href="https://eduquest.org.in/blog"
              target="_blank"
              rel="noreferrer"
              className="blog-view-all"
            >
              View All Articles
            </a>
          </div>

          {/* Cards */}
          <div className="blog-grid">
            {articles.map((a) => (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="blog-card"
              >
                <div className="blog-img-wrap">
                  <Image
                    src={a.img}
                    alt={a.title}
                    width={400}
                    height={180}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/400x180/0a1628/c9a84c?text=EduQuest+Blog';
                    }}
                  />
                </div>
                <div className="blog-body">
                  <div className="blog-date">{a.date}</div>
                  <div className="blog-card-title">{a.title}</div>
                  <p className="blog-card-desc">{a.desc}</p>
                  <span className="blog-read-more">Read More</span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="blog-cta">
            <a
              href="https://eduquest.org.in/blog"
              target="_blank"
              rel="noreferrer"
              className="btn-gold-blog"
            >
              View All Articles →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}