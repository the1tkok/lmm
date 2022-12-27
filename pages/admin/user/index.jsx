import styles from './users.module.css'
import Link from 'next/link';
import Header from '../../../components/Navigation/Header/Header'
import InfoNavBar from '../../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../../components/Dashboard/MainNav/AdminNav';
import DashboardTitle from '../../../components/Dashboard/DashboardTitle/DashboardTitle';
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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Users"}></DashboardTitle>
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
         {/*****STUDENTS OVERVIEW CONTAINER*****/}
      <Link href="/admin/user/all">
        <div className={styles.studentsOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userTypeCard}>
            <p className={styles.studentStatsOverviewTitle}>
              All Users
            </p>
          </div>
        </div>
      </Link>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
      <Link href="/admin/user/freemium">
        <div className={styles.userTypeContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userTypeCard}>
            <p className={styles.studentStatsOverviewTitle}>
              Freemium
            </p>
          </div>
        </div>
      </Link>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
      <Link href="/admin/user/foundations">
        <div className={styles.courseOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userTypeCard}>
            <p className={styles.studentStatsOverviewTitle}>
              Foundations
            </p>
          </div>
        </div>
      </Link>
        {/*****STUDENTS OVERVIEW CONTAINER*****/}
      <Link href="/admin/user/academy">
        <div className={styles.studentsOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userTypeCard}>
            <p className={styles.studentStatsOverviewTitle}>
              Academy
            </p>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}