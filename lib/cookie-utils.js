import { destroyCookie, setCookie } from "nookies";

export const setAccessTokenCookie = ({ res, accessToken, maxAge }) => {
  setCookie({ res }, "accessToken", accessToken, {
    maxAge,
    domain: process.env.COOKIE_DOMAIN,
    path: "/",
    httpOnly: true,
    sameSite: true,
    secure: process.env.NODE_ENV !== "development",
  });
};

export const removeAccessTokenCookie = ({ res }) => {
  destroyCookie({ res }, "accessToken", { path: "/" });
};
