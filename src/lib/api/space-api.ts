import { SpaceDto, SpaceListDto } from '@/modules/space'
import { apiClient } from './core/axios'

class SpaceApi {
  private client = apiClient

  async getSpaceListByAdminId(adminId: string): Promise<SpaceListDto> {
    const res = await this.client.get<SpaceListDto>(`/space?adminId=${adminId}`)
    return res.data
  }

  async getSpaceInfo(spaceId: string): Promise<SpaceDto> {
    const res = await this.client.get<SpaceDto>(`/space/${spaceId}`)
    return res.data
  }
}

export const spaceApi = new SpaceApi()
