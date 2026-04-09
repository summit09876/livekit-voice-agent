import type { NextConfig } from 'next';

const basePath = '/voice-agent-livekit';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
