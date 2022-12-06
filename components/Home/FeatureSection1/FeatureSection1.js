import Image from 'next/future/image'
import styles from './featuresection1.module.css'
import Laura_mac from '../../../public/home_pics/lm1.jpg'
import Laura_mac2 from '../../../public/home_pics/lm2.jpg'
import Zoom from '../../../public/home_pics/zoom.jpeg'

export default function FeatureSection1() {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.feature1}>
        <Image className={styles.featurePic1} src={Laura_mac} alt="laura mac"></Image>
        <div className={styles.featureTextContainer}>
          <p className={styles.featureSubtitle1}>EXPLORE YOUR TALENTS</p>
          <p className={styles.featureTitle1}>One on One Coaching</p>
          <p className={styles.featureParagraph1}>Work with experienced acting coaches in one on one<br></br> sessions to improve your audition success rate.</p>
        </div>
      </div>
      <div className={styles.feature2}>
        <Image className={styles.featurePic2} src={Laura_mac2} alt="laura mac team"></Image>
        <div className={styles.featureTextContainer2}>
          <p className={styles.featureSubtitle1}>GROW YOUR CAREER</p>
          <p className={styles.featureTitle1}>Routine Course Updates</p>
          <p className={styles.featureParagraph1}>Join a community of actors and learn alongside acting<br></br>peers of similar skill level from beginner to advanced.</p>
        </div>
      </div>
      <div className={styles.feature3}>
        <Image className={styles.featurePic3} src={Zoom} alt="zoom meeting"></Image>
        <div className={styles.featureTextContainer}>
          <p className={styles.featureSubtitle1}>SKILL DEVELOPMENT</p>
          <p className={styles.featureTitle1}>Online Acting Classes</p>
          <p className={styles.featureParagraph1}>Work with experienced acting coaches in one on one<br></br> sessions to improve your audition success rate.</p>
        </div>
      </div>
      <div className={styles.feature4}>
        <Image className={styles.featurePic4} src={Laura_mac2} alt="laura mac team"></Image>
        <div className={styles.featureTextContainer4}>
          <p className={styles.featureSubtitle1}>GROW YOUR CAREER</p>
          <p className={styles.featureTitle1}>A Network of Opportunities</p>
          <p className={styles.featureParagraph1}>Join a community of actors and learn alongside acting<br></br>peers of similar skill level from beginner to advanced.</p>
        </div>
      </div>
    </section>
  );
}