const { OAuth2Client } = require("google-auth-library");
require("dotenv").config({ path: ".env.local" });

const client = new OAuth2Client();

module.exports = {
  path: "/api/google-signin",
  method: "POST",
  template: async (params, query, body) => {
    try {
      console.log(body);
      const ticket = await client.verifyIdToken({
        idToken: body.id_token,
        audience: process.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
      const domain = payload["hd"];
      console.log("userid", userid, "domain", domain);
      return { ok: true };
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
