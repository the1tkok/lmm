export const storeAccessToken = async ({ accessToken, maxAge }) => {
  const response = await fetch("/api/access-token", {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ accessToken, maxAge }),
  });

  if (response.status !== 200) {
    throw new Error("Error storing access token");
  }
};

export const getAccessToken = async (cookie) => {
  const response = await fetch("/api/access-token", {
    headers: cookie ? { Cookie: cookie } : undefined,
  });

  if (response.status !== 200) {
    return;
  }

  return (await response.json())?.accessToken;
};
