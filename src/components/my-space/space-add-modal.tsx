'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Modal } from '@/components/ui/modal'
import { Plus } from 'lucide-react'
import { useState, ChangeEvent } from 'react'

export function SpaceAddModal() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    maxCapacity: '',
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const handleSave = () => {
    // 필수 필드 검증 (예: 이름, 주소, 최대인원)
    if (!formData.name || !formData.address || !formData.maxCapacity) {
      alert('필수 항목을 모두 입력해주세요.')
      return
    }

    const newEntry = {
      ...formData,
      image: imageFile,
      id: Date.now(),
      createdAt: new Date().toLocaleString('ko-KR'),
    }

    // 실제 데이터 저장 로직 (API 호출 등)은 여기에 구현합니다.
    console.log('Saved Data:', newEntry)

    // 상태 초기화 및 모달 닫기
    setFormData({ name: '', description: '', address: '', maxCapacity: '' })
    setImageFile(null)
    setIsOpen(false)
  }

  const isSaveDisabled = !formData.name || !formData.address || !formData.maxCapacity

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button variant="secondary" size="sm" className="flex items-center">
          <Plus />
          공간 추가
        </Button>
      }
      title="새 공간 추가"
      description="아래 양식을 작성하여 새로운 공간을 등록하세요."
      footerContent={
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            취소
          </Button>
          <Button onClick={handleSave} disabled={isSaveDisabled}>
            저장
          </Button>
        </div>
      }
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            공간 이름
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="예: 스페시아 강남점"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            공간 설명
          </Label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="공간에 대한 설명을 입력하세요."
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="address" className="text-right">
            공간 주소
          </Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="정확한 주소를 입력하세요."
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="maxCapacity" className="text-right">
            최대 인원수
          </Label>
          <Input
            id="maxCapacity"
            name="maxCapacity"
            type="number"
            value={formData.maxCapacity}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="숫자만 입력"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="image" className="text-right">
            공간 이미지
          </Label>
          <Input id="image" type="file" onChange={handleFileChange} className="col-span-3" />
        </div>
      </div>
    </Modal>
  )
}
