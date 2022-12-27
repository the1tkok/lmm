import styles from './all-users.module.css'
import Link from 'next/link';
import Header from '../../../../components/Navigation/Header/Header'
import InfoNavBar from '../../../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../../../components/Dashboard/MainNav/AdminNav';
import DashboardTitle from '../../../../components/Dashboard/DashboardTitle/DashboardTitle';
import Image from 'next/future/image';
import { useRouter } from 'next/router';

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

export default function UserID() {

  const router = useRouter();
  const user = router.query.uid;

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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"User Overview"}></DashboardTitle>
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <h1>User {user}</h1>
      </div>
    </div>
  )
}