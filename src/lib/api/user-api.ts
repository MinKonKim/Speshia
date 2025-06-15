import axios from 'axios'

export const userApi = () => {
  const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/user`
  if (!BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined')
  }
  return axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' },
  })
}
