import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log(request.url)
  const reqHeaders = new Headers(request.headers)
  reqHeaders.set('x-url', request.url)
  return NextResponse.next({ request: { headers: reqHeaders } })
}

export const config = {
  matcher: '/api/:path*'
}