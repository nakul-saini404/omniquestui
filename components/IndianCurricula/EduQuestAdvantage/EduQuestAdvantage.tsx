'use client';

import { useState } from 'react';
import styles from './EduQuestAdvantage.module.css';

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
    { num: '30+', lbl: 'Years of Excellence' },
    { num: '10,000+', lbl: 'Students Guided' },
    { num: '95%+', lbl: 'Score Improvement' },
    { num: '2', lbl: 'Boards Covered' },
    { num: '20+', lbl: 'Subject Experts' },
];

const ADVANTAGE_LIST = [
    {
        icon: '📝',
        title: 'Regular Tests & Assignments',
        desc: 'Weekly topic tests and assignments ensure concepts are reinforced and gaps are caught early — not during exams.',
    },
    {
        icon: '👨‍🏫',
        title: 'Highly Experienced Faculty',
        desc: 'Every tutor is a subject specialist with a minimum of 10 years in CBSE / ICSE preparation — not a generalist or fresh graduate.',
    },
    {
        icon: '⚙️',
        title: 'Customisation on Demand',
        desc: "Pacing, focus areas, and difficulty levels are justed to each student's needs — the program adapts to the child, not the other way around.",
    },
    {
        icon: '🖥️',
        title: 'Classroom-Like Environment',
        desc: 'Live interactive sessions with whiteboard tools, screen sharing, and two-way audio replicate the energy and structure of a physical classroom.',
    },
    {
        icon: '💬',
        title: 'Same-Time Doubt Clarification',
        desc: 'Doubts are addressed in real time during class — no waiting for the next session or sending messages into a void.',
    },
    {
        icon: '👨‍👩‍👧',
        title: 'Online PTM (Parent–Teacher Meeting)',
        desc: "Regular structured parent-teacher meetings keep families informed about progress, weak areas, and the student's upcoming milestones.",
    },
];

const WHY_PARENTS = [
    'Pioneer in online tutoring for CBSE, ICSE, and International Boards since 2016',
    "Personalised study plans built around each student's school syllabus and exam timetable",
    'Consistent progress tracking with monthly performance reports shared with parents',
    'Trusted by 10,000+ students across India and 30+ countries',
    'Academic improvement visible within the first two months — or we reassign the tutor',
];

const OUR_PROMISE = [
    'No rote learning — conceptual clarity is the foundation of every session',
    "Board exam paper patterns studied and integrated into every chapter's practice",
    'Exam technique coaching: time management, answer framing, marks maximisation',
    'Separate crash programmes available before boards and half-yearly exams',
];

