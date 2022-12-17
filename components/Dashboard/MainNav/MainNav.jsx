import styles from "./mainNav.module.css";
import Image from "next/future/image";
import Link from "next/link";
import SchoolIcon from "../../../public/icons/dashboard_icons/school.png";
import SchoolDarkIcon from '../../../public/icons/dashboard_icons/schoolDark.png'
import ClassroomIcon from "../../../public/icons/dashboard_icons/classroom.png";
import MessagesIcon from "../../../public/icons/dashboard_icons/messages.png";
import BookIcon from "../../../public/icons/dashboard_icons/book.png";
import CommunityIcon from "../../../public/icons/dashboard_icons/community.png";
import { useGetMe } from "../../../lib/api/user";
import { useRouter } from "next/router";

export default function DashboardNavBar() {
  const { data } = useGetMe();
  const router = useRouter();
  const currentRoute = router.pathname;
  
  return (
    <div className={styles.userDashboardNavBar}>
      <p className={styles.userGreeting}>Welcome back, {data?.firstName}!</p>
      <p className={styles.lastLoggedIn}>Last logged in: 2 days ago</p>
      <ul className={styles.dashboardNavItems}>
        <li className={currentRoute === '/dashboard' ? styles.dashboardHomeButton : styles.dashboardHomeButtonActive}>
          <Image
            className={currentRoute === '/dashboard' ? styles.dashboardSchoolIcon : styles.dashboardSchoolIconActive}
            src={currentRoute === '/dashboard' ? SchoolIcon : SchoolDarkIcon}
            alt="background image"
          ></Image>
          <Link href={{pathname: '/dashboard'}} passHref legacyBehavior>
            <a className={currentRoute === '/dashboard' ? styles.dashboardHomeText : styles.dashboardHomeTextActive}>Home</a>
          </Link>
        </li>
        <li className={styles.dashboardClassesButton}>
          <Image
            className={styles.dashboardClassroomIcon}
            src={ClassroomIcon}
            alt="background image"
          ></Image>
          <Link href={"/"}>
            <a className={styles.dashboardClassesText}>Classes</a>
          </Link>
        </li>
        <li className={styles.dashboardCourseMaterialsButton}>
          <Image
            className={styles.dashboardBookIcon}
            src={BookIcon}
            alt="background image"
          ></Image>
          <Link href={{pathname: '/dashboard/course'}}>
            <a className={styles.dashboardCourseText}>Course Materials</a>
          </Link>
        </li>
        <li className={styles.dashboardCommunityButton}>
          <Image
            className={styles.dashboardCommunitiesIcon}
            src={CommunityIcon}
            alt="background image"
          ></Image>
          <Link href={"/"}>
            <a className={styles.dashboardCommunityText}>Community</a>
          </Link>
        </li>
        <li className={styles.dashboardMessagesButton}>
          <Image
            className={styles.dashboardMessagesIcon}
            src={MessagesIcon}
            alt="background image"
          ></Image>
          <Link href={"/"}>
            <a className={styles.dashboardMessagesText}>Messages</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
