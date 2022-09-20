/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  cssModules: true,
  // Google Fonts
  experimental: {
    optimizeFonts: true,
  },
  // Next Image
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
  // PWA
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  // SCSS
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    }
    return config
  },
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
