import styles from './featuresection5.module.css'

export default function FeatureSection5() {
  return (
    <section className={styles.fifthFeaturesContainer}>
      <p className={styles.fifthFeaturesSubtitle}>PREMIER LEARNING EXPERIENCE</p>
      <h3 className={styles.fifthFeaturesTitle}>Get Started Working The Method</h3>
      <p className={styles.fifthFeaturesText}>We love when our students share their experiences, so we thought we&#39;d share them with you.</p>
      <button className={styles.fifthFeaturesButton} display="block">Get Started</button>
    </section>
  );
}