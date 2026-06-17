import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2iyhd3v3rvz2k.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
