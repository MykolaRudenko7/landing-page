import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ua'],
  defaultLocale: 'ua',
  localeDetection: false,
  localePrefix: false,
})

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
}
