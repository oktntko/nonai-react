const { invoice } = require("./data-generators");

module.exports = {
  path: "/api/v1/invoices/:invoice_id",
  method: "GET",
  cache: false,
  delay: 300 /*ms*/,
  template: (params) => invoice(params.invoice_id),
};