const PROGRAMS = [
    {
        stripe: 'navy',
        icon: '📐',
        iconBg: 'navy',
        title: 'Mathematics',
        sub: 'CBSE & ICSE · Class 6 – 12',
        desc: 'Concept-first teaching for Algebra, Geometry, Trigonometry, Calculus, and Statistics — aligned tightly to NCERT and ICSE Council patterns. Emphasis on problem-solving method and step-by-step scoring in board papers.',
        tags: ['Algebra', 'Trigonometry', 'Calculus', 'Statistics', 'Coordinate Geometry'],
    },
    {
        stripe: 'teal',
        icon: '🔬',
        iconBg: 'teal',
        title: 'Science',
        sub: 'Physics · Chemistry · Biology',
        desc: 'Structured coaching for Physics, Chemistry, and Biology across Classes 6–12. Builds deep subject understanding required for boards, and lays the groundwork for JEE and NEET preparation in Classes 11–12.',
        tags: ['Physics', 'Chemistry', 'Biology', 'Diagrams & Practical', 'JEE / NEET Ready'],
    },
    {
        stripe: 'gold',
        icon: '📖',
        iconBg: 'gold',
        title: 'English',
        sub: 'Language & Literature · Class 6 – 12',
        desc: 'Grammar, writing skills, comprehension, and literature analysis taught systematically. Targets both the CBSE and ICSE English papers, with special focus on essay writing, letter formats, and scoring in reading comprehension.',
        tags: ['Grammar', 'Writing Skills', 'Comprehension', 'Literature', 'Exam Technique'],
    },
    {
        stripe: 'navy',
        icon: '📚',
        iconBg: 'navy',
        title: 'Social Science / History',
        sub: 'CBSE · Class 6 – 10',
        desc: 'History, Geography, Civics, and Economics taught with structured notes, map work, and answer-writing technique — all built around the CBSE and ICSE board exam marking schemes.',
        tags: ['History', 'Geography', 'Civics', 'Economics', 'Map Work'],
    },
    {
        stripe: 'teal',
        icon: '💻',
        iconBg: 'teal',
        title: 'Computer Science',
        sub: 'CBSE & ICSE · Class 6 – 12',
        desc: 'Programming in Python and Java, database concepts, networking, and theory papers — covering the full CBSE Class 10/12 and ICSE computer applications curriculum with practical coding sessions.',
        tags: ['Python', 'Java', 'Database (SQL)', 'Networking', 'Practical Sessions'],
    },
    {
        stripe: 'gold',
        icon: '📊',
        iconBg: 'gold',
        title: 'Accountancy & Commerce',
        sub: 'CBSE & ICSE · Class 11 – 12',
        desc: 'Accountancy, Business Studies, and Economics for Class 11–12 Commerce students — structured around board exam patterns with intensive practice on journal entries, financial statements, and case studies.',
        tags: ['Accountancy', 'Business Studies', 'Economics', 'Financial Statements', 'Case Studies'],
    },
];

const PILLARS = [
    { icon: '🤝', title: 'Collaborative Sessions', desc: 'Tutor and student work through problems together' },
    { icon: '🎥', title: 'Video & Animation', desc: 'Visual tools reinforce abstract concepts' },
    { icon: '🔁', title: 'Concept Reinforcement', desc: 'Spaced repetition built into weekly schedules' },
    { icon: '📋', title: 'Structured Feedback', desc: 'Detailed feedback on every test and assignment' },
];

const SESSION_STEPS = [
    'Session begins with a 5-minute recap of the previous class — no concept left behind',
    'New topic introduced with real-world examples and animated visuals where available',
    'Tutor works through 2–3 solved examples, explaining each step in full detail',
    'Student attempts practice problems under tutor supervision — doubts addressed instantly',
    'Common error patterns identified and corrected in real time',
    'Assignment issued at the end — reviewed at the start of the next session',
    'Monthly mock test modelled on the actual board paper pattern with marks analysis',
    'Parent summary shared after each PTM cycle with recommended focus areas',
];

const WHY_CARDS = [
    { icon: '🧠', title: 'Concept-First Teaching', desc: 'Our faculty teaches the reasoning behind every concept — not just what the answer is, but why. This is what separates students who score 95%+ from those who scrape through with passing marks.' },
    { icon: '📊', title: 'Personalised Study Plans', desc: 'Every student receives a customised weekly plan built around their school timetable, weak subjects, and exam calendar. No two students follow the same programme.' },
    { icon: '🏅', title: 'Proven Track Record', desc: 'With 10,000+ students guided and a 95%+ average score improvement rate, our methods are proven across CBSE and ICSE boards from Class 6 through Class 12.' },
    { icon: '📅', title: 'Year-Round Structured Program', desc: "Unlike one-off crash courses, EduQuest's program runs year- round with weekly sessions, monthly assessments, and regular feedback cycles.Consistency is what produces top scorers." },
    { icon: '🎓', title: 'Board Exam Technique', desc: 'Students are coached on how to write answers that score full marks — structure, keyword usage, diagram presentation, and time allocation — not just academic content.' },
    { icon: '👨‍🏫', title: 'Expert Faculty with 10+ Years', desc: 'Our teachers are subject specialists with a minimum of 10 years in CBSE / ICSE preparation. Every tutor is interviewed, tested, and trained before they take a single class.' },
];

