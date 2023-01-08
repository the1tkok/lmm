import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { CreateClassForm } from "../../../../../../components/Class/CreateClassForm/CreateClassForm";
import DashboardTitle from "../../../../../../components/Dashboard/DashboardTitle/DashboardTitle";
import InfoNavBar from "../../../../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../../../../components/Dashboard/MainNav/AdminNav";
import Header from "../../../../../../components/Navigation/Header/Header";
import {
  useDeleteClass,
  useGetClasses,
  useUpdateClassById,
} from "../../../../../../lib/api/class";
import styles from "./edit.module.css";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function ClassRoom() {
  const router = useRouter();
  const classId = router.query.classId;
  const semesterId = router.query.semesterId;

  const { mutateAsync: updateClass } = useUpdateClassById();
  const { mutateAsync: deleteClass } = useDeleteClass();

  const { data } = useGetClasses();
  const currentClass = data?.classes?.find(
    (currentClass) => currentClass._id === classId
  );
  console.log("currentclass", currentClass);

  const handleEditClass = async (data) => {
    toast.promise(updateClass({ data, classId }), {
      error: "There was an error editing the class",
      success: "Class edited successfully",
      loading: "Loading...",
    });
  };

  const handleDeleteClass = async () => {
    try {
      await toast.promise(deleteClass({ classId }), {
        error: "There was an error deleting the class",
        success: "Class deleted successfully",
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
            <CreateClassForm
              onSubmit={handleEditClass}
              onDelete={handleDeleteClass}
              initialData={{
                coaches: currentClass?.coaches?.map((coach) => coach._id),
                schedule: currentClass?.schedule,
                title: currentClass?.title,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
