import { useQuery } from "@tanstack/react-query";
import { fetchClient } from "../fetch-client";

/**
 * Get app metadata list
 * @return {Object}
 */
export const useGetMetadata = (opts) => {
  return useQuery({
    queryKey: ["metadata"],
    queryFn: () => {
      return fetchClient("/metadata");
    },
    ...opts,
  });
};
