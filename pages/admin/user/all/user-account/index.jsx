import styles from './user-account.module.css'
import Link from 'next/link';
import Header from '../../../../../components/Navigation/Header/Header'
import InfoNavBar from '../../../../../components/Dashboard/InfoNav/InfoNav';
import DashboardNavBar from '../../../../../components/Dashboard/MainNav/AdminNav';
import DashboardTitle from '../../../../../components/Dashboard/DashboardTitle/DashboardTitle';
import Image from 'next/future/image';

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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Users"}></DashboardTitle>
      {/*****CONTENT CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
         {/*****USER ACCOUNT CONTAINER*****/}
        <div className={styles.userAccountContainer}>
          {/*****USER ACCOUNT INFORMATION*****/}
          <div className={styles.userAccountCard}>
            <p className={styles.userAccountTitle}>
              Account Information
            </p>
            <p className={styles.subtitle}>User details and membership status.</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.firstNameText}>First name</p>
            <p>Chris</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.lastNameText}>Last name</p>
            <p>Atkins</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.emailText}>Email</p>
            <p>atkinschris77@gmail.com</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.membershipStatusText}>Membership Status</p>
            <select>
              <option>Freemium</option>
              <option>Foundations</option>
              <option>Academy</option>
            </select>
            <div className={styles.lineBreak}></div>
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
          <div className={styles.userAccountAcademyCard}>
            <p className={styles.userAccountTitle}>
              Academy Controls
            </p>
            <p className={styles.subtitle}>User academy membership details.</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.firstNameText}>Registration</p>
            <select>
              <option disabled selected>Choose registration status</option>
              <option>Complete</option>
              <option>Incomplete</option>
            </select>
            <div className={styles.lineBreak}></div>
            <p className={styles.coachSelectionText}>Coaches</p>
            <select>
              <option disabled selected>Choose coaches</option>
              <option>Laura Mac & Coach 2</option>
              <option>Coach 3 & Coach 4</option>
              <option>Coach 4 & Coach 5</option>
              <option>Coach 6 & Coach 7</option>
            </select>
            <div className={styles.lineBreak}></div>
            <p className={styles.syllabusText}>Syllabus</p>
            <input type="text" placeholder="Paste syllabus link" />
            <div className={styles.lineBreak}></div>
            <p className={styles.membershipStatusText}>Membership Status</p>
            <select>
              <option>Freemium</option>
              <option>Foundations</option>
              <option>Academy</option>
            </select>
            <div className={styles.lineBreak}></div>
            <p className={styles.classAttendanceText}>Class attendance</p>
            <p>2/20</p>
            <div className={styles.lineBreak}></div>
            <p className={styles.selfTapeText}>Self tape</p>
            <Link href="/"><p className={styles.selfTapeLink}>Self-tape link</p></Link>
            <div className={styles.lineBreak}></div>
            <p className={styles.homeworkText}>Homework</p>
            <ul>
              <li className={styles.homeworkLink}><p>Assignment 1</p></li>
              <li className={styles.homeworkLink}><p>Assignment 2</p></li>
              <li className={styles.homeworkLink}><p>Assignment 3</p></li>
              <li className={styles.homeworkLink}><p>Assignment 4</p></li>
              <li className={styles.homeworkLink}><p>Assignment 5</p></li>
              <li className={styles.homeworkLink}><p>Assignment 6</p></li>
              <li className={styles.homeworkLink}><p>Assignment 7</p></li>
              <li className={styles.homeworkLink}><p>Assignment 8</p></li>
              <li className={styles.homeworkLink}><p>Assignment 9</p></li>
              <li className={styles.homeworkLink}><p>Assignment 10</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}