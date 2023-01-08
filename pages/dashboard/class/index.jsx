import { format } from "date-fns";
import Image from "next/future/image";
import Link from "next/link";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HomeworkForm } from "../../../components/Class/HomeworkForm/HomeworkForm";
import { SelfTapeForm } from "../../../components/Class/SelfTapeForm/SelfTapeForm";
import DashboardTitle from "../../../components/Dashboard/DashboardTitle/DashboardTitle";
import InfoNavBar from "../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../components/Dashboard/MainNav/MainNav";
import Header from "../../../components/Navigation/Header/Header";
import { Avatar } from "../../../components/shared/Avatar/Avatar";
import { Calendar } from "../../../components/shared/Calendar/Calendar";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/shared/Popover/Popover";
import {
  useGetMe,
  useSubmitHomeworkLink,
  useUpdateUser,
} from "../../../lib/api/user";
import { parseTimeToDate } from "../../../lib/helpers";
import CheckMarkIcon from "../../../public/icons/class_icons/checkmark.png";
import UploadIcon from "../../../public/icons/class_icons/upload.png";
import styles from "./class.module.css";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function ClassRoom() {
  const [isOpenSelfTapePopover, setIsOpenSelfTapePopover] = useState(false);
  const [isOpenHomeworkPopover, setIsOpenHomeworkPopover] = useState(false);
  const [classNotes, setClassNotes] = useState("");

  const { mutateAsync: updateUser } = useUpdateUser();
  const { mutateAsync: submitHomework } = useSubmitHomeworkLink();

  const { data } = useGetMe();
  const user = data?.user;
  const currentClass = data?.user?.class;

  const coachName = [
    currentClass?.coaches?.[0]?.firstName,
    currentClass?.coaches?.[0]?.lastName,
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (user?.classNotes) {
      setClassNotes(user?.classNotes);
    }
  }, [user?.classNotes]);

  const upcomingClassSchedule = useMemo(() => {
    const todayWeekDay = Number(format(new Date(), "i"));
    const upcomingClassWeekDay = [...weekDays, ...weekDays].filter(
      (_, index) => index + 1 >= todayWeekDay
    );

    const upcomingClassSchedule = currentClass?.schedule?.find(({ weekDay }) =>
      upcomingClassWeekDay.includes(weekDay)
    );

    return upcomingClassSchedule;
  }, [currentClass]);

  const startTime = upcomingClassSchedule?.startTime
    ? format(parseTimeToDate(upcomingClassSchedule?.startTime), "ha")
    : undefined;
  const endTime = upcomingClassSchedule?.endTime
    ? format(parseTimeToDate(upcomingClassSchedule?.endTime), "ha")
    : undefined;

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
      <DashboardTitle title={"Dashboard"} subTitle={"Class"} />
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****JOIN CLASS CONTAINER*****/}
        <div className={styles.joinClassContainer}>
          {/*****CALENDAR CONTAINER*****/}
          <div className={styles.calendarContainer}>
            <Calendar
              shouldMarkDay={(date) => {
                const weekday = format(date, "EEEE");

                return currentClass?.schedule
                  ?.map(({ weekDay }) => weekDay)
                  .includes(weekday);
              }}
              renderPopoverContent={(date) => {
                const weekDay = format(date, "EEEE");
                const weekDaySchedule = currentClass?.schedule?.find(
                  (v) => v.weekDay === weekDay
                );

                if (weekDaySchedule) {
                  const startTime = weekDaySchedule?.startTime
                    ? format(parseTimeToDate(weekDaySchedule?.startTime), "ha")
                    : undefined;
                  const endTime = weekDaySchedule?.endTime
                    ? format(parseTimeToDate(weekDaySchedule?.endTime), "ha")
                    : undefined;
                  return (
                    <div>
                      <div className={styles.calendarTimeTitle}>Time</div>
                      <div className={styles.calendarTimeContent}>
                        {startTime} - {endTime}{" "}
                      </div>
                    </div>
                  );
                }
              }}
            />
          </div>
          {/*****JOIN CLASS BUTTON*****/}
          <Link
            href={currentClass?.classMeetingLink ?? ""}
            className={styles.joinClassBtn}
            legacyBehavior={false}
          >
            Join Class
          </Link>
        </div>
        {/*****CLASS INFO CARDS CONTAINER*****/}
        <div className={styles.classCardGroup}>
          {/*****CLASS SCHEDULE CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>Upcoming Class</h1>
            <h2 className={styles.classTimeText}>
              {startTime} - {endTime}
            </h2>
            <h2 className={styles.coachNameTitle}>
              {upcomingClassSchedule?.weekDay}
            </h2>
          </div>
          {/*****HOMEWORK UPLOAD CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>Homework</h1>
            <Image
              className={styles.classCoachIcon}
              src={UploadIcon}
              alt="background image"
              height={48}
              width={48}
            />
            <Popover
              open={isOpenHomeworkPopover}
              onOpenChange={(open) => setIsOpenHomeworkPopover(open)}
            >
              <PopoverTrigger asChild>
                <button className={styles.uploadButton}>Upload Now</button>
              </PopoverTrigger>
              <PopoverAnchor />
              <PopoverContent>
                <HomeworkForm
                  onSubmit={async ({ homeworkLink }) => {
                    try {
                      await submitHomework({
                        homeworkLink,
                      });
                      setIsOpenHomeworkPopover(false);
                    } catch (err) {
                      toast.error(
                        "Error trying to submit the homework. Try again."
                      );
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          {/*****REGISTRATION STATUS CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>Registration</h1>
            <Image
              className={styles.classCoachIcon}
              src={CheckMarkIcon}
              alt="background image"
              height={48}
              width={48}
            />
            <h2 className={styles.coachNameTitle}>
              {user?.registrationStatus}
            </h2>
          </div>
          {/*****ASSIGNED COACH CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>Assigned Coach</h1>
            <Avatar fallbackName={coachName} />
            <h2 className={styles.coachNameTitle}>{coachName}</h2>
          </div>
        </div>
        {/*****ASSIGNMENTS & SYLLABUS CARD*****/}
        <div className={styles.classInformationContainer}>
          <h2 className={styles.classInformationTitle}>
            Assignments & Syllabus
          </h2>
          <div className={styles.classInformationContent}>
            {/*****SELF TAPE SUBMISSION BUTTON*****/}
            <div className={styles.selfTapeSubmissionContainer}>
              <p className={styles.selfTapeText}>Self Tape:</p>
              <Popover
                open={isOpenSelfTapePopover}
                onOpenChange={(open) => setIsOpenSelfTapePopover(open)}
              >
                <PopoverTrigger asChild>
                  <button className={styles.selfTapeSubmissionBtn}>
                    Submit self-tape
                  </button>
                </PopoverTrigger>
                <PopoverAnchor />
                <PopoverContent>
                  <SelfTapeForm
                    initialValues={{
                      selfTapeVideoLink:
                        currentClass?.studentProfile?.user?.selfTapeVideoLink,
                    }}
                    onSubmit={async ({ selfTapeVideoLink }) => {
                      try {
                        await updateUser({
                          selfTapeVideoLink,
                        });
                        setIsOpenSelfTapePopover(false);
                      } catch (err) {
                        toast.error("Error trying to update self tape video.");
                      }
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/*****VIEW SYLLABUS BUTTON*****/}
            <div className={styles.syllabusContainer}>
              <p className={styles.syllabusText}>Syllabus:</p>
              <Link
                href={currentClass?.syllabusLink ?? ""}
                className={styles.syllabusBtn}
                legacyBehavior={false}
              >
                View Syllabus
              </Link>
            </div>
            {/*****VIEW CURRENT ASSIGNMENT BUTTON*****/}
            <div className={styles.syllabusContainer}>
              <p className={styles.syllabusText}>Homework:</p>
              <Link href="/">
                <p className={styles.syllabusBtn}>View Current Assignment</p>
              </Link>
            </div>
            {/*****ASSIGNMENT NOTES TEXT AREA*****/}
            <div className={styles.syllabusContainer}>
              <p className={styles.syllabusText}>
                <label>Notes:</label>
              </p>
            </div>
            <form className={styles.assignmentNotes}>
              <textarea
                className={styles.notesTextArea}
                value={classNotes}
                onChange={(e) => setClassNotes(e.target.value)}
                onBlur={async () => {
                  try {
                    await updateUser({
                      classNotes,
                    });
                    toast.success("Class notes updated successfully");
                  } catch (err) {
                    toast.error("Error trying to update class notes.");
                  }
                }}
              ></textarea>
            </form>
          </div>
        </div>
        <div className={styles.courseLineBreak}></div>
        <div className={styles.courseLineBreak}></div>
      </div>
    </div>
  );
}
