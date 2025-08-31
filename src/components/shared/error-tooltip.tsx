import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ReactNode } from 'react'

interface ValidationTooltipProps {
  children: ReactNode
  message?: string
  open?: boolean
}

export function ValidationTooltip({ children, message, open }: ValidationTooltipProps) {
  if (!message) return <>{children}</>

  return (
    <Tooltip open={open}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="bg-red-600 text-sm text-white">{message}</TooltipContent>
    </Tooltip>
  )
}
