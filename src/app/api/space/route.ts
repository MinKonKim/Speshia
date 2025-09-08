import { getSpaceListByAdminId, SpaceDto } from '@/modules/space'
import { ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest): ApiResponsePromise<SpaceDto[] | null> => {
  const { searchParams } = new URL(request.url)
  const adminId = searchParams.get('adminId')

  if (!adminId) {
    return NextResponse.json({ message: 'adminId가 필요합니다.' }, { status: 400 })
  }

  try {
    const spaces = await getSpaceListByAdminId(adminId)
    return NextResponse.json(
      {
        ...spaces,
        message: `${spaces ? '등록된 공간들이 없습니다.' : '공간 리스트를 가져왔습니다.'}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching spaces:', error) // 서버 측 로깅을 위한 에러 출력
    return NextResponse.json(
      { message: '공간 목록을 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
