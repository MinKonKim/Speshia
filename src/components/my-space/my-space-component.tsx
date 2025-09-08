import { Plus } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Button } from '../ui/button'

interface MySpaceComponentProps {
  children: ReactNode
  adminId: string
}

export async function MySpaceComponent({ children, adminId }: MySpaceComponentProps) {
  return (
    <div className="h-full w-full p-4">
      <h1 className="text-headline">내 공간 관리</h1>
      <div className="flex justify-between">
        <p>여기에서 내 공간을 관리할 수 있습니다.</p>
        <Link href={`/admin/${adminId}/my-space/add`}>
          <Button
            variant="secondary"
            size="sm"
            className="bg-secondary-400 hover:bg-secondary-500 flex items-center text-white"
          >
            <Plus />
            공간 추가
          </Button>
        </Link>
      </div>
      <div className="mt-4 w-full">{children}</div>
    </div>
  )
}
