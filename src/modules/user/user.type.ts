import { Database } from '@/types'

export type UserDataDto = Database['public']['Tables']['users']['Row']
export type UserDataInsertDto = Database['public']['Tables']['users']['Insert']
export type UserDataUpdateDto = Database['public']['Tables']['users']['Update']
