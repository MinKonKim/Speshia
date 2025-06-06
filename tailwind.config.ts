import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#F9F8F6',
          foreground: '#2D2D2D', // 짙은 회색 텍스트 (가독성 확보)
          50: '#FFFFFF',
          100: '#FDFDFC',
          200: '#FAF9F7',
          300: '#F5F3F0',
          400: '#F0EDE8',
          500: '#F9F8F6',
          600: '#E0DED9',
          700: '#C8C5C2',
          800: '#B0ADAA',
          900: '#999693',
        },
        secondary: {
          DEFAULT: '#A8B5A2',
          foreground: '#1F1F1F', // 세이지 배경 위에 어두운 텍스트 사용
          50: '#F4F6F3',
          100: '#E8ECE6',
          200: '#D4DDD0',
          300: '#BCCDB7',
          400: '#A8B5A2',
          500: '#91A089',
          600: '#7D8A74',
          700: '#69735F',
          800: '#555D4B',
          900: '#424838',
        },
        primary: {
          DEFAULT: '#2C3E50',
          foreground: '#F3F4F6', // 짙은 배경에 대비되는 밝은 텍스트
          50: '#E9ECEF',
          100: '#D6DBDF',
          200: '#AEB6BF',
          300: '#85929E',
          400: '#5D6D7E',
          500: '#2C3E50',
          600: '#253746',
          700: '#1F2F3C',
          800: '#192832',
          900: '#132028',
        },

        // 상태/알림 컬러
        error: '#EF4444', // 빨강 (오류)
        warning: '#F59E0B', // 주황 (경고)
        info: '#3B82F6', // 파랑 (정보)
        success: '#22C55E', // 초록 (성공)

        // 중립 계열 (회색)
        gray: {
          50: '#FAFAFA', // 거의 흰색에 가까운 회색 (light mode 배경)
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A', // 본문 텍스트에 적합 (medium)
          600: '#52525B',
          700: '#3F3F46', // 다크모드 텍스트 / 제목용
          800: '#27272A',
          900: '#18181B', // 매우 진한 회색 (배경 대비가 큰 제목용)
          DEFAULT: '#3C3F3E', // Speshia 로고 글자 색과 어울리는 중립 회색
          foreground: '#1F1F1F', // 밝은 배경에서 사용할 텍스트
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'sans-serif'], // 예: 인터 폰트
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
}

export default config
