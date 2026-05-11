import { useEffect, useRef, useState } from "react";
import styles from "./AboutEduQuest.module.css";

/* ─── Data ─────────────────────────────────────── */

const FEATURES = [
  {
    icon: "🧭",
    title: "Roadmap-Based Coaching",
    desc: 'Every student receives a personalized learning roadmap with a step-by-step "improvement ladder" marked on an individual Student Sheet. No two roadmaps are the same.',
  },
  {
    icon: "📊",
    title: "Diagnostic Test Framework",
    desc: "Every student starts with our exclusive Diagnostic Test Framework — designed to identify your current level and inform the design of customized modules tailored to your specific needs.",
  },
  {
    icon: "📐",
    title: "Module-Based Preparation",
    desc: "Section-wise assessment with special attention on improvement areas. Course ends only when the student reaches their full potential — we don't stop until you do.",
  },
  {
    icon: "🤝",
    title: "360° Mentorship Programme",
    desc: "Guidance does not stop at academic tests. Mentors also offer valuable insights for application writing, essay writing, and choosing the right universities and colleges abroad.",
  },
  {
    icon: "🖥️",
    title: "Online Live & Classroom Options",
    desc: "Flexible delivery: Online Live Group, Offline Classroom, and Hybrid programmes. Students from across Rajasthan and India have successfully prepared for the SAT through our online platform.",
  },
  {
    icon: "🧪",
    title: "AI-Based Test Generation",
    desc: "Advanced test generation facility for rigorous testing phases. Different strategies for first-time takers and retakers to ensure the best possible score on test day.",
  },
];

const STEPS = [
  {
    num: "01",
    icon: "💡",
    title: "Conceptual Clarity",
    desc: "The first and most crucial step. Students must understand the logical reasoning behind each concept — not just cram answers. Conceptual depth leads to consistent accuracy across all question types.",
  },
  {
    num: "02",
    icon: "🎯",
    title: "Accurate Application",
    desc: "Concepts must be applied accurately to SAT questions. The target is 100% accuracy without error or hesitation. Students practice application across diverse question types until mastery is confirmed.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Speed and Efficiency",
    desc: "Students must maintain efficiency. All SAT exams are ultimately a race against time. The third level focuses on timed drills, test strategy, and performance under exam-day pressure.",
  },
];

const WHY_LEFT = [
  {
    heading: "Unique 360-Degree Approach",
    body: "EduQuest's 360-degree framework for SAT coaching has been introduced to students across Jaipur through seminars at prestigious schools in the area. The approach includes a customized learning plan that covers academic preparation, soft skills, and personality development — well beyond just test prep.",
  },
  {
    heading: "School Partnerships in Jaipur",
    body: "EduQuest has been invited by many prestigious schools around Jaipur for conducting seminars and career counseling sessions. Right now, EduQuest in Jaipur is connected with many schools in the area, working seamlessly with the 360-degree approach programme for students across all boards.",
  },
];

const WHY_RIGHT = [
  {
    heading: "Board-Agnostic Training",
    body: "EduQuest prepares students across IB, IGCSE, ICSE, ISC, and CBSE boards equally. All classes and tests are personalized to the individual student, regardless of their curriculum background. Students receive unlimited and unmatched coaching throughout their preparation.",
  },
  {
    heading: "Career Counselling Integration",
    body: "EduQuest's mentors guide students not just for examinations like SAT, AP, ACT, TOEFL/IELTS and Olympiads — they also provide insights into college selection, application strategy, and long-term career positioning. Preparation for the SAT is always aligned with your university admissions goals.",
  },
];

/* ─── Scroll-reveal hook ────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Sub-components ────────────────────────────── */

