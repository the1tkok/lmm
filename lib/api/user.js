import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchClient } from "../fetch-client";

/**
 * Get current authenticated user
 * @return {Object}
 */
export const useGetMe = (opts) => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => {
      return fetchClient("/users/me");
    },
    ...opts,
  });
};

/**
 * Update user
 * @return {Object}
 */
export const useUpdateUser = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      return fetchClient("/users/me", {
        method: "PATCH",
        body: data,
      });
    },
    ...opts,
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
    },
    onError: (...params) => {
      opts?.onError(...params);
    },
  });
};

/**
 * Update user by id
 * @return {Object}
 */
export const useUpdateUserById = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, data }) => {
      return fetchClient(`/users/${userId}`, {
        method: "PATCH",
        body: data,
      });
    },
    ...opts,
    onSuccess: ({ user }) => {
      queryClient.invalidateQueries(["users"]);
      queryClient.invalidateQueries(["users", user._id]);
    },
    onError: (...params) => {
      opts?.onError(...params);
    },
  });
};

/**
 * Get all users
 * @return {Object}
 */
export const useGetUsers = (opts) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetchClient("/users");
    },
    ...opts,
  });
};

/**
 * Get user by id
 * @return {Object}
 */
export const useGetUserById = ({ userId }, opts) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => {
      return fetchClient(`/users/${userId}`);
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
    mutationFn: (data) => {
      return fetchClient(`/users/me/homework`, {
        method: "POST",
        body: data,
      });
    },
    ...opts,
    onSuccess: ({ user }) => {
      queryClient.invalidateQueries(["users", user._id]);
      toast.success("Homework submitted successfully.");
    },
    onError: (...args) => {
      opts?.onError(...args);
    },
  });
};
