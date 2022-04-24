const { payee } = require("./data-generators");

module.exports = {
  path: "/api/v1/payee",
  method: "GET",
  cache: true,
  template: () => payee(),
};
