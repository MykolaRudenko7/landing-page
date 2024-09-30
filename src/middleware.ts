import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'uk'],
  defaultLocale: 'uk',
  localeDetection: true,
})

export const config = {
  matcher: ['/', '/(uk|en)/:path*'],
}
