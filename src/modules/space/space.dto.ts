import { Database } from '@/types'

export type SpaceDto = Database['public']['Tables']['spaces']['Row']
export type SpaceListDto = SpaceDto[] | []

export type SpaceInsertDto = Database['public']['Tables']['spaces']['Insert']
