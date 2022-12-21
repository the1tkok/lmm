import styles from "./table-of-content.module.css";

const TableOfContent = ({ lessons, activeLessonId }) => {
  return (
    <div className={styles.tableOfContentContainer}>
      <div className={styles.tableOfContentTitle}>Table of Content</div>
      <div className={styles.tableOfContentContent}>
        <div className={styles.tableOfContentLine} />
        <ul className={styles.tableOfContentList}>
          {lessons?.map(({ _id, title }) => (
            <li
              key={_id}
              className={`${styles.tableOfContentItem} ${
                activeLessonId === _id ? styles.tableOfContentItemActive : ""
              }`}
            >
              <div className={styles.tableOfContentCircle} />
              {title}
              <div className={styles.tableOfContentUnderline} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { TableOfContent };
