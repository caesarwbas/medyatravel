import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site contains only static routes, so Cloudflare can deploy the
  // generated files directly without a server adapter.
  output: "export",
  trailingSlash: true,
  images: {
    // Static exports cannot use the Next.js image optimization server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "iberica-travel.com",
      },
    ],
  },
};

export default nextConfig;
