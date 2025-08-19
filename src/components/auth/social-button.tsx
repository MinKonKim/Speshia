import { cn } from '@/lib'
import { Button } from '../ui'
import Image from 'next/image'

interface SocialButtonProps {
  social: 'google' | 'kakao' | 'naver'
  onClick: () => void
}

export default function SocialButton({ social, onClick }: SocialButtonProps) {
  const baseImagePath = '/images/buttons'
  const socialButtonConfig = {
    google: {
      image: `${baseImagePath}/google-login-icon.svg`,
      bgColor: '!bg-slate-100 hover:!bg-slate-200',
      text: 'Google 로그인',
      textColor: '!text-[#1F1F1F]',
    },
    naver: {
      image: `${baseImagePath}/naver-login-icon.png`,
      bgColor: '!bg-[#03C75A] hover:!bg-[#03B352]',
      text: '네이버 로그인',
      textColor: '!text-white',
    },
    kakao: {
      image: `${baseImagePath}/kakao-login-large-btn.png`,
      bgColor: '!bg-[#FEE500] hover:!bg-[#F0D900]',
      text: null,
      textColor: null,
    },
  }

  const buttonImage = socialButtonConfig[social].image
  const text = socialButtonConfig[social].text
  const buttonBgColor = socialButtonConfig[social].bgColor
  const textColor = socialButtonConfig[social].textColor

  if (social !== 'kakao') {
    return (
      <Button
        variant="outline"
        onClick={onClick}
        className={cn(
          buttonBgColor,
          'grid h-[45px] w-[300px] grid-cols-[auto_1fr_auto] items-center px-4'
        )}
      >
        {/* 왼쪽 아이콘 */}
        <Image src={buttonImage} alt="소셜버튼이미지" width={28} height={28} />

        {/* 가운데 텍스트 */}
        {text && (
          <span className={cn('text-md pl-1 text-center font-semibold', textColor)}>{text}</span>
        )}

        {/* 오른쪽 빈 공간 (균형을 위해) */}
        <div className="w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="unstyled"
      onClick={onClick}
      className={cn(buttonBgColor, 'relative h-[45px] w-[300px] rounded-md p-0 transition-all')}
    >
      <Image src={buttonImage} alt="소셜버튼이미지" fill className="object-contain" />
    </Button>
  )
}
