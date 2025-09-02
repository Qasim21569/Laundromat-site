/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [],
    minimumCacheTTL: 60,
    unoptimized: false
  },
  webpack(config) {
    // Handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    
    return config;
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
