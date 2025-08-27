// src/api/userApi.ts
import { useSession } from 'next-auth/react'
import { apiClient } from './core/axios'

class UserApi {
  private getAuthHeader() {
    const { data: session } = useSession()
    const token = session?.user.accessToken
    return token ? { Authorization: `Bearer ${token}` } : {}
  }

  async getUserList() {
    const headers = this.getAuthHeader()
    const res = await apiClient.get('/users', { headers })
    return res.data
  }

  async createUser(user: { name: string; email: string }) {
    const headers = this.getAuthHeader()
    const res = await apiClient.post('/users', user, { headers })
    return res.data
  }
}

// 싱글톤 형태로 export
export const userApi = new UserApi()
