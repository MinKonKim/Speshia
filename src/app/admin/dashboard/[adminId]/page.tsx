import { AdminHeader } from '@/components/admin/header'

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </div>
    </div>
  )
}

export default AdminDashboardPage
