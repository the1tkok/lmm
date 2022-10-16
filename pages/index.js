import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import logo from '../public/logo/logo2.png'
import disney_logo from '../public/partner_logos/disney.png'
import sony_logo from '../public/partner_logos/sony.png'
import universal_logo from '../public/partner_logos/universal.png'
import paramount_logo from '../public/partner_logos/paramount.svg'
import lionsgate_logo from '../public/partner_logos/lionsgate.png'

export default function Home() {
  return (
    <div className={styles.container}>
      {/*****HEADER*****/}
      <Head>
        <title>Laura Mac Method - Acting School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside className={styles.sideBar}></aside>
      {/*****NAVIGATION*****/}
      <nav className={styles.navContainer}>
        <Image className={styles.logo2} src={logo}
        alt="logo"
        width={150}
        height={72.45}
        layout="raw"
        />
        <div className={styles.mobileMenuContainer}>
          <span className={styles.dot1}></span>  
          <span className={styles.dot2}></span>
          <span className={styles.dot3}></span>
          <span className={styles.dot4}></span>  
          <span className={styles.dot5}></span>
          <span className={styles.dot6}></span>
          <span className={styles.dot7}></span>  
          <span className={styles.dot8}></span>
          <span className={styles.dot9}></span>
        </div>
        <ul className={styles.navUl}>
          <li className={styles.navListMenu}>
            <Link href={'/'}><a className={styles.viewCurriculumButton}>View Curriculum</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={'/'}><a className={styles.pricingButton}>Pricing</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={'/'}><a className={styles.blogButton}>Blog</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={'/'}><a className={styles.loginButton}>Login</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={'/'}><a className={styles.registerButton}>Register</a></Link>
          </li>
        </ul>
      </nav>
      {/*****HERO SECTION*****/}
      <section className={styles.heroSection}>
        <iframe className={styles.homeIframe} src={'https://player.vimeo.com/video/479896106?h=cde2d98eaa'}></iframe>
        <section className={styles.heroText}>
          <h1 className={styles.heroHeading}>Acting class, <br className={styles.break1}></br> anytime, <br className={styles.break2}></br> anyplace.</h1>
          <br></br>
          <p className={styles.heroParagraph}>We teach world-class acting to beginner,<br></br> intermediate, and advanced level actors across <br></br> the world both online and in-person.</p>
          <form className={styles.heroEmailForm}>
            <label for="email"></label>
            <input className={styles.emailInput} type="text" id="userEmail" name="email" placeholder="name@email.com"></input>
            <button className={styles.formButton1} display="inline-block">Enroll in Classes FREE</button>
          </form>
        </section>
      </section>
      <section className={styles.partnerLogoContainer}>
        <Image className={styles.disneyLogo} src={disney_logo} alt="disney logo" layout="responsive"></Image>
        <Image className={styles.sonyLogo} src={sony_logo} alt="sony logo"></Image>
        <Image className={styles.universalLogo} src={universal_logo} alt="universal logo"></Image>
        <Image className={styles.paramountLogo} src={paramount_logo} alt="paramount logo"></Image>
        <Image className={styles.lionsgateLogo} src={lionsgate_logo} alt="lionsgate logo"></Image>
      </section>
      {/*****FOOTER*****/}
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}