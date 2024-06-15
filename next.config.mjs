/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This matches any hostname
        port: "",
        pathname: "**", // This matches any path
      },
      {
        protocol: "http",
        hostname: "**", // This matches any hostname
        port: "",
        pathname: "**", // This matches any path
      },
    ],
  },
};

export default nextConfig;
