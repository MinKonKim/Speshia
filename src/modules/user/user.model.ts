import { createClient } from '@/lib/supabase'
import { UserDataDto, UserDataInsertDto } from './user.dto'

export const getUserList = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('users').select('*')
  console.log('getUser', data)
  if (error) {
    return { error: error.message }
  }

  return data as UserDataDto[]
}

export const getUserByEmail = async (email: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('users').select('*').eq('email', email).single()
  if (error) {
    return { error: error.message }
  }

  return data as UserDataDto
}

export const insertUser = async (userData: UserDataInsertDto) => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('users')
    .upsert([{ ...userData }], { onConflict: 'email' })
    .select()

  if (error) {
    console.log('insertUser error', error)
    return { error: error.message }
  }
  return data
}

export const updateUser = async (email: string, userData: UserDataInsertDto) => {
  const supabase = await createClient()

  const { data, error } = await supabase.from('users').update(userData).eq('email', email).select()

  if (error) {
    return { error: error.message }
  }

  return data
}
