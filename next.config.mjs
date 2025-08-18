/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Additional settings for Vercel deployment
  output: 'standalone',
  // Handle browser extension interference
  reactStrictMode: false,
}

export default nextConfig
