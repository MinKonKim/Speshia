'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SpaceInsertDto } from '@/modules/space'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AddressForm } from '../shared'
import { Button } from '../ui'
import { ImageUploadPreview } from './image-upload-preview'

const spaceFormSchema = z.object({
  name: z.string().min(1, { message: '공간 이름을 입력해주세요.' }),
  description: z.string().optional(),
  address: z.object({
    postcode: z.string().min(1, { message: '우편번호를 입력해주세요.' }),
    address: z.string().min(1, { message: '주소를 입력해주세요.' }),
    detail: z.string().optional(),
  }),
  maxCapacity: z.coerce.number().min(1, { message: '최대 인원수를 1 이상으로 입력해주세요.' }),
  images: z.array(z.any()).optional(),
})

export type SpaceFormDto = z.infer<typeof spaceFormSchema>

interface SpaceAddFormProps {}

export default function SpaceAddForm({}: SpaceAddFormProps) {
  const form = useForm<SpaceFormDto>({
    resolver: zodResolver(spaceFormSchema),
    defaultValues: {
      name: '',
      description: '',
      address: {
        postcode: '',
        address: '',
        detail: '',
      },
      maxCapacity: 0,
      images: [],
    },
  })
  const params = useParams()

  const handleSave = async (data: SpaceFormDto) => {
    // TODO: API 호출 등 실제 데이터 저장 로직 구현
    const spaceData: SpaceInsertDto = {
      name: data.name,
      description: data.description,
      address: `${data.address.postcode} ${data.address.address} ${data.address.detail}`,
      max_capacity: data.maxCapacity,
      admin_id: Number(params.adminId),
      status: 'rejected',
      is_active: false,
    }
    console.log('Saving space data:', spaceData, 'images:', data.images)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSave)} className="grid gap-6 rounded-lg p-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel className="text-primary-900 text-right">공간 이름</FormLabel>
              <FormControl className="col-span-3">
                <Input
                  placeholder="예: 스페시아 강남점"
                  className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel className="text-primary-900 text-right">공간 설명</FormLabel>
              <FormControl className="col-span-3">
                <Textarea
                  placeholder="공간에 대한 설명을 입력하세요."
                  className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={() => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel className="text-primary-900 text-right">공간 주소</FormLabel>
              <AddressForm control={form.control} name="address" />
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maxCapacity"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel className="text-primary-900 text-right">최대 인원수</FormLabel>
              <FormControl className="col-span-3">
                <Input
                  type="number"
                  placeholder="숫자만 입력"
                  className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />

        <ImageUploadPreview
          control={form.control}
          getValues={form.getValues}
          setValue={form.setValue}
        />

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            취소
          </Button>
          <Button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white">
            저장
          </Button>
        </div>
      </form>
    </Form>
  )
}
