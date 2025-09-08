import { UserNav } from '@/components/shared/user-nav'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui'
import { Separator } from '@radix-ui/react-context-menu'
import { Calendar, Settings, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface AdminSidebarProps {
  adminId: string
}

export function AdminSidebar({ adminId }: AdminSidebarProps) {
  const basicPath = `/admin/${adminId}`
  const items = [
    { title: '예약 현황', url: '#', icon: Calendar },
    { title: '회원 관리', url: '#', icon: Users },
    { title: '내 공간 관리', url: `${basicPath}/my-space`, icon: Settings },
  ]
  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarContent className="bg-secondary-200 h-full">
        <SidebarGroup className="h-full">
          <div className="flex w-full justify-end">
            <SidebarTrigger size="lg" />
          </div>
          <SidebarHeader className="">
            <Link href={`${basicPath}/dashboard`}>
              <Image src="/images/logo_speshia.svg" width={150} height={150} alt="대표이미지" />
            </Link>
          </SidebarHeader>
          <SidebarGroupContent className="text-secondary-950 mt-5 flex h-full flex-col justify-between">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100">
                    <a href={item.url} className="flex items-center justify-start">
                      <item.icon size={64} strokeWidth={1.8} className="w-5" />
                      <div className="flex w-full justify-center">
                        <span className="text-lg font-semibold">{item.title}</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarFooter className="mx-0 mb-2 w-full px-0">
              <Separator className="w-full border border-gray-200" />
              <div className="flex items-center justify-end">
                <UserNav />
              </div>
            </SidebarFooter>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
