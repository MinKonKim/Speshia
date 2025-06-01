import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}', // Next.js App Router
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // 프로젝트 구조에 따라 조절
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },

        // 상태/알림 컬러
        error: '#EF4444', // 빨강 (오류)
        warning: '#F59E0B', // 주황 (경고)
        info: '#3B82F6', // 파랑 (정보)
        success: '#22C55E', // 초록 (성공)

        // 중립 계열 (회색)
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 예: 인터 폰트
      },
    },
  },
  plugins: [],
  darkMode: 'class', // 다크모드 클래스 방식
}

export default config
