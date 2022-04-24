module.exports = {
  path: "/api/v1/user-settings/twofa",
  method: "DELETE",
  template: async () => {
    return { ok: true };
  },
};
