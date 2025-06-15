import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // ✅ 정확한 키
  } as any satisfies NextConfig,
}

export default nextConfig
