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

/**
 * Enroll user to class
 * @return {Object}
 */
export const useEnrollUserToClass = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ classId, data }) => {
      return fetchClient(`/classes/${classId}/enroll`, {
        method: "POST",
        body: data,
      });
    },
    ...opts,
    onSuccess: (...args) => {
      const { user } = args[0];

      queryClient.invalidateQueries(["classes"]);
      queryClient.invalidateQueries(["users", user._id]);
      opts?.onSuccess(...args);
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};

/**
 * Create class
 * @return {Object}
 */
export const useCreateClass = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }) => {
      return fetchClient(`/classes`, {
        method: "POST",
        body: data,
      });
    },
    ...opts,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["semesters"]);
      queryClient.invalidateQueries(["classes"]);
      opts?.onSuccess(...args);
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};

/**
 * Delete class
 * @return {Object}
 */
export const useDeleteClass = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ classId }) => {
      return fetchClient(`/classes/${classId}`, {
        method: "DELETE",
      });
    },
    ...opts,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["classes"]);
      queryClient.invalidateQueries(["semesters"]);
      opts?.onSuccess(...args);
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};

/**
 * End class
 * @return {Object}
 */
export const useEndClass = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ classId }) => {
      return fetchClient(`/classes/${classId}/end`, {
        method: "PATCH",
      });
    },
    ...opts,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["classes"]);
      queryClient.invalidateQueries(["semesters"]);
      opts?.onSuccess(...args);
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};
