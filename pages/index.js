import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import {disney_logo, sony_logo, universal_logo, paramount_logo, lionsgate_logo} from '../public/partner_logos/partner_logos'
import Header from '../components/Navigation/Header'
import Laura_mac from '../public/home_pics/lm1.jpg'
import Laura_mac2 from '../public/home_pics/lm2.jpg'
import Zoom from '../public/home_pics/zoom.jpeg'
import Video_bkg from '../public/backgrounds/video_bkg.png'
import Toolkit from '../public/icons/toolkit.png';
import Tv from '../public/icons/tv.png'
import Briefcase from '../public/icons/briefcase.png'
import Studio from '../public/icons/studio.png'

export default function Home() {
  return (
    <div className={styles.container}>
      {/*****HEADER*****/}
      <Head>
        <title>Laura Mac Method - Acting School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

      </Header>
      {/*****HERO SECTION*****/}
      <section className={styles.heroSection}>
        <iframe className={styles.homeIframe} src={'https://player.vimeo.com/video/479896106?h=cde2d98eaa'}></iframe>
        <section className={styles.heroText}>
          <h1 className={styles.heroHeading}>We Build<br className={styles.break1}></br>Working Actors.<br className={styles.break2}></br></h1>
          <br></br>
          <p className={styles.heroParagraph}>We teach world-class acting to beginner,<br></br> intermediate, and advanced level actors across <br></br> the world both online and in-person.</p>
          <form className={styles.heroEmailForm}>
            <label for="email"></label>
            <input className={styles.emailInput} type="text" id="userEmail" name="email" placeholder="name@email.com"></input>
            <button className={styles.formButton1} display="block">Enroll in Classes FREE</button>
          </form>
        <Image className={styles.backgroundImage} src={Video_bkg} alt="background image"></Image>
        </section>
      </section>
      <section className={styles.partnerLogoContainer}>
        <p className={styles.partnerLogoText}>Our students have worked for the top 10+ major movie studios and counting</p>
        <div className={styles.partnerLogoImages}>
          <Image className={styles.disneyLogo} src={disney_logo} alt="disney logo"></Image>
          <Image className={styles.lionsgateLogo} src={lionsgate_logo} alt="lionsgate logo"></Image>
          <Image className={styles.paramountLogo} src={paramount_logo} alt="paramount logo"></Image>
          <Image className={styles.sonyLogo} src={sony_logo} alt="sony logo"></Image>
          <Image className={styles.universalLogo} src={universal_logo} alt="universal logo"></Image>
        </div>
      </section>
      <section className={styles.featuresContainer}>
      <h2 className={styles.featuresTitle}>The Future of Your Acting Career Starts With...</h2>
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
            <p className={styles.featureTitle1}>Routinely Updated Course</p>
            <p className={styles.featureParagraph1}>Join a community of actors and learn alongside acting<br></br>peers of similar skill level from beginner to advanced.</p>
          </div>
        </div>
        <div className={styles.feature3}>
          <Image className={styles.featurePic3} src={Zoom} alt="zoom meeting"></Image>
          <div className={styles.featureTextContainer}>
            <p className={styles.featureSubtitle1}>SKILL DEVELOPMENT</p>
            <p className={styles.featureTitle1}>Online Acting Class</p>
            <p className={styles.featureParagraph1}>Work with experienced acting coaches in one on one<br></br> sessions to improve your audition success rate.</p>
          </div>
        </div>
        <div className={styles.feature2}>
          <Image className={styles.featurePic2} src={Laura_mac2} alt="laura mac team"></Image>
          <div className={styles.featureTextContainer2}>
            <p className={styles.featureSubtitle1}>GROW YOUR CAREER</p>
            <p className={styles.featureTitle1}>A Network of Opportunity</p>
            <p className={styles.featureParagraph1}>Join a community of actors and learn alongside acting<br></br>peers of similar skill level from beginner to advanced.</p>
          </div>
        </div>
      </section>
      <section className={styles.secFeaturesContainer}>
        <h3 className={styles.secFeaturesTitle}>Our Academic Stack</h3>
        <p className={styles.secFeaturesSubTitle}>Acting is a process we've made into digestible pieces for actors in any stage of their career.</p>
        <div className={styles.secFeaturesCard1}>
          <div>
            <Image className={styles.toolkitIcon} src={Toolkit} alt="toolkit"></Image>
            <p className={styles.secFeaturesCardTitle}>The Actor's Toolkit</p>
            <p className={styles.secFeaturesCardSubTitle}>Where your acting foundation beings.</p>
          </div>
        </div>
        <div className={styles.secFeaturesCard2}>
        <Image className={styles.tvIcon} src={Tv} alt="commercial workshop"></Image>
            <p className={styles.secFeaturesCardTitle}>Commercial Workshop</p>
            <p className={styles.secFeaturesCardSubTitle}>Learn precision acting to get yourself set up for commercial and TV roles.</p>
        </div>
        <div className={styles.secFeaturesCard3}>
        <div>
            <Image className={styles.toolkitIcon} src={Briefcase} alt="toolkit"></Image>
            <p className={styles.secFeaturesCardTitle}>Business of You</p>
            <p className={styles.secFeaturesCardSubTitle}>How to market yourself and manage your acting career.</p>
          </div>
        </div>
        <div className={styles.secFeaturesCard4}>
        <div>
            <Image className={styles.toolkitIcon} src={Studio} alt="toolkit"></Image>
            <p className={styles.secFeaturesCardTitle}>Film & Television</p>
            <p className={styles.secFeaturesCardSubTitle}>Story telling, human behavior, acting techniques and much more!</p>
          </div>
        </div>
      </section>
      <section className={styles.secondaryFeaturesBkg}>
        <div></div>
      </section>
      {/*****FOOTER*****/}
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
