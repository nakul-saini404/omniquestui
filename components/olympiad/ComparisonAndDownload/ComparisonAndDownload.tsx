'use client';

import styles from './ComparisonAndDownload.module.css';

/* ════════════════════════════════
   AT A GLANCE — data
════════════════════════════════ */
interface TableRow {
    badge: string;
    badgeClass: string;
    fullName: string;
    subject: string;
    classes: string;
    bestFor: string;
    synergy: string;
}

const tableRows: TableRow[] = [
    {
        badge: 'ICSO',
        badgeClass: styles.bSky,
        fullName: 'International Cyber Science Olympiad',
        subject: 'Computer Science & Digital Literacy',
        classes: '1 – 10',
        bestFor: 'Students interested in Tech, AI & Engineering',
        synergy: 'JEE CS, AP CS, Software careers',
    },
    {
        badge: 'IEO',
        badgeClass: styles.bTeal,
        fullName: 'International English Olympiad',
        subject: 'English Language & Communication',
        classes: '1 – 12',
        bestFor: 'All students — English is universally essential',
        synergy: 'SAT, IELTS, TOEFL, CAT, GMAT, GRE',
    },
    {
        badge: 'IGKO',
        badgeClass: styles.bAmber,
        fullName: 'International General Knowledge Olympiad',
        subject: 'GK, Current Affairs & Reasoning',
        classes: '1 – 10',
        bestFor: 'Curious, well-rounded students',
        synergy: 'UPSC, MBA entrance, Group Discussions',
    },
    {
        badge: 'ISO',
        badgeClass: styles.bRose,
        fullName: 'International Science Olympiad',
        subject: 'Physics, Chemistry & Biology',
        classes: '1 – 12',
        bestFor: 'Students targeting JEE, NEET or STEM globally',
        synergy: 'JEE, NEET, AP Science, IB Sciences',
    },
];

const tableHeaders = ['Olympiad', 'Full Name', 'Subject Focus', 'Classes', 'Best For', 'Synergy With'];

/* ════════════════════════════════
   FREE RESOURCES — data
════════════════════════════════ */
interface SubjectCard {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    maxClass: number;
    stripeClass: string;
    iconClass: string;
    btnClass: string;
    basePath: string;
}

const subjectCards: SubjectCard[] = [
    {
        id: 'icso',
        icon: '💻',
        title: 'ICSO',
        subtitle: 'International Cyber Science Olympiad · Class 1–10',
        maxClass: 10,
        stripeClass: styles.stripeSky,
        iconClass: styles.iconSky,
        btnClass: styles.btnSky,
        basePath: '/icso/icso_sample_paper_class-',
    },
    {
        id: 'ieo',
        icon: '📖',
        title: 'IEO',
        subtitle: 'International English Olympiad · Class 1–12',
        maxClass: 12,
        stripeClass: styles.stripeTeal,
        iconClass: styles.iconTeal,
        btnClass: styles.btnTeal,
        basePath: '/ieo/ieo_sample_paper_class-',
    },
    {
        id: 'igko',
        icon: '🌍',
        title: 'IGKO',
        subtitle: 'International General Knowledge Olympiad · Class 1–10',
        maxClass: 10,
        stripeClass: styles.stripeAmber,
        iconClass: styles.iconAmber,
        btnClass: styles.btnAmber,
        basePath: '/igko/igko_sample_paper_class-',
    },
    {
        id: 'iso',
        icon: '🔬',
        title: 'ISO',
        subtitle: 'International Science Olympiad · Class 1–12',
        maxClass: 12,
        stripeClass: styles.stripeRose,
        iconClass: styles.iconRose,
        btnClass: styles.btnRose,
        basePath: '/iso/iso_sample_paper_class-',
    },
];

/* Download helper */
function triggerDownload(url: string, filename: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

/* ── Download icon SVG ── */
function DownloadIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 10, height: 10, opacity: 0.85 }}
        >
            <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
    );
}

/* ════════════════════════════════
   COMPONENT
════════════════════════════════ */
export default function ComparisonAndDownload() {
    return (
        <section className={styles.section} id="comparison-download">
            <div className={styles.container}>

                {/* ── AT A GLANCE ── */}
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>At a Glance</span>
                    <h2>Olympiad Comparison — Which One Is Right for You?</h2>
                    <p>
                        All four olympiads are valuable. Here's a quick comparison to help
                        students and parents decide where to focus first.
                    </p>
                </div>

                <div className={styles.comparisonWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {tableHeaders.map((h) => (
                                    <th key={h}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((row) => (
                                <tr key={row.badge}>
                                    <td className={styles.cn}>
                                        <span className={row.badgeClass}>{row.badge}</span>
                                    </td>
                                    <td>{row.fullName}</td>
                                    <td>{row.subject}</td>
                                    <td>{row.classes}</td>
                                    <td>{row.bestFor}</td>
                                    <td>{row.synergy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ── Divider ── */}
                <div className={styles.divider} />

                {/* ── FREE RESOURCES ── */}
                <div className={styles.sectionHead} id="download">
                    <span className={styles.eyebrow}>Free Resources</span>
                    <h2>Download Sample Papers — Select Your Class</h2>
                    <p>
                        Tap a class button under any olympiad to instantly download the
                        matching PDF sample paper. No login required.
                    </p>
                </div>

                <div className={styles.subjectGrid}>
                    {subjectCards.map((card) => (
                        <div key={card.id} className={styles.subjectCard}>

                            {/* Colour stripe */}
                            <div className={`${styles.cardStripe} ${card.stripeClass}`} />

                            {/* Header */}
                            <div className={styles.cardHeader}>
                                <div className={`${styles.cardIcon} ${card.iconClass}`}>
                                    {card.icon}
                                </div>
                                <div>
                                    <div className={styles.cardTitle}>{card.title}</div>
                                    <div className={styles.cardSubtitle}>{card.subtitle}</div>
                                </div>
                            </div>

                            <div className={styles.cardDivider} />

                            {/* Body — class buttons */}
                            <div className={styles.cardBody}>
                                <span className={styles.cardLabel}>Select Class to Download</span>
                                <div className={styles.classGrid}>
                                    {Array.from({ length: card.maxClass }, (_, i) => i + 1).map((cls) => (
                                        <button
                                            key={cls}
                                            className={`${styles.btnClass} ${card.btnClass}`}
                                            title={`Download ${card.title} Class ${cls} Sample Paper`}
                                            onClick={() =>
                                                triggerDownload(
                                                    `${card.basePath}${cls}_2026-27.pdf`,
                                                    `${card.title}_Class_${cls}_Sample_Paper.pdf`,
                                                )
                                            }
                                        >
                                            <DownloadIcon />
                                            Class {cls}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}