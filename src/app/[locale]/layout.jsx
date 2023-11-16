import { NextIntlClientProvider, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'
import { Poppins } from 'next/font/google'
import 'styles/global.scss'
import Link from 'next/link'

export const metadata = {
  title: 'Tech Cossacks',
  description: 'Your Trusted Partner for Web Development Excellence',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const locales = ['en', 'ua']

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages()

  if (!locales.includes(locale)) {
    return notFound()
  }

  return (
    <html lang={locale} className={poppins.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
