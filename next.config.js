/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})

// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig