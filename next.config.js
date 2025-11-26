/** @type {import('next').NextConfig} */
const nextConfig = {
    // Produce a static export (replaces next export)
    output: 'export',
  
    // If you use next/image, disable image optimization for static export:
    images: {
      unoptimized: true
    },
  
    // Optional: enable trailingSlash if you want directories (helps some static hosts)
    // trailingSlash: true,
  };
  
  module.exports = nextConfig;
  