const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/core/manage',
    createProxyMiddleware({
      target: 'http://192.168.174.23:8000',
      changeOrigin: true,
    })
  );
};
