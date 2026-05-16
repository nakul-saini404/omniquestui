"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SmartPricing.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface PricingRow {
    hours: string;
    rate: string;
    save: string | null; // null = baseline row (shows "—")
}

interface PricingTable {
    icon: string;
    title: string;
    subtitle: string;
    rows: PricingRow[];
}

/* ─────────────────────────────────────────
   Static data
───────────────────────────────────────── */
const TABLES: PricingTable[] = [
    {
        icon: "💻",
        title: "Online Classes",
        subtitle: "Live 1-on-1 video sessions from home",
        rows: [
            { hours: "1 – 10 hours", rate: "₹1,700 + GST", save: null },
            { hours: "10 – 20 hours", rate: "₹1,500 + GST", save: "Save ₹200/hr" },
            { hours: "20 – 30 hours", rate: "₹1,200 + GST", save: "Save ₹500/hr" },
            { hours: "30 – 40 hours", rate: "₹1,000 + GST", save: "Save ₹700/hr" },
            { hours: "40 – 50 hours", rate: "₹900 + GST", save: "Save ₹800/hr" },
        ],
    },
    {
        icon: "🏫",
        title: "Offline Classes",
        subtitle: "In-person sessions at EduQuest centres",
        rows: [
            { hours: "1 – 10 hours", rate: "₹2,000 + GST", save: null },
            { hours: "10 – 20 hours", rate: "₹1,900 + GST", save: "Save ₹100/hr" },
            { hours: "20 – 30 hours", rate: "₹1,700 + GST", save: "Save ₹300/hr" },
            { hours: "30 – 40 hours", rate: "₹1,400 + GST", save: "Save ₹600/hr" },
            { hours: "40 – 50 hours", rate: "₹1,200 + GST", save: "Save ₹800/hr" },
        ],
    },
];

/* ─────────────────────────────────────────
   Reusable hook — fires once when element
   enters the viewport
───────────────────────────────────────── */
function useInView(threshold = 0.12) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.unobserve(el);
                }
            },
            { threshold }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);

    return { ref, inView };
}

/* ─────────────────────────────────────────
   Single pricing table card
───────────────────────────────────────── */
function PricingTableCard({
    table,
    revealClass,
}: {
    table: PricingTable;
    revealClass: string;
}) {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            className={`${styles.tableWrap} ${inView ? styles.slideIn : revealClass}`}
        >
            {/* coloured header strip */}
            <div className={styles.tableHead}>
                <span className={styles.tableHeadIcon}>{table.icon}</span>
                <div className={styles.tableHeadText}>
                    <h3 className={styles.tableHeadTitle}>{table.title}</h3>
                    <span className={styles.tableHeadSub}>{table.subtitle}</span>
                </div>
            </div>

            {/* pricing rows */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Hours Purchased</th>
                        <th className={styles.th}>Per Hour Rate</th>
                        <th className={styles.th}>You Save</th>
                    </tr>
                </thead>
                <tbody>
                    {table.rows.map((row, i) => (
                        <tr key={i} className={styles.tr}>
                            <td className={styles.td}>{row.hours}</td>
                            <td className={styles.td}>{row.rate}</td>
                            <td className={`${styles.td} ${styles.tdSave}`}>
                                {row.save ? (
                                    <span className={styles.savingsBadge}>{row.save}</span>
                                ) : (
                                    "—"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* ─────────────────────────────────────────
   Smart Pricing Section — main export
───────────────────────────────────────── */
export default function SmartPricing() {
    const { ref: headerRef, inView: headerIn } = useInView(0.15);
    const { ref: noteRef, inView: noteIn } = useInView(0.5);

    return (
        <section className={styles.section} id="pricing">
            {/* top-center radial glow */}
            <div className={styles.glowTop} aria-hidden="true" />

            <div className={styles.container}>

                {/* ── Section header ── */}
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerIn ? styles.revealIn : styles.revealUp}`}
                >
                    <div className={styles.secLabel}>Smart Pricing</div>
                    <h2 className={styles.secHeading}>
                        Save More as You <em>Learn More!</em>
                    </h2>
                    <p className={styles.secSub}>
                        Transparent, tiered pricing with no hidden fees. All prices are +
                        GST. The more you commit to learning, the less you pay per hour.
                    </p>
                </div>

                {/* ── Two pricing tables ── */}
                <div className={styles.grid}>
                    <PricingTableCard table={TABLES[0]} revealClass={styles.slideFromLeft} />
                    <PricingTableCard table={TABLES[1]} revealClass={styles.slideFromRight} />
                </div>

                {/* ── Footer note ── */}
                <p
                    ref={noteRef}
                    className={`${styles.note} ${noteIn ? styles.revealIn : styles.revealUp}`}
                >
                    All prices are exclusive of GST. Hours never expire. Mix subjects
                    freely within your purchased package.
                </p>

            </div>
        </section>
    );
}