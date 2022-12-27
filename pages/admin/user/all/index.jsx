import styles from './users.module.css'
import Link from 'next/link';
import Header from '../../../../components/Navigation/Header/Header'
import InfoNavBar from '../../../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../../../components/Dashboard/MainNav/AdminNav';
import DashboardTitle from '../../../../components/Dashboard/DashboardTitle/DashboardTitle';

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

const activeBtn = [
  {useActiveBtn: true}
]

export default function AllUsers() {
  return (
    <div className={styles.dashboardContainer}>
      {/*****HEADER*****/}
      <Header 
      links={links}
      navContainer="navContainerDashboard"
      navUl="navUlDashboard"
      logoStyling="logo2Dashboard">
      </Header>
      {/*****USER DASHBOARD INFO NAV BAR*****/}
      <InfoNavBar></InfoNavBar>
      {/*****USER DASHBOARD MAIN NAV BAR*****/}
      <DashboardNavBar></DashboardNavBar>
      {/*****USER DASHBOARD HEADER TITLE*****/}
      <DashboardTitle title={"Coach Dashboard"} subTitle={"All Users"}></DashboardTitle>
      {/*****ALL USERS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****ALL USERS LIST*****/}
        <h1>All Users</h1>
        <table className={styles.allUsersTable} border="1">
          <tbody>
            <tr>
              <th>id</th>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Membership Status</th>
              <th>Registration date</th>
              <th>Profile</th>
            </tr>
            <tr>
              <td>1</td>
              <td>atkinschris77@gmail.com</td>
              <td>Chris</td>
              <td>Atkins</td>
              <td>Academy</td>
              <td>12/25/2022</td>
              <td className={styles.viewProfileLink}><Link href="/admin/user">View profile</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}