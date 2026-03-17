/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 新增这一行：开启静态导出
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 你已经有了这个，非常好，静态导出必须配置此项
  },
}

export default nextConfig
