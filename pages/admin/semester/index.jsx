import styles from "./semester.module.css";
import Link from "next/link";
import Header from "../../../components/Navigation/Header/Header";
import InfoNavBar from "../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../components/Dashboard/MainNav/AdminNav";
import DashboardTitle from "../../../components/Dashboard/DashboardTitle/DashboardTitle";
import Image from "next/future/image";
import { useCreateSemester, useGetSemesters } from "../../../lib/api/semester";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "../../../components/shared/Popover/Popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { CreateSemesterForm } from "../../../components/Semester/CreateSemesterForm";
import { useState } from "react";
import toast from "react-hot-toast";
import { format, parseISO } from "date-fns";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function ClassRoom() {
  const { data } = useGetSemesters();
  const [isOpenCreateSemesterPopover, setIsOpenCreateSemesterPopover] =
    useState(false);
  const { mutateAsync: createSemester } = useCreateSemester();

  const handleCreateSemester = async (data) => {
    setIsOpenCreateSemesterPopover(false);
    toast.promise(createSemester({ data }), {
      error: "There was an error creating the semester",
      success: "Semester created successfully",
      loading: "Loading...",
    });
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
        <div className={styles.courseNavContainer}>
          <Popover
            open={isOpenCreateSemesterPopover}
            onOpenChange={(open) => setIsOpenCreateSemesterPopover(open)}
          >
            <PopoverTrigger asChild>
              <button className={styles.nextLessonBtn}>Create Semester</button>
            </PopoverTrigger>
            <PopoverAnchor />
            <PopoverContent>
              <CreateSemesterForm onSubmit={handleCreateSemester} />
            </PopoverContent>
          </Popover>
        </div>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          {data?.semesters?.map((semester) => (
            <div
              className={styles.userStatsOverviewContainer}
              key={semester._id}
            >
              <p className={styles.studentStatsOverviewTitle}>
                {semester.name}
              </p>
              <p className={styles.totalUsersText}>
                Start date: {format(parseISO(semester.createdAt), "PPP")}
              </p>

              <p className={styles.totalUsersText}>
                End date:{" "}
                {semester.endedAt
                  ? format(parseISO(semester.endedAt), "PPP")
                  : "-"}
              </p>

              <p className={styles.totalUsersText}>
                Total classes: {semester.classes.length}
              </p>
              <Link href={`/admin/semester/${semester._id}`}>
                <a className={styles.viewClassesBtn}>View Classes</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
