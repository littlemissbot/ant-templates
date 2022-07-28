const CracoLessPlugin = require('craco-less');

// craco.config.js
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@layout-header-background': '#FFFFFF',
              '@layout-sider-background': '#755333',
              '@menu-dark-bg': '#755333',
              '@primary-color': '#A4CD38'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}