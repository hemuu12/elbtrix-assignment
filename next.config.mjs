/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, 
    images: {
      domains: ["ik.imagekit.io"],
      formats: ["image/avif", "image/webp"], 
    },
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    webpack: (config, { isServer }) => {
      // Example: Add custom webpack configuration
      if (!isServer) {
        config.resolve.fallback = {
          fs: false, 
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  