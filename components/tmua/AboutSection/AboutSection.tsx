"use client";

import styles from "./AboutSection.module.css";

const highlights = [
  {
    icon: "📐",
    title: "Mathematical Thinking & Reasoning",
    body: "TMUA assesses how you think and argue mathematically — not just whether you can memorize formulas. Deep conceptual understanding is the key to a 7.0+ score.",
  },
  {
    icon: "🎯",
    title: "Used by Top UK Universities",
    body: "Cambridge, Warwick, Durham, Lancaster, Sheffield, LSE, UCL, Imperial, Bath, and more use TMUA scores in their admissions decisions — required or recommended.",
  },
  {
    icon: "📊",
    title: "Score Scale 1.0 – 9.0",
    body: "Results released in late November. A score above 6.5 is considered competitive; top universities look for 7.0+. EduQuest students consistently achieve strong scores.",
  },
  {
    icon: "🌍",
    title: "International Students Welcome",
    body: "Students worldwide can register and take TMUA at designated test centers globally. EduQuest supports students across India, the Middle East, and Southeast Asia.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <span className={styles.tag}>Overview</span>
        <h2 className={styles.sectionTitle}>About TMUA</h2>

        <div className={styles.aboutGrid}>

          {/* Left — body copy + callout */}
          <div>
            <div className={styles.aboutBody}>
              <p>
                Are you a student aiming to study{" "}
                <strong>Mathematics, Computer Science, Economics, or Engineering</strong>{" "}
                at a top UK university like{" "}
                <strong>Cambridge, Warwick, or LSE</strong>? The{" "}
                <strong>TMUA (Test of Mathematics for University Admission)</strong>{" "}
                is one of the best tools to stand out in the competitive admissions
                process.
              </p>
              <p>
                Even if TMUA is not mandatory for your chosen university, a{" "}
                <strong>high TMUA score enhances your application</strong>, demonstrates
                academic rigour, and may even help you receive a{" "}
                <strong>reduced offer</strong> from leading institutions.
              </p>
              <p>
                The <strong>TMUA</strong> is a standardized exam developed by{" "}
                <strong>Cambridge Assessment Admissions Testing</strong> that consists
                of two 75-minute papers. It is designed to assess how well students
                understand and apply mathematical concepts — rather than just recall
                formulas. It is primarily used for admission to math-related courses
                at top UK universities.
              </p>
              <p>
                At <strong>EduQuest</strong>, we provide end-to-end TMUA coaching and
                university application support to help students achieve their dream of
                studying abroad at top UK institutions.
              </p>
            </div>

            <div className={styles.aboutCallout}>
              <div className={styles.aboutCalloutTitle}>EduQuest's TMUA Promise</div>
              <p>
                Our expert faculty, structured 3-month revision plans, personalized
                mentoring, and Olympiad-level reasoning practice give EduQuest students
                a decisive, measurable edge — from concept foundation to full-length
                mock analysis.
              </p>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className={styles.aboutHighlights}>
            {highlights.map(({ icon, title, body }) => (
              <div key={title} className={styles.highlightCard}>
                <h4>
                  {icon} {title}
                </h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}