import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

const MOCK_STATISTICS = [
  {
    label: '오늘',
    value: 0,
  },
  {
    label: '이번 주',
    value: 1,
  },
  {
    label: '한달',
    value: 10,
  },
]

type ReservationStatisticsProps = ComponentProps<'div'>

export function ReservationStatistics({ className, ...props }: ReservationStatisticsProps) {
  return (
    <div className={cn('hidden gap-2 p-4 text-sm md:flex', className)} {...props}>
      <div className="mx-2 h-full" />
      <div className="flex items-center gap-4">
        {MOCK_STATISTICS.map((statistic) => (
          <div key={statistic.label} className="flex items-center gap-2">
            <span className="font-semibold">{statistic.label}:</span>
            <span className="text-primary-500">{statistic.value}건</span>
          </div>
        ))}
      </div>
    </div>
  )
}
