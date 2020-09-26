const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/v1/metrics',
    createProxyMiddleware({
      target: 'https://api.glassnode.com',
      changeOrigin: true,
    })
  );
};