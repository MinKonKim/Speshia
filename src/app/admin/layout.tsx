'use client'

import { AdminSidebar } from '@/components/admin/sidebar'
import { SidebarProvider } from '@/components/ui'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      {children}
    </SidebarProvider>
  )
}

export default AdminLayout
