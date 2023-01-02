import styles from "./semester.module.css";
import Link from "next/link";
import Header from "../../../components/Navigation/Header/Header";
import InfoNavBar from "../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../components/Dashboard/MainNav/AdminNav";
import DashboardTitle from "../../../components/Dashboard/DashboardTitle/DashboardTitle";
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
          <button className={styles.nextLessonBtn}>
            Create Semester
          </button>
        </div>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userStatsOverviewContainer}>
            <p className={styles.studentStatsOverviewTitle}>Semester #1 </p>
            <p className={styles.totalUsersText}>
              Start date: January 30th, 2023
            </p>
            <p className={styles.totalUsersText}>
              End date: March 15th, 2023
            </p>
            <p className={styles.totalUsersText}>
              Total classes: 3
            </p>
            <Link href="./semester/classes">
            <button className={styles.viewClassesBtn}>
              View Classes
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
