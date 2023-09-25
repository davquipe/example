import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const authTokens = request.cookies.get('authTokens')?.value // get the authTokens cookie

	if (request.nextUrl.pathname.startsWith('/user') && !authTokens) {
		const response = NextResponse.redirect(
			new URL('/auth/session?token=', request.url), // redirect to the auth endpoint
		)
		response.cookies.delete('authTokens') // remove any existing authTokens cookie
		return response
	}
	if (
		authTokens &&
		request.nextUrl.pathname.startsWith('/auth/session?token=')
	) {
		const response = NextResponse.redirect(new URL('/user', request.url)) // redirect to the user endpoint
		return response
	}
}

export const config = {
	matcher: ['/user(.*)', '/auth/session'], // only run middleware for these paths
}
