import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate plain HTML, CSS and JavaScript files for shared hosting providers
  // such as Hostinger. The generated site is written to /out.
  output: 'export',
  // Emit /route/index.html so clean URLs work on shared Apache/LiteSpeed hosting.
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Next's image optimizer needs a Node server, which static hosting does not run.
    unoptimized: true,
  },
};

export default nextConfig;

