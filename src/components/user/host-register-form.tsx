'use client'
import { userApi } from '@/lib/api/user-api'
import { UserDataUpdateDto } from '@/modules/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '../ui'
const hostRegisterFormSchema = z.object({
  businessName: z.string().min(1, {
    message: '사업자명을 입력해주세요.',
  }),
  contact: z.string(),
})

export function HostRegisterForm() {
  const session = useSession()
  const form = useForm<z.infer<typeof hostRegisterFormSchema>>({
    resolver: zodResolver(hostRegisterFormSchema),
    defaultValues: {
      businessName: '',
      contact: '',
    },
  })
  const onSubmit = async (values: z.infer<typeof hostRegisterFormSchema>) => {
    if (!session?.data?.user.email) {
      const payload: UserDataUpdateDto = {
        ...values,
        role: 'admin',
      }

      await userApi.updateUser(session.data?.user.email as string, payload)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="사업자명을 입력해주세요." {...field} />
              </FormControl>
              <FormDescription>사업자 명 입력</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>전화번호</FormLabel>
              <FormControl>
                <Input placeholder="전화번호을 입력해주세요." {...field} />
              </FormControl>
              <FormDescription>전화번호 입력</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">등록하기</Button>
      </form>
    </Form>
  )
}
