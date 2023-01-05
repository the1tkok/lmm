import styles from "./create.module.css";
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
      <DashboardTitle title={"Coach Dashboard"} subTitle={"Class Management"} />
      {/*****CLASS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        {/*****USER STATS OVERVIEW CONTAINER*****/}
        <div className={styles.userOverviewContainer}>
          {/*****USER STATS*****/}
          <div className={styles.userStatsOverviewContainer}>
            <form>
              <p className={styles.studentStatsOverviewTitle}>Class Creation</p>
              {/*****COACH SELECTION*****/}
              <div className={styles.coachSelectionContainer}>
                <p className={styles.legendTitle}>Coaches:</p>
                <div>
                  <input type="checkbox" id="coaches" name="coaches"/>
                  <label for="coaches">Laura</label>
                </div>
                <div>
                  <input type="checkbox" id="coaches" name="coaches"/>
                  <label for="coaches">Coach 2</label>
                </div>
                <div>
                  <input type="checkbox" id="coaches" name="coaches"/>
                  <label for="coaches">Coach 3</label>
                </div>
              </div>
              {/*****CLASS TIME SELECTION*****/}
              <div className={styles.timeSelectionContainer}>
                <div>
                  <p className={styles.legendTitle}>Class Start Time:</p>
                  <input type="time"/>
                </div>
                <div>
                  <p className={styles.legendTitle}>Class End Time:</p>
                  <input type="time"/>
                </div>
              </div>
              {/*****CLASS DAY SELECTION*****/}
              <div className={styles.daySelectionContainer}>
              <p className={styles.legendTitle}>Days:</p>
                <div>
                  <input type="checkbox" id="Sunday" name="Sunday"/>
                  <label for="Sunday">Sunday</label>
                </div>
                <div>
                  <input type="checkbox" id="Monday" name="Monday"/>
                  <label for="Monday">Monday</label>
                </div>
                <div>
                  <input type="checkbox" id="Tuesday" name="Tuesday"/>
                  <label for="Tuesday">Tuesday</label>
                </div>
                <div>
                  <input type="checkbox" id="Wednesday" name="Wednesday"/>
                  <label for="Wednesday">Wednesday</label>
                </div>
                <div>
                  <input type="checkbox" id="Thursday" name="Thursday"/>
                  <label for="Thursday">Thursday</label>
                </div>
                <div>
                  <input type="checkbox" id="Friday" name="Friday"/>
                  <label for="Friday">Friday</label>
                </div>
                <div>
                  <input type="checkbox" id="Saturday" name="Saturday"/>
                  <label for="Saturday">Saturday</label>
                </div>
              </div>
              {/*****CLASS CREATION & DELETION NAV BUTTONS*****/}
              <div className={styles.createClassNav}>
                <button className={styles.saveClassBtn}>Save Class</button>
                <button className={styles.deleteClassBtn}>Delete Class</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
