'use client'

import SocialButton from '@/components/auth/social-button'
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
    <div>
      <h2 className="font-display text-secondary-500 font-serif text-5xl">
        간편하게 로그인 할 수 있어요!
      </h2>
      {!session && (
        <div>
          <SocialButton social={'google'} onClick={() => handleButtonClick('google')} />
          <SocialButton social={'naver'} onClick={() => handleButtonClick('naver')} />
          <SocialButton social={'kakao'} onClick={() => handleButtonClick('kakao')} />
        </div>
      )}
    </div>
  )
}

export default SigninPage
