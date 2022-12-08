import styles from './featuresection5.module.css'

export default function FeatureSection5() {
  return (
    <section className={styles.fifthFeaturesContainer}>
      <p className={styles.fifthFeaturesSubtitle}>PREMIER LEARNING EXPERIENCE</p>
      <h3 className={styles.fifthFeaturesTitle}>Get Started Working The Method</h3>
      <p className={styles.fifthFeaturesText}>The more acting you do alongside other great actors, the better you become. Sign up today.</p>
      <button className={styles.fifthFeaturesButton} display="block">Get Started</button>
    </section>
  );
}