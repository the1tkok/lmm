import styles from "./mainNav.module.css";
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
        <Link href={{ pathname: "/dashboard" }} passHref legacyBehavior>
          <li
            className={
              currentRoute === "/dashboard"
                ? styles.dashboardHomeButton
                : styles.dashboardHomeButtonActive
            }
          >
            <Image
              className={
                currentRoute === "/dashboard"
                  ? styles.dashboardSchoolIcon
                  : styles.dashboardSchoolIconActive
              }
              src={currentRoute === "/dashboard" ? SchoolIcon : SchoolDarkIcon}
              alt="background image"
            ></Image>
            <a
              className={
                currentRoute === "/dashboard"
                  ? styles.dashboardHomeText
                  : styles.dashboardHomeTextActive
              }
            >
              Home
            </a>
          </li>
        </Link>
        {user?.class && (
          <Link href={{ pathname: "/dashboard/class" }}>
            <li className={styles.dashboardClassesButton}>
              <Image
                className={styles.dashboardClassroomIcon}
                src={ClassroomIcon}
                alt="background image"
              ></Image>
              <a className={styles.dashboardClassesText}>Class</a>
            </li>
          </Link>
        )}
        <Link href={{ pathname: "/dashboard/course" }}>
          <li className={styles.dashboardCourseMaterialsButton}>
            <Image
              className={styles.dashboardBookIcon}
              src={BookIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardCourseText}>Course</a>
          </li>
        </Link>
        <Link href={"/"}>
          <li className={styles.dashboardCommunityButton}>
            <Image
              className={styles.dashboardCommunitiesIcon}
              src={CommunityIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardCommunityText}>Community</a>
          </li>
        </Link>
        <Link href={"/"}>
          <li className={styles.dashboardMessagesButton}>
            <Image
              className={styles.dashboardMessagesIcon}
              src={MessagesIcon}
              alt="background image"
            ></Image>
            <a className={styles.dashboardMessagesText}>Messages</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
