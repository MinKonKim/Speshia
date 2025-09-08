import { Database, Tables, TablesInsert, TablesUpdate } from '@/types'

export type UserDataDto = Tables<'users'>
export type UserDataInsertDto = TablesInsert<'users'>
export type UserDataUpdateDto = TablesUpdate<'users'>

export type ProviderEnum = Database['public']['Enums']['provider_type']
