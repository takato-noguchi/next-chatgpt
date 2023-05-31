/** @type {import('next').NextConfig} */
const nextConfig = {}
require('dotenv').config();

// module.exports = nextConfig
module.exports = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
  }