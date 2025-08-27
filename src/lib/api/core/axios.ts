// src/lib/apiClient.ts
import axios, { AxiosInstance } from 'axios'

class ApiClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // 응답 인터셉터: 공통 에러 처리
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error)
        return Promise.reject(error)
      }
    )
  }

  getInstance(): AxiosInstance {
    return this.instance
  }
}

export const apiClient = new ApiClient().getInstance()
