'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyUs.module.css';

const features = [
  {
    icon: '🎯',
    title: '1-on-1 Personalized Mentoring',
    desc: 'Dedicated faculty who adapt to your learning pace, identify weak areas, and build a customized preparation roadmap unique to each student.',
  },
  {
    icon: '⏱️',
    title: 'Timed Practice Sessions',
    desc: 'Simulated TMUA conditions with strict time limits that build the speed and mental endurance required for a 75-minute no-calculator paper.',
  },
  {
    icon: '📚',
    title: 'Previous Year Paper Analysis',
    desc: 'Thorough review of all available Cambridge TMUA past papers, specimen papers, and unofficial practice sets with detailed worked solutions.',
  },
  {
    icon: '📈',
    title: 'Personalized Progress Tracking',
    desc: 'Weekly performance reports with topic-level breakdowns so you always know exactly where to focus your next study session.',
  },
  {
    icon: '🏅',
    title: 'Olympiad-Level Reasoning Practice',
    desc: 'Exposure to Math Olympiad and competition-style problems that sharpen the deep mathematical reasoning TMUA rewards most.',
  },
  {
    icon: '🌐',
    title: 'End-to-End University Support',
    desc: 'Profile building, personal statement review, university shortlisting, and interview preparation — all under one roof alongside TMUA coaching.',
  },
];

const stats = [
  { num: '10K+', label: 'Students Mentored' },
  { num: '95%',  label: 'Success Rate' },
  { num: '15+',  label: 'Years Experience' },
  { num: '$5M+', label: 'Scholarships Won' },
];

export default function WhyUs() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = featuresRef.current?.querySelectorAll<HTMLDivElement>(
      `.${styles.eqFeature}`
    );
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="eduquest" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Why Us</span>
        <h2 className={styles.sectionTitle}>Why Choose EduQuest?</h2>
        <p className={styles.sectionSub}>
          EduQuest offers a comprehensive TMUA Preparation Program with everything
          you need — from concept foundation to university application support.
        </p>

        <div className={styles.eqGrid}>
          {/* Features List */}
          <div className={styles.eqFeatures} ref={featuresRef}>
            {features.map((feature, i) => (
              <div key={i} className={styles.eqFeature}>
                <div className={styles.eqFeatureIcon}>{feature.icon}</div>
                <div>
                  <h4 className={styles.eqFeatureTitle}>{feature.title}</h4>
                  <p className={styles.eqFeatureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Panel */}
          <div className={styles.eqRight}>
            <div className={styles.eqRightTitle}>EduQuest by the Numbers</div>
            <div className={styles.eqRightSub}>
              Trusted by thousands of students across India and abroad for 15+ years
            </div>
            <div className={styles.eqStats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.eqStat}>
                  <div className={styles.eqStatNum}>{stat.num}</div>
                  <div className={styles.eqStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.eqRightFooter}>
              <p className={styles.eqRightNote}>
                Flexible Schedules | Weekend &amp; Holiday Batches | Online &amp; Offline
              </p>
              <a
                href="https://eduquest.org.in/tmua/"
                className={styles.btnPrimary}
              >
                Book Your Free Session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}