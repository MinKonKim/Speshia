import { createClient } from '@/lib/supabase'
import { SpaceDto } from './space.dto'
import { SupabaseResponse } from '@/types'

export const getSpaceInfo = async (spaceId: string): SupabaseResponse<SpaceDto> => {
  const supabase = await createClient()

  const response = await supabase.from('spaces').select('*').eq('id', spaceId).single()
  return response
}

export const getSpaceListByAdminId = async (adminId: string): SupabaseResponse<SpaceDto> => {
  const supabase = await createClient()

  const response = await supabase.from('spaces').select('*').eq('admin_id', adminId)
  return response
}
