import { createClient } from '@/lib/supabase'
import { SpaceImageDto } from './space-images.dto'

export const saveSpaceImages = async (spaceId: number, file: File): Promise<string> => {
  const supabase = await createClient()
  const filePath = `spaces/${spaceId}/${file.name}`
  // 1. 스토리지에 업로드
  const { error: uploadError } = await supabase.storage
    .from('spaces')
    .upload(filePath, file, { upsert: true })

  if (uploadError) {
    throw new Error('🚫스토리지에 업로드를 실패했습니다!: ' + uploadError.message)
  }

  // 2. DB에 파일 경로 기록
  const { error: dbError } = await supabase.from('space_images').upsert([
    {
      space_id: spaceId,
      image_path: filePath,
    },
  ])

  if (dbError) {
    throw new Error('🚫DB에 파일 경로 기록을 실패했습니다!: ' + dbError.message)
  }

  return filePath
}

// 공간의 이미지 목록 불러오기
export const getSpaceImages = async (spaceId: number): Promise<SpaceImageDto[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('space_images').select('*').eq('spce_id ', spaceId)
  if (error) {
    throw new Error('🚫공간 이미지를 불러오는데 실패했습니다!: ' + error.message)
  }

  return data.map((img) => ({
    ...img,
    url: supabase.storage.from('spaces').getPublicUrl(img.image_path).data.publicUrl,
  }))
}

export const deleteSpaceImage = async (imageId: number): Promise<boolean> => {
  const supabase = await createClient()

  // 1. DB에서 file_path 가져오기
  const { data, error: fetchError } = await supabase
    .from('space_images')
    .select('file_path')
    .eq('id', imageId)
    .single()

  if (fetchError) throw fetchError

  // 2. 스토리지에서 이미지 삭제
  const { error: storageError } = await supabase.storage.from('spaces').remove([data.file_path])
  if (storageError) {
    throw new Error('🚫스토리지에서 이미지 삭제를 실패했습니다!: ' + storageError.message)
  }

  // 3. DB에서 이미지 메타데이터 삭제
  const { error: dbError } = await supabase.from('spaces_images').delete().eq('id', imageId)
  if (dbError) {
    throw new Error('🚫DB에서 이미지 메타데이터 삭제를 실패했습니다!: ' + dbError.message)
  }

  return true
}
