// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.daisyui.com', 'images.microcms-assets.io', 'dummyimage.com'],
  },
};

module.exports = nextConfig;
