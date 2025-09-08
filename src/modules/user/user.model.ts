import { createClient } from '@/lib/supabase'
import { UserDataDto, UserDataInsertDto } from './user.dto'
import { SupabaseResponsePromise, SupabaseSingleResponsePromise } from '@/types'

export const getUserList = async (): SupabaseResponsePromise<UserDataDto> => {
  const supabase = await createClient()
  return supabase.from('users').select('*')
}

export const getUserByEmail = async (email: string): SupabaseSingleResponsePromise<UserDataDto> => {
  const supabase = await createClient()
  return supabase.from('users').select('*').eq('email', email).single()
}

export const insertUser = async (
  userData: UserDataInsertDto
): SupabaseResponsePromise<UserDataDto> => {
  const supabase = await createClient()
  return supabase
    .from('users')
    .upsert([{ ...userData }], { onConflict: 'email' })
    .select()
}

export const updateUser = async (
  email: string,
  userData: UserDataInsertDto
): SupabaseResponsePromise<UserDataDto> => {
  const supabase = await createClient()

  return supabase.from('users').update(userData).eq('email', email).select()
}
