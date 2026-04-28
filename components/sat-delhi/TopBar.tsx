import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <div>
          <a href="tel:+919958041888">+91-9958041888</a>
          &nbsp;|&nbsp;
          <a href="tel:+919717738553">+91-9717738553</a>
          &nbsp;|&nbsp;
          <a href="mailto:contact@eduquest.org.in">contact@eduquest.org.in</a>
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com/eduquestind/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/eduquest1" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/eduquest_education_" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/eduquest-learning-centre/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
