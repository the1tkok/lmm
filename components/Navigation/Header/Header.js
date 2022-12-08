import styles from './header.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import logo from '../../../public/logo/laurafinallogo.svg'

const Header = ({item1, item2, item3, item4, item5, link1, link2, link3, link4, link5, navContainer, navUl, logoStyling}) => {
  return (
    <>
      {/*****MOBILE NAVIGATION*****/}
      <aside className={styles.sideBar}></aside>
      <div className={styles.headerNavContainer}>
      <nav className={`${styles[navContainer]}`} className2={`${styles[navContainer]}`}>
        <Image className={`${styles[logoStyling]}`} src={logo}
        alt="logo"
        width={165}
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
        <ul className={`${styles[navUl]}`}>
          <li className={styles.navListMenu}>
            <Link href={`${link1}`}><a className={styles.menuItem1}>{item1}</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={`${link2}`}><a className={styles.menuItem2}>{item2}</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={`${link3}`}><a className={styles.menuItem3}>{item3}</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={`${link4}`}><a className={styles.menuItem4}>{item4}</a></Link>
          </li>
          <li className={styles.navListMenu}>
            <Link href={`${link5}`}><a className={styles.menuItem5}>{item5}</a></Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Header