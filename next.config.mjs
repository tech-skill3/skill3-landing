/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dribbble.com'],
  },
  // 禁用静态优化，使用动态渲染避免预渲染问题
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // 强制所有页面使用动态渲染
  output: 'standalone',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;
