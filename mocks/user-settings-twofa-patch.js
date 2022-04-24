const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

module.exports = {
  path: "/api/v1/user-settings/twofa",
  method: "PATCH",
  cache: false,
  delay: 100 /*ms*/,
  template: async () => {
    const secret = speakeasy.generateSecret({
      length: 20,
      name: "username@username.co.jp",
      issuer: "Nonai",
    });

    const url = speakeasy.otpauthURL({
      secret: secret.ascii,
      label: encodeURIComponent("username@username.co.jp"),
      issuer: "Nonai",
    });

    const dataurl = await qrcode.toDataURL(url);

    return {
      dataurl,
    };
  },
};
