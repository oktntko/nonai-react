module.exports = {
  path: "/api/v1/user-settings/twofa",
  method: "POST",
  template: async () => {
    return { ok: true };
  },
};
