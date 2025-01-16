/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Optional: Only needed if you want unoptimized images
  },
  trailingSlash: false, // Optional: Doesn't affect TailwindCSS
};

export default nextConfig;
