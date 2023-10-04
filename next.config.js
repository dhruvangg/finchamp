/** @type {import('next').NextConfig} */

// module.exports = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true
//   }
// }


// const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: false,
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
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  // }
};

// module.exports = () => {
//   const plugins = [withPWA];
//   const config = plugins.reduce((acc, next) => next(acc), {
//     ...nextConfig,
//   });
//   return config;
// };


// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== 'development',
//   },
// };

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);