import { NextResponse, NextRequest } from 'next/server';

let locales = ['en', 'tr']

export default function languageMiddleware(req: NextRequest) {

    const userLanguage = req.headers.get('accept-language');

    let defaultLanguage = 'en';

    if (userLanguage && userLanguage.startsWith('tr')) {
        defaultLanguage = 'tr';
    }

    const { pathname } = req.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        return
    }

    req.nextUrl.pathname = `/${defaultLanguage}${pathname}`
    return NextResponse.redirect(new URL(req.nextUrl))
}

export const config = {
    // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
    // matcher: ['/', '/en', '/tr', "/sample"]
    matcher: ['/']

}
