import { setAccessTokenCookie } from "../../lib/cookie-utils";

export default async function accessToken(req, res) {
  if (req.method !== "POST") {
    res.status(404).send({ error: "Not found" });
    return;
  }

  try {
    const accessToken = req.body?.accessToken;
    const maxAge = req.body?.maxAge;
    if (!accessToken) {
      res.status(400).send({ error: "Missing access token" });
      return;
    }
    if (!maxAge) {
      res.status(400).send({ error: "Missing max age" });
      return;
    }
    setAccessTokenCookie({ res, accessToken, maxAge });

    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).end({ error: "Internal error" });
  }
}
