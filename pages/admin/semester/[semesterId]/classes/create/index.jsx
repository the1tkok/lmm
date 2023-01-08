import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { CreateClassForm } from "../../../../../../components/Class/CreateClassForm/CreateClassForm";
import DashboardTitle from "../../../../../../components/Dashboard/DashboardTitle/DashboardTitle";
import InfoNavBar from "../../../../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../../../../components/Dashboard/MainNav/AdminNav";
import Header from "../../../../../../components/Navigation/Header/Header";
import { useCreateClass } from "../../../../../../lib/api/class";
import styles from "./create.module.css";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function ClassRoom() {
  const { mutateAsync: createClass } = useCreateClass();

  const router = useRouter();
  const semesterId = router.query.semesterId;

  const handleCreateClass = async (data) => {
    try {
      await toast.promise(createClass({ data: { semesterId, ...data } }), {
        error: "There was an error creating the class",
        success: "Class created successfully",
        loading: "Loading...",
      });
      router.push(`/admin/semester/${semesterId}`);
    } catch (err) {}
  };

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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Class Management"} />
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userStatsOverviewContainer}>
            <p className={styles.studentStatsOverviewTitle}>Class Creation</p>
            <CreateClassForm onSubmit={handleCreateClass} />
          </div>
        </div>
      </div>
    </div>
  );
}
