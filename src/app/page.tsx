import { HomePage } from '@/components/home'

export const metadate = {
  title: '스페시아',
  description: '나만의 공간을 예약하고 관리하게요.',
}

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <HomePage />
    </main>
  )
}
