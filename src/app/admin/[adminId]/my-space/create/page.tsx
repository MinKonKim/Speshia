'use client'

import SpaceAddForm from '@/components/my-space/space-create-form'

export default function AddSpacePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">새로운 공간 추가</h1>
      <p className="text-muted-foreground mt-2">아래 양식을 작성하여 내 공간을 추가하세요.</p>
      <div className="mt-8">
        <SpaceAddForm />
      </div>
    </div>
  )
}
