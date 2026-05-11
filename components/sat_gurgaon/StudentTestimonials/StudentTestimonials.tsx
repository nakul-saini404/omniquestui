import styles from "./StudentTestimonials.module.css";

const testimonials = [
  {
    initials: "AM",
    text: "EduQuest's SAT coaching in Gurgaon completely transformed my approach to the exam. The faculty's structured method for the Math section helped me jump from 680 to 790 in just six weeks. The mock tests were identical to the actual SAT — I walked into the exam hall feeling fully confident. I'm now admitted to the University of Toronto.",
    name: "Aryan Mehta",
    sub: "SAT 1540 · DPS Gurgaon",
  },
  {
    initials: "PS",
    text: "I had tried self-study for three months before joining EduQuest's SAT batch in Gurgaon, and the difference was night and day. The personalised feedback after every mock test pinpointed exactly where I was losing marks. My Reading & Writing score went from 650 to 760. Genuinely the best SAT coaching in Gurgaon for students serious about scoring above 1500.",
    name: "Priya Sharma",
    sub: "SAT 1510 · The Shri Ram School, Gurgaon",
  },
  {
    initials: "RK",
    text: "I enrolled in EduQuest's one-on-one SAT tutoring in Gurgaon six weeks before my exam. My tutor identified patterns in my mistakes that I had never noticed myself. The focused sessions and timed drills were incredibly effective. I scored 1580 and got into my first-choice university in the USA.",
    name: "Rohan Kapoor",
    sub: "SAT 1580 · Pathways School, Gurgaon",
  },
  {
    initials: "AS",
    text: "As someone who struggles with Maths, I was very nervous about the SAT. EduQuest's coaching centre in Gurgaon made me feel supported throughout. The faculty broke down every concept patiently, and the small batch size meant I could ask any question without hesitation. My Maths score improved by 120 points.",
    name: "Ananya Singh",
    sub: "SAT 1460 · Modern School, Sohna Road",
  },
];

export default function StudentTestimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.sectionLabel}>What Our Students Say</div>
      <h2 className={styles.heading}>
        Real Results, <em>Real Stories</em>
      </h2>
      <p className={styles.sectionSub}>
        Students from Gurgaon, Delhi, Noida, and across India have achieved
        exceptional SAT scores and university admissions with EduQuest.
      </p>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>{t.initials}</div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorSub}>{t.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}