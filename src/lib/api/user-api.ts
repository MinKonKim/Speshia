import { UserDataDto, UserDataInsertDto, UserDataUpdateDto } from '@/modules/user'
import { apiClient } from './core/axios'

export class UserApi {
  private client = apiClient

  async getUserList(): Promise<UserDataDto[]> {
    const res = await this.client.get<UserDataDto[]>('/users')
    return res.data
  }

  async createUser(payload: UserDataInsertDto) {
    await this.client.post<UserDataDto>('/users', payload)
  }

  async updateUser(email: string, payload: UserDataUpdateDto) {
    await this.client.patch<UserDataDto>(`/users/${email}`, payload)
  }
}

export const userApi = new UserApi()
