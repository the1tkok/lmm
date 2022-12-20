import styles from './class.module.css'
import Link from 'next/link';
import Header from '../../../components/Navigation/Header/Header'
import InfoNavBar from '../../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../../components/Dashboard/MainNav/MainNav';
import DashboardTitle from '../../../components/Dashboard/DashboardTitle/DashboardTitle';
import Image from 'next/future/image';
import LauraIcon from '../../../public/icons/dashboard_icons/avatar.png'
import CheckMarkIcon from '../../../public/icons/class_icons/checkmark.png'
import UploadIcon from '../../../public/icons/class_icons/upload.png' 

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

export default function ClassRoom() {
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
      <DashboardTitle title={"Dashboard"} subTitle={"Class"}></DashboardTitle>
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****JOIN CLASS CONTAINER*****/}
        <div className={styles.joinClassContainer}>
          {/*****CALENDAR CONTAINER*****/}
          <div className={styles.calendarContainer}>
            <p className={styles.calendarTitle}>
              Calendar goes here
            </p>
          </div>
          {/*****JOIN CLASS BUTTON*****/}
          <div className={styles.joinClassBtn}>
            <h2 className={styles.joinClassText}>
              Join Class
            </h2>
          </div>
        </div>
        {/*****CLASS INFO CARDS CONTAINER*****/}
        <div className={styles.classCardGroup}>
          {/*****CLASS SCHEDULE CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>
              Class Times
            </h1>
            <h2>9AM - 1PM</h2>
              <h2 className={styles.coachNameTitle}>
              Tuesday & Thursday
            </h2>
          </div>
          {/*****HOMEWORK UPLOAD CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>
              Homework
            </h1>
            <Image
                className={styles.classCoachIcon}
                src={UploadIcon}
                alt="background image"
                height={48}
                width={48}
              ></Image>{" "}
            <h2 className={styles.coachNameTitle}>
              Upload Now
            </h2>
          </div>
          {/*****REGISTRATION STATUS CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>
              Registration
            </h1>
            <Image
                className={styles.classCoachIcon}
                src={CheckMarkIcon}
                alt="background image"
                height={32}
                width={32}
              ></Image>{" "}
            <h2 className={styles.coachNameTitle}>
            Completed
            </h2>
          </div>
          {/*****ASSIGNED COACH CARD*****/}
          <div className={styles.classCardContainer}>
            <h1 className={styles.assignedCoachTitle}>
              Assigned Coach
            </h1>
            <Image
                className={styles.classCoachIcon}
                src={LauraIcon}
                alt="background image"
                height={64}
                width={64}
              ></Image>{" "}
            <h2 className={styles.coachNameTitle}>
              Laura Mac
            </h2>
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
              <p className={styles.selfTapeText}>Self Tape:</p><Link href="/"><p className={styles.selfTapeSubmissionBtn}>Submit self-tape</p></Link>
            </div>
            {/*****VIEW SYLLABUS BUTTON*****/}
            <div className={styles.syllabusContainer}>
              <p className={styles.syllabusText}>Syllabus:</p><Link href="/"><p className={styles.syllabusBtn}>View Syllabus</p></Link>
            </div>
            {/*****VIEW CURRENT ASSIGNMENT BUTTON*****/}
            <div className={styles.syllabusContainer}>
              <p className={styles.syllabusText}>Homework:</p><Link href="/"><p className={styles.syllabusBtn}>View Current Assignment</p></Link>
            </div>
            {/*****ASSIGNMENT NOTES TEXT AREA*****/}
            <div className={styles.syllabusContainer}>
              <p className={styles.syllabusText}><label>Notes:</label></p>
            </div>
            <form className={styles.assignmentNotes}>
              <textarea className={styles.notesTextArea}></textarea>
            </form>
          </div>
        </div>
        <div className={styles.courseLineBreak}></div>
        <div className={styles.courseLineBreak}></div>
      </div>
    </div>
  )
}