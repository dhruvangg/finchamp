const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'gu'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos']
  }
}

module.exports = withMDX(nextConfig)
