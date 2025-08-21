import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const { pathname } = req.nextUrl

  // 1. 로그인한 사용자가 로그인 페이지에 접근 시 메인 페이지로 리디렉션
  if (token && pathname.startsWith('/auth/signin')) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // 2. 로그인하지 않은 사용자가 보호된 페이지에 접근 시 로그인 페이지로 리디렉션
  if (!token && pathname.startsWith('/admin')) {
    const signInUrl = new URL('/auth/signin', req.url)
    signInUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/signin'],
}
