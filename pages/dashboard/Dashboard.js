import Head from 'next/head'
import Header from '../../components/Dashboard/Navigation/Header/Header'
import styles from './dashboard.module.css'
import InfoNavBar from '../../components/Dashboard/InfoNav/InfoNav'
import Link from 'next/link'
import HeaderBkg from '../../public/backgrounds/headerbkg.jpg'
import Image from 'next/future/image'
import SchoolIcon from '../../public/icons/dashboard_icons/school.png'
import NotificationsIcon from '../../public/icons/dashboard_icons/bell.png'
import ProgressIcon from '../../public/icons/dashboard_icons/progress.png'
import CommunityIcon from '../../public/icons/dashboard_icons/community.png'
import ClassroomIcon from '../../public/icons/dashboard_icons/classroom.png'
import MessagesIcon from '../../public/icons/dashboard_icons/messages.png'
import BookIcon from '../../public/icons/dashboard_icons/book.png'
import QuizzesIcon from '../../public/icons/dashboard_icons/quizzes.png'
import AttendanceIcon from '../../public/icons/dashboard_icons/attendance.png'
import AwardsIcon from '../../public/icons/dashboard_icons/awards.png'
import DashboardNavBar from '../../components/Dashboard/MainNav/MainNav'

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {/*****HEADER*****/}
      <Head>
        <title>Laura Mac Method - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
        {/*****USER DASHBOARD SIDEBAR NAVIGATION*****/}
        <div className={styles.infoSidebar}>
          <InfoNavBar></InfoNavBar>
        </div>
        {/*****USER DASHBOARD MAIN NAVIGATION*****/}
          <DashboardNavBar></DashboardNavBar>
        {/*****USER DASHBOARD HEADER*****/}
          <div className={styles.dashboardHeader}><h1 className={styles.dashboardHeaderTitle}>The Actor&#39;s Academy</h1></div>
            <div className={styles.dashboardMainContainer}>
              {/*****HOME DASHBOARD PROGRESS LESSON*****/}
              <div className={styles.courseProgressLessonContainer}>
                <h2 className={styles.courseProgressTitle}>Progress<Image className={styles.dashboardProgressIcon} src={ProgressIcon} alt="background image"></Image></h2>
              </div>
              {/*****HOME DASHBOARD NOTIFICATIONS*****/}
              <div className={styles.courseNotificationsContainer}>
                <h2 className={styles.courseNotificationsTitle}>Notifications<Image className={styles.dashboardNotificationsIcon} src={NotificationsIcon} alt="background image"></Image></h2>
                <p className={styles.notificationsText}>No new notifications.</p>
              </div>
              {/*****HOME DASHBOARD NEWS & UPDATES****/}
              <div className={styles.courseNewsContainer}>
                <h2 className={styles.courseNewsTitle}>Community<Image className={styles.dashboardCommunityIcon} src={CommunityIcon} alt="background image"></Image></h2>
              </div>
              {/*****HOME DASHBOARD AVERAGE QUIZ SCORE*****/}
              <div className={styles.courseQuizzesAvgContainer}>
                <h2 className={styles.courseQuizzesAvgTitle}>Average Quiz <Image className={styles.dashboardQuizzesIcon} src={QuizzesIcon} alt="background image"></Image> <br></br> Score</h2>
                <div className={styles.quizzesContainerBkg}>
                  <div className={styles.quizzesContainerCircle}><h1 className={styles.quizzesCircleTitle}>A+</h1></div>
                </div>
              </div>
              {/*****HOME DASHBOARD NUMBER OF QUIZZES COMPLETED*****/}
              <div className={styles.courseQuizzesCompletedContainer}>
                <h2 className={styles.courseQuizzesCompletedTitle}>Quizzes<Image className={styles.dashboardQuizzesIcon2} src={QuizzesIcon} alt="background image"></Image> <br></br> Completed</h2>
                <div className={styles.quizzesContainerBkg}>
                  <div className={styles.quizzesCompletedContainerCircle}><h1 className={styles.quizzesCircleTitle}>2/35</h1></div>
                </div>
              </div>
              {/*****HOME DASHBOARD AWARDS/BADGES*****/}
              <div className={styles.courseAwardsAndRecognitionContainer}>
                <div className={styles.courseAwardsContainer}>
                  <h2 className={styles.courseAwardsTitle}>Awards & Badges <Image className={styles.awardsIcon} src={AwardsIcon} alt="background image"></Image></h2>
                </div>
                {/*****HOME DASHBOARD COURSE ATTENDANCE*****/}
                <div className={styles.courseAttendanceContainer}>
                  <h2 className={styles.courseAttendanceTitle}>Class Attendance<Image className={styles.attendanceIcon} src={AttendanceIcon} alt="background image"></Image></h2>
                </div>
              </div>
              {/*****HOME DASHBOARD PROGRESS TREE*****/}
              <div className={styles.userProgressTree}></div>
              </div>
    </div>
  )
}