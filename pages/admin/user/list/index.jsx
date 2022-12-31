import styles from "./users.module.css";
import Link from "next/link";
import Header from "../../../../components/Navigation/Header/Header";
import InfoNavBar from "../../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../../components/Dashboard/MainNav/AdminNav";
import DashboardTitle from "../../../../components/Dashboard/DashboardTitle/DashboardTitle";
import { useGetUsers } from "../../../../lib/api/user";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function AllUsers() {
  const { data } = useGetUsers();

  const router = useRouter();
  const subscriptionQuery = router.query.subscription;
  const users = data?.users?.filter((user) => {
    if (!subscriptionQuery) {
      return true;
    }

    return (
      subscriptionQuery?.toLowerCase() ===
      user?.subscription?.name?.toLowerCase()
    );
  });

  return (
    <div className={styles.dashboardContainer}>
      {/*****HEADER*****/}
      <Header
        links={links}
        navContainer="navContainerDashboard"
        navUl="navUlDashboard"
        logoStyling="logo2Dashboard"
      />
      {/*****USER DASHBOARD INFO NAV BAR*****/}
      <InfoNavBar />
      {/*****USER DASHBOARD MAIN NAV BAR*****/}
      <DashboardNavBar />
      {/*****USER DASHBOARD HEADER TITLE*****/}
      <DashboardTitle title={"Coach Dashboard"} subTitle={"All Users"} />
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
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user?.subscription?.name ?? "N/A"}</td>
                <td>
                  {user.createdAt && format(parseISO(user.createdAt), "P")}
                </td>
                <td className={styles.viewProfileLink}>
                  <Link href={`/admin/user/${user._id}`}>View profile</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
