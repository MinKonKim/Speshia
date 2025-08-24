'use client'

import SocialButton from '@/components/auth/social-button'
import { Separator } from '@radix-ui/react-context-menu'
import { signIn, useSession } from 'next-auth/react'

function SigninPage() {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>로그인 확인 중...</p>
  }

  const handleButtonClick = async (social: string) => {
    const signInRes = await signIn(social)
    console.log(signInRes)
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="font-display text-secondary-500 p-4 font-serif text-5xl">
        간편하게 로그인 할 수 있어요!
      </h2>

      {!session && (
        <div className="flex flex-col gap-2">
          <Separator className="w-full" />
          <SocialButton social={'google'} onClick={() => handleButtonClick('google')} />
          <SocialButton social={'naver'} onClick={() => handleButtonClick('naver')} />
          <SocialButton social={'kakao'} onClick={() => handleButtonClick('kakao')} />
        </div>
      )}
    </div>
  )
}

export default SigninPage
