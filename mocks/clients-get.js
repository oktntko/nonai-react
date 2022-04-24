const { faker } = require("@faker-js/faker");
const { client } = require("./data-generators");

module.exports = {
  path: "/api/v1/clients",
  method: "GET",
  cache: false,
  delay: 100 /*ms*/,
  template: (_, query) => {
    const clients = [...Array(100)].map(client).filter((client) => {
      if (query.keyword) {
        const keyword = query.keyword.toLowerCase();
        return ~client.client_name.indexOf(keyword);
      } else {
        return true;
      }
    });

    return {
      clients,
    };
  },
};
