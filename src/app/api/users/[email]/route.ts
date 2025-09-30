import { getUserByEmail, updateUser, UserDataDto } from '@/modules/user'
import { ApiDefault, ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
  params: { email: string }
}

export const GET = async (
  request: NextRequest,
  { params }: Params
): ApiResponsePromise<UserDataDto> => {
  const { email } = await params
  try {
    const result = await getUserByEmail(email)

    return NextResponse.json(
      { data: result, message: '유저 정보 조회에 성공했습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: '유저 정보를 DB에서 가져오지 못했습니다.' },
      { status: 500 }
    )
  }
}

export const PATCH = async (
  request: NextRequest,
  { params }: Params
): ApiResponsePromise<ApiDefault> => {
  const { email } = await params
  const body = await request.json()

  try {
    await updateUser(email, body)
    return NextResponse.json(
      {
        message: '유저 정보가 성공적으로 업데이트 되었습니다.',
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: '유저 정보를 업데이트 하던 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
