import Image from "next/future/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AdditionalResources } from "../../../components/Course/AdditionalResources/AdditionalResources";
import { LessonContent } from "../../../components/Course/LessonContent/LessonContent";
import { TableOfContent } from "../../../components/Course/TableOfContent/TableOfContent";
import DashboardTitle from "../../../components/Dashboard/DashboardTitle/DashboardTitle";
import InfoNavBar from "../../../components/Dashboard/InfoNav/InfoNav";
import DashboardNavBar from "../../../components/Dashboard/MainNav/MainNav";
import Header from "../../../components/Navigation/Header/Header";
import { useGetCourses } from "../../../lib/api/course";
import LauraIcon from "../../../public/icons/dashboard_icons/avatar.png";
import styles from "./course.module.css";

const links = [
  { label: "One on One Coaching", href: "" },
  { label: "About", href: "" },
  { label: "Blog", href: "" },
  { label: "Log out", href: "/api/logout" },
  { label: "Upgrade plan", href: "", useButtonStyle: true },
];

const activeBtn = [{ useActiveBtn: true }];

export default function Course() {
  const router = useRouter();
  const sectionPage = router.query.section ? Number(router.query.section) : 0;
  const lessonPage = router.query.lesson ? Number(router.query.lesson) : 0;

  const { data } = useGetCourses();

  const course = data?.courses?.[0];

  const currentSection = course?.sections[sectionPage];
  const currentLesson = currentSection?.lessons[lessonPage];
  const sectionLessonsCount = currentSection?.lessons?.length;
  const sectionCount = course?.sections?.length;
  const currentLessonPage = lessonPage + 1;
  const currentSectionPage = sectionPage + 1;

  const setPage = (query) => router.push({ query });

  const onNext = () => {
    console.log("sectionLessonsCount", currentLessonPage, sectionLessonsCount);
    if (currentLessonPage < sectionLessonsCount) {
      setPage({ section: sectionPage, lesson: lessonPage + 1 });
      return;
    }

    if (currentSectionPage < sectionCount) {
      setPage({ lesson: 0, section: sectionPage + 1 });
      return;
    }

    // TODO: What should we do when there aren't more pages?
  };

  const onPrevious = () => {
    if (currentLessonPage > 1 && currentLessonPage <= sectionLessonsCount) {
      setPage({ section: sectionPage, lesson: lessonPage - 1 });
      return;
    }

    const newSectionLessons = course?.sections[sectionPage - 1]?.lessons;
    if (newSectionLessons) {
      setPage({
        section: sectionPage - 1,
        lesson: newSectionLessons.length - 1,
      });
      return;
    }
  };

  const learningOutcomes =
    currentSection?.learningOutcomes && lessonPage === 0
      ? currentSection?.learningOutcomes
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
      <DashboardNavBar activeBtn={activeBtn} />
      {/*****USER DASHBOARD HEADER TITLE*****/}
      <DashboardTitle title={"Dashboard"} subTitle={"Course"} />
      {/*****COURSE MATERIALS CONTAINER*****/}
      <div className={styles.dashboardMainContainer}>
        <div className={styles.content}>
          <LessonContent
            {...currentLesson}
            learningOutcomes={learningOutcomes}
          />
          {/*****COURSE NAVIGATION BUTTONS*****/}

          <div className={styles.courseNavContainer}>
            <button className={styles.nextLessonBtn} onClick={onPrevious}>
              Previous Lesson
            </button>
            <button className={styles.nextLessonBtn} onClick={onNext}>
              Next Lesson
            </button>
          </div>
          {/*****COURSE CONTRIBUTORS*****/}

          <div className={styles.contributors}>
            <h3>Contributors:</h3>
            <Image src={LauraIcon} alt="Laura Mac" />
          </div>
          {/*****COURSE ADDITIONAL RESOURCES*****/}

          <AdditionalResources data={currentLesson?.additionalResources} />
        </div>
        <TableOfContent
          lessons={currentSection?.lessons}
          activeLessonId={currentLesson?._id}
        />
      </div>
    </div>
  );
}
