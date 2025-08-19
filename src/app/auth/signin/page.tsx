'use client'

import SocialButton from '@/components/auth/social-button'
import { Button } from '@/components/ui'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

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
      <h2 className="font-display text-5xl">간편하게 로그인 할 수 있어요!</h2>
      {!session ? (
        <div>
          <SocialButton social={'google'} onClick={() => handleButtonClick('google')} />
          <SocialButton social={'naver'} onClick={() => handleButtonClick('naver')} />
          <SocialButton social={'kakao'} onClick={() => handleButtonClick('kakao')} />
        </div>
      ) : (
        <div>
          <p>로그인됨: {session.user?.name}</p>
          <p>ID: {session.user?.id}</p>
          <p>EMAIL : {session.user.email}</p>
          <Image alt="프로필 이미지" src={session.user.image as string} width={50} height={50} />
          <Button onClick={() => signOut()} className="mt-2 border px-4 py-2">
            로그아웃
          </Button>
        </div>
      )}
    </div>
  )
}

export default SigninPage
