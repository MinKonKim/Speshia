import { ApiResponsePromise } from '@/types'
import { Session, User, WeakPassword } from '@supabase/supabase-js'
import { insertUser, UserDataInsertDto } from '../user'
import { signInWithEmail, signUpWithEmail } from './auth.model'

type SignInResponse = {
  user: User
  session: Session
  weakPassword?: WeakPassword
}
/**
 *
 * @param email 이메일
 * @param password 비밀번호
 * @returns
 */
export const clientSignIn = async (
  email: string,
  password: string
): ApiResponsePromise<SignInResponse> => {
  try {
    const data = await signInWithEmail(email, password)

    return {
      data,
      status: data.session ? 200 : 401,
    }
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`)
  }
}

type SignUpResponse = {
  data: any[]
  // 추가적인 사용자 데이터가 필요하다면 여기에 정의할 수 있습니다.
}

export const clientSignUpWithEmail = async (
  email: string,
  password: string,
  userData?: UserDataInsertDto
): ApiResponsePromise<SignUpResponse> => {
  try {
    const { user: signUpUserData } = await signUpWithEmail(email, password)
    if (!signUpUserData) {
      throw new Error('회원가입 실패: 반환된 사용자 데이터가 없습니다.')
    }

    const data = await insertUser(signUpUserData.id, {
      ...userData,
    })

    return {
      data: {
        data,
      },
      status: 200,
    }
  } catch (error: any) {
    throw new Error(`Sign up failed: ${error.message}`)
  }
}
