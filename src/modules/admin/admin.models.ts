import { createClient } from '@/lib/supabase'
import { AdminInsertDto } from './admin.dto'

export const insertAdmin = async (adminData: AdminInsertDto) => {
  const supabase = await createClient()
  const response = await supabase.from('admins').insert(adminData)

  return response
}
