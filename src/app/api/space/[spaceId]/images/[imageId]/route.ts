import { NextRequest, NextResponse } from 'next/server'
import { deleteSpaceImage } from '@/modules/space/image/space-images.model'
import type { ApiDefault, ApiResponsePromise } from '@/types'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { imageId: string } },
): ApiResponsePromise<ApiDefault> {
  const imageId = parseInt(params.imageId, 10)

  if (isNaN(imageId)) {
    return NextResponse.json({ message: '유효하지 않은 Image ID입니다.' }, { status: 400 })
  }

  try {
    await deleteSpaceImage(imageId)
    return NextResponse.json({ message: '성공적으로 이미지를 삭제했습니다.' })
  } catch (error) {
    console.error('Error deleting space image:', error)
    return NextResponse.json(
      { message: '이미지 삭제 중 오류가 발생했습니다.' },
      { status: 500 },
    )
  }
}
