'use client'
import { TooltipProvider } from '@/components/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
function Providers({ children, session }: { children: React.ReactNode; session?: any }) {
  const queryClient = new QueryClient()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="bg-white">{children}</div>
        </TooltipProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
