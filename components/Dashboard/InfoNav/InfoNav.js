import styles from './InfoNav.module.css'
import Avatar from '../../../public/icons/dashboard_icons/avatar.png'
import Info from '../../../public/icons/dashboard_icons/info.png'
import Settings from '../../../public/icons/dashboard_icons/settings.png'
import Image from 'next/future/image'

export default function InfoNavBar() {
  return (
      <div className={styles.infoSidebar}>
          <div className={styles.userAvatar}><Image className={styles.userAvatarIcon} src={Avatar} alt="background image" width={48} height={48}></Image></div>
          <div className={styles.userSettings}><Image className={styles.settingsIcon} src={Settings} alt="background image"></Image></div>
          <div className={styles.startDashboardTutorial}><Image className={styles.dashboardTutorialIcon} src={Info} alt="background image"></Image></div>
        </div>
  )
}