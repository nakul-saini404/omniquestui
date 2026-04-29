import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <div className="container">
        <a href="/eduQuest">Home</a>
        <span>›</span>
        <span>SAT Coaching</span>
      </div>
    </div>
  );
}
