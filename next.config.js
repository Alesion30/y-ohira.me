const path = require('path');
const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa')

const nextConfig = {
  distDir: 'build',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    return config;
  },
  // Google Fonts
  experimental: {
    optimizeFonts: true,
  },
  // SCSS
  cssModules: true,
  // PWA
  pwa: {
    dest: 'public'
  }
};

module.exports = withPWA(withSass(nextConfig));
