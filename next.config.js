/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
}

module.exports = () => {
  const plugins = [withPWA];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
  return config;
};
// module.exports = nextConfig