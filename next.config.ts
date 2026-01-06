import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tubesettlerlamella.com',
      },
    ],
  },
};

export default nextConfig;
