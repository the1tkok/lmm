import styles from "./admin-nav.module.css";
import Image from "next/future/image";
import Link from "next/link";
import SchoolIcon from "../../../public/icons/dashboard_icons/school.svg";
import SchoolDarkIcon from "../../../public/icons/dashboard_icons/schoolDark.svg";
import ClassroomIcon from "../../../public/icons/dashboard_icons/classroom.svg";
import MessagesIcon from "../../../public/icons/dashboard_icons/messages2.svg";
import BookIcon from "../../../public/icons/dashboard_icons/book.svg";
import CommunityIcon from "../../../public/icons/dashboard_icons/community2.svg";
import { useGetMe } from "../../../lib/api/user";
import { useRouter } from "next/router";

export default function DashboardNavBar() {
  const { data } = useGetMe();
  const user = data?.user;

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.userDashboardNavBar}>
      <p className={styles.userGreeting}>Welcome back, {user?.firstName}!</p>
      <p className={styles.lastLoggedIn}>Last logged in: 2 days ago</p>
      <ul className={styles.dashboardNavItems}>
        <Link href={{ pathname: "/admin" }} passHref legacyBehavior>
          <li
            className={
              currentRoute === "/admin"
                ? styles.dashboardHomeButton
                : styles.dashboardHomeButtonActive
            }
          >
            <Image
              className={
                currentRoute === "/admin"
                  ? styles.dashboardSchoolIcon
                  : styles.dashboardSchoolIconActive
              }
              src={currentRoute === "/admin" ? SchoolIcon : SchoolDarkIcon}
              alt="background image"
            ></Image>
            <a
              className={
                currentRoute === "/admin"
                  ? styles.dashboardHomeText
                  : styles.dashboardHomeTextActive
              }
            >
              User Overview
            </a>
          </li>
        </Link>
        <Link href={{ pathname: "/admin/user" }}>
          <li className={styles.dashboardClassesButton}>
            <Image
              className={styles.dashboardClassroomIcon}
              src={ClassroomIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardClassesText}>User Management</a>
          </li>
        </Link>
        <Link href={{ pathname: "./admin/semester" }}>
          <li className={styles.dashboardClassesButton}>
            <Image
              className={styles.dashboardClassroomIcon}
              src={ClassroomIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardClassesText}>Class Management</a>
          </li>
        </Link>
        <Link href={{ pathname: "/admin/homework" }}>
          <li className={styles.dashboardCourseMaterialsButton}>
            <Image
              className={styles.dashboardBookIcon}
              src={BookIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardCourseText}>Homework</a>
          </li>
        </Link>
        <Link href={"/admin/course-editor"}>
          <li className={styles.dashboardCommunityButton}>
            <Image
              className={styles.dashboardCommunitiesIcon}
              src={CommunityIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardCommunityText}>Course Editor</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