const FAIL_CARDS = [
    {
        icon: '😵', title: 'Concept Gaps Left Unaddressed', desc: "Students move to the next chapter before the previous one is truly understood. These gaps compound over time until a wall of confusion hits before exams — and there's no time left to fix it.", fix: 'Weekly diagnostic tests catch gaps immediately'
    },
    {
        icon: '⏰', title: 'Poor Time Management in Exams', desc: "Students know the material but run out of time in the exam hall. They haven't practised under timed conditions with board-style papers — so exam day becomes their first real test.", fix: 'Monthly timed mock tests mirror actual board conditions'
    },
    {
        icon: '✍️', title: 'Wrong Answer-Writing Technique', desc: "CBSE and ICSE reward a specific answer format. Students who don't know how to structure answers, use keywords, or present diagrams correctly lose 10–20 marks unnecessarily in every paper.", fix: 'Answer technique coaching in every session'
    },
    { icon: '📖', title: 'Over-Reliance on Rote Learning', desc: "Memorising answers for predictable questions collapses the moment a paper has any application-based or twisted question — which every board paper now does by design.", fix: 'Concept-first teaching eliminates dependence on memorisation' },
    { icon: '🎯', title: 'No Feedback Loop', desc: "Students submit tests at school and get marks back — but no one explains what went wrong or why. Mistakes repeat indefinitely because the root cause is never identified or corrected.", fix: 'Detailed error analysis after every test and assignment' },
    { icon: '🏃', title: 'Last-Minute Cramming Culture', desc: "Most students only start serious preparation 2–3 weeks before exams. The academic year is wasted, and revision time becomes the only learning time — a recipe for stress and underperformance.", fix: 'Year-round structured program eliminates the cramming trap' },
];

const FAQS = [
    {
        q: 'Which classes does EduQuest cover for CBSE and ICSE?',
        a: 'EduQuest covers Class 6 through Class 12 for both CBSE and ICSE / ISC boards. Programs are available for all core subjects including Mathematics, Science (Physics, Chemistry, Biology), English, Social Science, Computer Science, and Commerce subjects (Accountancy, Business Studies, Economics) for Classes 11 and 12.',
    },
    {
        q: 'How are the online classes conducted?',
        a: 'Classes are conducted live via video conferencing with an interactive whiteboard, screen sharing, and real-time two-way audio. Sessions replicate a classroom environment — students can ask questions and get doubts addressed in real time during the session, not afterward. Recordings are available for revision.',
    },
    {
        q: 'How is EduQuest different from other online tuition platforms?',
        a: "EduQuest focuses on three things most platforms ignore: concept clarity (not rote learning), board exam technique (how to write answers that score full marks), and consistent feedback loops (regular tests, error analysis, and parent-teacher meetings). Our faculty are subject specialists with a minimum of 10 years of experience, and every program is customised to the individual student's pace and school timetable.",
    },
    {
        q: 'Can I get tuition for just one subject, or do I need to enrol for all subjects?',
        a: "You can enrol for a single subject or any combination of subjects. There is no requirement to take all subjects. Many students join EduQuest for one weak subject first and add more once they see the results. Customisation is available on demand — programs are built around your child's specific needs.",
    },
    {
        q: 'How soon will my child see improvement in marks?',
        a: "Most students see measurable improvement within 6–8 weeks of consistent sessions. Concept gaps are identified and filled in the first month through diagnostic tests. Score improvement in school tests and unit tests typically follows in the second month. Significant board exam score improvement — 15 to 25 percentage points — is commonly reported by students who complete a full academic year with EduQuest.",
    },
    {
        q: 'Does EduQuest offer crash programmes before board exams?',
        a: "Yes. EduQuest offers targeted crash programmes before CBSE and ICSE board exams. These are intensive, focused on high-yield chapters, include full-syllabus mock tests, and emphasise answer-writing technique and time management for the specific paper format. Crash programme slots fill up quickly — early registration is recommended.",
    },
    {
        q: "Are parents kept updated on their child's progress?",
        a: "Yes. EduQuest conducts regular Online Parent-Teacher Meetings (PTMs) where the assigned tutor walks parents through the student's performance data, areas of improvement, weak zones still being worked on, and the plan for the upcoming weeks.Monthly performance reports are also shared after each assessment cycle so parents are never in the dark.",
    },
];

