const { faker } = require("@faker-js/faker");
const { ticket } = require("./data-generators");

module.exports = {
  path: "/api/v1/tickets",
  method: "GET",
  cache: false,
  delay: 300 /*ms*/,
  template: (_, query) => {
    const statuses = query.status || ["To Do", "In Progress", "In Review", "Done"];
    const total = faker.datatype.number({ min: 10, max: 40 });

    const tickets = [...Array(total)].map(() => ticket(statuses));

    return {
      total,
      statuses,
      tickets,
    };
  },
};
