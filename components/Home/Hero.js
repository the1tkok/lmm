import Image from 'next/future/image'
import styles from './hero.module.css'
import Video_bkg from '../../public/backgrounds/video_bkg.png'

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/*****INTRODUCTION VIDEO*****/}
      <div className={styles.homeIframeContainer}>
        <Image className={styles.backgroundImage} src={Video_bkg} alt="background image"></Image>
        <iframe className={styles.homeIframe} src={'https://player.vimeo.com/video/479896106?h=cde2d98eaa'}></iframe>
      </div>
      <section className={styles.heroText}>
        {/*****HERO TITLE*****/}
        <h1 className={styles.heroHeading}>We Build<br className={styles.break1}></br>Working Actors.<br className={styles.break2}></br></h1>
        <br></br>
        {/*****HERO PARAGRAPH*****/}
        <p className={styles.heroParagraph}>We teach world-class acting to beginner,<br></br> intermediate, and advanced level actors across <br></br> the world both online and in-person.</p>
        {/*****HERO FORM*****/}
        <form className={styles.heroEmailForm}>
          <label for="email"></label>
          <input className={styles.emailInput} type="text" id="userEmail" name="email" placeholder="name@email.com"></input>
          <button className={styles.formButton1} display="block">Enroll for FREE Classes</button>
        </form>
      </section>
    </section>
  );
}