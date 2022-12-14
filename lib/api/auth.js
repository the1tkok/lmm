import { useMutation } from "@tanstack/react-query";
import { fetchClient } from "../fetch-client";
import toast from "react-hot-toast";

/**
 * Create a new user in the app
 * @param {Object} data - The data of the user who is signing up
 * @param {String} data.firstName - User's first name
 * @param {String} data.lastName - User's last name
 * @param {String} data.email - User's email
 * @param {String} data.password - User's password
 * @param {String} data.actingExperience - User's acting experience: beginner | intermediate | expert
 * @return {Object} - JSON response
 */
export const useSignUp = (opts) => {
  return useMutation({
    mutationFn: (data) => {
      return fetchClient("/auth/signup", {
        method: "POST",
        body: data,
      });
    },
    ...opts,
  });
};

/**
 * Log in into the app using an user and password.
 * @param {Object} data - The data of the user who is signing up
 * @param {String} data.email - User's email
 * @param {String} data.password - User's password
 * @return {Object}
 */
export const useLogin = (opts) => {
  return useMutation({
    mutationFn: (data) => {
      return fetchClient("/auth/signin", {
        method: "POST",
        body: data,
      });
    },
    ...opts,
    onError: (...params) => {
      const [err] = params;
      if (err.code === "email_or_password_invalid") {
        toast.error("Email or password is invalid.");
        return;
      }

      toast.error("There was an error logging in. Try again.");

      opts?.onError(...params);
    },
  });
};
