import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <div className="container">
        <a href="https://eduquest.org.in/">Home</a>
        <span>›</span>
        <span>SAT Coaching</span>
      </div>
    </div>
  );
}
