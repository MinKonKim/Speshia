import { insertUser, UserDataInsertDto } from '@/modules/user'
import { ApiDefault, ApiResponsePromise } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest): ApiResponsePromise<ApiDefault> => {
  try {
    const payload = await req.json()
    console.log('Received payload:', payload)
    const userData: UserDataInsertDto = {
      ...payload,
    }

    await insertUser(userData)

    // ApiResponse 형태에 맞춰 반환
    return NextResponse.json(
      {
        message: '유저 데이터가 성공적으로 입력되었습니다.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error inserting user:', error)

    return NextResponse.json(
      { message: '유저 데이터 입력 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
