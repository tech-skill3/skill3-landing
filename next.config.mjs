/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dribbble.com'],
  },
  // 确保 dashboard 页面可以静态生成
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
