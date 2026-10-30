import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML to out/.
  output: "export",
  trailingSlash: true,
  images: {
    // No image server in a static export; assets are pre-sized webp.
    unoptimized: true,
  },
};

export default nextConfig;
