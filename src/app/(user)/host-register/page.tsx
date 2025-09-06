'use client'
import { HostRegisterForm } from '@/components/user/host-register-form'
import { getServerSession } from 'next-auth'

export default async function HostRegisterPage() {
  const session = await getServerSession()

  return (
    <div>
      <h1 className="font-display">내 공간을 공유해보세요</h1>
      <p className="font-body">본인 인증 후 바로 공간 등록이 가능합니다.</p>
      <HostRegisterForm />
    </div>
  )
}
