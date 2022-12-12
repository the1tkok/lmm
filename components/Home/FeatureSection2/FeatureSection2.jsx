import Image from 'next/future/image'
import styles from './featuresection2.module.css'
import Toolkit from '../../../public/icons/home_icons/toolkit.png'
import Tv from '../../../public/icons/home_icons/tv.png'
import Briefcase from '../../../public/icons/home_icons/briefcase.png'
import Studio from '../../../public/icons/home_icons/studio.png'

export default function FeatureSection2() {
  return (
    <section className={styles.secFeaturesContainer}>
      <p className={styles.secFeaturesSubtitle}>NEW, FRESH & MODERN</p>
      <h3 className={styles.secFeaturesTitle}>Acting Lessons Unlike Anything You&#39;ve Ever Seen</h3>
      <p className={styles.secFeaturesText}>Acting is a process we&#39;ve made into digestible pieces for actors in any stage of their career.</p>
      <div className={styles.secFeaturesCard1}>
        <Image className={styles.toolkitIcon} src={Toolkit} alt="toolkit"></Image>
        <p className={styles.secFeaturesCardTitle}>The Actor&#39;s Toolkit</p>
        <p className={styles.secFeaturesCardSubTitle}>Where your acting foundation beings.</p>
      </div>
      <div className={styles.secFeaturesCard2}>
        <Image className={styles.tvIcon} src={Tv} alt="commercial workshop"></Image>
        <p className={styles.secFeaturesCardTitle}>Commercial Workshop</p>
        <p className={styles.secFeaturesCardSubTitle}>Learn precision acting to get yourself set up for commercial and TV roles.</p>
      </div>
      <div className={styles.secFeaturesCard3}>
        <Image className={styles.toolkitIcon} src={Briefcase} alt="toolkit"></Image>
        <p className={styles.secFeaturesCardTitle}>Business of You</p>
        <p className={styles.secFeaturesCardSubTitle}>How to market yourself and manage your acting career.</p>
      </div>
      <div className={styles.secFeaturesCard4}>
        <Image className={styles.toolkitIcon} src={Studio} alt="toolkit"></Image>
        <p className={styles.secFeaturesCardTitle}>Film & Television</p>
        <p className={styles.secFeaturesCardSubTitle}>Story telling, human behavior, acting techniques and much more!</p>
      </div>
    </section>
  );
}