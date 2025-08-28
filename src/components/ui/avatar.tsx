'use client'

import { cn } from '@/lib/utils'
import { UserCircle } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import * as React from 'react'

export const Avatar = React.forwardRef<
  React.ElementRef<'div'>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { data: session } = useSession()
  const user = session?.user
  const userName = user?.name ?? 'User'
  const userImage = user?.image

  const ariaLabel = `Profile picture of ${userName}`

  return (
    <div
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className={cn(
        'relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm',
        className
      )}
      {...props}
    >
      {userImage ? (
        <Image
          src={userImage}
          alt={userName} // Alt text is also important for accessibility
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <UserCircle className="h-full w-full text-gray-400" />
      )}
    </div>
  )
})
Avatar.displayName = 'Avatar'
