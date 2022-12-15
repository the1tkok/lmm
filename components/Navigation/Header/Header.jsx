import styles from "./header.module.css";
import Image from "next/future/image";
import Link from "next/link";
import logo from "../../../public/logo/laurafinallogo.svg";

const Header = ({ links, navContainer, navUl, logoStyling, linkClass }) => {
  return (
    <>
      {/*****MOBILE NAVIGATION*****/}
      <aside className={styles.sideBar}></aside>
      <div className={styles.headerNavContainer}>
        <nav className={`${styles[navContainer]}`}>
          <Image
            className={`${styles[logoStyling]}`}
            src={logo}
            alt="logo"
            width={165}
            height="100%"
          />
          <div className={styles.mobileNavContainer}>
            <span className={styles.dot1} />
            <span className={styles.dot2} />
            <span className={styles.dot3} />
            <span className={styles.dot4} />
            <span className={styles.dot5} />
            <span className={styles.dot6} />
            <span className={styles.dot7} />
            <span className={styles.dot8} />
            <span className={styles.dot9} />
          </div>
          {/*****DESKTOP NAVIGATION*****/}
          <ul className={`${styles[navUl]}`}>
            {links.map(({ href, label, useButtonStyle }) => (
              <li className={styles.navListMenu} key={href}>
                <Link href={href}>
                  <a className={useButtonStyle ? styles.menuItem2 : styles.menuItem}>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
