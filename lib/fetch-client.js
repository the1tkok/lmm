class APIError extends Error {
  statusCode;
  code;

  constructor(message, code, statusCode) {
    super(message);
    this.name = "APIError";
    this.code = code;
    this.statusCode = statusCode;
  }
}

/**
 * Fetch client to make requests to our api
 * @param {String} endpoint API endpoint that you want to fetch
 * @param {Object} input Fetch options
 * @returns JSON response
 */
export const fetchClient = async (endpoint, input) => {
  const headers = {
    ...(input?.headers ?? {}),
  };

  if (typeof input?.body === "object" && !(input?.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    input.body = JSON.stringify(input.body);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api${endpoint}`,
    { ...(input ?? {}), headers, credentials: "include" }
  );

  const data = await response.json();
  if (response.status >= 400) {
    throw new APIError(
      data?.error?.message,
      data?.error?.code,
      response.status
    );
  }

  return data;
};
