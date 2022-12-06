import Image from 'next/future/image'
import styles from './featuresection4.module.css'
import { LeahIcon, LaurenIcon, NikhitaIcon, NathanIcon } from '../../../public/icons/home_icons/home_icons'

export default function FeatureSection4() {
  return (
    <section className={styles.fourthFeaturesContainer}>
        <p className={styles.fourthFeaturesSubtitle}>YOUR FEEDBACK MATTERS</p>
        <h3 className={styles.fourthFeaturesTitle}>What Our Customers Say</h3>
        <p className={styles.fourthFeaturesText}>We love when our students share their experiences, so we thought we&#39;d share them with you.</p>
        <div className={styles.fourthFeaturesCard1}>
          <div>
            <Image className={styles.feedbackIcon} src={LeahIcon} alt="toolkit"></Image>
            <p className={styles.fourthFeaturesCardTitle}>Leah Beaudry</p>
            <p className={styles.fourthFeaturesCardSubTitle}>“If you’re like most actors, questioning your existence after a commercial audition, take this workshop! Laura has the answers you seek&quot;</p>
          </div>
        </div>
        <div className={styles.fourthFeaturesCard2}>
        <Image className={styles.feedbackIcon} src={LaurenIcon} alt="commercial workshop"></Image>
            <p className={styles.fourthFeaturesCardTitle}>Lauren Maynard</p>
            <p className={styles.fourthFeaturesCardSubTitle}>“The Laura Mac Method is eye-opening, straight forward, and to the point. Too many ‘Aha!’ moments to count in just a few hours! Highly recommend!”</p>
        </div>
        <div className={styles.fourthFeaturesCard3}>
        <div>
            <Image className={styles.feedbackIcon} src={NikhitaIcon} alt="toolkit"></Image>
            <p className={styles.fourthFeaturesCardTitle}>Nikhita Singh</p>
            <p className={styles.fourthFeaturesCardSubTitle}>“The Laura Mac Method does not only help elevate your work up but also dives into goal setting and how important it is to be specific with what you’re working towards.”</p>
          </div>
        </div>
        <div className={styles.fourthFeaturesCard4}>
        <div>
            <Image className={styles.feedbackIcon} src={NathanIcon} alt="toolkit"></Image>
            <p className={styles.fourthFeaturesCardTitle}>Nathan Yan</p>
            <p className={styles.fourthFeaturesCardSubTitle}>“The Laura Mac Method really enabled me to get out of my shell and approach auditioning and acting in a new perspective.”</p>
          </div>
        </div>
      </section>
  );
}