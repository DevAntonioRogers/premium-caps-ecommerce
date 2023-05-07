/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com', "images.unsplash.com", 'files.stripe.com']
  }
}

module.exports = nextConfig
