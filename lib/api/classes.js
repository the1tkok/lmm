import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchClient } from "../fetch-client";

/**
 * Get all the classes
 * @return {Object}
 */
export const useGetClasses = (opts) => {
  return useQuery({
    queryKey: ["classes"],
    queryFn: () => {
      return fetchClient("/classes");
    },
    ...opts,
  });
};

/**
 * Submit homework link
 * @return {Object}
 */
export const useSubmitHomeworkLink = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ classId, data }) => {
      return fetchClient(`/classes/${classId}/homework`, {
        method: "POST",
        body: data,
      });
    },
    ...opts,
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
      toast.success("Homework submitted successfully.");
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};

/**
 * Update class by id
 * @return {Object}
 */
export const useUpdateClassById = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ classId, data }) => {
      return fetchClient(`/classes/${classId}`, {
        method: "PATCH",
        body: data,
      });
    },
    ...opts,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["classes"]);
      opts?.onSuccess(...args);
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};
