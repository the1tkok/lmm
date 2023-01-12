import styles from "./course-editor.module.css";
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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Course Editor"} />
      {/*****CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****COURSE SECTION CONTAINER*****/}
        <div className={styles.courseNavContainer}>
          <button className={styles.createSectionBtn}>Create Section</button>
        </div>
          {/*****COURSE SECTION CARD CONTAINER*****/}
        <div className={styles.coursesContainer}>
          <div className={styles.courseCardContainer}>
            <p className={styles.courseTitle}>The Actor&#39;s Toolkit</p>
            <p className={styles.courseSummaryTitle}>Section summary</p>
            <p className={styles.courseSummary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
            <Link href={`/admin/course-editor/courses`}>
              <a className={styles.viewLessonsBtn}>View Lessons</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
