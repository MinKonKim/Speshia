import { Database } from '@/types'

type AdminTable = Database['public']['Tables']['admins']

export type AdminDto = AdminTable['Row']
export type AdminInsertDto = AdminTable['Insert']
export type AdminUpdateDto = AdminTable['Update']
