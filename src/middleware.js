import { NextResponse } from 'next/server';
import * as jwt from 'jose';

export async function middleware(request) {
  const token = request.cookies.get('accessToken');
  // const path = request.nextUrl.pathname;

  if (!token) return NextResponse.redirect(new URL('/login', request.url));

  try {
    const { payload } = await jwt.jwtVerify(
      token.value,
      new TextEncoder().encode('CharlesJefersonLimayCabello21')
    );
    console.log(payload);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/');
  }
}

export const config = {
  matcher: ['/profile']
};
