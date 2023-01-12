import styles from "./courses.module.css";
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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Course Editor"} />
      {/*****CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****LESSONS CONTAINER*****/}
        <div className={styles.lessonsNavContainer}>
          <Link href={`/admin/course-editor/courses/editor`}>
            <button className={styles.createLessonBtn}>Create Lesson</button>
          </Link>
        </div>
          {/*****LESSON CARD CONTAINER*****/}
        <div className={styles.courseCardContainer}>
          {/*****LESSON CARD*****/}
          <div className={styles.lessonCard}>
            <p className={styles.lessonTitle}>Actor&#39;s Toolkit Overview</p>
            <p className={styles.lessonSummaryTitle}>Lesson summary</p>
            <p className={styles.lessonSummary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
            <Link href={`/admin/course-editor/courses/editor`}>
              <a className={styles.viewLessonBtn}>View Lesson</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
