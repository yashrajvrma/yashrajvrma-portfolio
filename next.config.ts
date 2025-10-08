import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      new URL(
        "https://pbs.twimg.com/profile_images/1974875613837324288/ckIPGnPE_400x400.jpg"
      ),
    ],
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
