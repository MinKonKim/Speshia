import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Space 타입 정의
interface Space {
  address: string
  business_registration_number: number
  created_at: string
  description: string
  id: number
  is_active: boolean
  max_capacity: number
  name: string
  updated_at: string
}

const mockData: Space[] = [
  {
    address:
      '서울특별시 강남구 테헤란로 123길 45-67 ABC빌딩 8층 801호 (역삼동) 매우 긴 주소 예시입니다',
    business_registration_number: 1234567890,
    created_at: '2023-10-01T00:00:00Z',
    description: '테스트 공간',
    id: 1,
    is_active: true,
    max_capacity: 4,
    name: '테스트 공간 이름',
    updated_at: '2023-10-01T00:00:00Z',
  },
  {
    address:
      '부산광역시 해운대구 센텀남대로 35 부산국제금융센터(BIFC) 63층 6301호 매우 긴 주소 예시입니다',
    business_registration_number: 1234567890,
    created_at: '2023-10-01T00:00:00Z',
    description: '테스트 공간',
    id: 2,
    is_active: true,
    max_capacity: 8,
    name: '테스트 공간 이름 2',
    updated_at: '2023-10-01T00:00:00Z',
  },
  {
    address: '인천광역시 연수구 송도과학로 123 송도국제업무단지 A동 1201호',
    business_registration_number: 1234567890,
    created_at: '2023-10-01T00:00:00Z',
    description: '테스트 공간',
    id: 3,
    is_active: true,
    max_capacity: 6,
    name: '테스트 공간 이름 3',
    updated_at: '2023-10-01T00:00:00Z',
  },
]

export function MySpaceTable() {
  return (
    <Table className="w-full p-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">번호</TableHead>
          <TableHead className="w-[200px]">이름</TableHead>
          <TableHead className="w-[400px]">주소</TableHead>
          <TableHead className="w-[120px] text-center">최대인원</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((space, index) => (
          <TableRow
            key={space.id}
            className="hover:bg-primary-300 cursor-pointer text-lg hover:text-white"
            onClick={() => console.log(`Selected space ID: ${space.id}`)}
          >
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="font-medium">{space.name}</TableCell>
            <TableCell className="scrollbar-hover max-w-[400px] overflow-x-auto pb-2 whitespace-nowrap">
              {space.address}
            </TableCell>
            <TableCell className="text-center">{space.max_capacity}명</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