const NAV_LINKS = [
    { href: 'https://eduquest.org.in', label: 'Home' },
    { href: 'https://eduquest.org.in/online-tuition-classes-india/', label: 'Online Tuition' },
    { href: 'https://eduquest.org.in/olympiad/', label: 'Olympiads' },
    { href: 'https://eduquest.org.in/indian-curricula/', label: 'Indian Curricula', active: true },
    { href: 'https://eduquest.org.in/contact-us/', label: 'Contact' },
];

const FOOTER_INDIAN = [
    { href: '#', label: 'CBSE Tuition' },
    { href: '#', label: 'ICSE / ISC Tuition' },
    { href: '#', label: 'Class 6 – 8' },
    { href: '#', label: 'Class 9 – 10' },
    { href: '#', label: 'Class 11 – 12' },
    { href: 'https://eduquest.org.in/olympiad/', label: 'Olympiads' },
];

const FOOTER_TESTPREP = [
    { href: 'https://app.eduquest.org.in/sat', label: 'SAT Coaching' },
    { href: 'https://app.eduquest.org.in/act', label: 'ACT Coaching' },
    { href: 'https://app.eduquest.org.in/ap-coaching', label: 'AP Coaching' },
    { href: 'https://app.eduquest.org.in/ucat', label: 'UCAT Coaching' },
    { href: 'https://app.eduquest.org.in/tmua', label: 'TMUA Coaching' },
    { href: 'https://eduquest.org.in/ielts/', label: 'IELTS Coaching' },
];

