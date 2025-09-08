import { MySpaceComponent } from '@/components/my-space/my-space-component'
import { MySpaceTable } from '@/components/my-space/my-space-table'
import { spaceApi } from '@/lib/api'

interface AdminMySpacePageProps {
  params: { adminId: string }
}

export default async function AdminMySpacePage({ params }: AdminMySpacePageProps) {
  const { adminId } = params
  const spaceList = await spaceApi.getSpaceListByAdminId(adminId)
  return (
    <MySpaceComponent>
      <MySpaceTable spaceList={spaceList} />
    </MySpaceComponent>
  )
}
