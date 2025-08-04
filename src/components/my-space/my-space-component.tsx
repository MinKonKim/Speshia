'use client'
import { MySpaceTable } from './my-space-table'
import { SpaceAddModal } from './space-add-modal'

export function MySpaceComponent() {
  return (
    <div className="h-full w-full p-4">
      <h1 className="text-headline">내 공간 관리</h1>
      <div className="flex justify-between">
        <p>여기에서 내 공간을 관리할 수 있습니다.</p>
        <SpaceAddModal />
      </div>
      <div className="mt-4 w-full">
        <MySpaceTable />
      </div>
    </div>
  )
}
