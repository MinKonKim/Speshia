import { SpaceImageDto } from '@/modules/space/image'
import { getSpaceImages, saveSpaceImages } from '@/modules/space/image/space-images.model'
import type { ApiDefault, ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<SpaceImageDto[]> {
  const spaceId = parseInt(params.spaceId, 10)

  if (isNaN(spaceId)) {
    return NextResponse.json({ message: '유효하지 않은 Space ID입니다.' }, { status: 400 })
  }

  try {
    const images = await getSpaceImages(spaceId)
    return NextResponse.json(images ?? [])
  } catch (error) {
    console.error('Error fetching space images:', error)
    return NextResponse.json(
      { message: '공간 이미지를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<{ filePath: string } & ApiDefault> {
  const spaceId = parseInt(params.spaceId, 10)

  if (isNaN(spaceId)) {
    return NextResponse.json({ message: '유효하지 않은 Space ID입니다.' }, { status: 400 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ message: '파일이 필요합니다.' }, { status: 400 })
    }

    const filePath = await saveSpaceImages(spaceId, file)
    return NextResponse.json({ message: '성공적으로 이미지를 업로드했습니다.', filePath })
  } catch (error) {
    console.error('Error uploading space image:', error)
    return NextResponse.json({ message: '이미지 업로드 중 오류가 발생했습니다.' }, { status: 500 })
  }
}
