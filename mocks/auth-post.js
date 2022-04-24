module.exports = {
  path: "/api/auth",
  method: "POST",
  status: (req, res, next) => {
    res.status(200); // default
    next();
  },
  template: (params, query, body, cookies, headers) => {
    return { ok: true };
  },
};
