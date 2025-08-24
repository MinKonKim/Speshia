import { Database } from '@/types'

type Spaces = Database['public']['Tables']['spaces']

export type SpaceDto = Spaces['Row']
export type SpaceInsertDto = Spaces['Insert']
export type SpaceUpdateDto = Spaces['Update']
