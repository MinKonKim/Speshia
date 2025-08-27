import { ProviderEnum } from '@/modules/user'
import { clsx, type ClassValue } from 'clsx'
import { getServerSession } from 'next-auth'
import { twMerge } from 'tailwind-merge'
import { authOptions } from './nextauth'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const gesSession = async () => {
  return await getServerSession(authOptions)
}

export const transforomToProviderEnum = (provider?: string): ProviderEnum | null => {
  if (provider === 'google' || provider === 'kakao' || provider === 'naver') {
    return provider as ProviderEnum
  }
  return null
}
