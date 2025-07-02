import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript:{
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images:{
    remotePatterns:[
      {
        hostname: 'img.clerk.com'
      },
      
    ]
  }
};

export default nextConfig;
