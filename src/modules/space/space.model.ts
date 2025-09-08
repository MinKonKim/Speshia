import { createClient } from '@/lib/supabase'
import { SpaceDto } from './space.dto'

export const getSpaceInfo = async (spaceId: string) => {
  const supabase = await createClient()

  const response = await supabase.from('spaces').select('*').eq('id', spaceId).single()
  return response
}

export const getSpaceListByAdminId = async (adminId: string): Promise<SpaceDto[] | null> => {
  const supabase = await createClient()

  const response = await supabase.from('spaces').select('*').eq('admin_id', adminId)
  return response.data
}
