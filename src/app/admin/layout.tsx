'use client'

import { AdminSidebar } from '@/components/admin/sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="h-full w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout
