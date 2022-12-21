import { useQuery } from "@tanstack/react-query";
import { fetchClient } from "../fetch-client";

/**
 * Get all the courses
 * @return {Object}
 */
export const useGetCourses = (opts) => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => {
      return fetchClient("/courses");
    },
    ...opts,
  });
};
