const { faker } = require("@faker-js/faker");
const { user } = require("./data-generators");

module.exports = {
  path: "/api/v1/users",
  method: "GET",
  cache: true,
  delay: 100 /*ms*/,
  template: (_, query) => {
    const total = faker.datatype.number({ min: 0, max: 100 });

    const users = [...Array(Math.min(Number(query.limit), total))].map(user);

    return {
      total,
      users,
    };
  },
};
