import { supabase } from '@/lib'

export const getUser = async (userId: string) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    throw new Error(error.message)
  }

  return user
}

export const insertUser = async (userId: string, userData: any) => {
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
  const { data, error } = await supabase.from('users').update(userData).eq('id', userId).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
