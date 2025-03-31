import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "q2kdtpomknobn1v5.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
