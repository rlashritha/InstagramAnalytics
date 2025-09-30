import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // allow all paths under this domain
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
