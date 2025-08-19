import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avartars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net', // Kakao
      },
      {
        protocol: 'https',
        hostname: 'ssl.pstatic.net', // Naver
      },
      {
        protocol: 'https',
        hostname: 'phinf.pstatic.net', // Naver (추가 케이스)
      },
    ],
  },
}

export default nextConfig
