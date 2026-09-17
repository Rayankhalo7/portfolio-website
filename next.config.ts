import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 blocks cross-origin /_next from 127.0.0.1 vs localhost — breaks client JS (theme toggle).
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
