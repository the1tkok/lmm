import styles from './mainNav.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import SchoolIcon from '../../../public/icons/dashboard_icons/school.png'
import ClassroomIcon from '../../../public/icons/dashboard_icons/classroom.png'
import MessagesIcon from '../../../public/icons/dashboard_icons/messages.png'
import BookIcon from '../../../public/icons/dashboard_icons/book.png'
import CommunityIcon from '../../../public/icons/dashboard_icons/community.png'

export default function DashboardNavBar() {
  return (
    <div className={styles.userDashboardNavBar}>
    <p className={styles.userGreeting}>Welcome back, Laura!</p>
    <p className={styles.lastLoggedIn}>Last logged in: 2 days ago</p>
    <ul className={styles.dashboardNavItems}>
      <li className={styles.dashboardHomeButton}><Image className={styles.dashboardSchoolIcon} src={SchoolIcon} alt="background image"></Image><Link href={'/'}><a className={styles.dashboardHomeText}>Home</a></Link></li>
      <li className={styles.dashboardClassesButton}><Image className={styles.dashboardClassroomIcon} src={ClassroomIcon} alt="background image"></Image><Link href={'/'}><a className={styles.dashboardHomeText}>Classes</a></Link></li>
      <li className={styles.dashboardCourseMaterialsButton}><Image className={styles.dashboardBookIcon} src={BookIcon} alt="background image"></Image><Link href={'/'}><a className={styles.dashboardHomeText}>Course Materials</a></Link></li>
      <li className={styles.dashboardCommunityButton}><Image className={styles.dashboardCommunitiesIcon} src={CommunityIcon} alt="background image"></Image><Link href={'/'}><a className={styles.dashboardHomeText}>Community</a></Link></li>
      <li className={styles.dashboardMessagesButton}><Image className={styles.dashboardMessagesIcon} src={MessagesIcon} alt="background image"></Image><Link href={'/'}><a className={styles.dashboardHomeText}>Messages</a></Link></li>
    </ul>
  </div>
  )
}