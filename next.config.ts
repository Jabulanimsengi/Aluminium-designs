import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/trellis-doors-security-gates",
        destination: "/services/trellis-doors",
        permanent: true,
      },
      {
        source: "/services/trellis-security-gates",
        destination: "/services/trellis-doors",
        permanent: true,
      },
      {
        source: "/services/windows",
        destination: "/services/aluminium-windows",
        permanent: true,
      },
      {
        source: "/services/partitions",
        destination: "/services/office-glass-partitions",
        permanent: true,
      },
      {
        source: "/services/shopfronts",
        destination: "/services/aluminium-shopfronts",
        permanent: true,
      },
      {
        source: "/services/custom",
        destination: "/services/security-gates",
        permanent: true,
      },
      {
        source: "/services/enclosures",
        destination: "/services/glass-patio-enclosures",
        permanent: true,
      },
      {
        source: "/services/repairs",
        destination: "/services/aluminium-repairs",
        permanent: true,
      },
      {
        source: "/services/patio-enclosures",
        destination: "/services/glass-patio-enclosures",
        permanent: true,
      },
      {
        source: "/services/fly-screens",
        destination: "/services/aluminium-fly-screens",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
