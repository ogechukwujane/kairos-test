/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
