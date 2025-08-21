'use client'

import { Button } from '@/components/ui'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

// --- Sub-components for maintainability ---

const Logo = () => (
  <div className="relative h-20 w-28">
    <Link href="/">
      <Image
        src="/images/logo_speshia-transparent.png"
        alt="Speshia Logo"
        layout="fill"
        objectFit="contain"
      />
    </Link>
  </div>
)

const navLinks = [
  { href: '#', label: '예약하기' },
  { href: '#', label: '관리자' },
  { href: '#', label: 'About' },
]

const Navigation = () => (
  <nav className="hidden gap-6 md:flex">
    {navLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        {link.label}
      </Link>
    ))}
  </nav>
)

const AuthButton = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  if (isLoading) {
    return <div className="h-8 w-20 animate-pulse rounded-md bg-gray-200"></div>
  }

  if (session) {
    return (
      <>
        <span className="text-sm text-gray-700">Welcome, {session.user?.name ?? 'User'}</span>
        <Button variant="outline" size="sm" onClick={() => signOut()}>
          Logout
        </Button>
      </>
    )
  }

  return (
    <Button size="sm" onClick={() => signIn()}>
      Login
    </Button>
  )
}

// --- Main Header Component ---

export default function MainHeader() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </header>
  )
}
