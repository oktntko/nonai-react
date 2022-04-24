const { user } = require("./data-generators");

module.exports = {
  path: "/api/v1/user-settings",
  method: "GET",
  cache: false,
  delay: 100 /*ms*/,
  template: () => user(),
};
