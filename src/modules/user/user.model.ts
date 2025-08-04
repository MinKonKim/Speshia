import { createClient } from '@/lib/supabase'

export const getUserList = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('users').select('*').single()
  console.log('getUser', data)
  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const insertUser = async (userId: string, userData: any) => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('users')
    .insert([{ id: userId, ...userData }])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const updateUser = async (userId: string, userData: any) => {
  const supabase = await createClient()

  const { data, error } = await supabase.from('users').update(userData).eq('id', userId).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
