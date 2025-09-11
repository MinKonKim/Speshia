'use client'

import { Control, UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import { SpaceFormDto } from './space-add-form'
import { useEffect, useState } from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui'

interface ImageUploadPreviewProps {
  control: Control<SpaceFormDto>
  getValues: UseFormGetValues<SpaceFormDto>
  setValue: UseFormSetValue<SpaceFormDto>
}

export function ImageUploadPreview({ control, getValues, setValue }: ImageUploadPreviewProps) {
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)
      const currentFiles = getValues('images') || []
      const updatedFiles = [...currentFiles, ...newFiles]
      setValue('images', updatedFiles)

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
      setImagePreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const handleRemoveImage = (index: number) => {
    const currentFiles = getValues('images') || []
    const updatedFiles = currentFiles.filter((_, i) => i !== index)
    setValue('images', updatedFiles)

    const updatedPreviews = [...imagePreviews]
    URL.revokeObjectURL(updatedPreviews[index])
    updatedPreviews.splice(index, 1)
    setImagePreviews(updatedPreviews)
  }

  useEffect(() => {
    return () => {
      imagePreviews.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [imagePreviews])

  return (
    <>
      <FormField
        control={control}
        name="images"
        render={() => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel className="text-primary-900 text-right">공간 이미지</FormLabel>
            <FormControl className="col-span-3">
              <Input
                type="file"
                multiple
                onChange={handleImageChange}
                className="border-secondary-200 focus:border-primary-400 focus:ring-primary-400"
              />
            </FormControl>
            <FormMessage className="col-span-4" />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 col-start-2">
          <div className="min-h-[120px] rounded-lg border border-dashed border-gray-300 p-4">
            {imagePreviews.length > 0 ? (
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`미리보기 ${index + 1}`}
                      className="h-24 w-full rounded-lg object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute right-1 top-1 h-6 w-6 p-0"
                    >
                      X
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-gray-500">이미지 미리보기</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}