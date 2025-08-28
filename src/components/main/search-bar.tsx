import { Search } from 'lucide-react'
import { Input } from '../ui'

export function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-md lg:block">
      <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        placeholder="원하는 공간을 찾아보세요"
        className="w-full rounded-full border-gray-300 bg-gray-100 py-2 pr-4 pl-10 focus:bg-white focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
