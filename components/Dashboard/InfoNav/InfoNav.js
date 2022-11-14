import styles from './InfoNav.module.css'

export default function InfoNavBar() {
  return (
    <div>
      <div className={styles.infoSidebar}>
          <div className={styles.userProfilePic}><p className={styles.profilePicColor}>Profile Pic</p></div>
          <div className={styles.userSettings}></div>
          <div className={styles.startDashboardTutorial}></div>
        </div>
    </div>
  )
}