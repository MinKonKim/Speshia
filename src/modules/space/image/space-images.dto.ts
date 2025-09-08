import { Tables, TablesInsert } from '@/types'

export type SpaceImageDto = Tables<'space_images'> & { url: string }
export type SpaceImageListDto = SpaceImageDto[] | []
export type SpaceImageInsertDto = TablesInsert<'space_images'>
