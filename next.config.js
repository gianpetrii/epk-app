/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Disable image optimization since Firebase hosting doesn't support it
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are used for better Firebase hosting compatibility
  trailingSlash: true,
};

module.exports = nextConfig; 