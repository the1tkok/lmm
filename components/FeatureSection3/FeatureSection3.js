import Image from 'next/future/image'
import styles from './featuresection3.module.css'
import { StudyIcon, TechniqueIcon, ExerciseIcon, AuditionIcon, CastingIcon, CharacterIcon, BusinessIcon, MarketingIcon, ProcessIcon } from '../../public/icons/home_icons/home_icons'

export default function FeatureSection3() {
  return (
    <section className={styles.thirdFeaturesContainer}>
      <div className={styles.thirdFeaturesBkg}>
        <p className={styles.thirdFeaturesTitle}>Build Your Skills</p>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={ExerciseIcon} alt="acting exercises"></Image>
            <p>Acting Exercises</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={TechniqueIcon} alt="acting techniques"></Image>
            <p>Acting Technique</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={ProcessIcon} alt="acting process development"></Image>
            <p>Acting Process Development</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={AuditionIcon} alt="audition prep"></Image>
            <p>Audition Prep</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={BusinessIcon} alt="business side of acting"></Image>
            <p>Business Management</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={CastingIcon} alt="casting breakthroughs"></Image>
            <p>Casting Breakthroughs</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={CharacterIcon} alt="character building"></Image>
            <p>Character Building</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={MarketingIcon} alt="marketing material development"></Image>
            <p>Marketing Material Development</p>
          </div>
        </div>
        <div className={styles.thirdFeaturesIconContainer}>
          <div className={styles.sceneStudy}>
            <Image className={styles.sceneStudyIcon} src={StudyIcon} alt="scene study"></Image>
            <p>Scene Study</p>
          </div>
        </div>
      </div>
    </section>
  );
}