const FOOTER_QUICK = [
    { href: 'https://eduquest.org.in/about-us/', label: 'About Us' },
    { href: 'https://eduquest.org.in/profile-building-programs/', label: 'Profile Building' },
    { href: 'https://app.eduquest.org.in/contact-us', label: 'Contact' },
    { href: 'https://eduquest.org.in/free-download/', label: 'Free Guide Book' },
    { href: 'https://eduquest.org.in/privacy-policy/', label: 'Privacy Policy' },
    { href: 'https://eduquest.org.in/terms-of-use/', label: 'Terms of Use' },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
            <button className={styles.faqQ} onClick={() => setOpen(!open)}>
                {q}
                <span className={styles.faqArrow}>▼</span>
            </button>
            <div className={styles.faqA}>
                <p>{a}</p>
            </div>
        </div>
    );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function EduQuestAdvantage() {
    return (
        <>

            {/* HERO */}
            <div className={styles.hero} id="hero">
                <div className={styles.heroEyebrow}>📚 Indian Curricula · CBSE &amp; ICSE</div>
                <h1>
                    Score Higher in <em>CBSE &amp; ICSE</em>
                    <br />
                    with Expert Online Tuition
                </h1>
                <p>
                    A unique program weaving the CBSE / ICSE curriculum targeted to the key areas students
                    struggle with most — delivered by subject experts since 2016.
                </p>
                <div className={styles.heroCta}>
                    <a href="https://app.eduquest.org.in/contact-us" className={styles.heroBtnP}>
                        ▶ Request a Free Demo
                    </a>
                    <a href="#program" className={styles.heroBtnS}>
                        Explore the Program
                    </a>
                </div>
                <div className={styles.heroTags}>
                    {['📖 CBSE & ICSE / ISC', '🎓 Class 6 – 12', '👨‍🏫 Expert Faculty', '🖥️ Live Online Classes', '📊 Regular Tests & Assignments'].map(
                        (t) => <span key={t}>{t}</span>
                    )}
                </div>
            </div>

            {/* STATS BAR */}
            <div className={styles.statsBar}>
                {STATS.map((s) => (
                    <div key={s.lbl} className={styles.statItem}>
                        <span className={styles.statNum}>{s.num}</span>
                        <span className={styles.statLbl}>{s.lbl}</span>
                    </div>
                ))}
            </div>

            {/* ── EDUQUEST ADVANTAGE ── */}
            <div className={`${styles.section} ${styles.sectionAlt}`} id="advantage">
                <div className={styles.container}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>EduQuest Advantage</span>
                        <h2>What Makes Our Tuition Different</h2>
                        <p>
                            Six pillars that set EduQuest's CBSE / ICSE coaching apart from every other online
                            tuition platform.
                        </p>
                    </div>

                    <div className={styles.advantageGrid}>
                        {/* Left: list */}
                        <ul className={styles.advantageList}>
                            {ADVANTAGE_LIST.map((item) => (
                                <li key={item.title}>
                                    <div className={styles.advIcon}>{item.icon}</div>
                                    <div className={styles.advText}>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Right: visual cards */}
                        <div className={styles.advantageVisual}>
                            <div className={styles.advCard}>
                                <h4>Why Parents Choose EduQuest</h4>
                                <ul className={styles.advCardList}>
                                    {WHY_PARENTS.map((pt) => <li key={pt}>{pt}</li>)}
                                </ul>
                            </div>
                            <div className={`${styles.advCard} ${styles.advCardAmber}`}>
                                <h4>Our Promise</h4>
                                <ul className={styles.advCardList}>
                                    {OUR_PROMISE.map((pt) => <li key={pt}>{pt}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── PROGRAMS ── */}
            <div className={styles.section} id="program">
                <div className={styles.container}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>Our CBSE / ICSE Program</span>
                        <h2>Focused Modules. Expert Delivery.</h2>
                        <p>
                            Our program is a unique curriculum weaving CBSE / ICSE syllabi with targeted modules
                            delivered by subject experts — not a generic one-size-fits-all approach.
                        </p>
                    </div>

                    <div className={styles.programGrid}>
                        {PROGRAMS.map((prog) => (
                            <div key={prog.title} className={styles.programCard}>
                                <div className={`${styles.pcStripe} ${styles[`pcStripe_${prog.stripe}`]}`} />
                                <div className={styles.pcHeader}>
                                    <div className={`${styles.pcIcon} ${styles[`pcIcon_${prog.iconBg}`]}`}>
                                        {prog.icon}
                                    </div>
                                    <div>
                                        <div className={styles.pcTitle}>{prog.title}</div>
                                        <div className={styles.pcSub}>{prog.sub}</div>
                                    </div>
                                </div>
                                <div className={styles.pcDivider} />
                                <div className={styles.pcBody}>
                                    <p>{prog.desc}</p>
                                    <div className={styles.pcTags}>
                                        {prog.tags.map((t) => (
                                            <span key={t} className={styles.pcTag}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TUTOR-GUIDED ── */}
            <div className={`${styles.section} ${styles.sectionAlt}`} id="tutor-guided">
                <div className={styles.container}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>Our Teaching Methodology</span>
                        <h2>Tutor-Guided Student Centric Learning</h2>
                        <p>
                            Teamwork is the foundation. EduQuest tutors don't lecture — they collaborate with
                            students to build understanding, not just answers.
                        </p>
                    </div>

                    <div className={styles.tutorGrid}>
                        <div className={styles.tutorText}>
                            <h3>
                                Learning that <em>Sticks</em> — Not Just for the Exam
                            </h3>
                            <p>
                                EduQuest's experienced CBSE / ICSE tutors guide students by working closely to
                                develop understanding and share ideas and experiences. This is not passive teaching —
                                it is an active collaborative process where every student's pace and learning style
                                is respected.
                            </p>
                            <p>
                                Tutor-guided classes use videos and animations along with reinforcement of concepts.
                                Visual learning tools are paired with written practice to ensure concepts are
                                absorbed deeply — not just memorised for a test.
                            </p>
                            <p>
                                Each session is structured: concept introduction, worked examples, guided practice,
                                and independent practice — following a proven sequence that builds genuine mastery
                                week by week.
                            </p>
                            <div className={styles.tutorPillars}>
                                {PILLARS.map((p) => (
                                    <div key={p.title} className={styles.pillarChip}>
                                        <span className={styles.ci}>{p.icon}</span>
                                        <div>
                                            <h5>{p.title}</h5>
                                            <p>{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.tutorVisual}>
                            <h4>What a Typical Session Looks Like</h4>
                            <ul className={styles.benefitList}>
                                {SESSION_STEPS.map((s) => <li key={s}>{s}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── WHY EDUQUEST ── */}
            <div className={`${styles.section} ${styles.sectionDark}`} id="why-eduquest">
                <div className={styles.container}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>Why EduQuest</span>
                        <h2>India's Most Strategic CBSE &amp; ICSE Preparation</h2>
                        <p>
                            EduQuest doesn't just cover the syllabus — we build the skills, habits, and exam
                            technique that produce consistent top scorers.
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        {WHY_CARDS.map((c) => (
                            <div key={c.title} className={styles.whyCard}>
                                <div className={styles.wcIcon}>{c.icon}</div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.whyBanner}>
                        <div className={styles.wbIcon}>⭐</div>
                        <div className={styles.whyBannerText}>
                            <h4>
                                "Marks don't come from studying harder — they come from studying smarter. EduQuest
                                teaches students the difference."
                            </h4>
                            <p>— EduQuest Academic Team · Trusted by 15,000+ students across India and 30+ countries</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── WHY STUDENTS FAIL ── */}
            <div className={`${styles.section} ${styles.sectionAlt}`} id="why-students-fail">
                <div className={styles.container}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>Root Cause Analysis</span>
                        <h2>Why Students Underperform in CBSE &amp; ICSE</h2>
                        <p>
                            Most students don't fail because they aren't smart — they fail because of these six
                            fixable problems. EduQuest is built to solve every single one.
                        </p>
                    </div>

                    <div className={styles.failGrid}>
                        {FAIL_CARDS.map((fc) => (
                            <div key={fc.title} className={styles.failCard}>
                                <span className={styles.failIcon}>{fc.icon}</span>
                                <h4>{fc.title}</h4>
                                <p>{fc.desc}</p>
                                <span className={styles.fixLabel}>✅ EduQuest Fix: {fc.fix}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FAQ ── */}
            <div className={styles.section} id="faq">
                <div className={styles.container}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>Common Questions</span>
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            Everything parents and students ask us about EduQuest's CBSE &amp; ICSE online tuition
                            program.
                        </p>
                    </div>
                    <div className={styles.faqList}>
                        {FAQS.map((f) => (
                            <FaqItem key={f.q} q={f.q} a={f.a} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA STRIP ── */}
            <div className={styles.ctaWrapper}>
                <div className={styles.ctaStrip}>
                    <div className={styles.ctaText}>
                        <h3>
                            Ready to Start Your <em>Free Demo Class?</em>
                        </h3>
                        <p>
                            Book a no-commitment free demo with an EduQuest subject expert. See the difference
                            concept-first teaching makes in the very first session.
                        </p>
                    </div>
                    <div className={styles.ctaBtns}>
                        <a href="/contact-us" className={styles.btnPrimary}>
                            ▶ Book Free Demo
                        </a>
                        <a
                            href="online-tuition-classes-india"
                            className={styles.btnOutline}
                        >
                            Explore All Programs
                        </a>
                    </div>
                </div>
            </div>

            {/* ── FOOTER ── */}

        </>
    );
}