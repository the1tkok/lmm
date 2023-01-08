import { parse } from "date-fns";

export const parseTimeToDate = (time) => {
  return parse(time, "HH:mm", new Date());
};

export const getFullName = ({ firstName, lastName } = {}) => {
  return [firstName, lastName].filter(Boolean).join(" ");
};
