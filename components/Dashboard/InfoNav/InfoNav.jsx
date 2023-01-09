import styles from './InfoNav.module.css'
import Avatar from '../../../public/icons/dashboard_icons/avatar.png'
import Info from '../../../public/icons/dashboard_icons/info.svg'
import Settings from '../../../public/icons/dashboard_icons/settings.svg'
import Image from 'next/future/image'
import Link from 'next/link'

export default function InfoNavBar() {
  return (
      <div className={styles.infoSidebar}>
          <div className={styles.userAvatar}><Image className={styles.userAvatarIcon} src={Avatar} alt="background image" width={48} height={48}></Image></div>
          <Link href="/dashboard/settings"><div className={styles.userSettings}><Image className={styles.settingsIcon} src={Settings} alt="background image" width={24} height={24}></Image></div></Link>
          <div className={styles.startDashboardTutorial}><Image className={styles.dashboardTutorialIcon} src={Info} alt="background image" width={24} height={24}></Image></div>
        </div>
  )
}