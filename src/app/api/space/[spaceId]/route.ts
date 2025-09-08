import { NextRequest, NextResponse } from 'next/server'
import { getSpaceInfo } from '@/modules/space/space.model'
import { SpaceDto } from '@/modules/space/space.dto'
import { ApiResponsePromise } from '@/types'

export const GET = async (
  request: NextRequest,
  { params }: { params: { spaceId: string } }
): ApiResponsePromise<SpaceDto> => {
  const { spaceId } = params

  if (!spaceId) {
    return NextResponse.json({ message: 'spaceId가 필요합니다.' }, { status: 400 })
  }

  try {
    const { data: space, error } = await getSpaceInfo(spaceId)

    if (error) {
      console.error('Supabase error fetching space:', error.message)
      return NextResponse.json(
        { message: '공간 정보를 가져오는 중 오류가 발생했습니다. ' },
        { status: 500 }
      )
    }

    if (!space) {
      return NextResponse.json({ message: '해당 공간을 찾을 수 없습니다.' }, { status: 404 })
    }

    return NextResponse.json(space)
  } catch (e) {
    console.error('Unexpected error fetching space:', e)
    return NextResponse.json(
      { message: '공간 정보를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
