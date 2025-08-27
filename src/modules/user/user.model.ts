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

export const updateUser = async (userId: string, userData: any) => {
  const supabase = await createClient()

  const { data, error } = await supabase.from('users').update(userData).eq('id', userId).select()

  if (error) {
    return { error: error.message }
  }

  return data
}
