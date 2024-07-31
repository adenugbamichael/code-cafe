/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware(["/api", "/ws-cafe"], {
      target: "http://localhost:3030",
      changeOrigin: true,
      ws: true,
    }),
  );
};
