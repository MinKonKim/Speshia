import { AdminSidebar } from '@/components/admin/sidebar/admin-sidebar'
import { SidebarProvider } from '@/components/ui'

interface AdminLayoutProps {
  children: React.ReactNode
  params: { adminId: string }
}

export default async function AdminLayout({ children, params }: AdminLayoutProps) {
  const { adminId } = await params
  return (
    <SidebarProvider>
      <AdminSidebar adminId={adminId} />
      <main className="h-full w-full">{children}</main>
    </SidebarProvider>
  )
}
