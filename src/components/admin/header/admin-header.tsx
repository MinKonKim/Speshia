import { ReservationStatistics } from '@/components/admin/header/reservation-statistics'
import { UserNav } from '@/components/shared/user-nav'
import { SidebarTrigger } from '@/components/ui'
import { cn } from '@/lib/utils'

export const AdminHeader = () => {
  return (
    <header
      className={cn(
        'from-secondary-200 to-secondary-300 sticky top-0 z-30 grid h-14 grid-cols-2 items-center gap-4 border-b bg-gradient-to-r px-4'
      )}
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <ReservationStatistics />
      </div>
      <div className="flex items-center justify-end">
        <UserNav />
      </div>
    </header>
  )
}
