import { AdminHeader } from '@/components/admin/header'

<<<<<<< HEAD
export default function AdminDashboardPage() {
  return (
    <main className="flex h-full w-full flex-col">
      <AdminHeader />
    </main>
  )
}
=======
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
>>>>>>> 77d45c06c73cfd48b6abf98d8dbc5bddf72c42d5
