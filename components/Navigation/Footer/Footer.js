import Image from 'next/future/image'
import styles from './footer.module.css'
import logo from '../../../public/logo/laurafinallogo.svg'
import { Facebook_Icon, Instagram_Icon, Twitter_Icon, Youtube_Icon } from '../../../public/icons/social_icons/social_icons'

export default function Home() {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.footerNav}>
        <div className={styles.footerLogoContainer}>
          <div className={styles.logo}><Image className={styles.logo2} src={logo}
            alt="logo"
            width={150}
            height='100%'
            /></div>
            <p>Online Acting School</p>
            <div className={styles.footerSocialIconContainer}>
            <div><Image className={styles.instagramIcon} src={Instagram_Icon} alt="instagram icon"></Image></div>
            <div><Image className={styles.facebookIcon} src={Facebook_Icon} alt="facebook icon"></Image></div>
            <div><Image className={styles.twitterIcon} src={Twitter_Icon} alt="twitter icon"></Image></div>
            <div><Image className={styles.youtubeIcon} src={Youtube_Icon} alt="youtube icon"></Image></div>
            </div>
          </div>
          <div className={styles.footerAboutContainer}>
            <h3>About</h3>
            <p>News and Updates</p>
            <p>Mission Statement</p>
            <p>Team</p>
            <p>Content Specialists</p>
            <p>Testimonials</p>
            <p>Contributors</p>
            <p>Careers</p>
            <p>Internships</p>
            <br></br>
            <h3>Locations</h3>
            <p>Acting Classes Near Me</p>
          </div>
          <div className={styles.footerServicesContainer}>
            <h3>Services</h3>
            <p>The Foundations</p>
            <p>The Academy</p>
            <p>One on One Coaching</p>
            <br></br>
            <h3>Courses</h3>
            <p>The Actor&#39;s Toolkit</p>
            <p>Commercial Acting Workshop</p>
            <p>Business of You</p>
            <p>Acting for Film and Television</p>
          </div>
          <div className={styles.footerContactContainer}>
            <h3>Contact</h3>
            <p>Email Us</p>
            <p>Help Center</p>
            <p>Press and Media</p>
            <br></br>
            <h3>Terms and Conditions</h3>
            <p>Terms of Use</p>
            <p>Privacy of Policy</p>
            <p>Cookie Notice</p>
            <p>Copyright and Trademark</p>
        </div>
      </nav>
    </footer>
  )
}