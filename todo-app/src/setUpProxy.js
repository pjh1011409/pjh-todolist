const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://pre-onboarding-selection-task.shop/',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api': '/', // rewrite path
        '^/api/todo': '/todo', // remove base path
      },
    }),
  );
  // app.listen(3000);
};
