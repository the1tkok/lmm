import Head from "next/head";
import styles from "./view-curriculum.module.css";
import Header from "../../components/Navigation/Header/Header";
import Footer from "../../components/Navigation/Footer/Footer";
import Hero from "../../components/Home/Hero/Hero";
import Image from "next/future/image";
import Toolkit from '../../public/icons/home_icons/toolkit.png'
import Tv from '../../public/icons/home_icons/tv.png'
import Briefcase from '../../public/icons/home_icons/briefcase.png'
import Studio from '../../public/icons/home_icons/studio.png'

const links = [
  { label: "View Curriculum", href: "",  },
  { label: "Pricing", href: "",  },
  { label: "Blog", href: "",  },
  { label: "Login", href: "/login",  },
  { label: "Register", href: "/register", useButtonStyle: true },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/*****HEADER*****/}
      <Head>
        <title>Laura Mac Method - Acting School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        links={links}
        navContainer="navContainer"
        navUl="navUl"
        logoStyling="logo2"
      />
      {/*****HERO SECTION*****/}
      <div className={styles.heroSectionContainer}>
        <section className={styles.heroSection}>
          <p className={styles.subTitle}>CURRICULUM</p>
          <h1 className={styles.heroTitle}><span>2023 <span style={{fontFamily: 'avenir light'}}>Semester Acting Classes Starting January 30th Register Today!</span></span></h1>
          <p className={styles.heroParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        <div className={styles.image1}></div>
      </div>
      <section className={styles.section2}>
        <section className={styles.secFeaturesContainer}>
          <h3 className={styles.secFeaturesTitle}>Start with the Foundations</h3>
          <p className={styles.secFeaturesText}>Not ready for acting class yet? Start with the Foundations of acting. This course is a four-part series with 50 videos,
          dozens of quizzes, automatic grading, and in-depth additional resources to help you become</p>
          <div className={styles.cardContainer}>
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
          </div>
        </section>
      </section>
      {/*****FOOTER*****/}
      <Footer></Footer>
    </div>
  );
}
