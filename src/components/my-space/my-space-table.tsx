import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SpaceListDto } from '@/modules/space'

interface MySpaceTableProps {
  spaceList: SpaceListDto
}

export function MySpaceTable({ spaceList }: MySpaceTableProps) {
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
        {spaceList?.map((space, index) => (
          <TableRow
            key={space.id}
            className="hover:bg-primary-300 cursor-pointer text-lg hover:text-white"
            onClick={() => console.log(`Selected space ID: ${space.id}`)}
          >
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="font-medium">{space.name}</TableCell>
            <TableCell className="scrollbar-hover max-w-[400px] overflow-x-auto pb-2 whitespace-nowrap">
              {space.description}
            </TableCell>
            <TableCell className="text-center">{space.max_capacity}명</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
