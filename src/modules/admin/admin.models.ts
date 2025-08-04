import { Database } from '@/types'

// 공간 타입 정의
type Space = Database['public']['Tables']['spaces']['Row']

type User = Database['public']['Tables']['users']['Row']

export type { Space, User }
