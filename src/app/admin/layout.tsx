'use client'

import { AdminSidebar } from '@/components/admin/sidebar/admin-sidebar'
import { SidebarProvider } from '@/components/ui'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="h-full w-full">{children}</main>
    </SidebarProvider>
  )
}

export default AdminLayout
