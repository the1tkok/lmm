import styles from './header.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import logo from '../../../../public/logo/laurafinallogo.svg'

const Header = () => {
  return (
    <>
      {/*****MOBILE NAVIGATION*****/}
      <aside className={styles.sideBar}></aside>
      <div className={styles.headerNavContainer}>
        <nav className={styles.navContainer}>
          <Image className={styles.logo2} src={logo}
          alt="logo"
          width={150}
          height='100%'
          />
          <div className={styles.mobileNavContainer}>
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
          {/*****DESKTOP NAVIGATION*****/}
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
      </div>
    </>
  )
}

export default Header