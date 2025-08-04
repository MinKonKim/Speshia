import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui'
import { Calendar, Settings, Users } from 'lucide-react'
import Image from 'next/image'

export const AdminSidebar = () => {
  const { open } = useSidebar()

  const items = [
    { title: '예약 현황', url: '#', icon: Calendar },
    { title: '회원 관리', url: '#', icon: Users },
    { title: '내 공간 관리', url: '/admin/1/my-space', icon: Settings },
  ]
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <Image src="/images/logo_speshia.png" width={100} height={200} alt="대표이미지" />
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100">
                    <a href={item.url} className="flex items-center justify-between">
                      <item.icon size={64} strokeWidth={1.8} />
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
