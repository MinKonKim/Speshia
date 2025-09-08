import { Database } from '@/types'

export type SpaceImageDto = Database['public']['Tables']['space_images']['Row']
export type SpaceImageListDto = SpaceImageDto[] | []
