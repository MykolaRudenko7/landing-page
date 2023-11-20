import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ua'],
  defaultLocale: 'ua',
})

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
}
