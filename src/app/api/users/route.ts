import { getUserList, insertUser, UserDataDto, UserDataInsertDto } from '@/modules/user'
import { ApiDefault, ApiResponsePromise } from '@/types'
import { NextRequest } from 'next/server'

export const GET = async (): ApiResponsePromise<UserDataDto[] | ApiDefault> => {
  try {
    const data = await getUserList()
    return {
      data,
      status: 200,
      total: data.length,
    }
  } catch (error) {
    console.error('Error fetching user:', error)
    return {
      data: { message: '유저 목록 불러오기 중 오류 발생' },
      status: 500,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export const POST = async (req: NextRequest): ApiResponsePromise<ApiDefault> => {
  try {
    const { name, email, image, provider } = await req.json()
    const userData: UserDataInsertDto = {
      name,
      email,
      provider,
      is_admin: false,
      role: 'user',
    }

    await insertUser(userData)

    // ApiResponse 형태에 맞춰 반환
    return {
      data: { message: '유저 데이터 성공적으로 입력완료!!' },
      status: 200,
    }
  } catch (error) {
    console.error('Error inserting user:', error)

    return {
      data: { message: '유저 데이터 입력 중 오류 발생' },
      status: 500,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
