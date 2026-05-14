'use client';

import styles from './ExpertFaculty.module.css';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Mentor {
    avatar: string;
    name: string;
    role: string;
    subjects: string[];
    exp: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const MENTORS: Mentor[] = [
    {
        avatar: '⚗️',
        name: 'Dr. Priya Sharma',
        role: 'IGCSE Biology Specialist',
        subjects: ['IGCSE Biology', 'IB Biology'],
        exp: '12+ years · 500+ students · Cambridge trained',
    },
    {
        avatar: '⚗️',
        name: 'Mr. Rahul Anand',
        role: 'IGCSE & GCSE Chemistry',
        subjects: ['IGCSE Chemistry', 'GCSE Chemistry'],
        exp: '10+ years · 400+ students · IIT background',
    },
    {
        avatar: '⚡',
        name: 'Ms. Anjali Mehta',
        role: 'Physics & Mathematics',
        subjects: ['IGCSE Physics', 'GCSE Physics'],
        exp: '8+ years · 300+ students · MSc Physics',
    },
    {
        avatar: '📖',
        name: 'Ms. Sophia James',
        role: 'English Language & Lit',
        subjects: ['IGCSE English', 'GCSE English'],
        exp: '9+ years · Oxford English graduate',
    },
    {
        avatar: '📐',
        name: 'Mr. Vikram Nair',
        role: 'Mathematics Specialist',
        subjects: ['IGCSE Maths', 'GCSE Maths'],
        exp: '11+ years · IIM & IIT alumni · 95% A* rate',
    },
    {
        avatar: '🔬',
        name: 'Dr. Aditya Bose',
        role: 'Sciences & STEM Mentor',
        subjects: ['All Sciences', 'STEM'],
        exp: '15+ years · PhD Chemistry · Cambridge alumni',
    },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ExpertFaculty() {
    return (
        <section className={styles.section} id="mentors">
            <div className={styles.container}>

                {/* ── Section Header ── */}
                <div className={styles.sectionHead}>
                    <div className={styles.sectionLabel}>Expert Faculty</div>
                    <h2 className={styles.sectionTitle}>
                        Hire Our Experienced Mentors!
                        <br />
                        <em>Make IGCSE Easier.</em>
                    </h2>
                    <p className={styles.sectionSub}>
                        Our experienced team of mentors and counsellors guide students with structured lesson
                        plans, regular assessments, and personalized attention — making every subject
                        approachable.
                    </p>
                </div>



                {/* ── CTA Banner ── */}
                <div className={styles.mentorCta}>
                    <h3>Ready to Ace Your IGCSE / GCSE?</h3>
                    <p>
                        Book a free 30-minute demo session with one of our subject experts and experience the
                        EduQuest difference firsthand.
                    </p>
                    <div className={styles.ctaBtns}>
                        <a href="/contact-us" className={styles.btnPrimary}>
                            📞 Book Free Demo Session
                        </a>
                        <a href="tel:+919958041888" className={styles.btnOutline}>
                            Call Us: +91-9958041888
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}