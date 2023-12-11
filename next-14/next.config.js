/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.axios.com", protocol: "https" }],
  },
}

module.exports = nextConfig
