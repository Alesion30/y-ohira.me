const path = require("path");

module.exports = {
  distDir: 'build',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    return config;
  },
  experimental: {
    optimizeFonts: true,
  }
};
