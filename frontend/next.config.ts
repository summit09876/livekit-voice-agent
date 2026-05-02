import type { NextConfig } from 'next';

const basePath = '/voice-agent';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
