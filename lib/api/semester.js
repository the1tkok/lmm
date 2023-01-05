import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchClient } from "../fetch-client";

/**
 * Get all the semesters
 * @return {Object}
 */
export const useGetSemesters = (opts) => {
  return useQuery({
    queryKey: ["semesters"],
    queryFn: () => {
      return fetchClient("/semesters");
    },
    ...opts,
  });
};

/**
 * Create semester
 * @return {Object}
 */
export const useCreateSemester = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }) => {
      return fetchClient(`/semesters`, {
        method: "POST",
        body: data,
      });
    },
    ...opts,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["semesters"]);
      opts?.onSuccess(...args);
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};
