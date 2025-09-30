import { HostRegisterForm } from '@/components/user/host-register-form'
import { getUserByEmail } from '@/modules/user'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function HostRegisterPage() {
  const session = await getServerSession()
  if (!session?.user) {
    redirect('/auth/signin')
  }

  const user = await getUserByEmail(session.user.email as string)

  if (user.data?.role === 'admin') {
    redirect(`/admin/${user.data.id}/dashboard`)
  }

  return (
    <div>
      <h1 className="font-display">내 공간을 공유해보세요</h1>
      <p className="font-body">본인 인증 후 바로 공간 등록이 가능합니다.</p>
      <HostRegisterForm />
    </div>
  )
}
