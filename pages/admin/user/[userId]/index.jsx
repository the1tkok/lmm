import capitalize from "capitalize";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardTitle from "../../../../components/Dashboard/DashboardTitle/DashboardTitle";
import InfoNavBar from "../../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../../components/Dashboard/MainNav/AdminNav";
import Header from "../../../../components/Navigation/Header/Header";
import {
  useEnrollUserToClass,
  useGetClasses,
  useUpdateClassById,
} from "../../../../lib/api/class";
import { useGetMetadata } from "../../../../lib/api/metadata";
import { useGetUserById, useUpdateUserById } from "../../../../lib/api/user";
import { parseTimeToDate } from "../../../../lib/helpers";
import styles from "./user-account.module.css";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function UserProfilePage() {
  const router = useRouter();
  const userId = router.query.userId;

  const { data } = useGetUserById({ userId }, { enabled: !!userId });
  const user = data?.user;

  const { data: metadata } = useGetMetadata();
  const { data: classesData } = useGetClasses();

  const { mutateAsync: updateUser } = useUpdateUserById();
  const { mutateAsync: updateClass } = useUpdateClassById();
  const { mutateAsync: enrollUser } = useEnrollUserToClass();

  const [syllabusLink, setSyllabusLink] = useState();

  const hasAcademyMembership = data?.user?.subscription?.name === "Academy";

  const classes = classesData?.classes;

  const handleUpdateUser = async (data) => {
    toast.promise(updateUser({ userId: user._id, data }), {
      error: "Error updating user.",
      loading: "Loading...",
      success: "User updated successfully.",
    });
  };

  const handleEnrollUser = async ({ classId }) => {
    toast.promise(enrollUser({ classId, data: { userId: user._id } }), {
      error: "Error changing class.",
      loading: "Loading...",
      success: "Class updated successfully.",
    });
  };

  const handleUpdateClass = async (data) => {
    toast.promise(updateClass({ classId: user?.class?._id, data }), {
      error: "Error updating class.",
      loading: "Loading...",
      success: "Class updated successfully.",
    });
  };

  useEffect(
    function updateSyllabusLink() {
      if (user?.class?.syllabusLink) {
        setSyllabusLink(user?.class?.syllabusLink);
      }
    },
    [user]
  );

  console.log("class", classes);

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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Users"} />
      {/*****CONTENT CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****USER ACCOUNT CONTAINER*****/}
        <div className={styles.userAccountContainer}>
          {/*****USER ACCOUNT INFORMATION*****/}
          <div className={styles.userAccountCard}>
            <p className={styles.userAccountTitle}>Account Information</p>
            <p className={styles.subtitle}>
              User details and membership status.
            </p>
            <div className={styles.lineBreak}></div>
            <p className={styles.firstNameText}>First name</p>
            <p>{capitalize(user?.firstName ?? "")}</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.lastNameText}>Last name</p>
            <p>{capitalize(user?.lastName ?? "")}</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.emailText}>Email</p>
            <p>{user?.email}</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.membershipStatusText}>Membership Status</p>
            <select
              value={user?.subscription?._id}
              onChange={(e) => {
                const value = e.target.value;
                if (!value) {
                  return;
                }

                handleUpdateUser({ subscriptionId: value });
              }}
            >
              <option>Select membership</option>
              {[...(metadata?.subscriptions ?? [])]
                .reverse()
                .map(({ name, _id }) => (
                  <option value={_id} key={_id}>
                    {name}
                  </option>
                ))}
            </select>
            <div className={styles.lineBreak}></div>
            {hasAcademyMembership && (
              <>
                <p className={styles.coachSelectionText}>Class</p>
                <select
                  value={user?.class?._id}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value) {
                      return;
                    }

                    handleEnrollUser({ classId: value });
                  }}
                >
                  <option>Choose class</option>
                  {classes?.map((currentClass) => {
                    const startTime = currentClass?.startTime
                      ? format(parseTimeToDate(currentClass?.startTime), "ha")
                      : undefined;
                    const endTime = currentClass?.endTime
                      ? format(parseTimeToDate(currentClass?.endTime), "ha")
                      : undefined;
                    const classDays = currentClass?.weekDays?.join(" & ");
                    return (
                      <option key={currentClass._id} value={currentClass._id}>
                        {currentClass?.coaches?.map((coach) => coach.firstName)}{" "}
                        - {classDays} at {startTime} - {endTime}
                      </option>
                    );
                  })}
                </select>
                <div className={styles.lineBreak}></div>
              </>
            )}
            <p className={styles.avgQuizScoreText}>Average quiz score</p>
            <p>B</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.avgQuizScoreText}>Quizzes completed</p>
            <p>6</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.avgQuizScoreText}>Awards and badges</p>
            <p>display badges here</p>
          </div>
          {/*****USER ACCOUNT INFORMATION*****/}
          {user?.class && (
            <div className={styles.userAccountAcademyCard}>
              <p className={styles.userAccountTitle}>Academy Controls</p>
              <p className={styles.subtitle}>
                User academy membership details.
              </p>
              <div className={styles.lineBreak}></div>
              <p className={styles.firstNameText}>Registration</p>
              <select
                value={user?.registrationStatus}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) {
                    return;
                  }

                  handleUpdateUser({ registrationStatus: value });
                }}
              >
                <option disabled selected>
                  Choose registration status
                </option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
              </select>
              <div className={styles.lineBreak}></div>
              <p className={styles.syllabusText}>Syllabus</p>
              <input
                type="text"
                value={syllabusLink}
                onChange={(e) => setSyllabusLink(e.target.value)}
                placeholder="Paste syllabus link"
                onBlur={() => handleUpdateClass({ syllabusLink })}
              />
              <div className={styles.lineBreak}></div>
              <p className={styles.classAttendanceText}>Class attendance</p>
              <p>2/20</p>
              <div className={styles.lineBreak}></div>
              <p className={styles.selfTapeText}>Self tape</p>
              <Link
                href={user?.selfTapeVideoLink ?? "#"}
                className={styles.selfTapeLink}
                legacyBehavior={false}
              >
                Self-tape link
              </Link>
              <div className={styles.lineBreak}></div>
              <p className={styles.homeworkText}>Homework</p>
              <ul className={styles.homeworkList}>
                {user?.homeworks?.map((homework, index) => (
                  <li className={styles.homeworkLink} key={homework._id}>
                    <a href={homework.link}>Assignment {index}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
