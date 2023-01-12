import styles from "./editor.module.css";
import Link from "next/link";
import Header from "../../../../../components/Navigation/Header/Header";
import InfoNavBar from "../../../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../../../components/Dashboard/MainNav/AdminNav";
import DashboardTitle from "../../../../../components/Dashboard/DashboardTitle/DashboardTitle";
import Image from "next/future/image";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

export default function ClassRoom() {
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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Course Editor"} />
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.courseEditorContainer}>
            <div className={styles.lessonTitle}>
              <label>Lesson Title </label>
              <input type="text"/>
            </div>
            <div className={styles.toggleLearningOutcomes}>
              <label>Learning Outcomes</label>
              <select className={styles.learningOutcomesSelector}>
                <option selected disabled>Toggle Learning Outcomes</option>
                <option>Disabled</option>
                <option>Enabled</option>
              </select>
            </div>
            <div className={styles.lessonBody}>
              <label>Course Body </label>
              <textarea rows="20" cols="80"/>
              <div className={styles.difficultySelector}>
                <div className={styles.courseDifficulty}>
                  <input type="checkbox"/>
                  <label>Beginner</label>
                </div>
                <div className={styles.courseDifficulty}>
                  <input type="checkbox"/>
                  <label>Intermediate</label>
                </div>
                <div className={styles.courseDifficulty}>
                  <input type="checkbox"/>
                  <label>Advanced</label>
                </div>
              </div>
            </div>
            <div className={styles.lessonVideoLink}>
              <label>Video </label>
              <input type="text" placeholder="Insert link to lesson video"/>
            </div>
            <div className={styles.additionalResourceContainer}>
              <label>Additional resources </label>
              <div className={styles.additionalResourceLinks}>
                <input type="text" placeholder="Insert title"/>
                <input type="text" placeholder="Insert link"/>
              </div>
              <div className={styles.additionalResourceLinks}>
                <input type="text" placeholder="Insert title"/>
                <input type="text" placeholder="Insert link"/>
              </div>
              <div className={styles.additionalResourceLinks}>
                <input type="text" placeholder="Insert title"/>
                <input type="text" placeholder="Insert link"/>
              </div>
              <div className={styles.additionalResourceLinks}>
                <input type="text" placeholder="Insert title"/>
                <input type="text" placeholder="Insert link"/>
              </div>
              <div className={styles.difficultySelector}>
                <div className={styles.courseDifficulty}>
                  <input type="checkbox"/>
                  <label>Beginner</label>
                </div>
                <div className={styles.courseDifficulty}>
                  <input type="checkbox"/>
                  <label>Intermediate</label>
                </div>
                <div className={styles.courseDifficulty}>
                  <input type="checkbox"/>
                  <label>Advanced</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
