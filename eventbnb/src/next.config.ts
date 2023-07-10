import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    // DB_URI:
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
    GOOGLE_SECRET: process.env.GOOGLE_CLIENT_SECRET as string
  }
}

export default nextConfig;