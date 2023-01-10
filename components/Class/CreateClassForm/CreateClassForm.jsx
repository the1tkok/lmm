import { useForm } from "react-hook-form";
import { useGetUsers } from "../../../lib/api/user";
import styles from "./create-class-form.module.css";
import { getFullName } from "../../../lib/helpers";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CreateClassForm = ({ onSubmit, onDelete, onEndClass, initialData }) => {
  const initialDataWithSchedule = initialData
    ? {
        ...initialData,
        schedule: weekDays.map((weekDay) => {
          const currentValue = initialData.schedule?.find(
            (v) => v.weekDay === weekDay
          );
          return currentValue ?? { weekDay: false };
        }),
      }
    : undefined;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ values: initialDataWithSchedule });

  const { data } = useGetUsers({ role: "coach" });
  const coaches = data?.users ?? [];

  const schedule = watch("schedule") ?? [];
  const isDayChecked = (day) => {
    return schedule.map(({ weekDay }) => weekDay).includes(day);
  };

  const localOnSubmit = (data) => {
    onSubmit({
      ...data,
      schedule: data.schedule.filter(({ weekDay }) => weekDay),
    });
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit(localOnSubmit)}
    >
      {/*****TITLE*****/}
      <div className={styles.coachSelectionContainer}>
        <p className={styles.legendTitle}>Title:</p>
        <input {...register("title")} id="title" className={styles.input} />
      </div>
      {/*****COACH SELECTION*****/}
      <div className={styles.coachSelectionContainer}>
        <p className={styles.legendTitle}>Coaches:</p>
        {coaches?.map((coach) => (
          <div key={coach._id}>
            <input
              {...register("coaches")}
              type="checkbox"
              id="coaches"
              value={coach._id}
            />
            <label for="coaches">{getFullName(coach)}</label>
          </div>
        ))}
      </div>

      {/*****CLASS DAY SELECTION*****/}
      <div className={styles.daySelectionContainer}>
        <p className={styles.legendTitle}>Days:</p>
        {weekDays.map((weekDay, index) => {
          const isChecked = isDayChecked(weekDay);
          return (
            <div className={styles.weekDayContainer} key={weekDay}>
              <div>
                <input
                  {...register(`schedule.${index}.weekDay`)}
                  type="checkbox"
                  id={weekDay}
                  value={weekDay}
                  checked={isChecked}
                />
                <label for={weekDay}>{weekDay}</label>
              </div>
              {/*****CLASS TIME SELECTION*****/}
              {isChecked && (
                <div className={styles.timeSelectionContainer}>
                  <div>
                    <label className={styles.legendTitle}>Start Time:</label>
                    <input
                      {...register(`schedule.${index}.startTime`, {
                        required: "Required",
                      })}
                      type="time"
                    />
                  </div>
                  <div>
                    <label className={styles.legendTitle}>End Time:</label>
                    <input
                      {...register(`schedule.${index}.endTime`, {
                        required: "Required",
                      })}
                      type="time"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/*****CLASS CREATION & DELETION NAV BUTTONS*****/}
      <div className={styles.createClassNav}>
        <button className={styles.saveClassBtn}>Save Class</button>
        {onDelete && (
          <button
            onClick={onDelete}
            type="button"
            className={styles.deleteClassBtn}
          >
            Delete Class
          </button>
        )}
        {onEndClass && (
          <button
            onClick={onEndClass}
            type="button"
            className={styles.deleteClassBtn}
          >
            End Class
          </button>
        )}
      </div>
    </form>
  );
};

export { CreateClassForm };
