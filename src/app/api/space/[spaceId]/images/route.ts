import { SpaceListDto } from '@/modules/space'
import { getSpaceImages, saveSpaceImages } from '@/modules/space/image/space-images.model'
import { ApiDefault, ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: { spaceId: number } }
): ApiResponsePromise<SpaceListDto> => {
  const { spaceId } = params
  if (!spaceId) {
    return NextResponse.json({ message: 'spaceId가 필요합니다.' }, { status: 400 })
  }

  try {
    const images = await getSpaceImages(spaceId)
    return NextResponse.json(images, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: '공간 이미지를 불러오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export const POST = async (
  req: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<ApiDefault> => {
  const { spaceId } = params
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ message: '파일이 필요합니다.' }, { status: 400 })
  }

  try {
    const filePath = await saveSpaceImages(spaceId, file)
    return NextResponse.json({ message: '성공적으로 이미지를 업로드했습니다.', filePath })
  } catch (error) {
    return NextResponse.json({ message: '이미지 업로드 중 오류가 발생했습니다.' }, { status: 500 })
  }
}
