import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/drivesense",
        destination: "/product",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
