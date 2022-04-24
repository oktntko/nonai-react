const { faker } = require("@faker-js/faker");
const { ticket } = require("./data-generators");

module.exports = {
  path: "/api/v1/tickets",
  method: "POST",
  cache: false,
  template: (params, query, body) => {
    const status = body.status || ["To Do", "In Progress", "In Review", "Done"];
    return ticket([status]);
  },
};
