import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import styles from "./calendar.module.css";

const Calendar = ({ shouldMarkDay }) => {
  const [date, setDate] = useState(new Date());

  const firstDayOfMonth = startOfMonth(date);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth);

  const lastDayOfMonth = endOfMonth(date);
  const lastDayOfLastWeek = endOfWeek(lastDayOfMonth);

  const weekdays = Array.from(Array(7)).map((_, i) =>
    format(addDays(firstDayOfFirstWeek, i), "EEEEEE")
  );
  const days = eachDayOfInterval({
    start: firstDayOfFirstWeek,
    end: lastDayOfLastWeek,
  });

  return (
    <div aria-label="Calendar" className={styles.container}>
      <div className={styles.calendarHeading}>{format(date, "MMM yyyy")}</div>
      <div className={styles.calendarDaysContainer}>
        {weekdays.map((day) => (
          <div className={styles.weekdays} key={day}>
            {day}
          </div>
        ))}
        {days.map((dayDate) => {
          const isDayToday = isToday(dayDate);

          const shouldRenderMark = shouldMarkDay?.(dayDate) ?? false;

          return (
            <div
              className={`${styles.day} ${isDayToday ? styles.dayToday : ""} ${
                shouldRenderMark && !isDayToday ? styles.activeDay : ""
              }`}
              key={dayDate.toString()}
              data-date={format(dayDate, "yyyy-MM-dd")}
            >
              {format(dayDate, "d")}
              {/* {shouldRenderMark && !isDayToday && (
                <div className={styles.dayMark} />
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Calendar };
