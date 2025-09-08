import { ReservationStatistics } from '@/components/admin/header/reservation-statistics'

export const AdminHeader = () => {
  return (
    <header className="w-full py-5">
      <div className="flex gap-5">
        <h1 className="text-secondary-950 text-5xl font-bold">DashBoard</h1>
      </div>
      <ReservationStatistics />
    </header>
  )
}
