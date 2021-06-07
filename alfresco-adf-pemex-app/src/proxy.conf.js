require('dotenv').config();

const APP_CONFIG_ECM_HOST = 'http://saea98.com:8080';

module.exports = {
  '/alfresco': {
    target: APP_CONFIG_ECM_HOST,
    secure: false,
    changeOrigin: true,
    // workaround for REPO-2260
    onProxyRes: function (proxyRes) {
      const header = proxyRes.headers['www-authenticate'];
      if (header && header.startsWith('Basic')) {
        proxyRes.headers['www-authenticate'] = 'x' + header;
      }
    }
  },
  '/auth': {
    target: APP_CONFIG_ECM_HOST,
    secure: false,
    changeOrigin: true
  }
};
