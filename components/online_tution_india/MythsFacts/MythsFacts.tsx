'use client';

import styles from './MythsFacts.module.css';

const mythsData = [
    {
        myth: '"Online classes aren\'t as effective as in-person tuition."',
        fact: 'Multiple studies — and our own student data — show 1-on-1 online tutoring consistently outperforms large classroom settings. Personalised attention beats batch teaching every time.',
    },
    {
        myth: '"My child will get distracted at home — they need to physically go somewhere."',
        fact: 'Our live 1-on-1 format keeps students highly engaged — there\'s nowhere to hide when the teacher is watching and questioning you directly. Distraction drops when attention is personal.',
    },
    {
        myth: '"Online tutors aren\'t qualified enough — they\'re just random graduates."',
        fact: 'EduQuest\'s tutors include IIT alumni, IB examiners, and CBSE board paper setters. Our 3-stage hiring process rejects over 95% of applicants. You\'re getting elite experts, not fresh graduates.',
    },
    {
        myth: '"Online tuition is only useful for extra practice — not for actual teaching."',
        fact: 'EduQuest provides full teaching from scratch — concept introduction, worked examples, practice, testing, and exam strategy. Students have scored 95%+ purely with our online programme.',
    },
    {
        myth: '"Online classes need very good internet — we have connectivity issues sometimes."',
        fact: 'Our platform works on basic broadband. Every session is recorded and shared immediately — so if there\'s a connectivity hiccup, students catch up instantly. No learning is ever lost.',
    },
    {
        myth: '"It\'s expensive — online tuition is a premium luxury only top earners can afford."',
        fact: 'EduQuest\'s online tuition costs the same as — or less than — a good local tutor, while delivering far superior quality. No hidden fees, no transport costs. Multiple plans available to fit your budget.',
    },
];

export default function MythsFacts() {
    return (
        <section className={styles.section} id="myths">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionLabel}>Myths &amp; Facts</span>
                    <h2 className={styles.heading}>
                        What parents <em>think</em> vs.<br />what&apos;s actually true
                    </h2>
                    <p className={styles.subheading}>
                        There are a lot of misconceptions about online tuition floating around. Let&apos;s
                        clear them up with facts — not marketing.
                    </p>
                </div>

                <div className={styles.grid}>
                    {mythsData.map((item, index) => (
                        <div key={index} className={styles.mythItem}>
                            <div className={styles.mythTop}>
                                <span className={styles.mythIcon} aria-hidden="true">❌</span>
                                <div>
                                    <span className={styles.mythLabel}>Myth</span>
                                    <p className={styles.mythText}>{item.myth}</p>
                                </div>
                            </div>
                            <div className={styles.factBottom}>
                                <span className={styles.factIcon} aria-hidden="true">✅</span>
                                <div>
                                    <span className={styles.factLabel}>Fact</span>
                                    <p className={styles.factText}>{item.fact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}