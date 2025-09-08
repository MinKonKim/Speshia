'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
import { Control, useController } from 'react-hook-form'

declare global {
  interface Window {
    daum: any
  }
}

interface AddressFormProps {
  control: Control<any>
  name: string
}

export default function AddressForm({ control, name }: AddressFormProps) {
  const { field } = useController({
    control,
    name,
    defaultValue: { postcode: '', address: '', detail: '' },
  })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleComplete = (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    field.onChange({
      postcode: data.zonecode,
      address: fullAddress,
      detail: '', // Reset detail on new address search
    })
  }

  const handleClick = () => {
    if (window.daum) {
      new window.daum.Postcode({
        oncomplete: handleComplete,
      }).open()
    }
  }

  return (
    <div className="col-span-3 space-y-2">
      <div className="flex gap-2">
        <Input
          className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400 w-32"
          value={field.value.postcode}
          readOnly
          placeholder="우편번호"
        />
        <Button type="button" onClick={handleClick} variant="outline">
          주소찾기
        </Button>
      </div>
      <Input
        value={field.value.address}
        className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400"
        readOnly
        placeholder="기본 주소"
      />
      <Input
        className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400"
        value={field.value.detail}
        onChange={(e) => field.onChange({ ...field.value, detail: e.target.value })}
        placeholder="상세 주소 (동/호수 등)"
      />
    </div>
  )
}
