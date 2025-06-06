import { Button } from '@/components/ui'

export const AdminHeader = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <img src="/images/logo_speshia.png" alt="logo" width={100} height={100} />
      <div>
        <Button>시작하기</Button>
      </div>
    </div>
  )
}
