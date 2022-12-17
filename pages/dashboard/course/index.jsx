import styles from './course.module.css'
import Link from 'next/link';
import Header from '../../../components/Navigation/Header/Header'
import InfoNavBar from '../../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../../components/Dashboard/MainNav/MainNav';
import DashboardTitle from '../../../components/Dashboard/DashboardTitle/DashboardTitle';
import Image from 'next/future/image';
import AuditionIcon from '../../../public/icons/home_icons/audition.png';
import ExerciseIcon from '../../../public/icons/home_icons/exercises.png'
import LauraIcon from '../../../public/icons/dashboard_icons/avatar.png'

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

const activeBtn = [
  {useActiveBtn: true}
]

export default function Course() {
  return (
    <div className={styles.dashboardContainer}>
      {/*****HEADER*****/}
      <Header 
      links={links}
      navContainer="navContainerDashboard"
      navUl="navUlDashboard"
      logoStyling="logo2Dashboard">
      </Header>
      {/*****USER DASHBOARD INFO NAV BAR*****/}
      <InfoNavBar></InfoNavBar>
      {/*****USER DASHBOARD MAIN NAV BAR*****/}
      <DashboardNavBar activeBtn={activeBtn}></DashboardNavBar>
      {/*****USER DASHBOARD HEADER TITLE*****/}
      <DashboardTitle title={"Course Materials"}></DashboardTitle>
      {/*****COURSE MATERIALS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****COURSE MATERIALS CONTENT TITLE*****/}
        <h2 className={styles.courseTitle}>The Actor&#39;s Toolkit Overview</h2>
        {/*****LEARNING OUTCOMES CARDS*****/}
        <div className={styles.courseLineBreak}></div>
        <h3>Learning Outcomes:</h3>
        <div className={styles.learningOutcomeCard}>
        <Image src={AuditionIcon} height={32} alt="auditionIcon"></Image>
        <p>Audition Prep</p>
        </div>
        <div className={styles.learningOutcomeCard}>
        <Image src={ExerciseIcon} height={32} alt="auditionIcon"></Image>
        <p>Acting Exercises</p>
        </div>
        {/*****COURSE TEXT CONTENT*****/}
        <div className={styles.courseLineBreak}></div>
        <p className={styles.courseContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/*****COURSE VIDEO*****/}
        <div className={styles.courseLineBreak}></div>
        <iframe className={styles.courseVideo} src={'https://player.vimeo.com/video/479896077?h=05f7e915e1'}></iframe>
        {/*****COURSE NAVIGATION BUTTONS*****/}
        <div className={styles.courseLineBreak}></div>
        <div className={styles.courseNavContainer}>
          <button className={styles.nextLessonBtn}>Previous Lesson</button>
          <button className={styles.nextLessonBtn}>Next Lesson</button>
        </div>
        {/*****COURSE CONTRIBUTORS*****/}
        <div className={styles.courseLineBreak}></div>
        <div className={styles.contributors}>
          <h3>Contributors:</h3>
          <Image src={LauraIcon} alt="Laura Mac"></Image>
        </div>
        {/*****COURSE ADDITIONAL RESOURCES*****/}
        <div className={styles.courseLineBreak}></div>
        <div className={styles.courseProgressLessonContainer}>
          <h2 className={styles.courseProgressTitle}>
            Additional Resources
          </h2>
          <p className={styles.resourcesText}><Link href="/">1. Resource 1 Link</Link></p>
          <p className={styles.resourcesText}><Link href="/">2. Resource 2 Link</Link></p>
          <p className={styles.resourcesText}><Link href="/">3. Resource 3 Link</Link></p>
        </div>
        <div className={styles.courseLineBreak}></div>
        <div className={styles.courseLineBreak}></div>
      </div>
    </div>
  )
}