import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchClient } from "../fetch-client";

/**
 * Get current authenticated user
 * @return {Object}
 */
export const useGetMe = (opts) => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => {
      return fetchClient("/user/me");
    },
    ...opts,
  });
};
