module.exports = {
  path: "/api/v1/tickets/:ticket_id",
  method: "PATCH",
  cache: false,
  template: () => {
    return { ok: true };
  },
};
