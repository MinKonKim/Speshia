import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function SpaceAddModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [savedData, setSavedData] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    if (formData.name && formData.email) {
      const newEntry = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toLocaleString('ko-KR'),
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="flex items-center">
          <Plus />
          공간 추가
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">정보 입력</DialogTitle>
          <DialogDescription className="text-gray-600">
            아래 양식을 작성해 주세요. 이름과 이메일은 필수 항목입니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
              전화번호
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="전화번호를 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="메시지를 입력하세요"
            />
          </div>
        </div>

        <DialogFooter>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            disabled={!formData.name || !formData.email}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            저장
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
