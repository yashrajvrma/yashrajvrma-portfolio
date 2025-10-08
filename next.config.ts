import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      new URL(
        "https://pbs.twimg.com/profile_images/1974875613837324288/ckIPGnPE_400x400.jpg"
      ),
      new URL(
        "https://media.licdn.com/dms/image/v2/D560BAQFaeBtUoOJ57w/company-logo_200_200/company-logo_200_200/0/1720175360812?e=1762992000&v=beta&t=F9equuaDXkWJp3LU8Cmjhhh9cDAiGwIkaQI-LNMYSdU"
      ),
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
