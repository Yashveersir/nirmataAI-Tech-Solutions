import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep Next.js Image optimization enabled; do NOT use `output: 'export'`
  // because server actions are required for forms in Phase 1.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
