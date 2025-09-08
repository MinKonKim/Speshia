import { ProviderEnum } from '@/modules/user'
import { clsx, type ClassValue } from 'clsx'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { twMerge } from 'tailwind-merge'
import { authOptions } from './nextauth'

// 범용 헬퍼 함수

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const gesSession = async () => {
  return await getServerSession(authOptions)
}

export const transformToProviderEnum = (provider?: string): ProviderEnum | null => {
  if (provider === 'google' || provider === 'kakao' || provider === 'naver') {
    return provider as ProviderEnum
  }
  return null
}

export const handleError = (error: unknown) => {
  const message = error instanceof Error ? error.message : 'An unknown error occurred'
  console.error('API Error:', message)
  // Return a generic message to the client
  return NextResponse.json({ message: '서버 내부 오류가 발생했습니다.' }, { status: 500 })
}
