'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function UserNav() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="h-9 w-24 animate-pulse rounded-full bg-gray-200" />
  }

  if (!session) {
    return (
      <Button onClick={() => signIn()} size="sm">
        로그인
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hover:ring-primary-200 relative h-9 w-9 rounded-full transition-shadow hover:ring-2 hover:ring-offset-2">
          <Avatar />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">{session.user?.name}</p>
            <p className="text-muted-foreground text-xs leading-none">{session.user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-1 border-gray-100" />
        {/* 메뉴 아이탬 추가 하는 곳  */}
        <DropdownMenuItem onClick={() => signOut()}>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
