import styles from './dashboard-title.module.css'

export default function DashboardTitle({title}) {
  return (
    <>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardHeaderTitle}>{`${title}`}</h1>
      </div>
    </>
  )
}