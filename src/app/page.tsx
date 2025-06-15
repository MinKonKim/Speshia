import { HomePage } from '@/components/home'
import { userApi } from '@/lib/api/user-api'

export const metadate = {
  title: '스페시아',
  description: '나만의 공간을 예약하고 관리하게요.',
}

export default async function Home() {
  const user = await userApi().get('/')

  return (
    <main className="flex h-full w-full flex-col">
      <HomePage user={user} />
    </main>
  )
}
