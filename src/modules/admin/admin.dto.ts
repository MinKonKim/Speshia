import { Tables, TablesInsert, TablesUpdate } from '@/types'

export type AdminDto = Tables<'admins'>
export type AdminInsertDto = TablesInsert<'admins'>
export type AdminUpdateDto = TablesUpdate<'admins'>
