import React from 'react';
import styles from './StudentStories.module.css';

interface Testimonial {
  initials: string;
  name: string;
  detail: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'RJ',
    name: 'Rishaant Jain',
    detail: 'Calculus BC 5 · Physics C 5 · AP 2021',
    rating: 5,
    text: 'I scored 5/5 in Calculus BC and Physics C with EduQuest. The 1-on-1 sessions were incredibly focused and my teacher knew exactly where I was losing marks. Best AP coaching I\'ve ever experienced.',
  },
  {
    initials: 'AS',
    name: 'Aryan Sharma',
    detail: 'AP Micro 5 · Macro 5 · Geography 5 · 2021',
    rating: 5,
    text: 'EduQuest helped me score 5/5 in four AP subjects simultaneously. The integrated strategy for AP + SAT + admissions is something no other institute provides. Got into my dream university with a $35K scholarship.',
  },
  {
    initials: 'AK',
    name: 'Aanya Kapoor',
    detail: 'AP Chemistry 5 · Dubai, UAE',
    rating: 5,
    text: 'As a UAE-based student, the timezone flexibility was crucial. EduQuest\'s faculty scheduled sessions perfectly around my school, and the personalized plan made a huge difference. 5/5 in Chemistry!',
  },
  {
    initials: 'NK',
    name: 'Nisha Krishnan',
    detail: 'Pre-AP → AP 5/5 in 4 subjects · Bangalore',
    rating: 5,
    text: 'My parents enrolled me in Pre-AP in Grade 7. By Grade 11, I was scoring 5/5 across four AP subjects without struggling. The foundation EduQuest built early made all the difference.',
  },
  {
    initials: 'SM',
    name: 'Siddharth Mehta',
    detail: 'AP Chemistry 5 · Delhi, India',
    rating: 5,
    text: 'The mock tests at EduQuest are incredibly realistic. By the time I sat for the actual AP Chemistry exam, it felt like just another practice test. The real exam felt easier than our EduQuest mocks.',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    detail: 'AP CS A 5 · Bio 5 · Singapore',
    rating: 5,
    text: 'I was skeptical about online coaching, but EduQuest\'s 1-on-1 sessions were better than any in-person coaching I\'d tried. The doubt resolution on WhatsApp between sessions was incredibly useful.',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </span>
    ))}
  </div>
);

const StudentStories: React.FC = () => (
  <section className={styles.section} aria-labelledby="testimonials-heading">
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.sectionLabel}>
          <span>Student Stories</span>
        </div>
        <h2 id="testimonials-heading" className={styles.title}>
          What Our Students <span className={styles.highlight}>Say</span>
        </h2>
        <p className={styles.subtitle}>
          Real results from EduQuest AP students — India, UAE, USA, and Singapore.
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <article key={i} className={styles.card}>
            <StarRating rating={t.rating} />
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <div className={styles.avatar} aria-hidden="true">
                {t.initials}
              </div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.detail}>{t.detail}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  </section>
);

export default StudentStories;