'use client'
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui'
import { Menu } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { UserNav } from '../shared/user-nav'
import { SearchBar } from './search-bar'

// --- Reusable Components ---

const navLinks = [
  { href: '#', label: '예약하기' },
  { href: '/admin/dashboard/1', label: '관리자' }, // temp adminId
  { href: '#', label: 'About' },
]

const handleMySpaceButtonClick = async () => {
  const session = await getServerSession()
  if (session?.user.accessToken) {
    // Redirect to the space registration page if the user is authenticated
    window.location.href = '/spaces/new'
  }
}

const Logo = () => (
  <Link href="/" className="relative h-16 w-28 flex-shrink-0">
    <Image
      src="/images/logo_speshia-transparent.png"
      alt="Speshia Logo"
      layout="fill"
      objectFit="contain"
      priority
    />
  </Link>
)

// --- Desktop Navigation ---

const DesktopNav = () => (
  <nav className="hidden items-center gap-6 md:flex">
    {navLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        {link.label}
      </Link>
    ))}
  </nav>
)

// --- Mobile Navigation ---

const MobileNav = () => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <Button className="w-full" onClick={handleMySpaceButtonClick}>
            내 공간 등록하기
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
)

// --- Main Header Component ---
//TODO: [다음작업]공간 등록 페이지 링크 연결하기
export default function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Logo />
          <DesktopNav />
        </div>

        <SearchBar />

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button onClick={handleMySpaceButtonClick}>내 공간 등록하기</Button>
          </div>
          <div className="hidden md:block">
            <UserNav />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
