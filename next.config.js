/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ypkniahiscttaomsanuw.supabase.co",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
