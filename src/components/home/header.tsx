'use client'
import { useRouter } from 'next/navigation'
import { Button } from '../ui'

export const MainHeader = () => {
  const router = useRouter()
  const handleSignup = (role: 'user' | 'admin') => {
    router.push(`/signup?role=${role}`)
  }

  return (
    <div className="flex w-full items-center justify-between px-5">
      <img src="/images/logo_speshia.png" alt="logo" width={80} height={80} />
      <div className="flex items-center gap-2">
        <Button className="bg-primary-500" onClick={() => handleSignup('user')}>
          시작하기
        </Button>
        <Button variant="outline" onClick={() => handleSignup('admin')}>
          내 공간 등록하기
        </Button>
      </div>
    </div>
  )
}
