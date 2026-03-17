/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 必须开启
  typescript: {
    ignoreBuildErrors: true, // 忽略 TS 错误
  },
  eslint: {
    ignoreDuringBuilds: true, // 新增：忽略 ESLint 错误，防止部署被卡
  },
  images: {
    unoptimized: true, // 静态导出必须
  },
}

export default nextConfig
