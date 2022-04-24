const { faker } = require("@faker-js/faker");
const { invoice } = require("./data-generators");

module.exports = {
  path: "/api/v1/invoices",
  method: "GET",
  cache: false,
  delay: 300 /*ms*/,
  template: (_, query) => {
    const total = faker.datatype.number({ min: 0, max: 100 });

    const invoices = [...Array(Math.min(Number(query.limit), total))].map(invoice);

    return {
      total,
      invoices,
    };
  },
};