function AboutIntro() {
  const { ref, visible } = useReveal();
  return (
    <section className={styles.introSection} ref={ref}>
      <div className={`container ${styles.introInner}`}>
        {/* Header */}
        <div className={`${styles.sectionLabel} ${visible ? styles.slideUp : ""}`}>
          About EduQuest Jaipur
        </div>
        <h2 className={`${styles.heading} ${visible ? styles.slideUp : ""}`}
            style={{ animationDelay: "0.1s" }}>
          The <em className={styles.em}>Adaptive Model</em> That Transforms SAT Scores
        </h2>
        <p className={`${styles.subText} ${visible ? styles.slideUp : ""}`}
           style={{ animationDelay: "0.18s" }}>
          EduQuest is an institution devoted to making the lives of students better by
          providing the best SAT prep in Jaipur. Since 1995, EduQuest has been
          transforming lives through academic excellence, preparing students for all
          major examinations that help them get into great universities abroad.
        </p>

        {/* Quote */}
        <blockquote className={`${styles.quoteBox} ${visible ? styles.slideUp : ""}`}
                    style={{ animationDelay: "0.26s" }}>
          <p>
            "We, at EduQuest, are well aware that every student has a sharp and curious
            mind. The best-proven way to make people learn is the Adaptive Model —
            adapting the process to the student, instead of forcing the student to mold
            themselves to a rigid learning style."
          </p>
          <div className={styles.quoteAuthor}>— EduQuest Mentors, Jaipur</div>
        </blockquote>

        {/* Feature Cards */}
        <div className={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`${styles.featureCard} ${visible ? styles.slideUp : ""}`}
              style={{ animationDelay: `${0.32 + i * 0.08}s` }}
            >
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologySteps() {
  const { ref, visible } = useReveal();
  return (
    <section className={styles.stepsSection} ref={ref}>
      <div className={`container ${styles.stepsInner}`}>
        <div className={`${styles.sectionLabel} ${visible ? styles.slideUp : ""}`}>
          EduQuest Methodology
        </div>
        <h2 className={`${styles.heading} ${visible ? styles.slideUp : ""}`}
            style={{ animationDelay: "0.08s" }}>
          Three Levels of <em className={styles.em}>SAT Mastery</em>
        </h2>
        <p className={`${styles.subText} ${visible ? styles.slideUp : ""}`}
           style={{ animationDelay: "0.16s" }}>
          EduQuest mentors have identified three proven levels of teaching for PSAT,
          SAT, ACT, AP, and SSAT coaching. Every Jaipur student progresses through each
          level systematically.
        </p>

        <div className={styles.stepsGrid}>
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className={`${styles.stepCard} ${visible ? styles.slideUp : ""}`}
              style={{ animationDelay: `${0.24 + i * 0.1}s` }}
            >
              <span className={styles.stepNum}>{s.num}</span>
              <span className={styles.stepIcon}>{s.icon}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEduQuest() {
  const { ref, visible } = useReveal();
  return (
    <div className={styles.whyBg} ref={ref}>
      <section className={`${styles.whySection}`}>
        <div className={`container ${styles.whyInner}`}>
          <div className={`${styles.sectionLabel} ${visible ? styles.slideUp : ""}`}>
            Why EduQuest Jaipur
          </div>
          <h2 className={`${styles.heading} ${visible ? styles.slideUp : ""}`}
              style={{ animationDelay: "0.08s" }}>
            Why Choose EduQuest for{" "}
            <em className={styles.em}>SAT Coaching in Jaipur</em>
          </h2>

          <div className={styles.diffGrid}>
            {/* Left column */}
            <div className={`${styles.diffCol} ${visible ? styles.slideUp : ""}`}
                 style={{ animationDelay: "0.18s" }}>
              {WHY_LEFT.map((item) => (
                <div key={item.heading} className={styles.diffBlock}>
                  <h3 className={styles.diffHeading}>{item.heading}</h3>
                  <p className={styles.diffBody}>{item.body}</p>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className={`${styles.diffCol} ${visible ? styles.slideUp : ""}`}
                 style={{ animationDelay: "0.28s" }}>
              {WHY_RIGHT.map((item) => (
                <div key={item.heading} className={styles.diffBlock}>
                  <h3 className={styles.diffHeading}>{item.heading}</h3>
                  <p className={styles.diffBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Root export ───────────────────────────────── */
export default function AboutEduQuest() {
  return (
    <>
      <AboutIntro />
      <div className={styles.divider} />
      <MethodologySteps />
      <WhyEduQuest />
    </>
  );
}