import { parse } from "date-fns";

export const parseTimeToDate = (time: string) => {
  return parse(time, "HH:mm", new Date());
};
