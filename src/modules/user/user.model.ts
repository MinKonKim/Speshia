import { createClient } from '@/lib/supabase'
import { UserDataDto, UserDataInsertDto } from './user.dto'
import { SupabaseResponse } from '@/types'

export const getUserList = async (): SupabaseResponse<UserDataDto> => {
  const supabase = await createClient()
  return supabase.from('users').select('*')
}

export const getUserByEmail = async (email: string): SupabaseResponse<UserDataDto> => {
  const supabase = await createClient()
  return supabase.from('users').select('*').eq('email', email).single()
}

export const insertUser = async (userData: UserDataInsertDto): SupabaseResponse<UserDataDto> => {
  const supabase = await createClient()
  return supabase
    .from('users')
    .upsert([{ ...userData }], { onConflict: 'email' })
    .select()
}

export const updateUser = async (
  email: string,
  userData: UserDataInsertDto
): SupabaseResponse<UserDataDto> => {
  const supabase = await createClient()

  return supabase.from('users').update(userData).eq('email', email).select()
}
