import { deleteSpaceImage } from '@/modules/space/image/space-images.model'
import { ApiDefault, ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { imageId: string; spaceId: number } }
): ApiResponsePromise<ApiDefault> => {
  const { imageId, spaceId } = params
  const imageIdAsNumber = parseInt(imageId, 10)

  if (!spaceId) {
    return NextResponse.json({ message: 'spaceId가 필요합니다.' }, { status: 400 })
  }
  if (!imageId) {
    return NextResponse.json({ message: 'imageId가 필요합니다.' }, { status: 400 })
  }

  try {
    await deleteSpaceImage(imageId)
    return NextResponse.json({ message: '성공적으로 이미지를 삭제했습니다.' })
  } catch (error) {
    return NextResponse.json({ message: '이미지 삭제 중 오류가 발생했습니다.' }, { status: 500 })
  }
}
