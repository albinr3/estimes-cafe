import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/catering-menu',
        destination: '/catering',
        permanent: true,
      },
      {
        source: '/brunch-menu',
        destination: '/catering',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

