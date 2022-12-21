import Link from "next/link";
import styles from "./additional-resources.module.css";

const AdditionalResources = ({ data }) => {
  if (!data || data?.length === 0) {
    return null;
  }
  return (
    <div className={styles.additionalResourcesContainer}>
      <h2 className={styles.additionalResourcesTitle}>Additional Resources</h2>
      <ul>
        {data?.map(({ title, link }) => (
          <li key={link}>
            <p className={styles.additionalResourcesText}>
              <Link href={link}>{title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AdditionalResources };
