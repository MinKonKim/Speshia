import { Tables, TablesInsert } from '@/types'

export type SpaceDto = Tables<'spaces'>
export type SpaceListDto = SpaceDto[] | []

export type SpaceInsertDto = TablesInsert<'spaces'>
