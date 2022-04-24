const { salesperson } = require("./data-generators");

module.exports = {
  path: "/api/v1/salespeople",
  method: "GET",
  cache: false,
  delay: 100 /*ms*/,
  template: (_, query) => {
    const salespeople = [...Array(10)].map(salesperson).filter((salesperson) => {
      if (query.keyword) {
        const keyword = query.keyword.toLowerCase();
        return ~salesperson.salesperson_name.indexOf(keyword);
      } else {
        return true;
      }
    });

    return {
      salespeople,
    };
  },
};
