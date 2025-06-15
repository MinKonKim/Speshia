import { createClient } from "@/lib"

export const signUpWithEmail = async (email: string, password: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) {
    throw new Error(error.message)
  }
  return data
}

export const signInWithEmail = async (email: string, password: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}
