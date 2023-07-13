/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com/im/pictures",
        port: "",
        pathname: "/airbnb/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

module.exports = nextConfig;
