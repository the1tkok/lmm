import { removeAccessTokenCookie } from "../../lib/cookie-utils";

export default async function logout(req, res) {
  if (req.method === "GET") {
    try {
      removeAccessTokenCookie({ res });

      res.status(307).redirect("/login").end();
    } catch (error) {
      res.status(500).end({ error: "Internal error" });
    }
    return;
  }
}
