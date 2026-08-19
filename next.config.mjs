import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isExport = process.env.npm_lifecycle_event === 'export' || process.env.STATIC_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  devIndicators: false,
  ...(isExport ? { output: 'export', trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

