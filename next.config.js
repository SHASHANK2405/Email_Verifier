const nextConfig = {
  output: "export", // Keep this if you're using static export
  images: {
    unoptimized: true, // Remove if you want Next.js to optimize images on Vercel
  },
  trailingSlash: false, // Vercel does not need trailing slashes
};

module.exports = nextConfig;
