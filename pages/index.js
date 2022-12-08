import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Navigation/Header/Header'
import Footer from '../components/Navigation/Footer/Footer'
import Hero from '../components/Home/Hero/Hero'
import PartnerLogos from '../components/Home/PartnerLogos/PartnerLogos'
import FeatureSection1 from '../components/Home/FeatureSection1/FeatureSection1'
import FeatureSection2 from '../components/Home/FeatureSection2/FeatureSection2'
import FeatureSection3 from '../components/Home/FeatureSection3/FeatureSection3'
import FeatureSection4 from '../components/Home/FeatureSection4/FeatureSection4'
import FeatureSection5 from '../components/Home/FeatureSection5/FeatureSection5'

export default function Home() {
  return (
    <div className={styles.container}>
      {/*****HEADER*****/}
      <Head>
        <title>Laura Mac Method - Acting School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header item1="View Curriculum" item2="Pricing" item3="Blog" item4="Login" item5="Register" navContainer="navContainer" navUl="navUl" logoStyling="logo2"></Header>
      {/*****HERO SECTION*****/}
      <section className={styles.heroSection}>
        <Hero></Hero>
      </section>
      {/*****PARTNER LOGOS*****/}
      <section className={styles.partnerLogoContainer}>
        <PartnerLogos></PartnerLogos>
      </section>
      {/*****PRODUCT FEATURES SECTION 1*****/}
      <section className={styles.featuresContainer}>
        <FeatureSection1></FeatureSection1>
      </section>
      {/*****PRODUCT FEATURES SECTION 2 CARDS*****/}
      <section className={styles.secFeaturesContainer}>
        <FeatureSection2></FeatureSection2>
      </section>
      {/*****PRODUCT FEATURES SECTION 3 ICONS*****/}
      <section className={styles.thirdFeaturesContainer}>
        <FeatureSection3></FeatureSection3>
      </section>
      {/*****CUSTOMER FEEDBACK SECTION 4 CARDS*****/}
      <section className={styles.fourthFeaturesContainer}>
        <FeatureSection4></FeatureSection4>
      </section>
       {/*****SIGN UP FORM SECTION 5*****/}
      <section className={styles.fifthFeaturesContainer}>
        <FeatureSection5></FeatureSection5>
      </section>
      {/*****FOOTER*****/}
      <Footer></Footer>
    </div>
  )
}
