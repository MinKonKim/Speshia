import { UserDataDto, UserDataInsertDto } from '@/modules/user'
import { ApiResponsePromise } from '@/types'
import { apiClient } from './core/axios'

export class UserApi {
  private client = apiClient

  async getUserList(): ApiResponsePromise<UserDataDto[]> {
    const res = await this.client.get<UserDataDto[]>('/users')
    return { data: res.data, status: res.status }
  }

  async createUser(payload: UserDataInsertDto): ApiResponsePromise<UserDataDto> {
    const res = await this.client.post<UserDataDto>('/users', payload)
    return { data: res.data, status: res.status }
  }
}

export const userApi = new UserApi()
