'use client';

import styles from './WhatIsOlympiad.module.css';

const pillars = [
    {
        icon: '🧠',
        title: 'Conceptual Depth',
        desc: 'Tests understanding beyond rote learning',
    },
    {
        icon: '🌐',
        title: 'Global Benchmark',
        desc: 'Compare skills at national/international level',
    },
    {
        icon: '🎓',
        title: 'Profile Building',
        desc: 'Medals strengthen university applications',
    },
    {
        icon: '📈',
        title: 'Academic Growth',
        desc: 'Prepares students for JEE, NEET, SAT & beyond',
    },
];

const benefits = [
    "Develop higher-order thinking skills that school exams don't test",
    'National & international recognition — gold, silver, bronze medals and certificates',
    'Scholarship opportunities worth lakhs of rupees for top performers',
    'Builds a strong academic profile for admissions to top Indian and global universities',
    'Exposes students to competitive exam pressure early — reducing future exam anxiety',
    'Strengthens subjects tested in board exams, JEE, NEET, and SAT',
    'Medals and ranks valued by leading schools for Class 11 admission',
    'Instils discipline, study habits, and a growth mindset from an early age',
];

export default function WhatIsOlympiad() {
    return (
        <section className={styles.section} id="what-is-olympiad">
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* ── Left: Text Column ── */}
                    <div className={styles.textCol}>
                        <span className={styles.eyebrow}>What Is an Olympiad?</span>

                        <h3 className={styles.heading}>
                            Beyond Textbooks —<br />
                            <em>Competitive Brilliance</em>
                        </h3>

                        <p>
                            An Olympiad is a national or international competitive exam that
                            goes beyond the regular school syllabus to test a student's depth
                            of understanding, analytical thinking, and problem-solving ability
                            in a specific subject.
                        </p>
                        <p>
                            Unlike school exams that test memory, Olympiads reward{' '}
                            <strong>
                                conceptual clarity, reasoning, and the ability to apply
                                knowledge
                            </strong>{' '}
                            in unfamiliar situations — skills that matter in the real world
                            and in higher education.
                        </p>
                        <p>
                            Students from Class 1 to Class 12 can participate, making it the
                            perfect platform to begin building a competitive edge early.
                        </p>

                        {/* Pillar chips */}
                        <div className={styles.pillars}>
                            {pillars.map((p) => (
                                <div key={p.title} className={styles.pillarChip}>
                                    <span className={styles.pillarIcon}>{p.icon}</span>
                                    <div className={styles.pillarBody}>
                                        <h5>{p.title}</h5>
                                        <p>{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Visual Card ── */}
                    <div className={styles.visual}>
                        <h4 className={styles.visualHeading}>Why Olympiads Matter</h4>
                        <ul className={styles.benefitList}>
                            {benefits.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}