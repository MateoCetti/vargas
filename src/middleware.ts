import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { importJWK } from 'jose'; 

export async function middleware(request: NextRequest) {
  let response;
  try {
    // get token
    const token = request.cookies.get("Authorization")?.value.replace("Bearer ", "") as string;
    // verify token
    const secretKey = await importJWK(JSON.parse(process.env.JWK_KEY as string));
    const { payload, protectedHeader } = await jwtVerify(token, secretKey);
  } catch (e) {
    // token verification failed
    console.log(e)
     response = NextResponse.redirect(new URL('/login', request.url))
  }
  return response
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}