import Image from "next/future/image";
import styles from "./lesson-content.module.css";
import AuditionIcon from "../../../public/icons/home_icons/audition.png";
import ExerciseIcon from "../../../public/icons/home_icons/exercises.png";
import CastingIcon from "../../../public/icons/home_icons/casting.png";

const learningOutcomesMap = {
  "audition-prep": { icon: AuditionIcon, label: "Audition Prep" },
  "acting-exercises": { icon: ExerciseIcon, label: "Acting Exercises" },
  "casting-breakthrough": { icon: CastingIcon, label: "Casting Breakthrough" },
};

const LessonContent = ({ title, text, video, learningOutcomes }) => {
  return (
    <div className={styles.lessonContentContainer}>
      {/*****COURSE MATERIALS CONTENT TITLE*****/}
      <h2 className={styles.lessonTitle}>{title}</h2>
      {/*****LEARNING OUTCOMES CARDS*****/}

      {learningOutcomes && learningOutcomes.length > 0 && (
        <div className={styles.learningOutcomeContainer}>
          <h3>Learning Outcomes:</h3>
          {learningOutcomes?.map((name) => {
            const data = learningOutcomesMap[name];
            if (!data) {
              return;
            }

            const { icon, label } = data;
            return (
              <div className={styles.learningOutcomeCard} key={label}>
                <Image src={icon} height={32} alt={label} />
                <p>{label}</p>
              </div>
            );
          })}
        </div>
      )}

      {/*****COURSE TEXT CONTENT*****/}
      <p className={styles.lessonContent}>{text}</p>
      {/*****COURSE VIDEO*****/}

      {video && <iframe className={styles.lessonVideo} src={video} />}
    </div>
  );
};

export { LessonContent };
