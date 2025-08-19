import { Database } from './supabase.types'

export type User = Database['public']['Tables']['users']['Row']
