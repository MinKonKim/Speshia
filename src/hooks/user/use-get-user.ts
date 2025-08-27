import { userApi } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => userApi.getUserList(),
  })
}
