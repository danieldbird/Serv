/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.istockphoto.com',
      'i2-prod.chroniclelive.co.uk',
      'lh3.ggpht.com',
    ],
  },
}

module.exports = nextConfig
