import { createClient } from '@/lib/supabase'
import { AdminDto, AdminInsertDto, AdminUpdateDto } from './admin.dto'

export const insertAdmin = async (adminData: AdminInsertDto) => {
  const supabase = await createClient()
  const response = await supabase.from('admins').insert(adminData).select()

  return response
}

export const getAdminDataById = async (adminId: string): Promise<AdminDto> => {
  const supabase = await createClient()
  const response = await supabase.from('admins').select('*').eq('admin_id', adminId).single()
  return response.data
}

export const updateAdminData = async (adminData: AdminUpdateDto) => {
  const supabase = await createClient()
  const response = await supabase.from('admins').update(adminData).select()
  return response
}
