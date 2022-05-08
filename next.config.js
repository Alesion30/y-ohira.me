const path = require('path');
const withPWA = require('next-pwa');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    return config;
  },
  // Next Image
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
  // Google Fonts
  experimental: {
    optimizeFonts: true,
  },
  // SCSS
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  cssModules: true,
  // PWA
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
