import { SpaceImageDto } from '@/modules/space/image'
import { apiClient } from './core/axios'

class SpaceImageApi {
  private client = apiClient

  async getSpaceImages(spaceId: string): Promise<SpaceImageDto[]> {
    const res = await this.client.get<SpaceImageDto[]>(`/space/${spaceId}/images`)
    return res.data
  }

  async uploadSpaceImage(
    spaceId: string,
    file: File
  ): Promise<{ message: string; filePath: string }> {
    const formData = new FormData()
    formData.append('file', file)
    const res = await this.client.post<{ message: string; filePath: string }>(
      `/space/${spaceId}/images`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
    return res.data
  }

  async deleteSpaceImage(imageId: number, spaceId: number): Promise<{ message: string }> {
    const res = await this.client.delete<{ message: string }>(`/space/${spaceId}/images/${imageId}`)
    return res.data
  }
}
export const spaceImageApi = new SpaceImageApi()
