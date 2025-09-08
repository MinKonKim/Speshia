import { getSpaceListByAdminId } from '@/modules/space/space.model'
import { SpaceDto } from '@/modules/space/space.dto'
import { ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest): ApiResponsePromise<SpaceDto[]> => {
  const { searchParams } = new URL(request.url)
  const adminId = searchParams.get('adminId')

  if (!adminId) {
    return NextResponse.json({ message: 'adminId가 필요합니다.' }, { status: 400 })
  }

  try {
    const { data: spaces, error } = await getSpaceListByAdminId(adminId)

    if (error) {
      console.error('Supabase error fetching spaces:', error.message)
      return NextResponse.json(
        { message: '공간 목록을 가져오는 중 오류가 발생했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json(spaces ?? [])
  } catch (e) {
    console.error('Unexpected error fetching spaces:', e)
    return NextResponse.json(
      { message: '공간 목록을 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}