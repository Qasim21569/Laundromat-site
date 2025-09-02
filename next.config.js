/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [],
    minimumCacheTTL: 60
  },
  // Ensure static files are properly served
  trailingSlash: false,
  // Optimize for Vercel deployment
  poweredByHeader: false,
  compress: true,
  // Handle case-sensitive file paths
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

module.exports = nextConfig
