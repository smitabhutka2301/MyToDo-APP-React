import styles from "./footer.module.css";

export default function footer({ cmptedTask, totalTask }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Your Completed Tasks are: {cmptedTask}
      </span>
      <span className={styles.item}>Your Total Tasks are: {totalTask}</span>
    </div>
  );
}
