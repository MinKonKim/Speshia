import { createClient } from '@/lib/supabase'

export const getSpaceInfo = async (spaceId: string) => {
  const supabase = await createClient()

  const response = await supabase.from('spaces').select('*').eq('id', spaceId).single()
  return response
}
