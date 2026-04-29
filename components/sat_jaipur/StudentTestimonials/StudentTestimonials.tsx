import styles from "./StudentTestimonials.module.css";

const testimonials = [
  {
    initials: "ST",
    text: "EduQuest's SAT coaching completely transformed my approach to the exam. The faculty's structured Adaptive Model for the Math section helped me jump significantly in just two months. The mock tests were identical to the actual SAT — I walked into the exam hall feeling fully confident.",
    name: "Seher Taneja",
    sub: "SAT 1510 · EduQuest Student",
  },
  {
    initials: "HG",
    text: "EduQuest was a huge part of my SAT journey. Their constant preparation was incredibly useful to me. They helped me a lot with SAT preparation, helping me identify and work on my weak spots and giving me a consistent way to improve and benchmark myself. I think EduQuest is one of its kind in the teaching space.",
    name: "Hiya Garg",
    sub: "SAT 1480 · EduQuest Student",
  },
  {
    initials: "AS",
    text: "I am extremely proud of the way EduQuest coached me in achieving a high SAT score. They understood the proactive side of expectations and ensured I was able to overcome the tough side of SAT. Their framework is exemplary and very robust — ensuring we do it the right way and come out with flying colours.",
    name: "Aaisha Sawlani",
    sub: "SAT 1450 · EduQuest Student",
  },
  {
    initials: "HK",
    text: "On my first attempt at the SAT, I scored 1520. I appreciate EduQuest for their helpful guidance. Their direction through digital SAT coaching supported me to get such a high score. I am incredibly appreciative of their unwavering support and commitment. They gave me a lot of insightful recommendations.",
    name: "Hardik K.",
    sub: "SAT 1520 · First Attempt",
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
        Students from Jaipur, Rajasthan, and across India have achieved exceptional SAT scores and university admissions with EduQuest.
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