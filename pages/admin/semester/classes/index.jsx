import styles from "./classes.module.css";
import Link from "next/link";
import Header from "../../../../components/Navigation/Header/Header";
import InfoNavBar from "../../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../../components/Dashboard/MainNav/AdminNav";
import DashboardTitle from "../../../../components/Dashboard/DashboardTitle/DashboardTitle";
import Image from "next/future/image";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function ClassRoom() {

  return (
    <div className={styles.dashboardContainer}>
      {/*****HEADER*****/}
      <Header
        links={links}
        navContainer="navContainerDashboard"
        navUl="navUlDashboard"
        logoStyling="logo2Dashboard"
      />
      {/*****USER DASHBOARD INFO NAV BAR*****/}
      <InfoNavBar />
      {/*****USER DASHBOARD MAIN NAV BAR*****/}
      <DashboardNavBar />
      {/*****USER DASHBOARD HEADER TITLE*****/}
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Class Management"} />
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        <div className={styles.courseNavContainer}>
          <Link href={{ pathname: "/admin/semester/classes/create" }}>
            <button className={styles.nextLessonBtn}>
              Create Class
            </button>
          </Link>
        </div>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userStatsOverviewContainer}>
            <p className={styles.studentStatsOverviewTitle}>Class #1 </p>
            <div className={styles.classCoachesTitle}>
              <p className={styles.coachesTitle}>
                Coaches:
              </p>
              <p className={styles.coachesNamesText}>
                Laura Mac & Coach 2
              </p>
            </div>
            <div className={styles.classCoachesTitle}>
              <p className={styles.coachesTitle}>
                Students:
              </p>
              <p className={styles.coachesNamesText}>
                9/16
              </p>
            </div>
            <Link href={{ pathname: "/admin/semester/classes/create" }}>
              <button className={styles.nextLessonBtn}>
                View Class
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
