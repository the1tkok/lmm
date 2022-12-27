import styles from './admin.module.css'
import Link from 'next/link';
import Header from '../../components/Navigation/Header/Header'
import InfoNavBar from '../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../components/Dashboard/MainNav/AdminNav';
import DashboardTitle from '../../components/Dashboard/DashboardTitle/DashboardTitle';
import Image from 'next/future/image';

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

export default function ClassRoom() {
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
      <DashboardNavBar></DashboardNavBar>
      {/*****USER DASHBOARD HEADER TITLE*****/}
      <DashboardTitle title={"Coach Dashboard"} subTitle={"User Overview"}></DashboardTitle>
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userStatsOverviewContainer}>
            <p className={styles.studentStatsOverviewTitle}>
              User Statistics
            </p>
            <p className={styles.totalUsersText}>
              Total members: 107
            </p>
            <p className={styles.totalUsersText}>
              Freemium members: 60
            </p>
            <p className={styles.totalUsersText}>
              Foundation members: 40
            </p>
            <p className={styles.totalUsersText}>
              Academy members: 7
            </p>
          </div>
        </div>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.courseOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userCourseStatsContainer}>
            <p className={styles.studentStatsOverviewTitle}>
              Course Statistics
            </p>
            <p className={styles.totalUsersText}>
              Courses completed: 3
            </p>
            <p className={styles.totalUsersText}>
              Courses in progress: 85
            </p>
          </div>
        </div>
        {/*****STUDENTS OVERVIEW CONTAINER*****/}
        <div className={styles.studentsOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.studentsStatsContainer}>
            <p className={styles.studentStatsOverviewTitle}>
              Coach Statistics
            </p>
            <p className={styles.totalUsersText}>
              Your current students: 6
            </p>
            <p className={styles.totalUsersText}>
              Total students taught: 16
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}